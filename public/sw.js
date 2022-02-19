if (!self.define) {
	let e,
		s = {};
	const n = (n, o) => (
		(n = new URL(n + '.js', o).href),
		s[n] ||
			new Promise((s) => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = n), (e.onload = s), document.head.appendChild(e);
				} else (e = n), importScripts(n), s();
			}).then(() => {
				let e = s[n];
				if (!e) throw new Error(`Module ${n} didn’t register its module`);
				return e;
			})
	);
	self.define = (o, t) => {
		const i =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href;
		if (s[i]) return;
		let a = {};
		const c = (e) => n(e, i),
			r = { module: { uri: i }, exports: a, require: c };
		s[i] = Promise.all(o.map((e) => r[e] || c(e))).then((e) => (t(...e), a));
	};
}
define(['./workbox-1846d813'], function (e) {
	'use strict';
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/static/LCol1pApGNoAJ_ILFoo2D/_buildManifest.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/LCol1pApGNoAJ_ILFoo2D/_middlewareManifest.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/LCol1pApGNoAJ_ILFoo2D/_ssgManifest.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/framework-6e4ba497ae0c8a3f.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/main-227e205eee84911a.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/pages/%5BmeetupId%5D-06e17a21e29c6f96.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/pages/_app-f95a2b6404f5876e.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/pages/index-a9970352eb9d95bb.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/pages/new-meetup-8a46587c52637449.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/chunks/webpack-69bfa6990bb9e155.js',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/css/194fa00227995b6a.css',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/css/26c1aa1b7d7c4fc8.css',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/css/3917ef2fb774e161.css',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{
					url: '/_next/static/css/f6f28cd199a02f17.css',
					revision: 'LCol1pApGNoAJ_ILFoo2D',
				},
				{ url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
				{
					url: '/icon-192x192.png',
					revision: '803eee19401703519369d2f5e6c8ff7a',
				},
				{
					url: '/icon-256x256.png',
					revision: '06d86d8f9097c4cddb90bbf31e287a75',
				},
				{
					url: '/icon-384x384.png',
					revision: '6901a97797b50eba67274e22015773f1',
				},
				{
					url: '/icon-512x512.png',
					revision: '8b541121641f4ddd89b015d10bfa2601',
				},
				{ url: '/manifest.json', revision: '0651aae5e6ed56d440956ecab9b44e50' },
				{ url: '/robots.txt', revision: 'f10cf8013407c9ec1fdefdff756dbe53' },
				{ url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: n,
							state: o,
						}) =>
							s && 'opaqueredirect' === s.type
								? new Response(s.body, {
										status: 200,
										statusText: 'OK',
										headers: s.headers,
								  })
								: s,
					},
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const s = e.pathname;
				return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
				],
			}),
			'GET'
		);
});
