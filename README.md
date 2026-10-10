<div align="center">

# ◪ Origami Weather

A flexible weather card.

<a href="https://github.com/hazymorning/origami_weather/releases/latest"><img alt="Latest release" src="https://img.shields.io/github/v/release/hazymorning/origami_weather?label=Release&color=41BDF5&labelColor=1B1C20"></a>
&nbsp;
<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin"><img alt="HACS custom repository" src="https://img.shields.io/badge/HACS-Custom-41BDF5?labelColor=1B1C20"></a>

<img width="800" alt="Origami Weather on a phone dashboard, in light and dark mode" src="https://github.com/user-attachments/assets/f7f68181-e539-4c63-a617-e4abf9340659" />

<br>
<br>

**Getting Started** · [Installation](#installation) · [Setup](#setup) · [Layouts](#layouts)

**How It Works** · [Backgrounds](#backgrounds) · [Building blocks](#building-blocks)

**Reference** · [Options](#options) · [Performance](#performance) · [History](#history)

</div>

<br>

## Installation

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin)

<details>
<summary><b>HACS (custom repository)</b></summary>
<br>

Origami Weather is not listed in the HACS store yet. You can still install it through HACS by adding the repository yourself:

1. Open HACS in Home Assistant.
2. Click the three dots in the top right corner and choose **Custom repositories**.
3. Enter `https://github.com/hazymorning/origami_weather` as the repository, select **Dashboard** as the type and click **Add**.
4. Search for **Origami Weather** in HACS and click **Download**.
5. Reload your browser.

</details>

<details>
<summary><b>Manual</b></summary>
<br>

1. Download `origami-weather.js`, `origami-weather-editor.js`, `layout-presets.js` and `image-assets.js` from the latest release.
2. Copy all four files into the same folder inside `config/www/`. The card loads the other three files on its own, so it will not work if one of them is missing or in a different folder.
3. In Home Assistant, go to **Settings**, then **Dashboards**, click the three dots in the top right corner and choose **Resources**.
4. Add `/local/origami-weather.js` as a JavaScript module. You only need to add this one file.
5. Reload your browser with a hard refresh (Ctrl+F5 or Cmd+Shift+R).

</details>

<br>

## Setup

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `weather_entity` | `string` | — | **Required.** Your weather entity. |

**The actual content of the card is up to you.** You can either build your own layout or pick one of the pre-built ones in the visual editor. All of it works in yaml as well, see [here](#options).

<br>



## Layouts

Everything in these layouts is customizable — see [Building blocks](#building-blocks) for how that works.

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/79726a62-a2df-44dd-b0c7-549d7db99ad9" />

<details>
<summary><b>ℹ️ Home layout tutorial</b></summary>
<br>

The house in the Home layout is drawn by the card. Its shadow follows the real position of the sun, the ring around it shows the path the sun takes today, the house is mirrored on the wet ground when it rains during the day, the roof turns white when it snows and the windows light up in dark mode. The room temperatures show your weather entity until you point them at your own sensors.

<details>
<summary><b>Your own home instead of the demo house</b></summary>
<br>

An AI can draw your own home in the same style and build the layout around it. Use the most capable model you have access to, it needs to understand photos, draw clean SVGs and work through this whole README.

Give it:

1. This README as a reference. Download `README.md` from the repo.
2. A few photos of your home, ideally one from the front and one from a corner, so the shape is clear.
3. The YAML of a card with the Home layout. Pick the layout in the visual editor, then open the code editor and copy it.
4. `image-assets.js` from the repo. Its last entry, `DEMO_HOME`, is the demo house, so the AI can match the style.
5. Optionally, the light entities of your rooms, so a room can light up when its light is on.

Then paste this and fill in the brackets:

```text
I'm using the Origami Weather card for Home Assistant and want to turn its Home layout into my own home. Attached are the card's README (the full reference for every option), my card YAML with the Home layout, image-assets.js (DEMO_HOME at the end is the demo house) and photos of my home.

1. Draw my home as an SVG in the style of DEMO_HOME: isometric, flat matte colors, no outlines, soft ground shadow, transparent background, square viewBox with the house centered. Recognizable, but simplified.
2. Make two versions, one for light mode and one for dark mode, for `image` and `image_dark` on the container. Both are loaded as normal image files, so they can't read the card's CSS variables or classes the way DEMO_HOME does.
3. Rebuild the card YAML around it. Put each room's temperature on that room as free-positioned buttons inside the image container, with offsets in %, so they stay in place when the card resizes. Use my sensors instead of the weather entity:
   [sensor.living_room_temperature: living room]
   [...]
4. Optional: make a room light up when its light is on, for example with a lit window overlay as an icon element (`icon_path`) that only shows through `visibility`. Keep the windows dark in both base images then.
   [light.living_room: living room]
   [...]

Read the whole README before you start and really use what's in it: containers, free positioning, all element types, visibility, thresholds, the gradient layer and the `css` option. Almost anything is possible. For `css`, the card sets --origami-sun-x, --origami-sun-y, --origami-sun-shadow and --origami-sun-light, and #card-root has scheme-light/scheme-dark and weather-<condition> classes.

Give me the SVG files, where they go (/config/www/, used as /local/...) and the complete card YAML.
```

Once it works, play around with the card settings to find a look you like. The Home layout turns off the sun, the clouds and the other effects, and switching some of them back on or trying a different background can change the whole feel. Pretty much anything in this README can go into it, so let the AI try things.

</details>

</details>

> [!NOTE]
> Selecting a different layout in the visual editor replaces the card's content, so choose your layout first and customize it afterwards.

<br>

<br>

## Backgrounds

<table>
<tr>
<th width="50%" align="center">Light</th>
<th width="50%" align="center">Dark</th>
</tr>
<tr>
<td align="center"><img width="360" alt="Card in light mode, pale cloudy sky" src="https://github.com/user-attachments/assets/47b8d6a8-42ff-4e61-8adf-bbfe5d60e554"></td>
<td align="center"><img width="360" alt="The same card in dark mode, night sky with stars and moon" src="https://github.com/user-attachments/assets/e8f2f07c-9ff0-4a46-ac74-cec2c63974ed"></td>
</tr>
</table>

The card shows an animated sky behind your content that follows whatever the weather and sun are doing. The sky color shifts from day to night, the sun rises and sets, stars come out at night with the occasional shooting star, birds cross the sky, balloons drift past, planes pass overhead, and so on. Different effects are layered on top of this sky to add realism and drama.

You can disable the sky or individual effects, or combine them with different background styles. If you prefer the minimalism, you can also use the card in the simple default HA style with just the content and nothing else going on.

<p align="center"><img width="720" alt="Card without frame or background, stretched across the full dashboard width like a header strip" src="https://github.com/user-attachments/assets/83098aff-04f8-4a22-8780-dbb030e8db30"></p>

With `background_mode: none` and `card_frame: false` the card loses its own styling and blends in with the rest of the dashboard, and `full_width: true` stretches it over the full width. This mostly works in specific places, like a dashboard header.


<p align="center"><img width="360" alt="Card with a three day forecast, a range bar and a condition line at the bottom" src="https://github.com/user-attachments/assets/e0ecebae-a3fc-4e22-aa62-9219e1068399"></p>

You can get creative with different combinations. Sometimes a calmer card works better, and there are plenty of ways to use it without any effects while still giving visual feedback, like dynamic background colors or static weather images.

<br>

## Building blocks

<details>
<summary><b>Show how content is built</b></summary>
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

A container can show an image with `image`, as wide as the container. Its buttons sit on top of it, and with [free positioning](#building-blocks) you can put each one exactly where it belongs, like room temperatures on a floor plan. `image_dark` swaps in a different image while the card is in dark mode, and `image: demo-home-image` gives you the house from the Home layout.

```yaml
button_containers:
  - image: /local/floorplan.png
    custom_width: 60%
    buttons:
      - entity: sensor.living_room_temperature
        position: custom
        position_x: 30%
        position_y: 40%
```

Containers can also hold other HA cards instead of buttons using `custom_cards`:

```yaml
button_containers:
  - custom_cards:
      - type: custom:mini-graph-card
        entities:
          - sensor.temperature
```

Each embedded card takes `custom_width` and `custom_height` if it needs a size of its own.

</details>

<details>
<summary><b>Buttons</b></summary>
<br>

Buttons are the items inside a container. Each one is tied to an entity and shows live data from it: a sensor value, a weather attribute, a forecast entry, or just an icon.

They can be styled individually or inherit defaults from their container. They support ring gauges, background images, conditional visibility, free positioning, tap actions, and scrolling text.

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

State, numeric state, screen size, user, and `and`/`or`/`not` conditions are supported. A `numeric_state` condition can read an `attribute` instead of the state, or a forecast entry with `forecast: daily` or `hourly` plus `forecast_offset`. If you list several conditions, all of them have to pass. Visibility also works at the container level.

**Free positioning.** Any button can be taken out of the normal flow and placed freely inside its container:

```yaml
buttons:
  - entity: sensor.outside_temperature
    position: custom
    position_anchor: top-right
    position_x: 20px
    position_y: 10px
    background: true
```

Containers can be placed freely on the card the same way. Offsets and sizes inside free-positioned containers can use container query units (`cqw`, `cqh`, `cqmin`), which are relative to the card instead of the screen. That way the whole arrangement scales along with the card.

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

**Text elements** take `entity`, `attribute`, `text` (a fixed string), `format` (glued to the end of the value, usually a unit), `precision` (decimal places), `size`, `weight`, `color`, `overflow` and `fancy_unit`. A text element without `entity`, `attribute` or `text` falls back to the button's own entity and attribute. Note that `weight` also sets the opacity: light weights are drawn faded, heavy ones fully opaque. That is why a `weight: 300` label looks softer than the value next to it. A text with its own `color` is not faded.

**Icon elements** take `icon`, `icon_path`, `icon_size`, `icon_padding`, `icon_background`, `icon_background_color`, `color` and `color_thresholds`. Leave `icon` empty and the entity's own icon is used. Set `icon: weather` for the animated icon that matches the current weather.

**Bar elements** are horizontal gauges. They take `bar_min`, `bar_max`, `bar_height`, `bar_color`, `bar_threshold_mode` and `bar_thresholds`. A bar uses the button's own value, unless you set a different one with `bar_values`.

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

There are two gauge shapes. A ring wraps around the whole button and is set on the button itself with `type: ring`. A bar is an element you can add in the `elements` list with `type: bar`. Both fill based on a value inside a min/max range, and everything below works the same for both, only the `ring_` or `bar_` prefix changes.

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

A gauge can also show more than one value. Add entries to `bar_values` or `ring_values` and it becomes a comparison: the fill follows the first value, and every value gets its own marker. Each entry takes `entity`, `attribute`, `marker_size`, `marker_color`, `marker_icon` and `marker_icon_color`.

```yaml
elements:
  - type: bar
    bar_min: -10
    bar_max: 40
    bar_height: 10px
    bar_values:
      - attribute: temperature
        marker_icon: mdi:thermometer
      - entity: sensor.outside_temperature
        marker_color: "#03a9f4"
```

With one value there is no marker, `bar_marker: true` adds it. The marker matches the bar height, so a thin bar means a small icon, unless you set `bar_marker_size` to make it stick out on both sides. `bar_fill: false` drops the fill and leaves only the markers, and a `marker_size` of `0` on a single value hides its marker, which is handy when a value should only drive the fill.

`bar_range_from` and `bar_range_to` draw a highlighted band on the track, which is useful for marking the range you actually care about.

A ring doesn't have to be a full circle. `ring_start` rotates where it begins, in degrees clockwise from the top, and `ring_arc` sets how far it goes, so `ring_start: 240` with `ring_arc: 240` gives you an open arc with the gap at the bottom.

`ring_needle: true` turns the markers into needles that point from the center, like a compass or a clock hand. A value can also be a fixed number with `value` instead of reading an entity, which is handy for a mark that never moves. The compass in the Home layout is built like that.

Values don't have to be numbers either. Times work too, both a plain `06:32` and a full timestamp, and the gauge then wraps around a 24 hour clock. The numeric gauge options like `ring_min`, `bar_max` or `ring_range_from` can be an entity ID instead of a fixed number, so the ends of a gauge can follow something like today's sunrise and sunset. The Arc layout is built exactly like that.

Any button or icon element can also use `color_thresholds` to tint itself based on a value, with no gauge involved. An icon reads its own entity or attribute if it has one, otherwise the button's value. The value doesn't have to be a number here, a state like `on` or `home` works too.

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
| `card_height` | `string` | `200px` | Height of the card. Numbers are treated as px. `auto` fills available height in grid layouts, `content` sizes to fit the content, `square` makes it as tall as it is wide. |
| `card_padding` | `string` | `16px` | Inner padding around the content. |
| `card_offset` | `string` | — | Shifts the card via CSS margin. Useful when layering cards. |
| `full_width` | `boolean` | `false` | Lets the card bleed past the column gutter so it runs edge to edge in a sections view. |
| `full_width_margin` | `string` | *column gap* | How far it bleeds on each side. Only used with `full_width`. |
| `content_direction` | `string` | `column` | Set to `row` to lay out containers horizontally instead of vertically. |
| `content_align` | `string` | — | How containers are spread along the card: `start`, `center`, `end`, `between`, `around`, `evenly`. |
| `content_align_items` | `string` | — | How containers line up across the card: `start`, `center`, `end`, `stretch`, `baseline`. |
| `card_tap_action` | `object` | — | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/) for the card background. |
| `icon_path` | `string` | — | Folder of custom SVG weather icons, used by every `icon: weather` element that doesn't set its own path. |
| `css` | `string` | — | Your own CSS, applied inside the card. Handy for small tweaks without card-mod. |

</details>

<details>
<summary><b>Card · Color & frame</b></summary>
<br>

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color_mode` | `string` | `sun` | Whether the card uses its light or dark colors. `sun` follows your `sun_entity`, `theme` follows your HA theme. When the card doesn't match your theme, embedded cards and theme colors inside the card follow the card. |
| `dark_theme_adaptation` | `boolean` | `true` | Darkens and saturates the sky, background images, sun and effects a bit while your HA theme is dark but the card is in light mode. Only used with `background_mode: default` or `images`, and does nothing with `color_mode: theme` since the card is dark then anyway. |
| `card_frame` | `boolean` | `true` | Set to `false` to drop the rounded corners and border of the card itself. |
| `edge_fade` | `boolean` | `false` | Fades the top and bottom edge of the card into the dashboard background. |
| `edge_fade_size` | `string` | `10%` | How deep that fade reaches in from each edge. |
| `shadow` | `boolean` | `true` | Shadow under button and container backgrounds. |
| `shadow_color` | `string` | — | Replaces that shadow with your own CSS box-shadow, e.g. `0 2px 8px rgba(0,0,0,0.4)`. |

</details>

<details>
<summary><b>Card · Sun & Moon</b></summary>
<br>

The card renders a sun during the day and a moon at night, positioned within the background. The moon shows the current phase, which the card works out on its own.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sun_entity` | `string` | `sun.sun` | Drives the day/night cycle and the height of the sun in the background. Only set this if your sun entity has a different ID. |
| `sun_enabled` | `boolean` | `true` | Show or hide the sun. |
| `moon_enabled` | `boolean` | `true` | Show or hide the moon. |
| `sun_moon_size` | `string` | `80px` | Size of the sun/moon element. |
| `sun_moon_x` | `string` | `50%` | Horizontal position. A bare number is read as a percentage, or you can pass a CSS length. Set it to `dynamic` and the sun travels from left to right between sunrise and sunset, with the moon doing the same over the night. |
| `sun_moon_y` | `string` | — | Vertical position, as a percentage from the top, clamped to 0-100. When unset it follows the sun's elevation. |

The old `sun_moon_enabled` is converted to the two separate toggles automatically and a leftover `moon_phase_entity` is simply ignored, so existing configs keep working.

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
| `scroll_fade` | `boolean` | `false` | Soft fade at both ends of a scroll layout, which pulls back once you reach that end. Doesn't combine with `button_blurred_background`. |
| `scroll_fade_size` | `string` | `24px` | How far that fade reaches in. |
| `row_height` | `string` | — | Fixed height for a container using `horizontal-scroll` or `vertical-scroll`. |
| `align` | `string` | `start` | Button alignment: `start`, `center`, `end`, `spread`. |
| `justify_content` | `string` | — | How buttons spread along the row: `start`, `center`, `end`, `between`, `around`, `evenly`. These are short keys, not raw CSS values. |
| `align_items` | `string` | — | How buttons line up across the row: `start`, `center`, `end`, `stretch`, `baseline`. Short keys again. |
| `gap` | `string` | — | Space between buttons. |
| `padding` | `string` | — | Inner padding of the container. |
| `margin` | `string` | — | Outer margin of the container. |
| `custom_width` | `string` | — | Fixed width for this container. Useful in `content_direction: row` layouts. |
| `image` | `string` | — | Image shown in the container, as wide as the container, with the buttons on top. `demo-home-image` shows the house from the Home layout. |
| `image_dark` | `string` | — | Image shown instead while the card is in dark mode. Only used with `image`. |
| `background` | `boolean` | `false` | Add a background behind the buttons. |
| `background_color` | `string` | — | Custom background color. |
| `blurred_background` | `boolean` | `false` | Frosted glass effect on the container background. |
| `grouped` | `boolean` | `false` | Wrap buttons into a single shared background. Requires `background: true`. |
| `separator` | `boolean` | `false` | Thin divider between buttons. Works on its own, `grouped` is not required. In a `grid` layout it draws both row and column dividers, in `vertical-scroll` it draws horizontal ones. |
| `shadow` | `boolean` | — | Set to `false` to remove shadow from this container. |
| `hide` | `boolean` | `false` | Hide the container. |
| `visibility` | `list` | — | Standard HA visibility conditions. |
| `button_style` | `string` | `inline` | Default button format: `inline` (icon and text side by side), `vertical` (icon above text) or `split` (texts stacked on top of each other, icon beside them). |
| `button_padding` | `string` | — | Default padding for buttons in this container. |
| `button_gap` | `string` | — | Gap between icon and text in buttons. |
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
| `elements` | `list` | — | What the button contains. See [Elements](#building-blocks). |
| `type` | `string` | — | Set to `ring` for a circular gauge around the button. |
| `style` | `string` | — | Override the container's `button_style` for this button (`inline`, `vertical`, `split`). |
| `text_size` | `string` | — | Text size for this button. |
| `text_shadow` | `boolean` | `false` | Keep the text shadow even when the button has no background. |
| `inner_gap` | `string` | — | Gap between icon and text. |
| `icon_size` | `string` | — | Size for the icons in this button. |
| `icon_padding` | `string` | — | Padding around those icons. |
| `icon_background` | `boolean` | — | Background behind the icons. |
| `icon_background_color` | `string` | — | Icon background color. |
| `background` | `boolean` | — | Override the container's background setting. |
| `background_color` | `string` | — | Custom background color. |
| `background_image` | `boolean` | `false` | Show an image behind this button. |
| `background_image_path` | `string` | — | Path to that image, e.g. `/local/my-image.jpg`. Only used with `background_image: true`. |
| `blurred_background` | `boolean` | — | Override the container's blur setting. |
| `button_round` | `boolean` | `false` | Fully rounded pill shape. |
| `shadow` | `boolean` | — | Set to `false` to remove the shadow from this button. |
| `width` | `string` | — | Button width. Required for scrolling text. |
| `height` | `string` | — | Button height. |
| `padding` | `string` | — | Inner padding. |
| `align` | `string` | — | Content alignment: `start`, `center`, `end`, `spread`. |
| `color_thresholds` | `list` | — | List of `{ value, color }` entries that tint the whole button as the value rises. `value` can also be a text state like `on` or `home` instead of a number. |
| `color_threshold_entity` | `string` | — | Read the tint value from a different entity. |
| `color_threshold_attribute` | `string` | — | Attribute to read for the tint value. |
| `marquee_speed` | `number` | `30` | Scroll speed in px/s for text elements using `overflow: marquee`. |
| `marquee_rtl` | `boolean` | `false` | Reverse the scroll direction. |
| `tap_action` | `object` | `more-info` | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/). |
| `visibility` | `list` | — | Standard HA [visibility conditions](https://www.home-assistant.io/dashboards/conditional/#conditions). |
| `forecast` | `string` | — | `daily` or `hourly`. |
| `forecast_offset` | `number` | `0` | Which forecast entry to show. `0` = today/now, `1` = next, etc. |
| `position` | `string` | — | Set to `custom` to detach the button and place it freely inside its container. |
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
| `weight` | `string` | — | Font weight. This also drives opacity: light weights are drawn faded, heavy ones fully opaque. Not when `color` is set. |
| `color` | `string` | — | Text color. |
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
| `color` | `string` | — | Icon color. |
| `color_thresholds` | `list` | — | List of `{ value, color }` entries that change the icon color. Reads this element's `entity` or `attribute`, otherwise the button's value. |
| `margin` | `string` | — | Outer margin of this element. |
| `padding` | `string` | — | Inner padding of this element. |

**Bar** (`type: bar`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `bar_min` | `number` | `0` | Minimum of the range. This and `bar_max` can also be a time or an entity ID, see [Gauges](#building-blocks). |
| `bar_max` | `number` | `100` | Maximum of the range. |
| `bar_height` | `string` | `4px` | Height of the bar. |
| `bar_color` | `string` | — | Color of the filled part. |
| `bar_threshold_mode` | `string` | `solid` | `solid`, `segments`, or `gradient`. |
| `bar_thresholds` | `list` | — | List of `{ value, color }` entries. |
| `bar_values` | `list` | — | The values shown on the bar. Without it the bar uses the button's own value. |
| `bar_marker` | `boolean` | `false` | Show the marker when the bar has one value. With several values the markers are always there. |
| `bar_fill` | `boolean` | `true` | Set to `false` to draw only the track and the markers, no fill. |
| `bar_marker_size` | `string` | *bar height* | Size of the markers. Anything larger than the bar sticks out on both sides. |
| `bar_marker_icon_size` | `string` | *two thirds of the marker* | Size of the icon inside a marker. |
| `bar_range_from` | `number` | — | Start of a highlighted band drawn on the track, e.g. to mark a comfortable range. |
| `bar_range_to` | `number` | — | End of that band. Both are needed for it to show. |
| `bar_range_color` | `string` | 18% of the text color | Color of that band. |
| `margin` | `string` | — | Outer margin of this element. |
| `padding` | `string` | — | Inner padding of this element. |

**Gauge value** (an entry in `bar_values` or `ring_values`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | — | Read from a different entity than the button. |
| `attribute` | `string` | — | Attribute to read. |
| `value` | `number` | — | A fixed value instead of reading one. |
| `marker_size` | `string` | *gauge marker size* | Size of this marker. `0` hides it. |
| `marker_color` | `string` | — | Color of the marker. |
| `marker_icon` | `string` | — | Icon drawn inside the marker. |
| `marker_icon_color` | `string` | — | Color of that icon. |

</details>

<details>
<summary><b>Ring gauge</b></summary>
<br>

Set on the button, not on an element. Needs `type: ring`. Entries in `ring_values` take the same options as the gauge values under [Elements](#options).

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ring_min` | `number` | `0` | Minimum of the range. This and `ring_max` can also be a time or an entity ID, see [Gauges](#building-blocks). |
| `ring_max` | `number` | `100` | Maximum of the range. |
| `ring_width` | `string` | `4px` | Thickness of the ring. |
| `ring_gap` | `string` | `3px` | Gap between the ring and the button content. |
| `ring_start` | `number` | `0` | Where the ring begins, in degrees clockwise from the top. |
| `ring_arc` | `number` | `360` | How many degrees the ring covers. Anything below 360 leaves an open gap. |
| `ring_color` | `string` | — | Color of the filled part. |
| `ring_threshold_mode` | `string` | `solid` | `solid`, `segments`, or `gradient`. |
| `ring_thresholds` | `list` | — | List of `{ value, color }` entries. |
| `ring_values` | `list` | — | The values shown on the ring. Without it the ring uses the button's own value. |
| `ring_marker` | `boolean` | `false` | Show the marker when the ring has one value. With several values the markers are always there. |
| `ring_fill` | `boolean` | `true` | Set to `false` to draw only the track and the markers, no fill. |
| `ring_needle` | `boolean` | `false` | Draws each marker as a needle from the center. |
| `ring_marker_size` | `string` | *ring width* | Size of the markers. Anything larger than the ring sticks out on both sides. |
| `ring_marker_icon_size` | `string` | *two thirds of the marker* | Size of the icon inside a marker. |
| `ring_range_from` | `number` | — | Start of a highlighted band drawn on the track. |
| `ring_range_to` | `number` | — | End of that band. Both are needed for it to show. |
| `ring_range_color` | `string` | 18% of the text color | Color of that band. |

The old `gauge_entity` and `gauge_attribute` are converted to a `ring_values` entry automatically, so existing configs keep working.

</details>

<details>
<summary><b>Background</b></summary>
<br>

**The background itself**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `background_mode` | `string` | `default` | `default` for the animated sky, `images` for your own background files, `card` for the plain Home Assistant card background, `color` for a color of your own, `none` for a transparent card. |
| `background_color` | `string` | — | The color of the card. Only used with `background_mode: color`. |
| `background_color_dark` | `string` | — | Color used instead while the card is in dark mode. |
| `background_thresholds` | `list` | — | List of `{ value, color }` entries that swap that color as a value rises. `value` can also be a text state like `on` instead of a number. Add `color_dark` to an entry for dark mode. |
| `background_threshold_entity` | `string` | — | Entity the thresholds read from. |
| `background_threshold_attribute` | `string` | — | Attribute to read for the threshold value. |
| `background_haze` | `boolean` | `true` | The drifting color haze that shifts with the weather. Part of the `default` sky, so it has no effect in the other modes. |
| `weather_image_path` | `string` | — | Folder of images or videos named after weather conditions. Used when `background_mode: images`. |
| `weather_image_path_dark` | `string` | — | Second folder used after sunset. Falls back to `weather_image_path`. |

**Layers drawn on top**

These run on top of whichever background you picked, including `images` and `none`.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `precipitation_effects` | `boolean` | `true` | Rain, downpour, thunderstorms, snow, sleet and hail particles. |
| `cloud_effects` | `boolean` | `true` | The drifting cloud layer. Even clear skies get a few soft ones, and fog is drawn with them as well. |
| `night_sky_effects` | `boolean` | `true` | Stars at night, with the occasional shooting star or comet. Thinned out when it's cloudy. |
| `bird_effects` | `boolean` | `true` | Birds crossing the sky. Fewer of them in rain, snow and fog, none in thunderstorms or hail. Not shown while the card is in dark mode. |
| `bird_density` | `number` | `1` | How many birds, between `0.25` and `4`. |
| `balloon_effects` | `boolean` | `true` | Balloons drifting past. Only when the sky is clear or lightly clouded. |
| `balloon_density` | `number` | `1` | How many balloons, between `0.25` and `4`. |
| `plane_effects` | `boolean` | `true` | Planes crossing the sky, trailing contrails, with lights at night. Fewer of them in bad weather, none in thunderstorms, hail, fog or pouring rain. |
| `plane_density` | `number` | `1` | How many planes, between `0.25` and `4`. |

The sun and moon sit in this group too. Their options live under [Card · Sun & Moon](#options).

**Treatments over the whole thing**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `bg_brightness` | `number` | `1` | Brightness multiplier (e.g. `0.8` to darken). Applies to the animated sky and to your own images. |
| `bg_saturation` | `number` | `1` | Saturation multiplier (e.g. `0` for grayscale). Applies to both as well. |
| `bg_blur` | `number` | — | Blur in pixels. Only applies to image backgrounds. |
| `bg_blend` | `number` | `0` | Mixes your theme's card color over the animated sky or your images, from `0` to `100`. Tones the background down. |
| `gradient` | `boolean` | `false` | A gradient over the background, the sun and the effects, under your content. Works with every `background_mode`. |
| `gradient_type` | `string` | `linear` | `linear` or `radial`. |
| `gradient_angle` | `number` | `180` | Direction of a linear gradient in degrees. `180` runs from top to bottom. |
| `gradient_x` | `number` | `50` | Horizontal center of a radial gradient, in percent. |
| `gradient_y` | `number` | `50` | Vertical center of a radial gradient, in percent. |
| `gradient_color_1` | `string` | `transparent` | Start color. |
| `gradient_stop_1` | `number` | `0` | Where the start color sits, in percent. |
| `gradient_color_2` | `string` | `transparent` | End color. |
| `gradient_stop_2` | `number` | `100` | Where the end color sits, in percent. |

`edge_fade` and `card_frame` also change how the background meets the dashboard. Both are under [Card · Color & frame](#options).

</details>

</details>

<details>
<summary><b>Show all CSS variables</b></summary>
<br>

These are for theming. None of them are needed to use the card, they're there if you want to change the look further than the options allow. Put them in your theme file, or set them on a single card with the `css` option, like `:host { --origami-separator-width: 1px; }`. Anything the visual editor already covers is left out of this list, since setting it twice only causes confusion.

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

The card is visually busy, so a few things are built to keep the required performance reasonable. Devices vary a lot though. On older or low-power ones you can turn off the effects separately.

> [!TIP]
> Keeping the animated sky but turning off precipitation and clouds, for example, gives you a good-looking card for little rendering cost.

</details>

<br>

## History

Origami Weather is the continuation of a hobby project which started in early 2026, originally called Atmospheric Weather Card on a previous GitHub account.

> [!NOTE]
> AI is used as a tool in this project.
