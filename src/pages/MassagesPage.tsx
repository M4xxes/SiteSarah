import { Timeline } from "../components/Timeline";
import imgVignoble from "../../assets/img/massage-vignoble-cheval-blanc.png";
import imgCheminAutomne from "../../assets/img/massage-chemin-automne.png";
import imgPortraitLicol from "../../assets/img/massage-portrait-cheval-licol.png";
import imgMainDos from "../../assets/img/massage-main-dos-cheval.png";
import imgEpauleEcurie from "../../assets/img/massage-epaule-ecurie.png";
import imgCouTechnique from "../../assets/img/massage-cou-technique.png";
import imgMembreAvant from "../../assets/img/massage-membre-avant.png";
import imgSabot from "../../assets/img/massage-sabot-examen.png";
import imgDetendu from "../../assets/img/massage-cheval-detendu.png";

const MASSAGE_STEPS = [
  {
    number: 1,
    title: "Préparation",
    text: "Échange préalable pour comprendre les besoins de votre cheval (âge, activité, antécédents, attentes) et planifier la séance.",
  },
  {
    number: 2,
    title: "Observation",
    text: "Analyse de la posture, de l’attitude générale, des réactions et éventuelles zones de tension apparentes.",
  },
  {
    number: 3,
    title: "Prise de contact",
    text: "Création d’un climat de confiance, en respectant le rythme et l’état émotionnel du cheval.",
  },
  {
    number: 4,
    title: "Évaluation corporelle",
    text: "Par le toucher, repérage des zones de raideur, d’inconfort ou de tension pour adapter le massage.",
  },
  {
    number: 5,
    title: "Massage",
    text: "Mise en œuvre des techniques manuelles douces et respectueuses, en tenant compte des réactions du cheval.",
  },
  {
    number: 6,
    title: "Intégration & recommandations",
    text: "Temps d’intégration, puis échange et recommandations pour accompagner le cheval après la séance.",
  },
];

