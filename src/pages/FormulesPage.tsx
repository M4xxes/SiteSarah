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

          <div className="offer-scroller">
            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Massage complet</div>
              <h3 className="offer-title">Détente globale</h3>
              <p className="offer-description">
                Séance complète d’environ 60 minutes pour relâcher les tensions, favoriser la
                détente musculaire et rééquilibrer le corps dans sa globalité.
              </p>
              <div className="offer-meta">
                75&nbsp;€ <span>+ trajet – ~60 min</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Massage ciblé</div>
              <h3 className="offer-title">Zones spécifiques</h3>
              <p className="offer-description">
                Travail sur une ou plusieurs zones au choix&nbsp;: dos, encolure, tête, épaules,
                fessiers, queue, ventre. Idéal pour répondre à un besoin localisé.
              </p>
              <div className="offer-meta">
                35&nbsp;€ <span>+ trajet – ~30 min</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Membres</div>
              <h3 className="offer-title">Massage des membres</h3>
              <p className="offer-description">
                Travail spécifique des membres pour favoriser la mobilité, la circulation et la
                récupération après l’effort ou en phase de rééducation.
              </p>
              <div className="offer-meta">
                40&nbsp;€ <span>+ trajet – ~40 min</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Accompagnements</div>
          <h2 className="section-title">Packs &amp; suivis</h2>
          <div className="offer-scroller" style={{ marginTop: "2rem" }}>
            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Packs</div>
              <h3 className="offer-title">Séances multiples</h3>
              <p className="offer-description">
                Pour un travail régulier et progressif sur le long terme.
              </p>
              <ul className="offer-description">
                <li>Pack 3 séances&nbsp;: 190&nbsp;€ + trajet</li>
                <li>Pack 5 séances&nbsp;: 300&nbsp;€ + trajet</li>
                <li>Pack 10 séances&nbsp;: 580&nbsp;€ + trajet</li>
              </ul>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Suivi</div>
              <h3 className="offer-title">Accompagnement régulier</h3>
              <p className="offer-description">
                Idéal pour un suivi dans le temps, adapté au rythme de votre cheval.
              </p>
              <ul className="offer-description">
                <li>Suivi mensuel&nbsp;: 60&nbsp;€/séance + trajet (engagement minimum d’un an)</li>
                <li>
                  Suivi trimestriel&nbsp;: 70&nbsp;€/séance + trajet (4 séances/an, engagement minimum
                  d’un an)
                </li>
              </ul>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Clubs &amp; structures</div>
              <h3 className="offer-title">Forfaits dédiés</h3>
              <p className="offer-description">
                Pour les structures souhaitant proposer un accompagnement bien-être à leurs
                chevaux ou poneys.
              </p>
              <ul className="offer-description">
                <li>Forfait club&nbsp;: 35&nbsp;€ + trajet (déplacement pour 3 chevaux/poneys)</li>
                <li>Senior – 3 séances&nbsp;: 180&nbsp;€ + trajet (séances à l’unité possibles)</li>
                <li>Junior – 3 séances&nbsp;: 105&nbsp;€ + trajet (séances à l’unité possibles)</li>
              </ul>
            </article>
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

          <div className="offer-scroller">
            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Avant épreuve</div>
              <h3 className="offer-title">Préparation</h3>
              <p className="offer-description">
                Séance de préparation avant l’épreuve pour mettre le cheval dans les meilleures
                dispositions physiques.
              </p>
              <div className="offer-meta">
                40&nbsp;€ <span>+ trajet – ~20 min</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Après épreuve</div>
              <h3 className="offer-title">Récupération</h3>
              <p className="offer-description">
                Séance de récupération après l’effort pour favoriser la détente, la circulation et la
                récupération musculaire.
              </p>
              <div className="offer-meta">
                40&nbsp;€ <span>+ trajet – ~20 min</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Pack</div>
              <h3 className="offer-title">Préparation + récupération</h3>
              <p className="offer-description">
                Accompagnement complet du cheval avant et après l’épreuve, pour un suivi optimal
                tout au long de la journée.
              </p>
              <div className="offer-meta">
                65&nbsp;€ <span>+ trajet</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Communication animale</div>
          <h2 className="section-title">Formules à distance</h2>
          <p className="section-intro" style={{ marginBottom: "2rem" }}>
            Les communications se font à distance, à partir d’une photo et des informations que
            vous me transmettez. Le compte rendu est réalisé à l’oral.
          </p>

          <div className="offer-scroller">
            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Message</div>
              <h3 className="offer-title">Communication message</h3>
              <p className="offer-description">
                Transmission d’un message de la part du gardien et réponse de votre animal. Compte
                rendu oral.
              </p>
              <div className="offer-meta">20&nbsp;€</div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">État physique</div>
              <h3 className="offer-title">État physique général</h3>
              <p className="offer-description">
                Bilan sur l’état physique général de votre animal via la communication animale.
                Compte rendu oral.
              </p>
              <div className="offer-meta">10&nbsp;€</div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Fin de vie</div>
              <h3 className="offer-title">Accompagnement fin de vie</h3>
              <p className="offer-description">
                Échange autour des désirs de l’animal, de 3 questions et d’un message du gardien,
                avec un état physique général. Compte rendu oral.
              </p>
              <div className="offer-meta">45&nbsp;€</div>
            </article>
          </div>

          <div className="offer-scroller" style={{ marginTop: "1.5rem" }}>
            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Questions</div>
              <h3 className="offer-title">Communication 3 questions</h3>
              <p className="offer-description">
                Un message du gardien et 3 questions. Possibilité d’ajouter un état physique
                général&nbsp;: +5&nbsp;€.
              </p>
              <div className="offer-meta">
                40&nbsp;€ <span>+ 5&nbsp;€ option état physique</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Questions</div>
              <h3 className="offer-title">Communication 5 questions</h3>
              <p className="offer-description">
                Un message du gardien et 5 questions. Possibilité d’ajouter un état physique
                général&nbsp;: +5&nbsp;€.
              </p>
              <div className="offer-meta">
                50&nbsp;€ <span>+ 5&nbsp;€ option état physique</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Complète</div>
              <h3 className="offer-title">Communication complète</h3>
              <p className="offer-description">
                Un message du gardien, échange sur l’état général, le comportement, l’environnement,
                l’alimentation et la santé, 6 questions particulières, plus un état physique général.
                Compte rendu oral.
              </p>
              <div className="offer-meta">65&nbsp;€</div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Communication &amp; concours</div>
          <h2 className="section-title">Formules concours – communication animale</h2>
          <p className="section-intro" style={{ marginBottom: "2rem" }}>
            Ces formules sont réalisées principalement à distance (sauf présence sur place) et
            permettent d’accompagner votre cheval sur le plan émotionnel lors des concours.
          </p>

          <div className="offer-scroller">
            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Avant épreuve</div>
              <h3 className="offer-title">Communication avant épreuve</h3>
              <p className="offer-description">
                2 questions, un message du gardien et un échange avec l’animal sur son état
                émotionnel, son ressenti et ses éventuelles appréhensions. Compte rendu oral
                immédiat. Option état physique général&nbsp;: +5&nbsp;€.
              </p>
              <div className="offer-meta">
                25&nbsp;€ <span>+ 5&nbsp;€ option état physique</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Après épreuve</div>
              <h3 className="offer-title">Communication après épreuve</h3>
              <p className="offer-description">
                2 questions, un message du gardien et un échange avec l’animal sur son ressenti
                après l’épreuve. Compte rendu oral immédiat. Option état physique général&nbsp;:
                +5&nbsp;€.
              </p>
              <div className="offer-meta">
                25&nbsp;€ <span>+ 5&nbsp;€ option état physique</span>
              </div>
            </article>

            <article className="offer-card offer-card--scroll">
              <div className="offer-category">Pack concours</div>
              <h3 className="offer-title">Avant &amp; après épreuve</h3>
              <p className="offer-description">
                Communication avant et après l’épreuve pour suivre l’animal tout au long du
                concours. Option état physique général&nbsp;: +10&nbsp;€.
              </p>
              <div className="offer-meta">
                40&nbsp;€ <span>+ 10&nbsp;€ option état physique</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Déroulé d’une séance</div>
          <h2 className="section-title">Étapes d’une communication animale</h2>
          <p className="section-intro">
            Comme sur la page de communication, voici les grandes étapes d’une séance de
            communication animale, pour que vous sachiez exactement comment cela se déroule.
          </p>

          <div className="steps" style={{ marginTop: "2rem" }}>
            <div className="step-card">
              <div className="step-number">01 • Préparation</div>
              <div className="step-body">
                Choix de la formule, prise de contact, puis envoi des informations nécessaires
                (photo, âge, nom...) et du règlement pour valider la séance.
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">02 • Connexion</div>
              <div className="step-body">
                Je me connecte à votre animal à distance, dans un moment de calme, en respectant
                son rythme et sa disponibilité.
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">03 • Présentation</div>
              <div className="step-body">
                Je me présente à lui de votre part et lui demande s’il est d’accord pour échanger.
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">04 • Conversation</div>
              <div className="step-body">
                Je commence par des questions simples, puis j’aborde vos demandes (questions,
                message, état physique…) selon la formule choisie.
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">05 • Séparation</div>
              <div className="step-body">
                Je remercie l’animal, l’informe que je transmettrai le compte rendu à son gardien,
                puis je lui dis au revoir.
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">06 • Compte rendu</div>
              <div className="step-body">
                Je vous transmets le compte rendu, en général à l’oral, en reprenant les messages,
                ressentis et informations reçues pendant l’échange.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

