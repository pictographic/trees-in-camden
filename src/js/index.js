const d3 = require('d3');

let margins = {top:0, right: 0, bottom: 0, left: 0};
let size = {width: 640, height: 480};
let svg = null;


function renderAxes(el){
  svg = d3.select(el).append('svg');
  // yAxis = svg.append('g');
  // xAxis = svg.append('g');
}


function drawCanvas() {
  svg.attr('width', size.width)
  .attr('height', size.height);
  // yAxis.attr('transform', `translate(${margins.left}, ${margins.top})`).call(axisL);
  // xAxis.attr('transform', `translate(${margins.left}, ${size.height -  margins.bottom})`).call(axisB);

}


function init(){

  renderAxes('#map-container');
// setScales({width:document.body.clientWidth, height:100}, {left:0, bottom: 0, top:0, right: 0});
  drawCanvas();
}
