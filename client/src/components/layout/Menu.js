import React from "react";

const Menu = () => {
  return (
    <div className="header-style-two">
      <div class="header-top">
        <div class="clearfix">
          <div class="top-left">
            <ul class="social-icon-one clearfix">
              <li>
                <a href="#">
                  <span class="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-google-plus-g"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-pinterest"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="fab fa-dribbble"></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="top-right clearfix">
            <p>
              <i class="fa fa-map-marker-alt"></i> 2438 Mopane Avenue
              Marlborough, Harare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
