import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Example: React.FC = () => {

  const polygonsToAdd = [
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
    {
      type: "Polygon",
      coordinates: [
        [
          [7.449506, 51.508903],
          [7.450709, 51.516728],
          [7.471001, 51.512161],
          [7.461132, 51.507006],
          [7.45191, 51.504896],
          [7.449506, 51.508903],
        ],
      ],
    },
    {
      type: "Polygon",
      coordinates: [
        [
          [7.45555, 51.502225],
          [7.45555, 51.507701],
          [7.467819, 51.507701],
          [7.467819, 51.502225],
          [7.45555, 51.502225],
        ],
      ],
    },
    {
      type: "Polygon",
      coordinates: [
        [
          [7.470951000000001, 51.520409463656755],
          [7.470108460286411, 51.520381985404676],
          [7.469275154636403, 51.52029985180478],
          [7.468460215811083, 51.52016396302217],
          [7.467672575082291, 51.51997580835556],
          [7.4669208642646625, 51.51973744989958],
          [7.4662133210449495, 51.51945149992425],
          [7.465557698650154, 51.51912109222112],
          [7.464961180847556, 51.518749847730895],
          [7.464430303210306, 51.5183418348313],
          [7.463970881512382, 51.517901524721694],
          [7.463587948037452, 51.51743374239536],
          [7.46328569649822, 51.51694361373797],
          [7.463067436167364, 51.51643650933405],
          [7.46293555571921, 51.515917985597966],
          [7.462891497173971, 51.51539372387618],
          [7.4629357402249745, 51.51486946818836],
          [7.463067797115104, 51.514350962290465],
          [7.46328621811279, 51.513843886749335],
          [7.463588607521794, 51.51335379671792],
          [7.463971650043864, 51.51288606109256],
          [7.4644311472004174, 51.512445803717924],
          [7.464962063409878, 51.51203784728248],
          [7.46555858121248, 51.51166666051785],
          [7.466214165035069, 51.511336309278875],
          [7.466921632796159, 51.51105041203851],
          [7.4676732345666474, 51.5108121002835],
          [7.468460737425667, 51.51062398424287],
          [7.469275515584154, 51.51048812432306],
          [7.470108644792181, 51.510406008561354],
          [7.470951000000001, 51.51037853634324],
          [7.4717933552078195, 51.510406008561354],
          [7.472626484415847, 51.51048812432306],
          [7.473441262574333, 51.51062398424287],
          [7.474228765433354, 51.5108121002835],
          [7.474980367203844, 51.51105041203851],
          [7.475687834964932, 51.511336309278875],
          [7.476343418787521, 51.51166666051785],
          [7.476939936590123, 51.51203784728248],
          [7.477470852799584, 51.512445803717924],
          [7.477930349956137, 51.51288606109256],
          [7.478313392478207, 51.51335379671792],
          [7.4786157818872105, 51.513843886749335],
          [7.4788342028848955, 51.514350962290465],
          [7.478966259775026, 51.51486946818836],
          [7.479010502826029, 51.51539372387618],
          [7.4789664442807915, 51.515917985597966],
          [7.478834563832638, 51.51643650933405],
          [7.478616303501782, 51.51694361373797],
          [7.478314051962549, 51.51743374239536],
          [7.47793111848762, 51.517901524721694],
          [7.477471696789696, 51.5183418348313],
          [7.476940819152445, 51.518749847730895],
          [7.4763443013498465, 51.51912109222112],
          [7.475688678955051, 51.51945149992425],
          [7.474981135735339, 51.51973744989958],
          [7.47422942491771, 51.51997580835556],
          [7.473441784188918, 51.52016396302217],
          [7.472626845363598, 51.52029985180478],
          [7.471793539713589, 51.520381985404676],
          [7.470951000000001, 51.520409463656755],
        ],
      ],
    },
  ]

  const geomanControlOptions = {
    controls: {
      drawControls: false,
      optionsControls: false,
      editControls: true,
      editPolygon: false,
      dragMode: false,
      cutPolygon: false,
      removalMode: false,
      rotateMode: false,
      scaleMode: false,
      splitMode: false,
      mergePolygons: false,
      unionMode: false,
      differenceMode: false,
      copyLayerMode: true,
    },
    init: (map: L.Map) => {
      map.addLayer(L.geoJSON(polygonsToAdd))
      map.pm.enableGlobalCopyLayerMode()
    },
  }

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
    {() => {
      //const LibComponent = require('some-lib').LibComponent;
      return <Map geomanControlOptions={geomanControlOptions} />;
    }}
  </BrowserOnly>
      
  );
};

export default Example;