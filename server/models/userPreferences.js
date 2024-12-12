const mongoose = require('mongoose');
 
const userPreferencesSchema = new mongoose.Schema ({
    userId: {type: String, required: true},
    location: {type: String, required: true},
    units: {type: String, enum: ['metric', 'imperial'], default: 'metric'},
});

const UserPreferences = mongoose.model('UserPreferences', userPreferencesSchema);

module.exports = UserPreferences;