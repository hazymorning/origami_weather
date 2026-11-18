// src/layout-presets.js
var PRESET_ENTITY_TOKEN = "__WEATHER__";
var text = (extra) => ({ type: "text", ...extra });
var icon = (name, extra) => ({ type: "icon", icon: name, ...extra });
var CARD_COLOR = "var(--origami-card-bg-color, var(--ha-card-background, var(--card-background-color, #fff)))";
var CARD_TINT = (percent, color = CARD_COLOR) => `color-mix(in srgb, ${color} ${percent}%, transparent)`;
var dayName = (offset) => offset === 0 ? "Today" : offset === 1 ? "Tomorrow" : `In ${offset} days`;
var days = (first, build) => Array.from({ length: 10 - first }, (_, i) => build(first + i));
var cardSwitch = (name) => ({ tap: { action: "toggle", entity: `origami.${name}` }, tab: (state) => ({ action: "toggle", entity: `origami.${name}`, state }), shown: (state) => [{ condition: "state", entity: `origami.${name}`, state }] });
var nextSun = (rising) => ({ entity: "sun.sun", attribute: rising ? "next_rising" : "next_setting", visibility: [{ condition: "state", entity: "sun.sun", state: rising ? "below_horizon" : "above_horizon" }] });
var thresholds = (rows) => rows.map(([value, color, color_dark]) => ({ value, color, color_dark }));
var DIORAMA_PAPER = [
  ["sunny", "#eee5d7", "#261d13"],
  ["partlycloudy", "#dee9ef", "#182227"],
  ["cloudy", "#e2e5e7", "#1b1e20"],
  ["fog", "#e8e7e5", "#222120"],
  ["rainy", "#d9e1ea", "#171e26"],
  ["pouring", "#d7dde4", "#151b21"],
  ["lightning", "#e5dfe8", "#221d25"],
  ["lightning-rainy", "#dfdbe2", "#1d1920"],
  ["hail", "#d3dfdf", "#121c1c"],
  ["snowy", "#e5eaec", "#1c2426"],
  ["snowy-rainy", "#dde2e5", "#1e2124"],
  ["windy", "#dce6e3", "#182220"],
  ["windy-variant", "#dae1de", "#171d1b"],
  ["clear-night", "#e0e3ed", "#161924"],
  ["exceptional", "#eadad3", "#271a15"]
];
var DIORAMA_CONFIG = Object.freeze({
  card_height: "160px",
  card_padding: "0",
  sun_size: 30,
  moon_size: 30,
  sun_moon_x: "dynamic",
  cloud_effects: false,
  background_mode: "images",
  weather_image_path: "diorama/light/",
  weather_image_path_dark: "diorama/dark/",
  weather_image_type: "webp",
  weather_image_front: true,
  background_thresholds: thresholds(DIORAMA_PAPER),
  card_tap_action: { action: "more-info" },
  css: "#weather-bg > img { object-position: right bottom; }",
  button_containers: [
    {
      name: "Now",
      padding: "var(--ha-space-4, 16px) var(--ha-space-4, 16px) var(--ha-space-4, 16px) calc(var(--ha-space-4, 16px) + 4px)",
      buttons: [
        {
          name: "Temperature and condition",
          entity: PRESET_ENTITY_TOKEN,
          style: "vertical",
          inner_gap: "6px",
          elements: [
            text({ attribute: "temperature", size: "40px", weight: "700", precision: 0, format: "\xB0" }),
            text({ size: "12px", weight: "500", overflow: "wrap" })
          ]
        }
      ]
    }
  ],
  grid_options: { columns: "full" }
});
var CLASSIC_COLORS = [
  ["sunny", "#2894e2", "#162048"],
  ["clear-night", "#162048", "#162048"],
  ["partlycloudy", "#5793ca", "#1b2745"],
  ["cloudy", "#738ba2", "#242e3e"],
  ["fog", "#8596a4", "#2a343e"],
  ["windy", "#488da0", "#12313d"],
  ["windy-variant", "#5c8ca6", "#1c303f"],
  ["rainy", "#577391", "#1b2739"],
  ["pouring", "#486082", "#161f31"],
  ["lightning", "#53507d", "#231e39"],
  ["lightning-rainy", "#4a4972", "#1c1931"],
  ["hail", "#587d8f", "#1c2e39"],
  ["snowy", "#789cb6", "#27384a"],
  ["snowy-rainy", "#68869e", "#23303f"],
  ["exceptional", "#3283e3", "#142152"]
];
var WHITE = "#ffffff";
var WHITE_72 = "rgba(255, 255, 255, 0.72)";
var WHITE_60 = "rgba(255, 255, 255, 0.6)";
var classicDay = (offset) => ({
  name: dayName(offset),
  entity: PRESET_ENTITY_TOKEN,
  forecast: "daily",
  forecast_offset: offset,
  elements: [
    text({ attribute: "datetime", weight: "500", color: WHITE_72 }),
    icon("weather", { color: WHITE, margin: "2px 0" }),
    text({ attribute: "temperature", format: "\xB0", size: "15px", weight: "700", color: WHITE }),
    text({ attribute: "templow", format: "\xB0", size: "14px", weight: "500", color: WHITE_60 }),
    { type: "bar", bar_height: "4px", bar_width: "26px", bar_color: "#9fd2ff", margin: "3px 0 0", bar_values: [{ attribute: "precipitation_probability" }] },
    { type: "bar", bar_shape: "curve", bar_height: "2px", bar_color: "rgba(255, 255, 255, 0.22)", margin: "-84px 0 0", bar_values: [{ attribute: "temperature", marker_size: "28px", marker_gap: true }] }
  ]
});
var classicStat = (iconName, extra) => [icon(iconName, { color: WHITE_72 }), text({ weight: "500", color: WHITE, ...extra })];
var CLASSIC_CONFIG = Object.freeze({
  color_mode: "dark",
  sun_enabled: false,
  moon_enabled: false,
  night_sky_effects: false,
  cloud_effects: false,
  mist_effects: false,
  bird_effects: false,
  balloon_effects: false,
  plane_effects: false,
  background_mode: "color",
  background_color: "#5793ca",
  background_color_dark: "#1b2745",
  background_thresholds: thresholds(CLASSIC_COLORS),
  shadow_color: "inset 0 1px 3px rgba(0, 0, 0, 0.14)",
  card_tap_action: { action: "more-info" },
  gradient: true,
  gradient_angle: 160,
  gradient_color_1: "color-mix(in srgb, white 12%, transparent)",
  gradient_color_2: "transparent",
  gradient_stop_2: 75,
  card_height: "content",
  card_padding: "var(--ha-space-4, 16px)",
  button_containers: [
    {
      name: "Today",
      padding: "3.5px 8px 0",
      justify_content: "between",
      buttons: [
        {
          name: "Day",
          entity: PRESET_ENTITY_TOKEN,
          style: "vertical",
          inner_gap: "7px",
          elements: [
            text({ attribute: "datetime", format: "%A", size: "20px", weight: "600", color: WHITE }),
            text({ attribute: "datetime", format: "%-d %B", size: "14px", weight: "500", color: WHITE_72 })
          ]
        },
        {
          name: "Weather and temperature",
          entity: PRESET_ENTITY_TOKEN,
          inner_gap: "10px",
          elements: [
            icon("weather", { icon_size: "44px", color: WHITE }),
            text({ attribute: "temperature", size: "46px", weight: "600", precision: 0, format: "\xB0", color: WHITE })
          ]
        }
      ]
    },
    {
      name: "Details",
      padding: "0 8px",
      margin: "10px 0 0",
      justify_content: "between",
      button_gap: "2px",
      button_text_size: "14px",
      button_icon_size: "14px",
      buttons: [
        {
          name: "High, low and humidity",
          entity: PRESET_ENTITY_TOKEN,
          forecast: "daily",
          elements: [
            ...classicStat("mdi:arrow-up", { attribute: "temperature", format: "\xB0", margin: "0 12px 0 0" }),
            ...classicStat("mdi:arrow-down", { attribute: "templow", format: "\xB0", margin: "0 12px 0 0" }),
            ...classicStat("mdi:water-outline", { entity: PRESET_ENTITY_TOKEN, attribute: "humidity" })
          ]
        },
        { name: "Condition", entity: PRESET_ENTITY_TOKEN, elements: [text({ weight: "500", color: WHITE })] }
      ]
    },
    {
      name: "Forecast",
      layout: "horizontal-scroll",
      scroll_count: 6,
      row_height: "134px",
      justify_content: "center",
      margin: "20px 0 0",
      padding: "4px",
      gap: "0",
      background: true,
      grouped: true,
      blurred_background: true,
      background_blur: 20,
      background_color: "rgba(0, 0, 0, 0.14)",
      align: "center",
      button_style: "vertical",
      button_padding: "14px 0",
      button_gap: "5px",
      button_text_size: "12px",
      button_icon_size: "26px",
      buttons: days(1, classicDay)
    }
  ]
});
var HOME_SKY = [
  ["sunny", "#e7e2d9", "#0d1f30"],
  ["clear-night", "#dbdce1", "#0d1f30"],
  ["partlycloudy", "#e0deda", "#1a2530"],
  ["cloudy", "#d3d4d6", "#262a2e"],
  ["fog", "#e6e6e5", "#343a3d"],
  ["windy", "#dadfdd", "#16292a"],
  ["windy-variant", "#d5dad9", "#14262b"],
  ["rainy", "#cdd2d6", "#15232b"],
  ["pouring", "#c8cdd2", "#111d24"],
  ["lightning", "#cfced3", "#231f31"],
  ["lightning-rainy", "#cacacf", "#1d1c2b"],
  ["snowy", "#e6eaed", "#2b363c"],
  ["snowy-rainy", "#d8dddf", "#222e32"],
  ["hail", "#d2d9da", "#1a2a2d"],
  ["exceptional", "#ded8d2", "#2c1b17"]
];
var homeText = (extra) => text({ weight: "500", color: "var(--primary-text-color)", ...extra });
var homeLabel = (extra) => homeText({ color: "var(--secondary-text-color)", ...extra });
var homeTemp = (extra) => homeText({ precision: 0, format: "\xB0", weight: "700", ...extra });
var sunTime = (rising) => ({
  name: rising ? "Sunrise (at night)" : "Sunset (by day)",
  ...nextSun(rising),
  inner_gap: "6px",
  elements: [homeLabel({ text: rising ? "Sunrise" : "Sunset" }), homeText({ weight: "700" })]
});
var room = (label) => ({
  name: `Room: ${label}`,
  entity: PRESET_ENTITY_TOKEN,
  attribute: "temperature",
  style: "vertical",
  align: "start",
  elements: [homeLabel({ text: label }), homeTemp({ size: "16px" })]
});
var windCompass = () => ({
  name: "Wind compass",
  entity: PRESET_ENTITY_TOKEN,
  type: "ring",
  style: "vertical",
  ring_min: 0,
  ring_max: 360,
  ring_fill: false,
  ring_width: 1,
  ring_color: "var(--secondary-text-color)",
  ring_marker_icon_size: 17,
  ring_values: [
    { value: 0, marker_size: 14, marker_gap: true, marker_icon: "mdi:alpha-n", marker_icon_color: "var(--secondary-text-color)" },
    { attribute: "wind_bearing", marker_size: 7, marker_color: "var(--primary-text-color)" }
  ],
  width: "54px",
  padding: "0",
  inner_gap: "4px",
  elements: [homeText({ attribute: "wind_speed", precision: 0, format: " ", size: "15px", weight: "700" }), homeLabel({ attribute: "wind_speed_unit", size: "8px" })]
});
var HOME_CONFIG = Object.freeze({
  sun_enabled: false,
  moon_enabled: false,
  cloud_effects: false,
  mist_effects: true,
  mist_density: 0.7,
  night_sky_effects: false,
  balloon_effects: false,
  plane_effects: false,
  background_mode: "color",
  background_thresholds: thresholds(HOME_SKY),
  card_height: "256px",
  card_padding: "20px",
  content_align: "between",
  button_containers: [
    {
      name: "Sun and wind",
      justify_content: "between",
      align_items: "start",
      button_text_size: "12px",
      buttons: [sunTime(false), sunTime(true), windCompass()]
    },
    {
      name: "House",
      layer: "middle",
      position: "custom",
      position_anchor: "top-right",
      position_x: "34px",
      position_y: "18px",
      image: "home",
      custom_width: "min(178px, 75% - 49px)"
    },
    {
      name: "Temperature and rooms",
      align: "spread",
      align_items: "end",
      gap: "clamp(14px, 6cqw, 22px)",
      button_gap: "4px",
      button_text_size: "12px",
      buttons: [
        {
          name: "Outside",
          entity: PRESET_ENTITY_TOKEN,
          style: "split",
          elements: [homeTemp({ attribute: "temperature", size: "clamp(40px, 17cqw, 52px)" }), homeLabel({ overflow: "wrap" })]
        },
        room("Living"),
        room("Office"),
        room("Bath")
      ]
    }
  ]
});
var SKY_SWITCH = cardSwitch("forecast");
var skyDay = (offset) => ({
  name: dayName(offset),
  entity: PRESET_ENTITY_TOKEN,
  forecast: "daily",
  forecast_offset: offset,
  tap_action: SKY_SWITCH.tap,
  elements: [
    text({ attribute: "datetime", format: "%a", weight: "500" }),
    icon("weather", { margin: "5px 0 4px" }),
    text({ attribute: "temperature", format: "\xB0", size: "15px", weight: "700" }),
    text({ attribute: "templow", format: "\xB0", size: "13px", weight: "500" }),
    { type: "bar", bar_shape: "curve", bar_height: "2px", bar_color: "color-mix(in srgb, currentColor 22%, transparent)", margin: "-75px 0 0", bar_values: [{ attribute: "temperature", marker_size: "28px", marker_gap: true }] }
  ]
});
var SKY_CONFIG = Object.freeze({
  card_height: "168px",
  card_padding: "0",
  content_align: "between",
  sun_moon_x: "75%",
  sun_moon_y: "50% 18%",
  sun_size: 40,
  moon_size: 40,
  visibility_fade: true,
  card_tap_action: SKY_SWITCH.tap,
  button_containers: [
    {
      name: "Now",
      layer: "middle",
      padding: "22px 22px 0",
      visibility: SKY_SWITCH.shown("off"),
      buttons: [
        {
          name: "Condition and temperature",
          entity: PRESET_ENTITY_TOKEN,
          style: "vertical",
          inner_gap: "10px",
          elements: [
            text({ size: "14px", weight: "500" }),
            text({ attribute: "temperature", precision: 0, format: "\xB0", size: "52px", weight: "700", color: "currentColor", margin: "-0.2em -0.06em -0.1em -0.05em" })
          ]
        }
      ]
    },
    {
      name: "Today",
      padding: "0 18px 18px",
      background: true,
      button_padding: "10px 12px",
      button_gap: "8px",
      button_text_size: "14px",
      button_icon_size: "20px",
      button_background_color: CARD_TINT(45),
      button_blurred_background: true,
      button_shadow: false,
      visibility: SKY_SWITCH.shown("off"),
      buttons: [
        {
          name: "Today",
          entity: PRESET_ENTITY_TOKEN,
          forecast: "daily",
          tap_action: SKY_SWITCH.tap,
          elements: [
            icon("weather"),
            text({ text: "Today", weight: "500" }),
            text({ attribute: "temperature", format: "\xB0", weight: "700", color: "currentColor" })
          ]
        }
      ]
    },
    {
      name: "Days",
      position: "custom",
      position_anchor: "top-left",
      position_x: "0",
      position_y: "0",
      custom_width: "100%",
      padding: "38px max(0px, calc(63.5px - 12.5cqw))",
      layout: "horizontal-scroll",
      scroll_count: 5,
      row_height: "100%",
      align_items: "stretch",
      gap: "0",
      align: "center",
      scroll_fade: true,
      scroll_fade_size: "48px",
      background: true,
      grouped: true,
      border: "none",
      blurred_background: true,
      background_blur: 16,
      background_color: CARD_TINT(30),
      button_style: "vertical",
      button_gap: "5px",
      button_text_size: "12px",
      button_icon_size: "28px",
      visibility: SKY_SWITCH.shown("on"),
      buttons: days(0, skyDay)
    }
  ]
});
var PRIMARY = "var(--primary-text-color)";
var SECONDARY = "var(--secondary-text-color)";
var panelTile = (name, iconName, label, value, top) => ({
  name,
  custom_width: "calc(50% - 4px)",
  margin: `${top}px 0 0`,
  padding: "12px",
  gap: "8px",
  grouped: true,
  background: true,
  blurred_background: true,
  background_color: `color-mix(in srgb, ${PRIMARY} 5%, transparent)`,
  shadow: false,
  buttons: [
    { name: "Label", entity: PRESET_ENTITY_TOKEN, width: "100%", inner_gap: "6px", elements: [icon(iconName, { icon_size: "18px", color: SECONDARY }), text({ text: label, size: "12px", weight: "500", color: SECONDARY })] },
    { name: "Value", entity: PRESET_ENTITY_TOKEN, ...value.forecast ? { forecast: value.forecast } : {}, elements: [text({ size: "17px", weight: "600", color: PRIMARY, ...value.text })] }
  ]
});
var panelHour = (offset) => ({
  name: offset === 0 ? "Next hour" : `In ${offset + 1} hours`,
  entity: PRESET_ENTITY_TOKEN,
  forecast: "hourly",
  forecast_offset: offset,
  elements: [
    text({ attribute: "datetime", weight: "500", color: SECONDARY }),
    icon("weather", { color: PRIMARY }),
    { type: "bar", bar_shape: "curve", bar_height: "2px", bar_color: "color-mix(in srgb, currentColor 22%, transparent)", margin: "-44px 0 -8px", bar_values: [{ attribute: "temperature", marker_size: "28px", marker_gap: true }] },
    text({ attribute: "temperature", format: "\xB0", size: "15px", weight: "600", color: PRIMARY })
  ]
});
var PANEL_CONFIG = Object.freeze({
  color_mode: "theme",
  card_height: "content",
  card_padding: "20px",
  content_direction: "row",
  content_align: "between",
  sun_size: 32,
  moon_size: 32,
  sun_moon_y: "78px 66px",
  cloud_effects: false,
  mist_effects: true,
  mist_density: 0.5,
  night_sky_effects: false,
  bird_effects: false,
  balloon_effects: false,
  plane_effects: false,
  card_tap_action: { action: "more-info" },
  button_containers: [
    {
      name: "Now",
      custom_width: "60%",
      gap: "6px",
      buttons: [
        {
          name: "Condition",
          entity: PRESET_ENTITY_TOKEN,
          width: "100%",
          elements: [text({ size: "24px", weight: "600", color: PRIMARY, overflow: "wrap" })]
        },
        {
          name: "High and low",
          entity: PRESET_ENTITY_TOKEN,
          forecast: "daily",
          inner_gap: "2px",
          icon_size: "16px",
          elements: [
            icon("mdi:arrow-up", { color: SECONDARY }),
            text({ attribute: "temperature", format: "\xB0", weight: "500", color: PRIMARY, margin: "0 12px 0 0" }),
            icon("mdi:arrow-down", { color: SECONDARY }),
            text({ attribute: "templow", format: "\xB0", weight: "500", color: PRIMARY })
          ]
        }
      ]
    },
    {
      name: "Temperature",
      custom_width: "40%",
      justify_content: "end",
      buttons: [
        {
          name: "Temperature",
          entity: PRESET_ENTITY_TOKEN,
          attribute: "temperature",
          elements: [text({ size: "62px", weight: "700", precision: 0, format: "\xB0", color: PRIMARY, margin: "-0.216em -0.09em -0.164em 0" })]
        }
      ]
    },
    panelTile("Wind", "mdi:weather-windy", "Wind", { text: { attribute: "wind_speed", precision: 0 } }, 23),
    panelTile("Humidity", "mdi:water-percent", "Humidity", { text: { attribute: "humidity" } }, 23),
    panelTile("UV index", "mdi:sun-wireless-outline", "UV index", { text: { attribute: "uv_index" } }, 8),
    panelTile("Rain", "mdi:umbrella-outline", "Rain", { forecast: "daily", text: { attribute: "precipitation_probability", format: "%" } }, 8),
    panelTile("Pressure", "mdi:gauge", "Pressure", { text: { attribute: "pressure", precision: 0 } }, 8),
    panelTile("Updated", "mdi:update", "Updated", { text: { attribute: "last_updated" } }, 8),
    {
      name: "Forecast",
      custom_width: "100%",
      layout: "horizontal-scroll",
      scroll_count: 5,
      margin: "26px 0 0",
      button_style: "vertical",
      button_gap: "12px",
      button_text_size: "12px",
      button_icon_size: "24px",
      align: "center",
      buttons: Array.from({ length: 24 }, (_, i) => panelHour(i))
    }
  ]
});
var LAYOUT_PRESETS = Object.freeze([
  {
    id: "diorama",
    name: "Diorama",
    description: "A landscape that changes with the weather and the time of day",
    icon: "mdi:image-filter-hdr",
    config: DIORAMA_CONFIG
  },
  {
    id: "classic",
    name: "Classic",
    description: "Today's weather with high, low and humidity, and the next days",
    icon: "mdi:view-dashboard-variant-outline",
    config: CLASSIC_CONFIG
  },
  {
    id: "sky",
    name: "Sky",
    description: "Animated sky with the current weather, tap shows a forecast",
    icon: "mdi:view-compact-outline",
    config: SKY_CONFIG
  },
  {
    id: "home",
    name: "Home",
    description: "A house with the weather outside, room temperatures and wind",
    icon: "mdi:home-outline",
    config: HOME_CONFIG
  },
  {
    id: "panel",
    name: "Panel",
    description: "Current weather with wind, rain and UV in tiles, and the next hours",
    icon: "mdi:view-grid-outline",
    config: PANEL_CONFIG
  }
]);
var deepClone = (value) => {
  if (Array.isArray(value)) return value.map(deepClone);
  if (value && typeof value === "object") {
    const out = {};
    for (const k of Object.keys(value)) out[k] = deepClone(value[k]);
    return out;
  }
  return value;
};
var rebindPresetEntities = (value, entity) => {
  if (Array.isArray(value)) return value.map((v) => rebindPresetEntities(v, entity));
  if (value && typeof value === "object") {
    const out = {};
    for (const k of Object.keys(value)) out[k] = rebindPresetEntities(value[k], entity);
    return out;
  }
  if (value === PRESET_ENTITY_TOKEN) return entity;
  return value;
};
var instantiatePreset = (preset, entity) => rebindPresetEntities(deepClone(preset.config), entity);
var buildStubConfig = (hass) => {
  const entity = hass ? Object.keys(hass.states).find((e) => e.startsWith("weather.")) || "weather.home" : "weather.home";
  return { weather_entity: entity, ...instantiatePreset(LAYOUT_PRESETS[0], entity) };
};

export {
  PRESET_ENTITY_TOKEN,
  LAYOUT_PRESETS,
  rebindPresetEntities,
  instantiatePreset,
  buildStubConfig
};
