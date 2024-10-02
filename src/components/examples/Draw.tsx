import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Example: React.FC = () => {
  const position: [number, number] = [51.514244, 7.468429];


  const geomanControlOptions = {
    controls: {
      position: 'topleft',
      drawMarker: true,
      drawPolyline: true,
      measurement: false,
      drawCircle: true,
      drawRectangle: true,
      drawText: false,
      dragMode: false,
      cutPolygon: false,
      editControls: false,
      optionsControls: false,
    },
    init: (map: L.Map) => {
      map.pm.enableDraw("Polygon", {
        snappable: true,
        snapDistance: 20,
      });
    },
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