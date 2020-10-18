exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        data: JSON.stringify({message: "Hello World"})
    };
}