# ◪ Origami Weather

<div>
<a href="https://github.com/hazymorning/origami_weather/releases/latest"><img alt="Latest release" src="https://img.shields.io/badge/Release-V1.6.1-F6F4F1?labelColor=181715"></a>
<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin"><img alt="In the HACS default store" src="https://img.shields.io/badge/HACS-Default-F6F4F1?labelColor=181715"></a>
<a href="https://github.com/hazymorning?tab=repositories&q=origami"><img alt="Origami suite" src="https://img.shields.io/badge/Origami-Suite-F6F4F1?labelColor=181715&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJub25lIiBzdHJva2U9IiNGNkY0RjEiIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5Z29uIHBvaW50cz0iMjEsMyAyMSwyMSAzLDIxIiBmaWxsPSIjRjZGNEYxIi8%2BPC9zdmc%2B"></a>
</div>

<br>

<img alt="Origami Weather's diorama, a partly cloudy day with the sun and birds in light mode, and a clear night with the moon and stars in dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/hero.webp">

Origami Weather is a weather card for Home Assistant that can become almost any weather card. Everything on it is built from simple parts that can be combined freely, so a classic forecast is just as possible as something completely different. The layouts are ready to use and a good place to start.

[Get started](#get-started) · [Layouts](#layouts) · [More](#more)

## Get started

<details>
<summary><b>Install the card</b></summary>

<br>

Origami Weather is in the HACS default store.

1. Open Origami Weather in HACS and select **Download**.

   [![Open this repository in HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin)

2. Reload the page.

Without HACS, copy every file in `dist` from the [latest release](https://github.com/hazymorning/origami_weather/releases/latest) to a folder of its own, such as `/config/www/origami-weather`, add `/local/origami-weather/origami-weather.js` as a **JavaScript module** under [Resources](https://my.home-assistant.io/redirect/lovelace_resources/) and reload the page with a hard refresh. The card loads the other files from the same folder when it needs them.

</details>

<details>
<summary><b>Add the card</b></summary>

<br>

1. Edit a dashboard and add the **Origami Weather** card.
2. Choose the weather entity and a layout.
3. Change anything in the visual editor or in the code editor.

> **Choose the layout first.** A layout chosen in the visual editor replaces all of the card's settings, so the changes come after it.

</details>

## Layouts

<sub>The screenshots use the Montserrat font. The [Origami](https://github.com/hazymorning/origami#get-started) repository explains how to add it to Home Assistant.</sub>

### Diorama

<img width="800" alt="The Diorama layout, a paper landscape for each kind of weather: a partly cloudy midday with the sun above the hills, and a snowy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/diorama.webp">

A little paper landscape for each kind of weather, made for the [Origami](https://github.com/hazymorning/origami) dashboard. The sun and the moon cross the sky and set behind the hills, and a frosted bar in the top left corner slides through today's high and low, the wind, the next sunset or sunrise, the humidity and the UV index.

<details>
<summary><b>Load the pictures from Home Assistant</b></summary>

<br>

The diorama loads its pictures from Origami's repository through jsDelivr. To load them from Home Assistant instead:

1. Copy the folder [`diorama`](https://github.com/hazymorning/origami/tree/main/dashboard/weather/diorama) from Origami to `/config/www`, so the pictures are in `/config/www/diorama/light` and `/config/www/diorama/dark`.
2. Set the two picture folders in the card to `/local/diorama/light/` and `/local/diorama/dark/`, under **Background** in the visual editor or as `weather_image_path` and `weather_image_path_dark` in the code editor.

</details>

### Classic

<img width="800" alt="The Classic layout: the temperature and the weather on a color that changes with it, today's high and low, and a forecast for the coming days with the chance of rain, on a partly cloudy day and a clear night" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/classic.webp">

The temperature and the current weather on a color that changes with it, today's high and low, and a forecast that slides through the coming days, with the chance of rain under each day. When it's cloudy, layers of soft mist drift across the card with the wind, and in fog they close in.

### Centered

<img width="800" alt="The Centered layout: the temperature in the middle with the high, the low and the wind, on a partly cloudy day and a snowy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/centered.webp">

The temperature and the current weather in the middle, with the day's high and low and the wind. The clouds drift over soft layers of mist, which fill the sky in fog.

### Home

<img width="800" alt="The Home layout: a house in its garden with the temperature of three rooms and a wind compass, lit by the sun with birds in the sky on a sunny day and with lit windows behind rain and mist on a rainy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/home.webp">

A house in its garden that follows the sun, with the temperature of each room and a compass for the wind. Birds, rain, snow and a light mist pass in front of it.

<details>
<summary><b>The house in detail</b></summary>

<br>

The card draws the house itself. The sun lights the walls, the tree and the shrubs from where it really is, and their shadows follow it across the lawn. When it snows, the roofs, the tree and the lawn turn white and smoke rises from the chimney, and in dark mode the windows light up and throw their light onto the lawn. The rooms show the weather entity's temperature until each one is set to a room sensor.

The plain house of earlier versions is still there: `image: old-home` on the container brings it back.

</details>

<details>
<summary><b>Draw a real home with AI</b></summary>

<br>

An AI can draw any home and build the card around it: the real one from photos, in whatever style fits, with as much of its surroundings as wanted, from a bit of lawn to the whole garden or the hills behind it. It's a big job, so use the most capable model available, with image input and its most thorough reasoning setting. The files below add up to about 300 KB of text, and the model has to hold all of them at once. One that can also run code does much better, because it can look at its own pictures before handing them over.

**How it works.** A drawn home is a picture file, and the card can't change anything inside it. So whatever should change becomes a picture of its own, stacked exactly on top: a night version, the lit windows of a room while its light is on, sunlight that follows the sun, snow while it snows. A day and a night picture are enough to start with, and the rest can follow later.

**Prepare.**

1. Download [`README.md`](README.md), [`REFERENCE.md`](REFERENCE.md) and [`src/origami-weather.js`](src/origami-weather.js), the card itself, from this repository.
2. Take photos of the home from the front, the back and two corners, and of the garden or anything else that should be in the picture. For a particular style, an example picture helps too.
3. Find out which way the front faces. A map shows it.
4. Look up the entity IDs of the room sensors and of the lights that should light up windows, under **Settings → Devices & services → Entities**.
5. Add a card with the Home layout, open its code editor and copy the YAML.
6. Attach it all in a chat with the AI, paste this text and fill in the brackets.

```text
I'm using the Origami Weather card for Home Assistant and want my own home in its Home layout. Attached are the card's README and REFERENCE, the card's source (origami-weather.js), my card YAML and photos of my home.

My home:
- Style: [watercolor / paper cut / flat illustration / low poly / pixel art / like the attached picture]
- Surroundings: [just a bit of lawn / our garden with the apple tree and the hedge / the hillside and the forest behind it]
- Place in the card: [where the layout's picture is / across the whole card, with the temperatures on top]
- Sky: [the card's plain color / the card's own sky behind my home, with the sun, the moon, clouds and stars]
- The front faces [south-west].
- Rooms, their sensors and their windows: [living room, sensor.living_room_temperature: the two big windows on the garden side], [...]
- Lights that light up windows: [light.living_room: living room], [...]
- What should change: [night / lights / sun and shadows / rain / snow / the trees with the seasons, from sensor.season]

Draw my home as it really is, in the style I chose. It replaces the picture in my YAML. Read everything first. Work out from origami-weather.js how containers show `image` and `image_dark`, how free-positioned containers stack, and how `visibility` and the `css` option work. For the `css` option, the card sets the classes scheme-light or scheme-dark and weather-<condition> on #card-root, and these values: --origami-sun-x and --origami-sun-y, the direction of the sun (x is 1 in the east and -1 in the west, y is 1 in the north and -1 in the south), --origami-sun-light, how strong the direct sunlight is, from 0 at night or under thick clouds to 1 in full sun, and --origami-sun-shadow, how long a shadow is compared to the height of what casts it. My pictures are image files, so the card can't change anything inside them, and each change has to be a picture of its own, in a container with exactly the same position, width and `layer`, stacked in the right order. Show me your plan and my home in daylight, and wait for my OK before making the rest.

1. Keep what makes my home recognizable, like the shape of the roofs, the floors, the windows and doors and the colors, and simplify the rest. It has to read at the size it gets in the card. Leave the background transparent wherever the card should show through.
2. Draw every picture on the same canvas, so they line up exactly. SVG is easiest for that. If the style needs painted pictures, use PNG or WebP with transparency and keep the framing exactly the same. An overlay holds only what it changes, and only the parts of it that can be seen.
3. Make a picture for each change on my list:
   - night: a version for `image_dark`, with the windows dark
   - lights: the lit windows of each room and the glow they throw outside, shown with `visibility` while the light is on
   - sun and shadows: faded and moved with the sun through the `css` option, with fallbacks for when the values are missing, and following the way my home really faces. Select each picture by its file name, like img.group-image[src*="sun-east"].
   - snow: shown while the weather is snowy or snowy-rainy
   - anything else the same way, with `visibility` or the `css` option
4. Use my sensors for the rooms. If the temperatures sit on the picture, place them as free-positioned buttons with offsets in %, so they stay in place when the card resizes.
5. If you can run code, render the pictures and check them in light and dark mode, in the morning, at noon and in the evening, and with each light on and off.

Give me the files, where they go (/config/www/home/, used as /local/home/...) and the complete card YAML, ready to paste.
```

**Put it in Home Assistant.**

1. Copy the pictures to `/config/www/home`, for example with the File editor or a Samba share. If the `www` folder is new, restart Home Assistant once so it serves it.
2. Paste the YAML into the card's code editor and save.
3. Reload the page with a hard refresh. Browsers hold on to pictures for a while, so a changed picture needs one too.

**Make it better.** It rarely comes out right on the first try. Send the AI screenshots of the card in light and dark mode and ask for specific changes, like a roof that's too flat, a window in the wrong place or a tree that should be taller. One or two at a time works best. If the card shows an error, send the AI the message as it is.

Once it works, play around with the settings to find a look that fits. The Home layout turns off the sun, the moon, the clouds, the stars, the balloons and the planes, so only birds, rain, snow and a light mist are left. The house sits behind the weather, so clouds, balloons and planes pass in front of it once they're back on, while the sun, the moon and the stars stay behind it. Turning some of them back on can change the whole feel, especially with a sky around the home, and almost anything in the README and the reference can go into it, so let the AI try things.

</details>

### Other layouts

Slim, Comparison and Arc are no longer in the layout picker, but they still work. Paste one into the code editor and change each `weather.home` in it to the home's weather entity.

<details>
<summary><b>Slim</b></summary>

<br>

<img width="800" alt="The Slim layout: the temperature with a row of small chips, over clouds and birds by day and over the moon and stars at night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/slim.webp">

The current weather with a row of small chips for today's high, the wind, the next sunset or sunrise, the humidity and the UV index.

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_moon_x: dynamic
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
      entity: weather.home
      attribute: temperature
      weight: '700'
      fancy_unit: true
    style: inline
  padding: 4px
  button_text_size: 26px
  margin: 0 0 32px 0
  button_gap: 6px
  button_style: vertical
- background: true
  gap: 8px
  button_gap: 6px
  button_icon_size: 14px
  button_padding: 8px 12px 8px 10px
  align: center
  button_text_size: 12px
  background_color: rgba(255,255,255,0.1)
  blurred_background: true
  buttons:
  - entity: weather.home
    elements:
    - type: text
      text: Today
      weight: '500'
    - type: icon
      icon: weather
    - type: text
      format: °
      weight: '700'
      attribute: temperature
    style: inline
    forecast: daily
  - entity: weather.home
    elements:
    - type: icon
      icon: mdi:weather-windy
    - type: text
      attribute: wind_speed
      format: ' km/h'
      weight: '700'
    style: inline
  - entity: sun.sun
    elements:
    - type: icon
      icon: mdi:weather-sunset-up
    - type: text
      attribute: next_rising
      weight: '700'
    visibility:
    - condition: state
      entity: sun.sun
      state: below_horizon
  - entity: sun.sun
    elements:
    - type: icon
      icon: mdi:weather-sunset-down
    - type: text
      attribute: next_setting
      weight: '700'
    visibility:
    - condition: state
      entity: sun.sun
      state: above_horizon
  - entity: weather.home
    elements:
    - type: icon
      icon: mdi:water-percent
    - type: text
      weight: '700'
      attribute: humidity
      format: ' %'
    style: inline
  - entity: weather.home
    elements:
    - type: icon
      icon: mdi:sun-wireless-outline
    - type: text
      text: UV-Index
      weight: '500'
    - type: text
      attribute: uv_index
      weight: '700'
    forecast: daily
  button_background_color: rgba(189,189,189,0.2)
  layout: horizontal-scroll
  scroll_fade: true
grid_options:
  rows: auto
  columns: 12
```

</details>

<details>
<summary><b>Comparison</b></summary>

<br>

<img width="800" alt="The Comparison layout: the temperature outside beside tiles for today and the next days, with a bar that compares it with today's high and today's chance of rain, on a rainy day and a clear night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/comparison.webp">

The temperature outside beside tiles for today and the next days, with a bar that compares it with today's high, and today's chance of rain.

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_enabled: false
moon_enabled: false
sun_moon_x: dynamic
card_height: content
card_padding: 20px
card_offset: 8px 0px 0px 0px
color_mode: theme
background_mode: color
background_threshold_entity: weather.home
background_thresholds:
- value: sunny
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(245,185,70))
- value: clear-night
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(80,90,180))
- value: partlycloudy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 82%, rgb(120,175,225))
- value: cloudy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 84%, rgb(145,155,175))
- value: fog
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 84%, rgb(185,185,200))
- value: windy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 84%, rgb(90,190,175))
- value: windy-variant
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 84%, rgb(110,170,200))
- value: rainy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(70,130,200))
- value: pouring
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 76%, rgb(45,95,190))
- value: lightning
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(150,105,220))
- value: lightning-rainy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 76%, rgb(115,85,205))
- value: hail
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(100,185,210))
- value: snowy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(180,215,245))
- value: snowy-rainy
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 80%, rgb(135,175,215))
- value: exceptional
  color: color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 76%, rgb(230,95,65))
background_haze: false
precipitation_effects: false
cloud_effects: false
night_sky_effects: false
button_containers:
- buttons:
  - entity: weather.home
    background: false
    padding: '0'
    style: vertical
    align: start
    inner_gap: 6px
    elements:
    - type: text
      text: Outside
      size: 14px
      weight: '500'
    - type: text
      attribute: temperature
      precision: 0
      format: °
      size: 42px
      weight: '800'
- position: custom
  position_anchor: top-right
  layout: horizontal-scroll
  custom_width: 60%
  scroll_count: 3
  gap: 8px
  background: true
  button_style: vertical
  button_padding: 16px 12px
  button_icon_size: 26px
  button_icon_padding: 0 0 8px 0
  button_shadow: false
  button_blurred_background: true
  buttons:
  - entity: weather.home
    forecast: daily
    align: center
    background_color: rgba(150,150,150,0.14)
    elements:
    - type: icon
      icon: weather
    - type: text
      size: 12px
      weight: '500'
      attribute: datetime
    - type: text
      weight: '700'
      attribute: temperature
      format: °
  - entity: weather.home
    forecast: daily
    forecast_offset: 1
    align: center
    background_color: rgba(150,150,150,0.12)
    elements:
    - type: icon
      icon: weather
    - type: text
      size: 12px
      weight: '500'
      attribute: datetime
    - type: text
      weight: '700'
      attribute: temperature
      format: °
  - entity: weather.home
    forecast: daily
    forecast_offset: 2
    align: center
    background_color: rgba(150,150,150,0.1)
    elements:
    - type: icon
      icon: weather
    - type: text
      size: 12px
      weight: '500'
      attribute: datetime
    - type: text
      weight: '700'
      attribute: temperature
      format: °
  - entity: weather.home
    forecast: daily
    forecast_offset: 3
    align: center
    background_color: rgba(150,150,150,0.08)
    elements:
    - type: icon
      icon: weather
    - type: text
      size: 12px
      weight: '500'
      attribute: datetime
    - type: text
      weight: '700'
      attribute: temperature
      format: °
- padding: '0'
  margin: 66px 0 8px 0
  buttons:
  - entity: weather.home
    forecast: daily
    background: false
    padding: '0'
    width: 100%
    elements:
    - type: bar
      bar_min: '-10'
      bar_max: '35'
      bar_height: 2px
      bar_color: rgba(150,150,150,0.6)
      bar_marker_size: 10px
      bar_values:
      - entity: weather.home
        attribute: temperature
        marker_color: '#ffffff'
      - attribute: temperature
- padding: 0 4px
  margin: 12px 0 0 0
  align: start
  button_text_size: 16px
  buttons:
  - entity: weather.home
    background: false
    padding: '0'
    align: spread
    elements:
    - type: icon
      icon: weather
      padding: 0 4px 0 0
    - type: text
      weight: '700'
      margin: 0 auto 0 0
  - entity: weather.home
    forecast: daily
    background: false
    padding: '0'
    align: spread
    elements:
    - type: icon
      icon: mdi:umbrella-outline
      margin: 0 0 0 auto
    - type: text
      attribute: precipitation_probability
      format: ' %'
      weight: '400'
grid_options:
  rows: auto
  columns: 12
```

</details>

<details>
<summary><b>Arc</b></summary>

<br>

The sun on an arc from sunrise to sunset and the moon on one from sunset to sunrise, with the temperature and the next sunset or sunrise below it. The arcs read `sensor.sun_next_rising` and `sensor.sun_next_setting` from the Sun integration, and the sun or moon on them follows `sensor.time` from the Time & Date integration.

```yaml
type: custom:origami-weather
weather_entity: weather.home
sun_moon_size: 100
sun_moon_y: 44
card_height: auto
card_padding: '0'
bird_effects: false
balloon_effects: false
plane_effects: false
button_containers:
- position: custom
  position_anchor: top
  position_y: 10cqh
  buttons:
  - entity: sun.sun
    elements:
    - type: text
      text: ' '
    visibility:
    - condition: state
      entity: sun.sun
      state: above_horizon
    type: ring
    width: 68cqmin
    background: false
    ring_min: sensor.sun_next_rising
    ring_max: sensor.sun_next_setting
    ring_start: 240
    ring_arc: 240
    ring_width: '4'
    ring_color: color-mix(in srgb, currentColor 40%, transparent)
    ring_values:
    - entity: sensor.time
      marker_size: 0
    - entity: sensor.sun_next_rising
      marker_size: '26'
      marker_color: rgba(0,0,0,0.8)
      marker_icon: mdi:weather-sunset-up
      marker_icon_color: '#ffffff'
    - entity: sensor.sun_next_setting
      marker_size: '26'
      marker_color: rgba(0,0,0,0.8)
      marker_icon: mdi:weather-sunset-down
      marker_icon_color: '#ffffff'
    - entity: sensor.time
      marker_size: '40'
      marker_color: '#ffffff'
      marker_icon: mdi:white-balance-sunny
      marker_icon_color: '#2c2c2e'
  - entity: sun.sun
    elements:
    - type: text
      text: ' '
    visibility:
    - condition: state
      entity: sun.sun
      state: below_horizon
    type: ring
    width: 68cqmin
    background: false
    ring_min: sensor.sun_next_setting
    ring_max: sensor.sun_next_rising
    ring_start: 240
    ring_arc: 240
    ring_width: '4'
    ring_color: color-mix(in srgb, currentColor 40%, transparent)
    ring_values:
    - entity: sensor.time
      marker_size: 0
    - entity: sensor.sun_next_setting
      marker_size: '26'
      marker_color: rgba(0,0,0,0.8)
      marker_icon: mdi:weather-sunset-down
      marker_icon_color: '#ffffff'
    - entity: sensor.sun_next_rising
      marker_size: '26'
      marker_color: rgba(0,0,0,0.8)
      marker_icon: mdi:weather-sunset-up
      marker_icon_color: '#ffffff'
    - entity: sensor.time
      marker_size: '40'
      marker_color: '#ffffff'
      marker_icon: mdi:weather-night
      marker_icon_color: '#2c2c2e'
- position: custom
  position_anchor: bottom-left
  position_x: 7cqw
  position_y: 7cqh
  padding: '0'
  button_style: vertical
  button_padding: '0'
  button_gap: 8px
  buttons:
  - entity: weather.home
    background: false
    elements:
    - type: text
      attribute: temperature
      precision: 0
      format: °
      size: clamp(24px, 8cqmin, 36px)
      weight: '700'
    - type: text
      size: clamp(13px, 3.5cqmin, 16px)
      weight: '500'
- position: custom
  position_anchor: bottom-right
  position_x: 7cqw
  position_y: 7cqh
  align: end
  padding: '0'
  button_style: vertical
  button_padding: '0'
  button_gap: 8px
  buttons:
  - entity: sun.sun
    elements:
    - type: text
      attribute: next_setting
      size: clamp(24px, 8cqmin, 36px)
      weight: '700'
    - type: text
      text: Sunset
      size: clamp(13px, 3.5cqmin, 16px)
      weight: '500'
    visibility:
    - condition: state
      entity: sun.sun
      state: above_horizon
    background: false
  - entity: sun.sun
    elements:
    - type: text
      attribute: next_rising
      size: clamp(24px, 8cqmin, 36px)
      weight: '700'
    - type: text
      text: Sunrise
      size: clamp(13px, 3.5cqmin, 16px)
      weight: '500'
    visibility:
    - condition: state
      entity: sun.sun
      state: below_horizon
    background: false
grid_options:
  columns: 12
  rows: 6
```

</details>

## More

<a name="backgrounds"></a>
<details>
<summary><b>The sky and its effects</b></summary>

<br>

The card shows an animated sky behind the content that follows the weather and the sun. Its color shifts from day to night, the sun rises and sets, stars come out at night with the occasional shooting star, birds cross the sky, balloons drift past and planes pass overhead. Clouds, mist, rain and snow add to it, and the clouds and the mist drift with the wind.

The sky and each kind of effect can be turned off, rain and snow with one switch. The effects also work on top of the other backgrounds, which `background_mode` sets: a picture for each kind of weather, a color, the plain card background or none. The card also works in Home Assistant's plain style, with just the content and nothing else going on.

With `background_mode: none` and `card_frame: false`, the card loses its own styling and blends in with the dashboard, and `full_width: true` stretches it over the full width. This mostly works in specific places, such as a dashboard header. The [reference](REFERENCE.md#background) lists every option.

</details>

<details>
<summary><b>Building blocks</b></summary>

<br>

Every layout is built from the same blocks. Containers hold buttons, and each button shows an entity with text, icons, bars or a ring. A container can also hold a picture, such as a floor plan with each room's temperature on it, or other Home Assistant cards. It can sit in front of the sky and the weather or further back, so rain and birds pass in front of a picture of a house.

Containers and buttons can also have a name. The card doesn't show it, but the visual editor lists them by it, so the parts of a bigger layout are easy to tell apart.

The [reference](REFERENCE.md) explains each block and every option. For a new layout, the YAML of a finished one in the code editor is a good start.

</details>

<details>
<summary><b>Performance</b></summary>

<br>

An animated weather card has to run on all kinds of setups, so a lot of care went into keeping this one light. That's why there are no extra performance options. It already runs at the lowest level that still lets it do what it's meant to do. Pictures like the clouds, the birds and the house only load once a card shows them, and the editor only when a card is edited.

If it still feels too heavy on a device, most features can be turned off one by one. Plain weather pictures, or leaving out the decorative parts entirely, make it even lighter.

</details>

<sub>Origami Weather continues a hobby project from early 2026, first called Atmospheric Weather Card on an earlier GitHub account. AI is used as a tool in this project.</sub>
