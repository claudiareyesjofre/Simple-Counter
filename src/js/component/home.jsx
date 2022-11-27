import React from "react";


const Home = ({segundos}) => {
	let string = segundos.toString()
	let uno = string[string.length -1]
	let diez = string[string.length -2]
	let cien = string[string.length -3]
	let mil = string[string.length -4]
	let diezmil = string[string.length -5]
		
			return(
			<div className="bigCounter">
				<div className="icono"> <i class="far fa-clock"></i>
				</div>
				<div className="counter box">{diezmil==undefined?"0" : diezmil}</div> 
				<div className="counter box">{mil==undefined?"0" : mil}</div>
				<div className="counter box">{cien==undefined?"0" : cien}</div>
				<div className="counter box">{diez==undefined?"0" : diez}</div>
				<div className="counter box">{uno==undefined?"0" : uno}</div>
				
			</div>);
		}

export default Home;
