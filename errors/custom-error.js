class CustomError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
const createCustomError = (msg, statusCode)=>{
    return new CustomError(msg, statusCode);
}

module.exports = {CustomError, createCustomError};
