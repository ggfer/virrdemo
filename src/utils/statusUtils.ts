const statusUtils = {

  /**
   * @param zoom
   * @returns altitude
   */
  convertZoomToAltitude(zoom: number) {
    const EarthCircumference = 40.075 * 1000000;

    let altitude = EarthCircumference / Math.pow(2, zoom - 1);
    return altitude;
  },

  convertAltitudeToZoom(altitude: number) {
    const EarthCircumference = 40.075 * 1000000;

    let zoom = Math.log2(EarthCircumference / altitude) + 1;
    return zoom;
  },

};

export default statusUtils;
