import * as icons from "./icons.js";
import {sidebar} from "./sidebar.js"

var map = L.map('map', {
    crs: L.CRS.Simple
   	});
var width = 1000
var height = 1000
var bounds = [[0,0], [width,height]];
var image = L.imageOverlay('sprites/map.png', bounds).addTo(map);
map.fitBounds(bounds);
map.setMaxBounds(bounds)

const marker = L.marker([.55*height, .73*width],{icon: icons.kingIcon}).addTo(map)


function onMapClick(e) {
    let style = document.getElementById("sidebar").style
    style.display = (style.display == null || style.display != "none" ? "none" : "initial") ;
}

marker.on('click', onMapClick);
sidebar.addTo(map)