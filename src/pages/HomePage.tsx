import { Link } from "react-router-dom";
import { Timeline } from "../components/Timeline";
import galleryGoldenPortrait from "../../assets/img/gallery-5-golden-portrait.png";
import galleryHorsePortrait from "../../assets/img/gallery-1-horse-portrait.png";

const SESSION_STEPS = [
  {
    number: 1,
    title: "Préparation",
    text: "Choisissez la formule qui vous convient, contactez-moi pour planifier votre séance, puis procédez au règlement et à l’envoi des informations nécessaires.",
  },
  {
    number: 2,
    title: "Connexion",
    text: "C’est le moment où j’établis une connexion avec votre animal, à distance, dans le calme et le respect de son rythme.",
  },
  {
    number: 3,
    title: "Présentation",
    text: "Je me présente à votre compagnon de votre part et lui demande s’il est d’accord pour échanger.",
  },
  {
    number: 4,
    title: "Conversation",
    text: "Je commence par des questions simples comme « Comment vas-tu ? » ou « Es-tu heureux ? », puis j’adapte le dialogue selon la prestation choisie.",
  },
  {
    number: 5,
    title: "Instant de séparation",
    text: "Je le remercie, lui dis que je transmettrai les informations à son gardien, puis lui dis au revoir.",
  },
  {
    number: 6,
    title: "Compte rendu",
    text: "Je prépare et vous transmets le compte rendu de la séance, généralement à l’oral, en reprenant les messages et ressentis principaux.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-kicker">
                Massage équin &amp; communication animale
              </div>
              <h1 className="hero-title">
                Offrir au cheval un moment de confort, d’écoute et de sérénité
              </h1>
              <p className="hero-subtitle">
                Interventions en région lyonnaise et ses alentours, auprès des particuliers comme
                des professionnels, pour accompagner le cheval dans sa globalité, sur le plan
                physique et émotionnel.
              </p>
              {/* <div className="hero-actions">
                <Link to="/massages" className="btn btn-primary">
                  Massages équins
                </Link>
                <Link to="/communication" className="btn btn-outline">
                  Communication animale
                </Link>
                <Link to="/formules" className="btn btn-outline">
                  Formules &amp; tarifs
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Me contacter
                </Link>
              </div> */}
            </div>
            <aside className="hero-panel">
              <div className="hero-panel-title">À propos</div>
              <div className="hero-panel-text">
                Je m’appelle Sarah, passionnée par les chevaux depuis toujours. Je pratique
                l’équitation classique depuis l’âge de 3 ans et je suis aujourd’hui propriétaire de
                mon cheval depuis 9 ans. C’est à ses côtés que mon chemin s’est naturellement
                orienté vers le bien-être équin, avec une envie profonde&nbsp;: lui apporter confort,
                écoute et sérénité, autant sur le plan physique que mental.
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-presentation">
        <div className="container">
          <div className="section-heading">
            <div className="section-kicker">Présentation</div>
            <h2 className="section-title">Mon histoire</h2>
          </div>
          <div className="prose prose--spaced prose--centered">
            <p>
              Après un parcours scolaire classique et des études en architecture d’intérieur, j’ai
              longtemps gardé les animaux comme une passion personnelle. Pourtant, malgré mon
              attachement à ce domaine, un sentiment de manque s’est progressivement installé.
              Le besoin de revenir à l’essentiel, aux chevaux, s’est alors imposé comme une
              évidence.
            </p>
            <p>
              Je me suis formée en tant qu’intervenante en bien-être équin, spécialisée en
              massage équin, afin d’accompagner les chevaux dans leur globalité, en respectant
              leur corps, leurs émotions et leur rythme. Le massage équin est au cœur de mon
              activité&nbsp;: il vise à apporter du bien-être, à relâcher les tensions, à favoriser la
              détente et à prendre soin du cheval.
            </p>
            <p>
              En parallèle, je propose également des séances de communication animale. Cette
              pratique peut faire l’objet d’une prestation à part entière, pour les propriétaires qui
              en ressentent le besoin, mais peut aussi être intégrée en complément d’un massage
              équin, uniquement sur demande. La communication animale permet d’apporter une
              écoute différente et plus subtile de l’animal, et vient enrichir l’accompagnement
              lorsque cela est pertinent.
            </p>
            <p>
              C’est ainsi qu’est née <strong>ANIMARAH</strong>, une entreprise dédiée au bien-être animal,
              avec une approche respectueuse, douce et bienveillante.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading" style={{ textAlign: "left" }}>
            <div className="section-kicker">Mes engagements</div>
            <h2 className="section-title">Mes valeurs &amp; mon approche</h2>
            <p
              className="section-intro"
              style={{ marginLeft: 0, marginRight: 0, textAlign: "left" }}
            >
              Chaque rencontre avec un cheval est unique. J’accorde une attention particulière à
              son rythme, à son histoire et à ce qu’il souhaite exprimer, dans le respect de son
              corps et de ses émotions.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-kicker">🌿 Respect &amp; écoute</div>
              <div className="value-body">
                Chaque séance est réalisée dans le respect du cheval, en étant attentive à ses
                réactions, ses besoins et ses limites, afin de lui offrir un moment de bien-être en
                toute confiance.
              </div>
            </div>
            <div className="value-card">
              <div className="value-kicker">🌿 Calme &amp; délicatesse</div>
              <div className="value-body">
                Je prends le temps nécessaire pour que le cheval se détende, en privilégiant des
                gestes lents et mesurés, adaptés à son rythme et à sa sensibilité.
              </div>
            </div>
            <div className="value-card">
              <div className="value-kicker">🌿 Adaptation</div>
              <div className="value-body">
                Aucune séance n’est identique&nbsp;: j’adapte mon travail à chaque cheval, à son état
                physique, émotionnel et à ses besoins.
              </div>
            </div>
          </div>
          <div className="section-cta" style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link to="/contact" className="btn btn-primary">Me contacter</Link>
          </div>
        </div>
      </section>

      <section className="section-photo-strip">
        <div className="container">
          <div className="photo-strip-grid">
            <figure className="photo-strip-item">
              <img
                className="photo-strip-img--contain"
                src={galleryGoldenPortrait}
                alt="Golden retriever en portrait"
                loading="lazy"
              />
            </figure>
            <figure className="photo-strip-item">
              <img src={galleryHorsePortrait} alt="Portrait de cheval blanc" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
