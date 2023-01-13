import React from "react";
import ReactDOM from "react-dom/client";

// react element
const title = (
    <h1 id="title" key="h1">
        Namaste React! title
    </h1>
)

// react component 

const Heading = () => (
    <h1 id="title" key="h2">
        Namaste React! Heading
    </h1>
)


let HeaderComponent = () => (
    <div>
        {title}
        <Heading />
        <h2>Heading from functional component</h2>
        <h3>This is a h3 tag</h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)