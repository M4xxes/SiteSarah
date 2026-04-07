import { ReactNode, useState } from "react";
import { FlipCard } from "../components/FlipCard";
import galleryHorsePortrait from "../../assets/img/gallery-1-horse-portrait.png";
import galleryHorseRider from "../../assets/img/gallery-2-horse-rider.png";
import gallerySnowDog from "../../assets/img/gallery-3-snow-dog.png";
import galleryJumpingHorse from "../../assets/img/gallery-4-jumping-horse.png";
import galleryGoldenPortrait from "../../assets/img/gallery-5-golden-portrait.png";
import galleryPonyRider from "../../assets/img/gallery-6-pony-rider.png";
import galleryHeatherDog from "../../assets/img/gallery-7-heather-dog.png";
import galleryYorkshireBridge from "../../assets/img/gallery-8-yorkshire-bridge.png";
import formulesMassageDetente from "../../assets/img/formules-massage-detente.png";
import formulesMassageZones from "../../assets/img/formules-massage-zones.png";
import formulesMassageMembres from "../../assets/img/formules-massage-membres.png";
import contestTete from "../../assets/img/formules-concours-tete.png";
import contestSabot from "../../assets/img/formules-concours-sabot.png";
import contestEpaule from "../../assets/img/formules-concours-epaule.png";
import formulesCommConcoursAvant from "../../assets/img/formules-comm-concours-avant.png";
import formulesCommConcoursApres from "../../assets/img/formules-comm-concours-apres.png";
import formulesCommConcoursPack from "../../assets/img/formules-comm-concours-pack.png";

type OfferCard = {
  category: string;
  title: string;
  price: ReactNode;
  content: ReactNode;
  backgroundImage: string;
};

