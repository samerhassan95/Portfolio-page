import React from "react";
import "./herosection.css";
class herosection extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      position: "",
    };
  }

  render() {
    return (
      <>
        <div className="">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
              alt="Card image"
            ></img>
            <div className="card-img-overlay text-center col-3 ms-5 ">
              <h1 className="card-title  ">Samer Hassan</h1>
              <p className="card-text ">Web developer</p>
              <button className="btn btn-dark btn-lg card-text">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default herosection;
