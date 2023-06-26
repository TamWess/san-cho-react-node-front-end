import React, { useState, useEffect }from "react";
import axios from "axios";
import "./style.scss";
import { URLBURGER } from "../../utils/constantes/urls-burger";
import { URLACCOMPAGNEMENT } from "../../utils/constantes/urls-accompagnement";
import { URLBOISSON } from "../../utils/constantes/urls-boisson";
import { URLDESSERT } from "../../utils/constantes/urls-dessert";

export default function Carte (){

	const [burgers, setBurgers] = useState([]);
	const [accompagnements, setAccompagnements] = useState([]);
	const [boissons, setBoissons] = useState([]);
	const [desserts, setDesserts] = useState([]);
	// const [productId, setProductId] = useState();

	useEffect(() => {
		const fetchBurgers = async () => {
			try {
			  const { data } = await axios.get(URLBURGER.fetchBurger);
			  setBurgers(data);
			} catch (error) {
			  console.log(error.message());
			}
			console.log(burgers);
		  };
		fetchBurgers()

		const fetchAccompagnements = async () => {
			try {
				const { data } = await axios.get(URLACCOMPAGNEMENT.fetchAccompagnements);
				setAccompagnements(data);
			} catch (error) {
				console.log(error.message());
			}
			console.log(accompagnements);
			};
		fetchAccompagnements();

		const fetchBoissons = async () => {
			try {
			  const { data } = await axios.get(URLBOISSON.fetchBoissons);
			  setBoissons(data);
			} catch (error) {
			  console.log(error.message());
			}
			console.log(boissons);
		  };
		  fetchBoissons();

		const fetchDesserts = async () => {
		try {
			const { data } = await axios.get(URLDESSERT.fetchDesserts);
			setDesserts(data);
		} catch (error) {
			console.log(error.message());
		}
		console.log(desserts);
		};
		fetchDesserts();

	},[])

	useEffect(() => {
		
	},[])

	return (
		<div className="burgerLaCarte">
		<section className="selectionMenuCarte">
		  <div className="menuImageCarte">
			<div className="choisissezVotreBurgerCarte">
            	<h1 className="laCarteTitle">Notre Carte</h1>
			</div>
			<div className="lineCarte"></div>
           		 <h1>Nos Burgers</h1>
          <div className="encadrementDiptiqueCarte">
            {burgers.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadreCarte">
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
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="line"></div>
		  <div className="choisissezVotreBurgerCarte">
            <h1>Nos Accompagnements</h1>
          </div>
          <div className="encadrementDiptiqueCarte">
            {accompagnements.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadreCarte">
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
                </div>
              </React.Fragment>
            ))}
          <div className="line"></div>
			<div className="choisissezVotreBurgerCarte">
            	<h1>Nos Boissons</h1>
          </div>
          <div className="encadrementDiptiqueCarte">
            {boissons.map((item) => (
              <React.Fragment key={item._id}>
                <div className="burgersChoiceCadreCarte">
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
                </div>
              </React.Fragment>
            ))}
          </div>
          </div>
			<div className="line"></div>
		  <div className="choisissezVotreBurgerCarte">
			  <h1 className="choisissezVotreDessert">Nos Desserts</h1>
			</div>
			<div className="encadrementDiptiqueCarte">
			  {desserts.map((item) => (
				<React.Fragment key={item._id}>
				  <div className="burgersChoiceCadreCarte">
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
				  </div>
				</React.Fragment>
			  ))}
			</div>
		  </div>
		</section>
	  </div>
	)
}

