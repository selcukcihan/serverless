exports.handler = async (event) => {
    return generateResponse(200, JSON.stringify({
        random: Math.random()
    }));
};

const generateResponse = (status, body) => {
    var response = {
        statusCode: status,
        headers: {
            "Content-Type": "application/json"
        },
        body: body
    };
    return response;
};
