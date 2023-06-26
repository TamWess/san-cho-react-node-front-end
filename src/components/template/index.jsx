import React, {useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import "./style.scss"

function Template() {

	// ROLL MENU

	
	
	useEffect(() => {
		const closeRoll = document.querySelector(".closeButton");
		const menuBurger = document.querySelector(".menuBurger");
    	const rollBurger = document.querySelector(".rollBurger");
		menuBurger.addEventListener("click", function () {
			rollBurger.style.opacity = "1";
			rollBurger.style.right = "20px";
		  });
		  closeRoll.addEventListener("click", function () {
		    console.log("okay");
		    rollBurger.style.right = "-500px";
		  });
	})


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
          <Link className="sizeLogo" to="/">
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
			<div className="closeButton">
			<img src="/icns/close-button.svg" alt="" />
			</div>
            <div className="textRoll">
			  <Link to="/laCarte" className="rollSpace01">La Carte</Link>
			  <Link to="laSanChoStory" className="rollSpace">San Cho story</Link>
			  <Link to="/LeResto" className="rollSpace">Le resto</Link>
              <Link to="/actus" className="rollSpace">Actus</Link>
			  <Link to="/contact" className="rollSpace">Contact</Link>
            </div>
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
                    <Link to="/laCarte">La carte</Link>
                  </li>
                  <li>
                    <Link to="laSanChoStory">San Cho story</Link>
                  </li>
                  <li>
                    <Link to="/LeResto">Le resto</Link>
                  </li>
                  <li>
                    <Link to="/actus">Actus</Link>
                  </li>
                  <li>
                    <Link to="">Contact</Link>
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
