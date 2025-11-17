/**
 * Analytics Integration for George Washington Carver Life
 * Supports Google Analytics 4 (GA4) and privacy-focused tracking
 * Version 1.0.0
 */

// Configuration
const ANALYTICS_CONFIG = {
    // Replace with your actual GA4 Measurement ID
    ga4MeasurementId: 'G-XXXXXXXXXX',

    // Privacy settings
    respectDoNotTrack: true,
    anonymizeIP: true,

    // Cookie consent
    requireCookieConsent: false, // Set to true if you need GDPR compliance

    // Debug mode
    debug: false
};

/**
 * Initialize Analytics
 */
function initAnalytics() {
    // Check Do Not Track
    if (ANALYTICS_CONFIG.respectDoNotTrack && navigator.doNotTrack === '1') {
        console.log('[Analytics] Do Not Track enabled - Analytics disabled');
        return;
    }

    // Check cookie consent if required
    if (ANALYTICS_CONFIG.requireCookieConsent && !hasAnalyticsConsent()) {
        console.log('[Analytics] Cookie consent required - Analytics disabled');
        return;
    }

    // Load Google Analytics 4
    if (ANALYTICS_CONFIG.ga4MeasurementId && ANALYTICS_CONFIG.ga4MeasurementId !== 'G-XXXXXXXXXX') {
        loadGA4();
    }

    // Track page view
    trackPageView();

    // Set up event listeners
    setupEventTracking();
}

/**
 * Load Google Analytics 4
 */
function loadGA4() {
    // Create script tag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4MeasurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.ga4MeasurementId, {
        anonymize_ip: ANALYTICS_CONFIG.anonymizeIP,
        debug_mode: ANALYTICS_CONFIG.debug
    });

    console.log('[Analytics] GA4 initialized');
}

/**
 * Track page view
 */
function trackPageView() {
    const pageData = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
    };

    if (window.gtag) {
        gtag('event', 'page_view', pageData);
    }

    logEvent('Page View', pageData);
}

/**
 * Track custom event
 */
function trackEvent(eventName, eventParams = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventParams);
    }

    logEvent(eventName, eventParams);
}

/**
 * Set up automatic event tracking
 */
function setupEventTracking() {
    // Track timeline event clicks
    document.addEventListener('click', (e) => {
        const timelineCard = e.target.closest('.timeline-card');
        if (timelineCard) {
            const eventTitle = timelineCard.querySelector('.event-title')?.textContent;
            trackEvent('timeline_event_view', {
                event_title: eventTitle,
                event_category: 'engagement'
            });
        }

        // Track product card clicks
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productName = productCard.querySelector('.product-name')?.textContent;
            trackEvent('product_view', {
                product_name: productName,
                event_category: 'engagement'
            });
        }

        // Track navigation clicks
        const navLink = e.target.closest('a[href]');
        if (navLink && !navLink.classList.contains('tracked')) {
            const href = navLink.getAttribute('href');
            const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);

            if (isExternal) {
                trackEvent('outbound_link', {
                    link_url: href,
                    link_text: navLink.textContent,
                    event_category: 'engagement'
                });
            }
        }

        // Track filter usage
        const filterBtn = e.target.closest('.filter-btn');
        if (filterBtn) {
            const filter = filterBtn.dataset.filter;
            trackEvent('filter_used', {
                filter_type: filter,
                event_category: 'engagement'
            });
        }
    });

    // Track search usage
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (e.target.value.length >= 3) {
                    trackEvent('search', {
                        search_term: e.target.value,
                        event_category: 'engagement'
                    });
                }
            }, 1000);
        });
    }

    // Track dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            trackEvent('dark_mode_toggle', {
                theme: newTheme,
                event_category: 'settings'
            });
        });
    }

    // Track scroll depth
    let scrollDepth = 0;
    const scrollMilestones = [25, 50, 75, 100];
    let trackedMilestones = new Set();

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const percentScrolled = Math.round((scrolled / scrollHeight) * 100);

        scrollMilestones.forEach(milestone => {
            if (percentScrolled >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                trackEvent('scroll_depth', {
                    depth_percent: milestone,
                    event_category: 'engagement'
                });
            }
        });
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', {
            seconds: timeSpent,
            page: window.location.pathname,
            event_category: 'engagement'
        });
    });

    // Track PWA install
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
        trackEvent('pwa_install_prompt_shown', {
            event_category: 'pwa'
        });
    });

    window.addEventListener('appinstalled', () => {
        trackEvent('pwa_installed', {
            event_category: 'pwa'
        });
    });

    // Track Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(() => {
            trackEvent('service_worker_ready', {
                event_category: 'pwa'
            });
        });
    }
}

/**
 * Check if user has given analytics consent
 */
function hasAnalyticsConsent() {
    return localStorage.getItem('analytics_consent') === 'true';
}

/**
 * Set analytics consent
 */
function setAnalyticsConsent(granted) {
    localStorage.setItem('analytics_consent', granted ? 'true' : 'false');

    if (granted) {
        initAnalytics();
    }
}

/**
 * Log events to console in debug mode
 */
function logEvent(eventName, eventParams) {
    if (ANALYTICS_CONFIG.debug) {
        console.log(`[Analytics] ${eventName}`, eventParams);
    }
}

/**
 * Track performance metrics
 */
function trackPerformanceMetrics() {
    if ('performance' in window && 'getEntriesByType' in performance) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];

                if (perfData) {
                    trackEvent('performance_metrics', {
                        load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
                        dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
                        first_byte: Math.round(perfData.responseStart - perfData.requestStart),
                        event_category: 'performance'
                    });
                }

                // Core Web Vitals
                if ('PerformanceObserver' in window) {
                    // Largest Contentful Paint (LCP)
                    new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        const lastEntry = entries[entries.length - 1];
                        trackEvent('web_vitals_lcp', {
                            value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
                            event_category: 'performance'
                        });
                    }).observe({ entryTypes: ['largest-contentful-paint'] });

                    // First Input Delay (FID)
                    new PerformanceObserver((list) => {
                        const entries = list.getEntries();
                        entries.forEach(entry => {
                            trackEvent('web_vitals_fid', {
                                value: Math.round(entry.processingStart - entry.startTime),
                                event_category: 'performance'
                            });
                        });
                    }).observe({ entryTypes: ['first-input'] });

                    // Cumulative Layout Shift (CLS)
                    let clsValue = 0;
                    new PerformanceObserver((list) => {
                        for (const entry of list.getEntries()) {
                            if (!entry.hadRecentInput) {
                                clsValue += entry.value;
                            }
                        }
                    }).observe({ entryTypes: ['layout-shift'] });

                    window.addEventListener('beforeunload', () => {
                        if (clsValue > 0) {
                            trackEvent('web_vitals_cls', {
                                value: Math.round(clsValue * 1000) / 1000,
                                event_category: 'performance'
                            });
                        }
                    });
                }
            }, 0);
        });
    }
}

// Initialize analytics when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAnalytics();
        trackPerformanceMetrics();
    });
} else {
    initAnalytics();
    trackPerformanceMetrics();
}

// Export for manual usage
window.trackEvent = trackEvent;
window.setAnalyticsConsent = setAnalyticsConsent;

console.log('[Analytics] Module loaded');
