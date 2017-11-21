importScripts('sw-toolbox-master/sw-toolbox.js'); // Update path to match your own setup

console.log('Hallo from service worker');

toolbox.options.debug = true;
// serviceworker log extra's in console, niet perse nodig

toolbox.precache([
    '/', 
    '/service-worker.js', 
    '/index.html', 
    '/styles/style.css', 
    '/styles/lemonade.min.css', 
    '/scripts/script.js', 
    '/scripts/jquery-3.2.1.min.js']);

toolbox.router.get('/', toolbox.fastest);
// checkt of cache of netwerk sneller is. Meestal cache, zodra netwerk sneller is wordt cache geupdated


