import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../pageBurger/burgers.scss";
import FilAriane from "../../components/fil Ariane/fil.ariane";

// URL API

import { URL } from "../../utils/constantes/urls-boisson";

function Boisson() {
  const button = useRef()
  const [boissons, setBoissons] = useState([]);
  const [productId, setProductId] = useState();
  const navigate = useNavigate();

  useEffect(
    () => {
      const fetchBoissons = async () => {
        try {
          const { data } = await axios.get(URL.fetchBoissons);
          setBoissons(data);
        } catch (error) {
          console.log(error.message());
        }
        console.log(boissons);
      };
      fetchBoissons();

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
      fetch(`${process.env.REACT_APP_BASE_API_URL}/api/boisson/${productId}`)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("boisson", JSON.stringify(data));
          navigate("/dessert");
        });
    }
  }

  function handleProductRecap() {
    if (productId !== undefined) {
      fetch("${process.env.REACT_APP_BASE_API_URL}/api/boisson/" + productId)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("boisson", JSON.stringify(data));
          navigate("/recapitulatifCommande");
        });
    }
  }

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1 className="titreChoisissez">Choisissez votre Boisson</h1>
          </div>
          <FilAriane/>
          <div className="line"></div>
          <div className="encadrementDiptique">
            {boissons.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input
                    className="burgerInput"
                    onChange={handleChange}
                    type="radio"
                    name="boisson"
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

                {/* {item.description}
                {item.price.$numberDecimal} */}
              </React.Fragment>
            ))}
          </div>
		  <div className="boutonValiderModifications" >
			<button ref={button} className="callToActionRecapCommande" onClick={handleProductRecap} >
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

export default Boisson;
