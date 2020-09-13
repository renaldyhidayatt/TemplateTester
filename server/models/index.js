const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.post = require("./post.model")(mongoose, mongoosePaginate);

db.tutorials = require("./tutorial.model.js")(mongoose, mongoosePaginate);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
