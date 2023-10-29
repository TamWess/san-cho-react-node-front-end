import React, { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.scss"

function Template() {

	const rollMenuRef = useRef("none")
	const menuBurgerRef = useRef(null)
	const closeButtonRef = useRef(null)

	
	function rollMenuVisible() {
		
		rollMenuRef.current.style.display = "flex"
	}
	
	function rollMenuInvisible() {
		
		rollMenuRef.current.style.display = "none"
	}
	
	useEffect(() => {

		menuBurgerRef.current.addEventListener("click", function () {
			rollMenuRef.current.style.opacity = "1";
			rollMenuRef.current.style.left = "0px";
		});

		closeButtonRef.current.addEventListener("click", function () {
			rollMenuRef.current.style.left = "250px";
		});
	}, [])

	return (
		<>
			<header>
				<div className="container">
					<Link className="sizeLogo" to="/">
							<img className="logoNav"
								src="/img/San_Cho_Logo_white.svg"
								alt="Logo Entreprise San Cho Sancho Fast food Restaurant Burger Paris Livraison Rapide"
							/>
					</Link>
					<div className="menuBurger" ref={menuBurgerRef}>
						<img src="/icns/burger-menu.svg" alt="" onClick={rollMenuVisible} />
					</div>
					<div className="rollMenu" ref={rollMenuRef}>
						<ul className="textRoll">
							<li className="closeButton">
								<img src="/icns/close-button.svg" alt="" ref={closeButtonRef} />
							</li>
							<Link className="link" to="/" onClick={rollMenuInvisible}><li className="rollSpace01">Accueil</li></Link>
							<Link className="link" to="/clickandcollect" onClick={rollMenuInvisible}><li className="rollSpace">Click and Collect</li></Link>
							<Link className="link" to="/LaCarte" onClick={rollMenuInvisible}><li className="rollSpace">La carte</li></Link>
							<Link className="link" to="/LeResto" onClick={rollMenuInvisible}><li className="rollSpace">Le resto</li></Link>
							<Link className="link" to="laSanChoStory" onClick={rollMenuInvisible}><li className="rollSpace">San Cho story</li></Link>
							<Link className="link" to="/actus" onClick={rollMenuInvisible}><li className="rollSpace">Actus</li></Link>
						</ul>
					</div>

					<div className="headerRight">
						<div className="bouton">
							<Link
								to="/clickandcollect"
								className="callToAction"
							>
								Click and Collect
							</Link>
							{/* <Link to="" className="callToAction">
								Livraison
							</Link> */}
							<nav>
								<ul className="listeNav">
									<li>
										<Link to="/LaCarte">La carte</Link>
									</li>
									<li>
										<Link to="/LeResto">Le resto</Link>
									</li>
									<li>
										<Link to="laSanChoStory">San Cho story</Link>
									</li>
									<li>
										<Link to="/actus">Actus</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<section>
				<Outlet />
			</section>
			<footer>
				<div className="footer">
					<div className="footerDiv01">
						<p>Mentions légales</p>
						<p>CGU</p>
						<p>CGV</p>
					</div>
					<div className="footerDiv02">
						<p>Plan du site</p>
						<p>La carte</p>
						<p>San Cho Story</p>
						<p>Le resto</p>
						<p>Actus</p>
					</div>
					<div className="footerDiv04">
						<p>Contact</p>
						<p>0ù nous trouver</p>
						<p>FAQ</p>
					</div>
					<div className="footerDiv05">
						<img src="/icns/facebook.svg" alt="" />
						<img src="/icns/instagram.svg" alt="" />
						<img src="/icns/twitter.svg" alt="" />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Template;
