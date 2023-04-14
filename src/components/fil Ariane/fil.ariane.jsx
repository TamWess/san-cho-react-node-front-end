import { Link } from "react-router-dom"
// import "./san-cho-burgers.scss";



function FilAriane(){


	let burger = JSON.parse(localStorage.getItem("burger"))?.image;
	let accompagnement = JSON.parse(localStorage.getItem("accompagnement"))?.image;
	let boisson = JSON.parse(localStorage.getItem("boisson"))?.image;
	let dessert = JSON.parse(localStorage.getItem("dessert"))?.image;

	return(
		<div className="filAriane">
			<Link to="/burger"><img className="arianeSelected" src={burger?? "/img/ariane-carre-vide.jpg"} alt=""/>
			</Link>
			<div className="arianeFil"></div>
			<Link to="/accompagnement"><img className="arianeSelected" src={accompagnement?? "/img/ariane-carre-vide.jpg"} alt=""/></Link>
			<div className="arianeFil"></div>
			<Link to="/boisson"><img className="arianeSelected" src={boisson?? "/img/ariane-carre-vide.jpg"} alt=""/>
			</Link>
			<div className="arianeFil"></div>
			<Link to="/dessert"><img className="arianeSelected" src={dessert?? "/img/ariane-carre-vide.jpg"} alt=""/>
			</Link>
		</div>
	)
}

export default FilAriane





// let burger  = localStorage.getItem()

// img src={burger ?? '/imgage/carre-gris.png'}