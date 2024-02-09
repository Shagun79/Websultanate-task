import React from "react";
import "./Footer.css";
import linkedin from "../Image/linkedin.png";
import twitter from "../Image/twitter.png";
import instagram from "../Image/instagarm.png";
import facebook from "../Image/facebook.png";
import youtube from "../Image/youtube.png";

import footerLogo from "../Image/fotter-img.png";

export const Footer = () => {
  return (
    <footer>
      <div className="foot-content">
        <div class="foot-top">
          <div>
            <img src={footerLogo} className="footer-logo" />
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Solutions </th>
                  <th>Resources </th>
                  <th>Help</th>
                  <th>Partners</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>About Us</td>
                  <td>Customer Lead Generation</td>
                  <td>Blog</td>
                  <td>Support</td>
                  <td>Development Partners</td>
                </tr>
                <tr>
                  <td>We're Hiring</td>
                  <td>Customer Retention Boost</td>
                  <td>Videos</td>
                  <td>Knowledge Base</td>
                  <td>Affiliate Program</td>
                </tr>
                <tr>
                  <td>Investors</td>
                  <td>Reputation Management</td>
                  <td>Case Studies</td>
                  <td>Live Chat</td>
                  <td> Partner Offers</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>Marketing Automation</td>
                  <td>Marketplace</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>PartnerUp Network </td>
                  <td>Industries</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="icons">
          <img src={linkedin} className="footer-img" />
          <img src={twitter} className="footer-img" />
          <img src={instagram} className="footer-img" />
          <img src={facebook} className="footer-img" />
          <img src={youtube} className="footer-img" />
        </div>
        <div class="foot-down">
          <div className="year"> &#169; 2013-2021 Referrizer Inc.</div>
          <div className="footer-login"> Login</div>
          <div className="footer-signup"> Sign up for free</div>
        </div>
      </div>
    </footer>
  );
};
