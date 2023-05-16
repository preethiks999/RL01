 // var h1 = document.createElement("h1");
        // h1.innerHTML = "Hello World"
        // var root = document.getElementById("root")
        // root.appendChild(h1)

        var parent = React.createElement("div",{"id":"Parent"}, 
        [React.createElement("div",{id:"child2"},React.createElement("h1",{},"Hello H2"))
        ,React.createElement("div",{id:"child1"},React.createElement("h1",{},"Hello H1"))])

        const heading = React.createElement("h1",{}, "Hello React")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)