const gridFeatures: GeoJSON.Feature[] = [];
for (let x = 0; x < 100; x++) {
  for (let y = 0; y < 100; y++) {
    gridFeatures.push({
      id: `${x}_${y}`,
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [x, y] },
      properties: [],
    });
  }
}

const pointGrid: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: gridFeatures,
};

const gridStyle: CircleLayer = {
  id: 'pointGrid',
  type: 'circle',
  source: 'pointGridSource',
  paint: {
    'circle-radius': 2,
    'circle-color': '#7c00bf',
  },
};

<Source
  id='pointGridSource'
  type='geojson'
  data={pointGrid}
/>
<Layer {...gridStyle} />

[45.736067, 51.641724]
[45.520525, 51.78316]
[45.503959, 51.83327]
[45.681662, 51.723726]
[45.740496, 51.782277]
[45.45575, 51.740551]
[45.451779, 51.874269]
[45.623391, 51.7643]
[45.590679, 51.753248]
[45.57096, 51.802365]

[[
[45.295452, 51.935753], 
[46.151552, 51.935753], 
[45.861062, 51.606465], 
[45.295452, 51.437346], 
[45.295452, 51.935753]]]
