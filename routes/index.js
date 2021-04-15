var express = require('express');
const format = require('date-fns/format');
const messages = require('../public/javascripts/messages');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

/* GET new message page. */
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Message Board' });
});

// POST new message
router.post('/new', (req, res) => {
  messages.unshift({
    subject: req.body.subject,
    author: req.body.author,
    added: format(new Date(), "PPp"),
    text: req.body.message
  });
  res.redirect('/');
});

module.exports = router;