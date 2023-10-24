import React from "react";
import "../../../../utils/style/base.scss"
import "../../Actus/style.scss";
import { useEffect } from "react";

function NotreGuacamole() {

	useEffect(() => {

		const diptiqueAnim = document.querySelector(".diptique");
		diptiqueAnim.style.left = "0px";

	})

	return (
		<>
			<div className="pageAnciensActus" >
				<img
					className="imageBigActus1"
					src="/img/page-guacamole-cactus-san-cho.jpg"
					alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
				/>
				<div className="diptique" >
					<h1 className="actusTitle">Notre Guacamole au Cactus</h1>
					<br />
					<br />
					<br />

					<p className="subTextAnciens"><span className="bold">Nos avocats, gorgés de soleil sont directements importés du Mexique.<br />
					Tous nos autres fruits et légumes sont d'origine France. Vous pouvez dormir sur vos deux oreilles quant à la qualité de nos ingrédients.</span>
					<br /><br /><br />
						<p className="textAnciens">🥑<span className="bold">     Découvrez le Guacamole Green Power chez San Cho Burger !    </span>  🥑<br /><br />

							Chez San Cho Burger, nous croyons que la qualité des ingrédients fait la différence. C'est pourquoi nous sommes fiers de vous présenter notre tout nouveau guacamole, une recette maison préparée avec des avocats, des tomates et des oignons <span className="bold">100% issus de l'agriculture biologique.</span><br /><br />

							Savourez la fraîcheur à chaque bouchée et ressentez le vrai goût de la nature. Cultivés sans produits chimiques ni pesticides, nos ingrédients préservent la santé de notre planète et la vôtre.<span className="bold"> Venez vivre une expérience gustative authentique et engagée, tout en soutenant une agriculture respectueuse de l'environnement.</span><br /><br />

							🌱<span className="bold"> San Cho Burger</span> : Où le bio rencontre le délicieux ! 🌱

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

export default NotreGuacamole