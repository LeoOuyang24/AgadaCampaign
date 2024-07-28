export let sidebar = L.control();

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

sidebar.onAdd = function (map) {
    this.div = L.DomUtil.create('div'); // create a div with a class "info"
    this.div.id = "sidebar"
    this.update(jsyaml.load(loadFile("./yaml/goldwall.yaml")))
    return this.div;
};

// method that we will use to update the control based on feature properties passed
sidebar.update = function (props) {
    this.div.innerHTML = `
        <div id="header">
            <img src="${props.img}">
            <h1>${props.name}</h1>
            <h3>${props.type}</h3>
        </div>
        <div id="text">
            ${props.text}
        </div>

    `
};