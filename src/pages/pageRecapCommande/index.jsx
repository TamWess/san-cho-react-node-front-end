import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";
// import { URL } from "../../utils/constantes/urls-dessert";

function RecapCommande() {
  const [dessert, setDessert] = useState([]);
  const [burger, setBurger] = useState([]);
  const [accompagnement, setAccompagnement] = useState([]);
  const [boisson, setBoisson] = useState([]);
	const [chosenProduct, setChosenProduct] = useState();
	const [priceChosen, setPriceChosen] = useState ();

	useEffect(() => {

		setDessert(JSON.parse(localStorage.getItem('burger')))
		setBurger(JSON.parse(localStorage.getItem('accompagnement')))
		setBoisson(JSON.parse(localStorage.getItem('boisson')))
		setAccompagnement(JSON.parse(localStorage.getItem('dessert')))

    },
    []
  );

//   setPriceChosen(parseFloat(burger?.price.$numberDecimal) + parseFloat(accompagnement?.price.$numberDecimal) + parseFloat(boisson?.price.$numberDecimal) + parseFloat(dessert?.price?.$numberDecimal))
	
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
            {/* {desserts.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input className="burgerInput" onChange={handleChange} type="radio" name="dessert" id={item._id} value={item._id} />
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
