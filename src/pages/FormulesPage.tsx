import { FlipCard } from "../components/FlipCard";

export function FormulesPage() {
  return (
    <>
      <section>
        <div className="container section-heading">
          <div className="section-kicker">Formules &amp; tarifs</div>
          <h1 className="section-title">Accompagnements sur-mesure</h1>
          <p className="section-intro">
            Chaque séance est adaptée au cheval en fonction de son âge, de son activité, de ses
            antécédents et de ses besoins. Les prestations ci-dessous peuvent être combinées ou
            ajustées selon votre situation.
          </p>
          <p className="section-intro">
            Les frais de déplacement sont à ajouter et peuvent être répartis entre plusieurs chevaux
            lorsqu’une intervention est réalisée sur un même lieu.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Massages</div>
          <h2 className="section-title">Massages à la carte</h2>
          <p className="section-intro" style={{ marginBottom: "2rem" }}>
            Si la prestation souhaitée n’apparaît pas dans la liste, n’hésitez pas à me contacter
            afin d’établir un devis personnalisé.
          </p>

          <div className="flip-cards">
            <FlipCard
              category="Massage complet"
              title="Détente globale"
              price={<>{75}&nbsp;€ <span>+ trajet – ~60 min</span></>}
            >
              <p>
                Séance complète d’environ 60 minutes pour relâcher les tensions, favoriser la
                détente musculaire et rééquilibrer le corps dans sa globalité.
              </p>
            </FlipCard>
            <FlipCard
              category="Massage ciblé"
              title="Zones spécifiques"
              price={<>{35}&nbsp;€ <span>+ trajet – ~30 min</span></>}
            >
              <p>
                Travail sur une ou plusieurs zones au choix&nbsp;: dos, encolure, tête, épaules,
                fessiers, queue, ventre. Idéal pour répondre à un besoin localisé.
              </p>
            </FlipCard>
            <FlipCard
              category="Membres"
              title="Massage des membres"
              price={<>{40}&nbsp;€ <span>+ trajet – ~40 min</span></>}
            >
              <p>
                Travail spécifique des membres pour favoriser la mobilité, la circulation et la
                récupération après l’effort ou en phase de rééducation.
              </p>
            </FlipCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Accompagnements</div>
          <h2 className="section-title">Packs &amp; suivis</h2>
          <div className="flip-cards" style={{ marginTop: "2rem" }}>
            <FlipCard
              category="Packs"
              title="Séances multiples"
              price={<><span>+ trajet</span></>}
            >
              <p>Pour un travail régulier et progressif sur le long terme.</p>
              <ul>
                <li>Pack 3 séances&nbsp;: 190&nbsp;€ + trajet</li>
                <li>Pack 5 séances&nbsp;: 300&nbsp;€ + trajet</li>
                <li>Pack 10 séances&nbsp;: 580&nbsp;€ + trajet</li>
              </ul>
            </FlipCard>
            <FlipCard
              category="Suivi"
              title="Accompagnement régulier"
              price={<><span>+ trajet</span></>}
            >
              <p>Idéal pour un suivi dans le temps, adapté au rythme de votre cheval.</p>
              <ul>
                <li>Suivi mensuel&nbsp;: 60&nbsp;€/séance + trajet (engagement minimum d’un an)</li>
                <li>
                  Suivi trimestriel&nbsp;: 70&nbsp;€/séance + trajet (4 séances/an, engagement minimum d’un an)
                </li>
              </ul>
            </FlipCard>
            <FlipCard
              category="Clubs &amp; structures"
              title="Forfaits dédiés"
              price={<><span>selon formule</span></>}
            >
              <ul>
                <li>Forfait club&nbsp;: 35&nbsp;€ + trajet (déplacement pour 3 chevaux/poneys)</li>
                <li>Senior – 3 séances&nbsp;: 180&nbsp;€ + trajet (séances à l’unité possibles)</li>
                <li>Junior – 3 séances&nbsp;: 105&nbsp;€ + trajet (séances à l’unité possibles)</li>
              </ul>
            </FlipCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Concours</div>
          <h2 className="section-title">Accompagnement en concours</h2>
          <p className="section-intro" style={{ marginBottom: "2rem" }}>
            En concours, le massage s’inscrit comme un accompagnement physique, en
            préparation à l’effort puis en phase de récupération, pour soutenir le bien-être et le
            confort du cheval.
          </p>

          <div className="flip-cards">
            <FlipCard
              category="Avant épreuve"
              title="Préparation"
              price={<>{40}&nbsp;€ <span>+ trajet – ~20 min</span></>}
            >
              <p>
                Séance de préparation avant l’épreuve pour mettre le cheval dans les meilleures
                dispositions physiques.
              </p>
            </FlipCard>
            <FlipCard
              category="Après épreuve"
              title="Récupération"
              price={<>{40}&nbsp;€ <span>+ trajet – ~20 min</span></>}
            >
              <p>
                Séance de récupération après l’effort pour favoriser la détente, la circulation et la
                récupération musculaire.
              </p>
            </FlipCard>
            <FlipCard
              category="Pack"
              title="Préparation + récupération"
              price={<>{65}&nbsp;€ <span>+ trajet</span></>}
            >
              <p>
                Accompagnement complet du cheval avant et après l’épreuve, pour un suivi optimal
                tout au long de la journée.
              </p>
            </FlipCard>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Communication animale</div>
          <h2 className="section-title">Formules à distance</h2>
          <p className="section-intro" style={{ marginBottom: "2rem" }}>
            Les communications se font à distance, à partir d’une photo et des informations que
            vous me transmettez. Le compte rendu est réalisé à l’oral. Toutes les formules ci-dessous
            sont regroupées dans cette offre.
          </p>

          <div className="flip-cards">
            <FlipCard
              category="Message"
              title="Communication message"
              price={<>20&nbsp;€</>}
            >
              <p>
                Transmission d’un message de la part du gardien et réponse de votre animal. Compte
                rendu oral.
              </p>
            </FlipCard>
            <FlipCard
              category="État physique"
              title="État physique général"
              price={<>10&nbsp;€</>}
            >
              <p>
                Bilan sur l’état physique général de votre animal via la communication animale.
                Compte rendu oral.
              </p>
            </FlipCard>
            <FlipCard
              category="Fin de vie"
              title="Accompagnement fin de vie"
              price={<>45&nbsp;€</>}
            >
              <p>
                Échange autour des désirs de l’animal, de 3 questions et d’un message du gardien,
                avec un état physique général. Compte rendu oral.
              </p>
            </FlipCard>
            <FlipCard
              category="Questions"
              title="Communication 3 questions"
              price={<>{40}&nbsp;€ <span>+ 5&nbsp;€ option état physique</span></>}
            >
              <p>
                Un message du gardien et 3 questions. Possibilité d’ajouter un état physique
                général&nbsp;: +5&nbsp;€.
              </p>
            </FlipCard>
            <FlipCard
              category="Questions"
              title="Communication 5 questions"
              price={<>{50}&nbsp;€ <span>+ 5&nbsp;€ option état physique</span></>}
            >
              <p>
                Un message du gardien et 5 questions. Possibilité d’ajouter un état physique
                général&nbsp;: +5&nbsp;€.
              </p>
            </FlipCard>
            <FlipCard
              category="Complète"
              title="Communication complète"
              price={<>65&nbsp;€</>}
            >
              <p>
                Un message du gardien, échange sur l’état général, le comportement, l’environnement,
                l’alimentation et la santé, 6 questions particulières, plus un état physique général.
                Compte rendu oral.
              </p>
            </FlipCard>
          </div>
        </div>
      </section>
    </>
  );
}
