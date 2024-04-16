const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

app.use(express.static(path.join(__dirname, 'client/build')));


app.get("/api", (req, res) => {
    res.send({ message: "connection working" });
});

app.get('/api/csv', (req, res) => {

    // const [coreScore, setCoreScore] = useState({});

    const userID = req.query.userID;
    console.log(userID);
    const results = [];
    const push = [];
    if (!userID) {
        return res.status(400).json({ error: 'userID parameter is missing' });
    }

    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => {

            if (data._id == userID) {
                console.log("server" + data.code);
                results.push(data);
            }

        }

        )
        .on('end', () => {
            // console.log(typeof results);
            res.json(results);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));