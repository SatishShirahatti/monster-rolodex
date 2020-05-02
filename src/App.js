import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/searchbox.component";


class App extends Component {

	constructor() {
		super();
		this.state = {
			string: "sama",
			monsters: [],
			searchField: "",

		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(Response => Response.json())
			.then(users => this.setState({ monsters: users }))
	}
	handleChange = (e) => {
		this.setState({ searchField: e.target.value })
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className="App">
				<header className="App-header">
					<h1>Monster RoloDex</h1>
					<SearchBox placeholder="search monsters" handleChange={this.handleChange} />

					<CardList monsters={filteredMonster} />
				</header>
			</div>
		)
	}

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
