import "./NeedHelp.css";
import homepageVolunteer from "../graphics/homepageVolunteer.png";
import homepageDonate from "../graphics/homepageDonate.png";

export default function NeedHelp() {
  return (
    <div className="NeedHelp">
      <h2>We need your help!</h2>
      <div className="donateVolunteerCont">
        <section>
          <a
            href="https://www.AnaheimYoutopia.com/donate"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img src={homepageDonate} alt="Two hands offering a heart" />
            <h3>Click here to donate today!</h3>
          </a>
          <p>
            Anaheim Youtopia cannot continue to exist without donations from
            you! We appreciate and use every penny! Your contributions help to
            fund every single thing that we do.
          </p>
        </section>
        <section>
          <a
            href="https://www.AnaheimYoutopia.com/volunteer"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              src={homepageVolunteer}
              alt="Two cartoon volunteers high fiving each other"
            />
            <h3>Click here to volunteer!</h3>
          </a>
          <p>
            We are always looking for more volunteers! Check out the{" "}
            <a
              href="https://www.AnaheimYoutopia.com/opportunities"
              target={"_blank"}
              rel={"noreferrer"}
            >
              opportunities
            </a>{" "}
            page for specifics.
          </p>
        </section>
      </div>
    </div>
  );
}
