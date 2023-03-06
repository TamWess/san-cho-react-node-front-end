import React from "react";
import { Link } from "react-router-dom";
import "../../utils/style/style.scss";
import "../../utils/style/meyer.css";

// -----------JS-Classic---------

// const header = document.querySelector(".container");

// // ------------------------------ Carroussel ------------------------------

// let scroll = 0;

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 200) {
//     header.style.top = "-90px";
//     if (window.scrollY < scroll) {
//       header.style.top = "0px";
//     }
//   }
//   scroll = window.scrollY;
// });

// const restoStory = document.querySelector(".restoStory");
// // console.log(restoStory);

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 280) {
//     restoStory.style.opacity = "1";
//     restoStory.style.right = "0px";
//   }
// });

// const carroussel = document.querySelector(".carroussel");
// // console.log(carroussel);

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 830) {
//     carroussel.style.opacity = "1";
//     carroussel.style.left = "30px";
//   }
// });

// const mousemove = document.querySelector(".mousemove");

// window.addEventListener("mousemove", function (e) {
//   // console.log(e.target);
//   mousemove.style.left = e.pageX + "px";
//   mousemove.style.top = e.pageY + "px";
// });

// const menuBurger = document.querySelector(".menuBurger");
// const rollBurger = document.querySelector(".rollBurger");
// const closeRoll = document.querySelector(".closeButton");

// menuBurger.addEventListener("click", function () {
//   // console.log("okay");
//   rollBurger.style.opacity = "1";
//   rollBurger.style.left = "0px";
// });

// closeRoll.addEventListener("click", function () {
//   console.log("okay");
//   // rollBurger.style.opacity = "1"
//   // rollBurger.style.fillystyle = rgba(255, 215, 0, 0.6)
//   rollBurger.style.left = "200px";
// });

// const piment = document.querySelector("#pimentImage");

// piment.addEventListener("mouseenter", function () {
//   console.log("waoooh!");
//   if (piment.mouseenter) {
//     piment.style.rotate = 90 + "deg";
//   }

//   if (piment.mouseenter) {
//     piment.style.rotate = 0 + "deg";
//   }
// });

// const burgerCarte = document.getElementById("burgerCarte");
// const burger01 = document.querySelectorAll(".burgersChoiceCadre1");

// burgerCarte.innerHTML = ".burger01";

// ----------REACT-----------

function Home() {
  return (
    <div>
      <div id="homeImage">
        <div class="mousemove">
          <img
            src="../../../public/icns/San_cho_burger.svg"
            alt="Burger Mexicain Accueil Titi Burger Viande Bio Livraison Rapide Restaurant Paris"
          />
        </div>
        <h1>San Cho de Cuba! </h1>
      </div>
      <main>
        <div class="banniere">
          <div class="divBanniere">Livraison rapide</div>
          <div class="divBanniere">Produits 100% BIO</div>
          <div class="divBanniere">Viande origine France</div>
        </div>

        <section class="restoStory">
          <div class="leResto">
            <h2 id="TitleLeResto">Le Resto</h2>
          </div>
          <div class="titiStory">
            <h2 class="titiStoryTitle">Titi Story</h2>
            <p class="titiStory">
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
            <p class="lireLaSuite">Lire la suite</p>
          </div>
        </section>

        <div class="VLine">
          <img src="../../../public/icns/ligne_v.svg" alt="" />
        </div>

        <section>
          <div class="nosBurgerSection">
            <div class="nosBurgers">
              <h2 class="titiStoryTitle nosBurgersTitle">Nos Burgers</h2>
              <p class="nosBurgersText">
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
            <div class="carroussel">
              <li class="carrousselCadre">
                <Link to="#">
                  <img
                    class="image1"
                    src="assets/img/Burger_Le_Gros_San_Cho.jpg"
                    alt="SanCho San Cho Burger Gros Piment Livraison Rapide Restaurant Mexicain Paris Burger"
                  />
                </Link>
              </li>
              <li class="carrousselCadre">
                <Link to="#">
                  <img
                    class="image2"
                    src="assets/img/Burger_La_Muerte.jpg"
                    alt="SanCho San Cho Burger Muerte Piment Livraison Rapide Restaurant Mexicain Paris Burger"
                  />
                </Link>
              </li>
              <li class="carrousselCadre">
                <Link to="#">
                  <img
                    class="image3"
                    src="assets/img/Burger_Le_Che.jpg"
                    alt="SanCho San Cho Burger Che Piment Livraison Rapide Restaurant Mexicain Paris Burger"
                  />
                </Link>
              </li>
              <li class="carrousselCadre">
                <Link to="#">
                  <img
                    class="image3"
                    src="assets/img/Burger_Le_Che.jpg"
                    alt="SanCho San Cho Burger Che Piment Livraison Rapide Restaurant Mexicain Paris Burger"
                  />
                </Link>
              </li>
              <li class="carrousselCadre">
                <Link to="#">
                  <img
                    class="image3"
                    src="assets/img/Burger_Le_Che.jpg"
                    alt="SanCho San Cho Burger Che Piment Livraison Rapide Restaurant Mexicain Paris Burger"
                  />
                </Link>
              </li>
            </div>
          </div>
        </section>

        <section class="actus">
          <h2 class="actusBigTitle">Actus</h2>
          <div class="actusSub">
            <div class="actus1">
              <img
                class="imageActus1"
                src="assets/img/Man_with_a_hat.jpg"
                alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
              />
              <h2 class="actusTitle">La Recette des anciens</h2>
            </div>
            <div class="actus1">
              <img
                class="imageActus2"
                src="assets/img/guaca_tomato.jpg"
                alt="SanCho San Cho Recette Guacamole Livraison Rapide Restaurant Mexicain Paris Burger"
              />
              <h2 class="actusTitle">Notre Guacamole au Cactus</h2>
            </div>
            <div class="actus1">
              <img
                class="imageActus3"
                src="assets/img/trumpetist.jpg"
                alt="SanCho San Cho Recette Piment Livraison Rapide Restaurant Mexicain Paris Burger"
              />
              <h2 class="actusTitle">Pourquoi "c'est bon quand ça pique"?</h2>
            </div>
          </div>
        </section>

        <section>
          <div class="newsletterSection">
            <div class="newsletter">
              <div class="newsletter01">
                Des offres chaque semaine sur San-Cho en t'inscrivant à la
                NewsLetter
              </div>
              <div class="newsletter02">
                c'est par ici
                <img src="/Linkssets/icns/Linkrrow-right.svg" alt="" />
              </div>
              <label for="emailNewsLetter">Email :</label>
              <input type="email" id="emailNewsLetter" name="email" />
              <Link to="#">
                <img
                  class="sendButton"
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
