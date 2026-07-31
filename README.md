# ◪ Origami Weather

A flexible card that tries to visualize the weather and related data in a nice way.

<img width="400" alt="Image" src="https://github.com/user-attachments/assets/e8f2f07c-9ff0-4a46-ac74-cec2c63974ed" />

<br>
<br>

**Getting Started** · [Installation](#installation) · [Setup](#setup) · [Examples](#examples)

**How It Works** · [Backgrounds](#backgrounds) · [Layouts](#layouts)

**Reference** · [Options](#options) · [Performance](#performance) · [History](#history)

<br>

## Installation

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin)

<details>
<summary><b>HACS (Recommended)</b></summary>
<br>

This card isn't in the default HACS store yet, so it has to be added as a custom repository.

1. Click the badge above, **or** in HACS go to **⋮** (top right) → **Custom repositories**, enter `https://github.com/hazymorning/origami_weather` with category **Dashboard**, and click **Add**.
2. Search for **Origami Weather** and click **Download**.
3. Reload your dashboard.
</details>

<details>
<summary><b>Manual</b></summary>

<br>

1. Download `origami-weather.js`, `origami-weather-editor.js` and `image-assets.js` from the latest release.
2. Put all three in `config/www/`, in the same folder. The card loads the other two itself, so it breaks if they are missing or sitting somewhere else.
3. Go to **Settings** → **Dashboards** → **⋮** → **Resources**.
4. Add `/local/origami-weather.js` as a JavaScript Module. Only this one file gets registered as a resource.
5. Hard-refresh your browser.

</details>

<br>

## Setup

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `weather_entity` | `string` | — | **Required.** Your weather entity. |
| `moon_phase_entity` | `string` | — | **Recommended.** Your moon phase sensor. |

**The actual content of the card is up to you.** When you add the card to your dashboard, it comes with an example layout already set up, which you can customize however you like.

There is a visual editor for this, so the yaml below is only there if you prefer it or want to copy an example. See the [Examples](#examples) for inspiration, and [Layout Options](#layouts) for how building layouts works.

<br>

> [!NOTE]
> <details>
> <summary>Important for <strong>dark themes</strong></summary>
><br>
> By default, the card is light or dark based on the sun. In constantly dark themes this means a very bright card during the day, creating an unpleasant contrast. You can use `color_mode: theme` so the card stays dark during the day, or decrease the general brightness in the color settings.
>
> </details>

<br>

## Examples

| Light | Dark |
|-------|------|
| ![Light Mode](https://github.com/user-attachments/assets/a1548af5-582f-41c5-a410-c4a1a63f82ff) | ![Dark Mode](https://github.com/user-attachments/assets/e8f2f07c-9ff0-4a46-ac74-cec2c63974ed) |

This is the default card which shows up if you add it to your dashboard.

<details>
<summary><b>Default Card</b></summary>

<br>

> **Important:** You need to replace the weather and moon entity with your own ones.

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_entity: sun.sun
moon_phase_entity: sensor.moon_phase
sun_moon_x: 80
card_height: content
card_padding: 16px
content_align: between
content_align_items: start
button_containers:
  - buttons:
      - entity: weather.home
        elements:
          - type: icon
            icon: weather
            icon_background: false
            margin: 0 2px 0 0
          - type: text
            precision: 0
            format: °
            entity: weather.home
            attribute: temperature
            weight: "700"
          - type: text
            weight: "500"
            entity: weather.home
        text_layout: vertical
        style: inline
    padding: "4px"
    button_text_size: 16px
    margin: 0 0 32px 0
    button_gap: 6px
    button_style: vertical
    button_icon_size: 20px
  - background: true
    position: bottom-left
    gap: 8px
    button_text_layout: vertical
    button_gap: 8px
    button_text_gap: 6px
    button_icon_size: 14px
    button_padding: 6px 10px 6px 8px
    align: center
    button_text_size: 12px
    background_color: rgba(255,255,255,0.1)
    width: 100%
    blurred_background: true
    buttons:
      - entity: weather.home
        elements:
          - type: icon
            icon: mdi:weather-windy
          - type: text
            attribute: wind_speed
            format: " km/h"
            weight: "700"
        style: inline
      - entity: weather.home
        elements:
          - type: icon
            icon: mdi:water-percent
          - type: text
            weight: "700"
            attribute: humidity
            format: " %"
        style: inline
    button_background_color: rgba(255,255,255,0.05)
    button_blurred_background: true
    justify_content: end
grid_options:
  rows: auto
  columns: 12
```

</details>

<br>

| Light | Dark |
|-------|------|
| ![Light Mode](https://github.com/user-attachments/assets/964286e2-6df7-40b6-9e14-ff76bb4d5d08) | ![Dark Mode](https://github.com/user-attachments/assets/ea49bea3-03ec-418c-b462-64ad665a643c) |

A big card that uses different features like a temperature ring, a large animated weather icon, and a forecast slider with rain probability bars.

<details>
<summary><b>Big Card</b></summary>

<br>

>**Note:** The conditional visibility feature can be useful here. For example to toggle between a daily and hourly forecast, or to show/hide the forecast on card tap.

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_entity: sun.sun
card_height: content
card_padding: 16px
background_mode: default
button_containers:
  - position: custom
    position_anchor: top-left
    padding: 4px 8px
    buttons:
      - entity: weather.home
        attribute: temperature
        text_size: 42px
        align: start
        padding: 4px 0 0 0
        background: false
        elements:
          - type: text
            weight: "700"
            fancy_unit: true
            attribute: temperature
            precision: 0
  - background: true
    button_icon_size: 34px
    button_padding: 16px
    align: center
    button_background_color: "rgba(255,255,255,0.1)"
    button_blurred_background: true
    justify_content: end
    align_items: start
    padding: 8px
    buttons:
      - entity: weather.home
        attribute: temperature
        type: ring
        ring_gap: 8px
        ring_width: 4px
        ring_min: "-20"
        ring_max: "40"
        ring_threshold_mode: gradient
        ring_thresholds:
          - value: "-20"
            color: "rgba(124, 142, 184, 0.8)"
          - value: "-16"
            color: "rgba(132, 156, 196, 0.8)"
          - value: "-12"
            color: "rgba(140, 172, 206, 0.8)"
          - value: "-8"
            color: "rgba(150, 188, 214, 0.8)"
          - value: "-4"
            color: "rgba(165, 202, 218, 0.8)"
          - value: "0"
            color: "rgba(183, 213, 216, 0.8)"
          - value: "4"
            color: "rgba(198, 218, 205, 0.8)"
          - value: "8"
            color: "rgba(206, 218, 188, 0.8)"
          - value: "12"
            color: "rgba(214, 214, 168, 0.8)"
          - value: "16"
            color: "rgba(224, 207, 152, 0.8)"
          - value: "20"
            color: "rgba(232, 195, 140, 0.8)"
          - value: "24"
            color: "rgba(232, 178, 130, 0.8)"
          - value: "28"
            color: "rgba(228, 158, 124, 0.8)"
          - value: "32"
            color: "rgba(220, 138, 120, 0.8)"
          - value: "36"
            color: "rgba(208, 120, 118, 0.8)"
          - value: "40"
            color: "rgba(194, 104, 114, 0.8)"
        blurred_background: true
        padding: 16px
        elements:
          - type: icon
            icon: weather
            icon_background: false
            icon_background_color: "rgba(0,0,0,0)"
            icon_size: 42px
  - gap: 4px
    button_gap: 0px
    button_text_gap: 6px
    button_padding: "0"
    align: start
    button_text_size: 14px
    padding: 0 0 16px 8px
    margin: -14px 0 0 0
    buttons:
      - entity: weather.home
        align: start
        elements:
          - type: icon
            icon: mdi:weather-windy
          - type: text
            weight: "500"
            text: Wind
          - type: text
            text: "•"
            weight: "500"
          - type: text
            attribute: wind_speed
            weight: "700"
  - layout: horizontal-scroll
    scroll_count: 5
    gap: 2px
    button_icon_background_color: "rgba(255,255,255,0.05)"
    button_style: vertical
    button_gap: 6px
    button_icon_size: 24px
    button_padding: 12px
    align: center
    button_text_size: 13px
    background_color: "rgba(255,255,255,0.05)"
    blurred_background: true
    button_background_color: "rgba(255,255,255,0.1)"
    separator: true
    button_icon_padding: 0 0 6px 0
    grouped: true
    background: true
    buttons:
      - entity: weather.home
        forecast: daily
        elements:
          - type: icon
            icon: weather
          - type: text
            size: 12px
            weight: "500"
            attribute: datetime
          - type: text
            weight: "700"
            attribute: temperature
          - type: bar
            gauge_attribute: precipitation_probability
            bar_min: "0"
            bar_max: "100"
            bar_height: "8"
            bar_threshold_mode: gradient
            margin: 6px 0 0 0
            bar_thresholds:
              - value: "0"
                color: "rgba(214, 224, 230, 0.8)"
              - value: "10"
                color: "rgba(190, 210, 224, 0.8)"
              - value: "20"
                color: "rgba(166, 197, 219, 0.8)"
              - value: "30"
                color: "rgba(142, 184, 214, 0.8)"
              - value: "40"
                color: "rgba(118, 170, 210, 0.8)"
              - value: "50"
                color: "rgba(96, 156, 204, 0.8)"
              - value: "60"
                color: "rgba(76, 141, 196, 0.8)"
              - value: "70"
                color: "rgba(58, 125, 186, 0.8)"
              - value: "80"
                color: "rgba(42, 108, 174, 0.8)"
              - value: "90"
                color: "rgba(30, 90, 160, 0.8)"
      # Repeat with forecast_offset: 1 through 6 for the remaining days
```

</details>

<br>

<img width="400" alt="Image" src="https://github.com/user-attachments/assets/83098aff-04f8-4a22-8780-dbb030e8db30" />

A simple card that is stretched to fill the full dashboard width, with the sky and card styling disabled so it blends in with the rest.

<details>
<summary><b>Card without background</b></summary>

<br>

>**Note:** This can look nice, but mostly in specific cases, like a header for a popup or with an image card in it.

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_entity: sun.sun
moon_phase_entity: sensor.moon_phase
sun_moon_x: 28
card_height: auto
card_padding: 16px
background_mode: none
card_frame: false
full_width: true
content_align: end
content_align_items: start
button_containers:
  - buttons:
      - entity: weather.home
        elements:
          - type: icon
            icon: weather
            icon_size: "22"
            icon_padding: 0 8px 0 0
          - type: text
            precision: 0
            format: °
            entity: weather.home
            attribute: temperature
            weight: "700"
          - type: text
            weight: "500"
            entity: weather.home
        style: inline
    padding: "4"
    button_text_size: 18px
    button_gap: 8px
grid_options:
  rows: 2
```

</details>

<br>

## Backgrounds

The card shows an animated sky behind your content that follows whatever the weather and sun are doing. The sky color shifts from day to night, the sun rises and sets, stars come out at night, and so on. Different effects are layered on top of this sky to add realism and drama.

You can disable the sky or individual effects, or combine them with different background styles. If you prefer the minimalism, you can also use the card in the simple default HA style with just the content and nothing else going on.

The different settings are shown [here](#options).

<br>

## Layouts

<details>
<summary><b>Layout options</b></summary>

<br>

<details>
<summary><b>Containers</b></summary>

<br>

Containers are the top-level layout blocks. Each one holds a list of buttons and controls how they're arranged. Stack a few containers to build up the card.

They flow vertically by default. Set `content_direction: row` at the card level for horizontal, or use `custom_width` on individual containers.

```yaml
button_containers:
  - padding: 0 4px
    buttons:
      - entity: weather.home
        text_size: 30px
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

Buttons are the items inside a container. Each one is tied to an entity and shows live data from it: a sensor value, a weather attribute, a forecast entry, or just an icon.

They can be styled individually or inherit defaults from their container. They support ring gauges, conditional visibility, free positioning, tap actions, and scrolling text.

```yaml
buttons:
  - entity: sensor.outside_temperature
    elements:
      - type: icon
        icon: mdi:thermometer
      - type: text
```

**Conditional visibility.** A button can show up only when certain conditions are met, using the same visibility conditions HA uses everywhere else:

```yaml
buttons:
  - entity: sensor.wind_gust
    visibility:
      - condition: numeric_state
        entity: sensor.wind_gust
        above: 40
```

State, numeric state, screen size, user, and `and`/`or`/`not` conditions are supported. A `numeric_state` condition can read an `attribute` instead of the state. If you list several conditions, all of them have to pass. Visibility also works at the container level.

**Free positioning.** Any button can be pulled out of its container and placed anywhere on the card:

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
<summary><b>Elements</b></summary>

<br>

Everything inside a button is an element. A button holds a flat `elements` list, and the order of that list is the order things are drawn in. There are three types: `text`, `icon` and `bar`. You can use as many of each as you want and mix them freely, so a bar can sit between two texts, or an icon can sit after the value instead of before it.

```yaml
buttons:
  - entity: weather.home
    forecast: daily
    elements:
      - type: text
        text: "Today: "
        size: 12px
      - type: text
        attribute: templow
        format: " –"
        weight: "700"
      - type: text
        attribute: temperature
        weight: "700"
```

That gives you something like "Today: 8 – 14°" inside a single button.

If you leave `elements` out completely, the button shows one text element with the entity state.

All three types take `margin` and `padding`, which is the usual way to nudge one element around without touching the rest of the button.

**Text elements** take `entity`, `attribute`, `text` (a fixed string), `format` (glued to the end of the value, usually a unit), `precision` (decimal places), `size`, `weight`, `overflow` and `fancy_unit`. A text element without `entity`, `attribute` or `text` falls back to the button's own entity and attribute. Note that `weight` also sets the opacity: light weights are drawn faded, heavy ones fully opaque. That is why a `weight: 300` label looks softer than the value next to it.

**Icon elements** take `icon`, `icon_path`, `icon_size`, `icon_padding`, `icon_background` and `icon_background_color`. Leave `icon` empty and the entity's own icon is used. Set `icon: weather` for the animated icon that matches the current weather.

**Bar elements** are horizontal gauges. They take `bar_min`, `bar_max`, `bar_height`, `bar_color`, `bar_threshold_mode`, `bar_thresholds`, and `gauge_entity` / `gauge_attribute` if the bar should read a different value than the button.

```yaml
buttons:
  - entity: sensor.humidity
    elements:
      - type: icon
        icon: mdi:water-percent
      - type: text
        format: "%"
      - type: bar
        bar_max: 100
        bar_height: 5px
```

</details>

<details>
<summary><b>Forecasts</b></summary>

<br>

Set `forecast` to `daily` or `hourly` on a button to show forecast data. Use `forecast_offset` to pick the entry: `0` is today/now, `1` is tomorrow/next hour, and so on. A text element with `attribute: datetime` prints the matching label (day name or time). With `icon: weather` on an icon element, the icon matches the forecasted condition.

```yaml
buttons:
  - entity: weather.home
    forecast: hourly
    forecast_offset: 3
    elements:
      - type: icon
        icon: weather
      - type: text
        attribute: temperature
        format: "°"
```

</details>

<details>
<summary><b>Gauges</b></summary>

<br>

There are two gauge shapes. A ring wraps around the whole button and is set on the button itself with `type: ring`. A bar is an element you can add in the `elements` list with `type: bar`. Both fill based on a value inside a min/max range.

```yaml
buttons:
  - entity: sensor.humidity
    type: ring
    ring_min: 0
    ring_max: 100
    ring_width: 4px
    ring_color: "#03a9f4"
    elements:
      - type: text
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

Any button can also use `color_thresholds` to tint itself based on a value, with no gauge involved.

</details>

<details>
<summary><b>Icons</b></summary>

<br>

The card comes with animated weather icons. Turn them on with `icon: weather` on an icon element.

To use your own, point at a folder of SVGs with `icon_path`. Name the files after the weather conditions (`sunny.svg`, `rainy.svg`, etc., using the standard [HA condition names](https://www.home-assistant.io/integrations/weather/#condition-mapping)). You can set `icon_path` once at the card level so every `icon: weather` element uses it.

Set `icon_path` on a single element and it applies to whatever that element's `icon` says, not just to `weather`, so it doubles as a way to pull in one-off custom graphics. The card appends `.svg` unless the name already has a file extension.

```yaml
# Per element
elements:
  - type: icon
    icon: weather
    icon_path: /local/weather-icons/

# Or card level
icon_path: /local/weather-icons/
```

</details>

</details>

<br>

## Options

<details>
<summary><b>Show all card options</b></summary>

<br>

<details>
<summary><b>Card · Layout</b></summary>

<br>

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `card_height` | `string` | `200px` | Height of the card. Numbers are treated as px. `auto` fills available height in grid layouts, `content` sizes to fit the content. |
| `card_padding` | `string` | `16px` | Inner padding around the content. |
| `card_offset` | `string` | — | Shifts the card via CSS margin. Useful when layering cards. |
| `full_width` | `boolean` | `false` | Lets the card bleed past the column gutter so it runs edge to edge in a sections view. |
| `full_width_margin` | `string` | *column gap* | How far it bleeds on each side. Only used with `full_width`. |
| `content_direction` | `string` | `column` | Set to `row` to lay out containers horizontally instead of vertically. |
| `content_align` | `string` | — | How containers are spread along the card: `start`, `center`, `end`, `between`, `around`, `evenly`. |
| `content_align_items` | `string` | — | How containers line up across the card: `start`, `center`, `end`, `stretch`, `baseline`. |
| `card_tap_action` | `object` | — | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/) for the card background. |
| `icon_path` | `string` | — | Folder of custom SVG weather icons, used by every `icon: weather` element that doesn't set its own path. |

</details>

<details>
<summary><b>Card · Color & frame</b></summary>

<br>

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color_mode` | `string` | `sun` | Whether the card uses its light or dark colors. `sun` follows your `sun_entity`, `theme` follows your HA theme. |
| `card_frame` | `boolean` | `true` | Set to `false` to drop the rounded corners and border of the card itself. |
| `edge_fade` | `boolean` | `false` | Fades the top and bottom edge of the card into the dashboard background. |
| `edge_fade_size` | `string` | `10%` | How deep that fade reaches in from each edge. |
| `shadow` | `boolean` | `true` | Shadow under button and container backgrounds. |
| `shadow_color` | `string` | — | Replaces that shadow with your own CSS box-shadow, e.g. `0 2px 8px rgba(0,0,0,0.4)`. |

</details>

<details>
<summary><b>Card · Sun & Moon</b></summary>

<br>

The card renders a sun during the day and a moon at night, positioned within the background.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sun_entity` | `string` | `sun.sun` | Drives the day/night cycle and the height of the sun in the background. Only set this if your sun entity has a different ID. |
| `sun_moon_enabled` | `boolean` | `true` | Show or hide the sun/moon. |
| `sun_moon_size` | `string` | `80px` | Size of the sun/moon element. |
| `sun_moon_x` | `string` | `50%` | Horizontal position. A bare number is read as a percentage, or you can pass a CSS length. |
| `sun_moon_y` | `string` | — | Vertical position, as a percentage from the top, clamped to 0-100. When unset it follows the sun's elevation. |
| `sun_rays_enabled` | `boolean` | `true` | Show or hide the sun rays. |
| `moon_phase_entity` | `string` | — | Entity for moon phase. When set, the moon shows the current phase. |

</details>

<details>
<summary><b>Container</b></summary>

<br>

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `buttons` | `list` | — | The buttons inside this container. |
| `custom_cards` | `list` | — | Embed HA cards instead of buttons. Use this or `buttons`, not both. |
| `layout` | `string` | `wrap` | How buttons are arranged: `wrap`, `horizontal-scroll`, `vertical-scroll`, `grid`. |
| `columns` | `number` | — | Number of columns when `layout: grid`. |
| `scroll_count` | `number` | — | Buttons visible at once in a scroll layout. Enables snap scrolling. |
| `align` | `string` | `start` | Button alignment: `start`, `center`, `end`, `spread`. |
| `justify_content` | `string` | — | How buttons spread along the row: `start`, `center`, `end`, `between`, `around`, `evenly`. These are short keys, not raw CSS values. |
| `align_items` | `string` | — | How buttons line up across the row: `start`, `center`, `end`, `stretch`, `baseline`. Short keys again. |
| `gap` | `string` | — | Space between buttons. |
| `padding` | `string` | — | Inner padding of the container. |
| `margin` | `string` | — | Outer margin of the container. |
| `custom_width` | `string` | — | Fixed width for this container. Useful in `content_direction: row` layouts. |
| `background` | `boolean` | `false` | Add a background behind the buttons. |
| `background_color` | `string` | — | Custom background color. |
| `blurred_background` | `boolean` | `false` | Frosted glass effect on the container background. |
| `grouped` | `boolean` | `false` | Wrap buttons into a single shared background. Requires `background: true`. |
| `separator` | `boolean` | `false` | Thin divider between buttons. Works on its own, `grouped` is not required. In a `grid` layout it draws both row and column dividers, in `vertical-scroll` it draws horizontal ones. |
| `shadow` | `boolean` | — | Set to `false` to remove shadow from this container. |
| `hide` | `boolean` | `false` | Hide the container. |
| `visibility` | `list` | — | Standard HA visibility conditions. |
| `button_style` | `string` | `inline` | Default button format: `inline` (icon and text side by side) or `vertical` (icon above text). |
| `button_padding` | `string` | — | Default padding for buttons in this container. |
| `button_gap` | `string` | — | Gap between icon and text in buttons. |
| `button_text_gap` | `string` | — | Gap between text elements. |
| `button_text_size` | `string` | — | Default text size. |
| `button_icon_size` | `string` | — | Default icon size. |
| `button_icon_padding` | `string` | — | Default icon padding. |
| `button_icon_background` | `boolean` | `false` | Add backgrounds behind button icons. |
| `button_icon_background_color` | `string` | — | Color for icon backgrounds. |
| `button_background_color` | `string` | — | Default button background color. |
| `button_blurred_background` | `boolean` | `false` | Frosted glass effect on button backgrounds in this container. |
| `button_shadow` | `boolean` | — | Set to `false` to drop the shadow from every button in this container. Scroll layouts drop it anyway. |
| `position` | `string` | — | Set to `custom` to detach the container and place it freely. |
| `position_anchor` | `string` | `top-left` | Anchor point for free positioning. |
| `position_x` | `string` | `0` | Horizontal offset from anchor. |
| `position_y` | `string` | `0` | Vertical offset from anchor. |

</details>

<details>
<summary><b>Button</b></summary>

<br>

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | — | **Required.** Any sensor, binary_sensor, or weather entity. |
| `attribute` | `string` | — | Read a specific attribute instead of the state. |
| `elements` | `list` | — | What the button contains. See [Elements](#layouts). |
| `type` | `string` | — | Set to `ring` for a circular gauge around the button. |
| `style` | `string` | — | Override the container's `button_style` for this button (`inline`, `vertical`). |
| `text_size` | `string` | — | Text size for this button. |
| `text_gap` | `string` | — | Gap between text elements. |
| `text_shadow` | `boolean` | `false` | Keep the text shadow even when the button has no background. |
| `inner_gap` | `string` | — | Gap between icon and text. |
| `icon_size` | `string` | — | Size for the icons in this button. |
| `icon_padding` | `string` | — | Padding around those icons. |
| `icon_background` | `boolean` | — | Background behind the icons. |
| `icon_background_color` | `string` | — | Icon background color. |
| `background` | `boolean` | — | Override the container's background setting. |
| `background_color` | `string` | — | Custom background color. |
| `blurred_background` | `boolean` | — | Override the container's blur setting. |
| `button_round` | `boolean` | `false` | Fully rounded pill shape. |
| `shadow` | `boolean` | — | Set to `false` to remove the shadow from this button. |
| `width` | `string` | — | Button width. Required for scrolling text. |
| `height` | `string` | — | Button height. |
| `padding` | `string` | — | Inner padding. |
| `align` | `string` | — | Content alignment: `start`, `center`, `end`, `spread`. |
| `color_thresholds` | `list` | — | List of `{ value, color }` entries that tint the whole button as the value rises. |
| `color_threshold_entity` | `string` | — | Read the tint value from a different entity. |
| `color_threshold_attribute` | `string` | — | Attribute to read for the tint value. |
| `marquee_speed` | `number` | `30` | Scroll speed in px/s for text elements using `overflow: marquee`. |
| `marquee_rtl` | `boolean` | `false` | Reverse the scroll direction. |
| `tap_action` | `object` | `more-info` | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/). |
| `visibility` | `list` | — | Standard HA [visibility conditions](https://www.home-assistant.io/dashboards/conditional/#conditions). |
| `forecast` | `string` | — | `daily` or `hourly`. |
| `forecast_offset` | `number` | `0` | Which forecast entry to show. `0` = today/now, `1` = next, etc. |
| `position` | `string` | — | Set to `custom` to detach the button and place it freely. |
| `position_anchor` | `string` | `top-left` | Anchor point for free positioning. |
| `position_x` | `string` | `0` | Horizontal offset from anchor. |
| `position_y` | `string` | `0` | Vertical offset from anchor. |

</details>

<details>
<summary><b>Elements</b></summary>

<br>

Every entry in a button's `elements` list needs a `type`, which is `text`, `icon` or `bar`.

**Text** (`type: text`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | — | Read from a different entity than the button. |
| `attribute` | `string` | — | Read a specific attribute. |
| `text` | `string` | — | A fixed string instead of a value. |
| `format` | `string` | — | Glued to the end of the value, usually a unit. |
| `precision` | `number` | — | Decimal places. |
| `size` | `string` | — | Font size. |
| `weight` | `string` | — | Font weight. This also drives opacity: light weights are drawn faded, heavy ones fully opaque. |
| `overflow` | `string` | `ellipsis` | What happens when the text doesn't fit: `ellipsis`, `clip`, `wrap`, `marquee`. |
| `fancy_unit` | `boolean` | `false` | Print the unit small and raised. |
| `margin` | `string` | — | Outer margin of this element. |
| `padding` | `string` | — | Inner padding of this element. |

**Icon** (`type: icon`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string` | *entity icon* | An `mdi:` icon, or `weather` for the animated icon matching the current condition. |
| `icon_path` | `string` | — | Folder of custom SVGs. Applies to whatever this element's `icon` is set to, not only to `weather`. |
| `icon_size` | `string` | — | Icon size. |
| `icon_padding` | `string` | — | Padding around the icon. |
| `icon_background` | `boolean` | — | Background behind this icon. |
| `icon_background_color` | `string` | — | Color of that background. |
| `margin` | `string` | — | Outer margin of this element. |
| `padding` | `string` | — | Inner padding of this element. |

**Bar** (`type: bar`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `bar_min` | `number` | `0` | Minimum of the range. |
| `bar_max` | `number` | `100` | Maximum of the range. |
| `bar_height` | `string` | `4px` | Height of the bar. |
| `bar_color` | `string` | — | Color of the filled part. |
| `bar_threshold_mode` | `string` | `solid` | `solid`, `segments`, or `gradient`. |
| `bar_thresholds` | `list` | — | List of `{ value, color }` entries. |
| `gauge_entity` | `string` | — | Use a different entity for the bar value. |
| `gauge_attribute` | `string` | — | Attribute to read for the bar value. |
| `margin` | `string` | — | Outer margin of this element. |
| `padding` | `string` | — | Inner padding of this element. |

</details>

<details>
<summary><b>Ring gauge</b></summary>

<br>

Set on the button, not on an element. Needs `type: ring`.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ring_min` | `number` | `0` | Minimum of the range. |
| `ring_max` | `number` | `100` | Maximum of the range. |
| `ring_width` | `string` | `4px` | Thickness of the ring. |
| `ring_gap` | `string` | `3px` | Gap between the ring and the button content. |
| `ring_color` | `string` | — | Color of the filled part. |
| `ring_threshold_mode` | `string` | `solid` | `solid`, `segments`, or `gradient`. |
| `ring_thresholds` | `list` | — | List of `{ value, color }` entries. |
| `gauge_entity` | `string` | — | Use a different entity for the ring value. |
| `gauge_attribute` | `string` | — | Attribute to read for the ring value. |

</details>

<details>
<summary><b>Background</b></summary>

<br>

**The background itself**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `background_mode` | `string` | `default` | `default` for the animated sky, `images` for your own background files, `none` for a transparent card. |
| `background_haze` | `boolean` | `true` | The drifting color haze that shifts with the weather. Part of the `default` sky, so it has no effect in the other two modes. |
| `weather_image_path` | `string` | — | Folder of images or videos named after weather conditions. Used when `background_mode: images`. |
| `weather_image_path_dark` | `string` | — | Second folder used after sunset. Falls back to `weather_image_path`. |

**Layers drawn on top**

These run on top of whichever background you picked, including `images` and `none`.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `precipitation_effects` | `boolean` | `true` | Rain, downpour, thunderstorms, snow, sleet and hail particles. |
| `cloud_effects` | `boolean` | `true` | The drifting cloud layer. |
| `night_sky_effects` | `boolean` | `true` | Stars at night, thinned out when it's cloudy. |

The sun and moon sit in this group too. Their options live under [Card · Sun & Moon](#options).

**Treatments over the whole thing**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `bg_brightness` | `number` | `1` | Brightness multiplier (e.g. `0.8` to darken). Applies to the animated sky and to your own images. |
| `bg_saturation` | `number` | `1` | Saturation multiplier (e.g. `0` for grayscale). Applies to both as well. |
| `bg_blur` | `number` | — | Blur in pixels. Only applies to image backgrounds. |

`edge_fade` and `card_frame` also change how the background meets the dashboard. Both are under [Card · Color & frame](#options).

</details>

</details>

<details>
<summary><b>Show all CSS-Variables</b></summary>

<br>

These are for theming. None of them are needed to use the card, they're there if you want to change the look further than the options allow. Put them in your theme file, or set them on a single card with card-mod. Anything the visual editor already covers is left out of this list, since setting it twice only causes confusion.

<details>
<summary><b>Text and colors</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-text-light` | `#2c2c2e` | Text color while the card is in light mode. |
| `--origami-text-dark` | `#ffffff` | Text color while the card is in dark mode. |
| `--origami-text-shadow-light` | white glow | Shadow behind text in light mode. |
| `--origami-text-shadow-dark` | dark glow | Shadow behind text in dark mode. |
| `--origami-button-text-shadow` | — | Replaces both of the above with one value for both modes. |
| `--origami-bottom-font-weight` | `500` | Font weight of button text. |

</details>

<details>
<summary><b>Sky and sun</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-default-bg-light` | blue gradient | The sky behind everything in light mode. Takes any background value, including your own gradient. |
| `--origami-default-bg-dark` | dark blue gradient | Same for dark mode. |
| `--origami-sun-ray-shine` | `rgba(255,250,240,0.17)` | Color of the rays around the sun. The card sets its own value in dark mode, so this mostly affects daytime. |

</details>

<details>
<summary><b>Card frame</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-card-border-radius` | `--ha-card-border-radius`, or `12px` | Corner radius of the card. |
| `--origami-card-border-width` | `--ha-card-border-width`, or `0px` | Border thickness of the card. |
| `--origami-stack-order` | `1` | The card's z-index. Handy when you stack cards with `card_offset`. |
| `--origami-edge-fade-color` | `--primary-background-color` | The color `edge_fade` fades into. Set it if your card sits on something other than the dashboard background. |

</details>

<details>
<summary><b>Backgrounds behind containers, buttons and icons</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-bg-border` | `1px solid transparent` | Border on those backgrounds. Takes a full CSS border value. |
| `--origami-bottom-bg-radius` | card radius minus 5px | Corner radius of container and button backgrounds. |
| `--origami-bottom-bg-filter` | `blur(10px)` | The filter used by `blurred_background`. |
| `--origami-icon-bg-radius` | button radius minus the inset | Corner radius of icon backgrounds. |
| `--origami-icon-bg-inset` | `3px` | How much rounder the icon background is than the button around it. |

</details>

<details>
<summary><b>Dividers</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-separator-color` | 10% of the text color | Color of the dividers you get with `separator: true`. |
| `--origami-separator-width` | `2px` | Thickness of those dividers. |

</details>

<details>
<summary><b>Scrolling text</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-marquee-fade` | `12px` | Width of the soft fade at both ends of scrolling text. |
| `--marquee-separator` | `"•"` | The character printed between repeats. Needs quotes. |
| `--marquee-sep-gap` | `0.4em` | Space around that character. |

</details>

<details>
<summary><b>Scroll containers</b></summary>

<br>

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-row-height` | `auto` | Fixed height for a container using `horizontal-scroll` or `vertical-scroll`. |

</details>

<br>

Example, set once for a whole theme:

```yaml
my_theme:
  origami-text-dark: "#e8eef7"
  origami-default-bg-dark: "linear-gradient(160deg, #05060a 0%, #0d1424 100%)"
  origami-separator-color: "rgba(255,255,255,0.12)"
  origami-bottom-bg-radius: "18px"
```

</details>

<br>

## Performance

<details>
<summary><b>Notes on performance</b></summary>

<br>

The card is visually busy, so a few things are built to keep the cost down. The clouds are images instead of drawn shapes, and the animation stops while the card is off screen.

Devices vary a lot though. On older or low-power ones you can turn off the effects separately.

> **Tip:** Keeping the animated sky but turning off precipitation and clouds, for example, gives you a good-looking card for little rendering cost.

</details>

<br>


## History

Origami Weather is the continuation of a hobby project I started in early 2026 (originally called Atmospheric Weather Card on a previous GitHub account). It's been reworked a lot since then, taking different approaches to pretty much everything. I guess that's just how passion projects go, it's an ongoing learning process... and that's kind of the fun of it.

> **Note:** I use AI as a tool in this project, mostly for debugging and the tedious parts.
