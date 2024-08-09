import { body, param, validationResult } from "express-validator";

export const validacionesDeTaskCreate = [
    body('title')
    .isString().withMessage("el titulo debe de ser una cadena de texto")
    .notEmpty().withMessage("el titulo no puede estar vacio"),
    body('description')
    .isString().withMessage("la descripcion debe de ser una cadena de texto")
    .notEmpty().withMessage("la descripcion no puede estar vacia"),
    body('isComplete')
    .optional()
    .isBoolean().withMessage('este campo solo acepta valores booleanos ')
    .notEmpty().withMessage("el titulo no puede estar vacio")
];

export const validacionesDeTaskUpdate = [
    body('title')
    .optional()
    .isString().withMessage("el titulo debe de ser una cadena de texto")
    .notEmpty().withMessage("el titulo no puede estar vacio"),
    body('description')
    .optional()
    .isString().withMessage("la descripcion debe de ser una cadena de texto")
    .notEmpty().withMessage("la descripcion no puede estar vacia"),
    body('isComplete')
    .optional()
    .isBoolean().withMessage('este campo solo acepta valores booleanos ')
    .notEmpty().withMessage("el titulo no puede estar vacio")
];

export const applyValidations = (req, res, next) => {
    const errores = validationResult(req)
    if (!errores.isEmpty()){
        return res.status(400).json({
            erros:errores.array()
        })
    }

    next();
};