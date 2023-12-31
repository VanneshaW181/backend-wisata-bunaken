const express = require("express");
const app = express();
const port = 3000;
const galeriRouter = require("./routes/galeriRouter");
const penginapanRouter = require("./routes/penginapanRouter");
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/galeri", galeriRouter);
app.use("/penginapan", penginapanRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
