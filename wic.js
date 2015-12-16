var system = require('system');
var args = system.args;

if(args.length <= 1) {
  console.log("Website Image Capture - A PhantomJS tool\n");
  console.log("USAGE:\nphantomjs wic.js www.emberjs.com");
  console.log("\tThis will use the current directory and create an capture.png if successful.\n");
  console.log("OPTIONS:\n");
  console.log("[Choosing Image Name]");
  console.log("  phantomjs wic.js www.emberjs.com name:image-one\n");
  console.log("[Choosing Render Format] [gif, png, jpeg, pdf]");
  console.log("  phantomjs wic.js www.emberjs.com format:gif\n");
  console.log("[Choosing Webpage Size] [width, height]");
  console.log("  phantomjs wic.js www.emberjs.com image-one.gif width:1920 height:1080\n");
  console.log("[Choosing Image Quality] [Scale 1-100]");
  console.log("  phantomjs wic.js www.emberjs.com image-one.gif quality:55\n");
  console.log("[Capture Page with Delay] [milliseconds]");
  console.log("  phantomjs wic.js www.emberjs.com image-one.gif delay:5000\n");
  console.log("[Zoom Factor] [0.0 to 5.0]");
  console.log("  phantomjs wic.js www.emberjs.com image-one.gif zoom:0.25");
  console.log('    This property specifies the scaling factor for the render');
  console.log('    The default is 1, i.e. 100% zoom.\n');
  console.log("WARNING: You MUST specify if using HTTPS, default is HTTP.");
  console.log("  phantomjs wic.js https://www.emberjs.com");
  phantom.exit();
} else {

  var options = { 
    name: "capture",
    format: "png",
    quality: 100, 
    width: 1920,
    height: 1080,
    delay: 200,
    zoom: 1
  };

  var updateOptions = function() {
    var getOptions = args.filter(function(option) {
      if(option.indexOf(':') > 0) {
        var splitOptions = option.split(":");
        options[splitOptions[0]] = splitOptions[1];
      }
    });
  }();

  page = require('webpage').create();


  if(args[1].toLowerCase().indexOf('http') !== -1) {
  } else {
    args[1] = 'http://' + args[1];
  }

  var webpage = args[1];

  // Callbacks
  page.onLoadStarted = function() {
    console.log('Page Loading ("' + webpage + '")');
  };
  page.onLoadFinished = function() {
    console.log('Finished Loading...\nCapturing Page!');
  }
  page.onResourceError = function(error) {
    if(error.errorCode !== 6){
      console.log('Unable to access website.  Please verify URL.');
      phantom.exit(1);
    }
  }

  page.viewportSize = { width: parseInt(options['width']), height: parseInt(options['height']) };
  page.zoomFactor = options['zoom'];
  page.open(webpage, function(status) {
    window.setTimeout(function () {
      page.render( options['name'] + '.' + options['format'], { format: options['format'], quality: parseInt(options['quality']) } );
      phantom.exit();
    }, parseInt(options['delay']));
  });
}
