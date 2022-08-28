const mongodb = require("mongodb")
const username = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@cluster0.i0gla.mongodb.net/project-animals?retryWrites=true&w=majority`;
exports.handler = async function (event, context) {
    console.log("DB ENTRY")
    const client = await mongodb.connect(uri, { useUnifiedTopology: true })
    const db = client.db('endangered')
    console.log("DB ENTRY")

    try {
        const animalsCollection = await db.collection("animals")
            .find()
            .toArray()
        client.close()
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },

            body: JSON.stringify(animalsCollection)
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: "Please try again later."
        }
    }
}
