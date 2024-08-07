import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div>
                  <section className="w3l-footer-29-main">
                <div className="footer-29 py-5">
                    <div className="container py-md-4">
                        <div className="row footer-top-29">
                            <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                                <h6 className="footer-title-29">Contact Info </h6>
                                <p>Address : C/o.Vishram Marathe House, 1st Flor, Gate No. 1626,
                                    Behind Axis Bank, Near Gajanan Mangal Karyalaya,
                                    Shikrapur, Tal. Shirur, Dist. Pune, 412 208, Maharashtra, India.</p>
                                <p className="my-2">Phone : <a href="tel:+1(21) 234 4567">+91 9823112846, 9359941473</a></p>
                                <p>Email : <a href="mailto:sktechnoproject@gmail.com">sktechnoproject@gmail.com</a></p>
                                <div className="main-social-footer-29 mt-4">
                                    <a href="#facebook" className="facebook"><span className="fa fa-facebook"></span></a>
                                    <a href="#twitter" className="twitter"><span className="fa fa-twitter"></span></a>
                                    <a href="#instagram" className="instagram"><span className="fa fa-instagram"></span></a>
                                    <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">

                                <ul>
                                    <h6 className="footer-title-29">Company</h6>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 className="footer-title-29">Projects</h6>
                                <ul>
                                    <li><a href="#customers"> Customers</a></li>
                                    <li><a href="#helpcenter"> Help Center</a></li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 className="footer-title-29">Suppport</h6>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <section className="w3l-copyright text-center">
                    <div className="container">
                        <p className="copy-footer-29">© {currentYear} <strong>SKTECHNOPROJECTS </strong>. All rights reserved. Design by <strong>Ajinkya Katre &hearts;</strong></p>
                    </div>

                    {/* move top */}
                    <button onclick="topFunction()" id="movetop" title="Go to top">
                        &#10548;
                    </button>

                    {/* /move top */}
                </section>
                {/* //copyright */}
            </section>
    </div>
  )
}

export default Footer
