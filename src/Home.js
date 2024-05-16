import React from "react";

const Home = () => {
  const navigateToBrowser = () => {
    var a = document.createElement("a");
    a.href =
      "https://enterprise.google.com/android/enroll";
    // a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="pt-3"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h3>Welcome</h3>
      <div className=" justify-content-center pt-2">
        <button onClick={navigateToBrowser}>Click here to navigate</button>
      </div>
    </div>
  );
};

export default Home;
