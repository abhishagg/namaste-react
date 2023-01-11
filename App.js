let heading1 = React.createElement(
    "h1",
    {
        id: "title"
    },
    "Namaste React!"
);
let heading2 = React.createElement(
    "h2",
    {
        id: "title"
    },
    "Namaste React!"
);
let container = React.createElement(
    "div",
    {
        id: "container"
    },
    [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)