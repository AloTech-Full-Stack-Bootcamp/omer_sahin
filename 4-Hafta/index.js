import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);

    //(If a serie has been watched) {
    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) {
        this.lastSerie = serie;
      }
      let lastSerieFD = new Date(this.lastSerie.finishedDate);
      let serieFD = new Date(serie.finishedDate);
      // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
      if (lastSerieFD > serieFD) {
        // set "lastSerie" prop to "serie" object.
        this.lastSerie = serie;
      }
    } else {
      // If a serie hasn't been watched:

      //it should also update the number of series marked as watched / unwatched:
      //"numberOfWatched" and "numberOfUnWatched"
      this.numberOfUnWatched += 1;

      // Check if serie has "isCurrent" prop
      if (serie.isCurrent) {
        // Check if we have a "currentSerie" property. Set if we don't.
        // Check if we have a "nextSerie" property as well - if we didn't
        // set the .currentSerie property, set the .nextSerie property.
        if (!this.currentSerie) {
          this.currentSerie = serie;
        } else if (!this.nextSerie) {
          this.nextSerie = serie;
        }
      }
    }

    //check to see if we have series to process
    if (series.length > 0) {
      //Loop through all of the series in the "series" argument
      series.map((item) => {
        return this.add(item);
      });
      //Use the .add function to handle adding series, so we keep counts updated.
    }
    // find and update currently watching serie in "this.series" array
    // update "lastSerie" with the finished one
    this.finishSerie = function () {
      this.series.forEach((serie) => {
        if (serie === this.currentSerie) {
          let date = new Date();
          let day = String(date.getDate())
          let month = String(date.getMonth())
          let year = date.getFullYear();
          serie.isCurrent = true;
          serie.isWatched = false;
          serie.finishedDate = `${day}.${month}.${year}`;
          this.lastSerie = serie;
         
        }
        // set "currentSerie" with the next one
        if (serie === this.nextSerie) {
          this.currentSerie = serie;
          serie.isCurrent = true;
        }
        if (this.nextSerie === this.currentSerie) {
          if (!serie.isWatched && !serie.isCurrent) {
            this.nextSerie = serie;
          }
        }
      });

      // set new nextSerie value with the next one which has not been watched.
      // update "numberOfWatched" and "numberOfUnWatched" props
    };
    this.printSeriesReport = function () {
      fancyLogSeriesReport(this);
    };
  };
}
// Case 1
// -------------------------------------------------

// const mySeriesTracker = new SeriesTracker(series);
// mySeriesTracker.printSeriesReport();

// Case 2
// -------------------------------------------------

// const mySeriesTracker = new SeriesTracker(series);
// mySeriesTracker.finishSerie();
// mySeriesTracker.printSeriesReport();

// Case 3
// -------------------------------------------------

// const mySeriesTracker = new SeriesTracker(series);
// const newSerie = {
//   id: "9",
//   name: "Lost",
//   genre: "Adventure",
//   directorId: "4"
// };
// mySeriesTracker.add(newSerie);
// mySeriesTracker.printSeriesReport();
