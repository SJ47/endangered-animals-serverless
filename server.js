const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./server/helpers/create_router.js');

const uri = "mongodb+srv://test-user:lAMwocd5lxVH9bQy@cluster0.i0gla.mongodb.net/project-animals?retryWrites=true&w=majority";
// MongoClient.connect('mongodb://localhost:27017')
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('endangered');
        const animalsCollection = db.collection('animals');
        const animalsRouter = createRouter(animalsCollection);
        app.use('/api/animals', animalsRouter);

        const quizCollection = db.collection('quiz');
        const quizRouter = createRouter(quizCollection);
        app.use('/api/quiz', quizRouter);

    }).catch(console.err);

app.listen(5001, function () {
    console.log(`Listening on port ${this.address().port}`);
});