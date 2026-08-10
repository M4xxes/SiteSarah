import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FlipCard } from "../FlipCard";

describe("FlipCard", () => {
  it("affiche la face avant avec le titre, la catégorie et le prix", () => {
    render(
      <FlipCard category="Massage" title="Séance découverte" price="60€">
        Contenu détaillé
      </FlipCard>,
    );

    const card = screen.getByLabelText("Carte face avant");
    const front = card.querySelector(".flip-card-front") as HTMLElement;

    expect(within(front).getByText("Séance découverte")).toBeInTheDocument();
    expect(within(front).getByText("Massage")).toBeInTheDocument();
    expect(within(front).getByText("60€")).toBeInTheDocument();
  });

  it("retourne la carte au clic sur \"Plus d’info\" et revient au clic sur \"Retour\"", async () => {
    const user = userEvent.setup();
    render(
      <FlipCard title="Séance découverte">
        Contenu détaillé
      </FlipCard>,
    );

    const card = screen.getByLabelText("Carte face avant");
    expect(card.className).not.toContain("flipped");

    await user.click(screen.getByRole("button", { name: "Plus d’info" }));
    expect(screen.getByLabelText("Carte retournée").className).toContain("flipped");

    await user.click(screen.getByRole("button", { name: "Retour" }));
    expect(screen.getByLabelText("Carte face avant").className).not.toContain("flipped");
  });

  it("n’affiche pas de badge ni de prix quand ils ne sont pas fournis", () => {
    render(<FlipCard title="Sans extra">Contenu</FlipCard>);

    expect(screen.queryByText("60€")).not.toBeInTheDocument();
  });
});
