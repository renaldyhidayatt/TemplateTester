const db = require("../models");
const Posts = db.post;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

// Create and Save a new Posts
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Posts
  const Posts = new Posts({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  });

  // Save Posts in the database
  Posts.save(Posts)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Posts.",
      });
    });
};

// Retrieve all Postss from the database.
exports.findAll = (req, res) => {
  const { page, size, title } = req.query;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  const { limit, offset } = getPagination(page, size);

  Posts.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        Postss: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Postss.",
      });
    });
};

// Find a single Posts with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Posts.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: "Not found Posts with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Posts with id=" + id });
    });
};

// Update a Posts by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Posts.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Posts with id=${id}. Maybe Posts was not found!`,
        });
      } else res.send({ message: "Posts was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Posts with id=" + id,
      });
    });
};

// Delete a Posts with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Posts.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Posts with id=${id}. Maybe Posts was not found!`,
        });
      } else {
        res.send({
          message: "Posts was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Posts with id=" + id,
      });
    });
};

// Delete all Postss from the database.
exports.deleteAll = (req, res) => {
  Posts.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Postss were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Postss.",
      });
    });
};

// Find all published Postss
exports.findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Posts.paginate({ published: true }, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        Postss: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page - 1,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Postss.",
      });
    });
};
