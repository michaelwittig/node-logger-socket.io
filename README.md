`````
                                                   ___
       __                                         /\_ \
  ___ /\_\    ___     ___   __  __    ___         \//\ \     ___      __      __      __   _ __
 /'___\/\ \ /' _ `\  / __`\/\ \/\ \  / __`\  _______\ \ \   / __`\  /'_ `\  /'_ `\  /'__`\/\`'__\
/\ \__/\ \ \/\ \/\ \/\ \L\ \ \ \_/ |/\ \L\ \/\______\\_\ \_/\ \L\ \/\ \L\ \/\ \L\ \/\  __/\ \ \/
\ \____\\ \_\ \_\ \_\ \____/\ \___/ \ \____/\/______//\____\ \____/\ \____ \ \____ \ \____\\ \_\
 \/____/ \/_/\/_/\/_/\/___/  \/__/   \/___/          \/____/\/___/  \/___L\ \/___L\ \/____/ \/_/
                                                                      /\____/ /\____/
                                                                      \_/__/  \_/__/
`````

[![Build Status](https://secure.travis-ci.org/cinovo/node-logger-socket.io.png)](http://travis-ci.org/cinovo/node-logger-socket.io)
[![NPM version](https://badge.fury.io/js/cinovo-logger-socket.io.png)](http://badge.fury.io/js/cinovo-logger-socket.io)

# cinovo-logger-socket.io

[Socket.IO](http://socket.io/) wrapper for [cinovo-logger](https://github.com/cinovo/node-logger).

## Getting started

### At first you must install and require the logger.

    npm install cinovo-logger

### Next you must require the module

`````javascript
var logger = require("cinovo-logger");
`````

### Use cinovo-logger with socket.io

	npm install cinovo-logger-socket.io

In your JavaScript code append the syslog endpoint.

`````javascript
var io = require("socket.io").listen(8080, {
	"logger": require("cinovo-logger-socket.io")(logger)
});
`````

### Done

Now you can use [Socket.IO](http://socket.io/) with [cinovo-logger](https://github.com/cinovo/node-logger).

## API

### (logger)

Sync creates a wrapper.

* `logger`: Logger - Instance of cinovo-logger

`return`: Wrapper - Wrapped cinovo-logger
