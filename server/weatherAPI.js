const axios = require('axios');
require('dotenv').config();

const getWeatherData = async (location) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
        throw new Error('OpenWeather API key is missing');
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('API Response Error:', error.response.data);
      throw new Error(`OpenWeather API Error: ${error.response.data.message}`);
    } else {
      console.error('Network Error:', error.message);
      throw new Error('Network error occurred');
  }
  }
};

module.exports = { getWeatherData };