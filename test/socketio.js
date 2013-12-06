var wrapper = require("../index"),
	logger = require("cinovo-logger");

logger.append(require("cinovo-logger-console")(true, true, true, true));

describe("socket.io wrapper", function() {
	"use strict";
	it("should work if all params are set", function(done) {
		logger.once("level_debug", function() {
			done();
		});
		require("socket.io").listen(8080, {
			"logger": wrapper(logger)
		});
	});
});
