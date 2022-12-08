module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ message: "This route does not exist" });
  });

  app.use((err, req, res, next) => {

    // Error 409 - Conflict

    if (err.code && err.code === 11000) {
      res.status(409).json({ errorMessages: ['This user is already registered'] })
    }


    // Error 400 - Validation
    if (err.name === 'ValidationError') {
      let errorMessages = Object.values(err.errors).map(el => el.message)
      res.status(400).json({ errorMessages })
    }

    console.error("ERROR", req.method, req.path, err);

    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error. Check the server console" })
    }
  })
}
