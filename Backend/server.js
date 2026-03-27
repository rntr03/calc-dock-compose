const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// API endpoint
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 + num2 });
});

app.listen(5000, () => {
    console.log('Backend running on port 5000');
});