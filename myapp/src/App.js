/** @format */

import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "moatez Boazizi",
      Profession: "student",
      Bio: "Dopped out of college to go through new challenges, currently learning web development aiming to be a Fullstack JS Developer ",
      image:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.unamur.be%2Fsciences%2Fchimie%2Frco%2Fmembres-images%2Finconnu%2Fimage_preview&imgrefurl=https%3A%2F%2Fwww.unamur.be%2Fsciences%2Fchimie%2Frco%2Fmembres-images%2Finconnu%2Fview&tbnid=y-V2Lr47mlaYpM&vet=12ahUKEwjhntWLpanxAhWQvKQKHUoPCOsQMygAegUIARCYAQ..i&docid=GLSMlx8Ck1sZeM&w=400&h=398&q=inconnu&ved=2ahUKEwjhntWLpanxAhWQvKQKHUoPCOsQMygAegUIARCYAQ",
      show: true,
      time: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => ({
        time: this.state.time + 1,
      }));
    }, 1000);
  }
  handleShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <img src={this.state.image} alt="lfdv"></img>
            <h1>{this.state.FullName}</h1>
            <h3>{this.state.Bio}</h3>
            <h3>{this.state.Profession}</h3>
          </>
        )}
        <button onClick={this.handleShow}> Show</button>
        <div> {this.state.time}</div>
      </div>
    );
  }
}

export default App;
