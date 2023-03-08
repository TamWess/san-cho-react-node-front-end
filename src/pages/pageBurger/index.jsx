import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pageBurger/san-cho-burgers.css";

// URL API

import { URL } from "../../utils/constantes/urls";

function Burger() {
  const [burgers, setBurgers] = useState([]);

  useEffect(
    () => {
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

    // requete api
  );
	

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
                  <input type="radio" name="burger" id={item._id} />
                  <label className="burgerGrosSanCho" htmlFor={item._id}>
                    <div className="burgerGrosSanchoImg">
                      <img src={item.image}></img>
                    </div>
                    <div className="descriptionProduit">
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </label>
                </div>

                {/* {item.description}
                {item.price.$numberDecimal} */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Burger;
//  <section className="selectionMenu">
//             <div className="menuImage">
//                 <div className="choisissezVotreBurger"><h1>Choisissez votre Burger</h1>
//                 </div>
//                 <div className="filAriane">
//                     <div className="arianeSelected"></div>
//                     <div className="arianeFil"></div>
//                     <div className="arianeVide"></div>
//                     <div className="arianeFil"></div>
//                     <div className="arianeVide"></div>
//                     <div className="arianeFil"></div>
//                     <div className="arianeVide"></div>
//                     <div className="arianeFil"></div>
//                     <div className="arianeVide"></div>
//                 </div>
//                 <div className="line"></div>

//                 <div className="encadrementDiptique">
//                     <div className="burgersChoiceCadre1">
//                         <input type="radio" name="burger" id="burger-1">
//                             <label className="burgerGrosSanCho" for="burger-1">
//                               <div className="burgerGrosSanchoImg"><img src="../../../public/img/Burger_Le_Gros_San_Cho.jpg" alt=""/>
// //                               </div>
// //                               <div className="descriptionProduit">
// //                                  <h2>Le Gros Sancho</h2>
// //                                  <p>Seulement pour les gros mangeurs.
// //                                  Retrouvez le burger généreux contenant notre sauce secrète à base de guacamole.
// //                                  Attention, le gros San Cho est dans la place!</p>
// //                              </div>
// //                          </label>
// //                          <input type="radio" name="burger" id="burger-2">
// //                             <label className="burgerGrosSanCho" for="burger-2">
// //                                 <div className="burgerGrosSanchoImg"><img src="assets/img/Burger_La_Muerte.jpg" alt="">
// //                                 </div>
// //                                 <div className="descriptionProduit">
// //                                   <h2>La Muerte</h2>
// //                                     <p>Le burger nerveux, de la pire espèce... Sa recette relevée au poivre et à la poudre
// //                                      de piment du brésil vous embarquera loin, de gré ou de force!.</p>
// //                                 </div>
// //                             </label>
// //                          <input type="radio" name="burger" id="burger-3">
// //                             <label className="burgerGrosSanCho" for="burger-3">
// //                                 <div className="burgerGrosSanchoImg"><img src="assets/img/Burger_Le_Che.jpg" alt="">
// //                                 </div>
// //                                 <div className="descriptionProduit">
// //                                       <h2>Le Ché</h2>
// //                                      <p>Si vous avez le goût de la rebellion, vous allez l'adorer. Notre recette aux champignons
// //                                        et à la sauce béarnaise agrémentée de chips nachos est unique, seulement chez San Cho.</p>
// //                                 </div>
// //                             <label>
// //                     </div>
// //                     <div className="burgersChoiceCadre2">
// //                         <input type="radio" name="burger" id="burger-4">
// //                         <label className="burgerGrosSanCho" for="burger-4">
// //                           <div className="burgerGrosSanchoImg"><img src="assets/img/Burger_El_Justo.jpg" alt="">
// //                           </div>
// //                           <div className="descriptionProduit">
// //                              <h2>El Justo</h2>
// //                              <p>El Justo est un burger à la recette exclusivement végane. Tous les ingrédients de ce burger au goût frais sont d'origine
// //                                 bio. Sauce cacahuète et fleur jaune de moutarde.</p>
// //                          </div>
// //                         </label>

// //                     </div>
// //                 </div>
// //                 <div className="boutonSuivant">
// //                     <a href="san-cho-accompagnements.html" className="callToAction">Suivant</a>
// //             </div>

// //         </section>

// //     <!--Banniere reassurance-->

// //         <div className="banniere">
// //             <div className="divBanniere">Livraison rapide</div>
// //             <div className="divBanniere">Produits 100% BIO</div>
// //             <div className="divBanniere">Viande origine France</div>
// //         </div>
