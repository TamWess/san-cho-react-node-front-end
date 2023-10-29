import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pageBurger/burgers.scss";
import FilAriane from "../../components/fil Ariane/fil.ariane";

function RecapCommande() {

	const [priceChosen, setPriceChosen] = useState(0);

	const navigate = useNavigate();

	useEffect(() => {
		const totalPrice = ["burger", "accompagnement", "boisson", "dessert"]
			.map((name) => JSON.parse(localStorage.getItem(name)))
			.map((product) => Number(product?.price?.$numberDecimal || 0))
			.reduce((a, b) => a + b, 0);
		setPriceChosen(totalPrice);

		


	}, []);
	console.log(localStorage.getItem("accompagnement"));

	function next(){
		navigate("/paiement")
	}


	return (
		<div className="recapCommande">
			<div className="burger">
				<section className="selectionMenu">
					<div className="menuImage">
						<div className="choisissezVotreBurger">
							<h1 className="titreChoisissez">Finalisation de la commande</h1>
						</div>
						<FilAriane />
						<div className="line"></div>
						<div className="encadrementDiptique">
							{/* Burger */}
							<div className="burgersChoiceCadre1">
								<div className="burgerGrosSanCho">
									<div className="burgerGrosSanchoImg">
										<img
											className="name"
											src={JSON.parse(localStorage.getItem("burger")).image}
										/>
									</div>
									<div className="descriptionProduit">
										<div className="namePrice">
											<h2 className="name">
												{JSON.parse(localStorage.getItem("burger")).name}
											</h2>
											<h2 className="price">
												{JSON.parse(localStorage.getItem("burger")).price
													.$numberDecimal + "€"}
											</h2>
										</div>
										<p>
											{JSON.parse(localStorage.getItem("burger")).description}
										</p>
									</div>
								</div>
							</div>
							{/* Accompagnement */}
							<div className="burgersChoiceCadre1">
								<div className="burgerGrosSanCho">
									<div className="burgerGrosSanchoImg">
										<img
											className="name"
											src={
												JSON.parse(localStorage.getItem("accompagnement")).image
											}
										/>
									</div>
									<div className="descriptionProduit">
										<div className="namePrice">
											<h2 className="name">
												{
													JSON.parse(localStorage.getItem("accompagnement"))
														.name
												}
											</h2>
											<h2 className="price">
												{JSON.parse(localStorage.getItem("accompagnement"))
													.price.$numberDecimal + "€"}
											</h2>
										</div>
										<p>
											{
												JSON.parse(localStorage.getItem("accompagnement"))
													.description
											}
										</p>
									</div>
								</div>
							</div>
							<div className="burgersChoiceCadre1">
								<div className="burgerGrosSanCho">
									<div className="burgerGrosSanchoImg">
										<img
											className="name"
											src={JSON.parse(localStorage.getItem("boisson")).image}
										/>
									</div>
									<div className="descriptionProduit">
										<div className="namePrice">
											<h2 className="name">
												{JSON.parse(localStorage.getItem("boisson")).name}
											</h2>
											<h2 className="price">
												{JSON.parse(localStorage.getItem("boisson")).price
													.$numberDecimal + "€"}
											</h2>
										</div>
										<p>
											{JSON.parse(localStorage.getItem("boisson")).description}
										</p>
									</div>
								</div>
							</div>
							<div className="burgersChoiceCadre1">
									<div className="burgerGrosSanCho">
										<div className="burgerGrosSanchoImg">
											<img
												className="name"
												src={JSON.parse(localStorage.getItem("dessert")).image}
											/>
										</div>
										<div className="descriptionProduit">
											<div className="namePrice">
												<h2 className="name">
													{JSON.parse(localStorage.getItem("dessert")).name}
												</h2>
												<h2 className="price">
													{JSON.parse(localStorage.getItem("dessert")).price
														.$numberDecimal + "€"}
												</h2>
											</div>
											<p>
												{JSON.parse(localStorage.getItem("dessert")).description}
											</p>
										</div>
									</div>
								</div>
								<h2 className="recapPrice">Prix total: {priceChosen}€</h2>
								<div className="recapBoutonSuivant">
									
										<button className="callToActionSuivant" onClick={next}>Suivant</button>
									
								</div>
						</div>

					</div>
					
				</section>
			</div>
		</div>
	);
}

export default RecapCommande;
