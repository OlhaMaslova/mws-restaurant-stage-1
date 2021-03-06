// Refference: https://github.com/maevanapcontact/

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurant-review-001').then(function(cache) {
			console.log('SW is caching');
			return cache.addAll([
				'/',
				'index.html',
				'restaurant.html',
				'js/main.js',
				'js/restaurant_info.js',
				'js/dbhelper.js',
				'css/styles.css',
				'css/responsive.css',
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				'img/9.jpg',
				'img/10.jpg',
				'img/na.jpg'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) return response;
			return fetch(event.request)
		})
	);
});

