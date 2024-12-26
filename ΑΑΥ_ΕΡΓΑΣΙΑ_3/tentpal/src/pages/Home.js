import React from "react";

function Home({ navigate }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("Html")}>Go to About</button>
    </div>
  );
}

export default Home;