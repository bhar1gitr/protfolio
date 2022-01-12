import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
      <footer class="my-4 text-center text-white" style={{backgroundColor: " #333333"}}>
  {/* <!-- Grid container --> */}
  <div class="container pt-4">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- Facebook --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://twitter.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://mail.google.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://www.instagram.com/bharat_sharma18/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://in.linkedin.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-white m-1"
        href="https://github.com/bhar1gitr"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container -->

  <!-- Copyright --> */}
  <div class="text-center text-white p-3" style={{backgroundColor: "black"}}>
    © 2021 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
      </>
    );
  }
}

export default Footer;