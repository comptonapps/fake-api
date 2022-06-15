const express = require('express');
const PORT = process.env.PORT || 4455;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    return res.json({foo: true})
});

app.get('/new', (req, res) => {
    return res.json({new: true});
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});