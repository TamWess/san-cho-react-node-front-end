import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./laCarte.scss"
// import "../pageBurger/san-cho-burgers.scss"

import { URL } from "../../utils/constantes/urls-burger";
import { URLAccompagnements } from "../../utils/constantes/urls-accompagnement.js";
import { URLDesserts } from "../../utils/constantes/urls-dessert.js";

function LaCarte() {

	const [burgers, setBurgers] = useState([]);
	const [accompagnements, setAccompagnements] = useState([]);
	const [desserts, setDesserts] = useState([]);

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

		const fetchAccompagnements = async () => {
			try {
				const { data } = await axios.get(URLAccompagnements.fetchAccompagnements);
				setAccompagnements(data);
			} catch (error) {
				console.log(error.message());
			}
			console.log(accompagnements);
		};
		fetchAccompagnements();

		const fetchDesserts = async () => {
			try {
				const { data } = await axios.get(URLDesserts.fetchDesserts);
				setDesserts(data);
			} catch (error) {
				console.log(error.message());
			}
			console.log(desserts);
		};
		fetchDesserts();

	}, []);

	return (

		<div className="burgerLaCarte">
			<section className="selectionMenuC">
				<div className="menuImageC">
					<div className="choisissezVotreBurgerC">
						<h1 className='titreCarteC'>Notre Carte</h1>
					</div>
					<div className="lineC"></div>
					<div className="choisissezVotreBurgerC">
						<h1 className='titreBurgersC'>Les Burgers</h1>
					</div>
					<div className="encadrementDiptiqueC">
						{burgers.map((item) => (
							<React.Fragment key={item._id}>
								<div className="burgersChoiceCadre1C">
									<div
										className="burgerInputC"
										type="radio"
										name="burger"
										id={item._id}
										value={item._id}
									/>
									<label className="burgerGrosSanChoC" htmlFor={item._id}>
										<div className="burgerGrosSanchoImgC">
											<img src={item.image}></img>
										</div>
										<div className="descriptionProduitC">
											<div className="namePriceC">
												<h2 className="nameC">{item.name}</h2>
												<h2 className="priceC">{item.price.$numberDecimal} €</h2>
											</div>
											<p className='textCarteC'>{item.description}</p>
										</div>
									</label>
								</div>
							</React.Fragment>

						))}
					</div>
					<div className="lineLittleC"></div>
					<div className="choisissezVotreBurgerC">
						<h1 className='titreBurgersC'>Les Accompagnements</h1>
					</div>
					<div className="encadrementDiptiqueC">
						{accompagnements.map((item) => (
							<React.Fragment key={item._id}>
								<div className="burgersChoiceCadre1C">
									<div
										className="burgerInputC"
										type="radio"
										name="accompagnement"
										id={item._id}
										value={item._id}
									/>
									<label className="burgerGrosSanChoC" htmlFor={item._id}>
										<div className="burgerGrosSanchoImgC">
											<img src={item.image}></img>
										</div>
										<div className="descriptionProduitC">
											<div className="namePriceC">
												<h2 className="nameC">{item.name}</h2>
												<h2 className="priceC">{item.price.$numberDecimal} €</h2>
											</div>
											<p className='textCarteC'>{item.description}</p>
										</div>
									</label>
								</div>
							</React.Fragment>
						))}
					</div>
					<div className="lineLittleC"></div>
					<div className="choisissezVotreBurgerC">
						<h1 className='titreBurgersC'>Les Desserts</h1>
					</div>
					<div className="encadrementDiptiqueC">
						{desserts.map((item) => (
							<React.Fragment key={item._id}>
								<div className="burgersChoiceCadre1C">
									<div
										className="burgerInputC"
										type="radio"
										name="dessert"
										id={item._id}
										value={item._id}
									/>
									<label className="burgerGrosSanChoC" htmlFor={item._id}>
										<div className="burgerGrosSanchoImgC">
											<img src={item.image}></img>
										</div>
										<div className="descriptionProduitC">
											<div className="namePriceC"C>
												<h2 className="nameC">{item.name}</h2>
												<h2 className="priceC">{item.price.$numberDecimal} €</h2>
											</div>
											<p className='textCarteC'>{item.description}</p>
										</div>
									</label>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default LaCarte;
