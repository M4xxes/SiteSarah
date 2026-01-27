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
              <div className="hero-actions">
                <a href="/massages" className="btn btn-primary">
                  Massages équins
                </a>
                <a href="/communication" className="btn btn-outline">
                  Communication animale
                </a>
                <a href="/formules" className="btn btn-outline">
                  Formules &amp; tarifs
                </a>
              </div>
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

      <section>
        <div className="container two-column">
          <article className="prose">
            <h2>Mon histoire</h2>
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
          </article>
          <aside>
            <div className="section-heading" style={{ textAlign: "left" }}>
              <div className="section-kicker">Mes engagements</div>
              <h2 className="section-title">Mes valeurs &amp; mon approche</h2>
              <p
                className="section-intro"
                style={{ marginLeft: 0, marginRight: 0 }}
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
          </aside>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div>
            <div className="section-kicker">Prendre rendez-vous</div>
            <h2 className="section-title">Me contacter</h2>
            <p
              className="section-intro"
              style={{ marginLeft: 0, marginRight: 0 }}
            >
              Pour toute demande d’informations, de rendez-vous ou pour échanger sur les besoins
              de votre cheval, vous pouvez me contacter directement via les réseaux ci-dessous.
            </p>
            <p className="note">
              Les séances se déroulent en région lyonnaise et ses alentours. Les frais de
              déplacement peuvent être mutualisés lorsqu’une intervention est réalisée sur un même
              lieu pour plusieurs chevaux.
            </p>
          </div>
          <div className="contact-card">
            <div className="section-kicker">Réseaux &amp; contact</div>
            <p className="note">Cliquez sur le canal qui vous convient le mieux.</p>
            <div style={{ display: "grid", gap: "0.6rem", marginTop: "1.1rem" }}>
              <a
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "flex-start" }}
                href="https://www.instagram.com/_animarah_/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram – @_animarah_
              </a>
              <a
                className="btn btn-outline"
                style={{ width: "100%", justifyContent: "flex-start" }}
                href="mailto:animarah.pascual@gmail.com"
              >
                E-mail – animarah.pascual@gmail.com
              </a>
              <a
                className="btn btn-outline"
                style={{ width: "100%", justifyContent: "flex-start" }}
                href="https://www.facebook.com/people/Animarah/61568162491616/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook – Page Animarah
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

