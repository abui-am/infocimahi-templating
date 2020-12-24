import React from "react";
import A from "../link/A";

const Home = () => {
  return (
    <div>
      <h1>Template: </h1>
      <div style={{ color: "#2a95a0" }}>
        <A href="/infocimahi">
          <h1>infocimahi</h1>
        </A>
        <A href="/bandungbarat">
          <h1>Bandung Barat Today</h1>
        </A>
      </div>
    </div>
  );
};

export default Home;
