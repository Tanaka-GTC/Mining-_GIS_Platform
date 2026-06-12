const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Mining GIS Platform API is running', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});