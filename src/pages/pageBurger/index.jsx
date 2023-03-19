import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./san-cho-burgers.scss";

// URL API

import { URL } from "../../utils/constantes/urls";

function Burger() {
	const [burgers, setBurgers] = useState([]);
	const [chosenProduct, setChosenProduct] = useState();
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
		},
		[]

	);

	function handleChange(event) {
		if (event.target.checked) {
			setChosenProduct(event.target.value);
		}
	}



	function handleProduct() {
		if (chosenProduct !== undefined) {
			fetch('https://titi.startwin.fr/products/' + chosenProduct)
				.then(res => res.json())
				.then(function (data) {
					localStorage.setItem('burger', JSON.stringify(data));
					navigate('/accompagnement');
				})
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

export default Burger;
