const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

const weatherRoutes = require('./routes/weatherRoutes');
const userRoutes = require('./routes/userRoutes')
const UserPreferences = require('./models/userPreferences');


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors({credentials: true, origin: "http://localhost:5000"}))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,
).then(() => {
  console.log('Connected to MongoDB');

  // Only add a sample user if none exists
  UserPreferences.findOne({ userId: '12345' }).then((existingUser) => {
    if (!existingUser) {
        const sampleUser = new UserPreferences({
            userId: '12345',
            location: 'New York',
        });

        sampleUser.save().then(() => {
            console.log('Sample user added successfully');
        });
    }
  });


}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Use the weatherRoutes
app.use('/weather', weatherRoutes);

// use the userRoutes
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
