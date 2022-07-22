import "./App.css";
import { Component } from "react";
import { CardList } from "./components/cardlist/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  state_handler = (char) => {
    return this.setState({ searchField: char.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rodolex</h1>
        <SearchBox placeholder="Search Your Monster!" state_handler={this.state_handler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
