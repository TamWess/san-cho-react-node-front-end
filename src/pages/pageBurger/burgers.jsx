import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./burgers.scss";
import FilAriane from "../../components/fil Ariane/fil.ariane"

// URL API

import { URL } from "../../utils/constantes/urls-burger";

function Burger() {

	// let burger = JSON.parse(localStorage.getItem("burger")).image
  const button = useRef()
  const [burgers, setBurgers] = useState([]);
  const [productId, setProductId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const { data } = await axios.get(URL.fetchBurger);
        setBurgers(data);
      } catch (error) {
        console.log(error.message());
      }
      console.log(burgers);
    };
    fetchBurgers();
	if (localStorage.length === 4) {
		console.log(button)
		button.current.style.display = "block";
	}
  }, []);

  function handleChange(event) {
    if (event.target.checked) {
		setProductId(event.target.value);
    }
  }
  
  function handleProduct() {
    if (productId !== undefined) {
      fetch("http://localhost:8080/api/burger/" + productId)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("burger", JSON.stringify(data));
          navigate("/accompagnement");
        });
    }
  }

  function handleProductRecap() {
    if (productId !== undefined) {
      fetch("http://localhost:8080/api/burger/" + productId)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("burger", JSON.stringify(data));
          navigate("/recapitulatifCommande");
        });
    }
  }

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1 className="titreChoisissez">Choisissez votre Burger</h1>
          </div>
			<FilAriane/>
          <div className="line"></div>
          <div className="encadrementDiptique">
            {burgers.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input
                    className="burgerInput"
                    onChange={handleChange}
                    type="radio"
                    name="burger"
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
                      <p className="texteBurger">{item.description}</p>
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
            <button onClick={handleProduct} className="callToActionSuivant">
              Suivant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Burger;