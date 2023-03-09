import React from "react";
import "./style.css";

function ClickCollect() {
	return(
		<div id="clickCollectPage">
		<div id="cadreVide">
		</div>
		<div id="clickAndCollect">
            <div className="boutonClickCollect">
                <h2 className="textCollect">Click & Collect</h2>
            </div>
            <div className="squarePath">
                <img className="rectangle" src="/icns/Rectangle_yellow.svg" alt=""/>
                <img className="rectangle" src="/icns/Rectangle_yellow.svg" alt=""/>
                <img className="rectangle" src="/icns/Rectangle_yellow.svg" alt=""/>
            </div>
		    <h2 className="commandDegustez">Commandez et dégustez</h2>
			<p className="clickText">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
		</div>
		<a id="aCommencer" href="/burger">
            <div id="sectionCommencer">
			    <h2 className="commencer">Commencez</h2>
            </div>
        </a>
		</div>
	)
}

export default ClickCollect;