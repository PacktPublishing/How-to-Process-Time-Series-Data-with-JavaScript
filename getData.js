// https://github.com/CSSEGISandData/COVID-19/
// https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series
const c19Data = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"

const https = require("https");
const fs = require("fs");

https.get(c19Data, (response) => {
	let data = "";
	response.on("data", (chunk) => {
		data += chunk;
	});
	response.on("end", () => {
		console.log("Done fetching data");
		// write to file
		fs.writeFile("c19Data.csv", data, (error) => {
			if (error) {
				console.log("Error writing data", error);
				throw error;
			}
			console.log("Saved C19 data in c19Data.csv");
		});
	});
}).on("error", (error) => {
	console.log("Error fetching data: ", error.message);
});
