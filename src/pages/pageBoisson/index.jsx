import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";

// URL API

import { URL } from "../../utils/constantes/urls-boisson";

function Boisson() {
  const [boissons, setBoissons] = useState([]);
	const [chosenProduct, setChosenProduct] = useState();
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
    },
    []

    // requete api
  );

  function handleChange(event) {
	setChosenProduct(event.target.value);
  }
	
  function handleProduct() {
	if (chosenProduct !== undefined) {
		fetch('https://titi.startwin.fr/products/' + chosenProduct)
			.then(res => res.json())
			.then(function (data) {
				localStorage.setItem('boisson', JSON.stringify(data));
				navigate('/dessert');
			})
	}
}

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1>Choisissez votre Boisson</h1>
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
            {boissons.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input className="burgerInput" onChange={handleChange} type="radio" name="boisson" id={item._id} value={item._id} />
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
          <div className="boutonSuivant">
            <button onClick={handleProduct} className="callToAction">Suivant</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Boisson;
