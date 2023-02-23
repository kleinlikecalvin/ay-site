import "@/components/NewsletterSignUp.scss";

export default function NewsletterSignUp() {
  return (
    <div id="mc_embed_signup" className="NewsletterSignUp">
      <form
        action="https://AnaheimYoutopia.us1.list-manage.com/subscribe/post?u=84f2d69601c4521beb4cb4f60&amp;id=0c3d79b652"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to our monthly newsletter!</h2>
          <div className="mc-field-group">
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="Enter email address here"
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_84f2d69601c4521beb4cb4f60_0c3d79b652"
              tabIndex="-1"
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                value="Submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
