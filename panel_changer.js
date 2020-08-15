// PanelChanger changes the focus of the front end display
// by publishing the three panels defined in `panelConfig`,
// one after the other every ten seconds. This changes the
// bounds of the displayed map, along with the featured
//  Hotels and bus stops.
exports.PanelChanger = class {
  constructor(mapRef, panelConfig) {
    this.mapRef = mapRef;
    this.panelConfig = panelConfig;
    this.panelIndex = 0;

    // Change the panel once every ten seconds
    this.timeTimerId = setInterval(() => {
      this.panelAdvance();
    }, 10000);
  }

  panelAdvance() {
    this.mapRef.set(this.panelConfig[this.panelIndex]);
    this.panelIndex = (this.panelIndex + 1) % this.panelConfig.length;
  }
};
