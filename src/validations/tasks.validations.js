import { body, param } from "express-validator";

export const validacionesDeTaskCreate = [
    body('title')
        .isString().withMessage("el titulo debe de ser una cadena de texto")
        .notEmpty().withMessage("el titulo no puede estar vacio")
        .isLength({
            min: 6,
            max: 21
        }).withMessage('el titulo debe ser mayor que 5 y menor que 20'),
    body('description')
        .isString().withMessage("la descripcion debe de ser una cadena de texto")
        .notEmpty().withMessage("la descripcion no puede estar vacia"),
    body('isComplete')
        .isBoolean().withMessage('este campo solo acepta valores booleanos ')
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

export const validacionesDeTaskDelete = [
    param('id')
        .isNumeric().withMessage('el parametro tiene que ser numerico')
];


