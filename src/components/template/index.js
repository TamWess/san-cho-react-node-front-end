import React from "react";
import "../../utils/style/meyer.css";
import { Link } from "react-router-dom";
import "../../utils/style/header.css";
import "../../utils/style/footer.css";

function Template() {
  return (
    <>
      <header>
        <div class="container">
          <Link to="san-cho-accueil.html">
            <div class="logo">
              <img
                src="./img/San_Cho_Logo_white.svg"
                alt="Logo Entreprise San Cho Sancho Fast food Restaurant Burger Paris Livraison Rapide"
              />
            </div>
          </Link>
          <div class="menuBurger">
            <img src="./icns/burger-menu.svg" alt="" />
          </div>
          <div class="rollBurger">
            <ul class="textRoll">
              <li class="closeButton">
                <img src="assets/icns/close-button.svg" alt="" />
              </li>
              <li class="rollSpace01">La carte</li>
              <li class="rollSpace">San Cho story</li>
              <li class="rollSpace">Le resto</li>
              <li class="rollSpace">Actus</li>
              <li class="rollSpace">Réserver</li>
            </ul>
          </div>

          <div class="headerRight">
            <div class="bouton">
              <Link to="/san-cho-click-and-collect.html" class="callToAction">
                Click and Collect
              </Link>
              <Link to="" class="callToAction">
                Livraison
              </Link>

              <nav>
                <ul class="listeNav">
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
      <footer>
        <div class="footerDiv01">
          <p>Mentions légales</p>
          <p>CGU</p>
          <p>CGV</p>
        </div>
        <div class="footerDiv02">
          <p>Plan du site</p>
          <p>La carte</p>
          <p>San-Chaud Story</p>
          <p>Le resto</p>
          <p>Actus</p>
        </div>
        <div class="footerDiv03">
          <div class="footerDiv03Text">
            <p>San-Cho en région parisienne</p>
          </div>
          <div class="locationLogo"></div>
          <div class="tempGoogleMap"></div>
        </div>
        <div class="footerDiv04">
          <p>Contact</p>
          <p>0ù nous trouver</p>
          <p>FAQ</p>
        </div>
        <div class="footerDiv05">
          <img src="../../../public/icns/facebook.svg" alt="" />
          <img src="../../../public/icns/instagram.svg" alt="" />
          <img src="../../../public/icns/twitter.svg" alt="" />
        </div>
      </footer>
    </>
  );
}

export default Template;
