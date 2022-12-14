module.exports = app => {
    const userRoutes = require("./user.routes");
    app.use("/api/users", userRoutes)

    const commentsRoutes = require("./comments.routes");
    app.use("/api/comments", commentsRoutes)

    const feelingsRoutes = require("./feelings.routes");
    app.use("/api/feelings", feelingsRoutes)

    const postsRoutes = require("./posts.routes");
    app.use("/api/posts", postsRoutes)

    const authRoutes = require("./auth.routes");
    app.use("/api/auth", authRoutes)

    const uploadRoutes = require("./upload.routes");
    app.use("/api/upload", uploadRoutes)

    // const quizRoutes = require("./quiz.routes");
    // app.use("/api/quiz", quizRoutes)

}