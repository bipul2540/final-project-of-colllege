import React from "react";
import "./ContactusPage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function ContactusPage() {
  return (
    <div className="contactpage">
      <div className="contactpage__content">
        <div className="content__info">
          <h3>contact info</h3>
          <p>
            <LocationOnIcon />
            <span>Bangalore, karnataka, 802219</span>
          </p>
          <p>
            <MailIcon />
            <span>bipulkumar@gmail.com</span>
          </p>
          <p>
            <LocalPhoneIcon />
            <span>+91 8709188657</span>
          </p>

          <p className="other__options">
            <FacebookIcon />
            <PinterestIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />
          </p>
        </div>
        <form>
          <div className="content__send">
            <h3>send a message</h3>
            <p>
              <span>first name</span>

              <input type="text" autoComplete="none" />
            </p>
            <p>
              <span>last name</span>
              <input type="text" autoComplete="none" />
            </p>
            <p>
              <span>email address</span>

              <input type="text" autoComplete="none" />
            </p>
            <p>
              <span>phone number</span>

              <input type="text" autoComplete="none" />
            </p>
            <p className="message__box">
              <span>write messages</span>
              <textarea type="text" autoComplete="none" />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactusPage;
