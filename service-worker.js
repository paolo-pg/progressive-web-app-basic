importScripts('sw-toolbox-master/sw-toolbox.js'); // Update path to match your own setup

console.log('Hallo from service worker');

toolbox.options.debug = true;
// serviceworker log extra's in console, niet perse nodig

toolbox.precache([
    '/progressive-web-app-basic', 
    '/progressive-web-app-basic/service-worker.js', 
    '/progressive-web-app-basic/index.html', 
    '/progressive-web-app-basic/styles/style.css', 
    '/progressive-web-app-basic/styles/lemonade.min.css', 
    '/progressive-web-app-basic/scripts/script.js', 
    '/progressive-web-app-basic/scripts/jquery-3.2.1.min.js']);

toolbox.router.get('/progressive-web-app-basic', toolbox.fastest);
// checkt of cache of netwerk sneller is. Meestal cache, zodra netwerk sneller is wordt cache geupdated


