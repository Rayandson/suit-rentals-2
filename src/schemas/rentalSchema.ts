import joi from "joi"

export const rentalSchema = joi.object({
  renter_name: joi.string().required(),
  cpf: joi.string().min(11).max(11).required(),
  quantity: joi.number().required()
})