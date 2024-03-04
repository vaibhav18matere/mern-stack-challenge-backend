const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
     res.json({ message: 'Hello!!' })
});

app.listen(8000, () => {
     console.log('server is running on port 8000');
})