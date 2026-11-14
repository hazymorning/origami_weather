// src/image-assets.js
var MOON_SURFACE = "data:image/webp;base64,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";
var BALLOON_SHEET = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2000" height="670" viewBox="0 0 400 134"><g fill="#fff"><path d="M50 4C73.8 4 92.5 20.7 92.5 42C92.5 68 63 86 61 100L39 100C37 86 7.5 68 7.5 42C7.5 20.7 26.2 4 50 4Z"/></g><g fill="#fff" transform="translate(100 0)"><path d="M50 4C54.6 4 58.3 20.7 58.3 42C58.3 68 52.5 86 52.1 100L56.1 100C57.2 86 73.6 68 73.6 42C73.6 20.7 63.2 4 50 4ZM50 4C45.4 4 41.7 20.7 41.7 42C41.7 68 47.5 86 47.9 100L43.9 100C42.8 86 26.4 68 26.4 42C26.4 20.7 36.8 4 50 4ZM50 4C69.8 4 85.3 20.7 85.3 42C85.3 68 60.8 86 59.1 100L60.8 100C62.8 86 91.7 68 91.7 42C91.7 20.7 73.3 4 50 4ZM50 4C30.2 4 14.7 20.7 14.7 42C14.7 68 39.2 86 40.9 100L39.2 100C37.2 86 8.3 68 8.3 42C8.3 20.7 26.7 4 50 4Z" fill-rule="evenodd"/></g><g transform="translate(200 0)"><defs><path id="e" d="M50 4C73.8 4 92.5 20.7 92.5 42C92.5 68 63 86 61 100L39 100C37 86 7.5 68 7.5 42C7.5 20.7 26.2 4 50 4Z"/><radialGradient id="l" gradientUnits="userSpaceOnUse" cx="33" cy="22" r="84"><stop offset="0" stop-color="#fff" stop-opacity=".36"/><stop offset=".28" stop-color="#fff" stop-opacity=".16"/><stop offset=".48" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#0b1730" stop-opacity=".08"/><stop offset="1" stop-color="#0b1730" stop-opacity=".50"/></radialGradient><radialGradient id="r" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(50 46) scale(45 47)"><stop offset=".72" stop-color="#0b1730" stop-opacity="0"/><stop offset="1" stop-color="#0b1730" stop-opacity=".30"/></radialGradient><linearGradient id="u" gradientUnits="userSpaceOnUse" x1="0" y1="52" x2="0" y2="100"><stop offset="0" stop-color="#0b1730" stop-opacity="0"/><stop offset="1" stop-color="#0b1730" stop-opacity=".24"/></linearGradient><linearGradient id="s" gradientUnits="userSpaceOnUse" x1="0" y1="94" x2="0" y2="100"><stop offset="0" stop-color="#3b332e"/><stop offset="1" stop-color="#211d1a"/></linearGradient></defs><path d="M50 4C54.6 4 58.3 20.7 58.3 42C58.3 68 52.5 86 52.1 100M50 4C45.4 4 41.7 20.7 41.7 42C41.7 68 47.5 86 47.9 100M50 4C63.2 4 73.6 20.7 73.6 42C73.6 68 57.2 86 56.1 100M50 4C36.8 4 26.4 20.7 26.4 42C26.4 68 42.8 86 43.9 100M50 4C69.8 4 85.3 20.7 85.3 42C85.3 68 60.8 86 59.1 100M50 4C30.2 4 14.7 20.7 14.7 42C14.7 68 39.2 86 40.9 100M50 4C73.3 4 91.7 20.7 91.7 42C91.7 68 62.8 86 60.8 100M50 4C26.7 4 8.3 20.7 8.3 42C8.3 68 37.2 86 39.2 100" fill="none" stroke="#0b1730" stroke-opacity=".13" stroke-width="2.2"/><path d="M50 4C54.6 4 58.3 20.7 58.3 42C58.3 68 52.5 86 52.1 100M50 4C45.4 4 41.7 20.7 41.7 42C41.7 68 47.5 86 47.9 100M50 4C63.2 4 73.6 20.7 73.6 42C73.6 68 57.2 86 56.1 100M50 4C36.8 4 26.4 20.7 26.4 42C26.4 68 42.8 86 43.9 100M50 4C69.8 4 85.3 20.7 85.3 42C85.3 68 60.8 86 59.1 100M50 4C30.2 4 14.7 20.7 14.7 42C14.7 68 39.2 86 40.9 100M50 4C73.3 4 91.7 20.7 91.7 42C91.7 68 62.8 86 60.8 100M50 4C26.7 4 8.3 20.7 8.3 42C8.3 68 37.2 86 39.2 100" fill="none" stroke="#0b1730" stroke-opacity=".18" stroke-width=".3"/><path d="M25.5 11Q50 11.9 74.5 11M17.2 18Q50 19.2 82.8 18M11.7 26Q50 27.4 88.3 26M8.8 34Q50 35.6 91.2 34M7.9 42Q50 43.6 92.1 42M9.1 51Q50 52.5 90.9 51M12.5 60Q50 61.4 87.5 60M18 69Q50 70.2 82 69M24.9 78Q50 78.9 75.1 78M32.3 87Q50 87.7 67.7 87" fill="none" stroke="#0b1730" stroke-opacity=".07" stroke-width=".3"/><use href="#e" xlink:href="#e" fill="url(#l)"/><use href="#e" xlink:href="#e" fill="url(#r)"/><use href="#e" xlink:href="#e" fill="url(#u)"/><path d="M37.5 95.3Q37.4 98 39 100H61Q62.6 98 62.5 95.3Q50 96.39999999999999 37.5 95.3Z" fill="url(#s)"/><circle cx="50" cy="4.4" r="1.3" fill="#2a2a2a" fill-opacity=".55"/></g><g transform="translate(300 0)"><defs><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="0" y1="121" x2="0" y2="130"><stop offset="0" stop-color="#a0805a"/><stop offset="1" stop-color="#5a3f28"/></linearGradient><linearGradient id="q" gradientUnits="userSpaceOnUse" x1="44" y1="0" x2="56" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="48" y1="0" x2="52" y2="0"><stop offset="0" stop-color="#8e8e8e"/><stop offset=".5" stop-color="#5a5a5a"/><stop offset="1" stop-color="#3a3a3a"/></linearGradient></defs><ellipse cx="50" cy="100" rx="11" ry="1.7" fill="#14110f"/><path d="M39.7 99.4L46.7 116M60.3 99.4L53.3 116M45.8 99.8L47.6 116M54.2 99.8L52.4 116M46.9 118L45.4 121.6M53.1 118L54.6 121.6" fill="none" stroke="#221e1b" stroke-opacity=".55" stroke-width=".4"/><rect x="48.4" y="113.4" width="3.2" height="2.8" fill="url(#b)"/><rect x="46.4" y="116" width="7.2" height="2" fill="#2b2b2b"/><path d="M44.5 121.6H55.5L54.7 129.6H45.3Z" fill="url(#k)"/><path d="M44.5 121.6H55.5L54.7 129.6H45.3Z" fill="url(#q)"/><path d="M44.6 122.7H55.4M44.9 124.7H55.1M45 126.7H55" stroke="#000" stroke-opacity=".12" stroke-width=".4"/><rect x="45.3" y="128.3" width="9.4" height="1.3" fill="#3d2b1c"/><rect x="44.5" y="121.6" width="11" height="1" fill="#6d4c2e"/></g></svg>');
var OLD_HOME_IMAGE = '<svg class="group-image" viewBox="0 0 208 208"><style>svg.group-image{overflow:visible;--x:var(--origami-sun-x,0);--y:var(--origami-sun-y,-1);--h:var(--origami-sun-shadow,0);--l:var(--origami-sun-light,0);--ps:var(--origami-sun-path-start,90);--pl:var(--origami-sun-path,180)}.osh{opacity:calc(var(--l) * .34)}.osh g{transform:translate(calc(var(--h) * (var(--x) * -2.5px - var(--y) * 4.33px)),calc(var(--h) * (var(--x) * 4.33px - var(--y) * 2.5px)))}.scheme-dark .osh{opacity:.45}.scheme-dark .osh g{transform:translate(0,5.5px)}.oao{fill:rgba(0,0,0,.2)}.scheme-dark .oao{fill:rgba(0,0,0,.65)}.ol{fill:#e5e6e8}.or{fill:#d9d9dc}.orf{fill:#f5f5f4}.scheme-dark .ol{fill:#2d2e32}.scheme-dark .or{fill:#252629}.scheme-dark .orf{fill:#38393e}[class*=weather-snow] .orf{fill:#fff}.scheme-dark[class*=weather-snow] .orf{fill:#5a5c61}.olx,.orx{fill:#fff}.olx{opacity:calc(var(--l) * (var(--x) * -.5 - var(--y) * .87))}.orx{opacity:calc(var(--l) * (var(--x) * .87 - var(--y) * .5))}.ofx{fill:#b2c1d1;opacity:var(--l)}.ow,.owl{fill:#5f6167}.scheme-dark .ow{fill:#18191b}.scheme-dark .owl{fill:#ffb24f}.olp,.ogl,.orl{display:none}.scheme-dark .olp,.scheme-dark .ogl{display:inline;fill:#ff9b3d}.olp{opacity:.4}.orl{opacity:.2}.scheme-light[class*=-rainy] .orl,.scheme-light.weather-pouring .orl{display:inline}.org{fill:none;stroke:currentColor;stroke-opacity:.16;stroke-width:.9}.opa{stroke-opacity:.5;stroke-dasharray:var(--pl) 360;transform:rotate(calc((30 - var(--ps) - var(--pl)) * 1deg))}.odt{fill:currentColor;opacity:var(--l);transform:translate(calc(80px + var(--x) * 85.18px + var(--y) * 22.82px),calc(110px + var(--x) * 13.18px - var(--y) * 49.18px))}</style><defs><filter id="ob"><feGaussianBlur stdDeviation="4.5"/></filter><filter id="oB" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="4"/></filter><rect id="of" width="96" height="60"/></defs><g transform="matrix(.866 -.5 -.866 -.5 64.4 149)"><g class="osh" filter="url(#ob)"><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/></g></g></g></g></g></g></g></g></g></g></g><path class="oao" d="M-3 -3h102v66h-102z" filter="url(#ob)"/><path class="olp" d="M-16 6h16v22h-16zM10 -16h14v16h-14zM72 -16h14v16h-14z" filter="url(#oB)"/><g class="org" transform="translate(48 30)"><circle r="72"/><circle class="opa" r="72" pathLength="360"/></g></g><g class="orl"><use href="#oF1" transform="matrix(1 1.155 0 -1 0 223.6)"/><use href="#oF2" transform="matrix(1 -1.155 0 -1 0 372.4)"/></g><circle class="odt" r="2.6"/><g id="oF1"><g class="ol"><path id="oP1" d="M64.4 149 12.5 119 12.5 77 38.4 60 64.4 107Z"/></g><use class="olx" href="#oP1"/><g transform="matrix(-.866 -.5 0 -1 64.4 149)"><path class="ow" d="M10 26h7v9h-7zM36 0h9v20h-9z"/><g class="owl"><path id="oW1" d="M8 8h16v10h-16zM38 26h7v9h-7zM27 49h6v6h-6z"/></g><use class="ogl" href="#oW1" filter="url(#oB)"/></g></g><g id="oF2"><g class="or"><path id="oP2" d="M64.4 149 147.5 101 147.5 59 64.4 107Z"/></g><use class="orx" href="#oP2"/><g transform="matrix(.866 -.5 0 -1 64.4 149)"><path class="ow" d="M43 8h10v10h-10zM12 26h10v9h-10zM74 26h10v9h-10z"/><g class="owl"><path id="oW2" d="M12 8h10v10h-10zM43 26h10v9h-10zM74 8h10v10h-10z"/></g><use class="ogl" href="#oW2" filter="url(#oB)"/></g></g><g class="orf"><path id="oP3" d="M64.4 107 147.5 59 121.6 12 38.4 60Z"/></g><use class="ofx" href="#oP3"/></svg>';

// src/origami-weather.js
console.info(
  "%c \u25EA Origami Weather ",
  "color: #fff; border-radius: 6px; background: linear-gradient(135deg, #888 0%, #000 100%); font-family: 'Helvetica Neue', Helvetica, sans-serif; font-weight: bold; padding: 4px 8px;"
);
for (const _prop of ["--origami-fade-start", "--origami-fade-end", "--origami-gauge-pos"]) {
  try {
    CSS.registerProperty({ name: _prop, syntax: "<number>", inherits: false, initialValue: "0" });
  } catch (_e) {
  }
}
var FALLBACK_WEATHER = Object.freeze({
  state: "cloudy",
  attributes: { temperature: "--", temperature_unit: "", wind_speed: 0, wind_speed_unit: "", friendly_name: "Weather Unavailable" }
});
var _SKY_FILTERS = Object.freeze({
  "sunny": { light: "brightness(1.08) saturate(1.12) contrast(1.02)", dark: "brightness(1.04) saturate(1.10)" },
  "clear-night": { light: "brightness(1.04) saturate(1.08)", dark: "brightness(1.02) saturate(1.12)" },
  "partlycloudy": { light: "brightness(1.00) saturate(0.95) contrast(0.98)", dark: "brightness(0.96) saturate(0.90)" },
  "cloudy": { light: "brightness(0.92) saturate(0.72) contrast(0.96)", dark: "brightness(0.88) saturate(0.65) contrast(0.95)" },
  "windy": { light: "brightness(1.02) saturate(1.05) hue-rotate(-3deg)", dark: "brightness(0.98) saturate(1.00)" },
  "windy-variant": { light: "brightness(1.00) saturate(1.02) hue-rotate(-3deg)", dark: "brightness(0.96) saturate(0.95)" },
  "fog": { light: "brightness(1.04) saturate(0.40) contrast(0.85) sepia(0.06)", dark: "brightness(1.12) saturate(0.30) contrast(0.80) hue-rotate(-6deg)" },
  "rainy": { light: "brightness(0.95) saturate(0.80) contrast(0.96) hue-rotate(4deg)", dark: "brightness(0.85) saturate(0.70) contrast(0.94) hue-rotate(3deg)" },
  "pouring": { light: "brightness(0.88) saturate(0.68) contrast(0.93) hue-rotate(5deg)", dark: "brightness(0.78) saturate(0.55) contrast(0.90) hue-rotate(4deg)" },
  "lightning": { light: "brightness(0.89) saturate(0.62) contrast(1.10) hue-rotate(7deg)", dark: "brightness(0.76) saturate(0.55) contrast(1.15) hue-rotate(6deg)" },
  "lightning-rainy": { light: "brightness(0.86) saturate(0.58) contrast(1.09) hue-rotate(8deg)", dark: "brightness(0.72) saturate(0.50) contrast(1.12) hue-rotate(7deg)" },
  "snowy": { light: "brightness(1.06) saturate(0.55) contrast(0.90) hue-rotate(-4deg) sepia(0.04)", dark: "brightness(0.92) saturate(0.48) contrast(0.92) hue-rotate(-3deg)" },
  "snowy-rainy": { light: "brightness(0.95) saturate(0.58) contrast(0.92) hue-rotate(-2deg)", dark: "brightness(0.86) saturate(0.50) contrast(0.92) hue-rotate(-2deg)" },
  "hail": { light: "brightness(0.86) saturate(0.55) contrast(1.04) hue-rotate(3deg)", dark: "brightness(0.80) saturate(0.48) contrast(1.02) hue-rotate(3deg)" },
  "exceptional": { light: "brightness(1.08) saturate(1.12) contrast(1.02)", dark: "brightness(1.02) saturate(1.12)" },
  "default": { light: "brightness(1.00) saturate(1.00)", dark: "brightness(0.95) saturate(0.90)" }
});
var _DARK_THEME_FILTER = "brightness(0.8) saturate(1.3)";
var _HAZE_PALETTE = Object.freeze({
  light: [{ c: [88, 176, 220, 0.62] }, { core: [255, 255, 250, 0.98], c: [214, 234, 250, 0.8] }, { c: [96, 140, 214, 0.6] }],
  dark: [{ c: [58, 150, 190, 0.7] }, { core: [224, 236, 255, 0.6], c: [130, 168, 224, 0.5] }, { c: [46, 82, 168, 0.72] }]
});
var _HAZE_TUNING = Object.freeze({
  "sunny": { light: { tone: [255, 236, 198], mix: 0.3, alpha: 0.72, core: 1, scale: 1 }, dark: { tone: [90, 116, 176], mix: 0.22, alpha: 0.8, core: 0.85, scale: 1 } },
  "clear-night": { light: { tone: [120, 150, 200], mix: 0.28, alpha: 0.64, core: 0.7, scale: 1 }, dark: { tone: [40, 66, 128], mix: 0.3, alpha: 0.78, core: 0.55, scale: 1 } },
  "partlycloudy": { light: { tone: [244, 240, 232], mix: 0.22, alpha: 0.72, core: 0.95, scale: 1.05 }, dark: { tone: [70, 96, 148], mix: 0.28, alpha: 0.8, core: 0.7, scale: 1.05 } },
  "cloudy": { light: { tone: [222, 224, 230], mix: 0.34, alpha: 0.66, core: 0.82, scale: 1.1 }, dark: { tone: [66, 80, 108], mix: 0.38, alpha: 0.76, core: 0.55, scale: 1.1 } },
  "windy": { light: { tone: [232, 240, 240], mix: 0.18, alpha: 0.7, core: 1, scale: 1.05 }, dark: { tone: [58, 90, 138], mix: 0.24, alpha: 0.8, core: 0.75, scale: 1.05 } },
  "windy-variant": { light: { tone: [232, 240, 240], mix: 0.18, alpha: 0.7, core: 1, scale: 1.05 }, dark: { tone: [58, 90, 138], mix: 0.24, alpha: 0.8, core: 0.75, scale: 1.05 } },
  "fog": { light: { tone: [236, 236, 234], mix: 0.52, alpha: 0.6, core: 0.88, scale: 1.35 }, dark: { tone: [150, 162, 180], mix: 0.68, alpha: 0.78, core: 0.6, scale: 1.35 } },
  "rainy": { light: { tone: [138, 158, 190], mix: 0.36, alpha: 0.68, core: 0.66, scale: 1.08 }, dark: { tone: [40, 58, 92], mix: 0.42, alpha: 0.78, core: 0.45, scale: 1.08 } },
  "pouring": { light: { tone: [108, 128, 166], mix: 0.44, alpha: 0.7, core: 0.58, scale: 1.1 }, dark: { tone: [30, 44, 74], mix: 0.5, alpha: 0.8, core: 0.4, scale: 1.1 } },
  "lightning": { light: { tone: [120, 128, 168], mix: 0.44, alpha: 0.68, core: 0.62, scale: 1.1 }, dark: { tone: [40, 46, 80], mix: 0.46, alpha: 0.76, core: 0.45, scale: 1.1 } },
  "lightning-rainy": { light: { tone: [104, 116, 158], mix: 0.48, alpha: 0.7, core: 0.56, scale: 1.1 }, dark: { tone: [32, 40, 72], mix: 0.5, alpha: 0.78, core: 0.4, scale: 1.1 } },
  "snowy": { light: { tone: [244, 248, 255], mix: 0.4, alpha: 0.72, core: 0.98, scale: 1.18 }, dark: { tone: [118, 134, 166], mix: 0.42, alpha: 0.8, core: 0.65, scale: 1.18 } },
  "snowy-rainy": { light: { tone: [206, 220, 236], mix: 0.4, alpha: 0.68, core: 0.8, scale: 1.12 }, dark: { tone: [76, 92, 122], mix: 0.44, alpha: 0.78, core: 0.55, scale: 1.12 } },
  "hail": { light: { tone: [176, 190, 214], mix: 0.4, alpha: 0.68, core: 0.66, scale: 1.1 }, dark: { tone: [58, 74, 106], mix: 0.44, alpha: 0.78, core: 0.5, scale: 1.1 } },
  "exceptional": { light: { tone: [255, 236, 198], mix: 0.3, alpha: 0.72, core: 1, scale: 1 }, dark: { tone: [90, 116, 176], mix: 0.22, alpha: 0.8, core: 0.85, scale: 1 } },
  "default": { light: { tone: [232, 236, 242], mix: 0.16, alpha: 0.7, core: 1, scale: 1 }, dark: { tone: [56, 78, 120], mix: 0.22, alpha: 0.8, core: 0.75, scale: 1 } }
});
var WEATHER_TUNING = Object.freeze({
  "sunny": { icon: "mdi:weather-sunny", precipitation: null, lightning: false, sunVisibility: 1, sunSaturation: 1, cloudDensity: 0, cloudDarkness: 0, cloudSpeed: 1, mist: null, starCount: 800, starOpacity: 1 },
  "clear-night": { icon: "mdi:weather-night", precipitation: null, lightning: false, sunVisibility: 1, sunSaturation: 1, cloudDensity: 0, cloudDarkness: 0, cloudSpeed: 0.6, mist: null, starCount: 800, starOpacity: 1 },
  "partlycloudy": { icon: "mdi:weather-partly-cloudy", precipitation: null, lightning: false, sunVisibility: 0.78, sunSaturation: 0.85, cloudDensity: 0.3, cloudDarkness: 0.2, cloudSpeed: 1, mist: "scattered", starCount: 450, starOpacity: 0.7 },
  "cloudy": { icon: "mdi:weather-cloudy", precipitation: null, lightning: false, sunVisibility: 0.42, sunSaturation: 0.5, cloudDensity: 0.6, cloudDarkness: 0.55, cloudSpeed: 1, mist: "overcast", starCount: 300, starOpacity: 0.5 },
  "windy": { icon: "mdi:weather-windy", precipitation: null, lightning: false, sunVisibility: 0.6, sunSaturation: 0.68, cloudDensity: 0.5, cloudDarkness: 0.12, cloudSpeed: 3.2, mist: "scattered", starCount: 500, starOpacity: 0.8 },
  "windy-variant": { icon: "mdi:weather-windy-variant", precipitation: null, lightning: false, sunVisibility: 0.85, sunSaturation: 0.9, cloudDensity: 0.55, cloudDarkness: 0.18, cloudSpeed: 3.2, mist: "scattered", starCount: 600, starOpacity: 0.8 },
  "fog": { icon: "mdi:weather-fog", precipitation: null, lightning: false, sunVisibility: 0.26, sunSaturation: 0.12, cloudDensity: 0, cloudDarkness: 0.42, cloudSpeed: 0.5, mist: "fog", starCount: 250, starOpacity: 0.35 },
  "rainy": { icon: "mdi:weather-rainy", precipitation: "rain", lightning: false, sunVisibility: 0.34, sunSaturation: 0.45, cloudDensity: 0.6, cloudDarkness: 0.6, cloudSpeed: 1.35, mist: "overcast", starCount: 0, starOpacity: 0 },
  "pouring": { icon: "mdi:weather-pouring", precipitation: "pour", lightning: false, sunVisibility: 0.2, sunSaturation: 0.3, cloudDensity: 0.77, cloudDarkness: 0.82, cloudSpeed: 1.6, mist: "overcast", starCount: 0, starOpacity: 0 },
  "lightning": { icon: "mdi:weather-lightning", precipitation: "storm", lightning: true, sunVisibility: 0.3, sunSaturation: 0.4, cloudDensity: 0.3, cloudDarkness: 0.72, cloudSpeed: 1.8, mist: "overcast", starCount: 0, starOpacity: 0 },
  "lightning-rainy": { icon: "mdi:weather-lightning-rainy", precipitation: "storm", lightning: true, sunVisibility: 0.24, sunSaturation: 0.35, cloudDensity: 0.77, cloudDarkness: 0.78, cloudSpeed: 1.8, mist: "overcast", starCount: 0, starOpacity: 0 },
  "snowy": { icon: "mdi:weather-snowy", precipitation: "snow", lightning: false, sunVisibility: 0.38, sunSaturation: 0.3, cloudDensity: 0.3, cloudDarkness: 0.35, cloudSpeed: 0.8, mist: "overcast", starCount: 600, starOpacity: 0.4 },
  "snowy-rainy": { icon: "mdi:weather-snowy-rainy", precipitation: "sleet", lightning: false, sunVisibility: 0.3, sunSaturation: 0.35, cloudDensity: 0.3, cloudDarkness: 0.6, cloudSpeed: 1.3, mist: "overcast", starCount: 450, starOpacity: 0.3 },
  "hail": { icon: "mdi:weather-hail", precipitation: "hail", lightning: false, sunVisibility: 0.3, sunSaturation: 0.4, cloudDensity: 0.3, cloudDarkness: 0.7, cloudSpeed: 1.5, mist: "overcast", starCount: 350, starOpacity: 0.45 },
  "exceptional": { icon: "mdi:weather-sunny", precipitation: null, lightning: false, sunVisibility: 1, sunSaturation: 1, cloudDensity: 0, cloudDarkness: 0, cloudSpeed: 0.6, mist: null, starCount: 800, starOpacity: 1 },
  "default": { icon: "mdi:weather-cloudy", precipitation: null, lightning: false, sunVisibility: 0.85, sunSaturation: 0.9, cloudDensity: 0.3, cloudDarkness: 0.3, cloudSpeed: 1, mist: "scattered", starCount: 800, starOpacity: 0.8 }
});
var _weatherTuning = (state) => WEATHER_TUNING[state] || WEATHER_TUNING.default;
var _WIND_UNITS_MS = Object.freeze({ "m/s": 1, "km/h": 1 / 3.6, "mph": 0.44704, "kn": 0.514444, "kt": 0.514444, "ft/s": 0.3048 });
var _windToMs = (value, unit) => {
  const v = parseFloat(value), u = String(unit || "").trim();
  if (!Number.isFinite(v) || v < 0) return null;
  if (/^(bft|beaufort)$/i.test(u)) return 0.836 * Math.pow(v, 1.5);
  const k = _WIND_UNITS_MS[u] || _WIND_UNITS_MS[u.toLowerCase()];
  return k ? v * k : null;
};
var SUN_PALETTE = Object.freeze({
  noon: { core: [255, 255, 255], inner: [255, 250, 240], mid: [255, 237, 200], edge: [255, 219, 158], glowInner: [255, 200, 124], glowOuter: [255, 238, 210] },
  horizon: { core: [255, 246, 222], inner: [255, 214, 148], mid: [255, 171, 92], edge: [245, 137, 60], glowInner: [240, 120, 55], glowOuter: [252, 176, 110] }
});
var MOON_DISC_PATH = "M 50 2 A 48 48 0 1 1 50 98 A 48 48 0 1 1 50 2 Z";
var WEATHER_ATTR_ICONS = Object.freeze({
  temperature: "mdi:thermometer",
  apparent_temperature: "mdi:thermometer-lines",
  humidity: "mdi:water-percent",
  pressure: "mdi:gauge",
  wind_speed: "mdi:weather-windy",
  wind_bearing: "mdi:compass-outline",
  wind_gust_speed: "mdi:weather-windy-variant",
  visibility: "mdi:eye-outline",
  dew_point: "mdi:thermometer-low",
  uv_index: "mdi:weather-sunny-alert",
  cloud_coverage: "mdi:cloud-outline",
  ozone: "mdi:weather-hazy"
});
var FORECAST_ATTR_ICONS = Object.freeze({
  ...WEATHER_ATTR_ICONS,
  condition: "mdi:weather-partly-cloudy",
  templow: "mdi:thermometer-low",
  precipitation: "mdi:weather-rainy",
  precipitation_probability: "mdi:weather-rainy"
});
/*!
 * The BUILTIN_ICONS below are a slight remix of the Lucide icon set
 * (https://lucide.dev), used under the ISC License.
 * Portions of Lucide are Copyright (c) 2013-2022 Cole Bemis (Feather, MIT);
 * all other Lucide copyright (c) 2022 Lucide Contributors.
 * This attribution must remain with the icon data and must never be removed.
 */
