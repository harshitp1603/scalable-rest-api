const { body } = require(
  "express-validator"
);

exports.taskValidation = [
  body("title")
    .notEmpty()
    .withMessage(
      "Task title is required"
    )
    .isLength({ min: 3 })
    .withMessage(
      "Title must be at least 3 characters"
    ),
];