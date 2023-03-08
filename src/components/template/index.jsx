import React from "react";
import "../../utils/style/meyer.css";
import { Link, Outlet } from "react-router-dom";
import "../../utils/style/header.css";
import "../../utils/style/footer.css";

function Template() {
  return (
    <>
      <header>
        <div className="container">
          <Link to="san-cho-accueil.html">
            <div className="logo">
              <img
                src="/img/San_Cho_Logo_white.svg"
                alt="Logo Entreprise San Cho Sancho Fast food Restaurant Burger Paris Livraison Rapide"
              />
            </div>
          </Link>
          <div className="menuBurger">
            <img src="/icns/burger-menu.svg" alt="" />
          </div>
          <div className="rollBurger">
            <ul className="textRoll">
              <li className="closeButton">
                <img src="/assets/icns/close-button.svg" alt="" />
              </li>
              <li className="rollSpace01">La carte</li>
              <li className="rollSpace">San Cho story</li>
              <li className="rollSpace">Le resto</li>
              <li className="rollSpace">Actus</li>
              <li className="rollSpace">Réserver</li>
            </ul>
          </div>

          <div className="headerRight">
            <div className="bouton">
              <Link
                to="/san-cho-click-and-collect.html"
                className="callToAction"
              >
                Click and Collect
              </Link>
              <Link to="" className="callToAction">
                Livraison
              </Link>

              <nav>
                <ul className="listeNav">
                  <li>
                    <Link to="">La carte</Link>
                  </li>
                  <li>
                    <Link to="san-cho-story.html">San Cho story</Link>
                  </li>
                  <li>
                    <Link to="">Le resto</Link>
                  </li>
                  <li>
                    <Link to="">Actus</Link>
                  </li>
                  <li>
                    <Link to="">Réserver</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <div className="footer">
          <div className="footerDiv01">
            <p>Mentions légales</p>
            <p>CGU</p>
            <p>CGV</p>
          </div>
          <div className="footerDiv02">
            <p>Plan du site</p>
            <p>La carte</p>
            <p>San-Chaud Story</p>
            <p>Le resto</p>
            <p>Actus</p>
          </div>
          <div className="footerDiv03">
            <div className="footerDiv03Text">
              <p>San-Cho en région parisienne</p>
            </div>
            <div className="locationLogo"></div>
            <div className="tempGoogleMap"></div>
          </div>
          <div className="footerDiv04">
            <p>Contact</p>
            <p>0ù nous trouver</p>
            <p>FAQ</p>
          </div>
          <div className="footerDiv05">
            <img src="/icns/facebook.svg" alt="" />
            <img src="/icns/instagram.svg" alt="" />
            <img src="/icns/twitter.svg" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Template;
