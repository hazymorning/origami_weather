# Origami Weather reference

The building blocks of a layout, and every option. The visual editor covers most of them, and the code editor shows the YAML of any layout as a starting point.

[Building blocks](#building-blocks) · [Options](#options) · [CSS variables](#css-variables)

## Building blocks

### Containers

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

A container can show an image with `image`, as wide as the container. Its buttons sit on top of it, and [free positioning](#buttons) puts each one exactly where it belongs, like room temperatures on a floor plan. `image_dark` shows a different image while the card is in dark mode, `image: home` is the house from the Home layout, and `image: old-home` the plain house of earlier versions. Cards that still say `demo-home-image` keep that plain house.

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

Containers and buttons can have a `name`. The card doesn't show it, but the visual editor lists them by it, which helps in a layout with many of them.

### Buttons

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

State, numeric state, screen size, user, and `and`/`or`/`not` conditions are supported. A `numeric_state` condition can read an `attribute` instead of the state, or a forecast entry with `forecast: daily` or `hourly` plus `forecast_offset`. With several conditions, all of them have to pass. Visibility also works at the container level.

**Missing values.** Weather services don't all send the same things. A value the service doesn't send prints `N/A`, and the button stays where it is.

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

Containers can be placed freely on the card the same way. Offsets and sizes inside free-positioned containers can use container query units (`cqw`, `cqh`, `cqmin`), which are relative to the card instead of the screen. That way the whole arrangement scales along with the card. In the other containers, `cqw` works as well, for sizes that follow the card's width.

### Elements

Everything inside a button is an element. A button holds a flat `elements` list, and the order of that list is the order things are drawn in. There are three types: `text`, `icon` and `bar`. A button takes as many of each as it needs, in any mix, so a bar can sit between two texts, or an icon can sit after the value instead of before it.

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

That gives something like "Today: 8 – 14 °C" inside a single button.

Without `elements`, the button shows one text element with the entity state.

All three types take `margin` and `padding`, which is the usual way to nudge one element around without touching the rest of the button.

**Text elements** take `entity`, `attribute`, `text` (a fixed string), `format` (glued to the end of the value, usually a unit), `precision` (decimal places), `size`, `weight`, `color`, `overflow` and `fancy_unit`. A text element without `entity`, `attribute` or `text` falls back to the button's own entity and attribute. Note that `weight` also sets the opacity: light weights are drawn faded, heavy ones fully opaque. That is why a `weight: 300` label looks softer than the value next to it. A text with its own `color` is not faded.

**Icon elements** take `icon`, `icon_path`, `icon_size`, `icon_padding`, `icon_background`, `icon_background_color`, `color` and `color_thresholds`. Leave `icon` empty and the entity's own icon is used. Set `icon: weather` for the animated icon that matches the current weather.

**Bar elements** are horizontal gauges. They take `bar_min`, `bar_max`, `bar_height`, `bar_width`, `bar_color`, `bar_threshold_mode` and `bar_thresholds`. A bar uses the button's own value, unless `bar_values` names another one. It runs across the whole button, or as far as `bar_width` says.

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

### Forecasts

Set `forecast` to `daily` or `hourly` on a button to show forecast data. Use `forecast_offset` to pick the entry: `0` is today/now, `1` is tomorrow/next hour, and so on. A text element with `attribute: datetime` prints the matching label (day name or time), and [date codes](#dates) in its `format` change what that label says. With `icon: weather` on an icon element, the icon matches the forecasted condition.

A button whose `forecast_offset` lies past the last entry the weather service sends is not drawn. A row can therefore hold ten days and show as many as there are, like the Classic layout does. On a weather entity without that kind of forecast the buttons stay and print `N/A`.

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

### Dates

A forecast's `datetime` and timestamps like the sun's `next_rising` print a short label, a day name or a time. Put date codes into `format` to print the date in that pattern instead.

```yaml
elements:
  - type: text
    attribute: datetime
    format: "%a, %d"
```

This prints `Thu, 12`. The codes are the ones Home Assistant templates use.

| Code | Prints |
| :--- | :--- |
| `%a` `%A` | Day name, short and long. |
| `%b` `%B` | Month name, short and long. |
| `%d` `%m` | Day of the month and month as numbers, like `05` and `11`. |
| `%y` `%Y` | Year, like `26` and `2026`. |
| `%H` `%I` | Hour on the 24-hour and on the 12-hour clock. |
| `%M` `%S` | Minute and second. |
| `%p` | `AM` or `PM`. |

Day and month names are in the Home Assistant language. A `-` after the percent sign drops the leading zero, so `%-d` prints `5`. A `format` without a code is still glued to the end of the label.

### Gauges

There are two gauge shapes. A ring wraps around the whole button and is set on the button itself with `type: ring`. A bar is an element in the `elements` list with `type: bar`. Both fill based on a value inside a min/max range, and everything below works the same for both, only the `ring_` or `bar_` prefix changes.

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

With one value there is no marker, `bar_marker: true` adds it. The marker matches the bar height, so a thin bar means a small icon, unless `bar_marker_size` makes it stick out on both sides. `bar_fill: false` drops the fill and leaves only the markers, and a `marker_size` of `0` on a single value hides its marker, which is handy when a value should only drive the fill.

`bar_range_from` and `bar_range_to` draw a highlighted band on the track, such as the range that matters.

A ring doesn't have to be a full circle. `ring_start` rotates where it begins, in degrees clockwise from the top, and `ring_arc` sets how far it goes, so `ring_start: 240` with `ring_arc: 240` makes an open arc with the gap at the bottom.

`ring_needle: true` turns the markers into needles that point from the center, like a compass or a clock hand. A value can also be a fixed number with `value` instead of reading an entity, which is handy for a mark that never moves. The compass in the Home layout is built like that.

Values don't have to be numbers either. Times work too, both a plain `06:32` and a full timestamp, and the gauge then wraps around a 24 hour clock. The numeric gauge options like `ring_min`, `bar_max` or `ring_range_from` can be an entity ID instead of a fixed number, so the ends of a gauge can follow something like today's sunrise and sunset. The Arc layout is built exactly like that.

Any button or icon element can also use `color_thresholds` to tint itself based on a value, with no gauge involved. An icon reads its own entity or attribute if it has one, otherwise the button's value. The value doesn't have to be a number here, a state like `on` or `home` works too.

### Icons

The card comes with animated weather icons. Turn them on with `icon: weather` on an icon element.

For custom icons, `icon_path` points to a folder of SVGs. Name the files after the weather conditions (`sunny.svg`, `rainy.svg`, etc., using the standard [HA condition names](https://www.home-assistant.io/integrations/weather/#condition-mapping)). Set once at the card level, `icon_path` applies to every `icon: weather` element.

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

## Options

### Card

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `weather_entity` | `string` | — | **Required.** The weather entity the card follows, for the sky, the effects, the pictures and the tap on the card. |
| `card_height` | `string` | `200px` | Height of the card. Numbers are treated as px. `auto` fills available height in grid layouts, `content` sizes to fit the content, `square` makes it as tall as it is wide. |
| `card_padding` | `string` | `16px` | Inner padding around the content. One value, or two for top and bottom, then left and right. CSS variables like `var(--ha-space-4)` work too. |
| `card_offset` | `string` | — | Shifts the card via CSS margin. Useful when layering cards. |
| `full_width` | `boolean` | `false` | Lets the card bleed past the column gutter so it runs edge to edge in a sections view. |
| `full_width_margin` | `string` | *column gap* | How far it bleeds on each side. Only used with `full_width`. |
| `content_direction` | `string` | `column` | Set to `row` to lay out containers horizontally instead of vertically. |
| `content_align` | `string` | — | How containers are spread along the card: `start`, `center`, `end`, `between`, `around`, `evenly`. |
| `content_align_items` | `string` | — | How containers line up across the card: `start`, `center`, `end`, `stretch`, `baseline`. |
| `card_tap_action` | `object` | — | Standard HA [tap action](https://www.home-assistant.io/dashboards/actions/) for the card background. |
| `icon_path` | `string` | — | Folder of custom SVG weather icons, used by every `icon: weather` element that doesn't set its own path. |
| `css` | `string` | — | Custom CSS, applied inside the card, for small changes without card-mod. |

### Colors and frame

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `color_mode` | `string` | `sun` | Whether the card uses its light or dark colors. `sun` follows `sun_entity`, `theme` follows the HA theme, and `dark` or `light` keep the card in one of them. With `dark` and `light`, `background_color_dark` is used at night. When the card doesn't match the theme, embedded cards and theme colors inside the card follow the card. |
| `dark_theme_adaptation` | `boolean` | `true` | Darkens and saturates the sky, background images, sun and effects a bit while the HA theme is dark but the card is in light mode. Only used with `background_mode: default` or `images`, and does nothing with `color_mode: theme` since the card is dark then anyway. |
| `card_frame` | `boolean` | `true` | Set to `false` to drop the rounded corners and border of the card itself. |
| `edge_fade` | `boolean` | `false` | Fades the top and bottom edge of the card into the dashboard background. |
| `edge_fade_size` | `string` | `10%` | How deep that fade reaches in from each edge. |
| `shadow` | `boolean` | `true` | Shadow under button and container backgrounds. |
| `shadow_color` | `string` | — | Replaces that shadow with a custom CSS box-shadow, e.g. `0 2px 8px rgba(0,0,0,0.4)`. |

### Sun and moon

The card renders a sun during the day and a moon at night, positioned within the background. The moon shows the current phase, which the card works out on its own.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sun_entity` | `string` | `sun.sun` | Drives the day/night cycle and the height of the sun in the background. Only needed when the sun entity has a different ID. |
| `sun_enabled` | `boolean` | `true` | Show or hide the sun. |
| `moon_enabled` | `boolean` | `true` | Show or hide the moon. |
| `sun_moon_size` | `string` | `80px` | Size of the sun/moon element. |
| `sun_moon_x` | `string` | `50%` | Horizontal position. A bare number is read as a percentage, and a CSS length works too. With `dynamic`, the sun travels from left to right between sunrise and sunset, with the moon doing the same over the night. |
| `sun_moon_y` | `string` | — | Vertical position, as a percentage from the top, clamped to 0-100. When unset it follows the sun's elevation. |

The old `sun_moon_enabled` is converted to the two separate toggles automatically and a leftover `moon_phase_entity` is simply ignored, so existing configs keep working.

### Container options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | — | A name for the container in the visual editor's list. The card doesn't show it. |
| `buttons` | `list` | — | The buttons inside this container. |
| `custom_cards` | `list` | — | Embed HA cards instead of buttons. Use this or `buttons`, not both. |
| `layout` | `string` | `wrap` | How buttons are arranged: `wrap`, `horizontal-scroll`, `vertical-scroll`, `grid`. |
| `columns` | `number` | — | Number of columns when `layout: grid`. |
| `scroll_count` | `number` | — | Buttons visible at once in a scroll layout. Enables snap scrolling. |
| `scroll_fade` | `boolean` | `false` | Soft fade at both ends of a scroll layout. The fade at an end disappears once the scroll reaches that end. Doesn't combine with `button_blurred_background`. |
| `scroll_fade_size` | `string` | `24px` | How far that fade reaches in. |
| `row_height` | `string` | — | Fixed height for a container using `horizontal-scroll` or `vertical-scroll`. |
| `align` | `string` | `start` | Button alignment: `start`, `center`, `end`, `spread`. |
| `justify_content` | `string` | — | How buttons spread along the row: `start`, `center`, `end`, `between`, `around`, `evenly`. These are short keys, not raw CSS values. |
| `align_items` | `string` | — | How buttons line up across the row: `start`, `center`, `end`, `stretch`, `baseline`. Short keys again. |
| `gap` | `string` | — | Space between buttons. |
| `padding` | `string` | — | Inner padding of the container. |
| `margin` | `string` | — | Outer margin of the container. |
| `custom_width` | `string` | — | Fixed width for this container. Useful in `content_direction: row` layouts. |
| `image` | `string` | — | Image shown in the container, as wide as the container, with the buttons on top. `home` shows the house from the Home layout, `old-home` the plain house of earlier versions. |
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

### Button options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | — | A name for the button in the visual editor's list. The card doesn't show it. |
| `entity` | `string` | — | **Required.** Any sensor, binary_sensor, or weather entity. |
| `attribute` | `string` | — | Read a specific attribute instead of the state. When the entity isn't a weather entity and doesn't have that attribute, its state is shown instead, so a weather button can be pointed at a room sensor without changing anything else. |
| `elements` | `list` | — | What the button contains. See [Elements](#elements). |
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
| `forecast_offset` | `number` | `0` | Which forecast entry to show. `0` = today/now, `1` = next, etc. Past the last entry the weather service sends, the button is not drawn. |
| `position` | `string` | — | Set to `custom` to detach the button and place it freely inside its container. |
| `position_anchor` | `string` | `top-left` | Anchor point for free positioning. |
| `position_x` | `string` | `0` | Horizontal offset from anchor. |
| `position_y` | `string` | `0` | Vertical offset from anchor. |

### Element options

Every entry in a button's `elements` list needs a `type`, which is `text`, `icon` or `bar`.

**Text** (`type: text`)

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `entity` | `string` | — | Read from a different entity than the button. |
| `attribute` | `string` | — | Read a specific attribute. |
| `text` | `string` | — | A fixed string instead of a value. |
| `format` | `string` | — | Glued to the end of the value, usually a unit. On a date it can be a pattern with [date codes](#dates). |
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
| `bar_min` | `number` | `0` | Minimum of the range. This and `bar_max` can also be a time or an entity ID, see [Gauges](#gauges). |
| `bar_max` | `number` | `100` | Maximum of the range. |
| `bar_height` | `string` | `4px` | Height of the bar. |
| `bar_width` | `string` | *full width* | Length of the bar, never wider than the button. A bar with its own length lines up like the other elements. |
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

### Ring gauge

Set on the button, not on an element. Needs `type: ring`. Entries in `ring_values` take the same options as the gauge values under [Element options](#element-options).

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `ring_min` | `number` | `0` | Minimum of the range. This and `ring_max` can also be a time or an entity ID, see [Gauges](#gauges). |
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

### Background

**The background itself**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `background_mode` | `string` | `default` | `default` for the animated sky, `images` for custom background pictures or videos, `card` for the plain Home Assistant card background, `color` for a custom color, `none` for a transparent card. |
| `background_color` | `string` | — | The color of the card. Used with `background_mode: color`, and around the pictures with `images`. |
| `background_color_dark` | `string` | — | Color used instead while the card is in dark mode. |
| `background_thresholds` | `list` | — | List of `{ value, color }` entries that swap that color as a value rises. `value` can also be a text state like `on` instead of a number. Add `color_dark` to an entry for dark mode. |
| `background_threshold_entity` | `string` | — | Entity the thresholds read from. Without it, they follow the card's weather, so each `value` can be a condition like `rainy`. |
| `background_threshold_attribute` | `string` | — | Attribute to read for the threshold value. |
| `background_haze` | `boolean` | `true` | The drifting color haze that shifts with the weather. On by default with the `default` sky. In the other modes it is off unless set to `true`. |
| `weather_image_path` | `string` | — | Folder of images or videos named after weather conditions. Used when `background_mode: images`. |
| `weather_image_path_dark` | `string` | — | Second folder used after sunset. Falls back to `weather_image_path`. |
| `weather_image_type` | `string` | — | File type of those pictures, like `webp`. Without it, the card tries the usual types one after another until one loads. |
| `weather_image_front` | `boolean` | `false` | Draws the pictures in front of the sun, the moon and the stars. Where a picture is transparent, they show through, so they can set behind the hills of a landscape. |

**Layers drawn on top**

These run on top of every background, including `images` and `none`.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `precipitation_effects` | `boolean` | `true` | Rain, downpour, thunderstorms, snow, sleet and hail particles. |
| `precipitation_speed` | `number` | `1` | How fast they fall, between `0.25` and `4`. |
| `cloud_effects` | `boolean` | `true` | The drifting cloud layer. Even clear skies get a few soft ones, and fog is drawn with them as well. |
| `cloud_image_path` | `string` | — | A picture of a single cloud, like `/local/cloud.png`, that the cloud layer is drawn with instead of the built-in clouds. A PNG or WebP with a transparent background works best. |
| `mist_effects` | `boolean` | `false` | A faint mist that drifts across the card when it's cloudy and thickens into banks in fog. It works with or without the clouds. |
| `night_sky_effects` | `boolean` | `true` | Stars at night, with the occasional shooting star or comet. Thinned out when it's cloudy. |
| `bird_effects` | `boolean` | `true` | Birds crossing the sky. Fewer of them in rain, snow and fog, none in thunderstorms or hail. Not shown while the card is in dark mode. |
| `bird_density` | `number` | `1` | How many birds, between `0.25` and `4`. |
| `balloon_effects` | `boolean` | `true` | Balloons drifting past. Only when the sky is clear or lightly clouded. |
| `balloon_density` | `number` | `1` | How many balloons, between `0.25` and `4`. |
| `plane_effects` | `boolean` | `true` | Planes crossing the sky, trailing contrails, with lights at night. Fewer of them in bad weather, none in thunderstorms, hail, fog or pouring rain. |
| `plane_density` | `number` | `1` | How many planes, between `0.25` and `4`. |

The sun and moon sit in this group too. Their options are under [Sun and moon](#sun-and-moon).

**Treatments over the whole thing**

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `bg_brightness` | `number` | `1` | Brightness multiplier (e.g. `0.8` to darken). Applies to the animated sky and to background images. |
| `bg_saturation` | `number` | `1` | Saturation multiplier (e.g. `0` for grayscale). Applies to both as well. |
| `bg_blur` | `number` | — | Blur in pixels. Only applies to image backgrounds. |
| `bg_blend` | `number` | `0` | Mixes the theme's card color over the animated sky or the images, from `0` to `100`. Tones the background down. |
| `gradient` | `boolean` | `false` | A gradient over the background, the sun and the effects, under the content. Works with every `background_mode`. |
| `gradient_type` | `string` | `linear` | `linear` or `radial`. |
| `gradient_angle` | `number` | `180` | Direction of a linear gradient in degrees. `180` runs from top to bottom. |
| `gradient_x` | `number` | `50` | Horizontal center of a radial gradient, in percent. |
| `gradient_y` | `number` | `50` | Vertical center of a radial gradient, in percent. |
| `gradient_color_1` | `string` | `transparent` | Start color. |
| `gradient_stop_1` | `number` | `0` | Where the start color sits, in percent. |
| `gradient_color_2` | `string` | `transparent` | End color. |
| `gradient_stop_2` | `number` | `100` | Where the end color sits, in percent. |

`edge_fade` and `card_frame` also change how the background meets the dashboard. Both are under [Colors and frame](#colors-and-frame).

## CSS variables

These are for theming. None of them are needed to use the card. They change the look further than the options allow, in a theme file or on a single card with the `css` option, like `:host { --origami-separator-width: 1px; }`. Anything the visual editor already covers is left out of this list, since setting it twice only causes confusion.

### Text and colors

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-text-light` | `#2c2c2e` | Text color while the card is in light mode. |
| `--origami-text-dark` | `#ffffff` | Text color while the card is in dark mode. |
| `--origami-text-shadow-light` | white glow | Shadow behind text in light mode. |
| `--origami-text-shadow-dark` | dark glow | Shadow behind text in dark mode. |
| `--origami-button-text-shadow` | — | Replaces both of the above with one value for both modes. |
| `--origami-bottom-font-weight` | `500` | Font weight of button text. |

### Sky and sun

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-default-bg-light` | blue gradient | The sky behind everything in light mode. Takes any background value, including a gradient. |
| `--origami-default-bg-dark` | dark blue gradient | Same for dark mode. |
| `--origami-sun-ray-shine` | `rgba(255,250,240,0.17)` | Color of the rays around the sun. The card sets its own value in dark mode, so this mostly affects daytime. |

### Card frame

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-card-border-radius` | `--ha-card-border-radius`, or `12px` | Corner radius of the card. |
| `--origami-card-border-width` | `--ha-card-border-width`, or `0px` | Border thickness of the card. |
| `--origami-stack-order` | `1` | The card's z-index. Handy for cards stacked with `card_offset`. |
| `--origami-edge-fade-color` | `--primary-background-color` | The color `edge_fade` fades into. Set it when the card sits on something other than the dashboard background. |

### Backgrounds behind containers, buttons and icons

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-bg-border` | `1px solid transparent` | Border on those backgrounds. Takes a full CSS border value. |
| `--origami-bottom-bg-radius` | card radius minus 5px | Corner radius of container and button backgrounds. |
| `--origami-bottom-bg-filter` | `blur(10px)` | The filter used by `blurred_background`. |
| `--origami-icon-bg-radius` | button radius minus the inset | Corner radius of icon backgrounds. |
| `--origami-icon-bg-inset` | `3px` | How much rounder the icon background is than the button around it. |

### Dividers

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-separator-color` | 10% of the text color | Color of the dividers from `separator: true`. |
| `--origami-separator-width` | `2px` | Thickness of those dividers. |

### Scrolling text

| Variable | Default | Description |
| :--- | :--- | :--- |
| `--origami-marquee-fade` | `12px` | Width of the soft fade at both ends of scrolling text. |
| `--marquee-separator` | `"•"` | The character printed between repeats. Needs quotes. |
| `--marquee-sep-gap` | `0.4em` | Space around that character. |

Example, set once for a whole theme:

```yaml
my_theme:
  origami-text-dark: "#e8eef7"
  origami-default-bg-dark: "linear-gradient(160deg, #05060a 0%, #0d1424 100%)"
  origami-separator-color: "rgba(255,255,255,0.12)"
  origami-bottom-bg-radius: "18px"
```

<br>
