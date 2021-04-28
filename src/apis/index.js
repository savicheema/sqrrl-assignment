import { filterStore, loaderStore, setLoader } from "../utils/redux";

const apiUrl = new URL("https://api.spacexdata.com/v3/launches/");

export const filterCall = ({ year, launchSuccess, landingSuccess }) => {
  apiUrl.searchParams.set("limit", 100);

  if (year !== null) apiUrl.searchParams.set("launch_year", year);
  else apiUrl.searchParams.delete("launch_year");
  if (launchSuccess !== null)
    apiUrl.searchParams.set("launch_success", launchSuccess);
  else apiUrl.searchParams.delete("launch_success");
  if (landingSuccess !== null)
    apiUrl.searchParams.set("land_success", landingSuccess);
  else apiUrl.searchParams.delete("land_success");

  return new Promise((resolve, reject) => {
    loaderStore.dispatch(setLoader(true));
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        loaderStore.dispatch(setLoader(false));
        resolve(data);
      })
      .catch((err) => {
        loaderStore.dispatch(setLoader(false));
        reject(err);
      });
  });
};
