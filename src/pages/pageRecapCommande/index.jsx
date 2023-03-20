import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";
// import { URL } from "../../utils/constantes/urls-dessert";

function RecapCommande() {
	const [priceChosen, setPriceChosen] = useState(0);

	useEffect(
    () => {
      const totalPrice = ['burger', 'accompagnement', 'boisson', 'dessert']
        .map(name => JSON.parse(localStorage.getItem(name)))
        .map((product) => Number(product?.price?.$numberDecimal || 0))
        .reduce((a, b) => a + b, 0)

      setPriceChosen(totalPrice)
    },
    []
  );
	
  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1 className="titleFinalization">Finalisation de la commande</h1>
          </div>
          <div className="filAriane">
            <div className="arianeSelected"></div>
            <div className="arianeFil"></div>
            <div className="arianeVide"></div>
            <div className="arianeFil"></div>
            <div className="arianeVide"></div>
            <div className="arianeFil"></div>
            <div className="arianeVide"></div>
            <div className="arianeFil"></div>
            <div className="arianeVide"></div>
          </div>
          <div className="line"></div>
          <div className="encadrementDiptique">

			{/* ----------- Test Recap ----------- */}

			<div className="burgersChoiceCadre1">
                  <input className="burgerInput" type="radio" name="burger" id={localStorage._id} value={localStorage._id} />
                  <label className="burgerGrosSanCho" htmlFor={localStorage.burger._id}>
                    <div className="burgerGrosSanchoImg">
                      <img src={localStorage.burger.image}></img>
                    </div>
                    <div className="descriptionProduit">
						<div className="namePrice"> 
							<h2 className="name">{localStorage.burger.name}</h2>
							<h2 className="price">{localStorage.burger.price.$numberDecimal} €</h2>
						</div>
                        <p>{localStorage.burger.description}</p>
                    </div>
                  </label>
                </div>

				{/* ---------- Fin Test Recap --------- */}
{/* 
            {localStorage((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input className="burgerInput" type="radio" name="dessert" id={item._id} value={item._id} />
                  <label className="burgerGrosSanCho" htmlFor={item._id}>
                    <div className="burgerGrosSanchoImg">
                      <img src={item.image}></img>
                    </div>
                    <div className="descriptionProduit">
						<div className="namePrice"> 
							<h2 className="name">{item.name}</h2>
							<h2 className="price">{item.price.$numberDecimal} €</h2>
						</div>
                        <p>{item.description}</p>
                    </div>
                  </label>
                </div>
              </React.Fragment>
            ))} */}
          </div>
		  <h2 className="recapPrice">Prix total: {priceChosen}</h2>
          <div className="recapBoutonSuivant">
			<Link to="/paiement">
            <button  className="callToAction">Suivant</button>
			</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecapCommande;
