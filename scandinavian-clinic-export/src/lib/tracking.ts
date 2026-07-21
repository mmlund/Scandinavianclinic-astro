// DigitalTrackingSite - First-Party Cookie Tracking

const TRACKING_CONFIG = {
  apiUrl: "https://digitaltrackingsite.onrender.com/track",
  siteId: "scandinavian",
};

const COOKIE_NAME = "_dts_id";
const COOKIE_EXPIRY_DAYS = 730; // 2 years

function generateUUID(): string {
  return crypto.randomUUID?.() ?? 
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

function getRootDomain(): string {
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) return hostname;
  const parts = hostname.split('.');
  return parts.length >= 2 ? '.' + parts.slice(-2).join('.') : hostname;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 86400000);
  const domain = getRootDomain();
  const domainPart = domain.startsWith('.') ? `; domain=${domain}` : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/${domainPart}; SameSite=Lax`;
}

function getDeviceId(): string {
  let id = getCookie(COOKIE_NAME);
  if (!id) {
    id = generateUUID();
    setCookie(COOKIE_NAME, id, COOKIE_EXPIRY_DAYS);
  }
  return id;
}

function getUtmParams(): Record<string, string> {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      params[key] = value;
    }
  });
  return params;
}

export function sendTrackingData(eventData: Record<string, unknown>): void {
  const payload = {
    event_type: eventData.event_type,
    device_id: getDeviceId(),
    site_id: TRACKING_CONFIG.siteId,
    url: window.location.href,
    referrer: document.referrer || '',
    user_agent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    ...getUtmParams(),
    ...eventData,
  };

  const json = JSON.stringify(payload);
  const blob = new Blob([json], { type: 'application/json' });

  if (navigator.sendBeacon?.(TRACKING_CONFIG.apiUrl, blob)) return;

  fetch(TRACKING_CONFIG.apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json,
    keepalive: true,
  }).catch(() => {});
}

// Scroll depth tracking
function initScrollTracking(): void {
  const thresholds = [25, 50, 75, 100];
  const fired = new Set<number>();

  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const pct = Math.round((window.scrollY / scrollHeight) * 100);

    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        sendTrackingData({ event_type: 'scroll', scroll_depth: t });
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

export function initTracking(): void {
  // Ensure device ID cookie exists
  getDeviceId();
  // Page view
  sendTrackingData({ event_type: 'page_view' });
  // Scroll depth
  initScrollTracking();
}
