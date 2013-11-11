function logfn(level, logger) {
	switch(level) {
		case 0:
			return logger.error;
		case 1:
			return logger.info;
		case 2:
			return logger.debug;
		default:
			return logger.debug;
	}
}

function argumentsToMetadata(args) {
	var metadata = Array.prototype.slice.call(args).splice(2, 0);
	if (metadata.length === 0) {
		return undefined;
	}
	return metadata;
}

module.exports = function(logger) {
	return {
		level: 3,
		enabled: true,
		log: function(logger, level, message, metadata) {
			if (level <= this.level && this.enabled) {
				logfn(level, logger)("socket.io", message, metadata);
			}
		},
		error: function(message) {
			this.log(logger, 0, message, argumentsToMetadata(arguments));
		},
		warn: function(message) {
			this.log(logger, 1, message, argumentsToMetadata(arguments));
		},
		info: function(message) {
			this.log(logger, 2, message, argumentsToMetadata(arguments));
		},
		debug: function(message) {
			this.log(logger, 3, message, argumentsToMetadata(arguments));
		}
	}
};
