const API_KEY = 'd503e13497323b24bf51da47846228ac';

/**
 * Gera uma URL para prever o tempo
 * @function forecastURL
 * @param {string} key - API key a ser utilizada
 * @param {string} id  - id da cidade a ser buscado
 */
function forecastURL(key, id) {
    return `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}`;
}

/**
 * Gera URL para buscar o id temporal de uma cidade.
 * @function findCityURL
 * @param {string} key - API key a ser utilizada
 * @param {string} city - Nome da cidade a ser buscada
 */
function findCityURL(key, city) {
  return `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${key}`;
}

/**
 * Busca informações climáticas sobre uma cidade
 * @function getWeather
 * @param {Number} id - id temporal da cidade
 */
async function getWeather(id) {
  try {
    const response = await fetch(forecastURL(API_KEY,id));
    const json = await response.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
}

/**
 * Busca as informações temporais de várias cidades
 * @function getWeathers
 * @param {Array<Number>} ids - Array de ids temporais das cidades
 */
export async function getWeathers(ids) {
  const response = [];
  for(let id of ids) {
    const data = await getWeather(id);
    response.push({...data, id});
  }
  return response;
}

/**
 * Busca o id temporal de uma cidade
 * @function findCity
 * @param {string} city - nome da cidade a ser buscada
 */
export async function findCity(city) {
  try {
    const response = await fetch(findCityURL(API_KEY,city));
    const json = await response.json();
    return json;
  } catch (error) {
    return console.log(error);
  }
}
