var express = require('express');

module.exports = {

	get: function (req, res) {

		res.send ("AUTH says - This is a GET resource");
	},

	post: function (req, res) {

		res.send ("AUTH says - This is a POST resource");
	},
};