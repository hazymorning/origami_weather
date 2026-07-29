import { CLOUD_SPRITE, MOON_SURFACE } from './image-assets.js';
console.info(
    "%c ◪ Origami Weather ",
    "color: #fff; border-radius: 6px; background: linear-gradient(135deg, #888 0%, #000 100%); font-family: 'Helvetica Neue', Helvetica, sans-serif; font-weight: bold; padding: 4px 8px;"
);
const FALLBACK_WEATHER = Object.freeze({
    state: 'cloudy',
    attributes: { temperature: '--', temperature_unit: '', wind_speed: 0, wind_speed_unit: '', friendly_name: 'Weather Unavailable' }
});
const _SKY_FILTERS = Object.freeze({
    'sunny':           { light: 'brightness(1.08) saturate(1.12) contrast(1.02)', dark: 'brightness(1.04) saturate(1.10)' },
    'clear-night':     { light: 'brightness(1.04) saturate(1.08)', dark: 'brightness(1.02) saturate(1.12)' },
    'partlycloudy':    { light: 'brightness(1.00) saturate(0.95) contrast(0.98)', dark: 'brightness(0.96) saturate(0.90)' },
    'cloudy':          { light: 'brightness(0.92) saturate(0.72) contrast(0.96)', dark: 'brightness(0.88) saturate(0.65) contrast(0.95)' },
    'windy':           { light: 'brightness(1.02) saturate(1.05) hue-rotate(-3deg)', dark: 'brightness(0.98) saturate(1.00)' },
    'windy-variant':   { light: 'brightness(1.00) saturate(1.02) hue-rotate(-3deg)', dark: 'brightness(0.96) saturate(0.95)' },
    'fog':             { light: 'brightness(1.04) saturate(0.40) contrast(0.85) sepia(0.06)', dark: 'brightness(1.12) saturate(0.30) contrast(0.80) hue-rotate(-6deg)' },
    'rainy':           { light: 'brightness(0.95) saturate(0.80) contrast(0.96) hue-rotate(4deg)', dark: 'brightness(0.85) saturate(0.70) contrast(0.94) hue-rotate(3deg)' },
    'pouring':         { light: 'brightness(0.88) saturate(0.68) contrast(0.93) hue-rotate(5deg)', dark: 'brightness(0.78) saturate(0.55) contrast(0.90) hue-rotate(4deg)' },
    'lightning':       { light: 'brightness(0.89) saturate(0.62) contrast(1.10) hue-rotate(7deg)', dark: 'brightness(0.76) saturate(0.55) contrast(1.15) hue-rotate(6deg)' },
    'lightning-rainy': { light: 'brightness(0.86) saturate(0.58) contrast(1.09) hue-rotate(8deg)', dark: 'brightness(0.72) saturate(0.50) contrast(1.12) hue-rotate(7deg)' },
    'snowy':           { light: 'brightness(1.06) saturate(0.55) contrast(0.90) hue-rotate(-4deg) sepia(0.04)', dark: 'brightness(0.92) saturate(0.48) contrast(0.92) hue-rotate(-3deg)' },
    'snowy-rainy':     { light: 'brightness(0.95) saturate(0.58) contrast(0.92) hue-rotate(-2deg)', dark: 'brightness(0.86) saturate(0.50) contrast(0.92) hue-rotate(-2deg)' },
    'hail':            { light: 'brightness(0.86) saturate(0.55) contrast(1.04) hue-rotate(3deg)', dark: 'brightness(0.80) saturate(0.48) contrast(1.02) hue-rotate(3deg)' },
    'exceptional':     { light: 'brightness(1.08) saturate(1.12) contrast(1.02)', dark: 'brightness(1.02) saturate(1.12)' },
    'default':         { light: 'brightness(1.00) saturate(1.00)', dark: 'brightness(0.95) saturate(0.90)' },
});
const _HAZE_PALETTE = Object.freeze({
    light: [{ c: [88, 176, 220, 0.62] }, { core: [255, 255, 250, 0.98], c: [214, 234, 250, 0.80] }, { c: [96, 140, 214, 0.60] }],
    dark:  [{ c: [58, 150, 190, 0.70] }, { core: [224, 236, 255, 0.60], c: [130, 168, 224, 0.50] }, { c: [46, 82, 168, 0.72] }],
});
const _HAZE_TUNING = Object.freeze({
    'sunny':           { light: { tone: [255, 236, 198], mix: 0.30, alpha: 0.72, core: 1.00, scale: 1.00 }, dark: { tone: [90, 116, 176],  mix: 0.22, alpha: 0.80, core: 0.85, scale: 1.00 } },
    'clear-night':     { light: { tone: [120, 150, 200], mix: 0.28, alpha: 0.64, core: 0.70, scale: 1.00 }, dark: { tone: [40, 66, 128],   mix: 0.30, alpha: 0.78, core: 0.55, scale: 1.00 } },
    'partlycloudy':    { light: { tone: [244, 240, 232], mix: 0.22, alpha: 0.72, core: 0.95, scale: 1.05 }, dark: { tone: [70, 96, 148],   mix: 0.28, alpha: 0.80, core: 0.70, scale: 1.05 } },
    'cloudy':          { light: { tone: [222, 224, 230], mix: 0.34, alpha: 0.66, core: 0.82, scale: 1.10 }, dark: { tone: [66, 80, 108],   mix: 0.38, alpha: 0.76, core: 0.55, scale: 1.10 } },
    'windy':           { light: { tone: [232, 240, 240], mix: 0.18, alpha: 0.70, core: 1.00, scale: 1.05 }, dark: { tone: [58, 90, 138],   mix: 0.24, alpha: 0.80, core: 0.75, scale: 1.05 } },
    'windy-variant':   { light: { tone: [232, 240, 240], mix: 0.18, alpha: 0.70, core: 1.00, scale: 1.05 }, dark: { tone: [58, 90, 138],   mix: 0.24, alpha: 0.80, core: 0.75, scale: 1.05 } },
    'fog':             { light: { tone: [236, 236, 234], mix: 0.52, alpha: 0.60, core: 0.88, scale: 1.35 }, dark: { tone: [150, 162, 180], mix: 0.68, alpha: 0.78, core: 0.60, scale: 1.35 } },
    'rainy':           { light: { tone: [138, 158, 190], mix: 0.36, alpha: 0.68, core: 0.66, scale: 1.08 }, dark: { tone: [40, 58, 92],    mix: 0.42, alpha: 0.78, core: 0.45, scale: 1.08 } },
    'pouring':         { light: { tone: [108, 128, 166], mix: 0.44, alpha: 0.70, core: 0.58, scale: 1.10 }, dark: { tone: [30, 44, 74],    mix: 0.50, alpha: 0.80, core: 0.40, scale: 1.10 } },
    'lightning':       { light: { tone: [120, 128, 168], mix: 0.44, alpha: 0.68, core: 0.62, scale: 1.10 }, dark: { tone: [40, 46, 80],    mix: 0.46, alpha: 0.76, core: 0.45, scale: 1.10 } },
    'lightning-rainy': { light: { tone: [104, 116, 158], mix: 0.48, alpha: 0.70, core: 0.56, scale: 1.10 }, dark: { tone: [32, 40, 72],    mix: 0.50, alpha: 0.78, core: 0.40, scale: 1.10 } },
    'snowy':           { light: { tone: [244, 248, 255], mix: 0.40, alpha: 0.72, core: 0.98, scale: 1.18 }, dark: { tone: [118, 134, 166], mix: 0.42, alpha: 0.80, core: 0.65, scale: 1.18 } },
    'snowy-rainy':     { light: { tone: [206, 220, 236], mix: 0.40, alpha: 0.68, core: 0.80, scale: 1.12 }, dark: { tone: [76, 92, 122],   mix: 0.44, alpha: 0.78, core: 0.55, scale: 1.12 } },
    'hail':            { light: { tone: [176, 190, 214], mix: 0.40, alpha: 0.68, core: 0.66, scale: 1.10 }, dark: { tone: [58, 74, 106],   mix: 0.44, alpha: 0.78, core: 0.50, scale: 1.10 } },
    'exceptional':     { light: { tone: [255, 236, 198], mix: 0.30, alpha: 0.72, core: 1.00, scale: 1.00 }, dark: { tone: [90, 116, 176],  mix: 0.22, alpha: 0.80, core: 0.85, scale: 1.00 } },
    'default':         { light: { tone: [232, 236, 242], mix: 0.16, alpha: 0.70, core: 1.00, scale: 1.00 }, dark: { tone: [56, 78, 120],   mix: 0.22, alpha: 0.80, core: 0.75, scale: 1.00 } },
});
const WEATHER_TUNING = Object.freeze({
    'sunny':           { icon: 'mdi:weather-sunny',            precipitation: null,    lightning: false, sunVisibility: 1.00, sunSaturation: 1.00, cloudDensity: 0.22, cloudDarkness: 0.00, cloudSpeed: 1.0, starCount: 800, starOpacity: 1.00 },
    'clear-night':     { icon: 'mdi:weather-night',            precipitation: null,    lightning: false, sunVisibility: 1.00, sunSaturation: 1.00, cloudDensity: 0.00, cloudDarkness: 0.00, cloudSpeed: 0.0, starCount: 800, starOpacity: 1.00 },
    'partlycloudy':    { icon: 'mdi:weather-partly-cloudy',    precipitation: null,    lightning: false, sunVisibility: 0.78, sunSaturation: 0.85, cloudDensity: 0.55, cloudDarkness: 0.20, cloudSpeed: 1.0, starCount: 450, starOpacity: 0.70 },
    'cloudy':          { icon: 'mdi:weather-cloudy',           precipitation: null,    lightning: false, sunVisibility: 0.42, sunSaturation: 0.50, cloudDensity: 1.00, cloudDarkness: 0.55, cloudSpeed: 1.0, starCount: 300, starOpacity: 0.50 },
    'windy':           { icon: 'mdi:weather-windy',            precipitation: null,    lightning: false, sunVisibility: 0.60, sunSaturation: 0.68, cloudDensity: 0.50, cloudDarkness: 0.12, cloudSpeed: 3.2, starCount: 500, starOpacity: 0.80 },
    'windy-variant':   { icon: 'mdi:weather-windy-variant',    precipitation: null,    lightning: false, sunVisibility: 0.85, sunSaturation: 0.90, cloudDensity: 0.55, cloudDarkness: 0.18, cloudSpeed: 3.2, starCount: 600, starOpacity: 0.80 },
    'fog':             { icon: 'mdi:weather-fog',              precipitation: null,    lightning: false, sunVisibility: 0.26, sunSaturation: 0.12, cloudDensity: 1.25, cloudDarkness: 0.42, cloudSpeed: 0.5, starCount: 250, starOpacity: 0.35 },
    'rainy':           { icon: 'mdi:weather-rainy',            precipitation: 'rain',  lightning: false, sunVisibility: 0.34, sunSaturation: 0.45, cloudDensity: 0.95, cloudDarkness: 0.60, cloudSpeed: 1.35, starCount:   0, starOpacity: 0.00 },
    'pouring':         { icon: 'mdi:weather-pouring',          precipitation: 'pour',  lightning: false, sunVisibility: 0.20, sunSaturation: 0.30, cloudDensity: 1.00, cloudDarkness: 0.82, cloudSpeed: 1.6, starCount:   0, starOpacity: 0.00 },
    'lightning':       { icon: 'mdi:weather-lightning',        precipitation: 'storm', lightning: true,  sunVisibility: 0.30, sunSaturation: 0.40, cloudDensity: 0.80, cloudDarkness: 0.72, cloudSpeed: 1.8, starCount:   0, starOpacity: 0.00 },
    'lightning-rainy': { icon: 'mdi:weather-lightning-rainy',  precipitation: 'storm', lightning: true,  sunVisibility: 0.24, sunSaturation: 0.35, cloudDensity: 0.95, cloudDarkness: 0.78, cloudSpeed: 1.8, starCount:   0, starOpacity: 0.00 },
    'snowy':           { icon: 'mdi:weather-snowy',            precipitation: 'snow',  lightning: false, sunVisibility: 0.38, sunSaturation: 0.30, cloudDensity: 0.75, cloudDarkness: 0.35, cloudSpeed: 0.8, starCount: 600, starOpacity: 0.40 },
    'snowy-rainy':     { icon: 'mdi:weather-snowy-rainy',      precipitation: 'sleet', lightning: false, sunVisibility: 0.30, sunSaturation: 0.35, cloudDensity: 0.85, cloudDarkness: 0.60, cloudSpeed: 1.3, starCount: 450, starOpacity: 0.30 },
    'hail':            { icon: 'mdi:weather-hail',             precipitation: 'hail',  lightning: false, sunVisibility: 0.30, sunSaturation: 0.40, cloudDensity: 0.85, cloudDarkness: 0.70, cloudSpeed: 1.5, starCount: 350, starOpacity: 0.45 },
    'exceptional':     { icon: 'mdi:weather-sunny',            precipitation: null,    lightning: false, sunVisibility: 1.00, sunSaturation: 1.00, cloudDensity: 0.00, cloudDarkness: 0.00, cloudSpeed: 0.0, starCount: 800, starOpacity: 1.00 },
    'default':         { icon: 'mdi:weather-cloudy',           precipitation: null,    lightning: false, sunVisibility: 0.85, sunSaturation: 0.90, cloudDensity: 0.30, cloudDarkness: 0.30, cloudSpeed: 1.0, starCount: 800, starOpacity: 0.80 },
});
const _weatherTuning = (state) => WEATHER_TUNING[state] || WEATHER_TUNING.default;
const SUN_PALETTE = Object.freeze({
    noon:    { core: [255, 255, 255], inner: [255, 250, 240], mid: [255, 237, 200], edge: [255, 219, 158], glowInner: [255, 200, 124], glowOuter: [255, 238, 210] },
    horizon: { core: [255, 246, 222], inner: [255, 214, 148], mid: [255, 171, 92],  edge: [245, 137, 60],  glowInner: [240, 120, 55],  glowOuter: [252, 176, 110] }
});
const MOON_DISC_PATH = 'M 50 2 A 48 48 0 1 1 50 98 A 48 48 0 1 1 50 2 Z';
const MOON_PHASES = Object.freeze({
    new_moon: 0, waxing_crescent: 0.125, first_quarter: 0.25, waxing_gibbous: 0.375,
    full_moon: 0.5, waning_gibbous: 0.625, last_quarter: 0.75, waning_crescent: 0.875
});
const WEATHER_ATTR_ICONS = Object.freeze({
    temperature:    'mdi:thermometer',
    apparent_temperature: 'mdi:thermometer-lines',
    humidity:       'mdi:water-percent',
    pressure:       'mdi:gauge',
    wind_speed:     'mdi:weather-windy',
    wind_bearing:   'mdi:compass-outline',
    wind_gust_speed:'mdi:weather-windy-variant',
    visibility:     'mdi:eye-outline',
    dew_point:      'mdi:thermometer-low',
    uv_index:       'mdi:weather-sunny-alert',
    cloud_coverage: 'mdi:cloud-outline',
    ozone:          'mdi:weather-hazy'
});
const FORECAST_ATTR_ICONS = Object.freeze({
    ...WEATHER_ATTR_ICONS,
    condition: 'mdi:weather-partly-cloudy', templow: 'mdi:thermometer-low',
    precipitation: 'mdi:weather-rainy', precipitation_probability: 'mdi:weather-rainy',
});
/*
 * CREDITS — DO NOT DELETE THIS COMMENT:
 * The BUILTIN_ICONS below are a slight remix of the Lucide icon set
 * (https://lucide.dev), used under the ISC License.
 * Portions of Lucide are Copyright (c) 2013-2022 Cole Bemis (Feather, MIT);
 * all other Lucide copyright (c) 2022 Lucide Contributors.
 * This attribution must remain with the icon data and must never be removed.
 */
