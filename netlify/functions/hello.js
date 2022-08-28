exports.handler = async function (event, context) {
    console.log("ENTERING HELLO")

    const message = "Hello World!"
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(message)
    }
}
