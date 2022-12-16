import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <>
        {/* <p className="h1">About</p> */}

        <div className="card" id="card" style={{ width: "100%"}}>
          <div className="card-body container my-3">

           <div style={{width: "100%"}}>

              <h1 className="card-title h1 text-center">About Me</h1>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "3em"}}>Name : Bharat Sharma,</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "3em"}}>Hobby : Web Designer,</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "3em"}}>Age : 19 years old,</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "3em"}}>Country : India,</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: "3em"}}>Qualification : Studing In 2<sup>nd</sup> Year Btec(IT).</h6>
            </div>

          </div>
    <div className="container">
        <h2>HTML</h2>
    <div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h2>CSS</h2>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar"style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h2>JAVA SCRIPT</h2>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: "60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<h2>C++</h2>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

            </div>
        </div>
      </>
    );
  }
}

export default About;
