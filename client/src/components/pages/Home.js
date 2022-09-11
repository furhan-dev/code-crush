import React from 'react';
import IMAGES from '../images';

export default function Home() {
    let year = document.write(new Date().getFullYear())
  const inline = {
    display:'inline',
  };
//   const card2Style = {
//     textAlign: 'center',
//     textDecoration:'none'
//   }
  return (
    <div>
            <div>
                {/* <!-- Navbar --> */}
                <nav className="custom-navbar navbar navbar-expand-lg navbar-dark fixed-top" data-spy="affix" data-offset-top="10">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gallary">Learn</a>
                            </li>
                        </ul>
                        <a className="navbar-brand m-auto" href="#">
                            <img src={IMAGES.logo} className="brand-img" alt=""/>
                            <span className="brand-txt">Code Crush</span>
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#testmonial">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="btn btn-primary ml-xl-4">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


            {/* <!-- header --> */}
            <header id="home" className="header">
                <div className="overlay text-white text-center">
                    <h1 className="display-2 font-weight-bold my-3">Code Crush</h1>
                    <h2 className="display-4 mb-5">Always free!</h2>
                    <a className="btn btn-lg btn-primary" href="/singup">Create Account</a>
                </div>
            </header>
            

            {/* <!--  About Section  --> */}
            <div>
                <div id="about" class="container-fluid wow fadeIn" id="about"data-wow-duration="1.5s">
                    <div class="row">
                        <div class="col-lg-6 has-img-bg"></div>
                        <div class="col-lg-6">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 py-5 my-5">
                                    <h2 class="mb-4">So, Why Choose A Dating App Like Code-Crush?</h2>
                                    <p>When it comes to dating apps, you’ve got options: Badoo, Bumble, Hinge, Match, POF, OKCupid, and many more. It doesn’t matter if you want to find love, a date, or just have a casual chat,
                                    you still want to find an app that’s the right match for you. And it’s not always black and white — when you want to meet new people, your friends at Tinder can help you out with features </p>
                                    <p><b>designed to make the impossible possible. Dating online with people they have passionate about coding gets easier.</b></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--  gallary Section  --> */}
            <div id="gallary" className="text-center bg-dark text-light has-height-md middle-items wow fadeIn">
                <h2 className="section-title">Learn how to start</h2>
            </div>
            <div className="gallary row">
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.ExploreYourPassions} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon"><h4>Explore Your Passions</h4> <br/><h5>It’s easy to chat up a match when you know you have something in common.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.RollWithUsAnywhere} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon"><h4>Roll With Us Anywhere</h4> <br/><h5>When you want to meet local people whether you’re visiting New York City or Chicago, there’s an app for that—and it’s called Tinder. Chat with people near and far with features that let you match around the world. Tinder is your go-to travel buddy. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Plenty of Fish can say that.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.FacetoFace} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon "><h4>Date Safer With Face to Face</h4> <br/><h5>We’re all eager to meet new people IRL, but dating during COVID-19 means putting your safety first. When six feet apart isn’t enough, Face to Face lets you video chat with your match so you can keep the connection going online.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.ConnectWithPeopleEverywhere} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon "><h4>Connect With People Everywhere</h4> <br/><h5>Go beyond your distance settings and chat with people around the world with our Passport™ feature. All it takes is an upgrade to a Tinder Plus® subscription to be able to match anywhere from everywhere.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.verify} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon "><h4>Get Verified</h4> <br/><h5>It’s easy to chat up a match when you know you have something in common.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.finger} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon "><h4>Matches at Your Fingertips</h4> <br/><h5>One of the most adult decisions you’ll make is picking a dating app that can offer you all the things your ex couldn’t. And it’s not just as simple as choosing between Badoo or Zoosk. Meeting people online is a journey, and you want someone along for the ride that you can trust. When it comes to making a match, consider the Tinder app your new copilot.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.who} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon "><h4>See Who Likes You</h4> <br/><h5>There are only so many hours in a day for dating. We get it. A Tinder Gold™ subscription lets you see all the people who Like you, saving you precious time so you can focus on the finer things in life.</h5></i>
                    </a>
                </div>
                <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img src={IMAGES.Inclusive} alt="" className="gallary-img"/>
                    <a href="#" className="gallary-overlay">
                        <i className="gallary-icon "><h4>All the Time</h4> <br/><h5>We’re not a fan of labels, so we offer a dating experience designed to connect you with new people outside your usual circles. </h5></i>
                    </a>
                </div>
            </div>
            
            {/* <!-- REVIEWS Section  --> */}
            <div id="testmonial" className="container-fluid wow fadeIn bg-dark text-light has-height-lg middle-items">
                <h2 className="section-title my-5 text-center">REVIEWS</h2>
                <div className="row mt-3 mb-5">
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">John Doe</h3>
                            <h6 className="testmonial-subtitle">Web Designer</h6>
                            <div className="testmonial-body">
                                <p>Thanks to this app I have found the love of the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. after reading her profile I couldn't resist swiping tight to read her final sentence... 'looking for my supper developer babe for life'. After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">Steve Thomas</h3>
                            <h6 className="testmonial-subtitle">UX/UI Designer</h6>
                            <div className="testmonial-body">
                                <p>Thanks to this app I have found the love of the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. after reading her profile I couldn't resist swiping tight to read her final sentence... 'looking for my supper developer babe for life'. After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3 my-md-0">
                        <div className="testmonial-card">
                            <h3 className="testmonial-title">Miranda Joy</h3>
                            <h6 className="testmonial-subtitle">Graphic Designer</h6>
                            <div className="testmonial-body">
                                <p>Thanks to this app I have found the love of the love of my life and we are to be married. After going on a few dates and having a few fun nights I came across Miranda. after reading her profile I couldn't resist swiping tight to read her final sentence... 'looking for my supper developer babe for life'. After talking for about a week we went out on our first date and I knew there was something special about her!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- page footer  --> */}
            <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>EMAIL US</h3>
                        <p className="text-muted">info@website.com</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>CALL US</h3>
                        <p className="text-muted">(123) 456-7890</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>FIND US</h3>
                        <p className="text-muted">12345 Fake ST NoWhere AB Country</p>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-light text-center border-top wow fadeIn">
                <p className="mb-0 py-3 text-muted small">&copy; Copyright {year} Made with <i className="ti-heart text-danger"></i> By Kelton,Ben,Furhan,Sheryl and Jason</p>
            </div>
            {/* <!-- end of page footer --> */}

        <script src="../../assets/vendors/jquery/jquery-3.4.1.js"></script>
        <script src="../../assets/vendors/bootstrap/bootstrap.bundle.js"></script>
        <script src="../../assets/vendors/bootstrap/bootstrap.affix.js"></script>
        <script src="../../assets/vendors/wow/wow.js"></script>
        <script src='../../assets/js/codecrush.js'></script>
    </div>
  );
}
