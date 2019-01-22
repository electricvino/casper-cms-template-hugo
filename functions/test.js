exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body:  process.env.INSTAGRAM_ACCESS_TOKEN.slice(0,5)
    })
}