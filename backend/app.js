const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const data = require('./data');

app.get('/api/analytics', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
