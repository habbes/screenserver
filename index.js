var fork = require('child_process').fork;
var spawn = require('child_process').spawn;
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var DEFAULT_PORT = 3000;

var server = http.createServer(function(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		res.writeHead(200);
		res.end(data);
	});
});

var io = socketio.listen(server);

io.on('connection', function(socket){
	console.log('client connected: ');
});

server.listen(DEFAULT_PORT);

//fork another process for handling screenshots

function launchScreenshotTask()
{
	var screenshot = fork('screenshot.js');

	screenshot.on('message', function(shot){
		var data = new Buffer(shot.data);
		io.emit('screen', data.toString("base64"));			
	});
	
	screenshot.on("exit", function(){
		launchScreenshotTask();
	});
}

launchScreenshotTask();