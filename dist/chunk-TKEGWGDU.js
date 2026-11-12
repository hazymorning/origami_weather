// src/layout-presets.js
var PRESET_ENTITY_TOKEN = "__WEATHER__";
var text = (extra) => ({ type: "text", ...extra });
var icon = (name, extra) => ({ type: "icon", icon: name, ...extra });
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
var ICON_SPACE = {
  weather: "0 1px 0 -0.2px",
  "mdi:weather-windy": "0 0.3px 0 -1.3px",
  "mdi:weather-sunset-down": "0 -0.3px 0 0",
  "mdi:weather-sunset-up": "0 -0.3px 0 0",
  "mdi:water-percent": "0 -3px 0 -2.8px",
  "mdi:sun-wireless-outline": "0 0.3px 0 -1.3px"
};
var dioramaItem = (iconName, label, values, extra) => ({
  name: label,
  entity: PRESET_ENTITY_TOKEN,
  ...extra,
  elements: [icon(iconName, { margin: ICON_SPACE[iconName] }), text({ text: label, weight: "500" }), ...values]
});
var dioramaSun = (rising) => dioramaItem(rising ? "mdi:weather-sunset-up" : "mdi:weather-sunset-down", rising ? "Sunrise" : "Sunset", [text({ weight: "700" })], {
  name: rising ? "Sunrise (at night)" : "Sunset (by day)",
  entity: "sun.sun",
  attribute: rising ? "next_rising" : "next_setting",
  visibility: [{ condition: "state", entity: "sun.sun", state: rising ? "below_horizon" : "above_horizon" }]
});
var DIORAMA_CONFIG = Object.freeze({
  color_mode: "theme",
  card_height: "176px",
  card_padding: "var(--ha-space-4, 16px)",
  content_align: "between",
  sun_moon_size: 40,
  sun_moon_x: "dynamic",
  cloud_effects: false,
  background_mode: "images",
  weather_image_path: "https://cdn.jsdelivr.net/gh/hazymorning/origami@main/dashboard/weather/diorama/light/",
  weather_image_path_dark: "https://cdn.jsdelivr.net/gh/hazymorning/origami@main/dashboard/weather/diorama/dark/",
  weather_image_type: "webp",
  weather_image_front: true,
  background_color: "#e2e5e7",
  background_color_dark: "#1b1e20",
  background_thresholds: thresholds(DIORAMA_PAPER),
  shadow_color: "inset 0 1px 3px rgba(0, 0, 0, 0.16), inset 0 -1px 0 rgba(255, 255, 255, 0.14)",
  card_tap_action: { action: "more-info" },
  css: `:host {
  --origami-text-light: var(--primary-text-color);
  --origami-text-dark: var(--primary-text-color);
  --origami-separator-width: 1px;
  --origami-separator-color: color-mix(in srgb, currentColor 18%, transparent);
}
#weather-bg > img { object-position: left bottom; }
#weather-effects { filter: saturate(0.6); }`,
  button_containers: [
    {
      name: "Temperature",
      justify_content: "end",
      buttons: [
        {
          name: "Temperature and condition",
          entity: PRESET_ENTITY_TOKEN,
          attribute: "temperature",
          style: "vertical",
          align: "end",
          inner_gap: "6px",
          background: false,
          elements: [
            text({ size: "40px", weight: "700", precision: 0, format: "\xB0" }),
            text({ entity: PRESET_ENTITY_TOKEN, size: "11px", weight: "500" })
          ]
        }
      ]
    },
    {
      name: "Info bar",
      grouped: true,
      background: true,
      blurred_background: true,
      separator: true,
      background_color: "color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 40%, transparent)",
      layout: "horizontal-scroll",
      scroll_fade: true,
      gap: "0px",
      padding: "8px 4px",
      button_padding: "2px 12px",
      button_text_size: "12px",
      button_icon_size: "14px",
      button_gap: "4px",
      buttons: [
        dioramaItem("weather", "Today", [
          text({ attribute: "temperature", format: "\xB0", weight: "700" }),
          text({ text: "/", weight: "500" }),
          text({ attribute: "templow", format: "\xB0", weight: "700" })
        ], { forecast: "daily" }),
        dioramaItem("mdi:weather-windy", "Wind", [text({ attribute: "wind_speed", precision: 0, weight: "700" })]),
        dioramaSun(false),
        dioramaSun(true),
        dioramaItem("mdi:water-percent", "Humidity", [text({ attribute: "humidity", weight: "700" })]),
        dioramaItem("mdi:sun-wireless-outline", "UV", [text({ attribute: "uv_index", weight: "700" })], { forecast: "daily" })
      ]
    }
  ],
  grid_options: {
    rows: "auto",
    columns: "full"
  }
});
var CLASSIC_COLORS = [
  ["sunny", "#4a8bcb", "#1c2b49"],
  ["clear-night", "#1c2b49", "#1c2b49"],
  ["partlycloudy", "#5687b8", "#273449"],
  ["cloudy", "#6e8196", "#303740"],
  ["fog", "#80898f", "#3b4044"],
  ["windy", "#4d8a90", "#233b3e"],
  ["windy-variant", "#56869c", "#273a44"],
  ["rainy", "#566a80", "#272f3a"],
  ["pouring", "#465669", "#1e252f"],
  ["lightning", "#575370", "#282636"],
  ["lightning-rainy", "#4c4965", "#211f2d"],
  ["hail", "#5a7888", "#29363d"],
  ["snowy", "#7890a6", "#384551"],
  ["snowy-rainy", "#677d91", "#313b44"],
  ["exceptional", "#ad633b", "#472d1f"]
];
var WHITE = "#ffffff";
var WHITE_82 = "rgba(255, 255, 255, 0.82)";
var WHITE_72 = "rgba(255, 255, 255, 0.72)";
var WHITE_60 = "rgba(255, 255, 255, 0.6)";
var classicDay = (offset) => ({
  name: offset === 1 ? "Tomorrow" : `In ${offset} days`,
  entity: PRESET_ENTITY_TOKEN,
  forecast: "daily",
  forecast_offset: offset,
  background: false,
  elements: [
    text({ attribute: "datetime", size: "12px", weight: "500", color: WHITE_72 }),
    icon("weather", { icon_size: "26px", color: WHITE }),
    text({ attribute: "temperature", format: "\xB0", size: "15px", weight: "700", color: WHITE }),
    text({ attribute: "templow", format: "\xB0", size: "14px", weight: "500", color: WHITE_60 }),
    { type: "bar", bar_height: "4px", bar_width: "26px", bar_color: "#9fd2ff", bar_values: [{ attribute: "precipitation_probability" }] }
  ]
});
var TODAY_SIZE = "clamp(12.5px, 5.1cqw, 14px)";
var classicToday = (name, iconName, attribute) => ({
  name,
  entity: PRESET_ENTITY_TOKEN,
  forecast: "daily",
  align: "start",
  background: false,
  inner_gap: "5px",
  elements: [
    icon(iconName, { icon_size: "14px", color: WHITE_82, margin: "0 -2.1px 0 -2px" }),
    text({ attribute, format: "\xB0", size: TODAY_SIZE, weight: "500", color: WHITE_82 })
  ]
});
var CLASSIC_CONFIG = Object.freeze({
  color_mode: "dark",
  sun_enabled: false,
  moon_enabled: false,
  cloud_effects: false,
  bird_effects: false,
  balloon_effects: false,
  plane_effects: false,
  background_mode: "color",
  background_color: "#5687b8",
  background_color_dark: "#273449",
  background_thresholds: thresholds(CLASSIC_COLORS),
  background_haze: true,
  gradient: true,
  gradient_type: "linear",
  gradient_color_1: "rgba(255, 255, 255, 0.08)",
  gradient_color_2: "rgba(255, 255, 255, 0)",
  gradient_stop_2: 70,
  card_height: "content",
  card_padding: "22px",
  button_containers: [
    {
      name: "Now",
      justify_content: "between",
      align_items: "center",
      padding: "0 4px",
      buttons: [
        { name: "Temperature", entity: PRESET_ENTITY_TOKEN, attribute: "temperature", background: false, elements: [text({ size: "52px", weight: "700", precision: 0, format: "\xB0", color: WHITE })] },
        { name: "Weather icon", entity: PRESET_ENTITY_TOKEN, background: false, elements: [icon("weather", { icon_size: "48px", color: WHITE, margin: "0 -2.4px 0 0" })] }
      ]
    },
    {
      name: "Today",
      align: "spread",
      align_items: "center",
      gap: "clamp(10px, 4.2cqw, 14px)",
      margin: "4px 0 0",
      padding: "0 4px",
      buttons: [
        classicToday("High", "mdi:arrow-up", "temperature"),
        classicToday("Low", "mdi:arrow-down", "templow"),
        { name: "Condition", entity: PRESET_ENTITY_TOKEN, background: false, elements: [text({ size: TODAY_SIZE, weight: "500", color: WHITE })] }
      ]
    },
    {
      name: "Forecast",
      layout: "horizontal-scroll",
      scroll_count: 5,
      margin: "20px 0 0",
      padding: "14px 4px",
      gap: "0",
      background: true,
      grouped: true,
      blurred_background: true,
      shadow: false,
      background_color: "rgba(255, 255, 255, 0.12)",
      button_style: "vertical",
      button_gap: "6px",
      button_padding: "0",
      align: "center",
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(classicDay)
    }
  ],
  grid_options: {
    rows: "auto",
    columns: 12
  }
});
var CENTERED_ICON_SPACE = {
  "mdi:arrow-up": "0 -2px 0 -1.8px",
  "mdi:arrow-down": "0 -2px 0 -1.8px",
  "mdi:weather-windy": "0 1px 0 -1.5px"
};
var centeredItem = (name, iconName, value, extra) => ({
  name,
  entity: PRESET_ENTITY_TOKEN,
  background: false,
  style: "inline",
  align: "center",
  padding: "0",
  ...extra,
  elements: [icon(iconName, { icon_background: false, margin: CENTERED_ICON_SPACE[iconName] }), text(value)]
});
var CENTERED_CONFIG = Object.freeze({
  sun_moon_x: "dynamic",
  card_height: "content",
  card_padding: "34px 20px",
  content_align: "between",
  content_align_items: "center",
  button_containers: [
    {
      name: "Temperature",
      padding: "0",
      margin: "0 0 24px 0",
      align: "center",
      buttons: [
        {
          name: "Temperature and condition",
          entity: PRESET_ENTITY_TOKEN,
          background: false,
          style: "vertical",
          align: "center",
          text_size: "58px",
          inner_gap: "0px",
          padding: "0",
          elements: [
            text({ weight: "700", attribute: "temperature", precision: 0, fancy_unit: true }),
            text({ size: "15px", weight: "500", entity: PRESET_ENTITY_TOKEN, margin: "-3.5px 0 -1.5px" })
          ]
        }
      ]
    },
    {
      name: "Details",
      gap: "clamp(11px, 5.5cqw, 18px)",
      margin: "0 0 7px",
      padding: "0",
      button_padding: "0",
      button_gap: "5px",
      button_icon_size: "15px",
      button_text_size: "13px",
      align: "center",
      justify_content: "center",
      buttons: [
        centeredItem("High", "mdi:arrow-up", { weight: "500", attribute: "temperature", format: "\xB0" }, { forecast: "daily" }),
        centeredItem("Low", "mdi:arrow-down", { weight: "500", attribute: "templow", format: "\xB0" }, { forecast: "daily" }),
        centeredItem("Wind", "mdi:weather-windy", { weight: "700", attribute: "wind_speed", precision: 0 })
      ]
    }
  ],
  grid_options: {
    rows: "auto",
    columns: 12
  }
});
var HOME_SKY = [
  ["sunny", "#e7e2d9", "#24211d"],
  ["clear-night", "#dbdce1", "#15181f"],
  ["partlycloudy", "#e0deda", "#1c2023"],
  ["cloudy", "#d3d4d6", "#222324"],
  ["fog", "#e6e6e5", "#272829"],
  ["windy", "#dadfdd", "#1c201e"],
  ["windy-variant", "#d5dad9", "#1a1f1e"],
  ["rainy", "#cdd2d6", "#181e22"],
  ["pouring", "#c8cdd2", "#14191e"],
  ["lightning", "#cfced3", "#1c1b21"],
  ["lightning-rainy", "#cacacf", "#18171e"],
  ["snowy", "#e6eaed", "#252b2e"],
  ["snowy-rainy", "#d8dddf", "#1f2527"],
  ["hail", "#d2d9da", "#1c2324"],
  ["exceptional", "#ded8d2", "#27221f"]
];
var homeText = (extra, size = "12px", weight = "500") => text({ size, weight, color: "var(--primary-text-color)", ...extra });
var homeLabel = (extra, size = "12px") => homeText({ ...extra, color: "var(--secondary-text-color)" }, size);
var homeTemp = (size, weight) => homeText({ precision: 0, format: "\xB0" }, size, weight);
var sunTime = (state, label, attribute) => ({
  name: state === "above_horizon" ? `${label} (by day)` : `${label} (at night)`,
  entity: "sun.sun",
  attribute,
  inner_gap: "6px",
  visibility: [{ condition: "state", entity: "sun.sun", state }],
  elements: [homeLabel({ text: label }), homeText({}, "12px", "700")]
});
var room = (label) => ({
  name: `Room: ${label}`,
  entity: PRESET_ENTITY_TOKEN,
  attribute: "temperature",
  style: "vertical",
  align: "start",
  elements: [homeLabel({ text: label }), homeTemp("16px", "700")]
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
  ring_marker_icon_size: 11,
  ring_values: [
    { value: 0, marker_size: 12, marker_color: "var(--origami-card-bg-color, var(--ha-card-background, var(--card-background-color)))", marker_icon: "mdi:alpha-n", marker_icon_color: "var(--secondary-text-color)" },
    { attribute: "wind_bearing", marker_size: 7, marker_color: "var(--primary-text-color)" }
  ],
  background: false,
  width: "54px",
  padding: "0",
  inner_gap: "1px",
  elements: [homeText({ attribute: "wind_speed", precision: 0, format: " " }, "15px", "700"), homeLabel({ attribute: "wind_speed_unit" }, "9px")]
});
var HOME_CONFIG = Object.freeze({
  sun_enabled: false,
  moon_enabled: false,
  cloud_effects: false,
  night_sky_effects: false,
  bird_effects: false,
  balloon_effects: false,
  plane_effects: false,
  background_mode: "color",
  background_thresholds: thresholds(HOME_SKY),
  card_height: "256px",
  card_padding: "20px",
  content_align: "between",
  button_containers: [
    {
      name: "House",
      position: "custom",
      position_anchor: "top-right",
      position_x: "34px",
      position_y: "18px",
      image: "home",
      custom_width: "min(178px, 75% - 49px)"
    },
    {
      name: "Sun and wind",
      justify_content: "between",
      align_items: "start",
      buttons: [sunTime("above_horizon", "Sunset", "next_setting"), sunTime("below_horizon", "Sunrise", "next_rising"), windCompass()]
    },
    {
      name: "Temperature and rooms",
      align: "spread",
      align_items: "end",
      gap: "clamp(14px, 6cqw, 22px)",
      button_gap: "4px",
      buttons: [
        {
          name: "Outside",
          entity: PRESET_ENTITY_TOKEN,
          attribute: "temperature",
          style: "split",
          inner_gap: "8px",
          elements: [homeTemp("clamp(40px, 17cqw, 56px)", "700"), homeLabel({ entity: PRESET_ENTITY_TOKEN, overflow: "wrap" })]
        },
        room("Living"),
        room("Office"),
        room("Bath")
      ]
    }
  ],
  grid_options: {
    rows: "auto",
    columns: 12
  }
});
var LAYOUT_PRESETS = Object.freeze([
  {
    id: "diorama",
    name: "Diorama",
    description: "Illustrated landscape",
    icon: "mdi:image-filter-hdr",
    config: DIORAMA_CONFIG
  },
  {
    id: "classic",
    name: "Classic",
    description: "Weather colors, daily forecast",
    icon: "mdi:view-dashboard-variant-outline",
    config: CLASSIC_CONFIG
  },
  {
    id: "centered",
    name: "Centered",
    description: "Animated sky, simple and clean",
    icon: "mdi:format-align-center",
    config: CENTERED_CONFIG
  },
  {
    id: "home",
    name: "Home",
    description: "Inside & outside, wind",
    icon: "mdi:home-outline",
    config: HOME_CONFIG
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
  const preset = LAYOUT_PRESETS.find((p) => p.id === "centered") || LAYOUT_PRESETS[0];
  return { weather_entity: entity, ...instantiatePreset(preset, entity) };
};

export {
  PRESET_ENTITY_TOKEN,
  LAYOUT_PRESETS,
  rebindPresetEntities,
  instantiatePreset,
  buildStubConfig
};
