import { Timeline } from "../components/Timeline";

const COMMUNICATION_STEPS = [
  {
    number: 1,
    title: "Préparation",
    text: "Choix de la formule, prise de contact, puis envoi des informations nécessaires et du règlement pour valider la séance.",
  },
  {
    number: 2,
    title: "Connexion",
    text: "J’établis une connexion subtile avec votre animal, à distance, dans le calme et le respect de son rythme.",
  },
  {
    number: 3,
    title: "Présentation",
    text: "Je me présente à lui de votre part et m’assure qu’il est d’accord pour échanger.",
  },
  {
    number: 4,
    title: "Conversation",
    text: "Je commence par des questions simples, puis j’adapte le dialogue selon la prestation choisie et les besoins identifiés.",
  },
  {
    number: 5,
    title: "Séparation",
    text: "Je remercie l’animal, l’informe que je transmettrai le compte rendu à son gardien, puis je lui dis au revoir.",
  },
  {
    number: 6,
    title: "Compte rendu",
    text: "Je prépare et vous transmets le compte rendu de la séance, généralement à l’oral, en reprenant les messages et ressentis principaux.",
  },
];

export function CommunicationPage() {
  return (
    <>
      <section>
        <div className="container section-heading">
          <div className="section-kicker">Communication animale</div>
          <h1 className="section-title">Mieux comprendre votre compagnon</h1>
          <p className="section-intro">
            La communication animale, également appelée communication intuitive, est une façon
            de dialoguer sans utiliser la parole. C’est un échange subtil et silencieux entre l’être
            humain et l’animal, basé sur la perception télépathique.
          </p>
        </div>
      </section>

      <section>
        <div className="container two-column">
          <article className="prose">
            <h2>Définition &amp; fonctionnement</h2>
            <p>
              Le communicant animal utilise différents canaux pour percevoir les messages que
              l’animal souhaite transmettre. Il peut s’agir de ressentis, d’images, de sons, de mots,
              d’odeurs ou simplement d’un « savoir » qui s’impose naturellement.
            </p>
            <p>
              On distingue généralement six formes de transmission&nbsp;: la vue, le ressenti, le goût, le
              savoir, l’odorat et l’ouïe. Ces perceptions permettent de recevoir des informations
              fines et nuancées sur l’état émotionnel, physique ou mental de l’animal.
            </p>

            <h3>Objectifs d’une communication animale</h3>
            <ul>
              <li>Contribuer au bien-être global de l’animal</li>
              <li>Mieux apprendre à le connaître et à le comprendre</li>
              <li>
                Favoriser une relation harmonieuse, de confiance et plus profonde entre l’animal et
                son gardien
              </li>
              <li>Comprendre ses besoins, ses peurs, ses envies</li>
              <li>Lui transmettre un message clair de la part de son gardien</li>
              <li>
                Préparer l’animal à un changement important (déménagement, nouveaux compagnons,
                opération, séparation, départ en vacances…)
              </li>
              <li>Découvrir comment il perçoit son environnement</li>
              <li>Recueillir son avis sur des questions spécifiques (ex&nbsp;: castration ou non)</li>
              <li>L’interroger sur son passé ou sur certains comportements</li>
              <li>
                Comprendre des troubles comportementaux (agressivité, destruction, malpropreté,
                etc.) pour mieux l’accompagner
              </li>
              <li>
                Identifier d’éventuels gênes, douleurs ou inconforts grâce à un état physique général
              </li>
              <li>Accompagner un compagnon en fin de vie</li>
              <li>Communiquer avec un animal perdu ou décédé</li>
            </ul>
          </article>

          <aside className="prose">
            <h2>Éléments nécessaires</h2>
            <p>Pour réaliser une communication animale, j’ai besoin de&nbsp;:</p>
            <ul>
              <li>Une photo de votre animal</li>
              <li>Son nom</li>
              <li>Son âge</li>
              <li>Son sexe</li>
              <li>Le nom de son gardien (propriétaire)</li>
              <li>L’accord de son gardien (propriétaire)</li>
            </ul>
            <p className="note">
              La communication animale ne remplace en aucun cas un diagnostic ou un avis
              vétérinaire, mais vient en complément, en apportant une autre forme d’écoute et de
              compréhension.
            </p>
          </aside>
        </div>
      </section>

      <Timeline title="Déroulé d’une séance" steps={COMMUNICATION_STEPS} />

      <section>
        <div className="container section-heading">
          <div className="section-kicker">Formules</div>
          <h2 className="section-title">Communication animale à distance &amp; concours</h2>
          <p className="section-intro">
            Retrouvez le détail des formules de communication animale (à distance et spécial
            concours) dans l’onglet{" "}
            <a href="/formules">Formules</a>.
          </p>
        </div>
      </section>
    </>
  );
}