export function MassagesPage() {
  return (
    <>
      <section className="section-cover section-cover--massages">
        <div className="container section-heading">
          <div className="section-kicker">Massages équins</div>
          <h1 className="section-title">Prendre soin du cheval dans sa globalité</h1>
          <p className="section-intro">
            Le massage équin s’inscrit dans une démarche de bien-être et d’accompagnement du
            cheval au quotidien, en complément du suivi vétérinaire, ostéopathique ou de tout
            autre professionnel de santé.
          </p>
          <p className="section-intro">
            Il vise à relâcher les tensions, favoriser la détente, améliorer la récupération physique
            et soutenir l’équilibre global du cheval, qu’il soit de loisir ou de sport.
          </p>
        </div>
      </section>

      {/* 1. Texte seul — Définition */}
      <section className="massage-editorial">
        <div className="container">
          <article className="prose prose--massages massage-prose-block">
            <h2>1. Définition</h2>
            <p>
              Le massage équin est une pratique de bien-être destinée aux chevaux. Il consiste en
              un ensemble de techniques manuelles douces visant à détendre ou préparer les
              muscles, améliorer la circulation sanguine et favoriser la récupération physique.
            </p>
            <p>
              Il aide à réduire les tensions, le stress et les inconforts liés à l’effort, au travail ou au
              quotidien. Le massage équin contribue également au confort, à la relaxation et au
              bien-être global du cheval, qu’il soit de loisir ou de sport.
            </p>
          </article>
        </div>
      </section>

      {/* Photos après le texte */}
      <section className="massage-editorial massage-editorial--soft">
        <div className="container">
          <div className="massage-photo-row massage-photo-row--3">
            <figure className="massage-photo-card">
              <img src={imgVignoble} alt="Praticienne et cheval blanc dans les vignes" loading="lazy" />
            </figure>
            <figure className="massage-photo-card">
              <img src={imgCheminAutomne} alt="Cheval blanc sur un chemin couvert de feuilles en automne" loading="lazy" />
            </figure>
            <figure className="massage-photo-card massage-photo-card--tall">
              <img src={imgPortraitLicol} alt="Portrait d’un cheval crème portant un licol en cuir" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Photos + texte — Les bienfaits */}
      <section className="massage-editorial">
        <div className="container">
          <div className="massage-split massage-split--media-first">
            <div className="massage-split-stack">
              <figure className="massage-photo-card">
                <img src={imgMainDos} alt="Massage du dos du cheval dans une écurie" loading="lazy" />
              </figure>
              <figure className="massage-photo-card">
                <img src={imgEpauleEcurie} alt="Séance de massage à l’épaule du cheval" loading="lazy" />
              </figure>
            </div>
            <article className="prose prose--massages massage-prose-block">
              <h2>2. Les bienfaits</h2>
              <p>Les bienfaits du massage équin sont nombreux, sur le plan physique comme mental :</p>
              <ul>
                <li>Augmentation des capacités vitales</li>
                <li>Augmentation de la température cutanée et de la vasodilatation</li>
                <li>Drainage et dynamisation du système lymphatique</li>
                <li>Détente et décontraction musculaire</li>
                <li>Stimulation de la circulation sanguine</li>
                <li>Assouplissement des tissus superficiels et profonds</li>
                <li>Amélioration de l’élasticité et de la mobilité des fibres musculaires</li>
                <li>Relâchement psychologique et neurologique</li>
                <li>Gain de souplesse</li>
                <li>Aide à la récupération et à la préparation à l’effort</li>
                <li>Élimination des toxines</li>
                <li>Activation du réseau nerveux</li>
                <li>Favorise la proprioception</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Texte + photos — Quels chevaux */}
      <section className="massage-editorial massage-editorial--soft">
        <div className="container">
          <div className="massage-split massage-split--text-first">
            <article className="prose prose--massages massage-prose-block">
              <h2>3. Quels chevaux et dans quels cas&nbsp;?</h2>
              <p>
                Chaque cheval étant unique, l’accompagnement est toujours adapté à ses besoins
                physiques et émotionnels. Le massage équin s’adresse à tous les profils de chevaux&nbsp;:
              </p>
              <ul>
                <li>Chevaux de sport</li>
                <li>Chevaux de loisir</li>
                <li>Chevaux âgés</li>
                <li>Chevaux en rééducation</li>
                <li>Chevaux stressés ou anxieux</li>
                <li>Chevaux au repos ou en reprise de travail</li>
              </ul>
              <p>Le massage peut être bénéfique dans de nombreuses situations&nbsp;:</p>
              <ul>
                <li>Cheval en croissance</li>
                <li>Raideurs et tensions musculaires</li>
                <li>Baisse de performance</li>
                <li>Avant ou après une compétition</li>
                <li>Stress, anxiété ou changement d’environnement</li>
                <li>Compensation post-soins (ostéopathie, suivi vétérinaire…)</li>
                <li>Prévention des blessures, et bien d’autres situations du quotidien</li>
              </ul>
            </article>
            <div className="massage-split-stack">
              <figure className="massage-photo-card">
                <img src={imgCouTechnique} alt="Technique de massage sur le cou du cheval" loading="lazy" />
              </figure>
              <figure className="massage-photo-card">
                <img src={imgMembreAvant} alt="Travail sur le membre avant du cheval" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau pleine largeur — détente */}
      <section className="massage-editorial">
        <div className="container">
          <figure className="massage-photo-banner massage-photo-banner--detendu">
            <img src={imgDetendu} alt="Cheval marron détendu, œil fermé" loading="lazy" />
          </figure>
        </div>
      </section>

      {/* 4. Texte + photos — Fréquence & contre-indications */}
      <section className="massage-editorial massage-editorial--soft">
        <div className="container">
          <div className="massage-split massage-split--text-first massage-split--align-end">
            <article className="prose prose--massages massage-prose-block">
              <h2>4. Fréquence &amp; contre-indications</h2>
              <p>La fréquence des séances dépend des besoins du cheval et de son activité :</p>
              <ul>
                <li>Entretien&nbsp;: 1 séance tous les 1 à 3 mois</li>
                <li>Cheval de sport&nbsp;: séances plus régulières selon l’intensité du travail</li>
                <li>Cas spécifiques&nbsp;: suivi personnalisé et adapté</li>
              </ul>
              <p>Le massage équin ne sera pas réalisé dans les cas suivants :</p>
              <ul>
                <li>Fièvre</li>
                <li>Blessure ouverte</li>
                <li>Inflammation aiguë</li>
                <li>Maladie en cours</li>
                <li>Post-opératoire récent (sauf avis vétérinaire)</li>
              </ul>
              <p className="note">
                Le massage équin s’inscrit dans une démarche de bien-être et ne remplace en aucun
                cas l’intervention d’un vétérinaire, d’un ostéopathe ou de tout autre professionnel de
                santé.
              </p>
            </article>
            <figure className="massage-photo-card massage-photo-card--accent">
              <img src={imgSabot} alt="Examen du sabot et du membre pendant une séance" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <Timeline title="Déroulé d’une séance" steps={MASSAGE_STEPS} />
    </>
  );
}
