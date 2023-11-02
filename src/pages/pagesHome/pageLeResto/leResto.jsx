import React from "react";
import "../../../utils/style/base.scss"
import "./leResto.scss";
import { useEffect, useRef } from "react";

function LeResto() {

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
						src="/img/le-resto-san-cho.jpg"
						alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
					/>
				</div>
				<div className="diptiqueResto" >
					<h1 className="actusTitleResto">Le Resto 🌞</h1>
					<br />
					<p className="subTextAnciens"> <span className="bold">🌞 C'est avec plaisir que nous vous accueillons au 112, rue du Faubourg-Saint-Honoré à Paris. Dans notre restaurant, chaque poutre, chaque élément de décoration, chacune de nos assiettes est issue de notre amour du partage.</span> <br /><br /><br />
						<p className="textAnciens"> <span className="bold">À 5 minutes de l'Arc de Triomphe</span>, notre restaurant à l'atmosphère festive vous apportera le soleil de l'Amérique du Sud.
							Nous vous réservons un accueil chaleureux.<br /><br />
							À l'arrière du restaurant, <span className="bold">une cour intérieure spacieuse</span>, à ciel ouvert en été et couverte en hiver. À la tombée de la nuit, l'endroit s'anime aux couleurs du Brésil.<br /><br /> 
							Nous organisons <span className="bold">une fois par mois une soirée dansante</span>. 🎤 De 19h30 à 21h00 un groupe de musique cubaine, mexicain ou brésilien selon le thème viendra illuminé votre repas. <br /><br />  🎵 A partir de 21h00 nous ouvrons une piste de danse ou<span className="bold"> salsa cubaine, bachata </span>et d'autres courant musicaux selon le thème de la soirée dans une ambiance festive et colorée unique.
							
							<br /><br /><span className="bold">Les guirlandes lumineuses tissent un ballet coloré, rappelant les soirées festives cariocas </span>. Un lieu où la détente s'invite, devant des burgers d'exception à la recette unique 🍔🍅🥒🌶️ conçus et cuisinés par de véritables chefs de la cuisine mexicaine. <br /><br />
							<span className="bold">Alors, tenté par un petit bout de soleil et de piment en plein Paris ?</span>
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

export default LeResto