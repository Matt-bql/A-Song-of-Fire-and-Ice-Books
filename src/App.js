import React from "react";
import Container from "./components/Container";
import "./styles/stylereset.css";
import "./styles/style.css";
console.log("render");
class App extends React.Component {
  state = {};
  render() {
    const arr = [{ type: "Books" }, { type: "Characters" }, { type: "Houses" }];

    return (
      <div className="body-container">
        <div className="category-container">
          {arr.map((item) => {
            return (
              <div className="category-style">
                <Container item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
