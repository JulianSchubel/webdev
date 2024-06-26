const { StatusCodes, ReasonPhrases } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR)
}

module.exports = errorHandlerMiddleware
