import React from "react";
import "../../../../utils/style/base.scss"
import "../../Actus/style.scss";
import { useEffect } from "react";

function PourquoiCaPique() {

	useEffect(() => {

	const diptiqueAnim = document.querySelector(".diptique");
	diptiqueAnim.style.left = "0px";

	})

	return(
		<>	
			<div className="pageAnciensActus" >
				<img
					className="imageBigActus1"
					src="/img/pourquoi-c-est-bon-quand-ca-pique-san-cho.jpg"
					alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
				/>
				<div className="diptique" >
					<h1 className="actusTitle">Pourquoi "c'est bon quand ça pique?"</h1>
					<br/>
					<br/>
					<br/>
					
					<p className="subTextAnciens">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore quia vitae beatae, corrupti cumque, praesentium impedit voluptatem iure labore laborum id, quasi cum repellendus quam reiciendis eaque. Dicta, pariatur?
					<p className="textAnciens">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores fugit exercitationem perspiciatis deleniti repellat obcaecati tempore quibusdam.
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores fugit exercitationem perspiciatis deleniti repellat obcaecati tempore quibusdam quaerat, dolorem illum natus, soluta dolor officia expedita harum adipisci reiciendis laudantium fugiat assumenda nam! Ad porro alias atque! Ipsa, perferendis debitis vel repudiandae qui incidunt fugit, sint tenetur a velit eveniet necessitatibus fugiat. Tempore eum ducimus adipisci exercitationem, magnam veritatis, quidem mollitia laudantium, facilis rem dicta!.
					<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores fugit exercitationem perspiciatis deleniti repellat obcaecati tempore quibusdam quaerat, dolorem illum natus, soluta dolor officia expedita harum adipisci reiciendis laudantium fugiat assumenda nam! Ad porro alias atque! Ipsa, perferendis debitis vel repudiandae qui incidunt fugit, sint tenetur a velit eveniet necessitatibus fugiat. Tempore eum ducimus adipisci exercitationem, magnam veritatis, quidem mollitia laudantium.</p>
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

export default PourquoiCaPique