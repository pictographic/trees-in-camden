const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


const babyparse = require('babyparse');
// const async = require('async');

const srcfile = '../../source-data/data/rows.csv';
const destfile = './output/camden-trees.geojson';
const refFile = './output/camden-trees-refs.json';

function indexField(name, vocab) {
  if ((name in vocab)) {
    vocab.indexOf(name);
  }


}

function hashID(str) {
  return crypto.createHash('md5')
    .update(str)
    .digest('hex');
}

function parseCSV(fileContents, cb) {
  let geoJSON = {};
  let regData = {};
  let species = {};
  let wards = {};
  let trees = [];
  let data = babyparse.parse(fileContents, {
      header: true
    })
    .data;

  trees = data.filter(itm=>itm['Latitude']).map((itm) => {
    let speciesHash;


    if (!itm['Scientific Name']) {
      return {};
    }


    speciesHash = hashID(itm['Scientific Name']);
    species[speciesHash] = {
      scientific: itm['Scientific Name'],
      common: itm['Common Name']
    };
    wards[itm['Ward Code']] = {
      code: itm['Ward Code'],
      name: itm['Ward Name']
    };

    return {
      type: "Feature",
      geometry: {
        type:"Point",
        coordinates: [Number(itm['Longitude']), Number(itm['Latitude'])]
      },
      properties: {
        species: speciesHash,
        ward: itm['Ward Code'],
        h: Number(itm['Height In Metres']),
        w: Number(itm['Spread In Metres'])
      }
    }
  });

  geoJSON = {
    type: "FeatureCollection",
    features: trees
  };

  refData = {
    wards,
    species
  }

  fs.writeFile(destfile, JSON.stringify(geoJSON, null, 1), function(err){
    fs.writeFile(refFile, JSON.stringify(refData, null, 1), cb);
  });
}

function convertCSVFile(file, cb) {
  fs.readFile(file, 'utf8', function (err, fileContents) {
    if (err) {
      return cb(err);
    }

    parseCSV(fileContents, cb);

  });
}





convertCSVFile(srcfile, function (err) {

  if (err) {
    return console.log(err);
  }

  return 'csv conversion complete';

});
