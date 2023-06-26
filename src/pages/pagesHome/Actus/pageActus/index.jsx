import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.scss"

export default function PageActus() {

	return(
		<>
			<div className="pageActusClass">
				<h2 className="actusBigTitle">Actus</h2>
				<div className="actusSub">
				<Link className="actusAntiUnderline" to="/actus/laRecetteDesAnciens">
					<div className="actus1">
						<img
							className="imageActus1"
							src="/img/Man_with_a_hat.jpg"
							alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
						/>
						<h2 className="actusTitle">La Recette <br/> des anciens</h2>
					</div>
				</Link>
				<Link className="actusAntiUnderline" to="/actus/notreGuacamoleAuCactus">
					<div className="actus1">
						<img
						className="imageActus2"
						src="/img/guaca_tomato.jpg"
						alt="SanCho San Cho Recette Guacamole Livraison Rapide Restaurant Mexicain Paris Burger"
						/>
						<h2 className="actusTitle">Notre Guacamole <br/> au Cactus</h2>
					</div>
				</Link>
				<Link className="actusAntiUnderline" to="/actus/PourquoiCestBonQuandCaPique">
					<div className="actus1">
						<img
						className="imageActus3"
						src="/img/trumpetist.jpg"
						alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
						/>
						<h2 className="actusTitle">
						Pourquoi "c'est bon <br/> quand ça pique"?
						</h2>
					</div>
				</Link>
				</div>
			</div>
			<Outlet/>
		</>
	)
}