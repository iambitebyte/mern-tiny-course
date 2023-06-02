function MyComponent() {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <button onClick={() => setOpen(!open)} style={ {width: "100px", height: "30px", margin: "20px 0"} } >
                {open ? 'Close' : 'Open'}
            </button>
            <div style={ { width: "300px", height: "250px", backgroundColor: open?"yellow":"grey" } } />
        </div>
    )
}

// Render a openButton in the #container <div> using React
const container = document.querySelector("#container");
ReactDOM.render(<MyComponent />, container);