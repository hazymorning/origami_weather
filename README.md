# ◪ Origami Weather

A weather card for Home Assistant. The background reacts to the actual conditions, and you can build the layout however you want.

<img width="400" alt="Image" src="https://github.com/user-attachments/assets/7715ce04-d179-485c-8349-6f2efedb1e7b" />

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
| `sun_entity` | `string` | `sun.sun` | Drives the day/night cycle and the height of the sun in the background. Only set this if your sun entity has a different ID. |
| `moon_phase_entity` | `string` | — | **Recommended.** Shows the moon in its current phase. |

The card has a visual editor. When you add it, you get a default layout which you can rearrange however you like (see [Layouts](#layouts)).

<br>

> [!TIP]
> <details>
> <summary><b>Dark Mode</b></summary>
>
> By default the card is light while the sun is up and dark after sunset. If you use a permanently dark theme, this can cause a fairly extreme contrast during the day. As a workaround, you can set `color_mode: theme` so the card stays dark during the day, or lower the brightness in the color settings so the card is generally darker.
>
> </details>

<br>

## Examples

These are just starting points. Almost anything in these layouts can be changed or combined.

<img width="400" alt="Image" src="https://github.com/user-attachments/assets/74d4a14d-3973-418b-a4a2-6254094b0a9b" />

<details>
<summary><b>Default Card YAML</b></summary>

<br>

```yaml
type: custom:origami-weather
weather_entity: weather.home
color_mode: theme
card_height: content
card_padding: 20px
background_mode: default
button_containers:
  - gap: 0px
    background: true
    blurred_background: true
    button_icon_size: 34px
    button_padding: 16px
    align: center
    padding: 0 0 16px 0
    buttons:
      - entity: weather.home
        text_size: 42px
        background: false
        align: start
        padding: "0"
        inner_gap: "0"
        elements:
          - kind: text
            attribute: temperature
            weight: "700"
            fancy_unit: true
  - background: true
    layout: wrap
    gap: 4px
    button_gap: 0px
    button_text_gap: 6px
    button_padding: "0"
    button_text_size: 13px
    align: start
    buttons:
      - entity: weather.home
        forecast: daily
        background: false
        align: start
        elements:
          - kind: text
            text: Today
            weight: "500"
          - kind: text
            attribute: templow
            format: "° - "
            weight: "700"
          - kind: text
            attribute: temperature
            format: "°"
            weight: "700"
            size: 14px
      - entity: weather.home
        background: false
        align: start
        elements:
          - kind: text
            text: "• Wind"
            weight: "500"
          - kind: text
            attribute: wind_speed
            weight: "700"
```

</details>

<details>
<summary><b>Big temperature with a UV ring</b></summary>

<br>

```yaml
type: custom:origami-weather
weather_entity: weather.home
color_mode: sun
card_height: 130px
button_containers:
  - padding: 0 4px
    buttons:
      - entity: weather.home
        text_size: 30px
        padding: 0px 4px
        elements:
          - kind: text
            fancy_unit: true
  - padding: 0px 8px
    gap: 8px
    background: true
    buttons:
      - entity: weather.home
        attribute: uv_index
        type: ring
        ring_width: 4px
        ring_gap: 10px
        ring_max: "11"
        ring_threshold_mode: gradient
        icon_size: 34px
        padding: 14px
        elements:
          - kind: icon
            icon: weather
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
        padding: 8px 12px
        text_gap: 5px
        elements:
          - kind: text
            text: "Today: "
            size: 12px
          - kind: text
            attribute: templow
            format: " –"
            size: 12px
            weight: "700"
          - kind: text
            attribute: temperature
            weight: "700"
```

</details>

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
      - kind: icon
        icon: mdi:thermometer
      - kind: text
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
<summary><b>Elements</b></summary>

<br>

Everything inside a button is an element. A button holds a flat `elements` list, and the order of that list is the order things are drawn in. There are three kinds: `text`, `icon` and `bar`. You can use as many of each as you want and mix them freely, so a bar can sit between two texts, or an icon can sit after the value instead of before it.

```yaml
buttons:
  - entity: weather.home
    forecast: daily
    elements:
      - kind: text
        text: "Today: "
        size: 12px
      - kind: text
        attribute: templow
        format: " –"
        weight: "700"
      - kind: text
        attribute: temperature
        weight: "700"
```

That gives you something like "Today: 8 – 14°" inside a single button.

If you leave `elements` out completely, the button shows one text element with the entity state.

**Text elements** take `entity`, `attribute`, `text` (a fixed string), `format` (glued to the end of the value, usually a unit), `precision` (decimal places), `size`, `weight`, `overflow` and `fancy_unit`. A text element without `entity`, `attribute` or `text` falls back to the button's own entity and attribute.

**Icon elements** take `icon`, `icon_path`, `icon_size`, `icon_padding`, `icon_background` and `icon_background_color`. Leave `icon` empty and the entity's own icon is used. Set `icon: weather` for the animated icon that matches the current weather.

**Bar elements** are horizontal gauges. They take `bar_min`, `bar_max`, `bar_height`, `bar_color`, `bar_threshold_mode`, `bar_thresholds`, and `gauge_entity` / `gauge_attribute` if the bar should read a different value than the button.

```yaml
buttons:
  - entity: sensor.humidity
    elements:
      - kind: icon
        icon: mdi:water-percent
      - kind: text
        format: "%"
      - kind: bar
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
      - kind: icon
        icon: weather
      - kind: text
        attribute: temperature
        format: "°"
```

</details>

<details>
<summary><b>Gauges</b></summary>

<br>

There are two gauge shapes. A ring wraps around the whole button and is set on the button itself with `type: ring`. A bar is an element you drop into the `elements` list with `kind: bar`. Both fill based on a value inside a min/max range.

```yaml
buttons:
  - entity: sensor.humidity
    type: ring
    ring_min: 0
    ring_max: 100
    ring_width: 4px
    ring_color: "#03a9f4"
    elements:
      - kind: text
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

The card comes with its own animated weather icons. Turn them on with `icon: weather` on an icon element.

To use your own, point at a folder of SVGs with `icon_path`. Name the files after the weather conditions (`sunny.svg`, `rainy.svg`, etc., using the standard [HA condition names](https://www.home-assistant.io/integrations/weather/#condition-mapping)). You can set `icon_path` once at the card level so every `icon: weather` element uses it.

```yaml
# Per element
elements:
  - kind: icon
    icon: weather
    icon_path: /local/weather-icons/

# Or card level
icon_path: /local/weather-icons/
```

</details>

</details>

<br>

## Backgrounds

By default the card shows different background effects, like a color gradient, drifting clouds and the sun during the day or the moon at night. **Most of these effects can be toggled separately.**

If you'd rather use your own weather artwork, set `background_mode: images` and point `weather_image_path` at a folder of images or videos named after weather states (e.g. `sunny.jpg`, `rainy.mp4`). The card picks the file matching the current condition.

With `background_mode: none` the card draws no background at all, and everything you build sits on whatever is behind it.

See [Background options](#options).

<br>

## Performance

<details>
<summary><b>Notes on performance</b></summary>

<br>

This card is visually active, and a lot of effort goes into keeping it fast. On a somewhat modern desktop or phone it should feel smooth. The animated background effects are a bit heavy by nature, so on older or low-power devices you may want to disable individual effects:

- `weather_animations: false` — disables rain/snow/hail effects.
- `background_blobs: false` — stops the moving color blobs (CSS-animated, but they add up on weak GPUs).
- `night_sky_effects: false` — removes the star field.
- `background_mode: images` — turns off all canvas rendering and shows a static image instead. Everything else about the card still works.

These stack. Keeping the animated sky but turning off weather effects, for example, gives you a good-looking card at very little rendering cost.

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
| `color_mode` | `string` | `sun` | Whether the card uses its light or dark colors. `sun` follows your `sun_entity`, `theme` follows your HA theme. See [Color mode](#color-mode). |
| `card_frame` | `boolean` | `true` | Set to `false` to drop the rounded corners and border of the card itself. |
| `shadow` | `boolean` | `true` | Shadow under button and container backgrounds. |
| `shadow_color` | `string` | — | Replaces that shadow with your own CSS box-shadow, e.g. `0 2px 8px rgba(0,0,0,0.4)`. |

</details>

<details>
<summary><b>Card · Sun & Moon</b></summary>

<br>

The card renders a sun during the day and a moon at night, positioned within the background.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sun_moon_enabled` | `boolean` | `true` | Show or hide the sun/moon. |
| `sun_moon_size` | `string` | `80px` | Size of the sun/moon element. |
| `sun_moon_x` | `string` | `50%` | Horizontal position (percentage). |
| `sun_moon_y` | `string` | — | Vertical position. When unset, it follows the sun's elevation. |
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
| `button_text_gap` | `string` | — | Gap between text elements. |
| `button_text_size` | `string` | — | Default text size. |
| `button_icon_size` | `string` | — | Default icon size. |
| `button_icon_padding` | `string` | — | Default icon padding. |
| `button_icon_background` | `boolean` | `false` | Add backgrounds behind button icons. |
| `button_icon_background_color` | `string` | — | Color for icon backgrounds. |
| `button_background_color` | `string` | — | Default button background color. |
| `button_text_layout` | `string` | — | Set to `vertical` to stack text elements vertically instead of inline. |

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
| `text_layout` | `string` | — | `vertical` to stack texts vertically. |
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

Every entry in a button's `elements` list needs a `kind`, which is `text`, `icon` or `bar`.

**Text** (`kind: text`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | — | Read from a different entity than the button. |
| `attribute` | `string` | — | Read a specific attribute. |
| `text` | `string` | — | A fixed string instead of a value. |
| `format` | `string` | — | Glued to the end of the value, usually a unit. |
| `precision` | `number` | — | Decimal places. |
| `size` | `string` | — | Font size. |
| `weight` | `string` | — | Font weight. |
| `overflow` | `string` | `ellipsis` | What happens when the text doesn't fit: `ellipsis`, `clip`, `wrap`, `marquee`. |
| `fancy_unit` | `boolean` | `false` | Print the unit small and raised. |

**Icon** (`kind: icon`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `icon` | `string` | *entity icon* | An `mdi:` icon, or `weather` for the animated icon matching the current condition. |
| `icon_path` | `string` | — | Folder of custom SVG weather icons. |
| `icon_size` | `string` | — | Icon size. |
| `icon_padding` | `string` | — | Padding around the icon. |
| `icon_background` | `boolean` | — | Background behind this icon. |
| `icon_background_color` | `string` | — | Color of that background. |

**Bar** (`kind: bar`)

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

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `background_mode` | `string` | `default` | `default` for the animated sky, `images` to use your own background files, `none` for no background at all. |
| `weather_image_path` | `string` | — | Folder of images or videos named after weather states. Used when `background_mode: images`. |
| `weather_image_path_dark` | `string` | — | Separate folder for dark mode. Falls back to `weather_image_path`. |
| `weather_animations` | `boolean` | `true` | Show weather particle effects (rain, snow, etc.). |
| `background_blobs` | `boolean` | `true` | Show the ambient color blobs that shift with the weather. |
| `night_sky_effects` | `boolean` | `true` | Show stars at night. |
| `bg_brightness` | `number` | `1` | Brightness multiplier (e.g. `0.8` to darken). |
| `bg_saturation` | `number` | `1` | Saturation multiplier (e.g. `0` for grayscale). |
| `bg_blur` | `number` | — | Background blur in pixels. |

</details>

</details>

<details>
<summary><b>Show all CSS-Variables</b></summary>

<br>

These are for theming. None of them are needed to use the card, they're there if you want to push the look further than the options allow. Put them in your theme file, or set them on a single card with card-mod. Anything the visual editor already covers is left out of this list, since setting it twice only causes confusion.

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

## History

Origami Weather is the continuation of a hobby project I started in early 2026 (originally called Atmospheric Weather Card on a previous GitHub account). It's been reworked since then, with  different approaches... to almost everything. I don't really like the public maintenance part, but I enjoy tinkering with this enough that I think it's worth sharing.

> **Note:** AI is used as a tool in this project to get tedious tasks done faster (leaving me more time for the enjoyable parts).
