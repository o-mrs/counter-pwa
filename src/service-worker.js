self.addEventListener('install', e => {
    e.waitUntil(
      // after the service worker is installed,
      // open a new cache
      caches.open('my-pwa-cache').then(cache => {
        console.log('Adding files to cache');
        // add all URLs of resources we want to cache
        return cache.addAll([
          '/',
          '/index.html',
          '/*.html',
          '/*.gif',
        //   '/styles/main.min.css',
          '/static/js/bundle.js',
        ]);
      })
    );
   });