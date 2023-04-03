import "./_MissionBanner.scss";
export default function MissonBanner() {
  return (
    <div className="MissionBanner">
      <div>
        <h2>Anaheim Youtopia Mission</h2>
        <p>
          Anaheim Youtopia is a 501c3 nonprofit organization created to support,
          empower, and cultivate a stronger sense of community within the
          at-risk youth of Anaheim, and the surrounding areas, via creative
          learning experiences, resources, and mentoring.
        </p>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/alhCAb8-zAI"
        title="Anaheim Youtopia - Who We Are"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
