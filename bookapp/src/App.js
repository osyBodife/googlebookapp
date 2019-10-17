import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Book from "./components/Book";
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
