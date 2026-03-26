import { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MassagesPage } from "./pages/MassagesPage";
import { CommunicationPage } from "./pages/CommunicationPage";
import { FormulesPage } from "./pages/FormulesPage";
import { ContactPage } from "./pages/ContactPage";
import logo from "../assets/img/logo-animarah.png";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="page">
      <ScrollToTop />
      <header>
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <div className="brand-logo">
              <img src={logo} alt="Logo Animarah" />
            </div>
            <div>
              <div className="brand-text-main">ANIMARAH</div>
              <div className="brand-text-sub">
                Massage équin • Communication animale
              </div>
              <div className="brand-text-region">Région lyonnaise</div>
            </div>
          </NavLink>
          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
              Accueil
            </NavLink>
            <NavLink
              to="/massages"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Massages
            </NavLink>
            <NavLink
              to="/communication"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Communication animale
            </NavLink>
            <NavLink
              to="/formules"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Formules
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Me contacter
            </NavLink>
          </nav>
        </div>
      </header>
      <button
        type="button"
        className={`side-menu-toggle ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={mobileMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <aside className={`side-menu-panel ${mobileMenuOpen ? "is-open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <nav className="side-menu-nav" aria-label="Navigation latérale">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Accueil
          </NavLink>
          <NavLink to="/massages" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Massages
          </NavLink>
          <NavLink
            to="/communication"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Communication animale
          </NavLink>
          <NavLink to="/formules" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Formules
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Me contacter
          </NavLink>
        </nav>
      </aside>
      {mobileMenuOpen && (
        <button
          type="button"
          className="side-menu-backdrop"
          aria-label="Fermer le menu"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <main>{children}</main>
      <footer>
        <div className="container footer-inner">
          <div>
            © ANIMARAH – Massage équin & communication animale – Région lyonnaise
          </div>
          <div>
            Le massage équin et la communication animale ne remplacent en aucun cas un
            suivi vétérinaire ou médical.
          </div>
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/massages" element={<MassagesPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
        <Route path="/formules" element={<FormulesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

