import "./_VolunteerForm.scss";

export default function VolunteerForm() {
  return (
    <form
      className="VolunteerForm"
      id="volunteer-form"
      action="mailto:nikkiKlein@AnaheimYoutopia.com"
      method="POST"
      encType="text/plain"
    >
      <h2>Volunteer Application</h2>

      <fieldset>
        <legend>Personal Information</legend>

        <label htmlFor="legal-name">
          Legal Name:
          <input type={"text"} id="legal-name" name="legal-name" required />
        </label>

        <label htmlFor="pref-name">
          Preferred Name:
          <input type={"text"} id="pref-name" name="pref-name" required />
        </label>

        <label htmlFor="email">
          Email:
          <input type={"email"} id="email" name="email" required />
        </label>

        <label htmlFor="phone">
          Phone Number:
          <input type="tel" id="phone" name="phone" maxLength={12} required />
        </label>

        <label htmlFor="volunteer-hours">
          How many hours can you volunteer per week? (1hr - 25hrs)
          <input
            type={"number"}
            id="volunteer-hours"
            name="volunteer-hours"
            min={1}
            max={25}
            required
          />{" "}
        </label>

        <label htmlFor="why-volunteer">
          Why do you want to volunteer with Anaheim Youtopia? (250 character
          max)
          <textarea
            id="why-volunteer"
            name="why-volunteer"
            maxLength={250}
            rows={2}
            spellCheck
            required
          />{" "}
        </label>

        <label htmlFor="bg-check">
          Are you willing to perform a background check?
          <label htmlFor="bg-check-yes">
            <input
              type={"radio"}
              id="bg-check-yes"
              name="bg-check"
              value="yes"
              required
            />
            Yes
          </label>
          <label htmlFor="bg-check-no">
            <input type={"radio"} id="bg-check-no" name="bg-check" value="no" />
            No
          </label>{" "}
        </label>
      </fieldset>

      <fieldset>
        <legend id="skills">Interests & Skills</legend>

        <label htmlFor="tech">
          Which technology are you familiar with:
          <label htmlFor="google-workspace">
            <input
              type={"checkbox"}
              id="google-workspace"
              name="google-workspace"
            />
            Google Workspace
          </label>
          <label htmlFor="airtable">
            <input type={"checkbox"} id="airtable" name="airtable" />
            Airtable
          </label>
          <label htmlFor="slack">
            <input type={"checkbox"} id="slack" name="slack" />
            Slack
          </label>
          <label htmlFor="facebook">
            <input type={"checkbox"} id="facebook" name="facebook" />
            Facebook
          </label>
          <label htmlFor="instagram">
            <input type={"checkbox"} id="instagram" name="instagram" />
            Instagram
          </label>
          <label htmlFor="seo">
            <input type={"checkbox"} id="seo" name="seo" />
            SEO
          </label>
        </label>

        <label htmlFor="tasks">
          I am willing to assist with the following tasks:
          <label htmlFor="general-volunteering">
            <input
              type={"checkbox"}
              id="general-volunteering"
              name="general-volunteering"
            />
            General Volunteering
          </label>
          <label htmlFor="content">
            <input type={"checkbox"} id="content" name="content" />
            Content Creation
          </label>
          <label htmlFor="fundraising">
            <input
              type={"checkbox"}
              id="fundraising"
              name="fundraising"
              value="fundraising"
            />
            Fundraising
          </label>
          <label htmlFor="events">
            <input type={"checkbox"} id="events" name="events" />
            Event Planning
          </label>
          <label htmlFor="resources">
            <input type={"checkbox"} id="resources" name="resources" />
            Researching Resources
          </label>
          <label htmlFor="marketing">
            <input type={"checkbox"} id="marketing" name="marketing" />
            Marketing
          </label>
          <label htmlFor="grants">
            <input type={"checkbox"} id="grants" name="grants" />
            Grant Research, Applications, and Writing
          </label>
          <label htmlFor="board">
            <input type={"checkbox"} id="board" name="board" />
            Board of Directors
          </label>
          <label htmlFor="other-tasks">
            Other:
            <input
              type={"text"}
              id="other-tasks"
              name="other-tasks"
              maxLength={250}
            />
          </label>{" "}
        </label>

        <label htmlFor="skills">
          Do you have any special skills you&apos;d like to mention?
          <input type={"text"} id="skills" name="skills" />
        </label>
      </fieldset>
      <button type="submit">Send Application</button>
    </form>
  );
}
