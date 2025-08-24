// ParallaxPage.jsx
import React from "react";

const sectionStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: "white",
};

const ParallaxPage = () => {
  return (
    <div>
      <div
        style={{
          ...sectionStyle,
          backgroundImage: "url('https://picsum.photos/1600/900?random=1')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Welcome to My Page</h1>
      </div>

      <div
        style={{
          ...sectionStyle,
          background: "#222",
        }}
      >
        <p>This is the second section</p>
      </div>

      <div
        style={{
          ...sectionStyle,
          backgroundImage: "url('https://picsum.photos/1600/900?random=2')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2>Cool Parallax Effect</h2>
      </div>

      <div
        style={{
          ...sectionStyle,
          background: "#555",
        }}
      >
        <p>Last section here</p>
      </div>
    </div>
  );
};

export default ParallaxPage;
