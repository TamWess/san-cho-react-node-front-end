import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";
import FilAriane from "../../components/fil Ariane/fil.ariane";

// URL API

import { URL } from "../../utils/constantes/urls-accompagnement.js";

function Accompagnement() {

  const button = useRef()
  const [accompagnements, setAccompagnements] = useState([]);
  const [productId, setProductId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccompagnements = async () => {
      try {
        const { data } = await axios.get(URL.fetchAccompagnements);
        setAccompagnements(data);
      } catch (error) {
        console.log(error.message());
      }
      console.log(accompagnements);
    };
    fetchAccompagnements();
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
      fetch("http://localhost:8080/api/accompagnement/" + productId)
        .then((res) => res.json())
        .then(function (data) {
          localStorage.setItem("accompagnement", JSON.stringify(data));
          navigate("/boisson");
        });
    }
  }
  
  function handleProductRecap() {
    if (productId !== undefined) {
      fetch("http://localhost:8080/api/accompagnement/" + productId)
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
            <h1 className="titreAccompagnement">Choisissez l'Accompagnement</h1>
          </div>
          <FilAriane/>
          <div className="line"></div>
          <div className="encadrementDiptique">
            {accompagnements.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input
                    className="burgerInput"
                    onChange={handleChange}
                    type="radio"
                    name="accompagnement"
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
export default Accompagnement;
