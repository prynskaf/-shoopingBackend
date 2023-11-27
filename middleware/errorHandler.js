const { constants } = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
        case constants.UNAUTHORIZED:
            res.json({ title: "unauthorized", message: err.message, stackTrace: err.stack })
        case constants.FORBIDDEN:
            res.json({ title: "forbidden", message: err.message, stackTrace: err.stack })
        case constants.SERVER_ERROR:
            res.json({ title: "server error", message: err.message, stackTrace: err.stack })
        default:
            console.log("No Error, All good!")
            break;
    }


}
module.exports = errorHandler;