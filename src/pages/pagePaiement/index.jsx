import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pageBurger/san-cho-burgers.scss";

function Paiement() {

	  const [priceChosen, setPriceChosen] = useState(0);

  useEffect(() => {
    const totalPrice = ["burger", "accompagnement", "boisson", "dessert"]
      .map((name) => JSON.parse(localStorage.getItem(name)))
      .map((product) => Number(product?.price?.$numberDecimal || 0))
      .reduce((a, b) => a + b, 0);
    setPriceChosen(totalPrice);
  }, []);
  console.log(localStorage.getItem("accompagnement"));

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1>Paiement</h1>
          </div>
		  <Link to="/recapitulatifCommande">
			<div className="boutonCommande">
					<button className="callToActionRecapCommande">
					  Retour à la commande
					</button>	
			</div>
		  </Link>
          <div className="line"></div>
          <div className="encadrementDiptique">
            <div className="boutonsPaiement">
              <button className="payPal">
                <img src="/img/paypal-logo.png" alt="" />
              </button>
              <button className="carteBancaire">
                <img src="/img/carte-bancaire-logo.png" alt="" />
              </button>
            </div>
            <div className="promoPaiement">
              <h2 className="promoTitle">
                Un code de promotion vous sera envoyé par <br />
                mail à la validation de cette commande
              </h2>
              <img className="promoImage" src="/img/promo_san_cho.png" alt="" />
            </div>
          </div>
          <h2 className="recapPrice">Prix total: {priceChosen}</h2>
        </div>
      </section>
    </div>
  );
}

export default Paiement;
