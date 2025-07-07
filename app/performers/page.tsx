import "../animations.css";
import Tutorials from "../tutorials/page";

export default function PerformersPage() {
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Concert Lights */}
      <div className="concert-light light-1" />
      <div className="concert-light light-2" />
      <div className="concert-light light-3" />

      {/* Stage Lights */}
      <div className="stage-lights">
        <div className="spotlight spotlight-1" />
        <div className="spotlight spotlight-2" />
        <div className="spotlight spotlight-3" />
        <div className="spotlight spotlight-4" />
        <div className="spotlight spotlight-5" />
      </div>

      {/* Lasers */}
      <div className="laser-container">
        <div className="laser laser-1" />
        <div className="laser laser-2" />
        <div className="laser laser-3" />
        <div className="laser laser-4" />
      </div>

      {/* Crowd */}
      <div className="crowd-container">
        <div className="crowd-row crowd-row-1" />
        <div className="crowd-row crowd-row-2" />
        <div className="crowd-row crowd-row-3" />
      </div>

      {/* Particles */}
      <div className="particles-container">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
        <div className="particle p5" />
        <div className="particle p6" />
        <div className="particle p7" />
        <div className="particle p8" />
      </div>

      {/* Main Performer Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", paddingTop: "200px" }}>
        <h1 style={{ fontSize: "3rem", color: "#fff" }}>Meet the Performers</h1>
        <p style={{ fontSize: "1.25rem", color: "#ddd", marginTop: "1rem" }}>
          Enjoy the show with our amazing lineup of artists!
        </p>
        <div style={{ marginTop: "2rem" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BwX4d6d1_uQ"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Tutorials Grid at the bottom */}
      <div style={{ position: "relative", zIndex: 10, marginTop: "4rem" }}>
        <Tutorials />
      </div>
    </div>
  );
}