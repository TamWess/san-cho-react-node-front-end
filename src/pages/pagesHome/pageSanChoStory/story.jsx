import React from "react";
import "../pageLeResto/leResto.scss";
import { useEffect, useRef } from "react";

function LaSanChoStory() {

	const diptiqueRestoRef = useRef(null)

	useEffect(() => {

		
		diptiqueRestoRef.current.style.left = "0px";

	})

	return (
		<>
			<div className="pageAnciensActus" >
			<br /><br /><br /><br />
				<div className="divImageBigActus">
					<img
						className="imageBigActus1"
						src="/img/san-cho-story.jpg"
						alt="San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
					/>
				</div>
				<div className="diptiqueResto" ref={diptiqueRestoRef} >
					<h1 className="actusTitleResto">La San Cho Story 🍅</h1>
					<br />
					

					<p className="subTextAnciens"><span className="bold">Depuis dejà deux ans, San Cho Burger le premier restaurant San Cho Burger est né dans la rue du Faubourg-Saint-Honoré à Paris.🥳</span> <br /><br /><br />
						Dejà deux ans que le premier restaurant à été le début d'un succès que nous n'aurions jamais espéré si fort et tout cela grâce à vous. Voici son histoire...<br /><br />
						<p className="textAnciens">Dans les rues animées de Paris, un nouveau spot culinaire a vu le jour : <span className="bold">San-cho Burger 🍔 </span>. <br /><br />
							Derrière cette innovation, deux passionnés de la cuisine mexicaine.<br />
							Après des mois passés à explorer les marchés locaux du Mexique, à savourer burritos et enchiladas, <span className="bold">ils tombèrent amoureux des ingrédients :</span> le guacamole 🥑, le piment 🌶️ et les viandes typiques des burritos 🌯.<br /><br />
							L'idée brillante leur vint en mordant dans un taco 😁:
							Dans les rues animées de Paris, un nouveau spot culinaire a vu le jour : <span className="bold">et si on faisait de tout ça des burgers?</span><br /><br />

							Rentrés à Paris, armés de recettes secrètes, <span className="bold">ils créèrent San-cho</span>. Leur but: offrir la fusion audacieuse entre le croustillant du burger et les saveurs épicées du Mexique à la perfection.

							San-cho Burger est rapidement devenu incontournable. <br /><br />Car après tout, qui pourrait résister à l'appel du guacamole et du piment relevé, le tout entre deux pains burgers au moelleux incomparable?🌶️🥑🍅🌽 😋
						</p>
					</p>

					<img className="banniereActus" src="/icns/Dessin_burger.png" alt="banniere Actus" />
					<img className="banniereActus2" src="/icns/Assiette_Nachos_01_sans_fond.png" alt="banniere Actus" />
					<img className="banniereActus3" src="/icns/Pot_Nachos_02_sans_fond.png" alt="banniere Actus" />
					<img className="banniereActus4" src="/icns/Assiette_sans_fond.png" alt="banniere Actus" />

				</div>
			</div>
		</>
	)
}

export default LaSanChoStory