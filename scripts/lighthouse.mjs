import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { launch } from "chrome-launcher";
import lighthouse from "lighthouse";
import { preview } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const reportsDir = path.join(rootDir, "lighthouse-reports");
const PORT = 4173;

const ROUTES = [
  { name: "accueil", path: "/" },
  { name: "massages", path: "/massages" },
  { name: "communication", path: "/communication" },
  { name: "formules", path: "/formules" },
  { name: "contact", path: "/contact" },
];

const THRESHOLD = 80;

console.log("Build de production (vite build)...");
execSync("npm run build", { cwd: rootDir, stdio: "inherit" });

mkdirSync(reportsDir, { recursive: true });

const server = await preview({
  root: rootDir,
  preview: { port: PORT, strictPort: true },
});
const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, "");

const chrome = await launch({ chromeFlags: ["--headless=new"] });

const results = [];

try {
  for (const route of ROUTES) {
    const url = `${baseUrl}${route.path}`;
    console.log(`Audit Lighthouse : ${url}`);
    const runnerResult = await lighthouse(url, {
      port: chrome.port,
      output: ["json", "html"],
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      logLevel: "error",
    });

    const { categories } = runnerResult.lhr;
    const scores = {
      performance: Math.round(categories.performance.score * 100),
      accessibility: Math.round(categories.accessibility.score * 100),
      "best-practices": Math.round(categories["best-practices"].score * 100),
      seo: Math.round(categories.seo.score * 100),
    };
    results.push({ route: route.name, path: route.path, scores });

    writeFileSync(path.join(reportsDir, `${route.name}.json`), runnerResult.report[0]);
    writeFileSync(path.join(reportsDir, `${route.name}.html`), runnerResult.report[1]);
  }
} finally {
  await chrome.kill();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

const header = ["Page", "Performance", "Accessibilité", "Bonnes pratiques", "SEO"];
const rows = results.map((r) => [
  r.route,
  r.scores.performance,
  r.scores.accessibility,
  r.scores["best-practices"],
  r.scores.seo,
]);

console.log("\nRésultats Lighthouse (seuil de référence : " + THRESHOLD + "/100) :\n");
console.table(
  Object.fromEntries(
    rows.map(([page, perf, a11y, bp, seo]) => [
      page,
      { Performance: perf, Accessibilité: a11y, "Bonnes pratiques": bp, SEO: seo },
    ]),
  ),
);

writeFileSync(
  path.join(reportsDir, "summary.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), threshold: THRESHOLD, results }, null, 2),
);

const failing = results.flatMap((r) =>
  Object.entries(r.scores)
    .filter(([, score]) => score < THRESHOLD)
    .map(([category, score]) => `${r.route} / ${category} : ${score}`),
);

if (failing.length > 0) {
  console.log(`\n⚠️  Sous le seuil de ${THRESHOLD} :`);
  failing.forEach((line) => console.log(`  - ${line}`));
} else {
  console.log(`\nToutes les pages sont au-dessus du seuil de ${THRESHOLD}.`);
}

console.log(`\nRapports détaillés (HTML/JSON) : ${path.relative(rootDir, reportsDir)}/`);
