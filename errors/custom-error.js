class CustomError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
const createCustomError = (statusCode, msg)=>{
    return new CustomError(statusCode, msg);
}

module.exports = {CustomError, createCustomError};
