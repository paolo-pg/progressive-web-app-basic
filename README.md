# progressive-web-app-basic
A basic PWA verified by Lighthouse, currently PWA score of 91.

## demo
URL to [demo](http://i334115.iris.fhict.nl/progressive-web-app-basic) (coming soon).

## installation
There are two options to install the basic web app. 

### GitHub clone

```
 $ git clone https://github.com/paolo-pg/progressive-web-app-basic
 ```

 possibility two is downloading and unpacking the zip file.

 Important: change the file locations to your own.
 For example in service-worker.js:

```html
 toolbox.precache([
    '/your-location', 
    '/your-location/index.html',  
``` 

## references & usefull links
This PWA has been made using the following frameworks or libraries:
[SW-toolbox](https://github.com/GoogleChromeLabs/sw-toolbox)
