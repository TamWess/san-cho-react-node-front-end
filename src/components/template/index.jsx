import React from "react";
import { Link, Outlet } from "react-router-dom";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import "../../utils/style/header.css";
import "../../utils/style/footer.scss";

function Template() {


	const {isLoaded} = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyDoeRnemxCI74BFR79V4AG0pCjj4p4Kcdk"
	})

	const containerStyle = {
		width: '100%',
		height: '120px'
	}

	const center = {
		lat: 48.860160,
		lng: 2.346190 
	}

  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
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
                to="/clickandcollect"
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
                    <Link to="laSanChoStory">San Cho story</Link>
                  </li>
                  <li>
                    <Link to="/LeResto">Le resto</Link>
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
            <p>San Cho Story</p>
            <p>Le resto</p>
            <p>Actus</p>
          </div>
          <div className="footerDiv03">
            <div className="footerDiv03Text">
              <p>San Cho en région parisienne</p>
            </div>
            <div className="locationLogo"></div>
			{/* <GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
			></GoogleMap> */}
            {/* <div className="tempGoogleMap"></div> */}
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