const BUILTIN_ICONS = Object.freeze({
    'clear-night':     '<g><animateTransform attributeName="transform" type="translate" values="0,0; -0.7,0.7; 0,0" dur="3.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="rotate" values="-4 12 12; 4 12 12; -4 12 12" dur="4s" repeatCount="indefinite" additive="sum"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="currentColor" fill-opacity="0.12"><animate attributeName="fill-opacity" values="0.06;0.22;0.06" dur="4s" repeatCount="indefinite"/></path></g>',
    'cloudy':          '<g><animateTransform attributeName="transform" type="translate" values="0,0;0.6,0;0,0;-0.6,0;0,0" dur="6s" repeatCount="indefinite"/><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" fill-opacity="0.08"/></g>',
    'fog':             '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="M16 17H7" stroke-dasharray="2 2.5"><animate attributeName="stroke-dashoffset" values="0;9" dur="3s" repeatCount="indefinite"/></path><path d="M17 21H9" stroke-dasharray="2 2.5"><animate attributeName="stroke-dashoffset" values="0;-9" dur="4s" repeatCount="indefinite"/></path>',
    'hail':            '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="M16 14v2" stroke-opacity="0.8"><animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="0.8s" repeatCount="indefinite"/></path><path d="M8 14v2" stroke-opacity="0.8"><animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="0.8s" begin="0.3s" repeatCount="indefinite"/></path><circle cx="16" cy="20" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="18;20;19.2;20" dur="1s" repeatCount="indefinite"/></circle><circle cx="8" cy="20" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="18;20;19.2;20" dur="1s" begin="0.35s" repeatCount="indefinite"/></circle><path d="M12 16v2" stroke-opacity="0.8"><animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="0.8s" begin="0.15s" repeatCount="indefinite"/></path><circle cx="12" cy="22" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="20;22;21.2;22" dur="1s" begin="0.2s" repeatCount="indefinite"/></circle>',
    'lightning':       '<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" fill="currentColor" fill-opacity="0.08"/><path d="m13 12-3 5h4l-3 5" stroke-width="1.75"><animate attributeName="stroke-opacity" values="1;1;0.15;1;1;1;0.1;0.8;1;1;1;1;0.12;1" dur="4s" repeatCount="indefinite"/></path>',
    'lightning-rainy': '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="currentColor" fill-opacity="0.06"><animate attributeName="fill-opacity" values="0.06;0.06;0.2;0.06;0.06;0.06;0.15;0.06" dur="3.5s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values="1;1;0.2;1;1;1;0.15;1" dur="3.5s" repeatCount="indefinite"/></path>',
    'partlycloudy':    '<g stroke-opacity="0.5"><animate attributeName="stroke-opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/></g><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><g><animateTransform attributeName="transform" type="translate" values="0,0;0.5,0;0,0;-0.5,0;0,0" dur="7s" repeatCount="indefinite"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" fill="currentColor" fill-opacity="0.08"/></g>',
    'partlycloudy-night': '<path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" fill="currentColor" fill-opacity="0.12"><animate attributeName="fill-opacity" values="0.06;0.22;0.06" dur="4s" repeatCount="indefinite"/></path><g><animateTransform attributeName="transform" type="translate" values="0,0;0.5,0;0,0;-0.5,0;0,0" dur="7s" repeatCount="indefinite"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" fill="currentColor" fill-opacity="0.08"/></g>',
    'pouring':         '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="m9.2 22 3-7" stroke-opacity="0.7"><animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="0.7s" repeatCount="indefinite"/></path><path d="m9 13-3 7" stroke-opacity="0.7"><animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="0.7s" begin="0.25s" repeatCount="indefinite"/></path><path d="m17 13-3 7" stroke-opacity="0.7"><animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="0.7s" begin="0.5s" repeatCount="indefinite"/></path>',
    'rainy':           '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="M16 14v6" stroke-dasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" repeatCount="indefinite"/></path><path d="M8 14v6" stroke-dasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" begin="0.35s" repeatCount="indefinite"/></path><path d="M12 16v6" stroke-dasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" begin="0.7s" repeatCount="indefinite"/></path>',
    'snowy':           '<g><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="12s" repeatCount="indefinite"/><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/></g>',
    'snowy-rainy':     '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><circle cx="8" cy="15.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="15;16.5;15" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle><circle cx="8" cy="19.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="19;20.5;19" dur="2.2s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.2s" begin="0.6s" repeatCount="indefinite"/></circle><circle cx="12" cy="17.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="17;18.5;17" dur="1.8s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="1.8s" begin="0.3s" repeatCount="indefinite"/></circle><circle cx="12" cy="21.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="21;22.5;21" dur="2.4s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.4s" begin="0.9s" repeatCount="indefinite"/></circle><circle cx="16" cy="15.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="15;16.5;15" dur="2.1s" begin="0.45s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.1s" begin="0.45s" repeatCount="indefinite"/></circle><circle cx="16" cy="19.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="19;20.5;19" dur="1.9s" begin="0.75s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="1.9s" begin="0.75s" repeatCount="indefinite"/></circle>',
    'sunny':           '<g><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="30s" repeatCount="indefinite"/><circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity="0.1"><animate attributeName="fill-opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite"/><animate attributeName="r" values="4;4.25;4" dur="3s" repeatCount="indefinite"/></circle><g stroke-opacity="1"><animate attributeName="stroke-opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></g></g>',
    'windy':           '<path d="M12.8 19.6A2 2 0 1 0 14 16H2" stroke-dasharray="22" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-3;0" dur="2.5s" repeatCount="indefinite"/></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" stroke-dasharray="26" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-4;0" dur="3s" begin="0.3s" repeatCount="indefinite"/></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2" stroke-dasharray="18" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-3;0" dur="2s" begin="0.6s" repeatCount="indefinite"/></path>',
    'windy-variant':   '<path d="M10 2v8" stroke-opacity="0.5"/><path d="M12.8 21.6A2 2 0 1 0 14 18H2" stroke-dasharray="22" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-3;0" dur="2.5s" repeatCount="indefinite"/></path><path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" stroke-dasharray="26" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-4;0" dur="3s" begin="0.3s" repeatCount="indefinite"/></path><g stroke-opacity="0.5"><animate attributeName="stroke-opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/><path d="m6 6 4 4 4-4"/></g>',
    'exceptional':     '<g><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="30s" repeatCount="indefinite"/><circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity="0.1"><animate attributeName="fill-opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite"/><animate attributeName="r" values="4;4.25;4" dur="3s" repeatCount="indefinite"/></circle><g stroke-opacity="1"><animate attributeName="stroke-opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></g></g>',
    'default':         '<g><animateTransform attributeName="transform" type="translate" values="0,0;0.6,0;0,0;-0.6,0;0,0" dur="6s" repeatCount="indefinite"/><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" fill-opacity="0.08"/></g>'
});
const WeatherEffects = (() => {
    const RAIN = Object.freeze({
        drizzle: { perContainer: 3.4,  min: 10, max: 42,  vy: [220, 400], width: [0.55, 1.05], lean: 0.10, alpha: [0.25, 0.55], lenBase: [5, 12] },
        rain:    { perContainer: 10.5, min: 26, max: 118, vy: [380, 700], width: [0.60, 1.50], lean: 0.17, alpha: [0.45, 0.75], lenBase: [7, 18] },
        pour:    { perContainer: 14.0, min: 34, max: 150, vy: [440, 800], width: [0.65, 1.65], lean: 0.20, alpha: [0.50, 0.82], lenBase: [8, 20] },
        storm:   { perContainer: 12.0, min: 30, max: 135, vy: [420, 760], width: [0.62, 1.55], lean: 0.22, alpha: [0.48, 0.78], lenBase: [8, 19] }
    });
    const SNOW = Object.freeze({ perContainer: 15.0, min: 40, max: 150, vy: [12, 55], dia: [1.2, 22.0], alpha: [0.25, 0.75] });
    const HAIL = Object.freeze({ perContainer: 4.5, min: 12, max: 45, vy: [450, 1050], dia: [1.5, 14.0], alpha: [0.45, 0.90] });
    const COLORS = Object.freeze({
        rain: { light: { core: [48, 66, 98], head: [92, 116, 156] }, dark: { core: [150, 178, 224], head: [240, 246, 255] } },
        flake: { light: { core: [255, 255, 255], edge: [230, 240, 255] }, dark: { core: [255, 255, 255], edge: [208, 224, 250] } },
        hail: { light: { hi: [255, 255, 255], body: [230, 240, 255] }, dark: { hi: [244, 248, 255], body: [198, 214, 242] } }
    });
    const _sprites = new Map();
    const _rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
    const _mix = (a, b, t) => [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)];
    function _sprite(kind, schemeDark) {
        const key = `${kind}|${schemeDark ? 'dark' : 'light'}`;
        let c = _sprites.get(key);
        if (c) return c;
        c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        if (kind === 'streak') {
            const W = 16, H = 128;
            c.width = W; c.height = H;
            const col = schemeDark ? COLORS.rain.dark : COLORS.rain.light;
            const mid = _mix(col.core, col.head, 0.55);
            const g = ctx.createLinearGradient(0, 0, 0, H);
            if (schemeDark) {
                g.addColorStop(0, _rgba(col.core, 0));
                g.addColorStop(0.30, _rgba(col.core, 0.16));
                g.addColorStop(0.62, _rgba(col.core, 0.42));
                g.addColorStop(0.86, _rgba(mid, 0.70));
                g.addColorStop(0.965, _rgba(col.head, 1.0));
                g.addColorStop(1, _rgba(col.head, 0));
            } else {
                g.addColorStop(0, _rgba(col.core, 0));
                g.addColorStop(0.42, _rgba(col.core, 0.14));
                g.addColorStop(0.70, _rgba(col.core, 0.40));
                g.addColorStop(0.88, _rgba(mid, 0.72));
                g.addColorStop(0.965, _rgba(col.head, 0.98));
                g.addColorStop(1, _rgba(col.head, 0));
            }
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
            const hx = ctx.createLinearGradient(0, 0, W, 0);
            hx.addColorStop(0.00, 'rgba(0,0,0,0)');
            hx.addColorStop(0.42, 'rgba(0,0,0,0.55)');
            hx.addColorStop(0.50, 'rgba(0,0,0,1)');
            hx.addColorStop(0.58, 'rgba(0,0,0,0.55)');
            hx.addColorStop(1.00, 'rgba(0,0,0,0)');
            ctx.globalCompositeOperation = 'destination-in';
            ctx.fillStyle = hx;
            ctx.fillRect(0, 0, W, H);
            ctx.globalCompositeOperation = 'lighter';
            const spec = ctx.createRadialGradient(W / 2, H * 0.95, 0, W / 2, H * 0.95, W * 0.5);
            spec.addColorStop(0, _rgba(col.head, 0.9));
            spec.addColorStop(0.6, _rgba(col.head, 0.28));
            spec.addColorStop(1, _rgba(col.head, 0));
            ctx.fillStyle = spec;
            ctx.fillRect(0, H * 0.86, W, H * 0.14);
        } else if (kind === 'flake') {
            const S = 32;
            c.width = S; c.height = S;
            const col = schemeDark ? COLORS.flake.dark : COLORS.flake.light;
            const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
            g.addColorStop(0, _rgba(col.core, 0.95));
            g.addColorStop(0.34, _rgba(col.core, 0.88));
            g.addColorStop(0.72, _rgba(col.edge, 0.26));
            g.addColorStop(1, _rgba(col.edge, 0));
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, S, S);
        } else {
            const W = 28, H = 34;
            c.width = W; c.height = H;
            const col = schemeDark ? COLORS.hail.dark : COLORS.hail.light;
            const g = ctx.createRadialGradient(W * 0.40, H * 0.34, 0, W * 0.5, H * 0.5, H * 0.55);
            g.addColorStop(0, _rgba(col.hi, 0.95));
            g.addColorStop(0.45, _rgba(col.body, 0.85));
            g.addColorStop(0.85, _rgba(col.body, 0.30));
            g.addColorStop(1, _rgba(col.body, 0));
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.ellipse(W / 2, H / 2, W * 0.42, H * 0.46, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        _sprites.set(key, c);
        return c;
    }
    let _cloudImg = null;
    let _cloudLoadStarted = false;
    function _getCloudImg() {
        if (!_cloudLoadStarted) {
            _cloudLoadStarted = true;
            const img = new Image();
            img.onload = () => { _cloudImg = img; };
            img.src = CLOUD_SPRITE;
        }
        return _cloudImg;
    }
    function _cloudSprite(src, top, bot, res) {
        const iw = src.naturalWidth || src.width;
        const ih = src.naturalHeight || src.height;
        if (!iw) return null;
        const cw = Math.round(iw * (res || 1)), ch = Math.round(ih * (res || 1));
        const c = document.createElement('canvas');
        c.width = cw; c.height = ch;
        const cx = c.getContext('2d');
        cx.imageSmoothingEnabled = true;
        cx.imageSmoothingQuality = 'high';
        cx.drawImage(src, 0, 0, cw, ch);
        const g = cx.createLinearGradient(0, ch * 0.12, 0, ch * 0.88);
        g.addColorStop(0, `rgb(${top[0]},${top[1]},${top[2]})`);
        g.addColorStop(1, `rgb(${bot[0]},${bot[1]},${bot[2]})`);
        cx.globalCompositeOperation = 'multiply';
        cx.fillStyle = g;
        cx.fillRect(0, 0, cw, ch);
        cx.globalCompositeOperation = 'destination-in';
        cx.drawImage(src, 0, 0, cw, ch);
        cx.globalCompositeOperation = 'source-over';
        return c;
    }
    function _mulberry32(seed) {
        let a = (seed * 1e9) >>> 0 || 0x9e3779b9;
        return function () {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    const CLOUD_VARIANTS = 6;
    function _cloudVariantSources(img) {
        const iw = img.naturalWidth || img.width;
        const ih = img.naturalHeight || img.height;
        const rnd = _mulberry32(0.1337);
        const out = [img];
        for (let v = 1; v < CLOUD_VARIANTS; v++) {
            const c = document.createElement('canvas');
            c.width = iw; c.height = ih;
            const cx = c.getContext('2d');
            cx.imageSmoothingEnabled = true;
            cx.imageSmoothingQuality = 'high';
            const lobes = 2 + (v % 2);
            for (let i = 0; i < lobes; i++) {
                const sc = i === 0 ? 0.72 + rnd() * 0.26 : 0.36 + rnd() * 0.36;
                const lw = iw * sc;
                const lh = ih * sc * (0.78 + rnd() * 0.44);
                const dx = i === 0
                    ? (iw - lw) / 2 + (rnd() - 0.5) * iw * 0.12
                    : rnd() * (iw - lw);
                const dy = (ih - lh) / 2 + (rnd() - 0.5) * ih * 0.34;
                cx.save();
                cx.globalAlpha = i === 0 ? 1 : 0.78;
                if (rnd() < 0.5) {
                    cx.translate(dx + lw, dy);
                    cx.scale(-1, 1);
                    cx.drawImage(img, 0, 0, lw, lh);
                } else {
                    cx.drawImage(img, dx, dy, lw, lh);
                }
                cx.restore();
            }
            out.push(c);
        }
        return out;
    }
    const CLOUD_BANDS = Object.freeze([
        { size: 90,  bright: 0.88, alpha: 0.62, speed: 0.002, count: 6, stretch: 0.20, res: 1 },
        { size: 150, bright: 0.96, alpha: 0.78, speed: 0.006, count: 4, stretch: 0.14, res: 1 },
        { size: 250, bright: 1.00, alpha: 0.92, speed: 0.015, count: 2, stretch: 0.10, res: 1.5 },
    ]);
    const _cloudAtlas = { img: null, key: null, srcs: null, bands: null };
    function _cloudBandSprites(img, state, schemeDark, backgroundRGB) {
        if (!(img.naturalWidth || img.width)) return null;
        const a = _cloudAtlas;
        const key = `${state}|${schemeDark}|${backgroundRGB}`;
        if (a.img !== img) { a.img = img; a.srcs = _cloudVariantSources(img); a.key = null; }
        if (a.key === key) return a.bands;
        const pal = _cloudPalette(state, schemeDark, backgroundRGB);
        const cl = v => Math.max(0, Math.min(255, Math.round(v)));
        a.bands = CLOUD_BANDS.map(d => {
            const top = pal.top.map(v => cl(v * d.bright));
            const bot = pal.bot.map(v => cl(v * d.bright));
            return a.srcs.map(s => _cloudSprite(s, top, bot, d.res));
        });
        a.key = key;
        return a.bands;
    }
    const _cloudDensityOf = (state) => state ? _weatherTuning(state).cloudDensity : 0;
    const _briOf = (filter) => { const m = /brightness\(([\d.]+)\)/.exec(filter || ''); return m ? parseFloat(m[1]) : 1; };
    const _lumOf = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    function _cloudPalette(state, schemeDark, backgroundRGB) {
        const tuning = _weatherTuning(state);
        const sf = _SKY_FILTERS[state] || _SKY_FILTERS.default;
        const bri = _briOf(schemeDark ? sf.dark : sf.light);
        const darkness = tuning.cloudDarkness;
        const bg = backgroundRGB.map(v => Math.max(0, Math.min(255, Math.round(v * bri))));
        const bgL = _lumOf(bg);
        const tint = (L, r, g, b) => { const t = Math.max(0, Math.min(255, L)); return [Math.round(Math.min(255, t * r)), Math.round(Math.min(255, t * g)), Math.round(Math.min(255, t * b))]; };
        const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
        if (schemeDark) {
            const nightBase = Math.max(0.34, Math.min(1, (bgL + 96) / 255)) * (1 - 0.22 * darkness);
            const baseL = 255 * nightBase;
            const silver = tint(baseL * 0.92, 0.86, 0.94, 1.14);
            const steel = tint(baseL * 0.74, 0.68, 0.80, 1.24);
            const blueShadow = mix(steel, [22, 40, 78], 0.34 + 0.30 * darkness).map(Math.round);
            return { top: silver.map(Math.round), bot: blueShadow };
        }
        const white = [255, 255, 255];
        const skyGrey = [Math.round((bg[0] + 250) / 2 * 0.97), Math.round((bg[1] + 250) / 2 * 0.98), Math.round((bg[2] + 252) / 2)];
        const slate = [92, 106, 132];
        const shadowTarget = mix(skyGrey, slate, 0.55 * darkness);
        const dark1 = (0.10 + 0.32 * darkness) * 0.55;
        const dark2 = (0.30 + 0.62 * darkness) * 0.55;
        const top = mix(white, skyGrey, dark1).map(Math.round);
        const bot = mix(white, shadowTarget, dark2).map(Math.round);
        return { top, bot };
    }
    function _buildCloudField(density, seed) {
        if (!density || density <= 0) return null;
        const rnd = _mulberry32(seed || 1);
        const cover = Math.min(1, density);
        const holes = [
            { x: 0.28 + rnd() * 0.18, y: 0.2 + rnd() * 0.6 },
            { x: 0.72 - rnd() * 0.18, y: 0.2 + rnd() * 0.6 },
        ];
        const inHole = (x, y) => holes.some(hl => (x - hl.x) ** 2 + (y - hl.y) ** 2 < 0.09);
        const puffs = [];
        for (let band = 0; band < CLOUD_BANDS.length; band++) {
            const d = CLOUD_BANDS[band];
            const n = Math.round(d.count * (0.55 + 0.45 * cover));
            let placed = 0, tries = 0;
            while (placed < n && tries < n * 5) {
                tries++;
                const x = rnd(), y = 0.12 + rnd() * 0.76;
                if (inHole(x, y) && rnd() < 0.95) continue;
                placed++;
                puffs.push({
                    band,
                    x,
                    y,
                    size: d.size * (0.82 + rnd() * 0.36),
                    variant: (rnd() * CLOUD_VARIANTS) | 0,
                    flip: rnd() < 0.5,
                    rot: (rnd() - 0.5) * 0.1,
                    stretch: 1 + (rnd() - 0.5) * 2 * d.stretch,
                    alpha: d.alpha * (0.9 + rnd() * 0.2),
                    speed: d.speed * (0.85 + rnd() * 0.3),
                    bobPh: rnd() * Math.PI * 2,
                    bobAmp: 0.004 + rnd() * 0.006,
                    bobF: 0.05 + band * 0.03,
                });
            }
        }
        return { puffs, density };
    }
    const _lerp = (a, b, t) => a + (b - a) * t;
    const _count = (t, area) => Math.max(t.min, Math.min(t.max, Math.round(area / 10000 * t.perContainer)));
    function _buildRain(t, area, scale) {
        const n = Math.max(4, Math.round(_count(t, area) * scale));
        const arr = new Array(n);
        for (let i = 0; i < n; i++) {
            const z = Math.pow(Math.random(), 1.35);
            arr[i] = { z, x: Math.random(), y: Math.random(), vy: _lerp(t.vy[0], t.vy[1], z * z) * (0.92 + Math.random() * 0.16), sd: Math.random() };
        }
        arr.sort((a, b) => a.z - b.z);
        return arr;
    }
    function _buildSnow(area, scale) {
        const n = Math.max(4, Math.round(_count(SNOW, area) * scale)); const arr = new Array(n); let hC = 0; const mH = 4;
        for (let i = 0; i < n; i++) {
            let z; if (hC < mH && Math.random() > 0.95) { z = 0.85 + Math.random() * 0.15; hC++; } else { z = Math.pow(Math.random(), 4.0) * 0.45; }
            arr[i] = { z, x: Math.random(), y: Math.random(), vy: _lerp(SNOW.vy[0], SNOW.vy[1], z) * (0.8 + Math.random() * 0.4), swa: 4.0 + z * 35.0 + Math.random() * 10, swf: 0.5 + Math.random() * 1.5, ph: Math.random() * Math.PI * 2, tw: 0.5 + Math.random() * 1.5 };
        }
        arr.sort((a, b) => a.z - b.z); return arr;
    }
    function _buildHail(area) {
        const n = _count(HAIL, area); const arr = new Array(n); let hC = 0; const mH = 3;
        for (let i = 0; i < n; i++) {
            let z; if (hC < mH && Math.random() > 0.90) { z = 0.8 + Math.random() * 0.2; hC++; } else { z = Math.pow(Math.random(), 3.0) * 0.5; }
            arr[i] = { z, x: Math.random(), y: Math.random(), vy: _lerp(HAIL.vy[0], HAIL.vy[1], z) * (0.85 + Math.random() * 0.3), sd: Math.random() };
        }
        arr.sort((a, b) => a.z - b.z); return arr;
    }
    const STARS = Object.freeze({
        maxRadius: 2.5,
        heroCount: 8,
        heroMaxSize: 1.8,
        heroDprCap: 1.4,
        palette: Object.freeze([[190, 210, 255], [210, 225, 255], [255, 250, 245], [255, 235, 200]])
    });
    const _starColor = (v) => v < 0.15 ? STARS.palette[0] : v < 0.60 ? STARS.palette[1] : v < 0.85 ? STARS.palette[2] : STARS.palette[3];
    function _offscreen(w, h) {
        if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        return c;
    }
    function _buildStarField(count, W, H, seed) {
        const c = _offscreen(W, H);
        const ctx = c.getContext('2d', { alpha: true });
        if (!ctx) return c;
        const rnd = _mulberry32(seed);
        const batches = new Map();
        const put = (rgb, alpha, x, y, r) => {
            const qA = ((alpha * 15 + 0.5) | 0) / 15;
            const key = `${rgb[0]},${rgb[1]},${rgb[2]}|${qA}`;
            let b = batches.get(key);
            if (!b) { b = { rgb, alpha: qA, pts: [] }; batches.set(key, b); }
            b.pts.push(x, y, r);
        };
        const tinyCount = Math.floor(count * 1.1);
        const smallCount = Math.floor(count * 0.35);
        const clusterCount = Math.floor(count * 0.045);
        const mwActive = count > 750;
        let mwCosA, mwSinA, mwPerpX, mwPerpY, mwCx, mwCy, mwBandW;
        if (mwActive) {
            const angle = -0.35 + (rnd() - 0.5) * 0.45;
            mwCosA = Math.cos(angle); mwSinA = Math.sin(angle); mwPerpX = -mwSinA; mwPerpY = mwCosA;
            mwBandW = H * 0.18;
            mwCx = W * 0.5 + (rnd() - 0.5) * W * 0.15;
            mwCy = H * 0.42 + (rnd() - 0.5) * H * 0.12;
        }
        const mwWarp = (x, y, band) => {
            const bx = mwCx + mwCosA * ((x / W - 0.5) * W * 1.2) + mwPerpX * ((y / H - 0.5) * band);
            const by = mwCy + mwSinA * ((x / W - 0.5) * W * 1.2) + mwPerpY * ((y / H - 0.5) * band);
            return bx >= 0 && bx <= W && by >= 0 && by <= H ? [bx, by] : null;
        };
        for (let i = 0; i < tinyCount; i++) {
            let x = rnd() * W, y = rnd() * H;
            if (mwActive && i % 3 === 0) { const p = mwWarp(x, y, mwBandW); if (p) { x = p[0]; y = p[1]; } }
            let r = 0.6 + rnd() * 0.6;
            if (i % 8 === 0) r *= 1.8;
            put(_starColor(rnd()), 0.35 + rnd() * 0.35, x, y, Math.min(r, STARS.maxRadius));
        }
        for (let i = 0; i < smallCount; i++) {
            let x = rnd() * W, y = rnd() * H;
            if (mwActive && i % 3 === 0) { const p = mwWarp(x, y, mwBandW * 0.8); if (p) { x = p[0]; y = p[1]; } }
            let r = 0.8 + rnd() * 0.8;
            if (i % 8 === 0) r *= 1.8;
            r = Math.min(r, STARS.maxRadius);
            const alpha = 0.55 + rnd() * 0.35;
            const rgb = _starColor(rnd());
            put(rgb, alpha, x, y, r);
            if (i % 8 === 0) {
                const glowR = r * 3.0;
                ctx.globalAlpha = alpha * 0.12;
                const g = ctx.createRadialGradient(x, y, r * 0.5, x, y, glowR);
                g.addColorStop(0, _rgba(rgb, 1));
                g.addColorStop(0.4, _rgba(rgb, 0.2));
                g.addColorStop(1, _rgba(rgb, 0));
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(x, y, glowR, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        for (let cl = 0; cl < clusterCount; cl++) {
            const cx = 0.15 * W + rnd() * 0.7 * W;
            const cy = rnd() * H;
            const n = 5 + Math.floor(rnd() * 6);
            for (let j = 0; j < n; j++) {
                let r = 0.5 + rnd() * 0.5;
                if (j % 8 === 0) r *= 1.8;
                put(STARS.palette[1], 0.30 + rnd() * 0.20, cx + (rnd() - 0.5) * 25, cy + (rnd() - 0.5) * 18, Math.min(r, STARS.maxRadius));
            }
        }
        for (const b of batches.values()) {
            ctx.globalAlpha = b.alpha;
            ctx.fillStyle = `rgb(${b.rgb[0]},${b.rgb[1]},${b.rgb[2]})`;
            ctx.beginPath();
            const pts = b.pts;
            for (let j = 0; j < pts.length; j += 3) {
                ctx.moveTo(pts[j] + pts[j + 2], pts[j + 1]);
                ctx.arc(pts[j], pts[j + 1], pts[j + 2], 0, Math.PI * 2);
            }
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        return c;
    }
    function _buildStarHeroes(seed, dpr) {
        const rnd = _mulberry32(seed + 7);
        const heroes = [];
        for (let i = 0; i < STARS.heroCount; i++) {
            const feature = i < 2;
            const size = Math.min(feature ? 1.8 + rnd() * 0.4 : 1.3 + rnd() * 0.4, STARS.heroMaxSize);
            const haloR = feature ? 3.8 : 2.8;
            const rgb = _starColor(rnd());
            const texPx = Math.ceil((size * haloR * 2 + 4) * dpr);
            const tex = _offscreen(texPx, texPx);
            const tc = tex.getContext('2d', { alpha: true });
            const mid = texPx / 2;
            const refSize = size * dpr;
            const haloA = feature ? 0.60 : 0.35;
            const hg = tc.createRadialGradient(mid, mid, refSize * 0.5, mid, mid, refSize * haloR);
            hg.addColorStop(0, `rgba(255,255,255,${haloA})`);
            hg.addColorStop(0.15, _rgba(rgb, haloA * 0.8));
            hg.addColorStop(0.4, _rgba(rgb, haloA * 0.25));
            hg.addColorStop(1, _rgba(rgb, 0));
            tc.fillStyle = hg;
            tc.beginPath();
            tc.arc(mid, mid, refSize * haloR, 0, Math.PI * 2);
            tc.fill();
            if (feature) {
                const rayLen = refSize * 3.5, rayW = refSize * 0.4;
                tc.translate(mid, mid);
                for (let r = 0; r < 8; r++) {
                    tc.rotate(Math.PI / 4);
                    const rg = tc.createLinearGradient(0, 0, rayLen, 0);
                    rg.addColorStop(0, `rgba(255,255,255,${haloA * 0.9})`);
                    rg.addColorStop(0.15, _rgba(rgb, haloA * 0.7));
                    rg.addColorStop(0.5, _rgba(rgb, haloA * 0.2));
                    rg.addColorStop(1, _rgba(rgb, 0));
                    tc.fillStyle = rg;
                    tc.fillRect(0, -rayW / 2, rayLen, rayW);
                }
                tc.setTransform(1, 0, 0, 1, 0, 0);
            }
            heroes.push({
                x: 0.06 + rnd() * 0.88,
                y: 0.06 + rnd() * 0.82,
                size,
                brightness: 0.85 + rnd() * 0.15,
                tex, texPx, refSize, feature,
                ph: rnd() * Math.PI * 2,
                sp: 0.25 + rnd() * 0.55
            });
        }
        return heroes;
    }
    function _drawStars(inst, ctx, w, h, s, t) {
        const st = inst.stars;
        const W = Math.max(1, Math.round(w * s)), H = Math.max(1, Math.round(h * s));
        const fieldKey = `${st.count}|${W}|${H}`;
        if (st.fieldKey !== fieldKey) {
            st.field = _buildStarField(st.count, W, H, inst.wp);
            st.fieldKey = fieldKey;
        }
        const dpr = Math.min(s, STARS.heroDprCap);
        if (st.heroKey !== dpr) {
            st.heroes = _buildStarHeroes(inst.wp, dpr);
            st.heroKey = dpr;
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalAlpha = st.opacity;
        ctx.drawImage(st.field, 0, 0);
        ctx.setTransform(s, 0, 0, s, 0, 0);
        ctx.globalCompositeOperation = 'lighter';
        for (const hero of st.heroes) {
            const a = t * hero.sp + hero.ph;
            const twinkle = Math.sin(a) + Math.sin(a * 2.7) * 0.5 + Math.sin(a * 0.4) * 0.3;
            const size = hero.size * (1 + twinkle * 0.35);
            const op = Math.min(1, Math.max(0, hero.brightness * (1 + twinkle * 0.40))) * st.opacity;
            if (op < 0.05) continue;
            const px = hero.x * w, py = hero.y * h;
            const drawSize = hero.texPx * (size / hero.refSize) / dpr;
            ctx.globalAlpha = op;
            ctx.drawImage(hero.tex, px - drawSize * 0.5, py - drawSize * 0.5, drawSize, drawSize);
            ctx.globalAlpha = Math.min(1, op * 1.1);
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(px, py, size * 0.75, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
    }
    function create() {
        return { key: null, rainKey: null, rain: null, snow: null, hail: null, cloud: null, stars: null, area: 0, wp: Math.random() * 100, flash: null };
    }
    function set(inst, key, w, h, weatherState, stars) {
        const area = Math.max(1, w * h);
        const grow = inst.area > 0 ? Math.abs(area - inst.area) / inst.area : 1;
        const sizeChanged = grow >= 0.22;
        const density = _cloudDensityOf(weatherState);
        if (density <= 0) {
            inst.cloud = null;
        } else if (!inst.cloud || inst.cloud.state !== weatherState) {
            if (!inst.cloud || inst.cloud.density !== density) inst.cloud = _buildCloudField(density, inst.wp);
            inst.cloud.speed = _weatherTuning(weatherState).cloudSpeed;
            inst.cloud.state = weatherState;
            _getCloudImg();
        }
        const starCount = stars ? stars.count : 0;
        if (starCount <= 0) {
            inst.stars = null;
        } else if (!inst.stars || inst.stars.count !== starCount) {
            inst.stars = { count: starCount, opacity: stars.opacity, field: null, fieldKey: null, heroes: null, heroKey: null };
        } else {
            inst.stars.opacity = stars.opacity;
        }
        if (key === inst.key && !sizeChanged) {
            inst.area = area;
            return;
        }
        inst.key = key;
        inst.area = area;
        inst.rain = null; inst.snow = null; inst.hail = null; inst.rainKey = null;
        if (key === 'snow') {
            inst.snow = _buildSnow(area, 1);
        } else if (key === 'sleet') {
            inst.rainKey = 'rain';
            inst.rain = _buildRain(RAIN.rain, area, 0.5);
            inst.snow = _buildSnow(area, 0.55);
        } else if (key === 'hail') {
            inst.hail = _buildHail(area);
        } else if (RAIN[key]) {
            inst.rainKey = key;
            inst.rain = _buildRain(RAIN[key], area, 1);
        }
    }
    function _advanceFlash(inst, t, dt) {
        if (!_weatherTuning(inst.cloud.state).lightning) {
            inst.flash = null;
            return null;
        }
        const fl = inst.flash || (inst.flash = { next: t + 1.5 + Math.random() * 2.5, age: -1, puffs: null });
        if (fl.age < 0) {
            if (t < fl.next) return null;
            const big = inst.cloud.puffs.filter(p => p.band >= 1);
            if (!big.length) return null;
            const anchor = big[(Math.random() * big.length) | 0];
            fl.puffs = big.filter(p => (p.x - anchor.x) ** 2 + (p.y - anchor.y) ** 2 < 0.04).slice(0, 3);
            fl.age = 0;
            const strokeCount = 2 + ((Math.random() * 3) | 0);
            const strokes = [];
            let cursor = 0;
            for (let i = 0; i < strokeCount; i++) {
                const on = 0.03 + Math.random() * 0.05;
                const gap = i < strokeCount - 1 ? 0.03 + Math.random() * 0.08 : 0;
                const peak = (i === 0 ? 0.7 + Math.random() * 0.3 : 0.25 + Math.random() * 0.45) * (1 - i * 0.15);
                strokes.push({ start: cursor, on, gap, peak });
                cursor += on + gap;
            }
            fl.strokes = strokes;
            fl.dur = cursor;
        }
        fl.age += dt;
        if (fl.age >= fl.dur) {
            fl.age = -1;
            fl.next = t + 2 + Math.random() * 4;
            return null;
        }
        let brightness = 0;
        for (const s of fl.strokes) {
            const local = fl.age - s.start;
            if (local < 0 || local >= s.on) continue;
            const ramp = 0.12 * s.on;
            const attack = local < ramp ? local / ramp : 1;
            const decay = local > s.on - ramp ? (s.on - local) / ramp : 1;
            brightness = Math.max(brightness, attack * decay * s.peak);
        }
        return brightness > 0.01 ? { puffs: fl.puffs, brightness } : null;
    }
    function frame(inst, ctx, w, h, s, dt, t, env, starCtx) {
        const activeEffects = !!inst.key || !!inst.cloud || !!inst.stars;
        ctx.setTransform(s, 0, 0, s, 0, 0);
        ctx.clearRect(0, 0, w, h);
        if (!activeEffects) {
            if (starCtx) { starCtx.setTransform(s, 0, 0, s, 0, 0); starCtx.clearRect(0, 0, w, h); }
            return false;
        }
        if (inst.stars) {
            const sc = starCtx || ctx;
            if (starCtx) { starCtx.setTransform(s, 0, 0, s, 0, 0); starCtx.clearRect(0, 0, w, h); }
            _drawStars(inst, sc, w, h, s, t);
            if (env.moon) {
                sc.setTransform(s, 0, 0, s, 0, 0);
                sc.globalCompositeOperation = 'destination-out';
                sc.beginPath();
                sc.arc(env.moon.x, env.moon.y, env.moon.r, 0, Math.PI * 2);
                sc.fill();
                sc.globalCompositeOperation = 'source-over';
            }
        } else if (starCtx) {
            starCtx.setTransform(s, 0, 0, s, 0, 0); starCtx.clearRect(0, 0, w, h);
        }
        const wp = inst.wp;
        const gust = 0.72 + 0.22 * Math.sin(t * 0.21 + wp) + 0.13 * Math.sin(t * 0.53 + wp * 1.7);
        const drift = Math.sin(t * 0.16 + wp * 0.6) + 0.4 * Math.sin(t * 0.41 + wp);
        const topF = h * 0.16, botY = h * 1.02, botF = h * 0.12;
        const glow = env.glow;
        const boost = (x, y) => {
            if (!glow) return 1;
            const dx = x - glow.x, dy = y - glow.y;
            const q = 1 - (dx * dx + dy * dy) / glow.r2;
            return q > 0 ? 1 + q * q * glow.s : 1;
        };
        const span = w * 1.3, sx = -w * 0.15;
        if (inst.cloud && inst.cloud.puffs.length) {
            const cImg = _getCloudImg();
            const bands = cImg && _cloudBandSprites(cImg, inst.cloud.state, env.schemeDark, env.backgroundRGB);
            if (bands) {
                const aspect = (cImg.naturalWidth || cImg.width) / (cImg.naturalHeight || cImg.height);
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                const wind = (0.9 + 0.4 * gust) * inst.cloud.speed;
                const opAmt = env.schemeDark ? 1.08 : 1;
                const scale = Math.max(1, Math.min(2.4, Math.sqrt(w * h) / 300));
                const drawPuff = (p, alpha) => {
                    const ph = p.size * scale, pw = ph * aspect * p.stretch;
                    const cx = p.x * w;
                    const cy = p.y * h + Math.sin(t * p.bobF + p.bobPh) * p.bobAmp * h;
                    ctx.globalAlpha = alpha != null ? alpha : Math.min(0.95, p.alpha * opAmt * boost(cx, cy));
                    ctx.setTransform(s, 0, 0, s, cx * s, cy * s);
                    if (p.rot) ctx.rotate(p.rot);
                    if (p.flip) ctx.scale(-1, 1);
                    ctx.drawImage(bands[p.band][p.variant], -pw / 2, -ph / 2, pw, ph);
                };
                for (const p of inst.cloud.puffs) {
                    const pw = p.size * scale * aspect * p.stretch;
                    p.x += p.speed * wind * dt;
                    if (p.x * w - pw / 2 > w) p.x -= (w + pw) / w;
                    drawPuff(p, null);
                }
                const flash = _advanceFlash(inst, t, dt);
                if (flash) {
                    ctx.globalCompositeOperation = 'lighter';
                    for (const fp of flash.puffs) drawPuff(fp, flash.brightness * 0.55);
                    ctx.globalCompositeOperation = 'source-over';
                }
                ctx.setTransform(s, 0, 0, s, 0, 0);
                ctx.globalAlpha = 1;
            }
        }
        if (inst.rain && inst.rain.length) {
            const recipe = RAIN[inst.rainKey];
            const sp = _sprite('streak', env.schemeDark);
            const lean = recipe.lean * gust;
            const stretch = Math.min(dt, 1 / 24);
            const maxLen = h * 0.22;
            ctx.setTransform(s, 0, s * lean, s, 0, 0);
            const dark = env.schemeDark;
            ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
            const aCap = dark ? 0.62 : 0.95;
            for (const p of inst.rain) {
                p.y += p.vy * dt / h;
                p.x += p.vy * lean * 0.9 * dt / span;
                let y = p.y * (h + 40) - 20;
                if (y > h + 24) { p.y = (Math.random() * -0.22); p.x = Math.random(); p.sd = Math.random(); y = p.y * (h + 40) - 20; }
                if (p.x > 1) p.x -= 1; else if (p.x < 0) p.x += 1;
                const x = sx + p.x * span;
                let a;
                if (dark) {
                    const focus = 0.30 + 0.70 * p.z;
                    const glint = 0.55 + 0.90 * (p.sd * p.sd);
                    a = _lerp(recipe.alpha[0], recipe.alpha[1], p.z) * focus * glint;
                } else {
                    a = (0.55 + 0.45 * p.z) * (0.85 + 0.30 * p.sd);
                }
                if (y < topF) a *= Math.max(0, y / topF);
                else if (y > botY - botF) a *= Math.max(0, (botY - y) / botF);
                if (a <= 0.004) continue;
                a *= boost(x, y);
                const len = Math.min(maxLen, (_lerp(recipe.lenBase[0], recipe.lenBase[1], p.z) + p.vy * stretch) * (0.72 + 0.55 * p.z));
                const dw = _lerp(recipe.width[0], recipe.width[1], p.z) * (0.70 + 0.85 * p.z);
                ctx.globalAlpha = Math.min(aCap, a);
                ctx.drawImage(sp, x - lean * y - dw / 2, y - len, dw, len);
            }
            ctx.globalCompositeOperation = 'source-over';
        }
        if (inst.hail && inst.hail.length) {
            const sp = _sprite('hail', env.schemeDark);
            const tr = _sprite('streak', env.schemeDark);
            const stretch = Math.min(dt, 1 / 24);
            const lean = 0.07 * gust;
            ctx.setTransform(s, 0, s * lean, s, 0, 0);
            for (const p of inst.hail) {
                p.y += p.vy * dt / h;
                p.x += p.vy * lean * 0.9 * dt / span;
                let y = p.y * (h + 40) - 20;
                if (y > h + 24) { p.y = (Math.random() * -0.22); p.x = Math.random(); y = p.y * (h + 40) - 20; }
                if (p.x > 1) p.x -= 1; else if (p.x < 0) p.x += 1;
                const x = sx + p.x * span;
                let a = _lerp(HAIL.alpha[0], HAIL.alpha[1], p.z);
                if (y < topF) a *= Math.max(0, y / topF);
                else if (y > botY - botF) a *= Math.max(0, (botY - y) / botF);
                if (a <= 0.004) continue;
                a *= boost(x, y);
                const d = _lerp(HAIL.dia[0], HAIL.dia[1], p.z);
                const dh = d * (1.1 + 0.3 * p.z);
                const u = x - lean * y;
                const len = d * 2 + p.vy * stretch * 0.55;
                ctx.globalAlpha = Math.min(0.8, a) * 0.32;
                ctx.drawImage(tr, u - d * 0.4, y - len, d * 0.8, len);
                ctx.globalAlpha = Math.min(0.8, a);
                ctx.drawImage(sp, u - d / 2, y - dh / 2, d, dh);
            }
        }
        if (inst.snow && inst.snow.length) {
            const sp = _sprite('flake', env.schemeDark);
            ctx.setTransform(s, 0, 0, s, 0, 0);
            const wind = drift * 7;
            for (const p of inst.snow) {
                p.y += p.vy * dt / h;
                p.x += wind * (0.4 + p.z * 0.6) * dt / span;
                let y = p.y * (h + 24) - 12;
                if (y > h + 14) { p.y = Math.random() * -0.12; p.x = Math.random(); p.ph = Math.random() * Math.PI * 2; y = p.y * (h + 24) - 12; }
                if (p.x > 1) p.x -= 1; else if (p.x < 0) p.x += 1;
                const x = sx + p.x * span + Math.sin(t * p.swf + p.ph) * p.swa;
                let a = _lerp(SNOW.alpha[0], SNOW.alpha[1], p.z) * (0.82 + 0.18 * Math.sin(t * p.tw + p.ph));
                if (y < topF) a *= Math.max(0, y / topF);
                else if (y > botY - botF) a *= Math.max(0, (botY - y) / botF);
                if (a <= 0.004) continue;
                a *= boost(x, y);
                const d = _lerp(SNOW.dia[0], SNOW.dia[1], p.z);
                ctx.globalAlpha = Math.min(0.85, a);
                ctx.drawImage(sp, x - d / 2, y - d / 2, d, d);
            }
        }
        ctx.globalAlpha = 1;
        ctx.setTransform(s, 0, 0, s, 0, 0);
        return true;
    }
    return Object.freeze({ cloudDensity: _cloudDensityOf, create, set, frame });
})();
const ESCAPE_MAP = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
const escapeHtml = (v) => String(v).replace(/["&<>]/g, c => ESCAPE_MAP[c]);
const _CSS_STRIP = /["'<>;{}\\]|\/\*|\*\/|@|url\s*\(|expression\s*\(/gi;
const cssValue = (v) => String(v).replace(/[\u0000-\u001F\u007F]/g, '').replace(_CSS_STRIP, '');
const _ALIGN_CLASSES = new Set(['start', 'center', 'end', 'spread']);
const JUSTIFY_MAP = Object.freeze({ start: 'flex-start', center: 'center', end: 'flex-end', between: 'space-between', around: 'space-around', evenly: 'space-evenly' });
const ALIGN_MAP = Object.freeze({ start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch', baseline: 'baseline' });
const FORECAST_CACHE = new Map();
const FORECAST_CACHE_MAX = 50;
const _FORECAST_UNIT_MAP = { temperature: 'temperature_unit', templow: 'temperature_unit', wind_speed: 'wind_speed_unit', precipitation: 'precipitation_unit', pressure: 'pressure_unit', visibility: 'visibility_unit', dew_point: 'temperature_unit' };
const _FORECAST_UNIT_FALLBACK = { humidity: '%', precipitation_probability: '%', cloud_coverage: '%', wind_bearing: '°', uv_index: '' };
function collectConditionEntities(conditions) {
    const out = [];
    if (!Array.isArray(conditions)) return out;
    for (const c of conditions) {
        if (!c) continue;
        if (c.entity) out.push(c.entity);
        if (c.condition === 'and' || c.condition === 'or' || c.condition === 'not') {
            out.push(...collectConditionEntities(c.conditions));
        }
    }
    return out;
}
function normalizeLength(v) {
    const s = String(v == null ? '' : v).trim();
    if (!s) return '';
    return s.split(/\s+/).map(tok => {
        if (!tok) return tok;
        if (tok === '0') return '0';
                return /^[+-]?(\d+\.?\d*|\.\d+)$/.test(tok) ? tok + 'px' : tok;
    }).join(' ');
}
function cssLength(v) { return cssValue(normalizeLength(v)); }
function _elBoxStyle(el) {
    let s = '';
    if (el && el.margin !== undefined && el.margin !== '') s += `;margin:${cssLength(el.margin)}`;
    if (el && el.padding !== undefined && el.padding !== '') s += `;padding:${cssLength(el.padding)}`;
    return s;
}
function parseAnchor(anchor) {
    if (anchor === 'center') return ['center', 'center']; if (anchor === 'left') return ['center', 'left'];
    if (anchor === 'right') return ['center', 'right'];
    return anchor.includes('-') ? anchor.split('-') : ['top', anchor];
}
function pickThreshold(thresholds, value) {
    if (isNaN(value)) return '';
    let color = '';
    const sorted = thresholds
        .filter(t => t.value !== '' && t.value !== undefined && t.color)
        .sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
    for (const t of sorted) { if (value >= parseFloat(t.value)) color = t.color; }
    return color;
}
function computeGauge(rawVal, min, max, colorRaw, thresholds, mode) {
    const range = max - min || 1;
    const progress = isNaN(rawVal) ? 0 : Math.max(0, Math.min(1, (rawVal - min) / range));
    const pct = (progress * 100).toFixed(1);
    const baseColor = (colorRaw && colorRaw !== 'auto') ? cssValue(colorRaw) : '';
    const valid = thresholds
        .filter(t => t.value !== '' && t.value !== undefined && t.color)
        .map(t => ({ value: t.value, color: cssValue(t.color) }));
    let gradient = '', barGradient = '', hasSegments = false, effectiveColor = baseColor;
    if (valid.length && !isNaN(rawVal) && (mode === 'segments' || mode === 'gradient')) {
        const sorted = [...valid].sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
        const toPct = (v) => (Math.max(0, Math.min(1, (parseFloat(v) - min) / range)) * 100).toFixed(1);
        const stops = [], barStops = [];
        for (let i = 0; i < sorted.length; i++) {
            const t = sorted[i], startPct = toPct(t.value);
            const endPct = i < sorted.length - 1 ? toPct(sorted[i + 1].value) : '100';
            if (mode === 'segments') {
                stops.push(`${t.color} ${startPct}%`, `${t.color} ${endPct}%`);
                if (progress > 0) {
                    const bStart = (parseFloat(startPct) / (progress * 100) * 100).toFixed(1);
                    const bEnd = (parseFloat(endPct) / (progress * 100) * 100).toFixed(1);
                    barStops.push(`${t.color} ${bStart}%`, `${t.color} ${bEnd}%`);
                }
            } else {
                stops.push(`${t.color} ${startPct}%`);
                if (progress > 0) {
                    const bStart = (parseFloat(startPct) / (progress * 100) * 100).toFixed(1);
                    barStops.push(`${t.color} ${bStart}%`);
                }
            }
        }
        if (stops.length) { hasSegments = true; gradient = stops.join(', '); }
        if (barStops.length) { barGradient = barStops.join(', '); }
    }
    if (valid.length && !isNaN(rawVal) && mode === 'solid') {
        effectiveColor = pickThreshold(valid, rawVal) || effectiveColor;
    }
    return { pct, gradient, barGradient, hasSegments, effectiveColor };
}
function forecastFilterPast(raw, daily) {
    const now = new Date(), cut = daily ? new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() : now.getTime();
    return raw.filter(f => Date.parse(f.datetime) >= cut);
}
function forecastFingerprint(forecast) {
    if (!forecast || !forecast.length) return '';
    let s = '' + forecast.length;
    for (const f of forecast) s += `|${f.datetime}|${f.condition}|${f.temperature}|${f.templow != null ? f.templow : ''}|${f.precipitation_probability != null ? f.precipitation_probability : ''}`;
    return s;
}
function forecastLabel(dt, daily, locale) {
    const d = new Date(dt);
    return daily ? d.toLocaleDateString(locale, { weekday: 'short' }) : d.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' });
}
let _sharedStyles = null;
class WeatherCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._animId = null;
        this._boundAnimate = this._animate.bind(this);
        this._lastFrameTime = 0;
        this._lastEffectsTime = 0;
        this._frameInterval = 1000 / 24;
        this._effects = WeatherEffects.create();
        this._effectsActive = false;
        this._effectsCtx = null;
        this._effectsScale = 1;
        this._effectsW = 0;
        this._effectsH = 0;
        this._sunGlowY = null;
        this._sunGlowVisibility = 0;
        this._sunGlowIsNight = false;
        this._sunsetF = 0;
        this._isAstroNight = false;
        this._schemeDark = false;
        this._lastState = null;
        this._hasReceivedFirstHass = false;
        this._initialized = false;
        this._initializationComplete = false;
        this._isVisible = false;
        this._intersectionObserver = null;
        this._resizeDebounceTimer = null;
        this._cachedDimensions = { width: 0, height: 0 };
        this._lastSnapshot = null;
        this._prevStyleSig = null;
        this._prevWeatherClass = null;
        this._prevCardPadParsed = null;
        this._hass = null;
        this._customCardElements = [];
        this._boundVisibilityChange = this._handleVisibilityChange.bind(this);
        this._boundTap = this._handleTap.bind(this);
        this._boundDocVisibility = this._handleDocVisibility.bind(this);
        this._forecastData = new Map();
        this._forecastSubs = new Map();
        this._forecastFormatCache = null;
        this._weatherBgActive = false;
        this._weatherBgState = null;
        this._weatherBgSchemeDark = null;
        this._defaultBgActive = false;
        this._defaultBgSchemeDark = null;
        this._weatherFilterSig = null;
        this._hazeStyleSig = null;
        this._refMoon = null;
        this._sunMoonSig = null;
        this._sunMoonActive = false;
        this._moonPhaseApplied = null;
    }
    connectedCallback() {
        if (!this._resizeObserver) {
            this._resizeObserver = new ResizeObserver((entries) => {
                if (!entries.length) return;
                const entry = entries[0]; let w, h;
                if (entry.borderBoxSize && entry.borderBoxSize[0]) {
                    w = entry.borderBoxSize[0].inlineSize; h = entry.borderBoxSize[0].blockSize;
                } else {
                    w = entry.target.offsetWidth; h = entry.target.offsetHeight;
                }
                const changed = this._updateCanvasDimensions(w, h);
                if (!this._initializationComplete) {
                    this._tryInitialize();
                } else if (changed) {
                    this._scheduleResize();
                }
            });
        }
        if (!this._intersectionObserver) {
            this._intersectionObserver = new IntersectionObserver(this._boundVisibilityChange, { threshold: 0.01, rootMargin: '0px' });
        }
        this._observeRoot();
        document.addEventListener('visibilitychange', this._boundDocVisibility);
        if (this._hasReceivedFirstHass) this._syncForecasts();
        if (this._initializationComplete) {
            this._startAnimation();
        } else if (this._hasReceivedFirstHass) {
            this._tryInitialize();
        }
    }
    disconnectedCallback() {
        this._stopAnimation();
        if (this._gaugeAnimRaf != null) { cancelAnimationFrame(this._gaugeAnimRaf); this._gaugeAnimRaf = null; this._gaugeAnimQueue = null; }
        if (this._resizeObserver) this._resizeObserver.disconnect();
        if (this._intersectionObserver) this._intersectionObserver.disconnect();
        if (this._marqueeObserver) this._marqueeObserver.disconnect();
        this._marqueeObserver = null;
        for (const unsub of this._forecastSubs.values()) { try { unsub(); } catch (_) {} }
        this._forecastSubs.clear();
        if (this._resizeDebounceTimer) {
            clearTimeout(this._resizeDebounceTimer); this._resizeDebounceTimer = null;
        }
        this._isVisible = false;
        this.removeEventListener('click', this._boundTap);
        document.removeEventListener('visibilitychange', this._boundDocVisibility);
        this._customCardElements = [];
        this._initializationComplete = false;
        this._lastSnapshot = null;
        this._lastEffectsTime = 0;
    }
    _observeRoot() {
        if (!this._elements || !this._elements.root) return;
        this._resizeObserver.observe(this._elements.root);
        this._intersectionObserver.observe(this._elements.root);
        this.addEventListener('click', this._boundTap);
    }
    setConfig(config) {
        const prevContainerCount = this._containers ? this._containers.length : -1;
        this._config = config;
        this._containers = this._deriveContainers(this._config);
        this._allButtonsCache = null;
        this._containerVisEntitiesCache = null;
        this._trackedIdsCache = null;
        if (this._containers.length !== prevContainerCount) this._containerRenderCache = null;
        this._initDOM();
        const heightMode = String(config.card_height == null ? '' : config.card_height).toLowerCase();
        const rootEl = this._elements?.root;
        if (heightMode === 'content') {
            this.style.height = 'auto'; this.style.minHeight = '0'; this.style.aspectRatio = 'auto';
            if (rootEl) rootEl.classList.remove('fixed-height');
        } else if (heightMode === 'auto') {
            this.style.height = '100%'; this.style.minHeight = '0'; this.style.aspectRatio = 'auto';
            if (rootEl) rootEl.classList.add('fixed-height');
        } else {
            const heightConfig = config.card_height || '200px';
            const cssHeight = typeof heightConfig === 'number' ? `${heightConfig}px` : heightConfig;
            this.style.height = cssHeight; this.style.minHeight = cssHeight; this.style.aspectRatio = 'auto';
            if (rootEl) rootEl.classList.add('fixed-height');
        }
        const root = this._elements.root;
        const hasTapAction = config.card_tap_action && config.card_tap_action.action && config.card_tap_action.action !== 'none';
        root.classList.toggle('clickable', !!hasTapAction);
        this._customCardElements = [];
        this._createContainerCards();
        this._lastSnapshot = null;
        this._sunMoonSig = null;
        this._moonPhaseApplied = null;
        this._prevCardPadParsed = null;
        this._nativeIconCache = null;
        this._containerStyleCache = null;
        for (const c of this._allButtons()) {
            if (c.forecast && c.entity) {
                const k = `${c.entity}|${c.forecast === 'hourly' ? 'hourly' : 'daily'}`;
                if (!this._forecastData.has(k) && FORECAST_CACHE.has(k)) {
                    this._forecastData.set(k, FORECAST_CACHE.get(k));
                }
            }
        }
        this._syncForecasts();
        this._weatherBgState = null;
        this._defaultBgSchemeDark = null;
        this._weatherFilterSig = null;
        this._hazeStyleSig = null;
        if (this._backgroundMode() !== 'default' && this._elements?.root) {
            this._elements.root.classList.remove('has-default-bg');
            this._defaultBgActive = false;
        }
        this._applyConfigStyles();
        if (this._lastState) this._syncEffects(this._lastState);
        if (this._initializationComplete && this._isVisible) {
            this._startAnimation();
        }
    }
    set hass(hass) {
        if (!hass || !this._config) return;
        this._hass = hass;
        if (this._customCardElements.length > 0) { for (const child of this._customCardElements) child.hass = hass; }
        const cfg = this._config;
        const wObj = (cfg.weather_entity && hass.states[cfg.weather_entity]) || null;
        const sunId = cfg.sun_entity || 'sun.sun';
        const sunObj = hass.states[sunId] || null;
        const moonObj = cfg.moon_phase_entity ? hass.states[cfg.moon_phase_entity] : null;
        if (this._lastSnapshot
            && wObj === this._refW && sunObj === this._refSun && moonObj === this._refMoon
            && !this._trackedEntitiesChanged(hass)) return;
        this._refW = wObj; this._refSun = sunObj; this._refMoon = moonObj;
        const refs = new Map(), allButtons = this._allButtons();
        for (const id of this._trackedEntityIds()) refs.set(id, hass.states[id]);
        this._refButtonEntities = refs;
        const isAstroNight = !!sunObj && (sunObj.state || '').toLowerCase() === 'below_horizon';
        const colorMode = (cfg.color_mode || 'sun').toLowerCase();
        if (colorMode !== 'theme' && !sunObj) this._warnMissingSun();
        const schemeDark = WeatherCard._schemeDarkFromColorMode(colorMode, !!(hass.themes && hass.themes.darkMode), isAstroNight);
        const hasAstroNightChanged = this._isAstroNight !== isAstroNight;
        const hasSchemeDarkChanged = this._schemeDark !== schemeDark;
        this._isAstroNight = isAstroNight;
        this._schemeDark = schemeDark;
        this._updateSunMoon(sunObj, moonObj, wObj);
        const wEntity = wObj || FALLBACK_WEATHER;
        const botSig = allButtons.map(s => {
            if (!s.entity) return '';
            let sig;
            if (s.forecast) {
                const t = s.forecast === 'hourly' ? 'hourly' : 'daily';
                const fd = this._forecastData.get(`${s.entity}|${t}`);
                sig = `forecast:${s.entity}|${t}:${s.forecast_offset || 0}:${(fd && fd.fp) || ''}`;
            } else {
                const e = hass.states[s.entity]; if (!e) sig = '|';
                else if (s.attribute) sig = `${e.attributes[s.attribute] != null ? e.attributes[s.attribute] : ''}|${e.attributes[`${s.attribute}_unit`] != null ? e.attributes[`${s.attribute}_unit`] : ''}`;
                else sig = `${e.state}|${e.attributes.unit_of_measurement || ''}`;
            }
            if (Array.isArray(s.elements)) {
                for (const el of s.elements) {
                    if (!el) continue;
                    if (el.kind === 'text' && el.entity) {
                        const te = hass.states[el.entity];
                        if (te) sig += `|tx:${el.attribute ? (te.attributes[el.attribute] != null ? te.attributes[el.attribute] : '') : te.state}`;
                    } else if (el.kind === 'bar' && el.gauge_entity) {
                        const ge = hass.states[el.gauge_entity];
                        if (ge) sig += `|bar:${el.gauge_attribute ? (ge.attributes[el.gauge_attribute] != null ? ge.attributes[el.gauge_attribute] : '') : ge.state}`;
                    }
                }
            }
            for (const ve of s._visEntities) {
                const ves = hass.states[ve];
                sig += `|vi:${ve}:${ves ? ves.state : ''}`;
            }
            return sig;
        }).join('||');
        let containerVisSig = '';
        for (const ve of this._containerVisibilityEntities()) {
            const ves = hass.states[ve];
            containerVisSig += `|av:${ve}:${ves ? ves.state : ''}`;
        }
        const lang = (hass.locale && hass.locale.language) || 'en';
        const snapshot = {
            weather: wEntity.state || '',
            sun: (sunObj && sunObj.state) || '',
            schemeDark,
            botSig,
            containerVisSig,
            lang
        };
        if (this._lastSnapshot && !this._hasSnapshotChanged(this._lastSnapshot, snapshot)) return;
        this._lastSnapshot = snapshot;
        let weatherState = (wEntity.state || 'default').toLowerCase();
        if (isAstroNight && weatherState === 'sunny') weatherState = 'clear-night';
        if (!isAstroNight && weatherState === 'clear-night') weatherState = 'sunny';
        if (weatherState === 'exceptional' && isAstroNight) weatherState = 'clear-night';
        this._updateSchemeStyles(weatherState);
        this._updateTextElements(hass, lang, weatherState);
        this._updateWeatherBackground(weatherState, schemeDark);
        this._updateDefaultBackground(schemeDark);
        this._updateWeatherFilter(weatherState, schemeDark);
        this._updateHazeStyles(weatherState, schemeDark);
        this._syncEffects(weatherState);
        if (!this._hasReceivedFirstHass) {
            this._hasReceivedFirstHass = true;
            this._lastState = weatherState;
            this._syncForecasts();
            this._tryInitialize();
            return;
        }
        const stateChanged = this._lastState !== weatherState;
        this._lastState = weatherState;
        if (stateChanged || hasAstroNightChanged || hasSchemeDarkChanged) this._startAnimation();
    }
    _trackedEntitiesChanged(hass) {
        const refs = this._refButtonEntities, ids = this._trackedEntityIds(), states = hass.states;
        for (let i = 0; i < ids.length; i++) {
            if (states[ids[i]] !== refs.get(ids[i])) return true;
        }
        return false;
    }
    static async getConfigElement() {
        if (!customElements.get("origami-weather-editor")) {
            await import("./origami-weather-editor.js?v=origami-1.4ahjjhggssssggjizg");
        }
        return document.createElement("origami-weather-editor");
    }
    static getStubConfig(hass) {
        const weatherEntity = hass ? Object.keys(hass.states).find(e => e.startsWith('weather.')) || '' : '';
        const rainBar = { kind: 'bar', gauge_attribute: 'precipitation_probability', bar_min: '0', bar_max: '100', bar_height: '8', bar_threshold_mode: 'gradient', margin: '6px 0 0 0', bar_thresholds: [{ value: '0', color: 'rgba(214, 224, 230, 0.8)' }, { value: '10', color: 'rgba(190, 210, 224, 0.8)' }, { value: '20', color: 'rgba(166, 197, 219, 0.8)' }, { value: '30', color: 'rgba(142, 184, 214, 0.8)' }, { value: '40', color: 'rgba(118, 170, 210, 0.8)' }, { value: '50', color: 'rgba(96, 156, 204, 0.8)' }, { value: '60', color: 'rgba(76, 141, 196, 0.8)' }, { value: '70', color: 'rgba(58, 125, 186, 0.8)' }, { value: '80', color: 'rgba(42, 108, 174, 0.8)' }, { value: '90', color: 'rgba(30, 90, 160, 0.8)' }] };
        const fc = off => ({ entity: weatherEntity, forecast: 'daily', ...(off ? { forecast_offset: off } : {}), elements: [{ kind: 'icon', icon: 'weather' }, { kind: 'text', size: '12px', weight: '500', attribute: 'datetime' }, { kind: 'text', weight: '700', attribute: 'temperature' }, { ...rainBar }] });
        return {
            weather_entity: weatherEntity,
            sun_entity: 'sun.sun',
            card_height: 'content',
            card_padding: '16px',
            background_mode: 'default',
            button_containers: [
                { position: 'custom', position_anchor: 'top-left', padding: '4px 8px', buttons: [
                    { entity: weatherEntity, attribute: 'temperature', text_size: '42px', align: 'start', padding: '4px 0 0 0', background: false, elements: [{ kind: 'text', weight: '700', fancy_unit: true, attribute: 'temperature', precision: 0 }] }
                ] },
                { background: true, button_icon_size: '34px', button_padding: '16px', align: 'center', button_background_color: 'rgba(255,255,255,0.1)', button_blurred_background: true, justify_content: 'end', align_items: 'start', padding: '8px', buttons: [
                    { entity: weatherEntity, attribute: 'temperature', type: 'ring', ring_gap: '8px', ring_width: '4px', ring_min: '-20', ring_max: '40', ring_threshold_mode: 'gradient', ring_thresholds: [{ value: '-20', color: 'rgba(124, 142, 184, 0.8)' }, { value: '-16', color: 'rgba(132, 156, 196, 0.8)' }, { value: '-12', color: 'rgba(140, 172, 206, 0.8)' }, { value: '-8', color: 'rgba(150, 188, 214, 0.8)' }, { value: '-4', color: 'rgba(165, 202, 218, 0.8)' }, { value: '0', color: 'rgba(183, 213, 216, 0.8)' }, { value: '4', color: 'rgba(198, 218, 205, 0.8)' }, { value: '8', color: 'rgba(206, 218, 188, 0.8)' }, { value: '12', color: 'rgba(214, 214, 168, 0.8)' }, { value: '16', color: 'rgba(224, 207, 152, 0.8)' }, { value: '20', color: 'rgba(232, 195, 140, 0.8)' }, { value: '24', color: 'rgba(232, 178, 130, 0.8)' }, { value: '28', color: 'rgba(228, 158, 124, 0.8)' }, { value: '32', color: 'rgba(220, 138, 120, 0.8)' }, { value: '36', color: 'rgba(208, 120, 118, 0.8)' }, { value: '40', color: 'rgba(194, 104, 114, 0.8)' }], blurred_background: true, padding: '16px', elements: [{ kind: 'icon', icon: 'weather', icon_background: false, icon_background_color: 'rgba(0,0,0,0)', icon_size: '42px' }] }
                ] },
                { gap: '4px', button_gap: '0px', button_text_gap: '6px', button_padding: '0', align: 'start', button_text_size: '14px', padding: '0 0 16px 8px', margin: '-14px 0 0 0', buttons: [
                    { entity: weatherEntity, align: 'start', elements: [{ kind: 'icon', icon: 'mdi:weather-windy' }, { kind: 'text', weight: '500', text: 'Wind' }, { kind: 'text', text: '•', weight: '500' }, { kind: 'text', attribute: 'wind_speed', weight: '700' }] }
                ] },
                { layout: 'horizontal-scroll', position: 'bottom-left', scroll_count: 5, gap: '2px', button_icon_background_color: 'rgba(255,255,255,0.05)', button_style: 'vertical', button_text_layout: 'vertical', button_gap: '6px', button_icon_size: '24px', button_padding: '12px', align: 'center', button_text_size: '13px', background_color: 'rgba(255,255,255,0.05)', width: '100%', blurred_background: true, button_background_color: 'rgba(255,255,255,0.1)', separator: true, button_icon_padding: '0 0 6px 0', grouped: true, background: true, buttons: [fc(0), fc(1), fc(2), fc(3), fc(4), fc(5), fc(6)] }
            ]
        };
    }
    getCardSize() { return 4; }
    getGridOptions() {
        return { columns: 12, rows: 'auto', min_columns: 2, min_rows: 2 };
    }
    _deriveContainers(config) {
        const arr = config && config.button_containers;
        if (Array.isArray(arr) && arr.length > 0) {
            return arr.map(a => {
                if (!a || typeof a !== 'object') return { buttons: [] };
                if (a.custom_cards) return { ...a, buttons: [] };
                const src = Array.isArray(a.buttons) ? a.buttons : [];
                const buttons = src.map(s => {
                    if (!s || typeof s !== 'object') return { _visEntities: [] };
                    const c = { ...s };
                    c._visEntities = collectConditionEntities(s.visibility);
                    return c;
                });
                return { ...a, buttons };
            });
        }
        return [];
    }
    _allButtons() {
        if (this._allButtonsCache) return this._allButtonsCache;
        const out = [];
        for (const container of this._containers) {
            for (const button of container.buttons) out.push(button);
        }
        this._allButtonsCache = out;
        return out;
    }
    _containerVisibilityEntities() {
        if (this._containerVisEntitiesCache) return this._containerVisEntitiesCache;
        const set = new Set();
        for (const container of this._containers) {
            for (const ve of collectConditionEntities(container.visibility)) set.add(ve);
        }
        this._containerVisEntitiesCache = [...set];
        return this._containerVisEntitiesCache;
    }
    _trackedEntityIds() {
        if (this._trackedIdsCache) return this._trackedIdsCache;
        const ids = [];
        for (const button of this._allButtons()) {
            if (button.entity) ids.push(button.entity);
            if (Array.isArray(button.elements)) {
                for (const el of button.elements) {
                    if (el && el.kind === 'text' && el.entity) ids.push(el.entity);
                    if (el && el.kind === 'bar' && el.gauge_entity) ids.push(el.gauge_entity);
                }
            }
            for (const ve of button._visEntities) ids.push(ve);
        }
        for (const ve of this._containerVisibilityEntities()) ids.push(ve);
        this._trackedIdsCache = ids;
        return ids;
    }
    _updateSunMoon(sun, moon, weather) {
        const els = this._elements;
        if (!els || !els.sunMoon || !els.sunMoonLayer || !els.root) return;
        const cfg = this._config || {};
        const sunValid = !!sun && sun.state !== 'unavailable' && sun.state !== 'unknown';
        const isAstroNight = sunValid && (sun.state || '').toLowerCase() === 'below_horizon';
        const elev = sunValid ? Number(sun.attributes && sun.attributes.elevation) : NaN;
        const weatherState = (weather && weather.state ? weather.state : 'default').toLowerCase();
        const tuning = _weatherTuning(weatherState);
        this._sunsetF = (sunValid && !isAstroNight && Number.isFinite(elev))
            ? Math.max(0, Math.min(1, 1 - Math.abs(elev - 6) / 16))
            : 0;
        if (cfg.sun_moon_enabled === false || !sunValid) {
            this._sunMoonSig = null;
            if (this._sunMoonActive) {
                this._sunMoonActive = false;
                els.root.classList.remove('has-sun-moon');
                els.root.classList.remove('has-sun-rays');
            }
            return;
        }
        const t = Number.isFinite(elev) ? Math.min(1, Math.max(0, isAstroNight ? -elev / 24 : elev / 60)) : 0.5;
        const yFixed = cfg.sun_moon_y != null && cfg.sun_moon_y !== '';
        const y = yFixed ? Math.min(100, Math.max(0, parseFloat(cfg.sun_moon_y) || 0)) : Math.round((100 - t * 86) * 2) / 2;
        const warm = isAstroNight ? 0 : Math.round(Math.pow(1 - t, 1.6) * 20) / 20;
        this._sunGlowY = y;
        this._sunGlowVisibility = tuning.sunVisibility;
        this._sunGlowIsNight = isAstroNight;
        let phase = 0.5;
        if (isAstroNight && moon && moon.state != null && moon.state !== 'unavailable' && moon.state !== 'unknown') phase = WeatherCard._moonPhaseFraction(moon.state);
        const sig = `${isAstroNight ? 'night' : 'day'}|${y}|${weatherState}|${warm}|${this._schemeDark ? 'd' : 'l'}|${isAstroNight ? phase : ''}`;
        if (this._sunMoonSig === sig) return;
        this._sunMoonSig = sig;
        if (!this._sunMoonActive) {
            this._sunMoonActive = true;
            els.root.classList.add('has-sun-moon');
        }
        els.sunMoon.classList.toggle('is-astro-night', isAstroNight);
        const rays = (!isAstroNight && cfg.sun_rays_enabled !== false)
            ? WeatherCard._rayStrength(tuning, t)
            : 0;
        els.root.classList.toggle('has-sun-rays', rays > 0);
        const st = els.sunMoonLayer.style;
        st.setProperty('--origami-sun-moon-y', `${y}%`);
        st.setProperty('--origami-sun-moon-glow-opacity', String(tuning.sunVisibility));
        st.setProperty('--origami-sun-rays-opacity', String(rays));
        st.opacity = String(tuning.sunVisibility);
        if (isAstroNight) {
            this._applyMoonPhase(phase);
            this._loadMoonImage();
            st.setProperty('--origami-moon-phase-glow', String(Math.round(Math.sin(phase * Math.PI) * 100) / 100));
        } else {
            const c = WeatherCard._sunPalette(warm, tuning.sunSaturation);
            st.setProperty('--origami-sun-core', c.core);
            st.setProperty('--origami-sun-inner', c.inner);
            st.setProperty('--origami-sun-mid', c.mid);
            st.setProperty('--origami-sun-edge', c.edge);
            st.setProperty('--origami-sun-glow-inner', c.glowInner);
            st.setProperty('--origami-sun-glow-outer', c.glowOuter);
            if (rays > 0) {
                const rt = WeatherCard._rayTint(warm, this._schemeDark);
                st.setProperty('--origami-sun-ray-tint', rt.near);
                st.setProperty('--origami-sun-ray-tint-far', rt.far);
            }
        }
    }
    static _rayTint(warm, schemeDark) {
        if (schemeDark) return { near: 'rgba(118,148,196,0.85)', far: 'rgba(104,134,182,0.6)' };
        const w = Math.max(0, Math.min(1, warm));
        const mix = (a, b) => Math.round(a + (b - a) * w);
        return {
            near: `rgb(${mix(169, 206)},${mix(190, 170)},${mix(212, 150)})`,
            far: `rgb(${mix(198, 222)},${mix(213, 196)},${mix(229, 180)})`
        };
    }
    static _rayStrength(tuning, t) {
        const vis = Math.max(0, Math.min(1, (tuning.sunVisibility - 0.34) / 0.55));
        if (vis <= 0) return 0;
        const low = 0.48 + 0.38 * (1 - Math.max(0, Math.min(1, t)));
        return Math.round(Math.min(1, vis * low) * 100) / 100;
    }
    static _schemeDarkFromColorMode(colorMode, themeIsDark, isAstroNight) {
        return colorMode === 'theme' ? themeIsDark : isAstroNight;
    }
    static _sunPalette(warm, saturation) {
        const wash = 1 - saturation;
        const out = {};
        for (const key of Object.keys(SUN_PALETTE.noon)) {
            const n = SUN_PALETTE.noon[key], h = SUN_PALETTE.horizon[key];
            const ch = (i) => {
                const v = n[i] + (h[i] - n[i]) * warm;
                return Math.round(wash > 0 ? v + (236 - v) * wash : v);
            };
            out[key] = `rgb(${ch(0)},${ch(1)},${ch(2)})`;
        }
        return out;
    }
    _applyMoonPhase(p) {
        if (this._moonPhaseApplied === p) return;
        this._moonPhaseApplied = p;
        const litPath = this._elements?.moonLitPath;
        if (!litPath) return;
        const lit = WeatherCard._moonLitPath(p);
        litPath.setAttribute('d', lit || '');
    }
    _loadMoonImage() {
        const els = this._elements;
        if (!els || !els.sunMoon || !els.moonImage) return;
        if (els.sunMoon.classList.contains('has-moon-image')) return;
        els.moonImage.setAttribute('href', MOON_SURFACE);
        els.sunMoon.classList.add('has-moon-image');
    }
    static _moonPhaseFraction(raw) {
        const num = Number(raw);
        if (Number.isFinite(num)) {
            const p = num > 1 ? (num % 29.53) / 29.53 : num;
            return Math.min(1, Math.max(0, p));
        }
        const key = String(raw).toLowerCase().trim().replace(/[\s-]+/g, '_');
        return MOON_PHASES[key] != null ? MOON_PHASES[key] : 0.5;
    }
    static _moonLitPath(p) {
        if (p <= 0.02 || p >= 0.98) return '';
        if (Math.abs(p - 0.5) <= 0.02) return MOON_DISC_PATH;
        const k = Math.cos(2 * Math.PI * p);
        const rx = Math.max(0.05, Math.abs(k) * 48).toFixed(2);
        const waxing = p < 0.5;
        const outerSweep = waxing ? 1 : 0;
        const innerSweep = (k > 0) === waxing ? 0 : 1;
        return `M 50 2 A 48 48 0 0 ${outerSweep} 50 98 A ${rx} 48 0 0 ${innerSweep} 50 2 Z`;
    }
    _warnMissingSun() {
        if (this._sunWarned) return;
        this._sunWarned = true;
        console.warn('Origami Weather: color_mode "sun" requires a sun entity. Tried sun.sun but it was not found; falling back to light. Set sun_entity if your sun entity has a custom ID.');
    }
    _resolveSensorValue(hass, entityId, attribute) {
        let value, unit = '', haFormatted = false, rawNumeric = null;
        const sensor = hass.states[entityId];
        if (!sensor) {
            value = 'N/A';
        } else if (attribute) {
            const raw = sensor.attributes[attribute];
            if (raw === undefined || raw === null) {
                value = 'N/A';
            } else if (typeof hass.formatEntityAttributeValue === 'function') {
                value = hass.formatEntityAttributeValue(sensor, attribute);
                haFormatted = true; rawNumeric = raw;
            } else {
                value = raw; rawNumeric = raw;
                unit = sensor.attributes[`${attribute}_unit`] || sensor.attributes.unit_of_measurement || '';
            }
        } else if (typeof hass.formatEntityState === 'function') {
            value = hass.formatEntityState(sensor);
            haFormatted = true; rawNumeric = sensor.state;
        } else {
            value = sensor.state; rawNumeric = sensor.state;
            unit = sensor.attributes.unit_of_measurement || '';
        }
        let formatted = value;
        if (!haFormatted) {
            formatted = this._formatNumber(value);
        }
        const isoSource = attribute
            ? (sensor && sensor.attributes && sensor.attributes[attribute])
            : (sensor && sensor.state);
        if (typeof isoSource === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(isoSource)) {
            const d = new Date(isoSource);
            if (!isNaN(d)) {
                const locale = (hass.locale && hass.locale.language) || undefined;
                const now = new Date();
                const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                const targetStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
                const dayDiff = Math.round((targetStart - todayStart) / 86400000);
                const timePart = d.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' });
                if (dayDiff === 0) {
                    formatted = timePart;
                } else if (dayDiff >= -1 && dayDiff <= 6) {
                    formatted = `${d.toLocaleDateString(locale, { weekday: 'short' })}, ${timePart}`;
                } else {
                    formatted = d.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' });
                }
                haFormatted = true;
            }
        }
        return { formatted, unit, sensor, haFormatted, rawNumeric };
    }
    _syncForecasts() {
        if (!(this._hass && this._hass.connection)) return;
        const needed = new Set();
        for (const c of this._allButtons()) if (c.forecast && c.entity) needed.add(`${c.entity}|${c.forecast === 'hourly' ? 'hourly' : 'daily'}`);
        for (const [k, unsub] of this._forecastSubs) if (!needed.has(k)) { unsub(); this._forecastSubs.delete(k); this._forecastData.delete(k); }
        for (const k of needed) if (!this._forecastSubs.has(k)) this._startForecastSubscription(k);
    }
    _startForecastSubscription(key) {
        const [entity, type] = key.split('|'), hass = this._hass;
        if (!(hass && hass.connection)) return;
        if (!this._forecastData.has(key) && FORECAST_CACHE.has(key)) {
            this._forecastData.set(key, FORECAST_CACHE.get(key));
        }
        const pending = () => {};
        this._forecastSubs.set(key, pending);
        hass.connection.subscribeMessage(
            (msg) => this._onForecastData(key, msg.forecast != null ? msg.forecast : [], type === 'daily'),
            { type: 'weather/subscribe_forecast', forecast_type: type, entity_id: entity }
        ).then(unsub => {
            if (!this.isConnected || this._forecastSubs.get(key) !== pending) { unsub(); return; }
            this._forecastSubs.set(key, unsub);
        }).catch(() => {
            if (this._forecastSubs.get(key) !== pending) return;
            const poll = async () => {
                try {
                    const res = await this._hass.callWS({ type: 'call_service', domain: 'weather', service: 'get_forecasts', target: { entity_id: entity }, service_data: { type }, return_response: true });
                    const forecastData = res && (res[entity] || (res.response && res.response[entity]));
                    this._onForecastData(key, (forecastData && forecastData.forecast) != null ? forecastData.forecast : [], type === 'daily');
                } catch (_) {}
            };
            poll();
            const timer = setInterval(poll, 30 * 60_000);
            this._forecastSubs.set(key, () => clearInterval(timer));
        });
    }
    _onForecastData(key, raw, daily) {
        const processed = forecastFilterPast(raw, daily), fp = forecastFingerprint(processed);
        const _existing = this._forecastData.get(key);
        if (_existing && _existing.fp === fp) return;
        const entry = { processed, fp };
        this._forecastData.set(key, entry);
        this._lastSnapshot = null;
        FORECAST_CACHE.set(key, entry);
        if (FORECAST_CACHE.size > FORECAST_CACHE_MAX) {
            const oldest = FORECAST_CACHE.keys().next().value;
            FORECAST_CACHE.delete(oldest);
        }
    }
    _resolveForecastValue(hass, button) {
        const type = button.forecast === 'hourly' ? 'hourly' : 'daily';
        const offset = Math.max(0, parseInt(button.forecast_offset, 10) || 0);
        const _forecastEntry = this._forecastData.get(`${button.entity}|${type}`);
        const forecast = _forecastEntry && _forecastEntry.processed;
        if (!forecast || !forecast.length) return { formatted: '', unit: '', condition: null, datetime: null, loading: true };
        const entry = forecast[Math.min(offset, forecast.length - 1)];
        if (!entry) return { formatted: '', unit: '', condition: null, datetime: null, loading: true };
        let label = entry.condition || '—';
        if (entry.condition && typeof hass.localize === 'function') label = hass.localize(`component.weather.entity_component._.state.${entry.condition}`) || label;
        return { formatted: label, unit: '', condition: entry.condition, datetime: entry.datetime, entry };
    }
    _reshapeValue(hass, r, txt, hasFormat, lang, unitEntity, unitAttr) {
        let value = r.formatted, unit = hasFormat ? txt.format : r.unit;
        const numeric = r.rawNumeric != null && isFinite(parseFloat(r.rawNumeric));
        if (txt.precision !== undefined && numeric) {
            value = this._formatNumber(r.rawNumeric, this._getForecastFormat(lang, txt.precision));
            if (!hasFormat && r.haFormatted) unit = this._extractUnit(hass, unitEntity, unitAttr);
        } else if (txt.fancy_unit === true && r.haFormatted && r.rawNumeric != null) {
            value = this._formatNumber(r.rawNumeric);
            if (!hasFormat) unit = this._extractUnit(hass, unitEntity, unitAttr);
        } else if (hasFormat && r.haFormatted && r.rawNumeric != null) {
            value = this._formatNumber(r.rawNumeric);
        }
        return { value, unit };
    }
    _resolveButtonText(hass, button, txt, ctx) {
        const hasFormat = txt.format !== undefined;
        const tight = hasFormat || txt.fancy_unit === true;
        if (txt.entity) {
            const r = this._resolveSensorValue(hass, txt.entity, txt.attribute);
            const { value, unit } = this._reshapeValue(hass, r, txt, hasFormat, ctx.lang, txt.entity, txt.attribute);
            return { value, unit, tight, sig: `e:${txt.entity}|${txt.attribute || ''}|${txt.precision ?? ''}|${value}${unit}` };
        }
        if (txt.text !== undefined && txt.text !== '') {
            const value = String(txt.text);
            return { value, unit: hasFormat ? txt.format : '', tight: true, sig: `t:${value}|${hasFormat ? txt.format : ''}` };
        }
        if (txt.attribute) {
            if (ctx.isForecast) {
                if (!ctx.forecastEntry) return { value: '', unit: '', tight: true, sig: 'forecast:loading' };
                if (txt.attribute === 'datetime') {
                    const value = ctx.forecastDatetime ? forecastLabel(ctx.forecastDatetime, button.forecast !== 'hourly', ctx.lang) : '';
                    return { value, unit: hasFormat ? txt.format : '', tight: true, sig: `forecast:datetime|${value}` };
                }
                const raw = ctx.forecastEntry[txt.attribute];
                if (raw == null) return { value: 'N/A', unit: '', tight: true, sig: `forecast:${txt.attribute}|na` };
                if (txt.attribute === 'condition' && typeof raw === 'string') {
                    const value = (typeof hass.localize === 'function' && hass.localize(`component.weather.entity_component._.state.${raw}`)) || raw;
                    return { value, unit: hasFormat ? txt.format : '', tight: true, sig: `forecast:condition|${value}` };
                }
                let value = String(raw), unit = hasFormat ? txt.format : '';
                if (raw !== '' && !isNaN(parseFloat(raw)) && isFinite(raw)) {
                    const precision = txt.precision !== undefined ? txt.precision : 0;
                    value = this._formatNumber(raw, this._getForecastFormat(ctx.lang, precision));
                    if (!hasFormat) {
                        const w = hass.states[button.entity] && hass.states[button.entity].attributes;
                        unit = (w && w[`${txt.attribute}_unit`]) || (_FORECAST_UNIT_MAP[txt.attribute] && w && w[_FORECAST_UNIT_MAP[txt.attribute]]) || _FORECAST_UNIT_FALLBACK[txt.attribute] || '';
                    }
                }
                return { value, unit, tight: hasFormat || txt.fancy_unit === true, sig: `forecast:${txt.attribute}|${value}${unit}` };
            }
            const r = this._resolveSensorValue(hass, button.entity, txt.attribute);
            const { value, unit } = this._reshapeValue(hass, r, txt, hasFormat, ctx.lang, button.entity, txt.attribute);
            return { value, unit, tight, sig: `a:${txt.attribute}|${txt.precision ?? ''}|${value}${unit}` };
        }
        const { value, unit } = ctx.primaryResolved
            ? this._reshapeValue(hass, ctx.primaryResolved, txt, hasFormat, ctx.lang, button.entity, button.attribute)
            : { value: ctx.formatted, unit: hasFormat ? txt.format : ctx.unit };
        return { value, unit, tight, sig: `v:${value}${unit}` };
    }
    _getForecastFormat(lang, precision) {
        const key = `${lang}|${precision}`;
        if ((this._forecastFormatCache && this._forecastFormatCache[0]) === key) return this._forecastFormatCache[1];
        const fmt = new Intl.NumberFormat(lang, { maximumFractionDigits: precision, minimumFractionDigits: 0 });
        this._forecastFormatCache = [key, fmt];
        return fmt;
    }
    _cssVar(el, prop, val, cacheKey) {
        if (!this._cssVarCache) this._cssVarCache = {};
        if (this._cssVarCache[cacheKey] === val) return;
        this._cssVarCache[cacheKey] = val;
        if (val) el.style.setProperty(prop, val);
        else el.style.removeProperty(prop);
    }
    _formatNumber(raw, fmt) {
        if (raw === null || raw === '' || isNaN(parseFloat(raw)) || !isFinite(raw)) return String(raw ?? '');
        const f = fmt || this._numFmt;
        return f ? f.format(raw) : String(raw);
    }
    _extractUnit(hass, entityId, attribute) {
        const sensor = hass && hass.states[entityId];
        if (!sensor) return '';
        if (attribute) return sensor.attributes[`${attribute}_unit`] || sensor.attributes.unit_of_measurement || '';
        return sensor.attributes.unit_of_measurement || '';
    }
    _evaluateCondition(c, hass) {
        if (!c || !c.condition) return true;
        switch (c.condition) {
            case 'state': {
                if (!c.entity) return true;
                const stateObj = hass.states[c.entity];
                if (!stateObj) return false;
                const val = stateObj.state;
                if (c.state != null) {
                    const match = Array.isArray(c.state) ? c.state : [c.state];
                    return match.some(s => String(s) === val);
                }
                if (c.state_not != null) {
                    const match = Array.isArray(c.state_not) ? c.state_not : [c.state_not];
                    return match.every(s => String(s) !== val);
                }
                return true;
            }
            case 'numeric_state': {
                if (!c.entity) return true;
                const stateObj = hass.states[c.entity];
                if (!stateObj) return false;
                const raw = c.attribute ? stateObj.attributes[c.attribute] : stateObj.state;
                const val = parseFloat(raw);
                if (isNaN(val)) return false;
                if (c.above != null && val <= parseFloat(c.above)) return false;
                if (c.below != null && val >= parseFloat(c.below)) return false;
                return true;
            }
            case 'screen': {
                if (!c.media_query) return true;
                return window.matchMedia(c.media_query).matches;
            }
            case 'user': {
                if (!Array.isArray(c.users) || !hass.user) return true;
                return c.users.includes(hass.user.id);
            }
            case 'and': {
                if (!Array.isArray(c.conditions)) return true;
                return c.conditions.every(sub => this._evaluateCondition(sub, hass));
            }
            case 'or': {
                if (!Array.isArray(c.conditions)) return true;
                return c.conditions.some(sub => this._evaluateCondition(sub, hass));
            }
            case 'not': {
                if (!Array.isArray(c.conditions)) return true;
                return c.conditions.every(sub => !this._evaluateCondition(sub, hass));
            }
            default:
                return true;
        }
    }
    _checkButtonVisibility(button, hass) {
        return !Array.isArray(button.visibility) || !button.visibility.length || button.visibility.every(c => this._evaluateCondition(c, hass));
    }
    _hasSnapshotChanged(prev, next) {
        for (const k in next) if (prev[k] !== next[k]) return true;
        return false;
    }
    static _buildStyles() {
        return `
            @property --origami-ring-pct { syntax: '<percentage>'; inherits: true; initial-value: 0%; }
            @property --origami-sun-core { syntax: '<color>'; inherits: true; initial-value: rgb(255,255,255); }
            @property --origami-sun-inner { syntax: '<color>'; inherits: true; initial-value: rgb(255,250,240); }
            @property --origami-sun-mid { syntax: '<color>'; inherits: true; initial-value: rgb(255,237,200); }
            @property --origami-sun-edge { syntax: '<color>'; inherits: true; initial-value: rgb(255,219,158); }
            @property --origami-sun-glow-inner { syntax: '<color>'; inherits: true; initial-value: rgb(255,200,124); }
            @property --origami-sun-glow-outer { syntax: '<color>'; inherits: true; initial-value: rgb(255,238,210); }
            :host { display: block; width: 100%; position: relative; background: transparent !important; }
            #card-root { position: relative; width: 100%; height: 100%; z-index: var(--origami-stack-order, 1); overflow: hidden; overflow: clip; background: transparent; display: block; transform: translateZ(0); contain: layout style paint; border-radius: var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)); box-shadow: var(--ha-card-box-shadow, none); background-color: transparent; border-width: var(--origami-card-border-width, var(--ha-card-border-width, 0px)); border-style: solid; border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0)); box-sizing: border-box; }
            #card-root.clickable { cursor: pointer; -webkit-tap-highlight-color: transparent; }
            #card-root.clickable:active { transform: scale(0.98); transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1); }
            #card-root.clickable:not(:active) { transition: transform 0.4s cubic-bezier(0.2, 0, 0.2, 1); }
            #card-root.scheme-light { --origami-text-color: var(--origami-text-light, #2c2c2e); --_button-shadow-avail: var(--origami-button-text-shadow, var(--origami-text-shadow-light, 0 1px 2px rgba(255, 255, 255, 0.85), 0 0 6px rgba(255, 255, 255, 0.5))); --_button-no-bg-shadow: none; --_text-bg: var(--ha-card-background, var(--card-background-color, var(--primary-background-color))); --_text-bg-border: var(--ha-card-border-color, var(--divider-color, rgba(0,0,0,0.08))); --_origami-shadow-preset: 0 1px 2px rgba(17, 24, 39, 0.08), 0 4px 12px rgba(17, 24, 39, 0.10); }
            #card-root.scheme-dark { --origami-text-color: var(--origami-text-dark, #ffffff); --_button-shadow-avail: var(--origami-button-text-shadow, var(--origami-text-shadow-dark, 0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.6))); --_button-no-bg-shadow: none; --_text-bg: var(--ha-card-background, var(--card-background-color, var(--primary-background-color))); --_text-bg-border: var(--ha-card-border-color, var(--divider-color, rgba(255,255,255,0.08))); --_origami-shadow-preset: 0 1px 2px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.45); }
            #card-root.has-custom-shadow { --_origami-shadow: var(--origami-shadow, var(--_origami-shadow-preset)); }
            #card-root:not(.has-custom-shadow) { --_origami-shadow: var(--origami-shadow, none); }
            #card-root { --_origami-button-shadow: var(--_origami-shadow); }
            #card-root.no-card-frame { border-radius: 0; box-shadow: none; border-width: 0; }
            :host(.full-width) { --origami-fw-gap: var(--origami-full-width-margin, var(--ha-view-sections-column-gap, var(--column-gap, 32px))); width: calc(100% + 2 * var(--origami-fw-gap)); max-width: none; }
            #card-root.edge-fade::before { content: ""; position: absolute; inset: 0; z-index: 4; pointer-events: none; border-radius: inherit; background: linear-gradient(to bottom, var(--origami-edge-fade-color, var(--primary-background-color, #111)) 0%, transparent var(--origami-edge-fade-size, 10%), transparent calc(100% - var(--origami-edge-fade-size, 10%)), var(--origami-edge-fade-color, var(--primary-background-color, #111)) 100%); }
            #card-root.is-offscreen .marquee-host .marquee-track { animation-play-state: paused; }
            #weather-bg { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 1; display: none; overflow: hidden; overflow: clip; }
            #weather-bg > img, #weather-bg > video { display: block; width: 100%; height: 100%; object-fit: cover; border: none; outline: none; filter: brightness(var(--origami-bg-brightness, 1)) saturate(var(--origami-bg-saturation, 1)) blur(var(--origami-bg-blur, 0px)); }
            #card-root.has-weather-bg #weather-bg { display: block; }
            #default-bg { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 1; display: none; overflow: hidden; overflow: clip; transition: filter 1.8s ease; }
            #card-root.has-bg-filter #default-bg { filter: brightness(var(--origami-bg-brightness, 1)) saturate(var(--origami-bg-saturation, 1)); }
            #sky-base { position: absolute; inset: 0; border-radius: inherit; transition: background 1.5s ease; }
            #card-root.scheme-light #sky-base { background: var(--origami-default-bg-light, linear-gradient(125deg, #bdd8ee 0%, #d3e6f2 55%, #e4f0f7 100%)); }
            #card-root.scheme-dark #sky-base { background: var(--origami-default-bg-dark, linear-gradient(125deg, #0b1830 0%, #10203c 55%, #152a4c 100%)); }
            .sky-haze { position: absolute; inset: -25%; border-radius: inherit; transform: scale(var(--origami-haze-scale, 1)); transition: transform 2.5s ease; }
            #card-root.no-haze .sky-haze { display: none; }
            @property --origami-haze-c { syntax: '<color>'; inherits: false; initial-value: transparent; }
            @property --origami-haze-core { syntax: '<color>'; inherits: false; initial-value: transparent; }
            .haze-layer { position: absolute; border-radius: 50%; transition: --origami-haze-c 1.5s ease, --origami-haze-core 1.5s ease; background: radial-gradient(ellipse closest-side at 50% 50%, var(--origami-haze-core) 0%, color-mix(in srgb, var(--origami-haze-c) 90%, transparent) 16%, color-mix(in srgb, var(--origami-haze-c) 65%, transparent) 32%, color-mix(in srgb, var(--origami-haze-c) 50%, transparent) 48%, color-mix(in srgb, var(--origami-haze-c) 36%, transparent) 64%, color-mix(in srgb, var(--origami-haze-c) 24%, transparent) 78%, color-mix(in srgb, var(--origami-haze-c) 13%, transparent) 88%, color-mix(in srgb, var(--origami-haze-c) 5%, transparent) 95%, transparent 100%); }
            #card-root.is-offscreen .haze-layer { animation-play-state: paused; }
            .haze-layer.h1 { width: 88%; height: 82%; left: -22%; top: -20%; --origami-haze-core: var(--origami-haze1-core, rgba(88,176,220,0.62)); --origami-haze-c: var(--origami-haze1-c, rgba(88,176,220,0.62)); animation: wbkW1 19s ease-in-out infinite, wbkS1 15s ease-in-out infinite, wbkO1 17s ease-in-out infinite; }
            .haze-layer.h2 { width: 72%; height: 78%; left: 52%; top: 30%; --origami-haze-core: var(--origami-haze2-core, rgba(255,255,250,0.98)); --origami-haze-c: var(--origami-haze2-c, rgba(214,234,250,0.80)); animation: wbkW2 16s ease-in-out infinite, wbkS2 21s ease-in-out infinite, wbkR3 20s ease-in-out infinite, wbkO2 19s ease-in-out infinite; }
            .haze-layer.h3 { width: 80%; height: 74%; left: 8%; top: 44%; --origami-haze-core: var(--origami-haze3-core, rgba(96,140,214,0.60)); --origami-haze-c: var(--origami-haze3-c, rgba(96,140,214,0.60)); animation: wbkW3 22s ease-in-out infinite, wbkS3 18s ease-in-out infinite, wbkO3 24s ease-in-out infinite; }
            @keyframes wbkW1 { 0% { translate: 0% 0%; } 30% { translate: 22% 16%; } 55% { translate: 40% 4%; } 80% { translate: 14% 22%; } 100% { translate: 0% 0%; } }
            @keyframes wbkW2 { 0% { translate: 0% 0%; } 25% { translate: -34% -18%; } 50% { translate: -56% 8%; } 70% { translate: -24% -24%; } 100% { translate: 0% 0%; } }
            @keyframes wbkW3 { 0% { translate: 0% 0%; } 20% { translate: -38% 20%; } 45% { translate: -64% 6%; } 75% { translate: -26% 28%; } 100% { translate: 0% 0%; } }
            @keyframes wbkS1 { 0%, 100% { scale: 1; } 50% { scale: 1.14; } }
            @keyframes wbkS2 { 0%, 100% { scale: 1.06; } 40% { scale: 0.9; } 75% { scale: 1.02; } }
            @keyframes wbkS3 { 0%, 100% { scale: 0.94; } 35% { scale: 1.22; } 70% { scale: 1.0; } }
            @keyframes wbkR3 { 0%, 100% { rotate: -13deg; } 50% { rotate: 21deg; } }
            @keyframes wbkO1 { 0%, 100% { opacity: 0.82; } 45% { opacity: 1; } }
            @keyframes wbkO2 { 0%, 100% { opacity: 1; } 55% { opacity: 0.78; } }
            @keyframes wbkO3 { 0%, 100% { opacity: 0.88; } 40% { opacity: 1; } 72% { opacity: 0.8; } }
            #card-root.has-default-bg #default-bg { display: block; }
            #sun-moon-layer { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 2; overflow: hidden; overflow: clip; display: none; transition: opacity 2s ease; }
            #card-root.has-sun-moon #sun-moon-layer { display: block; }
            #sun-moon { position: absolute; z-index: 1; left: var(--origami-sun-moon-x, 50%); top: clamp(calc(var(--origami-sun-moon-size, 80px) / 2 + 6px), var(--origami-sun-moon-y, 100%), 100%); width: var(--origami-sun-moon-size, 80px); height: var(--origami-sun-moon-size, 80px); transform: translate(-50%, -50%); transition: top 2.5s cubic-bezier(0.33, 0, 0.2, 1), --origami-sun-core 2.5s linear, --origami-sun-inner 2.5s linear, --origami-sun-mid 2.5s linear, --origami-sun-edge 2.5s linear, --origami-sun-glow-inner 2.5s linear, --origami-sun-glow-outer 2.5s linear; }
            #sun-moon .sun, #sun-moon .moon { position: absolute; inset: 0; transition: opacity 1.6s ease; }
            #sun-moon .sun-glow, #sun-moon .moon-glow { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 50%; will-change: transform; opacity: var(--origami-sun-moon-glow-opacity, 1); transition: opacity 2s ease; }
            #sun-moon .sun-glow { width: 380%; height: 380%; filter: blur(5px);
                background: radial-gradient(circle farthest-side at 50% 50%,
                    var(--origami-sun-glow-inner) 0%,
                    color-mix(in srgb, var(--origami-sun-glow-inner) 90%, transparent) 12%,
                    color-mix(in srgb, var(--origami-sun-glow-inner) 78%, transparent) 20%,
                    color-mix(in srgb, var(--origami-sun-glow-inner) 68%, transparent) 26%,
                    color-mix(in srgb, var(--origami-sun-glow-inner) 49%, transparent) 34%,
                    color-mix(in srgb, var(--origami-sun-glow-outer) 35%, transparent) 42%,
                    color-mix(in srgb, var(--origami-sun-glow-outer) 22%, transparent) 52%,
                    color-mix(in srgb, var(--origami-sun-glow-outer) 14%, transparent) 62%,
                    color-mix(in srgb, var(--origami-sun-glow-outer) 8%, transparent) 72%,
                    color-mix(in srgb, var(--origami-sun-glow-outer) 4%, transparent) 82%,
                    color-mix(in srgb, var(--origami-sun-glow-outer) 1.5%, transparent) 91%,
                    transparent 100%);
                animation: wbkSunGlow 6s ease-in-out infinite; }
            #sun-moon .sun-disc { position: absolute; inset: 0; border-radius: 50%;
                background:
                    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 40%),
                    radial-gradient(circle at 50% 50%,
                        var(--origami-sun-core) 0%,
                        var(--origami-sun-core) 24%,
                        var(--origami-sun-inner) 34%,
                        color-mix(in srgb, var(--origami-sun-inner) 82%, transparent) 44%,
                        color-mix(in srgb, var(--origami-sun-mid) 42%, transparent) 54%,
                        color-mix(in srgb, var(--origami-sun-mid) 22%, transparent) 64%,
                        color-mix(in srgb, var(--origami-sun-edge) 11%, transparent) 75%,
                        color-mix(in srgb, var(--origami-sun-edge) 5%, transparent) 86%,
                        transparent 100%); }
            #sun-moon .sun-disc::before { content: ""; position: absolute; inset: 18% -80%; border-radius: 50%; mix-blend-mode: screen; opacity: 0.5;
                background: radial-gradient(ellipse at 50% 50%, rgba(255,250,238,0.5) 0%, rgba(255,244,220,0.16) 38%, rgba(255,244,220,0) 70%);
                animation: wbkSunStreak 8s ease-in-out infinite; will-change: opacity; }
            #sun-moon .sun-disc::after { content: ""; position: absolute; left: 50%; top: 50%; width: 54%; height: 54%; transform: translate(-50%, -50%); border-radius: 50%;
                background: radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.9) 38%, rgba(255,253,246,0) 74%);
                mix-blend-mode: screen; animation: wbkSunCore 4s ease-in-out infinite; will-change: transform, opacity; }
            #sun-moon .moon-glow { width: 280%; height: 280%; --_moon-glow: rgba(220,232,252,0.46); opacity: calc(var(--origami-moon-phase-glow, 1) * var(--origami-sun-moon-glow-opacity, 1));
                background: radial-gradient(circle farthest-side at 50% 50%,
                    color-mix(in srgb, var(--_moon-glow) 92%, transparent) 0%,
                    color-mix(in srgb, var(--_moon-glow) 78%, transparent) 15%,
                    color-mix(in srgb, var(--_moon-glow) 64%, transparent) 26%,
                    color-mix(in srgb, var(--_moon-glow) 50%, transparent) 36%,
                    color-mix(in srgb, var(--_moon-glow) 36%, transparent) 47%,
                    color-mix(in srgb, var(--_moon-glow) 24%, transparent) 58%,
                    color-mix(in srgb, var(--_moon-glow) 13%, transparent) 70%,
                    color-mix(in srgb, var(--_moon-glow) 6%, transparent) 81%,
                    color-mix(in srgb, var(--_moon-glow) 2%, transparent) 91%,
                    transparent 100%);
                animation: wbkMoonGlow 14s ease-in-out infinite; }
            #card-root.scheme-light #sun-moon .moon-glow { --_moon-glow: rgba(190,208,234,0.34); }
            #sun-moon .moon-disc { position: absolute; inset: 0; width: 100%; height: 100%; }
            #sun-moon .moon-image { display: none; }
            #sun-moon.has-moon-image .moon-image { display: inline; filter: brightness(1.6) contrast(1.35) saturate(0.1) sepia(0.12); mix-blend-mode: luminosity; opacity: 0.88; }
            #card-root.scheme-light #sun-moon.has-moon-image .moon-image { filter: brightness(2.0) contrast(1.2) saturate(0.08) sepia(0.15); mix-blend-mode: luminosity; opacity: 0.72; }
            #sun-moon .moon-surface { fill-opacity: 1; }
            #card-root.scheme-light #sun-moon .moon-surface { fill-opacity: 0.90; }
            #sun-moon .moon { opacity: 0; }
            #sun-moon.is-astro-night .sun { opacity: 0; }
            #sun-moon.is-astro-night .moon { opacity: 1; }
            #sun-moon.is-astro-night .sun-glow, #sun-moon.is-astro-night .sun-disc::before, #sun-moon.is-astro-night .sun-disc::after { animation: none; }
            #sun-moon:not(.is-astro-night) .moon-glow { animation: none; }
            #card-root.is-offscreen #sun-moon :is(.sun-glow, .moon-glow) { animation-play-state: paused; }
            #card-root.is-offscreen #sun-moon .sun-disc::before, #card-root.is-offscreen #sun-moon .sun-disc::after { animation-play-state: paused; }
            @keyframes wbkSunGlow { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.06); } }
            @keyframes wbkMoonGlow { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.05); } }
            @keyframes wbkSunStreak { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.58; } }
            @keyframes wbkSunCore { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; } 50% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; } }
            #sun-rays { position: absolute; inset: 0; z-index: 0; display: none;
                opacity: var(--origami-sun-rays-opacity, 0); transition: opacity 2.5s ease;
                --_rx: var(--origami-sun-moon-x, 50%);
                --_ry: clamp(calc(var(--origami-sun-moon-size, 80px) / 2 + 6px), var(--origami-sun-moon-y, 100%), 100%);
                --_rr: calc(var(--origami-sun-moon-size, 80px) * 5); }
            #card-root.has-sun-rays #sun-rays { display: block; }
            #sun-rays::before, #sun-rays::after { content: ""; position: absolute; inset: 0;
                mix-blend-mode: multiply;
                -webkit-mask-image: radial-gradient(circle var(--_rr) at var(--_rx) var(--_ry), transparent 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.7) 42%, rgba(0,0,0,0.28) 58%, rgba(0,0,0,0.08) 74%, transparent 88%);
                mask-image: radial-gradient(circle var(--_rr) at var(--_rx) var(--_ry), transparent 0%, rgba(0,0,0,0.5) 8%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.7) 42%, rgba(0,0,0,0.28) 58%, rgba(0,0,0,0.08) 74%, transparent 88%); }
            #sun-rays::before { background: conic-gradient(from 12deg at var(--_rx) var(--_ry),
                    transparent 0deg, var(--origami-sun-ray-tint, rgb(169,190,212)) 24deg, transparent 58deg,
                    transparent 84deg, var(--origami-sun-ray-tint, rgb(169,190,212)) 116deg, transparent 141deg,
                    transparent 172deg, var(--origami-sun-ray-tint, rgb(169,190,212)) 199deg, transparent 233deg,
                    transparent 262deg, var(--origami-sun-ray-tint, rgb(169,190,212)) 297deg, transparent 331deg,
                    transparent 360deg); }
            #sun-rays::after { background: conic-gradient(from 47deg at var(--_rx) var(--_ry),
                    transparent 0deg, var(--origami-sun-ray-tint-far, rgb(198,213,229)) 38deg, transparent 88deg,
                    transparent 150deg, var(--origami-sun-ray-tint-far, rgb(198,213,229)) 190deg, transparent 236deg,
                    transparent 290deg, var(--origami-sun-ray-tint-far, rgb(198,213,229)) 322deg, transparent 358deg,
                    transparent 360deg); }
            #card-root.has-sun-rays #sun-moon-layer::before { content: ""; position: absolute; inset: 0; z-index: 0;
                opacity: calc(var(--origami-sun-rays-opacity, 0) * 0.9);
                background: conic-gradient(from 78deg at var(--origami-sun-moon-x, 50%) clamp(calc(var(--origami-sun-moon-size, 80px) / 2 + 6px), var(--origami-sun-moon-y, 100%), 100%),
                    transparent 0deg, var(--origami-sun-ray-shine, rgba(255,250,240,0.17)) 34deg, transparent 82deg,
                    transparent 148deg, var(--origami-sun-ray-shine, rgba(255,250,240,0.17)) 192deg, transparent 238deg,
                    transparent 292deg, var(--origami-sun-ray-shine, rgba(255,250,240,0.17)) 328deg, transparent 360deg);
                -webkit-mask-image: radial-gradient(circle calc(var(--origami-sun-moon-size, 80px) * 5) at var(--origami-sun-moon-x, 50%) clamp(calc(var(--origami-sun-moon-size, 80px) / 2 + 6px), var(--origami-sun-moon-y, 100%), 100%), transparent 0%, rgba(0,0,0,0.9) 16%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,0.15) 70%, transparent 90%);
                mask-image: radial-gradient(circle calc(var(--origami-sun-moon-size, 80px) * 5) at var(--origami-sun-moon-x, 50%) clamp(calc(var(--origami-sun-moon-size, 80px) / 2 + 6px), var(--origami-sun-moon-y, 100%), 100%), transparent 0%, rgba(0,0,0,0.9) 16%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,0.15) 70%, transparent 90%);
                animation: wbkRayShine 19s ease-in-out infinite; }
            #card-root.scheme-dark #sun-rays::before, #card-root.scheme-dark #sun-rays::after { mix-blend-mode: screen; }
            #card-root.scheme-dark { --origami-sun-ray-shine: rgba(178,204,248,0.14); }
            #card-root.is-offscreen #sun-moon-layer::before { animation-play-state: paused; }
            @keyframes wbkRayShine { 0%, 100% { opacity: calc(var(--origami-sun-rays-opacity, 0) * 0.35); } 50% { opacity: calc(var(--origami-sun-rays-opacity, 0) * 0.9); } }
            #content-layer { position: relative; display: flex; flex-direction: var(--origami-content-direction, column); justify-content: var(--origami-content-align, flex-start); align-items: var(--origami-content-align-items, stretch); padding: var(--_origami-pad-v, var(--origami-card-padding, 16px)) var(--_origami-pad-h, var(--origami-card-padding, 16px)); box-sizing: border-box; pointer-events: none; overflow: visible; z-index: 5; }
            #content-layer.direction-row { flex-wrap: wrap; }
            #content-layer.direction-row > .buttons-group, #content-layer.direction-row > .cards-group { flex: 1 1 0; min-width: 0; }
            #content-layer > .buttons-group.has-custom-width, #content-layer > .cards-group.has-custom-width { flex: 0 0 auto; width: var(--origami-container-width); align-self: auto; }
            #card-root.fixed-height #content-layer { position: absolute; inset: 0; height: 100%; }
            #card-root.fixed-height { --_origami-vscroll-fill: calc(100% - var(--_origami-pad-v, var(--origami-card-padding, 16px)) * 2); }
            #free-layer { position: absolute; inset: var(--_origami-pad-v, var(--origami-card-padding, 16px)) var(--_origami-pad-h, var(--origami-card-padding, 16px)); pointer-events: none; box-sizing: border-box; overflow: visible; z-index: 6; }
            #free-layer > .buttons-group.free-positioned { position: absolute; max-width: 100%; }
            #free-layer > .buttons-group.free-positioned.has-custom-width { width: var(--origami-container-width); }
            .buttons-group { pointer-events: none; font-family: var(--primary-font-family, sans-serif); transition: color 0.3s ease, text-shadow 0.3s ease; min-width: 0; box-sizing: border-box; }
            .buttons-row { color: var(--origami-text-color); }
            .buttons-group { pointer-events: auto; box-sizing: border-box; padding: var(--origami-container-padding, 0); margin: var(--origami-container-margin, 0); }
            .buttons-group.has-row-horizontal-scroll { height: var(--origami-row-height, auto); }
            .buttons-group.has-row-vertical-scroll { height: var(--origami-row-height, var(--_origami-vscroll-fill, auto)); }
            .buttons-group.grouped { border-radius: var(--origami-bottom-bg-radius, calc(var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)) - 5px)); }
            .buttons-group.grouped.with-bg { --_bg: var(--origami-container-bg-color, var(--origami-bottom-bg-color, var(--_text-bg))); background: var(--_bg); border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-group-shadow, var(--_origami-shadow)); }
            :where(.buttons-group.grouped, .button).with-bg.blurred { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .buttons-group.grouped.with-bg > .buttons-row .button.with-bg { background: none; border: none; box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none; border-radius: 0; padding: var(--origami-buttons-padding, 0); }
            .buttons-row.has-separator:not(.row-grid) > .button { position: relative; overflow: visible; }
            .buttons-row.has-separator:not(.row-grid) > .button + .button::before { content: ""; position: absolute; pointer-events: none; top: 0; bottom: 0; inset-inline-start: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); width: var(--origami-separator-width, 2px); background: var(--origami-separator-color, color-mix(in srgb, currentColor 10%, transparent)); }
            .buttons-row.has-separator:not(.row-grid).row-vertical-scroll > .button + .button::before { top: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); bottom: auto; left: 0; right: 0; inset-inline-start: 0; width: auto; height: var(--origami-separator-width, 2px); }
            .buttons-row { font-size: var(--origami-bottom-font-size, 16px); font-weight: var(--origami-bottom-font-weight, 500); display: flex; align-items: var(--origami-row-align, center); gap: var(--origami-bottom-gap, 8px); width: 100%; box-sizing: border-box; pointer-events: auto; border-radius: inherit; }
            .buttons-row.row-wrap { flex-wrap: wrap; justify-content: var(--origami-row-justify, flex-start); }
            .buttons-row.row-horizontal-scroll { flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden; height: 100%; scroll-snap-type: x proximity; scrollbar-width: none; -ms-overflow-style: none; pointer-events: auto; }
            .buttons-row.row-horizontal-scroll::-webkit-scrollbar { display: none; }
            .buttons-row.row-horizontal-scroll.has-visible-count { display: grid; grid-auto-flow: column; grid-auto-columns: var(--origami-button-basis); scroll-snap-type: x mandatory; }
            .buttons-row.row-horizontal-scroll.has-visible-count > .button { width: 100%; scroll-snap-align: start; }
            .buttons-row.row-vertical-scroll { flex-direction: column; flex-wrap: nowrap; overflow-y: auto; overflow-x: hidden; height: 100%; max-height: var(--origami-row-max-height, none); scroll-snap-type: y proximity; scrollbar-width: none; -ms-overflow-style: none; pointer-events: auto; }
            .buttons-row.row-vertical-scroll::-webkit-scrollbar { display: none; }
            .buttons-row.row-vertical-scroll.has-visible-count { display: grid; grid-auto-flow: row; grid-auto-rows: var(--origami-button-basis-v, auto); max-height: none; scroll-snap-type: y mandatory; }
            .buttons-row.row-vertical-scroll.has-visible-count > .button { height: 100%; scroll-snap-align: start; }
            .buttons-row.row-grid { display: grid; grid-template-columns: repeat(var(--origami-row-columns, 1), minmax(0, 1fr)); align-items: stretch; row-gap: var(--origami-bottom-gap, 8px); column-gap: var(--origami-bottom-gap, 8px); }
            .buttons-row.row-grid,
            .buttons-row.has-visible-count { align-items: stretch; }
            .buttons-row.row-grid > .button,
            .buttons-row.has-visible-count > .button { overflow: hidden; }
            .buttons-row.align-start:where(.row-grid, .has-visible-count) > .button:not(.align-start, .align-center, .align-end, .align-spread) { justify-content: flex-start; text-align: start; }
            .buttons-row.align-center:where(.row-grid, .has-visible-count) > .button:not(.align-start, .align-center, .align-end, .align-spread) { justify-content: center; text-align: center; }
            .buttons-row.align-end:where(.row-grid, .has-visible-count) > .button:not(.align-start, .align-center, .align-end, .align-spread) { justify-content: flex-end; text-align: end; }
            .buttons-row.align-center > .button:not(.format-vertical, .align-start, .align-center, .align-end, .align-spread) { justify-content: center; }
            .buttons-row.align-spread > .button:not(.format-vertical, .align-start, .align-center, .align-end, .align-spread) { flex: 1 1 0; justify-content: flex-start; }
            .buttons-row.align-spread > .button:not(.format-vertical, .align-start, .align-center, .align-end, .align-spread) > .button-text:last-child { margin-left: auto; }
            .buttons-row.align-start > .button.format-vertical:not(.align-start, .align-center, .align-end, .align-spread) { align-items: flex-start; text-align: start; }
            .buttons-row.align-end > .button.format-vertical:not(.align-start, .align-center, .align-end, .align-spread) { align-items: flex-end; text-align: end; }
            .buttons-row.has-visible-count > .button.format-vertical { align-content: center; }
            .button { display: flex; flex-direction: row; align-items: center; row-gap: var(--origami-button-gap, 6px); column-gap: var(--origami-button-text-gap, var(--origami-button-gap, 0.40em)); flex-wrap: nowrap; flex: 0 0 auto; min-width: 0; max-width: 100%; white-space: nowrap; box-sizing: border-box; scroll-snap-align: start; padding: var(--origami-buttons-padding, 0); cursor: pointer; -webkit-tap-highlight-color: transparent; transition: transform 0.4s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.2, 0, 0.2, 1); }
            .button:active { transform: scale(0.94); opacity: 0.75; transition: transform 0.12s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.12s cubic-bezier(0.2, 0, 0.2, 1); }
            .button .button-icon { flex: 0 0 auto; display: flex; align-items: center; justify-content: center; padding: var(--weather-icon-padding, 0); }
            .button .button-icon ha-icon,
            .button .button-icon ha-state-icon { --mdc-icon-size: var(--weather-icon-size, 1.1em); opacity: 0.9; }
            .button .button-icon svg.weather-icon { display: block; width: var(--weather-icon-size, 1.1em); height: var(--weather-icon-size, 1.1em); opacity: 0.9; }
            .button .button-icon img.custom-bottom-icon { display: block; height: var(--weather-icon-size, 1.1em); width: var(--weather-icon-size, 1.1em); object-fit: contain; }
            .button .button-text { flex: 0 1 auto; min-width: 0; max-width: 100%; line-height: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: var(--_button-no-bg-shadow, none); padding-block: 0.1em; margin-block: -0.1em; }
            .button .button-text:empty { display: none; }
            .button .button-text.marquee-host { flex: 1 1 auto; }
            .button .button-text .fancy-unit { font-size: 0.55em; font-weight: 500; opacity: 0.7; vertical-align: baseline; position: relative; top: -0.45em; margin-left: 3px; }
            .button.icon-only { column-gap: 0; row-gap: 0; }
            .button.with-bg { --_bg: var(--origami-bottom-bg-color, var(--_text-bg)); background: var(--_bg); padding: var(--origami-buttons-padding, 5px 10px); text-shadow: none; border-radius: var(--origami-bottom-bg-radius, calc(var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)) - 5px)); align-items: center; border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); }
            .button.with-bg.blurred { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .button.with-bg .button-text { text-shadow: none; }
            #weather-effects { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: 3; display: none; }
            #card-root.has-weather-effects #weather-effects { display: block; }
            #star-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: 2; display: none; }
            #card-root.has-star-canvas #star-canvas { display: block; }
            .button.has-tint { position: relative; }
            .button.has-tint::after { content: ""; position: absolute; inset: 0; border-radius: inherit; background: var(--origami-button-tint); opacity: 0.18; pointer-events: none; transition: background 0.4s ease; z-index: 0; }
            .button.has-tint > * { position: relative; z-index: 1; }
            .button.format-vertical { flex-direction: column; align-items: center; text-align: center; row-gap: var(--origami-button-gap, 6px); flex-wrap: nowrap; }
            .button.format-vertical .button-icon { aspect-ratio: 1; overflow: visible; border-radius: var(--origami-icon-bg-radius, calc(var(--origami-bottom-bg-radius, calc(var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)) - 5px)) - var(--origami-icon-bg-inset, 3px))); padding: var(--weather-icon-padding, 4px); }
            .button.format-vertical .button-icon ha-icon,
            .button.format-vertical .button-icon ha-state-icon { --mdc-icon-size: var(--weather-icon-size, 1.6em); }
            .button.format-vertical .button-icon img.custom-bottom-icon { height: var(--weather-icon-size, 1.6em); width: var(--weather-icon-size, 1.6em); }
            .button.format-vertical .button-icon svg.weather-icon { width: var(--weather-icon-size, 1.6em); height: var(--weather-icon-size, 1.6em); }
            .button.format-vertical.with-bg { padding: var(--origami-buttons-padding, 6px 10px); }
            .button.format-vertical:not(.has-icon-bg) .button-icon { background: none; border: none; box-shadow: none; aspect-ratio: unset; border-radius: 0; overflow: visible; padding: var(--weather-icon-padding, 0); }
            .button.align-center:not(.format-vertical) { justify-content: center; flex: 0 0 auto; text-align: center; }
            .button.align-end:not(.format-vertical) { justify-content: flex-end; text-align: end; }
            .button.align-spread:not(.format-vertical) { flex: 1 1 0; justify-content: space-between; }
            .button.align-start.format-vertical { align-items: flex-start; text-align: start; }
            .button.align-center.format-vertical { align-items: center; text-align: center; }
            .button.align-end.format-vertical { align-items: flex-end; text-align: end; }
            .button.no-icon-bg .button-icon { background: none !important; border: none !important; box-shadow: none !important; aspect-ratio: unset !important; border-radius: 0 !important; overflow: visible !important; padding: var(--weather-icon-padding, 0) !important; }
            .button.has-icon-bg .button-icon { aspect-ratio: 1; overflow: visible; border-radius: var(--origami-icon-bg-radius, calc(var(--origami-bottom-bg-radius, calc(var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)) - 5px)) - var(--origami-icon-bg-inset, 3px))); padding: var(--weather-icon-padding, 4px); align-self: stretch; }
            .button.has-icon-bg:not(.with-bg) .button-icon { background: var(--_bg, var(--origami-bottom-bg-color, var(--_text-bg))); border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); }
            .button.has-icon-bg:not(.with-bg).blurred .button-icon { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .button.has-icon-bg.with-bg .button-icon { background: var(--origami-icon-bg-color, color-mix(in srgb, var(--ha-card-background, var(--card-background-color, var(--primary-background-color))) 20%, transparent)); border: none; box-shadow: var(--_origami-button-shadow); }
            .button .button-icon.el-no-icon-bg { background: none !important; border: none !important; box-shadow: none !important; aspect-ratio: unset !important; border-radius: 0 !important; overflow: visible !important; padding: var(--weather-icon-padding, 0) !important; }
            .button .button-icon.el-icon-bg { aspect-ratio: 1; overflow: visible; border-radius: var(--origami-icon-bg-radius, calc(var(--origami-bottom-bg-radius, calc(var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)) - 5px)) - var(--origami-icon-bg-inset, 3px))); padding: var(--weather-icon-padding, 4px); align-self: stretch; }
            .button:not(.with-bg) .button-icon.el-icon-bg { background: var(--_bg, var(--origami-bottom-bg-color, var(--_text-bg))); border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); }
            .button.with-bg .button-icon.el-icon-bg { background: var(--origami-icon-bg-color, color-mix(in srgb, var(--ha-card-background, var(--card-background-color, var(--primary-background-color))) 20%, transparent)); border: none; box-shadow: var(--_origami-button-shadow); }
            .button.button-round.with-bg { border-radius: 999px; }
            .button.button-round .button-icon { border-radius: 999px; }
            .button.button-ring { position: relative; border-radius: 50%; aspect-ratio: 1; justify-content: center; align-content: center; z-index: 1; padding: var(--origami-buttons-padding, 10px); }
            .button.button-ring.with-bg { border-radius: 50%; padding: var(--origami-buttons-padding, 10px); }
            .button-ring-wrap { position: relative; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; scroll-snap-align: start; }
            .button-ring-wrap::before { content: ""; position: absolute; inset: 0; border-radius: 50%; background: var(--origami-ring-gradient, conic-gradient(var(--origami-ring-color, var(--primary-color, #03a9f4)) var(--origami-ring-pct, 0%), transparent 0)); -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - var(--origami-ring-w, 4px) - 0.5px), #000 calc(100% - var(--origami-ring-w, 4px))); mask: radial-gradient(farthest-side, transparent calc(100% - var(--origami-ring-w, 4px) - 0.5px), #000 calc(100% - var(--origami-ring-w, 4px))); transition: --origami-ring-pct 0.6s cubic-bezier(0.4, 0, 0.2, 1); pointer-events: none; z-index: 0; }
            .button-ring-wrap.has-segments::before { -webkit-mask: conic-gradient(#000 var(--origami-ring-pct, 0%), transparent 0), radial-gradient(farthest-side, transparent calc(100% - var(--origami-ring-w, 4px) - 0.5px), #000 calc(100% - var(--origami-ring-w, 4px))); mask: conic-gradient(#000 var(--origami-ring-pct, 0%), transparent 0), radial-gradient(farthest-side, transparent calc(100% - var(--origami-ring-w, 4px) - 0.5px), #000 calc(100% - var(--origami-ring-w, 4px))); -webkit-mask-composite: source-in; mask-composite: intersect; }
            .button-ring-track { position: absolute; inset: 0; border-radius: 50%; -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - var(--origami-ring-w, 4px) - 0.5px), #000 calc(100% - var(--origami-ring-w, 4px))); mask: radial-gradient(farthest-side, transparent calc(100% - var(--origami-ring-w, 4px) - 0.5px), #000 calc(100% - var(--origami-ring-w, 4px))); background: currentColor; opacity: 0.10; pointer-events: none; }
            .button-ring-wrap > .button { margin: var(--origami-ring-gap, 3px); z-index: 1; }
            .buttons-row.row-grid > .button-ring-wrap > .button,
            .buttons-row.has-visible-count > .button-ring-wrap > .button { width: calc(100% - var(--origami-ring-gap, 3px) * 2); }
            .buttons-row.row-grid > .button-ring-wrap { aspect-ratio: 1; }
            .button-bar { --_bar-radius: calc(var(--origami-card-border-radius, var(--ha-card-border-radius, 12px)) * 0.35); position: relative; width: 100%; height: var(--origami-bar-h, 4px); min-height: var(--origami-bar-h, 4px); border-radius: var(--_bar-radius); overflow: hidden; flex-shrink: 0; }
            .button-bar-track { position: absolute; inset: 0; border-radius: inherit; background: currentColor; opacity: 0.10; }
            .button-bar-fill { position: absolute; inset: 0; border-radius: inherit; background: var(--origami-bar-gradient, var(--origami-bar-color, var(--primary-color, #03a9f4))); transform-origin: left center; transform: scaleX(var(--origami-bar-scale, 0)); transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
            .button.button-bar-type { flex-wrap: wrap; }
            .button.button-bar-type.format-vertical { flex-wrap: nowrap; }
            .button.button-bar-type.format-vertical .button-bar { align-self: stretch; }
            .button.button-loading { position: relative; }
            .button.button-loading .button-icon,
            .button.button-loading .button-text,
            .button.button-loading .button-bar { visibility: hidden; }
            .button-ring-wrap.button-loading .button-ring-track,
            .button-ring-wrap.button-loading::before { visibility: hidden; }
            .button-loader { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 5px; pointer-events: none; }
            .button-loader span { width: 5px; height: 5px; border-radius: 50%; background: currentColor; opacity: 0.2; animation: dot-pulse 1.2s ease-in-out infinite; }
            .button-loader span:nth-child(2) { animation-delay: 0.2s; }
            .button-loader span:nth-child(3) { animation-delay: 0.4s; }
            @keyframes dot-pulse {
                0%, 60%, 100% { opacity: 0.2; transform: scale(0.85); }
                30% { opacity: 0.7; transform: scale(1); }
            }
            .button .button-text.marquee-host { overflow: hidden; text-overflow: clip; contain: layout style; }
            .button .button-text.marquee-host.is-animating { -webkit-mask-image: linear-gradient(to right, transparent 0, #000 var(--origami-marquee-fade, 12px), #000 calc(100% - var(--origami-marquee-fade, 12px)), transparent 100%); mask-image: linear-gradient(to right, transparent 0, #000 var(--origami-marquee-fade, 12px), #000 calc(100% - var(--origami-marquee-fade, 12px)), transparent 100%); }
            .marquee-track { display: inline-block; white-space: nowrap; }
            .marquee-text { display: inline; }
            .marquee-sep { display: inline-block; padding: 0 var(--marquee-sep-gap, 0.4em); opacity: 0.5; }
            .marquee-sep::before { content: var(--marquee-separator, "•"); }
            .marquee-host.is-animating .marquee-track { animation: marquee var(--origami-marquee-duration, 20s) linear infinite; }
            .marquee-host.marquee-rtl .marquee-track { animation-direction: reverse; }
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .cards-group { pointer-events: auto; align-self: stretch; box-sizing: border-box; }
            .cards-row { display: flex; flex-wrap: wrap; gap: 8px; pointer-events: none; }
            .cards-row > * { pointer-events: auto; }
`;
    }
    _initDOM() {
        if (this._initialized) return;
        this._initialized = true;
        if (!_sharedStyles) {
            _sharedStyles = new CSSStyleSheet();
            _sharedStyles.replaceSync(WeatherCard._buildStyles());
        }
        this.shadowRoot.adoptedStyleSheets = [_sharedStyles];
        const root = document.createElement('div'); root.id = 'card-root';
        root.innerHTML = `<div id="default-bg"><div id="sky-base"></div><div class="sky-haze"><div class="haze-layer h1"></div><div class="haze-layer h2"></div><div class="haze-layer h3"></div></div></div><div id="weather-bg"></div><canvas id="star-canvas"></canvas><div id="sun-moon-layer"><div id="sun-moon"><div class="sun"><div class="sun-glow"></div><div class="sun-disc"></div></div><div class="moon"><div class="moon-glow"></div><svg class="moon-disc" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="wbk-moon-surface" cx="38%" cy="34%" r="78%"><stop offset="0%" stop-color="#eef0f4"/><stop offset="45%" stop-color="#dce0e8"/><stop offset="100%" stop-color="#b8bcc6"/></radialGradient><clipPath id="wbk-moon-clip"><circle cx="50" cy="50" r="48"/></clipPath><clipPath id="wbk-moon-lit"><path class="moon-lit-path" d=""/></clipPath></defs><g clip-path="url(#wbk-moon-lit)"><circle class="moon-surface" cx="50" cy="50" r="48" fill="url(#wbk-moon-surface)"/><image class="moon-image" x="2" y="2" width="96" height="96" preserveAspectRatio="xMidYMid slice" clip-path="url(#wbk-moon-clip)"/></g></svg></div></div><div id="sun-rays"></div></div><canvas id="weather-effects"></canvas><div id="content-layer"></div><div id="free-layer"></div>`;
        this.shadowRoot.append(root);
        const q = (sel) => root.querySelector(sel);
        const contentLayer = q('#content-layer');
        contentLayer.addEventListener('click', (e) => this._handleButtonClick(e));
        const freeLayer = q('#free-layer');
        freeLayer.addEventListener('click', (e) => this._handleButtonClick(e));
        this._elements = {
            root,
            contentLayer,
            freeLayer,
            weatherBg: q('#weather-bg'),
            sunMoonLayer: q('#sun-moon-layer'),
            sunMoon: q('#sun-moon'),
            moonLitPath: q('.moon-lit-path'),
            moonImage: q('.moon-image'),
            defaultBg: q('#default-bg'),
            effectsCanvas: q('#weather-effects'),
            starCanvas: q('#star-canvas'),
            buttonContainerEls: [],
        };
        this._syncButtonContainerDOM();
        if (this.isConnected && this._resizeObserver) this._observeRoot();
    }
    _syncButtonContainerDOM() {
        if (!this._elements || !this._elements.contentLayer) return;
        const wanted = this._containers.length, current = this._elements.buttonContainerEls;
        while (current.length > wanted) {
            const removed = current.pop();
            removed.group.remove();
        }
        for (let i = 0; i < current.length; i++) {
            const container = this._containers[i];
            const isCard = !!container.custom_cards;
            const el = current[i];
            if (isCard !== !!el.isCard) {
                el.group.remove();
                current[i] = null;
            }
        }
        for (let i = 0; i < wanted; i++) {
            if (current[i]) { current[i].group.dataset.container = String(i); continue; }
            const container = this._containers[i];
            const isCard = !!container.custom_cards;
            const group = document.createElement('div');
            group.className = isCard ? 'cards-group' : 'buttons-group';
            group.dataset.container = String(i);
            const row = document.createElement('div');
            row.className = isCard ? 'cards-row' : 'buttons-row';
            group.appendChild(row);
            const entry = { group, row, isCard };
            if (i < current.length) current[i] = entry;
            else current.push(entry);
        }
    }
    _createContainerCards() {
        if (!this._elements) return;
        const expectedConfig = this._config;
        for (let ai = 0; ai < this._containers.length; ai++) {
            const container = this._containers[ai];
            if (!container.custom_cards) continue;
            const els = this._elements.buttonContainerEls[ai];
            if (!els) continue;
            els.row.innerHTML = '';
            const cards = container.custom_cards;
            if (!Array.isArray(cards) || !cards.length) continue;
            window.loadCardHelpers().then(helpers => {
                if (this._config !== expectedConfig) return;
                const row = els.row; if (!row) return;
                for (const cardConfig of cards) {
                    if (!cardConfig || !cardConfig.type) continue;
                    const el = helpers.createCardElement(cardConfig);
                    if (cardConfig.custom_width) { el.style.width = cardConfig.custom_width; el.style.flex = 'none'; }
                    if (cardConfig.custom_height !== undefined) {
                        let ch = String(cardConfig.custom_height).trim(); if (!isNaN(ch) && ch !== '') ch += 'px'; el.style.height = ch;
                    }
                    this._customCardElements.push(el); row.appendChild(el); if (this._hass) el.hass = this._hass;
                }
            });
        }
    }
    _updateSchemeStyles(weatherState) {
        const root = this._elements.root;
        root.classList.toggle('scheme-dark', this._schemeDark);
        root.classList.toggle('scheme-light', !this._schemeDark);
        const styleSig = `${this._schemeDark}_${weatherState}`;
        if (this._prevStyleSig === styleSig) return;
        this._prevStyleSig = styleSig;
        if (this._prevWeatherClass) root.classList.remove(this._prevWeatherClass);
        const cls = `weather-${weatherState}`;
        root.classList.add(cls);
        this._prevWeatherClass = cls;
    }
    _applyConfigStyles() {
        if (!this._elements || !this._elements.buttonContainerEls.length) return;
        const cfg = this._config;
        const root = this._elements.root;
        this._cssVar(root, '--origami-card-padding', normalizeLength(cfg.card_padding || ''), '_prevCardPadding');
        const bgB = cfg.bg_brightness != null ? String(cfg.bg_brightness) : '';
        const bgS = cfg.bg_saturation != null ? String(cfg.bg_saturation) : '';
        const bgBlur = cfg.bg_blur ? normalizeLength(cfg.bg_blur) : '';
        this._cssVar(root, '--origami-bg-brightness', bgB, '_prevBgBrightness');
        this._cssVar(root, '--origami-bg-saturation', bgS, '_prevBgSaturation');
        this._cssVar(root, '--origami-bg-blur', bgBlur, '_prevBgBlur');
        root.classList.toggle('has-bg-filter', !!bgB || !!bgS);
        const cardFrame = cfg.card_frame !== false;
        root.classList.toggle('no-card-frame', !cardFrame);
        const fw = cfg.full_width === true;
        this.classList.toggle('full-width', fw);
        const fwMargin = fw ? (cfg.full_width_margin || '').toString().trim() : '';
        this._cssVar(this, '--origami-full-width-margin', fwMargin ? normalizeLength(fwMargin) : '', '_prevFwMargin');
        const offsetRaw = (cfg.card_offset || '').toString().trim();
        const offsetParts = offsetRaw ? offsetRaw.split(/\s+/) : [];
        const oTop = offsetParts[0] || '0';
        const oRight = offsetParts[1] || offsetParts[0] || '0';
        const oBottom = offsetParts[2] || offsetParts[0] || '0';
        const oLeft = offsetParts[3] || offsetParts[1] || offsetParts[0] || '0';
        let marginVal;
        if (fw) {
            const gap = fwMargin ? normalizeLength(fwMargin) : 'var(--ha-view-sections-column-gap, var(--column-gap, 32px))';
            marginVal = `${oTop} calc(-1 * ${gap}) ${oBottom} calc(-1 * ${gap})`;
        } else if (offsetRaw) {
            marginVal = offsetRaw;
        } else {
            marginVal = '';
        }
        if (this._prevHostMargin !== marginVal) {
            this._prevHostMargin = marginVal;
            if (marginVal) this.style.margin = marginVal;
            else this.style.removeProperty('margin');
        }
        const ef = cfg.edge_fade === true;
        root.classList.toggle('edge-fade', ef);
        const efSize = ef ? (cfg.edge_fade_size || '').toString().trim() : '';
        this._cssVar(root, '--origami-edge-fade-size', efSize ? normalizeLength(efSize) : '', '_prevEdgeFadeSize');
        root.classList.toggle('has-custom-shadow', cfg.shadow !== false);
        root.classList.toggle('no-haze', cfg.background_haze === false);
        this._cssVar(root, '--origami-shadow', (cfg.shadow_color || '').toString().trim(), '_prevShadow');
        const caKey = (cfg.content_align || '').toString().toLowerCase();
        const caVal = JUSTIFY_MAP[caKey] || '';
        this._cssVar(root, '--origami-content-align', caVal, '_prevContentAlign');
        const isRow = (cfg.content_direction || '').toString().toLowerCase() === 'row';
        this._cssVar(root, '--origami-content-direction', isRow ? 'row' : '', '_prevContentDirection');
        this._elements.contentLayer.classList.toggle('direction-row', isRow);
        const caiKey = (cfg.content_align_items || '').toString().toLowerCase();
        const caiVal = ALIGN_MAP[caiKey] || '';
        this._cssVar(root, '--origami-content-align-items', caiVal || (isRow ? 'flex-start' : ''), '_prevContentAlignItems');
        const sunMoonSize = cfg.sun_moon_size != null && cfg.sun_moon_size !== '' ? normalizeLength(cfg.sun_moon_size) : '';
        const sunMoonX = cfg.sun_moon_x != null && cfg.sun_moon_x !== '' ? (isNaN(cfg.sun_moon_x) ? String(cfg.sun_moon_x).trim() : `${parseFloat(cfg.sun_moon_x)}%`) : '';
        this._cssVar(root, '--origami-sun-moon-size', sunMoonSize, '_prevSunMoonSize');
        this._cssVar(root, '--origami-sun-moon-x', sunMoonX, '_prevSunMoonX');
        const padRaw = (cfg.card_padding || '').toString().trim();
        if (padRaw && this._prevCardPadParsed !== padRaw) {
            this._prevCardPadParsed = padRaw;
            const parts = padRaw.split(/\s+/);
            root.style.setProperty('--_origami-pad-v', parts[0] || '');
            root.style.setProperty('--_origami-pad-h', parts[1] || parts[0] || '');
        } else if (!padRaw && this._prevCardPadParsed) {
            this._prevCardPadParsed = '';
            root.style.removeProperty('--_origami-pad-v');
            root.style.removeProperty('--_origami-pad-h');
        }
        if (!this._containerStyleCache) this._containerStyleCache = [];
        for (let ai = 0; ai < this._containers.length; ai++) {
            this._applyContainerStyles(ai, this._containers[ai]);
        }
    }
    _applyContainerStyles(ai, container) {
        const els = this._elements.buttonContainerEls[ai]; if (!els) return;
        if (container.custom_cards) return;
        const bt = els.row, cg = els.group;
        if (!this._containerStyleCache[ai]) this._containerStyleCache[ai] = {};
        const cache = this._containerStyleCache[ai];
        const showBottom = container.hide !== true;
        const showBottomBg = container.background === true;
        const blurred = container.blurred_background === true;
        const configSig = `${showBottom}|${blurred}`;
        if (cache.configSig !== configSig) {
            cache.configSig = configSig;
            bt.style.display = showBottom ? '' : 'none'; cg.style.display = showBottom ? '' : 'none';
        }
        const cssVarContainer = (el, prop, val, cacheKey) => {
            if (cache[cacheKey] !== val) { cache[cacheKey] = val; if (val) el.style.setProperty(prop, val); else el.style.removeProperty(prop); }
        };
        for (const [prop, key, ck] of [
            ['--origami-buttons-padding', 'button_padding', 'buttonPad'],
            ['--origami-container-padding', 'padding', 'containerPad'],
            ['--origami-container-margin', 'margin', 'containerMargin'],
            ['--origami-container-bg-color', 'background_color', 'containerBgColor'],
            ['--origami-bottom-gap', 'gap', 'buttonsGap'],
            ['--origami-button-gap', 'button_gap', 'buttonGap'],
            ['--origami-button-text-gap', 'button_text_gap', 'buttonTextGap'],
            ['--weather-icon-size', 'button_icon_size', 'buttonIconWidth'],
            ['--weather-icon-padding', 'button_icon_padding', 'buttonIconPad'],
            ['--origami-bottom-font-size', 'button_text_size', 'bottomFS'],
        ]) {
            const raw = (container[key] || '').toString().trim();
            cssVarContainer(cg, prop, key === 'background_color' ? raw : normalizeLength(raw), ck);
        }
        const containerShadow = container.shadow === false ? 'none' : '';
        cssVarContainer(cg, '--_origami-group-shadow', containerShadow, 'containerShadow');
        const customWidth = normalizeLength((container.custom_width || '').toString().trim());
        cssVarContainer(cg, '--origami-container-width', customWidth, 'containerWidth');
        if (cache.hasCustomWidth !== !!customWidth) { cache.hasCustomWidth = !!customWidth; cg.classList.toggle('has-custom-width', !!customWidth); }
        const isFree = (container.position || '').toString().toLowerCase() === 'custom';
        const posAnchor = isFree ? (container.position_anchor || 'top-left') : '';
        const posX = isFree ? String(container.position_x == null ? '' : container.position_x).trim() : '';
        const posY = isFree ? String(container.position_y == null ? '' : container.position_y).trim() : '';
        const freeSig = `${isFree}|${posAnchor}|${posX}|${posY}`;
        if (cache.freeSig !== freeSig) {
            cache.freeSig = freeSig;
            cg.classList.toggle('free-positioned', isFree);
            for (const p of ['left', 'right', 'top', 'bottom', 'transform']) cg.style.removeProperty(p);
            if (isFree) {
                const [anchorV, anchorH] = parseAnchor(posAnchor || 'top-left');
                const ox = normalizeLength(posX) || '0', oy = normalizeLength(posY) || '0', tx = [];
                if (anchorH === 'left') cg.style.left = ox;
                else if (anchorH === 'right') cg.style.right = ox;
                else { cg.style.left = '50%'; tx.push('translateX(-50%)'); }
                if (anchorV === 'top') cg.style.top = oy;
                else if (anchorV === 'bottom') cg.style.bottom = oy;
                else { cg.style.top = '50%'; tx.push('translateY(-50%)'); }
                if (tx.length) cg.style.transform = tx.join(' ');
            }
        }
        const cols = parseInt(container.columns, 10);
        cssVarContainer(cg, '--origami-row-columns', Number.isFinite(cols) && cols > 0 ? String(cols) : '', 'rowCols');
        let rowLayout = (container.layout || 'wrap').toString().toLowerCase();
        const isGrouped = container.grouped === true;
        if (cache.rowOverflow !== rowLayout) {
            cache.rowOverflow = rowLayout;
            for (const m of ['horizontal-scroll', 'wrap', 'grid', 'vertical-scroll']) bt.classList.toggle('row-' + m, rowLayout === m);
            for (const m of ['horizontal-scroll', 'vertical-scroll']) cg.classList.toggle('has-row-' + m, rowLayout === m);
        }
        const visCount = parseInt(container.scroll_count, 10), hasVis = Number.isFinite(visCount) && visCount > 0;
        const visKey = `${hasVis}|${visCount}|${rowLayout}`;
        if (cache.visKey !== visKey) {
            cache.visKey = visKey; bt.classList.toggle('has-visible-count', hasVis);
            if (hasVis) {
                const gapVal = (container.gap || '8px').toString().trim() || '8px';
                bt.style.setProperty('--origami-button-basis', `calc((100% - ${visCount - 1} * ${gapVal}) / ${visCount})`);
                if (rowLayout === 'vertical-scroll') {
                    bt.style.setProperty('--origami-button-basis-v', `calc((100% - ${visCount - 1} * ${gapVal}) / ${visCount})`);
                } else {
                    bt.style.removeProperty('--origami-button-basis-v');
                }
            } else {
                bt.style.removeProperty('--origami-button-basis'); bt.style.removeProperty('--origami-button-basis-v');
            }
            if (!hasVis && rowLayout === 'vertical-scroll') {
                requestAnimationFrame(() => this._computeVerticalVisHeight(ai));
            } else if (rowLayout !== 'vertical-scroll' || hasVis) {
                bt.style.removeProperty('--origami-row-max-height');
            }
        }
        const hasSeparator = container.separator === true;
        const groupedKey = `${isGrouped}|${showBottomBg}|${blurred}|${hasSeparator}`;
        if (cache.grouped !== groupedKey) {
            cache.grouped = groupedKey; cg.classList.toggle('grouped', isGrouped); bt.classList.toggle('has-separator', hasSeparator);
            if (isGrouped && showBottomBg) {
                cg.classList.add('with-bg');
                cg.classList.toggle('blurred', blurred);
            } else {
                cg.classList.remove('with-bg', 'blurred');
            }
        }
        const gridSepKey = `${hasSeparator}|${rowLayout}|${cols}`;
        if (cache.gridSepKey !== gridSepKey) {
            cache.gridSepKey = gridSepKey;
            let existingSepStyle = cg.querySelector('.grid-sep-style');
            if (hasSeparator && rowLayout === 'grid' && Number.isFinite(cols) && cols > 0) {
                const sel = `.buttons-row.row-grid.has-separator`;
                const sepCss = `
${sel} > .button { position: relative; overflow: visible; }
${sel} > .button::before { content: ""; position: absolute; pointer-events: none; top: 0; bottom: 0; inset-inline-start: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); width: var(--origami-separator-width, 2px); background: var(--origami-separator-color, color-mix(in srgb, currentColor 10%, transparent)); }
${sel} > .button::after { content: ""; position: absolute; pointer-events: none; left: 0; right: 0; top: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); height: var(--origami-separator-width, 2px); background: var(--origami-separator-color, color-mix(in srgb, currentColor 10%, transparent)); }
${sel} > .button:nth-child(${cols}n+1)::before { content: none; }
${sel} > .button:nth-child(-n+${cols})::after { content: none; }`;
                if (existingSepStyle) {
                    existingSepStyle.textContent = sepCss;
                } else {
                    const styleEl = document.createElement('style');
                    styleEl.className = 'grid-sep-style';
                    styleEl.textContent = sepCss;
                    cg.prepend(styleEl);
                }
            } else {
                if (existingSepStyle) existingSepStyle.remove();
            }
        }
        const align = (container.align || 'start').toString().toLowerCase();
        if (cache.buttonAlign !== align) {
            cache.buttonAlign = align;
            for (const a of ['start', 'center', 'end', 'spread']) bt.classList.toggle(`align-${a}`, align === a);
        }
        const jc = (container.justify_content || '').toString().toLowerCase();
        const jcVal = JUSTIFY_MAP[jc] || '';
        cssVarContainer(cg, '--origami-row-justify', jcVal, 'justifyContent');
        const aiKey = (container.align_items || '').toString().toLowerCase();
        const aiVal = ALIGN_MAP[aiKey] || '';
        cssVarContainer(cg, '--origami-row-align', aiVal, 'alignItems');
    }
    _updateTextElements(hass, lang, weatherState = 'default') {
        if (!this._elements || !this._elements.buttonContainerEls.length) return;
        this._syncButtonContainerDOM();
        this._applyConfigStyles();
        if (this._numFmtLang !== lang) {
            this._numFmtLang = lang;
            this._numFmt = new Intl.NumberFormat(lang, { maximumFractionDigits: 1, minimumFractionDigits: 0 });
        }
        if (!this._containerRenderCache) this._containerRenderCache = [];
        let anyRowRebuilt = false;
        const allRendered = [];
        for (let ai = 0; ai < this._containers.length; ai++) {
            const container = this._containers[ai];
            const els = this._elements.buttonContainerEls[ai]; if (!els) continue;
            const containerVisible = this._checkButtonVisibility(container, hass);
            els.group.style.display = containerVisible ? '' : 'none';
            if (!containerVisible) continue;
            if (container.custom_cards) {
                for (const child of els.row.children) { if (child.hass !== hass) child.hass = hass; }
                if (!els.group.parentNode || els.group.parentNode !== this._elements.contentLayer) {
                    this._elements.contentLayer.appendChild(els.group);
                }
                continue;
            }
            const bt = els.row;
            const showBottomBg = container.background === true;
            const containerBlurred = container.button_blurred_background === true;
            const buttonFormat = (container.button_style || 'inline').toLowerCase() === 'vertical' ? 'vertical' : 'inline';
            const rowLayout = (container.layout || 'wrap').toString().toLowerCase();
            const visCount = parseInt(container.scroll_count, 10), hasVis = Number.isFinite(visCount) && visCount > 0;
            const containerCtx = { button_icon_background: container.button_icon_background, button_background_color: container.button_background_color || '', button_icon_background_color: container.button_icon_background_color || '', button_shadow: container.button_shadow };
            const rendered = container.buttons.map((button, idx) =>
                this._renderButton(button, idx, hass, weatherState, lang, showBottomBg, containerBlurred, buttonFormat, ai, containerCtx)
            );
            allRendered.push(...rendered.filter(r => !r.hidden));
            if (!this._containerRenderCache[ai]) this._containerRenderCache[ai] = {};
            const ac = this._containerRenderCache[ai];
            const rowSig = rendered.map(r => r.sig).join('§');
            const rowRebuilt = ac.lastLocStr !== rowSig;
            if (rowRebuilt) {
                ac.lastLocStr = rowSig;
                bt.innerHTML = rendered.map(r => r.html).join('');
                this._animateRings(bt, `a${ai}`);
                if (!hasVis && rowLayout === 'vertical-scroll') { requestAnimationFrame(() => this._computeVerticalVisHeight(ai)); }
                anyRowRebuilt = true;
            }
            if (rowLayout !== 'vertical-scroll' || hasVis) {
                if (ac.hadVertVis) { bt.style.removeProperty('--origami-row-max-height'); ac.hadVertVis = false; }
            } else {
                ac.hadVertVis = true;
            }
            const isFreeContainer = (container.position || '').toString().toLowerCase() === 'custom';
            const targetLayer = isFreeContainer ? this._elements.freeLayer : this._elements.contentLayer;
            if (els.group.parentNode !== targetLayer) targetLayer.appendChild(els.group);
        }
        if (anyRowRebuilt) {
            this._nativeIconCache = null;
            this._refreshMarqueeObservation();
        }
        const hasNativeIcons = allRendered.some(r => r.showIcon && r.iconStrategy === 'native');
        if (hasNativeIcons) {
            if (!this._nativeIconCache || anyRowRebuilt) {
                const allContainers = this._elements.buttonContainerEls.map(e => e.row);
                this._nativeIconCache = [];
                for (let i = 0; i < allRendered.length; i++) {
                    const r = allRendered[i]; if (!r.showIcon || r.iconStrategy !== 'native') continue;
                    const sel = `.button[data-idx="${r.buttonIdx}"][data-container="${r.containerIdx}"] ha-state-icon`;
                    for (const container of allContainers) {
                        const iconEl = container.querySelector(sel);
                        if (iconEl) this._nativeIconCache.push({ rendered: r, el: iconEl });
                    }
                }
            }
            for (let j = 0; j < this._nativeIconCache.length; j++) {
                const entry = this._nativeIconCache[j], r = entry.rendered;
                if (entry.el.hass !== hass || entry.el.stateObj !== r.sensorObj) {
                    entry.el.hass = hass; entry.el.stateObj = r.sensorObj;
                }
            }
        }
    }
    _animateRings(container, prefix) {
        if (!this._ringPrevPct) this._ringPrevPct = new Map();
        const keyPrefix = prefix || '';
        for (const wrap of container.querySelectorAll('.button-ring-wrap')) {
            const key = keyPrefix + wrap.dataset.idx;
            const target = (wrap.style.getPropertyValue('--origami-ring-pct') || '0%').trim();
            const prev = this._ringPrevPct.get(key);
            wrap.style.setProperty('--origami-ring-pct', prev !== undefined ? prev : '0%');
            this._queueGaugeAnim(wrap, '--origami-ring-pct', target);
            this._ringPrevPct.set(key, target);
        }
        for (const fill of container.querySelectorAll('.button-bar-fill')) {
            const key = 'b' + keyPrefix + fill.dataset.barIdx;
            const target = (fill.style.getPropertyValue('--origami-bar-scale') || '0').trim();
            const prev = this._ringPrevPct.get(key);
            fill.style.setProperty('--origami-bar-scale', prev !== undefined ? prev : '0');
            this._queueGaugeAnim(fill, '--origami-bar-scale', target);
            this._ringPrevPct.set(key, target);
        }
    }
            _queueGaugeAnim(el, prop, target) {
        if (!this._gaugeAnimQueue) this._gaugeAnimQueue = [];
        this._gaugeAnimQueue.push([el, prop, target]);
        if (this._gaugeAnimRaf == null) {
            this._gaugeAnimRaf = requestAnimationFrame(() => {
                this._gaugeAnimRaf = null;
                const queue = this._gaugeAnimQueue;
                this._gaugeAnimQueue = null;
                for (const [e, p, t] of queue) e.style.setProperty(p, t);
            });
        }
    }
    _buildRing(button, gaugeVal) {
        const ringMin = parseFloat(button.ring_min) || 0, ringMax = parseFloat(button.ring_max) || 100;
        const ringW = parseFloat(button.ring_width) || 4, ringGap = parseFloat(button.ring_gap) || 3;
        const g = computeGauge(gaugeVal, ringMin, ringMax, (button.ring_color || '').trim(), Array.isArray(button.ring_thresholds) ? button.ring_thresholds : [], button.ring_threshold_mode || 'solid');
        const styleParts = [`--origami-ring-pct:${g.pct}%`, `--origami-ring-w:${ringW}px`, `--origami-ring-gap:${ringGap}px`];
        if (g.gradient) styleParts.push(`--origami-ring-gradient:conic-gradient(${g.gradient})`);
        else if (g.effectiveColor) styleParts.push(`--origami-ring-color:${g.effectiveColor}`);
        return { ringHtml: '<div class="button-ring-track"></div>', ringWrapStyle: styleParts.join(';'), hasSegments: g.hasSegments };
    }
    _buildBar(el, gaugeVal, barKey) {
        const barMin = parseFloat(el.bar_min) || 0, barMax = parseFloat(el.bar_max) || 100;
        const barH = parseFloat(el.bar_height) || 4;
        const g = computeGauge(gaugeVal, barMin, barMax, (el.bar_color || '').trim(), Array.isArray(el.bar_thresholds) ? el.bar_thresholds : [], el.bar_threshold_mode || 'solid');
        const scale = (parseFloat(g.pct) / 100).toFixed(4);
        const fillStyles = [`--origami-bar-scale:${scale}`];
        if (g.barGradient) fillStyles.push(`--origami-bar-gradient:linear-gradient(to right, ${g.barGradient})`);
        else if (g.effectiveColor) fillStyles.push(`--origami-bar-color:${g.effectiveColor}`);
        const box = _elBoxStyle(el);
        return `<div class="button-bar" style="--origami-bar-h:${barH}px${box}"><div class="button-bar-track"></div><div class="button-bar-fill" data-bar-idx="${barKey}" style="${fillStyles.join(';')}"></div></div>`;
    }
    _buildIconElement(el, resolved) {
        const styleParts = [];
        if (el.icon_size) styleParts.push(`--weather-icon-size:${cssLength(el.icon_size)}`);
        if (el.icon_padding !== undefined && el.icon_padding !== '') styleParts.push(`--weather-icon-padding:${cssLength(el.icon_padding)}`);
        const iconClasses = ['button-icon'];
        if (el.icon_background === true) {
            iconClasses.push('el-icon-bg');
            if (el.icon_background_color) styleParts.push(`--origami-icon-bg-color:${cssValue(el.icon_background_color)}`);
        } else if (el.icon_background === false) {
            iconClasses.push('el-no-icon-bg');
        }
        const iconBox = _elBoxStyle(el);
        const st = (styleParts.length || iconBox) ? ` style="${styleParts.join(';')}${iconBox}"` : '';
        return `<span class="${iconClasses.join(' ')}"${st}>${this._buttonIconInner(resolved.strategy, resolved.value)}</span>`;
    }
    _resolveButtonElements(button) {
        if (Array.isArray(button.elements)) {
            return button.elements
                .filter(e => e && typeof e === 'object' && (e.kind === 'text' || e.kind === 'icon' || e.kind === 'bar'))
                .map(e => ({ ...e }));
        }
        return [{ kind: 'text' }];
    }
    _numericSensorValue(hass, entity, attribute) {
        const r = this._resolveSensorValue(hass, entity, attribute);
        return parseFloat(r.rawNumeric != null ? r.rawNumeric : r.formatted);
    }
    _resolveGaugeValue(hass, button, el, isForecast, forecastEntry, forecastTextAttr, formatted) {
        let gaugeVal = parseFloat(formatted);
        if (el.gauge_entity) {
            gaugeVal = this._numericSensorValue(hass, el.gauge_entity, el.gauge_attribute);
        } else if (isForecast && forecastEntry) {
            const gAttr = el.gauge_attribute || forecastTextAttr;
            const gRaw = gAttr ? forecastEntry[gAttr] : null;
            if (gRaw != null) gaugeVal = parseFloat(gRaw);
        }
        return gaugeVal;
    }
    _buttonIconInner(iconStrategy, iconValue) {
        if (iconStrategy === 'native') return '<ha-state-icon></ha-state-icon>';
        if (iconStrategy === 'image') return `<img src="${escapeHtml(iconValue)}" class="custom-bottom-icon" />`;
        if (iconStrategy === 'builtin') return `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${BUILTIN_ICONS[iconValue] || BUILTIN_ICONS['default']}</svg>`;
        return `<ha-icon icon="${escapeHtml(iconValue)}"></ha-icon>`;
    }
    _buildTextElement(hass, button, txt, textCtx, marqueeSpeed, marqueeRtl) {
        const _wOp = (w) => { const n = parseFloat(w); if (isNaN(n)) return ''; return Math.min(1, Math.max(0.4, 0.4 + (n - 100) * 0.6 / 800)).toFixed(2); };
        const resolved = this._resolveButtonText(hass, button, txt, textCtx);
        const value = escapeHtml(resolved.value), unit = escapeHtml(resolved.unit);
        const content = txt.fancy_unit === true
            ? `${value}<span class="fancy-unit">${unit}</span>`
            : (resolved.tight ? `${value}${unit}` : (unit ? `${value} ${unit}` : value));
        const overflow = (txt.overflow || 'ellipsis').toString().toLowerCase().trim();
        const txtStyles = [];
        if (txt.size) txtStyles.push(`font-size:${cssLength(txt.size)}`);
        if (txt.weight) { txtStyles.push(`font-weight:${cssValue(txt.weight)}`); const o = _wOp(txt.weight); if (o) txtStyles.push(`opacity:${o}`); }
        if (overflow === 'clip') txtStyles.push('text-overflow:clip');
        else if (overflow === 'wrap') txtStyles.push('white-space:normal;overflow:visible;text-overflow:clip');
        const txtBox = _elBoxStyle(txt);
        const txtStyle = (txtStyles.length || txtBox) ? ` style="${txtStyles.join(';')}${txtBox}"` : '';
        if (overflow === 'marquee') {
            return { html: `<span class="button-text marquee-host"${txtStyle} data-speed="${marqueeSpeed}" data-rtl="${marqueeRtl ? 1 : 0}"><span class="marquee-track"><span class="marquee-text">${content}</span></span></span>`, hasMarquee: true };
        }
        return { html: `<span class="button-text"${txtStyle}>${content}</span>`, hasMarquee: false };
    }
    _resolveButtonData(button, hass, textEls) {
        const isForecast = !!button.forecast;
        if (isForecast) {
            const forecastTextAttr = (textEls.find(t => !t.entity && t.attribute && t.attribute !== 'condition' && t.attribute !== 'datetime') || {}).attribute || null;
            const f = this._resolveForecastValue(hass, button);
            let iconValue = f.condition ? _weatherTuning(f.condition).icon : 'mdi:information-outline';
            if (forecastTextAttr) iconValue = FORECAST_ATTR_ICONS[forecastTextAttr] || iconValue;
            return {
                sensorObj: null, iconStrategy: 'static', iconValue, primaryResolved: null,
                formatted: f.formatted, unit: f.unit, isForecast: true,
                forecastCondition: f.condition, forecastDatetime: f.datetime,
                forecastLoading: !!f.loading, forecastEntry: f.entry || null, forecastTextAttr,
            };
        }
        const primaryResolved = this._resolveSensorValue(hass, button.entity, button.attribute);
        const sensor = hass.states[button.entity];
        let iconValue = 'mdi:information-outline', iconStrategy = 'static', sensorObj = null;
        if (sensor) {
            if (button.attribute) iconValue = WEATHER_ATTR_ICONS[button.attribute] || iconValue;
            else { sensorObj = sensor; iconStrategy = 'native'; }
        }
        return {
            sensorObj, iconStrategy, iconValue, primaryResolved,
            formatted: primaryResolved.formatted, unit: primaryResolved.unit, isForecast: false,
            forecastCondition: null, forecastDatetime: null,
            forecastLoading: false, forecastEntry: null, forecastTextAttr: null,
        };
    }
    _renderButton(button, idx, hass, weatherState, lang, rowBg, containerBlurred, buttonFormat, containerIdx, containerCtx) {
        const skip = (sig, hidden) => ({ html: '', sig, sensorObj: null, iconStrategy: 'static', showIcon: false, width: '', containerIdx, buttonIdx: idx, hidden });
        if (!button.entity) return skip(`skip-${idx}`, false);
        if (!this._checkButtonVisibility(button, hass)) return skip(`hidden-${idx}-${JSON.stringify(button.visibility)}`, true);
        const elements = this._resolveButtonElements(button);
        const textEls = elements.filter(e => e.kind === 'text');
        const iconEls = elements.filter(e => e.kind === 'icon');
        const barEls = elements.filter(e => e.kind === 'bar');
        const effectiveFormat = (button.style || buttonFormat) === 'vertical' ? 'vertical' : 'inline';
        const isRingType = button.type === 'ring';
        const {
            sensorObj, iconStrategy, iconValue, formatted, unit, primaryResolved,
            isForecast, forecastCondition, forecastDatetime, forecastLoading, forecastEntry, forecastTextAttr,
        } = this._resolveButtonData(button, hass, textEls);
        const resolveIconEl = (el) => {
            const configIcon = el.icon || (iconStrategy === 'native' ? '' : iconValue);
            const strat0 = configIcon ? 'static' : iconStrategy;
            const val0 = configIcon || iconValue;
            const configPath = el.icon_path || ((configIcon === 'weather' || (!el.icon && !configIcon)) && this._config && this._config.icon_path ? this._config.icon_path : '');
            if (!configIcon) return { strategy: strat0, value: val0 };
            const resolvedBase = (configIcon === 'weather') ? (isForecast && forecastCondition ? forecastCondition : weatherState) : configIcon;
            if (configPath) {
                const basePath = configPath.endsWith('/') ? configPath : configPath + '/';
                const ext = resolvedBase.includes('.') ? '' : '.svg';
                return { strategy: 'image', value: `${basePath}${resolvedBase}${ext}` };
            }
            if (configIcon === 'weather' && BUILTIN_ICONS[resolvedBase]) {
                return { strategy: 'builtin', value: (!isForecast && this._isAstroNight && BUILTIN_ICONS[`${resolvedBase}-night`]) ? `${resolvedBase}-night` : resolvedBase };
            }
            return { strategy: 'static', value: (configIcon === 'weather') ? _weatherTuning(resolvedBase).icon : configIcon };
        };
        const marqueeSpeed = Math.max(5, parseFloat(button.marquee_speed) || 30);
        const marqueeRtl = button.marquee_rtl === true, width = (button.width || '').toString().trim(), height = (button.height || '').toString().trim();
        const textCtx = { isForecast, forecastEntry, forecastDatetime, formatted, unit, primaryResolved, lang };
        let elementsHtml = '', hasAnyMarquee = false, firstIconStrategy = 'static', firstIconSet = false, barCount = 0;
        for (const el of elements) {
            if (el.kind === 'text') {
                const b = this._buildTextElement(hass, button, el, textCtx, marqueeSpeed, marqueeRtl);
                elementsHtml += b.html;
                if (b.hasMarquee) hasAnyMarquee = true;
            } else if (el.kind === 'icon') {
                const r = resolveIconEl(el);
                if (!firstIconSet) { firstIconStrategy = r.strategy; firstIconSet = true; }
                elementsHtml += this._buildIconElement(el, r);
            } else if (el.kind === 'bar') {
                const gaugeVal = this._resolveGaugeValue(hass, button, el, isForecast, forecastEntry, forecastTextAttr, formatted);
                elementsHtml += this._buildBar(el, gaugeVal, `${idx}-${barCount}`);
                barCount++;
            }
        }
        const effectiveBg = button.background !== undefined ? button.background : rowBg;
        const showIcon = iconEls.length > 0;
        const classes = ['button'];
        if (hasAnyMarquee) classes.push('overflow-marquee');
        if (forecastLoading) classes.push('button-loading');
        if (!textEls.length) classes.push('icon-only');
        if (barEls.length) classes.push('button-bar-type');
        if (effectiveFormat === 'vertical') classes.push('format-vertical');
        if (isRingType) classes.push('button-ring');
        const iconBg = button.icon_background !== undefined ? button.icon_background : containerCtx.button_icon_background;
        if (iconBg === true) classes.push('has-icon-bg');
        else if (iconBg === false) classes.push('no-icon-bg');
        const effectiveBlurred = button.blurred_background !== undefined
            ? button.blurred_background === true
            : containerBlurred;
        if (effectiveBg) {
            classes.push('with-bg');
            if (effectiveBlurred) classes.push('blurred');
        } else if (iconBg === true) {
            if (effectiveBlurred) classes.push('blurred');
        }
        const effectiveBgColor = button.background_color || containerCtx.button_background_color || '';
        const effectiveIconBgColor = button.icon_background_color || containerCtx.button_icon_background_color || '';
        let buttonTintColor = '';
        if (Array.isArray(button.color_thresholds) && button.color_thresholds.length) {
            let ctVal;
            if (isForecast && forecastEntry) {
                if (button.color_threshold_entity) {
                    ctVal = this._numericSensorValue(hass, button.color_threshold_entity, button.color_threshold_attribute);
                } else {
                    const thresholdAttr = button.color_threshold_attribute || forecastTextAttr;
                    if (thresholdAttr) ctVal = parseFloat(forecastEntry[thresholdAttr]);
                }
            } else {
                const ctEntity = button.color_threshold_entity || button.entity;
                if (ctEntity) ctVal = this._numericSensorValue(hass, ctEntity, button.color_threshold_attribute || button.attribute);
            }
            buttonTintColor = pickThreshold(button.color_thresholds, ctVal);
        }
        const inlineStyles = [];
        if (width) { const wv = cssLength(width); inlineStyles.push(`width:${wv};max-width:${wv}`); }
        if (height) inlineStyles.push(`height:${cssLength(height)}`);
        if (effectiveBgColor) inlineStyles.push(`--origami-bottom-bg-color:${cssValue(effectiveBgColor)}`);
        if (effectiveIconBgColor) inlineStyles.push(`--origami-icon-bg-color:${cssValue(effectiveIconBgColor)}`);
        if (buttonTintColor) { inlineStyles.push(`--origami-button-tint:${cssValue(buttonTintColor)}`); classes.push('has-tint'); }
        if (button.padding !== undefined && button.padding !== '') inlineStyles.push(`padding:${cssLength(button.padding)}`);
        for (const [k, v] of [
            ['text_size','--origami-bottom-font-size'], ['inner_gap','--origami-button-gap'],
            ['text_gap','--origami-button-text-gap'], ['icon_size','--weather-icon-size'], ['icon_padding','--weather-icon-padding'],
        ]) { if (button[k]) inlineStyles.push(`${v}:${cssLength(button[k])}`); }
        if (button.text_size) inlineStyles.push(`font-size:${cssLength(button.text_size)}`);
        if (button.text_shadow === true) inlineStyles.push('--_button-no-bg-shadow:var(--_button-shadow-avail)');
        const containerLayout = (this._containers[containerIdx] && this._containers[containerIdx].layout || '').toString().toLowerCase();
        const containerScrollable = containerLayout === 'horizontal-scroll' || containerLayout === 'vertical-scroll';
        const effectiveButtonShadow = (button.shadow !== undefined ? button.shadow : containerCtx.button_shadow) !== false;
        if (!effectiveButtonShadow || containerScrollable) inlineStyles.push('--_origami-button-shadow:none');
        let ringHtml = '', ringWrapStyle = '', hasSegments = false;
        if (isRingType) {
            const gaugeVal = this._resolveGaugeValue(hass, button, button, isForecast, forecastEntry, forecastTextAttr, formatted);
            const r = this._buildRing(button, gaugeVal);
            ringHtml = r.ringHtml; ringWrapStyle = r.ringWrapStyle; hasSegments = r.hasSegments;
        }
        const buttonAlignClass = _ALIGN_CLASSES.has(button.align) ? button.align : '';
        if (buttonAlignClass) classes.push(`align-${buttonAlignClass}`);
        if (button.button_round === true) classes.push('button-round');
        const loaderHtml = forecastLoading ? '<div class="button-loader"><span></span><span></span><span></span></div>' : '';
        const style = inlineStyles.length ? ` style="${inlineStyles.join(';')}"` : '';
        let buttonHtml = `<div class="${classes.join(' ')}" data-idx="${idx}" data-container="${containerIdx}"${style}>${loaderHtml}${elementsHtml}</div>`;
        if (isRingType) {
            buttonHtml = `<div class="button-ring-wrap${hasSegments ? ' has-segments' : ''}${forecastLoading ? ' button-loading' : ''}" data-idx="${idx}" data-container="${containerIdx}" style="${ringWrapStyle}">${ringHtml}${buttonHtml}</div>`;
        }
        const sig = width ? `${buttonHtml}|${width}` : buttonHtml;
        return { html: buttonHtml, sig, sensorObj, iconStrategy: firstIconStrategy, showIcon, width, containerIdx, buttonIdx: idx, hidden: false };
    }
    _backgroundMode(cfg) {
        const c = cfg || this._config || {};
        return typeof c.background_mode === 'string' ? c.background_mode : 'default';
    }
    _updateWeatherBackground(weatherState, schemeDark) {
        const container = this._elements?.weatherBg;
        const root = this._elements?.root;
        if (!container || !root) return;
        const cfg = this._config || {};
        const lightSchemePath = (cfg.weather_image_path || '').trim();
        const darkSchemePath = (cfg.weather_image_path_dark || '').trim();
        if (this._backgroundMode(cfg) !== 'images' || !lightSchemePath) {
            this._weatherBgProbeId = (this._weatherBgProbeId || 0) + 1;
            if (this._weatherBgActive) {
                container.innerHTML = '';
                root.classList.remove('has-weather-bg');
                this._weatherBgActive = false;
                this._weatherBgState = null;
                this._weatherBgSchemeDark = null;
                this._startAnimation();
            }
            return;
        }
        const useDarkScheme = !!(schemeDark && darkSchemePath);
        const basePath = useDarkScheme ? darkSchemePath : lightSchemePath;
        if (this._weatherBgState === weatherState && this._weatherBgSchemeDark === useDarkScheme) return;
        this._weatherBgState = weatherState;
        this._weatherBgSchemeDark = useDarkScheme;
        const folder = basePath.endsWith('/') ? basePath : basePath + '/';
        const exts = ['', '.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.mp4'];
        container.innerHTML = '';
        const probeId = this._weatherBgProbeId = (this._weatherBgProbeId || 0) + 1;
        this._probeWeatherMedia(container, root, folder, weatherState, exts, 0, probeId);
    }
    _probeWeatherMedia(container, root, folder, state, exts, idx, probeId) {
        if (this._weatherBgProbeId !== probeId) return;
        if (idx >= exts.length) {
            root.classList.remove('has-weather-bg');
            const wasActive = this._weatherBgActive;
            this._weatherBgActive = false;
            if (wasActive) {
                this._startAnimation();
            }
            return;
        }
        const url = `${folder}${state}${exts[idx]}`;
        const apply = (el) => {
            if (this._weatherBgProbeId !== probeId) return;
            container.innerHTML = '';
            container.appendChild(el);
            root.classList.add('has-weather-bg');
            this._weatherBgActive = true;
            this._startAnimation();
        };
        if (exts[idx] === '.mp4') {
            const video = document.createElement('video');
            video.autoplay = true; video.loop = true; video.muted = true; video.playsInline = true;
            video.setAttribute('muted', '');
            video.src = url;
            video.onloadeddata = () => { video.onerror = null; apply(video); };
            video.onerror = () => {
                video.onloadeddata = null; video.onerror = null;
                video.removeAttribute('src');
                this._probeWeatherMedia(container, root, folder, state, exts, idx + 1, probeId);
            };
        } else {
            const img = new Image();
            img.onload = () => { img.onerror = null; apply(img); };
            img.onerror = () => {
                img.onload = null;
                this._probeWeatherMedia(container, root, folder, state, exts, idx + 1, probeId);
            };
            img.src = url;
        }
    }
    _updateDefaultBackground(schemeDark) {
        const container = this._elements?.defaultBg;
        const root = this._elements?.root;
        if (!container || !root) return;
        const cfg = this._config || {};
        const on = this._backgroundMode(cfg) === 'default';
        if (!on) {
            if (this._defaultBgActive) {
                root.classList.remove('has-default-bg');
                this._defaultBgActive = false;
                this._defaultBgSchemeDark = null;
            }
            return;
        }
        if (this._defaultBgActive && this._defaultBgSchemeDark === schemeDark) return;
        const wasActive = this._defaultBgActive;
        this._defaultBgActive = true;
        this._defaultBgSchemeDark = schemeDark;
        root.classList.add('has-default-bg');
        if (!wasActive) this._startAnimation();
    }
    _updateWeatherFilter(weatherState, schemeDark) {
        const defaultBg = this._elements?.defaultBg;
        if (!defaultBg) return;
        if (this._backgroundMode() !== 'default') {
            if (this._weatherFilterSig) { defaultBg.style.removeProperty('filter'); this._weatherFilterSig = null; }
            return;
        }
        const sunset = Math.round((this._sunsetF || 0) * 12) / 12;
        const sig = `${weatherState}|${schemeDark ? 'dark' : 'light'}|${sunset}`;
        if (this._weatherFilterSig === sig) return;
        this._weatherFilterSig = sig;
        const sf = _SKY_FILTERS[weatherState] || _SKY_FILTERS.default;
        const weatherFilter = schemeDark ? sf.dark : sf.light;
        const sunsetFilter = sunset > 0.01
            ? `sepia(${(0.34 * sunset).toFixed(3)}) hue-rotate(${(-12 * sunset).toFixed(2)}deg) saturate(${(1 + 0.22 * sunset).toFixed(3)})`
            : '';
        const cfg = this._config || {};
        const bri = cfg.bg_brightness != null && String(cfg.bg_brightness) !== '' ? `brightness(${cfg.bg_brightness})` : '';
        const sat = cfg.bg_saturation != null && String(cfg.bg_saturation) !== '' ? `saturate(${cfg.bg_saturation})` : '';
        defaultBg.style.filter = [weatherFilter, sunsetFilter, bri, sat].filter(Boolean).join(' ');
    }
    _updateHazeStyles(weatherState, schemeDark) {
        const root = this._elements?.root;
        if (!root || this._backgroundMode() !== 'default') return;
        const scheme = schemeDark ? 'dark' : 'light';
        const sig = `${weatherState}|${scheme}`;
        if (this._hazeStyleSig === sig) return;
        this._hazeStyleSig = sig;
        const ht = (_HAZE_TUNING[weatherState] || _HAZE_TUNING.default)[scheme];
        const pal = _HAZE_PALETTE[scheme];
        const toned = (c, aMul) => {
            const ch = i => Math.round(c[i] + (ht.tone[i] - c[i]) * ht.mix);
            return `rgba(${ch(0)},${ch(1)},${ch(2)},${Math.min(1, c[3] * aMul).toFixed(3)})`;
        };
        for (let i = 0; i < pal.length; i++) {
            const p = pal[i];
            root.style.setProperty(`--origami-haze${i + 1}-c`, toned(p.c, ht.alpha));
            root.style.setProperty(`--origami-haze${i + 1}-core`, toned(p.core || p.c, ht.alpha * (p.core ? ht.core : 1)));
        }
        root.style.setProperty('--origami-haze-scale', ht.scale);
    }
    _refreshMarqueeObservation() {
        if (!this._marqueeObserver) {
            this._marqueeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    entry.target.querySelectorAll('.marquee-host')
                        .forEach(host => this._measureMarqueeOne(host));
                }
            });
        }
        this._marqueeObserver.disconnect();
        for (const els of this._elements?.buttonContainerEls || []) {
            if (els.row) {
                els.row.querySelectorAll('.button.overflow-marquee')
                  .forEach(button => this._marqueeObserver.observe(button));
            }
        }
    }
    _measureMarqueeOne(host) {
        const track = host.querySelector('.marquee-track');
        if (!track) return;
        host.classList.toggle('marquee-rtl', host.dataset.rtl === '1');
        if (host.clientWidth === 0) return;
        const firstText = track.querySelector('.marquee-text');
        if (!firstText) return;
        if (firstText.offsetWidth > host.clientWidth + 1) {
            if (track.childElementCount === 1) {
                const sep1 = document.createElement('span'); sep1.className = 'marquee-sep';
                const sep2 = document.createElement('span'); sep2.className = 'marquee-sep';
                track.append(sep1, firstText.cloneNode(true), sep2);
            }
            const speed = Math.max(5, parseFloat(host.dataset.speed) || 30);
            const duration = Math.max(2, track.scrollWidth / 2 / speed);
            host.style.setProperty('--origami-marquee-duration', `${duration.toFixed(2)}s`);
            host.classList.add('is-animating');
        } else {
            while (track.childElementCount > 1) track.lastElementChild.remove();
            host.classList.remove('is-animating');
            host.style.removeProperty('--origami-marquee-duration');
        }
    }
    _computeVerticalVisHeight(containerIdx) {
        const els = this._elements?.buttonContainerEls?.[containerIdx];
        const bt = els && els.row;
        if (!bt || !bt.children.length) return;
        const container = this._containers[containerIdx];
        if (!container) return;
        const visCount = parseInt(container.scroll_count, 10);
        if (!Number.isFinite(visCount) || visCount < 1) return;
        const firstButton = bt.children[0];
        if (!firstButton || firstButton.offsetHeight < 1) return;
        const gap = parseFloat(getComputedStyle(bt).gap) || 8;
        bt.style.setProperty('--origami-row-max-height', `${firstButton.offsetHeight * visCount + gap * (visCount - 1)}px`);
    }
    _handleVisibilityChange(entries) {
        const entry = entries[0], wasVisible = this._isVisible;
        this._isVisible = entry.isIntersecting;
        if (this._elements?.root) this._elements.root.classList.toggle('is-offscreen', !this._isVisible);
        if (this._isVisible && !wasVisible) {
            this._startAnimation();
        } else if (!this._isVisible && wasVisible) {
            this._stopAnimation();
        }
    }
    _handleDocVisibility() {
        if (document.hidden) {
            this._stopAnimation();
        } else if (this._isVisible) {
            this._startAnimation();
        }
    }
    _handleTap(e) {
        e.stopPropagation();
        const cfg = this._config;
        if (!cfg || !cfg.card_tap_action || cfg.card_tap_action.action === 'none') return;
        this.dispatchEvent(new CustomEvent('hass-action', { bubbles: true, composed: true, detail: { config: { entity: cfg.weather_entity, tap_action: cfg.card_tap_action }, action: 'tap' } }));
    }
    _handleButtonClick(e) {
        const buttonEl = e.target.closest('.button');
        if (!buttonEl) return;
        const idx = parseInt(buttonEl.dataset.idx, 10);
        const containerIdx = parseInt(buttonEl.dataset.container, 10);
        if (isNaN(idx) || isNaN(containerIdx)) return;
        const container = this._containers && this._containers[containerIdx];
        if (!container) return;
        const button = container.buttons && container.buttons[idx];
        if (!button || !button.entity) return;
        e.stopPropagation();
        const tapAction = button.tap_action || { action: 'more-info' };
        this.dispatchEvent(new CustomEvent('hass-action', { bubbles: true, composed: true, detail: { config: { entity: button.entity, tap_action: tapAction }, action: 'tap' } }));
    }
    _tryInitialize() {
        if (this._initializationComplete || !this._hasReceivedFirstHass) return;
        if (!this._cachedDimensions.width || !this._cachedDimensions.height) return;
        this._initializationComplete = true;
        requestAnimationFrame(() => {
            if (!this.isConnected) return;
            this._sizeEffectsCanvas();
            this._syncEffects(this._lastState);
            this._startAnimation();
        });
    }
    _updateCanvasDimensions(w, h) {
        w = Math.floor(w); h = Math.floor(h);
        if (w === 0 || h === 0) return false;
        const widthChanged = this._cachedDimensions.width !== w;
        if (!widthChanged && Math.abs(this._cachedDimensions.height - h) < 50) return false;
        this._cachedDimensions = { width: w, height: h };
        return true;
    }
    _scheduleResize() {
        if (this._resizeDebounceTimer) clearTimeout(this._resizeDebounceTimer);
        this._resizeDebounceTimer = setTimeout(() => {
            this._resizeDebounceTimer = null;
            this._sizeEffectsCanvas();
            this._syncEffects(this._lastState);
        }, 300);
    }
    _sizeEffectsCanvas() {
        const els = this._elements;
        if (!els || !els.effectsCanvas || !els.root) return false;
        const rw = els.root.clientWidth, rh = els.root.clientHeight;
        if (rw === 0 || rh === 0) return false;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);
        const maxPx = 1200 * 800;
        if (rw * dpr * rh * dpr > maxPx) dpr *= Math.sqrt(maxPx / (rw * dpr * rh * dpr));
        const cw = Math.max(1, Math.floor(rw * dpr)), ch = Math.max(1, Math.floor(rh * dpr));
        const canvas = els.effectsCanvas;
        const resized = canvas.width !== cw || canvas.height !== ch;
        if (resized) {
            canvas.width = cw;
            canvas.height = ch;
            canvas.style.width = rw + 'px';
            canvas.style.height = rh + 'px';
            this._effectsCtx = canvas.getContext('2d');
        } else if (!this._effectsCtx) {
            this._effectsCtx = canvas.getContext('2d');
        }
        if (els.starCanvas) {
            const sc = els.starCanvas;
            const starResized = sc.width !== cw || sc.height !== ch;
            if (starResized) {
                sc.width = cw; sc.height = ch;
                sc.style.width = rw + 'px'; sc.style.height = rh + 'px';
                this._starCtx = sc.getContext('2d');
            } else if (!this._starCtx) {
                this._starCtx = sc.getContext('2d');
            }
        }
        this._effectsScale = cw / rw;
        this._effectsW = rw;
        this._effectsH = rh;
        if (resized && this._effectsActive) this._drawEffects(performance.now());
        return true;
    }
    _syncEffects(weatherState) {
        const els = this._elements;
        if (!els || !els.root || !els.effectsCanvas) return;
        const cfg = this._config || {};
        const on = !!weatherState;
        const tuning = _weatherTuning(weatherState);
        const recipe = (on && cfg.precipitation_effects !== false && tuning.precipitation) || null;
        const cloudState = (on && cfg.cloud_effects !== false && WeatherEffects.cloudDensity(weatherState) > 0) ? weatherState : null;
        const starsOn = on && cfg.night_sky_effects !== false && this._isAstroNight && tuning.starCount > 0 && tuning.starOpacity > 0;
        const stars = starsOn ? { count: tuning.starCount, opacity: tuning.starOpacity } : null;
        const active = !!recipe || !!cloudState || !!stars;
        if (active && !this._sizeEffectsCanvas()) {
            this._effectsActive = false;
            els.root.classList.remove('has-weather-effects');
            return;
        }
        WeatherEffects.set(this._effects, recipe, els.root.clientWidth, els.root.clientHeight, cloudState, stars);
        this._effectsActive = active;
        els.root.classList.toggle('has-weather-effects', active);
        els.root.classList.toggle('has-star-canvas', !!stars);
        if (active) this._startAnimation();
    }
    _effectsEnv(w, h) {
        const cfg = this._config || {};
        const num = (v, dflt) => { const n = parseFloat(v); return Number.isFinite(n) ? n : dflt; };
        const sunX = num(cfg.sun_moon_x, 50), sunSize = num(cfg.sun_moon_size, 80);
        const cx = sunX / 100 * w, cy = this._sunGlowY / 100 * h;
        let glow = null;
        if (this._sunMoonActive && this._sunGlowY != null && this._sunGlowVisibility > 0.05) {
            const r = sunSize * 2.4;
            glow = { x: cx, y: cy, r2: r * r, s: 0.55 * this._sunGlowVisibility * (this._sunGlowIsNight ? 0.5 : 1) };
        }
        let moon = null;
        if (this._sunMoonActive && this._isAstroNight && this._sunGlowY != null) {
            moon = { x: cx, y: cy, r: sunSize / 2 };
        }
        return { schemeDark: this._schemeDark, glow, moon, backgroundRGB: this._backgroundColor(this._schemeDark) };
    }
    _backgroundColor(schemeDark) {
        const key = schemeDark ? 'dark' : 'light';
        if (this._backgroundColorCache && this._backgroundColorCache.key === key) return this._backgroundColorCache.v;
        let v = schemeDark ? [16, 33, 61] : [209, 229, 242];
        try {
            const sky = this._elements?.root?.querySelector('#sky-base');
            if (sky) {
                const bg = getComputedStyle(sky).backgroundImage || '';
                const hexes = bg.match(/#([0-9a-f]{6})/gi);
                const rgbs = bg.match(/rgba?\([^)]+\)/gi);
                let r = 0, g = 0, b = 0, cnt = 0;
                const add = (cr, cg, cb) => { r += cr; g += cg; b += cb; cnt++; };
                if (hexes) for (const hx of hexes) { const n = hx.slice(1); add(parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)); }
                if (rgbs) for (const rs of rgbs) { const p = rs.replace(/rgba?\(|\)/g, '').split(',').map(Number); if (p.length >= 3) add(p[0], p[1], p[2]); }
                if (cnt) v = [Math.round(r / cnt), Math.round(g / cnt), Math.round(b / cnt)];
            }
        } catch (_) {}
        this._backgroundColorCache = { key, v };
        return v;
    }
    _drawEffects(now) {
        const ctx = this._effectsCtx, els = this._elements;
        if (!ctx || !els || !els.root) return;
        const w = this._effectsW, h = this._effectsH;
        if (!w || !h) return;
        const dt = Math.max(0.001, Math.min(0.05, (now - this._lastEffectsTime) * 0.001));
        this._lastEffectsTime = now;
        const alive = WeatherEffects.frame(this._effects, ctx, w, h, this._effectsScale, dt, now * 0.001, this._effectsEnv(w, h), this._starCtx);
        if (!alive) {
            this._effectsActive = false;
            els.root.classList.remove('has-weather-effects');
            els.root.classList.remove('has-star-canvas');
            this._stopAnimation();
        }
    }
    _animate(now) {
        if (!this.isConnected || this._animId === null || !this._isVisible) { this._stopAnimation(); return; }
        this._animId = requestAnimationFrame(this._boundAnimate);
        if (!this._hasReceivedFirstHass) return;
        if (now - this._lastFrameTime < this._frameInterval) return;
        this._lastFrameTime = now;
        this._drawEffects(now);
    }
    _startAnimation() {
        if (this._animId === null && this._isVisible && this._effectsActive) {
            this._lastEffectsTime = performance.now();
            this._animId = requestAnimationFrame(this._boundAnimate);
        }
    }
    _stopAnimation() {
        if (this._animId !== null) { cancelAnimationFrame(this._animId); this._animId = null; }
    }
}
const CARD_NAME = 'origami-weather';
if (!customElements.get(CARD_NAME)) {
    customElements.define(CARD_NAME, WeatherCard);
    window.customCards = window.customCards || [];
    window.customCards.push({ type: CARD_NAME, name: 'Origami Weather', description: 'A flexible weather card for Home Assistant.' });
} else {
    console.info(`%c ${CARD_NAME} already defined`, 'color: orange; font-weight: bold;');
}
