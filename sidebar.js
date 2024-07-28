//creates and handles the sidebar

export let sidebar = L.control();

sidebar.onAdd = function (map) {
    this.div = L.DomUtil.create('div'); // create a div with a class "info"
    this.div.id = "sidebar"
    this.div.style.display = "none"
    return this.div;
};

// method that we will use to update the control based on feature properties passed
sidebar.update = function (props) {
    this.div.innerHTML = `
        <div id="header">
            <img src="${props.img}">
            <h1>${props.name}</h1>  
            <h3>${props.type}</h3>`
             + (props.ruler ? `<h3>Ruled by ${props.ruler}</h3>` : "") + `

        </div>
        <div id="text">
            ${props.text}
        </div>

    `
};