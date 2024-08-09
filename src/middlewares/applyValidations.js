import { validationResult } from "express-validator";

//aplicamos las validaciones
export const applyValidations = (req, res, next) => {
    const errores = validationResult(req)
    if (!errores.isEmpty()){
        const errors = errores.array().map(a => a.msg)
        return res.status(400).json(errors)
    }
    next();
};