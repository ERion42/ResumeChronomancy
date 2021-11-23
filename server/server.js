const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: boolean }))
app.use('./routes')

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:'$'{PORT}`);
});