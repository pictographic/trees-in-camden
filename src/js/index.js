var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoiYWRtYXRheiIsImEiOiJudTUtLW1RIn0.cmNlEvGtX7J9ZbooWWx0Xw';
var map;

function makeStops(){
    let i=0;
    let stops = [];
    while(i<50){
        // stops.push([{zoom:12, value:i},1]);
        stops.push([{zoom:11, value:i},3]);
        stops.push([{zoom:0, value:i},i * 0.5]);
        i++;
    }

    return stops;

}


function onMapLoad(){





    map.addSource('trees', {
        type: 'vector',
        url: 'mapbox://admataz.8bc7c634'
    });
    map.addLayer({
        'id': 'trees',
        'type': 'circle',
        'source': 'trees',
        'source-layer': 'camden-trees',
        'paint': {
            'circle-color': '#66ff33',
            'circle-opacity': {
                'stops': [
                    [2, 0],
                    [20, 0.8]
                ]
            },
            'circle-radius': {
                'base': 5,
                'type': 'exponential',
                'property': 'w',
                'stops': makeStops()
            }
        }
    });
    console.log(JSON.stringify(map.getBounds()));
    // map.addLayer({
    //     'id': 'trees-highlighted',
    //     'type': 'circle',
    //     'source': 'trees',
    //     'source-layer': 'camden-trees',
    //     'paint': {
    //         'circle-color': '#ffcc33',
    //         'circle-opacity': 1,
    //         // make circles larger as the user zooms from z12 to z22
    //         'circle-radius': {
    //             'base': 5,
    //             'type': 'exponential',
    //             'property': 'w',
    //             'stops': makeStops()
    //         }
    //     },
    //     'filter': ['==', 'species', '']
    // });
}

function onMapMouseMove(e){
    var features = map.queryRenderedFeatures(e.point).filter(itm=>itm.layer.id==='trees');
    if(features.length){
        // map.setPaintProperty('trees', 'circle-color', '#faafee');
        // map.setFilter('trees-highlighted', ['==', 'species', features[0].properties.species]);
    } else {
        // map.setFilter('trees-highlighted', ['==', 'species', '']);
    }
}

function uniqueSorted(arr){
    //wow ES6 does everything in one line
    return [...new Set(arr)].sort((a,b)=>(a-b));
}

function getCurrentTreeData(){
    // let trees = map.querySourceFeatures('trees', {sourceLayer:'camden-trees'});
    let trees = map.queryRenderedFeatures().filter(itm=>itm.layer.id==='trees');
    let heights = uniqueSorted(trees.map(itm=>itm.properties.h));
    let widths = uniqueSorted(trees.map(itm=>itm.properties.w));

    return {
        trees,
        widths,
        heights
    }
}

function onMapMove(e){
    console.log(getCurrentTreeData());
}

function init(el){
    map = new mapboxgl.Map({
        container: el,
        style: 'mapbox://styles/admataz/ciu0d8uz600ih2irqg48ha9bo',
        maxZoom: 20,
        minZoom: 6,
        zoom: 11,
        maxBounds: [[-1, 50.5], [1,52.6]],
        center:[-0.1588, 51.5517]
    });
    map.addControl(new mapboxgl.NavigationControl());
// {"_sw":{"lng":-0.21214562842135365,"lat":51.49943812836307},"_ne":{"lng":-0.06760674902690766,"lat":51.596153230910346}}
    map.on('load',onMapLoad);
    map.on('mousemove', onMapMouseMove);
    // map.on('move', onMapMove);
}


module.exports = init;
