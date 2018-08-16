module.exports = {
    mongoURL: process.env.NODE_ENV === 'test' ? "mongodb://localhost:27017/type-racer-test" : "mongodb://localhost:27017/type-racer"
}