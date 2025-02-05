class errorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorMiddleware = (err, req, res, next) => {
    if (err instanceof errorHangler) {
        res.status(err.statusCode).json({message: err.message});
    } else {
        res.status(500).json({message: 'Something went wrong'});
    }
}
export default errorHandler;