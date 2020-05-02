import React from "react";
import "../cards/cards.styles.css"

export const Cards = props => (

	<div className="card-container ">
		<img src="https://robohash.org/YQZ.png?set${props.monster.id}&size=150x150" alt="monster" />
		<h2>{props.monster.name}</h2>
		<p>{props.monster.email}</p>
	</div>

);