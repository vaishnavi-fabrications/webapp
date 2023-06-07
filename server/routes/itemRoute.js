const express = require('express');
const { AddITem, getSingleCategory, DeleteItem } = require('../controllers/itemController');
const Router = express.Router();

Router.post('/',AddITem);
Router.get('/:category',getSingleCategory);
Router.delete('/:id',DeleteItem);

module.exports = Router;