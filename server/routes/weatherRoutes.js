const { Router } = require('express');
const UserPreferences = require('../models/userPreferences');
const WeatherData = require('../models/weatherData'); // Ensure you import the model
const { getWeatherData } = require('../weatherAPI');

const router = Router();

router.get('/:userId', async (req, res) => {
    try {
        const user = await UserPreferences.findById(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Validate location
        if (!user.location) {
            return res.status(400).send('Invalid location');
        }

        // Fetch weather data from the API
        const weatherData = await getWeatherData(user.location);

        // Save the fetched data to the database
        const savedWeatherData = new WeatherData({
            userId: user._id,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0]?.description,
            humidity: weatherData.main.humidity,
        });

        await savedWeatherData.save();

        // Send a single response after all operations
        res.json({
            message: 'Weather data fetched and saved successfully!',
            data: savedWeatherData,
        });

        // Log the result to the console
        console.log(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error.message || error);
        res.status(500).send('Error fetching weather data...');
    }
});

// Delete weather data
router.delete('/:id', async (req, res) => {
    // (Insert code for deleting weather data here)
    try {
        const weatherData = await WeatherData.findByIdAndDelete(req.params.id);
        if (!weatherData) {
            return res.status(404).send('Weather data not found');
        }

        res.json({
            message: 'Weather data deleted successfully!',
        });
    } catch (error) {
        console.error('Error deleting weather data:', error);
        res.status(500).send('Error deleting weather data...');
    }
});


module.exports = router;