import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log("HelloWorld constructor called");
  }

  componentDidMount() {
    console.log("HelloWorld componentDidMount called ");

    this.intervalId = setInterval(() => {
      console.log("HelloWorld is working");
    }, 1000);
  }

  shouldComponentUpdate(){
    console.log("HelloWorld shouldComponentUpdate called ");


    return false;
  }

  componentDidUpdate() {
    console.log("HelloWorld Update");
  }

  componentWillUnmount() {
    console.log("HelloWorld componentWillUnMount called");
  
    clearInterval(this.intervalId);

  }

  render() {
    console.log("HelloWorld render called");

    return <h1>Yeah! Cunter is 5! :D</h1>;
  }
}

export default HelloWorld;
