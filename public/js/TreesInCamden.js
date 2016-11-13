(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TreesInCamden = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var d3 = require('d3');

var margins = { top: 0, right: 0, bottom: 0, left: 0 };
var size = { width: 640, height: 480 };
var svg = null;

function renderAxes(el) {
  svg = d3.select(el).append('svg');
  // yAxis = svg.append('g');
  // xAxis = svg.append('g');
}

function drawCanvas() {
  svg.attr('width', size.width).attr('height', size.height);
  // yAxis.attr('transform', `translate(${margins.left}, ${margins.top})`).call(axisL);
  // xAxis.attr('transform', `translate(${margins.left}, ${size.height -  margins.bottom})`).call(axisB);
}

function init() {

  renderAxes('#map-container');
  // setScales({width:document.body.clientWidth, height:100}, {left:0, bottom: 0, top:0, right: 0});
  drawCanvas();
}

},{"d3":"d3"}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sS0FBSyxRQUFRLElBQVIsQ0FBWDs7QUFFQSxJQUFJLFVBQVUsRUFBQyxLQUFJLENBQUwsRUFBUSxPQUFPLENBQWYsRUFBa0IsUUFBUSxDQUExQixFQUE2QixNQUFNLENBQW5DLEVBQWQ7QUFDQSxJQUFJLE9BQU8sRUFBQyxPQUFPLEdBQVIsRUFBYSxRQUFRLEdBQXJCLEVBQVg7QUFDQSxJQUFJLE1BQU0sSUFBVjs7QUFHQSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBdUI7QUFDckIsUUFBTSxHQUFHLE1BQUgsQ0FBVSxFQUFWLEVBQWMsTUFBZCxDQUFxQixLQUFyQixDQUFOO0FBQ0E7QUFDQTtBQUNEOztBQUdELFNBQVMsVUFBVCxHQUFzQjtBQUNwQixNQUFJLElBQUosQ0FBUyxPQUFULEVBQWtCLEtBQUssS0FBdkIsRUFDQyxJQURELENBQ00sUUFETixFQUNnQixLQUFLLE1BRHJCO0FBRUE7QUFDQTtBQUVEOztBQUdELFNBQVMsSUFBVCxHQUFlOztBQUViLGFBQVcsZ0JBQVg7QUFDRjtBQUNFO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgZDMgPSByZXF1aXJlKCdkMycpO1xuXG5sZXQgbWFyZ2lucyA9IHt0b3A6MCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMH07XG5sZXQgc2l6ZSA9IHt3aWR0aDogNjQwLCBoZWlnaHQ6IDQ4MH07XG5sZXQgc3ZnID0gbnVsbDtcblxuXG5mdW5jdGlvbiByZW5kZXJBeGVzKGVsKXtcbiAgc3ZnID0gZDMuc2VsZWN0KGVsKS5hcHBlbmQoJ3N2ZycpO1xuICAvLyB5QXhpcyA9IHN2Zy5hcHBlbmQoJ2cnKTtcbiAgLy8geEF4aXMgPSBzdmcuYXBwZW5kKCdnJyk7XG59XG5cblxuZnVuY3Rpb24gZHJhd0NhbnZhcygpIHtcbiAgc3ZnLmF0dHIoJ3dpZHRoJywgc2l6ZS53aWR0aClcbiAgLmF0dHIoJ2hlaWdodCcsIHNpemUuaGVpZ2h0KTtcbiAgLy8geUF4aXMuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbnMubGVmdH0sICR7bWFyZ2lucy50b3B9KWApLmNhbGwoYXhpc0wpO1xuICAvLyB4QXhpcy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2lucy5sZWZ0fSwgJHtzaXplLmhlaWdodCAtICBtYXJnaW5zLmJvdHRvbX0pYCkuY2FsbChheGlzQik7XG5cbn1cblxuXG5mdW5jdGlvbiBpbml0KCl7XG5cbiAgcmVuZGVyQXhlcygnI21hcC1jb250YWluZXInKTtcbi8vIHNldFNjYWxlcyh7d2lkdGg6ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgaGVpZ2h0OjEwMH0sIHtsZWZ0OjAsIGJvdHRvbTogMCwgdG9wOjAsIHJpZ2h0OiAwfSk7XG4gIGRyYXdDYW52YXMoKTtcbn1cbiJdfQ==
