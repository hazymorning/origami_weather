var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e4) {
    throw err = [e4], e4;
  }
};

// src/layout-presets.js
var PRESET_ENTITY_TOKEN, sunButton, SLIM_CONFIG, RING_THRESHOLDS, forecastButton, CLASSIC_CONFIG, metaItem, CENTERED_CONFIG, WEATHER_RGB, forecastTile, COMPARISON_CONFIG, arcText, arcSunButton, arcEnd, arcRing, ARC_CONFIG, HOME_SKY, homeText, homeLabel, homeTemp, sunTime, room, HOME_CONFIG, LAYOUT_PRESETS, deepClone, rebindPresetEntities, instantiatePreset, buildStubConfig;
var init_layout_presets = __esm({
  "src/layout-presets.js"() {
    PRESET_ENTITY_TOKEN = "__WEATHER__";
    sunButton = (rising) => ({
      entity: "sun.sun",
      elements: [
        { type: "icon", icon: rising ? "mdi:weather-sunset-up" : "mdi:weather-sunset-down" },
        { type: "text", attribute: rising ? "next_rising" : "next_setting", weight: "700" }
      ],
      visibility: [{ condition: "state", entity: "sun.sun", state: rising ? "below_horizon" : "above_horizon" }]
    });
    SLIM_CONFIG = Object.freeze({
      sun_moon_x: "dynamic",
      card_height: "content",
      card_padding: "16px",
      content_align: "between",
      content_align_items: "start",
      button_containers: [
        {
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              elements: [
                { type: "icon", icon: "weather", icon_background: false, margin: "0 2px 0 0" },
                { type: "text", precision: 0, entity: PRESET_ENTITY_TOKEN, attribute: "temperature", weight: "700", fancy_unit: true }
              ],
              style: "inline"
            }
          ],
          padding: "4px",
          button_text_size: "26px",
          margin: "0 0 32px 0",
          button_gap: "6px",
          button_style: "vertical"
        },
        {
          background: true,
          gap: "8px",
          button_gap: "6px",
          button_icon_size: "14px",
          button_padding: "8px 12px 8px 10px",
          align: "center",
          button_text_size: "12px",
          background_color: "rgba(255,255,255,0.1)",
          blurred_background: true,
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              elements: [
                { type: "text", text: "Today", weight: "500" },
                { type: "icon", icon: "weather" },
                { type: "text", format: "\xB0", weight: "700", attribute: "temperature" }
              ],
              style: "inline",
              forecast: "daily"
            },
            {
              entity: PRESET_ENTITY_TOKEN,
              elements: [
                { type: "icon", icon: "mdi:weather-windy" },
                { type: "text", attribute: "wind_speed", format: " km/h", weight: "700" }
              ],
              style: "inline"
            },
            sunButton(true),
            sunButton(false),
            {
              entity: PRESET_ENTITY_TOKEN,
              elements: [
                { type: "icon", icon: "mdi:water-percent" },
                { type: "text", weight: "700", attribute: "humidity", format: " %" }
              ],
              style: "inline"
            },
            {
              entity: PRESET_ENTITY_TOKEN,
              elements: [
                { type: "icon", icon: "mdi:sun-wireless-outline" },
                { type: "text", text: "UV-Index", weight: "500" },
                { type: "text", attribute: "uv_index", weight: "700" }
              ],
              forecast: "daily"
            }
          ],
          button_background_color: "rgba(189,189,189,0.2)",
          layout: "horizontal-scroll",
          scroll_fade: true
        }
      ],
      grid_options: {
        rows: "auto",
        columns: 12
      }
    });
    RING_THRESHOLDS = Object.freeze([
      { value: "-20", color: "rgba(124, 142, 184, 0.8)" },
      { value: "-16", color: "rgba(132, 156, 196, 0.8)" },
      { value: "-12", color: "rgba(140, 172, 206, 0.8)" },
      { value: "-8", color: "rgba(150, 188, 214, 0.8)" },
      { value: "-4", color: "rgba(165, 202, 218, 0.8)" },
      { value: "0", color: "rgba(183, 213, 216, 0.8)" },
      { value: "4", color: "rgba(198, 218, 205, 0.8)" },
      { value: "8", color: "rgba(206, 218, 188, 0.8)" },
      { value: "12", color: "rgba(214, 214, 168, 0.8)" },
      { value: "16", color: "rgba(224, 207, 152, 0.8)" },
      { value: "20", color: "rgba(232, 195, 140, 0.8)" },
      { value: "24", color: "rgba(232, 178, 130, 0.8)" },
      { value: "28", color: "rgba(228, 158, 124, 0.8)" },
      { value: "32", color: "rgba(220, 138, 120, 0.8)" },
      { value: "36", color: "rgba(208, 120, 118, 0.8)" },
      { value: "40", color: "rgba(194, 104, 114, 0.8)" }
    ]);
    forecastButton = (offset) => ({
      entity: PRESET_ENTITY_TOKEN,
      forecast: "daily",
      ...offset ? { forecast_offset: offset } : {},
      elements: [
        { type: "icon", icon: "weather" },
        { type: "text", size: "12px", weight: "500", attribute: "datetime" },
        { type: "text", weight: "700", attribute: "temperature" },
        { type: "text", weight: "500", attribute: "templow" }
      ]
    });
    CLASSIC_CONFIG = Object.freeze({
      sun_moon_x: "dynamic",
      card_height: "content",
      card_padding: "16px",
      gradient: true,
      gradient_color_2: "var(--ha-card-background)",
      gradient_stop_2: 70,
      button_containers: [
        {
          position: "custom",
          position_anchor: "top-left",
          padding: "4px 8px",
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              attribute: "temperature",
              text_size: "42px",
              align: "start",
              padding: "4px 0 0 0",
              background: false,
              elements: [
                { type: "text", weight: "700", fancy_unit: true, attribute: "temperature", precision: 0 }
              ]
            }
          ]
        },
        {
          background: true,
          button_icon_size: "34px",
          button_padding: "16px",
          align: "center",
          button_background_color: "rgba(255,255,255,0.1)",
          button_blurred_background: true,
          justify_content: "end",
          align_items: "start",
          padding: "8px",
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              attribute: "temperature",
              type: "ring",
              ring_gap: "6px",
              ring_width: "4px",
              ring_min: "-20",
              ring_max: "40",
              ring_threshold_mode: "gradient",
              ring_thresholds: RING_THRESHOLDS.map((t3) => ({ ...t3 })),
              blurred_background: true,
              padding: "16px",
              elements: [
                { type: "icon", icon: "weather", icon_background: false, icon_background_color: "rgba(0,0,0,0)", icon_size: "36px" }
              ]
            }
          ]
        },
        {
          gap: "16px",
          button_gap: "6px",
          button_padding: "0",
          align: "start",
          button_text_size: "14px",
          padding: "0 0 16px 8px",
          margin: "-14px 0 0 0",
          buttons: [
            sunButton(true),
            sunButton(false),
            {
              entity: PRESET_ENTITY_TOKEN,
              forecast: "daily",
              elements: [
                { type: "icon", icon: "mdi:umbrella-outline" },
                { type: "text", attribute: "precipitation_probability", weight: "700" }
              ]
            }
          ]
        },
        {
          layout: "horizontal-scroll",
          scroll_count: 5,
          gap: "2px",
          button_icon_background_color: "rgba(255,255,255,0.05)",
          button_style: "vertical",
          button_gap: "6px",
          button_icon_size: "28px",
          button_padding: "16px 0",
          align: "center",
          button_text_size: "14px",
          background_color: "rgba(255,255,255,0.05)",
          blurred_background: true,
          button_background_color: "rgba(255,255,255,0.1)",
          button_icon_padding: "0 0 6px 0",
          separator: true,
          shadow: false,
          buttons: [0, 1, 2, 3, 4, 5, 6].map(forecastButton)
        }
      ],
      grid_options: {
        rows: "auto",
        columns: 12
      }
    });
    metaItem = (icon, attribute, weight, forecast) => ({
      entity: PRESET_ENTITY_TOKEN,
      ...forecast ? { forecast: "daily" } : {},
      background: false,
      style: "inline",
      align: "center",
      padding: "0",
      elements: [
        { type: "icon", icon, icon_background: false },
        { type: "text", weight, attribute, ...forecast ? { format: "\xB0" } : {} }
      ]
    });
    CENTERED_CONFIG = Object.freeze({
      sun_moon_x: "dynamic",
      card_height: "content",
      card_padding: "24px 20px",
      content_align: "between",
      content_align_items: "center",
      button_containers: [
        {
          padding: "0",
          margin: "0 0 24px 0",
          align: "center",
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              background: false,
              style: "vertical",
              align: "center",
              text_size: "58px",
              padding: "0",
              elements: [
                { type: "text", weight: "700", attribute: "temperature", precision: 0, fancy_unit: true },
                { type: "text", size: "15px", weight: "500", entity: PRESET_ENTITY_TOKEN }
              ]
            }
          ]
        },
        {
          gap: "18px",
          padding: "0",
          button_padding: "0",
          button_gap: "5px",
          button_icon_size: "15px",
          button_text_size: "13px",
          align: "center",
          justify_content: "center",
          buttons: [
            metaItem("mdi:arrow-up", "temperature", "700", true),
            metaItem("mdi:arrow-down", "templow", "500", true),
            metaItem("mdi:weather-windy", "wind_speed", "700", false),
            { ...metaItem("mdi:water-percent", "humidity", "700", false), elements: [
              { type: "icon", icon: "mdi:water-percent", icon_background: false },
              { type: "text", weight: "700", attribute: "humidity", format: " %" }
            ] }
          ]
        }
      ],
      grid_options: {
        rows: "auto",
        columns: 12
      }
    });
    WEATHER_RGB = Object.freeze([
      ["sunny", 80, "245,185,70"],
      ["clear-night", 80, "80,90,180"],
      ["partlycloudy", 82, "120,175,225"],
      ["cloudy", 84, "145,155,175"],
      ["fog", 84, "185,185,200"],
      ["windy", 84, "90,190,175"],
      ["windy-variant", 84, "110,170,200"],
      ["rainy", 80, "70,130,200"],
      ["pouring", 76, "45,95,190"],
      ["lightning", 80, "150,105,220"],
      ["lightning-rainy", 76, "115,85,205"],
      ["hail", 80, "100,185,210"],
      ["snowy", 80, "180,215,245"],
      ["snowy-rainy", 80, "135,175,215"],
      ["exceptional", 76, "230,95,65"]
    ]);
    forecastTile = (offset) => ({
      entity: PRESET_ENTITY_TOKEN,
      forecast: "daily",
      ...offset ? { forecast_offset: offset } : {},
      align: "center",
      background_color: `rgba(150,150,150,${(14 - 2 * offset) / 100})`,
      elements: [
        { type: "icon", icon: "weather" },
        { type: "text", size: "12px", weight: "500", attribute: "datetime" },
        { type: "text", weight: "700", attribute: "temperature", format: "\xB0" }
      ]
    });
    COMPARISON_CONFIG = Object.freeze({
      sun_enabled: false,
      moon_enabled: false,
      sun_moon_x: "dynamic",
      card_height: "content",
      card_padding: "20px",
      card_offset: "8px 0px 0px 0px",
      color_mode: "theme",
      background_mode: "color",
      background_threshold_entity: PRESET_ENTITY_TOKEN,
      background_thresholds: WEATHER_RGB.map(([value, base, rgb]) => ({ value, color: `color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) ${base}%, rgb(${rgb}))` })),
      background_haze: false,
      precipitation_effects: false,
      cloud_effects: false,
      night_sky_effects: false,
      button_containers: [
        {
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              background: false,
              padding: "0",
              style: "vertical",
              align: "start",
              inner_gap: "6px",
              elements: [
                { type: "text", text: "Outside", size: "14px", weight: "500" },
                { type: "text", attribute: "temperature", precision: 0, format: "\xB0", size: "42px", weight: "800" }
              ]
            }
          ]
        },
        {
          position: "custom",
          position_anchor: "top-right",
          layout: "horizontal-scroll",
          custom_width: "60%",
          scroll_count: 3,
          gap: "8px",
          background: true,
          button_style: "vertical",
          button_padding: "16px",
          button_icon_size: "26px",
          button_icon_padding: "0 0 8px 0",
          button_shadow: false,
          button_blurred_background: true,
          buttons: [0, 1, 2, 3].map(forecastTile)
        },
        {
          padding: "0",
          margin: "66px 0 8px 0",
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              forecast: "daily",
              background: false,
              padding: "0",
              width: "100%",
              elements: [
                {
                  type: "bar",
                  bar_min: "-10",
                  bar_max: "35",
                  bar_height: "2px",
                  bar_color: "rgba(150,150,150,0.6)",
                  bar_marker_size: "10px",
                  bar_values: [
                    { entity: PRESET_ENTITY_TOKEN, attribute: "temperature", marker_color: "#ffffff" },
                    { attribute: "temperature" }
                  ]
                }
              ]
            }
          ]
        },
        {
          padding: "0 4px",
          margin: "12px 0 0 0",
          align: "start",
          button_text_size: "16px",
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              background: false,
              padding: "0",
              align: "spread",
              elements: [
                { type: "icon", icon: "weather", padding: "0 4px 0 0" },
                { type: "text", weight: "700", margin: "0 auto 0 0" }
              ]
            },
            {
              entity: PRESET_ENTITY_TOKEN,
              forecast: "daily",
              background: false,
              padding: "0",
              align: "spread",
              elements: [
                { type: "icon", icon: "mdi:umbrella-outline", margin: "0 0 0 auto" },
                { type: "text", attribute: "precipitation_probability", format: " %", weight: "400" }
              ]
            }
          ]
        }
      ],
      grid_options: {
        rows: "auto",
        columns: 12
      }
    });
    arcText = (value, extra) => ({ type: "text", ...extra, size: value ? "clamp(24px, 8cqmin, 36px)" : "clamp(13px, 3.5cqmin, 16px)", weight: value ? "700" : "500" });
    arcSunButton = (rising) => ({
      ...sunButton(rising),
      background: false,
      elements: [
        arcText(true, { attribute: rising ? "next_rising" : "next_setting" }),
        arcText(false, { text: rising ? "Sunrise" : "Sunset" })
      ]
    });
    arcEnd = (rising) => ({ entity: rising ? "sensor.sun_next_rising" : "sensor.sun_next_setting", marker_size: "26", marker_color: "rgba(0,0,0,0.8)", marker_icon: rising ? "mdi:weather-sunset-up" : "mdi:weather-sunset-down", marker_icon_color: "#ffffff" });
    arcRing = (rising) => {
      const from = arcEnd(!rising), to = arcEnd(rising);
      return {
        ...sunButton(rising),
        type: "ring",
        width: "68cqmin",
        background: false,
        ring_min: from.entity,
        ring_max: to.entity,
        ring_start: 240,
        ring_arc: 240,
        ring_width: "4",
        ring_color: "color-mix(in srgb, currentColor 40%, transparent)",
        ring_values: [
          { entity: "sensor.time", marker_size: 0 },
          from,
          to,
          { entity: "sensor.time", marker_size: "40", marker_color: "#ffffff", marker_icon: rising ? "mdi:weather-night" : "mdi:white-balance-sunny", marker_icon_color: "#2c2c2e" }
        ],
        elements: [
          { type: "text", text: " " }
        ]
      };
    };
    ARC_CONFIG = Object.freeze({
      sun_moon_size: 100,
      sun_moon_y: 44,
      card_height: "auto",
      card_padding: "0",
      bird_effects: false,
      balloon_effects: false,
      plane_effects: false,
      button_containers: [
        {
          position: "custom",
          position_anchor: "top",
          position_y: "10cqh",
          buttons: [arcRing(false), arcRing(true)]
        },
        {
          position: "custom",
          position_anchor: "bottom-left",
          position_x: "7cqw",
          position_y: "7cqh",
          padding: "0",
          button_style: "vertical",
          button_padding: "0",
          button_gap: "8px",
          buttons: [
            {
              entity: PRESET_ENTITY_TOKEN,
              background: false,
              elements: [
                arcText(true, { attribute: "temperature", precision: 0, format: "\xB0" }),
                arcText(false)
              ]
            }
          ]
        },
        {
          position: "custom",
          position_anchor: "bottom-right",
          position_x: "7cqw",
          position_y: "7cqh",
          align: "end",
          padding: "0",
          button_style: "vertical",
          button_padding: "0",
          button_gap: "8px",
          buttons: [arcSunButton(false), arcSunButton(true)]
        }
      ],
      grid_options: {
        columns: 12,
        rows: 6
      }
    });
    HOME_SKY = [
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
    homeText = (extra, size = "12px", weight = "500") => ({ type: "text", size, weight, color: "var(--primary-text-color)", ...extra });
    homeLabel = (text) => homeText({ text, color: "var(--secondary-text-color)" });
    homeTemp = (size, weight) => homeText({ attribute: "temperature", precision: 0, format: "\xB0" }, size, weight);
    sunTime = (state, text, attribute) => ({
      entity: "sun.sun",
      visibility: [{ condition: "state", entity: "sun.sun", state }],
      elements: [homeLabel(text), homeText({ entity: "sun.sun", attribute })]
    });
    room = (text) => ({
      entity: PRESET_ENTITY_TOKEN,
      style: "vertical",
      align: "start",
      elements: [homeLabel(text), homeTemp("16px", "300")]
    });
    HOME_CONFIG = Object.freeze({
      sun_enabled: false,
      moon_enabled: false,
      cloud_effects: false,
      night_sky_effects: false,
      bird_effects: false,
      balloon_effects: false,
      plane_effects: false,
      background_mode: "color",
      background_threshold_entity: PRESET_ENTITY_TOKEN,
      background_thresholds: HOME_SKY.map(([value, color, color_dark]) => ({ value, color, color_dark })),
      card_height: "260px",
      card_padding: "20px",
      button_containers: [
        {
          position: "custom",
          position_anchor: "right",
          image: "demo-home-image",
          custom_width: "min(208px, 52%)"
        },
        {
          position: "custom",
          position_anchor: "top-left",
          button_gap: "6px",
          buttons: [sunTime("above_horizon", "Sunset", "next_setting"), sunTime("below_horizon", "Sunrise", "next_rising")]
        },
        {
          position: "custom",
          position_anchor: "bottom-left",
          gap: "5px",
          buttons: [
            { entity: PRESET_ENTITY_TOKEN, width: "100%", elements: [homeTemp("68px", "200")] },
            { entity: PRESET_ENTITY_TOKEN, elements: [homeText()] }
          ]
        },
        {
          position: "custom",
          position_anchor: "bottom-right",
          gap: "22px",
          button_gap: "4px",
          buttons: [room("Living"), room("Bedroom"), room("Bath")]
        },
        {
          position: "custom",
          position_anchor: "top-right",
          buttons: [
            {
              entity: "sun.sun",
              type: "ring",
              ring_start: 25,
              ring_needle: true,
              ring_width: 1,
              ring_color: "var(--secondary-text-color)",
              ring_marker_size: 12,
              ring_marker_icon_size: 16,
              ring_values: [{ value: 0, marker_icon: "mdi:alpha-n", marker_icon_color: "var(--primary-text-color)" }],
              padding: "9px",
              elements: [{ type: "icon", icon: "mdi:circle-small", icon_size: "12px", color: "var(--secondary-text-color)" }]
            }
          ]
        }
      ],
      grid_options: {
        rows: "auto",
        columns: 12
      }
    });
    LAYOUT_PRESETS = Object.freeze([
      {
        id: "slim",
        name: "Slim",
        description: "Small buttons",
        icon: "mdi:view-compact-outline",
        config: SLIM_CONFIG
      },
      {
        id: "classic",
        name: "Classic",
        description: "Daily forecast",
        icon: "mdi:view-dashboard-variant-outline",
        config: CLASSIC_CONFIG
      },
      {
        id: "home",
        name: "Home",
        description: "Inside & outside",
        icon: "mdi:home-outline",
        config: HOME_CONFIG
      },
      {
        id: "centered",
        name: "Centered",
        description: "Simple and clean",
        icon: "mdi:format-align-center",
        config: CENTERED_CONFIG
      },
      {
        id: "comparison",
        name: "Comparison",
        description: "Lots of info",
        icon: "mdi:compare-horizontal",
        config: COMPARISON_CONFIG
      },
      {
        id: "arc",
        name: "Arc",
        description: "Sunrise to sunset",
        icon: "mdi:weather-sunset",
        config: ARC_CONFIG
      }
    ]);
    deepClone = (value) => {
      if (Array.isArray(value)) return value.map(deepClone);
      if (value && typeof value === "object") {
        const out = {};
        for (const k2 of Object.keys(value)) out[k2] = deepClone(value[k2]);
        return out;
      }
      return value;
    };
    rebindPresetEntities = (value, entity) => {
      if (Array.isArray(value)) return value.map((v2) => rebindPresetEntities(v2, entity));
      if (value && typeof value === "object") {
        const out = {};
        for (const k2 of Object.keys(value)) out[k2] = rebindPresetEntities(value[k2], entity);
        return out;
      }
      if (value === PRESET_ENTITY_TOKEN) return entity;
      return value;
    };
    instantiatePreset = (preset, entity) => rebindPresetEntities(deepClone(preset.config), entity);
    buildStubConfig = (hass) => {
      const entity = hass ? Object.keys(hass.states).find((e4) => e4.startsWith("weather.")) || "weather.home" : "weather.home";
      return { weather_entity: entity, ...instantiatePreset(LAYOUT_PRESETS[0], entity) };
    };
  }
});

// node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "node_modules/@lit/reactive-element/css-tag.js"() {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = /* @__PURE__ */ Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e4, o5) {
        if (this._$cssResult$ = true, o5 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e4;
      }
      get styleSheet() {
        let t3 = this.o;
        const s4 = this.t;
        if (e && void 0 === t3) {
          const e4 = void 0 !== s4 && 1 === s4.length;
          e4 && (t3 = o.get(s4)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o.set(s4, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e4) => {
      const o5 = 1 === t3.length ? t3[0] : e4.reduce((e5, s4, o6) => e5 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s4) + t3[o6 + 1], t3[0]);
      return new n(o5, t3, s);
    };
    S = (s4, o5) => {
      if (e) s4.adoptedStyleSheets = o5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e4 of o5) {
        const o6 = document.createElement("style"), n4 = t.litNonce;
        void 0 !== n4 && o6.setAttribute("nonce", n4), o6.textContent = e4.cssText, s4.appendChild(o6);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e4 = "";
      for (const s4 of t4.cssRules) e4 += s4.cssText;
      return r(e4);
    })(t3) : t3;
  }
});

// node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s4) => t3;
    u = { toAttribute(t3, s4) {
      switch (s4) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s4) {
      let i5 = t3;
      switch (s4) {
        case Boolean:
          i5 = null !== t3;
          break;
        case Number:
          i5 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i5 = JSON.parse(t3);
          } catch (t4) {
            i5 = null;
          }
      }
      return i5;
    } };
    f = (t3, s4) => !i2(t3, s4);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s4 = b) {
        if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t3, s4), !s4.noAccessor) {
          const i5 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t3, i5, s4);
          void 0 !== h3 && e2(this.prototype, t3, h3);
        }
      }
      static getPropertyDescriptor(t3, s4, i5) {
        const { get: e4, set: r4 } = h(this.prototype, t3) ?? { get() {
          return this[s4];
        }, set(t4) {
          this[s4] = t4;
        } };
        return { get: e4, set(s5) {
          const h3 = e4?.call(this);
          r4?.call(this, s5), this.requestUpdate(t3, h3, i5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s4 = [...r2(t4), ...o2(t4)];
          for (const i5 of s4) this.createProperty(i5, t4[i5]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s4 = litPropertyMetadata.get(t3);
          if (void 0 !== s4) for (const [t4, i5] of s4) this.elementProperties.set(t4, i5);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s4] of this.elementProperties) {
          const i5 = this._$Eu(t4, s4);
          void 0 !== i5 && this._$Eh.set(i5, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s4) {
        const i5 = [];
        if (Array.isArray(s4)) {
          const e4 = new Set(s4.flat(1 / 0).reverse());
          for (const s5 of e4) i5.unshift(c(s5));
        } else void 0 !== s4 && i5.push(c(s4));
        return i5;
      }
      static _$Eu(t3, s4) {
        const i5 = s4.attribute;
        return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
        for (const i5 of s4.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s4, i5) {
        this._$AK(t3, i5);
      }
      _$ET(t3, s4) {
        const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
        if (void 0 !== e4 && true === i5.reflect) {
          const h3 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
          this._$Em = t3, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
        }
      }
      _$AK(t3, s4) {
        const i5 = this.constructor, e4 = i5._$Eh.get(t3);
        if (void 0 !== e4 && this._$Em !== e4) {
          const t4 = i5.getPropertyOptions(e4), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e4;
          const r4 = h3.fromAttribute(s4, t4.type);
          this[e4] = r4 ?? this._$Ej?.get(e4) ?? r4, this._$Em = null;
        }
      }
      requestUpdate(t3, s4, i5, e4 = false, h3) {
        if (void 0 !== t3) {
          const r4 = this.constructor;
          if (false === e4 && (h3 = this[t3]), i5 ??= r4.getPropertyOptions(t3), !((i5.hasChanged ?? f)(h3, s4) || i5.useDefault && i5.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(r4._$Eu(t3, i5)))) return;
          this.C(t3, s4, i5);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s4, { useDefault: i5, reflect: e4, wrapped: h3 }, r4) {
        i5 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r4 ?? s4 ?? this[t3]), true !== h3 || void 0 !== r4) || (this._$AL.has(t3) || (this.hasUpdated || i5 || (s4 = void 0), this._$AL.set(t3, s4)), true === e4 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s5] of this._$Ep) this[t5] = s5;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s5, i5] of t4) {
            const { wrapped: t5 } = i5, e4 = this[s5];
            true !== t5 || this._$AL.has(s5) || void 0 === e4 || this.C(s5, void 0, i5, e4);
          }
        }
        let t3 = false;
        const s4 = this._$AL;
        try {
          t3 = this.shouldUpdate(s4), t3 ? (this.willUpdate(s4), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s4)) : this._$EM();
        } catch (s5) {
          throw t3 = false, this._$EM(), s5;
        }
        t3 && this._$AE(s4);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// node_modules/lit-html/lit-html.js
function V(t3, i5) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i5) : i5;
}
function M(t3, i5, s4 = t3, e4) {
  if (i5 === E) return i5;
  let h3 = void 0 !== e4 ? s4._$Co?.[e4] : s4._$Cl;
  const o5 = a2(i5) ? void 0 : i5._$litDirective$;
  return h3?.constructor !== o5 && (h3?._$AO?.(false), void 0 === o5 ? h3 = void 0 : (h3 = new o5(t3), h3._$AT(t3, s4, e4)), void 0 !== e4 ? (s4._$Co ??= [])[e4] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = M(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "node_modules/lit-html/lit-html.js"() {
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i5, ...s4) => ({ _$litType$: t3, strings: i5, values: s4 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = /* @__PURE__ */ Symbol.for("lit-noChange");
    A = /* @__PURE__ */ Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i5) => {
      const s4 = t3.length - 1, e4 = [];
      let n4, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = v;
      for (let i6 = 0; i6 < s4; i6++) {
        const s5 = t3[i6];
        let a3, u3, d3 = -1, f3 = 0;
        for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n4 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n4 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n4 = void 0);
        const x2 = c4 === p2 && t3[i6 + 1].startsWith("/>") ? " " : "";
        l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e4.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i6 : x2);
      }
      return [V(t3, l3 + (t3[s4] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e4];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i5 }, e4) {
        let r4;
        this.parts = [];
        let l3 = 0, a3 = 0;
        const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = N(t3, i5);
        if (this.el = _S.createElement(f3, e4), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r4 = P.nextNode()) && d3.length < u3; ) {
          if (1 === r4.nodeType) {
            if (r4.hasAttributes()) for (const t4 of r4.getAttributeNames()) if (t4.endsWith(h2)) {
              const i6 = v2[a3++], s4 = r4.getAttribute(t4).split(o3), e5 = /([.?@])?(.*)/.exec(i6);
              d3.push({ type: 1, index: l3, name: e5[2], strings: s4, ctor: "." === e5[1] ? I : "?" === e5[1] ? L : "@" === e5[1] ? z : H }), r4.removeAttribute(t4);
            } else t4.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r4.removeAttribute(t4));
            if (y2.test(r4.tagName)) {
              const t4 = r4.textContent.split(o3), i6 = t4.length - 1;
              if (i6 > 0) {
                r4.textContent = s2 ? s2.emptyScript : "";
                for (let s4 = 0; s4 < i6; s4++) r4.append(t4[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
                r4.append(t4[i6], c3());
              }
            }
          } else if (8 === r4.nodeType) if (r4.data === n3) d3.push({ type: 2, index: l3 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r4.data.indexOf(o3, t4 + 1)); ) d3.push({ type: 7, index: l3 }), t4 += o3.length - 1;
          }
          l3++;
        }
      }
      static createElement(t3, i5) {
        const s4 = l2.createElement("template");
        return s4.innerHTML = t3, s4;
      }
    };
    R = class {
      constructor(t3, i5) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i5 }, parts: s4 } = this._$AD, e4 = (t3?.creationScope ?? l2).importNode(i5, true);
        P.currentNode = e4;
        let h3 = P.nextNode(), o5 = 0, n4 = 0, r4 = s4[0];
        for (; void 0 !== r4; ) {
          if (o5 === r4.index) {
            let i6;
            2 === r4.type ? i6 = new k(h3, h3.nextSibling, this, t3) : 1 === r4.type ? i6 = new r4.ctor(h3, r4.name, r4.strings, this, t3) : 6 === r4.type && (i6 = new Z(h3, this, t3)), this._$AV.push(i6), r4 = s4[++n4];
          }
          o5 !== r4?.index && (h3 = P.nextNode(), o5++);
        }
        return P.currentNode = l2, e4;
      }
      p(t3) {
        let i5 = 0;
        for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t3, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t3[i5])), i5++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i5, s4, e4) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s4, this.options = e4, this._$Cv = e4?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i5 = this._$AM;
        return void 0 !== i5 && 11 === t3?.nodeType && (t3 = i5.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i5 = this) {
        t3 = M(this, t3, i5), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i5, _$litType$: s4 } = t3, e4 = "number" == typeof s4 ? this._$AC(t3) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
        if (this._$AH?._$AD === e4) this._$AH.p(i5);
        else {
          const t4 = new R(e4, this), s5 = t4.u(this.options);
          t4.p(i5), this.T(s5), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i5 = C.get(t3.strings);
        return void 0 === i5 && C.set(t3.strings, i5 = new S2(t3)), i5;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i5 = this._$AH;
        let s4, e4 = 0;
        for (const h3 of t3) e4 === i5.length ? i5.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i5[e4], s4._$AI(h3), e4++;
        e4 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i5.length = e4);
      }
      _$AR(t3 = this._$AA.nextSibling, s4) {
        for (this._$AP?.(false, true, s4); t3 !== this._$AB; ) {
          const s5 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s5;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i5, s4, e4, h3) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
      }
      _$AI(t3, i5 = this, s4, e4) {
        const h3 = this.strings;
        let o5 = false;
        if (void 0 === h3) t3 = M(this, t3, i5, 0), o5 = !a2(t3) || t3 !== this._$AH && t3 !== E, o5 && (this._$AH = t3);
        else {
          const e5 = t3;
          let n4, r4;
          for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r4 = M(this, e5[s4 + n4], i5, n4), r4 === E && (r4 = this._$AH[n4]), o5 ||= !a2(r4) || r4 !== this._$AH[n4], r4 === A ? t3 = A : t3 !== A && (t3 += (r4 ?? "") + h3[n4 + 1]), this._$AH[n4] = r4;
        }
        o5 && !e4 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i5, s4, e4, h3) {
        super(t3, i5, s4, e4, h3), this.type = 5;
      }
      _$AI(t3, i5 = this) {
        if ((t3 = M(this, t3, i5, 0) ?? A) === E) return;
        const s4 = this._$AH, e4 = t3 === A && s4 !== A || t3.capture !== s4.capture || t3.once !== s4.once || t3.passive !== s4.passive, h3 = t3 !== A && (s4 === A || e4);
        e4 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i5, s4) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i5, s4) => {
      const e4 = s4?.renderBefore ?? i5;
      let h3 = e4._$litPart$;
      if (void 0 === h3) {
        const t4 = s4?.renderBefore ?? null;
        e4._$litPart$ = h3 = new k(i5.insertBefore(c3(), t4), t4, void 0, s4 ?? {});
      }
      return h3._$AI(t3), h3;
    };
  }
});

// node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r4 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r4, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "node_modules/lit-html/is-server.js"() {
    /**
     * @license
     * Copyright 2022 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
  }
});

// node_modules/lit/index.js
var init_lit = __esm({
  "node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// src/origami-weather-editor.js
var origami_weather_editor_exports = {};
var LABELS, BUTTON_LABELS, KEY_ORDER, CARD_THRESHOLD_KEYS, buttonStyle, DISPLAY_DEFAULTS, OPT, FC_ATTRIBUTES, FC_TEXT_ATTRIBUTES, WeatherCardEditor;
var init_origami_weather_editor = __esm({
  "src/origami-weather-editor.js"() {
    init_lit();
    init_layout_presets();
    LABELS = Object.freeze({
      weather_entity: "",
      sun_entity: "Sun entity",
      sun_moon_size: "Diameter",
      sun_moon_x: "Horizontal position",
      sun_moon_y: "Vertical position",
      color_mode: "Light / dark mode",
      card_height: "Card height",
      background_mode: "Card background",
      card_padding: "Card padding",
      card_offset: "Card offset",
      card_tap_action: "Tap action",
      weather_image_path: "Light mode folder",
      weather_image_path_dark: "Dark mode folder",
      button_text_size: "Text size",
      button_style: "Button style",
      button_container_columns: "Columns",
      button_padding: "Button padding",
      button_container_padding: "Inner padding",
      button_container_margin: "Outer offset",
      button_container_gap: "Button gap",
      button_gap: "Element gap",
      button_icon_size: "Icon size",
      button_container_grouped: "Shared background",
      button_container_separator: "Divider",
      button_icon_background: "Icon background",
      button_icon_padding: "Icon padding",
      content_align: "Content alignment",
      content_direction: "Content direction",
      button_container_width: "Container width",
      icon_path: "SVG icon folder",
      css: "",
      bg_brightness: "Background brightness",
      bg_saturation: "Color intensity",
      bg_blur: "Background blur",
      bg_blend: "Blend with dashboard"
    });
    BUTTON_LABELS = Object.freeze({ entity: "", tap_action: "Tap action" });
    KEY_ORDER = Object.freeze([
      "type",
      "name",
      "entity",
      "weather_entity",
      "sun_entity",
      "sun_enabled",
      "moon_enabled",
      "sun_moon_size",
      "sun_moon_x",
      "sun_moon_y",
      "color_mode",
      "dark_theme_adaptation",
      "card_height",
      "card_padding",
      "background_mode",
      "background_color",
      "background_color_dark",
      "background_threshold_entity",
      "background_threshold_attribute",
      "background_thresholds",
      "weather_image_path",
      "weather_image_path_dark",
      "gradient",
      "gradient_type",
      "gradient_angle",
      "gradient_x",
      "gradient_y",
      "gradient_color_1",
      "gradient_color_2",
      "gradient_stop_1",
      "gradient_stop_2",
      "card_tap_action",
      "card_offset",
      "card_frame",
      "full_width",
      "full_width_margin",
      "edge_fade",
      "edge_fade_size",
      "shadow",
      "shadow_color",
      "icon_path",
      "bg_brightness",
      "bg_saturation",
      "bg_blur",
      "bg_blend",
      "background_haze",
      "precipitation_effects",
      "cloud_effects",
      "night_sky_effects",
      "bird_effects",
      "balloon_effects",
      "plane_effects",
      "button_containers"
    ]);
    CARD_THRESHOLD_KEYS = Object.freeze(["background_thresholds", "background_threshold_entity", "background_threshold_attribute"]);
    buttonStyle = (v2) => {
      const s4 = (v2 || "").toString().toLowerCase();
      return s4 === "vertical" || s4 === "split" ? s4 : "inline";
    };
    DISPLAY_DEFAULTS = Object.freeze({
      color_mode: "sun",
      sun_entity: "sun.sun",
      background_mode: "default",
      sun_moon_size: 80,
      sun_moon_x: 50,
      bg_brightness: 1,
      bg_saturation: 1,
      bg_blur: 0,
      bg_blend: 0,
      gradient_angle: 180,
      gradient_x: 50,
      gradient_y: 50,
      gradient_stop_1: 0,
      gradient_stop_2: 100
    });
    OPT = Object.freeze({
      visual_mode: [
        { value: "images", label: "Custom images" },
        { value: "default", label: "Default" },
        { value: "card", label: "Home Assistant card" },
        { value: "color", label: "Custom color" },
        { value: "none", label: "No background" }
      ],
      color_mode: [
        { value: "sun", label: "Follow the sun" },
        { value: "theme", label: "Follow my theme" }
      ],
      button_overflow: [
        { value: "ellipsis", label: "Ellipsis (\u2026)" },
        { value: "marquee", label: "Scrolling text" },
        { value: "clip", label: "Clip" },
        { value: "wrap", label: "Wrap" }
      ],
      button_container_layout: [
        { value: "wrap", label: "Flex" },
        { value: "grid", label: "Grid" },
        { value: "horizontal-scroll", label: "Scroll X" },
        { value: "vertical-scroll", label: "Scroll Y" }
      ],
      button_container_flow: [
        { value: "flow", label: "Flow" },
        { value: "fixed", label: "Fixed" }
      ],
      button_container_align: [
        { value: "start", label: "Left" },
        { value: "center", label: "Center" },
        { value: "end", label: "Right" },
        { value: "spread", label: "Spread" }
      ],
      justify_content: [
        { value: "", label: "Left (default)" },
        { value: "center", label: "Center" },
        { value: "end", label: "Right" },
        { value: "between", label: "Space between" },
        { value: "around", label: "Space around" },
        { value: "evenly", label: "Space evenly" }
      ],
      justify_content_column: [
        { value: "", label: "Top (default)" },
        { value: "center", label: "Center" },
        { value: "end", label: "Bottom" },
        { value: "between", label: "Space between" },
        { value: "around", label: "Space around" },
        { value: "evenly", label: "Space evenly" }
      ],
      align_items_row: [
        { value: "", label: "Full width (default)" },
        { value: "start", label: "Left" },
        { value: "center", label: "Center" },
        { value: "end", label: "Right" }
      ],
      align_items: [
        { value: "", label: "Center (default)" },
        { value: "start", label: "Top" },
        { value: "end", label: "Bottom" },
        { value: "stretch", label: "Stretch" },
        { value: "baseline", label: "Baseline" }
      ],
      content_align: [
        { value: "", label: "Top (default)" },
        { value: "end", label: "Bottom" },
        { value: "center", label: "Center" },
        { value: "between", label: "Space between" },
        { value: "around", label: "Space around" },
        { value: "evenly", label: "Space evenly" }
      ],
      content_direction: [
        { value: "column", label: "Column (stacked)" },
        { value: "row", label: "Row (side by side)" }
      ]
    });
    FC_ATTRIBUTES = Object.freeze([
      { value: "condition", label: "Condition" },
      { value: "temperature", label: "Temperature (high)" },
      { value: "templow", label: "Temperature (low)" },
      { value: "precipitation_probability", label: "Rain probability" },
      { value: "precipitation", label: "Precipitation" },
      { value: "humidity", label: "Humidity" },
      { value: "wind_speed", label: "Wind speed" },
      { value: "wind_bearing", label: "Wind bearing" },
      { value: "pressure", label: "Pressure" },
      { value: "cloud_coverage", label: "Cloud coverage" },
      { value: "uv_index", label: "UV index" }
    ]);
    FC_TEXT_ATTRIBUTES = Object.freeze([{ value: "datetime", label: "Time label" }, ...FC_ATTRIBUTES]);
    WeatherCardEditor = class extends i4 {
      static get properties() {
        return {
          _config: { type: Object, state: true },
          _expandedCard: { type: Number, state: true },
          _expandedButton: { type: Number, state: true },
          _expandedContainer: { type: Number, state: true },
          _openPanel: { type: String, state: true }
        };
      }
      set hass(val) {
        const old = this._hass;
        this._hass = val;
        if (!old && val) {
          this.requestUpdate();
        } else if (old && val) {
          if (!this._hassThrottle) {
            this._hassThrottle = true;
            setTimeout(() => {
              this._hassThrottle = false;
              this._requestUpdateIfIdle();
            }, 2e3);
          }
        }
      }
      _isEditing() {
        const el = this.shadowRoot && this.shadowRoot.activeElement;
        if (!el) return false;
        const tag = el.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") {
          const t3 = (el.getAttribute("type") || "text").toLowerCase();
          return t3 === "text" || t3 === "number" || t3 === "range";
        }
        return false;
      }
      _requestUpdateIfIdle() {
        if (!this._isEditing()) this.requestUpdate();
      }
      get hass() {
        return this._hass;
      }
      static get styles() {
        return i`
            :host {
                --origami-e-s1: 4px; --origami-e-s2: 8px; --origami-e-s3: 12px; --origami-e-s4: 16px; --origami-e-r-box: 10px; --origami-e-r-ctrl: 8px; --origami-e-r-inline: 6px;
                --origami-e-f-meta: 12px; --origami-e-f-label: 13px; --origami-e-f-body: 14px; --origami-e-f-header: 15px;
                --origami-e-t: 150ms ease;
                --mdc-text-field-fill-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                --mdc-typography-subtitle1-font-size: var(--origami-e-f-label); --mdc-typography-subtitle1-font-weight: 400;
                --mdc-typography-body2-font-size: var(--origami-e-f-meta);
                display: block;}
            /* Spacing */
            ha-form { display: block; }
            ha-expansion-panel {
                display: block; margin-top: var(--origami-e-s3); --ha-card-border-radius: var(--origami-e-r-box);
                & ha-form { margin-top: var(--origami-e-s2); }}
            ha-form + ha-form { margin-top: var(--origami-e-s1); }
            .settings-group > * + *,
            .disclosure-body > * + * { margin-top: var(--origami-e-s2); }
            .settings-group > :first-child,
            .disclosure-body > :first-child { margin-top: 0; }
            .settings-group > .settings-group-label + *,
            .settings-group > .section-title + *,
            .disclosure-body > .settings-group-label + *,
            .disclosure-body > .section-title + *,
            .vcb > .settings-group-label + *,
            .vcb-section-body > .settings-group-label + *,
            .vcb .settings-group-label + * { margin-top: 0; }
            .settings-group > .settings-group-label:first-child,
            .settings-group > .section-title:first-child,
            .disclosure-body > .settings-group-label:first-child,
            .disclosure-body > .section-title:first-child,
            .vcb > .settings-group-label:first-child,
            .vcb-section-body > .settings-group-label:first-child,
            .free-pos-layout > div > .settings-group-label:first-child,
            .field-group > .field-group-label:first-child { padding-top: 0; }
            /* Panel headers */
            .panel-header {
                display: flex; align-items: center; gap: var(--origami-e-s2);
                font-size: var(--origami-e-f-header); font-weight: 500; color: var(--primary-text-color);
                & ha-icon { --mdc-icon-size: 20px; color: var(--secondary-text-color); }}
            .preset-grid {
                display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--origami-e-s2);}
            .preset-card {
                display: flex; flex-direction: column; align-items: flex-start; gap: var(--origami-e-s1);
                padding: var(--origami-e-s3) var(--origami-e-s4); border: 1px solid transparent;
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); border-radius: var(--origami-e-r-box);
                cursor: pointer; text-align: left; transition: border-color var(--origami-e-t), background var(--origami-e-t);
                &:hover { border-color: var(--primary-color); background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.1); }
                & ha-icon { --mdc-icon-size: 24px; color: var(--primary-color); }
                & .preset-name { font-size: var(--origami-e-f-body); font-weight: 500; color: var(--primary-text-color); }
                & .preset-desc { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); line-height: 1.35; }}
            /* Shared backgrounds */
            .info, .card-row, details.disclosure {
                background: var(--secondary-background-color); border-radius: var(--origami-e-r-box);}
            details.disclosure details.disclosure,
            details.disclosure .card-row {
                background: linear-gradient(rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05), rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05)), var(--secondary-background-color);}
            .disclosure-body > :last-child { margin-bottom: 0; }
            /* Info blocks */
            .info {
                padding: var(--origami-e-s3) var(--origami-e-s4); margin: 0 0 var(--origami-e-s3) 0;
                font-size: var(--origami-e-f-label); line-height: 1.5; color: var(--secondary-text-color);
                & b { color: var(--primary-text-color); font-weight: 500; }
                & code { background: var(--primary-background-color); padding: 1px 6px; border-radius: 4px; font-size: var(--origami-e-f-meta); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }}
            /* Grid layouts */
            .card-size-row {
                display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--origami-e-s2); }
            /* Composite field groups */
            .composite-grid-4 input {
                flex: 1; min-width: 120px; padding: var(--origami-e-s2) var(--origami-e-s3);
                border: 1px solid transparent; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07);
                color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl);
                font-size: var(--origami-e-f-body); box-sizing: border-box; transition: border-color var(--origami-e-t);
                &:focus { outline: none; border-color: var(--primary-color); }}
            .composite-grid-4 {
                display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--origami-e-s2);
                & label { display: flex; flex-direction: column; gap: var(--origami-e-s1); }
                & > label > span { margin-bottom: 0; padding-left: 2px; }
                & input { flex: none; min-width: 0; width: 100%; }}
            /* Segmented controls */
            .segmented {
                display: flex; flex-wrap: wrap; width: 100%; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07);
                border-radius: var(--origami-e-r-ctrl); padding: 0; gap: 1px; box-sizing: border-box;
                & button {
                    flex: 1 1 auto; min-width: 52px; padding: var(--origami-e-s2) var(--origami-e-s3); border: 0;
                    background: transparent; color: var(--primary-text-color); font-size: var(--origami-e-f-body);
                    cursor: pointer; transition: background var(--origami-e-t), color var(--origami-e-t);
                    text-align: center; border-radius: var(--origami-e-r-ctrl);
                    &:hover:not(.active) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); }
                    &.active { background: var(--primary-color); color: var(--text-primary-color, white); }}}
            .segmented.segmented-compact { & button { min-width: 0; padding: var(--origami-e-s2) var(--origami-e-s1); font-size: var(--origami-e-f-meta); } }
            /* Disclosure / details */
            details.disclosure {
                margin-top: var(--origami-e-s3); overflow: hidden;
                & > summary {
                    list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s3) var(--origami-e-s4);
                    font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color);
                    user-select: none; transition: background var(--origami-e-t);
                    &::-webkit-details-marker { display: none; }
                    &:hover { background: var(--divider-color); }
                    & ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); }
                    & .chevron { transition: transform var(--origami-e-t); }}
                &[open] > summary .chevron { transform: rotate(90deg); }
                & > .disclosure-body { padding: var(--origami-e-s4) var(--origami-e-s4) var(--origami-e-s3) var(--origami-e-s4); }}
            details.sub-disclosure {
                border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                & > summary {
                    list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--origami-e-s2); padding: 8px 0 2px;
                    font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color);
                    user-select: none; transition: background var(--origami-e-t);
                    &::-webkit-details-marker { display: none; }
                    & ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
                    & .chevron { transition: transform var(--origami-e-t); }}
                &[open] > summary .chevron { transform: rotate(90deg); }
                & > .disclosure-body { padding: var(--origami-e-s2) 0 var(--origami-e-s3); }}
            /* Card rows (cards editor) */
            .card-row {
                margin-bottom: var(--origami-e-s2); overflow: hidden;
                & .card-row-head {
                    display: flex; align-items: center; gap: var(--origami-e-s2);
                    padding: var(--origami-e-s3) var(--origami-e-s4); cursor: pointer; user-select: none;
                    transition: background var(--origami-e-t);
                    &:hover { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05); }
                    & > .chevron { --mdc-icon-size: 20px; color: var(--secondary-text-color); transition: transform var(--origami-e-t); }}
                &.expanded .card-row-head > .chevron { transform: rotate(90deg); }
                & .card-row-title {
                    flex: 1; min-width: 0; font-size: var(--origami-e-f-body); font-weight: 500; color: var(--primary-text-color);
                    display: flex; flex-direction: column; gap: 1px; overflow: hidden;
                    & > span { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                    & .row-title-meta {
                        font-size: var(--origami-e-f-meta); font-weight: 400; color: var(--secondary-text-color); line-height: 1.25; }
                    & .row-title-main { line-height: 1.3; }}
                & .card-row-actions {
                    display: flex; gap: 2px;
                    & button {
                        width: 32px; height: 32px; border: 0; background: transparent;
                        color: var(--secondary-text-color); border-radius: var(--origami-e-r-inline);
                        cursor: pointer; display: flex; align-items: center; justify-content: center;
                        transition: background var(--origami-e-t), color var(--origami-e-t);
                        &:hover:not(:disabled) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); color: var(--primary-text-color); }
                        &:disabled { opacity: 0.3; cursor: not-allowed; }}
                    & ha-icon { --mdc-icon-size: 18px; }}
                & .card-row-body { padding: var(--origami-e-s3) var(--origami-e-s4) var(--origami-e-s4); background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.03); }}
            /* Add buttons */
            .add-card-btn, .add-button-btn {
                display: flex; align-items: center; justify-content: center; gap: var(--origami-e-s2);
                width: 100%; padding: var(--origami-e-s3); border: 1.5px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.4);
                background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.06); color: var(--primary-color); border-radius: var(--origami-e-r-box);
                font-size: var(--origami-e-f-body); font-weight: 500; cursor: pointer; transition: background var(--origami-e-t), border-color var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.12); border-color: var(--primary-color); }
                & ha-icon { --mdc-icon-size: 20px; }}
            .sensor-list { margin-top: 0; &:empty { display: none; } }
            /* Compact fields */
            .compact-fields {
                display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); margin: var(--origami-e-s3) 0;}
            .compact-field {
                display: flex; flex-direction: column; gap: var(--origami-e-s1);
                & .compact-field-label { margin-bottom: 0; }
                & input { width: 100%; min-width: 0; box-sizing: border-box; }
                & input {
                    padding: var(--origami-e-s2) var(--origami-e-s3); border: 1px solid transparent;
                    background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); color: var(--primary-text-color);
                    border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); transition: border-color var(--origami-e-t);
                    &:focus { outline: none; border-color: var(--primary-color); }}}
            .compact-field .card-height-value { margin-top: 3px; }
            /* Toggle groups */
            .toggle-group {
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                border-radius: var(--origami-e-r-box); overflow: hidden; margin: var(--origami-e-s2) 0;}
            .toggle-row {
                display: flex; align-items: center; justify-content: space-between; gap: var(--origami-e-s3); padding: 10px var(--origami-e-s2) 10px var(--origami-e-s3);
                cursor: pointer; box-sizing: border-box;
                & + .toggle-row { border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); }
                & > span { font-size: var(--origami-e-f-body); color: var(--primary-text-color); }
                & ha-switch { flex-shrink: 0; margin: 0; padding: 0;
                    --ha-switch-background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);
                    --ha-switch-thumb-background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.35);
                    --ha-switch-border-color: transparent;
                    --ha-switch-thumb-border-color: transparent;
                    --ha-switch-checked-border-color: transparent;
                    --ha-switch-checked-thumb-border-color: transparent;
                    --ha-switch-checked-background-color: var(--primary-color);
                    --ha-switch-checked-thumb-background-color: var(--text-primary-color, #fff); }}
            .fc-box {
                margin: var(--origami-e-s3) 0; padding: var(--origami-e-s3) var(--origami-e-s4); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08);
                border: 1px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.18);
                border-radius: var(--origami-e-r-box);}
            .fc-box ha-form { margin-top: var(--origami-e-s2); }
            /* Icon combo & weather icon */
            .icon-combo {
                display: flex; align-items: center; gap: var(--origami-e-s1);
                & ha-icon-picker { flex: 1; min-width: 0; }
                & .icon-weather-btn {
                    flex-shrink: 0; padding: var(--origami-e-s2) var(--origami-e-s3); border: 0;
                    border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-meta); cursor: pointer;
                    transition: background var(--origami-e-t), color var(--origami-e-t);
                    &.active { background: var(--primary-color); color: var(--text-primary-color, white); }
                    &:not(.active) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); color: var(--primary-text-color); }
                    &:hover:not(.active) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.16); }}}
            .weather-icon-active {
                display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3);
                background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.07); border: 1px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.18);
                border-radius: var(--origami-e-r-ctrl);}
            .weather-icon-active-text {
                flex: 1; display: flex; flex-direction: column; gap: 1px;
                & span:first-child { font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color); }}
            .weather-icon-active-sub { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); }
            .weather-icon-active .icon-weather-btn {
                flex-shrink: 0; padding: var(--origami-e-s1) var(--origami-e-s2); border: 0;
                border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-meta); cursor: pointer;
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); color: var(--primary-text-color);
                transition: background var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.16); }}
            /* Button type picker */
            .button-type-picker { display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); margin: 0 0 var(--origami-e-s3) 0; }
            .button-type-btn { display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3); border: 1.5px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12); border-radius: var(--origami-e-r-box); background: transparent; color: var(--primary-text-color); text-align: left; cursor: pointer; transition: border-color var(--origami-e-t), background var(--origami-e-t); &:hover { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.05); } &.active { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08); } & .button-type-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); flex-shrink: 0; } & .button-type-icon.active-icon { color: var(--primary-color); } & .button-type-text { display: flex; flex-direction: column; gap: 1px; } & .button-type-name { font-size: var(--origami-e-f-label); font-weight: 500; line-height: 1.2; } & .button-type-desc { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); line-height: 1.2; } }
            /* CSS value fields */
            .css-field-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: var(--origami-e-s2); margin-top: var(--origami-e-s2); }
            .css-field-row.cols-2 { grid-template-columns: 1fr 1fr; }
            .css-field { display: flex; flex-direction: column; gap: var(--origami-e-s1); & .css-field-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: flex; align-items: center; gap: 5px; margin-bottom: 0; } & input { width: 100%; box-sizing: border-box; height: 36px; padding: 0 10px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); background: var(--mdc-text-field-fill-color, rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06)); color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit; transition: border-color var(--origami-e-t); &:focus { outline: none; border-color: var(--primary-color); } &::placeholder { color: var(--secondary-text-color); opacity: 0.7; } } }
            /* Overridden fields */
            .css-field.overridden > input { border-color: rgba(var(--rgb-primary-color, 0, 120, 212), 0.55); }
            .bound-mode { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; padding: 0; border: 0; border-radius: 50%; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); color: var(--secondary-text-color); cursor: pointer; flex-shrink: 0; transition: background var(--origami-e-t), color var(--origami-e-t); }
            .bound-mode:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.20); }
            .bound-mode.active { background: var(--primary-color); color: var(--text-primary-color, #fff); }
            .bound-ref { display: flex; gap: var(--origami-e-s1); & select { flex: 1 1 0; min-width: 0; height: 36px; padding: 0 6px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); background: var(--mdc-text-field-fill-color, rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06)); color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit; } }
            .revert-dot { width: 7px; height: 7px; padding: 0; border: 0; border-radius: 50%; background: var(--primary-color); cursor: pointer; flex-shrink: 0; opacity: 0.75; transition: opacity var(--origami-e-t), transform var(--origami-e-t); }
            .revert-dot:hover { opacity: 1; transform: scale(1.35); }
            /* Section headings */
            .settings-group { margin-top: var(--origami-e-s4); }
            .settings-group:first-child { margin-top: 0; }
            /* Unified label system */
            .settings-group-label,
            .section-title,
            .field-group-label {
                font-size: var(--origami-e-f-label); font-weight: 600; text-transform: none; letter-spacing: normal;
                color: var(--primary-text-color);
                margin: 0; padding: var(--origami-e-s3) 0 var(--origami-e-s1) 0;
                display: flex; align-items: center; gap: var(--origami-e-s1); line-height: 1.3;}
            .field-group-label { padding: 0; }
            .field-label,
            .compact-field-label,
            .css-field-label,
            .offset-field-label,
            .wbk-slider-label,
            .button-color-label,
            .button-color-opacity-label,
            .threshold-label,
            .vcb-section-title,
            .composite-grid-4 > label > span {
                font-size: var(--origami-e-f-label); font-weight: 500; text-transform: none; letter-spacing: normal;
                color: var(--primary-text-color); line-height: 1.3;
                margin: 0 0 var(--origami-e-s1) 0; padding-left: 2px;}
            .field-group {
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
                border-radius: var(--origami-e-r-box); padding: var(--origami-e-s3);
                margin-top: var(--origami-e-s2);}
            .field-group > .toggle-group:first-child { margin-top: 0; }
            .field-group > .toggle-group:last-child { margin-bottom: 0; }
            /* Button nudge strips */
            .button-nudge { display: flex; align-items: flex-start; gap: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3); margin: var(--origami-e-s1) 0; border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); line-height: 1.5; & code { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08); padding: 0 4px; border-radius: 3px; } }
            .button-nudge.warning { background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.10); border: 1px solid rgba(var(--rgb-warning-color, 255, 152, 0), 0.25); }
            .button-nudge.info { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.04); border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); }
            /* Button color picker */
            .button-color-box { margin-top: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3); border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); border-radius: var(--origami-e-r-ctrl); background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.03); }
            .button-color-row { display: flex; align-items: center; gap: var(--origami-e-s2); }
            .button-color-label { flex: 1; margin-bottom: 0; }
            .button-color-swatch { width: 36px; height: 28px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); border-radius: var(--origami-e-r-inline); padding: 1px 2px; background: none; cursor: pointer; flex-shrink: 0; }
            .button-color-clear { width: 24px; height: 24px; border: 0; border-radius: 50%; padding: 0; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08); color: var(--secondary-text-color); cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background var(--origami-e-t); &:hover { background: rgba(var(--rgb-error-color, 211, 47, 47), 0.15); color: var(--error-color); } }
            .button-color-opacity-row { display: flex; align-items: center; gap: var(--origami-e-s2); margin-top: var(--origami-e-s2); }
            .button-color-opacity-label { white-space: nowrap; margin-bottom: 0; }
            .button-color-opacity { flex: 1; height: 4px; accent-color: var(--primary-color); cursor: pointer; }
            .button-color-opacity-val { font-size: 11px; color: var(--secondary-text-color); width: 32px; text-align: right; flex-shrink: 0; }
            /* Sliders */
            .wbk-slider {
                display: flex; flex-direction: column; gap: var(--origami-e-s1); padding: var(--origami-e-s3);
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
                border-radius: var(--origami-e-r-box);}
            .wbk-slider-head { display: flex; align-items: center; justify-content: space-between; gap: var(--origami-e-s2); margin-bottom: var(--origami-e-s1); }
            .wbk-slider-label { flex: 1; margin-bottom: 0; }
            .wbk-slider-num {
                width: 48px; flex-shrink: 0; text-align: right; border: none; background: none;
                color: var(--primary-color); font-size: var(--origami-e-f-label); font-weight: 600;
                font-family: inherit; padding: 0; outline: none; -moz-appearance: textfield;
                &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { -webkit-appearance: none; }}
            .wbk-slider-range {
                width: 100%; height: 4px; accent-color: var(--primary-color); cursor: pointer;
                appearance: none; -webkit-appearance: none; display: block;
                background: linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) var(--origami-slider-pct, 50%), rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18) var(--origami-slider-pct, 50%));
                border-radius: 2px; border: none; outline: none;
                &::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--primary-color); cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }
                &::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: var(--primary-color); cursor: pointer; border: none; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }}
            .wbk-slider-helper { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); margin-top: var(--origami-e-s1); line-height: 1.4; }
            .wbk-slider-status { font-size: var(--origami-e-f-meta); color: var(--primary-color); margin-top: 2px; line-height: 1.4; font-weight: 500; }
            /* Free container positioning */
            .free-pos-layout { display: grid; grid-template-columns: auto 1fr; gap: var(--origami-e-s3); align-items: start; }
            .offset-fields { display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); }
            .offset-field { display: flex; flex-direction: column; gap: var(--origami-e-s1); & .offset-field-label { margin-bottom: 0; } & input { width: 100%; box-sizing: border-box; height: 36px; padding: 0 10px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); background: var(--mdc-text-field-fill-color, rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06)); color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit; &:focus { outline: none; border-color: var(--primary-color); } &::placeholder { color: var(--secondary-text-color); opacity: 0.7; } } }
            .anchor-grid { display: grid; grid-template-columns: repeat(3, 30px); grid-template-rows: repeat(3, 30px); gap: 4px; }
            .anchor-cell { width: 30px; height: 30px; border: 1.5px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.15); border-radius: var(--origami-e-r-ctrl); background: transparent; cursor: pointer; transition: border-color var(--origami-e-t), background var(--origami-e-t); &:hover:not(.active) { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.07); } &.active { border-color: var(--primary-color); background: var(--primary-color); } }
            .clearable-field { position: relative; & ha-form { padding-right: 0; } & .clear-btn { position: absolute; top: 8px; right: 4px; width: 24px; height: 24px; padding: 0; margin: 0; border: none; background: transparent; color: var(--secondary-text-color); cursor: pointer; display: flex; align-items: center; justify-content: center; border-radius: 50%; opacity: 0.6; transition: opacity var(--origami-e-t), color var(--origami-e-t); z-index: 1; &:hover { opacity: 1; color: var(--error-color); } & ha-icon { --mdc-icon-size: 16px; } } }
            /* Ring threshold rows */
            .ring-threshold-row {
                display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s2) 0;
                & + .ring-threshold-row { border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); padding-top: var(--origami-e-s2); } }
            .ring-threshold-row .button-color-swatch { width: 28px; height: 22px; flex-shrink: 0; }
            .ring-threshold-row input[type="text"] {
                flex: 1; min-width: 0; height: 30px; padding: 0 8px; border: 1px solid transparent;
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); color: var(--primary-text-color);
                border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit;
                &:focus { outline: none; border-color: var(--primary-color); } }
            .ring-threshold-row .threshold-label { white-space: nowrap; margin-bottom: 0; padding-left: 0; }
            .ring-threshold-del {
                width: 22px; height: 22px; border: 0; border-radius: 50%; padding: 0;
                background: transparent; color: var(--secondary-text-color); cursor: pointer;
                display: flex; align-items: center; justify-content: center; flex-shrink: 0;
                transition: background var(--origami-e-t), color var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-error-color, 211, 47, 47), 0.12); color: var(--error-color); } }
            .ring-threshold-add {
                display: flex; align-items: center; justify-content: center; gap: var(--origami-e-s2);
                width: 100%; padding: var(--origami-e-s2); margin-top: var(--origami-e-s2); border: 1.5px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.4);
                border-radius: var(--origami-e-r-ctrl); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.06); color: var(--primary-color);
                font-size: var(--origami-e-f-label); font-weight: 500; cursor: pointer; transition: background var(--origami-e-t), border-color var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.12); border-color: var(--primary-color); }
                & ha-icon { --mdc-icon-size: 16px; }}
            /* Visual Button Builder */
            .vcb { display: flex; flex-direction: column; gap: var(--origami-e-s2); }
            /* Layout picker: icon placement x text stacking, as pictures */
            .layout-picker { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--origami-e-s2); }
            .layout-card { border: 1.5px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); border-radius: var(--origami-e-r-box); padding: 9px 4px; cursor: pointer; background: transparent; transition: border-color 0.12s, background 0.12s; display: flex; align-items: center; justify-content: center; min-height: 42px; }
            .layout-card:hover { border-color: rgba(var(--rgb-primary-color, 0, 120, 212), 0.4); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.03); }
            .layout-card.active { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08); }
            .lp-fig { display: flex; align-items: center; gap: 4px; }
            .lp-fig.vertical { flex-direction: column; gap: 3px; }
            .lp-fig.split { flex-direction: row-reverse; }
            .lp-fig.split .lp-txt { flex-direction: column; align-items: flex-start; }
            .lp-sq { width: 10px; height: 10px; border-radius: 3px; background: var(--primary-color); opacity: 0.35; flex-shrink: 0; }
            .layout-card.active .lp-sq { opacity: 0.6; }
            .lp-txt { display: flex; gap: 3px; align-items: center; }
            .lp-bar { height: 3px; border-radius: 1.5px; background: var(--primary-text-color); }
            .lp-bar.lg { width: 14px; opacity: 0.4; }
            .lp-bar.sm { width: 9px; opacity: 0.25; }
            .layout-card.active .lp-bar.lg { opacity: 0.6; }
            .layout-card.active .lp-bar.sm { opacity: 0.4; }
            .vcb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); }
            .vcb-section { border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); }
            .vcb-section-head { display: flex; align-items: center; gap: var(--origami-e-s2); padding: 8px 0 2px; cursor: pointer; user-select: none; }
            .vcb-section-head ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
            .vcb-section-head ha-icon.chevron { transition: transform 0.12s; }
            .vcb-section-head.open ha-icon.chevron { transform: rotate(90deg); }
            .vcb-section-title { flex: 1; margin-bottom: 0; padding-left: 0; }
            .vcb-section-body { padding: var(--origami-e-s2) 0 var(--origami-e-s3); }
            .vcb-section-body > * + * { margin-top: 6px; }
            .vcb-reorder { display: flex; gap: 2px; margin-left: auto; }
            .vcb-reorder button { width: 22px; height: 20px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); border-radius: 4px; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--secondary-text-color); padding: 0; transition: background 0.12s, color 0.12s; }
            .vcb-reorder button:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.12); color: var(--primary-color); }
            .vcb-reorder button:disabled { opacity: 0.15; cursor: default; pointer-events: none; }
            .vcb-reorder button ha-icon { --mdc-icon-size: 13px; }
            .vcb-section.dimmed > .vcb-section-head { opacity: 0.45; }
            .vcb-section.dimmed > .vcb-section-head:hover { opacity: 0.7; }
            .vcb-nested-group { margin-left: 12px; padding-left: 10px; border-left: 2px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); }
            .vcb-add-el { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--origami-e-s2); margin-top: var(--origami-e-s2); }
            .vcb-add-el .add-card-btn { margin-top: 0; }
        `;
      }
      setConfig(config) {
        const c4 = { ...config || {} };
        let autofilled = false;
        if (!c4.weather_entity && this.hass && this.hass.states) {
          const firstWeather = Object.keys(this.hass.states).find((id) => id.startsWith("weather."));
          if (firstWeather) {
            c4.weather_entity = firstWeather;
            autofilled = true;
          }
        }
        if ("sun_moon_enabled" in c4) {
          if (c4.sun_moon_enabled === false) {
            if (c4.sun_enabled === void 0) c4.sun_enabled = false;
            if (c4.moon_enabled === void 0) c4.moon_enabled = false;
          }
          delete c4.sun_moon_enabled;
          autofilled = true;
        }
        if ("moon_phase_entity" in c4) {
          delete c4.moon_phase_entity;
          autofilled = true;
        }
        this._config = this._cleanConfig(c4);
        if (autofilled) Promise.resolve().then(() => this._emit());
      }
      get _formData() {
        if (this._cachedFormData && this._cachedFormConfig === this._config) {
          return this._cachedFormData;
        }
        const c4 = { ...DISPLAY_DEFAULTS, ...this._config || {} };
        this._cachedFormData = c4;
        this._cachedFormConfig = this._config;
        return c4;
      }
      _setVisualMode(mode) {
        const clear = ["weather_image_path", "weather_image_path_dark"];
        const withColor = mode === "color" ? clear : [...clear, "background_color", "background_color_dark", ...CARD_THRESHOLD_KEYS];
        if (mode === "card") {
          this._patch({ background_mode: mode, color_mode: "theme" }, { strip: withColor });
        } else if (mode === "none" || mode === "color") {
          this._patch({ background_mode: mode }, { strip: withColor });
        } else if (mode === "images") {
          this._patch({ background_mode: "images", weather_image_path: "/local/weather-images/light" }, { strip: withColor.filter((k2) => k2 !== "weather_image_path") });
        } else {
          this._patch({ background_mode: "default" }, { strip: withColor });
        }
      }
      _getContainers() {
        const areas = (this._config || {}).button_containers;
        return Array.isArray(areas) && areas.length > 0 ? areas.map((a3) => a3 && typeof a3 === "object" ? a3 : {}) : [];
      }
      _getButtonsForContainer(containerIdx) {
        const container = this._getContainers()[containerIdx];
        const buttons = container && container.buttons;
        return Array.isArray(buttons) && buttons.length > 0 ? buttons.map((s4) => s4 && typeof s4 === "object" ? s4 : {}) : [];
      }
      _commitContainers(list) {
        if (!Array.isArray(list) || list.length === 0) {
          this._patch({}, { strip: ["button_containers"] });
          return;
        }
        this._patch({ button_containers: list });
      }
      _updateContainerAt(idx, newContainer) {
        const list = this._getContainers().map((a3, i5) => i5 === idx ? newContainer : a3);
        this._commitContainers(list);
      }
      _commitButtonsInContainer(containerIdx, buttons) {
        const areas = [...this._getContainers()];
        const container = { ...areas[containerIdx] };
        if (!buttons || buttons.length === 0) delete container.buttons;
        else container.buttons = buttons;
        areas[containerIdx] = container;
        this._commitContainers(areas);
      }
      _updateContainerField(containerIdx, key, value) {
        const container = { ...this._getContainers()[containerIdx] || {} };
        const isEmpty = value === null || value === void 0 || value === "";
        if (isEmpty) delete container[key];
        else container[key] = value;
        this._updateContainerAt(containerIdx, container);
      }
      _containerTitle(container, idx) {
        const hasVis = Array.isArray(container.visibility) && container.visibility.length > 0;
        if (container.custom_cards) {
          const cards = Array.isArray(container.custom_cards) ? container.custom_cards : [];
          return `${cards.length} card${cards.length !== 1 ? "s" : ""}${hasVis ? " \xB7 conditional" : ""}`;
        }
        const count = Array.isArray(container.buttons) ? container.buttons.length : 0;
        return `${count} button${count !== 1 ? "s" : ""}${hasVis ? " \xB7 conditional" : ""}`;
      }
      _computeLabel = (schema) => {
        if (!schema || !schema.name) return "";
        if (schema.name in LABELS) return LABELS[schema.name];
        return schema.name;
      };
      _valueChanged(ev) {
        ev.stopPropagation();
        if (!this._config) return;
        this._patch({ ...ev.detail && ev.detail.value || {} }, { replace: true });
      }
      _patch(changes, opts) {
        const options = opts || {};
        const base = options.replace ? {} : { ...this._config || {} };
        const next = { ...base, ...changes };
        if (Array.isArray(options.strip)) {
          for (const k2 of options.strip) delete next[k2];
        }
        this._config = this._cleanConfig(next);
        this._emit();
      }
      _cleanConfig(config) {
        const out = { ...config };
        for (const key of Object.keys(out)) {
          if (key === "button_containers") continue;
          const v2 = out[key];
          if (v2 === "" || v2 === null || v2 === void 0) {
            delete out[key];
            continue;
          }
          if (Array.isArray(v2) && v2.length === 0) {
            delete out[key];
            continue;
          }
          if (typeof v2 === "object" && !Array.isArray(v2) && Object.keys(v2).length === 0) delete out[key];
        }
        for (const [k2, defVal] of Object.entries(DISPLAY_DEFAULTS)) {
          if (out[k2] === defVal) delete out[k2];
        }
        const ordered = {};
        for (const k2 of KEY_ORDER) {
          if (k2 === "button_containers") continue;
          if (k2 in out) ordered[k2] = out[k2];
        }
        for (const k2 of Object.keys(out)) {
          if (k2 === "button_containers") continue;
          if (!(k2 in ordered)) ordered[k2] = out[k2];
        }
        if ("button_containers" in out) ordered.button_containers = out.button_containers;
        if (Array.isArray(ordered.button_containers)) {
          const cleaned = ordered.button_containers.map((c4) => this._cleanContainer(c4 || {}));
          if (cleaned.length === 0) delete ordered.button_containers;
          else ordered.button_containers = cleaned;
        }
        return ordered;
      }
      _emit() {
        this.dispatchEvent(new CustomEvent("config-changed", {
          detail: { config: { ...this._config || {} } },
          bubbles: true,
          composed: true
        }));
      }
      _renderForm(schema) {
        if (!schema || schema.length === 0) return "";
        return b2`<ha-form
                .hass=${this.hass}
                .data=${this._formData}
                .schema=${schema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>`;
      }
      _renderEntityField(name, opts) {
        const o5 = opts || {};
        const value = (this._formData || {})[name] || "";
        const selector = { entity: o5.domain ? { domain: o5.domain } : {} };
        return b2`<ha-selector
                .hass=${this.hass}
                .selector=${selector}
                .value=${value}
                .label=${o5.label != null ? o5.label : LABELS[name] || ""}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          this._updateField(name, e4.detail && e4.detail.value || "");
        }}
            ></ha-selector>`;
      }
      _renderClearableText(name) {
        const val = (this._formData || {})[name];
        return b2`<div class="clearable-field">
            ${this._renderForm([{ name, selector: { text: {} } }])}
            ${val ? b2`<button type="button" class="clear-btn" title="Clear" @click=${() => this._updateField(name, "")}><ha-icon icon="mdi:close"></ha-icon></button>` : ""}
        </div>`;
      }
      _renderDisclosure(label, content) {
        const isAdvanced = label === "Advanced options";
        return b2`<details class="disclosure" @toggle=${this._onDisclosureToggle}>
                <summary>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    ${isAdvanced ? b2`<ha-icon icon="mdi:cog-outline"></ha-icon>` : ""}
                    <span>${label}</span></summary>
                <div class="disclosure-body">${content}</div></details>`;
      }
      _renderSubDisclosure(label, content) {
        return b2`<details class="sub-disclosure" @toggle=${this._onSubDisclosureToggle}>
                <summary>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    <span>${label}</span></summary>
                <div class="disclosure-body">${content}</div></details>`;
      }
      _onSubDisclosureToggle(e4) {
        const el = e4.currentTarget;
        if (!el.open) return;
        const parent = el.parentElement;
        if (!parent) return;
        parent.querySelectorAll(":scope > details.sub-disclosure[open]").forEach((d3) => {
          if (d3 !== el) d3.open = false;
        });
      }
      _onDisclosureToggle(e4) {
        const el = e4.currentTarget;
        if (!el.open) return;
        const parent = el.parentElement;
        if (!parent) return;
        parent.querySelectorAll(":scope > details.disclosure[open]").forEach((d3) => {
          if (d3 !== el) d3.open = false;
        });
      }
      _updateField(field, value) {
        const isEmpty = value === null || value === void 0 || value === "";
        if (isEmpty) {
          this._patch({}, { strip: [field] });
          return;
        }
        this._patch({ [field]: value });
      }
      _onPanelToggle(id, expanded) {
        if (expanded) this._openPanel = id;
        else if (this._openPanel === id) this._openPanel = null;
      }
      _applyPreset(preset) {
        const current = this._config || {};
        const entity = current.weather_entity || "";
        const next = instantiatePreset(preset, entity);
        if (entity) next.weather_entity = entity;
        for (const key of ["type", "name", "sun_entity", "icon_path"]) {
          if (current[key] != null && current[key] !== "") next[key] = current[key];
        }
        this._patch(next, { replace: true });
        this._expandedContainer = null;
        this._expandedButton = null;
        this._expandedCard = null;
      }
      _renderLayoutsPanel() {
        return b2`<div class="settings-group">
            <div class="button-nudge info"><ha-icon icon="mdi:alert-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon><span>Replaces all current settings.</span></div>
            <div class="preset-grid">
                ${LAYOUT_PRESETS.map((preset) => b2`
                    <button type="button" class="preset-card" @click=${() => this._applyPreset(preset)}>
                        <ha-icon icon=${preset.icon}></ha-icon>
                        <span class="preset-name">${preset.name}</span>
                        <span class="preset-desc">${preset.description}</span>
                    </button>`)}
            </div></div>`;
      }
      _renderSunMoonPanel() {
        const c4 = this._formData || {};
        const sunEnabled = c4.sun_enabled !== false, moonEnabled = c4.moon_enabled !== false;
        const xDynamic = c4.sun_moon_x === "dynamic";
        const yRaw = c4.sun_moon_y;
        const yFixed = yRaw != null && yRaw !== "";
        return b2`<div class="settings-group">
            <div class="toggle-group"><label class="toggle-row"><span>Show Sun</span>
                <ha-switch .checked=${sunEnabled}
                    @change=${(e4) => this._updateField("sun_enabled", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Show Moon</span>
                <ha-switch .checked=${moonEnabled}
                    @change=${(e4) => this._updateField("moon_enabled", e4.target.checked ? "" : false)}></ha-switch></label></div>
            ${sunEnabled || moonEnabled ? b2`
                ${this._renderEntityField("sun_entity", { domain: "sun" })}
                ${this._renderSlider("sun_moon_size", LABELS.sun_moon_size, 20, 200, 2)}
                <div class="compact-field">
                    <span class="compact-field-label">${LABELS.sun_moon_x}</span>
                    <div class="segmented segmented-compact">
                        <button type="button" class=${xDynamic ? "active" : ""} @click=${() => this._updateField("sun_moon_x", "dynamic")}>Dynamic</button>
                        <button type="button" class=${!xDynamic ? "active" : ""} @click=${() => this._updateField("sun_moon_x", 50)}>Fixed</button>
                    </div></div>
                ${xDynamic ? "" : this._renderSlider("sun_moon_x", "", 0, 100, 1)}
                <div class="compact-field">
                    <span class="compact-field-label">${LABELS.sun_moon_y}</span>
                    <div class="segmented segmented-compact">
                        <button type="button" class=${!yFixed ? "active" : ""} @click=${() => this._updateField("sun_moon_y", "")}>Dynamic</button>
                        <button type="button" class=${yFixed ? "active" : ""} @click=${() => this._updateField("sun_moon_y", 50)}>Fixed</button>
                    </div></div>
                ${yFixed ? this._renderSlider("sun_moon_y", "", 0, 100, 1) : ""}` : ""}</div>`;
      }
      _renderCardStyleSegmented() {
        return b2`<div class="compact-fields">
                    ${this._renderCardHeightControl()}
                    ${this._renderCompactField("card_padding", "e.g. 16px")}</div>`;
      }
      _renderCardHeightControl() {
        const raw = this._formData.card_height;
        const rawStr = String(raw == null ? "" : raw).toLowerCase().trim();
        const mode = ["content", "auto", "square"].includes(rawStr) ? rawStr : "fixed";
        const fixedVal = mode === "fixed" ? String(raw == null ? "" : raw) : "";
        const setMode = (m2) => this._updateField("card_height", m2 === "fixed" ? fixedVal || "220" : m2);
        const modes = [{ v: "content", l: "Content" }, { v: "auto", l: "Fill" }, { v: "fixed", l: "Fixed" }, { v: "square", l: "Square" }];
        return b2`<div class="compact-field">
                <span class="compact-field-label">${LABELS.card_height}</span>
                <div class="segmented segmented-compact">
                    ${modes.map((o5) => b2`<button type="button" class=${mode === o5.v ? "active" : ""}
                        @click=${() => setMode(o5.v)}>${o5.l}</button>`)}</div>
                ${mode === "fixed" ? b2`<input class="card-height-value" type="text" placeholder="e.g. 220"
                        .value=${fixedVal}
                        @change=${(e4) => this._updateField("card_height", e4.target.value || "220")}
                    >` : ""}</div>`;
      }
      _parseOffset(raw) {
        if (!raw || typeof raw !== "string") return [0, 0, 0, 0];
        const parts = raw.trim().split(/\s+/).map((p3) => parseInt(p3, 10) || 0);
        switch (parts.length) {
          case 0:
            return [0, 0, 0, 0];
          case 1:
            return [parts[0], parts[0], parts[0], parts[0]];
          case 2:
            return [parts[0], parts[1], parts[0], parts[1]];
          case 3:
            return [parts[0], parts[1], parts[2], parts[1]];
          default:
            return [parts[0], parts[1], parts[2], parts[3]];
        }
      }
      _serializeOffset(arr) {
        if (arr.every((v2) => v2 === 0)) return "";
        return arr.map((v2) => `${v2}px`).join(" ");
      }
      _setOffsetPart(index, rawValue) {
        const parts = this._parseOffset(this._formData.card_offset);
        parts[index] = parseInt(rawValue, 10) || 0;
        this._updateField("card_offset", this._serializeOffset(parts));
      }
      _renderOffsetPicker() {
        const parts = this._parseOffset(this._formData.card_offset), edges = ["Top", "Right", "Bottom", "Left"];
        return b2`<div class="settings-group-label">${LABELS.card_offset}</div>
                <div class="composite-grid-4">
                    ${edges.map((label, i5) => b2`<label> <span>${label}</span> <input
                                    type="number"
                                    step="1"
                                    .value=${String(parts[i5])}
                                    @change=${(e4) => this._setOffsetPart(i5, e4.target.value)}
                                ></label>`)}</div>`;
      }
      _renderContainerCustomCardsEditor(containerIdx) {
        const container = this._getContainers()[containerIdx] || {};
        const cards = Array.isArray(container.custom_cards) ? container.custom_cards : [];
        return b2`${cards.map((card, idx) => this._renderContainerCardRow(card, idx, cards.length, containerIdx))}
            <button type="button" class="add-card-btn" @click=${() => this._addContainerCard(containerIdx)}>
                <ha-icon icon="mdi:plus"></ha-icon>
                <span>Add card</span></button>`;
      }
      _renderListRow({ idx, total, expanded, title, badge, onToggle, onMoveUp, onMoveDown, onRemove, onDuplicate, body }) {
        return b2`<div class="card-row ${expanded ? "expanded" : ""}">
                <div class="card-row-head" @click=${onToggle}>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    ${badge ? badge : ""}
                    <span class="card-row-title">${title}</span>
                    <div class="card-row-actions" @click=${(e4) => e4.stopPropagation()}>
                        <button type="button" title="Move up" ?disabled=${idx === 0} @click=${onMoveUp}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
                        <button type="button" title="Move down" ?disabled=${idx === total - 1} @click=${onMoveDown}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
                        ${onDuplicate ? b2`<button type="button" title="Duplicate" @click=${onDuplicate}><ha-icon icon="mdi:content-copy"></ha-icon></button>` : ""}
                        <button type="button" title="Delete" @click=${onRemove}><ha-icon icon="mdi:delete-outline"></ha-icon></button></div></div>
                ${expanded ? b2`<div class="card-row-body">${body}</div>` : ""}</div>`;
      }
      _renderContainerCardRow(card, idx, total, containerIdx) {
        const expanded = this._expandedCard === idx;
        const title = b2`<span class="row-title-main">${card && card.type ? String(card.type).replace(/^custom:/, "") : "card"}</span>`;
        const body = b2`<div class="card-size-row">
                <div class="offset-field">
                    <span class="offset-field-label">Custom width</span>
                    <input type="text"
                        placeholder="e.g. 140px or 60%"
                        .value=${card.custom_width || ""}
                        @change=${(e4) => {
          const v2 = e4.target.value.trim();
          const nc = { ...card };
          if (v2) nc.custom_width = v2;
          else delete nc.custom_width;
          this._updateContainerCardAt(containerIdx, idx, nc);
        }}
                    ></div>
                <div class="offset-field">
                    <span class="offset-field-label">Custom height</span>
                    <input type="text"
                        placeholder="e.g. 110px"
                        .value=${card.custom_height || ""}
                        @change=${(e4) => {
          const v2 = e4.target.value.trim();
          const nc = { ...card };
          if (v2) nc.custom_height = v2;
          else delete nc.custom_height;
          this._updateContainerCardAt(containerIdx, idx, nc);
        }}
                    ></div></div>
            <ha-form
                .hass=${this.hass}
                .data=${{ _card: card }}
                .schema=${[{ name: "_card", selector: { object: {} } }]}
                .computeLabel=${() => ""}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          this._updateContainerCardAt(containerIdx, idx, e4.detail && e4.detail.value && e4.detail.value._card || {});
        }}
            ></ha-form>`;
        return this._renderListRow({
          idx,
          total,
          expanded,
          title,
          body,
          onToggle: () => this._toggleCardExpanded(idx),
          onMoveUp: () => this._moveContainerCard(containerIdx, idx, -1),
          onMoveDown: () => this._moveContainerCard(containerIdx, idx, 1),
          onRemove: () => this._removeContainerCard(containerIdx, idx)
        });
      }
      _toggleCardExpanded(idx) {
        this._expandedCard = this._expandedCard === idx ? null : idx;
      }
      _moveContainerCard(containerIdx, idx, delta) {
        const container = { ...this._getContainers()[containerIdx] || {} };
        const cards = [...container.custom_cards || []];
        const target = idx + delta;
        if (target < 0 || target >= cards.length) return;
        [cards[idx], cards[target]] = [cards[target], cards[idx]];
        if (this._expandedCard === idx) this._expandedCard = target;
        else if (this._expandedCard === target) this._expandedCard = idx;
        container.custom_cards = cards;
        this._updateContainerAt(containerIdx, container);
      }
      _removeContainerCard(containerIdx, idx) {
        const container = { ...this._getContainers()[containerIdx] || {} };
        const cards = [...container.custom_cards || []];
        cards.splice(idx, 1);
        if (this._expandedCard === idx) this._expandedCard = null;
        else if (typeof this._expandedCard === "number" && this._expandedCard > idx) this._expandedCard--;
        if (cards.length) container.custom_cards = cards;
        else delete container.custom_cards;
        this._updateContainerAt(containerIdx, container);
      }
      _updateContainerCardAt(containerIdx, idx, newCard) {
        const container = { ...this._getContainers()[containerIdx] || {} };
        const cards = [...container.custom_cards || []];
        cards[idx] = newCard;
        container.custom_cards = cards;
        this._updateContainerAt(containerIdx, container);
      }
      _addContainerCard(containerIdx) {
        const container = { ...this._getContainers()[containerIdx] || {} };
        const cards = [...container.custom_cards || [], { type: "entity", entity: "", custom_width: "100%" }];
        this._expandedCard = cards.length - 1;
        container.custom_cards = cards;
        this._updateContainerAt(containerIdx, container);
      }
      _buttonTitle(button) {
        const els = button && Array.isArray(button.elements) ? button.elements : [];
        const firstStatic = els.find((e4) => e4 && e4.type === "text" && typeof e4.text === "string" && e4.text.trim());
        const name = (firstStatic ? firstStatic.text : "").toString().trim(), entity = (button && button.entity || "").toString().trim();
        const attribute = (button && button.attribute || "").toString().trim();
        const two = (main, meta) => b2`<span class="row-title-main">${main}</span>${meta ? b2`<span class="row-title-meta">${meta}</span>` : ""}`;
        if (!entity) return two(name || "Choose an entity", name ? "no entity" : "");
        const st = this.hass && this.hass.states && this.hass.states[entity], friendly = st && st.attributes && st.attributes.friendly_name;
        const label = friendly || entity;
        if (button.forecast) {
          const type = button.forecast === "hourly" ? "Hourly" : "Daily", offset = parseInt(button.forecast_offset, 10) || 0;
          const offsetLabel = button.forecast === "hourly" ? offset === 0 ? "now" : `+${offset}h` : offset === 0 ? "today" : offset === 1 ? "tomorrow" : `+${offset}d`;
          const firstFcAttr = (els.find((e4) => e4 && e4.type === "text" && !e4.entity && e4.attribute) || {}).attribute;
          return two(name || label, `${type} \xB7 ${offsetLabel} \xB7 ${firstFcAttr || "condition"}`);
        }
        return two(name || label, name ? attribute ? `${label} \xB7 ${attribute}` : label : attribute);
      }
      _textTitle(button, txt) {
        const t3 = txt && typeof txt === "object" ? txt : {};
        if (t3.entity) {
          const st = this.hass && this.hass.states && this.hass.states[t3.entity];
          const label = st && st.attributes && st.attributes.friendly_name || t3.entity;
          return t3.attribute ? `${label} [${t3.attribute}]` : label;
        }
        if (typeof t3.text === "string" && t3.text.trim()) return `\u201C${t3.text.trim()}\u201D`;
        if (t3.attribute) return button.forecast && t3.attribute === "datetime" ? "Time label" : `[${t3.attribute}]`;
        if (button.forecast) return "Forecast [condition]";
        return button.attribute ? `[${button.attribute}]` : "Entity value";
      }
      _cleanButton(button) {
        const out = { ...button };
        if (!out.entity) {
          delete out.attribute;
          delete out.forecast;
          delete out.forecast_offset;
        }
        if (!out.forecast) delete out.forecast_offset;
        else delete out.attribute;
        if (out.forecast_offset === 0) delete out.forecast_offset;
        if (Array.isArray(out.elements)) {
          const elements = out.elements.map((e4) => this._cleanElement(e4 || {})).filter((e4) => e4 && (e4.type === "text" || e4.type === "icon" || e4.type === "bar"));
          if (elements.length === 0) delete out.elements;
          else if (elements.length === 1 && elements[0].type === "text" && Object.keys(elements[0]).length === 1) delete out.elements;
          else out.elements = elements;
        }
        if (out.type === "ring") {
          if (!out.ring_values && (out.gauge_entity || out.gauge_attribute)) out.ring_values = [{ entity: out.gauge_entity, attribute: out.gauge_attribute }];
          delete out.gauge_entity;
          delete out.gauge_attribute;
          this._cleanGauge(out, "ring_");
        } else for (const k2 of Object.keys(out)) if (/^(ring|gauge)_/.test(k2)) delete out[k2];
        if (!Array.isArray(out.color_thresholds) || out.color_thresholds.length === 0) {
          delete out.color_thresholds;
          delete out.color_threshold_entity;
          delete out.color_threshold_attribute;
        }
        for (const k2 of Object.keys(out)) {
          const v2 = out[k2];
          if (v2 === "" || v2 === null || v2 === void 0 || v2 === false && !["background", "icon_background", "shadow", "ring_fill"].includes(k2)) delete out[k2];
        }
        return out;
      }
      _cleanElement(el) {
        const out = { ...el || {} };
        const type = out.type === "icon" || out.type === "bar" ? out.type : "text";
        out.type = type;
        if (out.source === "entity" && out.entity) delete out.source;
        if (type === "bar") this._cleanGauge(out, "bar_");
        else delete out.bar_values;
        for (const k2 of Object.keys(out)) {
          if (k2 === "type") continue;
          const v2 = out[k2];
          if (type === "text" && k2 === "precision") {
            if (v2 === "" || v2 === null || v2 === void 0) delete out[k2];
            continue;
          }
          if (v2 === "" || v2 === null || v2 === void 0 || v2 === false && k2 !== "icon_background" && k2 !== "bar_fill") delete out[k2];
        }
        return out;
      }
      _cleanGauge(out, p3) {
        const values = (Array.isArray(out[p3 + "values"]) ? out[p3 + "values"] : []).filter((v2) => v2 && typeof v2 === "object").map((v2) => {
          const o5 = { ...v2 };
          for (const k2 of Object.keys(o5)) {
            const val = o5[k2];
            if (val === "" || val === null || val === void 0 || val === false) delete o5[k2];
          }
          return o5;
        });
        if (values.length > 1 || Object.keys(values[0] || {}).length) out[p3 + "values"] = values;
        else delete out[p3 + "values"];
        if (values.length > 1 || out[p3 + "fill"] === false || out[p3 + "needle"] === true) delete out[p3 + "marker"];
        else if (out[p3 + "marker"] !== true) {
          delete out[p3 + "marker_size"];
          delete out[p3 + "marker_icon_size"];
        }
        if (![out[p3 + "range_from"], out[p3 + "range_to"]].some((v2) => v2 !== void 0 && v2 !== null && String(v2) !== "")) delete out[p3 + "range_color"];
      }
      _cleanContainer(container) {
        const out = { ...container || {} };
        const layout = (out.layout || "wrap").toString().toLowerCase();
        if (layout !== "grid") delete out.columns;
        if (layout !== "horizontal-scroll" && layout !== "vertical-scroll") {
          delete out.scroll_count;
          delete out.scroll_fade;
          delete out.scroll_fade_size;
          delete out.row_height;
        }
        if (out.scroll_fade === true) delete out.button_blurred_background;
        else delete out.scroll_fade_size;
        if (layout === "wrap") delete out.layout;
        if (Array.isArray(out.buttons)) {
          const buttons = out.buttons.map((b3) => this._cleanButton(b3 || {}));
          if (buttons.length === 0) delete out.buttons;
          else out.buttons = buttons;
        }
        for (const k2 of Object.keys(out)) {
          const v2 = out[k2];
          if ((k2 === "shadow" || k2 === "button_shadow" || k2 === "button_icon_background") && v2 === false) continue;
          if (Array.isArray(v2)) {
            if (v2.length === 0) delete out[k2];
            continue;
          }
          if (v2 === "" || v2 === null || v2 === void 0 || v2 === false) delete out[k2];
        }
        return out;
      }
      _updateButtonAt(containerIdx, idx, newButton) {
        const list = this._getButtonsForContainer(containerIdx).map((c4, i5) => i5 === idx ? this._cleanButton(newButton) : c4);
        this._commitButtonsInContainer(containerIdx, list);
      }
      _addButton = (containerIdx) => {
        const list = this._getButtonsForContainer(containerIdx);
        const weatherEntity = this._config && this._config.weather_entity || "";
        const newButton = weatherEntity ? { entity: weatherEntity } : {};
        const next = [...list, newButton];
        this._expandedButton = next.length - 1;
        this._commitButtonsInContainer(containerIdx, next);
      };
      _moveButton(containerIdx, idx, delta) {
        const list = [...this._getButtonsForContainer(containerIdx)], target = idx + delta;
        if (target < 0 || target >= list.length) return;
        [list[idx], list[target]] = [list[target], list[idx]];
        if (this._expandedButton === idx) this._expandedButton = target;
        else if (this._expandedButton === target) this._expandedButton = idx;
        this._commitButtonsInContainer(containerIdx, list);
      }
      _removeButton(containerIdx, idx) {
        const list = [...this._getButtonsForContainer(containerIdx)];
        list.splice(idx, 1);
        this._shiftAccordionOnRemove(containerIdx, idx);
        if (this._expandedButton === idx) this._expandedButton = null;
        else if (typeof this._expandedButton === "number" && this._expandedButton > idx) {
          this._expandedButton = this._expandedButton - 1;
        }
        this._commitButtonsInContainer(containerIdx, list);
      }
      _duplicateButton(containerIdx, idx) {
        const list = [...this._getButtonsForContainer(containerIdx)];
        list.splice(idx + 1, 0, { ...list[idx] });
        this._expandedButton = idx + 1;
        this._commitButtonsInContainer(containerIdx, list);
      }
      _toggleButtonExpanded(idx) {
        this._expandedButton = this._expandedButton === idx ? null : idx;
        this.requestUpdate();
      }
      _buttonLabel = (schema) => {
        if (!schema || !schema.name) return "";
        if (schema.name in BUTTON_LABELS) return BUTTON_LABELS[schema.name];
        return schema.name;
      };
      _cssTextField(opts) {
        const { value, label, placeholder, onCommit } = opts;
        const trim = opts.trim !== false;
        const has = value !== void 0 && value !== null && String(value) !== "";
        const inherited = opts.inherit !== void 0 && opts.inherit !== null && String(opts.inherit) !== "" ? String(opts.inherit) : "";
        const ph = inherited || placeholder;
        return b2`<div class="css-field ${has && inherited ? "overridden" : ""}">
                <span class="css-field-label">${label}${has && inherited ? b2`<button type="button" class="revert-dot"
                    title="Back to ${inherited}" @click=${() => onCommit("")}></button>` : ""}</span>
                <input type="text" placeholder=${ph}
                    .value=${has ? String(value) : ""}
                    @change=${(e4) => onCommit(trim ? e4.target.value.trim() : e4.target.value)}></div>`;
      }
      _accKey(containerIdx, idx) {
        return `${containerIdx}:${idx}`;
      }
      _getSecOpen(containerIdx, idx) {
        return this._secOpen && this._secOpen.get(this._accKey(containerIdx, idx)) || null;
      }
      _setSecOpen(containerIdx, idx, val) {
        if (!this._secOpen) this._secOpen = /* @__PURE__ */ new Map();
        if (val) this._secOpen.set(this._accKey(containerIdx, idx), val);
        else this._secOpen.delete(this._accKey(containerIdx, idx));
      }
      _getNestedOpen(containerIdx, idx) {
        return this._nestedOpen && this._nestedOpen.get(this._accKey(containerIdx, idx)) || null;
      }
      _setNestedOpen(containerIdx, idx, val) {
        if (!this._nestedOpen) this._nestedOpen = /* @__PURE__ */ new Map();
        if (val) this._nestedOpen.set(this._accKey(containerIdx, idx), val);
        else this._nestedOpen.delete(this._accKey(containerIdx, idx));
      }
      _shiftAccordionOnRemove(containerIdx, removedIdx) {
        for (const map of [this._secOpen, this._nestedOpen]) {
          if (!map) continue;
          const next = /* @__PURE__ */ new Map();
          for (const [k2, v2] of map) {
            const [c4, i5] = k2.split(":");
            if (Number(c4) !== containerIdx) {
              next.set(k2, v2);
              continue;
            }
            const bi = Number(i5);
            if (bi === removedIdx) continue;
            if (bi > removedIdx) next.set(`${c4}:${bi - 1}`, v2);
            else next.set(k2, v2);
          }
          map.clear();
          for (const [k2, v2] of next) map.set(k2, v2);
        }
      }
      _renderThresholdList(opts) {
        const { list, swatchDefault, addLabel, addColor } = opts;
        const commit = opts.commit;
        const setAt = (ti, patch) => {
          const arr = [...list];
          arr[ti] = { ...arr[ti], ...patch };
          commit(arr);
        };
        const removeAt = (ti) => {
          const arr = [...list];
          arr.splice(ti, 1);
          commit(arr.length ? arr : void 0);
        };
        const add = () => commit([...list, { value: "", color: addColor }]);
        const swatch = (t3, ti, key) => b2`<input type="color" class="button-color-swatch" title=${key === "color" ? "" : "Dark mode"} .value=${t3[key] || t3.color || swatchDefault}
                    @mousedown=${(e4) => this._nudgeColorInput(e4)}
                    @input=${(e4) => setAt(ti, { [key]: e4.target.value })}
                    @change=${(e4) => setAt(ti, { [key]: e4.target.value })}>`;
        return b2`
            ${list.map((t3, ti) => b2`<div class="ring-threshold-row"><span class="threshold-label">≥</span>
                <input type="text" placeholder="value" .value=${String(t3.value != null ? t3.value : "")}
                    @change=${(e4) => setAt(ti, { value: e4.target.value.trim() })}>
                ${swatch(t3, ti, "color")}${opts.dark ? swatch(t3, ti, "color_dark") : ""}
                <button type="button" class="ring-threshold-del" title="Remove" @click=${() => removeAt(ti)}><ha-icon icon="mdi:close" style="--mdc-icon-size:14px"></ha-icon></button></div>`)}
            <button type="button" class="ring-threshold-add" @click=${add}><ha-icon icon="mdi:plus" style="--mdc-icon-size:14px"></ha-icon> ${addLabel}</button>`;
      }
      _renderButtonRow(button, idx, total, containerIdx) {
        const expanded = this._expandedButton === idx;
        const isFc = !!button.forecast;
        const buttonType = button.type || "";
        if (!expanded) {
          return this._renderListRow({
            idx,
            total,
            expanded,
            body: "",
            title: this._buttonTitle(button),
            onToggle: () => this._toggleButtonExpanded(idx),
            onMoveUp: () => this._moveButton(containerIdx, idx, -1),
            onMoveDown: () => this._moveButton(containerIdx, idx, 1),
            onDuplicate: () => this._duplicateButton(containerIdx, idx),
            onRemove: () => this._removeButton(containerIdx, idx)
          });
        }
        const entityId = (button.entity || "").toString().trim();
        const hasEntity = !!entityId;
        const fcEntityMissing = isFc && entityId && !entityId.startsWith("weather.");
        const cardWeatherEntity = this._config && this._config.weather_entity || "";
        const update = (next) => this._updateButtonAt(containerIdx, idx, next);
        const buttonForm = (schema) => b2`<ha-form .hass=${this.hass} .data=${button}
                .schema=${schema} .computeLabel=${this._buttonLabel}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          update(e4.detail && e4.detail.value || {});
        }}></ha-form>`;
        const container = this._getContainers()[containerIdx] || {};
        const containerScrollable = ["horizontal-scroll", "vertical-scroll"].includes((container.layout || "").toString().toLowerCase());
        const BTN_INHERIT = { text_size: "button_text_size", padding: "button_padding", inner_gap: "button_gap" };
        const cssField = (key, label, placeholder) => this._cssTextField({
          value: button[key],
          label,
          placeholder,
          trim: true,
          inherit: BTN_INHERIT[key] ? container[BTN_INHERIT[key]] : void 0,
          onCommit: (v2) => {
            const next = { ...button };
            if (v2) next[key] = v2;
            else delete next[key];
            update(next);
          }
        });
        const _r = (buttonKey, containerKey) => button[buttonKey] !== void 0 ? button[buttonKey] : container[containerKey] !== void 0 ? container[containerKey] : void 0;
        const fmt = buttonStyle(_r("style", "button_style"));
        const fcOff = parseInt(button.forecast_offset, 10) || 0;
        const st = this.hass && this.hass.states && this.hass.states[entityId];
        const stAttr = st && st.attributes;
        const elements = Array.isArray(button.elements) && button.elements.length ? button.elements.map((e4) => e4 && typeof e4 === "object" ? e4 : {}) : [{ type: "text" }];
        const commitElements = (arr) => {
          const n4 = { ...button };
          if (!arr.length) delete n4.elements;
          else n4.elements = arr;
          update(n4);
        };
        const updateEl = (ei, nextEl) => commitElements(elements.map((e4, i5) => i5 === ei ? nextEl : e4));
        const containerFmtNow = buttonStyle(container.button_style);
        const formatPicker = this._renderLayoutPicker(fmt, (f3) => {
          const n4 = { ...button };
          if (f3 === containerFmtNow) delete n4.style;
          else n4.style = f3;
          update(n4);
        });
        const nestedOpen = this._getNestedOpen(containerIdx, idx);
        const setNested = (v2) => {
          this._setNestedOpen(containerIdx, idx, v2);
          this.requestUpdate();
        };
        const moveEl = (ei, dir) => {
          const arr = [...elements];
          const ni = ei + dir;
          if (ni < 0 || ni >= arr.length) return;
          [arr[ei], arr[ni]] = [arr[ni], arr[ei]];
          if (nestedOpen === `el-${ei}`) setNested(`el-${ni}`);
          else if (nestedOpen === `el-${ni}`) setNested(`el-${ei}`);
          commitElements(arr);
        };
        const removeEl = (ei) => {
          const arr = [...elements];
          arr.splice(ei, 1);
          if (nestedOpen === `el-${ei}`) setNested(null);
          commitElements(arr);
        };
        const addEl = (type) => {
          const seed = type === "bar" ? { type: "bar" } : type === "icon" ? { type: "icon" } : { type: "text" };
          setNested(`el-${elements.length}`);
          commitElements([...elements, seed]);
        };
        const elReorder = (ei) => b2`<span class="vcb-reorder" @click=${(e4) => e4.stopPropagation()}>
            <button type="button" ?disabled=${ei === 0} @click=${() => moveEl(ei, -1)} title="Move up"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
            <button type="button" ?disabled=${ei === elements.length - 1} @click=${() => moveEl(ei, 1)} title="Move down"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
            <button type="button" @click=${() => removeEl(ei)} title="Remove"><ha-icon icon="mdi:close"></ha-icon></button></span>`;
        const iconElContent = (el, ei, spacing) => {
          const isWeatherIcon = (el.icon || "").toString().trim().toLowerCase() === "weather";
          const iconSourceEntity = (el.entity || "").toString().trim() || entityId;
          const patchEl = (patch, strip) => {
            const n4 = { ...el, ...patch };
            if (strip) for (const k2 of strip) delete n4[k2];
            updateEl(ei, n4);
          };
          const EL_INHERIT = { icon_size: ["icon_size", "button_icon_size"], icon_padding: ["icon_padding", "button_icon_padding"] };
          const elCss = (key, label, placeholder) => {
            const ch = EL_INHERIT[key];
            const inherit = ch ? button[ch[0]] !== void 0 && button[ch[0]] !== "" ? button[ch[0]] : container[ch[1]] : void 0;
            return this._cssTextField({
              value: el[key],
              label,
              placeholder,
              trim: true,
              inherit,
              onCommit: (v2) => {
                const n4 = { ...el };
                if (v2) n4[key] = v2;
                else delete n4[key];
                updateEl(ei, n4);
              }
            });
          };
          return b2`${isWeatherIcon ? b2`<div class="weather-icon-active">
                    <ha-icon icon="mdi:weather-partly-cloudy" style="--mdc-icon-size:20px;color:var(--primary-color)"></ha-icon>
                    <div class="weather-icon-active-text"><span>Weather icon</span><span class="weather-icon-active-sub">${isFc ? "Matches forecast" : "Matches weather"}</span></div>
                    <button type="button" class="icon-weather-btn" @click=${() => patchEl({}, ["icon"])}>Remove</button></div>` : b2`<div class="icon-combo">
                    <ha-form style="flex:1;min-width:0" .hass=${this.hass} .data=${{ icon: el.icon || "" }}
                        .schema=${[{ name: "icon", selector: { icon: {} } }]} .computeLabel=${() => ""}
                        @value-changed=${(e4) => {
            e4.stopPropagation();
            const v2 = e4.detail && e4.detail.value && e4.detail.value.icon || "";
            const n4 = { ...el };
            if (v2) n4.icon = v2;
            else delete n4.icon;
            updateEl(ei, n4);
          }}></ha-form>
                    <button type="button" class="icon-weather-btn" title="Weather icon" @click=${() => patchEl({ icon: "weather" }, ["entity", "attribute"])}><ha-icon icon="mdi:weather-partly-cloudy" style="--mdc-icon-size:18px"></ha-icon></button></div>`}
                ${!isWeatherIcon ? b2`${txtForm(el, ei, "entity", [{ name: "entity", selector: { entity: {} } }], "Entity")}
                    ${iconSourceEntity ? txtForm(el, ei, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: iconSourceEntity } } }], "Attribute") : ""}` : ""}
                <div class="clearable-field">
                    <ha-form .hass=${this.hass} .data=${{ icon_path: el.icon_path || "" }} .schema=${[{ name: "icon_path", selector: { text: {} } }]} .computeLabel=${() => LABELS.icon_path || "Icon folder"}
                        @value-changed=${(e4) => {
            e4.stopPropagation();
            const v2 = e4.detail && e4.detail.value && e4.detail.value.icon_path || "";
            const n4 = { ...el };
            if (v2) n4.icon_path = v2;
            else delete n4.icon_path;
            updateEl(ei, n4);
          }}></ha-form>
                    ${el.icon_path ? b2`<button type="button" class="clear-btn" title="Clear" @click=${() => patchEl({}, ["icon_path"])}><ha-icon icon="mdi:close"></ha-icon></button>` : ""}</div>
                <div class="vcb-grid">${elCss("icon_size", "Size", "auto")}${elCss("icon_padding", "Padding", "auto")}</div>
                ${spacing || ""}
                <div class="toggle-group"><label class="toggle-row"><span>Background</span>
                    <ha-switch .checked=${el.icon_background === true}
                        @change=${(e4) => {
            const n4 = { ...el };
            if (e4.target.checked) n4.icon_background = true;
            else {
              if (el.icon_background !== void 0) n4.icon_background = false;
              else delete n4.icon_background;
            }
            updateEl(ei, n4);
          }}></ha-switch></label></div>
                ${el.icon_background === true ? this._renderColorPicker("Color", el.icon_background_color || "", (h3, o5) => {
            const n4 = { ...el };
            if (!h3) delete n4.icon_background_color;
            else n4.icon_background_color = this._serializeColor(h3, o5);
            updateEl(ei, n4);
          }) : ""}
                ${this._renderColorPicker("Icon color", el.color || "", (h3, o5) => patchEl({ color: h3 && this._serializeColor(h3, o5) }))}
                <div class="toggle-group"><label class="toggle-row"><span>Color thresholds</span>
                    <ha-switch .checked=${!!el.color_thresholds} @change=${(e4) => patchEl({ color_thresholds: e4.target.checked && [{ value: "", color: "#ff9800" }] })}></ha-switch></label></div>
                ${el.color_thresholds ? b2`<div class="field-group">
                    ${this._renderThresholdList({ list: el.color_thresholds, swatchDefault: "#ff9800", addColor: "#ff9800", addLabel: "Add threshold", commit: (arr) => patchEl({ color_thresholds: arr }) })}
                    <div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon><span>Compares the icon's entity or attribute, else the button value.</span></div></div>` : ""}`;
        };
        const entitySection = isFc ? "" : buttonForm([{ name: "entity", selector: { entity: {} } }]);
        const emptyNudge = !hasEntity && !isFc ? b2`<div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon> Pick an entity.</div>` : "";
        const secOpen = this._getSecOpen(containerIdx, idx);
        const setSec = (v2) => {
          this._setSecOpen(containerIdx, idx, v2);
          this.requestUpdate();
        };
        const txtField = (txt, ei, key, label, placeholder, keepSpaces) => this._cssTextField({
          value: txt[key],
          label,
          placeholder,
          trim: !keepSpaces,
          inherit: key === "size" ? button.text_size !== void 0 && button.text_size !== "" ? button.text_size : container.button_text_size : void 0,
          onCommit: (v2) => {
            const n4 = { ...txt };
            if (v2) n4[key] = v2;
            else delete n4[key];
            updateEl(ei, n4);
          }
        });
        const txtForm = (txt, ei, key, schema, label) => b2`<ha-form .hass=${this.hass} .data=${{ [key]: txt[key] || "" }}
            .schema=${schema} .computeLabel=${() => label}
            @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value[key];
          const n4 = { ...txt };
          if (v2) n4[key] = v2;
          else delete n4[key];
          updateEl(ei, n4);
        }}></ha-form>`;
        const _isNumericEntity = (eid) => {
          const s4 = this.hass && this.hass.states && this.hass.states[eid];
          if (!s4) return false;
          if (s4.attributes && s4.attributes.state_class) return true;
          if (s4.attributes && s4.attributes.device_class === "temperature") return true;
          const v2 = parseFloat(s4.state);
          return isFinite(v2);
        };
        const _isNumericAttr = (eid, attr) => {
          const s4 = this.hass && this.hass.states && this.hass.states[eid];
          if (!s4 || !attr) return false;
          const v2 = s4.attributes && s4.attributes[attr];
          return v2 != null && isFinite(parseFloat(v2));
        };
        const textElContent = (txt, ei, spacing) => {
          const txtEntityId = (txt.entity || "").toString().trim();
          const fcNumeric = isFc && !txtEntityId && txt.attribute && txt.attribute !== "condition" && txt.attribute !== "datetime";
          let showPrecision = fcNumeric;
          if (!showPrecision && txtEntityId) {
            showPrecision = txt.attribute ? _isNumericAttr(txtEntityId, txt.attribute) : _isNumericEntity(txtEntityId);
          } else if (!showPrecision && !txtEntityId && !isFc && hasEntity) {
            showPrecision = txt.attribute ? _isNumericAttr(entityId, txt.attribute) : _isNumericEntity(entityId);
          }
          const wantsEntity = txtEntityId || txt.source === "entity";
          return b2`${txtField(txt, ei, "text", "Text", "Static text")}
                ${isFc ? b2`<div class="segmented segmented-compact">
                    <button type="button" class=${!wantsEntity ? "active" : ""}
                        @click=${() => {
            const n4 = { ...txt };
            delete n4.entity;
            delete n4.attribute;
            delete n4.source;
            updateEl(ei, n4);
          }}>Forecast</button>
                    <button type="button" class=${wantsEntity ? "active" : ""}
                        @click=${() => {
            const n4 = { ...txt };
            n4.source = "entity";
            delete n4.attribute;
            updateEl(ei, n4);
          }}>Entity</button></div>` : ""}
                ${!isFc || wantsEntity ? txtForm(txt, ei, "entity", [{ name: "entity", selector: { entity: {} } }], "Entity") : ""}
                ${txtEntityId ? txtForm(txt, ei, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: txtEntityId } } }], "Attribute") : isFc && !wantsEntity ? txtForm(txt, ei, "attribute", [{ name: "attribute", selector: { select: { mode: "dropdown", options: FC_TEXT_ATTRIBUTES } } }], "Show") : !isFc && hasEntity ? txtForm(txt, ei, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: entityId } } }], "Attribute") : ""}
                ${showPrecision ? (() => {
            const prec = txt.precision !== void 0 ? txt.precision : 0;
            const setPrec = (v2) => {
              const n4 = { ...txt };
              if (v2 >= 0) n4.precision = v2;
              else delete n4.precision;
              updateEl(ei, n4);
            };
            return this._slider({ value: prec, fallback: 0, min: 0, max: 2, step: 1, int: true, label: "Decimals", onCommit: setPrec });
          })() : ""}
                <div class="vcb-grid">${txtField(txt, ei, "format", "Custom unit", "", true)}${txtField(txt, ei, "size", "Size", "auto")}</div>
                <div class="segmented segmented-compact">
                    ${[{ v: "", l: "Normal" }, { v: "500", l: "Medium" }, { v: "600", l: "Semibold" }, { v: "700", l: "Bold" }].map((o5) => b2`<button type="button" class=${(txt.weight || "") === o5.v ? "active" : ""}
                        @click=${() => {
            const n4 = { ...txt };
            if (o5.v) n4.weight = o5.v;
            else delete n4.weight;
            updateEl(ei, n4);
          }}>${o5.l}</button>`)}</div>
                ${this._renderColorPicker("Text color", txt.color || "", (h3, o5) => {
            const n4 = { ...txt };
            if (h3) n4.color = this._serializeColor(h3, o5);
            else delete n4.color;
            updateEl(ei, n4);
          })}
                ${txtForm(txt, ei, "overflow", [{ name: "overflow", selector: { select: { mode: "dropdown", options: OPT.button_overflow } } }], "Overflow")}
                ${spacing || ""}
                <div class="toggle-group"><label class="toggle-row"><span>Fancy unit</span>
                    <ha-switch .checked=${txt.fancy_unit === true} @change=${(e4) => {
            const n4 = { ...txt };
            if (e4.target.checked) n4.fancy_unit = true;
            else delete n4.fancy_unit;
            updateEl(ei, n4);
          }}></ha-switch></label></div>`;
        };
        const section = (key, icon, title, content, hidden) => {
          const isOpen = secOpen === key;
          return b2`<div class="vcb-section ${hidden ? "dimmed" : ""}">
                <div class="vcb-section-head ${isOpen ? "open" : ""}" @click=${() => setSec(isOpen ? null : key)}>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    <ha-icon icon=${icon}></ha-icon>
                    <span class="vcb-section-title">${title}</span></div>
                ${isOpen ? b2`<div class="vcb-section-body">${content}</div>` : ""}</div>`;
        };
        const elTypeIcon = (k2) => k2 === "icon" ? "mdi:image-outline" : k2 === "bar" ? "mdi:chart-bar" : "mdi:text-short";
        const elTitle = (el) => {
          if (el.type === "icon") return (el.icon || "").toString().trim().toLowerCase() === "weather" ? "Weather icon" : el.attribute || el.icon || "Icon";
          if (el.type === "bar") {
            const n4 = Array.isArray(el.bar_values) ? el.bar_values.length : 0;
            return n4 > 1 ? `Bar (${n4} values)` : "Bar";
          }
          return this._textTitle(button, el);
        };
        const typePicker = b2`<div class="button-type-picker">
            <button type="button" class="button-type-btn ${!isFc ? "active" : ""}"
                @click=${() => {
          const n4 = { ...button };
          delete n4.forecast;
          delete n4.forecast_offset;
          update(n4);
        }}
            ><ha-icon class="button-type-icon ${!isFc ? "active-icon" : ""}" icon="mdi:gauge"></ha-icon>
                <div class="button-type-text"><span class="button-type-name">Sensor</span><span class="button-type-desc">Live entity</span></div></button>
            <button type="button" class="button-type-btn ${isFc ? "active" : ""}"
                @click=${() => {
          const cur = entityId;
          const ent = cur && cur.startsWith("weather.") ? cur : cardWeatherEntity || cur;
          const n4 = { ...button, forecast: "daily", forecast_offset: 0 };
          delete n4.attribute;
          if (!Array.isArray(n4.elements) || !n4.elements.some((e4) => e4 && e4.type === "text" && Object.keys(e4).length > 1)) {
            n4.elements = [{ type: "icon", icon: "weather" }, { type: "text", attribute: "temperature" }];
          }
          if (ent) n4.entity = ent;
          update(n4);
        }}
            ><ha-icon class="button-type-icon ${isFc ? "active-icon" : ""}" icon="mdi:calendar-clock"></ha-icon>
                <div class="button-type-text"><span class="button-type-name">Forecast</span><span class="button-type-desc">Weather</span></div></button></div>`;
        const fcSettings = isFc && !fcEntityMissing ? b2`<div class="segmented">
                    ${[{ v: "daily", l: "Daily" }, { v: "hourly", l: "Hourly" }].map((o5) => b2`<button type="button" class=${button.forecast === o5.v ? "active" : ""}
                        @click=${() => update({ ...button, forecast: o5.v, forecast_offset: 0 })}>${o5.l}</button>`)}</div>
                ${(() => {
          const mx = button.forecast === "hourly" ? 23 : 6, lb = button.forecast === "hourly" ? "Hours ahead" : "Days ahead", hp = button.forecast === "hourly" ? fcOff === 0 ? "Now" : `+${fcOff}h` : fcOff === 0 ? "Today" : fcOff === 1 ? "Tomorrow" : `+${fcOff} days`;
          return this._slider({
            value: fcOff,
            fallback: 0,
            min: 0,
            max: mx,
            step: 1,
            int: true,
            label: lb,
            helper: hp,
            onCommit: (v2) => update({ ...button, forecast_offset: v2 })
          });
        })()}` : null;
        const fcMissingHint = isFc && fcEntityMissing ? b2`<div class="button-nudge warning" style="margin-top:var(--origami-e-s2)"><ha-icon icon="mdi:alert-circle-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon> Forecast needs a weather entity.</div>` : null;
        let forecastContent = null;
        if (isFc) {
          const fcEntity = buttonForm([{ name: "entity", selector: { entity: { domain: "weather" } } }]);
          forecastContent = b2`${fcEntity}${fcMissingHint}${fcSettings}`;
        }
        const hasMarqueeText = elements.some((t3) => t3 && t3.type === "text" && (t3.overflow || "").toString().toLowerCase() === "marquee");
        const marqueeContent = hasMarqueeText ? b2`<div class="toggle-group"><label class="toggle-row"><span>Right-to-left</span>
                <ha-switch .checked=${button.marquee_rtl === true} @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) n4.marquee_rtl = true;
          else delete n4.marquee_rtl;
          update(n4);
        }}></ha-switch></label></div>
            ${(() => {
          const spd = parseFloat(button.marquee_speed) || 30;
          return this._slider({
            value: spd,
            fallback: 30,
            min: 5,
            max: 100,
            step: 5,
            int: true,
            label: "Speed",
            onCommit: (v2) => update({ ...button, marquee_speed: v2 })
          });
        })()}` : null;
        const containerAlign = (container.align || "start").toString().toLowerCase();
        const appearContent = b2`${formatPicker}
            <div class="segmented">
                ${[{ v: "start", l: "Left" }, { v: "center", l: "Center" }, { v: "end", l: "Right" }, { v: "spread", l: "Spread" }].map((o5) => b2`<button type="button" class=${(button.align || containerAlign) === o5.v ? "active" : ""}
                    @click=${() => {
          const n4 = { ...button };
          if (o5.v === containerAlign) delete n4.align;
          else n4.align = o5.v;
          update(n4);
        }}>${o5.l}</button>`)}</div>
            <div class="toggle-group">
                <label class="toggle-row"><span>Background</span><ha-switch .checked=${button.background !== false}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (!e4.target.checked) n4.background = false;
          else delete n4.background;
          update(n4);
        }}></ha-switch></label>
                <label class="toggle-row"><span>Background image</span><ha-switch .checked=${button.background_image === true}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) n4.background_image = true;
          else {
            delete n4.background_image;
            delete n4.background_image_path;
          }
          update(n4);
        }}></ha-switch></label>
                ${button.background !== false ? b2`<label class="toggle-row"><span>Blurred</span><ha-switch .checked=${button.blurred_background === true}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) n4.blurred_background = true;
          else delete n4.blurred_background;
          update(n4);
        }}></ha-switch></label>` : ""}
                <label class="toggle-row"><span>Round shape</span><ha-switch .checked=${button.button_round === true}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) n4.button_round = true;
          else delete n4.button_round;
          update(n4);
        }}></ha-switch></label>
                ${containerScrollable ? "" : b2`<label class="toggle-row"><span>Shadow</span><ha-switch .checked=${button.shadow !== false}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (!e4.target.checked) n4.shadow = false;
          else delete n4.shadow;
          update(n4);
        }}></ha-switch></label>`}
                <label class="toggle-row"><span>Text shadow</span><ha-switch .checked=${button.text_shadow === true}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) n4.text_shadow = true;
          else delete n4.text_shadow;
          update(n4);
        }}></ha-switch></label></div>
            ${button.background !== false ? this._renderColorPicker("Button color", button.background_color || "", (h3, o5) => {
          const next = { ...button };
          if (!h3) delete next.background_color;
          else next.background_color = this._serializeColor(h3, o5);
          update(next);
        }) : ""}
            ${button.background_image === true ? this._cssTextField({
          value: button.background_image_path,
          label: "Image path",
          placeholder: "/local/my-image.jpg",
          trim: true,
          onCommit: (v2) => {
            const n4 = { ...button };
            if (v2) n4.background_image_path = v2;
            else delete n4.background_image_path;
            update(n4);
          }
        }) : ""}
            <div class="vcb-grid">
                ${cssField("width", "Width", "auto")}${cssField("height", "Height", "auto")}
                ${cssField("text_size", "Text size", "auto")}${cssField("padding", "Padding", "auto")}
                ${cssField("inner_gap", "Element gap", "auto")}</div>
            <div class="toggle-group"><label class="toggle-row"><span>Color thresholds</span>
                <ha-switch .checked=${Array.isArray(button.color_thresholds) && button.color_thresholds.length > 0}
                    @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) n4.color_thresholds = [{ value: "", color: "#ff9800" }];
          else {
            delete n4.color_thresholds;
            delete n4.color_threshold_entity;
            delete n4.color_threshold_attribute;
          }
          update(n4);
        }}></ha-switch></label></div>
            ${Array.isArray(button.color_thresholds) && button.color_thresholds.length > 0 ? b2`<div class="field-group">
                <details class="disclosure" @toggle=${this._onDisclosureToggle}><summary><ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon><ha-icon icon="mdi:cog-outline"></ha-icon><span>Threshold entity</span></summary>
                    <div class="disclosure-body">
                        <ha-form .hass=${this.hass} .data=${{ color_threshold_entity: button.color_threshold_entity || "" }} .schema=${[{ name: "color_threshold_entity", selector: { entity: {} } }]} .computeLabel=${() => "Entity"}
                            @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value.color_threshold_entity;
          const n4 = { ...button };
          if (v2) n4.color_threshold_entity = v2;
          else delete n4.color_threshold_entity;
          update(n4);
        }}></ha-form>
                        ${(button.color_threshold_entity || "").trim() ? b2`<ha-form .hass=${this.hass} .data=${{ color_threshold_attribute: button.color_threshold_attribute || "" }} .schema=${[{ name: "color_threshold_attribute", selector: { attribute: { entity_id: button.color_threshold_entity } } }]} .computeLabel=${() => "Attribute"}
                            @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value.color_threshold_attribute;
          const n4 = { ...button };
          if (v2) n4.color_threshold_attribute = v2;
          else delete n4.color_threshold_attribute;
          update(n4);
        }}></ha-form>` : ""}</div></details>
                ${this._renderThresholdList({
          list: button.color_thresholds,
          swatchDefault: "#ff9800",
          addColor: "#ff9800",
          addLabel: "Add threshold",
          commit: (arr) => update({ ...button, color_thresholds: arr })
        })}</div>` : ""}`;
        const gaugeFields = (prefix, obj, commit, extra) => {
          const p3 = prefix + "_", label = prefix === "ring" ? "Ring" : "Bar";
          const thresholds = Array.isArray(obj[p3 + "thresholds"]) ? obj[p3 + "thresholds"] : [];
          const write = (key, value) => {
            const n4 = { ...obj };
            const empty = value === null || value === void 0 || value === "" || Array.isArray(value) && !value.length;
            if (empty) delete n4[key];
            else n4[key] = value;
            commit(n4);
          };
          const cssFor = (key, text, placeholder) => this._cssTextField({ value: obj[key], label: text, placeholder, trim: true, onCommit: (v2) => write(key, v2) });
          const hasRange = [obj[p3 + "range_from"], obj[p3 + "range_to"]].some((v2) => v2 !== void 0 && v2 !== null && String(v2) !== "");
          return b2`<div class="vcb-grid">${cssFor(p3 + "min", "Min", "0")}${cssFor(p3 + "max", "Max", "100")}</div>
                <div class="vcb-grid">${prefix === "ring" ? b2`${cssFor("ring_width", "Thickness", "4")}${cssFor("ring_gap", "Gap", "3")}${cssFor("ring_start", "Start angle", "0")}${cssFor("ring_arc", "Arc", "360")}` : b2`${cssFor("bar_height", "Thickness", "4")}`}</div>
                ${extra || ""}
                ${this._renderColorPicker(`${label} color`, obj[p3 + "color"] || "", (h3, o5) => {
            write(p3 + "color", h3 ? this._serializeColor(h3, o5) : "");
          })}
                <div class="field-group">
                    <div class="field-group-label">Range</div>
                    <div class="vcb-grid">${cssFor(p3 + "range_from", "From", "start")}${cssFor(p3 + "range_to", "To", "end")}</div>
                    ${hasRange ? this._renderColorPicker("Range color", obj[p3 + "range_color"] || "", (h3, o5) => write(p3 + "range_color", h3 ? this._serializeColor(h3, o5) : "")) : ""}</div>
                ${gaugeValues(p3, obj, write, cssFor)}
                <details class="disclosure" @toggle=${this._onDisclosureToggle}><summary><ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon><ha-icon icon="mdi:cog-outline"></ha-icon><span>Thresholds</span></summary>
                    <div class="disclosure-body">
                        <div class="segmented">${[{ v: "solid", l: "Solid" }, { v: "segments", l: "Segments" }, { v: "gradient", l: "Gradient" }].map((o5) => b2`<button type="button" class=${(obj[p3 + "threshold_mode"] || "solid") === o5.v ? "active" : ""}
                            @click=${() => {
            write(p3 + "threshold_mode", o5.v === "solid" ? "" : o5.v);
          }}>${o5.l}</button>`)}</div>
                        ${this._renderThresholdList({
            list: thresholds,
            swatchDefault: "#ff0000",
            addColor: "#ff9800",
            addLabel: "Add",
            commit: (arr) => write(p3 + "thresholds", arr)
          })}</div></details>`;
        };
        const gaugeValues = (p3, obj, write, cssFor) => {
          const values = Array.isArray(obj[p3 + "values"]) && obj[p3 + "values"].length ? obj[p3 + "values"].map((v2) => v2 && typeof v2 === "object" ? v2 : {}) : [{}];
          const fill = obj[p3 + "fill"] !== false, needle = obj[p3 + "needle"] === true, markersOn = needle || values.length > 1 || obj[p3 + "marker"] === true || !fill;
          const commitValues = (arr) => write(p3 + "values", arr);
          const setValue = (vi, patch) => commitValues(values.map((v2, i5) => i5 === vi ? { ...v2, ...patch } : v2));
          const addValue = () => commitValues([...values, {}]);
          const removeValue = (vi) => {
            const arr = [...values];
            arr.splice(vi, 1);
            commitValues(arr);
          };
          const moveValue = (vi, dir) => {
            const arr = [...values];
            const ni = vi + dir;
            if (ni < 0 || ni >= arr.length) return;
            [arr[vi], arr[ni]] = [arr[ni], arr[vi]];
            commitValues(arr);
          };
          const valueTitle = (v2, vi) => {
            if ((v2.value ?? "") !== "") return `Fixed ${v2.value}`;
            const vid = (v2.entity || "").toString().trim();
            if (vid) {
              const st2 = this.hass && this.hass.states && this.hass.states[vid];
              const name = st2 && st2.attributes && st2.attributes.friendly_name || vid;
              return v2.attribute ? `${name} [${v2.attribute}]` : name;
            }
            if (v2.attribute) return `[${v2.attribute}]`;
            return vi === 0 ? isFc ? "Forecast value" : "Button value" : "New value";
          };
          const valueForm = (v2, vi, key, schema, label) => b2`<ha-form .hass=${this.hass} .data=${{ [key]: v2[key] || "" }}
                .schema=${schema} .computeLabel=${() => label}
                @value-changed=${(e4) => {
            e4.stopPropagation();
            const nv = e4.detail && e4.detail.value && e4.detail.value[key];
            setValue(vi, { [key]: nv || "" });
          }}></ha-form>`;
          const valueAttr = (v2, vi) => {
            const vid = (v2.entity || "").toString().trim();
            if (vid) return valueForm(v2, vi, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: vid } } }], "Attribute");
            if (isFc) return valueForm(v2, vi, "attribute", [{ name: "attribute", selector: { select: { mode: "dropdown", options: FC_ATTRIBUTES } } }], "Forecast attribute");
            if (hasEntity) return valueForm(v2, vi, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: entityId } } }], "Attribute");
            return "";
          };
          return b2`<div class="field-group">
                <div class="field-group-label">Values</div>
                ${values.map((v2, vi) => b2`<details class="disclosure" @toggle=${this._onDisclosureToggle}>
                    <summary><ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                        <ha-icon icon=${v2.marker_icon || "mdi:map-marker-outline"}></ha-icon>
                        <span>${valueTitle(v2, vi)}</span>
                        ${values.length > 1 ? b2`<span class="vcb-reorder" @click=${(e4) => {
            e4.preventDefault();
            e4.stopPropagation();
          }}>
                            <button type="button" ?disabled=${vi === 0} @click=${() => moveValue(vi, -1)} title="Move up"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                            <button type="button" ?disabled=${vi === values.length - 1} @click=${() => moveValue(vi, 1)} title="Move down"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                            <button type="button" @click=${() => removeValue(vi)} title="Remove"><ha-icon icon="mdi:close"></ha-icon></button></span>` : ""}</summary>
                    <div class="disclosure-body">
                        ${valueForm(v2, vi, "entity", [{ name: "entity", selector: { entity: {} } }], "Value entity")}
                        ${valueAttr(v2, vi)}
                        ${this._cssTextField({ value: v2.value, label: "Fixed value", placeholder: "e.g. 0", trim: true, onCommit: (s4) => setValue(vi, { value: s4 }) })}
                        ${markersOn ? b2`${this._renderColorPicker("Marker color", v2.marker_color || "", (h3, o5) => setValue(vi, { marker_color: h3 ? this._serializeColor(h3, o5) : "" }))}
                            ${this._cssTextField({ value: v2.marker_size, label: "Marker size", placeholder: obj[p3 + "marker_size"] || "thickness", trim: true, onCommit: (s4) => setValue(vi, { marker_size: s4 }) })}
                            ${valueForm(v2, vi, "marker_icon", [{ name: "marker_icon", selector: { icon: {} } }], "Marker icon")}
                            ${v2.marker_icon ? this._renderColorPicker("Icon color", v2.marker_icon_color || "", (h3, o5) => setValue(vi, { marker_icon_color: h3 ? this._serializeColor(h3, o5) : "" })) : ""}` : ""}</div></details>`)}
                <button type="button" class="ring-threshold-add" @click=${addValue}><ha-icon icon="mdi:plus" style="--mdc-icon-size:14px"></ha-icon> Add value</button>
                <div class="toggle-group"><label class="toggle-row"><span>Fill</span>
                    <ha-switch .checked=${fill} @change=${(e4) => write(p3 + "fill", e4.target.checked ? "" : false)}></ha-switch></label>
                    ${fill && values.length < 2 && !needle ? b2`<label class="toggle-row"><span>Marker</span>
                    <ha-switch .checked=${obj[p3 + "marker"] === true} @change=${(e4) => write(p3 + "marker", e4.target.checked || "")}></ha-switch></label>` : ""}
                    ${p3 === "ring_" ? b2`<label class="toggle-row"><span>Needle</span>
                    <ha-switch .checked=${needle} @change=${(e4) => write(p3 + "needle", e4.target.checked || "")}></ha-switch></label>` : ""}</div>
                ${fill && values.length > 1 ? b2`<div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon><span>Fill uses the first value; each value gets a marker.</span></div>` : ""}
                ${markersOn ? b2`<div class="vcb-grid">
                    ${cssFor(p3 + "marker_size", "Marker size", "thickness")}
                    ${cssFor(p3 + "marker_icon_size", "Icon size", "auto")}</div>` : ""}</div>`;
        };
        const barElContent = (el, ei, spacing) => gaugeFields("bar", el, (n4) => updateEl(ei, n4), spacing);
        const isRingType = buttonType === "ring";
        const ringContent = b2`<div class="toggle-group"><label class="toggle-row"><span>Enable</span>
            <ha-switch .checked=${isRingType} @change=${(e4) => {
          const n4 = { ...button };
          if (e4.target.checked) {
            n4.type = "ring";
          } else {
            delete n4.type;
          }
          update(n4);
        }}></ha-switch></label></div>
            ${isRingType ? gaugeFields("ring", button, update) : ""}`;
        const tapContent = buttonForm([{ name: "tap_action", selector: { ui_action: {} } }]);
        const BUTTON_STYLE_KEYS = ["style", "align", "background", "blurred_background", "icon_background", "background_color", "icon_background_color", "padding", "text_size", "inner_gap", "icon_size", "icon_padding", "width", "height", "button_round", "color_thresholds", "color_threshold_entity", "color_threshold_attribute", "text_shadow", "shadow"];
        const hasStyleOverrides = BUTTON_STYLE_KEYS.some((k2) => button[k2] !== void 0 && button[k2] !== "");
        const elSpacing = (el, ei) => {
          const box = (key, label) => this._cssTextField({
            value: el[key],
            label,
            placeholder: "0",
            trim: true,
            onCommit: (v2) => {
              const n4 = { ...el };
              if (v2) n4[key] = v2;
              else delete n4[key];
              updateEl(ei, n4);
            }
          });
          return b2`<div class="vcb-grid">${box("margin", "Margin")}${box("padding", "Padding")}</div>`;
        };
        const elementSection = (el, ei) => {
          const key = `el-${ei}`;
          const isOpen = nestedOpen === key;
          const spacing = elSpacing(el, ei);
          const body2 = el.type === "icon" ? iconElContent(el, ei, spacing) : el.type === "bar" ? barElContent(el, ei, spacing) : textElContent(el, ei, spacing);
          return b2`<div class="vcb-section">
                <div class="vcb-section-head ${isOpen ? "open" : ""}" @click=${() => setNested(isOpen ? null : key)}>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    <ha-icon icon=${elTypeIcon(el.type)}></ha-icon>
                    <span class="vcb-section-title">${elTitle(el)}</span>
                    ${elReorder(ei)}</div>
                ${isOpen ? b2`<div class="vcb-section-body">${body2}</div>` : ""}</div>`;
        };
        const addElBar = b2`<div class="vcb-add-el">
            <button type="button" class="add-card-btn" @click=${() => addEl("text")}><ha-icon icon="mdi:text-short"></ha-icon><span>Text</span></button>
            <button type="button" class="add-card-btn" @click=${() => addEl("icon")}><ha-icon icon="mdi:image-outline"></ha-icon><span>Icon</span></button>
            <button type="button" class="add-card-btn" @click=${() => addEl("bar")}><ha-icon icon="mdi:chart-bar"></ha-icon><span>Bar</span></button></div>`;
        const elementsContent = b2`
            <div class="vcb-nested-group">${elements.map((el, ei) => elementSection(el, ei))}</div>
            ${addElBar}`;
        const body = b2`<div class="vcb">
            ${typePicker}
            ${entitySection}
            ${emptyNudge}
            ${isFc && forecastContent ? section("forecast", "mdi:calendar-clock", "Forecast", forecastContent) : ""}
            ${section("elements", "mdi:view-agenda-outline", "Elements", elementsContent)}
            ${section("ring", "mdi:circle-outline", "Ring", ringContent, !isRingType)}
            ${this._renderDisclosure("Settings", b2`<div class="vcb">
                ${section("appear", "mdi:palette-outline", "Appearance", appearContent)}
                ${marqueeContent ? section("marquee", "mdi:motion-play-outline", "Scrolling", marqueeContent) : ""}
                ${section("pos", "mdi:arrow-all", "Position", this._renderPosition(button, update))}
                ${section("tap", "mdi:gesture-tap", "Tap Action", tapContent)}
                ${section("vis", "mdi:eye-outline", "Visibility", this._renderButtonVisibility(button, containerIdx, idx, update))}
                ${hasStyleOverrides ? b2`<button type="button" class="add-card-btn" style="border-style:solid;border-color:rgba(var(--rgb-error-color,211,47,47),0.35);color:var(--error-color);margin-top:var(--origami-e-s3)"
                    @click=${() => {
          const n4 = { ...button };
          for (const k2 of BUTTON_STYLE_KEYS) delete n4[k2];
          update(n4);
        }}><ha-icon icon="mdi:restore"></ha-icon><span>Reset styles</span></button>` : ""}
            </div>`)}
        </div>`;
        return this._renderListRow({
          idx,
          total,
          expanded,
          body,
          title: this._buttonTitle(button),
          onToggle: () => this._toggleButtonExpanded(idx),
          onMoveUp: () => this._moveButton(containerIdx, idx, -1),
          onMoveDown: () => this._moveButton(containerIdx, idx, 1),
          onDuplicate: () => this._duplicateButton(containerIdx, idx),
          onRemove: () => this._removeButton(containerIdx, idx)
        });
      }
      _parseColor(raw) {
        const s4 = (raw || "").toString().trim();
        const m2 = s4.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i);
        if (m2) {
          const hex = `#${parseInt(m2[1]).toString(16).padStart(2, "0")}${parseInt(m2[2]).toString(16).padStart(2, "0")}${parseInt(m2[3]).toString(16).padStart(2, "0")}`;
          return { hex, opacity: m2[4] !== void 0 ? parseFloat(m2[4]) : 1, hasColor: true };
        }
        if (/^#[0-9a-f]{3,8}$/i.test(s4)) return { hex: s4.slice(0, 7), opacity: 1, hasColor: true };
        return { hex: "#ffffff", opacity: 0, hasColor: false };
      }
      _serializeColor(hex, opacity) {
        if (opacity >= 1) return hex;
        const r4 = parseInt(hex.slice(1, 3), 16), g2 = parseInt(hex.slice(3, 5), 16), b3 = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r4},${g2},${b3},${parseFloat(opacity.toFixed(2))})`;
      }
      _nudgeColorInput(e4) {
        const el = e4.currentTarget || e4.target;
        const v2 = (el.value || "#ffffff").toLowerCase();
        const b3 = parseInt(v2.slice(5, 7), 16);
        el.value = v2.slice(0, 5) + ((b3 ^ 1) >>> 0).toString(16).padStart(2, "0");
      }
      _renderColorPicker(label, raw, onWrite) {
        const { hex, opacity, hasColor } = this._parseColor(raw);
        return b2`<div class="button-color-box">
                <div class="button-color-row">
                    <ha-icon icon="mdi:palette-outline" style="--mdc-icon-size:15px;color:var(--secondary-text-color);flex-shrink:0"></ha-icon>
                    <span class="button-color-label">${label}</span>
                    <input type="color" class="button-color-swatch" .value=${hex}
                        @mousedown=${(e4) => this._nudgeColorInput(e4)}
                        @input=${(e4) => onWrite(e4.target.value, opacity || 1)}
                        @change=${(e4) => onWrite(e4.target.value, opacity || 1)}
                    >
                    ${hasColor ? b2`<button type="button" class="button-color-clear" title="Clear color" @click=${() => onWrite("", 1)}
                    ><ha-icon icon="mdi:close" style="--mdc-icon-size:14px"></ha-icon></button>` : ""}</div>
                ${hasColor ? b2`<div class="button-color-opacity-row"> <span class="button-color-opacity-label">Opacity</span> <input type="range" min="0" max="1" step="0.05" class="button-color-opacity"
                            .value=${String(opacity)}
                            @input=${(e4) => onWrite(hex, parseFloat(e4.target.value))}
                        >
                        <span class="button-color-opacity-val">${Math.round(opacity * 100)}%</span></div>
                ` : ""}</div>`;
      }
      _slider(opts) {
        const { min, max, step = 1, label, helper, statusFn, onCommit } = opts;
        const int = opts.int === true;
        const parse = int ? (v2) => parseInt(v2, 10) : (v2) => parseFloat(v2);
        const fallbackNum = parse(opts.fallback != null ? opts.fallback : min);
        const fb = isFinite(fallbackNum) ? fallbackNum : min;
        const clamp = (v2) => Math.min(max, Math.max(min, isFinite(v2) ? v2 : fb));
        const raw = opts.value != null && opts.value !== "" ? parse(opts.value) : fb;
        const val = clamp(isFinite(raw) ? raw : fb);
        const toPct = (v2) => Math.round((v2 - min) / (max - min) * 100);
        const wrapOf = (e4) => e4.target.closest(".wbk-slider");
        const mirror = (wrap, sel, v2) => {
          const el = wrap && wrap.querySelector(sel);
          if (el) el.value = v2;
        };
        const onDrag = (e4) => {
          const v2 = parse(e4.target.value), wrap = wrapOf(e4);
          e4.target.style.setProperty("--origami-slider-pct", toPct(v2) + "%");
          mirror(wrap, ".wbk-slider-num", v2);
          if (statusFn) {
            const s4 = wrap && wrap.querySelector(".wbk-slider-status");
            if (s4) s4.textContent = statusFn(v2);
          }
        };
        const onRangeCommit = (e4) => onCommit(clamp(parse(e4.target.value)));
        const onNumCommit = (e4) => {
          const v2 = clamp(parse(e4.target.value));
          const wrap = wrapOf(e4), range = wrap && wrap.querySelector(".wbk-slider-range");
          if (range) {
            range.value = v2;
            range.style.setProperty("--origami-slider-pct", toPct(v2) + "%");
          }
          onCommit(v2);
        };
        const statusText = statusFn ? statusFn(val) : null;
        return b2`<div class="wbk-slider">
                <div class="wbk-slider-head">
                    <span class="wbk-slider-label">${label}</span>
                    <input type="number" class="wbk-slider-num" min=${min} max=${max} step=${step}
                        .value=${String(val)} @change=${onNumCommit}></div>
                <input type="range" class="wbk-slider-range" min=${min} max=${max} step=${step}
                    .value=${String(val)} style="--origami-slider-pct:${toPct(val)}%"
                    @input=${onDrag} @change=${onRangeCommit} @click=${onRangeCommit}>
                ${statusText != null ? b2`<div class="wbk-slider-status">${statusText}</div>` : ""}
                ${helper ? b2`<div class="wbk-slider-helper">${helper}</div>` : ""}</div>`;
      }
      _renderSlider(field, label, min, max, step, helper, statusFn) {
        return this._slider({
          value: this._formData[field],
          fallback: DISPLAY_DEFAULTS[field] != null ? DISPLAY_DEFAULTS[field] : min,
          min,
          max,
          step,
          label,
          helper,
          statusFn,
          onCommit: (v2) => this._updateField(field, v2)
        });
      }
      _renderLayoutPicker(fmt, onPick) {
        return b2`<div class="layout-picker">
            ${["inline", "vertical", "split"].map((f3) => b2`<button type="button"
                    class="layout-card ${fmt === f3 ? "active" : ""}" @click=${() => onPick(f3)}>
                    <div class="lp-fig ${f3}">
                        <div class="lp-sq"></div>
                        <div class="lp-txt"><div class="lp-bar lg"></div><div class="lp-bar sm"></div></div>
                    </div></button>`)}</div>`;
      }
      _renderCompactField(field, placeholder) {
        const current = String(this._formData[field] || ""), label = LABELS[field] || field;
        return b2`<div class="compact-field">
                <span class="compact-field-label">${label}</span>
                <input
                    type="text"
                    placeholder=${placeholder}
                    .value=${current}
                    @change=${(e4) => this._updateField(field, e4.target.value || "")}
                ></div>`;
      }
      _renderContainerButtonSettings(container, containerIdx) {
        const uf = (key, value) => this._updateContainerField(containerIdx, key, value);
        const sf = (key, label, placeholder) => this._cssTextField({
          value: container[key],
          label,
          placeholder,
          trim: false,
          onCommit: (v2) => uf(key, v2 || "")
        });
        const bgActive = !!container.background;
        return b2`<div class="vcb">
            <div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon><span>Defaults for all buttons; each button can override.</span></div>
            ${this._renderSubDisclosure("Background", b2`<div class="vcb">
                <div class="toggle-group">
                    <label class="toggle-row"><span>Background</span>
                        <ha-switch .checked=${bgActive}
                            @change=${(e4) => uf("background", e4.target.checked || "")}
                        ></ha-switch></label>
                    ${bgActive ? b2`<label class="toggle-row"><span>Blurred</span>
                        <ha-switch .checked=${container.button_blurred_background === true}
                            @change=${(e4) => {
          const n4 = { ...container };
          if (e4.target.checked) {
            n4.button_blurred_background = true;
            delete n4.scroll_fade;
            delete n4.scroll_fade_size;
          } else delete n4.button_blurred_background;
          this._updateContainerAt(containerIdx, n4);
        }}
                        ></ha-switch></label>` : ""}
                    <label class="toggle-row"><span>Shadow</span>
                        <ha-switch .checked=${container.button_shadow !== false}
                            @change=${(e4) => uf("button_shadow", e4.target.checked ? "" : false)}
                        ></ha-switch></label>
                    <label class="toggle-row"><span>Icon background</span>
                        <ha-switch .checked=${container.button_icon_background === true}
                            @change=${(e4) => uf("button_icon_background", e4.target.checked ? true : "")}
                        ></ha-switch></label>
                    </div>
                ${bgActive ? this._renderContainerColorPicker(containerIdx, "button_background_color", "Button color") : ""}
                ${container.button_icon_background === true ? this._renderContainerColorPicker(containerIdx, "button_icon_background_color", "Icon color") : ""}</div>`)}
            ${this._renderSubDisclosure("Size & spacing", b2`<div class="vcb">
                <div class="vcb-grid">
                    ${sf("button_text_size", "Text size", "auto")}
                    ${sf("button_icon_size", "Icon size", "auto")}
                    ${sf("button_padding", "Button padding", "auto")}
                    ${sf("button_icon_padding", "Icon padding", "auto")}
                    ${sf("button_gap", "Element gap", "auto")}</div></div>`)}</div>`;
      }
      _renderContentLayoutDisclosure() {
        const isRow = ((this._formData || {}).content_direction || "column") === "row";
        const alignOpts = isRow ? [
          { value: "", label: "Left (default)" },
          { value: "end", label: "Right" },
          { value: "center", label: "Center" },
          { value: "between", label: "Space between" },
          { value: "around", label: "Space around" },
          { value: "evenly", label: "Space evenly" }
        ] : OPT.content_align;
        const crossOpts = isRow ? [
          { value: "", label: "Top (default)" },
          { value: "center", label: "Center" },
          { value: "end", label: "Bottom" },
          { value: "stretch", label: "Stretch" },
          { value: "baseline", label: "Baseline" }
        ] : [
          { value: "", label: "Stretch (default)" },
          { value: "start", label: "Left" },
          { value: "center", label: "Center" },
          { value: "end", label: "Right" }
        ];
        return this._renderDisclosure("Content layout", b2`<div class="settings-group">
            <ha-form .hass=${this.hass}
                .data=${{ content_direction: (this._formData || {}).content_direction || "column" }}
                .schema=${[{ name: "content_direction", selector: { select: { mode: "dropdown", options: OPT.content_direction } } }]}
                .computeLabel=${this._computeLabel}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value.content_direction;
          this._updateField("content_direction", v2 === "row" ? "row" : "");
        }}
            ></ha-form>
            <ha-form .hass=${this.hass}
                .data=${{ content_align: (this._formData || {}).content_align || "" }}
                .schema=${[{ name: "content_align", selector: { select: { mode: "dropdown", options: alignOpts } } }]}
                .computeLabel=${() => isRow ? "Horizontal alignment" : "Vertical alignment"}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value.content_align;
          this._updateField("content_align", v2 || "");
        }}
            ></ha-form>
            <ha-form .hass=${this.hass}
                .data=${{ content_align_items: (this._formData || {}).content_align_items || "" }}
                .schema=${[{ name: "content_align_items", selector: { select: { mode: "dropdown", options: crossOpts } } }]}
                .computeLabel=${() => isRow ? "Vertical alignment" : "Horizontal alignment"}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value.content_align_items;
          this._updateField("content_align_items", v2 || "");
        }}
            ></ha-form></div>`);
      }
      _renderButtonContainersEditor() {
        const areas = this._getContainers();
        return b2`
            <div class="sensor-list">
                ${areas.map((container, ai) => {
          const expanded = this._expandedContainer === ai;
          const isCard = !!container.custom_cards;
          const title = this._containerTitle(container, ai);
          const label = isCard ? "Card" : "Buttons";
          const body = expanded ? isCard ? this._renderCardContainerBody(container, ai) : this._renderButtonContainerBody(container, ai) : "";
          return this._renderListRow({
            idx: ai,
            total: areas.length,
            expanded,
            body,
            title: b2`<span class="row-title-main">${label}</span><span class="row-title-meta">${title}</span>`,
            onToggle: () => {
              this._expandedContainer = this._expandedContainer === ai ? null : ai;
              this._expandedButton = null;
              this._expandedCard = null;
            },
            onMoveUp: () => this._moveContainer(ai, -1),
            onMoveDown: () => this._moveContainer(ai, 1),
            onDuplicate: () => this._duplicateContainer(ai),
            onRemove: () => this._removeContainer(ai)
          });
        })}
            </div>
            <div style="display:flex;gap:var(--origami-e-s2)">
                <button type="button" class="add-button-btn" style="flex:1" @click=${() => this._addContainer()}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span>Add buttons</span></button>
                <button type="button" class="add-card-btn" style="flex:1" @click=${() => this._addCardContainer()}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span>Add card</span></button></div>
            ${this._renderContentLayoutDisclosure()}`;
      }
      _addContainer() {
        const areas = [...this._getContainers(), {}];
        this._expandedContainer = areas.length - 1;
        this._expandedButton = null;
        this._commitContainers(areas);
      }
      _addCardContainer() {
        const areas = [...this._getContainers(), { custom_cards: [{ type: "entity", entity: "", custom_width: "100%" }] }];
        this._expandedContainer = areas.length - 1;
        this._expandedButton = null;
        this._expandedCard = 0;
        this._commitContainers(areas);
      }
      _renderCardContainerBody(container, containerIdx) {
        return b2`
            ${this._renderContainerCustomCardsEditor(containerIdx)}
            ${this._renderDisclosure("Visibility", this._renderContainerVisibility(container, containerIdx))}`;
      }
      _moveContainer(idx, delta) {
        const areas = [...this._getContainers()], target = idx + delta;
        if (target < 0 || target >= areas.length) return;
        [areas[idx], areas[target]] = [areas[target], areas[idx]];
        if (this._expandedContainer === idx) this._expandedContainer = target;
        else if (this._expandedContainer === target) this._expandedContainer = idx;
        this._commitContainers(areas);
      }
      _removeContainer(idx) {
        const areas = [...this._getContainers()];
        areas.splice(idx, 1);
        if (this._expandedContainer === idx) this._expandedContainer = null;
        else if (typeof this._expandedContainer === "number" && this._expandedContainer > idx) this._expandedContainer--;
        this._expandedButton = null;
        this._commitContainers(areas);
      }
      _duplicateContainer(idx) {
        const areas = [...this._getContainers()];
        const clone = JSON.parse(JSON.stringify(areas[idx]));
        areas.splice(idx + 1, 0, clone);
        this._expandedContainer = idx + 1;
        this._expandedButton = null;
        this._commitContainers(areas);
      }
      _renderContainerColorPicker(containerIdx, key, label) {
        const container = this._getContainers()[containerIdx] || {};
        const raw = (container[key] || "").toString().trim();
        return this._renderColorPicker(label, raw, (h3, o5) => {
          this._updateContainerField(containerIdx, key, h3 ? this._serializeColor(h3, o5) : "");
        });
      }
      _renderButtonContainerBody(container, containerIdx) {
        const list = this._getButtonsForContainer(containerIdx);
        const uf = (key, value) => this._updateContainerField(containerIdx, key, value);
        const layout = (container.layout || "wrap").toString().toLowerCase();
        const isGrid = layout === "grid";
        const isScroll = layout === "horizontal-scroll" || layout === "vertical-scroll";
        const bgActive = !!container.background;
        const sf = (key, label, placeholder) => this._cssTextField({
          value: container[key],
          label,
          placeholder,
          trim: false,
          onCommit: (v2) => uf(key, v2 || "")
        });
        const containerSlider = (key, label, min, max, step, helper) => this._slider({
          value: container[key],
          fallback: min,
          min,
          max,
          step,
          label,
          helper,
          onCommit: (v2) => uf(key, v2)
        });
        const isVScroll = layout === "vertical-scroll";
        const slots = parseInt(container.scroll_count, 10);
        const fixedSlots = Number.isFinite(slots) && slots > 0 ? slots : 0;
        const scrollFade = container.scroll_fade === true;
        const setScrollFade = (on) => {
          const n4 = { ...container };
          if (on) {
            n4.scroll_fade = true;
            delete n4.button_blurred_background;
          } else {
            delete n4.scroll_fade;
            delete n4.scroll_fade_size;
          }
          this._updateContainerAt(containerIdx, n4);
        };
        const cFmt = buttonStyle(container.button_style);
        const align = (container.align || "start").toString().toLowerCase();
        const alignDropdown = (key, label, options) => b2`<ha-form .hass=${this.hass}
                .data=${{ [key]: container[key] || "" }}
                .schema=${[{ name: key, selector: { select: { mode: "dropdown", options } } }]}
                .computeLabel=${() => label}
                @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value[key];
          uf(key, v2 || "");
        }}
            ></ha-form>`;
        const containerContent = b2`<div class="vcb">
            ${this._renderSubDisclosure("Arrangement", b2`<div class="vcb">
                <div class="segmented">
                    ${OPT.button_container_layout.map((o5) => b2`<button type="button" class=${layout === o5.value ? "active" : ""}
                            @click=${() => uf("layout", o5.value)}
                        >${o5.label}</button>`)}</div>
                ${isGrid ? containerSlider("columns", LABELS.button_container_columns, 1, 12, 1) : ""}
                ${isScroll ? b2`<div class="segmented segmented-compact">
                    ${OPT.button_container_flow.map((o5) => b2`<button type="button" class=${(fixedSlots ? "fixed" : "flow") === o5.value ? "active" : ""}
                            @click=${() => uf("scroll_count", o5.value === "fixed" ? fixedSlots || 3 : "")}
                        >${o5.label}</button>`)}</div>
                ${fixedSlots ? containerSlider("scroll_count", isVScroll ? "Rows visible" : "Columns visible", 1, 10, 1) : ""}
                ${isVScroll && fixedSlots ? "" : b2`<div class="compact-fields">
                    <div class="compact-field"><span class="compact-field-label">Height</span>
                        <input type="text" placeholder=${isVScroll ? "200px" : "auto"} .value=${container.row_height || ""}
                            @change=${(e4) => uf("row_height", e4.target.value.trim() || "")}></div></div>`}
                <div class="toggle-group"><label class="toggle-row"><span>Fade edges</span>
                    <ha-switch .checked=${scrollFade}
                        @change=${(e4) => setScrollFade(e4.target.checked)}></ha-switch></label></div>
                ${scrollFade ? b2`<div class="compact-fields">
                    <div class="compact-field"><span class="compact-field-label">Fade size</span>
                        <input type="text" placeholder="24px" .value=${container.scroll_fade_size || ""}
                            @change=${(e4) => uf("scroll_fade_size", e4.target.value.trim() || "")}></div></div>
                <div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon><span>Blur and fade can't be combined.</span></div>` : ""}` : ""}

                <div class="settings-group-label">Button style</div>
                ${this._renderLayoutPicker(cFmt, (f3) => uf("button_style", f3 === "inline" ? "" : f3))}</div>`)}
            ${this._renderSubDisclosure("Alignment", b2`<div class="vcb">
                ${alignDropdown("justify_content", isVScroll ? "Buttons vertical" : "Buttons horizontal", isVScroll ? OPT.justify_content_column : OPT.justify_content)}
                ${alignDropdown("align_items", isVScroll ? "Buttons horizontal" : "Buttons vertical", isVScroll ? OPT.align_items_row : OPT.align_items)}
                <div class="settings-group-label">Content</div>
                <div class="segmented" style="flex-wrap:nowrap">
                    ${OPT.button_container_align.map((o5) => b2`<button type="button" class=${align === o5.value ? "active" : ""}
                            @click=${() => uf("align", o5.value)}
                        >${o5.label}</button>`)}</div></div>`)}
            ${this._renderSubDisclosure("Grouping", b2`<div class="vcb">
                <div class="toggle-group">
                    <label class="toggle-row"> <span>${LABELS.button_container_grouped}</span> <ha-switch .checked=${container.grouped === true}
                            @change=${(e4) => {
          const on = e4.target.checked;
          uf("grouped", on || "");
          if (on && !bgActive) {
            uf("background", true);
          }
        }}
                        ></ha-switch></label>
                    ${container.grouped === true ? b2`<label class="toggle-row"><span>Blurred</span>
                        <ha-switch .checked=${container.blurred_background === true}
                            @change=${(e4) => uf("blurred_background", e4.target.checked || "")}></ha-switch></label>
                    <label class="toggle-row"><span>Shadow</span>
                        <ha-switch .checked=${container.shadow !== false}
                            @change=${(e4) => uf("shadow", e4.target.checked ? "" : false)}></ha-switch></label>` : ""}
                    <label class="toggle-row"> <span>${LABELS.button_container_separator}</span> <ha-switch .checked=${container.separator === true}
                            @change=${(e4) => uf("separator", e4.target.checked || "")}></ha-switch></label></div>
                ${container.grouped === true ? this._renderContainerColorPicker(containerIdx, "background_color", "Group color") : ""}</div>`)}
            ${this._renderSubDisclosure("Background image", b2`<div class="vcb">
                ${sf("image", "Image path", "/local/home.png or demo-home-image")}
                ${sf("image_dark", "Dark mode image", "/local/home-dark.png")}
                <div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon><span>Sized by the container width. Free-positioned buttons sit on top.</span></div></div>`)}
            ${this._renderSubDisclosure("Position", this._renderPosition(container, (n4) => this._updateContainerAt(containerIdx, n4)))}
            ${this._renderSubDisclosure("Spacing", b2`<div class="vcb">
                <div class="vcb-grid">
                    ${sf("gap", LABELS.button_container_gap, "auto")}
                    ${sf("padding", LABELS.button_container_padding, "auto")}
                    ${sf("margin", LABELS.button_container_margin, "auto")}
                    ${sf("custom_width", LABELS.button_container_width, "auto")}</div></div>`)}</div>`;
        return b2`
            <div class="sensor-list">
                ${list.map((button, idx) => this._renderButtonRow(button, idx, list.length, containerIdx))}</div>
            <button type="button" class="add-button-btn" @click=${() => this._addButton(containerIdx)}>
                <ha-icon icon="mdi:plus"></ha-icon>
                <span>Add button</span></button>
            ${this._renderDisclosure("Container", containerContent)}
            ${this._renderDisclosure("Button styles", this._renderContainerButtonSettings(container, containerIdx))}
            ${this._renderDisclosure("Visibility", this._renderContainerVisibility(container, containerIdx))}`;
      }
      _renderPosition(o5, commit) {
        const isFree = (o5.position || "").toString().toLowerCase() === "custom", anchor = o5.position_anchor || "top-left";
        const set = (patch) => {
          const n4 = { ...o5, ...patch };
          for (const k2 of Object.keys(patch)) if (!patch[k2]) delete n4[k2];
          commit(n4);
        };
        return b2`<div class="vcb">
            <div class="toggle-group"><label class="toggle-row"><span>Free position</span>
                <ha-switch .checked=${isFree} @change=${(e4) => set(e4.target.checked ? { position: "custom", position_anchor: anchor } : { position: "", position_anchor: "", position_x: "", position_y: "" })}></ha-switch></label></div>
            ${isFree ? b2`<div class="free-pos-layout">
                <div><div class="settings-group-label">Anchor</div>
                    <div class="anchor-grid">${["top-left", "top-center", "top-right", "left", "center", "right", "bottom-left", "bottom-center", "bottom-right"].map((v2) => b2`<button type="button" class="anchor-cell ${anchor === v2 ? "active" : ""}" title=${v2}
                        @click=${() => set({ position_anchor: v2 })}></button>`)}</div></div>
                <div><div class="settings-group-label">Offset</div><div class="offset-fields">
                    ${["x", "y"].map((a3) => b2`<div class="offset-field"><span class="offset-field-label">${a3.toUpperCase()}</span><input type="text" placeholder="0" .value=${String(o5["position_" + a3] || "")}
                        @change=${(e4) => set({ ["position_" + a3]: e4.target.value.trim() })}></div>`)}</div></div></div>` : ""}</div>`;
      }
      _renderVisibilityConditions(conditions, commitList) {
        const CONDITION_TYPES = [
          { value: "state", label: "State" },
          { value: "numeric_state", label: "Numeric state" },
          { value: "screen", label: "Screen size" },
          { value: "user", label: "User" }
        ];
        const removeCondition = (ci) => {
          const arr = [...conditions];
          arr.splice(ci, 1);
          commitList(arr);
        };
        const updateCondition = (ci, patch) => {
          const arr = [...conditions];
          arr[ci] = { ...arr[ci], ...patch };
          commitList(arr);
        };
        const boundIsRef = (v2) => !!v2 && typeof v2 === "object";
        const setBound = (ci, key, value) => {
          const arr = [...conditions];
          const n4 = { ...arr[ci] };
          if (value === void 0) delete n4[key];
          else n4[key] = value;
          arr[ci] = n4;
          commitList(arr);
        };
        const boundField = (c4, ci, key, label) => {
          const v2 = c4[key], isRef = boundIsRef(v2);
          const patchRef = (patch) => setBound(ci, key, { ...v2, ...patch });
          return b2`<div class="css-field">
                <span class="css-field-label">${label}
                    <button type="button" class="bound-mode ${isRef ? "active" : ""}"
                        title=${isRef ? "Compare to a number" : "Compare to a forecast value"}
                        @click=${() => setBound(ci, key, isRef ? void 0 : { forecast: "daily", attribute: "templow" })}>
                        <ha-icon icon="mdi:link-variant" style="--mdc-icon-size:12px"></ha-icon></button></span>
                ${isRef ? b2`<div class="bound-ref">
                    <select @change=${(e4) => patchRef({ forecast: e4.target.value })}>
                        ${["daily", "hourly"].map((o5) => b2`<option value=${o5} ?selected=${(v2.forecast || "daily") === o5}>${o5}</option>`)}</select>
                    <select @change=${(e4) => patchRef({ attribute: e4.target.value })}>
                        ${FC_ATTRIBUTES.map((o5) => b2`<option value=${o5.value} ?selected=${v2.attribute === o5.value}>${o5.label}</option>`)}</select></div>` : b2`<input type="text" placeholder="" .value=${v2 != null ? String(v2) : ""}
                    @change=${(e4) => {
            const raw = e4.target.value.trim();
            setBound(ci, key, raw === "" ? void 0 : parseFloat(raw));
          }}>`}</div>`;
        };
        const addCondition = () => {
          commitList([...conditions, { condition: "state", entity: "", state: "" }]);
        };
        return b2`${conditions.map((c4, ci) => {
          const cType = c4.condition || "state";
          const onTypeChange = (newType) => {
            const base = { condition: newType };
            if (newType === "state") {
              base.entity = c4.entity || "";
              base.state = "";
            } else if (newType === "numeric_state") {
              base.entity = c4.entity || "";
            } else if (newType === "screen") {
              base.media_query = c4.media_query || "(min-width: 768px)";
            } else if (newType === "user") {
              base.users = c4.users || [];
            }
            const arr = [...conditions];
            arr[ci] = base;
            commitList(arr);
          };
          return b2`<div class="field-group" style="position:relative">
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--origami-e-s2)">
                        <span class="field-group-label" style="margin:0">Condition ${ci + 1}</span>
                        <button type="button" class="ring-threshold-del" title="Remove" @click=${() => removeCondition(ci)}>
                            <ha-icon icon="mdi:close" style="--mdc-icon-size:14px"></ha-icon></button></div>
                    <div class="segmented segmented-compact">
                        ${CONDITION_TYPES.map((o5) => b2`<button type="button"
                            class=${cType === o5.value ? "active" : ""}
                            @click=${() => onTypeChange(o5.value)}
                        >${o5.label}</button>`)}</div>
                    ${cType === "state" ? b2`<ha-form .hass=${this.hass}
                            .data=${{ entity: c4.entity || "" }}
                            .schema=${[{ name: "entity", selector: { entity: {} } }]}
                            .computeLabel=${() => "Entity"}
                            @value-changed=${(e4) => {
            e4.stopPropagation();
            updateCondition(ci, { entity: e4.detail && e4.detail.value && e4.detail.value.entity || "" });
          }}
                        ></ha-form>
                        <div class="css-field-row cols-2">
                            <div class="css-field">
                                <span class="css-field-label">State</span>
                                <input type="text" placeholder="on"
                                    .value=${c4.state != null ? String(c4.state) : ""}
                                    @change=${(e4) => {
            const v2 = e4.target.value;
            const arr = [...conditions];
            const entry = { ...arr[ci] };
            if (v2 !== "") {
              entry.state = v2;
              delete entry.state_not;
            } else {
              delete entry.state;
            }
            arr[ci] = entry;
            commitList(arr);
          }}
                                ></div>
                            <div class="css-field">
                                <span class="css-field-label">State not</span>
                                <input type="text" placeholder=""
                                    .value=${c4.state_not != null ? String(c4.state_not) : ""}
                                    @change=${(e4) => {
            const v2 = e4.target.value;
            const arr = [...conditions];
            const entry = { ...arr[ci] };
            if (v2 !== "") {
              entry.state_not = v2;
              delete entry.state;
            } else {
              delete entry.state_not;
            }
            arr[ci] = entry;
            commitList(arr);
          }}
                                ></div></div>` : ""}
                    ${cType === "numeric_state" ? b2`<ha-form .hass=${this.hass}
                            .data=${{ entity: c4.entity || "" }}
                            .schema=${[{ name: "entity", selector: { entity: {} } }]}
                            .computeLabel=${() => "Entity"}
                            @value-changed=${(e4) => {
            e4.stopPropagation();
            updateCondition(ci, { entity: e4.detail && e4.detail.value && e4.detail.value.entity || "" });
          }}
                        ></ha-form>
                        <div class="css-field-row cols-2">
                            ${boundField(c4, ci, "above", "Above")}
                            ${boundField(c4, ci, "below", "Below")}</div>` : ""}
                    ${cType === "screen" ? b2`<div class="css-field">
                            <span class="css-field-label">Media query</span>
                            <input type="text" placeholder="(min-width: 768px)"
                                .value=${c4.media_query || ""}
                                @change=${(e4) => updateCondition(ci, { media_query: e4.target.value.trim() })}
                            ></div>` : ""}
                    ${cType === "user" ? b2`<div class="css-field">
                            <span class="css-field-label">User IDs (comma-separated)</span>
                            <input type="text" placeholder="abc123, def456"
                                .value=${Array.isArray(c4.users) ? c4.users.join(", ") : ""}
                                @change=${(e4) => updateCondition(ci, { users: e4.target.value.split(",").map((s4) => s4.trim()).filter(Boolean) })}
                            ></div>` : ""}
                </div>`;
        })}
            <button type="button" class="ring-threshold-add" @click=${addCondition}>
                <ha-icon icon="mdi:plus" style="--mdc-icon-size:14px"></ha-icon> Add condition</button>
            ${conditions.length > 0 ? b2`<div style="font-size:var(--origami-e-f-meta);color:var(--secondary-text-color);line-height:1.4;margin-top:var(--origami-e-s2)">
                All conditions must be met to be visible.</div>` : ""}`;
      }
      _renderContainerVisibility(container, containerIdx) {
        const conditions = Array.isArray(container.visibility) ? container.visibility : [];
        return this._renderVisibilityConditions(conditions, (arr) => {
          const n4 = { ...container };
          if (arr.length) n4.visibility = arr;
          else delete n4.visibility;
          this._updateContainerAt(containerIdx, n4);
        });
      }
      _renderButtonVisibility(button, containerIdx, idx, update) {
        const conditions = Array.isArray(button.visibility) ? button.visibility : [];
        return this._renderVisibilityConditions(conditions, (arr) => {
          const n4 = { ...button };
          if (arr.length) n4.visibility = arr;
          else delete n4.visibility;
          update(n4);
        });
      }
      _renderImagesPanel() {
        const c4 = this._formData;
        const mode = c4.background_mode;
        const showBgFilters = mode === "images" || mode === "default";
        const cardThresholds = Array.isArray(c4.background_thresholds) ? c4.background_thresholds : [];
        const brightnessStatus = (v2) => {
          const pct = Math.round(v2 * 100);
          if (v2 < 0.5) return `${pct}% \u2014 Very dark`;
          if (v2 < 0.8) return `${pct}% \u2014 Dimmed`;
          if (v2 < 0.95) return `${pct}% \u2014 Slightly dimmed`;
          if (v2 >= 0.95 && v2 <= 1.05) return "Default brightness";
          if (v2 < 1.2) return `${pct}% \u2014 Slightly brighter`;
          if (v2 < 1.5) return `${pct}% \u2014 Bright`;
          return `${pct}% \u2014 Very bright`;
        };
        const saturationStatus = (v2) => {
          const pct = Math.round(v2 * 100);
          if (v2 === 0) return "Grayscale";
          if (v2 < 0.4) return `${pct}% \u2014 Desaturated`;
          if (v2 < 0.8) return `${pct}% \u2014 Muted colors`;
          if (v2 >= 0.95 && v2 <= 1.05) return "Default intensity";
          if (v2 < 1.4) return `${pct}% \u2014 Vivid colors`;
          if (v2 < 1.8) return `${pct}% \u2014 Very vivid`;
          return `${pct}% \u2014 Maximum saturation`;
        };
        const blurStatus = (v2) => {
          if (v2 === 0) return "No blur";
          if (v2 <= 2) return `${v2}px \u2014 Subtle`;
          if (v2 <= 6) return `${v2}px \u2014 Soft`;
          if (v2 <= 12) return `${v2}px \u2014 Strong`;
          return `${v2}px \u2014 Heavy`;
        };
        return b2`
            <div class="fc-box" style="margin-top:0">
                <ha-form
                    .hass=${this.hass}
                    .data=${{ background_mode: mode }}
                    .schema=${[{ name: "background_mode", selector: { select: { mode: "dropdown", options: OPT.visual_mode } } }]}
                    .computeLabel=${this._computeLabel}
                    @value-changed=${(e4) => {
          e4.stopPropagation();
          const v2 = e4.detail && e4.detail.value && e4.detail.value.background_mode;
          if (v2 && v2 !== mode) this._setVisualMode(v2);
        }}
                ></ha-form>
            </div>
            ${mode === "color" ? b2`<div class="fc-box">
                ${this._renderColorPicker("Card color", c4.background_color || "", (h3, o5) => this._updateField("background_color", h3 ? this._serializeColor(h3, o5) : ""))}
                ${this._renderColorPicker("Dark mode color", c4.background_color_dark || "", (h3, o5) => this._updateField("background_color_dark", h3 ? this._serializeColor(h3, o5) : ""))}
                <div class="toggle-group"><label class="toggle-row"><span>Color thresholds</span>
                    <ha-switch .checked=${cardThresholds.length > 0}
                        @change=${(e4) => {
          if (e4.target.checked) this._patch({ background_thresholds: [{ value: "", color: "#ff9800" }] });
          else this._patch({}, { strip: CARD_THRESHOLD_KEYS });
        }}></ha-switch></label></div>
                ${cardThresholds.length ? b2`
                    <ha-form .hass=${this.hass} .data=${{ background_threshold_entity: c4.background_threshold_entity || "" }}
                        .schema=${[{ name: "background_threshold_entity", selector: { entity: {} } }]} .computeLabel=${() => "Entity"}
                        @value-changed=${(e4) => {
          e4.stopPropagation();
          this._updateField("background_threshold_entity", e4.detail && e4.detail.value && e4.detail.value.background_threshold_entity || "");
        }}></ha-form>
                    ${(c4.background_threshold_entity || "").trim() ? b2`<ha-form .hass=${this.hass} .data=${{ background_threshold_attribute: c4.background_threshold_attribute || "" }}
                        .schema=${[{ name: "background_threshold_attribute", selector: { attribute: { entity_id: c4.background_threshold_entity } } }]} .computeLabel=${() => "Attribute"}
                        @value-changed=${(e4) => {
          e4.stopPropagation();
          this._updateField("background_threshold_attribute", e4.detail && e4.detail.value && e4.detail.value.background_threshold_attribute || "");
        }}></ha-form>` : ""}
                    ${this._renderThresholdList({
          list: cardThresholds,
          swatchDefault: "#ff9800",
          addColor: "#ff9800",
          addLabel: "Add threshold",
          dark: true,
          commit: (arr) => {
            if (arr && arr.length) this._patch({ background_thresholds: arr });
            else this._patch({}, { strip: ["background_thresholds"] });
          }
        })}` : ""}</div>` : ""}
            ${mode === "images" ? this._renderDisclosure("Weather images", b2`
                <div class="settings-group">
                    ${this._renderClearableText("weather_image_path")}
                    ${this._renderClearableText("weather_image_path_dark")}
                </div>
                <div style="display:flex;flex-direction:column;gap:var(--origami-e-s2);margin-top:var(--origami-e-s3)">
                    ${this._renderSlider("bg_blur", LABELS.bg_blur, 0, 20, 1, null, blurStatus)}
                </div>`) : ""}
            ${this._renderDisclosure("Gradient layer", b2`<div class="settings-group">
                <div class="toggle-group"><label class="toggle-row"><span>Show gradient</span>
                    <ha-switch .checked=${c4.gradient === true}
                        @change=${(e4) => e4.target.checked ? this._patch({ gradient: true, gradient_color_2: c4.gradient_color_2 || "rgba(0,0,0,0.6)" }) : this._updateField("gradient", "")}></ha-switch></label></div>
                ${c4.gradient === true ? b2`<div class="compact-field">
                    <span class="compact-field-label">Type</span>
                    <div class="segmented segmented-compact">
                        <button type="button" class=${c4.gradient_type !== "radial" ? "active" : ""} @click=${() => this._updateField("gradient_type", "")}>Linear</button>
                        <button type="button" class=${c4.gradient_type === "radial" ? "active" : ""} @click=${() => this._updateField("gradient_type", "radial")}>Radial</button>
                    </div></div>
                ${c4.gradient_type === "radial" ? b2`${this._renderSlider("gradient_x", "Center X", 0, 100, 1)}${this._renderSlider("gradient_y", "Center Y", 0, 100, 1)}` : this._renderSlider("gradient_angle", "Angle", 0, 360, 1)}
                ${this._renderColorPicker("Start color", c4.gradient_color_1 || "", (h3, o5) => this._updateField("gradient_color_1", h3 ? this._serializeColor(h3, o5) : ""))}
                ${this._renderSlider("gradient_stop_1", "Start position", 0, 100, 1)}
                ${this._renderColorPicker("End color", c4.gradient_color_2 || "", (h3, o5) => this._updateField("gradient_color_2", h3 ? this._serializeColor(h3, o5) : ""))}
                ${this._renderSlider("gradient_stop_2", "End position", 0, 100, 1)}` : ""}</div>`)}
            ${this._renderDisclosure("Color settings", b2`
                <div class="fc-box" style="margin-top:0">
                    ${this._renderForm([{ name: "color_mode", selector: { select: { mode: "dropdown", options: OPT.color_mode } } }])}
                    ${showBgFilters && c4.color_mode !== "theme" ? b2`<div class="toggle-group"><label class="toggle-row"><span>Adapt to dark theme</span>
                        <ha-switch .checked=${c4.dark_theme_adaptation !== false}
                            @change=${(e4) => this._updateField("dark_theme_adaptation", e4.target.checked ? "" : false)}></ha-switch></label></div>` : ""}
                </div>
                ${showBgFilters ? b2`<div style="display:flex;flex-direction:column;gap:var(--origami-e-s2)">
                ${this._renderSlider("bg_brightness", LABELS.bg_brightness, 0.3, 1.7, 0.05, null, brightnessStatus)}
                ${this._renderSlider("bg_saturation", LABELS.bg_saturation, 0, 2, 0.05, null, saturationStatus)}
                ${this._renderSlider("bg_blend", LABELS.bg_blend, 0, 100, 1)}</div>` : ""}`)}
            ${this._renderDisclosure("Animation effects", b2`<div class="settings-group">
                <div class="toggle-group">
                <label class="toggle-row"><span>Background haze</span>
                    <ha-switch .checked=${(this._formData || {}).background_haze !== false}
                        @change=${(e4) => this._updateField("background_haze", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Precipitation</span>
                    <ha-switch .checked=${(this._formData || {}).precipitation_effects !== false}
                        @change=${(e4) => this._updateField("precipitation_effects", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Clouds</span>
                    <ha-switch .checked=${(this._formData || {}).cloud_effects !== false}
                        @change=${(e4) => this._updateField("cloud_effects", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Stars</span>
                    <ha-switch .checked=${(this._formData || {}).night_sky_effects !== false}
                        @change=${(e4) => this._updateField("night_sky_effects", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Birds</span>
                    <ha-switch .checked=${(this._formData || {}).bird_effects !== false}
                        @change=${(e4) => this._updateField("bird_effects", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Balloon</span>
                    <ha-switch .checked=${(this._formData || {}).balloon_effects !== false}
                        @change=${(e4) => this._updateField("balloon_effects", e4.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Planes</span>
                    <ha-switch .checked=${(this._formData || {}).plane_effects !== false}
                        @change=${(e4) => this._updateField("plane_effects", e4.target.checked ? "" : false)}></ha-switch></label></div></div>`)}
            `;
      }
      _renderCardFrameToggle() {
        const c4 = this._formData || {};
        const frame = c4.card_frame !== false;
        const fw = c4.full_width === true;
        const ef = c4.edge_fade === true;
        return b2`<div class="field-group">
            <div class="toggle-group"><label class="toggle-row"><span>Card frame</span>
                <ha-switch .checked=${frame}
                    @change=${(e4) => this._updateField("card_frame", e4.target.checked ? "" : false)}></ha-switch></label></div>
            <div class="toggle-group"><label class="toggle-row"><span>Full width</span>
                <ha-switch .checked=${fw}
                    @change=${(e4) => this._updateField("full_width", e4.target.checked ? true : "")}></ha-switch></label></div>
            ${fw ? b2`<div class="compact-fields" style="margin-top:var(--origami-e-s1)">
                <div class="compact-field">
                    <span class="compact-field-label">Side gap</span>
                    <input type="text" placeholder="auto"
                        .value=${c4.full_width_margin || ""}
                        @change=${(e4) => this._updateField("full_width_margin", e4.target.value.trim() || "")}></div></div>` : ""}
            <div class="toggle-group"><label class="toggle-row"><span>Fade edges</span>
                <ha-switch .checked=${ef}
                    @change=${(e4) => this._updateField("edge_fade", e4.target.checked ? true : "")}></ha-switch></label></div>
            ${ef ? b2`<div class="compact-fields" style="margin-top:var(--origami-e-s1)">
                <div class="compact-field">
                    <span class="compact-field-label">Fade size</span>
                    <input type="text" placeholder="10%"
                        .value=${c4.edge_fade_size || ""}
                        @change=${(e4) => this._updateField("edge_fade_size", e4.target.value.trim() || "")}></div></div>` : ""}
            </div>`;
      }
      render() {
        if (!this.hass || !this._config) return b2``;
        return b2`${this._renderEntityField("weather_entity", { domain: "weather", label: "Weather entity" })}
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "layouts"}
                @expanded-changed=${(e4) => this._onPanelToggle("layouts", e4.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:view-dashboard-outline"></ha-icon>
                    <span>Layouts</span></div>
                ${this._renderLayoutsPanel()}</ha-expansion-panel>
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "card_settings"}
                @expanded-changed=${(e4) => this._onPanelToggle("card_settings", e4.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:cog-outline"></ha-icon>
                    <span>General</span></div>
                ${this._renderDisclosure("Layout", b2`<div class="settings-group">
                    ${this._renderCardStyleSegmented()}
                    ${this._renderOffsetPicker()}
                    ${this._renderCardFrameToggle()}</div>`)}
                ${this._renderDisclosure("Sun & Moon", this._renderSunMoonPanel())}
                ${this._renderDisclosure("Custom icons", b2`<div class="settings-group">
                    ${this._renderClearableText("icon_path")}</div>`)}
                ${this._renderDisclosure("Tap action", b2`<div class="settings-group">
                    ${this._renderForm([{ name: "card_tap_action", selector: { ui_action: {} } }])}</div>`)}
                ${this._renderDisclosure("CSS", b2`<div class="settings-group">
                    ${this._renderForm([{ name: "css", selector: { text: { multiline: true } } }])}</div>`)}</ha-expansion-panel>
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "images"}
                @expanded-changed=${(e4) => this._onPanelToggle("images", e4.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:image-outline"></ha-icon>
                    <span>Background</span></div>
                ${this._renderImagesPanel()}</ha-expansion-panel>
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "buttons"}
                @expanded-changed=${(e4) => this._onPanelToggle("buttons", e4.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:checkbox-multiple-blank-outline"></ha-icon>
                    <span>Content</span></div>
                ${this._renderButtonContainersEditor()}</ha-expansion-panel>`;
      }
    };
    if (!customElements.get("origami-weather-editor")) {
      customElements.define("origami-weather-editor", WeatherCardEditor);
    }
  }
});

// src/image-assets.js
var CLOUD_SPRITE = "data:image/png;base64,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qXm87XrqbB9E7et+cNIJJtAxAvqBdqxZD28Of/gIKijB2hU+ilhbuFRAMUVJlp/2WSfLMDDWfGNZekzjFurYJ0A7afia323phgplsLDaaQ8dHOXij1lvNl/2bm+P+8kX6Tb+7fPq/Otke7pcRnyEZl4Efc/7I3yqHnp72blOk8c7JtBVAo3F0NUGPrRdtZVEwSAbWYHiJAGUYDWiVZdjfnV2MOYxA/PLypPVJ4uQ5x8kPvW1mvd2ErFaDHsQva08NrNyBTkr1TFji16bhvefGgH9sJ9au/+zvRAZiqA2Cp2sJwrXXsGqy0gEGZMvy7EMhU/77NxQfUh+XKAQtutpC+PjanQpE3haBCyAn7jftaAxx17B21e0FiG+WhBbit+jrb1913CaCZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACZiACfzfBP4Bt/4U/+OybAIAAAAASUVORK5CYII=";
var CLOUD_SOFT = "data:image/webp;base64,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";
var MOON_SURFACE = "data:image/webp;base64,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";
var BIRD_SHEET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACPAAAACwCAYAAACLzgK7AAEAAElEQVR42uz9d5xl13Uf+P7W2uGEGyt3dVUHNGIDIEgk5pxEUrQVqZFlS5Y/smRZ9kjjJ4f3rDFBakaOkv2xn4MsWw7yjMcyrWd7xkGiJIuiKJFiAEGCAAMyGo1OlatuOufsvd4f51Z1daMTUqPRvb6fz+1QdfNdd999915nLUAppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKXR3orL+VUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKXU2MPgXnfl7SZvMtWdb4iHfJ3qIYPQtgBK3Go5RSSimllFJKKaWUUkoppZRSSimlXmJWn4IzEAAB0Epd9qes8x+WGI8DwNbW+q/p06OUUkoppZRSSimllFJKKaWUUkoppV5qfA0+Zjrr7+fIsqxprGkSISHGVCRqaKioV1mMa7UopZRSSimllFJKKaWUUkoppZRS6lXiWkzgkbP+fo5gTBMilggGAkhVbWioqFdZjIs+DUoppZRSSimllFJKKaWUUkoppdSrw7WWwGOaExNvnZrd+9OdyZnvAdAZ/3y7WokA4MTaG4jNYoziiKnpfXIX6nZjmhShrvgYBzCFPN8DbZGnlFJKKaWUUkoppZRSSimllFJKvSpcKxv8hDr5ptVMW3/KJdmHJVbHAWB95dSvnXW+iABAMAcCiZAzzr3Fe39dURSP7Loupa64GE+SZH+ed95PRMkQ7vf6/fUHNF6VUkoppZRSSimllFJKKaWUUkqpK9s1VYEny7KmMbZJjITITBmgsevX21V4LBm+G8AsgECEwEw3Jkn+Rg0X9QqjXXF6NgHA1qaHjDNvYG9f5729FUCiT5tSSimllFJKKaWUUkoppZRSSil1ZbumEniMMU0ishCYiIgQaGP8q50WWlmW3WOt/wgxWQAQgIi4bZ17P4Cp+kfnTaJQ6uUkuHA1HWetOwDQXkQ5IEQ5gEqfNqWUUkoppZRSSimllFJKKaWUUurKdq0k8AgATtP2DWTMoggck2n6NLkLdRuxOD5f0yeNH2bmG0SkAkAQMQCYjX1zo93+gIaMeoUYoDWV5/kePLf1HQFAmqazbM0hEM0R0DSG5wF0d59HKaWUUkoppZRSSimllFJKKaWUUleeayWBhwDECgEQmQOEiOCc92/x3h8a/16yZvPbnLMfBtHuZAcSgJh50rv0jyVJcgO0Co+6vLGLpNPZP7vQ/d7OxOz3dTrTrzlX/MVom8x0PQkmBcjJ2MVms3nz+NeiT6VSSimllFJKKaWUUkoppZRSSil1ZboWEni2Ex2sZXM3iGaJKAASDJsb8+bkGwEIkO5LfP4jxGYOIgG7EyTqKjxkjb3Lpfn34HQFFE3iUS83AcBNmxxKXPoG59PXJXl6K4BkVwwKAJum7g4C3y5ABsCw0B6XZHcA6Gi8KqWUUkoppZRSSimllFJKKaWUUleua6aFVpa17vE++QgR7STfEFEnS5P3AZhutfLvtda+dad11plIBBZEeeKS70rT9F5oRRN1+Tib+ANEtFdEDgCcA6jOPg9bdzcxFghiAEqFMGmMvS1rtW6BJu8opZRSSimllFJKKaWUUkoppZRSVyxzlT++7aSF5sTU9F/2Sf5uIgQBiEAEEjCblnV+2jj+TmazCFB11mW3MREJEXeYbDIc9j8LoA9NjFAvc/ymabo3b7TfZ4y9kwADxGOyUT1YoOifPk/zzUma/iiBFgFUBAQQhIiDYQ6Q+HRVVZsar0oppZRSSimllFJKKaWUUkpdMoLurymlLpNrIYFHmp3JP9Jotn6KmRuoK+cQACJAiNgZ614LkTkRYSKqiFDhdJus3ZiIhA0vGuuGxWhwP4CI05WMdPBWL3X8Ik3ThSxvfxcT3wRIBJmNwNUzw2H/mfH5slar/afZum8fxyiEKNaxToGZGUKj0WjwBJ5buUcppZRSSimllFJKKaWUUkoppZRSr7CrOYGHAAiybGGiPfFR55LXAqhkV5INgUgEREQOgq0Yw7JIPAahDIQcz22TRePaPZ7JXG8YR4ui+Dq0nZZ6+dj2xPS7vPffS0RdAQ2ZUBDz5tbm+rcADJNG461Jkv8IgebruCcQRGg7LgkwxjiJvFRVo2PQRDOllFJKKaWUUkoppZRSSimlLsanabrgvc/LsuxD94SVUi+zq70CD090pn80y/IfBNGZ5c1EGACDiEFkmEiI8FgMchyEQwA86uo652qlFYnRZOP2WeOWsqzVSJJsH5HYqqrWoQkS6sXbjqGk3Z78AevcOwEhEAWAKkMssP7IaLBVtVsTP2GMfTsgHtvVpYggIBlfETMZNpYwkPgUtJWWUkoppZRSSimllFJKKaWUUhdCWat1b5a1vt0afx1RPFZV1QZ0j00p9TK6WhN4CACyrH13s935a8bavQQE2v5d3SrLEhETYAgwRJw659rEPBeqqo3TrbbOhYlIiGg6yfK3tLvdDzbbne9Is+Ydw1B8LRTFsg7e6qWI4Wa3++Ysb/4oMS8SUJFQIIgQUzRkSuvtYWvd9wA0i9M9OGlcX4rqVB5s/8s50HDcSqvUp1gppZRSSimllFJKKaWUUkpdo84s/vDc34m32XSa+JvAPBEDVopi+DR0D1gp9TK6GhN4dgbb7uTkRxKffRdAhgilCAIIFnWFErPrvFTnOSAXkUxE4umCPXK+22AiEICONWYm8emEde46Z22+ub76hwAGOoCrFxHDAiDrdmf/tHf+20HEdShSJCKBUDCGHRtzZ4zxBkBSjCvunI5PEhKhuqMWERExGZux5UE5Gh1BXWFKKaWUUkoppZRSSimllFJKKXXaeK/Nda13r7XW5BLDaDgcPA6ggO4BK6VeJldrBR4B4FvtyXuMtR2IRInhBBFlAHKcI4Fn/DNhZnLeS5KmYoxFVZWACEB0zoFbRDiEwGyYrHXGGXed8+lwa3P9SwCCDuDqBU4K0O1OvyXLmz9CzPN1fAJEEAihDkppiuCAxNgGpE7sAeyu62EiADIOXgIxwVvjWpFpoyqKE9txDO3ZqZRSSimllFJKKaWUUkoppa4NPk3TBe99XpZlH2fuk40PtG9OtzrpH7fWvVWIIjNFJjcqiuEz+vQppV4uV1sCT6M7O3u42W4vNFutw3mjc5vznpnNRohxnYmuA8gBABExzkquqavugIiIfZKK8wlBIgmAGM9ZrIQAkIhQDELWWjLGJda5G4y1J/u9zYc0xNTzRACkgcZcc2riJ6xzbwfgARDV6TssIEdMHkBXRCZA7CASUCfimDOvi8Z5PUQgIRKyBGTO+maz3elOTcxe356YvMWwt8Nh75Q+/UoppZRSSimllFJKKaWUUuoqRq3JyXs7EzPfnvjsulAVx6qq2sDpfWMCgCShuSRtfoiYFwgAM28ScycwVkNRLEGLOCilXgb2ahloAcj09N6b9i4e/FvO+RmQBCKbAZIBQG9rw29tbeQABHLuAVVEiIhEREhidM1WRxp5E6PRQFaWT1VlMZTzjcVVVWDQ71OjyWStXWy3Jv5CNSqOra0t/S4u0ItLqXNJJttvNs69A3XFqDo+64QcB4iHkAcIRGQNk5C1UpYVPTfMhEXIEkkUUC4kQkKBmV7rfHIgyXIybKN16cP9OOyP1tcf13hVSimllFJKKaWUUkoppZRSVyECIBzM0BIZOD+fps2Dg8Hgmd2/B9BKsuabDXNXBARIKwrNGmOKRpq+tdiKa0D/OHRPTSn1ErtaKvAQAMzt3ffWTmfiTzrvF9iYSWbuEHNuiBuhqhoxhnHhHdD4sZ8rG4eICDEGsDGUZhl578mwoVExkhjDee9ECBWIiKy1MM5OW+f3DPubnw8hrEKzMNWlSzoTk99jjH8nETwgQnUPNwLEEGAAYkBsHa0gEDEksoica5LA9fkEABmQWAIlxtiuMXaKDXectVlu02w4rE5U1XBNXwKllFJKKaWUUkoppZRSSil1lSEA7Bx3nc9fa63Lo2DU21p/HEAxPo9rtSbelabJ9wN0BxEyAUZElANSMJi9t5PDIR0Hyi19SpVSL6WrqYUWze/d/940y98jEEcACcgAYBCYjaUkzZCmKZz3VJWlERG6wOBNVajIGkvOeSRJQgAwHPTihe5EqAIMmzqJx9gFZxO3ubH6OQAjaBKPuvCEwQKQJEn2583u9xtjrhdAIAQQLAREgAERg4hAYCIa/5N4JzuNxpm+dGaHOBAxQYgEBGZnrW0wc4PAGYgTY10rSZ2tytEzZVn29CVRSimllFJKKaWUUkoppZRSV4m6Wk4T01Od+T/uvH8rINEYE9lxMez3nwFgWq3W65Os8T4Q3w5gEoAlUAVIJUATxAM2nLjEzJLElaqq1vWpVUq9VK6mCjwyPT13S5rl7wE4AxHGrbIIADEzjDEwzoNAGA77FGPgC+bUiCCEAOc9WevgnOOqLFEUowuUQhNUVQVrHRljrXHuBmfcZq+3cT+0hJo6d+xicnJyYWH/jW+fWdh7U6vZfRcxv4sgnToZRwzqZDQaJ+nQ+N/jy9d/ExERE5z1SJKMnPdERAih2r4d3q7Yw2ycMdazMR5EDoAjpsQ53zIusTEUzxRF0YcmnSmllFJKKaWUUkoppZRSSqlXPwKAhJK5RqP7IbZmof4pb1pjO5CwVBTFWt7svJONfSsgbSIkAFkisUIoqT58vkmEnjE2NezmRaq1EMLK+W5PKaWej6uqhVaj1d6bN9rfxsxtAPHcAyMhSsRw0DMhhHHFkvOPnzFGxBjhfDJO4vFUFoWUZSHnu5yIIIQI5xyMsbnx/kZQfHzY739LB2t1rtid3bv/numZPd+XZ63XRJF7YigPgsgSM4nA1ecTJqIzWr+NK/CQiBAIIGJyPqEszzlJEmZjKFTV7tZvDCJiIjbGWmK2zGQgYAIcmBPnfJPJFJuba08CKPUlUkoppZRSSimllFJKKaWUUq9idfUdoDU1O/9e55M7INQBwRIoMHFpXdItRtWW9W7RGHMYwHUE5AQSqTth+O0kHgBtISqNMZaNXzCMflmWK9g+oL6mhR2UUs/bVZbA051ttbofYOYpnDeBp1aVBRMRO5+AiBDj+TtjhRhAwE4Sj7GWQxUiAOxKjDhDjAFRQM47scZOWOPmQ1V8viiKpfHArYO22nkfzs8feE+WN94rInPFaLg3RMmZiUHEItEARAzsTuDZXYWnfhMQETPDeU/OObLOkeG641YI1e4YZzbWWGsNM7MIjSv7CJGQYzbOOpcb74f9rY1nAAR9idTLoN1sdt9gUj9XjUYnxmO2UkoppZRSSimllFJKKaXUy8FNTO95V5Y1vp+Y7wAhg1BBhFkY7jrr5rM8f1PiktuMtfsMm6kYJRGIBSig3qfzAlRUHzDfJYEYQ2Dj92SN5nx3avqG7sTUzXmzfV2ozLCqBhvj29YCD0qpS3JVJfC0m53Jdmfi/cxmHhdM4CF47ynLcpPnDRARitHw/NcugipU2E6OsN7Be08QiWU5gsi5c3FCCCAmcs6JMW6B2frNjdXfBzDUgVrtioGJhf3Xf5f3yd2hqjpVFRpMbAwbEhEjEg3VZ2UQEUTo7OsYV+KpK/DU7dvIsCE2FsYwERGqshSRuB3TdekeNmSIGAICgQAhAixbk3rru2Ls8rC3eVRfKvVSy/P8cJI13m/ZLUgsj4YQ1nRcVEoppZRSSimllFJKKaXUS4wA2ImJmdc32q33EZnbQTIJwAGoCJQQ0QIRZWzNNBEfJMNtZiOAOCZjjWEmUIwiDEJKREL1pls7Ejk2HK2xM9b4hTRv7M3SxkKSpQvOOOn3t1YAVNA9EKXUJbiqEniqamQmp+ffYa27CRdI4CEiMDMxG2ZmgghGw+F5E3GA7bZYFax1sNaTtZZAhNFoJCGU5x1zQ1WCjYVzzljjrrfGLvV6m1+BVptQ46CZm9t3aGJ6+jvY8A0AJYaNBUXLzBSjsERhIh73ehNGHad0ZkjX/zXWwFoLYyzGBXzIWAsmJiKisqp2kngkhPpqmImZuP4PsRAxCVk2NvfW5pDqxHA4XNKXS72Uce+cI2v8ddbZSbbcGA4GRwAMdAKrlFJKKaWUUkoppZRSSqmXmGt1p97hXfIWkLRJkIBgiMgTUQJGA4IGCTXB1CBQyoyUyRhjDYxxhplMCCFCABBSEAyIIovkBGoRU1MEExLCJJjTJPGJz/KFzOetzc21JdR7IEopdUFXWQJPVUzPzd/rfXIPMB4+L3wZA4AIhFExRFVVdQrDeS4WY0QMAc55sLVkjeUQKypGQ0ZdNu05JwAcQzDGGDLW5S7xr8mbzb1VMXy4qqpN6Gb1tYwA0MTM3C3tdve9RGYfETljDFnnAGKuypEBQMwMYkJdkUfoHHFD48Q0WGvBzGDm7co8xIbBzCQxoiqLnUw1ieMkHsPExOMkHrAQDAHOWtt0Ps0GsTwSRqM1jVf1Uo3XSZLc6ZL0DUQUmEyXrU+L0eApAKU+RUoppZRSSimllFJKKaWUepF4fCIAnVZ74rC19mYCXQdCDoGAwAC1iCgBwQOUEiEFkAHwzMTEJjAzAHCoKguJkZiFCAkBCeo9aSuCJhG1IGjFUHUFsWHZks/yiUazNYtoeqNRf2V833S/TSl1TubqeSgEAGFiavb2NM3eARBfwgXqBB5mVGWJECokPoUxBiGEc14oxAoQgfcJjDFkjeXRcMghVGyd3/4gOCOJR0RYJBprHVnrJ9Ikf5PxfnNjbeUzuHiikbo60fi1zxb3HXpPkuVvIdCMEDwAAyIDiRyqipgJZpyAE6qKUSfrEDGfHThkjCXrHBljqM5Gq89BxDRO6iEIUFWV1Dc/TuIRAhkmw8QQMNV5bQwi54xtJNbH9bWVx1C3f1PqQtrd6T1v8GljbjToncCZ1cYIgCRJcl3WaP8EE98moC0APbY864yzo9HwKLSUpFJKKaWUUkoppZRSSimlXji7cPDGexYWDtw7O7N4w8Ts/JvyRv52Z/0hNmZKYkxExBIAEDyh3p8TIitRzLjzBQEw1jmT+JSd82yMsUTGWmMBohhDZBClBDgidgSkAklAwjGKDyF0mMglSdZMs3SOwDIY9Jag+yBKqfO4ihJ4hICPo9OZPpg3Gu9jpgR00eQYs/17NgZJkqHRbME6h+ICLbWqqgIRw7kExjoQEWIMSJIUEiNifG7yT4wRAiFjTDTGsk/Sm0KMDw37W4/oAH1tm5lbuDXNsnsATKHut7ldYYeIqG6JxRYiQmVVEWjcD2ucnINdcSoSQcRgY8DMVF8J6iRiZjLGwBhDMQRUVXlmJR4h0Ol2WixCBMAQceKsa7sk6W9trj8OIOirps6n0+kcbrQm3u+tXyhG8WgIO5WbtpPW0kaj/W7r/D0EtAjIidAn0MiwmTc+aRTDwXEAIx0blVJKKaWUUkoppZRSSin1Asj09N7Dk9Nzb0rzfG+SpgtE5npinjGGTRTxhtkaay0RmShiScQRwMzERDi9FyfCxGSs9cZ7D++9IWMsREwI1XibjpwAKTFSJmQQpCJiBcIxVE0RaVrnsqzRnEt9nmtLLaXU+VxFCTwfJwBotNuTzWb7A8zcRV354XwbwITTZdNgjIG1FkQEw4yqKlGWBXaSJM5SVQWMtfDOw3kHY1x9RSJ1Ky48N/mHiOBcQgDEOt/O0vTg5nrv90IolqEb1deq2O5Oz2eN/C4i2oM6w3ccLwxj3c4pxgpVWRITk2FDxASJ8pxEsxi2k3EMxjk84zimetZhLZgYIVQSQnX6cttJPMQgJiIBA8QCMWw4c8432ful/tbGMZxZVUUp7BpLKUnz67xzk8aaRm9r/ch4EkoAkGXtO9M8fzsz70VdWtID1GDQphCV1ti91icTo2H/JICePq1KKaWUUkoppZRSSimllLpE2/utrb17978xzfM7AZkJEq8DZI6ZGwBazMZY6+C8s0zsqqpiQHh7Q412/c11RwwSESImts7BWstMxoQq2BBKZiIiJiMSDQAWARPBQyQRgCVWNoTQIuI8zdJuo9meRKx6o9FoRV8ypdRuV1ECTz0g+zQ/2Op0v8daN0GnHyM/90S7+x6eYdzHEEUxOiM5gmi7K1GdOBGqCs551AO1Q5KmEJGddly7Oe+RZU1YawGAYoiSpOl+n/pybWXpd3DhZCN1FU8iGu3ORLPZvoeZF0FIzhUHRIQYKoQYyRjDdRwRRYlAjGecT0R2qkCxMSBmEtSVeIgJzHWFHiJCVRWI9eUFAIkEgggRDJEhAyEGkQWEjbEWEtY21la+CqDQeFXnjOdG584ky9/ARMFa2028T3u9racBlEmSHMqbzfezMXdBcGMdkRgBSIUoB6gHYMjMcz7NZkjiclVVG2dNupVSSimllFJKKaWUUkoppc5ley/BzS0s3OV8ehdAk0TUFImzEHRA7ImJDRsxxhgBbFmWBgATMYNQ75WdLvJA280xRIQAGGYD6yxZYzjGyGys9d7bGOFEogPI1v0xQAJJIPAi0YQQMhHJkiRtZXlrxrAb9fubS9AD55VSY1dTAg8DkNSnN7XbEz/gvc/rgRamLnN2rlOdQHn2Cair8BTFEDFGeJ8A48QIGo/7ddusul2W9wmMMUjSDNZYFEWBqip32hmlaYYsa8CY00+3iIDYkHd+f6zKLw8GvcehG9TX5CQicZy1ulN3GusOkEijTrV5LokRgMA5b6yzLDEihLDTJ47GiWfb6oo6dUIaM58R7cxEbAwTyFRVZQAyRGSJyIqIERHDzIaZHOoqKQ1r7V4iE1aWT3wSdWUUjVe1O5YlSZLr2hPTP+Gsuy0KbRHQY+NmjU/ssL/1rM/zQ95mb2fCrQBNEIlD3ee1JCAjUAugkgh9Jp6wzi0YplFZlis6eVVKKaWUUkoppZRSSiml1KXo7tmzt92aeK33yS2AzEiUDogTqvtbmLpejiFTHwRPMQQy1nLiUyImhBCAcQWe04k7Uu+LCSAQJhAbZ9j7hLc7tYiAJAYAwgCsCBmCQARWgFQAJ1IlEmKDjWmleT7rkpR7m+tLqA+eV0pd4662CjzCjEbean+nT9KJcWbkC04yqEIFaz0arRZCCKjK8jkttUJVQRDhXQIiQpY3IBJRjqv3pFmOJM12qvrs3FkiijGI80nbeZ+vLJ34TQBDaFLEtYQAoN/vh9k9ew975w8LqI06Ge05mBjWOnLeGWstxRjr+BMBE9cxRjijatQZSTyGT+cGEciwIWZDRKAYAotge/JBIpFEhJiZuGaZjXPeH/RpcmJzffVzGqvqLOnE9Ny7kyS7RwgtADkR9cEonHELPk2zajjYcN5fT8TzRMhFyFNddSqOJ6YpCJ1xqlkPoIZ17jpnfT4aDVfG52Gc7lGoMaiUUkoppZRSSimllFJKqW0EAK2sOzM5NfdGa+31AGYBNACkTLAgYiImros92CjCRMTOJWSdIyJCFSpIveFGIrKzPzzeS4NEEZEIESFjHJy3TMQUQ0AVSohEHl+AAHIAGYIQolgAPsaYRAnOWb8RY1ypyuGJqqp6OL3/oZS6Rpmr7QGVZZm02hN/1Ptkr7VuuzjJ8x/diWCtQ5plcM7V110UZyRHnD4vI0lTEBHYGGRZjrIswMxwzj8n6WdbfV0C5/0BQ/abW1vrD0I3pK9F5cT03ME0ze8koAvAni8miRnjMn0MEVRVBYjAWAPDBgJ5ToyeWYlnXEGq7gUHYwyMMRCRnWSgnfiMERABGwtjLAARw+y8T28OIt8c9rce1XhV29rtqTvzVvvtzLQXQAKCI2CCyXSNMZPO+judz97KxAsgTIPQgIAAMiAkNE7ioTr+uyBKAPSIGMa6hTTJF1ut9v729NzNeZJ3e73NVWg2ulJKKaWUUkoppZRSSimlzuQ6ne7+Vqd7q7H2IAETIPIQqasxbPdkIQYzsYgwM5MxFvWB74QYAkKoiIiE2SDGek93m4iQSJQYI6IImBnGGBAxQlVJVQXL9U1FQAwAR4AXwArEAZJZ63tJlm4QkG6cPPbVAKziPAf5K3WJaNdJvUpdbRV4AMC0O5MfTvP8emvdGQ0Kny9m3km+sdYhhICyLM64yTTN0Wp34ZwHAIRQ1a20rMVoOLjwHSaiGCOs8wkbNitLJ34DWoXnWhxIpTs5NZvljdcTaC9IzBnDKz1nuCUAhogQQgVihvcJ2DBijHUSjuzEGEQEMQaIxF2VeghEdSKPsXW+UFnWCWpnJPEIYIzZTkSjEIJY6ybyvHGvxPjwYNB7QuP1mo9fJJ3OoYlO9/1s/V0kciMBDMIIQhkR7WXiBogazHRIgEMRMiFBEiIIMUUiYqmr7zAB5fi6WwTqgCgS0RCENjHPe+vns0bjYN7sTFbFYL2qqs2zPgOUUkoppZRSSimllFJKKXXtMnv3Hby30WrdBdACBNMCNMd5O4BgvElGoPo/ABEZZrPdNEsIJFHI+YR8kpDEMG6jVSfvoE60IRFhkchRohERY5idsdYB4mKMnogSgDwRORB5IsoIlDOZPMnySWfdTUmSvjnvTCz2NtcfDCEsjx+D7nmoF2t3Rwv1ahrArqLHsj2QxVa7+840zV9n3YtL4DnjyolgjEVZFAihgrEWjWYTzXYH1vud820nT2R5A8VohLIocKG7MO6HCGPdPAgP9rc2v66D8jWFAMAZyhqt7nezsYfG78vznohgxvOHcaUoj3RcASrGAIkCobqc3+4ktBgCBAJmU/8cdUWfJEnh0xSDfq8+jwCAoK58YuGchx0n+YyTeKJPkhmXJPv7W+ufqqpqTWP22pY3OjcnafZ2Bt0qhAkCOSKqCKgAtCBoElFAFAbQIFACEisihpkjM0WBEIRSIvICxPFlUyKagCAn5pLIIISSQ4jiXDLbancOmMTKYGtrCUDQV0IppZRSSimllFJKKaWUUt4lWavTOcCGJ0HUIUiKetNY6t0uGhfjqXMcuO5+sb39BgKBrYF3vj4QXoAQAoBxiwtsV+GR+hIiFGMkiZHYGPY+IWImiZFFwIAwxkk/ANh6b9I0SwBkACU+ye5odSZeZ4hWer2tx1Hveejem3o+KMnz9ydJ9pGyGD0NYA1ajedV6WproUUAQqPZvjtJ87c778HbPYNeiifLmLqiSYxotlrIG626msnuOzBOorDWw/sEg8HWOdtu7b5AjBHOu8xab1eWTvw6gJG+ma6dwRQAer0epmYXPui9u2k8ceDznbYnBkR19RxrLYgZhhkxBoQY65ZZxoDZjFMr6z/rBJ26lN/275kZed4EEdDv9+oGnkSwziFNM3jvzwjHnSSeNDvok4zWVpc+jTrZQmP22opbHn+GCALneZ7fysbMkyAXgidBAqKMmHICtQVxMgraBDgiOBAbIjIS47gkFMK4nawDUTZOvizGt9UkwqRxdsb7ZBaEpCyHAyJOsrR5oJG3miLlWlEU/d3vK6WUUkoppZRSSimllFJKXTMIAJrN5vSevfvemKaNW8C8QECHiDwI2z0sBECsTxIhEgUQrrtaGBFAJAKo99oIdfeKEAJiDNjec9uu33C6u0XdTktEYEx9YHzdIWN7n1h27maaZLDOjS8eEUOAd8mBrNF8T95qTq0Pet+CHkCvLj3uCcBMs9H+W1ma/7j1/kCo8HSM1TNnnUe9ClyNCTzI8tatWZ59IElSZmZ5KQPSGgufZkiS9PyVdUQQY0Sa5QhVwGg4wMUKARGIrLOzIcbPD/pbj+mb6NqaTACopqbnXm+sez0R44VUjqovt5MBDGMcmHmnKtT2BCGGAIiMq+u4cZutiLzRRAgVRqMhrLFI0nTcGo7OEeICAtgn2a1s7JHe5voDGrPXTry22+3JxQPXv31uft9tk1Ozr2m2Gh8w1h9mplkIGgIhEAwJJURwBDIAHCBeYvQiQgQCEzMbY51zLk0zb4wlQQwEkESkBErGM9oAgGMIPookhl2HjW2FqqyqWFU+zfZkefOAt0nV728ujSfeGo9KKaWUUkoppZRSSiml1DWmKIo4OT13fZo39hEwBWBaAA9CpLNOiBLrrgAUUO/wmhgjxxgQJYLAiDGirEqEqqr3x7Y7ce10tDhzO8I6hySp95KLokAMAdsVf0TqghFplm8Xidiu6EMxVMLMjTTN39Jpde+IVXhiOOw/Bd3vUKcTcM4VC9utsjhNsvca715jjT3svXuXMSYvitETADZ2nVdd4a62BB4GIGneOpw1mh9OktScHvxeonfHuC3RRc6EGAPYGFjnMej3LliFh4hIJIp1vmGNrVaXT34SQKkD8jU16IYsz2YMu/dbZz2zeUGJZ8wGMdYVdpIkARFDYoTUGTw75xMA1jh4n9RVo0IAMaPV7qAKFSACa90FYzbGKM75NPHJvo31rU+FUCxrzF4TsYrRaOQW9l//1nZ36maXZAtEfHOoqltijHsAyQgcQRAisgAyAA4ACcQQkQGRqa9r3FsWxGyMTZI0scZzlBBijCICB6IMgCNiw9Y6EnBVFQGQ1Dg/SaCkKoohGZNmWX4wTRrp1tbaSdSVzJRSSimllFJKKaWUUkopde0gAFU/FBvtZmfSOT8fYrgVoCYTOwL53ScQeUA8MXsicgAYIhRCAJMBmzqBJ1QVQqy7WhERiBlnH4pPRDDGoNnqIG800Wp3kTWaKIsRqqraSeJxzsMn5ziAfrz3JiJIkuxQ3mq9iWGf6fU2vgndf1OnbSfsbBMAU81m+8d9kn4PEbcBiDFmylj7Tu/Tu4i4V1XFk6jzD7bfJ1qV5wp1NVbgkazRujPPG9/hk5SMMfGVCEAiIMaIJM0QQonRaHjBKjzjjE2yzu4NUn1x0Os9rm+aa2oygUGvqPJm44Pep1PWWryQ15+IxoljDj5JwMwIMZ5O4kGd2eucR5qmcM7VwUqEGCoY49BotFAUI4RxRvAFbotiDOK8n3POnFpfW/k9fSmvGenU7J5DqU8WiIFQlu0Yym4UZIA4IrLMDGJ2IpKIoJ4AC5hAJAQijNvCoa4eFUJEiIGctc4niQMIoaoCBERMHoScmTNjXc7GmFhVIYQglrllrO1UVRliiJVPkvlmqztbjGStqoYb+lIppZRSSimllFJKKaWUUteWajDYQMSg0ersYaYbAZkkJjPuGLBzIiJDRIaZDRExAIoSEWMEM9edLmLd4mp7n61O3qEzD5yXujOXT1I0mq364PkYkaYZmq02AKAo6uOOkyQFm3Nv0Y87dFBVldH7ZMYn6eHNwebvhqI4Bd03vlZRuz35/rzZ/Mhw0H8awNo4FgwAcnl+Z7vR/nmfZn/WGNvF6bwIISJjrbvOWvs+Z/2BEGQ5xmoZpxN5gDohSJN5riDmqnxUQjbNs3vZmL0QGQcdyTgZ4TIFXz0wG2vhfIJBf+viVXhiFOd905ArV1dOfhJApW+Wa2PgBYAYS2l1Jz6YZflBY628kDZaAHYmFMC4N+e4wo6IAETwPkXeaCBJs7MSdAihqpCM+24OB/2Lv9VEYNiw8W5u0Nv4vbIsT2jMXv0WDt74uonu9DvZmsPFsLyhGA2uF6AlkFSiWEAYEEtgGhfZ4XoizCyQevZJ9bhHRGyd4yRJmIhRlqWQwDjvE2utiTEKESIAhCpSjBUzccLOpUTEoSpDiNFZ6yYAJFVZFcaZVqvRWKTEjIa93jLqllpKKaWUUkoppZRSSimlrnzn20jWDWb1vPR6Gys+bYQ0zfZJjDeME3WeG1i79srqxBwgxABrLJjrCjzbyTqE8T4cbW8/4/TviNFoNOGTBEC9h1aVJYyxaHa68EmKELYr8Vy42wsRUQgh+iTZk7ikWltd+l0AQd8D1+RYONOZnP5bed768TTJDsRYPl1V1TOoK+8IxXg4yxs/TmzyUFVPE1FrOxltfB6wMZmx9m6f+Pd7n95p2LbKkraAsIZ6D01wZlUfbbX1CroqE3iqanQ8VqMHQ4jrZVnaqiwnRKKHCO1kRV6md5UIkKYpyqJAUYwuWoWHick6OzUqh58eDQZHdSC+ZgZgAJB2Z+I9SZrfZq0DvUSBasZZvDEGWOuQN5pI0uTcsSiCEAPyvAERwXA4uIQqPFF8ksw4n5i1laX/AU08u+pjNbFZ3p2cPGysXQBiu6pCsyzLjkj0zOPSkWwYAgeJhoiYmYmYWESe8yUrxkhRQM46ss5SCBFVqGCddb6uI2kkRiEyDBCFUEmUYJhNZoxNokgMoYpM1DSW21KFGBE5cemUYcfDYW9pHJdKKaWUUkoppZRSSimlXl50kdOFLnOpP1fqUsj66qklb+1SBG43bOcv5QD6+kB5A2sMjLUgpp3MBiKCsbbO3SEC1f8AADhXd7lgY8+4vqqqEENEo9FAs9VBjAFVWV78zo/3jZMkvSFCHuz3Nr+l74drynarLM4brff6JH2Nde6w99k7E59M583WvmajfafPsglj7bRl0xWRkyCarzflaPcYKgBgjOlY62431n0wTf27rUuuT7xfaDbbdyRJ3h0O+0MAPZxO5iFoMs9lZ67SxyVFURzZ2lz7zbXVpU9GyP1FWW5AZMEY03gx1U2e3xSFIBJhnYO1DoP+1kXOXidDOOc6hszRtdWlT2uIXjOTWQCQZqv7vjxv3O2ci9vdhV6KOKxL8RGSNB1n/tJ5z1uXBTTIshzDYR9h3JfzwhMIIpek1wP4en9r82GdQFzVXLc7udhod2611u4XkVZVVXmMIY0xOhExRFz3BCTYGKMFYMfZviCicTWyOryZWax1gAiqqhAA5JwnwyRlUZRgimmSMrGhGKrARNYYdhAahqoqAmJm2KSGjQshxBiiIWMnSbAyGvR/L8bRkeFw2IMm8CillFJKKaWUUkoppdSVZKcFDE5vFjOAFEB7/LNq18+byLIZVFXEme1flLqQYn199VFmtzdJk3caa4mIIhHtTlB4Dt5VEILZwBhbJ+www1pbV9Ah2kniIQBJmiHNMpy9pUbj/eKyrOCsQ95sIYaIctxS67xvECIKMYrzrmGstStLJ38TwAi6B3etEABTE1MzP56m+fcQcxsArLVTzifv8D75cJrnf7TRaH84zxuHfJK2nE/mrbUmSVI4n4w7tMTtON8Za4nIGmv3WGvfbKz7duuTP5IkyYebzc6706xxwLAtimK4CWCIM5N5NPYuA3MVP7btIFwf9ntf29pY/XXvk45zyVut82DmyxJgIgKIIM1ylOWlVeExxhIZznsbq5+sqmpN3wzXzEQ1+iRb9EnyHmOsx7j1G+oehXgxcUBEsNbWWcGXcN4Y4k6iz8VaaY3L+In3Sea9n+pvrf92VVUbGrdXrWTvwRve1my074wxLo6Gw8VQhSZBtpN1CACTjJtnyfaclmn8/504q0tVEjEbcs4TMyOUFaqqImIm5zzFGGMIVbDWw1ojVVXGGAIRc0XMJUQ4hGAF4pg4JSIbYrVqjH3C+qRfDHvPjkajFZxZ+k8ppZRSSimllFJKKaXUS8+mabrgfeOQc9mcc+me+pTMO5fN2cwfSLPsBpc0DjWyxm1Jkt6WJNmiMb6dNPMbkrRxR95o3Zmljdcy28paZpfnN2c+f13WbN2bOf/aaHgpFMWSPtXqEo032MIyG3+DQPbFEOx2twAR4FxttZ5zJUSw1sBaB+c8rLGgnVZadfusNM9hrbvQ3UBVlSA2yBsNjIYDVBc5iB4iEADO+0UAD/a3Nr8O3X+7yuP1PgbeSXn+wJ3dyemfz/LWn7XWdwE5nYRT92EzAMy4NZxlNmyMZec8jHWw4z3hsiphrIU1FjGG3Yk828k8RkSMiDSJ+AAzv9Na9/40b7zNJcn+GKqtGOMWgOKsgNaEnpeJufqDfCeDt4JQkTea3+6TpGmMlcsRVDSuaGKdg7EWg37voucXEXLWTQn4G1sba1/W4L92JhCD/uZTxvlRqKpWWRbNEEIKERII8Yts//Z8LltnY9K4Cs+gnlBcqJXW+DLOJ4sAHtvcWPuSxu1Vq2q2Os282drPxF1AWiFUaVWUjoiIicHEBCILEULdPgvETITt6jsAEcn2qaoqCaESYoZzHvXPSokxkHeOiRhVVVbMTD5JbJRYVmU5BMQTs2ViiwiKMTAROWY+UQ77vzPs90+uD3p9hLCkEwmllFJKKaWUUkoppZR6yRAAi7oyDgOwWZbNJUnjnjTN7kmy7F5nzY3O2Vucszcb526yzt6cuORGw/aQNeYgG7PXOj/Pxix6Z6+31l/vrFlkMvPW2Uk2Ztr57NbEJbdZ5653xh4iMrNRqiPlaHQCgMPp1i5ynvuoFACgLMuTo2HvsyFU95fD4mhRjlAWZR5DlREzjLGXFPY0rrrDzLDWwRhbV+ixBt4noIsmAxFCqOB8CmvtJR1EH2OE8z4z1rmVpRO/Aa3Cc5X7XQF+VyLjcKvZ/XFmk1dV8TQzt8bdLmj3uBdjRAiBYozbMbNTBWp7bzlNcyRJiiiCEKrt8fGMqjz1dQURESKiDrO50RjzHueS9yVJ9mbnktcQiYQQnjzz/goBH9c9uJeQuYYeKxXFcNTqTrw3SbL99nK10cJ2FR4gSVMUoyHK8oLJECQxirHOWWvy5VMnPglgS4P+mtHvba5/Zm116dejyB+Uo+KJohwhRpkyzH67RN/L/mbZrsLjk3H7t95FLxBjhLXOsnHJ8qnjGrdXqWazOd3MO/vTRn69tXaWIJ2yqppRgpXTCbsAiCRGKyJMTMzjcjvbp7pFHDExk7GWAKIQKhKJzGzYWkuAcFVVhoictTYJIXqJMU2SNDXGOAnSEIlNEWqw4ZyZMiIk1rpu1mgdbnW675loTxwuRuUTZTk8oV/alFJKKaWUUkoppZRS6gXbveFbt7RCOwNS32jYhk2S16Zp/iY2JheRkpjddrYDMxtmdiQEYiIAKRO1QJggYhATEdAFeBrAXgi6RByZqQvQPAh7BbSXIE2AnoHEE2maUlEUBCCOT9v3a7u7wfZ9VgoAEEJYGfS2vrq5ufYb66tLvx7K8ncEcMaY2611dCmVeM7G45Za1jpc6uXrA50Fed5EVRYoRqNL2vtz1i+A8HB/a/Mhje2rbmxFlmV79+zZ/+HOxPQ9nYmpO/KsOeETP+2c70aJJ4lonpm5zuGRs8dkiAhCCIgxQiSCmeGTBEmSwhhTV5Eydud81jrwmVV5aFfuRN1iCGBjzKSx9rD1/u2NVvvNrVZnrtFqHW40J27sba2vAR9fP8fnhHoRzDUU+AJg2Gy07/Jpeq9zDvUG8mW48XEVHu+3WxL1Lhi7VJczIef8vLX2kc2N9Qc02K8pdeu3Qe+bW5tr/2N9dfm/eZ90rPOvd87L5Wr/VpflE2R5A6EqMRoNL1qFJ4rAebfgE39kY33tCxq3V+EEotvds2fP4juTJLshxurAYDjYE0NwTCYCiEQUmU0EUQTqlJ46W4dYBEQA1V3hiIxh2i5TaY0lYyyJCFVVRTFGNsayMZZjjBxjNMYYS0SmqkoXo+QAUiLyAJyIOAI8G5M677tpmu6z1u1L0vzORqt1tyE61ettPQ4gaFwqpZRSSimllFJKKaXUiyIARsBoAIyGZVmKNX4fGztVFcOnq7I4bqybZ2ZHhLYQ7QFogZmmBTRHwLwQ9pBgBsRdAvaCMQ/BBEAdgqQgZCSYJ2AGhEmA2iA4gTyxtbH+xaIoBsCBClgvcfrI0t1HmRqcTuxRCjid5BUBbIxGg8eronomazQ/6H3StvaFd295Pgffb+8bG2PgvMeg39vpXnCe81O9z+xT7/zk8tbx30aFDY3tqyou4Zxrzc4vfHRqZv6nm832t7e73Q83m+1DWaPRStNs3ntv8ryJNMsQqhIhhHHcnRm2IoIYI2KMgADGWhhjYZhBbGBdnWyWpCmSJAMxjZN+5Oz7tLvSjzAzms3OVJY33u599m2NZvNDk9N73po3W3MV4mY5HK6g3oODxuaLcy1V4GEAwadp1/v0g94nzhgjlyuAROp2dEmSYDDo73pTnXsojjGKdd4Za7PlU8d/A0BPg/2aGqh3ZYpjC0LrWd74oEuS1ouZQDzP2cbOBCJJUgwHPYQYz3/DRCQxwlrvrPULo8HWp4q6D63G7VVk1OttTkzNzqRZPh2DtEOo2jGKFYIQc2RjIjFHYo5RIphQ5+wQmACq27PxGZnosaoQYwQRwGzAhiGxLuMnAAybcVWoCnUpS4NQVfXvz5rUMjOs8zDGSIxRYghwzi9mjeZ78kZzari29UhAWNMJhFJKKaWUUkoppZRSSl0ym6bpQqMxcSjLGnNJ0pjP8+Z1ed443OxMvWVycurb07zxXmPsvc67O51P7zHW3kygSSazl5j3W2MW2PA8iTSEkDBzm43tsOVpZjMtAhYRB6BDIEOAEaKMQE0CNUGSAxRJ8Gy0/I0wGvWB9e39km6SJAuNbvfQ1MTc26bn9v5wZ2Ly3eurvUeAag26FqxO244ZBkBVVaw1mp27kyS9zVp32bq3QAQiEWmao6pKFJdwEL2IwPlk0VPy9Mb66uc1rq8qVFXVJoFONdudd6VZPkHEhtlYYsPWOvZJCu8TOO8hAoxGIzjn4Zzfbot1VohJHVvFCGVRIMQAkVhX4nF+pxWccx7WOojUlzHG1LV3TnfWqg/Et46SJBUi3j5w3znn9qVp9u5Ws/veTnfyMBkaDnq9YwBKjc8XzlxrDziUxbDR6rwv8cmcuYxttOpsSkGSpogxYDQcXEo2JlnrpsnwF3ubG9/UQL8mJxFA3f5ttdHs3JUk6a3WOly2CQSAGGKdzRkjRoP+hScQRBRjEOf9LJFdWl9b/oy+jFfXZ8aePXsWk7SxP0mz64wxXWNtSkQCoIoSKolSkaAioBKJZQwixpq6QlOMFqBxsg7tfO5v95atM4LrloNszHiSEBFDqEv3EEMkwjBDAIRQgYjOSOIx1sL7BMxmu9QfxVAJMzeSNH9La6p7F4OP9ftbj+2aeCillFJKKaWUUkoppZSq10st6uQGBmCzLJtrdCbvaTQ79+R5416fZDf6LL01SZJ7kzS73Tl3L7P5n4j59cx0wBh3HRtziIn2M/MBYrOPGRMENkRkiDll5q5hM0lELSbjiTgBhEHEVCsJKCFIhGABsSAYCDYlhIe2Br2vtRvdfdPz8985M7PwJ2Zm5//MxPTcj7bbEz+UNRo/kPj0HUmSvqXd7hzaKvpfDvXBxjt9Z5TaFQuFT7KuT/wHnPf2shV/GB9Eb62Fcx6D/tYFq/BgXIXHGGuNtZNbG6u/HUJYg+5xXE1jL/X7W08452OSNd5ijPHjmHjOa2yNBRuDZrONrNFAjBFVWe6KbgHqDobj/0aEKiCEgGp8gHzdbisgRoG1Ft7XiTxJksI6u7P/th2XSZrC+WS7CIUAghAqiTGyNWbK+/SevNH+tlZ74qZyVD5RlsMTOu6+MOYaC3yEELbyRusOn6Z3j/sRXraBrc5q450qPDEG0HnGVSIiERHrXMpM/dXlk58EUOlAfM0O2iOfJB3v08s7gUCdVEHjPomDQW+cTEEXiHOBMYaNc7OD3sanyrI8qXF79Zic3Xvb1NTsvcbYRYnxNQD2WedywyYDIbPWpc65FIRUgMQY6621jpkNBFxX2amzesf5NQCdTtgxxtR9BCXWH1LGgMbn9S5Bo9lCuzuJRrONqixQlsVOPBIRDDPM2b1m64mtQATepwfTRvPtztvNrY31h6AttZRSSimllFJKKaWUUmqbASYbnY5P0zT11tpGozP52jxvvck6kxO4JIJnY4SYByAqiKgrkOkYZATIkIA+EwYCGjFRgXrLKyeinJlzArWJuclEKRN54p3fpUScE6jJzF1mM0fMU0TUJeZJJm4bYybSvHF4amLqQ81250808tYf8z65l605RESzADoSowuhkhgEaZbdkiXpxOryqd8BMICuBaszMQCpShk2mo33+iSdMeYyFn8AdqrwhKrC6GJVeMYJFc75PWzdkc31lc9pTF9VCCDZWF95sNFoL2Z54+5xPDznNd7etzXGgJnhfQKRiKoq4X0C49xZVXnozNiqy+3stNtKs8b4lCHL8nG3DANn7ek9uiSt9/BOh+/2gfQIIUiMAUzcTNPszqyRHx4Nivs1iecFfxBfcwNx5dOkkyTZhy53Gy0iQpSINM0QQ7xoFR4RATOTYTNZjIpPjUb9Yxrk1+qADVRlsZW3Ou9NfDJ7uatHSYxIsgwiguElVeGJ4pyfNtadWl9d/rS+hFdNHApitZk2u/NpmrajxAMiskhECRuTOOe9c85b5z0R+RijZyLHbCwRMzONk36pTswZZ/8KZKcqD3OdxMPEEJzO7DXGIsty5HkDxlpkeQPNdgcxRhSjEQDZaZ/lxqX/zo5LAFSFEK213TRrvN2l2XBzffWLqJN4dGxVSimllFJKKaWUUkpd6wQYjEaj0XA0GhVlWcbUp/uMcVOjYe/pcjQ4ZpNkjgQpSBYg9BpiOsBEFREFEBkCVSIoMN6MJkIcV9ZJ6go8VFfi2TmxIQKLwEuMKQgpEWVElAHYPnmIOGtt6n3STZJsr2E7GWOkGCqpN4+jSIzjh0GE8bqzT9Nb8rzZXl9d/iKAHjThQZ0lhGKtkbdu9Ul2j3WXsfjDeP/NGIMkTTEc9BAufBA9SYww1hrr7OTW+spvaRWeqw4BKMhwy/vkQ846R8wXzWVg5nGCDSNvNJE3mmBmhFBBQhgPiXVVnudc1hi02h2kWQbrHLJGA41mG857EDEMG1jrYIw9b2zudMSIQWII4pP0uryZ3zIaFF/SJJ7nz1yDQS8MQdZofShJs0lrLS7nwLY9EPskxaDfg8j5iz8QEcW6Ck+HGEfXV5d/T0P2mh2sEUJYzxvNm51P3+Dc5a0eFWMEMyPNcgwHA4SqupTkM3bOzfWLwWfK4fC4TiCujlgcjUZDx4YazdYCW2djrBYBpGdUvEFdZSfGuldmkqR1HEkcp+QyrK2zgkWkrkQ2LrgHAmIUCOqf13/XE4gkSWCdq7OIyxLGWLQ7E/A+QVmMIBLrzGJjLvRmohBCZGOyNM3fmKZZ3FhfeQDASGNUKaWUUkoppZRSSil1jeNWqzU5uWfPdXvmD75ufvHguxvN1rexMW9y3t/pfHonG3uQmWZAtBeQLkRyAG0BGiRwAnFCSEFkQGQAMgwYIjbbu8fbnYLO3GegcdpNvdNLRDDjti5JkqLV6WJiagatdleqqpSdfQo6E3bWeetrkwib5fndad4I4302rcqucEbgAcE4b9Mk/aDzSWqMvWzFH+pWWgFpliFe4kH0EqM47/c4m6ytry3/PjQx4mqLRxr0to47n+w3zt1hrZNde3B0gdgY75FZMDOSJIV3ybgNVoS1Dth1QH09FguSJEWj0dr52XYnliTNkOdNpGkKIkIIAYjxnElAu+MTAO1K4tFKPC+AuRYfdFmW/VZ74s3eJ4etdZetksn2dCGO3wxlWaIYjS6tHZGxzc31ld/UTMprd9IMIMBYytLsQz5Jsss5gSAixBDgkwQEYDjoX+z8dRUen8x454ZrK0v/A0DU2L06bG6urzdb3XaW5xkErirLfUxMtCupbLvKjnWubo9lDeK4HB+Pv6cR8a4knvoyBN7+WoUocec2rXVIswzG2J0wqqoKMUbkrSaa7U49Zu6aeFwwPkMQYk7TLH9Lo9lsr60uPwBgSycQSimllFJKKaWUUkqpa5hvtab3Jta1mO0NPkn+EoHeQ0QHrHXXGWtvYKZDxLyf2UwBkgEgEfIiSAA4IvZMtH30PDPBAmTHy7oEATERiM9K3kG9J+aTBBNT05icnsXk1AwmJmfQmZhCs9VBkqRIkpTSLKOyKKiqqots8RGJRCFi9kl2qzF8bGtz42vYOZxUqToOhoPeWrPdfZtP0oP2MnbBAOqD6EGEJE0xGvQvVoVnvHdsjXNusTfq/V45Gh3TeL7qYrIXQ/GoS7K3OevmiIjGW2kCQM7XWuts1jn4JIVPEuSNJrxPxp1X6qQeAMgbTaRpdsblQlWhKkuIRDiXoNFsIknT+udViUt4e1AMIfokPTSuxKNJPM+DuUaDfpRm+R7vk/d57w2zuaw3LyIw1sJYg0G/d+Fz1+XTyFg3q/0MVTHsrzXa3bckPjlk3eWdQNStjAhZlmM47KO6hCo8xEzeJQclhK/1+1uPaOxeNWNoORpurTQanWnnfRZDuJGYMyKORCTbH75EDKq/d4GIYI1BGFdzSnwybrFZt74C6io7hs1OVZ7t+Kova59TXWe7vVtVlnDOo9XpgojGLbVwsbGVRIIA5NIsf32z1d27unLqDwFs6ARCKaWUUkoppZRSSil1jQqDwebyxsbaars7uZik6eEYwrqILDObp4joMSJsQdCPMXoAk8zcNMamxnBijHXGGMvGGGOMM8Y4w8YysyEistaStZbYcL1+zAzDDGsd8mYT7U4X7e4kWp0JOOcB1MkNIQSUVYmyKFCVJZI0g/cJhsP+eBP6IhVLJAgT51mj8Sbn3ebmxvr927/Wl1yN46CXZI1F79N3OefpcnbBICLEGJGkKeQSq/DEGMU5N8FkT2ysLX9aX8KrLybLsjxpiNYjsL8qyrQoRi5UlYkxUIyRiAhnd8c4X3xZ52CMgXMeSZohSRKwMWAm5HkD1rnnXAYAZDz2hhDgfYI0y1EVxQtM4hl9uSyHx6F7cBd1LSbwMACJjJjnzQ/6JO1Yay9rpq2MawMmaYrRcIiqLC/cz1BErHXGOdvuba59sqqqDZ1UXLsTiCzL9/okfbdzni9n8lldhSfCew8iuqQqPHUZv6TlvJ9eXjrxm6grnGjsXgWKougTqrWyqk4MhyOJMd4iMSYhVhRCIJFIIkJEtJNoVlflsbDG1pMFawCRnRZtzAY0/ns8WIKp/n/iUyTjMn1nBVr9rbIsAdSZwkyM0XB4SVEtEkWicJJmdzQ7Ewv9rfUHQgjLGqdKKaWUUkoppZRSSqlrkFtcXLx18cDN75uYnrkxT/JTzrpjBOqJxKeKYvR0jNFUIVRRZJ0AS0QdY9gQMddrwUJExMxcZ+gAXB+vycRsiJnrauz1AaBgIrCxSNMMWd4AESNUJaqy3jSOMaIu8H96U7mqSvgkhfMJiuFwZ9/t/IhiDNFY28rS/B4QPdXf2nwIug6sagxASDhmef4BnyTty793HEHESNJsXIXn4gfRGzZsnZ0Z9DY+VZblSY3nq89g0Pv6sL/5W8Ny8NvFcPD7o+HwwdFo8GxVFpaIpq17/p2GiAjWunFFs2zcWuu8Z67L/sSIqiphrUWWN59vEo/4JL2u0Wq+Llbx68Nh/2loEs8FmWv1gVej0Waz1X3DK9NGq86k9H7cjqjfu1i/OECErHXTUfDQ1ubaV3QQvnYnEBJpkGb5+7xPJox1sl3h5PJMIAQCQZrmKEYXTT5D3V82wifp/iRJT2ysr3xeX8arR6/XW1tbWXp8beXUF6LEb46Gw0eHg8GzxXC4WYxGsaqqHARjrTmjmg6NM4KJGMZaYNxa0FkHZtqpykPE26UgkWY5rLUXnETEUCHGgKzRgrEWxWh40aMvxn2QRaIgSbLbm63ubVVRfmM0GhzVcVadK2D0KVBKKaWUUkoppZS6LOisk7o8Gp3O9B4wojG+zUT7i6qYiyHkoapaEJkGUWaYojHMUWIHQEZEBhBEiYjjZJq614sANF4XxpnVIkRiXY2dGMwM5zysdTvbZXWSz3al9ueGQKgq5HkDxtiLdrsYXx/FEKKxrpVl+R0S4kODQe8JvDwbyRq/r0JFMVxtttr3ep++YnvHSZoAxJd2EL1Ecc5Ps01Ora8uaRWeq1MMIayOBoPH+72t+7c21/7HxvrK/1MWgy9an9zjnN9jrHnBsbqdUHkJAboz7r6gJJ4qxCTN9idpdmhrc/X3xwfSaxLP+V6Xa/Axb2dMbo6Gg8+UZRElxsseICKCoiiQ5g04n1wsO5hCCELEWavV/i4AXbz4/py7Jw6sk4hXTeyi319/uCiHny3LAiFUl/cbE9FO0k6r3b2EQZkohAAAvtFq/5D3reuhvWWvxi/SJ1ZOHf+VY0ef+MvPPPXIDz/5+Ne/99gzj33n+uqpXxj0tobFaAQ5zyBHREiSBFmWIUlTpFmOJE3BbMHGwDoP5xzchZJ3dk0gQggYDftoNFuYmJ6Fse6Sjr4QESqLQtI0e8/84oFf6kzNvWscq6wvsdo1ZsklfBm/2EkppZRSSin16vs+oHN69WqMW4YIyfgEyO51YKWu6NjdVdl751THsY7Fl8HmkSOPfy2EMLTOJEU5yge93tyoGE2EGCbBNGGZE2LOQoxzMcZMYhyFEGKMEUwEwwZM9QGaTAxCnZhQJ/dECKQ+iJMYxphxUg897006iRGDQR9Zo4lWp3uJEUZcFqNorbt5es/ev9lsNm9FXd6HNX6vaTt7x/3+4DdGxbAIobrse8cxBhTFCI1WC0maXXRvI8YIEeFGo/k/5Xn3Drw0e8csu+YP49jV+cOVMK87PYaMtra2fn9jffUXer3NjaIoSC6+EfaSqTtgCCamZ5FeQpyOHwEXo5H4JHnn/utu+cWJidk3vYRj71WHr+FAx2jQf6CsipW6/N5lvgNEqMoCzIxGq3VJo16oSvg0fefU3N63vdhFByISgGQ8mEfUNQ1l/EVOB+ErewIxGGxu/MfRaLAWQkV4BZLPRsMhsryJvNm66MBMRCiLQpzzt87Nz337S/T+HX9Y3ce47z6GJqFdCXG5/dz3ARzt9/tfPv7s0399c3P9Xw0GfSnL4oIvqTF252gK7+uEHuc92Bg4n+xU7bkUIQQM+j2kaYbJ6Vk45y9tAgGhohhG5/1r5/bs/fvjJJ74Mk5ONWZfXXHuAeTjv/ms3z2fk1JKKaXUtWZ7sXH3SefB6tUQt3SBDTiNY3Xlxq4Igahe890Vu+O14Fj/W9ck1JUZv+P4jOPxNheRKRGZFJFk/DvZFcPq5ZEfuuk175qe3vtO7/yNziezPkmahnkaRE0RaQaRmVBWeyTGjJmHxLxORJtEJILtpII6USfGgBADiGic1DOuxDP+NxODjYExBs+72QARYggohgO0u5PodCcv9XJcFCNxzr9+bvHgzyZJchD1OjBp/KrNtVO/U4xG3wpVhcuZFDEOIhSjei+l0Wxd9CB6IqKyKMQ6d3h2fv5PAnC75rLPe/6wO4bpjDnEeP4guof8CtnZy8euPbmVU8f/w9bG+r8Z9ntyuQs+nJ3Eg0vcgyuLAlmev2d2fu/f8d7fhJc2ieeqSUC7Vt9k46SHbPHA9Qf+Q3di+g1pmkUiuqwJTSKCJM1gjMHJY0dRlsWF+xkCkiQJ9Xtb/+qxb33tJwAMTj+WS59AjD9vDIAp1NV8CMAmgCUAxfgqL3tiiHo+sYvu4sEbf2VicvqPZFlDmPmyv5ezRhMSI04eP3rRVloiIj5JqQrllx5/8ls/UGxufut5xu65Yvick5vxYAyN31f8c4UBBACLiweu/8ftztQfyfI8OucvfZwVIMQKzAYvpPofESHNclRVhdXlkyhGo0u8HonOeS6q8sETx5/9qfXlE7+DC1dgeZ7Pz30k8jFh5p3rijHurnCosXvlxDIDaAFwjU7ndmv8QRHps8gwRhlEjsMwin3mMKiqasDMo8FgMKo/S3G+GXMEMMK5F0vjq+D1H9/v+4D7AHz847vjVmNXQeNXqZcxdu+7D/Kxj8nuibHGr7rSY3fcHvcc3+Fou5mtrj2oKzJ2z1p7SAA0xuPxAPWBK7vXIDSG1ZUYuzOdTuf2dnfmlizLZ6sY46C/8ezq0smvD4fDhwCsawxfsfO+i3kJ1qYu6Tp2r1vIS3Tbl3K/sqmpuTdOzc2/vdFs3eqdnwkhxqIcHh/2+1898uS3PjUYDO5Hve6i8fsyaLVaU93pPbdOTM7cnmWNu2KM3aIYdYrRsCNRRiFWNlZxYrznWgQJYKI0RpkQkS4RORpvV/C49dXpNli7B6y6bdZ2+xZihvMe3icvaC3YOo8kTbG2fAqbG+uXeh3ivKdBv/drj33ra38ewHHU64HxxcTvzPzC29vt7q0+yWaqUMZRv3+819v86pEnn/jUYLCh8Xtlj8ECwO7dd+jvTUxO//m80RJjzGXdfxMR+CSF9x4njx/FaDi86P6b854kxiePHH38+zdXVv4QL3zveKrT6bxmYnr+pmajNVfFiOFg48Tq0sq31teXHwSwPP4ip/F75cTrwr79N/zDzuT0d+aNhjBf3nhN0hREjNXlUxj0e5cy9gpA4rzn4aj/X489/dhf6fV6D73IMZEAARFfIOeOILKzDyevhhf3Wmb2LF73C5NTMz/VeAUGYQAgZjQaTaytLmNjbfWig7C1jsA4cfzYU39i5eTJ33qeE24B0JmdX3z3zNze9zcb7Vt9ks5IjFyMBiv9Ye+bq0snf+fokSd/A8AJnT9c2YPy9OzCj03OzP5/W62Od85f9qxtZoNGs4WN9RWsrizj4s20SHySyMb6yt9+8rFv/jXUyR2XPIFAnd0L1MlnBxrtyetbreYeZubBYGtpdWnpMQBPABjpAsQVgwHERqNxx/Tcvn/eanfvzbI8GmsvW7LkdhKPxIjVlSUM+72dXp0XmUNE5zxXVfngyZPH/+LKqWOffJ6LHM+5K3U/Z9p9WTu+vnL3/dXYfUUnu8+RNptvSX3jLjbcpLoCz+5FKyGiGGMMRFJFoVKilCQyEpLRuWamLLGoQOtGxNYhARERE0I8tbW19nnUyT1X5HN08QTKSOOPIo1fdcXFbz0Gs5wrPIkIEiOBNH7Vq2/8HX9PfNUsQKhridC40gMAdADMN5vNWTHGFP3+almWxwCcHM+ndA6srsTvBjbLsrsW9t3wzlZ34o680dgDER4OBqcGvd7DJ44d+fTy8onP4fkfXKfUyx273X0HbvzOfQev/4Esb9xprZ9wzhoBUJVFWYxGS6urJz/7xOOP/pv15ZO/DmCoMfyqtN3W5fm8bh71uurgRayT0K7fveQxY7Psnjtuv+fPzuxZ+JBzfg8x7VTV3in93e898czTj/3Hbz70wC8CeETj9+XRbs9cf/3NN3/I+2xPv7d5fVEU0xChWD/VzIANMcZQVQihmgRTGxF5FPHGcG6MtduJOc8JXmYQm9OJO0Sw1sI5D2Pti7rf3iewzmFl6SQGva1LWAcWIWJY5+Lm+urfeOqJb/1vqA/Me95xdXb8CgQxjCsPsQERMBj0nzzx7NP/vwcf+LzG75U9vsbO1Ox3zszO/0q73W15n1z2/TciQt5ood/bxMrSyUv6AuaThDY2Nv7+U489/Jdw+uDSi8XXzvxh775D33ng4A3f12p37zbWThljjIgghBAkxuXNrfUvPfnYt/79s0ce/08A1jR+r5x4zfP87rm9B/9NuzNxOEmzy170Ic1yAMDSyWOXfiA9kXjnaTjqf+rE0aN/eWNj+Qt4gQmUu9bNOq2JidsmpmYO52lnr2Xhfr93cn315DeWl5e/BuDUq2X9ga71oH6lB2ERQZY3IBJx8thRXEI7L/FJSv3NjX/62KMP/eQlTiYIgLRarTffeOudf2Fuz+L7vE86IQaEqh7DjbEwxqAoi8HSiWc/88gjD/+DtaUT/+0FvFHUZfpC7r2/ce/+6/9Dpzt1xytVQSrNclhrceLYMxcdlOsqPAmFGB47+uQT37+xsfzFS/yAHy/8Cllr773xltd9/8T0zLuTJN3nnG8yE4UQ+qPh8NjWxvrvP/b4Q//X+vLy773QibZ6ecbadnvyfdOz8/+02e5cl2b55Z1AEJAkGZjHWcCX9OUNABCt8xxj9fjqqVP3HT/+9L/DCzs6YjuGAWDfwsJ1b2x2u7flWWPROGdHw8Gp9dXlR44dffIPy7J8CHoExmUfT89coGhPWmv3cJJknnwsy+o6MF4HZpEgsa4aSjL+vJaz51NyZhnRS3gdWQDYsho9uLG69Gu7vlxd7DrkMj5Hu29vsdnsXp+32ovWkhuNitXlk8eeAPA4gC3dgLvm309nv7de6fg9+z0032w2b2i0uwvGmHQ0KtY2VpeeKsvyMQAbegSRxvClToMv1/3ZtQCRuTw/PDs9e1uz0dlvfepGRX917dSpby0tHX8QwDOX/rmjrvEYlstzP3bmvgdvvPW1H56amv0275MbrbMTAJuqLDeL0fCZ9c2133vyW1/7z4PB4IuoD/DQGFb0yscvBMCNh19z14/vXbzuu7OscRAExBAgImBjwESoQjh+8tgz/+3hr37+n4xjWKlXMn53Yve197z5Z/YuXvd9zJwNelsoihHKshRmhk8SyhstZFmOzc211SNPPvrL3/jal38ewAkdg6+Y9YnFbnfye4jMFBGF7V9GQKpi9PDW1vofAHj2PHEnF/gujzzv3G0t31AUg88Oh8OnzzN/3LlcozFxW2uqc1cow4lTx448DODY+PN6+yw0XmB7sdV5CABm5xe/4/Dtd/5stzv9ms2NNWxtbUhZFrI7ASJJU56cnoNzHieOHfndB+//ws9sba3+vsbvSxuHrVZravG6w9/RaXUOgagc9Lf2DQaD6wGgCgWLiBgysaoqBAkMUAciHiJGgMwYbjGbrjF2p+L4doUdZoN6WbgOH2vMTuLOC6m6cy5JWq8DL508jtFwcNHrFRExxhIzr29urPzdp5989O+h7lhxiXsXwJ6F/d9z8+HXfaw7MXXb5sYaNjfWpSxHEsbxa4xBkuU8MTGNJE2xsnTy97/6pc/9zNra0u9q/F6x4/HeA4du+dXOxNRbsyx/RfbffJLA+wSnTjyL4WBw8QIQzhGAoyeOPv2Dy6e7CsglPNYb77znrT8zv3jw+3zis82NNfR7PZTFSEAE5zzljQa6E1MYDUeDp5969N9/9Ut/8HPQJLQrKmanZ+d/bGJy9u82251GkiRyqZtgL9EC1lkH0vcvdZUtOp9wWYy+cOTJJ36031/7yvOMqe3zposHrv/Awetv+cEsb7zJsJk2xjgACCGGKNXqaDD88pGnHv23jz/y8H/CqyABja71gK4H4Zv/XXdi+m3pKzAIQwTGWmR5EytLJ7C1uXFppdBEHj/61BMfWV9fuh8XzkgjALJn4cB33/qau36uOzF9y+bGGtZWlqQoComxnnMbY2CdR6c7yZ3uJDbXV5/91tcf+Lmnnnj0n6GuDqGD8JXH7Fm87ucnJ2f+l0azKcbYy19BihiNZhOb62tYXVm6pNJoPk1pc2PtHz756Nf/Ek5XmpCLvE8b+w/e+CMHb7jlpyanZg+FqsRg0EdZjBCjwHmHNM2R5jl6W5vHn3r8W7/8ja/d//cBnNLYvXLG28mZPX9ycnL277banUmfpEJElzVmfZKAjcXa80viEec8RZGl9dVTf/3okSf+4XhMvNRM4O34mz546OYfOHDopu9vNFt3EJnGzs3XvZqr4XD4xPFnn/6vD3/1C/8CwIMaNpcvNFBXQ6rGp7zVau1Nm92DWZrtZzKN0ahPxngbQmHZOGECjUZDLyJuey4lIoz6SLbdrU0qQEgEBiBDJJZAlQAjETFMZAXkAKQxVl8NJf5rVW31tra2RuOFgnNOhrd99KMfZQD4+Ok2QOcaT1+q8e/wLbff9X2zc3s/aL07ZIxrG2aOQUajcnhisLX1paefevRXjx996pMAtnTsvSbGdQD30X33AR/7WN0W8GJtwV/B+L3l0E23f2Tv3n3vS9LsJjamY4wxIYTRaDg41dva+MqxZ5/5z88eefz/AbCs8XsNxfB999F92B3D5w+73fEbYyQAoI99jM5qxfZSxe92DJpOp/P2Qze/9oempmbfZZzbY41JUFeNkqqq1kfDwcPHjj31iW899JV/j3ozR+P3mhmD67Zqu2N4vMSAs/fhtsN3O3ZRX4Y+Xg/EL8c4bPYs7P/Omw+/9qcnJqfvDSHY0WiEEOo8ZWsdnHOwzqO3uf7kk0888suPfP0r/0TH4Gsvhu+77z58bFdrwN1ths+2O35Pj82n/3wJYpgASHd6+h23veb1PzczO/+WshhhZfkkhoN+DCEAArBhOJ/Q5NQMtdpdrCyffOjhBz7/sePHj/7aSzx/Ua+CecR2a8sLxe754/djBHz8vGsRzyOOtxMnD93zpnf9o8X9hz6wtrKE1ZVTMYRqu0rqTlIGMSHPmzI1PcfWOXnska//y4ce+MO/DNBynZChMfxKrZsBsBMT0z+bNVt/yRprz/x6JQih2qzK8itlUXyq6Pd/uzfqfQXA6qXdRGO2O9X6Xmd5IVbh2cFg+Nl+f/1rRFScHZ/ELM1G49a9i9f/ok/TN8UY1kMIj5ZVef+w3/98f3Ply2tra08A2DjH46DnGcMEQDqdyffe+Ya3/1J3Yuq6o0eeiIN+j2g8iaH6QIu65M+4NWenO4nZPYv07DOPf/6Ln/3Uny7L6kFAXshR++oc8pmZPbOdqZu3O1aURTVliN8B5sUQKoFEBlFH6nWwANAAIn1AJgAcgMCx4SljbNNaVye/MmP31psZJ+5Y5/ByLBGnWY4YAlaWTqIsi0u4xDiJx/BwbWX5rz3z9GN/D6crTV1w76I9MfFtd937jl/qTkztP/r0E3Ew6I0LC51+S4gItquzN5ptzC/sp+VTJ+7/4qd/+0f65eABjd8r87N+fuHAz3YnZ3+m2WzBWPuK7Kc3mi0MB30snTx+KWcXn6bU39r8149962t/DuO2rzhvRbV6/vD6t7z7Hy3uv/4DG+urWFk6EYuiGM+yaXvdWwAgSVKZmZvnNGvgyce+8esPfPH3/xzqgzp1/nBlfL9qzC3s/9jExMxPNpot65zf/bvLcC8IWZYDInUC5Wh4qeN79EnCw+Hgvzz79KN/tdfrPYhLT6AUAHtfd+/b/uK+/df9sLF2Yn11BcNBH2VVCASw1lGSpuhMTIGIBseOHfm1B/7w0z9XFMU3ruTYJY1r0J7FA39jcnLurzSar0wbLRFB3miiKgucOnEMF9v8ABG893FtbfmvHXnikb9xVoDJcxYfutPvuOuNb//n7U73hmePPBkHgx7VQ++ZaxzjhT5J0lwWFg9yv7+19NUvf/Z/PvHsM/8OL6xslXr5MIA4MTH9oanZvf9Huzsx8UpVkErSDNZanDx+9JKq8DjniYiWT5x45s+cqhe46CITiPyGW+74qzcdfs1f8C7Jl04dl82NNQkhnPnlkkjyRhOzcwvM1oTHH3n4Vx68/3N/BaBTugBxxXzW2Jm5hb84OT17X6PZ9t4nl/1zyPkExlqsLy+h39usvzzh9KbcOeNXJBrnGKD1jbWln3vm6cf/0Xjye7FxcTvubn7d3W/52P7rbvwe65xbXjqBfm9LqrIUkQhjLaVpRp3uFJI0xfKpk/d/8+sPfOzEs0f+yyUu1qnnH4/c6XRa6+vBTU01brdJehCIfamqYQXqSVn2QwiVMcaTNXukEmsMN9naOWIpIMyANGKMMxB0QbIlgCdQBxA/Tm8XCFWAGCEwg0gAQ6BSIAUEJsZoBZEE4ovB4D/3epu/BiDvdDrNJEmqYO0IIlT1+8X6+vom6gSj/jjuyufxeJ/vAtpufs/C/u+78ZY7fnp6Zs/rqqpEb2sTVVVCYoSxFt6nSJIUZVmsP3v0yU989Uuf/dvQIzCutvGbgPtwkWQdBtBMOp3JZp6n49aXr3T80uzs/Hdef8vt/+vM3MJdANDb2kRZFBCJsM4jSVJkeQNlMRoefebJ//trX/7cz46roWn8Xm0xfN99kAsn6jCAJgB31s+AurLjYBy/1aXftJwrhi91AaJzy+2v+7P7r7v5zzfy1kK/v4mtzQ2URSEhVLDOUZrmaHcnwMaE5RPPfvKhr9z/v62unvysxu9VGcM7G8UXSJg041MyPm3HQYG6PcrziN8XNA5vn88s7r/+z9z2utf/tWazNXfqxLNYX1uJMQbavtv1UfQseaNFs3N7CUTl448+/G8evP9zPwPguMbwVRrHF49hoE6s5/Fldn/XCi9sTUqek7xwnhgmAOLy/HVvetO7fnl6du9dJ449I5sba4gx0nZ7j/H3Q9TfIiGNZlv2Lh7kleWTT9//hU//2Mbq6m9o/F7TMWx3zR12n6F6CWKCzhFbu9cBG7fdce8v3Hj4jh9bXT4py0snwHz+NW6JESCKe/bu4yRJy28+9MDPPvLNB//mfffdF8cJ9qJx/DJ+pj/X9vrS9Ozcwn9otNpvt9YF4MwDjUUixRBQViWqsjhRleX9o2L43we9zU+VZfkoTrfGSpvN5qGtLVkGeicBJBMT0++xPv0OkZgCcrwsi6WtjbXPhxD+YDxX2H1fJq+/6fa/02y1f3g0GgF10gyIGII4iiEeDaH6WlGOPt/f6H/h1Kmlh4HB8YvMMy40p9j/xre991/vXbzunc88/Xjs97aY+cLHWMcYpDsxLbN7FviJx775f37585/+cSLako9+lOu8OI3jl1B3cnb+XXmavx5sO4CsEJGDyKF6Xofl8cfjFBFmRTADyBoxV4bt63yStKw9/RWLmXcSdy72Or/Yd1yWNRCqCksnj6MsC5zxeX6usVEkWudYIMdPnXj2R5dOPPtfdlWawvni9w1ve9+vLCwefMfzid/tOcSzzzz5f/7hZ36rjt8YCaeTO19sZSv14jCA2Gx23zG3d9+vtrsTc0mSviL7b857JGmGpePPot/vXfB9IyJirQUZXj317LM/cvLkM/8Jpw84lTPnDwKAGofvuPsXbj78up35AxGf97jrei9FZHJyBu3uJD32yNd/6etf/cJP33ffff1d8weN21duniEA5hYP3vAvut2pD2V5Ixpj+XLfkSxvIIaA1eVTGA4H28mL2wdfnOfe1+20inL0+WNHnv5z4w4uF2oXSuO155nX3f2WXzh4wy0/2NvawNLJ47EsR+Mc4N0JaAJjnUxOzvDk9CyOHnniNz/3e7/5EwA9eqXuH1/rCTx1EsT03PfPzMz/i3ZnIrPOXfZBeLsKT5o1sL62jN7WJiTGMyYT218Mx5m64pOUyrL47Dcfuv978dyymafTeolm3vyOD/yruT0LHzzy1GNxOBxcwgQiIknSuO/gDby2fOqBP/j0r/+xoiy/cd9HP8o6CF9xg/HMvutu/r8mJqbek2Z55Jd11nu+cZXQaLYwGPSxtryEEKrTvYmJzojf7cEyzXIa9nv/7Vvf+MoPArQyzjA/M6ak3gLfd/DGH7v9ta//eSJqPvvME7GqqvM+TJEIIo5z84ucpo3wza8/8De+9fAD/zvuu6/Exz+uX9qujJidXNh/6J90ulPfl+WN6Jy/7DHrvIdzHiEExKrCaDREUQxRFgWqUO1EybgV0E7cGmuJmXtbmxv/5KnHv/G3ACydY3FOznq8B153z1v+0cFDN397r7eJpVPHY1kURIR6ErE9AxERZkKz1ZXZPQu8tbn+5AOf/8xPLC0d/+/QBeCXRXNi4i2tRucuNqZp2eQxioCJSMQKkaFIURCLKHEqhDAPCBMZKyJVva7GQiSGBKkQRhCKUcQSSVuAjAQBdXZsDDFsSYwcRQwQQWTIGmeSLHONZivN8jxNfPpwlufHjPP7vU8X2HAOCCBEMYZhrMrVIHFUleUSAUVZFMc3Njce29pYX91cW14ZDocoin5/MBisoj4KbgCgd5EFNMb5E4ABwCzsP/QTt9x+533d7tTk0sljsra6/NwESqCeAE/NcLszgWefefK3Pv/Fz/zPuMKz2NV5vxdsZzRGwrkqOQAAEiCbOXTTdQc73Znr0ixb8Inf5316wPtkgQ1ndVSdP357/a3HtjY3VteWVlaGw63nG79nb2CcaxMOs/OL33/7Ha//292JqcWV5ZOytrokVVWdnQCMJEllamYPt9pdHDv65O98/vd/+6fKsnxQ4/dVG8P1v0WEdiqSPOdl7Ezu2bN3ZmpuT5Y359O8eSBxyaJP0gOGubH9ugtgQBAJsV/FsIQYy7IoTg0GvcFWb2N9a2Pt5Mbm2lJ/MFivTsdvD3WyRHmBKdHuGD5r/BUAlN58+LUfvfHwa/9fIVT+1MljcTTskwiwfSTy9s6hMUa6E1M8PbsXy6eOf+VLn/v0n93cXNUknqthLD5/DDOA2T179k92pibm8kZrMUsb+5I0O0DMqTVmgoxpE4EQKYZYbYUQVgSxKEbFydGgP+oPtpb7W1ubg8GAh8PN9VFRLIWRrJRlbwN1Jb3+OIbj8xiHt6tufvdr737zP+60u3NHnno0jkYjOl/73BgjjDFxbn6RkzSTr3/tyz//6De+eh8gw+0ihxoSr+b5xH0QOWeyQw6gO7e4ODnRmdvbbLcPJmk6x6DUOj/LxiSAkGy3aRFQiGGzGA2XQlnKcDhEVQwxHPbj1lbv1KgYnkIoVlBibRiGa6PRaHMcwyOc0erljNWDMzfj6vWz1j1vetc/3nfg+j9+7Jmn4tbmOvFFDvKLMSJvNOPivkN8/Nmnf/cPPv0bP0hER0S+1wCfuNhR++qKj2MB0TnH4SxN05n9h266YWJy5nbnkwlmSq3xs8Tkx4PXTuyFqlwbjUarVVHY0WgoRTGKxbBf9jZ7JyqpSgPECjjFUYZEQQaDarXXW1sfj8cDnD56/jn38yMf+Qh/4hOfCIsHDn3XHXe+6V9WVdU5dvSpC1c8HlczAQA2Ju4/eAMXw9GTf/C7n/y+jY3lL+x6W2wf/anrwJfJxMzMBxp555eTJJu31p49v91+DSTGSCKRYoyoqrKqqvKJGMMXmPgbxvCRYjjslyEuCGjLOXtSJPpqVNxGlu+1xrW9TzbTrLHWaLWLPE2fJbYVM4MMjLPJtLF2r0+ydxGQj0YDFKMRyrKQqiwpxkAhBESJGN/+SiiLR4ui+NJoOPxyVQyPDIfF6mi0tVoUxTqA9fHc+Dnuu+8+/vjHPy6Hb3vdT950250/v7p8yqwsn8L55g1nrzMzs8wvHACAja995Qs/deTJRz7xnPcLESAfZU3oeVFrufnc3gPfl/jsRiAW4/khA5QISSBBAeAgiG4AZBAlHiPwMgFDY+zbjHNvc87DWkvWOjjvwGwuzwMgGh+wU2A47COGgLIsdw5K236Eu2NLRKLzCRfF8HNHnnj8z/X76/dfIH5xy213/eTNt7327zzf+CUimd2zAO+Tja9/7f6fevyRh88Tv3F3qzqN38sf/53FAzf+64nJ6e/I8oac7/V9uWV5A1VZYn11GSFUiBJ3PhW29zC2y7GKiCRpSv1B7z8++vWv/tB4PnGGj3zkI+YTn/hEmNmz8N13v/7t/4KIOkePPH7Blku790qISOYXDoCZN778xc/8qWPPPPUfz1zWiNvZcjqHeAXittVqvWlqdvGfdrqTr0mz/LJ3wiAiJGkGiGAw6CFUAWVZoCrLnf1jIjpjTrp9pJ1PUhr2t/7LI9988CcAHDnvGkS9f2xuuuWO/8/Nt9/50d7mhjl54qgQMZ//4QpiiNKdnMb07Dw9/ujD/+yrX/rsT9933329KzGBXRN4gNhoNG6f23vw19rdyZvSNJNX6nnJ8sZOZlq/v4Vhv4fRaIgQzlxvkBiFmAlE/aWlY//r8SNP/SrqVhu97QW27cH0xlvu+KHDd9z9iytLJ9K1lWVc8ANm19FEAGRyehad7hSeeOShv/HVL//hXx9fvw7CV9hgPLtn8acnpmb/dqvd4d3Z7JeTcx55swVmQjEcot/vYTQcoCwLxBjGy7n1YBxjFGYDMNZPHj/6Y6eOH/3EOabALPIxaTabt77xbd/2q41W+7ann3g0hlDxJfSsBRHFhf3XMYAT93/hMz9w4ujT/0NEtqtr64T3FY7ZRqNx29Tc4j9rtyfelGV5NPbyZwH7JEGr3UWWN0AAQggoixF6vS30e5sY9Pv1l7ntSWm9OCtsDBFz6G9t/NvHH3n4rwJ45hyPkYD7AHzc33LH3X/zhhtv+8mNtVWsLJ+sa59dIIZjDEiSLO47cD0vL5343B9+5jd/aDQaPTq+kFZBexGx1263J/I83+N9I6UkiSjK62DtnQxIEIkMQIhIQvBgSgicgOAkxk4I1SRAfQBpnXBIUSR61FlY25PH+vMXZASSQBAJiCGGrbKsVr2ze7JGa6bV7nCz1UkbjWaeZHnurE+IYGQ7GUzGFfFITn+y7gxb9cfu9v9ijEFCGIUQBqPRAFtbm6P+1sb6oN9bLctyvarKozHEJ8pq9GQxGB4ZDDaPjUajJZzelJPzToIBmZqa+yOvufuN/6zZ6sw9+8yTsRiNLpBAKRCJMjk1i6mZPfToN772fzz4wOd+EpA13YC74sflC30u5gBaAKbn5w8uTO2ZX2i3OvuzRn5D4rObrPf7iXmSifzOYtTuKeH54leAKDFIjKOqqgZVMUKvtzHa3NxYH/S3VsviufHb72+cKIpiBXWP4uoCjwMAZGJi5tvuuOdNv9RqdfYfO/p0HI2GzETnXIuox3qRdndS5vYs8tNPPPLfvvi5T/04QEe0it+rJoZxns9JC2DSNRqzB+YP7u1MT+/P8uZNWd641SfJ9YbtDBE1mDk9M4ax6+vNmVX6aNyOKIRKqrIshsNBv7e12e9tbWwM+r3VoiiWYwxLiHIySFgty+JIORw93e9vHB+NRqdQb2KcPT3i8Sow8PGPx337Dv3wbXe94R8AaB19+olYJ5HyheYPkjdasrDvOj72zJP//XOf+a0/LSLHdP7wqonh7S/YArCcFYUEoO2bfn5x/qZDk5OTi63OxG1Z1ryLrZljogkyps3Enph3L3ydHntBO7ey3W0oVFWMMYSyLDDobY22Njf6g35voyiGa1UIKxJlCRJXq6p8alSMnhwWgyNFr3d8NBqtjBeA43PWVuovYgfe9I73/9u9ew+86emnHouDfu+ix5hsf39b3H+IQ6xWv/yFP/hTJ48d+c/bmyK63vAqm08QCZ6b/JsBmL7xxtdcNzm/5552q/tG69x+ZjNtjJlkNi0isjttJuica63jq6e6+o0AIVTY2twIva2NUb+3NRiNBlshhPUYZQUSl2OsToVKTsVYLpej0VPDYe+ZjY2NE6gPxBjsXmAWERw4dMt333HnG/7F5uZae+nk8Qusn9Guteb6j5nZebQ63fD1B+//f3/z4Qd+4awY1ySIV9NYPE6ePEfi5MwNt9x+y+zswhuyRvNOn6Q3el/Hcf360vn3vHY2uxiCCAhQVSUGva1qMOjJoN+X4XAwqEJZkSAKsCUS12KMazFUy2VVPhFG5ZNFMXpyY2PriaLYehZ10vD2nfRvfscH/uXc/MIPPPn4t2JVluddO4sx7lRSBepKGHmjhUazjVMnnv3E0tKxX97obTy6cerUs7vfJ7tiWWP4Ba6FZVm22GhNfo9xdoqEdi32RxRl8dDKqeNfWNx/w59xPvkr1hq+hASHnePBYgz1a1s7VRSDp4ph8UyI4WlmXk/zLO9OzBzudCZuzxut3HnvnfPWOueobit+OinGmNObtCJnjXv1xnBZliiGAxmOBlyMhihGIxTFCFVZVgLpQWQrxrgZYjwVqvKZKpTP1DE8fKooBic2NjaOo26bOQDQfef7vuMT7e7Ee5987JvjxJBzK4sRqqpCkmY7FSiYeVwRuDw6Kkafr8riq8Ni8NXB+uajJ08efXr8/VG9SFNTc+/Km+13EJEQkYkxSt02HiRCTIR2jJGKYvhNYhlZn84acCKEKWPMh9O0cajRbEkdcpfX9jjXbLVhjEFVlRgNhxgO+hgOByhGQ5RlcXpDefz+ImIaDfoP9IdbvxVG5eNFMTxSFIPj47nE8nhtbfKd7/ujv9buTr7zxcRvVZVHh6Ph50NVPVSMRg9tra89fPLk0WdQt8jTMfcVHr+nZvf++NT03D9otTvOOf8K7B8LjHFottpw3iOGgMGgj9Gwj9FwiLIYIe46oL4+UJgRY9xYW136xcFw8PvlYOv4eOxdxemEnuSeN73zVw5cd9P3PfXEt+JoOLzg/CHGAGss6taGjCRNpdls0/r66mc3Vpf+9WjQ/9rS0uOP9/s4dea63c5BTBrLlzFuO5Oz3zUzM/eLrc7ErPfJZU/iAQCfpmi1OnVLwxhRFiMMelsY9HsYjgZ1hfQYt7+UQWIUAMLGUL+38atPH33q58pe7ynU+Q/Y/f0NACYmZt/w+re869+RMQePPv1YPLty4ZnPCu2a14jMLxyA98nGl//wM3/qmWce/4+nl2XOyHuQV/qFvOYDGUC2sP/6fz4xNfMDed6IzIZfiTtjrEWnO4m80QQzI4aA0WiIzY01bG1uoBgNtyuM7ARpVRbLRVE8HkI4GkP1bFGNnhgMeg8Ot7a+NhgMtt72ng//0uT/n70/j7Msu8oD0W/tvc9055hzqsysrLlKKpVUmhAgIRow2IaHn9vt9vt5eO223b/Xdrfd7bFtt2mgbWNj4wZsZgkQIIQBIzEaGwswkkBzlVSjqirnKcYbdzj3THvv9f445964MUdkRWRkZZ71+1VlDDfucM531lnDt741NfPfXXztZWbmbc93msRI4hh+pQLH9UbSmH5QBVu7NIjC/5ql6WejQe/Z+esLL8Tx6g2sl9cs7fabAGArlebTx06e+qVma/Ksd4QEtGq1jkZrAsVexbwYEQ3Q73YQ9rujXbNr9wlCkkTPxWH/99Ms+0oSDV7s91cvpWl6syhE4E1PvesfPPjIm/7pzeuXKOz1iPYhMFSrN3h69jjduHb5Q1/+wsf/cRzjOsYmoMoi2tHittpsfv3s7Mkfq9dbD/hBwDtJOx+WKaVQqdbheh6klFDKgZQKDEaaJIgGffQ6qxgM+rDWriVwQhCY0e91P9bvd34xDgevdLsrl4vkbTRtPzl54hve9bVf93PGmNkb1y4ykdiFwZ7D0FrLzYlJnp07SRdefek7n/ncJ76T8gBmKKNaYvaWYpip2uQx51SrPnF/JaidFo6qhmHIruOrNI2U47hWCKJBf+AY1g5xLt3P4CZAE0ToWrYzYHKI0GPLxy3sLAAvPxPEALsgOARy8qKGIN8PuNFqcbM1Was1Wr7regIAWWthjIbRpiA6DlsRvFHFaUOCM2wgg4SUJISEUgpS5dLDbA2iKMIg7KHfXcVgEELrLGHLq5btotX6mjZ6KUuz16Kw94kw7LyWJMk15BPK48ne3Hu+7pt/Zmb2+DdevXQ+Jz/swQczMx87cR9cz4+ef+az//PF8y/99IYGXOlrNyrdrJe+P/ysf3uygwQwEzQapytO5eGgWn2iVm88UG+2jjcaE8cq1fqU4zg1EsIBEUYYNgZcFIv3jF8CEQmSUkEqlftfIWCsQZrE6Pe6I/wanSXW8iqzXTFa39Q6ey3L4heiMHquwO/V8Zi0wO+x97zvmz80M3fiG69eem3P+LXW8tT0HJoTU/zqi89+5wvPfeG7v+M7voNK/N6ROeQ26jVoADhen5g416hNPNSamnlscnL60Vq9edLz/CkSoi6EUEBO3jVm2OywPCRy7faxC/xCSklSOVBKQQi5wf928ikjY8BsE8u8ao1ZNDq7lGbJC2mcvjyIey/22u2vIG8kj+P37Pu/6ds/0mxNvuvSha9YrXcgsBONmtrWWp6cnsHE5Kx59cUv/Z3nv/y571+LH0oC+x14DW13TgIA075fOz09PfPo5OyxJyYmph+p1OrnXN8/LoSsCSEkM+eTlyYvpBYNu8JX8baX7JBMLsSYD5aqqAkkGER5/Bvl8QOYLazlAVu7aoxZMCa7lml9KUuSl5No8EK/v3o5TdPrwyLwuYce+1/f/Nav+ler7SW1vDiP/Uyo1htNnjtxmq5dOv+xT3/yd/4nAPPrsF5i+U6NZbaKJyYcxzk1O3vqoeljx55oTcw8GlRrD3ied5+UapaEoCF2x5vOa6vdt5ZIH05pihzDUMqBUg4RUV5/GITo97oYDPp5I6PI4ZiZ2ZrQWNM22sxrnb2apcnzSZq8HHb7rw4GncsA4vd83Tf/8Ozcib9w8bWX2RpD25ExdJYhSxO4vg8pFYgISjlcrdUpTeKLvW7nV6Jo8Jmi+XZxWN/Y4h5W2h0TzxBvQTqbO3Xm/q+fmj7xQLM11ajWqk+6rv+IVGqOSMBasxYLr/PB26X8NFrdMpbDkSAqYuAEYb+LsN9FEkdrNYj8Xg5rjTXG9qzRN7TOzusseyVJkpeSqPslDbTe+74//oPa6PuvXbmInVTPOu1lJEmM1sQUgkoVxhjoLMtrIo7DDHQAvmyNeSFN02eTePBse+nmV7rd7iZCT2n7ilnVsROnv6vRmvy7ynHVxpAzy9JelqUvKqkmAXowX1e1t1uotYazLBvii7TOYHQGIaSuNVqvTk3P3my0pk4FQeWUEMK3NlcgieMor/9LASEkj+f0Y/W70cfIsZv7XynVyP8xmHWW8SDsUb/XpTgKoY0uSO80wp4xxrI1fcu2o7W5YbPs1TiJv0CC1Fvf8TX/exT2Z+dvXttG3YJgjMby4k0kcYTJqVnUGk0Yo5EmCZgZqsgrSQgQoQ9g3lj+itHZs0kcPxv1e6/c6F++iB5WSh+8fwzXalOPNicafwokrdbZos10z60EDwghqiYznUzH5+Mwuu4G3jE/qD6qhKhqa6I0iV8yRjcmJma/s9GaOO153o4KH4dWjBYS1XodQVAp8CtBQgAMZFmKQdhH2OsgigbQWQouSMNCSFjLMEaP8JvHEulraZI+Q1Kqp57+qv81CvszB4VfgCIivs6Wz2tjXoiT+Jmk332p3V68OBgMFrGtumBph9XHcN3aYyfP3PdLzdbU454XWNppuuYQLahU0Wi2oBw3J4EVhPZB2Ee/18Eg7Bf4xSjmsNawNiZka9rGmHmt9VWTZi8ncfSMttp5x3ve/92CxOkrl17DdgSPYfwQxwM0mhOo1ZujYWgiguN6ICJDRAvMfN7o7LlUZ1/s93vPdXJCz0KJ2yOJcdXcidP/18Tk9P9RrTXoaMhngB9UcgKlcqAK/wvk/eM4GqDXXUXY7yHTaaEoBYAEmC2ncfxylqWvGJ2+nCTJc2HU/0qv3b4KYAFA8rZ3fO2/OPPAI3/v6uXXOI4G216azBbG2Nz3F9dGpVrjZmuK2ssLH79x4/L3dVcWn1tdXb2Osf5eXqP7J6Lox/FRnch73Qnz9OzJvzI5Pfvv6o2W4xzFGq0CDJVqDZ4fFAUABeW4kFLB6Axhv4dep507YpMBIAwD+qE8mjUG2ui2TrOXMp1devjxJ99njTk+f/1K3nTeCrzWYnlpHv1eF82JSUxMzoCZkRS76ZRy4LoeSBCIaJUZr2mTPZcl6ee7/c4Xblw+/xqAMni4/dfmMAl0T55+4EcmJmf+v5Vq9UiIEEBOQKvVGpCOGhUjHOWChECWJOj3O3kxOAphrQGRKMhoeRBsjFk1xtzQWfaazrLn4kHv0puf/uq/XKlU3nXpwis7XpPRIEQ0CEcqVkXCCcdxWSoZZWn6nDbm88kg/Mxqb/mZxevXL6KcwNhq9/RhYWfDze07CPhOOzlz7M9MTMz8P7V648RRSPkBgJQSQaWaExcLPyylgnIcOI4DMCPs99BZXUHY70JrPXpcUShOjNaL2uiLOsteztLouSRKvrC0dPPC0+987/959sFH/+rli69yPAi3JaCxtciyFEo5EEUA43oeT03PURwNvnLhtRf/0eULr/5BEZjwWK18fDyV7yG/+LobN81ms+X7tUcMYdL3Ki0p5HEi0iRIskXdWjMHwgwIZ8A4wda6IAgGJBgC4AyAB8DPI8OhtNKoKTZqiM0dP4nZYydhjIbWwwKvKabb1qs67PvCGhXWeBQTSKXYUQ6kcmCNpn6vi+7qCg2iENbY0b5ZozW00StGZ1fSNP1iHEWfCaPus712+1UAC6fPPvwXnnrHe3600172l5fmsZ97SxBU+eR999Piwo3f+YOP//pfBHBj7D2Pkyf5HvO5o4v3Dnpf043G1NmgVnmT51fe6TjOk57vn6nVmjMTk9Nerd6E47pgZmRZhixNYYxmZsujigCAW/Pf432OvBgspcOOszN+87jBsDG6PY7fftT9Ur/dPg/gxon7zv7Zt7/rfR/sdleDpfkb2G39xbg5rsunTp+jXrfz5Y9//Nf/e6TpCyV+72gM16vV6plqvfWU6/pPe673cKXWuL85MXmi0ZpsVKt1kkpB6xy/WmtYa4ZkMxrzw/vEMGOoUJ0XhMf8r1QwxmAQ9qnXbdMg7EPrbKyAZmG0yazVi1mWvpTEyefSOPxCGHa/3O/3zz/8+Fv+x8ff9LZ/s7hwU3VWV3YkQBitQUKMJjg9P+DZuRPU63U+/+Kzn/ubi4s3vogxGfaSwH7g8S7tEPtu97uN10+tWq2eDYLa48r1Hq5Wak/UW5MPtiYmT9bqzemgWnOEkDBaI8vSYbOYN44I7xfD49ISefybk9mV4zAYiKIQvc4qhf0upWkywvkwzzJGszGmbbS+mWXZy1ka/2Gnu/Li297+3v9tcnr26y+89iIbbbZ9W2kSI+z34AeVXBGzIGb4fsBCiCgM+7+bxfHvh73+5xcXr7wURdH8+noD05pcYWm3OX/c6h443Wg0zvmV+lsrldqT9ebUo5OTk/fXmhNzlUq1QkLmsXA28sNrzIQN/98jfsfqaGAhJBzHgVIuiIizLEXY76Lf61I06ENrnZMnhCiUAHnYTB5YoxdycnB2/dEn3vp+Zj610/AFM2NleQFhr4tmawrNiUkwczFwx3BdD8pxkDff6Lo1+vlMZ18YhIMvrixefb4kQdyxOFYAjlerzYea09NPzUzPvaM1Of1YozHxoOcH1XwYl5HpFDrTYLZ2KDU5DIdvBb8AeJg75jmcgjUWURQi7HW53x8NcxKRGJGAgBEhwhitl6RS8cn7zp7odTtOv7eKLZsX+RAoFudvIIkjTE3PodGagDEaWZqOCEPD95M3OARAWAVwyVr9QproZ+O487nL58//IbZf61Xa1rXbmTPnHvml1uTMe13HNRtPErMlna3d69cIjZt5ucwWQ0INMyNLExhjQEJCKQkpJVdrDcwdP0W1egNUDAmneS4Ha22uPBIN8t0TsiCUOTkxXQpZkGBo0zrljWtpSQhIIaAcF45ywACnSYSw30Wv2+E4imCMHhKIR0TMoSqrMRpCiLQ1Me1Eg5DieLBtfcQag5XlRSRxhImpGVRr9RF+h8pAwxhMCEFCSEgli96JCEHUCfvdX371pS//Q+TE45JMuT8Mt6Zmj78v08mN7srKiwBo5tjJbwTA3Xb/C0mSmNnjs+/1/OBhNsboNLnUjXvPDFZXXwaQzMyd/HuT08e+u9FsOlKqI+m9SalQrdVHCmQb8QsAaZrkAxm9DgZhCKMzLiY4NuHXGg0SQrcmpuXB41dASAUpBEAUCyE7Udz/vZefe+Z/K2psJX5vL/7dE/ed+3eTUzN/JajUWMoj6r9JiWqtAalyAqWQEk6ew4GIkCUJwrCHbqeNaBDCGlP0dMUadotehNZZLJWKj584U+/3VmWvs4qtexcEozMsLtxAHA3QmphCa3J6XfzLRaFh6HdzggZpIiyy5VeNMS+Ecf+TF7/y4q9ikyJxaYdU0yAA7Pv+fTPH7vuRZmvqWyrV2pGsgMvXafnwg0rRE86xWwxjQGzVPy6wO1QjLIZIU2v0stbmqtbpS1maXnnsybd/u+u4j1+59Oq25FBmRq/bxqDfR73ZQrXezK+BLIOQgl3XJwKv2pz38MUsiT/X73SeuXbt4isAVu6W4tWdDlrauXjmPHH/Qw9/tNmafPDo1mgxXNdHtd5Yp+YkhIDjuAWTEUiiCJ3OCvrdDtI0ZmbwWMI4SugYgOf5RbEv2fYjMTM67WWE/S4azUnUWxPgYvpjLYBgzof9JYaTpgWr8iZAFweD7sdffv7Zf4u8wXyvBBAbm8nb3eBpTyd/5+93Mnfu+H1/uzU5/d3VWlO6rntkKjx+UEFQra5791IqOK4Lx3HAzAh7XbRXljAI+7BWc56zjlrfo6DWWJvNzB4TWZbJbqeNneT7lhdvot/roFZvYnrmGEiI0cSSEAKO6w0xmwC4Ztm8lKXZZ8J+57Pz1688H8fxOmblPYLXo75GA8dxHjx+3/3/tFptfKvr+RwEAR0FdIWUqFRrcAsSz9guVyjHgef6IEFIogir7WX0uqtDRak86Bklb3lTWZtsPkvTy2fOPnS/H1Rmrl4+v+Pr9zqr6HZWUK010JyYKohBecHG83wQiba15rksyz4b9bqfuH794hfuEcxuxO5GzFY9z5spVjkMdvF7AkBQrVZdAAiVSmdc9wnHq78nX5sia3lIwERCuERUYUZdEM4a5jNsrATAEOSC2YBIChqqOOTEg2EBTUqVqzFIAWZgYmoGrYkpNkaPbfEb2329D4fNzHt+zDB2cF0PDOZB2Mdqe4n7vS6M1hBCiDxozv9Ga22s0fNZlr00GPQ/98BDj79raubY+y5d+ArrLNumAUfQWYJ+rwvHdVGp1osGtYAfBFBSRb1+9z9GUfjxbnf5M/NXr76EsQnkouAocHeTIbbCr+N53ul6a+qxOI1W0zCcxw4yywcebTqOVwtqj1aCytOuFzzteu5DSqpjrhe4E1PTaDQn4HoBwMxZlnJeRDY0tgaLRhLq+8Lv7uHNbvgNe10Yo9c1MHL8ZsYYs6gz/ZVB1P/86dPnnjp+6uz7L198FWkSY3/4JbieD9d1s0HY/71Bv//rvU7vc9evv/YycqW1exG/G0k7LoC5ovAywO29eTue5x2r11uP+ZXq213Pf0o57uOO45yuN1p+qzWFWqMJpRxorZGmCWudsbWWhgTGtVYx7RG3ewvPx/GrlAPHdSFIIEli7nZW0Fld4SxNABCNxw/WWmitB0Znl+MoevbMuYcfrTdbb7l66bXtFVSJEA9CrLaX4Xk+mhNTIwVXISVc17PW2otGZ1+MksEnwtWlP7x27dqG4sM9V/Ml3DkEtOnW9PTj1Urjq1zXe6fjum/2vMrJZrNVaU3OoFKrF2q72QjDY2tLxsg6tI/TuDf8DgeJHDdXqNRZhn63w53OCuJowMYY5PsIxSh/GzbgjDXtEydPB0Zrf3lpYcdrbGV5AZ32Cmr1BqZmjkEIgSSJYI2FUqoYIJIQRIvG2leszZ6NB9FnVvsrX1y8du0CNiua3GtY5j36773GKLQHAG1UPJubmJl5SzWov9dxvXcH1erDjebUsampGVWtNSCkRJalSJMcw3lJaSeyAx0AfvMJe8dxR8rASRyhs7rC/V4nbzJgrX62cb1xpVJDVkyCbodfZsZqUT9rNidRb7bAbDfUz5CrXBXT9EIIkBAdWL5grX2pF3Z/7/zLz/175CsMygbc7akRb1UHqVSr1QcqtebTXlB9Z71ef3piYuZca3J6qlZvEgmBLE2QpgkbY0b7/g5j8GhTDOG4EDInvoX9bq4MHPY5J3asXbfjcXm+/cvumDMyMwZhD1maFms4vHUN5LWHMY8NiYjhcIpUDgaD3idefv6ZPwvgeonfvfvsY6fOfPPkxOwHgkrleDFARptPD7O1lqzRNKYSuS6P0lojTWIIIeC6Hqy1SJJ4Xf01qNTQaE6gWquBLee6wqPxC0ISRxiE/bVzzjzcsbk2jFSo/CqpRmSe9asnto4hhu9BKQW2jCgK0e91EPa6SJKY10fZVNRqqNg4sPulZbSGsQaO4xYxyJr/XX+/Gu1yprXaCyPq93/oyuXX/lZRTyvxu38se8jVb4fxdK34PvV9/77m1LE/RcxpGve+uJKTfLr5330HAd85e9/Zhz8wMTn9x/2gciRNZABwXBfVWn3UFB6PIfKBzjUyTxwN0Ot10O+ubodfAkAbePUHgN+13GWEX2ZE0eBnr1x85f+HkoB2u2MIAcBMTc1+++TM8Z9uNCcazhH33yrV2nr8AhBKFTFwPpA8CPvodtro97rQOtvk8NdiiN3jh+H1kKYJKpUqlOOB2WzC77gyN5EQQ9ViRznoh91PvfLil/40gJv3AH5pn3nZfpKffR833/ffc/L0gx9uNCfPeP7RqKDl2A0QVGprazoLk1LCcb28f2wZ0aCP1dVlhCPsEo8St7E+HDOj2ZrkLEsp7Pe2z9/GBEw2EtCGBPZCiXKoLqiJxE3D9gWTJV+IBv3P9laXv7S4uHgFYxsMjsIZ3QkO8Vaz+Fu94I9Nzhx/slqrfqPvV/+C5wVzQaW6YxCxz+GgfZkQAtV6A67rjz7SEIzDQMJ1fUiVq/KstpewvLiQr9/YXFyhvNC3+2G2xkDrLA8ghNzSAa854eFbzWW3HdfFIOx97pWXvvxtuPsZwLdr+piQTwCN4kvkEr5D8yqVylylNvH2aqXyPi+ofJWQ6n7HcWk0wbjxCW+DXxZCjnZxDqEynsg5jgPXC0AABoM+2suL6Pc6G1UkRoWIobLUbtbvdTEIe6N9tsMJlMIBD3FLRIKUGjbXJYjECgEXojj81LVLr35/t9t97S7F71afqVqtTpyrVv0H4ji8HsdxG1s3kEl6XlNYUdn2yZVqKima2/lpIgqkVLPMPFzgTY7rPej7/lsdxz1JQjSEUAgqlRGJ5vbhNj80Qsj89XPCzDr/C+Trtlwvl0jP0iQn8nTaSNOENxS+aUiKcFwPbC2GU8vbWXtlca2BMT0HEgJpEsMYs64IU+yY7TL4FWP056Ow/1/nr9/8TK+3dAVAfA8kUBLA3NTU3CN+pfKU63nvJiEfjKPBJa31Ku2445SFq7y6dN1aPhFAIJCfZboGwAfYHUPE+HohYcFBsROemaHAYBIkiUSFCCK/PwtINbaGjW2+lsUYTE7PYmJqZhOWeW0tG+weEiUigqC1wtneGs88lPTPyWBCIBr00Wkvo9/rjILgUeI2bCYbi3qjCRCh113d8frpddtYXpyH7weYmTsBqRTSNIHRenTdCCEsga4Yo5/N0uSPuv3up65efPUljK/GuPstqFar56r1qbcGFf+9ynHfKYQ4myZpX+usR7dzhRaRK6U6ppSqCCHheh58P0C92eKpmWMMgNIkgTF6y0IUM2/ALxdToLvjF6PVAbvHplvhN4kGWG0vodftsNbZyPeONy+ssajUanAcF53VndbFb4Ffx0GWJNA6XyPgeT6ElJZI3LTGfDlJ40/0+51PX7nw6peLosO9ZMLzvHPNyZl3BkH1/VKpJ5MovpbpdGf/e7B3bCaiunKcB5XjnnEcp+X5AVzXQ7XWwMzccZbK4SxNqCCerSc6jN/bi/xqJ/yOcDv8fkTW3Aq/67l6Q58upYLreXAcF2kSo9tpo9tZQRLH6+KHYS2CGXA9b1RM2Nn/rmJlaR6eH2Bm9jikymMUrfWIhOw4LgQJC+A6g59LkviTYxievweKvluRdhwAx7A7AS0oHrudVVzXrWzrwhzH98iZKIh+AMDCUfVatfouz698leO4j3uef0w5ToHfE/D8gK0xnKYJsiwd+mDaDmPrNxfuciDGyMZbHiZay7vGG8mu6+W53Vghrd/twOa76ceLwIJIQAiCtbvfF4YN6Uq1jkazBVC+wqtYpQSAmSBIFIW04TAGAVcMm+fjcPDJyxev/HwUrVzFvTdAxFivprpVPewwjketWm2dqzZqb/b9yjtc132rct03BX5lsjU5jWZrCp4fwFrDaZJwpjNia7fA8Pq3t1Y3sNu+643TwJtwvKGQm78aQSoJ1/WhCiW2vH42v2498vgxPcj62WgvY3EdS6mEcnJ16zDsPnP5+We+NQLuJfweZL2YXkeNuN5oTD1ardff4wf+V7le8NZKpXZ2cmrGbU5OwXXzIcgkiazWely5DtvPlext0GKnGse40slGQntO5hHorrZx8/rlQp1loxIvb0hl95EcjE3Qj9eTh/E1wMWQnekYo+cHYfjBxflr34d7Z6DoIGpx7qNvevs/8f3g/3BcR0ip9vTH1lpYY/J6Qa64hCgKobM0XwGknLHGa6GeJCWU46JarcMPKnBdd6T0DBTrMgd9WGO2jWPHcTk+yDtUjaZt6hHjdeBhHuc4LpTjoN9dxfWrl2BMttUlvI9GOI2GkLbA7zqikTGGrdELmdavapM9m4ThZ1fC7u8jSS6U0DzQmARFPVl4zeZppXUY5kNKw5+Pbrr1ev1PzJ24/wP1ZmvOdb3Reacds3YccB+O4HkegmpttMZlK/xKpeA6LpTj3jn4XVn8rwDOl/A7lFhitxjCbzQm3jc9d/KHa43m/b4f7LpJ4LB6yOP9tzX8rsUQQ//reh6kVOh12rhx7RKM1hvfzzCG2FP8ML4FZpv4Yd3AX3EPi7XRN3WWXhj0ex9aWVn8EO4sRefDrj0cljk7/Hy8hxxMTs48HlQb/02lVvvzynFP+F7ArufRfuLUAztARPD8AEGlCiHECE8bh+ld14cUAnE8QHtlCd3VlVGfd0MNgsYHnXayNImRxDH8SqXo2W3I30bsdQaRICkV5YQeCSnlIEniL1y49Mr/HLbbX76d+RsdMZgPcmJVIG/uEYBK8bXjum4DACmlKkROE4BQnjtJQNVx3HO+H3yd4/pvcl13UhYrq2rFtNCoGLYxgWeGZZsXl6zBSP33gMz1PHh+BVKKfOqsYLqPM9NICHiuhySJcf3KRRidve4bwvjzbxlAjBX2jNHaGLNitLmYZskrySD8tXZ76Zdw967R2mrCWvi+f8p1q3Pd7vI15A10AiA9z2swsyoeLzzPm7BW+AAsFKQrnGlLFBSzC6SknAaoNuSsEIkJIcREcQdlJqoJISbX7v0UCCGOK6WOK+W6QggoR8H1AlSrtZxFPo7bUZMiT/qsMfsqMOw58Qfg+T4q1do6ydWNwbBUCr5fQRyFuHr5PEy2JX73xWQequ2M8Jsm4w1GxvpdB0RCkBQSjusijqOv3Ljy2rf1er2X7+ICGgGYbU1PP1qrNN6lHO+dSqknQXQsTeIVY0y0XbRGgmoE8ndwHh6BvB1+LwSRHD/H66d3aDQBMVRAGJ62YaM4nz4yh3ZmGGvrtDw/gNgCu8wMmU+1w3E9RIMQ169eQBKvU3cYv+uvm5bYznSWIhoM4Pk+XM/fSEBbJ6M6zlwXQoRMuJDGgz+8fOHS9/Z6S6/chfhVtVrt4Wqj9S7Pr75DKectUoiHiMQ0EchYW9yD9/eRxydYKN+pekvF13WFraKgNcTKsKnWaE1gYnIaAGCMySWrc5Wxtde0ds1f0baXEUSxJmVIGBpODIHXSEDDxsCwkbH2mRhSOvA8D1I5CPsd3Lh2GWmSDI/HBjIa09rQ2rYfHGkcodtpw3U91JsTuWRrIc1d+FwmIlpbCyoB0DyDX0yT6FPRoP9Hizc7f9Tv31y8C/2uqjSbb2pUW+/xg+A9SjnvEEKcJhK+tRbWrl+ldvuMh0kSM4P9wKdWawr1ZouG049rJIX191ljdDE1No5fk0927nKN5DFtPtUpin3zUsh116MQciT9O0zJ8mnMIRHCh5IKUTTA/PXLGAzCLfE7VC2h14Pf4hAVTTc4boFfomW29vk0jT9xl+MXACR8nJxtnHrarwbvc1zv66SQDxOJoFjbcES3nNGtjj0/4Hq9SfXmBBzHoXxNoV3nAzdiOL/+1nK5bfFbyPquFcoERPGzTfgtfq+kAooVLRvjB8dx4Xo+4ijEtcsXkCRbxQ8Yqu7sGj8YrRENQijHgR/kPJKN+M3TCCGkVKNpfiHEorX2xTSJPnNj4epPt+fnn8O9QWA/MTV7/J21SuMbpKveEUfxNb09AY1I0CSRqG13XAioCyHq2zpagksk6wQee35ypaPqUkiACJ7rwQsC25qYokq1jixLqVB52FH9IycJa+h95HTDGCL/L48hhi/BAASJIT7W+WUGg7CmSpllKa5dPo84jrZ6j7zXAtrwc0gpilhsffyLdQNEXCQUUignH2iKo/Di5QsXvjUM23crfncqBIs9FIYl1oYzqCjkjneM6+7Y1JiUsi6EO8QzC8epSUHD+gMLKZqeV/laz/OfVkoddxw3cFwXQgjU6k2enJ5jgClNEmijCbtMojNyEswoHrKc/7vdhxnDJZGAkEMci9FCRCnkpsbyMAYmEvA8H0kc5Q24w62frTUwxpTWjNGxMeam1tmVOBz88tLSjR9Grlpwr9hGReDXQ8LZWwyTXwMOgEqz2TzjVRpfW/Er73V9/2nluKdczxOVShX1xgSCSoWNMZwkMRXEhl19GTNgbV6nWE+G2Ak3OX6JcqLF0MWN/O94/Xf4IgCU4yCJI8zfuLrn19pzZjCG32Htl62BNqZvjbma6fQlo/UzURI/G/VWX0rT9BLKNXB77bEIADwzc+rcidNnf0A56lukVHtWHjHGIMvSXA2ECFEUYriSSkoJJdUoVs2yDNYYSKUQBBX4QRWVShUkBaiouVlrEPZ6uUr/Hq4uHvv/UGl3pM4z9tooYt1hvrdxhZuUEkkcYeHm9Y0DyAeKX2ZmY3THaP2azrIvJ2n6TJyGX+yvrr6CfGOAKWG6bxzTDn56rz661mhMPVap1Z4OKpX3eV7lWxzXbTaaLfb8gIaqNDn1dvxVx3saRf7GRQ3wdfY0GIDv+8W2Cxr54GG97WjwCxiTrZb43bN/3QtGbzWWGMYQfqXZfLhZaXyt4/vv9rzgbcpxz0qlnHqjCc8LYIxeoxJsgd1RL66IeQ8iY8m3rnjw/CBfp01itGpoYw9ZKYUkibFw4+poUPgg8TvM34YxkzHaGGPmtdYvZ2n6JZPFz/T70XNR1L2IXA3Y3sXYHJ1dz/Pub03Nvs8agygcXBgb6ln7wx0G4oVQLSJMDHvF635HVBNCTvMG7G/RQ2YiqjmO84DjeFPDWmylUs0Vf0Fb+1vwKDez4/0KHAx2iXIVKd+vjGLizflb7ns9P8jrZ1cubtc/3t+p2jC0tBWBfTwFGAmrgDhN4/8yf+PyX4qi6LYqUKrbDOZx0s7wA1YBTCGXpE+QT7kHG4oK5LruJLN0pRSecNQMGCRJ1EnKaWYmKdU0EdUBJiHkTN5QhrsGWPKFoHoRdQYEcoQUjhB5wpRlKSvHoWZrArV6c+wE2RHj3RRTNtpkMFkGXTSUDxLEAJAkMcJ+FyQkZLHvUjlqtBNOKgUhJGJrkcRRDrIDYMbtVPzTRifG6Hmj9as60y+lWfrlJB280F9dvYh8ejPB3W3Dk1yp1WpnKvXWWwO/8m7luu8GY7bRbF4zzHHug1iRUJOEIYGHBAlqDBUc8ohUVCgPBnJICuFsLA5sLhZsJgYXayOsEII836NmawLVaj0vEFkDo3WBWQOdpaMimbHmdQe721mWxojCfi45ptbjVkoJQQJGawwGfSRRVMi50n6Dsy2L0puqKWvHcq0CkitjJDbLliKjL+k0fTWMur/V6/XOH0CR6E605uzs8a/3K7WvVa77tBTyERJiDhgyoS2UcupKubum7bjVR2yxN6XoKfGwDqCURLVWRxBUC8xqmExDaw2jszUCz2HepIiQJnEx5euM/s13tyoQiXxXeBwhLa6nLS4jGkPd3m7Ejot6y9vumuTxYM1ayzZNKEsTCCGrjuu+KUszD0j+9V0YALMPnJg5dvoHXNd7L4OdnEBqYW0KLlg3+2GGDx/rOA5ICCrUGdYpiqybJhi+lxGhl9Y11cZF6tgyTD6luS6GSJMEg7C/7nrgdZFewfQaEhDHdtzz2OOtzTBUTB+/X+fdreK9W5vvPy4mjYc4llJBCAFjNAaDXBkHEBuPHW3A8B6WKTBczy+Uo4pi73iIt9ZA5yzLOE3TIZlnznHcOT+ofp2SzlLU7/+lfh+/ib01pN4w+AVwbG7m5L/yfP/91lpRrMnJu5HrOpzMR/D+inxRkhD5iotoEG5I3niTgx+X512LYeSeF4ANG7bGGBCAbDTQTMUObj1a3ZIrWsmiMEz5xOkgLIrDYmPssA6/e/ILW+B3G5/BWmecZTl+pVJTruO+1w+q773L8ds6cd/9fz0IKn9KSvUQETVsvm4PzHZ8he8R2Kg3SgAox28fyTAWpK3xu9F/0n7xay0MsBm/hQ0LYuNxxND/DtcbZFlWNKl52+tyr8dVKoV6s7WusDBOSB0NYABW6wxaZyKfzFYzjuvOAPSkAH5rw3m/m4wBTDSnpt7SqLX+G9f1v04q9SSRaFhr4fsBAP911IpvLTpmZtZaMxGRdVyy1oo4igrFJdrRB2+MJfbzDtlamALDW5E0h+S2PH9zMa5aChLQWVbklsMmy3ah1t7e0XC6brv4d3iNDwkabA10loZJHN3s6PaVOO7/Whi2X7sHGhXjtbPTx46dfp9y3aeiqP+qsaYPhiAmRzpqjpkdImIilkLIWUAEBFgGS5EPDAXDYyuImkRUXXOookKEMUUpcogoGDthUuZsK9hcYZRBxK7rkbWW2ssLxJsG4HjXRHFjDWo79Nh1NTcD6PX3+qH8+bDuMFRtktIpCsN5nS2+DfUzIqIi5utZY65pk72ms+y5TKfPDXqDl6Koewn56iyNe8M2qjTsp/GrsLayxcPasJwcks6kZCUcfxbMSgjVEoJaY9eAD6KqEGJaKXVGKeeschxSTu7jHOVYISRFgz4GYW9EAN8fhvdbQlqPX60zZGnO4xL5hC+EkKP6mZT5v2xt/rhDvFMXqxtvxkn8h0Znz44Rdq4iX9dyL9t4T2OrZt12A8oGAOrTrYelox6RUu65fsGcx45aF8ScYtBYCAFwTha3zGCt836F0fmwhBT591mKqKBZFepoCPtdZGla+NT9g4nHNlNRsW5r6A+FFCMi5ZDck69dy+sSxRr6Qwn3iAQLAQrD/m+tLi/+YLfbfhH5hoB0F3+Ee8wPb0eg3AnHOx0rWfwXAHA9oG6dasXznAkhqCKlM0mKpgOv8jWO771bCuek4zrScRx4vo96s0WVSg3J2AqTUW1trKeR6TwGLZTAbmmIbyvLV23neB4S3If1BynXiGq3A79EjMGg/6ury0s/UuJ3y7Dw9awTUkWtZkhmr7iuWxmKPQghAuk6U2ThS8eZJUIgBM0AwidBLcdxn3Qc94yQUhAJKClRrTfQbE6O1lAOBzgtWxhtYEwGnRU9ucKHD8kQB2VpEqPf64yIv0LIUR14qJompRrFD4dYdWQSgnSW3YzC/q8nWfy5NEq+3Ou1XwGwdA/gdfzztaamZp+u1uvf4Lj+N0rpPKF1hiCo9rcpOG47EE9EinbaEET74bQxjNHMLMj1PNSbLVRrjZxYxjnvQRfDmlrrtcHjsVWeB21pEiOU3VHsm68vLPI4qSCkysUoBmHOf7AHkb/x9mqvhfFQ/cyaVWvMDWPMBa2zF5I0fqHfaX8mTdMbt9sPq9sM5uEHyyVLG413eb7/1QJ0fxRHF43RA0migVx5RBRFhUqx+aZBgMNEkkCVQotLilHXfrwIRbv68iLJ4kL6ebTFmIhgtEaWpdBZlv87bB4XE528QdbpMA6VMQBrPdIjpdEuWjnax+a4XnEBHQ5ehgFwHId/2G2v/PBgkLxYFBuWsblBcTdPvQX1+uSTjVb9q1wveLeQzpNSiLNEIhgyv12/cma/BVzeJevnTRWhrQv9RCSICOB86rZnO7l8fpaTIHgoQz5aePx6i9G7F7KMSUZrg2g8EC4CCcdx4bgutD78mlVRJG9bo29ok72qM/1ilqTPp2n4Wq/Xu1QEE3fj5JsAYBuNxiPNyenvU8o9q42GNRZWj8gPY0V25j3e9Q8i8N6IYRAJDMIeorA/Iuscvq/djF1bTDhtwm4hG+y4LlzXg3LcghSnD0YNc/tIOt/3VKhQWGuMtbZrrVnUWl/Umb6cRN3/crcS0GKgT2zbJISTRIOhVrgoOHn7WtkynKQhKsgyXDRb15N1NqjWrH1NBXlnVO0YyZMOMZzjh4fKUcXvsyzFYNAv5Jg2kQ7WrQvI/8RiTHwfPPZa2OK9bYJSlo1UoWgooa0cKMeFW/hetha6aNQdyMU9TqBkbFy/WQRZxa2qIAAkSZKAbaiz7JmVcPGVu7QQMSCikEiINIkMxggHGzqcR8KCyJun+X5sZ3x94Q6NiMPyxWxtLmeaxMMi1jrfqxw1WiFglQNbFPQOHL9bBF4b8Wu0Rv/ewG+jUqn9t67nPxVHgyHxDGsQPvpVzDRUEykmJvdwTz08DLNFHA+gs2xb/5sXJJy1It8BxS47fNbh+F0e41gzMDpdGmhzJcuyi0kcfrK9vPi5uxS/1bm5U3+2Uq//GaXcp0jQsfy+r2FtNiRR7rMet218u98YekRMGa6mEOMkwr00gw/4AmTmnGCWpjvkb8P6Ax8cWnaIf6211hqzoo25ak32itb6+TSLXojD8JXBYHAV6yc478Y6xPAzNVut6adqrdYf8xz/G6SSTwCoKEcZtkU1NQ+LFW1UO91XSrd7vYLXAlwIIUkKSa7rrpvy3TOGD9AnZ1k6av4lSTxaVzC8P8iigew47i03rff4YVgQUZrEX+73e7+YZOmXo97qy2maXke+su9esnHlqOEBV9XqxKN+1X8w6ncuaq0H0vMmhRXBcFCTGXKoTi2EUEKKOTA5JESTiJrjw3JrpDMSIKpQniOOmh2bQ20u4gZplVLkBxW4jisAbM6J9oXh/YbyVNR887pDlqW5GiBvvjaGdRIhZTGAgUNpogBg5TiwxqZhuPKvb16//EPIV0xudU75Lva72OEz8x4+u4M1stmwQVxTypsO3OBPCyGOFw57W8CMK4tnaZqrhVkLg7WG2qjGCwKshQWP1A+kUDm5QeWxKANwC4WRbqddEBYOIIIoJvTX1BwIxuh1O9VGGC5iYhopvR606xXs5vXlwWDQ/+lut/0f73Hcbrzx0xbx0k7HYROOC8JkQ3nuJIC6UnJSkGwJQdMgqgnIKZJUFRAtJlQFyRoIHhEFgsgVUuYTBdYgTSw7yqFavQGlHMRxlDeNzRpRXGc56cFovUVt+CDLJ6OwZlNt4fbhl9j1POgsi/phiV9sT9qpAJhG3sPRyAUhlAevzi47Uvp1IaguHKcqJU0QqJqLPSAQUs4C8IWQUwD5BFEXAnWAPCGoxgVpnQhiGE9vtUZeZ2sD9H5QgVQKaRrDaAOtU2RpiiwbEnb0OnX2w1mlVeDXrClYJsMDWKjyHHb8MBzIsNbqfnf1x69fu/jd2Lxe8zA28dxJ5ri12kNTrcmvD7zqNynHfRcJMcs8HOAElOP6+6427MIQ5x0LSrxdPAOioZJzH2maQhccCGPX4ot1g5uHVj/L+8frLvyx/G1UR3PdA1ee3ArHxuhOmsbPaq1f0Vn2fJwMXozD8HyapvNHncep2+h8JyYmJh6t1Cbe6Xree5VyniaiUyAhrDUIgsq7di4u8Oav1gF5fDsO77WAtm7clhnodzvodzujCTRer+Jx6MXf3YoZ1ubrN9I0ARVrAw5jFRIRseu6MMZmYRj91PLy4s/cg8mbAGArzebjc3MnfkI5zhOWmTZN0OcZGO9Q0KU9XiP7rbJtukL6/c665uk6R3sbOy0bsTtcs7CeGCFBgg5cwWp08oRkgBGGvY+tLi//UBz3L6ZpehNAb4dzddcVfY0xF7Ms+5yQ6myWpnp4+GlsLPtW8HYYlibJJgzd9un+DdfJGnYBIBpht1BwKYp9B/8eh9ewtXaQJfGrxugrOtOvmix7OUni1+K4f7XAcwd3p4zq0HeuLC1e/5ezx06/2fP9R/KpgaKLvIaPPZ2A/Fzl/kZrPSJe5xc/b3IFe7+3EqQUWO/K8tsCc74ewGh9GyE8tvrNWmTG5A05CiEKqXbH9SCkLAp9h/peqLiGYmtt2xp9zRh9Qevsgk7Ny1mWXOx0ls8DuHyXxRIj/K4uL/7b6WPH3+F63vE0SeytYPewfJ3j5oQu3w9GSf2RHCxmJEmENElH109OlMmLHygm42gDfvVBESg3vJexa384fXEv4hcAbiTx4NeVct7E+bEQdHSSO1tasYsajuMc+XvJsnzgY6TQtoX/HU7FCSlhjT3UGIeZjc6yBWP0NW2yV7M0ez7T2VfiMDofRd1ryMkPyV5qR28wG97Ip2ut1v/iecFTSRzBajuufEYHjGW6dfzm5JijDsOHTZLxw7J1/pbj2Bh9KPglIhZCUpJEX+h3Vn8yTQfPdzrxRSCZx+Zm8t1ssigEf0MQVL9RSuedJMQxMOdr06xlIiFJkVy7epm3yCV4l0t8PAfea81iVKx3PReu5+Eobw3WGiTx+OqfLfI4rGH4sOpnANh1XBhj4n7Y+4GFm1d/Ypv60vBk3AvTyMN4+L6ZYyffVQmq3+C43tcy4WS1Ul+y1qQQ1BAgj0GK8hXzNK5OvTPfnTd/N4Z73lAvlkqR63rwPF94Rxj7sjVIs7RQQTFjueN2cWleA87S5NAaKUTEjuOKxMZZkkXPFf5WYjNp5V5TfRj/zFPT08fe6Xj+w/Gg/4oxxgjHmRFMLaHkJBE1pJBTEKKVk82KBjFRxXGcmpROlUDuTj5IZxmSNIbr5MTIJE1Gyg2iUDPXJlfBy4eAOM+RxogFxhq4qlB/NAay+HcQdnMMHTh+du6TMDN4rB5ySPcLFlIKkyahzbLVwteOEwjvRbWdjaQdp9JqPR64wf1Rv3Mhy8h4njNJSjalFC0J0SApp7bD8YgwmW+0cEkUJId1ypFb++fharPxGhEXeO93O4VCaQKdaVi2uW4gNvc0DjvWOCL8MkBMJESms3mTpCV+139ex3Xds63JmXdVqvVvEUQPRkl03mqjpVSzIPgCopWTxUakXoeIfBBJQSSxjoyzSxwxHkisj6PXDdAzM6IwRBJFOflhSDSza8OYt7WHvFW/jxn2NsQPAKxSjkiTRMdJ+Hnk5J17IX4Y5lDNE6fP/a1KUP3vhRAPEpEyxsCk2TrV9deRetAt/m6HOhHQ63VyjNhx9ea1p7xdud3W3Icifxuro1GhAHsY/kYpB9ay7nW7P3T96vl/A2AVm0lowzzuSLCsbgeY3Xr9oeMzx/+Z6wXvIWCOiIRZk2FiYKMEO+8HjAfagM7SZKjXfFsBe6vg5sPTP2MhpUiSZEUn0cUNAcS9VHSATZJFy3YRIEqSSBfzEmI46rYL9uj2v+NC5eEOOz2bC2oGbPiwir/W8TzKsjQMu90Pdrsr/3mH4hlw905tUhiGC3zj8v99/L5zD/lB8BadZUNyIq+tINo267p9b3YoBTy6c9w5nKqtsBvHh1qAgFQOg9l2O+2fvnr5te9FrnzW2+ag0N2M4W63+1nfX/3ueqv596VU9xNRDWCyxT7WMULPbv04GpcVJSFGCZbW2egI7l8ZgTc1DdZIAMXeViGLATkePf6oYoYsy5AVChGHdZvKG3CC4iT+/KDf+6jJ0vNpml3s9dpXCizfK004WllZ+N2gWv1Ard78267nBVwkScUO7CIG3mpnyuH6Y1VMonuev1595wh8f5ok6wic2xUibhd+QWAhJdIkuRj2uz+bZsmLOsku3WP4JQDZws2rHzx1NvhG3w/eFccRYEfyC3TUJLRcuURBqnxN1VGatQZZmmyqzGz0v8YUpLRDjB+ElExCcNjv/nJ76eb/0+v1rgFYBBDdQ/EDACxmWfIpR7lPGmuZwGK/yn2Hjt9iRdVREiiHRbIsSbaMTbYjRBwWeUe5Lqw2Ohr0f2Jx8cYPb4FXustrEQSAq9XWE3PHT/yo47jvYEBaY6DTdB0JDeNj49vfEPdMytlXDOE4cF0XrufjKC8rZkYcxzuuWd5qgvqQrmkWUoksy6IsTq4Ux1VsqJ9Z3Ds2NTk583St3vh6xwveL4R8XAhRy1d4GyjHaaxtmN9QkFlPwtmJhLaXGhyNCGeuB88P4Hn+5vXrtwmvWmdI02Tfwx2HWJfOcxEhRJYm/bDf+7BJklexWT3pXrPh555sTU+/qRrUv8bz/fdJ5T4N5gnX8zrWMhFRhYjUcDPA1vkJw3X9YiUwr2/wjkVili2SNB6tq8ynwU0+PJrnjaOVw0PVGyJad4KYGU4RE1ujYYmQpjZXiDAGRzs7Qod2nohIDPr9Fzrd5X+1srL4uXvM1257XWNIfpiafUcQBO93HP+9RDiWVGqLxloIIRsE9kHC2wuOt3TR+VQc76GPR+tqZdai3+uAxxrIo9ctSGl3VHB2KMQdMBEJZqZ+b/X320uL/7TTWf50iV9I+Dg1O3HqPUFQfb+jnHcLKR8EUWCtRUDinVvDbEM8sSWhd09xxI595hy/jGjQ3yz6QHcacm9f/NDvdz/cj+Pn78H4oVkJqn/Kdf1HoygcHzYmuhNJBcOTt9Hv3sG43TBkeeD5m+O6Ik2SLIoHnyjqZoSthUuOzDfflmqRY63vuv5TUqrjcTQYjsAPVb0JuDP8GzMDQoDeUH7iQOuuRZCX9zgHYf+51eXl71lZWbxXAwgGQHEcX15emP/umeMn7vf94GwuccvDasKGNURHA5/hSpJ8LX1+Sd3JJLTDTuKKIBhpHD8fRfEVbGaw23sJw4PB4NmV5aV/2Gq2/oZQzsNSyrmcBEGUr2WysMyAtcz58dtpr+6tFoe3NWsZSRznK44EFRJBa18PC8N3EpYP870QkXVdVyRxEoe9zq8BuLDhWG88P3yXYxgLC1c/srq68JlWa/ZNru8/6bjqKSGdR6WUp4lEJSf02DFGNmHj1I8QkofKB8O1g9qY0b7XXFAtf8ntzu84UWc8gMyVbBjjwmvD3rZli0xn2EqG9W7D7lgADKNNEvY6/3Zx/vpP7RDA3M0yqkNA6GtXLnz/7OypF/1q8E6p1JulUA8KqY4pRS7zOHaLpb7FurZdrvFbJg5LKfPGm+vB846OvDNcdbGfffK3Bb+OywCLfnf1w/M3rvyTexm/SZJc6LWXv78xMf1dSjmnieCCmYyxQwKlBXZnTx5GfCylGqnvHK1vZaRJOrZCYOfDcMiqZ9ZxXKF1ZuNw8Gu9Xu8P78H4Yeh7B8vz13/Uv++B9/u+/1gSx8OCGt8JxPWhko1yFI6aV6SzFNro/eDs0OI9KSSlOmnHSXINWxMg7pFicGakkDWAZBJHppj4vSPWb+ZEeAfqDiBPpkkMne13E/Yh1s+i3ivd7uqPJEn4pbGaw722roXdev3hE7Mn/rnj+u8TJKaYbUFEyHj90AMzdldKp9eLV8fNlaJ8P4BTKJvcdj+rs3zNvT6YFZqjlRy3nl+OmsdERHEUzXdWF7/nxrUrP4Z7S+1sK1OVZvNNjUbr/YFX/Qal1NuEEMcYKNb5WEipJqTcskm8aSsAEZGQAkIIGiqWDM+YyWsQkFLCaD16fiFycTXLY6ssisYwb1GbGCpCCCHydd7WrquhHdLU+i1jF2BYyxCCbiUGWhO4EIKsMQj73d+fX7j2f/ZXV/8ApQkAJ2Zmjr0zqDW+0XXcrxZSPkgkAmMNjLFQjttQ48rTe8Axtt4Y8Lr8tL3DG8i74XeoTHkr+B3GdFmaZYNB96PXbl79v9J+/4V7GLdDQE6cOHX2fwkq1W8TUj0qSFSHWzA2C0DsSfzhUONmEmJfKzfvFAwfQPwwwnAcRdfbK0vfM3/j8gfusfhheNJvRoP+R5VSjxORLGYt6E5+08PBhzdC3/iQ8rexOFiILE0HYdj/jTSKr2LrFcBHH5jejgJaGIbP97rtf91oTv1LpVTNGGPHNmDgqMkPw8AhiaO8sQca2zdcMChpa0LE7QD5eII3/HoUxI/tU2QwlFK3UkhZ53yN1ggHvd9ZuHHjO3q99qfu8eCXAVCns/x7bjX4rkat9TelkPdBoElCSHChAsF2uCdwGFBsKym1QzCxl59vi5EkjsZwOsRsrsYzjueNmF7D9e27BMdxPBweHCactzgNNSroCiFElmUm7K3+wuL8tX8xGIQv4t5msDMAai/d/M320s1PVasT91XqlYc813tcOc4TUqiHhBT3CYhJUo5iMJmisETjIxBbxinr87wd8L4L6YdhjMZ472vYW1mHXSEgCkLPGrnnziCsbSXbfssBhBAiTZNeP+x+ZDDIXsL2u9fvJTNpmr6ysHD1FQC/AqBWq9Xuq1Yn3uz57tuk4z0ppHxECDmbJvGKsSYTQjYAuPkuY1IgElmWAppGEozMFsQ5oWE8ICyKaSxIjApnW9yTaatkfngqhw/TWoMol6seleuIIAjAyD9jHY7vxKmjvWI4jyQEEp10Mm2WsdaA20pC9Z5Q8gOwtLBw9cMAfh7AdKMxdSao1d7k+f47HSmfJCHPKaVmiKCyNLXGGCPy9QHFlk7s7os3OOQtjm2OOCHguB4cx4MfBEfWOB6uzcrS9E47XyylFFE0WB5Egy8UP5f3Mn4XFm78chh2n683J9/qecHTSqm3kVDnHMeZAwmRTwWbgshIm9G5eXc332LsS+P5V65c4hTrh47OdLHz/o6IH4iENcZGg+jTaZpcxuZ1LfdK/DCsQXy5223/YL0x+U8cx5kriOsj0uQWhB7sFYOv1/LVWerI8WutRZZlr6smIYR4XQXgEXatRbfb+b3V9tIPri4v/EHxe4N7y0b1s05n5V+0JmZ+0HHcltaZ3aA2eWRBolQSUik4rnukBV+dZUh3jCHWYnEeq5kdRv1Ma40o7H98eXH+u1ZXl35/j3Wgu9YcK31HuW+WUk3F0cBgbW3hxp7G4atN5iuzcFQrs6w1SNMUOkvXmtW7AGNzrYxHE//M+eAVF2osruNC7u9zcZEPEADKskwnUfTZlfbiv15ZvPkrRd2M7lHsDj/38bmZE//G84Ovs/nWAKT5Gm87jBe2IGFtS2QQQkAWK6025vdZsXpFFqutjbG5GrC1a2rBo/Nv81rYjvfm/C0MfdrGetlhqgCvcT7y5UcbfW5eM88xzMwgIeC5HopFkPvyuwDBGo0kji+E/d6vLNy8/CNpmr6CzUT1exG/x87e/8gPuEHlmwCusuUhcXAjgXKnOPfQb+6WLWhD7niUMcWt4Nfdn4rxCL+FqvAgTeIvh93Oh2/cuPxhAEtYT1q/V60WVKrf6vuVp6NowFkhWTZGYj/yIikjrxeParZH1CveN345FyBiLuIH191v/DvsuY0wnMSDT3ZWln5gaWn+N7A2RHOvEdfTa1dufOCBhyvv9/zgvXE0uKOGhjadRGsRR3HRLx72iMXoe1F8jbFe8jpM36ZexY6YBkNKdcsESowT2OPBzdWVle+9ef3SB5GvzrojYwi6Ta/BAKqnzjz4zyqV6l8FEAyDy6H6Q3ESmNduant93kOe+KQRiNe+LxrLKFYVjf2exn5/K3eBYSFhBNbiGPHY74FxEs8arpTjwPeD/dwoimMtKJ+K0WmWpl/p93q/eP3q+Q8BuHiPB8Cb6lWe552tNifP+Z77oFLuI1LKh4SU5wTJ4yBqEIgYjJwAYbGuIbslKHbe273Lsb9FJZTxZjG2JaqNPfr1YXpsXcwapnndihlmhnKcPIHbnwMeL54VDcH4Zn919QNXr57/fuTSZ6Vh21qR7/v+rF9r3R94/iOu676JhDwXR4PzxqSrQqrjAHwBOUWSqvluWQpIUL3Y3x0AcIb7j9dPlm8jt7oZ4yNJy/0E5OuDiHEsH6BP3iGQ2IhpEgTHcW81gOC1wiYhjsPLnfby99y8fuVDAMISuuswvJ3iRavSap2p+tUH4nBwI477Pc+rThFRRbrOVLGbviWlOt6anHyr71enQeSC2WHLXpYlrhDCBUhmWSqyLBU5JsUoSd8lF9m4G3mEDyEElHKKeIdH++k34Xhshzht+BoAxBDb2Ls063hMsVPMQchXeeREpluLXvIhOEFZlupoEP7H1dWVn1xZvPm7ANoldLeNpSSA2YmJmXNerfJmRziPJcngcppmS45Uxy0QSKmmiKgGoqoQYlIAPki0QOQKIRoEKBBVCJBEpCgvyG8rfe04LjzfR1CpwnHcIzkYxhhEg36uvMN3An7XkjhmxiDsfWJlZenfrCze/PhYEldabgLA3MTEzDm/Wn2b63pvV47zpBDifoAaaZL0rDVpsXs+KBhoQgiSW+/T3mtsvBY8ACClFDw/QFCpwvP8IzsYtpB/36uK1CHFDygKEEiTuNvrtn/syqXzPwTgUlkEBgBUWq3pt1frjbc5rvsWKdQTJOl+IjFFRDRcS5E3VjcrJPH6E7iVH99PjkzDwqfn+/CDCoKgeqTk80HYQxxHe8/fwOtqElIpuK63X/xuyt/SNO2E/e4vXL5+6V8gSc6XMQMYgH/yzAPfVa3U/gZAwXDie8P6WBzQlOeenkNKCc/LYwg/qBzZAcqyFGG/C6PNlrHClmSd4vIdv4wdN18leiv1M4ChdZZmafqVQa/3i1fL+tm6fG3m2Mk/35qY/j4wprRO7fotE4fbzCDK76uO68Hz/du+MouIoLMMcRwhTZPtV7ztVP9dh9lxQs+aOY4LPwj2h10hyGqNLEsvZFn64iAM/9ONaxc/VmAXuHfJO+OfvXn23CP/1g+qfz6OI11gVuzHV64LnIWAH1ThBwGUVKNmr7UGcTQYEbvyhmih9j7mywqfP1L7sMxD9eAR3qhYrZWTCnyQABzHy4mWyJWDsizdPq/a5x3csl2PWfCoyYZ1td7tQqe8fxH4AfYoTZnXy4RAlqRhnAx+L47D3++vrvx+t9v9AgB9j2N3HL8z5x547ANeUPnWKBoMjwvdSdsvCl8E2lDbWlONwggXwxrY1h/4Fupitx+/62K1OIluRGH4scGg/7tL89c/U/rezfHD7PFTf67Vmvo+ZswW8cOo/3snCEAMQUrYrlc89vVYvXfv8yKH73+don+8D/8LIkHWGiRJ/HIaxZ/qhf3fWV64+l8AzN/jGCYAPDV1/P81OT39r0iIc0BeV1wbGrJbEXr4db7moceyo3936VWM++Q99d8Y2+Zvu2Oax9Y470/7Yrz2kGVplMTRJ1aXl35weXn+N3CHE9jpdoIZwMz03ImvD/zgMSXVOZLqfiHECSKaBlG92Bkw2oG5PkGh3XzJ5u82K0PsmEhzflegN5R+33hBRSkEQWUvb3+NuJOvL3glCvu/mSbxF1ZW2p9N0/6LZQCxZ1w3arXacb/WPOc4zkOOch8VQpyO4+i8zpJ5ItmSQk4xWAohZ0DkEeAKISYBCCJRIUIl93OiQoAEkRSjCsN2hIgt4JwnbbaQazv6gGaf5nrefpow68hnOku7xpjrcRx9cnV56ec7neU/AJCWGN46IB47hhuPjQDQANAvkmBV/CwA4HpAnV3X9zyvJYSoCOFMWaKKUnISTI280YyGEGICJKoE1IUQ9RHOiTwCeRubzMOpJKM1jDHjkyF0l+J3fSJXFFyyLF2Jo8HvrazM/3BnZeV3Sj+8p/hlKG24F5s89/Bj75qYmHtMOSoQREJnWSNJ0qDf73pCiCoRnDRNfMt8AqCgCFkFERwGKzB8InKQK/tIZlZCSCllPoUwnOjfiOGDDiv2+ny8RzlX1/Xget6+A+ChHybKSRlJmlzsd9ofvH714o8CWChhuiNut/PBdoufSQAOAB+A67pundlxPc+ZlJI9IZwpJvKFUC0hqEVEdSnkJIAKSTFNEB4J0fI8/0ylVqtXggrcIyI9GKPRXW0jigZ7QhgfOn6HSRyQZWkc9Xu/evXKa9+VZdnzJVy3jB824tPzPO9EvTX1hOt4j8SD8HyaDpaJnKp01XS+kZACKdUsACGIaiTkTOE7miSoBYAFUCch6oXHrRHIXx8bg4iGZGGMpukrtRqkkEd2QPr9HjqrK69rovkW44fh1BCYAZ2lOkniz3dWl39kcf76RwDEJWS3PtyAf2xqqvmgX6m+2XHdp4aEHkFiMkvTWBs9oDW2WUCgkUQO5cpou9yPd69ZSKXg+wEqlRoc92iIlESEOI7QXl6C2cf6LGxyAD7cva9iHGEXIGidJjrLrmZJ/OnV7uovryze/E9FDlIOEK3FCdOzs6e+yQv8tyrHfUJI+bAgmiMSNQAjFWBbqHHsvWK2r2BxyGIn1/Ph+z4qldp+VT8OzKwxaLeXEUevX6XfLQge+4kZmIE0ieejKPztJB58fGWp/ZmyfrYldp3j9535O/Vq8++BqJVDjUfqMeMkNKw15Xgfr7El3HOlSReu68MPbu/KrOGqoiSJ0e91kSbxWHxw8NDIiSGV3Qjs61QfkiS6FPZ6H1lZWvr3g0HnNQCdErub8evWao/fd/z0Tzmu/44sS8ebR+O4xQYFP94GF+T7FfiVCimpcuUGZhhrCoKXzYk51kBneqRoOcTTOIFnXEVnq7VYSjl5bc3JybUEgtEaSRLtcdXr7Y1DPD+A4zi741cIMllm4yj6o16n/RPz81d/FcDyFn6nxC/AlWbzbSfmTv24cry3rcPv+ND8+GTvwR87up04Osi62IHjt1icl2ZJPwrD/7jSXv6x7srC7yPvV6CMebeMH9Txk2f/dr3e+Adr8cMauTX3fczD/n4RQNxmDOd8ojfsgRYCQRDspsCzjnyWxPG1ftj7xZWFhQ8NBp3nAGSl/12HF9VoNN5Sa068XSnvLY5SbyYhzxHRLAkh1w8NFbnVrULo9Tu0omcxJiH1Riro7D1/W7tYhYDOsixL4+fTNH0mDsPfvXnzym/jDUJAo9v8WuMHwkM+MX+s4lXu85R7TrjqAUc6D5AQJ9MkmU/S5Hoh3BSQFNNATscVRC0iqgKwDFL5BDKr/Pnzic/RPVWsFXt3KrIR5cU0ay2M1nynSBTv14rJat7mfW9yvoN+75dW2/M/1+12P4/1RfnSAe9cLNhOhl4CqCNXzRjezJzibyrF7x3XdRsASEpZF8KtQ0G4wplhIk+SqJGU08xMUqppIqoRkRKCZhmkiKgiiJoACRLUIMAhIYXn+3UhhDLGFApAudHOEkBv0ABCEIORxNHlqN//lUHY/Z1uN3w1TfsXsda0KDG893vAVpi+leMnkJN+/AL3Fdd1K1L6dSGoTko1lRTNDU3mKVLSr1XqD0tHPUagfDdzseP2jYLhfSigjZHPGGka30yS+I+yLH0h7vc/sbR081NlIe11+ea1YHiD1esnJlqtSitNU2ttJFy38ogTBG+2lhxmzcM7YBHEBiCSYM4rXYIEMwSBPRA5YAqI4DJzVQhZV0qeZqI5Yq4XlbXRGi6srVW8Y/HruG4+gbGPAFgIAWMsdJbeyHR6PomiT62uzP9yr9f7LNbY62UxYv8+mDZc+7d6/JzCH1cAcK3W/Ppj95353mZz8qzvB3wUe5mN0eisthENwqPGL0jkJHad6YG1ej5Jkmf7vd7HFuev/BrygnCJ3/3HDfvB5jAXHHb+K67rVgBAel5LWFEZj42JyZGOOgaAlOM+MjEx9d9Waw3PD4K9qLEe/EEgQpamWFleRJomr6s5uM/4YUR+yLIkytLsJa3TlweD8BPz1y//Bsopzv3mbi7gz01NNR9y/eBNaRq3kyi+zMwCACnPnQRQo0JmTkk5DVCNiIax3IQQYgIAE8Ag0RqS0gqcFDnb8PXJl0o2g6Da8IOKrFRrt1UVYkPVDqvtZYT93uvCr5ASQRBACLkv7CZx9Mler/MLYbf96TAMz2NNcbLE7va5WGttFXLwZkepJ4RSDwtBZ0CiqdM0WkdAW++01pHRNviz0WDFdv4OyMkCI+UzPziyoLbbWUWvu3pgvtzzfDiuu929ZAy7QJqmnWjQ+812e/GDnZWVTwKIyvrZjtitTc3NvT/wqk8p5TwspHpACHGKiKbzmi2trYQatZX38sw8HMUf7ocdkRuUUiPyzu1eUZimCQZhH3E0KIiRh3+VSCnZX/PBtLnmkF/AaZIshYPer7YXFz/Q67U/jbX1hGW8uw3KJqaPfUtrYuIfKSHPMESLCJWhL+B1Skm8Y6lKCEJQqcHzfQgSiONoRJzVWsNonauQF2o7o1VrBVln/fcYkX02kceL1RdKKTieCyVzBeAoGsCaO28bJTNzEUOwlIq2xm8+sBnH0Vf6vc6Hrl+58HMbYl2U+N0av9PTx/54fWLyH0ohz4HQpHwoYm0ViV2P3z0TYXY/sXs/H3mx7A05gMzMLIRAEFRYKkVb+dNcnTozcTz4VLfT/vHFm9d+DWvqvgL31nrjW4ofKn7tSSHV/ULKc5LESRJiBkCDKF++t7UAxHbli32f5R3jR2Zmay2/UYUghJQcBAELIbeqVfNw2DhL4u5g0P+N9tLSjxfD8rqMH3Yv8QCYKZTWn/SV906pnDcJKc4QiWlmUJYlxlq2twKcrYaK9p77CLieB2Y7HKIHFytk3ii+OCdQ+rspyq/1LbRGEkfP9Hqdn15ZuvnrSZJcxnoS5R2PYTqC19up4EsA6p7nTSVJ0ke+doGQkx4qY++37rquD8Ays+N51UlmdgBY4Tg1KWgqvxuyJOnMAAiIiCEQKJIzXGxZJUFTxfQSE5GoBJVp5Tj3gajBRfOtkKbMm8i7y6EcZewAACykpEpQIanU+A1sfeEhSZaiMPz19srih9acLyEfgC0DiFu8fg6KALHpnlrgXxTXgADgu65bAyA8z5uwVnhSSlWpVR/wg+rXOI77TiJxBgSX7VoSWDhk3KFkCGZmKKU4CCooiojbJHCMNInn48HgN1fbN39qdXX1U2MBRBlEHBymtytk7iQFdauNPOl53onm5My7K5XaNzqO+24iOg2iykhy0NqhTBqPMYTvqMDC8zx2XA87EyjXY7jdXfm5zvLCZwD0Dth3lLaz1afnTvyJwK8+BiFIgAkgttbaYqevxRqplQBQHgYARMQWsMzGsEVsDUfEWhsAgtB0XO8pz/PfKYQ8C4JjrR3FEkUPcBwfdwyGfT/YtYGR1yEEtNbI0viVaDD49V5n6T+02+1XkK8stCWGD6RgsZdYfR++uHL8zIOnf7jVnPy2SrUOKeVtx521Bp3VFQzCQ9gKSAQ/T+B2InOsrQ4wBlmaXI0H4X8Oo/C3wm7/1WIKuVvi95bjhvFjRjtUv173cZ07fvrvzcwd/2e1ekMq5RwJgQfM6HTa6Pe6B/J0ruex53rA9vHDJvJDv9P58Pz84u8CyTzWmshlDLw/vPIBPN/45ME4KY0BBEXOlv/AcZxWpfEnJueO/+NGvVnz/KMjoMXxACtLS9uvdtlH/lbIsPP2+Vuupb0eu1d/E2sTbyV2d8fsVsel4nne8UZj4iHXrTwaZ4OlZBBfKQho655jnIy2qdggVIsIE0Ni2gas5Ip+gmq1WvPra43GVKVSHRb7b7vFUYTV9tJBkCNG9TMpFYJKRWwg0635XSJkSTqIovA/dTorP7OyePN3xuKFsn62j1QZwGSjMXUyCCrnHM95WCnnESHlAyTEfSbT/SRNbux0zvI1stSSjjMZBNU5KSUN1XxJCAjKVX09z9uNVHjQhSwMwj76vS60zg71pYavV+CThJQU+AGU44wrsnCxXHOE3W57+YPLy/O/MxYvlNjdm+890WhMnfD94KRynZNKyZOQ6owS4iSRmCGiKSJqZVnW1Vm6vJVjEkJWao1mq1Kp+kRCxHFExmiAQVpnsHatfzeutsPrVgBy8VyieJxdp8YzNCklpFJwHBdSKiRxdNiY3B9+c/Jdjl0hSCkHjutCSjnkfawfOk7ihUG/90tLCwsfHAw6ny/jhf3jd2Ji9rTynFOO651VSp4VpM4IKU8KQbMEtIhEJUuzxJisv8tTimJtt9glxtyRFDzKfVwXVDRWzdZ9tzuticzrfK8QlK+RdUdDyPmaHAIRkbUWSRy92Ot2fvrGtYsfBnClxO8tmwOgWavVZt2gfsr33XNSOQ8o4TxAUpzRWdpN4+Qib4GZQvG3uV1MQfkghtic6Y/EIrYMJlzfr7iOF1hroY0u6r2WmfGGwLAQgoSU5Ps+pHLyfssaLodqJWk8CP+g11n5wMLCjd/YUCsrMby/vG2oAvyAX6k8JYQ8Gw/CVzKrO2Dsdw/1pqGi/ZgUwvUr1VOu6z0hhHgAoBbzut7xHT5In8NYSslBpUpFXLS5/iAEGa2RxsnzYdj5pcX5xV8YU0x9w+GY7oDX3mmdy2GYGnvNAGtToMJ13Va9Nf1YUKm803O8t5GUj0ghTjLgseWRRDGPGMXMG6Smbsfx5HGvmyv/C5JKQkoJIgG2dpUEWcdxJwHYtcJD3I2iwe902ys/tSF5K53v4VxTvAsudmwy3eI5CarV6oP15uTbPC94Win1NpA4B9AciXwH43oMb/ke6bDxuxnDRELIfFrEdSGEwHpp2jW56ngw+M12Z+XDnZWFT25RgChxfOfdU/ZL+PHdWu3+iWrjSS+ovlMq9VYi8QgRHSMisTbtNErwbzeGNxfPAIIQ5IxN0W8gUG4m7mzCcEmivM0YFZVKZTaoNd/pe/45Y2xMJB2lqG4MEimFJwT5+VJCNmw4teCBYR2yRsdavaJtuspputrt2g7QD8f8UVCtVh9stKbe7frBV0spnyKS91O+nm5jIW5cdeV2xmVc1NBGGFWOQ0FQ2SjMsm5Viy4C4MGg+4srSzc/OhgMnsdmAmWJ3zsL6+6JU2e+c3L62N+v1uq7kVwOxYzW6HZXMRj0Dwod63wwACjlUFCpbCUstI64kyTJxXjQ/2h7eekXe732F7F5er6MI44u/6Rd/sYCwfFzD537hYnJ6a/xg8AS3X75EiJCHA2wsrJ0KxPNm7BLRKSUQ/kEvdgifiim39KS/HDI9QjeAw55l+93tZNnHvgXk5Mzf7daa0CtTeze5rKXRXtlGYOwv5+B0U2N46KBAakceMUaw435W4HdOImjT2yB3d2Gu0rbjNfbXTsjAGJ6+vhfnjl28nsbrVbzKOIIAMjSFO32ErI0ff21ByFICgkhRbF+iIwgYiGlAji/txBBp2kSx4M/6Ha7P7t488qvAVjZUHsocbs3zG53rHJSz9TUKWNMEq6uXtvl+TwA3tzx+/7s1MzcdwdBTUklWQhRlDzptquaERHCsI9OexnW2IO8MjZid+h1c9wWpCUAqTHmPIFjz6+8WYhcjkhnmUmi6NPFuqGPIh+OLeOFgzEPQMN16xPVpj/rKO90FicrYdi5sNWDpZTN+84++u2tyalvZfDMoN+r6EwrANBaS2sNCZGr61hrBcBU9M6oEPPFGE+H141kYk05ZYQNKeE4LtI0RbamEsm3sVY29nprEitD/Eop83gXSMH2WqbT562xcbVW/2bluDUwkKXpIIr6v726vPjj7fbSxwEkZa3hQEwAqHmeN+lWq8d8N7jPc7370yxph93+Kztgg6VkRzr+jGV2aYdzsBMpeMyniUpQmfb84DGh5COAmCVAWV4b3izqZeNq1rcdv5t7FgJSKlCer6Vge01r/bwxWa9arf8xx/UnmS3iJLo56PX+/fLi9Q8OBoNnS997KPEDAFR935+O4zhDPky4bdywzTl2h9sxtsCoKsQitloRQUGtOlupVN/lef5XS6keBlEThRpQQUgrlnzle4pwBP2KNQRjhF8hJaSQRc5mO8aaV621gyCovktK6QBE1mgkcfRsr7f6wRvXLv8igBslhl93jWHjMZNYU0I8kjjG93GsVjv2uBdU3uK43tullE8S0Skg32rEbGFtrtmGI+y7rXF/Meod52RlCSnVWNyfD0uTEGStQRonF8J+58PzN+Z/PsvC57d4z/xGBNQb8f0MLwLa2wnf98lpVZrNs41q4y2u6z+V7xsX50jQcYAaOXGHR+qAvF4m8CCCY97ywieCIAKRAIn8axAlbOxNY/XzaZJ+Pgp7f8SCWjOzx/65H1RPp0kySOLBp3qrKx9cWLjxm1i/nqV0vm/ca3TLCd0NwfncxMTMOb8avM11/XcJId8EouMEmiQiNRaZDm/vWz3P6/ETG5+HhvLGRAJC5P8CrAFus+XraZZ+WTnO/ZVK7auHcfpINaqz8nMbiDslhu8ujBcNunXfT09MTDzkV+tPK+U8RSQfIKL7iWiGSASFsNgIAtuQ015PoXlEdBjbcZ4Xz4oAOPfDAIAes20r6U4rRwU5a1mInYk7ZQH4qAtwQRBMR1EU+b5fDYKgGUVRr1ptPiBd7zjrbMkYu5pletWYqDMYDELka/qyXWKTobme552qNSff7Lnem6WUjxDJh4lwH0hMSSndcTd2i7HEbkHoKOLFmBMWRBBF80KIHMcM1lIqOSz0DQnAOkt1kiRfHAy6v7p4Y/FXxgLgcQyXvvgO9Kuzx07+tcnpY99TbzRbruvd5tVZBGs1Vtsr42uz+HXjt5BCXfPD+ddEMFIqMVaoFsNVb0kSF8Sd5Y/0eiufxxrxTGwTQ5V252GaZ+ZO/A/Ts8f/Xb3RClzXO5ImsrUW7ZUlRIMQ2xHGNgQmI/AOISyEWPO/ubCOtZZXpBS+lKqG4QAG8pUtcRx9atDt/OIW5Ic3ZAHiHsnTsOE+aSuV5ltPnj7z75utyQe8I1plSEQI+z2stldQiLNil3xyRBpZw+7I53Iez9JqptNXlVSzXlB5tHhwHjvE8ee73ZUPLNy49qtbYLfE7cHgb68EtL3k65v8ru/7p06cfuDft1qT7/aDKos9TNYfht9dXVlCFIUbPyLvVj9bqz3kcW+xgikCY9GwuWi0fi1Nos+RlPe3WtN/w3FcP8sSncTx5/u97oduXr/0yyV2Dxyvryvumj128s9Pz574YKM54SilDjQWyJXY9SjG3M1NW2uwsrSIOI62eyzv8xocO05D3I76mIy8lnvNGvOq1tmLaZy80O+vfD5JrHPm3AP/LqhUvzpJ4ud7ndWfuXHt4kcAXCqx+7pxu/HY7fcYyieeetf/1Ki3/qKxZq7X6bSyNPZBxMxMG5Tw2BqjAIhhoXTIIRgWpIQQYMtgjBMcwESClFLsBxUBZmRZJsaHkDcq9N9CLLMVbmln3zu8hhhgjgHMM/iS0fr5KB58prfafWYw6JwHIM+ce+R7q7XmX0zT6LOddvsnFjcTz0rsvn783knHUACYmpiYeMirNd/sKucxKdUjQshzAOZA1KTitG8zAHfI+B3rueUPi8GYt2w24vcCAH3q7AP/uFZr/rU4ij7ebs//aGdl5ffHaoYlfu+Q+OEQMHzf1NyJJwPPf0w57mNCykcExCkQTwMiWMMvsKHeu1fV7f3GD6Ocbc0Ho2hmcIcZC9aaV9Ik/mwU9j/b73eei+OYzj302PfX6q1vS5P4Qr/X+fDCzas/m6bpS2X8cGg5G2/wzweVu93q39eq1erZWq35JuUHb3WU87QQ8iEAM/nK27UYeezfg/TFG13zuv6xEBIkaPgCHcv2hjXmfJImzzhC3letN/+cchxlrUWcxBfjsP/R9vLNj/R6vc/iLtkSQPfwRbPT7+0WP2vUarXjvl87pzzvEanUE5LEI0LKUwS0QFQDibExuq3923brQDcnezSC1oZh+AEzVkFYsMZeMDp7PtPpy1F/8GKns/Qa1vZp4vjJs3+zUq3+6UHY+9kb1y5/FMBC6XzvqZvCRhwHnucdC+r1064KHlVKPUpCniVBp0Su0DNBRBUiUTS/NsNkL+ts16ms0dgFRwS21gI0YNg2GPOAvWqMuZim2Utx0n8p6vWuJElytVabeMeJ06d/UirneBSGv91bXfnpUvK3xDByxbSJZrN5n3D8BzzXe0wq+YQQ6kEimiOgQUJWc7EQ2jEm4I1fbOlvx7Ym5uydnKkOWAL6DF6BxQ1j0q9kWfZCmkVf6XcGl6Znp/9ic2LmbwkhkCTxzTgc/FZJ3Lljsbbd8XeQs+LjfcQTWzVPNj6/FyCYUXX/Psf3Hs5lK9XjUooHhJDHhRDNTX50R/wytguaR89BBCqwvObb2RBRWGD4prFmXht9Po7CF6rVxjfWG83/joRAlmZZmkZfCHvdj9y4duljAC5sSFhLDN95xbkCGMSt6bk/OTsz9yP1xsRJzw/23XQbSrjfqmmt0euuYhD21zKxouN7q/gtFB4siPrMdoWZ59nam9pkr2VR8nJQq31rvdH6k0PFqGLV229sQ9wp8fvG8tVT9z/46M+0Jma+JahUjmSFCwHo93vorK5sWlswHiusj4OpGPtAPspE1CegUxSBrxqtL+k0Pd/v975UrdffOzk1+4+U47hJkqzGUfjxTqf9cyuLN38Pa8oPZR73Bo1tj5888w8mp+e+u95oSqWc2/8mclINVpaXkCTxlv59VOjdfAlqCIpg+Ya19jVr9Fe01hdMllxPksHVdrv9Smtq9quPHTv1o8pxZpMo+nS/3/mFG9cufRTAxRK7b0gTAOzU7LE/Pzt38seOkjjZ63bQ7bR3qaGtFR7GAyIwQhC6zDzPxryaWf18Fg1ejOP0tU5n6UpRP0sBNM/c/8j3e5739m6388Gb1y/9hxK7tzXv5z1ikmfmTvzFmbmTP3YYBB5j9Gjdq1QKUioopQqlps34C8MeVle2JETy+mICMC6jsiV218mssCFQArZLxtoL1upXbaafT9PkxU4nPJ+mvRtYv4Ibk5Oz3xhUq+9dXVn4xTAMv1Ri99Bxu9Xx3QqL6sFH3vxtUzNzfxXAXKfdPpZlWTVPtYxcW3tIhtmSNcYFERORLPIxGiODgwDGcMWWtdayNUQw1lhWyjVEiK01q9JxmkoqBwQBgNiyY611iUgN8ce8Ta1si6uKdjoMY3VfzgcvEgKvsrU3jDWvGK1fznT2QjKIv1L43WVsUB9w6/WHW7XG13VWlv5LkiSvlfi9I7B7K8a3+DgC0Mr7btX7XT94XEn1hFDqAYBmAZok4gaRcA8cv1irA6/DL/MNa+wr1uqXkzTZEb+oVI5PeNW3tNuLn9mQs5XYvT14Psjn2WtcsfHG7wKYajSmTga14EElvSeEFOcIdB8Ix4uVizUi4exU790Kvxgvm21Rb8A6ghDHDO6CaYHZXrfWXmZrvhIPwhfiOLzQ7/evY6x3DACNycl3NmrN/3fYW/31drv9yQ3HoMTw4dW37pT4e+N7mW42m2d8v/qQcr0nBMnHSYrTIDFNwCQR1UiQIIh1+Nvkh7dw81vWGTbkb2uqvhQyuA3mS9ZkX9FavxQPwhe6cfha2u/fLHB8/P4HH/8J3w/eEYa9/9BeWvrJDXXfu8IPU3nN7HhsdpJrcwBMVZrNY55w5xzHPS2UPI5cFWJWEKZAoilItEBU7E0kQSQqRQC9zh8ycwS2BTuXBhbcZWtXAF5mtktgLAC8YrW+HKbRlTQMbyZJsgSgv837tgCqyFd2lHJnZUFkO4Zv1Yc/4TbcOcfxT0GIE1I6Z6UQxyBomkhMChJzQlCNQY4QFGDUhth2wigCuM+MHoM7YLvCbJfY0k1j9EWr0+txnF7tdsN5IG4DCLd6b1NTs98mhOMuLl77bZR75ksMb3/eK57nzbpu9Zhw1TFHyjNSOPdLKc8IKU4BVAeYIcgXoHrxdM6IRUygtRl5sgQ7AMiCyOY45lVmXiHiJbZYtNYsM9uFNNOXBnH/2qDTmS8SuJGeu+fh/uOnHvnXAIXtpcWf6nSWP4WSuPNGi4V4l4TuIDHcdGu141Xff8BRwSMEniJBMyA5I0meIoE6CVEhoLIZvyTFmFY8s9UAMUAWsAO23CeiPoA2wy4zY9myvW4yfSnT2bVBr39tMOgsFD52AMBWq9Unj588+yOASLq9zs8vrFz+T0jKBsYbzVzXffTUmQc/2GxNfZUfBFZKta+dAlmaIstSeJ4PqdS+X1/rDL3OKqJokOOFiNhaWKNDgJwie9sjfnmVwUvMWGFrF43JLoz54HX4rdUmvub4qfs+SELYfr/74dWlmx/bsOqt9MFv0AJHa2r22+aOnfqpZnNiwvVufxOZiJClKVZWFpGlybqXHxbhjNF9ZkRg7jE4lUKCwYvWmqvW8FVj9EVtsstplNzsdpfnkU8Wj8fBE2fOPvS90nFmOyvtDy4v3/hdlMqpd0uBbu7cQ4//wsTkzPv8oDJSWLrd1ut20OuubsJ2vqmDtdbZFcu8CLYrbLHIbBct2wVr9RJruxSGndfCMLxW4HIjFtWxY/f9FaFk7frVi7+IUvnhLsCtf9+5h859aGJy5uv8oHIEqlGEJB6g3V6BNXpjLE5aZz0wJ0wIYbljmdsAt8FYYrYLzFgwWXIp0snNon62UMQLW35e3/fvs9bW0jR9scTuHWkCgJ05duIvzcye/PHDIPAkSYKw1x3KOIKI4Hke/KCyifRojMbK0iKSJMqng4ekioIAX6yCydZnhSNIJdbyAMxdy3YV4BVmLLG1bWa7YC0vMOxiGiUXi4ZxG1srwO6kJFk2j+8QX/rAw09+8/Tc3F9ny1OrK8v3a53VCGDLVjEzATBEwhpjXGZLRGTA7IBIrtt5nSs0EgkBtpZtvstVc/ENQFGapTeZ7UBK6RGJCMyJkOoaw96wWl8QQs4JpR4QRMcANAliggQ1ADhgEARVCJCbZ+I5AXMCgBgUsTX9As8RmJeZeInBq2zsZZOZi2kaX4mi3tUkSeZ38LvjGN2q/lLi9+6vwe1UJ3MBTNRqtUnpVY+5jjztKHUWQp3biF8CnNz3igAEZwv8ZmCOiq9jttwvYuCUGctgu2yJl0r8lnbAGPYAtKrV6oznVU5IKU4K4Z4hKU6CaFqQmCIpJghUF0Q1CKpu5X/Xxw/I2PLAwvRgeRWMFcN2CcxLVutLhs1VnWZXoyi9kSTdZeRkX70H/G5U9Czxe29ieSuJ3qrv+5NCeFNexTmpyD0jlTwrpLxfkJgCUYsEtQiiBrBgkFrrH6+DF1vLEYF18dMegJhIgC13wHaZiVfAWDbGXDBZcinvHy9fA7C0OQ5mAoir1daTypfTneXlT2FtCPuuqvuWBJ79H6fddjCKwkEHAKpOtdrwyJlkyUqyVI6jZliQmzco1hBnM72SZVlfKRAz95IkWU2SZNiQiLdwthudLnZ4X2XwUNpeg4vxQDkAUK1UKnNETlMIEbiuN80CYocXsFbrJa3tSsJpJ+33e8hJZhHGCA77DH5LDJe2FYZ383lVH5iwrlsFYJVSVXKcFjRYOE5NCprKHbaQANjCWhBpm+kFItJEZLNMt42JO3Ec9wtfnGwTzGzli+eKQDm8G4OH0g7dDysAPoAJ13Ur0vfrgqi+Ab8spahL6UwTM7EQqTV6gQRlZFlrrRe1TlbimDtp2usXvnin9V9DnKJWqz3a7/c7AK6VPvgNgaWparU653mVE67vPyCle9bz/HfX6o2vrtRqQilnx3h/o9JOmiZI4hjGGDiOg6BSHdstvPvbMjpDGPaQJTEjl+6lNEvTQa/7M2G/+5skZQ0ASSlqe8Tv0JfuBb+y2Zz6miwzK4PB6rMbflf64DcmzhmAe/r+B39wYnLur1WqNZZSHkkOG/a7Q0WpdZeQEIKiOPpyZ3n5nwPZlTRNu1kmEs8D93q9DnKyw26KbsOCyTTyqc526X/vHgxPTc1968yxUz/TaLWaR6ViYgpVNK0zjI+6UYHhMOx/fP769b8fRd1rRe422GP+Nh6Tb7XOqcTuGxO37olTZ79jambu79XqTSGlwu3GrTEa/W4HWbYOhkwkKBr0n2kvL/5TQ3bBMvdNHLeTJBnWHfZTP0OJ3TeM5QSeuRP/Q6HAow6awDMI+wj73WJbUa786AcVVGv1dbEyEaGzuoKFm9chhEAQVCCVBEAspaQ0SZY7nfaP6VS/wIIVASwgc31XADC2m6bpUsLZShaG3SJPGxRx7m71ht1WOZWNtzsMt4+96a3/n+bEzJ8z1tY7K0sPZ1nSzAcWWFjLBkQazE6+NpgTZpKA9Qk0mqIogM5CKmLOyTuW2YA5s9ZmbG2qtW6D0KY8jrwGcIuZFqy1X4kHnd8eDAafL57ORT7wW3HdWt11nSkphQtoIRx/mqwN7AYMaWM7rPUqFISwNkySZDW/FCguehfDmq/Zh9/dKrctfW9Z28Auefs6/HpVZ1JY4QEakO6UBGp2veg6AejrJF0GACvswKzhNx3rvSUlfku7TRge1nsrnuc1pJR1x3EmhPBniDb7XwEAUgJggqF+auNFzrK2MWEnjnEr/YoyfihtNyzvBS8VAIHvoyZltUmOM8EZk5TCdxxvZmP/mCxsmiZL1tpIKVCWZata6wHgYaxnERWxMO8xDt6I2buy7qtKTO7JttqtvZ3emS3AFgFYycJwx07D67wR7MXxlsFDadgm0NxOPpOLxCsF0BkMBtcP8SaAHXBcBsCl7YbhnYLkfgz0keYF3zRNDzMo3wrDNzcED7Y8faXtAcPDn+sieO2naQocHH53w7AFgH6//0IZR7wxsNRoTH7DxPTM3/E8/wEh5KRynIZSjpRKwXEc7LamxRiNJE6gHAeO4yBNEiRJAms1tNaw1kBKBT8I9gStLEsQhX1onbEoSBZJHF3s9zv/7ub1qz+ONTWRg44lhvi1nc7y726RwJU++A1slUrlMc+rvN9xXUh5FMIlBJ0lyNJk4xoNJiIYrbOot/pj7fbCz4//cgvXvVscTMini0r/e3fY8L6uKrX6N3m+15RSHQl5J8djDGvNRkImExFladrutpd/KIq6n9vF5+5Whygl1+8S3Danpr66Vm/9Zc+vSCHkbcctMyMahDBGj2M2x2uWrvS77X/Z6az80gHkbCV23zihLwME36/MuZ6nis2wt4xLay201pBSQkoJay2yLIMxZkRul1JtUt4hImQ6Q7ezCmM0lPRGa4qFEMTMJhr0P7C0cP2fYHsiGQ4Qu9vlm6XdIf40GYQXeWLmOSlogplPMEgJosxYDnIiLTMDmkFp7uYYbIkxviko3ycBrbUWgoiJLLE1lhEDWLLGRADHxGSZ+AqYUiJKBWFRs74yGAxeGcPUsN7bTtP+hni1cxCf+VawW+K2rG1sxMFGXzj8/Q74RYnf0t4IGB7Vewt1yMP0v2X8UNqtYHkvfbcBgEEcY3ltdv2WqhSvxxcz1hN77sq6b0ngOVjHvFUCSa/z+Xd7vdLxloYDwNhOOD5IDO+HBVnit7TXGyRj7CZ+u33x8PXKpnFpB4HhveKTDgjDZQPjzrdgYm7u3NTE7P/eaEx8k+M4ICEhBIFAhfLN5lUX42o7WmvEUQRjNIw10FkGrTNYY6C1hjEalghxHEFKCcd1twcMEQaDEN32MogIjuuS0doMovA/rSwufk+/v/pfi4eKA8Av7wO/pQ9+45toTc5+u+cHD+ST9nTbyQ/MFkkSw9ot4URJEv1hp9P+WIE9sUNxYTfslg3ku8sIALtu7SHfD77ecbx9qJkdrGmdIU3ibfDNGET9X1pZWfwtrF/Hciv5W4ndNzZeh/5H1KvNP+EHwZxS6ghWZwFxNECaJFvCaxCFv7q0tPDRAq+0g89Fid27CZ+CAQjPD066jgciel3EMq0zxFEEIgHlOCAARmf56qsiXlaOgJSq4A4NNwEw+p1ONgh7EEQklQIDltlmYLGibfZcv9f7ZeQNOon9N365xOPdletbKTNJIiSAIGgARosJlgBtmSUzM5Hog1iCoRiIQexYhhT5jktLAFlmLQSxEIJYa2MZCcN2rbGrzDYmQDFhhYAFJj4NYN5YXsziwTPIVw5vVRt7vf59u3i3tNJwQNg6jH5Fid/S7hQMvx4cl/gt7Y3ui3mHn++nf3xX474k8BweqMsiQGl3C45LDJd2N+CXj/A9lFba7fLBXOL3njD14KNvemezNf1nme17XMdj5Tjjxdgtk6ckSWC0hu/7sGxH5B2tDchoWKmKaeQM1mgYY0AkkKUJYikhldq2+Rz2e8nSws1BmiaR63mvJnH0SpTGFxauX/kQgCtj78uW+C1tj0YAuFqtPl6p1v+M5/miUC+57ZZlKdJ0UyOZiQhZlnZWO6s/HMfxleI9mxK/pY2fy9bkxPscz39Iqs1KDrfnTTCSOIIxZjOGhaAkGlzsrCx+APkUXSmdfm/62iFeGQBqtdpXV6r1b/f8AFLd/pJhmsSI48FGKA7Vd7q9Xu9jyBWvd4srSrv7XGpFKfeUUgrA6yDwMKCzDFmagohgjAaBRuo7udYJoDbEvkSEOBqY1fZSYowVrusKIYQl4oyEHAhBXxFW/JFS6I3hs/SpZU6PKA5XBFFI4FWwvY8NuVzcpBlIYJlBrMAUg1hzvkLCL4R3wIAhghGCyLKFBafMCGF5xbJeZqIAQETAeWYKiJAAvKTT5HwYhq8cUK2htNLuqOuqxG9pdwGGSxyXVvri0na0ksBTWmmllVZaaaWVVlppd74RAD5x4uwDE1PHvkpJ+TZjdL1YVbVjA8MYPZoqTtNk1Jww2sDoLG8qM2CMgbVmNH0MGBhDxfcW4wI6RARrDHe7q+Hy0nwnTZJUCNFO4sHniflTYW/wMoDr2H46vrTSdisIUHNi5k/7fvDYUalAGKMRD0LwFuo7zEyDQf9j7aX5Xy9PV2lb+WsA9Uq18k2e5ztSyvVO9DZZ3qROtr7IrMVgMPhor9f7Ao5otVdpd4SvBQAHwPGJiZnHWlNTf6taq59zXZfpNqueGa0RRVv7XBAhTZNPd5YXPlmetnvWKspRU0LKEcnmlnBmTbEuK99wRdbkcW0R/zIzpFJQysl/zgwJgtYaK8tLJooGUghBQkpmhmYgI1AEIiWEnFLKb5Vxb2lDu/jKi8+tNBqvMPN0c3LuXUKo+8E2AnG1gFbCxB6AlMADAgmALYNMDiImMGcM0lrrjIgEs40Y6Bhr58F8HiAX1g4gRATiaQCLxujFOA6/CCBGSdAtrbTSSiuttNJKe8NZSeAprbTSSiuttNJKK620O9uGRdfa1Oyxpz3HfSwz2UNSKhJCbJpANkaDmaGkgmULo/MGhTUGVggIIWCtydV2bD4cPGxYWDs+fUwA5X9njIWUxZshQpIkerW91FttL/etNYkQIgQQSyHPCUkXPI9eCEO4yKfkSyvtVvB+3Per3+B6vpDKOZKmQxJH0Drb+GMmIorj6HxnZfGHke+wLxsjpW3CcK3Vesr1gncrx4EQ4mjWv8WDrda/MZGgJB5c7HeXfx75pH+J4XvP3Eqz+eZa0HiH5/tPu573FsdxH/D8YNLzAya6vZhlZkRROIpZxn8FEOksy6J+72MAFku83ptWr9ebSjmTBZ+X9oMtnWUgISClhDF5DGxsrkxGbEcEniGslHIgisCXChiutpd1t7NiiYiEECCwAcEAFBPQJyAyrNtxnC1siGdKu7ct7Ha7IQBZa84IIZiZYIihQZQATMToMRAzwSXmhBn1fC1WjnUmMrA2BSEBoMFIwXYB1lwBaNXo7IYAKRLyIQIG1qKj0+ylJEkurfnR0korrbTSSiuttNLeSFYSeEorrbTSSiuttNJKK+0NYCfPPvRAtVZ70MI8TMBk0Q9e18DISTgWYIaBKZRzhiQcDSHE2mOIYK1Z97fD/4ZiJ2ztSIFn2Nzo97rRyvJCZxD2IxBiIuoxcyykDEnIZaVUxXGCWQCXy7NW2j5siGUBwEzOHHuP53tPFeSH2/5mdJYiTTavzgIAY4wO+52f7PV6n0GpXFLaZrMARKMx+S2eFxwv1r/ddpykSYIsTbf8nbHahmH/Z7vd7lB9p2zu3WO+dnLm2LdOTs78M88PHnRdTyjlQCoJIQSEkEeA1xhpEm/9hgUhjeIvrK4u/2Z5+u5dC4KmrxwnYuYYDAPwljjlvNbtDLGudYYoCgEQlFIwxsBoDasNGHnMS0RFfMwQUkI5DgjgYQycRQPb73WstXk8zIBhhgYhJUZIJNoWfLnf732q2128OB4zlFb63OLfjMErxfcegJgACSZm4mWAfGLWIOoz2wrAgokkgQ0YlplDKYSxzIaBrjHmEgNtY0zHar0iPf8RZpZCUMdYPZ9l8ZcA6PIeX1pppZVWWmmllfbGtJLAU1pppZVWWmmllVZaaXeuFUXXqfrU1OxblOPeZ60NhJAdkAADzGxBhVoOW0tgVszsWGsFAGmtLaq2BGMtSSIQCNZoHq4LsMVzFCsJqPiXmRlpGnOva200CNMsTZNutx2maRILEj0GQoBSKcSyUPK663gLOo1fiKLel5Ark5RW2l4wDqw1FwwAt1Zr/EnPD+pHQX5gZsRxtI7gNvwVkRBx3P/Dm9eXPoScqFE2Rkobx7IAwJ7nnan41W9yPQ9SytuOYWsNkjjaas1Mrr4z6H96ZenmT2KtuVfaPRVTQFWr9T9RbzQf9vyApVRMREOc3nY8WGvR73eRxBEc5UCqdaVKslrbOAw/miTJhdLn3rvm1aqeo5w+gSImC94OqwwCsxpugNNZhixL8zi4UKk01qwp8KzfFEdKqkKtkkHEMNpwHEdsjeHisQxmDXAKxoAEdUG0FEfhszdWlz9fxDElTktbj0ogguUlMCyBNRO4yN7axWN8BtrECAG4ANUIDDAxWzMgQaEFiIGErT5v2Vxmy6TT5IUkGbwGKeqOcmvW8kAn8fNRFN3YEF+XVlpppZVWWmmllfYGspLAU1pppZVWWmmllVZaaXe4TU97xx2lTjDQEoI0QB0GuwAAy8TI+24MgAHHWkNCwCm4OJQ/zIJY5Myc4eOH67JsPsfMOaGneJq8qWGM4TRNEilUpE2a6iwLBagD5khIMQDohnDUgqvEzUG/+0fz89e+CCAtz1ppe7RhY0ECODUxMf14UKt/XaVS+xbH8SCHu9tuo6VpjCzdrL5DRCKOB+c7K8v/HIgvo2zQlZbbOAnNAECtOfkex3OfUEqBNnSHbwuGkwRm6/Vv0DqNep3ejydJcr7E8L2LWSISIGIhpCUiiSMichERkjhCv9eBtQbWWgRSDkkVTEJQmsTnO53l3ypP271tvue2SIgKgxUY28tEERRAxEUQrHUGU6jtCMoV/dgyNm3iKhQopVJFoJyHw0IKSClJSFn4S7IANDPHDHQFiWVr9Cv9zvIn0estl361tO0gTIQGgIQJfWJUmbgDoi4YHoDrAAYgRGS5ZoEOMUIL64AQEpFixoAtfzaL05dJijlrzXzXpF9Ekiy4rjvL0jljtbne769+qcBgicXSSiuttNJKK620N6iVBJ7SSiuttNJKK6200kq7c62QwklutLsrzx7z/JNCyhkLTOUTxlAgUgX9BsQAgaQQ0mGGyLcCEISgggiRk3aEkAARhuIMI5bP2GuCcnkfZhilJBERkaGBING2bAYkxDIxrkkl2wL82spS54+63cXzKAvFpe3Nhk2F2amZk38sqFbe43ne047jPeS6bsv1PDiuO3zcbbNtlEuYiChN05X20vJ3tttLv4WyKVLaRp8JuJ7nnarVmm9uNCf+R88L/CNR3zEGaRKPiJrrrzqiJIk/tbR0/TfK01YajkhxZ93FYy16vQ7SJAERQZAGWwsqyJtsLQaD8NcHg8EL5em6t32so9wWEblglkwktnkkmSwVlhlSKlhjoLMM1hpwLmZSxL25gF6utGNH93wp5JDlPozAwQwYo9loXZDbYcCcEkQkgA4IV/v93icWFxdf2HBPKK20cXMI8JjQI6AHUAhwCLBLxFfB4gYDcwB3QDQFZmGsmSciTUJVmHkSTJeSNPoDtlkgyZmNB/HnEYULAGrC8R8mIhvH8TMA2mWcWlpppZVWWmmllfbGtpLAU1pppZVWWmmllVZaaXe4LS8vJ8dOP1gRUgRsucbgOkA+EROYiblYAUAMEiSsIRICNOxvMAuQEACDhMh/JqVkIhQrAvJJ9zHSArO1FiSMlIIBYaSSCbMTIYn7AF0GMC9IdHSafGFh4canAXTLM1XaHm3YVHCPnzzz11sT03/XD4JAFatThBBMJG67cAkzI+x3kSZxTnIrfkxE0Mak3U77B1dWbn4E5cqh0tZMVKvVJ6rV1ru9SuVdrue/3XXd+13Xb3h+ACHkbcdKksTQOtsIUyYiZGna73U7Pw1gHmVzr7RDMp1l0EZDSgUpJQQRsIU/JyJE0QBhrwtrLYbxyXCNJxFREscXe53ljwDISsze43GDFFUCAuwSHKRpCq1TSOmA2cIYs46kQ0RgtjlhrCDwjMcBXCjvMFswC86yjKPBwKZZmqvvMGsWIma2XSHVojb65ZXFG8+UGC1tF+trwxcl+HEGGRDaAPkE7jHEJQLqAIUgtJkxT5YtM8dCKma2PiBWjdFfSAe9JS+ovifV+pUo6j5XPLe1mZ7PjOlFUfel8lCXVlpppZVWWmmlvfGtJPCUVlpppZVWWmmllVbanWt5I6CJCrP1DLMURASGIDCBc8V/5lHDa7QWy4JzER0wWctktYGxpngIFxPJdvg3vPb31jKzISFZECwBieM4oTZ6NY7C68byq0RYYdibWRb/4dLS0pcBaJRNi9L2b3PVav1P1uqNwHE9I4QYqkEcCOmBmbFXEhARIRqEWFleghCESqU2TmwTYa/zkfkbV34A+Xq4EuulEQButVpfPTFz4vsqldpbXdeTynFywoKQIzLC7TSjMyRJtO17jqL+f1xevPlr5ekr7TAtSWLE0QBCKigpIZUDx3GgHGedT2Zm9HtdpFmhviMkHMcdkX2stRxG/V/u9XpfQEmcvOd9roSoAvB3epC1BlprZJkmY+wQR3lcbG1B3slVdZRSBQ7H4wbLw8dKIdlay0kS2SSOLHK2vGVQRtaGrLDEbC6F4eBzURTdLGOD0rYLR4t/U4ZdAaDBHIGIiQELPk9EiWFTgeUFwSojIpMZ/VqaxZ/3mB8Q0p0VxOfjNP5sv99/iaV0TJK8BmB4wx/0eu3/AsAF0N/wuqWVVlpppZVWWmmlvQGtJPCUVlpppZVWWmmllVbanWv5DpQOOss3bnypUWs9Sa7bZ20SC3aKh1DOU8h7W/m0sQbAkFLCWobWmpMkRpal0K4GmJFl6fhrDP/WMMMIIRjMhkjE0lG9NInagyi8AuYLAFas5vNhGP/XOG5fKf60bFqUth8jAOy6tRpJWSMSXJB3DozxkKYJsjSF5wVQjtrlzRDSNMHK8gLiKIJSCq6TwXFdS0Si3+/914WbV/9vACsl1ksbt0qt9f56vfn2oFKDktJSTto5krVEbC3CsAeTZSAh17l2IqIkja9326s/AmC1xPE9b56QoilI4KCVzpgZWmdI0xRCZMhIgEjA833UVGP0ekSEJEkQ9rvDSAeOo+A4zkiFLYn7zy2tLP4USmWTez5eAOBJ5cyAyMVW6wGLhxltWGeZ1VkmKN8jW6zPyrdfjavwSKmgdQaiEYknl36yBmwtjDWWjbbRYMDaZLkvBWswJUzUA+NGFMVfmL926YsADEqSWWk7Y9hVJFpgsUhkrzIwqXV6WUqxyNZk3f7qb7qOP1MNam8zxiTxoP+fO52Vj05MTH9TteFO6ix7dnXpxnMA2mGn87tb+MO0+K+00korrbTSSiuttLvASgJPaaWVVlpppZVWWmml3dnGAKgxOXFMCjkF5grACmDJTMTMMMYWA+sEtszGaLbGWistAMgsTTnLUlhrKYmjkbLI6AWYLbM1AHHe67CZUDISUnaiaNDO4uQyC1xiy8s6TT7f6ax8GkBvw3ssrbR9WbUaTAkhGiQOtoNsrUU0GCCOBkiTBJVqFa7nb9uo1ub/396d/dp1XWti/8ZcazdnH5G0GluWfX19Hd+q5CZVSCoBUkE95CEoJMhDAuRPyGte8gcEyEM9FpAEFRTyUKkKbpCk7kUFyS03uY3LluNevpat1rIakyIpit1pdrvaOef48rD2Js+hSLWkKMbfDyBEnbP2OsTaY00tcX57jISjgxuoNmsMY+UyYowcTyahbepXj27e/G/6vn8LQ8DI9c7JLUNghyEE2sNoubNlZqibGseHBzAzTKZTjEYj7MYo5pxzvVn/b8vl0Q+hTWYBJmbh3IMYU+juSDEh5wT3IUBhMIQinBqTBWAYWdh33AUtinKEUBQwM2ZPsd5U/3usql9D4R0BJqEszoIId65gnofgeggFUuq3tefb/+Yb3HmrO+VOORrBgp362unfO0n3tmm877tt9ZmTSGZojZyn3P9m3TU/ArBUjcqHWh7BDcyvgjjy3F+KMc1DmHyla+rn18fHLz39pa/85w73el19Y7k8/imAyWTvsS+AuFJvNr8AMFetiYiIiPxuUIBHREREROSzz1bHi2vnzj15bbo3+0MY5sw0h4/hDIAX5PD3uaR7jsn6vgvleEIDrOvbcGJjYhiXNXxh2NIgHWYO9+xEXxZlBcOirjbHOadLAN5lzouqrX/crtd/DY3MkvtgNBr/QVEUj9t9zhN0bYuubYaOUykipYi92T72ZvsoiuLUsSSxOD7kajW/9bUQCi/Lkimn1Wq1+O82m/mPofCOnEYACLCZ2YOIQWwXfju9wXwvOWeslnN0XQszQ0oRj505i9FoTDOzptr8xdUrl/5HqJOJbBUW7suYN7rDSYQQYCEg54SU4qnAxO7nnOx+0vcdV4t5yinRgqEoRihCCTNkAxq6/7pNzY9w93Yr8rtYsghTGEri9JKbYkTXVrAQhnp0p3vmUGrDGhpCQM63vzYqRzjRdOfEojuMbiPhfR9jU28y3Ufbss0AI2E1wevdpv1Zu5m/ozVVPszzAoA+9e1ro8n0aYOjaZvLk8n+MynFw4ODa784e/bsl8ui/HpsujcXixvfAdAB2E99PMgeq9Xq6HVdShEREZHfHQrwiIiIiIh8thkA7/u0DiGYwSKJyt0/R3ggYSnFbDCaBbqnHGMX2raxIkUPZpOc4nanggBv/46EAyDMyGHuVhuKYp09z/umO3b4xWB2M+d42NbdD9t6/RJujwnQZoV8XA4Ao+nk3yjL0cRC+NgbtCTR9x2CBYzGY6SU0Lb1qQ3krmuRc0LOGWfOnkUIQ4jHzLBcHOfjo5vJ8/Bp/SKENJlM2vF4fNS2zbfqzfIvVO9ylzWZAMpQhs+HogDM7nvIIOdhjEs5Gr1vkMfMUG/W2GxWt7pMFUWJoijdLISurS8eHR78QwBXVcuyWzrL8YhlOfrEJ4oxomlrlEWJcjRC7Htkz6eOKYoS0+nerRuEBNbLRW6aKsMMJIYAT1mQsJbk9b6rvzE/OHh59xK9ZXpuIHMeFuDTi2HO0VJOMB/WSXe/tV5ymDF7cu0eAmVm2J5ud9x2fBbh5nTPuevaLsZoZmEEmIOeCXQwbOj5wmYzfxMKmMlHWXiL0rKnVdO2rzPlziZ5r66q7wGYu3vZ1vVzVdWdxxDeMQDV4eG73wUwBrDReigiIiLyu0MBHhERERGRR0CxZ9PtpsQG5MjpT9FZgmTOOQDbjwfnjBijY/t75+DkuXZdd8wsDy17mAE0ZmGRYlrE1B8Z8HYwm+eYDruuerauq1dPnULk49kFCM49dvbcvz3dmyF8ggBPzgn1ZgOS2Nvfh6eEvuvgfrtZDknEGIGmwmQ6HTaSzVBt1n54cD2llHYjXNJoPG4ne3vHXR+fPbhx5Z9UVXUDCj3I3Y0MYf9B9d+pqw2qzRp7sxmmezOMR2NYKE6VopkhxojF4gg5JZgZQgjY25uxLMuQYkzr5fJ/2mwWP1EdywllUZTjcEdHso8jxh5tXcMsoCgL0An66WZl48kE48kExTAeC23TcLk4zrtwRQgB4/EIFkI2oI4pv7I4PvwrDBvWqtvfbbv3ft33/VuzPW4IGwGgGUCnZc9liulWO6k7n3s5tKjcncvcnbHvYTaMoT156DBU1tn3fdc2dU/nCAXdjHRaNKAlcJSyv4VhnJGeieXDCgbut3X96vzw+nf39/cfd+9vLJfLNwBgs9kcbDabZ+9S+/32l4iIiIj8Lv1Puy6BiIiIiMhnGgHg8OrVd77w5O+9tre3P7JgZ3JO5zx7ASDErp/kHFEUI+ScmbNnAwvAMgAnUNgwAggkEg00MydZuzMCnuk+9xxXDj8IZm8D2KS+v17Xq+90XXdeb4PcJwaATz31zNdne/v/1ng8BvjxP73uOSOmHikOHXdCMYxweW+3EkPehnum0z20TcODm9dS33VDeCeEPCrLdm9vf0H35+eHN/94vV6/CW0ey73NQlF+PljA/QzxmBlSjKjrCn3fIsYedbXBZLqH6d4M0+neqZFEq+Wx19Vm+2cgxuMJR+OxpZSazWb9L27cuPK/Yuh6pS4RAgCYTCaPFUV5xiyAdHzAGnfPunH6rVGFQ2jYhs4mJ9bfEAJGozGKooSFAKdjuTzOXddyd9+EUKIoSpqhp/Na267/Yj6fv6H1V05ITLlxwIMxZ3cweyCJnKKdCu26DwNib62pgNntNfN2Vx6ees4GAHeHg8n7tnNPDivcSHfCDYwwq+B+PXXxLWicrHzE/5+rVs2LRREbAP02IH5Dl0VERERE7kYBHhERERGRR4R77Opmc8VzPpdSajx7CUOIsc9937lZbwA7ktkMJclksMIMeySNw2ZDBM1J7wh2Bqacfek5LQG7jhAuEWhi315p6/X3uq67qCsv9xEBYHbm7NdGk8k5wAD7eJvHwLApF0KBnFv0scMk7N01TGEGlOUw4iXnjOOjm6muNm7Dzl4KITTTvf2FBbxweHT0Px8f33ge2piT9zGZTB4vQvjCtobu6y3Stg1i393adE4xIsWIrm1RPPV5TCZTmBnWq4UfHx7E3eZ1CIGT6RQEsd4s/9m7ly/8AwCHJ+89ka4rmtFodIX0vwUiAbxXARuHvze89f1d+MHM4DkjxYicHWbblJjZqQ5oRVFiNBpGdeWc2XUtm7ryk5OHyrKEFSEBtomp+/nhjWvfBRCh0Jncfg5gW9fvnH3cj1EUkxRT0Tb1FABTyu6eC3K3FJNOugFhO6JtmLplu1FZhpQSQrA7nk04NLVMsXNPETASnp2WQDgNrdHW2f1iXS+v6G2Rj/of97ZdXNJlEBEREZEPQwEeEREREZFHQ3/tyoXvu3uIsZw99YUnZ+V4fBbg1N1HMIDYfpLeAAL9drMCABuQI8AyjE5nR3oCsXLPFzznQMPcgMvMOeWY3l4umr8COn0yVO43AsBj+/vTshwtST427BHfhbEwouAdm8fAsElMEhw23EASKUaAwyfoT3aA2I5o4WQ6Q1EUWC6OvNqsbod3LLR7k71lOSrfWq0Wf3J0490fAch6q+QeDADHs9kXylH5VCiKIYb2SRb3voPBMBqPkbOjaWq4++0w2rbeR+MxynIEM0Pfdzw6vJli7LnrJjGZTFmW47Jrqh8cXn/3H2EI7yiIJneo+2DFxoBMg/NeCbTd08SWu6NrG1gwjEZjxBgRU8IQfDi9Ru+UoxGKsgRI5hSxWS28a1vf3TJDh57Sg4WG2S9Uq8W3mqZ5V3Urd+q8PgZ9AxSd5zTOOREweHbcHoV14nEBcBtSPeFkYGz4/fDvJ6dtkXSQyXPuAEu7lXf7aoJoCT/yFN+AxmeJiIiIiMgDpACPiIiIiMijIS+Xy92GwVHbzW5MQzAD3MwytiOytjoQZmYlgBXJnrCnYHR3rwC2ACp6fNGd7zBgarSWZEp9+s1yefB9aONX7r9dPe2Pp7OvB7M9wvyjnMA9Axw2fQmg7zr0XQtg2DiOsT/9A4dOERxPpphMp2jqyhfHRyml5DDLBmvG4/FiPJm81dSbP7125dJ3MYR3VPvyvibF+PHpdDYbjcaf+Fx1tUHbtjhz5iyKshxGEt2h9hwcrAAAHkFJREFULEucOXMWZVmCdMyPDnNTV35iDBGne7Mi5/ju8eLwH21HHwYMjVFEbpnNZmMYZhxmaH3IsKIh54ymqUF3lKMR6A7P6Z6vCCFgMpkgbEdntV3j1WadsyfYNkxRFCVCUfQGHLdd+4Nr1648p3dI7mYzn99MT8fL5Wi87+RjMcaZgSGTTrJwErZrsWPmBjphwciCQ+r3xLMEMUyYvY0k3b0j0Jwo+44kjDYyoHLHtZQ6jc8SEREREZEHSgEeEREREZFHx+1PyWfeGCZW2JSgYxfagUUAcxpLEAWMNWAZ8BndOwPWAK6lnM7T84G710CoYTaOXfvKcnn8PQAraGNCHpC9vSc+Nx5NvgbY3j0PGjo/GE+UPOlDx4e+w3g8hYWAtqmR8933n80MBmM5GmNvb4bYd76cH23HzVmCoSlCsZyMJ2+1bfWnly+e/5cANrf+BCLvpyisLEe9mYHDzCC7ZyG+T4eenBL6rkPXNkixR1GUyDmdGgVHEnt7+xhPpnB3rJbzvFwcZ2xnxpDkZG/PiiI0q+Xif1kcHv4rreFyL/v7T+ybhbMfVB8GnmiPRuQUEfse7hkxRRhwalzWncpyhG3AjSlFVuu1931HO3E7hGApWLFx99eW8+M/B7BU7crdLBaLTfZ8APBLIIK7c4jd3Oqgs+0lZbuSdRjD3VffbUee4bUcMkBM7qzN2JNWbg/rzDCmMRps5YhvV1V1Ve+GiIiIiIg8SArwiIiIiIg8OnYzANg0zWvT2exKKIp9EA2BpcEcRufQcSHRaIBlA6+AXBtQOv3IUzqfc16RednWm2eLoph5CLNquXwOQAVtnskD9PgXnvx8GBVfAqx83zIbZlbYLshAJ7q2wWa9xnjcoBiN0HXdXV+6fQ1DEbC3t4ecky/mR7lpmmxmCUQTQlhMp9PLfYrffOfi+W9gCLeJfJh1GG1szxN8l+QTBCLuNobIQNBHgBX3qtOu74YRWmZwd+TcnQ7vgCiLEnv7+zADjo8O89HBjZRzujX5qChGmE4m6Pv+O/MrF/8ZgE7ruNyzgOkBhhIfcfRbShE5p2G82za4c+fIrJNG4xFCUdDd0dQ1m7ryO44nzFoYrzVt9RfHxzde0rsj91pzAVSpj6+RmOWc/tCZvwL3MEzPGuZnbX9j2+47vn2Q2AaCb8/O2o3c4u111uneg7kBjDDSaD1gPcEJgAbEUUr5txhCZtD6KiIiIiIiD4oCPCIiIiIij6Cqml85+7lzvwlF8QQMLQAS3HZ6sBbkEYBzZjyG2TXA/qYzj3KMb7R99zyZao/xUl3XL2MYs2IYRgcB2pSQB4MAcObs2b9RhPAlgOGeRw5NRUCCuy4jKSe0bYuck7VthnXtXTePd+EdM8NkuocQAleLuTd1lc2QSDbBwmI0Hl92928dH1z9M6jrlHx4BoBnJo89URSjc9sRhnePMRB2Z0ZiV7MhBJBDKC17vjVSyO7MARGY7u1jMpmiqjY+Pz5IKUXeCraRnE4nBd1fnh8e/g8NcFW1LO/HSy8AjD7wOHfknBGKAiARY4S7Yxd+eD+hKDAaTQAAse+5Wa9yzmk7yYi7Wk9mtswp/fzmtaN/BQXP5P31i/X8Nwwhd11TMPsfkV4ClkGWtntYGBbkjG0GeIhB3q2mdkVMwpFJ1k62MBBAS7AzwAzmBCunX/XYXoDGbIqIiIiIyAOmAI+IiIiIyKNlt2GwjCm9Vo7H/y6GSRfZwHoIPuAyzOYApwQ6kn1O/UsxdnXXp7c2y6MfYvgE8e5crssqD9hus2uyN5l+FRbO8QO6P7iTOScECwghoO86pNjjRHDh7jcISTPDaDxGUZbcrFe5qtaZQAbRmNmiKMvLJL91dHj1T6uqunnHvSXyPivwMKflsXOf+3pZlJ8jP3D9PFXnbVujqWtMpnsoiwJd197urXaXH1WWIzz22GPIKXF+eJD6rjsV3hmNRlaORzc2m9U/ns9vPgdtLMsHmIbJBLDpBx0XU0RTVwihgJkhxfiBwZ2dsihRFAXpjrraeNe2bqEATo3csg7E+abafLNtF5dVu/IB/PL5N54H8PIXv/h7s/F0/z+CcTbk15FhKIYFd9d959Rzs+H0SsthBJfZMD/Lo7uvzSyCnMNsTeMeaE+RSDBbMueLGp8lIiIiIiKfBgV4REREREQePQbAc9+94XvTeWFhBvI6gl3ffnK4Y441GWozjJu2euXo5rXnMHy6vQHQ6hLKQ7JfjEZfDrCpf8A+rXvmZr2CmWE8nqBtG/iw+XuPuAN230NRFBiNRmyqTV6vFtmd2YCWxjUsXPYUv7VaLHbhHW0ay4cXAgFgPJl8xYJNhxZRd6/HbWHd+h5JtE2DzXqJuqpQFAVyTu/turN7vQGz2T7K0Rjzo5u5qtZ+8tjtvdHErvuT61ff+b8+4N4QAQAU08ljoQjTD0rjpBjRtQ0Ag4WAlNJHuE2G+6TvO242KwccZsXJH0kzLrqu++7BjSvPqXblQz779gDooZjCYKTtQjvb5ZYGws3ohNk9e6PRCRi3UeBEssbwK9JwDGJtwNM0BAM6ggcp9W8CWJx81hAREREREXkQFOAREREREXlEte3m7dljjz2PUfkEAysjM51F9LRs1/NnzcazEDA7Orr5HIBKV0wetnNPP32uDMXTBMd3fo8c9tQsDHu4MUY2Te2eM4qiMJLvu7m767xjIWA0HrPvurxeLbM73Yw9aZXR3s2x/3bT3/yTqsIBFN6Rj2Y3/2dSlKNnYFYaEO/dTep0zeacEftuexpHjPme4R1g6L4z299HXa3zYn6c6b6bEAMALMsy0f37y8XBPwGwUT3LhytiTIwcv1+tkERKCSkmEESwAOfdm00N4+AA3vF9d0e1WeeubXw0HpN+8n4w95xfWy2PvwlgrdqVj6AwYgyiNGMJGDB0QjMATrNkoANDRx6SHFboYboWADrhNgTeCfdE58rhrZn1Rl7tY/frshz9XTN8mbCNZ1xt2/Q2cOvnqFZFREREROSBUYBHREREROTRQwBomuYoJr9YjDAzMnd9/WbKXrV9c7FaLF4BEDBsNGScGBugyycPS9ps6pTT8QiTZGC4XdBmoBfubuYGmCHF3j378PH4lAqz4ZP2d70hTrR1KMuCKcZcbVbunmmGHkRlhqOU0g/mx5t/ASi8I5/IflmMnrEP6BhC7CZubTuYxIgYb3fcuXd4Z7A324e7+/HRYYqx54njaSG4wV6vq8U/Xq1W51XP8iEYAAYPBWDv+/eBdEdOkdmdQzrC73YuAEAIBXLO7zlH3zVebdZOp7t7cufoxOuaPuWf9X1/Huq8Ix9NMLNyeMa1k+seSctmzKA5hr/zdt5KUpLg7nnBfJv3iSQ2Tp8DlkGus+fzXWzfGJWjfw8wGrEg48W+X1/XpRcRERERkU+DAjwiIiIiIo+uNrb1ZSvsSfbpys2bV34AYInbmxknd9y0sSsPXVVV89h2706nsxYwh9GMCAZadljsu2EchhWIMYLYfnJ++HT9XQM8J8M7IQR69tzUm5xSoplFgA1gK/f8Ytes/2+gvgaFHeQTOHfuC58ryuILH3wkra42lnPGeDJB29Zwzx/8KhDj0Rjj8YSL+VFu6g1Ph33MDbze9s0/nR8d/VD1LB+D4Y7gDEl0bTvkHOjbkVnvX1YhBIQQkPOp8Vp0z2zbOsfY0wJSTrnD8HeQ2zYo/m7u6+cAJNWvfESTEMI+DLtcju8WTjMmEsmAwoCeQAJ4hrCC7k6ShkAYYEa624bgDTo3BhaEHcTc/5YxXvIplwGoCRzlmC5g6BSl52kREREREXngFOAREREREXmEzecHv8L84DcYRmS1uiLyGUUMm7R92zXvnMHjRyHYJKe878QUBnPP3tR1EWOPUAzdSm4zbs8RTp30RHgHID0n7/ou55RgZolEa4aNwy/0bfsv67p+Bdoslk9o7+xjT4QQHqcZjfcuJc+Oqtqwa2oryvKOer131xGDYTKZom3qvF4t7kj8mMOwiTF9c3508//E6Q5rIh+bZ0fbVMgpwsyQcyLJbLfTY+HOWivKEhZ2k+VuL/d93+W2aXxYma03sKVhbziHZc/pxaqqXtVVl4/BCIwJFNvKowFGWAYRYWxJGgxOYkpYhoMAswEZRgtmBYkEcOWerwNOmhlzvtZV6Xzfd8f7Z3wNFBv3fK1tq4vQ+CwREREREfmUKMAjIiIiIvJoq7e/RB4JzaZ9vT1Xf78sy0mK6Y+y+98IMGTP6Puu7PvOcOdoIQO3s4juek7S6Z49xZTcM2CWQHQAKhDXcp/+cr1e/L9Q2EHug2kR9kMIe8Z7p3fMDCknzyk6AOSU7pyZdc86LMsSTvfVYp5zzjg1OssQ3f1C326+CWAObSjLh8dhvYw9yTiMEaIbueuKYylG6/sOIQS4O2CWt33QMAw7tJMhSguhAP30eC3P2fvY5223KRpQ09iDZsOtwZWn+BMARyf/XCIfxmw2G5thbERPWMQQ6KEZE2g9YA3ATFgxPDpgD+CEjs6Z10UoZjDsEYjO/E7s+58EC/+6BUxy9rf7fn0VQEo53xwX5Q3mdL7v+6u68iIiIiIi8mlRgEdERERE5NGnDVx5FBAA3nnnjVc3m9V/bxZ8Mhv9F9PJ7L9GCGOQ0T05zIp7vNjtxBit291MCM/ZY+wjSQMsG9gTVpvhKEf/Wduuv41h/IXuFfnEwqh8DLDJ3WppyJkNeYecEnP2tJ0DZ0YO4YfhgF1XqtOLuRksBK/Wq9T33enRWWYZ4IY5/6iqqhf1TsjHsWo3B097PgD4OMneDAYYmL3MOU1SzmYnQzm2rXPeet649c+c0jCV6MQdkHJOnt0BFGbWk1wZbEwM9e/Z367r7q9P3ANak+XDP0iQ5VAz7MzgpGUATsABtoB1BuuMMBoaM+yTDA5fw7lkwIjABGDDlF6PKV6cjKd/SMdhjP0bADYAAlO+ypKXeo8anyUiIiIiIp8qBXhERERERB592lCQR0k7n1+7DADT/rFfPfH4014WxeeGT9Cf6u5wtzonADs5isjdPaXUA+zNrACYQTRmWHr2XzdN9Wdt216CNorlviy1hnI8/aKZTYdQGYkTraH6tkNKPYqiRNe1Q/+HIb8D2HtHEN3th/Rdm9u2Od3WBOYG9u640HXdXwFYqKbl45jf2BzmP8gXg9mTDnYp5zFJpNRP3X28XWPv9fLb7aBI5pxOlbQPbn2RQGPAEcHfA1DArE/Mz8dY/1bvhHycZ92maQ7OdPHXxaz8+wY4jBFEANAZ0BJsYXaNZAbxDACC1sB94eBvCyCbYULnvE/98221emFUjv4WYKuU2rd3PyfG9kXADpnjRV16ERERERH5NCnAIyIiIiIiIp+2AIBtSpfd8w2U5deHjbf3CzcYMewZ395A9uwpxuieOzO0xPA9g61BXEqx+3+aZv3C7nBddvlkhtKLXVyQ3hdWzAi4EQ6AIELX1cV6tYTZ0LbkVhDCbgXQ7hlS2wYivO+6fGeAwgyJtLXn+JOqWv5K74V8fNW63my+DwtXAU990/xRTPn3CO/cfR/E3q2uO3eU6J1fcPdTk+HcPYE5AxxhuDeOYVgY8DdhZiSPc+p/DKCCAmjy8XQMaGDWkaxgw2hBwnqAHWgbgscgaWZnadwMYzb9Eh1XWOIpAh3dL3d1/8sY4yGZj+C80rbtje3PyG3bvtO27Tu63CIiIiIi8mlTgEdEREREREQ+bUOYoW2v09NrwOTv4YM6kxhI0nfHke4p584992ZoSZsP6R2OAN7oY//95fL4ewB6aKNY7qPjgyu/PHPmzJ+NJ3tfBoCiCHtAmJA82/fxazn73QMQw3ytu98QWzH2eSjzU8WfSXQEL3Wp/T7UfUc+/roLAM1vfv3L/wPACIB98Ut/8F+Np9PfAxlBRAB791iEHfcY/Xarhj337swARjDLJC/T2YYQ9gHQPf8mtu3zeivkExVyiod0P7IQzhkZAawNJMxqAzbJ84XUx5uTyXQG2pcJ3iTxVszxQohgsOnnU4ovV9X8bQDsmv7ZnDHfPi/cfuo4fd+IiIiIiIh8KhTgERERERERkU/bbhM49n3/wniy18BCYRjmEZ080AAnEAzMQ4gHASDcvc85rQFmAg2MV+i8CQvPZKZXmqr7NoBjKOgg97dusVwuL7/8wnP/LbBfnHli8rXHzz71nxWj0ZMgnnDPTwGcbTtG3fli3i35sBsJ557oOb93dJaxJ2zJ6M/Vq9ULehvkPtTxavcv7jnT/RkYMmCTu4XPDDzdamdbt2aw3ZJN95yzdwAKAGbgOuX0ZhHCVwHsgWxSyj/tuu7yyftJ5CMwAGxSe2WKM8cGPA2gBayBMRFoDVjmtjufmLupTSOJK+7pch+7V/pm81rYPzcOZb6e+vRLABsAqOvlL++13ouIiIiIiHzaFOARERERERGRh2HYiOvqV2azM4dFGb4EIJ06gkw0S0YWMCQQJFkOo7NSTefcgGRAnd1/1XTVN8Zh9JWcea3v12/tzqJLLfeZAzgCKsQ6T9J+/CMAf5uAmWEfZn6P1+3GaL0nx0OSOaV855fNEAFr4biUUv0sgAMolCb3Z/01ACTYGTADLMDuUViEwxhuhXVI3jkRzuk9maMZShIg8a6n9HYYT/59A0onr+fY/ARAVg3LJzEaEpK9AUs39Aa8s12XzzLzoG3Xb+RcdGm6d6Wwoo999+ry+OAbADZFUaxiSm+lzl88cS/oWUFERERERD4zFOARERERERGRh4EA0G42F/LZp94uyvIrGMI43DbiIQyRYEtYAOgGa4hsOWW6p5UBVx28CUfTNc13m2r9XAP8AtoclgcvAGDbtnPP3qC0f82AjicTDe9h7wnw7LrvZE+eT3ffoZlFEr0ZVjnHX6xWq1/qssv9XH8BkCkvCDpopRn87gebG2mnome3OvAMdewpN6AlGAoYEnN+NZP1yOwZAE7PL1VV9bIuvXxSi8Xiyt7+4xc4Hj1ltGMS10mOLGCUPF5cLpcXZrPZzMmjHLsbXVN9D8AcADabzevA5vW73AsiIiIiIiKfCQrwiIiIiIiIyMN0lD3/FsB/CAAkM8x2nXhaAHMYYLQRDNeYfJ49zcywIflG37TfJuOmqja7jWGHNuTkwdsFHTYpxbdG40m2O0YMvYfdo7kJnZ7S7nwEADNLJFozdIS/k2L8EYDDk8eI3CcEjbB7lS0cxgieDJ45d4UKAO45Zc8Vh7MVBs77vvt5UYSzgD1Jcp1i/wMMHaRUw/JJrTPTYszxFQI3+745z5y78Wz2d9qu+S2AVV3XeTRb/6Bdx3nXVRdOl7RqUEREREREPrsU4BEREREREZGHYdeJpM+pe5WcNmY2dB0BWxs2lRsYr7j7TRie8cyX+rZZwsK/A+Oq67vn1uv5sxiCPifPK/JpMADMMb1JsAZtzwxO4J5BHpJuZmH7ewKA5+yenRi67vQAnUQ0YwRt5e4vpdS+ePJn6tLL/eJmiYZspwt7m8WBAcwkEmAj29YtPXNbxsM5PDckNwaeJWDu/nbTbP56b//Mfwpw5PQ3m6b/mWpY7sNzAwAk7+PrucxnYuoutfXqlTDe+3yZ4rXc1b/dHrdZHh7+8n3OISIiIiIi8pmkAI+IiIiIiIg8LAaAXcyv7mW/WYxGT5DeAbYEmQDUKedfrTfzb0yLva+k1L9b16vrk8mZt3KOB+796zgd3hH51Ou3Tc3bMz9zHIrw+8DdRxCdMAQjtuEd0plzcoKEWQZYEXYT4IiwPRBX+7b7UdM010++XuR+IdEaEAHaieYkHEYXAgCSGTI4fJ8k3d2Lsix2NezZ1zaMO3zKDDGTz8cYL+6H4nEza3LKP4+xfkNXW+7TuusR6Zr19cWD61e/DWC5v5+eSG11Yb1eX7lzjdYlExERERGRR4kCPCIiIiIiIvKwEABSuznvZ86cL1juG1ERuErgJtybrlp/d318/Nwa+MX2Nd513bsAemhjTj4D9dus11fy2SevFkX5B7jdWer9XnOrbj3nnN17mMHIHrCle/6Oe1oV5fg/pudXNrn7BYZgkDaj5YHV8d0Y4IR1RjiMQ2DH82561jA+K3ty5ndJXjezr9L9MKb2hwBqgGu6v5D7/nsAKtWw3K967avqhpfdcwCOAbCqqpsAbn7Y2hYREREREfmsUoBHREREREREHqqu666nnF8ajfgVwJZ0f6Oq198iUrU4Onx5e5jj9mZcp6smnyHHzPkSgL93rwN2I4lglkgWAALpzJ4jwAo0gyGSvNy3mz/fbDYvnT37+C/d4xpNc2N7Gm1Gy31n5iSYbJs7s5N1RmYYWgCBsGAks2c32C6/Q/fc5pReyNlvjMbjv+uZr8W2fQFAV2+6fz4axR9UVf61rrTcT03TXH3vMqt1UkREREREHn0K8IiIiIiIiMjDsttoa72PL/p49ocwzru+fm5+eP37OD0eS5ty8lmt3zrl9NsxmXephpNsmEfUm9EBOIFgwMRzTsy5B3Ed9AMgPOkeX9xsNq8CWKxW87+EOpbIg5cNlk6UNW8XuLUga8DOgjBnTp49FUVRAAjuzpzzvI/xF4EcgaNjz/mnXdddAcC+X7/V93hL67h8iuuxiIiIiIjII00BHhEREREREXmYDAA3qfmJNWX21B80zfp1nA7viHym6zd7Ok+yAcLEjM6TY7TIbIaKsJsGjAz8qnsucvaKYOvOV7qm/uOyLH4/Z7+AYSSMuknIp4JADaAHtuEzwmFWGOA01gBaEk8ZGHN2Jz1ZGE1BlJ5z9JwueGx/RbOYeiv7Pv8MQMLpUXKqYxEREREREZEPQQEeEREREREReZgIAN1yebHD8iqAHtrslUeHAWDq4iXucxkCvwjADSDITANg6Alb5r7/Tsq+Gk3K/5LOp5z5KmEx9d1Pqmr5PQBh+0v1L5+amPKG7jEUBYZmUaCBHII8uE7njRDwVYIH2X0O4gmCjTNP3VPMnl6s6/o8gBVQvYFh3CFUxyIiIiIiIiIfnQI8IiIiIiIi8llAAJ0ugzyCdYu+r6+558OiKL40fJWZsBoEYIh0f6eu1n++WBy+8MRTXyzKovz7MbZ/SVpucvvjE+dKuqTyaTJYpg0jtMhb4RvArM8xvZhzf3M8mf0H7v5SU9d/PRqP/pO+bX5C8DodX0h9+hmA9fZVUVdURERERERE5ONTgEdERERERERE5BPo+/6QOb2L0fhvg4gwZBDXyXwTKJ70nF5YLA5fBbCq1vN/Xk5mb1ar+bMAKgxdpwB1LJGHxIzZgESzZKBzCJ4t+1j/guRoDD/uU/vTVb385jmeiU2z/mbf928C2MfQcUe1KyIiIiIiInIfKMAjIiIiIiIiIvLJbNxxGWBLQwUAOceXq9Xyj8fTvd+POV0AcAzAuq670HXdZQzdShR8kIfK+76ic8kCnZE1zToAM+Z8qW7rX1kIMTRl2bftT9H3by37o3+KIXhm23+KiIiIiIiIyH2iAI+IiIiIiIiIyMezC+BEZ75KYmFmRySYuvYny+XR97BEABBOHEvc7rpjUIhHHqKqWlw4c+7cy0UovwbYdTpXIdgzMeWX6+XyPIBVhfkbGDrtOIDFiZerfkVERERERETuIwV4REREREREREQ+PgNAZr/k7r9OMf4AoFdV8+Pt9wkg3eO1Cj/Iw8Jt7W66rnmuHI3+Tk7p233s3iiK8b8ZY/sSgNX22Hhnvat+RURERERERO4/BXhERERERERERD6hvq9+7sY0P7zxLIbRQrsuOwo5yGdaju3Pu3b85bZefmO9Xr8J4LsA8j0OVz2LiIiIiIiIiIiIiIiIiIjIZ5YBGG//KfIoKQGcAzDSpRAREREREREREREREREREZH/v1CIR1S/IiIiIiIiIiIiIiIiIiIiIiLyoSm0IyIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLy2fL/ASbUnP3lsSb4AAAAAElFTkSuQmCC";
var BALLOON_SHEET = "data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2000" height="670" viewBox="0 0 400 134"><g fill="#fff"><path d="M50 4C73.8 4 92.5 20.7 92.5 42C92.5 68 63 86 61 100L39 100C37 86 7.5 68 7.5 42C7.5 20.7 26.2 4 50 4Z"/></g><g fill="#fff" transform="translate(100 0)"><path d="M50 4C54.6 4 58.3 20.7 58.3 42C58.3 68 52.5 86 52.1 100L56.1 100C57.2 86 73.6 68 73.6 42C73.6 20.7 63.2 4 50 4ZM50 4C45.4 4 41.7 20.7 41.7 42C41.7 68 47.5 86 47.9 100L43.9 100C42.8 86 26.4 68 26.4 42C26.4 20.7 36.8 4 50 4ZM50 4C69.8 4 85.3 20.7 85.3 42C85.3 68 60.8 86 59.1 100L60.8 100C62.8 86 91.7 68 91.7 42C91.7 20.7 73.3 4 50 4ZM50 4C30.2 4 14.7 20.7 14.7 42C14.7 68 39.2 86 40.9 100L39.2 100C37.2 86 8.3 68 8.3 42C8.3 20.7 26.7 4 50 4Z" fill-rule="evenodd"/></g><g transform="translate(200 0)"><defs><path id="e" d="M50 4C73.8 4 92.5 20.7 92.5 42C92.5 68 63 86 61 100L39 100C37 86 7.5 68 7.5 42C7.5 20.7 26.2 4 50 4Z"/><radialGradient id="l" gradientUnits="userSpaceOnUse" cx="33" cy="22" r="84"><stop offset="0" stop-color="#fff" stop-opacity=".36"/><stop offset=".28" stop-color="#fff" stop-opacity=".16"/><stop offset=".48" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#0b1730" stop-opacity=".08"/><stop offset="1" stop-color="#0b1730" stop-opacity=".50"/></radialGradient><radialGradient id="r" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="translate(50 46) scale(45 47)"><stop offset=".72" stop-color="#0b1730" stop-opacity="0"/><stop offset="1" stop-color="#0b1730" stop-opacity=".30"/></radialGradient><linearGradient id="u" gradientUnits="userSpaceOnUse" x1="0" y1="52" x2="0" y2="100"><stop offset="0" stop-color="#0b1730" stop-opacity="0"/><stop offset="1" stop-color="#0b1730" stop-opacity=".24"/></linearGradient><linearGradient id="s" gradientUnits="userSpaceOnUse" x1="0" y1="94" x2="0" y2="100"><stop offset="0" stop-color="#3b332e"/><stop offset="1" stop-color="#211d1a"/></linearGradient></defs><path d="M50 4C54.6 4 58.3 20.7 58.3 42C58.3 68 52.5 86 52.1 100M50 4C45.4 4 41.7 20.7 41.7 42C41.7 68 47.5 86 47.9 100M50 4C63.2 4 73.6 20.7 73.6 42C73.6 68 57.2 86 56.1 100M50 4C36.8 4 26.4 20.7 26.4 42C26.4 68 42.8 86 43.9 100M50 4C69.8 4 85.3 20.7 85.3 42C85.3 68 60.8 86 59.1 100M50 4C30.2 4 14.7 20.7 14.7 42C14.7 68 39.2 86 40.9 100M50 4C73.3 4 91.7 20.7 91.7 42C91.7 68 62.8 86 60.8 100M50 4C26.7 4 8.3 20.7 8.3 42C8.3 68 37.2 86 39.2 100" fill="none" stroke="#0b1730" stroke-opacity=".13" stroke-width="2.2"/><path d="M50 4C54.6 4 58.3 20.7 58.3 42C58.3 68 52.5 86 52.1 100M50 4C45.4 4 41.7 20.7 41.7 42C41.7 68 47.5 86 47.9 100M50 4C63.2 4 73.6 20.7 73.6 42C73.6 68 57.2 86 56.1 100M50 4C36.8 4 26.4 20.7 26.4 42C26.4 68 42.8 86 43.9 100M50 4C69.8 4 85.3 20.7 85.3 42C85.3 68 60.8 86 59.1 100M50 4C30.2 4 14.7 20.7 14.7 42C14.7 68 39.2 86 40.9 100M50 4C73.3 4 91.7 20.7 91.7 42C91.7 68 62.8 86 60.8 100M50 4C26.7 4 8.3 20.7 8.3 42C8.3 68 37.2 86 39.2 100" fill="none" stroke="#0b1730" stroke-opacity=".18" stroke-width=".3"/><path d="M25.5 11Q50 11.9 74.5 11M17.2 18Q50 19.2 82.8 18M11.7 26Q50 27.4 88.3 26M8.8 34Q50 35.6 91.2 34M7.9 42Q50 43.6 92.1 42M9.1 51Q50 52.5 90.9 51M12.5 60Q50 61.4 87.5 60M18 69Q50 70.2 82 69M24.9 78Q50 78.9 75.1 78M32.3 87Q50 87.7 67.7 87" fill="none" stroke="#0b1730" stroke-opacity=".07" stroke-width=".3"/><use href="#e" xlink:href="#e" fill="url(#l)"/><use href="#e" xlink:href="#e" fill="url(#r)"/><use href="#e" xlink:href="#e" fill="url(#u)"/><path d="M37.5 95.3Q37.4 98 39 100H61Q62.6 98 62.5 95.3Q50 96.39999999999999 37.5 95.3Z" fill="url(#s)"/><circle cx="50" cy="4.4" r="1.3" fill="#2a2a2a" fill-opacity=".55"/></g><g transform="translate(300 0)"><defs><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="0" y1="121" x2="0" y2="130"><stop offset="0" stop-color="#a0805a"/><stop offset="1" stop-color="#5a3f28"/></linearGradient><linearGradient id="q" gradientUnits="userSpaceOnUse" x1="44" y1="0" x2="56" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="48" y1="0" x2="52" y2="0"><stop offset="0" stop-color="#8e8e8e"/><stop offset=".5" stop-color="#5a5a5a"/><stop offset="1" stop-color="#3a3a3a"/></linearGradient></defs><ellipse cx="50" cy="100" rx="11" ry="1.7" fill="#14110f"/><path d="M39.7 99.4L46.7 116M60.3 99.4L53.3 116M45.8 99.8L47.6 116M54.2 99.8L52.4 116M46.9 118L45.4 121.6M53.1 118L54.6 121.6" fill="none" stroke="#221e1b" stroke-opacity=".55" stroke-width=".4"/><rect x="48.4" y="113.4" width="3.2" height="2.8" fill="url(#b)"/><rect x="46.4" y="116" width="7.2" height="2" fill="#2b2b2b"/><path d="M44.5 121.6H55.5L54.7 129.6H45.3Z" fill="url(#k)"/><path d="M44.5 121.6H55.5L54.7 129.6H45.3Z" fill="url(#q)"/><path d="M44.6 122.7H55.4M44.9 124.7H55.1M45 126.7H55" stroke="#000" stroke-opacity=".12" stroke-width=".4"/><rect x="45.3" y="128.3" width="9.4" height="1.3" fill="#3d2b1c"/><rect x="44.5" y="121.6" width="11" height="1" fill="#6d4c2e"/></g></svg>');
var PLANE_SHEET = "data:image/webp;base64,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";
var DEMO_HOME = '<svg class="group-image" viewBox="0 0 208 208"><style>svg.group-image{overflow:visible;--x:var(--origami-sun-x,0);--y:var(--origami-sun-y,-1);--h:var(--origami-sun-shadow,0);--l:var(--origami-sun-light,0);--ps:var(--origami-sun-path-start,90);--pl:var(--origami-sun-path,180)}.osh{opacity:calc(var(--l) * .34)}.osh g{transform:translate(calc(var(--h) * (var(--x) * -2.5px - var(--y) * 4.33px)),calc(var(--h) * (var(--x) * 4.33px - var(--y) * 2.5px)))}.scheme-dark .osh{opacity:.45}.scheme-dark .osh g{transform:translate(0,5.5px)}.oao{fill:rgba(0,0,0,.2)}.scheme-dark .oao{fill:rgba(0,0,0,.65)}.ol{fill:#e5e6e8}.or{fill:#d9d9dc}.orf{fill:#f5f5f4}.scheme-dark .ol{fill:#2d2e32}.scheme-dark .or{fill:#252629}.scheme-dark .orf{fill:#38393e}[class*=weather-snow] .orf{fill:#fff}.scheme-dark[class*=weather-snow] .orf{fill:#5a5c61}.olx,.orx{fill:#fff}.olx{opacity:calc(var(--l) * (var(--x) * -.5 - var(--y) * .87))}.orx{opacity:calc(var(--l) * (var(--x) * .87 - var(--y) * .5))}.ofx{fill:#b2c1d1;opacity:var(--l)}.ow,.owl{fill:#5f6167}.scheme-dark .ow{fill:#18191b}.scheme-dark .owl{fill:#ffb24f}.olp,.ogl,.orl{display:none}.scheme-dark .olp,.scheme-dark .ogl{display:inline;fill:#ff9b3d}.olp{opacity:.4}.orl{opacity:.2}.scheme-light[class*=-rainy] .orl,.scheme-light.weather-pouring .orl{display:inline}.org{fill:none;stroke:currentColor;stroke-opacity:.16;stroke-width:.9}.opa{stroke-opacity:.5;stroke-dasharray:var(--pl) 360;transform:rotate(calc((30 - var(--ps) - var(--pl)) * 1deg))}.odt{fill:currentColor;opacity:var(--l);transform:translate(calc(80px + var(--x) * 85.18px + var(--y) * 22.82px),calc(110px + var(--x) * 13.18px - var(--y) * 49.18px))}</style><defs><filter id="ob"><feGaussianBlur stdDeviation="4.5"/></filter><filter id="oB" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="4"/></filter><rect id="of" width="96" height="60"/></defs><g transform="matrix(.866 -.5 -.866 -.5 64.4 149)"><g class="osh" filter="url(#ob)"><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/><g><use href="#of"/></g></g></g></g></g></g></g></g></g></g></g><path class="oao" d="M-3 -3h102v66h-102z" filter="url(#ob)"/><path class="olp" d="M-16 6h16v22h-16zM10 -16h14v16h-14zM72 -16h14v16h-14z" filter="url(#oB)"/><g class="org" transform="translate(48 30)"><circle r="72"/><circle class="opa" r="72" pathLength="360"/></g></g><g class="orl"><use href="#oF1" transform="matrix(1 1.155 0 -1 0 223.6)"/><use href="#oF2" transform="matrix(1 -1.155 0 -1 0 372.4)"/></g><circle class="odt" r="2.6"/><g id="oF1"><g class="ol"><path id="oP1" d="M64.4 149 12.5 119 12.5 77 38.4 60 64.4 107Z"/></g><use class="olx" href="#oP1"/><g transform="matrix(-.866 -.5 0 -1 64.4 149)"><path class="ow" d="M10 26h7v9h-7zM36 0h9v20h-9z"/><g class="owl"><path id="oW1" d="M8 8h16v10h-16zM38 26h7v9h-7zM27 49h6v6h-6z"/></g><use class="ogl" href="#oW1" filter="url(#oB)"/></g></g><g id="oF2"><g class="or"><path id="oP2" d="M64.4 149 147.5 101 147.5 59 64.4 107Z"/></g><use class="orx" href="#oP2"/><g transform="matrix(.866 -.5 0 -1 64.4 149)"><path class="ow" d="M43 8h10v10h-10zM12 26h10v9h-10zM74 26h10v9h-10z"/><g class="owl"><path id="oW2" d="M12 8h10v10h-10zM43 26h10v9h-10zM74 8h10v10h-10z"/></g><use class="ogl" href="#oW2" filter="url(#oB)"/></g></g><g class="orf"><path id="oP3" d="M64.4 107 147.5 59 121.6 12 38.4 60Z"/></g><use class="ofx" href="#oP3"/></svg>';

// src/origami-weather.js
init_layout_presets();
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
  "sunny": { icon: "mdi:weather-sunny", precipitation: null, lightning: false, sunVisibility: 1, sunSaturation: 1, cloudDensity: 0, cloudDarkness: 0, cloudSpeed: 1, softClouds: "fair", starCount: 800, starOpacity: 1 },
  "clear-night": { icon: "mdi:weather-night", precipitation: null, lightning: false, sunVisibility: 1, sunSaturation: 1, cloudDensity: 0, cloudDarkness: 0, cloudSpeed: 0.6, softClouds: "fair", starCount: 800, starOpacity: 1 },
  "partlycloudy": { icon: "mdi:weather-partly-cloudy", precipitation: null, lightning: false, sunVisibility: 0.78, sunSaturation: 0.85, cloudDensity: 0.3, cloudDarkness: 0.2, cloudSpeed: 1, softClouds: "scattered", starCount: 450, starOpacity: 0.7 },
  "cloudy": { icon: "mdi:weather-cloudy", precipitation: null, lightning: false, sunVisibility: 0.42, sunSaturation: 0.5, cloudDensity: 0.6, cloudDarkness: 0.55, cloudSpeed: 1, softClouds: "overcast", starCount: 300, starOpacity: 0.5 },
  "windy": { icon: "mdi:weather-windy", precipitation: null, lightning: false, sunVisibility: 0.6, sunSaturation: 0.68, cloudDensity: 0.5, cloudDarkness: 0.12, cloudSpeed: 3.2, softClouds: "windy", starCount: 500, starOpacity: 0.8 },
  "windy-variant": { icon: "mdi:weather-windy-variant", precipitation: null, lightning: false, sunVisibility: 0.85, sunSaturation: 0.9, cloudDensity: 0.55, cloudDarkness: 0.18, cloudSpeed: 3.2, softClouds: "windy", starCount: 600, starOpacity: 0.8 },
  "fog": { icon: "mdi:weather-fog", precipitation: null, lightning: false, sunVisibility: 0.26, sunSaturation: 0.12, cloudDensity: 0, cloudDarkness: 0.42, cloudSpeed: 0.5, softClouds: "fog", starCount: 250, starOpacity: 0.35 },
  "rainy": { icon: "mdi:weather-rainy", precipitation: "rain", lightning: false, sunVisibility: 0.34, sunSaturation: 0.45, cloudDensity: 0.6, cloudDarkness: 0.6, cloudSpeed: 1.35, softClouds: "overcast", starCount: 0, starOpacity: 0 },
  "pouring": { icon: "mdi:weather-pouring", precipitation: "pour", lightning: false, sunVisibility: 0.2, sunSaturation: 0.3, cloudDensity: 0.77, cloudDarkness: 0.82, cloudSpeed: 1.6, softClouds: "overcast", starCount: 0, starOpacity: 0 },
  "lightning": { icon: "mdi:weather-lightning", precipitation: "storm", lightning: true, sunVisibility: 0.3, sunSaturation: 0.4, cloudDensity: 0.3, cloudDarkness: 0.72, cloudSpeed: 1.8, softClouds: "overcast", starCount: 0, starOpacity: 0 },
  "lightning-rainy": { icon: "mdi:weather-lightning-rainy", precipitation: "storm", lightning: true, sunVisibility: 0.24, sunSaturation: 0.35, cloudDensity: 0.77, cloudDarkness: 0.78, cloudSpeed: 1.8, softClouds: "overcast", starCount: 0, starOpacity: 0 },
  "snowy": { icon: "mdi:weather-snowy", precipitation: "snow", lightning: false, sunVisibility: 0.38, sunSaturation: 0.3, cloudDensity: 0.3, cloudDarkness: 0.35, cloudSpeed: 0.8, softClouds: "overcast", starCount: 600, starOpacity: 0.4 },
  "snowy-rainy": { icon: "mdi:weather-snowy-rainy", precipitation: "sleet", lightning: false, sunVisibility: 0.3, sunSaturation: 0.35, cloudDensity: 0.3, cloudDarkness: 0.6, cloudSpeed: 1.3, softClouds: "overcast", starCount: 450, starOpacity: 0.3 },
  "hail": { icon: "mdi:weather-hail", precipitation: "hail", lightning: false, sunVisibility: 0.3, sunSaturation: 0.4, cloudDensity: 0.3, cloudDarkness: 0.7, cloudSpeed: 1.5, softClouds: "overcast", starCount: 350, starOpacity: 0.45 },
  "exceptional": { icon: "mdi:weather-sunny", precipitation: null, lightning: false, sunVisibility: 1, sunSaturation: 1, cloudDensity: 0, cloudDarkness: 0, cloudSpeed: 0.6, softClouds: "fair", starCount: 800, starOpacity: 1 },
  "default": { icon: "mdi:weather-cloudy", precipitation: null, lightning: false, sunVisibility: 0.85, sunSaturation: 0.9, cloudDensity: 0.3, cloudDarkness: 0.3, cloudSpeed: 1, softClouds: "scattered", starCount: 800, starOpacity: 0.8 }
});
var _weatherTuning = (state) => WEATHER_TUNING[state] || WEATHER_TUNING.default;
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
  const _rgba = (c4, a3) => `rgba(${c4[0]},${c4[1]},${c4[2]},${a3})`;
  const _mix = (a3, b3, t3) => [Math.round(a3[0] + (b3[0] - a3[0]) * t3), Math.round(a3[1] + (b3[1] - a3[1]) * t3), Math.round(a3[2] + (b3[2] - a3[2]) * t3)];
  function _sprite(kind, schemeDark) {
    const key = `${kind}|${schemeDark ? "dark" : "light"}`;
    let c4 = _sprites.get(key);
    if (c4) return c4;
    c4 = document.createElement("canvas");
    const ctx = c4.getContext("2d");
    if (kind === "streak") {
      const W = 16, H2 = 128;
      c4.width = W;
      c4.height = H2;
      const col = schemeDark ? COLORS.rain.dark : COLORS.rain.light;
      const mid = _mix(col.core, col.head, 0.55);
      const g2 = ctx.createLinearGradient(0, 0, 0, H2);
      if (schemeDark) {
        g2.addColorStop(0, _rgba(col.core, 0));
        g2.addColorStop(0.3, _rgba(col.core, 0.16));
        g2.addColorStop(0.62, _rgba(col.core, 0.42));
        g2.addColorStop(0.86, _rgba(mid, 0.7));
        g2.addColorStop(0.965, _rgba(col.head, 1));
        g2.addColorStop(1, _rgba(col.head, 0));
      } else {
        g2.addColorStop(0, _rgba(col.core, 0));
        g2.addColorStop(0.42, _rgba(col.core, 0.14));
        g2.addColorStop(0.7, _rgba(col.core, 0.4));
        g2.addColorStop(0.88, _rgba(mid, 0.72));
        g2.addColorStop(0.965, _rgba(col.head, 0.98));
        g2.addColorStop(1, _rgba(col.head, 0));
      }
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H2);
      const hx = ctx.createLinearGradient(0, 0, W, 0);
      hx.addColorStop(0, "rgba(0,0,0,0)");
      hx.addColorStop(0.42, "rgba(0,0,0,0.55)");
      hx.addColorStop(0.5, "rgba(0,0,0,1)");
      hx.addColorStop(0.58, "rgba(0,0,0,0.55)");
      hx.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = hx;
      ctx.fillRect(0, 0, W, H2);
      ctx.globalCompositeOperation = "lighter";
      const spec = ctx.createRadialGradient(W / 2, H2 * 0.95, 0, W / 2, H2 * 0.95, W * 0.5);
      spec.addColorStop(0, _rgba(col.head, 0.9));
      spec.addColorStop(0.6, _rgba(col.head, 0.28));
      spec.addColorStop(1, _rgba(col.head, 0));
      ctx.fillStyle = spec;
      ctx.fillRect(0, H2 * 0.86, W, H2 * 0.14);
    } else if (kind === "flake") {
      const S3 = 32;
      c4.width = S3;
      c4.height = S3;
      const col = schemeDark ? COLORS.flake.dark : COLORS.flake.light;
      const g2 = ctx.createRadialGradient(S3 / 2, S3 / 2, 0, S3 / 2, S3 / 2, S3 / 2);
      g2.addColorStop(0, _rgba(col.core, 0.95));
      g2.addColorStop(0.34, _rgba(col.core, 0.88));
      g2.addColorStop(0.72, _rgba(col.edge, 0.26));
      g2.addColorStop(1, _rgba(col.edge, 0));
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, S3, S3);
    } else if (kind === "flame") {
      const S3 = 24;
      c4.width = S3;
      c4.height = S3;
      const g2 = ctx.createRadialGradient(S3 / 2, S3 / 2, 0, S3 / 2, S3 / 2, S3 / 2);
      g2.addColorStop(0, "rgba(255,245,215,1)");
      g2.addColorStop(0.35, "rgba(255,170,60,0.75)");
      g2.addColorStop(1, "rgba(255,120,30,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, S3, S3);
    } else {
      const W = 28, H2 = 34;
      c4.width = W;
      c4.height = H2;
      const col = schemeDark ? COLORS.hail.dark : COLORS.hail.light;
      const g2 = ctx.createRadialGradient(W * 0.4, H2 * 0.34, 0, W * 0.5, H2 * 0.5, H2 * 0.55);
      g2.addColorStop(0, _rgba(col.hi, 0.95));
      g2.addColorStop(0.45, _rgba(col.body, 0.85));
      g2.addColorStop(0.85, _rgba(col.body, 0.3));
      g2.addColorStop(1, _rgba(col.body, 0));
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.ellipse(W / 2, H2 / 2, W * 0.42, H2 * 0.46, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    _sprites.set(key, c4);
    return c4;
  }
  function _imgLoader(src) {
    let img = null, started = false;
    return () => {
      if (!started) {
        started = true;
        const i5 = new Image();
        i5.onload = () => {
          img = i5;
        };
        i5.src = src;
      }
      return img;
    };
  }
  const _getCloudImg = _imgLoader(CLOUD_SPRITE);
  const _getSoftImg = _imgLoader(CLOUD_SOFT);
  const _getBirdImg = _imgLoader(BIRD_SHEET);
  const _getBalloonImg = _imgLoader(BALLOON_SHEET);
  const _getPlaneImg = _imgLoader(PLANE_SHEET);
  const _sizeScale = (w2, h3) => 0.65 + 0.35 * Math.max(0.8, Math.min(1.8, Math.sqrt(w2 * h3) / 380));
  function _cloudSprite(src, top, bot, res) {
    const iw = src.naturalWidth || src.width;
    const ih = src.naturalHeight || src.height;
    if (!iw) return null;
    const cw = Math.round(iw * (res || 1)), ch = Math.round(ih * (res || 1));
    const c4 = document.createElement("canvas");
    c4.width = cw;
    c4.height = ch;
    const cx = c4.getContext("2d");
    cx.imageSmoothingEnabled = true;
    cx.imageSmoothingQuality = "high";
    cx.drawImage(src, 0, 0, cw, ch);
    const g2 = cx.createLinearGradient(0, ch * 0.12, 0, ch * 0.88);
    g2.addColorStop(0, `rgb(${top[0]},${top[1]},${top[2]})`);
    g2.addColorStop(1, `rgb(${bot[0]},${bot[1]},${bot[2]})`);
    cx.globalCompositeOperation = "multiply";
    cx.fillStyle = g2;
    cx.fillRect(0, 0, cw, ch);
    cx.globalCompositeOperation = "destination-in";
    cx.drawImage(src, 0, 0, cw, ch);
    cx.globalCompositeOperation = "source-over";
    return c4;
  }
  function _tintLift(src, top, bot, lift) {
    const solid = document.createElement("canvas");
    solid.width = src.width;
    solid.height = src.height;
    const sx = solid.getContext("2d");
    for (let i5 = 0; i5 < 16; i5++) sx.drawImage(src, 0, 0);
    const c4 = _cloudSprite(solid, top, bot, 1);
    const cx = c4.getContext("2d");
    cx.globalCompositeOperation = "screen";
    cx.fillStyle = lift;
    cx.fillRect(0, 0, c4.width, c4.height);
    cx.globalCompositeOperation = "destination-in";
    cx.drawImage(src, 0, 0);
    cx.globalCompositeOperation = "source-over";
    return c4;
  }
  function _mulberry32(seed) {
    let a3 = seed * 1e9 >>> 0 || 2654435769;
    return function() {
      a3 |= 0;
      a3 = a3 + 1831565813 | 0;
      let t3 = Math.imul(a3 ^ a3 >>> 15, 1 | a3);
      t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3;
      return ((t3 ^ t3 >>> 14) >>> 0) / 4294967296;
    };
  }
  const CLOUD_VARIANTS = 6;
  function _cloudVariantSources(img) {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const rnd = _mulberry32(0.1337);
    const out = [img];
    for (let v2 = 1; v2 < CLOUD_VARIANTS; v2++) {
      const c4 = document.createElement("canvas");
      c4.width = iw;
      c4.height = ih;
      const cx = c4.getContext("2d");
      cx.imageSmoothingEnabled = true;
      cx.imageSmoothingQuality = "high";
      const lobes = 2 + v2 % 2;
      for (let i5 = 0; i5 < lobes; i5++) {
        const sc = i5 === 0 ? 0.72 + rnd() * 0.26 : 0.36 + rnd() * 0.36;
        const lw = iw * sc;
        const lh = ih * sc * (0.78 + rnd() * 0.44);
        const dx = i5 === 0 ? (iw - lw) / 2 + (rnd() - 0.5) * iw * 0.12 : rnd() * (iw - lw);
        const dy = (ih - lh) / 2 + (rnd() - 0.5) * ih * 0.34;
        cx.save();
        cx.globalAlpha = i5 === 0 ? 1 : 0.78;
        if (rnd() < 0.5) {
          cx.translate(dx + lw, dy);
          cx.scale(-1, 1);
          cx.drawImage(img, 0, 0, lw, lh);
        } else {
          cx.drawImage(img, dx, dy, lw, lh);
        }
        cx.restore();
      }
      out.push(c4);
    }
    return out;
  }
  const CLOUD_BANDS = Object.freeze([
    { size: 90, bright: 0.88, alpha: 0.62, speed: 2e-3, count: 6, stretch: 0.2, res: 1 },
    { size: 150, bright: 0.96, alpha: 0.78, speed: 6e-3, count: 4, stretch: 0.14, res: 1 },
    { size: 250, bright: 1, alpha: 0.92, speed: 0.015, count: 2, stretch: 0.1, res: 1.5 }
  ]);
  const SOFT_BAND = CLOUD_BANDS.length;
  const SOFT_SHADE = 0.15;
  const SOFT_LAYOUTS = Object.freeze({
    fair: [
      { size: 24, alpha: 0.5, speed: -8e-4, count: 1, y: [0.24, 0.4], x: [-0.2, 1.2] },
      { size: 34, alpha: 0.65, speed: 22e-4, count: 1, y: [0.56, 0.76], x: [-0.1, 1.1] }
    ],
    scattered: [
      { size: 48, alpha: 0.85, speed: -24e-4, count: 2, y: [0.02, 0.26], x: [-0.2, 1.2] },
      { size: 100, alpha: 0.6, speed: 0.01, count: 1, y: [0.86, 0.96], front: true }
    ],
    windy: [
      { size: 48, alpha: 0.85, speed: -6e-3, count: 2, y: [0.02, 0.26], x: [-0.2, 1.2] },
      { size: 100, alpha: 0.6, speed: 0.02, count: 1, y: [0.86, 0.96], front: true }
    ],
    overcast: [
      { size: 60, alpha: 0.9, speed: -16e-4, count: 3, y: [0.02, 0.24], x: [-0.3, 1.3] },
      { size: 100, alpha: 0.72, speed: 0.01, count: 1, y: [0.86, 0.96], front: true }
    ],
    fog: [
      { size: 60, alpha: 0.55, speed: 4e-3, count: 3, y: [0.16, 0.34], x: [-0.3, 1.3] },
      { size: 80, alpha: 0.7, speed: -5e-3, count: 3, y: [0.46, 0.64], x: [-0.4, 1.4] },
      { size: 100, alpha: 0.85, speed: 7e-3, count: 2, y: [0.78, 0.94], x: [-0.2, 1.2] }
    ]
  });
  const _softLayout = (tuning) => SOFT_LAYOUTS[tuning.softClouds] || [];
  const _cloudAtlas = { img: null, soft: null, srcs: null, bands: /* @__PURE__ */ new Map() };
  function _cloudBandSprites(img, soft, state, schemeDark, backgroundRGB) {
    if (!(img.naturalWidth || img.width) || !(soft.naturalWidth || soft.width)) return null;
    const a3 = _cloudAtlas;
    const key = `${state}|${schemeDark}|${backgroundRGB}`;
    if (a3.img !== img || a3.soft !== soft) {
      a3.img = img;
      a3.soft = soft;
      a3.srcs = _cloudVariantSources(img);
      a3.bands.clear();
    }
    let bands = a3.bands.get(key);
    if (bands) return bands;
    const pal = _cloudPalette(state, schemeDark, backgroundRGB);
    const cl = (v2) => Math.max(0, Math.min(255, Math.round(v2)));
    bands = CLOUD_BANDS.map((d3) => {
      const top = pal.top.map((v2) => cl(v2 * d3.bright));
      const bot = pal.bot.map((v2) => cl(v2 * d3.bright));
      return a3.srcs.map((s4) => _cloudSprite(s4, top, bot, d3.res));
    });
    bands.push([_cloudSprite(soft, pal.top, _mix(pal.bot, pal.shadow, SOFT_SHADE), 1)]);
    if (a3.bands.size >= 4) a3.bands.clear();
    a3.bands.set(key, bands);
    return bands;
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
    const v2 = BIRD_ACTIVITY[state];
    return v2 === void 0 ? 1 : v2;
  };
  const BIRD_TIERS = Object.freeze([
    { px: [6, 12], alpha: 0.55, weight: 0.3, hz: [3, 4], glide: [0.6, 1.6] },
    { px: [16, 30], alpha: 0.78, weight: 0.48, hz: [2.5, 3.3], glide: [1, 2.6] },
    { px: [26, 38], alpha: 0.95, weight: 0.22, hz: [2, 2.7], glide: [1.4, 3.4] }
  ]);
  const BIRD_MAX_PX = 36;
  const _birdAtlas = { img: null, cells: /* @__PURE__ */ new Map() };
  function _birdCells(img, state, schemeDark, night, backgroundRGB, s4) {
    if (!(img.naturalWidth || img.width)) return null;
    const key = `${state}|${schemeDark}|${night}|${backgroundRGB}|${s4}`;
    if (_birdAtlas.img !== img) {
      _birdAtlas.img = img;
      _birdAtlas.cells.clear();
    }
    let cells = _birdAtlas.cells.get(key);
    if (cells) return cells;
    const pal = _cloudPalette(state, schemeDark, backgroundRGB);
    const spec = BIRD_SHEET_SPEC, src = spec.cell, cs = Math.min(src, Math.ceil(BIRD_MAX_PX * s4));
    const fc = spec.flapFrames * spec.sub;
    const lift = schemeDark || night ? "rgba(150,174,216,0.28)" : `rgba(${pal.top[0]},${pal.top[1]},${pal.top[2]},0.12)`;
    cells = [];
    for (let i5 = 0; i5 <= fc; i5++) {
      const c4 = document.createElement("canvas");
      c4.width = cs;
      c4.height = cs;
      const cx = c4.getContext("2d");
      cx.imageSmoothingQuality = "high";
      if (i5 === fc) {
        cx.drawImage(img, spec.glideCell * src, 0, src, src, 0, 0, cs, cs);
      } else {
        const f3 = i5 / spec.sub | 0, mixT = i5 % spec.sub / spec.sub;
        cx.globalCompositeOperation = "lighter";
        cx.globalAlpha = 1 - mixT;
        cx.drawImage(img, f3 * src, 0, src, src, 0, 0, cs, cs);
        if (mixT) {
          cx.globalAlpha = mixT;
          cx.drawImage(img, (f3 + 1) % spec.flapFrames * src, 0, src, src, 0, 0, cs, cs);
        }
        cx.globalAlpha = 1;
        cx.globalCompositeOperation = "source-over";
      }
      cells.push(_tintLift(c4, pal.top, pal.bot, lift));
    }
    if (_birdAtlas.cells.size >= 4) _birdAtlas.cells.clear();
    _birdAtlas.cells.set(key, cells);
    return cells;
  }
  function _weightedPick(tiers) {
    const r4 = Math.random();
    let acc = 0;
    for (const t3 of tiers) {
      acc += t3.weight;
      if (r4 < acc) return t3;
    }
    return tiers[1];
  }
  function _spawnBirdPass(st, w2, h3) {
    const r4 = Math.random;
    const g2 = r4();
    const n4 = Math.min(g2 < 0.22 ? 1 : g2 < 0.44 ? 2 : g2 < 0.84 ? 3 + (r4() * 3 | 0) : 6 + (r4() * 4 | 0), 12 - st.list.length);
    if (n4 <= 0) return;
    const dir = r4() < 0.5 ? -1 : 1;
    const tier = n4 >= 6 ? BIRD_TIERS[r4() < 0.5 ? 0 : 1] : _weightedPick(BIRD_TIERS);
    const slope = (r4() - 0.5) * 0.09;
    let y0 = 0.08 + r4() * 0.46;
    if (st.list.length) {
      let best = -1;
      for (let c4 = 0; c4 < 8; c4++) {
        const cand = 0.08 + r4() * 0.46;
        let nearest = Infinity;
        for (const o5 of st.list) {
          if (o5.dir !== dir) continue;
          if ((o5.dir > 0 ? o5.x : 1 - o5.x) > 0.7) continue;
          const d3 = Math.abs(o5.y0 - cand);
          if (d3 < nearest) nearest = d3;
        }
        if (nearest > best) {
          best = nearest;
          y0 = cand;
        }
      }
    }
    const cap = Math.min(BIRD_MAX_PX, h3 * 0.135);
    const pxL = Math.min(cap, _lerp(tier.px[0], tier.px[1], r4()) * _sizeScale(w2, h3));
    const spL = (0.03 + pxL / Math.max(1, w2) * 0.9) * (0.92 + r4() * 0.16);
    const latDir = r4() < 0.5 ? -1 : 1;
    const lead = n4 >= 3 && r4() < 0.6 ? 0.5 + r4() * 0.3 : 1;
    const legs = [[0, 0], [0, 0]];
    const wf = (0.08 + r4() * 0.16) * 6.2832, wp = r4() * 6.2832;
    const pass = ++st.pass;
    let trail = 0, lat = 0;
    for (let i5 = 0; i5 < n4; i5++) {
      const px = Math.min(cap, pxL * (0.88 + r4() * 0.24));
      if (i5) {
        const leg = legs[r4() < lead ? 0 : 1];
        leg[0] += px * (2 + r4() * 1.2) / Math.max(1, w2);
        leg[1] += px * (0.2 + r4() * 0.35) / Math.max(1, h3);
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
        y0: Math.max(0.05, Math.min(0.6, y0 + lat + (r4() - 0.5) * px * 0.6 / Math.max(1, h3))),
        sp: spL * (0.98 + r4() * 0.04),
        hz: _lerp(tier.hz[0], tier.hz[1], r4()),
        gl: tier.glide,
        gt: 1 + r4() * 3,
        bob: 0.035 + r4() * 0.03,
        wf: wf * (0.9 + r4() * 0.2),
        wp: wp - wf * trail / spL + (r4() - 0.5) * 0.8,
        wa: px * (0.1 + r4() * 0.14),
        ph: r4(),
        gy: 0,
        vy: 0,
        glide: 0,
        glideT: 1.2 + r4() * 3
      });
    }
  }
  function _birdsFrame(inst, ctx, w2, h3, s4, dt, t3, env, gust) {
    const st = inst.birds;
    if (!st.next) st.next = t3 + 1.5 + Math.random() * 2.5;
    if (t3 >= st.next) {
      if (st.list.length < 10) _spawnBirdPass(st, w2, h3);
      st.next = t3 + _lerp(28, 11, st.activity) * (env.night ? 1.6 : 1) * (Math.random() < 0.35 ? 2.5 + Math.random() * 1.5 : 0.75 + Math.random() * 0.5) / st.density;
    }
    if (st.list.length === 0) return;
    const img = _getBirdImg();
    const cells = img && _birdCells(img, st.state, env.schemeDark, !!env.night, env.backgroundRGB, s4);
    const spec = BIRD_SHEET_SPEC, fc = spec.flapFrames * spec.sub;
    ctx.imageSmoothingQuality = "high";
    for (let i5 = st.list.length - 1; i5 >= 0; i5--) {
      const b3 = st.list[i5];
      const speed = b3.sp * (0.9 + 0.25 * gust) * (b3.glide > 0 ? 1.05 : 1);
      b3.x += b3.dir * speed * dt;
      if (b3.dir > 0 && b3.x > 1.12 || b3.dir < 0 && b3.x < -0.12) {
        st.list.splice(i5, 1);
        continue;
      }
      const th = t3 * b3.wf + b3.wp, cw = Math.cos(th);
      if (b3.glide > 0) {
        b3.glide -= dt;
        b3.vy += (0.15 - b3.vy) * Math.min(1, dt * 2.5);
        if (b3.glide <= 0) {
          b3.glide = 0;
          b3.ph = 0.2;
          b3.glideT = b3.gt * (0.6 + Math.random() * 0.8);
        }
      } else {
        const p0 = b3.ph % 1, inc = b3.hz * (1 + 0.1 * cw + 2 * Math.max(0, -b3.vy)) * dt;
        b3.ph += inc;
        b3.vy += (-0.5 * b3.gy / b3.px - b3.vy) * Math.min(1, dt * 2.5);
        b3.glideT -= dt;
        if (b3.glideT <= 0 && p0 <= 0.2 && p0 + inc > 0.2) {
          b3.glide = _lerp(b3.gl[0], b3.gl[1], Math.random());
          for (const o5 of st.list) if (o5 !== b3 && o5.pass === b3.pass && !o5.glide && o5.glideT > 0.4 && Math.random() < 0.7) o5.glideT = 0.3 + Math.random() * 1.2;
        }
      }
      b3.gy = Math.min(b3.px * 0.5, Math.max(-b3.px * 0.15, b3.gy + b3.vy * b3.px * dt));
      if (!cells) continue;
      const traveled = b3.dir > 0 ? b3.x + 0.1 : 1.1 - b3.x;
      const beat = b3.glide > 0 ? 0 : Math.cos(b3.ph * 6.2832);
      const py = (b3.y0 + b3.slope * traveled) * h3 + b3.gy + Math.sin(th) * b3.wa + beat * b3.px * b3.bob;
      const rot = b3.slope * 1.1 + cw * b3.wa * b3.wf / (speed * w2) * 0.6 + b3.vy * 0.3 + beat * 0.03;
      ctx.setTransform(s4, 0, 0, s4, b3.x * w2 * s4, py * s4);
      ctx.scale(b3.dir, 1);
      ctx.rotate(rot);
      ctx.globalAlpha = b3.alpha;
      ctx.drawImage(cells[b3.glide > 0 ? fc : b3.ph % 1 * fc | 0], -b3.px * spec.ax, -b3.px * spec.ay, b3.px, b3.px);
    }
    ctx.setTransform(s4, 0, 0, s4, 0, 0);
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
  function _balloonSprite(img, b3, state, schemeDark, backgroundRGB) {
    if (b3.sprite && b3.schemeDark === schemeDark && b3.state === state && b3.bg === backgroundRGB) return b3.sprite;
    const iw = img.naturalWidth || img.width;
    if (!iw) return null;
    const spec = BALLOON_SHEET_SPEC;
    const cw = iw / spec.cells, ch = img.naturalHeight || img.height;
    const w2 = Math.round(b3.px * spec.cellW / spec.cellH), h3 = Math.round(b3.px);
    const cell = (i5) => {
      const c4 = document.createElement("canvas");
      c4.width = w2;
      c4.height = h3;
      const cx2 = c4.getContext("2d");
      cx2.imageSmoothingQuality = "high";
      cx2.drawImage(img, i5 * cw, 0, cw, ch, 0, 0, w2, h3);
      return c4;
    };
    const pal = BALLOON_PALETTES[b3.pal];
    const tint = (i5, c4) => _cloudSprite(cell(i5), _mix(c4, [255, 255, 255], 0.06), _mix(c4, [0, 0, 0], 0.2), 1);
    const colors = tint(0, pal[b3.swap ? 1 : 0]);
    const cx = colors.getContext("2d");
    cx.drawImage(tint(1, pal[b3.swap ? 0 : 1]), 0, 0);
    b3.glow = schemeDark ? _cloudSprite(colors, [40, 20, 10], [255, 214, 140], 1) : null;
    cx.globalCompositeOperation = "source-atop";
    cx.drawImage(cell(2), 0, 0);
    cx.globalCompositeOperation = "source-over";
    cx.drawImage(cell(3), 0, 0);
    const sky = _cloudPalette(state, schemeDark, backgroundRGB);
    const dim = schemeDark ? _mix(sky.top, [0, 0, 0], 0.45) : sky.top;
    b3.sprite = _cloudSprite(colors, dim, dim, 1);
    b3.schemeDark = schemeDark;
    b3.state = state;
    b3.bg = backgroundRGB;
    return b3.sprite;
  }
  function _spawnBalloons(st, w2, h3, s4, t3) {
    const r4 = Math.random;
    const rise = r4() < 0.3, dir = r4() < 0.5 ? -1 : 1;
    const n4 = r4() < 0.3 ? 2 + (r4() < 0.3 ? 1 : 0) : 1;
    const vx = rise ? (r4() - 0.5) * 6e-3 : dir * 1.16 / (90 + r4() * 60);
    const x0 = rise ? 0.15 + r4() * 0.7 : dir > 0 ? -0.08 : 1.08, y0 = 0.14 + r4() * 0.3;
    for (let i5 = 0; i5 < n4; i5++) {
      const k2 = 0.6 + r4() * 0.4;
      st.list.push({
        px: Math.round(_lerp(28, 42, r4()) * _sizeScale(w2, h3) * s4 * k2),
        alpha: 0.62 + 0.28 * k2,
        ph: r4() * 6.2832,
        pal: r4() * BALLOON_PALETTES.length | 0,
        swap: r4() < 0.3,
        x: x0 + (rise ? (r4() - 0.5) * 0.12 * i5 : -dir * (0.15 + r4() * 0.2) * i5),
        y: rise ? 1.2 + (0.16 + r4() * 0.2) * i5 : y0 + (r4() - 0.5) * 0.24 * i5,
        vx,
        vy: rise ? -1.4 / (40 + r4() * 30) : vx * (r4() - 0.5) * 0.3,
        burnT: -1,
        burnLen: 0,
        burnNext: t3 + 2 + r4() * 6,
        sprite: null
      });
    }
  }
  function _balloonFrame(inst, ctx, w2, h3, s4, dt, t3, env) {
    const st = inst.balloon;
    if (!st.list.length) {
      if (!st.next) st.next = t3 + (st.count ? 300 / st.activity / st.density * (0.7 + Math.random() * 0.6) : 8 + Math.random() * 30);
      if (t3 < st.next) return;
      _spawnBalloons(st, w2, h3, s4, t3);
      st.next = 0;
      st.count++;
    }
    const img = _getBalloonImg();
    const spec = BALLOON_SHEET_SPEC;
    for (let i5 = st.list.length - 1; i5 >= 0; i5--) {
      const b3 = st.list[i5];
      b3.x += b3.vx * dt;
      b3.y += b3.vy * dt;
      if (b3.vx > 0 && b3.x > 1.1 || b3.vx < 0 && b3.x < -0.1 || b3.vy < 0 && b3.y < -0.2 || b3.vy > 0 && b3.y > 1.2) {
        st.list.splice(i5, 1);
        continue;
      }
      const sprite = img && _balloonSprite(img, b3, st.state, env.schemeDark, env.backgroundRGB);
      if (!sprite) continue;
      let burn = 0;
      if (b3.burnT >= 0) {
        const age = t3 - b3.burnT;
        burn = age < b3.burnLen ? Math.min(1, age / 0.25) : Math.max(0, 1 - (age - b3.burnLen) / 0.9);
        if (age >= b3.burnLen + 0.9) {
          b3.burnT = -1;
          b3.burnNext = t3 + 6 + Math.random() * 14;
        }
      } else if (t3 >= b3.burnNext) {
        b3.burnT = t3;
        b3.burnLen = 1.2 + Math.random() * 1.8;
      }
      const sw = sprite.width / s4, sh = sprite.height / s4;
      const ox = -sw * spec.ax, oy = -sh * spec.ay;
      ctx.setTransform(s4, 0, 0, s4, b3.x * w2 * s4, (b3.y * h3 + Math.sin(t3 * 0.35 + b3.ph) * sh * 0.012) * s4);
      ctx.rotate(Math.sin(t3 * 0.22 + b3.ph) * 0.018);
      ctx.globalAlpha = b3.alpha;
      ctx.drawImage(sprite, ox, oy, sw, sh);
      if (b3.glow) {
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = b3.alpha * (0.3 + 0.7 * burn);
        ctx.drawImage(b3.glow, ox, oy, sw, sh);
        if (burn > 0.02) {
          const fd = sh * 0.16;
          ctx.globalAlpha = burn;
          ctx.drawImage(_sprite("flame", true), -fd / 2, oy + sh * 0.855 - fd / 2, fd, fd);
        }
        ctx.globalCompositeOperation = "source-over";
      }
    }
    ctx.setTransform(s4, 0, 0, s4, 0, 0);
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
    const v2 = PLANE_ACTIVITY[state];
    return v2 === void 0 ? 1 : v2;
  };
  const PLANE_MAX_PX = 15, PLANE_TRAIL = 1.2, PLANE_VAPOR = [[1, 1.3, 0.16, 0.3], [0.7, 0.55, 0.3, 0.12], [0.4, 0.2, 0.85, 0.03]];
  const _planeAtlas = { img: null, cells: /* @__PURE__ */ new Map() };
  function _planeCells(img, state, schemeDark, backgroundRGB, s4) {
    if (!(img.naturalWidth || img.width)) return null;
    const key = `${state}|${schemeDark}|${backgroundRGB}|${s4}`;
    if (_planeAtlas.img !== img) {
      _planeAtlas.img = img;
      _planeAtlas.cells.clear();
    }
    let cells = _planeAtlas.cells.get(key);
    if (cells) return cells;
    const spec = PLANE_SHEET_SPEC, pal = _cloudPalette(state, schemeDark, backgroundRGB);
    const ch = Math.min(spec.cellH, Math.ceil(PLANE_MAX_PX * s4)), cw = Math.round(ch * spec.cellW / spec.cellH);
    const cell = (i5) => {
      const c4 = document.createElement("canvas");
      c4.width = cw;
      c4.height = ch;
      const cx = c4.getContext("2d");
      cx.imageSmoothingQuality = "high";
      cx.drawImage(img, i5 * spec.cellW, 0, spec.cellW, spec.cellH, 0, 0, cw, ch);
      return c4;
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
    return cells;
  }
  function _spawnPlane(st, w2, h3) {
    const r4 = Math.random, k2 = r4(), dir = r4() < 0.5 ? -1 : 1;
    const slope = (r4() - 0.5) * 0.06 - (r4() < 0.3 ? 0.18 : 0);
    st.list.push({
      dir,
      slope,
      alpha: _lerp(0.78, 0.95, k2),
      px: _lerp(7, 11, k2) * _sizeScale(w2, h3),
      rot: Math.atan2(slope * h3, w2),
      d: 0,
      y0: _lerp(0.06, 0.42, r4()) - slope * 0.65,
      sp: 1.3 / _lerp(45, 22, k2),
      ph: r4() * 3
    });
  }
  function _planesFrame(inst, ctx, w2, h3, s4, dt, t3, env) {
    const st = inst.planes;
    if (!st.next) st.next = t3 + 8 + Math.random() * 20;
    if (t3 >= st.next) {
      if (st.list.filter((p3) => p3.d < 1.3).length < 2) _spawnPlane(st, w2, h3);
      st.next = t3 + _lerp(140, 50, st.activity) * (0.6 + Math.random() * 0.9) / st.density;
    }
    for (let i5 = st.list.length - 1; i5 >= 0; i5--) {
      const p3 = st.list[i5];
      p3.d += p3.sp * dt;
      p3.ph += dt;
      if (p3.d > 1.3 + PLANE_TRAIL) st.list.splice(i5, 1);
    }
    if (!st.list.length) return;
    const img = _getPlaneImg();
    const cells = img && _planeCells(img, st.state, env.schemeDark, env.backgroundRGB, s4);
    if (!cells) return;
    const spec = PLANE_SHEET_SPEC, lit = env.schemeDark || !!env.night, tc = cells.trail;
    const fl = (tau) => tau < 0 ? 0 : tau < dt ? 1 : Math.max(0, 1 - (tau - dt) / 0.08);
    ctx.imageSmoothingQuality = "high";
    for (const p3 of st.list) {
      const ph = p3.px, pw = ph * spec.cellW / spec.cellH, x0 = -pw * 0.3, len = w2 * PLANE_TRAIL;
      ctx.setTransform(s4, 0, 0, s4, (p3.dir > 0 ? p3.d - 0.15 : 1.15 - p3.d) * w2 * s4, (p3.y0 + p3.slope * p3.d) * h3 * s4);
      ctx.scale(p3.dir, 1);
      ctx.rotate(p3.rot);
      ctx.globalAlpha = env.schemeDark ? 0.8 : 0.65;
      for (const [f3, lw, a3, k2] of PLANE_VAPOR) {
        const g2 = ctx.createLinearGradient(x0, 0, x0 - len * f3, 0);
        g2.addColorStop(0, _rgba(tc, 0));
        g2.addColorStop(k2, _rgba(tc, a3));
        g2.addColorStop(1, _rgba(tc, 0));
        ctx.strokeStyle = g2;
        ctx.lineWidth = ph * lw;
        ctx.beginPath();
        ctx.moveTo(x0, 0);
        ctx.lineTo(x0 - len * f3, 0);
        ctx.stroke();
      }
      const ox = -pw * spec.ax, oy = -ph * spec.ay;
      ctx.globalAlpha = p3.alpha;
      ctx.drawImage(cells.body, ox, oy, pw, ph);
      if (lit) {
        const c4 = p3.ph % 1.5, strobe = Math.max(fl(c4), fl(c4 - 0.15)), beacon = c4 > 0.75 && c4 < 1 ? Math.sin((c4 - 0.75) / 0.25 * Math.PI) : 0;
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(cells.windows, ox, oy, pw, ph);
        ctx.globalAlpha = p3.alpha * 0.85;
        ctx.drawImage(cells.nav[p3.dir > 0 ? 0 : 1], ox, oy, pw, ph);
        if (strobe > 0) {
          ctx.globalAlpha = p3.alpha * strobe;
          ctx.drawImage(cells.strobe, ox, oy, pw, ph);
        }
        if (beacon > 0) {
          ctx.globalAlpha = p3.alpha * beacon * 0.9;
          ctx.drawImage(cells.beacon, ox, oy, pw, ph);
        }
        ctx.globalCompositeOperation = "source-over";
      }
    }
    ctx.setTransform(s4, 0, 0, s4, 0, 0);
    ctx.globalAlpha = 1;
  }
  const _hasClouds = (state) => {
    const t3 = state ? _weatherTuning(state) : null;
    return !!t3 && (t3.cloudDensity > 0 || _softLayout(t3).length > 0);
  };
  const _briOf = (filter) => {
    const m2 = /brightness\(([\d.]+)\)/.exec(filter || "");
    return m2 ? parseFloat(m2[1]) : 1;
  };
  const _lumOf = (c4) => 0.2126 * c4[0] + 0.7152 * c4[1] + 0.0722 * c4[2];
  function _cloudPalette(state, schemeDark, backgroundRGB) {
    const tuning = _weatherTuning(state);
    const sf = _SKY_FILTERS[state] || _SKY_FILTERS.default;
    const bri = _briOf(schemeDark ? sf.dark : sf.light);
    const darkness = tuning.cloudDarkness;
    const bg = backgroundRGB.map((v2) => Math.max(0, Math.min(255, Math.round(v2 * bri))));
    const bgL = _lumOf(bg);
    const tint = (L2, r4, g2, b3) => {
      const t3 = Math.max(0, Math.min(255, L2));
      return [Math.round(Math.min(255, t3 * r4)), Math.round(Math.min(255, t3 * g2)), Math.round(Math.min(255, t3 * b3))];
    };
    const mix = (a3, b3, t3) => a3.map((v2, i5) => v2 + (b3[i5] - v2) * t3);
    if (schemeDark) {
      const nightBase = Math.max(0.34, Math.min(1, (bgL + 96) / 255)) * (1 - 0.22 * darkness);
      const baseL = 255 * nightBase;
      const silver = tint(baseL * 0.92, 0.86, 0.94, 1.14);
      const steel = tint(baseL * 0.74, 0.68, 0.8, 1.24);
      const blueShadow = mix(steel, [22, 40, 78], 0.34 + 0.3 * darkness).map(Math.round);
      return { top: silver.map(Math.round), bot: blueShadow, shadow: blueShadow };
    }
    const white = [255, 255, 255];
    const skyGrey = [Math.round((bg[0] + 250) / 2 * 0.97), Math.round((bg[1] + 250) / 2 * 0.98), Math.round((bg[2] + 252) / 2)];
    const slate = [92, 106, 132];
    const shadowTarget = mix(skyGrey, slate, 0.55 * darkness);
    const dark1 = (0.1 + 0.32 * darkness) * 0.55;
    const dark2 = (0.3 + 0.62 * darkness) * 0.55;
    const top = mix(white, skyGrey, dark1).map(Math.round);
    const bot = mix(white, shadowTarget, dark2).map(Math.round);
    return { top, bot, shadow: slate };
  }
  function _buildCloudField(tuning, seed) {
    const cover = Math.min(1, tuning.cloudDensity);
    const rnd = _mulberry32(seed || 1);
    const holes = [
      { x: 0.28 + rnd() * 0.18, y: 0.2 + rnd() * 0.6 },
      { x: 0.72 - rnd() * 0.18, y: 0.2 + rnd() * 0.6 }
    ];
    const inHole = (x2, y3) => holes.some((hl) => (x2 - hl.x) ** 2 + (y3 - hl.y) ** 2 < 0.09);
    const behind = [], hard = [], front = [];
    let softIndex = 0;
    const place = (bands, soft, scale) => {
      for (let band = 0; band < bands.length; band++) {
        const d3 = bands[band];
        const n4 = Math.round(d3.count * scale);
        let placed = 0, tries = 0;
        while (placed < n4 && tries < n4 * 5) {
          tries++;
          const x2 = d3.x ? d3.x[0] + (placed + rnd() * 0.6) / n4 * (d3.x[1] - d3.x[0]) : rnd();
          const y3 = d3.y ? d3.y[0] + rnd() * (d3.y[1] - d3.y[0]) : 0.12 + rnd() * 0.76;
          if (!soft && inHole(x2, y3) && rnd() < 0.95) continue;
          placed++;
          (soft ? d3.front ? front : behind : hard).push({
            band: soft ? SOFT_BAND : band,
            x: x2,
            y: y3,
            size: d3.size * (0.82 + rnd() * 0.36),
            variant: soft ? 0 : rnd() * CLOUD_VARIANTS | 0,
            flip: soft ? softIndex++ % 2 === 1 : rnd() < 0.5,
            rot: soft ? 0 : (rnd() - 0.5) * 0.1,
            stretch: soft ? 1 : 1 + (rnd() - 0.5) * 2 * d3.stretch,
            alpha: d3.alpha * (0.9 + rnd() * 0.2),
            speed: d3.speed * (0.85 + rnd() * 0.3),
            bobPh: rnd() * Math.PI * 2,
            bobAmp: 4e-3 + rnd() * 6e-3,
            bobF: 0.05 + band * 0.03
          });
        }
      }
    };
    if (cover > 0) place(CLOUD_BANDS, false, 0.55 + 0.45 * cover);
    place(_softLayout(tuning), true, 1);
    return { puffs: behind.concat(hard, front), density: tuning.cloudDensity, layout: tuning.softClouds };
  }
  const _lerp = (a3, b3, t3) => a3 + (b3 - a3) * t3;
  const _count = (t3, area) => Math.max(t3.min, Math.min(t3.max, Math.round(area / 1e4 * t3.perContainer)));
  function _buildRain(t3, area, scale) {
    const n4 = Math.max(4, Math.round(_count(t3, area) * scale));
    const arr = new Array(n4);
    for (let i5 = 0; i5 < n4; i5++) {
      const z2 = Math.pow(Math.random(), 1.35);
      arr[i5] = { z: z2, x: Math.random(), y: Math.random(), vy: _lerp(t3.vy[0], t3.vy[1], z2 * z2) * (0.92 + Math.random() * 0.16), sd: Math.random() };
    }
    arr.sort((a3, b3) => a3.z - b3.z);
    return arr;
  }
  function _buildSnow(area, scale) {
    const n4 = Math.max(4, Math.round(_count(SNOW, area) * scale));
    const arr = new Array(n4);
    let hC = 0;
    const mH = 4;
    for (let i5 = 0; i5 < n4; i5++) {
      let z2;
      if (hC < mH && Math.random() > 0.95) {
        z2 = 0.85 + Math.random() * 0.15;
        hC++;
      } else {
        z2 = Math.pow(Math.random(), 4) * 0.45;
      }
      arr[i5] = { z: z2, x: Math.random(), y: Math.random(), vy: _lerp(SNOW.vy[0], SNOW.vy[1], z2) * (0.8 + Math.random() * 0.4), swa: 4 + z2 * 35 + Math.random() * 10, swf: 0.5 + Math.random() * 1.5, ph: Math.random() * Math.PI * 2, tw: 0.5 + Math.random() * 1.5 };
    }
    arr.sort((a3, b3) => a3.z - b3.z);
    return arr;
  }
  function _buildHail(area) {
    const n4 = _count(HAIL, area);
    const arr = new Array(n4);
    let hC = 0;
    const mH = 3;
    for (let i5 = 0; i5 < n4; i5++) {
      let z2;
      if (hC < mH && Math.random() > 0.9) {
        z2 = 0.8 + Math.random() * 0.2;
        hC++;
      } else {
        z2 = Math.pow(Math.random(), 3) * 0.5;
      }
      arr[i5] = { z: z2, x: Math.random(), y: Math.random(), vy: _lerp(HAIL.vy[0], HAIL.vy[1], z2) * (0.85 + Math.random() * 0.3), sd: Math.random() };
    }
    arr.sort((a3, b3) => a3.z - b3.z);
    return arr;
  }
  const STARS = Object.freeze({
    maxRadius: 2.5,
    heroCount: 8,
    heroMaxSize: 1.8,
    heroDprCap: 1.4,
    palette: Object.freeze([[190, 210, 255], [210, 225, 255], [255, 250, 245], [255, 235, 200]])
  });
  const _starColor = (v2) => v2 < 0.15 ? STARS.palette[0] : v2 < 0.6 ? STARS.palette[1] : v2 < 0.85 ? STARS.palette[2] : STARS.palette[3];
  const METEORS = Object.freeze({
    gap: [30, 90],
    cometGap: [240, 600],
    tints: Object.freeze([[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 245, 210], [255, 245, 210], [210, 255, 225], [210, 255, 225], [255, 210, 160]]),
    cometTints: Object.freeze([[100, 200, 255], [100, 200, 255], [120, 220, 160], [230, 190, 100]])
  });
  const _rand = (r4) => r4[0] + Math.random() * (r4[1] - r4[0]);
  function _spawnStreak(comet, w2, h3) {
    const tints = comet ? METEORS.cometTints : METEORS.tints, bolide = !comet && Math.random() < 0.18;
    const sx = comet ? Math.random() < 0.5 ? -40 : w2 + 40 : Math.random() * w2, dir = Math.random() * w2 < sx ? -1 : 1;
    const spd = comet ? _rand([50, 85]) : bolide ? _rand([90, 140]) : _rand([130, 250]), ang = comet ? 0.15 : _rand([0.2, 0.65]);
    return {
      comet,
      bolide,
      rgb: tints[Math.random() * tints.length | 0],
      sx,
      sy: Math.random() * h3 * (comet ? 0.4 : 0.5),
      age: 0,
      vx: Math.cos(ang) * spd * dir,
      vy: Math.sin(ang) * spd,
      g: comet ? 0 : 13,
      tail: comet ? 170 : 1e9,
      life: comet ? (w2 + 80) / (Math.cos(ang) * spd) : bolide ? 1.3 : _rand([0.75, 1.15]),
      r: comet ? _rand([1.5, 2.5]) : bolide ? _rand([2.5, 4]) : _rand([1.5, 3])
    };
  }
  function _drawMeteors(st, ctx, w2, h3, dt, t3) {
    const m2 = st.streaks || (st.streaks = { list: [], next: t3 + _rand(METEORS.gap) * 0.5, cometNext: t3 + _rand(METEORS.cometGap) * 0.5 });
    if (t3 >= m2.next) {
      if (Math.random() < st.opacity) m2.list.push(_spawnStreak(false, w2, h3));
      m2.next = t3 + _rand(METEORS.gap);
    }
    if (t3 >= m2.cometNext) {
      m2.list.push(_spawnStreak(true, w2, h3));
      m2.cometNext = t3 + _rand(METEORS.cometGap);
    }
    ctx.lineCap = "round";
    for (let i5 = m2.list.length - 1; i5 >= 0; i5--) {
      const p3 = m2.list[i5], T2 = p3.age += dt, u3 = T2 / p3.life;
      if (u3 >= 1) {
        m2.list.splice(i5, 1);
        continue;
      }
      const x2 = p3.sx + p3.vx * T2, y3 = p3.sy + p3.vy * T2 + p3.g * T2 * T2, op = Math.min(1, (p3.comet ? 1.2 : 1) * (1 - u3)) * st.opacity;
      const d3 = Math.hypot(x2 - p3.sx, y3 - p3.sy) || 1, k2 = Math.min(1, p3.tail / d3), tx = x2 + (p3.sx - x2) * k2, ty = y3 + (p3.sy - y3) * k2;
      const cx = k2 < 1 ? (x2 + tx) / 2 : p3.sx + p3.vx * T2 / 2, cy = k2 < 1 ? (y3 + ty) / 2 : p3.sy + p3.vy * T2 / 2;
      const hs = p3.r * (p3.comet ? 1 : (0.3 + 0.7 * (1 - u3)) * (p3.bolide && u3 > 0.85 ? 1 + (u3 - 0.85) * 8 : 1));
      const tg = ctx.createLinearGradient(x2, y3, tx, ty);
      tg.addColorStop(0, _rgba(p3.rgb, op * (p3.comet ? 0.6 : 0.9)));
      tg.addColorStop(0.45, _rgba(p3.rgb, op * 0.35));
      tg.addColorStop(1, _rgba(p3.rgb, op * 0.04));
      ctx.strokeStyle = tg;
      ctx.lineWidth = hs * 0.8;
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.quadraticCurveTo(cx, cy, x2, y3);
      ctx.stroke();
      if (p3.comet) {
        const hg = ctx.createRadialGradient(x2, y3, 0, x2, y3, hs * 4);
        hg.addColorStop(0, `rgba(255,255,255,${op})`);
        hg.addColorStop(0.4, _rgba(p3.rgb, op * 0.4));
        hg.addColorStop(1, _rgba(p3.rgb, 0));
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(x2, y3, hs * 4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = _rgba(p3.rgb, op);
        ctx.beginPath();
        ctx.arc(x2, y3, hs, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  function _offscreen(w2, h3) {
    if (typeof OffscreenCanvas !== "undefined") return new OffscreenCanvas(w2, h3);
    const c4 = document.createElement("canvas");
    c4.width = w2;
    c4.height = h3;
    return c4;
  }
  function _buildStarField(count, W, H2, seed) {
    const c4 = _offscreen(W, H2);
    const ctx = c4.getContext("2d", { alpha: true });
    if (!ctx) return c4;
    const rnd = _mulberry32(seed);
    const batches = /* @__PURE__ */ new Map();
    const put = (rgb, alpha, x2, y3, r4) => {
      const qA = (alpha * 15 + 0.5 | 0) / 15;
      const key = `${rgb[0]},${rgb[1]},${rgb[2]}|${qA}`;
      let b3 = batches.get(key);
      if (!b3) {
        b3 = { rgb, alpha: qA, pts: [] };
        batches.set(key, b3);
      }
      b3.pts.push(x2, y3, r4);
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
      mwBandW = H2 * 0.18;
      mwCx = W * 0.5 + (rnd() - 0.5) * W * 0.15;
      mwCy = H2 * 0.42 + (rnd() - 0.5) * H2 * 0.12;
    }
    const mwWarp = (x2, y3, band) => {
      const bx = mwCx + mwCosA * ((x2 / W - 0.5) * W * 1.2) + mwPerpX * ((y3 / H2 - 0.5) * band);
      const by = mwCy + mwSinA * ((x2 / W - 0.5) * W * 1.2) + mwPerpY * ((y3 / H2 - 0.5) * band);
      return bx >= 0 && bx <= W && by >= 0 && by <= H2 ? [bx, by] : null;
    };
    for (let i5 = 0; i5 < tinyCount; i5++) {
      let x2 = rnd() * W, y3 = rnd() * H2;
      if (mwActive && i5 % 3 === 0) {
        const p3 = mwWarp(x2, y3, mwBandW);
        if (p3) {
          x2 = p3[0];
          y3 = p3[1];
        }
      }
      let r4 = 0.6 + rnd() * 0.6;
      if (i5 % 8 === 0) r4 *= 1.8;
      put(_starColor(rnd()), 0.35 + rnd() * 0.35, x2, y3, Math.min(r4, STARS.maxRadius));
    }
    for (let i5 = 0; i5 < smallCount; i5++) {
      let x2 = rnd() * W, y3 = rnd() * H2;
      if (mwActive && i5 % 3 === 0) {
        const p3 = mwWarp(x2, y3, mwBandW * 0.8);
        if (p3) {
          x2 = p3[0];
          y3 = p3[1];
        }
      }
      let r4 = 0.8 + rnd() * 0.8;
      if (i5 % 8 === 0) r4 *= 1.8;
      r4 = Math.min(r4, STARS.maxRadius);
      const alpha = 0.55 + rnd() * 0.35;
      const rgb = _starColor(rnd());
      put(rgb, alpha, x2, y3, r4);
      if (i5 % 8 === 0) {
        const glowR = r4 * 3;
        ctx.globalAlpha = alpha * 0.12;
        const g2 = ctx.createRadialGradient(x2, y3, r4 * 0.5, x2, y3, glowR);
        g2.addColorStop(0, _rgba(rgb, 1));
        g2.addColorStop(0.4, _rgba(rgb, 0.2));
        g2.addColorStop(1, _rgba(rgb, 0));
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.arc(x2, y3, glowR, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let cl = 0; cl < clusterCount; cl++) {
      const cx = 0.15 * W + rnd() * 0.7 * W;
      const cy = rnd() * H2;
      const n4 = 5 + Math.floor(rnd() * 6);
      for (let j = 0; j < n4; j++) {
        let r4 = 0.5 + rnd() * 0.5;
        if (j % 8 === 0) r4 *= 1.8;
        put(STARS.palette[1], 0.3 + rnd() * 0.2, cx + (rnd() - 0.5) * 25, cy + (rnd() - 0.5) * 18, Math.min(r4, STARS.maxRadius));
      }
    }
    for (const b3 of batches.values()) {
      ctx.globalAlpha = b3.alpha;
      ctx.fillStyle = `rgb(${b3.rgb[0]},${b3.rgb[1]},${b3.rgb[2]})`;
      ctx.beginPath();
      const pts = b3.pts;
      for (let j = 0; j < pts.length; j += 3) {
        ctx.moveTo(pts[j] + pts[j + 2], pts[j + 1]);
        ctx.arc(pts[j], pts[j + 1], pts[j + 2], 0, Math.PI * 2);
      }
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    return c4;
  }
  function _buildStarHeroes(seed, dpr) {
    const rnd = _mulberry32(seed + 7);
    const heroes = [];
    for (let i5 = 0; i5 < STARS.heroCount; i5++) {
      const feature = i5 < 2;
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
        for (let r4 = 0; r4 < 8; r4++) {
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
  function _drawStars(inst, ctx, w2, h3, s4, t3, dt) {
    const st = inst.stars;
    const W = Math.max(1, Math.round(w2 * s4)), H2 = Math.max(1, Math.round(h3 * s4));
    const fieldKey = `${st.count}|${W}|${H2}`;
    if (st.fieldKey !== fieldKey) {
      st.field = _buildStarField(st.count, W, H2, inst.wp);
      st.fieldKey = fieldKey;
    }
    const dpr = Math.min(s4, STARS.heroDprCap);
    if (st.heroKey !== dpr) {
      st.heroes = _buildStarHeroes(inst.wp, dpr);
      st.heroKey = dpr;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = st.opacity;
    ctx.drawImage(st.field, 0, 0);
    ctx.setTransform(s4, 0, 0, s4, 0, 0);
    ctx.globalCompositeOperation = "lighter";
    for (const hero of st.heroes) {
      const a3 = t3 * hero.sp + hero.ph;
      const twinkle = Math.sin(a3) + Math.sin(a3 * 2.7) * 0.5 + Math.sin(a3 * 0.4) * 0.3;
      const size = hero.size * (1 + twinkle * 0.35);
      const op = Math.min(1, Math.max(0, hero.brightness * (1 + twinkle * 0.4))) * st.opacity;
      if (op < 0.05) continue;
      const px = hero.x * w2, py = hero.y * h3;
      const drawSize = hero.texPx * (size / hero.refSize) / dpr;
      ctx.globalAlpha = op;
      ctx.drawImage(hero.tex, px - drawSize * 0.5, py - drawSize * 0.5, drawSize, drawSize);
      ctx.globalAlpha = Math.min(1, op * 1.1);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(px, py, size * 0.75, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
    _drawMeteors(st, ctx, w2, h3, dt, t3);
    ctx.globalAlpha = 1;
  }
  function create() {
    return { key: null, rainKey: null, rain: null, snow: null, hail: null, cloud: null, stars: null, birds: null, balloon: null, planes: null, area: 0, wp: Math.random() * 100, flash: null };
  }
  function set(inst, key, w2, h3, weatherState, stars, birds, balloon, planes) {
    const area = Math.max(1, w2 * h3);
    const grow = inst.area > 0 ? Math.abs(area - inst.area) / inst.area : 1;
    const sizeChanged = grow >= 0.22;
    const tuning = _hasClouds(weatherState) ? _weatherTuning(weatherState) : null;
    if (!tuning) {
      inst.cloud = null;
    } else if (!inst.cloud || inst.cloud.state !== weatherState) {
      if (!inst.cloud || inst.cloud.density !== tuning.cloudDensity || inst.cloud.layout !== tuning.softClouds) inst.cloud = _buildCloudField(tuning, inst.wp);
      inst.cloud.speed = tuning.cloudSpeed;
      inst.cloud.state = weatherState;
      _getCloudImg();
      _getSoftImg();
    }
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
    for (const a3 of [inst.birds, inst.planes]) if (a3) {
      a3.list.length = 0;
      a3.next = 0;
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
  function _advanceFlash(inst, t3, dt) {
    if (!_weatherTuning(inst.cloud.state).lightning) {
      inst.flash = null;
      return null;
    }
    const fl = inst.flash || (inst.flash = { next: t3 + 1.5 + Math.random() * 2.5, age: -1, puffs: null });
    if (fl.age < 0) {
      if (t3 < fl.next) return null;
      const big = inst.cloud.puffs.filter((p3) => p3.band >= 1 && p3.band < SOFT_BAND);
      if (!big.length) return null;
      const anchor = big[Math.random() * big.length | 0];
      fl.puffs = big.filter((p3) => (p3.x - anchor.x) ** 2 + (p3.y - anchor.y) ** 2 < 0.04).slice(0, 3);
      fl.age = 0;
      const strokeCount = 2 + (Math.random() * 3 | 0);
      const strokes = [];
      let cursor = 0;
      for (let i5 = 0; i5 < strokeCount; i5++) {
        const on = 0.03 + Math.random() * 0.05;
        const gap = i5 < strokeCount - 1 ? 0.03 + Math.random() * 0.08 : 0;
        const peak = (i5 === 0 ? 0.7 + Math.random() * 0.3 : 0.25 + Math.random() * 0.45) * (1 - i5 * 0.15);
        strokes.push({ start: cursor, on, gap, peak });
        cursor += on + gap;
      }
      fl.strokes = strokes;
      fl.dur = cursor;
    }
    fl.age += dt;
    if (fl.age >= fl.dur) {
      fl.age = -1;
      fl.next = t3 + 2 + Math.random() * 4;
      return null;
    }
    let brightness = 0;
    for (const s4 of fl.strokes) {
      const local = fl.age - s4.start;
      if (local < 0 || local >= s4.on) continue;
      const ramp = 0.12 * s4.on;
      const attack = local < ramp ? local / ramp : 1;
      const decay = local > s4.on - ramp ? (s4.on - local) / ramp : 1;
      brightness = Math.max(brightness, attack * decay * s4.peak);
    }
    return brightness > 0.01 ? { puffs: fl.puffs, brightness } : null;
  }
  function frame(inst, ctx, w2, h3, s4, dt, t3, env, starCtx) {
    const activeEffects = !!inst.key || !!inst.cloud || !!inst.stars || !!inst.birds || !!inst.balloon || !!inst.planes;
    ctx.setTransform(s4, 0, 0, s4, 0, 0);
    ctx.clearRect(0, 0, w2, h3);
    if (!activeEffects) {
      if (starCtx) {
        starCtx.setTransform(s4, 0, 0, s4, 0, 0);
        starCtx.clearRect(0, 0, w2, h3);
      }
      return false;
    }
    if (inst.stars) {
      const sc = starCtx || ctx;
      if (starCtx) {
        starCtx.setTransform(s4, 0, 0, s4, 0, 0);
        starCtx.clearRect(0, 0, w2, h3);
      }
      _drawStars(inst, sc, w2, h3, s4, t3, dt);
      if (env.moon) {
        sc.setTransform(s4, 0, 0, s4, 0, 0);
        sc.globalCompositeOperation = "destination-out";
        sc.beginPath();
        sc.arc(env.moon.x, env.moon.y, env.moon.r, 0, Math.PI * 2);
        sc.fill();
        sc.globalCompositeOperation = "source-over";
      }
    } else if (starCtx) {
      starCtx.setTransform(s4, 0, 0, s4, 0, 0);
      starCtx.clearRect(0, 0, w2, h3);
    }
    const wp = inst.wp;
    const gust = 0.72 + 0.22 * Math.sin(t3 * 0.21 + wp) + 0.13 * Math.sin(t3 * 0.53 + wp * 1.7);
    const drift = Math.sin(t3 * 0.16 + wp * 0.6) + 0.4 * Math.sin(t3 * 0.41 + wp);
    const topF = h3 * 0.16, botY = h3 * 1.02, botF = h3 * 0.12;
    const glow = env.glow;
    const boost = (x2, y3) => {
      if (!glow) return 1;
      const dx = x2 - glow.x, dy = y3 - glow.y;
      const q = 1 - (dx * dx + dy * dy) / glow.r2;
      return q > 0 ? 1 + q * q * glow.s : 1;
    };
    const span = w2 * 1.3, sx = -w2 * 0.15;
    if (inst.planes) _planesFrame(inst, ctx, w2, h3, s4, dt, t3, env);
    if (inst.balloon) _balloonFrame(inst, ctx, w2, h3, s4, dt, t3, env);
    if (inst.cloud && inst.cloud.puffs.length) {
      const cImg = _getCloudImg(), sImg = _getSoftImg();
      const bands = cImg && sImg && _cloudBandSprites(cImg, sImg, inst.cloud.state, env.schemeDark, env.backgroundRGB);
      if (bands) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        const wind = (0.9 + 0.4 * gust) * inst.cloud.speed;
        const opAmt = env.schemeDark ? 1.08 : 1;
        const scale = Math.max(1, Math.min(2.4, Math.sqrt(w2 * h3) / 300));
        const drawPuff = (p3, alpha) => {
          const sp = bands[p3.band][p3.variant], ar = sp.width / sp.height;
          const ph = p3.size * scale, pw = ph * ar * p3.stretch;
          const cx = p3.x * w2;
          const cy = p3.y * h3 + Math.sin(t3 * p3.bobF + p3.bobPh) * p3.bobAmp * h3;
          ctx.globalAlpha = alpha != null ? alpha : Math.min(0.95, p3.alpha * opAmt * boost(cx, cy));
          ctx.setTransform(s4, 0, 0, s4, cx * s4, cy * s4);
          if (p3.rot) ctx.rotate(p3.rot);
          if (p3.flip) ctx.scale(-1, 1);
          ctx.drawImage(sp, -pw / 2, -ph / 2, pw, ph);
        };
        for (const p3 of inst.cloud.puffs) {
          const sp = bands[p3.band][p3.variant], ar = sp.width / sp.height;
          const pw = p3.size * scale * ar * p3.stretch;
          p3.x += p3.speed * wind * dt;
          if (p3.x * w2 - pw / 2 > w2) p3.x -= (w2 + pw) / w2;
          else if (p3.x * w2 + pw / 2 < 0) p3.x += (w2 + pw) / w2;
          drawPuff(p3, null);
        }
        const flash = _advanceFlash(inst, t3, dt);
        if (flash) {
          ctx.globalCompositeOperation = "lighter";
          for (const p3 of inst.cloud.puffs) if (p3.band < SOFT_BAND) drawPuff(p3, flash.brightness * p3.alpha * (env.schemeDark ? 0.3 : 0.14));
          for (const fp of flash.puffs) drawPuff(fp, flash.brightness * 0.55);
          ctx.globalCompositeOperation = "source-over";
        }
        ctx.setTransform(s4, 0, 0, s4, 0, 0);
        ctx.globalAlpha = 1;
      }
    }
    if (inst.birds) _birdsFrame(inst, ctx, w2, h3, s4, dt, t3, env, gust);
    if (inst.rain && inst.rain.length) {
      const recipe = RAIN[inst.rainKey];
      const sp = _sprite("streak", env.schemeDark);
      const lean = recipe.lean * gust;
      const stretch = Math.min(dt, 1 / 24);
      const maxLen = h3 * 0.22;
      ctx.setTransform(s4, 0, s4 * lean, s4, 0, 0);
      const dark = env.schemeDark;
      ctx.globalCompositeOperation = dark ? "lighter" : "source-over";
      const aCap = dark ? 0.62 : 0.95;
      for (const p3 of inst.rain) {
        p3.y += p3.vy * dt / h3;
        p3.x += p3.vy * lean * 0.9 * dt / span;
        let y3 = p3.y * (h3 + 40) - 20;
        if (y3 > h3 + 24) {
          p3.y = Math.random() * -0.22;
          p3.x = Math.random();
          p3.sd = Math.random();
          y3 = p3.y * (h3 + 40) - 20;
        }
        if (p3.x > 1) p3.x -= 1;
        else if (p3.x < 0) p3.x += 1;
        const x2 = sx + p3.x * span;
        let a3;
        if (dark) {
          const focus = 0.3 + 0.7 * p3.z;
          const glint = 0.55 + 0.9 * (p3.sd * p3.sd);
          a3 = _lerp(recipe.alpha[0], recipe.alpha[1], p3.z) * focus * glint;
        } else {
          a3 = (0.55 + 0.45 * p3.z) * (0.85 + 0.3 * p3.sd);
        }
        if (y3 < topF) a3 *= Math.max(0, y3 / topF);
        else if (y3 > botY - botF) a3 *= Math.max(0, (botY - y3) / botF);
        if (a3 <= 4e-3) continue;
        a3 *= boost(x2, y3);
        const len = Math.min(maxLen, (_lerp(recipe.lenBase[0], recipe.lenBase[1], p3.z) + p3.vy * stretch) * (0.72 + 0.55 * p3.z));
        const dw = _lerp(recipe.width[0], recipe.width[1], p3.z) * (0.7 + 0.85 * p3.z);
        ctx.globalAlpha = Math.min(aCap, a3);
        ctx.drawImage(sp, x2 - lean * y3 - dw / 2, y3 - len, dw, len);
      }
      ctx.globalCompositeOperation = "source-over";
    }
    if (inst.hail && inst.hail.length) {
      const sp = _sprite("hail", env.schemeDark);
      const tr = _sprite("streak", env.schemeDark);
      const stretch = Math.min(dt, 1 / 24);
      const lean = 0.07 * gust;
      ctx.setTransform(s4, 0, s4 * lean, s4, 0, 0);
      for (const p3 of inst.hail) {
        p3.y += p3.vy * dt / h3;
        p3.x += p3.vy * lean * 0.9 * dt / span;
        let y3 = p3.y * (h3 + 40) - 20;
        if (y3 > h3 + 24) {
          p3.y = Math.random() * -0.22;
          p3.x = Math.random();
          y3 = p3.y * (h3 + 40) - 20;
        }
        if (p3.x > 1) p3.x -= 1;
        else if (p3.x < 0) p3.x += 1;
        const x2 = sx + p3.x * span;
        let a3 = _lerp(HAIL.alpha[0], HAIL.alpha[1], p3.z);
        if (y3 < topF) a3 *= Math.max(0, y3 / topF);
        else if (y3 > botY - botF) a3 *= Math.max(0, (botY - y3) / botF);
        if (a3 <= 4e-3) continue;
        a3 *= boost(x2, y3);
        const d3 = _lerp(HAIL.dia[0], HAIL.dia[1], p3.z);
        const dh = d3 * (1.1 + 0.3 * p3.z);
        const u3 = x2 - lean * y3;
        const len = d3 * 2 + p3.vy * stretch * 0.55;
        ctx.globalAlpha = Math.min(0.8, a3) * 0.32;
        ctx.drawImage(tr, u3 - d3 * 0.4, y3 - len, d3 * 0.8, len);
        ctx.globalAlpha = Math.min(0.8, a3);
        ctx.drawImage(sp, u3 - d3 / 2, y3 - dh / 2, d3, dh);
      }
    }
    if (inst.snow && inst.snow.length) {
      const sp = _sprite("flake", env.schemeDark);
      ctx.setTransform(s4, 0, 0, s4, 0, 0);
      const wind = drift * 7;
      for (const p3 of inst.snow) {
        p3.y += p3.vy * dt / h3;
        p3.x += wind * (0.4 + p3.z * 0.6) * dt / span;
        let y3 = p3.y * (h3 + 24) - 12;
        if (y3 > h3 + 14) {
          p3.y = Math.random() * -0.12;
          p3.x = Math.random();
          p3.ph = Math.random() * Math.PI * 2;
          y3 = p3.y * (h3 + 24) - 12;
        }
        if (p3.x > 1) p3.x -= 1;
        else if (p3.x < 0) p3.x += 1;
        const x2 = sx + p3.x * span + Math.sin(t3 * p3.swf + p3.ph) * p3.swa;
        let a3 = _lerp(SNOW.alpha[0], SNOW.alpha[1], p3.z) * (0.82 + 0.18 * Math.sin(t3 * p3.tw + p3.ph));
        if (y3 < topF) a3 *= Math.max(0, y3 / topF);
        else if (y3 > botY - botF) a3 *= Math.max(0, (botY - y3) / botF);
        if (a3 <= 4e-3) continue;
        a3 *= boost(x2, y3);
        const d3 = _lerp(SNOW.dia[0], SNOW.dia[1], p3.z);
        ctx.globalAlpha = Math.min(0.85, a3);
        ctx.drawImage(sp, x2 - d3 / 2, y3 - d3 / 2, d3, d3);
      }
    }
    ctx.globalAlpha = 1;
    ctx.setTransform(s4, 0, 0, s4, 0, 0);
    return true;
  }
  return Object.freeze({ hasClouds: _hasClouds, birdActivity: _birdActivity, balloonActivity: _balloonActivity, planeActivity: _planeActivity, create, set, frame });
})();
var ESCAPE_MAP = { "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
var escapeHtml = (v2) => String(v2).replace(/["&<>]/g, (c4) => ESCAPE_MAP[c4]);
var _CSS_STRIP = /["'<>;{}\\]|\/\*|\*\/|@|url\s*\(|expression\s*\(/gi;
var cssValue = (v2) => String(v2).replace(/[\u0000-\u001F\u007F]/g, "").replace(_CSS_STRIP, "");
var _ALIGN_CLASSES = /* @__PURE__ */ new Set(["start", "center", "end", "spread"]);
var _BUTTON_STYLES = /* @__PURE__ */ new Set(["vertical", "split"]);
var JUSTIFY_MAP = Object.freeze({ start: "flex-start", center: "center", end: "flex-end", between: "space-between", around: "space-around", evenly: "space-evenly" });
var _SAFE_JUSTIFY = /* @__PURE__ */ new Set(["center", "flex-end"]);
var ALIGN_MAP = Object.freeze({ start: "flex-start", center: "center", end: "flex-end", stretch: "stretch", baseline: "baseline" });
var FORECAST_CACHE = /* @__PURE__ */ new Map();
var FORECAST_CACHE_MAX = 50;
var _FORECAST_UNIT_MAP = { temperature: "temperature_unit", templow: "temperature_unit", wind_speed: "wind_speed_unit", precipitation: "precipitation_unit", pressure: "pressure_unit", visibility: "visibility_unit", dew_point: "temperature_unit" };
var _FORECAST_UNIT_FALLBACK = { humidity: "%", precipitation_probability: "%", cloud_coverage: "%", wind_bearing: "\xB0", uv_index: "" };
function collectConditionEntities(conditions) {
  const out = [];
  if (!Array.isArray(conditions)) return out;
  for (const c4 of conditions) {
    if (!c4) continue;
    if (c4.entity) out.push(c4.entity);
    if (c4.condition === "and" || c4.condition === "or" || c4.condition === "not") {
      out.push(...collectConditionEntities(c4.conditions));
    }
  }
  return out;
}
function normalizeLength(v2) {
  const s4 = String(v2 == null ? "" : v2).trim();
  if (!s4) return "";
  return s4.split(/\s+/).map((tok) => {
    if (!tok) return tok;
    if (tok === "0") return "0";
    return /^[+-]?(\d+\.?\d*|\.\d+)$/.test(tok) ? tok + "px" : tok;
  }).join(" ");
}
function cssLength(v2) {
  return cssValue(normalizeLength(v2));
}
function _elBoxStyle(el) {
  let s4 = "";
  if (el && el.margin !== void 0 && el.margin !== "") s4 += `;margin:${cssLength(el.margin)}`;
  if (el && el.padding !== void 0 && el.padding !== "") s4 += `;padding:${cssLength(el.padding)}`;
  return s4;
}
function gaugeDefs(o5, p3) {
  const arr = Array.isArray(o5[p3 + "values"]) ? o5[p3 + "values"].filter((v2) => v2 && typeof v2 === "object") : [];
  return arr.length ? arr : [{}];
}
var GAUGE_REF = /^[a-z_]+\.[a-z0-9_]+$/;
var GAUGE_NUMS = ["min", "max", "width", "height", "arc", "start", "marker_size", "marker_icon_size", "range_from", "range_to"];
function gaugeRefs(o5, p3) {
  return gaugeDefs(o5, p3).concat(GAUGE_NUMS.filter((k2) => GAUGE_REF.test(o5[p3 + k2])).map((k2) => ({ entity: o5[p3 + k2] })));
}
var isTime = (v2) => typeof v2 === "string" && v2.includes(":");
function gaugeNum(v2, hass) {
  if (!isTime(v2)) return parseFloat(v2);
  const d3 = new Date(v2), [h3, m2] = (isNaN(d3) ? v2 : d3.toLocaleTimeString("en-GB", { timeZone: hass.locale.time_zone === "server" ? hass.config.time_zone : void 0 })).split(":");
  return +h3 + m2 / 60;
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
function freeStyle(o5) {
  if ((o5.position || "").toString().toLowerCase() !== "custom") return [];
  const [v2, h3] = parseAnchor(o5.position_anchor || "top-left"), cx = h3 !== "left" && h3 !== "right", cy = v2 !== "top" && v2 !== "bottom";
  const out = [[cx ? "left" : h3, cx ? "50%" : cssLength(o5.position_x) || "0"], [cy ? "top" : v2, cy ? "50%" : cssLength(o5.position_y) || "0"]];
  return cx || cy ? [...out, ["transform", [cx && "translateX(-50%)", cy && "translateY(-50%)"].filter(Boolean).join(" ")]] : out;
}
function pickThreshold(thresholds, value) {
  if (value == null) return "";
  const valid = thresholds.filter((t3) => t3.value !== "" && t3.value !== void 0 && t3.color);
  const text = String(value).trim().toLowerCase();
  const match = valid.find((t3) => isNaN(parseFloat(t3.value)) && String(t3.value).trim().toLowerCase() === text);
  if (match) return match.color;
  const num = parseFloat(value);
  if (isNaN(num)) return "";
  let color = "";
  const sorted = valid.filter((t3) => !isNaN(parseFloat(t3.value))).sort((a3, b3) => parseFloat(a3.value) - parseFloat(b3.value));
  for (const t3 of sorted) {
    if (num >= parseFloat(t3.value)) color = t3.color;
  }
  return color;
}
function forecastFilterPast(raw, daily) {
  const now = /* @__PURE__ */ new Date(), cut = daily ? new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() : now.getTime();
  return raw.filter((f3) => Date.parse(f3.datetime) >= cut);
}
function forecastFingerprint(forecast) {
  if (!forecast || !forecast.length) return "";
  let s4 = "" + forecast.length;
  for (const f3 of forecast) s4 += `|${f3.datetime}|${f3.condition}|${f3.temperature}|${f3.templow != null ? f3.templow : ""}|${f3.precipitation_probability != null ? f3.precipitation_probability : ""}`;
  return s4;
}
var NUMBER_LOCALES = { comma_decimal: ["en-US", "en"], decimal_comma: ["de", "es", "it"], space_comma: ["fr", "sv", "cs"], quote_decimal: ["de-CH"], none: "en-US" };
function numberFormat(locale, precision) {
  const nf = locale.number_format;
  return new Intl.NumberFormat(nf === "system" ? void 0 : NUMBER_LOCALES[nf] || locale.language, { maximumFractionDigits: precision, minimumFractionDigits: 0, useGrouping: nf !== "none" });
}
function dateFormat(hass, options) {
  const l3 = hass.locale, tf = l3.time_format;
  if (options.hour) options.hourCycle = (tf === "12" || tf === "24" ? tf === "12" : (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(tf === "language" ? l3.language : void 0).includes("10")) ? "h12" : "h23";
  if (l3.time_zone === "server") options.timeZone = hass.config.time_zone;
  return new Intl.DateTimeFormat(l3.language, options);
}
function forecastLabel(dt, daily, hass) {
  return dateFormat(hass, daily ? { weekday: "short" } : { hour: "numeric", minute: "2-digit" }).format(new Date(dt));
}
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
        let w2, h3;
        if (entry.borderBoxSize && entry.borderBoxSize[0]) {
          w2 = entry.borderBoxSize[0].inlineSize;
          h3 = entry.borderBoxSize[0].blockSize;
        } else {
          w2 = entry.target.offsetWidth;
          h3 = entry.target.offsetHeight;
        }
        const changed = this._updateCanvasDimensions(w2, h3);
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
      } catch (_2) {
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
    for (const c4 of this._allButtons()) {
      if (c4.forecast && c4.entity) {
        const k2 = `${c4.entity}|${c4.forecast === "hourly" ? "hourly" : "daily"}`;
        if (!this._forecastData.has(k2) && FORECAST_CACHE.has(k2)) {
          this._forecastData.set(k2, FORECAST_CACHE.get(k2));
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
    if (colorMode !== "theme" && !sunObj) this._warnMissingSun();
    const schemeDark = _WeatherCard._schemeDarkFromColorMode(colorMode, themeDark, isAstroNight);
    const hasAstroNightChanged = this._isAstroNight !== isAstroNight;
    const hasSchemeDarkChanged = this._schemeDark !== schemeDark;
    this._isAstroNight = isAstroNight;
    this._schemeDark = schemeDark;
    this._themeDark = themeDark;
    this._updateSunMoon(sunObj, wObj);
    const wEntity = wObj || FALLBACK_WEATHER;
    const botSig = allButtons.map((s4) => {
      if (!s4.entity) return "";
      let sig;
      if (s4.forecast) {
        const t3 = s4.forecast === "hourly" ? "hourly" : "daily";
        const fd = this._forecastData.get(`${s4.entity}|${t3}`);
        sig = `forecast:${s4.entity}|${t3}:${s4.forecast_offset || 0}:${fd && fd.fp || ""}`;
      } else {
        const e4 = hass.states[s4.entity];
        if (!e4) sig = "|";
        else if (s4.attribute) sig = `${e4.attributes[s4.attribute] != null ? e4.attributes[s4.attribute] : ""}|${e4.attributes[`${s4.attribute}_unit`] != null ? e4.attributes[`${s4.attribute}_unit`] : ""}`;
        else sig = `${e4.state}|${e4.attributes.unit_of_measurement || ""}`;
      }
      if (Array.isArray(s4.elements)) {
        for (const el of s4.elements) {
          if (!el) continue;
          if (el.type === "text" && el.entity) {
            const te = hass.states[el.entity];
            if (te) sig += `|tx:${el.attribute ? te.attributes[el.attribute] != null ? te.attributes[el.attribute] : "" : te.state}`;
          } else if (el.type === "icon" && (el.entity || el.attribute)) {
            const ie = hass.states[el.entity || s4.entity];
            if (ie) sig += `|ic:${el.attribute ? ie.attributes[el.attribute] != null ? ie.attributes[el.attribute] : "" : ie.state}`;
          }
        }
      }
      for (const def of s4._gaugeDefs) {
        const ge = hass.states[def.entity || s4.entity];
        if (ge) sig += `|g:${def.attribute ? ge.attributes[def.attribute] != null ? ge.attributes[def.attribute] : "" : ge.state}`;
      }
      for (const ve of s4._visEntities) {
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
    const l3 = hass.locale;
    const snapshot = {
      weather: wEntity.state || "",
      sun: sunObj && sunObj.state || "",
      schemeDark,
      themeDark,
      botSig,
      containerVisSig,
      locale: `${l3.language}|${l3.number_format}|${l3.time_format}|${l3.time_zone}`
    };
    if (this._lastSnapshot && !this._hasSnapshotChanged(this._lastSnapshot, snapshot)) return;
    this._lastSnapshot = snapshot;
    let weatherState = (wEntity.state || "default").toLowerCase();
    if (isAstroNight && weatherState === "sunny") weatherState = "clear-night";
    if (!isAstroNight && weatherState === "clear-night") weatherState = "sunny";
    if (weatherState === "exceptional" && isAstroNight) weatherState = "clear-night";
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
    for (let i5 = 0; i5 < ids.length; i5++) {
      if (states[ids[i5]] !== refs.get(ids[i5])) return true;
    }
    return false;
  }
  static async getConfigElement() {
    if (!customElements.get("origami-weather-editor")) {
      await Promise.resolve().then(() => (init_origami_weather_editor(), origami_weather_editor_exports));
    }
    return document.createElement("origami-weather-editor");
  }
  static getStubConfig(hass) {
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
      return arr.map((a3) => {
        if (!a3 || typeof a3 !== "object") return { buttons: [] };
        if (a3.custom_cards) return { ...a3, buttons: [] };
        const src = Array.isArray(a3.buttons) ? a3.buttons : [];
        const buttons = src.map((s4) => {
          if (!s4 || typeof s4 !== "object") return { _visEntities: [], _gaugeDefs: [] };
          const c4 = { ...s4 };
          if (!c4.ring_values && (c4.gauge_entity || c4.gauge_attribute)) c4.ring_values = [{ entity: c4.gauge_entity, attribute: c4.gauge_attribute }];
          c4._visEntities = collectConditionEntities(s4.visibility);
          c4._thresholdDef = { entity: s4.color_threshold_entity, attribute: s4.color_threshold_attribute || (s4.color_threshold_entity ? s4.attribute : void 0) };
          c4._gaugeDefs = (s4.type === "ring" ? gaugeRefs(c4, "ring_") : []).concat(...(Array.isArray(s4.elements) ? s4.elements : []).filter((e4) => e4 && e4.type === "bar").map((e4) => gaugeRefs(e4, "bar_")), c4._thresholdDef).filter((d3) => d3.entity || d3.attribute);
          return c4;
        });
        return { ...a3, buttons };
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
    const D2 = Math.PI / 180, az = (sunValid ? Number(sun.attributes?.azimuth) : NaN) * D2, up = elev > 0, now = /* @__PURE__ */ new Date();
    const lat = Number(this._hass?.config?.latitude) * D2, dec = -23.44 * D2 * Math.cos(2 * Math.PI * ((now - new Date(now.getFullYear(), 0, 1)) / 864e5 + 10) / 365);
    const rise = Math.acos(Math.max(-1, Math.min(1, Math.sin(dec) / Math.cos(lat)))) / D2, south = lat > dec;
    const light = up ? Math.max(0, Math.min(1, (tuning.sunVisibility - 0.45) / 0.55)) * Math.min(1, elev / 4) : 0;
    for (const [k2, v2] of [["x", Math.sin(az)], ["y", Math.cos(az)], ["shadow", up ? Math.min(3, 1 / Math.tan(elev * D2)) : 0], ["light", light], ["path-start", south ? rise : 360 - rise], ["path", south ? 360 - 2 * rise : 2 * rise]]) this._cssVar(els.root, `--origami-sun-${k2}`, Number.isFinite(v2) ? v2.toFixed(3) : "", `sun-${k2}`);
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
    const t3 = Number.isFinite(elev) ? Math.min(1, Math.max(0, isAstroNight ? -elev / 24 : elev / 60)) : 0.5;
    const yFixed = cfg.sun_moon_y != null && cfg.sun_moon_y !== "";
    const y3 = yFixed ? Math.min(100, Math.max(0, parseFloat(cfg.sun_moon_y) || 0)) : Math.round((100 - t3 * 86) * 2) / 2;
    const x2 = cfg.sun_moon_x === "dynamic" ? Math.round((7 + _WeatherCard._pathProgress(sun.attributes || {}, isAstroNight) * 86) * 2) / 2 : null;
    const warm = isAstroNight ? 0 : Math.round(Math.pow(1 - t3, 1.6) * 20) / 20;
    this._sunGlowVisibility = tuning.sunVisibility;
    this._sunGlowIsNight = isAstroNight;
    const phase = isAstroNight ? Math.round(_WeatherCard._moonPhase() * 200) / 200 : 0;
    const sig = `${isAstroNight ? "night" : "day"}|${x2 ?? ""}|${y3}|${weatherState}|${warm}|${this._schemeDark ? "d" : "l"}|${phase}`;
    if (this._sunMoonSig === sig) return;
    this._sunMoonSig = sig;
    if (!this._sunMoonActive) {
      this._sunMoonActive = true;
      els.root.classList.add("has-sun-moon");
    }
    els.sunMoon.classList.toggle("is-astro-night", isAstroNight);
    const rays = isAstroNight ? 0 : _WeatherCard._rayStrength(tuning, t3);
    els.root.classList.toggle("has-sun-rays", rays > 0);
    const st = els.sunMoonLayer.style;
    if (x2 == null) st.removeProperty("--origami-sun-moon-x");
    else st.setProperty("--origami-sun-moon-x", `${x2}%`);
    st.setProperty("--origami-sun-moon-y", `${y3}%`);
    st.setProperty("--origami-sun-moon-glow-opacity", String(tuning.sunVisibility));
    st.setProperty("--origami-sun-rays-opacity", String(rays));
    st.opacity = String(tuning.sunVisibility);
    if (isAstroNight) {
      this._applyMoonPhase(phase);
      this._loadMoonImage();
      st.setProperty("--origami-moon-phase-glow", String(Math.round(Math.sin(phase * Math.PI) * 100) / 100));
    } else {
      const c4 = _WeatherCard._sunPalette(warm, tuning.sunSaturation);
      st.setProperty("--origami-sun-core", c4.core);
      st.setProperty("--origami-sun-inner", c4.inner);
      st.setProperty("--origami-sun-mid", c4.mid);
      st.setProperty("--origami-sun-edge", c4.edge);
      st.setProperty("--origami-sun-glow-inner", c4.glowInner);
      st.setProperty("--origami-sun-glow-outer", c4.glowOuter);
      if (rays > 0) {
        const rt = _WeatherCard._rayTint(warm, this._schemeDark);
        st.setProperty("--origami-sun-ray-tint", rt.near);
        st.setProperty("--origami-sun-ray-tint-far", rt.far);
      }
    }
  }
  static _rayTint(warm, schemeDark) {
    if (schemeDark) return { near: "rgba(118,148,196,0.85)", far: "rgba(104,134,182,0.6)" };
    const w2 = Math.max(0, Math.min(1, warm));
    const mix = (a3, b3) => Math.round(a3 + (b3 - a3) * w2);
    return {
      near: `rgb(${mix(169, 206)},${mix(190, 170)},${mix(212, 150)})`,
      far: `rgb(${mix(198, 222)},${mix(213, 196)},${mix(229, 180)})`
    };
  }
  static _rayStrength(tuning, t3) {
    const vis = Math.max(0, Math.min(1, (tuning.sunVisibility - 0.34) / 0.55));
    if (vis <= 0) return 0;
    const low = 0.48 + 0.38 * (1 - Math.max(0, Math.min(1, t3)));
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
    return colorMode === "theme" ? themeIsDark : isAstroNight;
  }
  static _sunPalette(warm, saturation) {
    const wash = 1 - saturation;
    const out = {};
    for (const key of Object.keys(SUN_PALETTE.noon)) {
      const n4 = SUN_PALETTE.noon[key], h3 = SUN_PALETTE.horizon[key];
      const ch = (i5) => {
        const v2 = n4[i5] + (h3[i5] - n4[i5]) * warm;
        return Math.round(wash > 0 ? v2 + (236 - v2) * wash : v2);
      };
      out[key] = `rgb(${ch(0)},${ch(1)},${ch(2)})`;
    }
    return out;
  }
  _applyMoonPhase(p3) {
    if (this._moonPhaseApplied === p3) return;
    this._moonPhaseApplied = p3;
    const litPath = this._elements?.moonLitPath;
    if (!litPath) return;
    const lit = _WeatherCard._moonLitPath(p3);
    litPath.setAttribute("d", lit || "");
  }
  _loadMoonImage() {
    const img = this._elements?.moonImage;
    if (img && !img.hasAttribute("href")) img.setAttribute("href", MOON_SURFACE);
  }
  static _moonPhase() {
    return (Date.now() - 94718244e4) / 2551442877 % 1;
  }
  static _moonLitPath(p3) {
    if (p3 <= 0.02 || p3 >= 0.98) return "";
    if (Math.abs(p3 - 0.5) <= 0.02) return MOON_DISC_PATH;
    const k2 = Math.cos(2 * Math.PI * p3);
    const rx = Math.max(0.05, Math.abs(k2) * 48).toFixed(2);
    const waxing = p3 < 0.5;
    const outerSweep = waxing ? 1 : 0;
    const innerSweep = k2 > 0 === waxing ? 0 : 1;
    return `M 50 2 A 48 48 0 0 ${outerSweep} 50 98 A ${rx} 48 0 0 ${innerSweep} 50 2 Z`;
  }
  _warnMissingSun() {
    if (this._sunWarned) return;
    this._sunWarned = true;
    console.warn('Origami Weather: color_mode "sun" requires a sun entity. Tried sun.sun but it was not found; falling back to light. Set sun_entity if your sun entity has a custom ID.');
  }
  _resolveSensorValue(hass, entityId, attribute) {
    let formatted = "N/A", haFormatted = false, rawNumeric = null;
    const sensor = hass.states[entityId];
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
      const d3 = new Date(rawNumeric);
      if (!isNaN(d3)) {
        const now = /* @__PURE__ */ new Date(), day = 864e5;
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const targetStart = new Date(d3.getFullYear(), d3.getMonth(), d3.getDate());
        const dayDiff = Math.round((targetStart - todayStart) / day);
        const timePart = dateFormat(hass, { hour: "numeric", minute: "2-digit" }).format(d3);
        if (dayDiff === 0 || d3 > now && d3 - now < day) {
          formatted = timePart;
        } else if (dayDiff >= -1 && dayDiff <= 6) {
          formatted = `${dateFormat(hass, { weekday: "short" }).format(d3)}, ${timePart}`;
        } else {
          formatted = dateFormat(hass, { weekday: "short", day: "numeric", month: "short" }).format(d3);
        }
      }
    }
    return { formatted, sensor, haFormatted, rawNumeric };
  }
  _syncForecasts() {
    if (!(this._hass && this._hass.connection)) return;
    const needed = /* @__PURE__ */ new Set();
    for (const c4 of this._allButtons()) {
      if (c4.forecast && c4.entity) needed.add(`${c4.entity}|${c4.forecast === "hourly" ? "hourly" : "daily"}`);
      this._collectConditionForecasts(c4.visibility, c4.entity, needed);
    }
    for (const c4 of this._containers) if (c4) this._collectConditionForecasts(c4.visibility, null, needed);
    for (const [k2, unsub] of this._forecastSubs) if (!needed.has(k2)) {
      unsub();
      this._forecastSubs.delete(k2);
      this._forecastData.delete(k2);
    }
    for (const k2 of needed) if (!this._forecastSubs.has(k2)) this._startForecastSubscription(k2);
  }
  _collectConditionForecasts(conditions, fallbackEntity, out) {
    if (!Array.isArray(conditions)) return;
    for (const c4 of conditions) {
      if (!c4 || typeof c4 !== "object") continue;
      if (Array.isArray(c4.conditions)) this._collectConditionForecasts(c4.conditions, fallbackEntity, out);
      if (c4.condition !== "numeric_state") continue;
      for (const spec of [c4, c4.above, c4.below]) {
        if (!spec || typeof spec !== "object" || !spec.forecast) continue;
        const entity = spec.entity || c4.entity || fallbackEntity;
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
    const _forecastEntry = this._forecastData.get(`${button.entity}|${type}`);
    const forecast = _forecastEntry && _forecastEntry.processed;
    if (!forecast || !forecast.length) return { formatted: "", condition: null, datetime: null, loading: true };
    const entry = forecast[Math.min(offset, forecast.length - 1)];
    let label = entry.condition || "\u2014";
    if (entry.condition && typeof hass.localize === "function") label = hass.localize(`component.weather.entity_component._.state.${entry.condition}`) || label;
    return { formatted: label, condition: entry.condition, datetime: entry.datetime, entry };
  }
  _reshapeValue(hass, r4, txt, hasFormat, unitEntity, unitAttr) {
    let value = r4.formatted, unit = hasFormat ? txt.format : "";
    const numeric = r4.rawNumeric != null && isFinite(parseFloat(r4.rawNumeric));
    if (txt.precision !== void 0 && numeric) {
      value = this._formatNumber(r4.rawNumeric, this._getForecastFormat(hass.locale, txt.precision));
      if (!hasFormat && r4.haFormatted) unit = this._extractUnit(hass, unitEntity, unitAttr);
    } else if (txt.fancy_unit === true && r4.haFormatted && r4.rawNumeric != null) {
      value = this._formatNumber(r4.rawNumeric);
      if (!hasFormat) unit = this._extractUnit(hass, unitEntity, unitAttr);
    } else if (hasFormat && r4.haFormatted && r4.rawNumeric != null) {
      value = this._formatNumber(r4.rawNumeric);
    }
    return { value, unit };
  }
  _resolveButtonText(hass, button, txt, ctx) {
    const hasFormat = txt.format !== void 0;
    const tight = hasFormat || txt.fancy_unit === true;
    if (txt.entity) {
      const r4 = this._resolveSensorValue(hass, txt.entity, txt.attribute);
      const { value: value2, unit: unit2 } = this._reshapeValue(hass, r4, txt, hasFormat, txt.entity, txt.attribute);
      return { value: value2, unit: unit2, tight, sig: `e:${txt.entity}|${txt.attribute || ""}|${txt.precision ?? ""}|${value2}${unit2}` };
    }
    if (txt.text !== void 0 && txt.text !== "") {
      const value2 = String(txt.text);
      return { value: value2, unit: hasFormat ? txt.format : "", tight: true, sig: `t:${value2}|${hasFormat ? txt.format : ""}` };
    }
    if (txt.attribute) {
      if (ctx.isForecast) {
        if (!ctx.forecastEntry) return { value: "", unit: "", tight: true, sig: "forecast:loading" };
        if (txt.attribute === "datetime") {
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
            const w2 = hass.states[button.entity] && hass.states[button.entity].attributes;
            unit3 = w2 && w2[`${txt.attribute}_unit`] || _FORECAST_UNIT_MAP[txt.attribute] && w2 && w2[_FORECAST_UNIT_MAP[txt.attribute]] || _FORECAST_UNIT_FALLBACK[txt.attribute] || "";
          }
        }
        return { value: value3, unit: unit3, tight: hasFormat || txt.fancy_unit === true, sig: `forecast:${txt.attribute}|${value3}${unit3}` };
      }
      const r4 = this._resolveSensorValue(hass, button.entity, txt.attribute);
      const { value: value2, unit: unit2 } = this._reshapeValue(hass, r4, txt, hasFormat, button.entity, txt.attribute);
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
    const f3 = fmt || this._numFmt;
    return f3 ? f3.format(raw) : String(raw);
  }
  _extractUnit(hass, entityId, attribute) {
    const sensor = hass && hass.states[entityId];
    if (!sensor) return "";
    if (attribute) return sensor.attributes[`${attribute}_unit`] || sensor.attributes.unit_of_measurement || "";
    return sensor.attributes.unit_of_measurement || "";
  }
  _evaluateCondition(c4, hass) {
    if (!c4 || !c4.condition) return true;
    switch (c4.condition) {
      case "state": {
        if (!c4.entity) return true;
        const stateObj = hass.states[c4.entity];
        if (!stateObj) return false;
        const val = stateObj.state;
        if (c4.state != null) {
          const match = Array.isArray(c4.state) ? c4.state : [c4.state];
          return match.some((s4) => String(s4) === val);
        }
        if (c4.state_not != null) {
          const match = Array.isArray(c4.state_not) ? c4.state_not : [c4.state_not];
          return match.every((s4) => String(s4) !== val);
        }
        return true;
      }
      case "numeric_state": {
        if (!c4.entity) return true;
        if (!hass.states[c4.entity]) return false;
        const val = this._conditionNumber(hass, c4, c4.entity);
        if (isNaN(val)) return false;
        if (c4.above != null) {
          const a3 = this._conditionNumber(hass, c4.above, c4.entity);
          if (isNaN(a3) || val <= a3) return false;
        }
        if (c4.below != null) {
          const b3 = this._conditionNumber(hass, c4.below, c4.entity);
          if (isNaN(b3) || val >= b3) return false;
        }
        return true;
      }
      case "screen": {
        if (!c4.media_query) return true;
        return window.matchMedia(c4.media_query).matches;
      }
      case "user": {
        if (!Array.isArray(c4.users) || !hass.user) return true;
        return c4.users.includes(hass.user.id);
      }
      case "and": {
        if (!Array.isArray(c4.conditions)) return true;
        return c4.conditions.every((sub) => this._evaluateCondition(sub, hass));
      }
      case "or": {
        if (!Array.isArray(c4.conditions)) return true;
        return c4.conditions.some((sub) => this._evaluateCondition(sub, hass));
      }
      case "not": {
        if (!Array.isArray(c4.conditions)) return true;
        return c4.conditions.every((sub) => !this._evaluateCondition(sub, hass));
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
    return !Array.isArray(button.visibility) || !button.visibility.length || button.visibility.every((c4) => this._evaluateCondition(c4, hass));
  }
  _hasSnapshotChanged(prev, next) {
    for (const k2 in next) if (prev[k2] !== next[k2]) return true;
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
            #card-root.edge-fade::before { content: ""; position: absolute; inset: 0; z-index: 4; pointer-events: none; border-radius: inherit; background: linear-gradient(to bottom, var(--origami-edge-fade-color, var(--primary-background-color, #111)) 0%, transparent var(--origami-edge-fade-size, 10%), transparent calc(100% - var(--origami-edge-fade-size, 10%)), var(--origami-edge-fade-color, var(--primary-background-color, #111)) 100%); }
            #card-root::after { content: ""; position: absolute; inset: 0; z-index: 3; pointer-events: none; border-radius: inherit; background: var(--origami-gradient, none); }
            #card-root:is(.has-default-bg, .has-weather-bg)::after { background-color: color-mix(in srgb, var(--_dash-bg) var(--origami-bg-blend, 0%), transparent); }
            #weather-bg { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 1; display: none; overflow: hidden; overflow: clip; }
            #weather-bg > img, #weather-bg > video { display: block; width: 100%; height: 100%; object-fit: cover; border: none; outline: none; filter: brightness(var(--origami-bg-brightness, 1)) saturate(var(--origami-bg-saturation, 1)) blur(var(--origami-bg-blur, 0px)) var(--_origami-dark-theme-filter, ); }
            #card-root.has-weather-bg #weather-bg { display: block; }
            #default-bg { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 1; display: none; overflow: hidden; overflow: clip; }
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
            #card-root.has-default-bg #default-bg { display: block; }
            #sun-moon-layer { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; z-index: 2; overflow: hidden; overflow: clip; display: none; }
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
            #content-layer { position: relative; display: flex; flex-direction: var(--origami-content-direction, column); justify-content: var(--origami-content-align, flex-start); align-items: var(--origami-content-align-items, stretch); padding: var(--_origami-pad-v, var(--origami-card-padding, 16px)) var(--_origami-pad-h, var(--origami-card-padding, 16px)); box-sizing: border-box; pointer-events: none; overflow: visible; z-index: 5; }
            #content-layer.direction-row { flex-wrap: wrap; }
            #content-layer.direction-row > .buttons-group, #content-layer.direction-row > .cards-group { flex: 1 1 0; min-width: 0; }
            #content-layer > .buttons-group.has-custom-width, #content-layer > .cards-group.has-custom-width { flex: 0 0 auto; width: var(--origami-container-width); align-self: auto; }
            #content-layer:not(.direction-row) > .buttons-group.has-row-horizontal-scroll:not(.has-custom-width) { align-self: stretch; }
            #free-layer > .buttons-group.free-positioned.has-row-horizontal-scroll:not(.has-custom-width) { width: 100%; }
            #card-root.fixed-height #content-layer { position: absolute; inset: 0; height: 100%; }
            #card-root.fixed-height { --_origami-vscroll-fill: calc(100% - var(--_origami-pad-v, var(--origami-card-padding, 16px)) * 2); }
            #free-layer { position: absolute; inset: var(--_origami-pad-v, var(--origami-card-padding, 16px)) var(--_origami-pad-h, var(--origami-card-padding, 16px)); pointer-events: none; box-sizing: border-box; overflow: visible; z-index: 6; container-type: size; }
            #free-layer > .buttons-group.free-positioned { position: absolute; max-width: 100%; }
            #free-layer > .buttons-group.free-positioned.has-custom-width { width: var(--origami-container-width); }
            .buttons-group { pointer-events: auto; min-width: 0; box-sizing: border-box; padding: var(--origami-container-padding, 0); margin: var(--origami-container-margin, 0); }
            .buttons-group.has-image { display: grid; }
            .buttons-group.has-image > * { grid-area: 1 / 1; min-width: 0; }
            .group-image { width: 100%; height: auto; }
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
            .buttons-group.grouped.with-bg { --_bg: var(--origami-container-bg-color, var(--origami-bottom-bg-color, var(--_text-bg))); background: var(--_bg); border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-group-shadow, var(--_origami-shadow)); }
            :where(.buttons-group.grouped, .button).with-bg.blurred { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .buttons-group.grouped.with-bg > .buttons-row .button.with-bg { background: none; border: none; box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none; border-radius: 0; padding: var(--origami-buttons-padding, 0); }
            .buttons-row.has-separator:not(.row-grid) > .button { position: relative; overflow: visible; }
            .buttons-row.has-separator:not(.row-grid) > .button + .button::before { content: ""; position: absolute; pointer-events: none; top: 0; bottom: 0; inset-inline-start: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); width: var(--origami-separator-width, 2px); background: var(--origami-separator-color, color-mix(in srgb, currentColor 10%, transparent)); }
            .buttons-row.has-separator:not(.row-grid).row-vertical-scroll > .button + .button::before { top: calc((var(--origami-bottom-gap, 8px) / -2) - (var(--origami-separator-width, 2px) / 2)); bottom: auto; left: 0; right: 0; inset-inline-start: 0; width: auto; height: var(--origami-separator-width, 2px); }
            .buttons-row { font-size: var(--origami-bottom-font-size, 16px); font-weight: var(--origami-bottom-font-weight, 500); display: flex; align-items: var(--origami-row-align, center); gap: var(--origami-bottom-gap, 8px); width: 100%; box-sizing: border-box; pointer-events: auto; border-radius: inherit; }
            .buttons-row.row-wrap { flex-wrap: wrap; justify-content: var(--origami-row-justify, flex-start); }
            .buttons-row.row-horizontal-scroll { justify-content: var(--origami-row-justify, flex-start); flex-wrap: nowrap; overflow-x: auto; overflow-y: hidden; height: 100%; overflow-anchor: none; scroll-snap-type: x proximity; scrollbar-width: none; pointer-events: auto; }
            .buttons-row.row-horizontal-scroll::-webkit-scrollbar { display: none; }
            .buttons-row.row-horizontal-scroll.has-visible-count { display: grid; grid-auto-flow: column; grid-auto-columns: var(--origami-button-basis); scroll-snap-type: x mandatory; }
            .buttons-row.row-horizontal-scroll.has-visible-count > .button { width: 100%; scroll-snap-align: start; }
            .buttons-row.row-vertical-scroll { justify-content: var(--origami-row-justify, flex-start); align-items: var(--origami-row-align, stretch); flex-direction: column; flex-wrap: nowrap; overflow-y: auto; overflow-x: hidden; height: 100%; max-height: var(--origami-row-max-height, none); overflow-anchor: none; scroll-snap-type: y proximity; scrollbar-width: none; pointer-events: auto; }
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
            .button { display: flex; flex-direction: row; align-items: center; row-gap: var(--origami-button-gap, 6px); column-gap: var(--origami-button-gap, 0.40em); flex-wrap: nowrap; flex: 0 0 auto; min-width: 0; max-width: 100%; white-space: nowrap; box-sizing: border-box; scroll-snap-align: start; padding: var(--origami-buttons-padding, 0); cursor: pointer; -webkit-tap-highlight-color: transparent; transition: transform 0.4s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.2, 0, 0.2, 1); }
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
            .button.with-bg { --_bg: var(--origami-bottom-bg-color, var(--_text-bg)); background: var(--_bg); padding: var(--origami-buttons-padding, 5px 10px); text-shadow: none; border-radius: var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)); align-items: center; border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); }
            .button.with-bg.blurred { backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); -webkit-backdrop-filter: var(--origami-bottom-bg-filter, blur(10px)); }
            .button:is(.with-bg, .has-bg-image) .button-text { text-shadow: none; }
            .button.has-bg-image { padding: var(--origami-buttons-padding, 5px 10px); text-shadow: none; border-radius: var(--origami-bottom-bg-radius, calc(var(--_radius) - 5px)); align-items: center; border: var(--origami-bg-border, var(--ha-card-border-width, 1px) solid var(--_text-bg-border, transparent)); box-shadow: var(--_origami-button-shadow); overflow: hidden; background-image: var(--origami-button-bg-image); background-size: cover; background-position: center; background-repeat: no-repeat; }
            .button.button-round.has-bg-image { border-radius: 999px; }
            #weather-effects { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: 3; display: none; }
            #card-root.has-weather-effects #weather-effects { display: block; }
            #card-root:is(.has-default-bg, .has-weather-bg) :is(#sun-moon-layer, #weather-effects) { filter: var(--_origami-dark-theme-filter, none); }
            #star-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; border-radius: inherit; z-index: 2; display: none; }
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
            .button-ring-gauge > :not(.gauge-marker) { --_seg: #000 var(--_arc), transparent 0; inset: 0; border-radius: 50%; -webkit-mask: conic-gradient(var(--_from), var(--_seg)), var(--_ring); mask: conic-gradient(var(--_from), var(--_seg)), var(--_ring); -webkit-mask-composite: source-in; mask-composite: intersect; }
            .button-ring-gauge > .gauge-fill { --_seg: #000 calc(var(--origami-gauge-pos) * var(--_arc)), transparent 0; background-image: conic-gradient(var(--_from), var(--origami-gauge-stops)); }
            .button-ring-gauge > .gauge-range { --_seg: transparent calc(var(--origami-range-from) * var(--_arc)), #000 0 calc(var(--origami-range-to) * var(--_arc)), transparent 0; }
            .button-ring-gauge > .gauge-marker { --_a: calc(var(--origami-gauge-pos) * var(--_arc) + var(--origami-gauge-start, 0deg)); left: 50%; top: 0; width: 0; height: 50%; box-shadow: none; transform: rotate(var(--_a)); transform-origin: bottom; }
            .button-ring-gauge > .gauge-marker::before, .button-ring-gauge > .gauge-marker ha-icon { position: absolute; left: 0; top: calc(var(--origami-gauge-w) / 2); transform: translate(-50%, -50%) rotate(calc(-1 * var(--_a))); }
            .button-ring-gauge > .gauge-marker::before { content: ''; width: var(--origami-marker-size); height: var(--origami-marker-size); border-radius: 50%; background: var(--origami-gauge-color); box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.10); }
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
            .button.button-bar-type.format-vertical .button-bar { align-self: stretch; }
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
            .cards-group { pointer-events: auto; align-self: stretch; box-sizing: border-box; }
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
    root.innerHTML = `<div id="default-bg"><div id="sky-base"></div><div class="sky-haze"><div class="haze-layer h1"></div><div class="haze-layer h2"></div><div class="haze-layer h3"></div></div></div><div id="weather-bg"></div><canvas id="star-canvas"></canvas><div id="sun-moon-layer"><div id="sun-moon"><div class="sun"><div class="sun-glow"></div><div class="sun-disc"></div></div><div class="moon"><div class="moon-glow"></div><svg class="moon-disc" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="wbk-moon-surface" cx="38%" cy="34%" r="78%"><stop offset="0%" stop-color="#eef0f4"/><stop offset="45%" stop-color="#dce0e8"/><stop offset="100%" stop-color="#b8bcc6"/></radialGradient><clipPath id="wbk-moon-lit"><path class="moon-lit-path" d=""/></clipPath></defs><g clip-path="url(#wbk-moon-lit)"><circle class="moon-surface" cx="50" cy="50" r="48" fill="url(#wbk-moon-surface)"/><image class="moon-image" x="2" y="2" width="96" height="96" preserveAspectRatio="xMidYMid slice"/></g></svg></div></div><div id="sun-rays"></div></div><canvas id="weather-effects"></canvas><div id="content-layer"></div><div id="free-layer"></div>`;
    this.shadowRoot.append(root);
    const q = (sel) => root.querySelector(sel);
    const contentLayer = q("#content-layer");
    contentLayer.addEventListener("click", (e4) => this._handleButtonClick(e4));
    const freeLayer = q("#free-layer");
    freeLayer.addEventListener("click", (e4) => this._handleButtonClick(e4));
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
    for (let i5 = 0; i5 < current.length; i5++) {
      const container = this._containers[i5];
      const isCard = !!container.custom_cards;
      const el = current[i5];
      if (isCard !== !!el.isCard) {
        el.group.remove();
        current[i5] = null;
      }
    }
    for (let i5 = 0; i5 < wanted; i5++) {
      if (current[i5]) {
        current[i5].group.dataset.container = String(i5);
        continue;
      }
      const container = this._containers[i5];
      const isCard = !!container.custom_cards;
      const group = document.createElement("div");
      group.className = isCard ? "cards-group" : "buttons-group";
      group.dataset.container = String(i5);
      const row = document.createElement("div");
      row.className = isCard ? "cards-row" : "buttons-row";
      if (isCard) row.addEventListener("click", (e4) => e4.stopPropagation());
      group.appendChild(row);
      const entry = { group, row, isCard };
      if (i5 < current.length) current[i5] = entry;
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
    const dark = this._schemeDark, base = (dark && cfg.background_color_dark || cfg.background_color || "").toString().trim();
    const thresholds = Array.isArray(cfg.background_thresholds) ? cfg.background_thresholds : [];
    if (!thresholds.length || !this._hass) return base;
    const entity = cfg.background_threshold_entity;
    if (!entity) return base;
    const value = this._sensorValue(this._hass, entity, cfg.background_threshold_attribute);
    return pickThreshold(dark ? thresholds.map((t3) => ({ ...t3, color: t3.color_dark || t3.color })) : thresholds, value) || base;
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
    root.classList.toggle("bg-ha-card", bgMode === "card");
    root.classList.toggle("bg-custom-color", bgMode === "color");
    this._cssVar(root, "--origami-card-bg-color", bgMode === "color" ? cssValue(this._resolveCardBackgroundColor(cfg)) : "", "_prevCardBgColor");
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
    root.classList.toggle("no-haze", cfg.background_haze === false);
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
    const padParts = cssLength(cfg.card_padding).split(" ");
    this._cssVar(root, "--_origami-pad-v", padParts[0], "_prevPadV");
    this._cssVar(root, "--_origami-pad-h", padParts[1] || padParts[0], "_prevPadH");
    if (!this._containerStyleCache) this._containerStyleCache = [];
    for (let ai = 0; ai < this._containers.length; ai++) {
      this._applyContainerStyles(ai, this._containers[ai]);
    }
  }
  _applyContainerStyles(ai, container) {
    const els = this._elements.buttonContainerEls[ai];
    if (!els) return;
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
    const customWidth = normalizeLength((container.custom_width || "").toString().trim());
    cssVarContainer(cg, "--origami-container-width", customWidth, "containerWidth");
    if (cache.hasCustomWidth !== !!customWidth) {
      cache.hasCustomWidth = !!customWidth;
      cg.classList.toggle("has-custom-width", !!customWidth);
    }
    const image = (container.image || "").toString().trim(), imageDark = image && (container.image_dark || "").toString().trim();
    if (cache.image !== `${image}|${imageDark}`) {
      cache.image = `${image}|${imageDark}`;
      for (const n4 of cg.querySelectorAll(".group-image")) n4.remove();
      const img = (src, mode) => src === "demo-home-image" ? DEMO_HOME.replace("group-image", `group-image${mode}`) : `<img class="group-image${mode}" src="${escapeHtml(src)}">`;
      if (image) cg.insertAdjacentHTML("afterbegin", img(image, imageDark && " light") + (imageDark && img(imageDark, " dark")));
      cg.classList.toggle("has-image", !!image);
    }
    const free = freeStyle(container), freeSig = String(free);
    if (cache.freeSig !== freeSig) {
      cache.freeSig = freeSig;
      cg.classList.toggle("free-positioned", free.length > 0);
      for (const p3 of ["left", "right", "top", "bottom", "transform"]) cg.style.removeProperty(p3);
      for (const [p3, v2] of free) cg.style.setProperty(p3, v2);
    }
    const hasFree = container.buttons.some((b3) => freeStyle(b3).length > 0);
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
      for (const m2 of ["horizontal-scroll", "wrap", "grid", "vertical-scroll"]) bt.classList.toggle("row-" + m2, rowLayout === m2);
      for (const m2 of ["horizontal-scroll", "vertical-scroll"]) cg.classList.toggle("has-row-" + m2, rowLayout === m2);
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
      for (const a3 of ["start", "center", "end", "spread"]) bt.classList.toggle(`align-${a3}`, align === a3);
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
    const allRendered = [];
    for (let ai = 0; ai < this._containers.length; ai++) {
      const container = this._containers[ai];
      const els = this._elements.buttonContainerEls[ai];
      if (!els) continue;
      const containerVisible = this._checkButtonVisibility(container, hass);
      els.group.style.display = containerVisible ? "" : "none";
      if (!containerVisible) continue;
      if (container.custom_cards) {
        if (els.group.parentNode !== this._elements.contentLayer) this._elements.contentLayer.appendChild(els.group);
        continue;
      }
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
      allRendered.push(...rendered.filter((r4) => !r4.hidden));
      if (!this._containerRenderCache[ai]) this._containerRenderCache[ai] = {};
      const ac = this._containerRenderCache[ai];
      const rowSig = rendered.map((r4) => r4.sig).join("\xA7");
      const rowRebuilt = ac.lastLocStr !== rowSig;
      if (rowRebuilt) {
        ac.lastLocStr = rowSig;
        bt.innerHTML = rendered.map((r4) => r4.html).join("");
        this._animateGauges(bt, `a${ai}`);
        if (hasVis && rowLayout === "vertical-scroll") this._scheduleVerticalMeasure(ai);
        anyRowRebuilt = true;
      }
      const isFreeContainer = (container.position || "").toString().toLowerCase() === "custom";
      const targetLayer = isFreeContainer ? this._elements.freeLayer : this._elements.contentLayer;
      if (els.group.parentNode !== targetLayer) targetLayer.appendChild(els.group);
    }
    if (anyRowRebuilt) {
      this._nativeIconCache = null;
      this._refreshMarqueeObservation();
    }
    this._pinScrollOrigins();
    const hasNativeIcons = allRendered.some((r4) => r4.showIcon && r4.iconStrategy === "native");
    if (hasNativeIcons) {
      if (!this._nativeIconCache) {
        this._nativeIconCache = [];
        for (const r4 of allRendered) {
          if (!r4.showIcon || r4.iconStrategy !== "native") continue;
          const iconEl = this._elements.buttonContainerEls[r4.containerIdx].row.querySelector(`.button[data-idx="${r4.buttonIdx}"] ha-state-icon`);
          if (iconEl) this._nativeIconCache.push({ rendered: r4, el: iconEl });
        }
      }
      for (let j = 0; j < this._nativeIconCache.length; j++) {
        const entry = this._nativeIconCache[j], r4 = entry.rendered;
        if (entry.el.hass !== hass || entry.el.stateObj !== r4.sensorObj) {
          entry.el.hass = hass;
          entry.el.stateObj = r4.sensorObj;
        }
      }
    }
  }
  _animateGauges(root, prefix) {
    const prev = this._gaugePrev || (this._gaugePrev = /* @__PURE__ */ new Map()), queue = [];
    for (const g2 of root.querySelectorAll("[data-gauge]")) g2.querySelectorAll(".gauge-fill, .gauge-marker").forEach((el, i5) => {
      const key = `${prefix}${g2.dataset.gauge}:${i5}`, from = prev.get(key), target = el.style.getPropertyValue("--origami-gauge-pos");
      if (from !== void 0) el.style.animation = "none";
      el.style.setProperty("--origami-gauge-pos", from || "0");
      queue.push([el, target]);
      prev.set(key, target);
    });
    if (queue.length) requestAnimationFrame(() => requestAnimationFrame(() => {
      for (const [el, t3] of queue) el.style.setProperty("--origami-gauge-pos", t3);
    }));
  }
  _buildGauge(o5, p3, valueOf) {
    const num = (v2) => gaugeNum(v2, this._hass), raw = Object.fromEntries(GAUGE_NUMS.map((k2) => [k2, GAUGE_REF.test(o5[p3 + k2]) ? valueOf({ entity: o5[p3 + k2] }) : o5[p3 + k2]]));
    const n4 = Object.fromEntries(GAUGE_NUMS.map((k2) => [k2, num(raw[k2])])), defs = gaugeDefs(o5, p3), raws = defs.map(valueOf), clock = [raw.min, raw.max, ...raws].some(isTime);
    const arc = n4.arc > 0 && n4.arc < 360 ? n4.arc : 360, w2 = n4[p3 === "ring_" ? "width" : "height"] || 4, ms = n4.marker_size > 0 ? n4.marker_size : w2;
    const min = n4.min || 0, span = clock ? (n4.max - min + 24) % 24 || 24 : (n4.max || 100) - min || 1, max = min + span, near = (x2) => clock ? x2 - 24 * Math.round((x2 - min - span / 2) / 24) : x2;
    const values = defs.map((def, i5) => ({ def, value: near(num(raws[i5])), size: parseFloat(def.marker_size ?? ms) })), v0 = values[0].value;
    const at = (v2) => isNaN(v2) ? 0 : Math.max(0, Math.min(1, (v2 - min) / span)), pct = (v2) => `${(at(v2) * arc / 360 * 100).toFixed(1)}%`;
    const mode = o5[p3 + "threshold_mode"] || "solid", ts = (Array.isArray(o5[p3 + "thresholds"]) ? o5[p3 + "thresholds"] : []).filter((t3) => t3.color).map((t3) => [near(num(t3.value)), t3.color]).filter((t3) => !isNaN(t3[0])).sort((a3, b3) => a3[0] - b3[0]);
    const stops = mode === "solid" ? "" : ts.map(([v2, c4], i5) => `${cssValue(c4)} ${pct(v2)}${mode === "segments" ? ` ${pct(ts[i5 + 1] ? ts[i5 + 1][0] : max)}` : ""}`).join(", ");
    const color = mode === "solid" && ts.filter((t3) => t3[0] <= v0).pop()?.[1] || o5[p3 + "color"] && o5[p3 + "color"] !== "auto" && o5[p3 + "color"] || "var(--primary-color, #03a9f4)";
    const needle = o5[p3 + "needle"] === true, marked = needle || values.length > 1 || o5[p3 + "marker"] === true || o5[p3 + "fill"] === false, rf = near(n4.range_from), rt = near(n4.range_to), ra = at(Math.min(rf, rt)), rb = at(Math.max(rf, rt));
    const style = [`--origami-gauge-w:${w2}px`, `--origami-gauge-color:${cssValue(color)}`];
    if (n4.marker_icon_size > 0) style.push(`--origami-marker-icon-size:${n4.marker_icon_size}px`);
    if (n4.start) style.push(`--origami-gauge-start:${n4.start}deg`);
    if (arc < 360) style.push(`--origami-gauge-arc:${arc}deg`);
    let html = '<div class="gauge-track"></div>';
    if (o5[p3 + "fill"] !== false) html += `<div class="gauge-fill" style="--origami-gauge-pos:${at(v0).toFixed(4)}${stops ? `;--origami-gauge-stops:${stops}` : ""}"></div>`;
    if (rb > ra) html += `<div class="gauge-range" style="--origami-range-from:${ra.toFixed(4)};--origami-range-to:${rb.toFixed(4)}${o5[p3 + "range_color"] ? `;background:${cssValue(o5[p3 + "range_color"])}` : ""}"></div>`;
    if (marked) html += values.filter((v2) => v2.size).map(({ def: d3, value, size }) => `<div class="gauge-marker${needle ? " needle" : ""}" style="--origami-gauge-pos:${at(value).toFixed(4)};--origami-marker-size:${size}px${d3.marker_color ? `;--origami-gauge-color:${cssValue(d3.marker_color)}` : ""}${d3.marker_icon_color ? `;color:${cssValue(d3.marker_icon_color)}` : ""}">${d3.marker_icon ? `<ha-icon icon="${escapeHtml(d3.marker_icon)}"></ha-icon>` : ""}</div>`).join("");
    return { style: style.join(";"), html, overflow: marked && values.some((v2) => v2.size > w2) };
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
      return button.elements.filter((e4) => e4 && typeof e4 === "object" && (e4.type === "text" || e4.type === "icon" || e4.type === "bar")).map((e4) => ({ ...e4 }));
    }
    return [{ type: "text" }];
  }
  _sensorValue(hass, entity, attribute) {
    const r4 = this._resolveSensorValue(hass, entity, attribute);
    return r4.rawNumeric != null ? r4.rawNumeric : r4.formatted;
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
    const _wOp = (w2) => {
      const n4 = parseFloat(w2);
      if (isNaN(n4)) return "";
      return Math.min(1, Math.max(0.4, 0.4 + (n4 - 100) * 0.6 / 800)).toFixed(2);
    };
    const resolved = this._resolveButtonText(hass, button, txt, textCtx);
    const value = escapeHtml(resolved.value), unit = escapeHtml(resolved.unit);
    const content = txt.fancy_unit === true ? `${value}<span class="fancy-unit">${unit}</span>` : resolved.tight ? `${value}${unit}` : unit ? `${value} ${unit}` : value;
    const overflow = (txt.overflow || "ellipsis").toString().toLowerCase().trim();
    const txtStyles = [];
    if (txt.size) txtStyles.push(`font-size:${cssLength(txt.size)}`);
    if (txt.weight) {
      txtStyles.push(`font-weight:${cssValue(txt.weight)}`);
      const o5 = !txt.color && _wOp(txt.weight);
      if (o5) txtStyles.push(`opacity:${o5}`);
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
      const forecastTextAttr = (textEls.find((t3) => !t3.entity && t3.attribute && t3.attribute !== "condition" && t3.attribute !== "datetime") || {}).attribute || null;
      const f3 = this._resolveForecastValue(hass, button);
      let iconValue2 = f3.condition ? _weatherTuning(f3.condition).icon : "mdi:information-outline";
      if (forecastTextAttr) iconValue2 = FORECAST_ATTR_ICONS[forecastTextAttr] || iconValue2;
      return {
        sensorObj: null,
        iconStrategy: "static",
        iconValue: iconValue2,
        primaryResolved: null,
        formatted: f3.formatted,
        isForecast: true,
        forecastCondition: f3.condition,
        forecastDatetime: f3.datetime,
        forecastLoading: !!f3.loading,
        forecastEntry: f3.entry || null,
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
    const textEls = elements.filter((e4) => e4.type === "text");
    const iconEls = elements.filter((e4) => e4.type === "icon");
    const barEls = elements.filter((e4) => e4.type === "bar");
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
      forecastEntry,
      forecastTextAttr
    } = this._resolveButtonData(button, hass, textEls);
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
    const gauge = (o5, p3) => this._buildGauge(o5, p3, (def) => this._resolveGaugeValue(hass, button, def, textCtx));
    const threshold = (o5, def) => Array.isArray(o5.color_thresholds) && o5.color_thresholds.length ? pickThreshold(o5.color_thresholds, this._resolveGaugeValue(hass, button, def, textCtx)) : "";
    const parts = [];
    const push = (html, icon) => {
      const last = parts[parts.length - 1];
      if (!icon && last && !last.icon) last.html += html;
      else parts.push({ html, icon });
    };
    let hasAnyMarquee = false, firstIconStrategy = "static", firstIconSet = false, barCount = 0, barOverflow = false;
    for (const el of elements) {
      if (el.type === "text") {
        const b3 = this._buildTextElement(hass, button, el, textCtx, marqueeSpeed, marqueeRtl);
        push(b3.html);
        if (b3.hasMarquee) hasAnyMarquee = true;
      } else if (el.type === "icon") {
        const r4 = resolveIconEl(el);
        if (!firstIconSet) {
          firstIconStrategy = r4.strategy;
          firstIconSet = true;
        }
        push(this._buildIconElement(el, r4, threshold(el, el) || el.color), true);
      } else if (el.type === "bar") {
        const g2 = gauge(el, "bar_");
        push(`<div class="button-bar" data-gauge="${idx}-${barCount++}" style="${g2.style}${_elBoxStyle(el)}">${g2.html}</div>`);
        barOverflow = barOverflow || g2.overflow;
      }
    }
    const elementsHtml = parts.map((p3) => effectiveFormat === "split" && !p3.icon ? `<span class="button-stack">${p3.html}</span>` : p3.html).join("");
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
    for (const [k2, v2] of [
      ["text_size", "--origami-bottom-font-size"],
      ["inner_gap", "--origami-button-gap"],
      ["icon_size", "--weather-icon-size"],
      ["icon_padding", "--weather-icon-padding"]
    ]) {
      if (button[k2]) inlineStyles.push(`${v2}:${cssLength(button[k2])}`);
    }
    if (button.text_size) inlineStyles.push(`font-size:${cssLength(button.text_size)}`);
    if (button.text_shadow === true) inlineStyles.push("--_button-no-bg-shadow:var(--_button-shadow-avail)");
    const effectiveButtonShadow = (button.shadow !== void 0 ? button.shadow : containerCtx.button_shadow) !== false;
    if (!effectiveButtonShadow || containerScrollable) inlineStyles.push("--_origami-button-shadow:none");
    const buttonAlignClass = _ALIGN_CLASSES.has(button.align) ? button.align : "";
    if (buttonAlignClass) classes.push(`align-${buttonAlignClass}`);
    if (button.button_round === true) classes.push("button-round");
    const free = freeStyle(button).map((p3) => p3.join(":")).join(";"), freeCss = free && `position:absolute;${free}`;
    if (free && !isRingType) {
      classes.push("free-positioned");
      inlineStyles.push(freeCss);
    }
    const loaderHtml = forecastLoading ? '<div class="button-loader"><span></span><span></span><span></span></div>' : "";
    const style = inlineStyles.length ? ` style="${inlineStyles.join(";")}"` : "";
    let buttonHtml = `<div class="${classes.join(" ")}" data-idx="${idx}" data-container="${containerIdx}"${style}>${loaderHtml}${elementsHtml}</div>`;
    if (isRingType) {
      const g2 = gauge(button, "ring_");
      buttonHtml = `<div class="button-ring-wrap${free && " free-positioned"}${forecastLoading ? " button-loading" : ""}" data-idx="${idx}" data-container="${containerIdx}" style="--origami-ring-gap:${parseFloat(button.ring_gap) || 3}px${free && `;${freeCss}`}"><div class="button-ring-gauge" data-gauge="${idx}" style="${g2.style}">${g2.html}</div>${buttonHtml}</div>`;
    }
    const sig = width ? `${buttonHtml}|${width}` : buttonHtml;
    return { html: buttonHtml, sig, sensorObj, iconStrategy: firstIconStrategy, showIcon, width, containerIdx, buttonIdx: idx, hidden: false };
  }
  _backgroundMode(cfg) {
    const c4 = cfg || this._config || {};
    return typeof c4.background_mode === "string" ? c4.background_mode : "default";
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
    const exts = ["", ".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".mp4"];
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
      container.innerHTML = "";
      container.appendChild(el);
      root.classList.add("has-weather-bg");
      this._weatherBgActive = true;
      this._startAnimation();
    };
    if (exts[idx] === ".mp4") {
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
    if (!root || this._backgroundMode() !== "default") return;
    const scheme = schemeDark ? "dark" : "light";
    const sig = `${weatherState}|${scheme}`;
    if (this._hazeStyleSig === sig) return;
    this._hazeStyleSig = sig;
    const ht = (_HAZE_TUNING[weatherState] || _HAZE_TUNING.default)[scheme];
    const pal = _HAZE_PALETTE[scheme];
    const toned = (c4, aMul) => {
      const ch = (i5) => Math.round(c4[i5] + (ht.tone[i5] - c4[i5]) * ht.mix);
      return `rgba(${ch(0)},${ch(1)},${ch(2)},${Math.min(1, c4[3] * aMul).toFixed(3)})`;
    };
    for (let i5 = 0; i5 < pal.length; i5++) {
      const p3 = pal[i5];
      root.style.setProperty(`--origami-haze${i5 + 1}-c`, toned(p3.c, ht.alpha));
      root.style.setProperty(`--origami-haze${i5 + 1}-core`, toned(p3.core || p3.c, ht.alpha * (p3.core ? ht.core : 1)));
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
      for (const w2 of writes) {
        if (w2.value) w2.row.style.setProperty("--origami-row-max-height", w2.value);
        else w2.row.style.removeProperty("--origami-row-max-height");
      }
    });
  }
  _pinScrollOrigins() {
    const list = this._containers;
    if (!Array.isArray(list) || !this._elements) return;
    for (let i5 = 0; i5 < list.length; i5++) {
      const c4 = list[i5];
      if (!c4 || c4.custom_cards) continue;
      const layout = (c4.layout || "").toString().toLowerCase();
      const horizontal = layout === "horizontal-scroll", vertical = layout === "vertical-scroll";
      if (!horizontal && !vertical) continue;
      const cache = this._containerStyleCache && this._containerStyleCache[i5];
      if (!cache || cache.scrollPinned) continue;
      const bt = this._elements.buttonContainerEls[i5] && this._elements.buttonContainerEls[i5].row;
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
    for (let i5 = 0; i5 < list.length; i5++) {
      const c4 = list[i5];
      if (!c4 || c4.custom_cards || (c4.layout || "").toString().toLowerCase() !== "vertical-scroll") continue;
      const n4 = parseInt(c4.scroll_count, 10);
      if (Number.isFinite(n4) && n4 > 0) this._scheduleVerticalMeasure(i5);
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
      for (let i5 = 0; i5 < shown; i5++) {
        const h3 = bt.children[i5].offsetHeight;
        if (!h3) return null;
        total += h3;
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
  _handleTap(e4) {
    e4.stopPropagation();
    const cfg = this._config;
    if (!cfg || !cfg.card_tap_action || cfg.card_tap_action.action === "none") return;
    this.dispatchEvent(new CustomEvent("hass-action", { bubbles: true, composed: true, detail: { config: { entity: cfg.weather_entity, tap_action: cfg.card_tap_action }, action: "tap" } }));
  }
  _handleButtonClick(e4) {
    const buttonEl = e4.target.closest(".button");
    if (!buttonEl) return;
    const idx = parseInt(buttonEl.dataset.idx, 10);
    const containerIdx = parseInt(buttonEl.dataset.container, 10);
    if (isNaN(idx) || isNaN(containerIdx)) return;
    const container = this._containers && this._containers[containerIdx];
    if (!container) return;
    const button = container.buttons && container.buttons[idx];
    if (!button || !button.entity) return;
    e4.stopPropagation();
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
  _updateCanvasDimensions(w2, h3) {
    w2 = Math.floor(w2);
    h3 = Math.floor(h3);
    if (w2 === 0 || h3 === 0) return false;
    if (this._cachedDimensions.width === w2 && this._cachedDimensions.height === h3) return false;
    this._cachedDimensions = { width: w2, height: h3 };
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
    const starsOn = on && cfg.night_sky_effects !== false && this._isAstroNight && tuning.starCount > 0 && tuning.starOpacity > 0;
    const stars = starsOn ? { count: tuning.starCount, opacity: tuning.starOpacity } : null;
    const actor = (kind, allowed) => {
      const activity = on && allowed && cfg[`${kind}_effects`] !== false ? WeatherEffects[`${kind}Activity`](weatherState) : 0;
      return activity > 0 ? { activity, state: weatherState, density: Math.max(0.25, Math.min(4, parseFloat(cfg[`${kind}_density`]) || 1)) } : null;
    };
    const birds = actor("bird", !this._schemeDark), balloon = actor("balloon", true), planes = actor("plane", true);
    const active = !!recipe || !!cloudState || !!stars || !!birds || !!balloon || !!planes;
    if (active && !this._sizeEffectsCanvas()) {
      this._effectsActive = false;
      els.root.classList.remove("has-weather-effects");
      return;
    }
    WeatherEffects.set(this._effects, recipe, els.root.clientWidth, els.root.clientHeight, cloudState, stars, birds, balloon, planes);
    this._effectsActive = active;
    els.root.classList.toggle("has-weather-effects", active);
    els.root.classList.toggle("has-star-canvas", !!stars);
    if (active) this._startAnimation();
  }
  _effectsEnv() {
    const sm = this._elements.sunMoon, cx = sm.offsetLeft, cy = sm.offsetTop, sunSize = sm.offsetWidth;
    let glow = null;
    if (this._sunMoonActive && this._sunGlowVisibility > 0.05) {
      const r4 = sunSize * 2.4;
      glow = { x: cx, y: cy, r2: r4 * r4, s: 0.55 * this._sunGlowVisibility * (this._sunGlowIsNight ? 0.5 : 1) };
    }
    let moon = null;
    if (this._sunMoonActive && this._isAstroNight) {
      moon = { x: cx, y: cy, r: sunSize / 2 };
    }
    return { schemeDark: this._schemeDark, glow, moon, night: this._isAstroNight, backgroundRGB: this._backgroundColor(this._schemeDark) };
  }
  _backgroundColor(schemeDark) {
    const key = schemeDark ? "dark" : "light";
    if (this._backgroundColorCache && this._backgroundColorCache.key === key) return this._backgroundColorCache.v;
    let v2 = schemeDark ? [16, 33, 61] : [209, 229, 242];
    try {
      const sky = this._elements?.root?.querySelector("#sky-base");
      if (sky) {
        const bg = getComputedStyle(sky).backgroundImage || "";
        const hexes = bg.match(/#([0-9a-f]{6})/gi);
        const rgbs = bg.match(/rgba?\([^)]+\)/gi);
        let r4 = 0, g2 = 0, b3 = 0, cnt = 0;
        const add = (cr, cg, cb) => {
          r4 += cr;
          g2 += cg;
          b3 += cb;
          cnt++;
        };
        if (hexes) for (const hx of hexes) {
          const n4 = hx.slice(1);
          add(parseInt(n4.slice(0, 2), 16), parseInt(n4.slice(2, 4), 16), parseInt(n4.slice(4, 6), 16));
        }
        if (rgbs) for (const rs of rgbs) {
          const p3 = rs.replace(/rgba?\(|\)/g, "").split(",").map(Number);
          if (p3.length >= 3) add(p3[0], p3[1], p3[2]);
        }
        if (cnt) v2 = [Math.round(r4 / cnt), Math.round(g2 / cnt), Math.round(b3 / cnt)];
      }
    } catch (_2) {
    }
    this._backgroundColorCache = { key, v: v2 };
    return v2;
  }
  _drawEffects(now) {
    const ctx = this._effectsCtx, els = this._elements;
    if (!ctx || !els || !els.root) return;
    const w2 = this._effectsW, h3 = this._effectsH;
    if (!w2 || !h3) return;
    const dt = Math.max(1e-3, Math.min(0.05, (now - this._lastEffectsTime) * 1e-3));
    this._lastEffectsTime = now;
    const alive = WeatherEffects.frame(this._effects, ctx, w2, h3, this._effectsScale, dt, now * 1e-3, this._effectsEnv(), this._starCtx);
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
