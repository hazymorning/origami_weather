# ◪ Origami Weather

<div>
<a href="https://github.com/hazymorning/origami_weather/releases/latest"><img alt="Latest release" src="https://img.shields.io/badge/Release-V1.6.1-F6F4F1?labelColor=181715"></a>
<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin"><img alt="In the HACS default store" src="https://img.shields.io/badge/HACS-Default-F6F4F1?labelColor=181715"></a>
<a href="https://github.com/hazymorning?tab=repositories&q=origami"><img alt="Origami suite" src="https://img.shields.io/badge/Origami-Suite-F6F4F1?labelColor=181715&logo=data:image/svg%2Bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI%2BPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJub25lIiBzdHJva2U9IiNGNkY0RjEiIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5Z29uIHBvaW50cz0iMjEsMyAyMSwyMSAzLDIxIiBmaWxsPSIjRjZGNEYxIi8%2BPC9zdmc%2B"></a>
</div>

<img alt="Origami Weather's diorama, a partly cloudy and a rainy day in light mode, and a clear and a partly cloudy night in dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/hero.webp">

Origami Weather is a weather card for Home Assistant with finished layouts and a builder approach. With a specific idea in mind, even a very creative one, it's almost always possible to build exactly that.

[Get started](#get-started) · [Layouts](#layouts) · [More](#more)

## Get started

<details>
<summary><b>Install the card</b></summary>

<br>

Origami Weather is in the HACS default store.

1. Open Origami Weather in HACS and select **Download**.

   [![Open this repository in HACS.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=hazymorning&repository=origami_weather&category=plugin)

2. Reload the page.

Without HACS, copy [`dist/origami-weather.js`](https://github.com/hazymorning/origami_weather/blob/main/dist/origami-weather.js) to `/config/www` and add `/local/origami-weather.js` as a **JavaScript module** under [Resources](https://my.home-assistant.io/redirect/lovelace_resources/).

</details>

<details>
<summary><b>Add the card</b></summary>

<br>

1. Edit a dashboard and add the **Origami Weather** card.
2. Choose the weather entity and a layout. For the diorama, paste [`diorama.yaml`](https://github.com/hazymorning/origami/blob/main/dashboard/weather/diorama.yaml) into the code editor instead, and change `weather.home` to the home's weather entity.
3. Change anything in the visual editor or in the code editor.

> **Choose the layout first.** Another layout replaces the card's content, including changes made before.

</details>

## Layouts

Each layout is a starting point, and every part of it can be changed.

### Diorama

<img width="800" alt="The Diorama layout, a paper landscape for each kind of weather: a partly cloudy midday with the sun above the hills, and a snowy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/diorama.webp">

A little paper landscape for each kind of weather, made for the [Origami](https://github.com/hazymorning/origami) dashboard. The sun and the moon cross the sky and set behind the hills. The layout comes as a file from Origami, [`diorama.yaml`](https://github.com/hazymorning/origami/blob/main/dashboard/weather/diorama.yaml).

<details>
<summary><b>Load the pictures from Home Assistant</b></summary>

<br>

The diorama loads its pictures from Origami's repository through jsDelivr. To load them from Home Assistant instead:

1. Copy the folder [`diorama`](https://github.com/hazymorning/origami/tree/main/dashboard/weather/diorama) from Origami to `/config/www`, so the pictures are in `/config/www/diorama/light` and `/config/www/diorama/dark`.
2. In `diorama.yaml`, replace every copy of this address with `/local/diorama/`. The replace function of a text editor does it in one step.

   ```text
   https://cdn.jsdelivr.net/gh/hazymorning/origami@main/dashboard/weather/diorama/
   ```

</details>

### Slim

<img width="800" alt="The Slim layout: the temperature with a row of small chips, over clouds and birds by day and over the moon and stars at night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/slim.webp">

The current weather with a row of small chips for today's high, the wind, the next sunset or sunrise and the humidity, made for the top of a dashboard.

### Home

<img width="800" alt="The Home layout: a small house with the temperature of three rooms, casting its shadow on a sunny day and with lit windows on a rainy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/home.webp">

A house that casts a shadow with the sun and lights its windows at night, with the temperature of each room.

<details>
<summary><b>The house in detail</b></summary>

<br>

The card draws the house itself. Its shadow follows the sun, and the ring around it shows the sun's path through the day. In the rain, the wet ground mirrors the house, and in the snow, the roof turns white. Until the rooms get sensors of their own, they show the temperature of the weather entity.

</details>

<details>
<summary><b>Draw a real home with AI</b></summary>

<br>

An AI can draw a real home in the style of the demo house and build the layout around it. This needs a capable model that understands photos and draws clean SVGs.

1. Download [`README.md`](README.md), [`REFERENCE.md`](REFERENCE.md) and [`src/image-assets.js`](src/image-assets.js) from this repository. The last entry in `image-assets.js`, `DEMO_HOME`, is the demo house.
2. Take a few photos of the home, ideally one from the front and one from a corner.
3. Copy the YAML of a card with the Home layout from the code editor.
4. Give it all to the AI with this text, and fill in the brackets. The lights are optional, for rooms that light up.

```text
I'm using the Origami Weather card for Home Assistant and want to turn its Home layout into my own home. Attached are the card's README and REFERENCE (every option), my card YAML with the Home layout, image-assets.js (DEMO_HOME at the end is the demo house) and photos of my home.

1. Draw my home as an SVG in the style of DEMO_HOME: isometric, flat matte colors, no outlines, soft ground shadow, transparent background, square viewBox with the house centered. Recognizable, but simplified.
2. Make two versions, one for light mode and one for dark mode, for `image` and `image_dark` on the container. Both are loaded as normal image files, so they can't read the card's CSS variables or classes the way DEMO_HOME does.
3. Rebuild the card YAML around it. Put each room's temperature on that room as free-positioned buttons inside the image container, with offsets in %, so they stay in place when the card resizes. Use my sensors instead of the weather entity:
   [sensor.living_room_temperature: living room]
   [...]
4. Optional: make a room light up when its light is on, for example with a lit window overlay as an icon element (`icon_path`) that only shows through `visibility`. Keep the windows dark in both base images then.
   [light.living_room: living room]
   [...]

Read the whole README and REFERENCE before you start and really use what's in them: containers, free positioning, all element types, visibility, thresholds, the gradient layer and the `css` option. For `css`, the card sets --origami-sun-x, --origami-sun-y, --origami-sun-shadow and --origami-sun-light, and #card-root has scheme-light/scheme-dark and weather-<condition> classes.

Give me the SVG files, where they go (/config/www/, used as /local/...) and the complete card YAML.
```

The SVG files go into `/config/www`. The Home layout turns off the sun, the clouds and the other effects. Turning some of them back on, or choosing another background, changes the whole look.

</details>

### Centered

<img width="800" alt="The Centered layout: the temperature in the middle with the high, the low, wind and humidity, on a partly cloudy day and a snowy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/centered.webp">

The temperature in the middle, with the day's high and low, the wind and the humidity.

### Comparison

<img width="800" alt="The Comparison layout: the temperature outside beside three days of forecast, with a temperature bar and the chance of rain, on a rainy day and a clear night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/comparison.webp">

The temperature outside beside the next three days, with a temperature bar and the chance of rain.

## More

<a name="backgrounds"></a>
<details>
<summary><b>The sky and its effects</b></summary>

<br>

The sky behind the content changes from day to night, the sun rises and sets, and stars come out at night with a shooting star now and then. Clouds, rain, snow, birds, balloons and planes cross it, and each of them can be turned on or off.

Instead of the sky, `background_mode` can show a picture for each kind of weather, a color, the plain card background or nothing at all. With `background_mode: none` and `card_frame: false`, the card blends into the dashboard, and `full_width: true` stretches it across the page, such as for a header. The [reference](REFERENCE.md#background) lists every option.

</details>

<details>
<summary><b>Building blocks</b></summary>

<br>

Every layout is built from the same blocks. Containers hold buttons, and each button shows an entity with text, icons, bars or a ring. A container can also hold a picture, such as a floor plan with each room's temperature on it, or other Home Assistant cards.

The [reference](REFERENCE.md) explains each block and every option. For a new layout, the YAML of a finished one in the code editor is a good start.

</details>

<details>
<summary><b>Performance</b></summary>

<br>

A lot of care went into keeping the card light, so it runs on any device and needs no settings for performance. Where it still feels heavy, the effects can be turned off one by one, and pictures or a plain color are lighter than the animated sky.

</details>

<sub>Origami Weather continues a hobby project from early 2026, first called Atmospheric Weather Card on an earlier GitHub account. AI is used as a tool in this project.</sub>
