export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b05d1e0d3bmsh8a56b2800bd1946p12d206jsn5c469038b5a8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
