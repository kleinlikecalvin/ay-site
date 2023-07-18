"use client";

import "./_Opportunities.scss";

export default function Opportunities() {
  return (
    <div className="Opportunities">
      <h2>Opportunities</h2>
      <div className="accordions-cont">
        <details>
          <summary className="accordion">Annual Art Contest</summary>
          <ul className="panel">
            <li>Sponsor</li>
            <li>Donor</li>
          </ul>
        </details>
        <details>
          <summary className="accordion">Social Media</summary>
          <ul className="panel">
            <li>Content Creator</li>
            <li>Copy Writer</li>
          </ul>
        </details>
        <details>
          <summary className="accordion">Resources</summary>
          <ul className="panel">
            <li>College Resources Officer</li>
            <li>Mental Health Resources Officer</li>
            <li>Legal Resources Officer</li>
            <li>Health & Wellness Resources Officer</li>
            <li>Housing Resources Officer</li>
            <li>Food Resources Officer</li>
            <li>Financial Resources Officer</li>
          </ul>
        </details>
        <details>
          <summary className="accordion">Fundraising</summary>
          <ul className="panel">
            <li>Sponsor/Donor</li>
            <li>Grants Manager</li>
            <li>Grant Writer</li>
          </ul>
        </details>
        <details>
          <summary className="accordion">Board of Directors</summary>
          <ul className="panel">
            <li>Advisory Board Member</li>
          </ul>
        </details>
      </div>
    </div>
  );
}
