#!/usr/bin/env node
var shrink = require('./npm-shrink');
var inspect = require('util').inspect;

var target = process.argv[2];

shrink(target, function(list) {
	list.forEach(function(pack) {
		console.log('Package:', inspect(pack.target, {colors: true}));
		console.log('Branch:\n', inspect(pack.branch, {colors: true}), '\n');
	});
});
