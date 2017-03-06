/*
 * @Author: kongyingying
 * @Date:   2016-11-21 14:07:24
 * @Last Modified by:   kyy
 * @Last Modified time: 2016-12-05 17:40:59
 */

'use strict';

var path = require("path");
var webpack = require("webpack");
var fs = require("fs");
var MemoryFs = require("memory-fs");
var packageData = require("../package.json");

var webpackConfig = require("../webpack.config.js");


const OUTPUT_PATH = path.normalize(__dirname + "/../dist");


function main() {
	let memFs = new MemoryFs();

	var complier = webpack(webpackConfig); // 返回编辑对象
	complier.outputFileSystem = memFs; // 编译到内容存中
	complierWatch(complier, memFs);
}

// watch
function complierWatch(complier, memFs) {
	complier.watch({
		aggregateTimeout: 300
	}, function(err, stats) {
		if (err) {
			console.error(err + '\n');
		} else {
			var data = stats.toJson();
			//console.log(data);
			if (data.errors.length > 0) {
				console.error(data.errors, data.errors.length.toString() + '\n');
			} else if (data.warnings.length > 0) {
				console.warn(data.warnings.toString() + '\n');
			} else { // 编译成功
				(function exe(dir, done) {
					var results = [];
					memFs.readdir(dir, function(err, list) {
						if (err) return done(err)
						var pending = list.length;
						if (!list.length) done(null, results);

						(list || []).forEach(function(file) {
							file = path.resolve(dir, file);
							memFs.stat(file, function(err, stat) {
								if (stat && stat.isDirectory()) {
									exe(file, function(err, res) {
										results = results.concat(res);
										if (!--pending) done(null, results);
									});
								} else {
									results.push(file);
									if (!--pending) done(null, results);
								}
							});
						})
					})
				})(OUTPUT_PATH, function(err, result) {
					(result || []).forEach(function(filePath) {
						let fileContent = memFs.readFileSync(filePath);
						fileContent = fileContent.toString('utf8');

						fs.writeFileSync(filePath, fileContent, {
							"encoding": "utf8",
							"mode": 0o777
						});
						console.info("Info: " + filePath + " build success!\n");
					})
				}); // 立即执行函数
			}
		}
	})
}

// run
function complierBuild(complier) {
	complier.run(function(err, stats) {
		// 同watch方式
	})

}

main();
module.exports = main;
//exports.main = main;