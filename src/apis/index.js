const apiUrl = new URL("https://api.spacexdata.com/v3/launches/");

export const filterCall = ({ year, launchSuccess, landingSuccess }) => {
  apiUrl.searchParams.set("limit", 100);
  if (year) apiUrl.searchParams.set("launch_year", year);
  if (launchSuccess) apiUrl.searchParams.set("launch_success", true);
  if (landingSuccess) apiUrl.searchParams.set("land_success", true);

  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
