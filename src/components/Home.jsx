import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <>
        <div class="card bg-dark text-white" id="card1" style={{ width: "100%"}}>
          <img
            src="https://media.istockphoto.com/photos/shot-of-a-hacker-using-a-laptop-picture-id1327818236?b=1&k=20&m=1327818236&s=170667a&w=0&h=ag0UIWmXWZfeQA39S80kKbDXWVdmayg6Bc-f6XQtZhw="
            class="card-img"
            alt="..." style={{height:"700px"}}
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Hey!!</h5>
            <p class="card-text">
              itz Me Bharat ,
            </p>
            <p class="card-text"> I know Languages and Frameworks like <span className="toggle"></span> </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