export function FormulesPage() {
  const massageCards: OfferCard[] = [
    {
      category: "Massage complet",
      title: "Détente globale",
      price: (
        <>
          {75}&nbsp;€ <span>+ trajet – ~60 min</span>
        </>
      ),
      content: (
        <p>
          Séance complète d’environ 60 minutes pour relâcher les tensions, favoriser la détente
          musculaire et rééquilibrer le corps dans sa globalité.
        </p>
      ),
      backgroundImage: formulesMassageDetente,
    },
    {
      category: "Massage ciblé",
      title: "Zones spécifiques",
      price: (
        <>
          {35}&nbsp;€ <span>+ trajet – ~30 min</span>
        </>
      ),
      content: (
        <p>
          Travail sur une ou plusieurs zones au choix&nbsp;: dos, encolure, tête, épaules, fessiers,
          queue, ventre. Idéal pour répondre à un besoin localisé.
        </p>
      ),
      backgroundImage: formulesMassageZones,
    },
    {
      category: "Membres",
      title: "Massage des membres",
      price: (
        <>
          {40}&nbsp;€ <span>+ trajet – ~40 min</span>
        </>
      ),
      content: (
        <p>
          Travail spécifique des membres pour favoriser la mobilité, la circulation et la
          récupération après l’effort ou en phase de rééducation.
        </p>
      ),
      backgroundImage: formulesMassageMembres,
    },
  ];

  const followupCards: OfferCard[] = [
    {
      category: "Packs",
      title: "Séances multiples",
      price: <><span>+ trajet</span></>,
      content: (
        <>
          <p>Pour un travail régulier et progressif sur le long terme.</p>
          <ul>
            <li>Pack 3 séances&nbsp;: 190&nbsp;€ + trajet</li>
            <li>Pack 5 séances&nbsp;: 300&nbsp;€ + trajet</li>
            <li>Pack 10 séances&nbsp;: 580&nbsp;€ + trajet</li>
          </ul>
        </>
      ),
      backgroundImage: galleryGoldenPortrait,
    },
    {
      category: "Suivi",
      title: "Accompagnement régulier",
      price: <><span>+ trajet</span></>,
      content: (
        <>
          <p>Idéal pour un suivi dans le temps, adapté au rythme de votre cheval.</p>
          <ul>
            <li>Suivi mensuel&nbsp;: 60&nbsp;€/séance + trajet (engagement minimum d’un an)</li>
            <li>
              Suivi trimestriel&nbsp;: 70&nbsp;€/séance + trajet (4 séances/an, engagement minimum
              d’un an)
            </li>
          </ul>
        </>
      ),
      backgroundImage: galleryHeatherDog,
    },
    {
      category: "Clubs & structures",
      title: "Forfaits dédiés",
      price: <><span>selon formule</span></>,
      content: (
        <ul>
          <li>Forfait club&nbsp;: 35&nbsp;€ + trajet (déplacement pour 3 chevaux/poneys)</li>
          <li>Senior – 3 séances&nbsp;: 180&nbsp;€ + trajet (séances à l’unité possibles)</li>
          <li>Junior – 3 séances&nbsp;: 105&nbsp;€ + trajet (séances à l’unité possibles)</li>
        </ul>
      ),
      backgroundImage: galleryYorkshireBridge,
    },
  ];

  const contestCards: OfferCard[] = [
    {
      category: "Avant épreuve",
      title: "Préparation",
      price: (
        <>
          {40}&nbsp;€ <span>+ trajet – ~20 min</span>
        </>
      ),
      content: (
        <p>
          Séance de préparation avant l’épreuve pour mettre le cheval dans les meilleures
          dispositions physiques.
        </p>
      ),
      backgroundImage: contestTete,
    },
    {
      category: "Après épreuve",
      title: "Récupération",
      price: (
        <>
          {40}&nbsp;€ <span>+ trajet – ~20 min</span>
        </>
      ),
      content: (
        <p>
          Séance de récupération après l’effort pour favoriser la détente, la circulation et la
          récupération musculaire.
        </p>
      ),
      backgroundImage: contestSabot,
    },
    {
      category: "Pack",
      title: "Préparation + récupération",
      price: (
        <>
          {65}&nbsp;€ <span>+ trajet</span>
        </>
      ),
      content: (
        <p>
          Accompagnement complet du cheval avant et après l’épreuve, pour un suivi optimal tout
          au long de la journée.
        </p>
      ),
      backgroundImage: contestEpaule,
    },
  ];

  const communicationCards: OfferCard[] = [
    {
      category: "Message",
      title: "Communication message",
      price: <>20&nbsp;€</>,
      content: (
        <p>
          Transmission d’un message de la part du gardien et réponse de votre animal. Compte
          rendu oral.
        </p>
      ),
      backgroundImage: gallerySnowDog,
    },
    {
      category: "État physique",
      title: "État physique général",
      price: <>10&nbsp;€</>,
      content: (
        <p>
          Bilan sur l’état physique général de votre animal via la communication animale. Compte
          rendu oral.
        </p>
      ),
      backgroundImage: galleryGoldenPortrait,
    },
    {
      category: "Fin de vie",
      title: "Accompagnement fin de vie",
      price: <>45&nbsp;€</>,
      content: (
        <p>
          Échange autour des désirs de l’animal, de 3 questions et d’un message du gardien, avec
          un état physique général. Compte rendu oral.
        </p>
      ),
      backgroundImage: galleryHeatherDog,
    },
    {
      category: "Questions",
      title: "Communication 3 questions",
      price: (
        <>
          {40}&nbsp;€ <span>+ 5&nbsp;€ option état physique</span>
        </>
      ),
      content: (
        <p>
          Un message du gardien et 3 questions. Possibilité d’ajouter un état physique
          général&nbsp;: +5&nbsp;€.
        </p>
      ),
      backgroundImage: galleryYorkshireBridge,
    },
    {
      category: "Questions",
      title: "Communication 5 questions",
      price: (
        <>
          {50}&nbsp;€ <span>+ 5&nbsp;€ option état physique</span>
        </>
      ),
      content: (
        <p>
          Un message du gardien et 5 questions. Possibilité d’ajouter un état physique
          général&nbsp;: +5&nbsp;€.
        </p>
      ),
      backgroundImage: galleryPonyRider,
    },
    {
      category: "Complète",
      title: "Communication complète",
      price: <>65&nbsp;€</>,
      content: (
        <p>
          Un message du gardien, échange sur l’état général, le comportement, l’environnement,
          l’alimentation et la santé, 6 questions particulières, plus un état physique général. Compte
          rendu oral.
        </p>
      ),
      backgroundImage: galleryHorseRider,
    },
    {
      category: "Communication concours",
      title: "Avant épreuve",
      price: <>25&nbsp;€</>,
      content: (
        <ul>
          <li>À distance sauf si présente sur le concours</li>
          <li>2 questions + un message du gardien</li>
          <li>
            Un échange avec l’animal sur son état émotionnel, son ressenti, ses appréhensions
          </li>
          <li>Compte rendu oral immédiat</li>
          <li>Possibilité d’ajouter un état physique général&nbsp;: +5&nbsp;€</li>
        </ul>
      ),
      backgroundImage: formulesCommConcoursAvant,
    },
    {
      category: "Communication concours",
      title: "Après épreuve",
      price: <>25&nbsp;€</>,
      content: (
        <ul>
          <li>À distance sauf si présente sur le concours</li>
          <li>2 questions + un message du gardien</li>
          <li>
            Un échange avec l’animal sur son état émotionnel, son ressenti, ses impressions
          </li>
          <li>Compte rendu oral immédiat</li>
          <li>Possibilité d’ajouter un état physique général&nbsp;: +5&nbsp;€</li>
        </ul>
      ),
      backgroundImage: formulesCommConcoursApres,
    },
    {
      category: "Communication concours",
      title: "Pack concours",
      price: <>40&nbsp;€</>,
      content: (
        <ul>
          <li>À distance sauf si présente sur le concours</li>
          <li>Communication avant et après épreuve</li>
          <li>Possibilité d’ajouter un état physique général&nbsp;: +10&nbsp;€</li>
        </ul>
      ),
      backgroundImage: formulesCommConcoursPack,
    },
  ];

  const [massageIndex, setMassageIndex] = useState(0);
  const [followupIndex, setFollowupIndex] = useState(0);
  const [contestIndex, setContestIndex] = useState(0);
  const [communicationIndex, setCommunicationIndex] = useState(0);

  const renderCardCarousel = (
    cards: OfferCard[],
    currentIndex: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    keyPrefix: string,
  ) => {
    const currentCard = cards[currentIndex];
    const previousCard = cards[(currentIndex - 1 + cards.length) % cards.length];
    const nextCard = cards[(currentIndex + 1) % cards.length];

    return (
      <>
        <div className="flip-section-carousel">
          <button
            type="button"
            className="flip-section-arrow"
            onClick={() => setIndex((current) => (current - 1 + cards.length) % cards.length)}
            aria-label="Carte précédente"
          >
            <svg
              className="flip-section-arrow-icon"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Arrow pointing to the left"
            >
              <title>Arrow pointing to the left</title>
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>
          </button>
          <div className="flip-section-stage">
            <div className="flip-section-stack-preview flip-section-stack-preview--left">
              {previousCard.title}
            </div>
            <FlipCard
              key={`${keyPrefix}-${currentCard.title}-${currentIndex}`}
              category={currentCard.category}
              title={currentCard.title}
              price={currentCard.price}
              backgroundImage={currentCard.backgroundImage}
            >
              {currentCard.content}
            </FlipCard>
            <div className="flip-section-stack-preview flip-section-stack-preview--right">
              {nextCard.title}
            </div>
          </div>
          <button
            type="button"
            className="flip-section-arrow"
            onClick={() => setIndex((current) => (current + 1) % cards.length)}
            aria-label="Carte suivante"
          >
            <svg
              className="flip-section-arrow-icon"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Arrow pointing to the right"
            >
              <title>Arrow pointing to the right</title>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </button>
        </div>
        <div className="flip-section-counter" aria-live="polite">
          {currentIndex + 1} / {cards.length}
        </div>
      </>
    );
  };

  return (
    <>
      <section className="section-cover section-cover--formules">
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

          {renderCardCarousel(massageCards, massageIndex, setMassageIndex, "massage")}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-kicker">Accompagnements</div>
          <h2 className="section-title">Packs &amp; suivis</h2>
          <div style={{ marginTop: "2rem" }}>
            {renderCardCarousel(followupCards, followupIndex, setFollowupIndex, "followup")}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-media-head section-media-head--no-image">
            <div>
              <div className="section-kicker">Concours</div>
              <h2 className="section-title">Accompagnement en concours</h2>
              <p className="section-intro section-intro--left" style={{ marginBottom: "2rem" }}>
                En concours, le massage s’inscrit comme un accompagnement physique, en
                préparation à l’effort puis en phase de récupération, pour soutenir le bien-être et le
                confort du cheval.
              </p>
            </div>
          </div>

          {renderCardCarousel(contestCards, contestIndex, setContestIndex, "contest")}

        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-media-head section-media-head--no-image">
            <div>
              <div className="section-kicker">Communication animale</div>
              <h2 className="section-title">Formules à distance</h2>
              <p className="section-intro section-intro--left" style={{ marginBottom: "2rem" }}>
                Les communications se font à distance, à partir d’une photo et des informations que
                vous me transmettez. Le compte rendu est réalisé à l’oral. Toutes les formules ci-dessous
                sont regroupées dans cette offre.
              </p>
            </div>
          </div>

          {renderCardCarousel(
            communicationCards,
            communicationIndex,
            setCommunicationIndex,
            "communication",
          )}
        </div>
      </section>
    </>
  );
}
