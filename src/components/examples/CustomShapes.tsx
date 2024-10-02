import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';



interface Props {
  init?: string;
}

const Example: React.FC<Props> = ({init='directDraw'}) => {



  const polygonGeoJSON = {
    type: 'Feature',
    properties: {},
    geometry: 
    {
      type: "Polygon",
      coordinates: [
        [
          [7.456541, 51.512161],
          [7.461689, 51.518224],
          [7.46525, 51.515046],
          [7.470054, 51.517636],
          [7.472972, 51.511173],
          [7.469797, 51.50738],
          [7.461132, 51.507006],
          [7.460745, 51.509277],
          [7.456541, 51.512161],
        ],
      ],
    },
  }


  const rectangleGeoJSON = {
    "type": "Feature",
    "properties": {
      "id": 309,
      "shape": "Rectangle",
      "angle": 0
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -0.12429,
            51.518304
          ],
          [
            -0.12429,
            51.524392
          ],
          [
            -0.113737,
            51.524392
          ],
          [
            -0.113737,
            51.518304
          ],
          [
            -0.12429,
            51.518304
          ]
        ]
      ]
    }
  }

  const triangleGeoJSON = {
    "type": "Feature",
    "properties": {
      "id": 351,
      "shape": "Polygon"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -0.110219,
            51.534644
          ],
          [
            -0.120343,
            51.52781
          ],
          [
            -0.103956,
            51.527756
          ],
          [
            -0.110219,
            51.534644
          ]
        ]
      ]
    }
  }

  const directDrawInit = (map: L.Map) => {
    // Draw specific custom shape
    // Draw custom shape with specific style
    map.pm.enableCustomShapeDraw(polygonGeoJSON, {
      templineStyle: { color: 'red' },
    });
  }

  const addSeveralCustomShapes = (map: L.Map) => {
    // Add custom shape to library
    map.pm.addCustomShape('polygon', polygonGeoJSON, {
      templineStyle: { color: 'red' },
      pathOptions: { color: 'green' },
    });

    map.pm.addCustomShape('rectangle', rectangleGeoJSON, {
      templineStyle: { color: 'orange' },
      pathOptions: { color: 'green' },
    });

    map.pm.addCustomShape('triangle', triangleGeoJSON, {
      templineStyle: { color: 'green' },
      pathOptions: { color: 'green' },
    });

    map.pm.addCustomShapeToToolbar('polygon',{
      text: 'Poly1',
      title: 'Polygon',
    });
    // map.pm.addCustomShapeToToolbar('rectangle',{
    //   text: 'Rect',
    //   title: 'Rectangle',
    // });
    // map.pm.addCustomShapeToToolbar('triangle',{
    //   text: 'Tri',
    //   title: 'Triangle',
    // });
  }

  const geomanControlOptions = {
    controls: {
      drawControls: true,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawPolygon: false,
      drawRectangle: false,
      drawCircle: false,
      drawText: false,
      optionsControls: true,
      editControls: true,
      dragMode: false,
      cutPolygon: false,
      editPolygon: false,
      removalMode: false,
      rotateMode: false,
      scaleMode: false,
      splitMode: false,
      mergePolygons: false,
      unionMode: false,
      differenceMode: false,
      pinningOption: false,
      snappingOption: false,
      autoTracingOption: false,
      drawCustomShape: true,
      snapGuidesOption: false,
    },
    init: init === 'directDraw' ? directDrawInit : addSeveralCustomShapes,
    //init: addSeveralCustomShapes,
  }

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      const LibComponent =
        require('@site/src/components/Map').default;
      return     <LibComponent
      geomanControlOptions={geomanControlOptions}
    />
    }}
  </BrowserOnly>
  );
};

export default Example;