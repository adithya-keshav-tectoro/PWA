import React from "react";

const Home = () => {
  const navigateToBrowser = () => {
    var a = document.createElement("a");
    a.href =
      "launcher://portal.emmdev.tectoro.com/?code=0.ASoAfWgiw5cn4Eqzol3bcUPZ8hBYzmGfXahPvnBXtPRahLwqAJ8.AgABBAIAAADnfolhJpSnRYB1SVj-Hgd8AgDs_wUA9P-4aafY1ufeCZehLukkdocZjuEuwQi928mUvDi-MV8yQyjxq_k6bqEU2uy1htuLLHRHOHStSHz2JHbud5S-9tHMEOUbMLzldTkAIw9bm22-z062pR5g1j-X58CMcubTM96z7jTso80SLIrZwSJSd1d4bZOw5LoY2K0qzlrVlL9JUOFJ1kbsxxwbBcAUdjtWQaJCu7NWN1ecgyWEHDPSL8tIJ5pSppdEudovFfBNkH2cT_lWeSUUEQqfmvxUyBQoFV7by4ffkUzQWJe9S4i9ljl6hZJ6pu7cXgvvqprByuQsQVW3wgUPoRGog23QHMYifgBItO4yFSVqhA0eTodt2xyZvHOAcQ3KRGhFswCwg-4B0gyQKZkyWg-2AvStAXi1AJ3VtD0QI7xXfNnXQCNxxN3fXPPpnoAi9XgsTas-IcppUrn7AxlJYggzJ29NJeLrA4h43E7zbyUFpNUiHVgNyLeNq3_Kq_-UlPli80S-3-xV9d9i9JIBRgD-W1PLeNk1MeDwHMKiJ4foB6DfcC_8F5so4POPAgJetLzluPpDxNxV11_JSx5sH2k3OyMNjtJ2d1HF9Fz9EAQle46lZxZ_xYCX8nIrFtA_YIkiofal5CmThXjJR0My5PPIQoDH6XSNNaRNngcQfNklWxRHr6Vex19ZUsS5PED42B1kylcKNkb403V2tgBihGHIYbHUu1NumqGUFRNmeXmIUQy4hzOx_9B5_ULm9y82ZvB9tKEsBQVkv0j7M4Q88wnb0u40DcDgH3ET&state=TT%3amicrosoft%3aR9ZT10AH2YR%3alauncher&session_state=0eba4d5b-7bd6-4945-81f7-e4d3fbaf2e9a#/aeenterprise";
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
      <div>Params: {JSON.stringify(window.location.search)}</div>
    </div>
  );
};

export default Home;
