import { Link } from "react-router-dom";

export function ContactPage() {
  return (
    <>
      <section className="contact-page-hero">
        <div className="container section-heading">
          <div className="section-kicker">Prendre rendez-vous</div>
          <h1 className="section-title">Me contacter</h1>
          <p className="section-intro">
            Pour toute demande d’informations, de rendez-vous ou pour échanger sur les besoins
            de votre cheval, vous pouvez me contacter directement via les réseaux ci-dessous.
          </p>
          <p className="note" style={{ marginTop: "1rem" }}>
            Les séances se déroulent en région lyonnaise et ses alentours. Les frais de
            déplacement peuvent être mutualisés lorsqu’une intervention est réalisée sur un même
            lieu pour plusieurs chevaux.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-card contact-card--main">
            <div className="section-kicker">Réseaux &amp; contact</div>
            <p className="note">Cliquez sur le canal qui vous convient le mieux.</p>
            <div className="contact-buttons">
              <a
                className="btn btn-primary"
                href="https://www.instagram.com/_animarah_/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram – @_animarah_
              </a>
              <a
                className="btn btn-outline"
                href="mailto:animarah.pascual@gmail.com"
              >
                E-mail – animarah.pascual@gmail.com
              </a>
              <a
                className="btn btn-outline"
                href="https://www.facebook.com/people/Animarah/61568162491616/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook – Page Animarah
              </a>
            </div>
          </div>
          <div className="contact-cta">
            <p>Vous préférez découvrir mes prestations ?</p>
            <Link to="/massages" className="btn btn-outline">Massages équins</Link>
            <Link to="/communication" className="btn btn-outline">Communication animale</Link>
            <Link to="/formules" className="btn btn-primary">Formules &amp; tarifs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
