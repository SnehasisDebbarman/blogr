import logo from "./images/logo.svg";
import "./style.scss";
import arrowDown from "./images/icon-arrow-light.svg";
import desktop from "./images/illustration-editor-desktop.svg";
import mobile from "./images/illustration-editor-mobile.svg";
import laptopDesktop from "./images/illustration-laptop-desktop.svg";
import laptopMobile from "./images/illustration-laptop-mobile.svg";
import phones from "./images/illustration-phones.svg";
import circle from "./images/bg-pattern-circles.svg";
import React, { useState } from "react";

function App() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <main>
        <div className="head-container">
          <nav className="nav">
            <div>
              <div>
                <header>
                  <h1>
                    <img src={logo} alt="" />
                  </h1>
                </header>
              </div>
              <div>
                <span>
                  Product
                  <img src={arrowDown} alt="" />
                </span>
              </div>
              <div>
                {" "}
                <span>
                  Company
                  <img src={arrowDown} alt="" />
                </span>
              </div>
              <div
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                <span>
                  <span>Connect</span>
                  <img src={arrowDown} alt="arrow" />
                  {dropdown ? (
                    <ul className="drop-list">
                      <p>Contact</p>
                      <p>Newsletter</p>
                      <p>LinkedIn</p>
                    </ul>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            </div>
            <div className="login-signup-container">
              <button id="login">Login</button>
              <button id="signup">Sign Up</button>
            </div>
          </nav>
          <div className="big-text-container">
            <div className="main-heading">A modern publishing platform</div>
            <div>Grow your audience and build your online brand</div>
            <div>
              <button id="start">Start for Free</button>
              <button id="learn"> learn more</button>
            </div>
          </div>
        </div>
        {/* Design for future part */}
        <section id="section-2">
          <div className="center-text">
            <div>Designed for future part</div>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <div>Introducing an extensible editor</div>
              <article>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing :creating content . The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, Videos and Markdown. Extensibility with
                plugins and themes provide easy ways to add fuctionality or
                change the looks of a blog
              </article>
              <br />
              <div>Robust content management</div>
              <article>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding cusmized
                categories, sections,format or flow. with this fuctionality
                ,you're in full control.
              </article>
            </div>
            <div className="grid-item">
              <img src={desktop} alt="" />
            </div>
          </div>
        </section>
        <section id="section-3">
          <div className="grid-container">
            <div className="phoneBg">{/* <img src={circle} alt="" /> */}</div>
            <div className="grid-item">
              <img src={phones} alt="" />
            </div>
            <div className="grid-item">
              <div>State of the Art Infrastructure</div>
              <article>
                With reliability and speed in mind , worldwide data centers
                provide the backbone for utrafast connectivity . this ensures
                your site will load instanly , no matter where your reader
                are,keeping your site competitive.
              </article>
            </div>
          </div>
        </section>
        <section id="section-4">
          <div className="grid-container">
            <div className="grid-item"></div>
            <div className="grid-item">
              <div>Free, open, simple</div>
              <article>
                Blogr is a free and open source application backed by a large
                community of helpful developers. it supports features such as
                code syntax highlighing, RSS feeds , social media integration ,
                third party commenting tools and works seamlessly with google
                analytics. The architechture is clean and is relavantly easy to
                learn.
              </article>
              <div>Powerfull tooling </div>
              <article>
                Batteries included . We build a simple and strainghtforward CLI
                tool that makes customization and deployment a breeze ,but
                capable producing complecated sites.
              </article>
            </div>
          </div>
        </section>
        <section id="section-5">
          <div className="grid-container">
            <div className="grid-item">
              <img src={logo} alt="" />
            </div>
            <div className="grid-item">
              <div>
                <p>Product</p>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>integrations</p>
              </div>
            </div>
            <div className="grid-item">
              <div>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>integrations</p>
              </div>
            </div>
            <div className="grid-item">
              <div>
                <p>Connect</p>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>integrations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
