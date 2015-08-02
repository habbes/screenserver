var spawn = require('child_process').spawn;


function takeScreenshot()
{
	var screenshot;
	//this process takes a screenshot, writes to stdout and terminates
	var shottask = spawn('ScreenShotTest.exe');
	shottask.stdout.on('data', function(data){
		screenshot = data;
	});
	
	shottask.on('exit', function(){
		process.send(screenshot);
		takeScreenshot();
	});
}

takeScreenshot();
