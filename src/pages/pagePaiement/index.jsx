import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";

// URL API

import { URL } from "../../utils/constantes/urls-dessert";

function Paiement() {
  const [desserts, setDesserts] = useState([]);
  const [chosenProduct, setChosenProduct] = useState();
  const navigate = useNavigate();

  useEffect(
    () => {
      const fetchDesserts = async () => {
        try {
          const { data } = await axios.get(URL.fetchDesserts);
          setDesserts(data);
        } catch (error) {
          console.log(error.message());
        }
        console.log(desserts);
      };
      fetchDesserts();
    },
    []

    // ----recuperation commande------

    // requete api
  );

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
          <h2 className="recapPrice">Prix total: {}</h2>

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
