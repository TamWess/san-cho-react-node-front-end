import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../utils/style/style.scss";
import Slideshow from "../../../src/components/slide/index";
import "../../utils/style/footer.css";
import "../../components/slide/style.css"


// -----------JS-Classic---------

// ------------------------------ Carroussel ------------------------------

// ----------REACT-----------

function Home() {
  useEffect(() => {

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

	const Burger = document.querySelector("#homeImage")

	function animBurger () {
		Burger.style.right = 0
	};

	animBurger();

    const restoStory = document.querySelector(".restoStory");
    console.log(restoStory);

    window.addEventListener("scroll", function () {
      if (window.scrollY > 280) {
        restoStory.style.opacity = "1";
        restoStory.style.right = "0px";
      }
    });

	// -------- Anim Carroussel ------

    // console.log(carroussel);

	window.addEventListener('load', function() {
		const carroussel = document.querySelector(".slider");

		window.addEventListener("scroll", function () {
			if (window.scrollY > 830) {
				carroussel.style.opacity = "1";
				carroussel.style.left = "0px";
			}
		});
	})

	// -------- Mousemove Burger ---------

    const mousemove = document.querySelector(".mousemove");

    window.addEventListener("mousemove", function (e) {
      // console.log(e.target);
      mousemove.style.left = e.pageX + "px";
      mousemove.style.top = e.pageY + "px";
    });

    const menuBurger = document.querySelector(".menuBurger");
    const rollBurger = document.querySelector(".rollBurger");
    const closeRoll = document.querySelector(".closeButton");

    menuBurger.addEventListener("click", function () {
      // console.log("okay");
      rollBurger.style.opacity = "1";
      rollBurger.style.left = "0px";
    });

    closeRoll.addEventListener("click", function () {
      console.log("okay");
      // rollBurger.style.opacity = "1"
      // rollBurger.style.fillystyle = rgba(255, 215, 0, 0.6)
      rollBurger.style.left = "200px";
    });

    // const piment = document.querySelector("#pimentImage");

    // piment.addEventListener("mouseover", function () {
    //   console.log("waoooh!");
    //     piment.style.rotate = 25 + "deg";
    // });

	// piment.addEventListener("mouseleave", function () {
	//       piment.style.rotate = 0 + "deg";
	//   });

    const burgerCarte = document.getElementById("burgerCarte");
    const burger01 = document.querySelectorAll(".burgersChoiceCadre1");

    // burgerCarte.innerHTML = ".burger01";
  });
  return (
    <div className="home">
      <div id="homeImage">
        <div className="mousemove">
          <img
            src="/icns/San_cho_burger.svg"
            alt="Burger Mexicain Accueil Titi Burger Viande Bio Livraison Rapide Restaurant Paris"
          />
        </div>
        <h1>San Cho de Cuba! </h1>
      </div>
      <main>
        <div className="banniere">
          <div className="divBanniere">Livraison rapide</div>
          <div className="divBanniere">Produits 100% BIO</div>
          <div className="divBanniere">Viande origine France</div>
        </div>

        <section className="restoStory">
          <div className="leResto">
            <h2 id="TitleLeResto">Le Resto</h2>
          </div>
          <div className="titiStory">
            <h2 className="titiStoryTitle">Titi Story</h2>
            <p className="titiStory">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum.
              Quisquam omnis doloribus aspernatur, ipsam dolor nesciunt dolore
              tenetur laudantium magni delectus aperiam in ad autem, incidunt
              facere consequatur maxime! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Id, cum. Quisquam omnis doloribus aspernatur,
              ipsam dolor nesciunt dolore tenetur laudantium magni delectus
              aperiam in ad autem, incidunt facere consequatur maxime! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Id, cum.
              Quisquam omnis doloribus aspernatur, ipsam dolor nesciunt dolore
              tenetur laudantium magni delectus aperiam in ad autem, incidunt
              facere consequatur maxime!
            </p>
            <p className="lireLaSuite">Lire la suite</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nostrum fuga eaque veniam autem, optio quos iste
                tempora recusandae animi similique suscipit accusamus, natus,
                sit dolor enim? Reiciendis, maiores? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Expedita nostrum fuga eaque veniam
                autem,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nostrum fuga eaque veniam autem, optio quos iste
                tempora nihil recusandae animi similique suscipit accusamus,
                natus, sit dolor enim? Reiciendis, maiores? Lorem ipsum dolor
                sit amet consectetur adipisicing elit.
              </p>
            </div>
			<Slideshow />
          </div>
        </section>
        <section className="actus">
          <h2 className="actusBigTitle">Actus</h2>
          <div className="actusSub">
            <div className="actus1">
              <img
                className="imageActus1"
                src="/img/Man_with_a_hat.jpg"
                alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
              />
              <h2 className="actusTitle">La Recette des anciens</h2>
            </div>
            <div className="actus1">
              <img
                className="imageActus2"
                src="/img/guaca_tomato.jpg"
                alt="SanCho San Cho Recette Guacamole Livraison Rapide Restaurant Mexicain Paris Burger"
              />
              <h2 className="actusTitle">Notre Guacamole au Cactus</h2>
            </div>
            <div className="actus1">
              <img
                className="imageActus3"
                src="/img/trumpetist.jpg"
                alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
              />
              <h2 className="actusTitle">
                Pourquoi "c'est bon quand ça pique"?
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className="newsletterSection">
            <div className="newsletter">
              <div className="newsletter01">
                Des offres chaque semaine sur San-Cho en t'inscrivant à la
                NewsLetter
              </div>
              <div className="newsletter02">
                c'est par ici
                <img src="/Linkssets/icns/Linkrrow-right.svg" alt="" />
              </div>
              <label for="emailNewsLetter">Email :</label>
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
