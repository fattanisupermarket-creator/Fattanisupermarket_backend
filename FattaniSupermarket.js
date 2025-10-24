const express = require('express');
const Database = require('./database/Database');
const routes = require('./Routes');
require('dotenv').config();
// const { swaggerUi, swaggerSpec } = require('./swagger'); // Import Swagger

const app = express(); // ✅ create express app instance
const PORT = process.env.PORT || 3000;

// Connect to database
Database();

app.use(express.json());
// ✅ Swagger docs route
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Your API routes
app.use('/api', routes);


app.get('/', (req, res) => {
  res.send('Fattani Supermarket API is running');
});
        

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

module.exports = app;
