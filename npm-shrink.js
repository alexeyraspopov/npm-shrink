var ls = require('npm-remote-ls').ls;
var npa = require('npm-package-arg');
var semver = require('semver');

module.exports = function shrink(target, cb) {
	var pack = npa(target);

	ls(pack.name, pack.spec, false, function(obj) {
		cb(traverse(obj, [], []));
	});
};

function traverse(root, path, result) {
	Object.keys(root).forEach(function(pack) {
		var p = npa(pack);

		if (semver.satisfies(p.spec, '0.0.x')) {
			result.push({ target: p.raw, branch: path });
		}

		traverse(root[pack], path.concat(p.raw), result);
	});

	return result;
}
