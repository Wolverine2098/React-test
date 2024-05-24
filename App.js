import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world"
// );
// const h1 = React.createElement("h1", { id: "child2" }, "I am h1");
// const h2 = React.createElement("h2", { id: "child2" }, "I am h2");
// const child1 = React.createElement("div", { id: "child1" }, [h1, h2]);
// const child2 = React.createElement("div", { id: "child2" }, [h1, h2]);
// const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
const ComponentJSX2 = () => {
  return <h1>This is second component</h1>;
};

const ComponentJSX = () => {
  return (
    <div id="container">
      <ComponentJSX2 />
      <h1>This code is from primary Component</h1>
    </div>
  );
};
const elementJSX = <h1>"This is HTML like syntax to learn fundamentals"</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentJSX />);
