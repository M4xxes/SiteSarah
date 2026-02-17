import { Timeline } from "../components/Timeline";

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
      <section>
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

      <Timeline title="Déroulé d’une séance" steps={MASSAGE_STEPS} />

      <section>
        <div className="container two-column">
          <article className="prose">
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

            <h3>2. Les bienfaits</h3>
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

            <h3>3. Quels chevaux et dans quels cas&nbsp;?</h3>
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

          <aside className="prose">
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
          </aside>
        </div>
      </section>

      <section>
        <div className="container section-heading">
          <div className="section-kicker">Formules dédiées aux massages</div>
          <h2 className="section-title">Massages à la carte et accompagnements</h2>
          <p className="section-intro">
            Chaque séance est adaptée au cheval en fonction de son âge, de son activité, de ses
            antécédents et de ses besoins. Retrouvez le détail des formules dans l’onglet{" "}
            <a href="/formules">Formules</a>.
          </p>
        </div>
      </section>
    </>
  );
}

