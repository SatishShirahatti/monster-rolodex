import React from "react";
import '../card-list/card-list.styles.css';
import { Cards } from "../cards/cards.component"


export const CardList = props => (
	< div className="card-list" >
		{
			props.monsters.map(monster =>
				<Cards key={monster.id} monster={monster}></Cards>

			)
		}
	</div >

);

