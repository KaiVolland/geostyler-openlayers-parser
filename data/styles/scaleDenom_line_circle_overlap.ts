import { Style } from 'geostyler-style';

const scaleDenomLineCircleOverlap: Style = {
  name: 'OL Style',
  rules: [
    {
      name: 'OL Style Rule 0',
      scaleDenominator: {
        min: 0,
        max: 800
      },
      symbolizers: [{
        kind: 'Line',
        color: '#000000',
        width: 3,
        dasharray: [1, 2, 3, 4],
        cap: 'round',
        join: 'miter',
        dashOffset: 5
      }]
    }, {
      name: 'OL Style Rule 1',
      scaleDenominator: {
        min: 500,
        max: 1000
      },
      symbolizers: [{
        kind: 'Mark',
        wellKnownName: 'circle',
        color: '#FF0000',
        radius: 6
      }]
    }
  ]
};

export default scaleDenomLineCircleOverlap;
