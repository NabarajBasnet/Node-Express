const errorHandler = (err, req, res, next) => {
    console.log('Status Code: ', res.statusCode)
    const status = res.statusCode ? res.statusCode : 500;
    switch (status) {
        case 400:
            res.json({ title: 'Validation Failed', message: err.message, stackTrace: err.stack });
            break;
        case 404:
            res.json({ title: 'Not Found', message: err.message, stackTrace: err.stack });
            break;
        default:
            break;
    }
}

module.exports = errorHandler
