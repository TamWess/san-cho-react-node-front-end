import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../utils/style/base.scss";
import "../../utils/style/style.scss";
import Slideshow from "../../../src/components/slide/index";
import "../../components/slide/style.scss"

// ----------REACT-----------

function Home() {

	const videoRef = useRef();

	useEffect(() => {

		// --------- h1 ----------

		const sanChoDeCuba = document.querySelector("h1");
		sanChoDeCuba.style.right = "0px";

		// -------- Anim Carroussel ------

		window.addEventListener('load', function () {
			const carroussel = document.querySelector(".slider");

			window.addEventListener("scroll", function () {
				if (window.scrollY > 650) {
					carroussel.style.opacity = "1";
					carroussel.style.left = "0px";
				}
			});
		})
		// // ---------Anime Burger PNG ----------

		// 	const burgerEntry = document.querySelector(".burgerPng");
		// 		burgerEntry.style.left = "0px";


		// ---------Anim Header------

		const header = document.querySelector(".container");

		let scroll = 0;

		window.addEventListener("scroll", function () {
			if (window.scrollY > 200) {
				header.style.top = "-90px";
				if (window.scrollY < scroll) {
					header.style.top = "0px";
				}
			}
			scroll = window.scrollY;
		});

		// -------Anim Burger-------

		// const Burger = document.querySelector("#homeImage")

		// function animBurger () {
		// 	Burger.style.right = 0
		// };

		// animBurger();

		const restoStory = document.querySelector(".restoStory");
		console.log(restoStory);

		window.addEventListener("scroll", function () {
			if (window.scrollY > 280) {
				restoStory.style.opacity = "1";
				restoStory.style.right = "0px";
			}
		});

		// -------- Mousemove Burger ---------

		const mousemove = document.querySelector(".mousemove");

		window.addEventListener("mousemove", function (e) {
			// console.log(e.target);
			mousemove.style.left = e.pageX + "px";
			mousemove.style.top = e.pageY + "px";
		});

		// const menuBurger = document.querySelector(".menuBurger");
		// const rollMenu = document.querySelector(".rollMenu");
		// const closeRoll = document.querySelector(".closeButton");

		// menuBurger.addEventListener("click", function () {
		//   rollMenu.style.opacity = "1";
		//   rollMenu.style.left = "0px";
		// });

		// closeRoll.addEventListener("click", function () {
		//   console.log("okay");
		//   rollMenu.style.left = "200px";
		// });

		const burgerCarte = document.getElementById("burgerCarte");
		const burger01 = document.querySelectorAll(".burgersChoiceCadre1");

	});
	function handleEnd() {
		console.log('test');
		const source = videoRef.current.querySelector('source');
		source.setAttribute('src', '/videos/Entry-san-cho-loop.mp4')
		videoRef.current.loop = true;
		videoRef.current.load();
		videoRef.current.play();
	}
	return (
		<div className="home">
			<div id="homeImage">
				<video autoPlay muted onEnded={handleEnd} className="homeVideo" ref={videoRef}>
					<source src="/videos/entry-san-cho.mp4" type="video/mp4" />
				</video>
				<img className="burgerPng" src="/img/san_cho_background.png" alt="San cho" />
				<div className="mousemove">
					<img className="imgMouseMove"
						src="/icns/San_cho_burger.svg"
						alt="Burger Mexicain Accueil Titi Burger Viande Bio Livraison Rapide Restaurant Paris"
					/>
				</div>
				<h1 className="sanChoDeCuba">San Cho de Cuba! </h1>
			</div>
			<main>
				<div className="banniere">
					<div className="divBanniere">Livraison rapide</div>
					<div className="divBanniere">Produits 100% BIO</div>
					<div className="divBanniere">Viande origine France</div>
				</div>

				<section className="restoStory">
					<Link to="/LeResto" className="leResto"><div >
						<h2 id="TitleLeResto">Le Resto</h2>
					</div>
					</Link>
					<div className="titiStory">
						<h2 className="titiStoryTitle">San Cho Story</h2>
						<p className="titiStory">
							Dans les rues animées de Paris, un nouveau spot culinaire a vu le jour : <span className="bold">San-cho Burger</span>. <br /><br /><br />
							Derrière cette innovation, deux passionnés de la cuisine mexicaine.<br /> 
							Après des mois passés à explorer les marchés locaux du Mexique, à savourer burritos et enchiladas, <span className="bold">ils tombèrent amoureux des ingrédients :</span> le guacamole, le piment et les viandes typiques des burritos.<br />
							L'idée brillante leur vint en mordant dans un taco : 
							Dans les rues animées de Paris, un nouveau spot culinaire a vu le jour : <span className="bold">et si on faisait de tout des burgers?</span><br /><br />
						</p>
						<Link to={"laSanChoStory"} className="lireLaSuite">En savoir plus...</Link>
					</div>
				</section>

				<div className="VLine">
					<img src="/icns/ligne_v.svg" alt="" />
				</div>

				<section>
					<div className="nosBurgerSection">
						<div className="nosBurgers">
							<h2 className="titiStoryTitle nosBurgersTitle">Nos Burgers</h2>
							<p className="nosBurgersText">
								Le plus de nos burgers se trouve dans nos <span className="bold">ingrédients et recettes mexicaines</span>...<br/>
								Guacamole, piment mexicain, viande barbacoa... Vous n'aurez jamais gouté un burger pareil.
								Nos légumes sont tous issues de <span className="bold">l'agriculture biologique</span>, qualité au rendez-vous.<br/>
								Découvrez notre fameux burger San-Cho, Le Samaritain, Le Ché, El Justo...<br/>
								<span className="bold">Chaque burger ayant son caractère bien affirmé</span><br/>
								Nos burgers vous feront voyager et une chose est certaine... Ils ne vous laisseront pas indifférent.

							</p>
						</div>
						<Slideshow />
					</div>
				</section>
				<section className="actus">
					<h2 className="actusBigTitle">Actus</h2>
					<div className="actusSub">
						<Link className="actusAntiUnderline" to="/laRecetteDesAnciens">
							<div className="actus1">
								<img
									className="imageActus1"
									src="/img/Man_with_a_hat.jpg"
									alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
								/>
								<h2 className="actusTitle">La Recette des anciens</h2>
							</div>
						</Link>
						<Link className="actusAntiUnderline" to="/notreGuacamoleAuCactus">
							<div className="actus1">
								<img
									className="imageActus2"
									src="/img/guaca_tomato.jpg"
									alt="SanCho San Cho Recette Guacamole Livraison Rapide Restaurant Mexicain Paris Burger"
								/>
								<h2 className="actusTitle">Notre Guacamole au Cactus</h2>
							</div>
						</Link>
						<Link className="actusAntiUnderline" to="/PourquoiCestBonQuandCaPique">
							<div className="actus1">
								<img
									className="imageActus3"
									src="/img/trumpetist.jpg"
									alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
								/>
								<h2 className="actusTitle">
									Pourquoi "c'est bon <br /> quand ça pique"?
								</h2>
							</div>
						</Link>
					</div>
				</section>
				<section>
					<div className="newsletterSection">
						<div className="newsletter">
							<div className="newsletter01">
								Des offres chaque semaine sur San Cho en t'inscrivant à la
								NewsLetter
							</div>
							<div className="newsletter02">
								c'est par ici
								<img src="/Linkssets/icns/Linkrrow-right.svg" alt="" />
							</div>
							{/* ---- Titre Newsletter Responsive ---- */}
							<h2 className="titleNewsletterResp">Newsletter</h2>
							{/* ---- Titre Newsletter Responsive ---- */}
							<label className="emailTextInput" for="emailNewsLetter">Email :</label>
							<input type="email" id="emailNewsLetter" name="email" />
							<Link to="#">
								<img
									className="sendButton"
									src="/Linkssets/icns/send-solid.svg"
									alt=""
								/>
							</Link>
						</div>
					</div>
					<div id="pimentImage"></div>
				</section>
			</main>
		</div>
	);
}

export default Home;