var BUILTIN_ICONS = Object.freeze({
  "clear-night": '<g><animateTransform attributeName="transform" type="translate" values="0,0; -0.7,0.7; 0,0" dur="3.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="rotate" values="-4 12 12; 4 12 12; -4 12 12" dur="4s" repeatCount="indefinite" additive="sum"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="currentColor" fill-opacity="0.12"><animate attributeName="fill-opacity" values="0.06;0.22;0.06" dur="4s" repeatCount="indefinite"/></path></g>',
  "cloudy": '<g><animateTransform attributeName="transform" type="translate" values="0,0;0.6,0;0,0;-0.6,0;0,0" dur="6s" repeatCount="indefinite"/><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" fill-opacity="0.08"/></g>',
  "fog": '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="M16 17H7" stroke-dasharray="2 2.5"><animate attributeName="stroke-dashoffset" values="0;9" dur="3s" repeatCount="indefinite"/></path><path d="M17 21H9" stroke-dasharray="2 2.5"><animate attributeName="stroke-dashoffset" values="0;-9" dur="4s" repeatCount="indefinite"/></path>',
  "hail": '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="M16 14v2" stroke-opacity="0.8"><animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="0.8s" repeatCount="indefinite"/></path><path d="M8 14v2" stroke-opacity="0.8"><animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="0.8s" begin="0.3s" repeatCount="indefinite"/></path><circle cx="16" cy="20" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="18;20;19.2;20" dur="1s" repeatCount="indefinite"/></circle><circle cx="8" cy="20" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="18;20;19.2;20" dur="1s" begin="0.35s" repeatCount="indefinite"/></circle><path d="M12 16v2" stroke-opacity="0.8"><animate attributeName="stroke-opacity" values="0.8;0.3;0.8" dur="0.8s" begin="0.15s" repeatCount="indefinite"/></path><circle cx="12" cy="22" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="20;22;21.2;22" dur="1s" begin="0.2s" repeatCount="indefinite"/></circle>',
  "lightning": '<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" fill="currentColor" fill-opacity="0.08"/><path d="m13 12-3 5h4l-3 5" stroke-width="1.75"><animate attributeName="stroke-opacity" values="1;1;0.15;1;1;1;0.1;0.8;1;1;1;1;0.12;1" dur="4s" repeatCount="indefinite"/></path>',
  "lightning-rainy": '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="currentColor" fill-opacity="0.06"><animate attributeName="fill-opacity" values="0.06;0.06;0.2;0.06;0.06;0.06;0.15;0.06" dur="3.5s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values="1;1;0.2;1;1;1;0.15;1" dur="3.5s" repeatCount="indefinite"/></path>',
  "partlycloudy": '<g stroke-opacity="0.5"><animate attributeName="stroke-opacity" values="0.5;0.7;0.5" dur="3s" repeatCount="indefinite"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/></g><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><g><animateTransform attributeName="transform" type="translate" values="0,0;0.5,0;0,0;-0.5,0;0,0" dur="7s" repeatCount="indefinite"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" fill="currentColor" fill-opacity="0.08"/></g>',
  "partlycloudy-night": '<path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" fill="currentColor" fill-opacity="0.12"><animate attributeName="fill-opacity" values="0.06;0.22;0.06" dur="4s" repeatCount="indefinite"/></path><g><animateTransform attributeName="transform" type="translate" values="0,0;0.5,0;0,0;-0.5,0;0,0" dur="7s" repeatCount="indefinite"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" fill="currentColor" fill-opacity="0.08"/></g>',
  "pouring": '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="m9.2 22 3-7" stroke-opacity="0.7"><animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="0.7s" repeatCount="indefinite"/></path><path d="m9 13-3 7" stroke-opacity="0.7"><animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="0.7s" begin="0.25s" repeatCount="indefinite"/></path><path d="m17 13-3 7" stroke-opacity="0.7"><animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="0.7s" begin="0.5s" repeatCount="indefinite"/></path>',
  "rainy": '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><path d="M16 14v6" stroke-dasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" repeatCount="indefinite"/></path><path d="M8 14v6" stroke-dasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" begin="0.35s" repeatCount="indefinite"/></path><path d="M12 16v6" stroke-dasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-5" dur="1s" begin="0.7s" repeatCount="indefinite"/></path>',
  "snowy": '<g><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="12s" repeatCount="indefinite"/><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/></g>',
  "snowy-rainy": '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" fill="currentColor" fill-opacity="0.08"/><circle cx="8" cy="15.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="15;16.5;15" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/></circle><circle cx="8" cy="19.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="19;20.5;19" dur="2.2s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.2s" begin="0.6s" repeatCount="indefinite"/></circle><circle cx="12" cy="17.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="17;18.5;17" dur="1.8s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="1.8s" begin="0.3s" repeatCount="indefinite"/></circle><circle cx="12" cy="21.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="21;22.5;21" dur="2.4s" begin="0.9s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.4s" begin="0.9s" repeatCount="indefinite"/></circle><circle cx="16" cy="15.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="15;16.5;15" dur="2.1s" begin="0.45s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="2.1s" begin="0.45s" repeatCount="indefinite"/></circle><circle cx="16" cy="19.5" r="0.5" fill="currentColor" stroke="none"><animate attributeName="cy" values="19;20.5;19" dur="1.9s" begin="0.75s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.4;1" dur="1.9s" begin="0.75s" repeatCount="indefinite"/></circle>',
  "sunny": '<g><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="30s" repeatCount="indefinite"/><circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity="0.1"><animate attributeName="fill-opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite"/><animate attributeName="r" values="4;4.25;4" dur="3s" repeatCount="indefinite"/></circle><g stroke-opacity="1"><animate attributeName="stroke-opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></g></g>',
  "windy": '<path d="M12.8 19.6A2 2 0 1 0 14 16H2" stroke-dasharray="22" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-3;0" dur="2.5s" repeatCount="indefinite"/></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" stroke-dasharray="26" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-4;0" dur="3s" begin="0.3s" repeatCount="indefinite"/></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2" stroke-dasharray="18" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-3;0" dur="2s" begin="0.6s" repeatCount="indefinite"/></path>',
  "windy-variant": '<path d="M10 2v8" stroke-opacity="0.5"/><path d="M12.8 21.6A2 2 0 1 0 14 18H2" stroke-dasharray="22" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-3;0" dur="2.5s" repeatCount="indefinite"/></path><path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" stroke-dasharray="26" stroke-dashoffset="0"><animate attributeName="stroke-dashoffset" values="0;-4;0" dur="3s" begin="0.3s" repeatCount="indefinite"/></path><g stroke-opacity="0.5"><animate attributeName="stroke-opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/><path d="m6 6 4 4 4-4"/></g>',
  "exceptional": '<g><animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="30s" repeatCount="indefinite"/><circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity="0.1"><animate attributeName="fill-opacity" values="0.1;0.18;0.1" dur="3s" repeatCount="indefinite"/><animate attributeName="r" values="4;4.25;4" dur="3s" repeatCount="indefinite"/></circle><g stroke-opacity="1"><animate attributeName="stroke-opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></g></g>',
  "default": '<g><animateTransform attributeName="transform" type="translate" values="0,0;0.6,0;0,0;-0.6,0;0,0" dur="6s" repeatCount="indefinite"/><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" fill="currentColor" fill-opacity="0.08"/></g>'
});
var WeatherEffects = (() => {
  const RAIN = Object.freeze({
    drizzle: { perContainer: 3.4, min: 10, max: 42, vy: [220, 400], width: [0.6, 1.15], lean: 0.1, alpha: [0.25, 0.55], lenBase: [5.5, 13] },
    rain: { perContainer: 10.5, min: 26, max: 118, vy: [380, 700], width: [0.66, 1.65], lean: 0.17, alpha: [0.45, 0.75], lenBase: [7.5, 19.5] },
    pour: { perContainer: 14, min: 34, max: 150, vy: [440, 800], width: [0.72, 1.8], lean: 0.2, alpha: [0.5, 0.82], lenBase: [8.5, 21.5] },
    storm: { perContainer: 12, min: 30, max: 135, vy: [420, 760], width: [0.68, 1.7], lean: 0.22, alpha: [0.48, 0.78], lenBase: [8.5, 20.5] }
  });
  const SNOW = Object.freeze({ perContainer: 15, min: 40, max: 150, vy: [12, 55], dia: [1.2, 22], alpha: [0.25, 0.75] });
  const HAIL = Object.freeze({ perContainer: 4.5, min: 12, max: 45, vy: [450, 1050], dia: [1.5, 14], alpha: [0.45, 0.9] });
  const COLORS = Object.freeze({
    rain: { light: { core: [48, 66, 98], head: [92, 116, 156] }, dark: { core: [150, 178, 224], head: [240, 246, 255] } },
    flake: { light: { core: [255, 255, 255], edge: [230, 240, 255] }, dark: { core: [255, 255, 255], edge: [208, 224, 250] } },
    hail: { light: { hi: [255, 255, 255], body: [230, 240, 255] }, dark: { hi: [244, 248, 255], body: [198, 214, 242] } }
  });
  const _sprites = /* @__PURE__ */ new Map();
  const _rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const _mix = (a, b, t) => [Math.round(a[0] + (b[0] - a[0]) * t), Math.round(a[1] + (b[1] - a[1]) * t), Math.round(a[2] + (b[2] - a[2]) * t)];
  function _sprite(kind, schemeDark) {
    const key = `${kind}|${schemeDark ? "dark" : "light"}`;
    let c = _sprites.get(key);
    if (c) return c;
    c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    if (kind === "streak") {
      const W = 16, H = 128;
      c.width = W;
      c.height = H;
      const col = schemeDark ? COLORS.rain.dark : COLORS.rain.light;
      const mid = _mix(col.core, col.head, 0.55);
      const g = ctx.createLinearGradient(0, 0, 0, H);
      if (schemeDark) {
        g.addColorStop(0, _rgba(col.core, 0));
        g.addColorStop(0.3, _rgba(col.core, 0.16));
        g.addColorStop(0.62, _rgba(col.core, 0.42));
        g.addColorStop(0.86, _rgba(mid, 0.7));
        g.addColorStop(0.965, _rgba(col.head, 1));
        g.addColorStop(1, _rgba(col.head, 0));
      } else {
        g.addColorStop(0, _rgba(col.core, 0));
        g.addColorStop(0.42, _rgba(col.core, 0.14));
        g.addColorStop(0.7, _rgba(col.core, 0.4));
        g.addColorStop(0.88, _rgba(mid, 0.72));
        g.addColorStop(0.965, _rgba(col.head, 0.98));
        g.addColorStop(1, _rgba(col.head, 0));
      }
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      const hx = ctx.createLinearGradient(0, 0, W, 0);
      hx.addColorStop(0, "rgba(0,0,0,0)");
      hx.addColorStop(0.42, "rgba(0,0,0,0.55)");
      hx.addColorStop(0.5, "rgba(0,0,0,1)");
      hx.addColorStop(0.58, "rgba(0,0,0,0.55)");
      hx.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = hx;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const spec = ctx.createRadialGradient(W / 2, H * 0.95, 0, W / 2, H * 0.95, W * 0.5);
      spec.addColorStop(0, _rgba(col.head, 0.9));
      spec.addColorStop(0.6, _rgba(col.head, 0.28));
      spec.addColorStop(1, _rgba(col.head, 0));
      ctx.fillStyle = spec;
      ctx.fillRect(0, H * 0.86, W, H * 0.14);
    } else if (kind === "flake") {
      const S = 32;
      c.width = S;
      c.height = S;
      const col = schemeDark ? COLORS.flake.dark : COLORS.flake.light;
      const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
      g.addColorStop(0, _rgba(col.core, 0.95));
      g.addColorStop(0.34, _rgba(col.core, 0.88));
      g.addColorStop(0.72, _rgba(col.edge, 0.26));
      g.addColorStop(1, _rgba(col.edge, 0));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, S, S);
    } else if (kind === "flame") {
      const S = 24;
      c.width = S;
      c.height = S;
      const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
      g.addColorStop(0, "rgba(255,245,215,1)");
      g.addColorStop(0.35, "rgba(255,170,60,0.75)");
      g.addColorStop(1, "rgba(255,120,30,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, S, S);
    } else {
      const W = 28, H = 34;
      c.width = W;
      c.height = H;
      const col = schemeDark ? COLORS.hail.dark : COLORS.hail.light;
      const g = ctx.createRadialGradient(W * 0.4, H * 0.34, 0, W * 0.5, H * 0.5, H * 0.55);
      g.addColorStop(0, _rgba(col.hi, 0.95));
      g.addColorStop(0.45, _rgba(col.body, 0.85));
      g.addColorStop(0.85, _rgba(col.body, 0.3));
      g.addColorStop(1, _rgba(col.body, 0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(W / 2, H / 2, W * 0.42, H * 0.46, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    _sprites.set(key, c);
    return c;
  }
  const _loaders = /* @__PURE__ */ new Map();
  function _imgLoader(src) {
    if (_loaders.has(src)) return _loaders.get(src);
    let img = null, started = false;
    const get = () => {
      if (!started) {
        started = true;
        Promise.resolve(typeof src === "function" ? src() : src).then((url) => {
          const i = new Image();
          i.onload = () => {
            img = i;
          };
          i.src = url;
        }).catch(() => {
        });
      }
      return img;
    };
    _loaders.set(src, get);
    return get;
  }
  const _getCloudImg = _imgLoader(() => import("./image-assets-clouds-HYH5R5U7.js").then((m) => m.CLOUD_SPRITE));
  const _getMistImg = _imgLoader(() => import("./image-assets-mist-VNQVJN3V.js").then((m) => m.CLOUD_MIST));
  const _getBirdImg = _imgLoader(() => import("./image-assets-birds-Z4ZU72J5.js").then((m) => m.BIRD_SHEET));
  const _getBalloonImg = _imgLoader(BALLOON_SHEET);
  const _getPlaneImg = _imgLoader(() => import("./image-assets-planes-H3FJKFTA.js").then((m) => m.PLANE_SHEET));
  const _sizeScale = (w, h) => 0.65 + 0.35 * Math.max(0.8, Math.min(1.8, Math.sqrt(w * h) / 380));
  function _cloudSprite(src, top, bot, res) {
    const iw = src.naturalWidth || src.width;
    const ih = src.naturalHeight || src.height;
    if (!iw) return null;
    const cw = Math.round(iw * (res || 1)), ch = Math.round(ih * (res || 1));
    const c = document.createElement("canvas");
    c.width = cw;
    c.height = ch;
    const cx = c.getContext("2d");
    cx.imageSmoothingEnabled = true;
    cx.imageSmoothingQuality = "high";
    cx.drawImage(src, 0, 0, cw, ch);
    const g = cx.createLinearGradient(0, ch * 0.12, 0, ch * 0.88);
    g.addColorStop(0, `rgb(${top[0]},${top[1]},${top[2]})`);
    g.addColorStop(1, `rgb(${bot[0]},${bot[1]},${bot[2]})`);
    cx.globalCompositeOperation = "multiply";
    cx.fillStyle = g;
    cx.fillRect(0, 0, cw, ch);
    cx.globalCompositeOperation = "destination-in";
    cx.drawImage(src, 0, 0, cw, ch);
    cx.globalCompositeOperation = "source-over";
    return c;
  }
  function _tintLift(src, top, bot, lift) {
    const solid = document.createElement("canvas");
    solid.width = src.width;
    solid.height = src.height;
    const sx = solid.getContext("2d");
    for (let i = 0; i < 16; i++) sx.drawImage(src, 0, 0);
    const c = _cloudSprite(solid, top, bot, 1);
    const cx = c.getContext("2d");
    cx.globalCompositeOperation = "screen";
    cx.fillStyle = lift;
    cx.fillRect(0, 0, c.width, c.height);
    cx.globalCompositeOperation = "destination-in";
    cx.drawImage(src, 0, 0);
    cx.globalCompositeOperation = "source-over";
    return c;
  }
  function _mulberry32(seed) {
    let a = seed * 1e9 >>> 0 || 2654435769;
    return function() {
      a |= 0;
      a = a + 1831565813 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  const CLOUD_VARIANTS = 6;
  function _cloudVariantSources(img) {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const rnd = _mulberry32(0.1337);
    const out = [img];
    for (let v = 1; v < CLOUD_VARIANTS; v++) {
      const c = document.createElement("canvas");
      c.width = iw;
      c.height = ih;
      const cx = c.getContext("2d");
      cx.imageSmoothingEnabled = true;
      cx.imageSmoothingQuality = "high";
      const lobes = 2 + v % 2;
      for (let i = 0; i < lobes; i++) {
        const sc = i === 0 ? 0.72 + rnd() * 0.26 : 0.36 + rnd() * 0.36;
        const lw = iw * sc;
        const lh = ih * sc * (0.78 + rnd() * 0.44);
        const dx = i === 0 ? (iw - lw) / 2 + (rnd() - 0.5) * iw * 0.12 : rnd() * (iw - lw);
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
    { size: 90, bright: 0.88, alpha: 0.62, speed: 2e-3, count: 6, stretch: 0.2, res: 1 },
    { size: 150, bright: 0.96, alpha: 0.78, speed: 6e-3, count: 4, stretch: 0.14, res: 1 },
    { size: 250, bright: 1, alpha: 0.92, speed: 0.015, count: 2, stretch: 0.1, res: 1.5 }
  ]);
  const MIST_DARK = 0.4, MIST_LIGHT = 3;
  const MIST = Object.freeze({
    scattered: { count: 2, alpha: 0.6, speed: 1, clearings: 3, clear: 1 },
    overcast: { count: 3, alpha: 0.75, speed: 1, clearings: 4, clear: 1 },
    fog: { count: 3, alpha: 0.9, speed: 1.5, clearings: 4, clear: 0.95 }
  });
  const _windDrift = (ms) => Math.max(0.4, Math.min(4, (ms + 3) / 7));
  const _cloudAtlas = /* @__PURE__ */ new WeakMap();
  function _fit(img, max) {
    const w = img.naturalWidth || img.width, h = img.naturalHeight || img.height, k = max / Math.max(w, h);
    if (k >= 1) return img;
    const c = document.createElement("canvas");
    c.width = Math.round(w * k);
    c.height = Math.round(h * k);
    const cx = c.getContext("2d");
    cx.imageSmoothingQuality = "high";
    cx.drawImage(img, 0, 0, c.width, c.height);
    return c;
  }
  function _cloudBandSprites(own, img, state, schemeDark, backgroundRGB) {
    if (!(img.naturalWidth || img.width)) return null;
    const key = `${state}|${schemeDark}|${backgroundRGB}`;
    if (own.sprites && own.sprites.img === img && own.sprites.key === key) return own.sprites.v;
    let a = _cloudAtlas.get(img);
    if (!a) _cloudAtlas.set(img, a = { srcs: _cloudVariantSources(_fit(img, 512)), bands: /* @__PURE__ */ new Map() });
    let bands = a.bands.get(key);
    if (bands) return (own.sprites = { img, key, v: bands }).v;
    const pal = _cloudPalette(state, schemeDark, backgroundRGB);
    const cl = (v) => Math.max(0, Math.min(255, Math.round(v)));
    bands = CLOUD_BANDS.map((d) => {
      const top = pal.top.map((v) => cl(v * d.bright));
      const bot = pal.bot.map((v) => cl(v * d.bright));
      return a.srcs.map((s) => _cloudSprite(s, top, bot, d.res));
    });
    if (a.bands.size >= 4) a.bands.clear();
    a.bands.set(key, bands);
    return (own.sprites = { img, key, v: bands }).v;
  }
  const BIRD_SHEET_SPEC = Object.freeze({ cells: 13, flapFrames: 12, glideCell: 12, sub: 3, cell: 176, ax: 0.54, ay: 0.52 });
  const BIRD_ACTIVITY = Object.freeze({
    "lightning": 0,
    "lightning-rainy": 0,
    "hail": 0,
    "pouring": 0.5,
    "rainy": 0.7,
    "snowy": 0.7,
    "snowy-rainy": 0.6,
    "fog": 0.6
  });
  const _birdActivity = (state) => {
    const v = BIRD_ACTIVITY[state];
    return v === void 0 ? 1 : v;
  };
  const BIRD_TIERS = Object.freeze([
    { px: [6, 12], alpha: 0.55, weight: 0.3, hz: [3, 4], glide: [0.6, 1.6] },
    { px: [16, 30], alpha: 0.78, weight: 0.48, hz: [2.5, 3.3], glide: [1, 2.6] },
    { px: [26, 38], alpha: 0.95, weight: 0.22, hz: [2, 2.7], glide: [1.4, 3.4] }
  ]);
  const BIRD_MAX_PX = 36;
  const _birdAtlas = { img: null, cells: /* @__PURE__ */ new Map() };
  function _birdCells(own, img, state, schemeDark, night, backgroundRGB, s) {
    if (!(img.naturalWidth || img.width)) return null;
    const key = `${state}|${schemeDark}|${night}|${backgroundRGB}|${s}`;
    if (own.sprites && own.sprites.img === img && own.sprites.key === key) return own.sprites.v;
    if (_birdAtlas.img !== img) {
      _birdAtlas.img = img;
      _birdAtlas.cells.clear();
    }
    let cells = _birdAtlas.cells.get(key);
    if (cells) return (own.sprites = { img, key, v: cells }).v;
    const pal = _cloudPalette(state, schemeDark, backgroundRGB);
    const spec = BIRD_SHEET_SPEC, src = spec.cell, cs = Math.min(src, Math.ceil(BIRD_MAX_PX * s));
    const fc = spec.flapFrames * spec.sub;
    const lift = schemeDark || night ? "rgba(150,174,216,0.28)" : `rgba(${pal.top[0]},${pal.top[1]},${pal.top[2]},0.12)`;
    cells = [];
    for (let i = 0; i <= fc; i++) {
      const c = document.createElement("canvas");
      c.width = cs;
      c.height = cs;
      const cx = c.getContext("2d");
      cx.imageSmoothingQuality = "high";
      if (i === fc) {
        cx.drawImage(img, spec.glideCell * src, 0, src, src, 0, 0, cs, cs);
      } else {
        const f = i / spec.sub | 0, mixT = i % spec.sub / spec.sub;
        cx.globalCompositeOperation = "lighter";
        cx.globalAlpha = 1 - mixT;
        cx.drawImage(img, f * src, 0, src, src, 0, 0, cs, cs);
        if (mixT) {
          cx.globalAlpha = mixT;
          cx.drawImage(img, (f + 1) % spec.flapFrames * src, 0, src, src, 0, 0, cs, cs);
        }
        cx.globalAlpha = 1;
        cx.globalCompositeOperation = "source-over";
      }
      cells.push(_tintLift(c, pal.top, pal.bot, lift));
    }
    if (_birdAtlas.cells.size >= 4) _birdAtlas.cells.clear();
    _birdAtlas.cells.set(key, cells);
    return (own.sprites = { img, key, v: cells }).v;
  }
  function _weightedPick(tiers) {
    const r = Math.random();
    let acc = 0;
    for (const t of tiers) {
      acc += t.weight;
      if (r < acc) return t;
    }
    return tiers[1];
  }
  function _spawnBirdPass(st, w, h) {
    const r = Math.random;
    const g = r();
    const n = Math.min(g < 0.22 ? 1 : g < 0.44 ? 2 : g < 0.84 ? 3 + (r() * 3 | 0) : 6 + (r() * 4 | 0), 12 - st.list.length);
    if (n <= 0) return;
    const dir = r() < 0.5 ? -1 : 1;
    const tier = n >= 6 ? BIRD_TIERS[r() < 0.5 ? 0 : 1] : _weightedPick(BIRD_TIERS);
    const slope = (r() - 0.5) * 0.09;
    let y0 = 0.08 + r() * 0.46;
    if (st.list.length) {
      let best = -1;
      for (let c = 0; c < 8; c++) {
        const cand = 0.08 + r() * 0.46;
        let nearest = Infinity;
        for (const o of st.list) {
          if (o.dir !== dir) continue;
          if ((o.dir > 0 ? o.x : 1 - o.x) > 0.7) continue;
          const d = Math.abs(o.y0 - cand);
          if (d < nearest) nearest = d;
        }
        if (nearest > best) {
          best = nearest;
          y0 = cand;
        }
      }
    }
    const cap = Math.min(BIRD_MAX_PX, h * 0.135);
    const pxL = Math.min(cap, _lerp(tier.px[0], tier.px[1], r()) * _sizeScale(w, h));
    const spL = (0.03 + pxL / Math.max(1, w) * 0.9) * (0.92 + r() * 0.16);
    const latDir = r() < 0.5 ? -1 : 1;
    const lead = n >= 3 && r() < 0.6 ? 0.5 + r() * 0.3 : 1;
    const legs = [[0, 0], [0, 0]];
    const wf = (0.08 + r() * 0.16) * 6.2832, wp = r() * 6.2832;
    const pass = ++st.pass;
    let trail = 0, lat = 0;
    for (let i = 0; i < n; i++) {
      const px = Math.min(cap, pxL * (0.88 + r() * 0.24));
      if (i) {
        const leg = legs[r() < lead ? 0 : 1];
        leg[0] += px * (2 + r() * 1.2) / Math.max(1, w);
        leg[1] += px * (0.2 + r() * 0.35) / Math.max(1, h);
        trail = leg[0];
        lat = (leg === legs[0] ? latDir : -latDir) * Math.min(0.16, leg[1]);
      }
      st.list.push({
        dir,
        px,
        alpha: tier.alpha,
        slope,
        pass,
        x: (dir > 0 ? -0.1 : 1.1) - dir * trail,
        y0: Math.max(0.05, Math.min(0.6, y0 + lat + (r() - 0.5) * px * 0.6 / Math.max(1, h))),
        sp: spL * (0.98 + r() * 0.04),
        hz: _lerp(tier.hz[0], tier.hz[1], r()),
        gl: tier.glide,
        gt: 1 + r() * 3,
        bob: 0.035 + r() * 0.03,
        wf: wf * (0.9 + r() * 0.2),
        wp: wp - wf * trail / spL + (r() - 0.5) * 0.8,
        wa: px * (0.1 + r() * 0.14),
        ph: r(),
        gy: 0,
        vy: 0,
        glide: 0,
        glideT: 1.2 + r() * 3
      });
    }
  }
  function _birdsFrame(inst, ctx, w, h, s, dt, t, env, gust) {
    const st = inst.birds;
    if (!st.next) st.next = t + 1.5 + Math.random() * 2.5;
    if (t >= st.next) {
      if (st.list.length < 10) _spawnBirdPass(st, w, h);
      st.next = t + _lerp(28, 11, st.activity) * (env.night ? 1.6 : 1) * (Math.random() < 0.35 ? 2.5 + Math.random() * 1.5 : 0.75 + Math.random() * 0.5) / st.density;
    }
    if (st.list.length === 0) return;
    const img = _getBirdImg();
    const cells = img && _birdCells(st, img, st.state, env.schemeDark, !!env.night, env.backgroundRGB, s);
    const spec = BIRD_SHEET_SPEC, fc = spec.flapFrames * spec.sub;
    ctx.imageSmoothingQuality = "high";
    for (let i = st.list.length - 1; i >= 0; i--) {
      const b = st.list[i];
      const speed = b.sp * (0.9 + 0.25 * gust) * (b.glide > 0 ? 1.05 : 1);
      b.x += b.dir * speed * dt;
      if (b.dir > 0 && b.x > 1.12 || b.dir < 0 && b.x < -0.12) {
        st.list.splice(i, 1);
        continue;
      }
      const th = t * b.wf + b.wp, cw = Math.cos(th);
      if (b.glide > 0) {
        b.glide -= dt;
        b.vy += (0.15 - b.vy) * Math.min(1, dt * 2.5);
        if (b.glide <= 0) {
          b.glide = 0;
          b.ph = 0.2;
          b.glideT = b.gt * (0.6 + Math.random() * 0.8);
        }
      } else {
        const p0 = b.ph % 1, inc = b.hz * (1 + 0.1 * cw + 2 * Math.max(0, -b.vy)) * dt;
        b.ph += inc;
        b.vy += (-0.5 * b.gy / b.px - b.vy) * Math.min(1, dt * 2.5);
        b.glideT -= dt;
        if (b.glideT <= 0 && p0 <= 0.2 && p0 + inc > 0.2) {
          b.glide = _lerp(b.gl[0], b.gl[1], Math.random());
          for (const o of st.list) if (o !== b && o.pass === b.pass && !o.glide && o.glideT > 0.4 && Math.random() < 0.7) o.glideT = 0.3 + Math.random() * 1.2;
        }
      }
      b.gy = Math.min(b.px * 0.5, Math.max(-b.px * 0.15, b.gy + b.vy * b.px * dt));
      if (!cells) continue;
      const traveled = b.dir > 0 ? b.x + 0.1 : 1.1 - b.x;
      const beat = b.glide > 0 ? 0 : Math.cos(b.ph * 6.2832);
      const py = (b.y0 + b.slope * traveled) * h + b.gy + Math.sin(th) * b.wa + beat * b.px * b.bob;
      const rot = b.slope * 1.1 + cw * b.wa * b.wf / (speed * w) * 0.6 + b.vy * 0.3 + beat * 0.03;
      ctx.setTransform(s, 0, 0, s, b.x * w * s, py * s);
      ctx.scale(b.dir, 1);
      ctx.rotate(rot);
      ctx.globalAlpha = b.alpha;
      ctx.drawImage(cells[b.glide > 0 ? fc : b.ph % 1 * fc | 0], -b.px * spec.ax, -b.px * spec.ay, b.px, b.px);
    }
    ctx.setTransform(s, 0, 0, s, 0, 0);
    ctx.globalAlpha = 1;
  }
  const BALLOON_SHEET_SPEC = Object.freeze({ cells: 4, cellW: 100, cellH: 134, ax: 0.5, ay: 0.36 });
  const BALLOON_PALETTES = Object.freeze([
    [[185, 96, 63], [235, 224, 201]],
    [[47, 61, 102], [238, 233, 222]],
    [[63, 106, 75], [227, 210, 170]],
    [[124, 52, 64], [232, 220, 182]],
    [[47, 124, 138], [240, 239, 233]],
    [[201, 160, 60], [47, 53, 65]],
    [[212, 124, 98], [242, 236, 226]],
    [[104, 65, 108], [218, 212, 208]]
  ]);
  const BALLOON_ACTIVITY = Object.freeze({ "sunny": 1, "clear-night": 0.8, "partlycloudy": 0.8, "cloudy": 0.35 });
  const _balloonActivity = (state) => BALLOON_ACTIVITY[state] || 0;
  function _balloonSprite(img, b, state, schemeDark, backgroundRGB) {
    if (b.sprite && b.schemeDark === schemeDark && b.state === state && b.bg === backgroundRGB) return b.sprite;
    const iw = img.naturalWidth || img.width;
    if (!iw) return null;
    const spec = BALLOON_SHEET_SPEC;
    const cw = iw / spec.cells, ch = img.naturalHeight || img.height;
    const w = Math.round(b.px * spec.cellW / spec.cellH), h = Math.round(b.px);
    const cell = (i) => {
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const cx2 = c.getContext("2d");
      cx2.imageSmoothingQuality = "high";
      cx2.drawImage(img, i * cw, 0, cw, ch, 0, 0, w, h);
      return c;
    };
    const pal = BALLOON_PALETTES[b.pal];
    const tint = (i, c) => _cloudSprite(cell(i), _mix(c, [255, 255, 255], 0.06), _mix(c, [0, 0, 0], 0.2), 1);
    const colors = tint(0, pal[b.swap ? 1 : 0]);
    const cx = colors.getContext("2d");
    cx.drawImage(tint(1, pal[b.swap ? 0 : 1]), 0, 0);
    b.glow = schemeDark ? _cloudSprite(colors, [40, 20, 10], [255, 214, 140], 1) : null;
    cx.globalCompositeOperation = "source-atop";
    cx.drawImage(cell(2), 0, 0);
    cx.globalCompositeOperation = "source-over";
    cx.drawImage(cell(3), 0, 0);
    const sky = _cloudPalette(state, schemeDark, backgroundRGB);
    const dim = schemeDark ? _mix(sky.top, [0, 0, 0], 0.45) : sky.top;
    b.sprite = _cloudSprite(colors, dim, dim, 1);
    b.schemeDark = schemeDark;
    b.state = state;
    b.bg = backgroundRGB;
    return b.sprite;
  }
  function _spawnBalloons(st, w, h, s, t) {
    const r = Math.random;
    const rise = r() < 0.3, dir = r() < 0.5 ? -1 : 1;
    const n = r() < 0.3 ? 2 + (r() < 0.3 ? 1 : 0) : 1;
    const vx = rise ? (r() - 0.5) * 6e-3 : dir * 1.16 / (90 + r() * 60);
    const x0 = rise ? 0.15 + r() * 0.7 : dir > 0 ? -0.08 : 1.08, y0 = 0.14 + r() * 0.3;
    for (let i = 0; i < n; i++) {
      const k = 0.6 + r() * 0.4;
      st.list.push({
        px: Math.round(_lerp(28, 42, r()) * _sizeScale(w, h) * s * k),
        alpha: 0.62 + 0.28 * k,
        ph: r() * 6.2832,
        pal: r() * BALLOON_PALETTES.length | 0,
        swap: r() < 0.3,
        x: x0 + (rise ? (r() - 0.5) * 0.12 * i : -dir * (0.15 + r() * 0.2) * i),
        y: rise ? 1.2 + (0.16 + r() * 0.2) * i : y0 + (r() - 0.5) * 0.24 * i,
        vx,
        vy: rise ? -1.4 / (40 + r() * 30) : vx * (r() - 0.5) * 0.3,
        burnT: -1,
        burnLen: 0,
        burnNext: t + 2 + r() * 6,
        sprite: null
      });
    }
  }
  function _balloonFrame(inst, ctx, w, h, s, dt, t, env) {
    const st = inst.balloon;
    if (!st.list.length) {
      if (!st.next) st.next = t + (st.count ? 300 / st.activity / st.density * (0.7 + Math.random() * 0.6) : 8 + Math.random() * 30);
      if (t < st.next) return;
      _spawnBalloons(st, w, h, s, t);
      st.next = 0;
      st.count++;
    }
    const img = _getBalloonImg();
    const spec = BALLOON_SHEET_SPEC;
    for (let i = st.list.length - 1; i >= 0; i--) {
      const b = st.list[i];
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      if (b.vx > 0 && b.x > 1.1 || b.vx < 0 && b.x < -0.1 || b.vy < 0 && b.y < -0.2 || b.vy > 0 && b.y > 1.2) {
        st.list.splice(i, 1);
        continue;
      }
      const sprite = img && _balloonSprite(img, b, st.state, env.schemeDark, env.backgroundRGB);
      if (!sprite) continue;
      let burn = 0;
      if (b.burnT >= 0) {
        const age = t - b.burnT;
        burn = age < b.burnLen ? Math.min(1, age / 0.25) : Math.max(0, 1 - (age - b.burnLen) / 0.9);
        if (age >= b.burnLen + 0.9) {
          b.burnT = -1;
          b.burnNext = t + 6 + Math.random() * 14;
        }
      } else if (t >= b.burnNext) {
        b.burnT = t;
        b.burnLen = 1.2 + Math.random() * 1.8;
      }
      const sw = sprite.width / s, sh = sprite.height / s;
      const ox = -sw * spec.ax, oy = -sh * spec.ay;
      ctx.setTransform(s, 0, 0, s, b.x * w * s, (b.y * h + Math.sin(t * 0.35 + b.ph) * sh * 0.012) * s);
      ctx.rotate(Math.sin(t * 0.22 + b.ph) * 0.018);
      ctx.globalAlpha = b.alpha;
      ctx.drawImage(sprite, ox, oy, sw, sh);
      if (b.glow) {
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = b.alpha * (0.3 + 0.7 * burn);
        ctx.drawImage(b.glow, ox, oy, sw, sh);
        if (burn > 0.02) {
          const fd = sh * 0.16;
          ctx.globalAlpha = burn;
          ctx.drawImage(_sprite("flame", true), -fd / 2, oy + sh * 0.855 - fd / 2, fd, fd);
        }
        ctx.globalCompositeOperation = "source-over";
      }
    }
    ctx.setTransform(s, 0, 0, s, 0, 0);
    ctx.globalAlpha = 1;
  }
  const PLANE_SHEET_SPEC = Object.freeze({ cells: 7, cellW: 512, cellH: 208, ax: 0.5, ay: 0.5 });
  const PLANE_ACTIVITY = Object.freeze({
    "lightning": 0,
    "lightning-rainy": 0,
    "hail": 0,
    "fog": 0,
    "pouring": 0,
    "rainy": 0.3,
    "snowy": 0.25,
    "snowy-rainy": 0.2,
    "cloudy": 0.55,
    "windy": 0.7,
    "windy-variant": 0.8,
    "partlycloudy": 0.85
  });
  const _planeActivity = (state) => {
    const v = PLANE_ACTIVITY[state];
    return v === void 0 ? 1 : v;
  };
  const PLANE_MAX_PX = 15, PLANE_TRAIL = 1.2, PLANE_VAPOR = [[1, 1.3, 0.16, 0.3], [0.7, 0.55, 0.3, 0.12], [0.4, 0.2, 0.85, 0.03]];
  const _planeAtlas = { img: null, cells: /* @__PURE__ */ new Map() };
  function _planeCells(own, img, state, schemeDark, backgroundRGB, s) {
    if (!(img.naturalWidth || img.width)) return null;
    const key = `${state}|${schemeDark}|${backgroundRGB}|${s}`;
    if (own.sprites && own.sprites.img === img && own.sprites.key === key) return own.sprites.v;
    if (_planeAtlas.img !== img) {
      _planeAtlas.img = img;
      _planeAtlas.cells.clear();
    }
    let cells = _planeAtlas.cells.get(key);
    if (cells) return (own.sprites = { img, key, v: cells }).v;
    const spec = PLANE_SHEET_SPEC, pal = _cloudPalette(state, schemeDark, backgroundRGB);
    const ch = Math.min(spec.cellH, Math.ceil(PLANE_MAX_PX * s)), cw = Math.round(ch * spec.cellW / spec.cellH);
    const cell = (i) => {
      const c = document.createElement("canvas");
      c.width = cw;
      c.height = ch;
      const cx = c.getContext("2d");
      cx.imageSmoothingQuality = "high";
      cx.drawImage(img, i * spec.cellW, 0, spec.cellW, spec.cellH, 0, 0, cw, ch);
      return c;
    };
    cells = {
      body: schemeDark ? _tintLift(cell(1), [255, 255, 255], [255, 255, 255], _rgba(pal.top, 0.3)) : _tintLift(cell(0), pal.top, pal.bot, _rgba(pal.top, 0.1)),
      windows: cell(2),
      beacon: cell(3),
      strobe: cell(4),
      nav: [cell(5), cell(6)],
      trail: pal.top
    };
    if (_planeAtlas.cells.size >= 4) _planeAtlas.cells.clear();
    _planeAtlas.cells.set(key, cells);
    return (own.sprites = { img, key, v: cells }).v;
  }
  function _spawnPlane(st, w, h) {
    const r = Math.random, k = r(), dir = r() < 0.5 ? -1 : 1;
    const slope = (r() - 0.5) * 0.06 - (r() < 0.3 ? 0.18 : 0);
    st.list.push({
      dir,
      slope,
      alpha: _lerp(0.78, 0.95, k),
      px: _lerp(7, 11, k) * _sizeScale(w, h),
      rot: Math.atan2(slope * h, w),
      d: 0,
      y0: _lerp(0.06, 0.42, r()) - slope * 0.65,
      sp: 1.3 / _lerp(45, 22, k),
      ph: r() * 3
    });
  }
  function _planesFrame(inst, ctx, w, h, s, dt, t, env) {
    const st = inst.planes;
    if (!st.next) st.next = t + 8 + Math.random() * 20;
    if (t >= st.next) {
      if (st.list.filter((p) => p.d < 1.3).length < 2) _spawnPlane(st, w, h);
      st.next = t + _lerp(140, 50, st.activity) * (0.6 + Math.random() * 0.9) / st.density;
    }
    for (let i = st.list.length - 1; i >= 0; i--) {
      const p = st.list[i];
      p.d += p.sp * dt;
      p.ph += dt;
      if (p.d > 1.3 + PLANE_TRAIL) st.list.splice(i, 1);
    }
    if (!st.list.length) return;
    const img = _getPlaneImg();
    const cells = img && _planeCells(st, img, st.state, env.schemeDark, env.backgroundRGB, s);
    if (!cells) return;
    const spec = PLANE_SHEET_SPEC, lit = env.schemeDark || !!env.night, tc = cells.trail;
    const fl = (tau) => tau < 0 ? 0 : tau < dt ? 1 : Math.max(0, 1 - (tau - dt) / 0.08);
    ctx.imageSmoothingQuality = "high";
    for (const p of st.list) {
      const ph = p.px, pw = ph * spec.cellW / spec.cellH, x0 = -pw * 0.3, len = w * PLANE_TRAIL;
      ctx.setTransform(s, 0, 0, s, (p.dir > 0 ? p.d - 0.15 : 1.15 - p.d) * w * s, (p.y0 + p.slope * p.d) * h * s);
      ctx.scale(p.dir, 1);
      ctx.rotate(p.rot);
      ctx.globalAlpha = env.schemeDark ? 0.8 : 0.65;
      for (const [f, lw, a, k] of PLANE_VAPOR) {
        const g = ctx.createLinearGradient(x0, 0, x0 - len * f, 0);
        g.addColorStop(0, _rgba(tc, 0));
        g.addColorStop(k, _rgba(tc, a));
        g.addColorStop(1, _rgba(tc, 0));
        ctx.strokeStyle = g;
        ctx.lineWidth = ph * lw;
        ctx.beginPath();
        ctx.moveTo(x0, 0);
        ctx.lineTo(x0 - len * f, 0);
        ctx.stroke();
      }
      const ox = -pw * spec.ax, oy = -ph * spec.ay;
      ctx.globalAlpha = p.alpha;
      ctx.drawImage(cells.body, ox, oy, pw, ph);
      if (lit) {
        const c = p.ph % 1.5, strobe = Math.max(fl(c), fl(c - 0.15)), beacon = c > 0.75 && c < 1 ? Math.sin((c - 0.75) / 0.25 * Math.PI) : 0;
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(cells.windows, ox, oy, pw, ph);
        ctx.globalAlpha = p.alpha * 0.85;
        ctx.drawImage(cells.nav[p.dir > 0 ? 0 : 1], ox, oy, pw, ph);
        if (strobe > 0) {
          ctx.globalAlpha = p.alpha * strobe;
          ctx.drawImage(cells.strobe, ox, oy, pw, ph);
        }
        if (beacon > 0) {
          ctx.globalAlpha = p.alpha * beacon * 0.9;
          ctx.drawImage(cells.beacon, ox, oy, pw, ph);
        }
        ctx.globalCompositeOperation = "source-over";
      }
    }
    ctx.setTransform(s, 0, 0, s, 0, 0);
    ctx.globalAlpha = 1;
  }
  const _hasClouds = (state) => !!state && _weatherTuning(state).cloudDensity > 0;
  const _hasMist = (state) => !!state && !!MIST[_weatherTuning(state).mist];
  const _briOf = (filter) => {
    const m = /brightness\(([\d.]+)\)/.exec(filter || "");
    return m ? parseFloat(m[1]) : 1;
  };
  const _lumOf = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  function _cloudPalette(state, schemeDark, backgroundRGB) {
    const tuning = _weatherTuning(state);
    const sf = _SKY_FILTERS[state] || _SKY_FILTERS.default;
    const bri = _briOf(schemeDark ? sf.dark : sf.light);
    const darkness = tuning.cloudDarkness;
    const bg = backgroundRGB.map((v) => Math.max(0, Math.min(255, Math.round(v * bri))));
    const bgL = _lumOf(bg);
    const tint = (L, r, g, b) => {
      const t = Math.max(0, Math.min(255, L));
      return [Math.round(Math.min(255, t * r)), Math.round(Math.min(255, t * g)), Math.round(Math.min(255, t * b))];
    };
    const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
    if (schemeDark) {
      const nightBase = Math.max(0.34, Math.min(1, (bgL + 96) / 255)) * (1 - 0.22 * darkness);
      const baseL = 255 * nightBase;
      const silver = tint(baseL * 0.92, 0.86, 0.94, 1.14);
      const steel = tint(baseL * 0.74, 0.68, 0.8, 1.24);
      const blueShadow = mix(steel, [22, 40, 78], 0.34 + 0.3 * darkness).map(Math.round);
      return { top: silver.map(Math.round), bot: blueShadow };
    }
    const white = [255, 255, 255];
    const skyGrey = [Math.round((bg[0] + 250) / 2 * 0.97), Math.round((bg[1] + 250) / 2 * 0.98), Math.round((bg[2] + 252) / 2)];
    const slate = [92, 106, 132];
    const shadowTarget = mix(skyGrey, slate, 0.55 * darkness);
    const dark1 = (0.1 + 0.32 * darkness) * 0.55;
    const dark2 = (0.3 + 0.62 * darkness) * 0.55;
    const top = mix(white, skyGrey, dark1).map(Math.round);
    const bot = mix(white, shadowTarget, dark2).map(Math.round);
    return { top, bot };
  }
  function _buildCloudField(tuning, seed) {
    const cover = Math.min(1, tuning.cloudDensity);
    const rnd = _mulberry32(seed || 1);
    const holes = [
      { x: 0.28 + rnd() * 0.18, y: 0.2 + rnd() * 0.6 },
      { x: 0.72 - rnd() * 0.18, y: 0.2 + rnd() * 0.6 }
    ];
    const inHole = (x, y) => holes.some((hl) => (x - hl.x) ** 2 + (y - hl.y) ** 2 < 0.09);
    const puffs = [];
    for (let band = 0; band < CLOUD_BANDS.length; band++) {
      const d = CLOUD_BANDS[band];
      const n = Math.round(d.count * (0.55 + 0.45 * cover));
      let placed = 0, tries = 0;
      while (placed < n && tries < n * 5) {
        tries++;
        const x = rnd();
        const y = 0.12 + rnd() * 0.76;
        if (inHole(x, y) && rnd() < 0.95) continue;
        placed++;
        puffs.push({
          band,
          x,
          y,
          size: d.size * (0.82 + rnd() * 0.36),
          variant: rnd() * CLOUD_VARIANTS | 0,
          flip: rnd() < 0.5,
          rot: (rnd() - 0.5) * 0.1,
          stretch: 1 + (rnd() - 0.5) * 2 * d.stretch,
          alpha: d.alpha * (0.9 + rnd() * 0.2),
          speed: d.speed * (0.85 + rnd() * 0.3),
          bobPh: rnd() * Math.PI * 2,
          bobAmp: 4e-3 + rnd() * 6e-3,
          bobF: 0.05 + band * 0.03
        });
      }
    }
    return { puffs, key: tuning.cloudDensity };
  }
  let _clearing = null;
  function _clearingSprite() {
    if (_clearing) return _clearing;
    const rnd = _mulberry32(7), blobs = [];
    for (let n = 0; n < 5; n++) {
      const a = rnd() * Math.PI * 2, d = n ? 20 + rnd() * 50 : 0, r = n ? 38 + rnd() * 34 : 70;
      blobs.push([128 + Math.cos(a) * d, 128 + Math.sin(a) * d * 0.8, r]);
    }
    const lo = (i) => Math.max(0, Math.floor(Math.min(...blobs.map((b) => b[i] - b[2])) - 2));
    const hi = (i) => Math.min(256, Math.ceil(Math.max(...blobs.map((b) => b[i] + b[2])) + 2));
    const x0 = lo(0), y0 = lo(1), c = document.createElement("canvas");
    c.width = hi(0) - x0;
    c.height = hi(1) - y0;
    const x = c.getContext("2d");
    x.translate(-x0, -y0);
    for (const [cx, cy, r] of blobs) {
      const g = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      for (let k = 0; k <= 12; k++) {
        const u = k / 12, v = 1 - u * u * (3 - 2 * u);
        g.addColorStop(u, `rgba(0,0,0,${Math.pow(v, 1.2).toFixed(4)})`);
      }
      x.fillStyle = g;
      x.fillRect(x0, y0, c.width, c.height);
    }
    return _clearing = { img: c, x: x0 / 256, y: y0 / 256, w: c.width / 256, h: c.height / 256 };
  }
  function _buildMistField(tuning, seed) {
    const look = MIST[tuning.mist], rnd = _mulberry32(seed || 1), puffs = [], clearings = [];
    for (let i = 0; i < look.count; i++) {
      const depth = (i + 0.5) / look.count;
      puffs.push({
        size: 1.3 + 2 * depth,
        x: 0.2 + 0.6 * (i + rnd() * 0.8) / look.count,
        y: 0.3 + rnd() * 0.4,
        rot: rnd() * Math.PI * 2,
        speed: (2e-3 + 0.014 * Math.pow(depth, 1.3)) * (0.85 + rnd() * 0.3) * look.speed,
        alpha: look.alpha * (0.8 + rnd() * 0.4) * (0.7 + 0.6 * depth),
        ph: rnd() * Math.PI * 2
      });
    }
    for (let i = 0; i < look.clearings; i++) {
      clearings.push({
        size: 0.45 + rnd() * 0.4,
        x: (i + rnd() * 0.8) / look.clearings,
        y: 0.15 + rnd() * 0.7,
        rot: rnd() * Math.PI * 2,
        speed: 8e-3 * (0.8 + rnd() * 0.4) * look.speed,
        alpha: look.clear
      });
    }
    return { puffs, clearings, key: tuning.mist };
  }
  function _mistFrame(inst, ctx, img, w, h, s, dt, t, env, wind) {
    const big = Math.max(w, h), ar = img.height / img.width, amt = (env.schemeDark ? MIST_DARK : 1) * inst.mistDensity, l = _lumOf(env.backgroundRGB);
    const cw = ctx.canvas.width, ch = ctx.canvas.height;
    const mc = inst.mistCanvas || (inst.mistCanvas = document.createElement("canvas"));
    if (mc.width !== cw || mc.height !== ch) {
      mc.width = cw;
      mc.height = ch;
    }
    const m = mc.getContext("2d");
    m.setTransform(1, 0, 0, 1, 0, 0);
    m.clearRect(0, 0, cw, ch);
    m.imageSmoothingEnabled = true;
    m.imageSmoothingQuality = "high";
    const place = (p, size, alpha) => {
      m.globalAlpha = alpha;
      m.setTransform(s, 0, 0, s, (p.x * (w + size) - size / 2) * s, p.y * h * s);
      m.rotate(p.rot);
    };
    for (const p of inst.mist.puffs) {
      const pw = p.size * big * (1 + 0.08 * Math.sin(t * 0.05 + p.ph));
      p.x += p.speed * wind * w * dt / (w + pw);
      if (p.x >= 1) {
        p.x -= 1;
        p.y = 0.3 + Math.random() * 0.4;
        p.rot = Math.random() * Math.PI * 2;
      }
      place(p, pw, Math.min(1, p.alpha * amt * (1 + 0.25 * Math.sin(t * 0.07 + p.ph * 1.3))));
      m.drawImage(img, -pw / 2, -pw * ar / 2, pw, pw * ar);
    }
    m.globalCompositeOperation = "destination-out";
    const hole = _clearingSprite();
    for (const c of inst.mist.clearings) {
      const cs = c.size * big;
      c.x += c.speed * wind * w * dt / (w + cs);
      if (c.x >= 1) {
        c.x -= 1;
        c.y = 0.15 + Math.random() * 0.7;
        c.rot = Math.random() * Math.PI * 2;
      }
      place(c, cs, c.alpha);
      m.drawImage(hole.img, (hole.x - 0.5) * cs, (hole.y - 0.5) * cs * 0.75, hole.w * cs, hole.h * cs * 0.75);
    }
    m.globalCompositeOperation = "source-over";
    m.globalAlpha = 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = Math.min(1, (MIST_LIGHT - 1) * Math.max(l, 24) / (255 - l));
    ctx.drawImage(mc, 0, 0);
    ctx.globalAlpha = 1;
    ctx.setTransform(s, 0, 0, s, 0, 0);
  }
  const _lerp = (a, b, t) => a + (b - a) * t;
  const _count = (t, area) => Math.max(t.min, Math.min(t.max, Math.round(area / 1e4 * t.perContainer)));
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
    const n = Math.max(4, Math.round(_count(SNOW, area) * scale));
    const arr = new Array(n);
    let hC = 0;
    const mH = 4;
    for (let i = 0; i < n; i++) {
      let z;
      if (hC < mH && Math.random() > 0.95) {
        z = 0.85 + Math.random() * 0.15;
        hC++;
      } else {
        z = Math.pow(Math.random(), 4) * 0.45;
      }
      arr[i] = { z, x: Math.random(), y: Math.random(), vy: _lerp(SNOW.vy[0], SNOW.vy[1], z) * (0.8 + Math.random() * 0.4), swa: 4 + z * 35 + Math.random() * 10, swf: 0.5 + Math.random() * 1.5, ph: Math.random() * Math.PI * 2, tw: 0.5 + Math.random() * 1.5 };
    }
    arr.sort((a, b) => a.z - b.z);
    return arr;
  }
  function _buildHail(area) {
    const n = _count(HAIL, area);
    const arr = new Array(n);
    let hC = 0;
    const mH = 3;
    for (let i = 0; i < n; i++) {
      let z;
      if (hC < mH && Math.random() > 0.9) {
        z = 0.8 + Math.random() * 0.2;
        hC++;
      } else {
        z = Math.pow(Math.random(), 3) * 0.5;
      }
      arr[i] = { z, x: Math.random(), y: Math.random(), vy: _lerp(HAIL.vy[0], HAIL.vy[1], z) * (0.85 + Math.random() * 0.3), sd: Math.random() };
    }
    arr.sort((a, b) => a.z - b.z);
    return arr;
  }
  const STARS = Object.freeze({
    maxRadius: 2.5,
    heroCount: 8,
    heroMaxSize: 1.8,
    heroDprCap: 1.4,
    palette: Object.freeze([[190, 210, 255], [210, 225, 255], [255, 250, 245], [255, 235, 200]])
  });
  const _starColor = (v) => v < 0.15 ? STARS.palette[0] : v < 0.6 ? STARS.palette[1] : v < 0.85 ? STARS.palette[2] : STARS.palette[3];
  const METEORS = Object.freeze({
    gap: [30, 90],
    cometGap: [240, 600],
    tints: Object.freeze([[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 245, 210], [255, 245, 210], [210, 255, 225], [210, 255, 225], [255, 210, 160]]),
    cometTints: Object.freeze([[100, 200, 255], [100, 200, 255], [120, 220, 160], [230, 190, 100]])
  });
  const _rand = (r) => r[0] + Math.random() * (r[1] - r[0]);
  function _spawnStreak(comet, w, h) {
    const tints = comet ? METEORS.cometTints : METEORS.tints, bolide = !comet && Math.random() < 0.18;
    const sx = comet ? Math.random() < 0.5 ? -40 : w + 40 : Math.random() * w, dir = Math.random() * w < sx ? -1 : 1;
    const spd = comet ? _rand([50, 85]) : bolide ? _rand([90, 140]) : _rand([130, 250]), ang = comet ? 0.15 : _rand([0.2, 0.65]);
    return {
      comet,
      bolide,
      rgb: tints[Math.random() * tints.length | 0],
      sx,
      sy: Math.random() * h * (comet ? 0.4 : 0.5),
      age: 0,
      vx: Math.cos(ang) * spd * dir,
      vy: Math.sin(ang) * spd,
      g: comet ? 0 : 13,
      tail: comet ? 170 : 1e9,
      life: comet ? (w + 80) / (Math.cos(ang) * spd) : bolide ? 1.3 : _rand([0.75, 1.15]),
      r: comet ? _rand([1.5, 2.5]) : bolide ? _rand([2.5, 4]) : _rand([1.5, 3])
    };
  }
  function _drawMeteors(st, ctx, w, h, dt, t) {
    const m = st.streaks || (st.streaks = { list: [], next: t + _rand(METEORS.gap) * 0.5, cometNext: t + _rand(METEORS.cometGap) * 0.5 });
    if (t >= m.next) {
      if (Math.random() < st.opacity) m.list.push(_spawnStreak(false, w, h));
      m.next = t + _rand(METEORS.gap);
    }
    if (t >= m.cometNext) {
      m.list.push(_spawnStreak(true, w, h));
      m.cometNext = t + _rand(METEORS.cometGap);
    }
    ctx.lineCap = "round";
    for (let i = m.list.length - 1; i >= 0; i--) {
      const p = m.list[i], T = p.age += dt, u = T / p.life;
      if (u >= 1) {
        m.list.splice(i, 1);
        continue;
      }
      const x = p.sx + p.vx * T, y = p.sy + p.vy * T + p.g * T * T, op = Math.min(1, (p.comet ? 1.2 : 1) * (1 - u)) * st.opacity;
      const d = Math.hypot(x - p.sx, y - p.sy) || 1, k = Math.min(1, p.tail / d), tx = x + (p.sx - x) * k, ty = y + (p.sy - y) * k;
      const cx = k < 1 ? (x + tx) / 2 : p.sx + p.vx * T / 2, cy = k < 1 ? (y + ty) / 2 : p.sy + p.vy * T / 2;
      const hs = p.r * (p.comet ? 1 : (0.3 + 0.7 * (1 - u)) * (p.bolide && u > 0.85 ? 1 + (u - 0.85) * 8 : 1));
      const tg = ctx.createLinearGradient(x, y, tx, ty);
      tg.addColorStop(0, _rgba(p.rgb, op * (p.comet ? 0.6 : 0.9)));
      tg.addColorStop(0.45, _rgba(p.rgb, op * 0.35));
      tg.addColorStop(1, _rgba(p.rgb, op * 0.04));
      ctx.strokeStyle = tg;
      ctx.lineWidth = hs * 0.8;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.quadraticCurveTo(cx, cy, x, y);
      ctx.stroke();
      if (p.comet) {
        const hg = ctx.createRadialGradient(x, y, 0, x, y, hs * 4);
        hg.addColorStop(0, `rgba(255,255,255,${op})`);
        hg.addColorStop(0.4, _rgba(p.rgb, op * 0.4));
        hg.addColorStop(1, _rgba(p.rgb, 0));
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(x, y, hs * 4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = _rgba(p.rgb, op);
        ctx.beginPath();
        ctx.arc(x, y, hs, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  function _offscreen(w, h) {
    if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(w, h);
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    return c;
  }
  function _buildStarField(count, W, H, seed, k) {
    const c = _offscreen(W, H);
    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return c;
    const rnd = _mulberry32(seed);
    const batches = /* @__PURE__ */ new Map();
    const put = (rgb, alpha, x, y, r) => {
      const qA = (alpha * 15 + 0.5 | 0) / 15;
      const key = `${rgb[0]},${rgb[1]},${rgb[2]}|${qA}`;
      let b = batches.get(key);
      if (!b) {
        b = { rgb, alpha: qA, pts: [] };
        batches.set(key, b);
      }
      b.pts.push(x, y, r * k);
    };
    const tinyCount = Math.floor(count * 1.1);
    const smallCount = Math.floor(count * 0.35);
    const clusterCount = Math.floor(count * 0.045);
    const mwActive = count > 750;
    let mwCosA, mwSinA, mwPerpX, mwPerpY, mwCx, mwCy, mwBandW;
    if (mwActive) {
      const angle = -0.35 + (rnd() - 0.5) * 0.45;
      mwCosA = Math.cos(angle);
      mwSinA = Math.sin(angle);
      mwPerpX = -mwSinA;
      mwPerpY = mwCosA;
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
      if (mwActive && i % 3 === 0) {
        const p = mwWarp(x, y, mwBandW);
        if (p) {
          x = p[0];
          y = p[1];
        }
      }
      let r = 0.6 + rnd() * 0.6;
      if (i % 8 === 0) r *= 1.8;
      put(_starColor(rnd()), 0.35 + rnd() * 0.35, x, y, Math.min(r, STARS.maxRadius));
    }
    for (let i = 0; i < smallCount; i++) {
      let x = rnd() * W, y = rnd() * H;
      if (mwActive && i % 3 === 0) {
        const p = mwWarp(x, y, mwBandW * 0.8);
        if (p) {
          x = p[0];
          y = p[1];
        }
      }
      let r = 0.8 + rnd() * 0.8;
      if (i % 8 === 0) r *= 1.8;
      r = Math.min(r, STARS.maxRadius);
      const alpha = 0.55 + rnd() * 0.35;
      const rgb = _starColor(rnd());
      put(rgb, alpha, x, y, r);
      if (i % 8 === 0) {
        const glowR = r * 3 * k;
        ctx.globalAlpha = alpha * 0.12;
        const g = ctx.createRadialGradient(x, y, r * 0.5 * k, x, y, glowR);
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
        put(STARS.palette[1], 0.3 + rnd() * 0.2, cx + (rnd() - 0.5) * 25 * k, cy + (rnd() - 0.5) * 18 * k, Math.min(r, STARS.maxRadius));
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
      const tc = tex.getContext("2d", { alpha: true });
      const mid = texPx / 2;
      const refSize = size * dpr;
      const haloA = feature ? 0.6 : 0.35;
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
        tex,
        texPx,
        refSize,
        feature,
        ph: rnd() * Math.PI * 2,
        sp: 0.25 + rnd() * 0.55
      });
    }
    return heroes;
  }
  function _drawStars(inst, ctx, w, h, s, t, dt) {
    const st = inst.stars;
    const W = Math.max(1, Math.round(w * s)), H = Math.max(1, Math.round(h * s));
    const fieldKey = `${st.count}|${W}|${H}`;
    if (st.fieldKey !== fieldKey) {
      st.field = _buildStarField(st.count, W, H, inst.wp, s / 2);
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
    ctx.globalCompositeOperation = "lighter";
    for (const hero of st.heroes) {
      const a = t * hero.sp + hero.ph;
      const twinkle = Math.sin(a) + Math.sin(a * 2.7) * 0.5 + Math.sin(a * 0.4) * 0.3;
      const size = hero.size * (1 + twinkle * 0.15);
      const op = Math.min(1, Math.max(0, hero.brightness * (1 + twinkle * 0.4))) * st.opacity;
      if (op < 0.05) continue;
      const px = hero.x * w, py = hero.y * h;
      const drawSize = hero.texPx * (size / hero.refSize) / dpr;
      ctx.globalAlpha = op;
      ctx.drawImage(hero.tex, px - drawSize * 0.5, py - drawSize * 0.5, drawSize, drawSize);
      ctx.globalAlpha = Math.min(1, op * 1.1);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(px, py, size * 0.45, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    _drawMeteors(st, ctx, w, h, dt, t);
    ctx.globalAlpha = 1;
  }
  function create() {
    return { key: null, rainKey: null, rain: null, snow: null, hail: null, cloud: null, mist: null, stars: null, birds: null, balloon: null, planes: null, area: 0, wp: Math.random() * 100, flash: null };
  }
  function set(inst, key, w, h, weatherState, stars, birds, balloon, planes, speed, cloudImage, mistState, wind, mistDensity) {
    const area = Math.max(1, w * h);
    inst.wind = Number.isFinite(wind) ? wind : null;
    inst.mistDensity = mistDensity || 1;
    const grow = inst.area > 0 ? Math.abs(area - inst.area) / inst.area : 1;
    const sizeChanged = grow >= 0.22;
    inst.speed = speed || 1;
    inst.cloudImg = cloudImage && _imgLoader(cloudImage) || _getCloudImg;
    const field = (cur, state, seed, build, load) => {
      if (!state) return null;
      if (cur && cur.state === state) return cur;
      const tuning = _weatherTuning(state), next = build(tuning, seed);
      if (!cur || cur.key !== next.key) cur = next;
      cur.speed = tuning.cloudSpeed;
      cur.state = state;
      load();
      return cur;
    };
    inst.cloud = field(inst.cloud, weatherState, inst.wp, _buildCloudField, inst.cloudImg);
    inst.mist = field(inst.mist, mistState, inst.wp + 1, _buildMistField, _getMistImg);
    if (!inst.mist) inst.mistCanvas = null;
    const starCount = stars ? stars.count : 0;
    if (starCount <= 0) {
      inst.stars = null;
    } else if (!inst.stars || inst.stars.count !== starCount) {
      inst.stars = { count: starCount, opacity: stars.opacity, field: null, fieldKey: null, heroes: null, heroKey: null, streaks: null };
    } else {
      inst.stars.opacity = stars.opacity;
    }
    const actor = (cur, cfg, load, extra) => {
      if (!cfg) return null;
      if (!cur) {
        load();
        cur = Object.assign({ list: [], next: 0 }, extra);
      }
      cur.activity = cfg.activity;
      cur.state = cfg.state || weatherState;
      cur.density = cfg.density || 1;
      return cur;
    };
    inst.birds = actor(inst.birds, birds, _getBirdImg, { pass: 0 });
    inst.balloon = actor(inst.balloon, balloon, _getBalloonImg, { count: 0 });
    inst.planes = actor(inst.planes, planes, _getPlaneImg, null);
    if (key === inst.key && !sizeChanged) {
      inst.area = area;
      return;
    }
    inst.key = key;
    inst.area = area;
    inst.rain = null;
    inst.snow = null;
    inst.hail = null;
    inst.rainKey = null;
    for (const a of [inst.birds, inst.planes]) if (a) {
      a.list.length = 0;
      a.next = 0;
    }
    if (key === "snow") {
      inst.snow = _buildSnow(area, 1);
    } else if (key === "sleet") {
      inst.rainKey = "rain";
      inst.rain = _buildRain(RAIN.rain, area, 0.5);
      inst.snow = _buildSnow(area, 0.55);
    } else if (key === "hail") {
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
      const big = inst.cloud.puffs.filter((p) => p.band >= 1);
      if (!big.length) return null;
      const anchor = big[Math.random() * big.length | 0];
      fl.puffs = big.filter((p) => (p.x - anchor.x) ** 2 + (p.y - anchor.y) ** 2 < 0.04).slice(0, 3);
      fl.age = 0;
      const strokeCount = 2 + (Math.random() * 3 | 0);
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
  function frame(inst, ctx, w, h, s, dt, t, env, starCtx, nearCtx) {
    const activeEffects = !!inst.key || !!inst.cloud || !!inst.mist || !!inst.stars || !!inst.birds || !!inst.balloon || !!inst.planes;
    for (const c of nearCtx ? [ctx, nearCtx] : [ctx]) {
      c.setTransform(s, 0, 0, s, 0, 0);
      c.clearRect(0, 0, w, h);
    }
    if (!activeEffects) {
      if (starCtx) {
        starCtx.setTransform(s, 0, 0, s, 0, 0);
        starCtx.clearRect(0, 0, w, h);
      }
      return false;
    }
    if (inst.stars) {
      const sc = starCtx || ctx;
      if (starCtx) {
        starCtx.setTransform(s, 0, 0, s, 0, 0);
        starCtx.clearRect(0, 0, w, h);
      }
      _drawStars(inst, sc, w, h, s, t, dt);
      if (env.moon) {
        sc.setTransform(s, 0, 0, s, 0, 0);
        sc.globalCompositeOperation = "destination-out";
        sc.beginPath();
        sc.arc(env.moon.x, env.moon.y, env.moon.r, 0, Math.PI * 2);
        sc.fill();
        sc.globalCompositeOperation = "source-over";
      }
    } else if (starCtx) {
      starCtx.setTransform(s, 0, 0, s, 0, 0);
      starCtx.clearRect(0, 0, w, h);
    }
    const wp = inst.wp;
    const windGoal = inst.wind != null ? _windDrift(inst.wind) : inst.cloud && inst.cloud.speed || inst.mist && inst.mist.speed || 1;
    inst.windF = inst.windF == null ? windGoal : inst.windF + (windGoal - inst.windF) * Math.min(1, dt * 0.5);
    const windF = inst.windF;
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
    if (inst.planes) _planesFrame(inst, ctx, w, h, s, dt, t, env);
    if (inst.balloon) _balloonFrame(inst, ctx, w, h, s, dt, t, env);
    const cloudField = (field, bands, opAmt, storm) => {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      const wind = (0.9 + 0.4 * gust) * windF;
      const scale = Math.max(1, Math.min(2.4, Math.sqrt(w * h) / 300));
      const drawPuff = (p, alpha) => {
        const sp = bands[p.band][p.variant], ar = sp.width / sp.height;
        const ph = p.size * scale, pw = ph * ar * p.stretch;
        const cx = p.x * w;
        const cy = p.y * h + Math.sin(t * p.bobF + p.bobPh) * p.bobAmp * h;
        ctx.globalAlpha = alpha != null ? alpha : Math.min(0.95, p.alpha * opAmt * boost(cx, cy));
        ctx.setTransform(s, 0, 0, s, cx * s, cy * s);
        if (p.rot) ctx.rotate(p.rot);
        if (p.flip) ctx.scale(-1, 1);
        ctx.drawImage(sp, -pw / 2, -ph / 2, pw, ph);
      };
      for (const p of field.puffs) {
        const sp = bands[p.band][p.variant], ar = sp.width / sp.height;
        const pw = p.size * scale * ar * p.stretch;
        p.x += p.speed * wind * dt;
        if (p.x * w - pw / 2 > w) p.x -= (w + pw) / w;
        else if (p.x * w + pw / 2 < 0) p.x += (w + pw) / w;
        drawPuff(p, null);
      }
      const flash = storm && _advanceFlash(inst, t, dt);
      if (flash) {
        ctx.globalCompositeOperation = "lighter";
        for (const p of field.puffs) drawPuff(p, flash.brightness * p.alpha * (env.schemeDark ? 0.3 : 0.14));
        for (const fp of flash.puffs) drawPuff(fp, flash.brightness * 0.55);
        ctx.globalCompositeOperation = "source-over";
      }
      ctx.setTransform(s, 0, 0, s, 0, 0);
      ctx.globalAlpha = 1;
    };
    const mistImg = inst.mist && _getMistImg();
    if (mistImg) _mistFrame(inst, ctx, mistImg, w, h, s, dt, t, env, (0.9 + 0.4 * gust) * windF);
    if (inst.cloud && inst.cloud.puffs.length) {
      const img = inst.cloudImg(), bands = img && _cloudBandSprites(inst.cloud, img, inst.cloud.state, env.schemeDark, env.backgroundRGB);
      if (bands) cloudField(inst.cloud, bands, env.schemeDark ? 1.08 : 1, true);
    }
    if (nearCtx) {
      ctx.setTransform(s, 0, 0, s, 0, 0);
      ctx.globalAlpha = 1;
      nearCtx.imageSmoothingEnabled = ctx.imageSmoothingEnabled;
      nearCtx.imageSmoothingQuality = ctx.imageSmoothingQuality;
      ctx = nearCtx;
    }
    if (inst.birds) _birdsFrame(inst, ctx, w, h, s, dt, t, env, gust);
    const fall = dt * inst.speed;
    if (inst.rain && inst.rain.length) {
      const recipe = RAIN[inst.rainKey];
      const sp = _sprite("streak", env.schemeDark);
      const lean = recipe.lean * gust;
      const stretch = Math.min(dt, 1 / 24) * inst.speed;
      const maxLen = h * 0.22;
      ctx.setTransform(s, 0, s * lean, s, 0, 0);
      const dark = env.schemeDark;
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      const aCap = dark ? 0.62 : 0.95;
      for (const p of inst.rain) {
        p.y += p.vy * fall / h;
        p.x += p.vy * lean * 0.9 * fall / span;
        let y = p.y * (h + 40) - 20;
        if (y > h + 24) {
          p.y = Math.random() * -0.22;
          p.x = Math.random();
          p.sd = Math.random();
          y = p.y * (h + 40) - 20;
        }
        if (p.x > 1) p.x -= 1;
        else if (p.x < 0) p.x += 1;
        const x = sx + p.x * span;
        let a;
        if (dark) {
          const focus = 0.3 + 0.7 * p.z;
          const glint = 0.55 + 0.9 * (p.sd * p.sd);
          a = _lerp(recipe.alpha[0], recipe.alpha[1], p.z) * focus * glint;
        } else {
          a = (0.55 + 0.45 * p.z) * (0.85 + 0.3 * p.sd);
        }
        if (y < topF) a *= Math.max(0, y / topF);
        else if (y > botY - botF) a *= Math.max(0, (botY - y) / botF);
        if (a <= 4e-3) continue;
        a *= boost(x, y);
        const len = Math.min(maxLen, (_lerp(recipe.lenBase[0], recipe.lenBase[1], p.z) + p.vy * stretch) * (0.72 + 0.55 * p.z));
        const dw = _lerp(recipe.width[0], recipe.width[1], p.z) * (0.7 + 0.85 * p.z);
        ctx.globalAlpha = Math.min(aCap, a);
        ctx.drawImage(sp, x - lean * y - dw / 2, y - len, dw, len);
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (inst.hail && inst.hail.length) {
      const sp = _sprite("hail", env.schemeDark);
      const tr = _sprite("streak", env.schemeDark);
      const stretch = Math.min(dt, 1 / 24) * inst.speed;
      const lean = 0.07 * gust;
      ctx.setTransform(s, 0, s * lean, s, 0, 0);
      for (const p of inst.hail) {
        p.y += p.vy * fall / h;
        p.x += p.vy * lean * 0.9 * fall / span;
        let y = p.y * (h + 40) - 20;
        if (y > h + 24) {
          p.y = Math.random() * -0.22;
          p.x = Math.random();
          y = p.y * (h + 40) - 20;
        }
        if (p.x > 1) p.x -= 1;
        else if (p.x < 0) p.x += 1;
        const x = sx + p.x * span;
        let a = _lerp(HAIL.alpha[0], HAIL.alpha[1], p.z);
        if (y < topF) a *= Math.max(0, y / topF);
        else if (y > botY - botF) a *= Math.max(0, (botY - y) / botF);
        if (a <= 4e-3) continue;
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
      const sp = _sprite("flake", env.schemeDark);
      ctx.setTransform(s, 0, 0, s, 0, 0);
      const wind = drift * 7;
      for (const p of inst.snow) {
        p.y += p.vy * fall / h;
        p.x += wind * (0.4 + p.z * 0.6) * fall / span;
        let y = p.y * (h + 24) - 12;
        if (y > h + 14) {
          p.y = Math.random() * -0.12;
          p.x = Math.random();
          p.ph = Math.random() * Math.PI * 2;
          y = p.y * (h + 24) - 12;
        }
        if (p.x > 1) p.x -= 1;
        else if (p.x < 0) p.x += 1;
        const x = sx + p.x * span + Math.sin(t * p.swf + p.ph) * p.swa;
        let a = _lerp(SNOW.alpha[0], SNOW.alpha[1], p.z) * (0.82 + 0.18 * Math.sin(t * p.tw + p.ph));
        if (y < topF) a *= Math.max(0, y / topF);
        else if (y > botY - botF) a *= Math.max(0, (botY - y) / botF);
        if (a <= 4e-3) continue;
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
  return Object.freeze({ hasClouds: _hasClouds, hasMist: _hasMist, birdActivity: _birdActivity, balloonActivity: _balloonActivity, planeActivity: _planeActivity, create, set, frame });
})();
var ESCAPE_MAP = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
var escapeHtml = (v) => String(v).replace(/["&<>]/g, (c) => ESCAPE_MAP[c]);
var _CSS_STRIP = /["'<>;{}\\]|\/\*|\*\/|@|url\s*\(|expression\s*\(/gi;
var cssValue = (v) => String(v).replace(/[\u0000-\u001F\u007F]/g, "").replace(_CSS_STRIP, "");
var _ALIGN_CLASSES = /* @__PURE__ */ new Set(["start", "center", "end", "spread"]);
var _BUTTON_STYLES = /* @__PURE__ */ new Set(["vertical", "split"]);
var JUSTIFY_MAP = Object.freeze({ start: "flex-start", center: "center", end: "flex-end", between: "space-between", around: "space-around", evenly: "space-evenly" });
var _SAFE_JUSTIFY = /* @__PURE__ */ new Set(["center", "flex-end"]);
var ALIGN_MAP = Object.freeze({ start: "flex-start", center: "center", end: "flex-end", stretch: "stretch", baseline: "baseline" });
var FORECAST_CACHE = /* @__PURE__ */ new Map();
var FORECAST_CACHE_MAX = 50;
var WEATHER_MEDIA_EXTS = Object.freeze(["", ".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".mp4"]);
var WEATHER_MEDIA_FOUND = /* @__PURE__ */ new Map();
var _FORECAST_UNIT_MAP = { temperature: "temperature_unit", templow: "temperature_unit", wind_speed: "wind_speed_unit", precipitation: "precipitation_unit", pressure: "pressure_unit", visibility: "visibility_unit", dew_point: "temperature_unit" };
var _FORECAST_UNIT_FALLBACK = { humidity: "%", precipitation_probability: "%", cloud_coverage: "%", wind_bearing: "\xB0", uv_index: "" };
function collectConditionEntities(conditions) {
  const out = [];
  if (!Array.isArray(conditions)) return out;
  for (const c of conditions) {
    if (!c) continue;
    if (c.entity) out.push(c.entity);
    if (c.condition === "and" || c.condition === "or" || c.condition === "not") {
      out.push(...collectConditionEntities(c.conditions));
    }
  }
  return out;
}
function normalizeLength(v) {
  const s = String(v == null ? "" : v).trim();
  if (!s) return "";
  return s.split(/\s+/).map((tok) => {
    if (!tok) return tok;
    if (tok === "0") return "0px";
    return /^[+-]?(\d+\.?\d*|\.\d+)$/.test(tok) ? tok + "px" : tok;
  }).join(" ");
}
function cssLength(v) {
  return cssValue(normalizeLength(v));
}
var _BUILTIN_IMAGES = { home: () => import("./image-assets-home-XH2BCB2O.js").then((m) => m.HOME_IMAGE), "old-home": OLD_HOME_IMAGE, "demo-home-image": OLD_HOME_IMAGE };
var _builtinLoaded = /* @__PURE__ */ new Map();
var _builtinPending = /* @__PURE__ */ new Map();
function _builtinImage(src) {
  if (!Object.prototype.hasOwnProperty.call(_BUILTIN_IMAGES, src)) return void 0;
  const b = _BUILTIN_IMAGES[src];
  if (typeof b === "string") return b;
  return _builtinLoaded.has(src) ? _builtinLoaded.get(src) : null;
}
function _loadBuiltinImage(src) {
  if (!_builtinPending.has(src)) _builtinPending.set(src, _BUILTIN_IMAGES[src]().then((svg) => {
    _builtinLoaded.set(src, svg);
  }, () => {
    _builtinLoaded.set(src, "");
  }));
  return _builtinPending.get(src);
}
function _elBoxStyle(el) {
  let s = "";
  if (el && el.margin !== void 0 && el.margin !== "") s += `;margin:${cssLength(el.margin)}`;
  if (el && el.padding !== void 0 && el.padding !== "") s += `;padding:${cssLength(el.padding)}`;
  return s;
}
function gaugeDefs(o, p) {
  const arr = Array.isArray(o[p + "values"]) ? o[p + "values"].filter((v) => v && typeof v === "object") : [];
  return arr.length ? arr : [{}];
}
var GAUGE_REF = /^[a-z_]+\.[a-z0-9_]+$/;
var GAUGE_NUMS = ["min", "max", "width", "height", "arc", "start", "marker_size", "marker_icon_size", "range_from", "range_to"];
function gaugeRefs(o, p) {
  return gaugeDefs(o, p).concat(GAUGE_NUMS.filter((k) => GAUGE_REF.test(o[p + k])).map((k) => ({ entity: o[p + k] })));
}
var isTime = (v) => typeof v === "string" && v.includes(":");
function gaugeNum(v, hass) {
  if (!isTime(v)) return parseFloat(v);
  const d = new Date(v), [h, m] = (isNaN(d) ? v : d.toLocaleTimeString("en-GB", { timeZone: hass.locale.time_zone === "server" ? hass.config.time_zone : void 0 })).split(":");
  return +h + m / 60;
}
function iconSourceValue(hass, button, el) {
  if (!el.entity && !el.attribute) return "";
  const stateObj = hass.states[el.entity || button.entity];
  if (!stateObj) return "";
  const raw = el.attribute ? stateObj.attributes[el.attribute] : stateObj.state;
  if (typeof raw !== "string") return "";
  const value = raw.trim();
  if (!value || value === "unknown" || value === "unavailable") return "";
  return value.includes(":") || el.icon_path ? value : "";
}
function parseAnchor(anchor) {
  if (anchor === "center" || anchor === "left" || anchor === "right") return ["center", anchor];
  return anchor.includes("-") ? anchor.split("-") : ["top", anchor];
}
function freeStyle(o) {
  if ((o.position || "").toString().toLowerCase() !== "custom") return [];
  const [v, h] = parseAnchor(o.position_anchor || "top-left"), cx = h !== "left" && h !== "right", cy = v !== "top" && v !== "bottom";
  const out = [[cx ? "left" : h, cx ? "50%" : cssLength(o.position_x) || "0"], [cy ? "top" : v, cy ? "50%" : cssLength(o.position_y) || "0"]];
  return cx || cy ? [...out, ["transform", [cx && "translateX(-50%)", cy && "translateY(-50%)"].filter(Boolean).join(" ")]] : out;
}
function pickThreshold(thresholds, value) {
  if (value == null) return "";
  const valid = thresholds.filter((t) => t.value !== "" && t.value !== void 0 && t.color);
  const text = String(value).trim().toLowerCase();
  const match = valid.find((t) => isNaN(parseFloat(t.value)) && String(t.value).trim().toLowerCase() === text);
  if (match) return match.color;
  const num = parseFloat(value);
  if (isNaN(num)) return "";
  let color = "";
  const sorted = valid.filter((t) => !isNaN(parseFloat(t.value))).sort((a, b) => parseFloat(a.value) - parseFloat(b.value));
  for (const t of sorted) {
    if (num >= parseFloat(t.value)) color = t.color;
  }
  return color;
}
function forecastFilterPast(raw, daily) {
  const now = /* @__PURE__ */ new Date(), cut = daily ? new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() : now.getTime();
  return raw.filter((f) => Date.parse(f.datetime) >= cut);
}
function forecastFingerprint(forecast) {
  if (!forecast || !forecast.length) return "";
  let s = "" + forecast.length;
  for (const f of forecast) s += `|${f.datetime}|${f.condition}|${f.temperature}|${f.templow != null ? f.templow : ""}|${f.precipitation_probability != null ? f.precipitation_probability : ""}`;
  return s;
}
var NUMBER_LOCALES = { comma_decimal: ["en-US", "en"], decimal_comma: ["de", "es", "it"], space_comma: ["fr", "sv", "cs"], quote_decimal: ["de-CH"], none: "en-US" };
function numberFormat(locale, precision) {
  const nf = locale.number_format;
  return new Intl.NumberFormat(nf === "system" ? void 0 : NUMBER_LOCALES[nf] || locale.language, { maximumFractionDigits: precision, minimumFractionDigits: 0, useGrouping: nf !== "none" });
}
function dateFormat(hass, options, language = hass.locale.language) {
  const l = hass.locale, tf = l.time_format;
  if (options.hour && !options.hourCycle) options.hourCycle = (tf === "12" || tf === "24" ? tf === "12" : (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(tf === "language" ? l.language : void 0).includes("10")) ? "h12" : "h23";
  if (l.time_zone === "server") options.timeZone = hass.config.time_zone;
  return new Intl.DateTimeFormat(language, options);
}
function forecastLabel(dt, daily, hass) {
  return dateFormat(hass, daily ? { weekday: "short" } : { hour: "numeric", minute: "2-digit" }).format(new Date(dt));
}
var DATE_CODE = /%(-?)([aAbBdmyYHIMSp])/g;
var DATE_NAMES = { a: { weekday: "short" }, A: { weekday: "long" }, b: { month: "short" }, B: { month: "long" } };
var isDatePattern = (v) => typeof v === "string" && v.search(DATE_CODE) >= 0;
function strftime(hass, dt, format) {
  if (!dt || !isDatePattern(format)) return "";
  const date = new Date(dt), n = Object.fromEntries(dateFormat(hass, { hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }, "en").formatToParts(date).map((p) => [p.type, p.value]));
  const numbers = { d: n.day, m: n.month, y: n.year.slice(-2), Y: n.year, H: n.hour, I: String(n.hour % 12 || 12).padStart(2, "0"), M: n.minute, S: n.second, p: n.hour < 12 ? "AM" : "PM" };
  return format.replace(DATE_CODE, (_, flag, c) => DATE_NAMES[c] ? dateFormat(hass, { calendar: "gregory", ...DATE_NAMES[c] }).format(date) : flag ? numbers[c].replace(/^0/, "") : numbers[c]);
}
var Z = Object.freeze({ ...Object.fromEntries(["sky", "pictures", "layer-sky", "stars", "sun", "pictures-front", "layer-back", "weather", "layer-middle", "near", "tint", "edge"].map((name, i, all) => [name, i - all.length])), free: 10 });
var CONTAINER_LAYERS = Object.freeze(["sky", "back", "middle", "front"]);
var containerLayer = (c) => {
  const v = String(c && c.layer || "").toLowerCase();
  return CONTAINER_LAYERS.includes(v) ? v : "front";
};
var _sharedStyles = null;
var WeatherCard = class _WeatherCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._animId = null;
    this._boundAnimate = this._animate.bind(this);
    this._lastFrameTime = 0;
    this._lastEffectsTime = 0;
    this._frameInterval = 1e3 / 24;
    this._effects = WeatherEffects.create();
    this._effectsActive = false;
    this._effectsCtx = null;
    this._effectsScale = 1;
    this._effectsW = 0;
    this._effectsH = 0;
    this._sunGlowVisibility = 0;
    this._sunGlowIsNight = false;
    this._sunsetF = 0;
    this._isAstroNight = false;
    this._schemeDark = false;
    this._themeDark = false;
    this._lastState = null;
    this._hasReceivedFirstHass = false;
    this._initializationComplete = false;
    this._isVisible = false;
    this._intersectionObserver = null;
    this._resizeDebounceTimer = null;
    this._cachedDimensions = { width: 0, height: 0 };
    this._lastSnapshot = null;
    this._prevStyleSig = null;
    this._prevWeatherClass = null;
    this._hass = null;
    this._boundVisibilityChange = this._handleVisibilityChange.bind(this);
    this._boundTap = this._handleTap.bind(this);
    this._boundDocVisibility = this._handleDocVisibility.bind(this);
    this._forecastData = /* @__PURE__ */ new Map();
    this._forecastSubs = /* @__PURE__ */ new Map();
    this._forecastFormatCache = null;
    this._weatherBgActive = false;
    this._weatherBgState = null;
    this._weatherBgSchemeDark = null;
    this._defaultBgActive = false;
    this._defaultBgSchemeDark = null;
    this._weatherFilterSig = null;
    this._hazeStyleSig = null;
    this._sunMoonSig = null;
    this._sunMoonActive = false;
    this._moonPhaseApplied = null;
  }
  connectedCallback() {
    if (!this._resizeObserver) {
      this._resizeObserver = new ResizeObserver((entries) => {
        if (!entries.length) return;
        const entry = entries[0];
        let w, h;
        if (entry.borderBoxSize && entry.borderBoxSize[0]) {
          w = entry.borderBoxSize[0].inlineSize;
          h = entry.borderBoxSize[0].blockSize;
        } else {
          w = entry.target.offsetWidth;
          h = entry.target.offsetHeight;
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
      this._intersectionObserver = new IntersectionObserver(this._boundVisibilityChange, { threshold: 0.01, rootMargin: "0px" });
    }
    this._observeRoot();
    document.addEventListener("visibilitychange", this._boundDocVisibility);
    if (this._hasReceivedFirstHass) {
      this._syncForecasts();
      this._tryInitialize();
    }
  }
  disconnectedCallback() {
    this._stopAnimation();
    if (this._resizeObserver) this._resizeObserver.disconnect();
    if (this._intersectionObserver) this._intersectionObserver.disconnect();
    if (this._marqueeObserver) this._marqueeObserver.disconnect();
    this._marqueeObserver = null;
    for (const unsub of this._forecastSubs.values()) {
      try {
        unsub();
      } catch (_) {
      }
    }
    this._forecastSubs.clear();
    if (this._resizeDebounceTimer) {
      clearTimeout(this._resizeDebounceTimer);
      this._resizeDebounceTimer = null;
    }
    if (this._vertMeasureRaf != null) {
      cancelAnimationFrame(this._vertMeasureRaf);
      this._vertMeasureRaf = null;
    }
    this._pendingVertMeasure = null;
    this._isVisible = false;
    this.removeEventListener("click", this._boundTap);
    document.removeEventListener("visibilitychange", this._boundDocVisibility);
    this._initializationComplete = false;
    this._lastSnapshot = null;
    this._lastEffectsTime = 0;
  }
  _observeRoot() {
    if (!this._elements || !this._elements.root) return;
    this._resizeObserver.observe(this._elements.root);
    this._intersectionObserver.observe(this._elements.root);
    this.addEventListener("click", this._boundTap);
  }
  setConfig(config) {
    const prevContainerCount = this._containers ? this._containers.length : -1;
    this._config = _WeatherCard._migrateConfig(config);
    this._containers = this._deriveContainers(this._config);
    this._allButtonsCache = null;
    this._containerVisEntitiesCache = null;
    this._trackedIdsCache = null;
    if (this._containers.length !== prevContainerCount) this._containerRenderCache = null;
    this._initDOM();
    this._userCss.replaceSync(String(config.css || ""));
    const root = this._elements.root;
    const heightMode = String(config.card_height == null ? "" : config.card_height).toLowerCase();
    if (heightMode === "content" || heightMode === "square") {
      this.style.height = "auto";
      this.style.minHeight = "0";
      this.style.aspectRatio = heightMode === "square" ? "1" : "auto";
    } else if (heightMode === "auto") {
      this.style.height = "100%";
      this.style.minHeight = "0";
      this.style.aspectRatio = "auto";
    } else {
      const cssHeight = cssLength(config.card_height || "200px");
      this.style.height = cssHeight;
      this.style.minHeight = cssHeight;
      this.style.aspectRatio = "auto";
    }
    root.classList.toggle("fixed-height", heightMode !== "content");
    const hasTapAction = config.card_tap_action && config.card_tap_action.action && config.card_tap_action.action !== "none";
    root.classList.toggle("clickable", !!hasTapAction);
    this._createContainerCards();
    this._lastSnapshot = null;
    this._sunMoonSig = null;
    this._moonPhaseApplied = null;
    this._nativeIconCache = null;
    this._containerStyleCache = null;
    for (const c of this._allButtons()) {
      if (c.forecast && c.entity) {
        const k = `${c.entity}|${c.forecast === "hourly" ? "hourly" : "daily"}`;
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
    if (this._backgroundMode() !== "default") {
      root.classList.remove("has-default-bg");
      this._defaultBgActive = false;
    }
    this._applyConfigStyles();
    if (this._lastState) this._syncEffects(this._lastState);
    if (this._initializationComplete && this._isVisible) this._startAnimation();
  }
  set hass(hass) {
    if (!hass || !this._config) return;
    this._hass = hass;
    for (const els of this._elements.buttonContainerEls) if (els.isCard) for (const child of els.row.children) child.hass = hass;
    const cfg = this._config;
    const wObj = cfg.weather_entity && hass.states[cfg.weather_entity] || null;
    const sunId = cfg.sun_entity || "sun.sun";
    const sunObj = hass.states[sunId] || null;
    const themeDark = !!(hass.themes && hass.themes.darkMode);
    if (this._lastSnapshot && wObj === this._refW && sunObj === this._refSun && themeDark === this._themeDark && !this._trackedEntitiesChanged(hass)) return;
    this._refW = wObj;
    this._refSun = sunObj;
    const refs = /* @__PURE__ */ new Map(), allButtons = this._allButtons();
    for (const id of this._trackedEntityIds()) refs.set(id, hass.states[id]);
    this._refButtonEntities = refs;
    const isAstroNight = !!sunObj && (sunObj.state || "").toLowerCase() === "below_horizon";
    const colorMode = (cfg.color_mode || "sun").toLowerCase();
    if (colorMode === "sun" && !sunObj) this._warnMissingSun();
    const schemeDark = _WeatherCard._schemeDarkFromColorMode(colorMode, themeDark, isAstroNight);
    const hasAstroNightChanged = this._isAstroNight !== isAstroNight;
    const hasSchemeDarkChanged = this._schemeDark !== schemeDark;
    this._isAstroNight = isAstroNight;
    this._schemeDark = schemeDark;
    this._themeDark = themeDark;
    this._updateSunMoon(sunObj, wObj);
    const wEntity = wObj || FALLBACK_WEATHER;
    const wAttrs = wEntity.attributes || {};
    this._windMs = _windToMs(wAttrs.wind_speed, wAttrs.wind_speed_unit);
    const botSig = allButtons.map((s) => {
      if (!s.entity) return "";
      let sig;
      if (s.forecast) {
        const t = s.forecast === "hourly" ? "hourly" : "daily";
        const fd = this._forecastData.get(`${s.entity}|${t}`);
        sig = `forecast:${s.entity}|${t}:${s.forecast_offset || 0}:${fd && fd.fp || ""}`;
      } else {
        const e = hass.states[s.entity];
        if (!e) sig = "|";
        else if (s.attribute) sig = `${e.attributes[s.attribute] != null ? e.attributes[s.attribute] : ""}|${e.attributes[`${s.attribute}_unit`] != null ? e.attributes[`${s.attribute}_unit`] : ""}`;
        else sig = `${e.state}|${e.attributes.unit_of_measurement || ""}`;
      }
      if (Array.isArray(s.elements)) {
        for (const el of s.elements) {
          if (!el || el.type !== "text" && el.type !== "icon" || !(el.entity || el.attribute)) continue;
          const ee = hass.states[el.entity || s.entity];
          if (ee) sig += `|${el.type}:${el.attribute ? ee.attributes[el.attribute] != null ? ee.attributes[el.attribute] : "" : ee.state}`;
        }
      }
      for (const def of s._gaugeDefs) {
        const ge = hass.states[def.entity || s.entity];
        if (ge) sig += `|g:${def.attribute ? ge.attributes[def.attribute] != null ? ge.attributes[def.attribute] : "" : ge.state}`;
      }
      for (const ve of s._visEntities) {
        const ves = hass.states[ve];
        sig += `|vi:${ve}:${ves ? ves.state : ""}`;
      }
      return sig;
    }).join("||");
    let containerVisSig = "";
    for (const ve of this._containerVisibilityEntities()) {
      const ves = hass.states[ve];
      containerVisSig += `|av:${ve}:${ves ? ves.state : ""}`;
    }
    const l = hass.locale;
    const snapshot = {
      weather: wEntity.state || "",
      sun: sunObj && sunObj.state || "",
      schemeDark,
      themeDark,
      botSig,
      containerVisSig,
      wind: this._windMs,
      locale: `${l.language}|${l.number_format}|${l.time_format}|${l.time_zone}`
    };
    if (this._lastSnapshot && !this._hasSnapshotChanged(this._lastSnapshot, snapshot)) return;
    this._lastSnapshot = snapshot;
    let weatherState = (wEntity.state || "default").toLowerCase();
    if (isAstroNight && weatherState === "sunny") weatherState = "clear-night";
    if (!isAstroNight && weatherState === "clear-night") weatherState = "sunny";
    if (weatherState === "exceptional" && isAstroNight) weatherState = "clear-night";
    this._weatherState = weatherState;
    this._updateSchemeStyles(weatherState);
    this._updateTextElements(hass, weatherState);
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
      await import("./origami-weather-editor-NAXQQ53E.js");
    }
    return document.createElement("origami-weather-editor");
  }
  static async getStubConfig(hass) {
    const { buildStubConfig } = await import("./layout-presets-YOE37HUR.js");
    return buildStubConfig(hass);
  }
  static _migrateConfig(config) {
    if (!("sun_moon_enabled" in config)) return config;
    const { sun_moon_enabled: sunMoonEnabled, ...rest } = config;
    return sunMoonEnabled === false ? { sun_enabled: false, moon_enabled: false, ...rest } : rest;
  }
  getCardSize() {
    return 4;
  }
  getGridOptions() {
    return { columns: 12, rows: "auto", min_columns: 2, min_rows: 2 };
  }
  _deriveContainers(config) {
    const arr = config && config.button_containers;
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.map((a) => {
        if (!a || typeof a !== "object") return { buttons: [] };
        if (a.custom_cards) return { ...a, buttons: [] };
        const src = Array.isArray(a.buttons) ? a.buttons : [];
        const buttons = src.map((s) => {
          if (!s || typeof s !== "object") return { _visEntities: [], _gaugeDefs: [] };
          const c = { ...s };
          if (!c.ring_values && (c.gauge_entity || c.gauge_attribute)) c.ring_values = [{ entity: c.gauge_entity, attribute: c.gauge_attribute }];
          c._visEntities = collectConditionEntities(s.visibility);
          c._thresholdDef = { entity: s.color_threshold_entity, attribute: s.color_threshold_attribute || (s.color_threshold_entity ? s.attribute : void 0) };
          c._gaugeDefs = (s.type === "ring" ? gaugeRefs(c, "ring_") : []).concat(...(Array.isArray(s.elements) ? s.elements : []).filter((e) => e && e.type === "bar").map((e) => gaugeRefs(e, "bar_")), c._thresholdDef).filter((d) => d.entity || d.attribute);
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
    const set = /* @__PURE__ */ new Set();
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
          if (el && (el.type === "text" || el.type === "icon") && el.entity) ids.push(el.entity);
        }
      }
      for (const def of button._gaugeDefs) if (def.entity) ids.push(def.entity);
      for (const ve of button._visEntities) ids.push(ve);
    }
    for (const ve of this._containerVisibilityEntities()) ids.push(ve);
    const cardThresholdEntity = this._config && this._config.background_threshold_entity;
    if (cardThresholdEntity) ids.push(cardThresholdEntity);
    this._trackedIdsCache = ids;
    return ids;
  }
  _updateSunMoon(sun, weather) {
    const els = this._elements;
    if (!els || !els.sunMoon || !els.sunMoonLayer || !els.root) return;
    const cfg = this._config || {};
    const sunValid = !!sun && sun.state !== "unavailable" && sun.state !== "unknown";
    const isAstroNight = sunValid && (sun.state || "").toLowerCase() === "below_horizon";
    const elev = sunValid ? Number(sun.attributes && sun.attributes.elevation) : NaN;
    const weatherState = (weather && weather.state ? weather.state : "default").toLowerCase();
    const tuning = _weatherTuning(weatherState);
    const D = Math.PI / 180, az = (sunValid ? Number(sun.attributes?.azimuth) : NaN) * D, up = elev > 0, now = /* @__PURE__ */ new Date();
    const lat = Number(this._hass?.config?.latitude) * D, dec = -23.44 * D * Math.cos(2 * Math.PI * ((now - new Date(now.getFullYear(), 0, 1)) / 864e5 + 10) / 365);
    const rise = Math.acos(Math.max(-1, Math.min(1, Math.sin(dec) / Math.cos(lat)))) / D, south = lat > dec;
    const light = up ? Math.max(0, Math.min(1, (tuning.sunVisibility - 0.45) / 0.55)) * Math.min(1, elev / 4) : 0;
    for (const [k, v] of [["x", Math.sin(az)], ["y", Math.cos(az)], ["shadow", up ? Math.min(3, 1 / Math.tan(elev * D)) : 0], ["light", light], ["path-start", south ? rise : 360 - rise], ["path", south ? 360 - 2 * rise : 2 * rise]]) this._cssVar(els.root, `--origami-sun-${k}`, Number.isFinite(v) ? v.toFixed(3) : "", `sun-${k}`);
    this._sunsetF = sunValid && !isAstroNight && Number.isFinite(elev) ? Math.max(0, Math.min(1, 1 - Math.abs(elev - 6) / 16)) : 0;
    if (!sunValid || (isAstroNight ? cfg.moon_enabled : cfg.sun_enabled) === false) {
      this._sunMoonSig = null;
      if (this._sunMoonActive) {
        this._sunMoonActive = false;
        els.root.classList.remove("has-sun-moon");
        els.root.classList.remove("has-sun-rays");
      }
      return;
    }
    const t = Number.isFinite(elev) ? Math.min(1, Math.max(0, isAstroNight ? -elev / 24 : elev / 60)) : 0.5;
    const yFixed = cfg.sun_moon_y != null && cfg.sun_moon_y !== "";
    const y = yFixed ? Math.min(100, Math.max(0, parseFloat(cfg.sun_moon_y) || 0)) : Math.round((100 - t * 86) * 2) / 2;
    const x = cfg.sun_moon_x === "dynamic" ? Math.round((7 + _WeatherCard._pathProgress(sun.attributes || {}, isAstroNight) * 86) * 2) / 2 : null;
    const warm = isAstroNight ? 0 : Math.round(Math.pow(1 - t, 1.6) * 20) / 20;
    this._sunGlowVisibility = tuning.sunVisibility;
    this._sunGlowIsNight = isAstroNight;
    const phase = isAstroNight ? Math.round(_WeatherCard._moonPhase() * 200) / 200 : 0;
    const sig = `${isAstroNight ? "night" : "day"}|${x ?? ""}|${y}|${weatherState}|${warm}|${this._schemeDark ? "d" : "l"}|${phase}`;
    if (this._sunMoonSig === sig) return;
    this._sunMoonSig = sig;
    if (!this._sunMoonActive) {
      this._sunMoonActive = true;
      els.root.classList.add("has-sun-moon");
    }
    els.sunMoon.classList.toggle("is-astro-night", isAstroNight);
    const rays = isAstroNight ? 0 : _WeatherCard._rayStrength(tuning, t);
    els.root.classList.toggle("has-sun-rays", rays > 0);
    const st = els.sunMoonLayer.style;
    if (x == null) st.removeProperty("--origami-sun-moon-x");
    else st.setProperty("--origami-sun-moon-x", `${x}%`);
    st.setProperty("--origami-sun-moon-y", `${y}%`);
    st.setProperty("--origami-sun-moon-glow-opacity", String(tuning.sunVisibility));
    st.setProperty("--origami-sun-rays-opacity", String(rays));
    st.opacity = String(tuning.sunVisibility);
    if (isAstroNight) {
      this._applyMoonPhase(phase);
      this._loadMoonImage();
      st.setProperty("--origami-moon-phase-glow", String(Math.round(Math.sin(phase * Math.PI) * 100) / 100));
    } else {
      const c = _WeatherCard._sunPalette(warm, tuning.sunSaturation);
      st.setProperty("--origami-sun-core", c.core);
      st.setProperty("--origami-sun-inner", c.inner);
      st.setProperty("--origami-sun-mid", c.mid);
      st.setProperty("--origami-sun-edge", c.edge);
      st.setProperty("--origami-sun-glow-inner", c.glowInner);
      st.setProperty("--origami-sun-glow-outer", c.glowOuter);
      if (rays > 0) {
        const rt = _WeatherCard._rayTint(warm, this._schemeDark);
        st.setProperty("--origami-sun-ray-tint", rt.near);
        st.setProperty("--origami-sun-ray-tint-far", rt.far);
      }
    }
  }
  static _rayTint(warm, schemeDark) {
    if (schemeDark) return { near: "rgba(118,148,196,0.85)", far: "rgba(104,134,182,0.6)" };
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
  static _pathProgress(attrs, isAstroNight) {
    const now = Date.now(), end = Date.parse(isAstroNight ? attrs.next_rising : attrs.next_setting);
    let mid = Date.parse(isAstroNight ? attrs.next_midnight : attrs.next_noon);
    if (mid - now > 432e5) mid -= 864e5;
    const half = (end - mid) % 864e5;
    return half > 0 ? Math.min(1, Math.max(0, 0.5 + (now - mid) / (2 * half))) : 0.5;
  }
  static _schemeDarkFromColorMode(colorMode, themeIsDark, isAstroNight) {
    return colorMode === "theme" ? themeIsDark : colorMode === "dark" || colorMode !== "light" && isAstroNight;
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
    const lit = _WeatherCard._moonLitPath(p);
    litPath.setAttribute("d", lit || "");
  }
  _loadMoonImage() {
    const img = this._elements?.moonImage;
    if (img && !img.hasAttribute("href")) img.setAttribute("href", MOON_SURFACE);
  }
  static _moonPhase() {
    return (Date.now() - 94718244e4) / 2551442877 % 1;
  }
  static _moonLitPath(p) {
    if (p <= 0.02 || p >= 0.98) return "";
    if (Math.abs(p - 0.5) <= 0.02) return MOON_DISC_PATH;
    const k = Math.cos(2 * Math.PI * p);
    const rx = Math.max(0.05, Math.abs(k) * 48).toFixed(2);
    const waxing = p < 0.5;
    const outerSweep = waxing ? 1 : 0;
    const innerSweep = k > 0 === waxing ? 0 : 1;
    return `M 50 2 A 48 48 0 0 ${outerSweep} 50 98 A ${rx} 48 0 0 ${innerSweep} 50 2 Z`;
  }
  _warnMissingSun() {
    if (this._sunWarned) return;
    this._sunWarned = true;
    console.warn('Origami Weather: color_mode "sun" requires a sun entity. Tried sun.sun but it was not found; falling back to light. Set sun_entity if your sun entity has a custom ID.');
  }
  _resolveSensorValue(hass, entityId, attribute) {
    let formatted = "N/A", haFormatted = false, rawNumeric = null, date;
    const sensor = hass.states[entityId];
    if (sensor && attribute && sensor.attributes[attribute] == null && !entityId.startsWith("weather.")) attribute = void 0;
    if (sensor && attribute) {
      const raw = sensor.attributes[attribute];
      if (raw !== void 0 && raw !== null) {
        formatted = hass.formatEntityAttributeValue(sensor, attribute);
        haFormatted = true;
        rawNumeric = raw;
      }
    } else if (sensor) {
      formatted = hass.formatEntityState(sensor);
      haFormatted = true;
      rawNumeric = sensor.state;
    }
    if (typeof rawNumeric === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(rawNumeric)) {
      const d = new Date(rawNumeric);
      if (!isNaN(d)) {
        date = d;
        const now = /* @__PURE__ */ new Date(), day = 864e5;
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const targetStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const dayDiff = Math.round((targetStart - todayStart) / day);
        const timePart = dateFormat(hass, { hour: "numeric", minute: "2-digit" }).format(d);
        if (dayDiff === 0 || d > now && d - now < day) {
          formatted = timePart;
        } else if (dayDiff >= -1 && dayDiff <= 6) {
          formatted = `${dateFormat(hass, { weekday: "short" }).format(d)}, ${timePart}`;
        } else {
          formatted = dateFormat(hass, { weekday: "short", day: "numeric", month: "short" }).format(d);
        }
      }
    }
    return { formatted, sensor, haFormatted, rawNumeric, date };
  }
  _syncForecasts() {
    if (!(this._hass && this._hass.connection)) return;
    const needed = /* @__PURE__ */ new Set();
    for (const c of this._allButtons()) {
      if (c.forecast && c.entity) needed.add(`${c.entity}|${c.forecast === "hourly" ? "hourly" : "daily"}`);
      this._collectConditionForecasts(c.visibility, c.entity, needed);
    }
    for (const c of this._containers) if (c) this._collectConditionForecasts(c.visibility, null, needed);
    for (const [k, unsub] of this._forecastSubs) if (!needed.has(k)) {
      unsub();
      this._forecastSubs.delete(k);
      this._forecastData.delete(k);
    }
    for (const k of needed) if (!this._forecastSubs.has(k)) this._startForecastSubscription(k);
  }
  _collectConditionForecasts(conditions, fallbackEntity, out) {
    if (!Array.isArray(conditions)) return;
    for (const c of conditions) {
      if (!c || typeof c !== "object") continue;
      if (Array.isArray(c.conditions)) this._collectConditionForecasts(c.conditions, fallbackEntity, out);
      if (c.condition !== "numeric_state") continue;
      for (const spec of [c, c.above, c.below]) {
        if (!spec || typeof spec !== "object" || !spec.forecast) continue;
        const entity = spec.entity || c.entity || fallbackEntity;
        if (entity) out.add(`${entity}|${spec.forecast === "hourly" ? "hourly" : "daily"}`);
      }
    }
  }
  _startForecastSubscription(key) {
    const [entity, type] = key.split("|"), hass = this._hass;
    if (!(hass && hass.connection)) return;
    if (!this._forecastData.has(key) && FORECAST_CACHE.has(key)) {
      this._forecastData.set(key, FORECAST_CACHE.get(key));
    }
    const pending = () => {
    };
    this._forecastSubs.set(key, pending);
    hass.connection.subscribeMessage(
      (msg) => this._onForecastData(key, msg.forecast != null ? msg.forecast : [], type === "daily"),
      { type: "weather/subscribe_forecast", forecast_type: type, entity_id: entity }
    ).then((unsub) => {
      if (!this.isConnected || this._forecastSubs.get(key) !== pending) {
        unsub();
        return;
      }
      this._forecastSubs.set(key, unsub);
    }).catch(() => {
      if (this._forecastSubs.get(key) === pending) this._forecastSubs.delete(key);
      if (!this._forecastData.has(key)) this._onForecastData(key, [], type === "daily");
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
    this.hass = this._hass;
  }
  _resolveForecastValue(hass, button) {
    const type = button.forecast === "hourly" ? "hourly" : "daily";
    const offset = Math.max(0, parseInt(button.forecast_offset, 10) || 0);
    const missing = { formatted: "N/A", condition: null, datetime: null };
    const st = hass.states[button.entity], sf = st && st.attributes ? Number(st.attributes.supported_features) : NaN;
    if (Number.isFinite(sf) && !(sf & (type === "hourly" ? 2 : 1))) return missing;
    const _forecastEntry = this._forecastData.get(`${button.entity}|${type}`);
    const forecast = _forecastEntry && _forecastEntry.processed;
    if (!forecast) return { formatted: "", condition: null, datetime: null, loading: true };
    if (!forecast.length) return missing;
    if (offset >= forecast.length) return { formatted: "", condition: null, datetime: null, none: true };
    const entry = forecast[offset];
    let label = entry.condition || "\u2014";
    if (entry.condition && typeof hass.localize === "function") label = hass.localize(`component.weather.entity_component._.state.${entry.condition}`) || label;
    return { formatted: label, condition: entry.condition, datetime: entry.datetime, entry };
  }
  _reshapeValue(hass, r, txt, hasFormat, unitEntity, unitAttr) {
    if (r.rawNumeric == null) return { value: r.formatted, unit: "" };
    const custom = strftime(hass, r.date, txt.format);
    if (custom) return { value: custom, unit: "" };
    let value = r.formatted, unit = hasFormat ? txt.format : "";
    if (r.date) return { value, unit };
    if (isDatePattern(txt.format) && (r.rawNumeric === "unknown" || r.rawNumeric === "unavailable")) return { value, unit: "" };
    const numeric = r.rawNumeric != null && isFinite(parseFloat(r.rawNumeric));
    if (txt.precision !== void 0 && numeric) {
      value = this._formatNumber(r.rawNumeric, this._getForecastFormat(hass.locale, txt.precision));
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
    const hasFormat = txt.format !== void 0;
    const tight = hasFormat || txt.fancy_unit === true;
    if (txt.entity) {
      const r = this._resolveSensorValue(hass, txt.entity, txt.attribute);
      const { value: value2, unit: unit2 } = this._reshapeValue(hass, r, txt, hasFormat, txt.entity, txt.attribute);
      return { value: value2, unit: unit2, tight, sig: `e:${txt.entity}|${txt.attribute || ""}|${txt.precision ?? ""}|${value2}${unit2}` };
    }
    if (txt.text !== void 0 && txt.text !== "") {
      const value2 = String(txt.text);
      return { value: value2, unit: hasFormat ? txt.format : "", tight: true, sig: `t:${value2}|${hasFormat ? txt.format : ""}` };
    }
    if (txt.attribute) {
      if (ctx.isForecast) {
        if (!ctx.forecastEntry) return { value: ctx.formatted, unit: "", tight: true, sig: `forecast:loading|${ctx.formatted}` };
        if (txt.attribute === "datetime") {
          const custom = strftime(hass, ctx.forecastDatetime, txt.format);
          if (custom) return { value: custom, unit: "", tight: true, sig: `forecast:datetime|${custom}` };
          const value4 = ctx.forecastDatetime ? forecastLabel(ctx.forecastDatetime, button.forecast !== "hourly", hass) : "";
          return { value: value4, unit: hasFormat ? txt.format : "", tight: true, sig: `forecast:datetime|${value4}` };
        }
        const raw = ctx.forecastEntry[txt.attribute];
        if (raw == null) return { value: "N/A", unit: "", tight: true, sig: `forecast:${txt.attribute}|na` };
        if (txt.attribute === "condition" && typeof raw === "string") {
          const value4 = typeof hass.localize === "function" && hass.localize(`component.weather.entity_component._.state.${raw}`) || raw;
          return { value: value4, unit: hasFormat ? txt.format : "", tight: true, sig: `forecast:condition|${value4}` };
        }
        let value3 = String(raw), unit3 = hasFormat ? txt.format : "";
        if (raw !== "" && !isNaN(parseFloat(raw)) && isFinite(raw)) {
          const precision = txt.precision !== void 0 ? txt.precision : 0;
          value3 = this._formatNumber(raw, this._getForecastFormat(hass.locale, precision));
          if (!hasFormat) {
            const w = hass.states[button.entity] && hass.states[button.entity].attributes;
            unit3 = w && w[`${txt.attribute}_unit`] || _FORECAST_UNIT_MAP[txt.attribute] && w && w[_FORECAST_UNIT_MAP[txt.attribute]] || _FORECAST_UNIT_FALLBACK[txt.attribute] || "";
          }
        }
        return { value: value3, unit: unit3, tight: hasFormat || txt.fancy_unit === true, sig: `forecast:${txt.attribute}|${value3}${unit3}` };
      }
      const r = this._resolveSensorValue(hass, button.entity, txt.attribute);
      const { value: value2, unit: unit2 } = this._reshapeValue(hass, r, txt, hasFormat, button.entity, txt.attribute);
      return { value: value2, unit: unit2, tight, sig: `a:${txt.attribute}|${txt.precision ?? ""}|${value2}${unit2}` };
    }
    const { value, unit } = ctx.primaryResolved ? this._reshapeValue(hass, ctx.primaryResolved, txt, hasFormat, button.entity, button.attribute) : { value: ctx.formatted, unit: hasFormat ? txt.format : "" };
    return { value, unit, tight, sig: `v:${value}${unit}` };
  }
  _getForecastFormat(locale, precision) {
    const key = `${locale.language}|${locale.number_format}|${precision}`;
    if ((this._forecastFormatCache && this._forecastFormatCache[0]) === key) return this._forecastFormatCache[1];
    const fmt = numberFormat(locale, precision);
    this._forecastFormatCache = [key, fmt];
    return fmt;
  }
  _cssVar(el, prop, val, cacheKey) {
    if (!this._cssVarCache) this._cssVarCache = {};
    if (this._cssVarCache[cacheKey] === val) return;
    this._cssVarCache[cacheKey] = val;
    if (val) el.style.setProperty(prop, cssValue(val));
    else el.style.removeProperty(prop);
  }
  _formatNumber(raw, fmt) {
    if (raw === null || raw === "" || isNaN(parseFloat(raw)) || !isFinite(raw)) return String(raw ?? "");
    const f = fmt || this._numFmt;
    return f ? f.format(raw) : String(raw);
  }
  _extractUnit(hass, entityId, attribute) {
    const sensor = hass && hass.states[entityId];
    if (!sensor) return "";
    if (attribute) return sensor.attributes[`${attribute}_unit`] || sensor.attributes.unit_of_measurement || "";
    return sensor.attributes.unit_of_measurement || "";
  }
  _evaluateCondition(c, hass) {
    if (!c || !c.condition) return true;
    switch (c.condition) {
      case "state": {
        if (!c.entity) return true;
        const stateObj = hass.states[c.entity];
        if (!stateObj) return false;
        const val = stateObj.state;
        if (c.state != null) {
          const match = Array.isArray(c.state) ? c.state : [c.state];
          return match.some((s) => String(s) === val);
        }
        if (c.state_not != null) {
          const match = Array.isArray(c.state_not) ? c.state_not : [c.state_not];
          return match.every((s) => String(s) !== val);
        }
        return true;
      }
      case "numeric_state": {
        if (!c.entity) return true;
        if (!hass.states[c.entity]) return false;
        const val = this._conditionNumber(hass, c, c.entity);
        if (isNaN(val)) return false;
        if (c.above != null) {
          const a = this._conditionNumber(hass, c.above, c.entity);
          if (isNaN(a) || val <= a) return false;
        }
        if (c.below != null) {
          const b = this._conditionNumber(hass, c.below, c.entity);
          if (isNaN(b) || val >= b) return false;
        }
        return true;
      }
      case "screen": {
        if (!c.media_query) return true;
        return window.matchMedia(c.media_query).matches;
      }
      case "user": {
        if (!Array.isArray(c.users) || !hass.user) return true;
        return c.users.includes(hass.user.id);
      }
      case "and": {
        if (!Array.isArray(c.conditions)) return true;
        return c.conditions.every((sub) => this._evaluateCondition(sub, hass));
      }
      case "or": {
        if (!Array.isArray(c.conditions)) return true;
        return c.conditions.some((sub) => this._evaluateCondition(sub, hass));
      }
      case "not": {
        if (!Array.isArray(c.conditions)) return true;
        return c.conditions.every((sub) => !this._evaluateCondition(sub, hass));
      }
      default:
        return true;
    }
  }
  _conditionNumber(hass, spec, fallbackEntity) {
    if (spec == null) return NaN;
    if (typeof spec !== "object") return parseFloat(spec);
    const entity = spec.entity || fallbackEntity;
    const stateObj = entity && hass.states[entity];
    if (!stateObj) return NaN;
    if (spec.forecast) {
      const type = spec.forecast === "hourly" ? "hourly" : "daily";
      const cached = this._forecastData.get(`${entity}|${type}`);
      const list = cached && cached.processed;
      if (!list || !list.length) return NaN;
      const offset = Math.max(0, parseInt(spec.forecast_offset, 10) || 0);
      const entry = list[Math.min(offset, list.length - 1)];
      return entry ? parseFloat(entry[spec.attribute]) : NaN;
    }
    return parseFloat(spec.attribute ? stateObj.attributes[spec.attribute] : stateObj.state);
  }
  _checkButtonVisibility(button, hass) {
    return !Array.isArray(button.visibility) || !button.visibility.length || button.visibility.every((c) => this._evaluateCondition(c, hass));
  }
  _hasSnapshotChanged(prev, next) {
    for (const k in next) if (prev[k] !== next[k]) return true;
    return false;
  }
  static _buildStyles() {
    return `
            :host { display: block; width: 100%; position: relative; background: transparent !important; --_dash-bg: var(--ha-card-background, var(--card-background-color, var(--primary-background-color))); }
            #card-root { position: relative; width: 100%; height: 100%; z-index: var(--origami-stack-order, 1); overflow: hidden; overflow: clip; background: transparent; display: block; transform: translateZ(0); contain: layout style paint; --_radius: var(--origami-card-border-radius, var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px))); border-radius: var(--_radius); box-shadow: var(--ha-card-box-shadow, none); background-color: transparent; border-width: var(--origami-card-border-width, var(--ha-card-border-width, 0px)); border-style: solid; border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0)); box-sizing: border-box; --_origami-button-shadow: var(--_origami-shadow); --_text-bg: var(--_dash-bg); --_button-no-bg-shadow: none; }
            #card-root.clickable { cursor: pointer; -webkit-tap-highlight-color: transparent; }
            #card-root.clickable:active { transform: scale(0.98); transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1); }
            #card-root.clickable:not(:active) { transition: transform 0.4s cubic-bezier(0.2, 0, 0.2, 1); }
            #card-root.scheme-light { --_scheme-bg: #fff; --origami-text-color: var(--origami-text-light, #2c2c2e); --_button-shadow-avail: var(--origami-button-text-shadow, var(--origami-text-shadow-light, 0 1px 2px rgba(255, 255, 255, 0.85), 0 0 6px rgba(255, 255, 255, 0.5))); --_text-bg-border: var(--ha-card-border-color, var(--divider-color, rgba(0,0,0,0.08))); --_origami-shadow-preset: 0 1px 2px rgba(17, 24, 39, 0.08), 0 4px 12px rgba(17, 24, 39, 0.10); }
            #card-root.scheme-dark { --_scheme-bg: #1c1c1c; --origami-text-color: var(--origami-text-dark, #ffffff); --_button-shadow-avail: var(--origami-button-text-shadow, var(--origami-text-shadow-dark, 0 1px 3px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.6))); --_text-bg-border: var(--ha-card-border-color, var(--divider-color, rgba(255,255,255,0.08))); --_origami-shadow-preset: 0 1px 2px rgba(0, 0, 0, 0.35), 0 6px 16px rgba(0, 0, 0, 0.45); }
            #card-root.theme-mismatch { --_text-bg: var(--_scheme-bg); --ha-card-background: var(--_text-bg); --primary-text-color: var(--origami-text-color); --secondary-text-color: color-mix(in srgb, var(--origami-text-color) 70%, transparent); }
            #card-root.has-custom-shadow { --_origami-shadow: var(--origami-shadow, var(--_origami-shadow-preset)); }
            #card-root:not(.has-custom-shadow) { --_origami-shadow: var(--origami-shadow, none); }
            #card-root.no-card-frame { border-radius: 0; box-shadow: none; border-width: 0; }
            #card-root.bg-ha-card { background-color: var(--_text-bg); }
            #card-root.bg-custom-color { background-color: var(--origami-card-bg-color, var(--_text-bg)); }
            :host(.full-width) { --origami-fw-gap: var(--origami-full-width-margin, var(--ha-view-sections-column-gap, var(--column-gap, 32px))); width: calc(100% + 2 * var(--origami-fw-gap)); max-width: none; }
            #card-root.edge-fade::before { content: ""; position: absolute; inset: 0; z-index: ${Z.edge}; pointer-events: none; border-radius: inherit; background: linear-gradient(to bottom, var(--origami-edge-fade-color, var(--primary-background-color, #111)) 0%, transparent var(--origami-edge-fade-size, 10%), transparent calc(100% - var(--origami-edge-fade-size, 10%)), var(--origami-edge-fade-color, var(--primary-background-color, #111)) 100%); }
            #card-root::after { content: ""; position: absolute; inset: 0; z-index: ${Z.tint}; pointer-events: none; border-radius: inherit; background: var(--origami-gradient, none); }
            #card-root:is(.has-default-bg, .has-weather-bg)::after { background-color: color-mix(in srgb, var(--_dash-bg) var(--origami-bg-blend, 0%), transparent); }
            #weather-bg { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: ${Z.pictures}; display: none; overflow: hidden; overflow: clip; }
            #weather-bg > img, #weather-bg > video { display: block; width: 100%; height: 100%; object-fit: cover; border: none; outline: none; filter: brightness(var(--origami-bg-brightness, 1)) saturate(var(--origami-bg-saturation, 1)) blur(var(--origami-bg-blur, 0px)) var(--_origami-dark-theme-filter, ); }
            #card-root.has-weather-bg #weather-bg { display: block; }
            #card-root.image-front #weather-bg { z-index: ${Z["pictures-front"]}; }
            #default-bg { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: ${Z.sky}; display: none; overflow: hidden; overflow: clip; }
            #sky-base { position: absolute; inset: 0; border-radius: inherit; }
            #card-root.scheme-light #sky-base { background: var(--origami-default-bg-light, linear-gradient(125deg, #bdd8ee 0%, #d3e6f2 55%, #e4f0f7 100%)); }
            #card-root.scheme-dark #sky-base { background: var(--origami-default-bg-dark, linear-gradient(125deg, #0b1830 0%, #10203c 55%, #152a4c 100%)); }
            .sky-haze { position: absolute; inset: -25%; border-radius: inherit; transform: scale(var(--origami-haze-scale, 1)); }
            #card-root.no-haze .sky-haze { display: none; }
            .haze-layer { position: absolute; border-radius: 50%; background: radial-gradient(ellipse closest-side at 50% 50%, var(--origami-haze-core) 0%, color-mix(in srgb, var(--origami-haze-c) 90%, transparent) 16%, color-mix(in srgb, var(--origami-haze-c) 65%, transparent) 32%, color-mix(in srgb, var(--origami-haze-c) 50%, transparent) 48%, color-mix(in srgb, var(--origami-haze-c) 36%, transparent) 64%, color-mix(in srgb, var(--origami-haze-c) 24%, transparent) 78%, color-mix(in srgb, var(--origami-haze-c) 13%, transparent) 88%, color-mix(in srgb, var(--origami-haze-c) 5%, transparent) 95%, transparent 100%); }
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
            #card-root:is(.has-default-bg, .haze-only) #default-bg { display: block; }
            #card-root.haze-only #sky-base { display: none; }
            #sun-moon-layer { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: ${Z.sun}; overflow: hidden; overflow: clip; display: none; }
            #card-root.has-sun-moon #sun-moon-layer { display: block; }
            #sun-moon { position: absolute; z-index: 1; left: var(--origami-sun-moon-x, 50%); top: clamp(calc(var(--origami-sun-moon-size, 80px) / 2 + 6px), var(--origami-sun-moon-y, 100%), 100%); width: var(--origami-sun-moon-size, 80px); height: var(--origami-sun-moon-size, 80px); transform: translate(-50%, -50%); }
            #sun-moon .sun, #sun-moon .moon { position: absolute; inset: 0; }
            #sun-moon .sun-glow, #sun-moon .moon-glow { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 50%; will-change: transform; opacity: var(--origami-sun-moon-glow-opacity, 1); }
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
            #sun-moon .moon-image { filter: brightness(1.6) contrast(1.35) saturate(0.1) sepia(0.12); mix-blend-mode: luminosity; opacity: 0.88; }
            #card-root.scheme-light #sun-moon .moon-image { filter: brightness(2.0) contrast(1.2) saturate(0.08) sepia(0.15); opacity: 0.72; }
            #card-root.scheme-light #sun-moon .moon-surface { fill-opacity: 0.90; }
            #sun-moon .moon { opacity: 0; }
            #sun-moon.is-astro-night .sun { opacity: 0; }
            #sun-moon.is-astro-night .moon { opacity: 1; }
            #sun-moon.is-astro-night .sun-glow, #sun-moon.is-astro-night .sun-disc::before, #sun-moon.is-astro-night .sun-disc::after { animation: none; }
            #sun-moon:not(.is-astro-night) .moon-glow { animation: none; }
            @keyframes wbkSunGlow { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.06); } }
            @keyframes wbkMoonGlow { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.05); } }
            @keyframes wbkSunStreak { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.58; } }
            @keyframes wbkSunCore { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; } 50% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; } }
            #sun-rays { position: absolute; inset: 0; z-index: 0; display: none;
                opacity: var(--origami-sun-rays-opacity, 0);
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
            @keyframes wbkRayShine { 0%, 100% { opacity: calc(var(--origami-sun-rays-opacity, 0) * 0.35); } 50% { opacity: calc(var(--origami-sun-rays-opacity, 0) * 0.9); } }
            #content-layer { position: relative; container-type: inline-size; display: flex; flex-direction: var(--origami-content-direction, column); justify-content: var(--origami-content-align, flex-start); align-items: var(--origami-content-align-items, stretch); padding: var(--_origami-pad-v, var(--origami-card-padding, 16px)) var(--_origami-pad-h, var(--origami-card-padding, 16px)); box-sizing: border-box; pointer-events: none; overflow: visible; }
            #content-layer.direction-row { flex-wrap: wrap; }
            #content-layer.direction-row > .buttons-group, #content-layer.direction-row > .cards-group { flex: 1 1 0; min-width: 0; }
            #content-layer > .buttons-group.has-custom-width, #content-layer > .cards-group.has-custom-width { flex: 0 0 auto; width: var(--origami-container-width); align-self: auto; }
            #content-layer:not(.direction-row) > .buttons-group.has-row-horizontal-scroll:not(.has-custom-width) { align-self: stretch; }
            #free-layer > .buttons-group.free-positioned.has-row-horizontal-scroll:not(.has-custom-width) { width: 100%; }
            #card-root.fixed-height #content-layer { position: absolute; inset: 0; height: 100%; }
            #card-root.fixed-height { --_origami-vscroll-fill: calc(100% - var(--_origami-pad-v, var(--origami-card-padding, 16px)) * 2); }
            #free-layer { position: absolute; inset: var(--_origami-pad-v, var(--origami-card-padding, 16px)) var(--_origami-pad-h, var(--origami-card-padding, 16px)); pointer-events: none; box-sizing: border-box; overflow: visible; container-type: size; }
            #free-layer > .buttons-group.free-positioned { position: absolute; max-width: 100%; }
            #free-layer > .buttons-group:not(.layer-sky, .layer-back, .layer-middle) { z-index: ${Z.free}; }
            #free-layer > .buttons-group.free-positioned.has-custom-width { width: var(--origami-container-width); }
            .buttons-group { pointer-events: none; min-width: 0; box-sizing: border-box; padding: var(--origami-container-padding, 0); margin: var(--origami-container-margin, 0); }
            .buttons-group.has-image { display: grid; }
            .buttons-group.has-image > * { grid-area: 1 / 1; min-width: 0; }
            .group-image { width: 100%; height: auto; pointer-events: auto; }
            #card-root:not(.scheme-dark) .group-image.dark, #card-root.scheme-dark .group-image.light { display: none; }
            .buttons-row, .group-image { color: var(--origami-text-color); }
            .buttons-row.has-free { position: relative; }
            .buttons-row > .free-positioned .button-icon, .button-ring .button-icon { line-height: 0; }
            .buttons-group.has-row-horizontal-scroll { height: var(--origami-row-height, auto); }
            .buttons-group.has-row-vertical-scroll { height: var(--origami-row-height, var(--_origami-vscroll-fill, auto)); }
            .buttons-group.has-row-vertical-scroll.has-vscroll-cap { height: auto; }
            #card-root.fixed-height .buttons-group.has-row-vertical-scroll.has-vscroll-cap { display: flex; flex-direction: column; max-height: 100%; min-height: 0; }
            #card-root.fixed-height .buttons-group.has-row-vertical-scroll.has-vscroll-cap > .buttons-row { min-height: 0; }
            .buttons-group.grouped { border-radius: var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)); }
            .buttons-group.grouped.with-bg { pointer-events: auto; --_bg: var(--origami-container-bg-color, var(--origami-bottom-bg-color, var(--_text-bg))); background: var(--_bg); border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-group-shadow, var(--_origami-shadow)); }
            :where(.buttons-group.grouped, .button).with-bg.blurred { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .buttons-group.grouped.with-bg > .buttons-row .button.with-bg { background: none; border: none; box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none; border-radius: 0; padding: var(--origami-buttons-padding, 0); }
            .buttons-row.has-separator:not(.row-grid) > .button { position: relative; overflow: visible; }
            .buttons-row.has-separator:not(.row-grid) > .button + .button::before { content: ""; position: absolute; pointer-events: none; top: 0; bottom: 0; inset-inline-start: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); width: var(--origami-separator-width, 2px); background: var(--origami-separator-color, color-mix(in srgb, currentColor 10%, transparent)); }
            .buttons-row.has-separator:not(.row-grid).row-vertical-scroll > .button + .button::before { top: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); bottom: auto; left: 0; right: 0; inset-inline-start: 0; width: auto; height: var(--origami-separator-width, 2px); }
            .buttons-row { font-size: var(--origami-bottom-font-size, 16px); font-weight: var(--origami-bottom-font-weight, 500); display: flex; align-items: var(--origami-row-align, center); gap: var(--origami-bottom-gap, 8px); width: 100%; box-sizing: border-box; pointer-events: none; border-radius: inherit; }
            .buttons-row.row-wrap { flex-wrap: wrap; justify-content: var(--origami-row-justify, flex-start); }
            .buttons-row.row-horizontal-scroll { pointer-events: auto; justify-content: var(--origami-row-justify, flex-start); flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden; height: 100%; overflow-anchor: none; scroll-snap-type: x proximity; scrollbar-width: none; pointer-events: auto; }
            .buttons-row.row-horizontal-scroll::-webkit-scrollbar { display: none; }
            .buttons-row.row-horizontal-scroll.has-visible-count { display: grid; grid-auto-flow: column; grid-auto-columns: var(--origami-button-basis); scroll-snap-type: x mandatory; }
            .buttons-row.row-horizontal-scroll.has-visible-count > .button { width: 100%; scroll-snap-align: start; }
            .buttons-row.row-vertical-scroll { pointer-events: auto; justify-content: var(--origami-row-justify, flex-start); align-items: var(--origami-row-align, stretch); flex-direction: column; flex-wrap: nowrap; overflow-y: auto; overflow-x: hidden; height: 100%; max-height: var(--origami-row-max-height, none); overflow-anchor: none; scroll-snap-type: y proximity; scrollbar-width: none; pointer-events: auto; }
            .buttons-row.row-vertical-scroll::-webkit-scrollbar { display: none; }
            .buttons-row.row-vertical-scroll.has-visible-count { scroll-snap-type: y mandatory; }
            .buttons-row.row-vertical-scroll.has-visible-count > .button { flex: 0 0 auto; scroll-snap-align: start; }
            .buttons-row.has-scroll-fade { --_scroll-fade: var(--origami-scroll-fade-size, 24px); }
            .buttons-row.row-horizontal-scroll.has-scroll-fade { -webkit-mask-image: linear-gradient(to right, transparent 0, #000 calc(var(--origami-fade-start, 1) * var(--_scroll-fade)), #000 calc(100% - var(--origami-fade-end, 1) * var(--_scroll-fade)), transparent 100%); mask-image: linear-gradient(to right, transparent 0, #000 calc(var(--origami-fade-start, 1) * var(--_scroll-fade)), #000 calc(100% - var(--origami-fade-end, 1) * var(--_scroll-fade)), transparent 100%); }
            .buttons-row.row-vertical-scroll.has-scroll-fade { -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 calc(var(--origami-fade-start, 1) * var(--_scroll-fade)), #000 calc(100% - var(--origami-fade-end, 1) * var(--_scroll-fade)), transparent 100%); mask-image: linear-gradient(to bottom, transparent 0, #000 calc(var(--origami-fade-start, 1) * var(--_scroll-fade)), #000 calc(100% - var(--origami-fade-end, 1) * var(--_scroll-fade)), transparent 100%); }
            @keyframes origami-scroll-fade { 0% { --origami-fade-start: 0; --origami-fade-end: 1; } 8%, 92% { --origami-fade-start: 1; --origami-fade-end: 1; } 100% { --origami-fade-start: 1; --origami-fade-end: 0; } }
            @supports not (animation-timeline: scroll()) {
                .buttons-row.has-scroll-fade { --origami-fade-start: 1; --origami-fade-end: 1; }
            }
            @supports (animation-timeline: scroll()) {
                .buttons-row.row-horizontal-scroll.has-scroll-fade { animation-name: origami-scroll-fade; animation-duration: auto; animation-timing-function: linear; animation-fill-mode: both; animation-timeline: scroll(self inline); }
                .buttons-row.row-vertical-scroll.has-scroll-fade { animation-name: origami-scroll-fade; animation-duration: auto; animation-timing-function: linear; animation-fill-mode: both; animation-timeline: scroll(self block); }
            }
            .buttons-row.row-grid { display: grid; grid-template-columns: repeat(var(--origami-row-columns, 1), minmax(0, 1fr)); align-items: stretch; row-gap: var(--origami-bottom-gap, 8px); column-gap: var(--origami-bottom-gap, 8px); }
            .buttons-row.row-grid,
            .buttons-row.has-visible-count { align-items: stretch; }
            .buttons-row.row-grid > .button,
            .buttons-row.has-visible-count > .button { overflow: hidden; }
            .buttons-row.row-grid > .button.has-bar-overflow,
            .buttons-row.has-visible-count > .button.has-bar-overflow,
            .button.has-bg-image.has-bar-overflow { overflow: visible; }
            .buttons-row.align-start:where(.row-grid, .has-visible-count) > .button:not(.align-start, .align-center, .align-end, .align-spread) { justify-content: flex-start; text-align: start; }
            .buttons-row.align-center:where(.row-grid, .has-visible-count) > .button:not(.align-start, .align-center, .align-end, .align-spread) { justify-content: center; text-align: center; }
            .buttons-row.align-end:where(.row-grid, .has-visible-count) > .button:not(.align-start, .align-center, .align-end, .align-spread) { justify-content: flex-end; text-align: end; }
            .buttons-row.align-center > .button:not(.format-vertical, .align-start, .align-center, .align-end, .align-spread) { justify-content: center; }
            .buttons-row.align-spread > .button:not(.format-vertical, .align-start, .align-center, .align-end, .align-spread) { flex: 1 1 0; justify-content: flex-start; }
            .buttons-row.align-spread > .button:not(.format-vertical, .align-start, .align-center, .align-end, .align-spread) > .button-text:last-child { margin-left: auto; }
            .buttons-row.align-start > .button.format-vertical:not(.align-start, .align-center, .align-end, .align-spread) { align-items: flex-start; text-align: start; }
            .buttons-row.align-end > .button.format-vertical:not(.align-start, .align-center, .align-end, .align-spread) { align-items: flex-end; text-align: end; }
            .buttons-row.has-visible-count > .button.format-vertical { align-content: center; }
            .button { display: flex; flex-direction: row; align-items: center; row-gap: var(--origami-button-gap, 6px); column-gap: var(--origami-button-gap, 0.40em); flex-wrap: nowrap; flex: 0 0 auto; min-width: 0; max-width: 100%; white-space: nowrap; box-sizing: border-box; scroll-snap-align: start; padding: var(--origami-buttons-padding, 0); cursor: pointer; pointer-events: auto; -webkit-tap-highlight-color: transparent; transition: transform 0.4s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.2, 0, 0.2, 1); }
            .button:active { transform: scale(0.94); opacity: 0.75; transition: transform 0.12s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.12s cubic-bezier(0.2, 0, 0.2, 1); }
            .button .button-icon { flex: 0 0 auto; display: flex; align-items: center; justify-content: center; padding: var(--weather-icon-padding, 0); }
            .button .button-icon ha-icon,
            .button .button-icon ha-state-icon { --mdc-icon-size: var(--weather-icon-size, 1.1em); opacity: 0.9; }
            .button .button-icon svg.weather-icon { display: block; width: var(--weather-icon-size, 1.1em); height: var(--weather-icon-size, 1.1em); opacity: 0.9; }
            .button .button-icon img.custom-bottom-icon { display: block; height: var(--weather-icon-size, 1.1em); width: var(--weather-icon-size, 1.1em); object-fit: contain; }
            .button .button-text { flex: 0 1 auto; min-width: 0; max-width: 100%; line-height: 100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: var(--_button-no-bg-shadow, none); padding: 0.1em 0.06em; margin: -0.1em -0.06em; }
            .button .button-text:empty { display: none; }
            .button .button-text.marquee-host { flex: 1 1 auto; }
            .button .button-text .fancy-unit { font-size: 0.55em; font-weight: 500; opacity: 0.7; vertical-align: baseline; position: relative; top: -0.45em; margin-left: 3px; }
            .button.icon-only { column-gap: 0; row-gap: 0; }
            .button.with-bg { --_bg: var(--origami-bottom-bg-color, var(--_text-bg)); background: var(--_bg); padding: var(--origami-buttons-padding, 5px 10px); text-shadow: none; border-radius: var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)); align-items: center; border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); }
            .button.with-bg.blurred { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .button:is(.with-bg, .has-bg-image) .button-text { text-shadow: none; }
            .button.has-bg-image { padding: var(--origami-buttons-padding, 5px 10px); text-shadow: none; border-radius: var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)); align-items: center; border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); overflow: hidden; background-image: var(--origami-button-bg-image); background-size: cover; background-position: center; background-repeat: no-repeat; }
            .button.button-round.has-bg-image { border-radius: 999px; }
            #weather-effects { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: ${Z.weather}; display: none; }
            #weather-near { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: ${Z.near}; display: none; }
            #card-root.has-weather-effects #weather-effects, #card-root.has-weather-effects.has-near-canvas #weather-near { display: block; }
            #card-root:is(.has-default-bg, .has-weather-bg) :is(#sun-moon-layer, #weather-effects, #weather-near) { filter: var(--_origami-dark-theme-filter, none); }
            #star-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: ${Z.stars}; display: none; }
            #card-root.has-star-canvas #star-canvas { display: block; }
            .button.has-tint { position: relative; }
            .button.has-tint::after { content: ""; position: absolute; inset: 0; border-radius: inherit; background: var(--origami-button-tint); opacity: 0.18; pointer-events: none; z-index: 0; }
            .button.has-tint > * { position: relative; z-index: 1; }
            .button.format-vertical { flex-direction: column; align-items: center; text-align: center; row-gap: var(--origami-button-gap, 6px); flex-wrap: nowrap; }
            .button.format-split > .button-stack { display: flex; flex-direction: column; row-gap: var(--origami-button-gap, 6px); flex: 1 1 0; min-width: 0; }
            .button.format-vertical .button-icon { aspect-ratio: 1; overflow: visible; border-radius: var(--origami-icon-bg-radius, calc(var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)) - var(--origami-icon-bg-inset, 3px))); padding: var(--weather-icon-padding, 4px); }
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
            .button.no-icon-bg .button-icon, .button .button-icon.el-no-icon-bg { background: none !important; border: none !important; box-shadow: none !important; aspect-ratio: unset !important; border-radius: 0 !important; overflow: visible !important; padding: var(--weather-icon-padding, 0) !important; }
            .button.has-icon-bg .button-icon, .button .button-icon.el-icon-bg { aspect-ratio: 1; overflow: visible; border-radius: var(--origami-icon-bg-radius, calc(var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)) - var(--origami-icon-bg-inset, 3px))); padding: var(--weather-icon-padding, 4px); align-self: stretch; }
            .button.has-icon-bg:not(.with-bg) .button-icon, .button:not(.with-bg) .button-icon.el-icon-bg { background: var(--_bg, var(--origami-bottom-bg-color, var(--_text-bg))); border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); }
            .button.has-icon-bg:not(.with-bg).blurred .button-icon { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .button.has-icon-bg.with-bg .button-icon, .button.with-bg .button-icon.el-icon-bg { background: var(--origami-icon-bg-color, color-mix(in srgb, var(--ha-card-background, var(--card-background-color, var(--primary-background-color))) 20%, transparent)); border: none; box-shadow: var(--_origami-button-shadow); }
            .button.button-round.with-bg { border-radius: 999px; }
            .button.button-round .button-icon { border-radius: 999px; }
            .button.button-ring { position: relative; border-radius: 50%; aspect-ratio: 1; justify-content: center; align-content: center; z-index: 1; padding: var(--origami-buttons-padding, 10px); }
            .button.button-ring.with-bg { border-radius: 50%; padding: var(--origami-buttons-padding, 10px); }
            .button-ring-wrap { position: relative; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; scroll-snap-align: start; }
            .gauge-track, .gauge-fill, .gauge-range, .gauge-marker { position: absolute; pointer-events: none; }
            .gauge-track { background: currentColor; opacity: 0.10; }
            .gauge-fill, .gauge-marker { background: var(--origami-gauge-color); transition: --origami-gauge-pos 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
            .gauge-range { background: color-mix(in srgb, currentColor 18%, transparent); }
            .gauge-marker { width: var(--origami-marker-size); height: var(--origami-marker-size); border-radius: 50%; box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.10); transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center; z-index: 2; animation: gauge-marker-in 0.4s ease 0.3s backwards; }
            @keyframes gauge-marker-in { from { opacity: 0; } }
            .gauge-marker ha-icon { --mdc-icon-size: var(--origami-marker-icon-size, calc(var(--origami-marker-size) * 0.66)); display: flex; }
            .button-ring-gauge { --_ring: radial-gradient(farthest-side, transparent calc(100% - var(--origami-gauge-w) - 0.5px), #000 calc(100% - var(--origami-gauge-w))); --_from: from var(--origami-gauge-start, 0deg); --_arc: var(--origami-gauge-arc, 1turn); position: absolute; inset: 0; pointer-events: none; }
            .button-ring-gauge > :not(.gauge-marker) { --_seg: #000 var(--_arc), transparent 0; inset: 0; border-radius: 50%; -webkit-mask: conic-gradient(var(--_from), var(--_seg)), var(--_ring), var(--_gaps, linear-gradient(#000 0 0)); mask: conic-gradient(var(--_from), var(--_seg)), var(--_ring), var(--_gaps, linear-gradient(#000 0 0)); -webkit-mask-composite: source-in; mask-composite: intersect; }
            .button-ring-gauge > .gauge-fill { --_seg: #000 calc(var(--origami-gauge-pos) * var(--_arc)), transparent 0; background-image: conic-gradient(var(--_from), var(--origami-gauge-stops)); }
            .button-ring-gauge > .gauge-range { --_seg: transparent calc(var(--origami-range-from) * var(--_arc)), #000 0 calc(var(--origami-range-to) * var(--_arc)), transparent 0; }
            .button-ring-gauge > .gauge-marker { --_a: calc(var(--origami-gauge-pos) * var(--_arc) + var(--origami-gauge-start, 0deg)); left: 50%; top: 0; width: 0; height: 50%; box-shadow: none; transform: rotate(var(--_a)); transform-origin: bottom; }
            .button-ring-gauge > .gauge-marker::before, .button-ring-gauge > .gauge-marker ha-icon { position: absolute; left: 0; top: calc(var(--origami-gauge-w) / 2); transform: translate(-50%, -50%) rotate(calc(-1 * var(--_a))); }
            .button-ring-gauge > .gauge-marker::before { content: ''; width: var(--origami-marker-size); height: var(--origami-marker-size); border-radius: 50%; background: var(--origami-gauge-color); box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.10); }
            .button-ring-gauge > .gauge-marker.gap::before { background: none; box-shadow: none; }
            .button-ring-gauge > .gauge-marker.needle::before { top: calc((var(--origami-gauge-w) + var(--origami-marker-size)) / 2); bottom: 0; width: 1px; height: auto; border-radius: 0; box-shadow: none; transform: translateX(-50%); }
            .button-ring-wrap > .button { margin: var(--origami-ring-gap, 3px); z-index: 1; }
            .buttons-row.row-grid > .button-ring-wrap > .button,
            .buttons-row.has-visible-count > .button-ring-wrap > .button { width: calc(100% - var(--origami-ring-gap, 3px) * 2); }
            .buttons-row.row-grid > .button-ring-wrap { aspect-ratio: 1; }
            .button-bar { --_r: calc(var(--origami-gauge-w) / 2); position: relative; width: 100%; min-height: var(--origami-gauge-w); border-radius: var(--_r); flex-shrink: 0; }
            .button-bar > :not(.gauge-marker) { left: 0; right: 0; top: 50%; height: var(--origami-gauge-w); border-radius: var(--_r); transform: translateY(-50%); }
            .button-bar > .gauge-fill { background-image: linear-gradient(to right, var(--origami-gauge-stops)); clip-path: inset(0 calc(100% - var(--origami-gauge-pos) * 100%) 0 0 round var(--_r)); }
            .button-bar > .gauge-range { left: calc(var(--origami-range-from) * 100%); right: calc(100% - var(--origami-range-to) * 100%); }
            .button-bar > .gauge-marker { top: 50%; left: calc(var(--origami-gauge-pos) * (100% - var(--origami-marker-size)) + var(--origami-marker-size) / 2); }
            .button.button-bar-type { flex-wrap: wrap; }
            .button.button-bar-type.format-vertical { flex-wrap: nowrap; }
            .button.button-bar-type.format-vertical .button-bar { align-self: stretch; width: auto; }
            .button.button-bar-type .button-bar.has-len { width: min(var(--origami-bar-len), 100%); align-self: auto; }
            .button.button-loading { position: relative; }
            .button.button-loading .button-icon,
            .button.button-loading .button-text,
            .button.button-loading .button-bar,
            .button-ring-wrap.button-loading > .button-ring-gauge { visibility: hidden; }
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
            .marquee-sep::before { content: var(--marquee-separator, "\u2022"); }
            .marquee-host.is-animating .marquee-track { animation: marquee var(--origami-marquee-duration, 20s) linear infinite; }
            .marquee-host.marquee-rtl .marquee-track { animation-direction: reverse; }
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .cards-group { pointer-events: none; align-self: stretch; box-sizing: border-box; }
            :is(.buttons-group, .cards-group).layer-sky { z-index: ${Z["layer-sky"]}; }
            :is(.buttons-group, .cards-group).layer-back { z-index: ${Z["layer-back"]}; }
            :is(.buttons-group, .cards-group).layer-middle { z-index: ${Z["layer-middle"]}; }
            .cards-row { display: flex; flex-wrap: wrap; gap: 8px; pointer-events: none; }
            .cards-row > * { pointer-events: auto; }
            #card-root.is-offscreen :is(.marquee-track, .haze-layer, .sun-glow, .moon-glow), #card-root.is-offscreen .sun-disc::before, #card-root.is-offscreen .sun-disc::after, #card-root.is-offscreen #sun-moon-layer::before { animation-play-state: paused; }
`;
  }
  _initDOM() {
    if (this._elements) return;
    if (!_sharedStyles) {
      _sharedStyles = new CSSStyleSheet();
      _sharedStyles.replaceSync(_WeatherCard._buildStyles());
    }
    this.shadowRoot.adoptedStyleSheets = [_sharedStyles, this._userCss = new CSSStyleSheet()];
    const root = document.createElement("div");
    root.id = "card-root";
    root.innerHTML = `<div id="default-bg"><div id="sky-base"></div><div class="sky-haze"><div class="haze-layer h1"></div><div class="haze-layer h2"></div><div class="haze-layer h3"></div></div></div><div id="weather-bg"></div><canvas id="star-canvas"></canvas><div id="sun-moon-layer"><div id="sun-moon"><div class="sun"><div class="sun-glow"></div><div class="sun-disc"></div></div><div class="moon"><div class="moon-glow"></div><svg class="moon-disc" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="wbk-moon-surface" cx="38%" cy="34%" r="78%"><stop offset="0%" stop-color="#eef0f4"/><stop offset="45%" stop-color="#dce0e8"/><stop offset="100%" stop-color="#b8bcc6"/></radialGradient><clipPath id="wbk-moon-lit"><path class="moon-lit-path" d=""/></clipPath></defs><g clip-path="url(#wbk-moon-lit)"><circle class="moon-surface" cx="50" cy="50" r="48" fill="url(#wbk-moon-surface)"/><image class="moon-image" x="2" y="2" width="96" height="96" preserveAspectRatio="xMidYMid slice"/></g></svg></div></div><div id="sun-rays"></div></div><canvas id="weather-effects"></canvas><canvas id="weather-near"></canvas><div id="content-layer"></div><div id="free-layer"></div>`;
    this.shadowRoot.append(root);
    const q = (sel) => root.querySelector(sel);
    const contentLayer = q("#content-layer");
    contentLayer.addEventListener("click", (e) => this._handleButtonClick(e));
    const freeLayer = q("#free-layer");
    freeLayer.addEventListener("click", (e) => this._handleButtonClick(e));
    this._elements = {
      root,
      contentLayer,
      freeLayer,
      weatherBg: q("#weather-bg"),
      sunMoonLayer: q("#sun-moon-layer"),
      sunMoon: q("#sun-moon"),
      moonLitPath: q(".moon-lit-path"),
      moonImage: q(".moon-image"),
      defaultBg: q("#default-bg"),
      effectsCanvas: q("#weather-effects"),
      nearCanvas: q("#weather-near"),
      starCanvas: q("#star-canvas"),
      buttonContainerEls: []
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
      if (current[i]) {
        current[i].group.dataset.container = String(i);
        continue;
      }
      const container = this._containers[i];
      const isCard = !!container.custom_cards;
      const group = document.createElement("div");
      group.className = isCard ? "cards-group" : "buttons-group";
      group.dataset.container = String(i);
      const row = document.createElement("div");
      row.className = isCard ? "cards-row" : "buttons-row";
      if (isCard) row.addEventListener("click", (e) => e.stopPropagation());
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
      els.row.innerHTML = "";
      const cards = container.custom_cards;
      if (!Array.isArray(cards) || !cards.length) continue;
      window.loadCardHelpers().then((helpers) => {
        if (this._config !== expectedConfig) return;
        const row = els.row;
        if (!row) return;
        for (const cardConfig of cards) {
          if (!cardConfig || !cardConfig.type) continue;
          const el = helpers.createCardElement(cardConfig);
          if (cardConfig.custom_width) {
            el.style.width = cardConfig.custom_width;
            el.style.flex = "none";
          }
          if (cardConfig.custom_height !== void 0) {
            let ch = String(cardConfig.custom_height).trim();
            if (!isNaN(ch) && ch !== "") ch += "px";
            el.style.height = ch;
          }
          row.appendChild(el);
          if (this._hass) el.hass = this._hass;
        }
      });
    }
  }
  _updateSchemeStyles(weatherState) {
    const root = this._elements.root;
    root.classList.toggle("scheme-dark", this._schemeDark);
    root.classList.toggle("scheme-light", !this._schemeDark);
    root.classList.toggle("theme-mismatch", this._themeDark !== this._schemeDark);
    const styleSig = `${this._schemeDark}_${weatherState}`;
    if (this._prevStyleSig === styleSig) return;
    this._prevStyleSig = styleSig;
    if (this._prevWeatherClass) root.classList.remove(this._prevWeatherClass);
    const cls = `weather-${weatherState}`;
    root.classList.add(cls);
    this._prevWeatherClass = cls;
  }
  _resolveCardBackgroundColor(cfg) {
    const dark = /^(dark|light)$/i.test(cfg.color_mode || "") ? this._isAstroNight : this._schemeDark, base = (dark && cfg.background_color_dark || cfg.background_color || "").toString().trim();
    const thresholds = Array.isArray(cfg.background_thresholds) ? cfg.background_thresholds : [];
    if (!thresholds.length || !this._hass) return base;
    const entity = cfg.background_threshold_entity;
    const value = entity ? this._sensorValue(this._hass, entity, cfg.background_threshold_attribute) : this._weatherState;
    return pickThreshold(dark ? thresholds.map((t) => ({ ...t, color: t.color_dark || t.color })) : thresholds, value) || base;
  }
  _applyConfigStyles() {
    if (!this._elements || !this._elements.buttonContainerEls.length) return;
    const cfg = this._config;
    const root = this._elements.root;
    this._cssVar(root, "--origami-card-padding", normalizeLength(cfg.card_padding || ""), "_prevCardPadding");
    const bgB = cfg.bg_brightness != null ? String(cfg.bg_brightness) : "";
    const bgS = cfg.bg_saturation != null ? String(cfg.bg_saturation) : "";
    const bgBlur = cfg.bg_blur ? normalizeLength(cfg.bg_blur) : "";
    this._cssVar(root, "--origami-bg-brightness", bgB, "_prevBgBrightness");
    this._cssVar(root, "--origami-bg-saturation", bgS, "_prevBgSaturation");
    this._cssVar(root, "--origami-bg-blur", bgBlur, "_prevBgBlur");
    this._cssVar(root, "--origami-bg-blend", cfg.bg_blend ? `${parseFloat(cfg.bg_blend)}%` : "", "_prevBgBlend");
    const cardFrame = cfg.card_frame !== false;
    root.classList.toggle("no-card-frame", !cardFrame);
    const bgMode = this._backgroundMode(cfg);
    const cardColor = bgMode === "color" || bgMode === "images" ? cssValue(this._resolveCardBackgroundColor(cfg)) : "";
    root.classList.toggle("bg-ha-card", bgMode === "card");
    root.classList.toggle("bg-custom-color", bgMode === "color" || !!cardColor);
    this._cssVar(root, "--origami-card-bg-color", cardColor, "_prevCardBgColor");
    const fw = cfg.full_width === true;
    this.classList.toggle("full-width", fw);
    const fwMargin = fw ? (cfg.full_width_margin || "").toString().trim() : "";
    this._cssVar(this, "--origami-full-width-margin", fwMargin ? normalizeLength(fwMargin) : "", "_prevFwMargin");
    const offsetRaw = normalizeLength(cfg.card_offset);
    const offsetParts = offsetRaw ? offsetRaw.split(" ") : [];
    const oTop = offsetParts[0] || "0";
    const oBottom = offsetParts[2] || offsetParts[0] || "0";
    let marginVal;
    if (fw) {
      const gap = fwMargin ? normalizeLength(fwMargin) : "var(--ha-view-sections-column-gap, var(--column-gap, 32px))";
      marginVal = `${oTop} calc(-1 * ${gap}) ${oBottom} calc(-1 * ${gap})`;
    } else {
      marginVal = offsetRaw;
    }
    if (this._prevHostMargin !== marginVal) {
      this._prevHostMargin = marginVal;
      if (marginVal) this.style.margin = marginVal;
      else this.style.removeProperty("margin");
    }
    const ef = cfg.edge_fade === true;
    root.classList.toggle("edge-fade", ef);
    const efSize = ef ? (cfg.edge_fade_size || "").toString().trim() : "";
    this._cssVar(root, "--origami-edge-fade-size", efSize ? normalizeLength(efSize) : "", "_prevEdgeFadeSize");
    this._cssVar(root, "--origami-gradient", cfg.gradient === true ? `${cfg.gradient_type === "radial" ? `radial-gradient(at ${cfg.gradient_x ?? 50}% ${cfg.gradient_y ?? 50}%, ` : `linear-gradient(${cfg.gradient_angle ?? 180}deg, `}${cfg.gradient_color_1 || "transparent"} ${cfg.gradient_stop_1 ?? 0}%, ${cfg.gradient_color_2 || "transparent"} ${cfg.gradient_stop_2 ?? 100}%)` : "", "_prevGradient");
    root.classList.toggle("has-custom-shadow", cfg.shadow !== false);
    const haze = bgMode === "default" ? cfg.background_haze !== false : cfg.background_haze === true;
    root.classList.toggle("no-haze", !haze);
    root.classList.toggle("haze-only", haze && bgMode !== "default");
    root.classList.toggle("image-front", cfg.weather_image_front === true);
    this._cssVar(root, "--origami-shadow", (cfg.shadow_color || "").toString().trim(), "_prevShadow");
    const caKey = (cfg.content_align || "").toString().toLowerCase();
    const caVal = JUSTIFY_MAP[caKey] || "";
    this._cssVar(root, "--origami-content-align", caVal, "_prevContentAlign");
    const isRow = (cfg.content_direction || "").toString().toLowerCase() === "row";
    this._cssVar(root, "--origami-content-direction", isRow ? "row" : "", "_prevContentDirection");
    this._elements.contentLayer.classList.toggle("direction-row", isRow);
    const caiKey = (cfg.content_align_items || "").toString().toLowerCase();
    const caiVal = ALIGN_MAP[caiKey] || "";
    this._cssVar(root, "--origami-content-align-items", caiVal || (isRow ? "flex-start" : ""), "_prevContentAlignItems");
    const sunMoonSize = cfg.sun_moon_size != null && cfg.sun_moon_size !== "" ? normalizeLength(cfg.sun_moon_size) : "";
    const sunMoonX = cfg.sun_moon_x != null && cfg.sun_moon_x !== "" && cfg.sun_moon_x !== "dynamic" ? isNaN(cfg.sun_moon_x) ? String(cfg.sun_moon_x).trim() : `${parseFloat(cfg.sun_moon_x)}%` : "";
    this._cssVar(root, "--origami-sun-moon-size", sunMoonSize, "_prevSunMoonSize");
    this._cssVar(root, "--origami-sun-moon-x", sunMoonX, "_prevSunMoonX");
    const padParts = cssLength(cfg.card_padding).match(/(?:[^\s(]+|\([^)]*\))+/g) || [""];
    this._cssVar(root, "--_origami-pad-v", padParts[0], "_prevPadV");
    this._cssVar(root, "--_origami-pad-h", padParts[1] || padParts[0], "_prevPadH");
    if (!this._containerStyleCache) this._containerStyleCache = [];
    for (let ai = 0; ai < this._containers.length; ai++) {
      this._applyContainerStyles(ai, this._containers[ai]);
    }
  }
  _placeContainer(container, group, placed) {
    const host = !container.custom_cards && String(container.position || "").toLowerCase() === "custom" ? this._elements.freeLayer : this._elements.contentLayer;
    const before = placed.has(host) ? placed.get(host).nextSibling : host.firstChild;
    if (group !== before) host.insertBefore(group, before);
    placed.set(host, group);
  }
  _applyContainerStyles(ai, container) {
    const els = this._elements.buttonContainerEls[ai];
    if (!els) return;
    const layer = containerLayer(container);
    for (const name of ["sky", "back", "middle"]) els.group.classList.toggle(`layer-${name}`, layer === name);
    if (container.custom_cards) return;
    const bt = els.row, cg = els.group;
    if (!this._containerStyleCache[ai]) this._containerStyleCache[ai] = {};
    const cache = this._containerStyleCache[ai];
    const showBottom = container.hide !== true;
    const showBottomBg = container.background === true;
    const rowLayout = (container.layout || "wrap").toString().toLowerCase();
    const isScrollLayout = rowLayout === "horizontal-scroll" || rowLayout === "vertical-scroll";
    const scrollFadeOn = container.scroll_fade === true && isScrollLayout;
    const blurred = container.blurred_background === true;
    const configSig = `${showBottom}|${blurred}`;
    if (cache.configSig !== configSig) {
      cache.configSig = configSig;
      bt.style.display = showBottom ? "" : "none";
      cg.style.display = showBottom ? "" : "none";
    }
    const cssVarContainer = (el, prop, val, cacheKey) => {
      if (cache[cacheKey] !== val) {
        cache[cacheKey] = val;
        if (val) el.style.setProperty(prop, cssValue(val));
        else el.style.removeProperty(prop);
      }
    };
    for (const [prop, key, ck] of [
      ["--origami-buttons-padding", "button_padding", "buttonPad"],
      ["--origami-container-padding", "padding", "containerPad"],
      ["--origami-container-margin", "margin", "containerMargin"],
      ["--origami-container-bg-color", "background_color", "containerBgColor"],
      ["--origami-bottom-gap", "gap", "buttonsGap"],
      ["--origami-button-gap", "button_gap", "buttonGap"],
      ["--weather-icon-size", "button_icon_size", "buttonIconWidth"],
      ["--weather-icon-padding", "button_icon_padding", "buttonIconPad"],
      ["--origami-bottom-font-size", "button_text_size", "bottomFS"]
    ]) {
      const raw = (container[key] || "").toString().trim();
      cssVarContainer(cg, prop, key === "background_color" ? raw : normalizeLength(raw), ck);
    }
    const containerShadow = container.shadow === false ? "none" : "";
    cssVarContainer(cg, "--_origami-group-shadow", containerShadow, "containerShadow");
    const blurPx = parseFloat(container.background_blur);
    cssVarContainer(cg, "--origami-bottom-bg-filter", Number.isFinite(blurPx) && blurPx >= 0 ? `blur(${blurPx}px)` : "", "containerBlur");
    const customWidth = normalizeLength((container.custom_width || "").toString().trim());
    cssVarContainer(cg, "--origami-container-width", customWidth, "containerWidth");
    if (cache.hasCustomWidth !== !!customWidth) {
      cache.hasCustomWidth = !!customWidth;
      cg.classList.toggle("has-custom-width", !!customWidth);
    }
    const image = (container.image || "").toString().trim(), imageDark = image && (container.image_dark || "").toString().trim();
    if (cache.image !== `${image}|${imageDark}`) {
      cache.image = `${image}|${imageDark}`;
      const waiting = [image, imageDark].filter((s) => s && _builtinImage(s) === null);
      if (waiting.length) {
        cache.image = null;
        Promise.all(waiting.map(_loadBuiltinImage)).then(() => {
          this._lastSnapshot = null;
          this.hass = this._hass;
        });
      } else {
        for (const n of cg.querySelectorAll(".group-image")) n.remove();
        const img = (src, mode) => {
          const svg = _builtinImage(src);
          return svg === void 0 ? `<img class="group-image${mode}" src="${escapeHtml(src)}">` : svg ? svg.replace("group-image", `group-image${mode}`) : "";
        };
        if (image) cg.insertAdjacentHTML("afterbegin", img(image, imageDark && " light") + (imageDark && img(imageDark, " dark")));
        cg.classList.toggle("has-image", !!image);
      }
    }
    const free = freeStyle(container), freeSig = String(free);
    if (cache.freeSig !== freeSig) {
      cache.freeSig = freeSig;
      cg.classList.toggle("free-positioned", free.length > 0);
      for (const p of ["left", "right", "top", "bottom", "transform"]) cg.style.removeProperty(p);
      for (const [p, v] of free) cg.style.setProperty(p, v);
    }
    const hasFree = container.buttons.some((b) => freeStyle(b).length > 0);
    if (cache.hasFree !== hasFree) {
      cache.hasFree = hasFree;
      bt.classList.toggle("has-free", hasFree);
    }
    cssVarContainer(cg, "--origami-row-height", normalizeLength((container.row_height || "").toString().trim()), "rowHeight");
    const cols = parseInt(container.columns, 10);
    cssVarContainer(cg, "--origami-row-columns", Number.isFinite(cols) && cols > 0 ? String(cols) : "", "rowCols");
    const isGrouped = container.grouped === true;
    if (cache.rowOverflow !== rowLayout) {
      cache.rowOverflow = rowLayout;
      cache.scrollPinned = false;
      for (const m of ["horizontal-scroll", "wrap", "grid", "vertical-scroll"]) bt.classList.toggle("row-" + m, rowLayout === m);
      for (const m of ["horizontal-scroll", "vertical-scroll"]) cg.classList.toggle("has-row-" + m, rowLayout === m);
    }
    if (cache.scrollFade !== scrollFadeOn) {
      cache.scrollFade = scrollFadeOn;
      bt.classList.toggle("has-scroll-fade", scrollFadeOn);
    }
    cssVarContainer(bt, "--origami-scroll-fade-size", scrollFadeOn ? normalizeLength((container.scroll_fade_size || "").toString().trim()) : "", "scrollFadeSize");
    const visCount = parseInt(container.scroll_count, 10), hasVis = Number.isFinite(visCount) && visCount > 0;
    const visKey = `${hasVis}|${visCount}|${rowLayout}`;
    if (cache.visKey !== visKey) {
      cache.visKey = visKey;
      bt.classList.toggle("has-visible-count", hasVis);
      const isVerticalCap = hasVis && rowLayout === "vertical-scroll";
      cg.classList.toggle("has-vscroll-cap", isVerticalCap);
      if (hasVis && rowLayout !== "vertical-scroll") {
        const gapVal = cssLength(container.gap) || "8px";
        bt.style.setProperty("--origami-button-basis", `calc((100% - ${visCount - 1} * ${gapVal}) / ${visCount})`);
      } else {
        bt.style.removeProperty("--origami-button-basis");
      }
      if (isVerticalCap) {
        cache.vertVisH = null;
        this._scheduleVerticalMeasure(ai);
      } else {
        cache.vertVisH = null;
        bt.style.removeProperty("--origami-row-max-height");
      }
    }
    const hasSeparator = container.separator === true;
    const groupedKey = `${isGrouped}|${showBottomBg}|${blurred}|${hasSeparator}`;
    if (cache.grouped !== groupedKey) {
      cache.grouped = groupedKey;
      cg.classList.toggle("grouped", isGrouped);
      bt.classList.toggle("has-separator", hasSeparator);
      if (isGrouped && showBottomBg) {
        cg.classList.add("with-bg");
        cg.classList.toggle("blurred", blurred);
      } else {
        cg.classList.remove("with-bg", "blurred");
      }
    }
    const gridSepKey = `${hasSeparator}|${rowLayout}|${cols}`;
    if (cache.gridSepKey !== gridSepKey) {
      cache.gridSepKey = gridSepKey;
      let existingSepStyle = cg.querySelector(".grid-sep-style");
      if (hasSeparator && rowLayout === "grid" && Number.isFinite(cols) && cols > 0) {
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
          const styleEl = document.createElement("style");
          styleEl.className = "grid-sep-style";
          styleEl.textContent = sepCss;
          cg.prepend(styleEl);
        }
      } else {
        if (existingSepStyle) existingSepStyle.remove();
      }
    }
    const align = (container.align || "start").toString().toLowerCase();
    if (cache.buttonAlign !== align) {
      cache.buttonAlign = align;
      for (const a of ["start", "center", "end", "spread"]) bt.classList.toggle(`align-${a}`, align === a);
    }
    const jc = (container.justify_content || "").toString().toLowerCase();
    let jcVal = JUSTIFY_MAP[jc] || "";
    if (jcVal && isScrollLayout && _SAFE_JUSTIFY.has(jcVal)) jcVal = `safe ${jcVal}`;
    cssVarContainer(cg, "--origami-row-justify", jcVal, "justifyContent");
    const aiKey = (container.align_items || "").toString().toLowerCase();
    const aiVal = ALIGN_MAP[aiKey] || "";
    cssVarContainer(cg, "--origami-row-align", aiVal, "alignItems");
  }
  _updateTextElements(hass, weatherState = "default") {
    if (!this._elements || !this._elements.buttonContainerEls.length) return;
    this._syncButtonContainerDOM();
    this._applyConfigStyles();
    const numKey = `${hass.locale.language}|${hass.locale.number_format}`;
    if (this._numFmtLang !== numKey) {
      this._numFmtLang = numKey;
      this._numFmt = numberFormat(hass.locale, 1);
    }
    if (!this._containerRenderCache) this._containerRenderCache = [];
    let anyRowRebuilt = false;
    const allRendered = [], placed = /* @__PURE__ */ new Map();
    for (let ai = 0; ai < this._containers.length; ai++) {
      const container = this._containers[ai];
      const els = this._elements.buttonContainerEls[ai];
      if (!els) continue;
      this._placeContainer(container, els.group, placed);
      const containerVisible = this._checkButtonVisibility(container, hass);
      els.group.style.display = containerVisible ? "" : "none";
      if (!containerVisible || container.custom_cards) continue;
      const bt = els.row;
      const showBottomBg = container.background === true;
      const buttonFormat = (container.button_style || "").toLowerCase();
      const rowLayout = (container.layout || "wrap").toString().toLowerCase();
      const containerBlurred = container.button_blurred_background === true;
      const visCount = parseInt(container.scroll_count, 10), hasVis = Number.isFinite(visCount) && visCount > 0;
      const containerCtx = { button_icon_background: container.button_icon_background, button_background_color: container.button_background_color || "", button_icon_background_color: container.button_icon_background_color || "", button_shadow: container.button_shadow };
      const rendered = container.buttons.map(
        (button, idx) => this._renderButton(button, idx, hass, weatherState, showBottomBg, containerBlurred, buttonFormat, ai, containerCtx)
      );
      allRendered.push(...rendered.filter((r) => !r.hidden));
      if (rendered.length && rendered.every((r) => r.hidden)) els.group.style.display = "none";
      if (!this._containerRenderCache[ai]) this._containerRenderCache[ai] = {};
      const ac = this._containerRenderCache[ai];
      const rowSig = rendered.map((r) => r.sig).join("\xA7");
      const rowRebuilt = ac.lastLocStr !== rowSig;
      if (rowRebuilt) {
        ac.lastLocStr = rowSig;
        bt.innerHTML = rendered.map((r) => r.html).join("");
        this._animateGauges(bt, `a${ai}`);
        if (hasVis && rowLayout === "vertical-scroll") this._scheduleVerticalMeasure(ai);
        anyRowRebuilt = true;
      }
    }
    if (anyRowRebuilt) {
      this._nativeIconCache = null;
      this._refreshMarqueeObservation();
    }
    this._pinScrollOrigins();
    const hasNativeIcons = allRendered.some((r) => r.showIcon && r.iconStrategy === "native");
    if (hasNativeIcons) {
      if (!this._nativeIconCache) {
        this._nativeIconCache = [];
        for (const r of allRendered) {
          if (!r.showIcon || r.iconStrategy !== "native") continue;
          const iconEl = this._elements.buttonContainerEls[r.containerIdx].row.querySelector(`.button[data-idx="${r.buttonIdx}"] ha-state-icon`);
          if (iconEl) this._nativeIconCache.push({ rendered: r, el: iconEl });
        }
      }
      for (let j = 0; j < this._nativeIconCache.length; j++) {
        const entry = this._nativeIconCache[j], r = entry.rendered;
        if (entry.el.hass !== hass || entry.el.stateObj !== r.sensorObj) {
          entry.el.hass = hass;
          entry.el.stateObj = r.sensorObj;
        }
      }
    }
  }
  _animateGauges(root, prefix) {
    const prev = this._gaugePrev || (this._gaugePrev = /* @__PURE__ */ new Map()), queue = [];
    for (const g of root.querySelectorAll("[data-gauge]")) g.querySelectorAll(".gauge-fill, .gauge-marker").forEach((el, i) => {
      const key = `${prefix}${g.dataset.gauge}:${i}`, from = prev.get(key), target = el.style.getPropertyValue("--origami-gauge-pos");
      if (from !== void 0) el.style.animation = "none";
      el.style.setProperty("--origami-gauge-pos", from || "0");
      queue.push([el, target]);
      prev.set(key, target);
    });
    if (queue.length) requestAnimationFrame(() => requestAnimationFrame(() => {
      for (const [el, t] of queue) el.style.setProperty("--origami-gauge-pos", t);
    }));
  }
  _buildGauge(o, p, valueOf) {
    const num = (v) => gaugeNum(v, this._hass), raw = Object.fromEntries(GAUGE_NUMS.map((k) => [k, GAUGE_REF.test(o[p + k]) ? valueOf({ entity: o[p + k] }) : o[p + k]]));
    const n = Object.fromEntries(GAUGE_NUMS.map((k) => [k, num(raw[k])])), defs = gaugeDefs(o, p), raws = defs.map(valueOf), clock = [raw.min, raw.max, ...raws].some(isTime);
    const arc = n.arc > 0 && n.arc < 360 ? n.arc : 360, w = n[p === "ring_" ? "width" : "height"] || 4, ms = n.marker_size > 0 ? n.marker_size : w;
    const min = n.min || 0, span = clock ? (n.max - min + 24) % 24 || 24 : (n.max || 100) - min || 1, max = min + span, near = (x) => clock ? x - 24 * Math.round((x - min - span / 2) / 24) : x;
    const values = defs.map((def, i) => ({ def, value: near(num(raws[i])), size: parseFloat(def.marker_size ?? ms) })), v0 = values[0].value;
    const at = (v) => isNaN(v) ? 0 : Math.max(0, Math.min(1, (v - min) / span)), pct = (v) => `${(at(v) * arc / 360 * 100).toFixed(1)}%`;
    const mode = o[p + "threshold_mode"] || "solid", ts = (Array.isArray(o[p + "thresholds"]) ? o[p + "thresholds"] : []).filter((t) => t.color).map((t) => [near(num(t.value)), t.color]).filter((t) => !isNaN(t[0])).sort((a, b) => a[0] - b[0]);
    const stops = mode === "solid" ? "" : ts.map(([v, c], i) => `${cssValue(c)} ${pct(v)}${mode === "segments" ? ` ${pct(ts[i + 1] ? ts[i + 1][0] : max)}` : ""}`).join(", ");
    const color = mode === "solid" && ts.filter((t) => t[0] <= v0).pop()?.[1] || o[p + "color"] && o[p + "color"] !== "auto" && o[p + "color"] || "var(--primary-color, #03a9f4)";
    const needle = o[p + "needle"] === true, marked = needle || values.length > 1 || o[p + "marker"] === true || o[p + "fill"] === false, rf = near(n.range_from), rt = near(n.range_to), ra = at(Math.min(rf, rt)), rb = at(Math.max(rf, rt));
    const style = [`--origami-gauge-w:${w}px`, `--origami-gauge-color:${cssValue(color)}`];
    if (n.marker_icon_size > 0) style.push(`--origami-marker-icon-size:${n.marker_icon_size}px`);
    if (n.start) style.push(`--origami-gauge-start:${n.start}deg`);
    if (arc < 360) style.push(`--origami-gauge-arc:${arc}deg`);
    const gaps = p === "ring_" && marked ? values.filter((v) => v.def.marker_gap === true && v.size && !isNaN(v.value)).map(({ value, size }) => {
      const a = (at(value) * arc + (n.start || 0)) * Math.PI / 180, r = size / 2 + 1.5, d = `(50% - ${w / 2}px)`;
      return `radial-gradient(circle at calc(50% + ${Math.sin(a).toFixed(4)} * ${d}) calc(50% - ${Math.cos(a).toFixed(4)} * ${d}), transparent ${r}px, #000 ${r + 0.5}px)`;
    }) : [];
    if (gaps.length) style.push(`--_gaps:${gaps.join(", ")}`);
    const len = p === "bar_" && n.width > 0 ? n.width : 0;
    if (len) style.push(`--origami-bar-len:${len}px`);
    let html = '<div class="gauge-track"></div>';
    if (o[p + "fill"] !== false) html += `<div class="gauge-fill" style="--origami-gauge-pos:${at(v0).toFixed(4)}${stops ? `;--origami-gauge-stops:${stops}` : ""}"></div>`;
    if (rb > ra) html += `<div class="gauge-range" style="--origami-range-from:${ra.toFixed(4)};--origami-range-to:${rb.toFixed(4)}${o[p + "range_color"] ? `;background:${cssValue(o[p + "range_color"])}` : ""}"></div>`;
    if (marked) html += values.filter((v) => v.size && !isNaN(v.value)).map(({ def: d, value, size }) => `<div class="gauge-marker${needle ? " needle" : ""}${d.marker_gap === true && p === "ring_" ? " gap" : ""}" style="--origami-gauge-pos:${at(value).toFixed(4)};--origami-marker-size:${size}px${d.marker_color ? `;--origami-gauge-color:${cssValue(d.marker_color)}` : ""}${d.marker_icon_color ? `;color:${cssValue(d.marker_icon_color)}` : ""}">${d.marker_icon ? `<ha-icon icon="${escapeHtml(d.marker_icon)}"></ha-icon>` : ""}</div>`).join("");
    return { style: style.join(";"), html, len, overflow: marked && values.some((v) => v.size > w) };
  }
  _buildIconElement(el, resolved, color) {
    const styleParts = color ? [`color:${cssValue(color)}`] : [];
    if (el.icon_size) styleParts.push(`--weather-icon-size:${cssLength(el.icon_size)}`);
    if (el.icon_padding !== void 0 && el.icon_padding !== "") styleParts.push(`--weather-icon-padding:${cssLength(el.icon_padding)}`);
    const iconClasses = ["button-icon"];
    if (el.icon_background === true) {
      iconClasses.push("el-icon-bg");
      if (el.icon_background_color) styleParts.push(`--origami-icon-bg-color:${cssValue(el.icon_background_color)}`);
    } else if (el.icon_background === false) {
      iconClasses.push("el-no-icon-bg");
    }
    const iconBox = _elBoxStyle(el);
    const st = styleParts.length || iconBox ? ` style="${styleParts.join(";")}${iconBox}"` : "";
    return `<span class="${iconClasses.join(" ")}"${st}>${this._buttonIconInner(resolved.strategy, resolved.value)}</span>`;
  }
  _resolveButtonElements(button) {
    if (Array.isArray(button.elements)) {
      return button.elements.filter((e) => e && typeof e === "object" && (e.type === "text" || e.type === "icon" || e.type === "bar")).map((e) => ({ ...e }));
    }
    return [{ type: "text" }];
  }
  _sensorValue(hass, entity, attribute) {
    const r = this._resolveSensorValue(hass, entity, attribute);
    return r.rawNumeric != null ? r.rawNumeric : r.formatted;
  }
  _resolveGaugeValue(hass, button, def, ctx) {
    return def.value ?? (ctx.isForecast && !def.entity ? (ctx.forecastEntry || {})[def.attribute || ctx.forecastTextAttr] : this._sensorValue(hass, def.entity || button.entity, def.entity || def.attribute ? def.attribute : button.attribute));
  }
  _buttonIconInner(iconStrategy, iconValue) {
    if (iconStrategy === "native") return "<ha-state-icon></ha-state-icon>";
    if (iconStrategy === "image") return `<img src="${escapeHtml(iconValue)}" class="custom-bottom-icon" />`;
    if (iconStrategy === "builtin") return `<svg class="weather-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${BUILTIN_ICONS[iconValue] || BUILTIN_ICONS["default"]}</svg>`;
    return `<ha-icon icon="${escapeHtml(iconValue)}"></ha-icon>`;
  }
  _buildTextElement(hass, button, txt, textCtx, marqueeSpeed, marqueeRtl) {
    const _wOp = (w) => {
      const n = parseFloat(w);
      if (isNaN(n)) return "";
      return Math.min(1, Math.max(0.4, 0.4 + (n - 100) * 0.6 / 800)).toFixed(2);
    };
    const resolved = this._resolveButtonText(hass, button, txt, textCtx);
    const value = escapeHtml(resolved.value), unit = escapeHtml(resolved.unit);
    const content = txt.fancy_unit === true ? `${value}<span class="fancy-unit">${unit}</span>` : resolved.tight ? `${value}${unit}` : unit ? `${value} ${unit}` : value;
    const overflow = (txt.overflow || "ellipsis").toString().toLowerCase().trim();
    const txtStyles = [];
    if (txt.size) txtStyles.push(`font-size:${cssLength(txt.size)}`);
    if (txt.weight) {
      txtStyles.push(`font-weight:${cssValue(txt.weight)}`);
      const o = !txt.color && _wOp(txt.weight);
      if (o) txtStyles.push(`opacity:${o}`);
    }
    if (txt.color) txtStyles.push(`color:${cssValue(txt.color)}`);
    if (overflow === "clip") txtStyles.push("text-overflow:clip");
    else if (overflow === "wrap") txtStyles.push("white-space:normal;overflow:visible;text-overflow:clip");
    const txtBox = _elBoxStyle(txt);
    const txtStyle = txtStyles.length || txtBox ? ` style="${txtStyles.join(";")}${txtBox}"` : "";
    if (overflow === "marquee") {
      return { html: `<span class="button-text marquee-host"${txtStyle} data-speed="${marqueeSpeed}" data-rtl="${marqueeRtl ? 1 : 0}"><span class="marquee-track"><span class="marquee-text">${content}</span></span></span>`, hasMarquee: true };
    }
    return { html: `<span class="button-text"${txtStyle}>${content}</span>`, hasMarquee: false };
  }
  _resolveButtonData(button, hass, textEls) {
    const isForecast = !!button.forecast;
    if (isForecast) {
      const forecastTextAttr = (textEls.find((t) => !t.entity && t.attribute && t.attribute !== "condition" && t.attribute !== "datetime") || {}).attribute || null;
      const f = this._resolveForecastValue(hass, button);
      let iconValue2 = f.condition ? _weatherTuning(f.condition).icon : "mdi:information-outline";
      if (forecastTextAttr) iconValue2 = FORECAST_ATTR_ICONS[forecastTextAttr] || iconValue2;
      return {
        sensorObj: null,
        iconStrategy: "static",
        iconValue: iconValue2,
        primaryResolved: null,
        formatted: f.formatted,
        isForecast: true,
        forecastCondition: f.condition,
        forecastDatetime: f.datetime,
        forecastLoading: !!f.loading,
        forecastNone: !!f.none,
        forecastEntry: f.entry || null,
        forecastTextAttr
      };
    }
    const primaryResolved = this._resolveSensorValue(hass, button.entity, button.attribute);
    const sensor = hass.states[button.entity];
    let iconValue = "mdi:information-outline", iconStrategy = "static", sensorObj = null;
    if (sensor) {
      if (button.attribute) iconValue = WEATHER_ATTR_ICONS[button.attribute] || iconValue;
      else {
        sensorObj = sensor;
        iconStrategy = "native";
      }
    }
    return {
      sensorObj,
      iconStrategy,
      iconValue,
      primaryResolved,
      formatted: primaryResolved.formatted,
      isForecast: false,
      forecastCondition: null,
      forecastDatetime: null,
      forecastLoading: false,
      forecastEntry: null,
      forecastTextAttr: null
    };
  }
  _renderButton(button, idx, hass, weatherState, rowBg, containerBlurred, buttonFormat, containerIdx, containerCtx) {
    const skip = (sig2, hidden) => ({ html: "", sig: sig2, sensorObj: null, iconStrategy: "static", showIcon: false, width: "", containerIdx, buttonIdx: idx, hidden });
    if (!button.entity) return skip(`skip-${idx}`, false);
    if (!this._checkButtonVisibility(button, hass)) return skip(`hidden-${idx}-${JSON.stringify(button.visibility)}`, true);
    const elements = this._resolveButtonElements(button);
    const textEls = elements.filter((e) => e.type === "text");
    const iconEls = elements.filter((e) => e.type === "icon");
    const barEls = elements.filter((e) => e.type === "bar");
    const styleKey = button.style || buttonFormat, effectiveFormat = _BUTTON_STYLES.has(styleKey) ? styleKey : "inline";
    const isRingType = button.type === "ring";
    const {
      sensorObj,
      iconStrategy,
      iconValue,
      formatted,
      primaryResolved,
      isForecast,
      forecastCondition,
      forecastDatetime,
      forecastLoading,
      forecastNone,
      forecastEntry,
      forecastTextAttr
    } = this._resolveButtonData(button, hass, textEls);
    if (forecastNone) return skip(`none-${idx}`, true);
    const resolveIconEl = (el) => {
      const ownIcon = iconSourceValue(hass, button, el) || el.icon;
      const configIcon = ownIcon || (iconStrategy === "native" ? "" : iconValue);
      const strat0 = configIcon ? "static" : iconStrategy;
      const val0 = configIcon || iconValue;
      const configPath = el.icon_path || ((configIcon === "weather" || !ownIcon && !configIcon) && this._config && this._config.icon_path ? this._config.icon_path : "");
      if (!configIcon) return { strategy: strat0, value: val0 };
      const live = !isForecast || !!el.entity;
      const resolvedBase = configIcon === "weather" ? !live && forecastCondition ? forecastCondition : weatherState : configIcon;
      if (configPath) {
        const basePath = configPath.endsWith("/") ? configPath : configPath + "/";
        const ext = resolvedBase.includes(".") ? "" : ".svg";
        return { strategy: "image", value: `${basePath}${resolvedBase}${ext}` };
      }
      if (configIcon === "weather" && BUILTIN_ICONS[resolvedBase]) {
        return { strategy: "builtin", value: live && this._isAstroNight && BUILTIN_ICONS[`${resolvedBase}-night`] ? `${resolvedBase}-night` : resolvedBase };
      }
      return { strategy: "static", value: configIcon === "weather" ? _weatherTuning(resolvedBase).icon : configIcon };
    };
    const marqueeSpeed = Math.max(5, parseFloat(button.marquee_speed) || 30);
    const marqueeRtl = button.marquee_rtl === true, width = (button.width || "").toString().trim(), height = (button.height || "").toString().trim();
    const textCtx = { isForecast, forecastEntry, forecastDatetime, forecastTextAttr, formatted, primaryResolved };
    const gauge = (o, p) => this._buildGauge(o, p, (def) => this._resolveGaugeValue(hass, button, def, textCtx));
    const threshold = (o, def) => Array.isArray(o.color_thresholds) && o.color_thresholds.length ? pickThreshold(o.color_thresholds, this._resolveGaugeValue(hass, button, def, textCtx)) : "";
    const parts = [];
    const push = (html, icon) => {
      const last = parts[parts.length - 1];
      if (!icon && last && !last.icon) last.html += html;
      else parts.push({ html, icon });
    };
    let hasAnyMarquee = false, firstIconStrategy = "static", firstIconSet = false, barCount = 0, barOverflow = false;
    for (const el of elements) {
      if (el.type === "text") {
        const b = this._buildTextElement(hass, button, el, textCtx, marqueeSpeed, marqueeRtl);
        push(b.html);
        if (b.hasMarquee) hasAnyMarquee = true;
      } else if (el.type === "icon") {
        const r = resolveIconEl(el);
        if (!firstIconSet) {
          firstIconStrategy = r.strategy;
          firstIconSet = true;
        }
        push(this._buildIconElement(el, r, threshold(el, el) || el.color), true);
      } else if (el.type === "bar") {
        const g = gauge(el, "bar_");
        push(`<div class="button-bar${g.len ? " has-len" : ""}" data-gauge="${idx}-${barCount++}" style="${g.style}${_elBoxStyle(el)}">${g.html}</div>`);
        barOverflow = barOverflow || g.overflow;
      }
    }
    const elementsHtml = parts.map((p) => effectiveFormat === "split" && !p.icon ? `<span class="button-stack">${p.html}</span>` : p.html).join("");
    const effectiveBg = button.background !== void 0 ? button.background : rowBg;
    const showIcon = iconEls.length > 0;
    const classes = ["button"];
    if (hasAnyMarquee) classes.push("overflow-marquee");
    if (forecastLoading) classes.push("button-loading");
    if (!textEls.length) classes.push("icon-only");
    if (barEls.length) classes.push("button-bar-type");
    if (barOverflow) classes.push("has-bar-overflow");
    if (effectiveFormat !== "inline") classes.push(`format-${effectiveFormat}`);
    if (isRingType) classes.push("button-ring");
    const iconBg = button.icon_background !== void 0 ? button.icon_background : containerCtx.button_icon_background;
    if (iconBg === true) classes.push("has-icon-bg");
    else if (iconBg === false) classes.push("no-icon-bg");
    const containerCfg = this._containers[containerIdx] || {};
    const containerLayout = (containerCfg.layout || "").toString().toLowerCase();
    const containerScrollable = containerLayout === "horizontal-scroll" || containerLayout === "vertical-scroll";
    const rowMasked = containerScrollable && containerCfg.scroll_fade === true;
    const effectiveBlurred = !rowMasked && (button.blurred_background !== void 0 ? button.blurred_background === true : containerBlurred);
    if (effectiveBg) {
      classes.push("with-bg");
      if (effectiveBlurred) classes.push("blurred");
    } else if (iconBg === true) {
      if (effectiveBlurred) classes.push("blurred");
    }
    const bgImagePath = button.background_image === true ? (button.background_image_path || "").trim() : "";
    if (bgImagePath) classes.push("has-bg-image");
    const effectiveBgColor = button.background_color || containerCtx.button_background_color || "";
    const effectiveIconBgColor = button.icon_background_color || containerCtx.button_icon_background_color || "";
    const buttonTintColor = threshold(button, button._thresholdDef);
    const inlineStyles = [];
    if (width) {
      const wv = cssLength(width);
      inlineStyles.push(`width:${wv};max-width:${wv}`);
    }
    if (height) inlineStyles.push(`height:${cssLength(height)}`);
    if (effectiveBgColor) inlineStyles.push(`--origami-bottom-bg-color:${cssValue(effectiveBgColor)}`);
    if (bgImagePath) inlineStyles.push(`--origami-button-bg-image:url('${cssValue(bgImagePath)}')`);
    if (effectiveIconBgColor) inlineStyles.push(`--origami-icon-bg-color:${cssValue(effectiveIconBgColor)}`);
    if (buttonTintColor) {
      inlineStyles.push(`--origami-button-tint:${cssValue(buttonTintColor)}`);
      classes.push("has-tint");
    }
    if (button.padding !== void 0 && button.padding !== "") inlineStyles.push(`padding:${cssLength(button.padding)}`);
    for (const [k, v] of [
      ["text_size", "--origami-bottom-font-size"],
      ["inner_gap", "--origami-button-gap"],
      ["icon_size", "--weather-icon-size"],
      ["icon_padding", "--weather-icon-padding"]
    ]) {
      if (button[k]) inlineStyles.push(`${v}:${cssLength(button[k])}`);
    }
    if (button.text_size) inlineStyles.push(`font-size:${cssLength(button.text_size)}`);
    if (button.text_shadow === true) inlineStyles.push("--_button-no-bg-shadow:var(--_button-shadow-avail)");
    const effectiveButtonShadow = (button.shadow !== void 0 ? button.shadow : containerCtx.button_shadow) !== false;
    if (!effectiveButtonShadow || containerScrollable) inlineStyles.push("--_origami-button-shadow:none");
    const buttonAlignClass = _ALIGN_CLASSES.has(button.align) ? button.align : "";
    if (buttonAlignClass) classes.push(`align-${buttonAlignClass}`);
    if (button.button_round === true) classes.push("button-round");
    const free = freeStyle(button).map((p) => p.join(":")).join(";"), freeCss = free && `position:absolute;${free}`;
    if (free && !isRingType) {
      classes.push("free-positioned");
      inlineStyles.push(freeCss);
    }
    const loaderHtml = forecastLoading ? '<div class="button-loader"><span></span><span></span><span></span></div>' : "";
    const style = inlineStyles.length ? ` style="${inlineStyles.join(";")}"` : "";
    let buttonHtml = `<div class="${classes.join(" ")}" data-idx="${idx}" data-container="${containerIdx}"${style}>${loaderHtml}${elementsHtml}</div>`;
    if (isRingType) {
      const g = gauge(button, "ring_");
      buttonHtml = `<div class="button-ring-wrap${free && " free-positioned"}${forecastLoading ? " button-loading" : ""}" data-idx="${idx}" data-container="${containerIdx}" style="--origami-ring-gap:${parseFloat(button.ring_gap) || 3}px${free && `;${freeCss}`}"><div class="button-ring-gauge" data-gauge="${idx}" style="${g.style}">${g.html}</div>${buttonHtml}</div>`;
    }
    const sig = width ? `${buttonHtml}|${width}` : buttonHtml;
    return { html: buttonHtml, sig, sensorObj, iconStrategy: firstIconStrategy, showIcon, width, containerIdx, buttonIdx: idx, hidden: false };
  }
  _backgroundMode(cfg) {
    const c = cfg || this._config || {};
    return typeof c.background_mode === "string" ? c.background_mode : "default";
  }
  _updateWeatherBackground(weatherState, schemeDark) {
    const container = this._elements?.weatherBg;
    const root = this._elements?.root;
    if (!container || !root) return;
    const cfg = this._config || {};
    const lightSchemePath = (cfg.weather_image_path || "").trim();
    const darkSchemePath = (cfg.weather_image_path_dark || "").trim();
    if (this._backgroundMode(cfg) !== "images" || !lightSchemePath) {
      this._weatherBgProbeId = (this._weatherBgProbeId || 0) + 1;
      if (this._weatherBgActive) {
        container.innerHTML = "";
        root.classList.remove("has-weather-bg");
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
    const folder = basePath.endsWith("/") ? basePath : basePath + "/";
    const type = String(cfg.weather_image_type || "").trim().replace(/^\./, ""), found = WEATHER_MEDIA_FOUND.get(folder);
    const exts = type ? [`.${type}`] : found === void 0 ? WEATHER_MEDIA_EXTS : [found, ...WEATHER_MEDIA_EXTS.filter((e) => e !== found)];
    container.innerHTML = "";
    const probeId = this._weatherBgProbeId = (this._weatherBgProbeId || 0) + 1;
    this._probeWeatherMedia(container, root, folder, weatherState, exts, 0, probeId);
  }
  _probeWeatherMedia(container, root, folder, state, exts, idx, probeId) {
    if (this._weatherBgProbeId !== probeId) return;
    if (idx >= exts.length) {
      root.classList.remove("has-weather-bg");
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
      WEATHER_MEDIA_FOUND.set(folder, exts[idx]);
      container.innerHTML = "";
      container.appendChild(el);
      root.classList.add("has-weather-bg");
      this._weatherBgActive = true;
      this._startAnimation();
    };
    if (/^\.(mp4|webm)$/i.test(exts[idx])) {
      const video = document.createElement("video");
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.src = url;
      video.onloadeddata = () => {
        video.onerror = null;
        apply(video);
      };
      video.onerror = () => {
        video.onloadeddata = null;
        video.onerror = null;
        video.removeAttribute("src");
        this._probeWeatherMedia(container, root, folder, state, exts, idx + 1, probeId);
      };
    } else {
      const img = new Image();
      img.onload = () => {
        img.onerror = null;
        apply(img);
      };
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
    const on = this._backgroundMode(cfg) === "default";
    if (!on) {
      if (this._defaultBgActive) {
        root.classList.remove("has-default-bg");
        this._defaultBgActive = false;
        this._defaultBgSchemeDark = null;
      }
      return;
    }
    if (this._defaultBgActive && this._defaultBgSchemeDark === schemeDark) return;
    const wasActive = this._defaultBgActive;
    this._defaultBgActive = true;
    this._defaultBgSchemeDark = schemeDark;
    root.classList.add("has-default-bg");
    if (!wasActive) this._startAnimation();
  }
  _updateWeatherFilter(weatherState, schemeDark) {
    const defaultBg = this._elements?.defaultBg;
    if (!defaultBg) return;
    const cfg = this._config || {};
    const themeFilter = this._themeDark && !schemeDark && cfg.dark_theme_adaptation !== false ? _DARK_THEME_FILTER : "";
    this._cssVar(this._elements.root, "--_origami-dark-theme-filter", themeFilter, "_prevDarkThemeFilter");
    if (this._backgroundMode() !== "default") {
      if (this._weatherFilterSig) {
        defaultBg.style.removeProperty("filter");
        this._weatherFilterSig = null;
      }
      return;
    }
    const sunset = Math.round((this._sunsetF || 0) * 12) / 12;
    const sig = `${weatherState}|${schemeDark ? "dark" : "light"}|${sunset}|${themeFilter}`;
    if (this._weatherFilterSig === sig) return;
    this._weatherFilterSig = sig;
    const sf = _SKY_FILTERS[weatherState] || _SKY_FILTERS.default;
    const weatherFilter = schemeDark ? sf.dark : sf.light;
    const sunsetFilter = sunset > 0.01 ? `sepia(${(0.34 * sunset).toFixed(3)}) hue-rotate(${(-12 * sunset).toFixed(2)}deg) saturate(${(1 + 0.22 * sunset).toFixed(3)})` : "";
    const bri = cfg.bg_brightness != null && String(cfg.bg_brightness) !== "" ? `brightness(${cfg.bg_brightness})` : "";
    const sat = cfg.bg_saturation != null && String(cfg.bg_saturation) !== "" ? `saturate(${cfg.bg_saturation})` : "";
    defaultBg.style.filter = [weatherFilter, sunsetFilter, bri, sat, themeFilter].filter(Boolean).join(" ");
  }
  _updateHazeStyles(weatherState, schemeDark) {
    const root = this._elements?.root;
    if (!root) return;
    const scheme = schemeDark ? "dark" : "light";
    const sig = `${weatherState}|${scheme}`;
    if (this._hazeStyleSig === sig) return;
    this._hazeStyleSig = sig;
    const ht = (_HAZE_TUNING[weatherState] || _HAZE_TUNING.default)[scheme];
    const pal = _HAZE_PALETTE[scheme];
    const toned = (c, aMul) => {
      const ch = (i) => Math.round(c[i] + (ht.tone[i] - c[i]) * ht.mix);
      return `rgba(${ch(0)},${ch(1)},${ch(2)},${Math.min(1, c[3] * aMul).toFixed(3)})`;
    };
    for (let i = 0; i < pal.length; i++) {
      const p = pal[i];
      root.style.setProperty(`--origami-haze${i + 1}-c`, toned(p.c, ht.alpha));
      root.style.setProperty(`--origami-haze${i + 1}-core`, toned(p.core || p.c, ht.alpha * (p.core ? ht.core : 1)));
    }
    root.style.setProperty("--origami-haze-scale", ht.scale);
  }
  _refreshMarqueeObservation() {
    if (!this._marqueeObserver) {
      this._marqueeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          entry.target.querySelectorAll(".marquee-host").forEach((host) => this._measureMarqueeOne(host));
        }
      });
    }
    this._marqueeObserver.disconnect();
    for (const els of this._elements?.buttonContainerEls || []) {
      if (els.row) {
        els.row.querySelectorAll(".button.overflow-marquee").forEach((button) => this._marqueeObserver.observe(button));
      }
    }
  }
  _measureMarqueeOne(host) {
    const track = host.querySelector(".marquee-track");
    if (!track) return;
    host.classList.toggle("marquee-rtl", host.dataset.rtl === "1");
    if (host.clientWidth === 0) return;
    const firstText = track.querySelector(".marquee-text");
    if (!firstText) return;
    if (firstText.offsetWidth > host.clientWidth + 1) {
      if (track.childElementCount === 1) {
        const sep1 = document.createElement("span");
        sep1.className = "marquee-sep";
        const sep2 = document.createElement("span");
        sep2.className = "marquee-sep";
        track.append(sep1, firstText.cloneNode(true), sep2);
      }
      const speed = Math.max(5, parseFloat(host.dataset.speed) || 30);
      const duration = Math.max(2, track.scrollWidth / 2 / speed);
      host.style.setProperty("--origami-marquee-duration", `${duration.toFixed(2)}s`);
      host.classList.add("is-animating");
    } else {
      while (track.childElementCount > 1) track.lastElementChild.remove();
      host.classList.remove("is-animating");
      host.style.removeProperty("--origami-marquee-duration");
    }
  }
  _scheduleVerticalMeasure(containerIdx) {
    if (!this._pendingVertMeasure) this._pendingVertMeasure = /* @__PURE__ */ new Set();
    this._pendingVertMeasure.add(containerIdx);
    if (this._vertMeasureRaf) return;
    this._vertMeasureRaf = requestAnimationFrame(() => {
      this._vertMeasureRaf = null;
      const pending = this._pendingVertMeasure;
      this._pendingVertMeasure = null;
      if (!pending) return;
      const writes = [];
      for (const idx of pending) {
        const measured = this._measureVerticalRow(idx);
        if (measured) writes.push(measured);
      }
      for (const w of writes) {
        if (w.value) w.row.style.setProperty("--origami-row-max-height", w.value);
        else w.row.style.removeProperty("--origami-row-max-height");
      }
    });
  }
  _pinScrollOrigins() {
    const list = this._containers;
    if (!Array.isArray(list) || !this._elements) return;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (!c || c.custom_cards) continue;
      const layout = (c.layout || "").toString().toLowerCase();
      const horizontal = layout === "horizontal-scroll", vertical = layout === "vertical-scroll";
      if (!horizontal && !vertical) continue;
      const cache = this._containerStyleCache && this._containerStyleCache[i];
      if (!cache || cache.scrollPinned) continue;
      const bt = this._elements.buttonContainerEls[i] && this._elements.buttonContainerEls[i].row;
      if (!bt || !bt.children.length) continue;
      if (horizontal ? bt.clientWidth <= 0 : bt.clientHeight <= 0) continue;
      if (horizontal) {
        if (bt.scrollLeft !== 0) bt.scrollLeft = 0;
      } else if (bt.scrollTop !== 0) bt.scrollTop = 0;
      cache.scrollPinned = true;
    }
  }
  _remeasureVerticalRows() {
    const list = this._containers;
    if (!Array.isArray(list)) return;
    for (let i = 0; i < list.length; i++) {
      const c = list[i];
      if (!c || c.custom_cards || (c.layout || "").toString().toLowerCase() !== "vertical-scroll") continue;
      const n = parseInt(c.scroll_count, 10);
      if (Number.isFinite(n) && n > 0) this._scheduleVerticalMeasure(i);
    }
  }
  _measureVerticalRow(containerIdx) {
    const bt = this._elements?.buttonContainerEls?.[containerIdx]?.row;
    const container = this._containers[containerIdx];
    if (!bt || !bt.children.length || !container) return null;
    const visCount = parseInt(container.scroll_count, 10);
    if (!Number.isFinite(visCount) || visCount < 1) return null;
    const shown = Math.min(visCount, bt.children.length);
    let value = "";
    if (shown < bt.children.length) {
      let total = 0;
      for (let i = 0; i < shown; i++) {
        const h = bt.children[i].offsetHeight;
        if (!h) return null;
        total += h;
      }
      const cs = getComputedStyle(bt);
      const gap = parseFloat(cs.rowGap) || parseFloat(cs.gap) || 0;
      value = `${Math.round(total + gap * (shown - 1))}px`;
    }
    const cache = this._containerStyleCache?.[containerIdx];
    if (cache) {
      if (cache.vertVisH === value) return null;
      cache.vertVisH = value;
    }
    return { row: bt, value };
  }
  _handleVisibilityChange(entries) {
    const entry = entries[0], wasVisible = this._isVisible;
    this._isVisible = entry.isIntersecting;
    if (this._elements?.root) this._elements.root.classList.toggle("is-offscreen", !this._isVisible);
    if (this._isVisible && !wasVisible) {
      this._startAnimation();
      this._remeasureVerticalRows();
      this._pinScrollOrigins();
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
    if (!cfg || !cfg.card_tap_action || cfg.card_tap_action.action === "none") return;
    this.dispatchEvent(new CustomEvent("hass-action", { bubbles: true, composed: true, detail: { config: { entity: cfg.weather_entity, tap_action: cfg.card_tap_action }, action: "tap" } }));
  }
  _handleButtonClick(e) {
    const buttonEl = e.target.closest(".button");
    if (!buttonEl) return;
    const idx = parseInt(buttonEl.dataset.idx, 10);
    const containerIdx = parseInt(buttonEl.dataset.container, 10);
    if (isNaN(idx) || isNaN(containerIdx)) return;
    const container = this._containers && this._containers[containerIdx];
    if (!container) return;
    const button = container.buttons && container.buttons[idx];
    if (!button || !button.entity) return;
    e.stopPropagation();
    const tapAction = button.tap_action || { action: "more-info" };
    this.dispatchEvent(new CustomEvent("hass-action", { bubbles: true, composed: true, detail: { config: { entity: button.entity, tap_action: tapAction }, action: "tap" } }));
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
    w = Math.floor(w);
    h = Math.floor(h);
    if (w === 0 || h === 0) return false;
    if (this._cachedDimensions.width === w && this._cachedDimensions.height === h) return false;
    this._cachedDimensions = { width: w, height: h };
    return true;
  }
  _scheduleResize() {
    if (this._resizeDebounceTimer) clearTimeout(this._resizeDebounceTimer);
    this._resizeDebounceTimer = setTimeout(() => {
      this._resizeDebounceTimer = null;
      this._sizeEffectsCanvas();
      this._syncEffects(this._lastState);
      this._remeasureVerticalRows();
      this._pinScrollOrigins();
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
      this._effectsCtx = canvas.getContext("2d");
    } else if (!this._effectsCtx) {
      this._effectsCtx = canvas.getContext("2d");
    }
    if (els.nearCanvas) {
      const nc = els.nearCanvas, nw = this._nearUsed ? cw : 0, nh = this._nearUsed ? ch : 0;
      if (nc.width !== nw || nc.height !== nh) {
        nc.width = nw;
        nc.height = nh;
      }
      this._nearCtx = this._nearUsed ? nc.getContext("2d") : null;
    }
    if (els.starCanvas) {
      const sc = els.starCanvas;
      const starResized = sc.width !== cw || sc.height !== ch;
      if (starResized) {
        sc.width = cw;
        sc.height = ch;
        this._starCtx = sc.getContext("2d");
      } else if (!this._starCtx) {
        this._starCtx = sc.getContext("2d");
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
    const recipe = on && cfg.precipitation_effects !== false && tuning.precipitation || null;
    const cloudState = on && cfg.cloud_effects !== false && WeatherEffects.hasClouds(weatherState) ? weatherState : null;
    const mistOn = typeof cfg.mist_effects === "boolean" ? cfg.mist_effects : cfg.cloud_effects !== false;
    const mistState = on && mistOn && WeatherEffects.hasMist(weatherState) ? weatherState : null;
    const starsOn = on && cfg.night_sky_effects !== false && this._isAstroNight && tuning.starCount > 0 && tuning.starOpacity > 0;
    const stars = starsOn ? { count: tuning.starCount, opacity: tuning.starOpacity } : null;
    const factor = (key) => Math.max(0.25, Math.min(4, parseFloat(cfg[key]) || 1));
    const actor = (kind, allowed) => {
      const activity = on && allowed && cfg[`${kind}_effects`] !== false ? WeatherEffects[`${kind}Activity`](weatherState) : 0;
      return activity > 0 ? { activity, state: weatherState, density: factor(`${kind}_density`) } : null;
    };
    const birds = actor("bird", !this._schemeDark), balloon = actor("balloon", true), planes = actor("plane", true);
    const active = !!recipe || !!cloudState || !!mistState || !!stars || !!birds || !!balloon || !!planes;
    const hass = this._hass, bg = this._backgroundColor();
    if (String(bg) !== String(this._effectsBg)) this._effectsBg = bg;
    this._nearUsed = !!hass && (this._containers || []).some((c) => containerLayer(c) === "middle" && c.hide !== true && this._checkButtonVisibility(c, hass));
    els.root.classList.toggle("has-near-canvas", this._nearUsed);
    if (active && !this._sizeEffectsCanvas()) {
      this._effectsActive = false;
      els.root.classList.remove("has-weather-effects");
      return;
    }
    WeatherEffects.set(this._effects, recipe, els.root.clientWidth, els.root.clientHeight, cloudState, stars, birds, balloon, planes, factor("precipitation_speed"), String(cfg.cloud_image_path || "").trim(), mistState, this._windMs, Math.max(0.25, Math.min(2, parseFloat(cfg.mist_density) || 1)));
    this._effectsActive = active;
    els.root.classList.toggle("has-weather-effects", active);
    els.root.classList.toggle("has-star-canvas", !!stars);
    if (active) this._startAnimation();
  }
  _effectsEnv() {
    const sm = this._elements.sunMoon, cx = sm.offsetLeft, cy = sm.offsetTop, sunSize = sm.offsetWidth;
    let glow = null;
    if (this._sunMoonActive && this._sunGlowVisibility > 0.05) {
      const r = sunSize * 2.4;
      glow = { x: cx, y: cy, r2: r * r, s: 0.55 * this._sunGlowVisibility * (this._sunGlowIsNight ? 0.5 : 1) };
    }
    let moon = null;
    if (this._sunMoonActive && this._isAstroNight) {
      moon = { x: cx, y: cy, r: sunSize / 2 };
    }
    return { schemeDark: this._schemeDark, glow, moon, night: this._isAstroNight, backgroundRGB: this._effectsBg };
  }
  _backgroundColor() {
    const root = this._elements.root, css = getComputedStyle(root).backgroundColor, own = /^(?:rgba?\(|color\(srgb )([^)]+)\)/.exec(css);
    const c = own ? own[1].split(/[\s,/]+/).filter(Boolean).map((v, i) => i < 3 && css.startsWith("color") ? v * 255 : +v) : [];
    if (c.length >= 3 && (c[3] ?? 1) >= 0.5) return c.slice(0, 3).map(Math.round);
    const bg = getComputedStyle(root.querySelector("#sky-base")).backgroundImage || "";
    const hexes = bg.match(/#([0-9a-f]{6})/gi);
    const rgbs = bg.match(/rgba?\([^)]+\)/gi);
    let r = 0, g = 0, b = 0, cnt = 0;
    const add = (cr, cg, cb) => {
      r += cr;
      g += cg;
      b += cb;
      cnt++;
    };
    if (hexes) for (const hx of hexes) {
      const n = hx.slice(1);
      add(parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16));
    }
    if (rgbs) for (const rs of rgbs) {
      const p = rs.replace(/rgba?\(|\)/g, "").split(",").map(Number);
      if (p.length >= 3) add(p[0], p[1], p[2]);
    }
    return cnt ? [Math.round(r / cnt), Math.round(g / cnt), Math.round(b / cnt)] : this._schemeDark ? [16, 33, 61] : [209, 229, 242];
  }
  _drawEffects(now) {
    const ctx = this._effectsCtx, els = this._elements;
    if (!ctx || !els || !els.root) return;
    const w = this._effectsW, h = this._effectsH;
    if (!w || !h) return;
    const dt = Math.max(1e-3, Math.min(0.05, (now - this._lastEffectsTime) * 1e-3));
    this._lastEffectsTime = now;
    const alive = WeatherEffects.frame(this._effects, ctx, w, h, this._effectsScale, dt, now * 1e-3, this._effectsEnv(), this._starCtx, this._nearUsed ? this._nearCtx : null);
    if (!alive) {
      this._effectsActive = false;
      els.root.classList.remove("has-weather-effects");
      els.root.classList.remove("has-star-canvas");
      this._stopAnimation();
    }
  }
  _animate(now) {
    if (!this.isConnected || this._animId === null || !this._isVisible) {
      this._stopAnimation();
      return;
    }
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
    if (this._animId !== null) {
      cancelAnimationFrame(this._animId);
      this._animId = null;
    }
  }
};
var CARD_NAME = "origami-weather";
if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, WeatherCard);
  window.customCards = window.customCards || [];
  window.customCards.push({ type: CARD_NAME, name: "Origami Weather", description: "A flexible weather card for Home Assistant." });
} else {
  console.info(`%c ${CARD_NAME} already defined`, "color: orange; font-weight: bold;");
}
