import {useState} from "react";
import "./homepage.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import "./slider.css";


function HomePage(props){
    const images = [
        "public/galleryimag.jpg",
        "public/galleryimg2.jpg",
        "public/galleryimage3.jpg",]
        
return(
  <>
    <div className="homeHeroContain">
      <div className="heroImg">
      <img src="public/heroimghomepage.jpg"></img>
      </div>
    </div>{/*homeHeroContain*/}

    <div className="diffHFlavorsContain">
      <div className="hFlavorsText">
          Explore the Different Flavors
      </div>{/*hFlavorsText*/}
      <div className="ingHContain">
        <div className="mintHGroup">
          <img src="public/mintchiphomepage.png"style={{ width:"33%"}}></img>
        </div>{/*mintHGroup*/}

        <div className="lemonHGroup">
          <img src="public/lemonhomepage.png"style={{ width:"33%"}}></img>
        </div>{/*lemonHGroup*/}

        <div className="caramelHGroup">
          <img src="public/vandchomepage.png"style={{ width:"33%"}}>
          </img>
        </div>{/*caramelHGroup*/}
      </div>{/*ingHContain*/}

      <div className="btnContain"style={{ textAlign:"center"}}>
        <Link to="/products">
      <button className="cool-button" type="button" name="button">Products</button>
      </Link>
      </div>
    </div>{/*diffFlavorsContain*/}


    <div className="galSecContain">
    <Slide>
      <div className="each-slide-effect">
        <div style={{"backgroundImage": `url(${images[0]})` }}>
          </div>{/*style*/}
          </div>{/*each-slide-effect*/}
        <div className="each-slide-effect">
          <div style={{"backgroundImage": `url(${images[1]})` }}>
            </div>{/*style*/}
            </div>{/*each-slide-effect*/}
          <div className="each-slide-effect">
            <div style={{"backgroundImage": `url(${images[2]})` }}>
              </div>{/*style*/}
            </div>{/*each-slide-effect*/}
        </Slide>

        <div className="galleryTextContain">
            <div className="hReviewsHeading">
              See What Our Customers Are Saying
            </div>{/*hReviewsHeading*/}
            <div className="reviewsBtnHome">
              <Link to="/reviews">
            <button className="cool-button" type="button" name="button">Reviews</button>
            </Link>
            </div>{/*reviewsBtnHome*/}
        </div>{/*galleryTextContain*/}
    </div>{/*galSecContain*/}

  </>
)}

export default HomePage;