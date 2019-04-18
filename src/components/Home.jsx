import React from "react";
function Home(props) {
  return (
    <div>
      <h1>This is Home Page </h1>
      {/* <h1>{props.value}</h1> */}
      <li>
        <a href="Link">Link1</a>
      </li>
      <li>
        <a href="Link">Link2</a>
      </li>
    </div>
  );
}

export default Home;
