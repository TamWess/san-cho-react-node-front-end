import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.css";

// URL API

import { URL } from "../../utils/constantes/urls";

function Burger() {
  const [burgers, setBurgers] = useState([]);
	const [choosedProduct, setChoosedProduct] = useState();
	const navigate = useNavigate();
  useEffect(
    () => {
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
    },
    []

    // requete api
  );

  function handleChange(event) {
	setChoosedProduct(event.target.value);
  }
	
  function handleProduct() {
	if (choosedProduct !== undefined) {
		localStorage.setItem('burger', choosedProduct);
		navigate('/accompagnement');
	}
  }

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1>Choisissez votre Burger</h1>
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
            {burgers.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input onChange={handleChange} type="radio" name="burger" id={item._id} value={item._id} />
                  <label className="burgerGrosSanCho" htmlFor={item._id}>
                    <div className="burgerGrosSanchoImg">
                      <img src={item.image}></img>
                    </div>
                    <div className="descriptionProduit">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </label>
                </div>

                {/* {item.description}
                {item.price.$numberDecimal} */}
              </React.Fragment>
            ))}
          </div>
		  <div class="boutonSuivant">
			<button onClick={handleProduct} className="callToAction">Suivant</button>
		</div>
        </div>
      </section>
    </div>
  );
}

export default Burger;
