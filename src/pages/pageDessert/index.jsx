import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";
import FilAriane from "../../components/fil Ariane/fil.ariane";

// URL API

import { URL } from "../../utils/constantes/urls-dessert.js";

function Dessert() {
  const button = useRef()
  const [desserts, setDesserts] = useState([]);
  const [productId, setProductId] = useState();
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
	  if (localStorage.length === 4) {
		console.log(button)
		button.current.style.display = "block";
      }
    },
    []

    // requete api
  );

  function handleChange(event) {
    if (event.target.checked) {
		setProductId(event.target.value);
    }
  }

  function handleProduct() {
    if (productId !== undefined) {
      fetch("http://localhost:8080/api/dessert/" + productId)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("dessert", JSON.stringify(data));
          navigate("/recapitulatifCommande");
        });
    }
  }

  function handleProductRecap() {
    if (productId !== undefined) {
      fetch("http://localhost:8080/api/dessert/" + productId)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("accompagnement", JSON.stringify(data));
          navigate("/recapitulatifCommande");
        });
    }
  }

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1 className="choisissezVotreDessert">Choisissez votre Dessert</h1>
          </div>
          <FilAriane/>
          <div className="line"></div>
          <div className="encadrementDiptique">
            {desserts.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input
                    className="burgerInput"
                    onChange={handleChange}
                    type="radio"
                    name="dessert"
                    id={item._id}
                    value={item._id}
                  />
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
            ))}
          </div>
		  <div className="boutonValiderModifications" ref={button}>
			<button className="callToActionRecapCommande" onClick={handleProductRecap} >
			Valider la modification
			</button>
		  </div>
          <div className="boutonSuivant">
            <button onClick={handleProduct} className="callToAction">
              Suivant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dessert;
