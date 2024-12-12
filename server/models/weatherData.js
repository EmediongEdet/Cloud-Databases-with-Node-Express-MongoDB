const mongoose = require('mongoose');
 
const weatherDataSchema = new mongoose.Schema ({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserPreferences' },
    temperature: { type: Number, required: true },
    description: { type: String },
    humidity: { type: Number },
    date: { type: Date, default: Date.now },
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;