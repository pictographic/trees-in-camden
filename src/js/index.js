const d3 = require('d3');
const L = require('leaflet');
let margins = {top:0, right: 0, bottom: 0, left: 0};
let size = {width: 640, height: 480};
let svg = null;
let treeData = require('../static/data/camden-trees.json');


function drawMap(el){
  var map = L.map(el, {
      center: [51.5517, -0.1588],
      zoom: 13
  });
  L.tileLayer('https://api.mapbox.com/styles/v1/admataz/cityutmn400ee2iqgn8ud5c9t/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRtYXRheiIsImEiOiJudTUtLW1RIn0.cmNlEvGtX7J9ZbooWWx0Xw')
  .addTo(map);

  return map;

//
//   L.geoJson(treeData, {
//     style: function (feature) {
//         return {color: 'rgba(0,0,255,0.5)'};
//     },
//     onEachFeature: function (feature, layer) {
//         // layer.bindPopup(feature.properties.description);
//     }
// }).addTo(map);
//
//

}


function addTreeToMap(tree, map){
  let p;
  if(!tree.geometry){
    return false;
  }
  L.circle(tree.geometry.coordinates.reverse(), tree.properties.w*2, {stroke: false, fillColor: "#cf3", fillOpacity:0.5}).addTo(map);
  // map.addLayer(p);

}

function drawData(d, map){
  d.forEach(function(t){
    addTreeToMap(t, map);
  });
}









function drawCanvas(el) {
  svg = d3.select(el).append('svg');
  svg.attr('width', size.width)
  .attr('height', size.height);

}

function setProjection(){


}

function loadData(src='/static/data/TreesInCamden.geojson'){
  // set projection
    var projection = d3.geoMercator()
    .center([51.5517, 0.1588])
    .fitExtent([[50,-1],[52,1]]);

    // create path variable
    var gp = d3.geoPath()
        .projection(projection);

        console.log(projection);

  treeData = d3.json(src, function(xhr){
    svg.selectAll('path')
    .data(xhr.features)
    .enter()
    .append('path')
    .attr('d', gp);
  });
}


function init(el, data){
  let map = drawMap(el);
  drawData(treeData.features, map);
  // setProjection();
  // loadData();
}


module.exports = init;
