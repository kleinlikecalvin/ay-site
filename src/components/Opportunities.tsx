"use client";

import "./_Opportunities.scss";

export default function Opportunities() {
  function activate(event) {
    const panel = event.target.nextElementSibling;
    panel.classList.toggle("activated");
  }

  return (
    <div className="Opportunities">
      <h2>Opportunities</h2>
      <div className="accordions-cont">
        <button className="accordion" onClick={(event) => activate(event)}>
          Annual Art Contest
        </button>
        <ul className="panel">
          <li>Sponsor</li>
          <li>Donor</li>
        </ul>
        <button className="accordion" onClick={(event) => activate(event)}>
          Social Media
        </button>
        <ul className="panel">
          <li>Content Creator</li>
          <li>Copy Writer</li>
        </ul>
        <button className="accordion" onClick={(event) => activate(event)}>
          Resources
        </button>
        <ul className="panel">
          <li>College Resources Officer</li>
          <li>Mental Health Resources Officer</li>
          <li>Legal Resources Officer</li>
          <li>Health & Wellness Resources Officer</li>
          <li>Housing Resources Officer</li>
          <li>Food Resources Officer</li>
          <li>Financial Resources Officer</li>
        </ul>
        <button className="accordion" onClick={(event) => activate(event)}>
          Fundraising
        </button>
        <ul className="panel">
          <li>Sponsor/Donor</li>
          <li>Grants Manager</li>
          <li>Grant Writer</li>
        </ul>
        <button className="accordion" onClick={(event) => activate(event)}>
          Board of Directors
        </button>
        <ul className="panel">
          <li>Advisory Board Member</li>
        </ul>
      </div>
    </div>
  );
}
