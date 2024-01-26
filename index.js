const app = require("express")();
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
app.use(cors());

app.use(require("express").json());
app.listen(3001, () => {
    console.log("listening on port 3001");
});
const url = 'mongodb+srv://pratham2908:ptnsamnvd1@cluster0.nemoxpd.mongodb.net/';
const client = new MongoClient(url);

async function run() {
    await client.connect();
    console.log("connected");

    const db = client.db("task");
    const collection = db.collection("important");
    const data = await collection.find({}).limit(1000).toArray();
    return data;
}

app.post("/getData", (req, res) => {
    run().then((data) => {
        res.send(JSON.stringify(data));
    });
});

// localhost:3000/post