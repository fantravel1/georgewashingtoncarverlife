/**
 * Service Worker for George Washington Carver Life
 * Provides offline support, caching, and performance optimization
 * Version 2.0.0
 */

const CACHE_VERSION = 'gwc-v2.0.0';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

// Resources to cache immediately on install
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/PeanutPage.html',
    '/SweetPotatoPage.html',
    '/TuskegeePage.html',
    '/CarverImpactMap.html',
    '/styles.css',
    '/CarverLife.js',
    '/PeanutProducts.js',
    '/SweetPotatoProducts.js',
    '/manifest.json'
];

// Maximum cache sizes
const MAX_DYNAMIC_CACHE_SIZE = 50;
const MAX_IMAGE_CACHE_SIZE = 30;

/**
 * Utility: Limit cache size
 */
async function limitCacheSize(cacheName, maxItems) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
        // Delete oldest items
        await cache.delete(keys[0]);
        await limitCacheSize(cacheName, maxItems);
    }
}

/**
 * Install Event - Cache static assets
 */
self.addEventListener('install', event => {
    console.log('[Service Worker] Installing...', CACHE_VERSION);

    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('[Service Worker] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch(error => {
                console.error('[Service Worker] Installation failed:', error);
            })
    );
});

/**
 * Activate Event - Clean up old caches
 */
self.addEventListener('activate', event => {
    console.log('[Service Worker] Activating...', CACHE_VERSION);

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name.startsWith('gwc-') && name !== STATIC_CACHE && name !== DYNAMIC_CACHE && name !== IMAGE_CACHE)
                        .map(name => {
                            console.log('[Service Worker] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => self.clients.claim())
    );
});

/**
 * Fetch Event - Serve from cache, fallback to network
 */
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip cross-origin requests
    if (url.origin !== location.origin) {
        return;
    }

    // Handle different types of requests
    if (request.destination === 'image') {
        event.respondWith(handleImageRequest(request));
    } else if (request.destination === 'document' || request.url.endsWith('.html')) {
        event.respondWith(handleDocumentRequest(request));
    } else {
        event.respondWith(handleStaticRequest(request));
    }
});

/**
 * Handle image requests with dedicated cache
 */
async function handleImageRequest(request) {
    try {
        // Try cache first
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        // Fetch from network
        const networkResponse = await fetch(request);

        // Cache successful responses
        if (networkResponse && networkResponse.status === 200) {
            const cache = await caches.open(IMAGE_CACHE);
            cache.put(request, networkResponse.clone());
            limitCacheSize(IMAGE_CACHE, MAX_IMAGE_CACHE_SIZE);
        }

        return networkResponse;
    } catch (error) {
        console.error('[Service Worker] Image fetch failed:', error);
        // Return a fallback image or placeholder
        return new Response('', { status: 404, statusText: 'Image not found' });
    }
}

/**
 * Handle HTML document requests - Network first, fallback to cache
 */
async function handleDocumentRequest(request) {
    try {
        // Try network first for documents (always get latest)
        const networkResponse = await fetch(request);

        // Cache successful responses
        if (networkResponse && networkResponse.status === 200) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        // Fallback to cache if offline
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        // Return offline page
        return caches.match('/index.html');
    }
}

/**
 * Handle static assets - Cache first, fallback to network
 */
async function handleStaticRequest(request) {
    try {
        // Try cache first
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        // Fetch from network
        const networkResponse = await fetch(request);

        // Cache successful responses
        if (networkResponse && networkResponse.status === 200) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            limitCacheSize(DYNAMIC_CACHE, MAX_DYNAMIC_CACHE_SIZE);
        }

        return networkResponse;
    } catch (error) {
        console.error('[Service Worker] Static fetch failed:', error);
        return new Response('Network error', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}

/**
 * Background Sync - For future implementation
 */
self.addEventListener('sync', event => {
    console.log('[Service Worker] Background sync:', event.tag);

    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    // Placeholder for future sync functionality
    console.log('[Service Worker] Syncing data...');
}

/**
 * Push Notification - For future implementation
 */
self.addEventListener('push', event => {
    console.log('[Service Worker] Push received:', event);

    const options = {
        body: event.data ? event.data.text() : 'New content available!',
        icon: '/icon-192x192.png',
        badge: '/icon-96x96.png',
        vibrate: [200, 100, 200],
        tag: 'gwc-notification',
        requireInteraction: false
    };

    event.waitUntil(
        self.registration.showNotification('George Washington Carver Life', options)
    );
});

/**
 * Notification Click Handler
 */
self.addEventListener('notificationclick', event => {
    event.notification.close();

    event.waitUntil(
        clients.openWindow('/')
    );
});

/**
 * Message Handler - For communication with main thread
 */
self.addEventListener('message', event => {
    console.log('[Service Worker] Message received:', event.data);

    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(name => caches.delete(name))
                );
            })
        );
    }
});

console.log('[Service Worker] Loaded successfully', CACHE_VERSION);
