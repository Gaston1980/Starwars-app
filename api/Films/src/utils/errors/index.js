// creo mi propia instancias de errores que extiende de mi clase Error
class ClientError extends Error {
    constructor(message, statusCode = 400)//sino recibe un statusCode por default sea 400
{
    super(message);
    this.statusCode = statusCode;
    }
}

module.exports = { ClientError };