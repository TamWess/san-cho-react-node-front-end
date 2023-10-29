import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../pageBurger/burgers.scss";

// URL API


function Paiement() {
	const [priceChosen, setPriceChosen] = useState(0);
  const [chosenProduct, setChosenProduct] = useState();
  const navigate = useNavigate();

  useEffect(() => {
	const totalPrice = ["burger", "accompagnement", "boisson", "dessert"]
		.map((name) => JSON.parse(localStorage.getItem(name)))
		.map((product) => Number(product?.price?.$numberDecimal || 0))
		.reduce((a, b) => a + b, 0);
	setPriceChosen(totalPrice);
}, []);

  function handleChange(event) {
    setChosenProduct(event.target.value);
  }

  function handleProduct() {
    if (chosenProduct !== undefined) {
      fetch("https://titi.startwin.fr/products/" + chosenProduct)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("dessert", data);
          navigate("/");
        });
    }
  }

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1 className="titreChoisissez">Paiement</h1>
          </div>
		  <Link className="linkRecap" to="/recapitulatifCommande">
			<div className="boutonCommande">
					<button className="callToActionRecapCommande">
					  Retour à la commande
					</button>	
			</div>
		  </Link>
          <div className="line"></div>
          <div className="encadrementDiptiquePaiement">
            <div className="boutonsPaiement">
              <button className="payPal">
                <img src="/img/paypal-logo.png" alt="" />
              </button>
              <button className="carteBancaire">
                <img src="/img/carte-bancaire-logo.png" alt="" />
              </button>
            </div>
          </div>
          <h2 className="recapPrice">Prix total: {priceChosen} €</h2>

		  {/* -----Ancien bouton SUIVANT----- */}

          {/* <div className="recapBoutonSuivant">
            <button onClick={handleProduct} className="callToAction">
              Suivant
            </button>
          </div> */}
		  
        </div>
      </section>
    </div>
  );
}

export default Paiement;
