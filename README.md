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

Without HACS, copy `dist/origami-weather.js` from the [latest release](https://github.com/hazymorning/origami_weather/releases/latest) to `/config/www`, add `/local/origami-weather.js` as a **JavaScript module** under [Resources](https://my.home-assistant.io/redirect/lovelace_resources/) and reload the page with a hard refresh.

</details>

<details>
<summary><b>Add the card</b></summary>

<br>

1. Edit a dashboard and add the **Origami Weather** card.
2. Choose the weather entity and a layout. For the diorama, paste [`diorama.yaml`](https://github.com/hazymorning/origami/blob/main/dashboard/weather/diorama.yaml) into the code editor instead, and change each `weather.home` in it to the home's weather entity.
3. Change anything in the visual editor or in the code editor.

> **Choose the layout first.** A layout chosen in the visual editor replaces all of the card's settings, so the changes come after it.

</details>

## Layouts

<sub>The screenshots use the Montserrat font. The [Origami](https://github.com/hazymorning/origami#get-started) repository explains how to add it to Home Assistant.</sub>

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

The current weather with a row of small chips for today's high, the wind, the next sunset or sunrise, the humidity and the UV index.

### Home

<img width="800" alt="The Home layout: a small house with the temperature of three rooms, casting its shadow on a sunny day and with lit windows on a rainy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/home.webp">

A house that casts its shadow with the sun and lights its windows in dark mode, with the temperature of each room.

<details>
<summary><b>The house in detail</b></summary>

<br>

The card draws the house itself. Its shadow follows the real position of the sun, and the ring around it shows the path the sun takes today. When it rains during the day, the house is mirrored on the wet ground, and when it snows, the roof turns white. The rooms show the weather entity's temperature until each one is set to a room sensor.

</details>

<details>
<summary><b>Draw a real home with AI</b></summary>

<br>

An AI can draw a real home and build the card around it, in any style and with as much around the house as fits, from a bit of lawn to the whole garden or the hills behind it. Use the most capable model available. It has to understand photos, draw clean pictures and read the card's source code, which comes to about 300 KB of text together with the README and the reference. A model that can run code does better, because it can look at its pictures before handing them over.

A drawn home is a normal picture file, and the card can't change anything inside it. So everything that should change, like the night, a room's light, the sunlight or snow, becomes a picture of its own that lies exactly on top of the house. The card shows or fades these pictures as needed. A day and a night picture are enough to start with.

1. Download [`README.md`](README.md), [`REFERENCE.md`](REFERENCE.md) and the card itself, [`src/origami-weather.js`](src/origami-weather.js), from this repository.
2. Take photos of the home from the front, the back and two corners, and of anything around it that should be in the picture.
3. Find out which way the front of the house faces, on a map for example.
4. Look up the entity IDs of the room sensors and of the lights that should light up windows, under **Settings → Devices & services → Entities**.
5. Copy the YAML of a card with the Home layout from the code editor.
6. Give it all to the AI with this text and fill in the brackets. They hold examples, so a pixel art style, the hills behind the house or a picture across the whole card work just as well.

```text
I'm using the Origami Weather card for Home Assistant and want my own home in its Home layout. Attached are the card's README and REFERENCE, its source code (origami-weather.js), my card YAML and photos of my home.

Draw my home as it really is, in a [watercolor] style, with [our garden with the apple tree and the hedge] around it. Put it [where the layout's picture is], in front of [the card's own sky with the sun, the moon, clouds and stars]. The front of the house faces [south-west]. The rooms are [the living room with sensor.living_room_temperature and the two big windows on the garden side] and [...]. [light.living_room] should light up the windows of [the living room], and [...]. Besides day and night, the picture should change with [the lights, the sun and snow].

Read everything before you start. Work out from origami-weather.js how containers show image and image_dark, how free-positioned containers stack, and how visibility and the css option work. For css, the card sets the classes scheme-light or scheme-dark and weather-<condition> on #card-root. It also sets --origami-sun-x and --origami-sun-y for the direction of the sun (x is 1 in the east and -1 in the west, y is 1 in the north and -1 in the south), --origami-sun-light for the strength of the sunlight from 0 to 1, and --origami-sun-shadow for the length of a shadow compared to the height of what casts it.

My pictures are image files, so the card can't change anything inside them. Every change needs a picture of its own, in its own container with exactly the same position and width as the house, stacked in the right order. Draw all pictures on the same canvas so they line up, and let an overlay hold only what changes and only what can be seen. SVG makes this easiest. If the style needs painted pictures, use PNG or WebP with transparency and keep the framing exactly the same.

Show lit windows and the light they throw outside while their light is on, and snow while the weather is snowy or snowy-rainy. Fade and move the sunlight and the shadows with the sun through the css option, with fallbacks for missing values, and pick each picture by its file name, like img.group-image[src*="sun-east"]. Keep the house recognizable, but simple enough to read at the size it gets in the card, and leave the background transparent where the card should show through. Use my sensors for the rooms. If the temperatures sit on the picture, place them as free-positioned buttons with offsets in %.

Show me your plan and my home in daylight first, and wait for my OK before you make the rest. If you can run code, check every picture in light and dark mode, in the morning, at noon and in the evening, and with each light on and off. Then give me the files, where they go (/config/www/home/, used as /local/home/...) and the complete card YAML.
```

The pictures go into `/config/www/home`, for example with the File editor or a Samba share. If the `www` folder is new, Home Assistant needs one restart before it serves it. After pasting the YAML into the card's code editor, a hard refresh shows the new pictures. Browsers keep pictures for a while, so a changed picture needs one too.

It rarely comes out right on the first try. Screenshots of the card and one or two concrete wishes at a time work best, like a flatter roof or a taller tree. Error messages can go to the AI as they are.

Once it works, play around with the settings to find a look that fits. The Home layout turns off the sun, the moon, the clouds, the stars, the birds, the balloons and the planes, and only rain and snow still fall. Turning some of them back on or trying another background can change the whole feel, and almost anything in the README and the reference can go into it, so let the AI try things.

</details>

### Centered

<img width="800" alt="The Centered layout: the temperature in the middle with the high, the low, wind and humidity, on a partly cloudy day and a snowy night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/centered.webp">

The temperature and the current weather in the middle, with the day's high and low, the wind and the humidity.

### Comparison

<img width="800" alt="The Comparison layout: the temperature outside beside tiles for today and the next days, with a bar that compares it with today's high and today's chance of rain, on a rainy day and a clear night, in light and dark mode" src="https://raw.githubusercontent.com/hazymorning/origami_weather/main/images/comparison.webp">

The temperature outside beside tiles for today and the next days, with a bar that compares it with today's high, and today's chance of rain.

## More

<a name="backgrounds"></a>
<details>
<summary><b>The sky and its effects</b></summary>

<br>

The card shows an animated sky behind the content that follows the weather and the sun. Its color shifts from day to night, the sun rises and sets, stars come out at night with the occasional shooting star, birds cross the sky, balloons drift past and planes pass overhead. Clouds, rain and snow add to it.

The sky and each kind of effect can be turned off, rain and snow with one switch. The effects also work on top of the other backgrounds, which `background_mode` sets: a picture for each kind of weather, a color, the plain card background or none. The card also works in Home Assistant's plain style, with just the content and nothing else going on.

With `background_mode: none` and `card_frame: false`, the card loses its own styling and blends in with the dashboard, and `full_width: true` stretches it over the full width. This mostly works in specific places, such as a dashboard header. The [reference](REFERENCE.md#background) lists every option.

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

An animated weather card has to run on all kinds of setups, so a lot of care went into keeping this one light. That's why there are no extra performance options. It already runs at the lowest level that still lets it do what it's meant to do.

If it still feels too heavy on a device, most features can be turned off one by one. Plain weather pictures, or leaving out the decorative parts entirely, make it even lighter.

</details>

<sub>Origami Weather continues a hobby project from early 2026, first called Atmospheric Weather Card on an earlier GitHub account. AI is used as a tool in this project.</sub>
