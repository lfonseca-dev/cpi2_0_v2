export const validate =
  (schema, property = "body") =>
  (req, res, next) => {
    const parsed = schema.safeParse(req[property]);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Validation error!",
        errors: parsed.error.issues.map((issue) => ({
          path: issue.path[0],
          message: issue.message,
        })),
      });
    }

    req[property] = parsed.data;
    next();
  };
