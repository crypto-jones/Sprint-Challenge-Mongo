const router = require('express').Router();

const Category = require('./categoryModel');
const Expense = require('../expense/expenseModel');

router
  .route('/')
  .get((req, res) => {
    Category.find({})
      .select({ title: 1, _id: 0 })
      .then(category => {
        res.status(200).json(category);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    const category = new Category(req.body);
    category
      .save()
      .then(savedCategory => {
        res.status(201).json(savedCategory);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

// router.route('/expenses').get((req, res) => {
//   Expense.find({ category: req.params.id })
//     .populate('title')
//     .select({ _id: 0 })
//     .then(expenses => res.send(expenses));
// });

module.exports = router;
