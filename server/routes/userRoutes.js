const { Router } = require('express');
const UserPreferences = require('../models/userPreferences');

const router = Router();

// Insert new user preferences
router.post('/', async (req, res) => {
    // (Insert code for creating new user preferences here)
    try {
        const { userId, location, units } = req.body;

        // Validate input data
        if (!userId || !location) {
            return res.status(400).send('UserId and location are required');
        }

        // Create a new UserPreferences document
        const newUserPreference = new UserPreferences({
            userId,
            location,
            units: units || 'metric',  // Default to 'metric' if not provided
        });

        await newUserPreference.save();

        res.status(201).json({
            message: 'User preferences saved successfully!',
            data: newUserPreference,
        });
    } catch (error) {
        console.error('Error inserting user preferences:', error);
        res.status(500).send('Error saving user preferences...');
    }
});

// Update user preferences
router.put('/:userId', async (req, res) => {
    // (Insert code for updating user preferences here)
    try {
        const { location, units } = req.body;

        // Find the user by userId
        const user = await UserPreferences.findById(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Update the user preferences
        if (location) user.location = location;
        if (units) user.units = units;

        await user.save();

        res.json({
            message: 'User preferences updated successfully!',
            data: user,
        });
    } catch (error) {
        console.error('Error updating user preferences:', error);
        res.status(500).send('Error updating user preferences...');
    }
});

// Delete user preferences
router.delete('/:userId', async (req, res) => {
    // (Insert code for deleting user preferences here)
    try {
        const user = await UserPreferences.findByIdAndDelete(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.json({
            message: 'User preferences deleted successfully!',
        });
    } catch (error) {
        console.error('Error deleting user preferences:', error);
        res.status(500).send('Error deleting user preferences...');
    }
});

// Retrieve user preferences
router.get('/:userId', async (req, res) => {
    // (Insert code for retrieving user preferences here)
    try {
        const user = await UserPreferences.findById(req.params.userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.json(user);
    } catch (error) {
        console.error('Error retrieving user preferences:', error);
        res.status(500).send('Error retrieving user preferences...');
    }
});

module.exports = router;