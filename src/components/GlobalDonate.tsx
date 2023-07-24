import "./_GlobalDonate.scss";
import Drawer from "./Drawer";
import Button from "./Button";

export default function GlobalDonate() {
  return (
    <Drawer
      closedContent={
        <h3>
          Click here to support young artists by helping us offer cash grants!{" "}
        </h3>
      }
      openContent={
        <div className="GlobalDonate">
          <h3>Help us help others.</h3>
          <p>
            We&apos;ll get right to the point: we need your help. We&apos;re a
            nonprofit that relies on support from people like you. If everyone
            reading this gives $15 monthly, Anaheim Youtopia would be in great
            shape to support, empower, and build community for years to come.
            Please support our mission and change lives for the youth in and
            around Anaheim, CA.
          </p>
          <form>
            <div className="fieldset-container">
              <fieldset className="donate">
                <legend>Donate</legend>
                <label htmlFor="donate-fifteen" className="radio-label">
                  <input
                    type="radio"
                    id="donate-fifteen"
                    name="donations"
                    value={15}
                  />
                  $15
                </label>
                <label htmlFor="donate-twenty-five" className="radio-label">
                  <input
                    type="radio"
                    id="donate-twenty-five"
                    name="donations"
                    value={25}
                  />
                  $25
                </label>
                <label htmlFor="donate-fifty" className="radio-label">
                  <input
                    type="radio"
                    id="donate-fifty"
                    name="donations"
                    value={50}
                  />
                  $50
                </label>
                <label htmlFor="donate-hundred" className="radio-label">
                  <input
                    type="radio"
                    id="donate-hundred"
                    name="donations"
                    value={100}
                  />
                  $100
                </label>
                <label htmlFor="donate-other" className="radio-label">
                  <input type="radio" id="donate-other" name="donations" />
                  Other
                  <input
                    type="number"
                    id="donate-other-num"
                    name="donations"
                    min={1}
                    step="any"
                  />
                </label>
              </fieldset>
              <fieldset className="personal-info">
                <legend>Your Info</legend>
                <label htmlFor="first-name">
                  First Name
                  <input type="text" id="first-name" name="info" required />
                </label>
                <label htmlFor="last-name">
                  Last Name
                  <input type="text" id="last-name" name="info" required />
                </label>
                <label htmlFor="email">
                  Email
                  <input type="email" id="email" name="info" required />
                </label>
                <label htmlFor="phone">
                  Phone
                  <input
                    type="tel"
                    id="phone"
                    name="info"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </label>
              </fieldset>
            </div>
            <Button bgColor="#9900ff" textColor="white">
              Give Now
            </Button>
          </form>
        </div>
      }
    />
  );
}
