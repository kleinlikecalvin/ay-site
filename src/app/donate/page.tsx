import "./_styles.scss";

export default function Donate() {
  return (
    <div className="Donate">
      <h1>Donate Today!</h1>
      <div className="info-cont">
        <div className="donation"></div>
        <div className="info">
          <h2>Your donations help us:</h2>
          <ul>
            <li>Fund our all ages Annual School&apos;s Out Party</li>
            <li>
              Offer grants to budding artists who enter our Summer Art Contest
            </li>
            <li>
              Fund our epic city-wide urban agriculture project, House Farm!
            </li>
            <li>
              Buy spray paint and supplies for special events like Anaheim Union
              High School District Visual & Performing Arts Week and Kids Play
              Day in Anaheim, CA
            </li>
          </ul>
          <h2>Our fundraising goal:</h2>
          <p>
            Our fundraising goal for 2022 is $15,000. With this money,
            we&apos;ll be able to completely cover the cost of doing business:
            all 12 Potluck & Paint Popups, House Farm, and the School&apos;s Out
            Grad Party. In addition, we would be able to start our savings so we
            can afford to fund more great ideas in the future! Like an art show
            for our kids to practice the business side of art.
          </p>
        </div>
      </div>
      <h2 className="centered direct">
        Donate directly to NikkiKlein@AnaheimYoutopia.com using{" "}
        <a className="venmo" href="https://venmo.com/account/sign-in">
          Venmo
        </a>{" "}
        and{" "}
        <a className="zelle" href="https://www.zellepay.com/get-started">
          Zelle
        </a>
      </h2>
      <h2 className="centered">Donate via Amazon</h2>
      <div className="amazon-options-cont">
        <a href="https://smile.amazon.com/ch/86-1290026">
          <div className="donation"></div>
        </a>
        <a href="https://www.amazon.com/hz/wishlist/ls/39XS77DL3MY5V?ref_=wl_share">
          <div className="donation"></div>
        </a>
      </div>
    </div>
  );
}
