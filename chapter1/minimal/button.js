function RootComponent() {
    const [open, setOpen] = React.useState(false);

    const buttonComponent = React.createElement(
        "button",
        { id: "openButton", onClick: () => setOpen(!open), style: {width: "100px", height: "30px", margin: "20px 10px"} },
        open? "Close": "Open"
    );

    const roomComponent = React.createElement(
        "div",
        { id: "room", style: {width: "300px", height: "250px", backgroundColor: open?"yellow":"grey" } }
    );

    const rootComponent = React.createElement(
        "div",
        { id: "root" },
        [buttonComponent, roomComponent]
    );

    return rootComponent;
}

const container = document.querySelector("#container");
ReactDOM.render(React.createElement(RootComponent), container);