import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pageBurger/san-cho-burgers.scss";

// URL API

import { URL } from "../../utils/constantes/urls-accompagnement";

function Accompagnement() {
  const [accompagnements, setAccompagnements] = useState([]);
	const [chosenProduct, setChosenProduct] = useState();
	const navigate = useNavigate();

  useEffect(
    () => {
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
    },
    []
  );

  function handleChange(event) {
	setChosenProduct(event.target.value);
  }

  
	
  function handleProduct() {
	if (chosenProduct !== undefined) {
		fetch('https://titi.startwin.fr/products/' + chosenProduct)
			.then(res => res.json())
			.then(function (data) {
				localStorage.setItem('accompagnement', JSON.stringify(data));
				navigate('/boisson');
			})
	}
}

  return (
    <div className="burger">
      <section className="selectionMenu">
        <div className="menuImage">
          <div className="choisissezVotreBurger">
            <h1 className="titreAccompagnement">Choisissez l'Accompagnement</h1>
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
            {accompagnements.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadre1">
                  <input className="burgerInput" onChange={handleChange} type="radio" name="accompagnement" id={item._id} value={item._id} />
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

export default Accompagnement;
