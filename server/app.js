const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let user = "user1";
let password = "thisisuser";
const port = 3001;
const MONGO_URI = `mongodb+srv://${user}:${password}@dragonlearncluster-9aoa7.mongodb.net/dragonlearn?retryWrites=true&w=majority`;
const app = express();

const game_router = express.Router();
const game_controller = require('./src/controller/game');

const user_router = express.Router();
const user_controller = require('./src/controller/user');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/image',express.static(__dirname + '/public/image'));
// app.use("/image", express.static(__dirname + "/public"));

///Game
app.use("/game", game_router);
game_router.post("/create_gdata", game_controller.create);
game_router.get("/wtfattp", game_controller.wtfattp);

///User
app.use("/user", user_router);
user_router.post("/create", user_controller.create);
user_router.get("/login", user_controller.login);

var db = mongoose.connection;

db.once("open", function () {
  console.log("connected mongodb");
});

app.get("/", (req, res) => res.send("Dragon Learn"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));