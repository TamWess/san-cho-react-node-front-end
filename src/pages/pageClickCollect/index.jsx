import React from "react";
import "./style.css";

function ClickCollect() {
	return(
		<>
		<div id="cadreVide">
		</div>
		<div id="clickAndCollect">
            <div class="boutonClickCollect">
                <h2 class="textCollect">Click & Collect</h2>
            </div>
            <div class="squarePath">
                <img class="rectangle" src="/icns/Rectangle_yellow.svg" alt=""/>
                <img class="rectangle" src="/icns/Rectangle_yellow.svg" alt=""/>
                <img class="rectangle" src="/icns/Rectangle_yellow.svg" alt=""/>
            </div>
		    <h2 class="commandDegustez">Commandez et dégustez</h2>
			<p class="clickText">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
		</div>
		<a id="aCommencer" href="/san-cho-burgers.html">
            <div id="sectionCommencer">
			    <h2 class="commencer">Commencez</h2>
            </div>
        </a>
		
		</>
	)
}