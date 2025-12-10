const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        message: 'Vaflia'
    });
});




app.listen(PORT, () => {
    console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});