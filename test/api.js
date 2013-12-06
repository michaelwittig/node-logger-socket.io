var wrapper = require("../index"),
	logger = require("cinovo-logger");

describe("API", function() {
	"use strict";
	describe("(logger)", function() {
		it("should work if all params are set", function(){
			wrapper(logger);
		});
	});
});
