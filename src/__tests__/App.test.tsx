import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "../App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App routing", () => {
  it("affiche la page d’accueil sur /", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { name: "Mon histoire" })).toBeInTheDocument();
  });

  it("affiche la page Massages sur /massages", () => {
    renderAt("/massages");

    expect(
      screen.getByRole("heading", { name: "Prendre soin du cheval dans sa globalité" }),
    ).toBeInTheDocument();
  });

  it("affiche la page Formules sur /formules", () => {
    renderAt("/formules");

    expect(
      screen.getByRole("heading", { name: "Accompagnements sur-mesure" }),
    ).toBeInTheDocument();
  });

  it("navigue vers Communication animale au clic sur le lien de la navbar", async () => {
    const user = userEvent.setup();
    renderAt("/");

    const headerNav = document.querySelector("header nav.nav") as HTMLElement;
    await user.click(within(headerNav).getByRole("link", { name: "Communication animale" }));

    expect(
      await screen.findByRole("heading", { name: "Communication animale à distance & concours" }),
    ).toBeInTheDocument();
  });

  it("ouvre et ferme le menu mobile au clic sur le bouton toggle", async () => {
    const user = userEvent.setup();
    renderAt("/");

    const toggle = screen.getByRole("button", { name: "Ouvrir le menu" });
    await user.click(toggle);

    expect(document.querySelector(".side-menu-toggle")).toHaveAttribute("aria-expanded", "true");
    expect(document.querySelector(".side-menu-panel")).toHaveClass("is-open");
  });
});
