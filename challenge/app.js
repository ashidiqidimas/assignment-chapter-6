const express = require("express");
const {userRouter} = require("./src/user/user.route");
const {userBiodataRouter} = require("./src/user_biodata/user_biodata.route");
const {userHistoryRouter} = require("./src/user_history/user_history.route");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRouter);
app.use("/biodata", userBiodataRouter);
app.use("history", userHistoryRouter);

app.listen(port, () => console.log(`Server is listening on port: ${port}`));