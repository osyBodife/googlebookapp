import React, { Component } from "react";
import Header from "./components/Header";
import Book from "./components/Book";
//import SearchArea from "./components/SearchArea";
//import friends from "./friends.json";
class App extends Component {
render() {
  return (
    <div className="App">
      <Header />
      <Book />
      
    </div>
  );
}
}
export default App;
