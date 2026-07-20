# ◪ Origami Weather

A Home Assistant weather card focused on design and flexibility.

<img width="400" alt="image" src="https://github.com/user-attachments/assets/7e8bd143-822e-4b77-8457-b3ece0712b14" />

<br>

**Getting Started** · [Installation](#installation) · [Setup](#setup) · [Examples](#examples)

**How It Works** · [Layouts](#layouts) · [Backgrounds](#backgrounds)

**Reference** · [Options](#options) · [Performance](#performance) · [History](#history)

<br>

## Installation

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=PLACEHOLDER&repository=origami-weather&category=plugin)

<details>
<summary><b>HACS (Recommended)</b></summary>

<br>

1. Open **HACS** → **Frontend**.
2. Search for **Origami Weather** and click **Download**.
3. Reload your dashboard.

</details>

<details>
<summary><b>Manual</b></summary>

<br>

1. Download `origami-weather.js` from the latest release.
2. Place the file in `config/www/`.
3. Go to **Settings** → **Dashboards** → **⋮** → **Resources**.
4. Add `/local/origami-weather.js` as a JavaScript Module.
5. Hard-refresh your browser.

</details>

<br>

## Setup

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `weather_entity` | `string` | — | **Required.** Your weather integration entity (e.g. `weather.home`). |
| `sun_entity` | `string` | — | **Required.** Tracks the sun. Without it the card stays in permanent day mode. |
| `moon_phase_entity` | `string` | — | **Recommended.** Shows the moon in the current moon phase |

The card has a visual editor. When you add it, a small default layout is set up. From there you can build your own layout by adding, removing, and rearranging containers and buttons (see [Layout](#layout)), or just use one of the examples below and adjust it.

<br>

## Examples

These are starting points. Everything can be changed, mixed, and combined.

<img width="400" alt="Image" src="https://github.com/user-attachments/assets/PLACEHOLDER-DEFAULT" />

<details>
<summary><b>Default Card YAML</b></summary>

<br>

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_entity: sun.sun
card_height: 130px
button_containers:
  - padding: 0 4px
    buttons:
      - entity: weather.home
        text_size: 30px
        hide_icon: true
        padding: 0px 4px
        texts:
          - fancy_unit: true
  - padding: 0px 8px
    gap: 8px
    background: true
    buttons:
      - entity: weather.home
        attribute: uv_index
        icon: weather
        icon_size: 34px
        type: ring
        ring_width: 4px
        ring_gap: 10px
        ring_max: "11"
        ring_threshold_mode: gradient
        padding: 14px
        texts: []
        ring_thresholds:
          - value: "0"
            color: rgba(128, 191, 172, 0.8)
          - value: "5"
            color: rgba(235, 198, 113, 0.8)
          - value: "10"
            color: rgba(168, 64, 115, 0.8)
  - background: true
    align: center
    buttons:
      - entity: weather.home
        forecast: daily
        text_size: 12px
        hide_icon: true
        padding: 8px 12px
        text_gap: 5px
        texts:
          - text: "Today: "
            size: 12px
          - attribute: templow
            format: " –"
            size: 12px
            weight: "700"
          - attribute: temperature
            weight: "700"
```

</details>

<br>

## Layouts

<details>
<summary><b>Containers</b></summary>

<br>

Containers are the top-level layout blocks. Each one holds a list of buttons and controls how they're arranged. Stack multiple containers to build the card layout.

They flow vertically by default. Set `content_direction: row` at the card level for horizontal, or use `custom_width` on individual containers.

```yaml
button_containers:
  - padding: 0 4px
    buttons:
      - entity: weather.home
        text_size: 30px
        hide_icon: true
  - background: true
    gap: 8px
    buttons:
      - entity: sensor.humidity
      - entity: sensor.wind_speed
```

Containers can also hold other HA cards instead of buttons using `custom_cards`:

```yaml
button_containers:
  - custom_cards:
      - type: custom:mini-graph-card
        entities:
          - sensor.temperature
```

</details>

<details>
<summary><b>Buttons</b></summary>

<br>

Buttons are the elements inside a container. Each one shows live data from any HA entity: a sensor value, weather attribute, forecast entry, or just an icon.

They can be styled individually or inherit defaults from their container. They support gauges (ring and bar), conditional visibility, free positioning, tap actions, and marquee overflow.

```yaml
buttons:
  - entity: sensor.outside_temperature
    icon: mdi:thermometer
    texts:
      - attribute: temperature
```

**Conditional visibility** — show a button only when conditions are met, using standard HA visibility conditions:

```yaml
buttons:
  - entity: sensor.wind_gust
    visibility:
      - condition: numeric_state
        entity: sensor.wind_gust
        above: 40
```

State, numeric state, screen size, user, and `and`/`or`/`not` conditions are supported. Visibility also works at the container level.

**Free positioning** — any button can be pulled out of its container and placed anywhere on the card:

```yaml
buttons:
  - entity: sensor.outside_temperature
    position: custom
    position_anchor: top-right
    position_x: 20px
    position_y: 10px
    background: true
```

</details>

<details>
<summary><b>Texts</b></summary>

<br>

Buttons use a `texts` array to display values. Each entry can pull from a different entity or attribute, have its own size and weight, and they all render inline together. This makes it easy to compose things like "Today: 8° – 14°" in a single button.

```yaml
buttons:
  - entity: weather.home
    forecast: daily
    hide_icon: true
    texts:
      - text: "Today: "
        size: 12px
      - attribute: templow
        format: " –"
        weight: "700"
      - attribute: temperature
        weight: "700"
```

Each text entry supports: `entity`, `attribute`, `text` (static string), `format` (appended to the value), `size`, `weight`, `overflow` (ellipsis, clip, wrap, marquee), and `fancy_unit` (superscript unit).

If you don't set a `texts` array, the button falls back to showing the entity state with a single default text.

</details>

<details>
<summary><b>Forecasts</b></summary>

<br>

Set `forecast` to `daily` or `hourly` on a button to show forecast data. Use `forecast_offset` to pick the entry: `0` is today/now, `1` is tomorrow/next hour, and so on. The button generates a label automatically (day name or time). With `icon: weather`, the icon matches the forecasted condition.

```yaml
buttons:
  - entity: weather.home
    forecast: hourly
    forecast_offset: 3
    icon: weather
    texts:
      - attribute: temperature
        format: "°"
```

</details>

<details>
<summary><b>Gauges</b></summary>

<br>

Set `type: ring` for a circular gauge or `type: bar` for a horizontal bar. Both fill based on a value within a min/max range.

```yaml
buttons:
  - entity: sensor.humidity
    type: ring
    ring_min: 0
    ring_max: 100
    ring_width: 4px
    ring_color: "#03a9f4"
```

Color thresholds change the gauge color as the value rises. `solid` fills the whole gauge with the matched color, `segments` draws each range as its own section, and `gradient` blends between the colors.

```yaml
ring_threshold_mode: gradient
ring_thresholds:
  - value: 0
    color: "#4caf50"
  - value: 60
    color: "#ff9800"
  - value: 80
    color: "#f44336"
```

Any button can also use `color_thresholds` to tint itself based on a value, even without a gauge.

</details>

<details>
<summary><b>Icons</b></summary>

<br>

The card includes its own animated weather icons. Use them by setting `icon: weather` on a button.

To use your own, point at a folder of SVGs with `icon_path`. Name the files after the weather conditions (`sunny.svg`, `rainy.svg`, etc., using the standard [HA condition names](https://www.home-assistant.io/integrations/weather/#condition-mapping)). You can set `icon_path` once at the card level so every `icon: weather` button uses it.

```yaml
# Per button
- entity: weather.home
  icon: weather
  icon_path: /local/weather-icons/

# Or card level
icon_path: /local/weather-icons/
```

</details>

<br>

## Backgrounds

The default background is an animated sky that reacts to the weather and time of day. It renders clouds, precipitation (rain, snow, hail), stars at night, and a sun/moon that follows the actual sun elevation.

You can replace the animated background with your own images or videos by changing `background_mode` to `images` and pointing at a folder of files named after weather states (e.g. `sunny.jpg`, `rainy.mp4`). The card layout and buttons work the same either way.

<br>

## Performance

The background runs on a single canvas at a capped 24fps. When the card scrolls out of view or the browser tab is in the background, all animation stops entirely (canvas loop, CSS animations, marquee text). It picks back up when the card becomes visible again. The canvas resolution is also capped at roughly 960,000 pixels, and DPR is limited to 2x, so high-density screens don't end up pushing huge buffers.

Cloud textures and the star field are pre-rendered to offscreen canvases once and then just drawn each frame, so the per-frame cost is mostly compositing rather than generating new shapes. Particle counts for rain, snow, and hail scale with the card area but have hard upper limits.

That said, this is still a card with a lot going on. The animated sky, moving blobs, weather particles, and sun/moon effects all run at the same time during conditions like rain or snow. On a modern phone or desktop this shouldn't be noticeable. On older hardware, cheap tablets, or something like a wall-mounted panel with a weak browser, you might feel it. If things seem sluggish, the most effective steps are:

- `weather_animations: false` kills rain/snow/hail particles (the heaviest part). Sky, clouds, and sun/moon stay.
- `background_blobs: false` stops the four moving color blobs (these are CSS-animated but still add up on weak GPUs).
- `night_sky_effects: false` removes the star field.
- `background_mode: images` turns off all canvas rendering and just shows a static image. Everything else about the card still works.

You can combine these. For example, keeping the animated sky but turning off particles and blobs gives you a good-looking card with very little rendering cost.

<br>

## Options

<details>
<summary><b>Show all card options</b></summary>

<br>

### Card

**Layout**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `card_height` | `string` | `200px` | Height of the card. Numbers are treated as px. `auto` fills available height in grid layouts, `content` sizes to fit the content. |
| `card_padding` | `string` | `16px` | Inner padding around the content. |
| `card_offset` | `string` | — | Shifts the card via CSS margin. Useful when layering cards. |
| `content_direction` | `string` | `column` | Set to `row` to lay out containers horizontally instead of vertically. |
| `content_align` | `string` | — | Vertical alignment of the containers within the card. |
| `card_tap_action` | `object` | — | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/) for the card background. |

**Color & Theme**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color_mode` | `string` | `sun` | Controls light/dark colors. `sun` follows your `sun_entity`, `theme` follows your HA theme's dark mode. |
| `shadow` | `boolean` | `true` | Show card shadow. |
| `shadow_color` | `string` | — | Custom shadow color. |

**Sun & Moon**

The card renders a sun during the day and a moon at night, positioned within the background.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sun_moon_enabled` | `boolean` | `true` | Show or hide the sun/moon. |
| `sun_moon_size` | `string` | `80px` | Size of the sun/moon element. |
| `sun_moon_x` | `string` | `50%` | Horizontal position (percentage). |
| `sun_moon_y` | `string` | — | Vertical position. When unset, it follows the sun's elevation. |
| `sun_rays_enabled` | `boolean` | `true` | Show or hide the sun rays. |
| `moon_phase_entity` | `string` | — | Entity for moon phase. When set, the moon shows the current phase. |

---

### Container

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `buttons` | `list` | — | The buttons inside this container. |
| `custom_cards` | `list` | — | Embed HA cards instead of buttons. Use this or `buttons`, not both. |
| `layout` | `string` | `wrap` | How buttons are arranged: `wrap`, `horizontal-scroll`, `vertical-scroll`, `grid`. |
| `columns` | `number` | — | Number of columns when `layout: grid`. |
| `scroll_count` | `number` | — | Buttons visible at once in a scroll layout. Enables snap scrolling. |
| `align` | `string` | `start` | Button alignment: `start`, `center`, `end`, `spread`. |
| `justify_content` | `string` | — | CSS justify-content for the button row. |
| `align_items` | `string` | — | CSS align-items for the button row. |
| `gap` | `string` | — | Space between buttons. |
| `padding` | `string` | — | Inner padding of the container. |
| `margin` | `string` | — | Outer margin of the container. |
| `custom_width` | `string` | — | Fixed width for this container. Useful in `content_direction: row` layouts. |
| `background` | `boolean` | `false` | Add a background behind the buttons. |
| `background_color` | `string` | — | Custom background color. |
| `blurred_background` | `boolean` | `false` | Frosted glass effect on the container background. |
| `grouped` | `boolean` | `false` | Wrap buttons into a single shared background. Requires `background: true`. |
| `separator` | `boolean` | `false` | Thin divider between buttons. Only shows when `grouped` is on. |
| `shadow` | `boolean` | — | Set to `false` to remove shadow from this container. |
| `hide` | `boolean` | `false` | Hide the container. |
| `visibility` | `list` | — | Standard HA visibility conditions. |
| `button_style` | `string` | `inline` | Default button format: `inline` (icon and text side by side) or `vertical` (icon above text). |
| `button_padding` | `string` | — | Default padding for buttons in this container. |
| `button_gap` | `string` | — | Gap between icon and text in buttons. |
| `button_text_gap` | `string` | — | Gap between text segments. |
| `button_text_size` | `string` | — | Default text size. |
| `button_icon_size` | `string` | — | Default icon size. |
| `button_icon_padding` | `string` | — | Default icon padding. |
| `button_icon_background` | `boolean` | `false` | Add backgrounds behind button icons. |
| `button_icon_background_color` | `string` | — | Color for icon backgrounds. |
| `button_background_color` | `string` | — | Default button background color. |
| `button_text_layout` | `string` | — | Set to `vertical` to stack text segments vertically instead of inline. |

---

### Button

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | — | **Required.** Any sensor, binary_sensor, or weather entity. |
| `attribute` | `string` | — | Read a specific attribute instead of the state. |
| `icon` | `string` | *auto* | An `mdi:` icon, or `weather` to show the animated icon matching the current condition. |
| `icon_path` | `string` | — | Folder for custom SVG weather icons. |
| `icon_size` | `string` | — | Icon size. |
| `icon_background` | `boolean` | — | Background behind the icon. |
| `icon_background_color` | `string` | — | Icon background color. |
| `hide_icon` | `boolean` | `false` | Hide the icon. |
| `texts` | `list` | — | Array of text segments. See [Texts](#texts). |
| `text_size` | `string` | — | Overall text size for this button. |
| `text_gap` | `string` | — | Gap between text segments. |
| `text_layout` | `string` | — | `vertical` to stack texts vertically. |
| `style` | `string` | — | Override the container's `button_style` for this button (`inline`, `vertical`). |
| `type` | `string` | — | `ring` for a circular gauge, `bar` for a horizontal bar gauge. |
| `background` | `boolean` | — | Override the container's background setting. |
| `background_color` | `string` | — | Custom background color. |
| `blurred_background` | `boolean` | — | Override the container's blur setting. |
| `button_round` | `boolean` | `false` | Fully rounded pill shape. |
| `width` | `string` | — | Button width. Required for marquee overflow. |
| `height` | `string` | — | Button height. |
| `padding` | `string` | — | Inner padding. |
| `align` | `string` | — | Content alignment: `start`, `center`, `end`, `spread`. |
| `element_order` | `string` | — | Comma-separated order of parts (e.g. `icon,text,bar`). |
| `overflow` | `string` | `ellipsis` | How overflow is handled: `ellipsis`, `clip`, `wrap`, `marquee`. |
| `marquee_speed` | `number` | `30` | Scroll speed in px/s when using `overflow: marquee`. |
| `marquee_rtl` | `boolean` | `false` | Reverse marquee direction. |
| `tap_action` | `object` | `more-info` | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/). |
| `visibility` | `list` | — | Standard HA [visibility conditions](https://www.home-assistant.io/dashboards/conditional/#conditions). |
| `forecast` | `string` | — | `daily` or `hourly`. |
| `forecast_offset` | `number` | `0` | Which forecast entry to show. `0` = today/now, `1` = next, etc. |
| `position` | `string` | — | Set to `custom` to detach the button and place it freely. |
| `position_anchor` | `string` | `top-left` | Anchor point for free positioning. |
| `position_x` | `string` | `0` | Horizontal offset from anchor. |
| `position_y` | `string` | `0` | Vertical offset from anchor. |

---

### Gauges

**Ring**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ring_min` | `number` | `0` | Minimum of the range. |
| `ring_max` | `number` | `100` | Maximum of the range. |
| `ring_width` | `string` | — | Thickness of the ring. |
| `ring_gap` | `string` | — | Gap between the ring and the button content. |
| `ring_color` | `string` | — | Color of the filled part. |
| `ring_threshold_mode` | `string` | — | `solid`, `segments`, or `gradient`. |
| `ring_thresholds` | `list` | — | List of `{ value, color }` entries. |
| `gauge_entity` | `string` | — | Use a different entity for the gauge value. |
| `gauge_attribute` | `string` | — | Attribute to read for the gauge value. |

**Bar**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `bar_min` | `number` | `0` | Minimum of the range. |
| `bar_max` | `number` | `100` | Maximum of the range. |
| `bar_height` | `string` | — | Height of the bar. |
| `bar_color` | `string` | — | Color of the filled part. |
| `bar_threshold_mode` | `string` | — | `solid`, `segments`, or `gradient`. |
| `bar_thresholds` | `list` | — | List of `{ value, color }` entries. |

---

### Background

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `background_mode` | `string` | `default` | `default` for the animated sky, `images` to use your own background files. |
| `weather_image_path` | `string` | — | Folder of images or videos named after weather states. Used when `background_mode: images`. |
| `weather_image_path_dark` | `string` | — | Separate folder for dark scheme. Falls back to `weather_image_path`. |
| `weather_animations` | `boolean` | `true` | Show weather particle effects (rain, snow, etc.). |
| `background_blobs` | `boolean` | `true` | Show the ambient color blobs that shift with the weather. |
| `night_sky_effects` | `boolean` | `true` | Show stars at night. |
| `bg_brightness` | `number` | `1` | Brightness multiplier (e.g. `0.8` to darken). |
| `bg_saturation` | `number` | `1` | Saturation multiplier (e.g. `0` for grayscale). |
| `bg_blur` | `number` | — | Background blur in pixels. |

</details>

<br>

## History

This card started in early 2026. The original version lived under a different name and a different GitHub account. At some point, maintaining a public project stopped being fun. Most of the feedback was issues and requests, and there was little to balance that out. So the old account and repo were deleted.

After a break, the motivation came back, but the focus shifted. Development continued in private, with the goal of getting the core right before putting it out there again. Origami Weather is that full rebuild. It's smaller, more focused, and built around being a layout builder first.

<br>

> **Note on AI:** AI is part of the workflow here. It helps test ideas and get through the tedious parts faster.

<br>

## Support the project

If you find this card useful, consider leaving a star. It helps more than you'd think.
