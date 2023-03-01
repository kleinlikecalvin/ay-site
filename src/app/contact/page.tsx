import Image from "next/image";
import "./styles.scss";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <div className="contact-cards-container">
        <div className="contact-card">
          <Image src="" alt="" width="300" height="300" />
          <div className="copy">
            <h3>General</h3>
            <a href="mailto:hello@anaheimyoutopia.com">
              hello@anaheimyoutopia.com
            </a>
          </div>
        </div>
        <div className="contact-card">
          <Image src="" alt="" width="300" height="300" />
          <div className="copy">
            <h3>Mailing Address</h3>
            <p>1105 South Euclid St. #D272 Fullerton, CA 92832</p>
          </div>
        </div>
      </div>
    </div>
  );
}
