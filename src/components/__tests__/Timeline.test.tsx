import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Timeline } from "../Timeline";

const steps = [
  { number: 1, title: "Prise de contact", text: "Échange sur les besoins du cheval." },
  { number: 2, title: "Séance", text: "Massage adapté au cheval." },
  { number: 3, title: "Suivi", text: "Bilan et conseils." },
];

describe("Timeline", () => {
  it("affiche le titre de la section", () => {
    render(<Timeline title="Déroulement d’une séance" steps={steps} />);

    expect(screen.getByRole("heading", { name: "Déroulement d’une séance" })).toBeInTheDocument();
  });

  it("affiche une étape par entrée fournie, avec son numéro, titre et texte", () => {
    render(<Timeline title="Déroulement" steps={steps} />);

    for (const step of steps) {
      expect(screen.getByText(String(step.number))).toBeInTheDocument();
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.text)).toBeInTheDocument();
    }
  });

  it("n’affiche aucune étape quand la liste est vide", () => {
    render(<Timeline title="Déroulement" steps={[]} />);

    expect(document.querySelectorAll(".timeline-step")).toHaveLength(0);
  });
});
