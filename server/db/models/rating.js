const Sequelize = require('sequelize');
const db = require('../db');

const Rating = db.define('rating', {
  transparency: Sequelize.INTEGER,
  publicEngagement: Sequelize.INTEGER,
  alignWithValues: Sequelize.INTEGER,
  description: Sequelize.TEXT,
});

module.exports = Rating;
