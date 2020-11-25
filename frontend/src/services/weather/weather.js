const API_KEY = 'd503e13497323b24bf51da47846228ac';

function forecastURL(key, id) {
    return `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}`;
}

function findCityURL(key, city) {
  return `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${key}`;
}

async function getWeather(id) {
  try {
    const response = await fetch(forecastURL(API_KEY,id));
    const json = await response.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
}

export async function getWeathers(ids) {
  const response = [];
  for(let id of ids) {
    const data = await getWeather(id);
    response.push({...data, id});
  }
  return response;
}

export async function findCity(city) {
  try {
    const response = await fetch(findCityURL(API_KEY,city));
    const json = await response.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
}
