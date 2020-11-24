const API_KEY = 'd503e13497323b24bf51da47846228ac';

function makeUrl(key, id) {
    return `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${key}`;
}

async function getWeather(id) {
    try {
        const response = await fetch(makeUrl(API_KEY,id));
        const json = await response.json();
        return json;
    } catch (error) {
        return console.log(error);
    }
}

function getWeathers(ids) {
    const response = ids.map(async (id) => await getWeather(id));
    return response;
}

export default getWeathers;