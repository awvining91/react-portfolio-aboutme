import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Will Vining's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>Welcome</h2>
          <p>
            Hello, and welcome to my website! Here you can see some of the cool projects that I have worked with and see samples
            of my work.

            I hope you enjoy my site!


          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;