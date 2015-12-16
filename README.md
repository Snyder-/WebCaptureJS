# Web Capture

## For Use With [PhantomJS](http://phantomjs.org/)
PhantomJS script for web capture.  Command line tool with rails like argument hash.

###USAGE:
`phantomjs wic.js www.emberjs.com`

This will use the current directory and create an capture.png if successful.

###OPTIONS:

####[Choosing Image Name]
  `phantomjs wic.js www.emberjs.com name:image-one`

####[Choosing Render Format] [gif, png, jpeg, pdf]
  `phantomjs wic.js www.emberjs.com format:gif`

####[Choosing Webpage Size] [width, height]
  `phantomjs wic.js www.emberjs.com image-one.gif width:1920 height:1080`

####[Choosing Image Quality] [Scale 1-100]
  `phantomjs wic.js www.emberjs.com image-one.gif quality:55`

####[Capture Page with Delay] [milliseconds]
  `phantomjs wic.js www.emberjs.com image-one.gif delay:5000`

####[Zoom Factor] [0.0 to 5.0]
  `phantomjs wic.js www.emberjs.com image-one.gif zoom:0.25`
  
This property specifies the scaling factor for the render

The default is 1, i.e. 100% zoom.

###WARNING: You MUST specify if using HTTPS, default is HTTP.
  `phantomjs wic.js https://www.emberjs.com`


