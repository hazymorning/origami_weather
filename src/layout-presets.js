export const PRESET_ENTITY_TOKEN = '__WEATHER__';

const text = (extra) => ({ type: 'text', ...extra });
const icon = (name, extra) => ({ type: 'icon', icon: name, ...extra });
const thresholds = (rows) => rows.map(([value, color, color_dark]) => ({ value, color, color_dark }));

const DIORAMA_PAPER = [
    ['sunny', '#eee5d7', '#261d13'],
    ['partlycloudy', '#dee9ef', '#182227'],
    ['cloudy', '#e2e5e7', '#1b1e20'],
    ['fog', '#e8e7e5', '#222120'],
    ['rainy', '#d9e1ea', '#171e26'],
    ['pouring', '#d7dde4', '#151b21'],
    ['lightning', '#e5dfe8', '#221d25'],
    ['lightning-rainy', '#dfdbe2', '#1d1920'],
    ['hail', '#d3dfdf', '#121c1c'],
    ['snowy', '#e5eaec', '#1c2426'],
    ['snowy-rainy', '#dde2e5', '#1e2124'],
    ['windy', '#dce6e3', '#182220'],
    ['windy-variant', '#dae1de', '#171d1b'],
    ['clear-night', '#e0e3ed', '#161924'],
    ['exceptional', '#eadad3', '#271a15']
];

const ICON_SPACE = {
    weather: '0 1px 0 -0.2px',
    'mdi:weather-windy': '0 0.3px 0 -1.3px',
    'mdi:weather-sunset-down': '0 -0.3px 0 0',
    'mdi:weather-sunset-up': '0 -0.3px 0 0',
    'mdi:water-percent': '0 -3px 0 -2.8px',
    'mdi:sun-wireless-outline': '0 0.3px 0 -1.3px'
};
const dioramaItem = (iconName, label, values, extra) => ({
    name: label,
    entity: PRESET_ENTITY_TOKEN,
    ...extra,
    elements: [icon(iconName, { margin: ICON_SPACE[iconName] }), ...(label ? [text({ text: label, weight: '500' })] : []), ...values]
});

const dioramaSun = (rising) => dioramaItem(rising ? 'mdi:weather-sunset-up' : 'mdi:weather-sunset-down', rising ? 'Sunrise' : 'Sunset', [text({ weight: '700' })], {
    name: rising ? 'Sunrise (at night)' : 'Sunset (by day)',
    entity: 'sun.sun',
    attribute: rising ? 'next_rising' : 'next_setting',
    visibility: [{ condition: 'state', entity: 'sun.sun', state: rising ? 'below_horizon' : 'above_horizon' }]
});

const DIORAMA_CONFIG = Object.freeze({
    card_height: '176px',
    card_padding: 'var(--ha-space-4, 16px)',
    content_align: 'between',
    sun_moon_size: 40,
    sun_moon_x: 'dynamic',
    cloud_effects: false,
    background_mode: 'images',
    weather_image_path: 'diorama/light/',
    weather_image_path_dark: 'diorama/dark/',
    weather_image_type: 'webp',
    weather_image_front: true,
    background_thresholds: thresholds(DIORAMA_PAPER),
    shadow_color: 'inset 0 1px 3px rgba(0, 0, 0, 0.16), inset 0 -1px 0 rgba(255, 255, 255, 0.14)',
    card_tap_action: { action: 'more-info' },
    css: `:host {
  --origami-separator-width: 1px;
  --origami-separator-color: color-mix(in srgb, currentColor 18%, transparent);
}
#weather-bg > img { object-position: right bottom; }
.row-horizontal-scroll > .button { max-width: none; }`,
    button_containers: [
        {
            name: 'Temperature',
            buttons: [
                {
                    name: 'Temperature and condition',
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    style: 'vertical',
                    align: 'start',
                    inner_gap: '6px',
                    background: false,
                    elements: [
                        text({ size: '40px', weight: '800', precision: 0, format: '\u00b0' }),
                        text({ entity: PRESET_ENTITY_TOKEN, size: '12px', weight: '500', overflow: 'wrap' })
                    ]
                }
            ]
        },
        {
            name: 'Info bar',
            custom_width: '50%',
            grouped: true,
            background: true,
            blurred_background: true,
            separator: true,
            background_color: 'color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 40%, transparent)',
            layout: 'horizontal-scroll',
            scroll_fade: true,
            gap: '0px',
            padding: '8px 4px',
            button_padding: '2px 12px',
            button_text_size: '12px',
            button_icon_size: '14px',
            button_gap: '4px',
            buttons: [
                dioramaItem('weather', '', [
                    text({ attribute: 'temperature', format: '\u00b0', weight: '700' }),
                    text({ text: '/', weight: '500' }),
                    text({ attribute: 'templow', format: '\u00b0', weight: '700' })
                ], { name: 'Today', forecast: 'daily' }),
                dioramaItem('mdi:weather-windy', 'Wind', [text({ attribute: 'wind_speed', precision: 0, weight: '700' })]),
                dioramaSun(false),
                dioramaSun(true),
                dioramaItem('mdi:water-percent', 'Humidity', [text({ attribute: 'humidity', weight: '700' })]),
                dioramaItem('mdi:sun-wireless-outline', 'UV', [text({ attribute: 'uv_index', weight: '700' })], { forecast: 'daily' })
            ]
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 'full'
    }
});

const CLASSIC_COLORS = [
    ['sunny', '#4a8bcb', '#1c2b49'],
    ['clear-night', '#1c2b49', '#1c2b49'],
    ['partlycloudy', '#5687b8', '#273449'],
    ['cloudy', '#6e8196', '#303740'],
    ['fog', '#80898f', '#353a3e'],
    ['windy', '#4d8a90', '#233b3e'],
    ['windy-variant', '#56869c', '#273a44'],
    ['rainy', '#566a80', '#272f3a'],
    ['pouring', '#465669', '#1e252f'],
    ['lightning', '#575370', '#282636'],
    ['lightning-rainy', '#4c4965', '#211f2d'],
    ['hail', '#5a7888', '#29363d'],
    ['snowy', '#7890a6', '#313d49'],
    ['snowy-rainy', '#677d91', '#2d3740'],
    ['exceptional', '#2784d5', '#182b4e']
];

const WHITE = '#ffffff';
const WHITE_72 = 'rgba(255, 255, 255, 0.72)';
const WHITE_60 = 'rgba(255, 255, 255, 0.6)';

const classicDay = (offset) => ({
    name: offset === 1 ? 'Tomorrow' : `In ${offset} days`,
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'daily',
    forecast_offset: offset,
    background: false,
    elements: [
        text({ attribute: 'datetime', size: '12px', weight: '500', color: WHITE_72 }),
        icon('weather', { icon_size: '26px', color: WHITE, margin: '2px 0' }),
        text({ attribute: 'temperature', format: '\u00b0', size: '15px', weight: '700', color: WHITE }),
        text({ attribute: 'templow', format: '\u00b0', size: '14px', weight: '500', color: WHITE_60 }),
        { type: 'bar', bar_height: '4px', bar_width: '26px', bar_color: '#9fd2ff', margin: '3px 0 0', bar_values: [{ attribute: 'precipitation_probability' }] }
    ]
});

const todayText = (extra) => text({ size: '15px', weight: '500', ...extra });

const CLASSIC_CONFIG = Object.freeze({
    color_mode: 'dark',
    sun_moon_size: 56,
    sun_moon_x: 'calc(100% - var(--_origami-pad-h, var(--origami-card-padding, 16px)) - 40px)',
    sun_moon_y: 'calc(var(--_origami-pad-v, var(--origami-card-padding, 16px)) + 36px)',
    cloud_effects: false,
    mist_effects: true,
    bird_effects: false,
    balloon_effects: false,
    plane_effects: false,
    background_mode: 'color',
    background_color: '#5687b8',
    background_color_dark: '#273449',
    background_thresholds: thresholds(CLASSIC_COLORS),
    background_haze: false,
    card_tap_action: { action: 'more-info' },
    gradient: true,
    gradient_type: 'linear',
    gradient_color_1: 'rgba(255, 255, 255, 0.08)',
    gradient_color_2: 'rgba(255, 255, 255, 0)',
    gradient_stop_2: 70,
    card_height: 'content',
    card_padding: 'var(--ha-space-4, 16px)',
    button_containers: [
        {
            name: 'Now',
            padding: '0 4px',
            buttons: [
                { name: 'Temperature', entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', background: false, elements: [text({ size: '52px', weight: '800', precision: 0, format: '\u00b0', color: WHITE, margin: '-0.165em -0.06em -0.1em' })] }
            ]
        },
        {
            name: 'Today',
            custom_width: 'calc(100% - 76px)',
            align_items: 'baseline',
            gap: '2px 16px',
            margin: '2px 0 0',
            padding: '0 4px',
            buttons: [
                { name: 'Condition', entity: PRESET_ENTITY_TOKEN, background: false, elements: [todayText({ color: WHITE })] },
                {
                    name: 'High and low',
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    inner_gap: '5px',
                    elements: [
                        todayText({ attribute: 'temperature', format: '\u00b0', color: WHITE }),
                        todayText({ text: '/', color: 'rgba(255, 255, 255, 0.4)' }),
                        todayText({ attribute: 'templow', format: '\u00b0', color: WHITE_72 })
                    ]
                }
            ]
        },
        {
            name: 'Forecast',
            layout: 'horizontal-scroll',
            scroll_count: 6,
            justify_content: 'center',
            margin: '22px 0 0',
            padding: '4px',
            gap: '0',
            background: true,
            grouped: true,
            blurred_background: true,
            background_blur: 20,
            shadow: false,
            background_color: 'rgba(255, 255, 255, 0.12)',
            button_style: 'vertical',
            button_gap: '5px',
            button_padding: '14px 0',
            align: 'center',
            buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(classicDay)
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

const WINDOW_MAX = 136, WINDOW_SHARE = 40, WINDOW_HOUR = 28;
const WINDOW_SIZE = `min(${WINDOW_MAX}px, ${WINDOW_SHARE}cqw)`;
const windowPad = (side) => `var(--_origami-pad-${side}, var(--origami-card-padding, 16px))`;
const WINDOW_BLEED = `min(${windowPad('h')}, max(0px, (100cqw - ${6 * WINDOW_HOUR}px)/10))`;
const WINDOW_INK = 'var(--primary-text-color)';
const WINDOW_MUTED = 'var(--secondary-text-color)';
const WINDOW_PAPER = 'var(--ha-card-background, var(--card-background-color, #fff))';
const windowSoft = (share) => `color-mix(in srgb, ${WINDOW_INK} ${share}%, transparent)`;
const windowSmall = (extra) => text({ size: '13px', weight: '500', ...extra });

const WINDOW_SKY = [
    ['sunny', '#5f9fd6', '#14223f'],
    ['clear-night', '#5f9fd6', '#14223f'],
    ['exceptional', '#4f97dc', '#14223f'],
    ['partlycloudy', '#6ea2cf', '#1a2741'],
    ['windy', '#66a2c4', '#172a39'],
    ['windy-variant', '#71a1bf', '#1a2a3b'],
    ['cloudy', '#8a9daf', '#222a36'],
    ['fog', '#a0a8ae', '#2a3036'],
    ['rainy', '#738aa0', '#1c2531'],
    ['pouring', '#617286', '#18202a'],
    ['lightning', '#6d6c8b', '#211e31'],
    ['lightning-rainy', '#615f7c', '#1c1a2a'],
    ['hail', '#7a92a1', '#1d2930'],
    ['snowy', '#8ea5ba', '#25303c'],
    ['snowy-rainy', '#8397a9', '#212b35']
];

const WINDOW_CUT = [
    `0 0 0 100vmax ${WINDOW_PAPER}`,
    '0 0 0 100vmax var(--primary-background-color)',
    `inset 0 0 0 1px ${windowSoft(10)}`,
    'inset 0 1.5px 1px -0.5px rgba(0, 0, 0, 0.1)',
    'inset 0 6px 12px -6px rgba(0, 0, 0, 0.3)',
    `inset 0 -1.5px 0 color-mix(in srgb, ${WINDOW_PAPER} 75%, #fff)`
].join(', ');

const windowSun = (rising) => ({
    name: rising ? 'Sunrise (at night)' : 'Sunset (by day)',
    entity: 'sun.sun',
    attribute: rising ? 'next_rising' : 'next_setting',
    background: false,
    padding: '0',
    inner_gap: '4px',
    visibility: [{ condition: 'state', entity: 'sun.sun', state: rising ? 'below_horizon' : 'above_horizon' }],
    elements: [icon(rising ? 'mdi:weather-sunset-up' : 'mdi:weather-sunset-down', { icon_size: '16px', color: WINDOW_MUTED }), windowSmall({ weight: '700', color: WINDOW_INK })]
});

const windowColumn = (name, label, extra) => ({
    name,
    entity: PRESET_ENTITY_TOKEN,
    ...extra,
    background: false,
    padding: '0',
    elements: [
        label,
        icon('weather', { icon_size: '24px', color: WINDOW_INK }),
        text({ attribute: 'temperature', format: '\u00b0', precision: 0, size: '15px', weight: '500', color: WINDOW_INK })
    ]
});

const windowHour = (offset) => windowColumn(offset ? `In ${offset + 1} hours` : 'Next hour', text({ attribute: 'datetime', size: '12px', weight: '500', color: WINDOW_MUTED }), {
    forecast: 'hourly',
    ...(offset ? { forecast_offset: offset } : {})
});

const WINDOW_CONFIG = Object.freeze({
    card_height: 'content',
    card_padding: '20px',
    content_direction: 'row',
    content_align: 'between',
    sun_moon_size: 50,
    sun_moon_x: `calc(100% - ${windowPad('h')} - min(${WINDOW_MAX}px, ${WINDOW_SHARE / 100} * (100% - 2 * ${windowPad('h')})) / 2)`,
    sun_moon_y: `calc(${windowPad('v')} + ${WINDOW_MAX / 2}px)`,
    balloon_effects: false,
    mist_density: 1.2,
    mist_size: 0.5,
    background_mode: 'color',
    background_color: '#6ea2cf',
    background_color_dark: '#1a2741',
    background_thresholds: thresholds(WINDOW_SKY),
    background_haze: false,
    card_tap_action: { action: 'more-info' },
    button_containers: [
        {
            name: 'Now',
            custom_width: `calc(100% - ${WINDOW_SIZE} - 16px)`,
            gap: '0 12px',
            buttons: [
                {
                    name: 'Date',
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    width: '100%',
                    padding: '0 0 12px',
                    inner_gap: '4px',
                    elements: [
                        text({ attribute: 'datetime', format: '%A', size: '13px', weight: '700', color: WINDOW_INK }),
                        text({ attribute: 'datetime', format: '%-d %b', size: '13px', weight: '500', color: WINDOW_MUTED })
                    ]
                },
                { name: 'Temperature', entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', background: false, width: '100%', padding: '0', elements: [text({ size: '52px', weight: '800', precision: 0, format: '\u00b0', color: WINDOW_INK, margin: '-0.2em -0.06em -0.12em' })] },
                { name: 'Condition', entity: PRESET_ENTITY_TOKEN, background: false, width: '100%', padding: '8px 0 18px', elements: [text({ size: '15px', weight: '500', color: WINDOW_INK, overflow: 'wrap' })] },
                {
                    name: 'High and low',
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    padding: '0',
                    inner_gap: '5px',
                    elements: [
                        windowSmall({ attribute: 'temperature', format: '\u00b0', weight: '700', color: WINDOW_INK }),
                        windowSmall({ text: '/', color: windowSoft(40) }),
                        windowSmall({ attribute: 'templow', format: '\u00b0', color: windowSoft(72) })
                    ]
                },
                windowSun(false),
                windowSun(true)
            ]
        },
        {
            name: 'Window',
            custom_width: WINDOW_SIZE,
            padding: `calc((${WINDOW_MAX}px - ${WINDOW_SIZE}) / 2) 0`,
            layer: 'base',
            buttons: [{ name: 'Window', entity: PRESET_ENTITY_TOKEN, background: true, background_color: 'transparent', button_round: true, width: WINDOW_SIZE, height: WINDOW_SIZE, padding: '0', shadow_color: WINDOW_CUT, tap_action: { action: 'none' }, elements: [] }]
        },
        {
            name: 'Next hours',
            custom_width: `calc(100cqw + 2*${WINDOW_BLEED})`,
            margin: `24px calc(-1*${WINDOW_BLEED}) 0`,
            layout: 'horizontal-scroll',
            scroll_count: 6,
            scroll_fade: true,
            scroll_fade_size: `min(8px, ${WINDOW_BLEED})`,
            gap: '0',
            button_style: 'vertical',
            button_gap: '6px',
            align: 'center',
            buttons: [windowColumn('Now', text({ text: 'Now', size: '12px', weight: '700', color: WINDOW_INK })), ...Array.from({ length: 24 }, (_, i) => windowHour(i))]
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

const HOME_SKY = [
    ['sunny', '#e7e2d9', '#0d1f30'],
    ['clear-night', '#dbdce1', '#0d1f30'],
    ['partlycloudy', '#e0deda', '#1a2530'],
    ['cloudy', '#d3d4d6', '#262a2e'],
    ['fog', '#e6e6e5', '#343a3d'],
    ['windy', '#dadfdd', '#16292a'],
    ['windy-variant', '#d5dad9', '#14262b'],
    ['rainy', '#cdd2d6', '#15232b'],
    ['pouring', '#c8cdd2', '#111d24'],
    ['lightning', '#cfced3', '#231f31'],
    ['lightning-rainy', '#cacacf', '#1d1c2b'],
    ['snowy', '#e6eaed', '#2b363c'],
    ['snowy-rainy', '#d8dddf', '#222e32'],
    ['hail', '#d2d9da', '#1a2a2d'],
    ['exceptional', '#ded8d2', '#2c1b17']
];

const homeText = (extra, size = '12px', weight = '500') => text({ size, weight, color: 'var(--primary-text-color)', ...extra });

const homeLabel = (extra, size = '12px') => homeText({ ...extra, color: 'var(--secondary-text-color)' }, size);

const homeTemp = (size, weight) => homeText({ precision: 0, format: '\u00b0' }, size, weight);

const sunTime = (state, label, attribute) => ({
    name: state === 'above_horizon' ? `${label} (by day)` : `${label} (at night)`,
    entity: 'sun.sun',
    attribute,
    inner_gap: '6px',
    visibility: [{ condition: 'state', entity: 'sun.sun', state }],
    elements: [homeLabel({ text: label }), homeText({}, '12px', '700')]
});

const room = (label) => ({
    name: `Room: ${label}`,
    entity: PRESET_ENTITY_TOKEN,
    attribute: 'temperature',
    style: 'vertical',
    align: 'start',
    elements: [homeLabel({ text: label }), homeTemp('16px', '700')]
});

const windCompass = () => ({
    name: 'Wind compass',
    entity: PRESET_ENTITY_TOKEN,
    type: 'ring',
    style: 'vertical',
    ring_min: 0,
    ring_max: 360,
    ring_fill: false,
    ring_width: 1,
    ring_color: 'var(--secondary-text-color)',
    ring_marker_icon_size: 15,
    ring_values: [
        { value: 0, marker_size: 14, marker_gap: true, marker_icon: 'mdi:alpha-n', marker_icon_color: 'var(--secondary-text-color)' },
        { attribute: 'wind_bearing', marker_size: 7, marker_color: 'var(--primary-text-color)' }
    ],
    background: false,
    width: '54px',
    padding: '0',
    inner_gap: '4px',
    elements: [homeText({ attribute: 'wind_speed', precision: 0, format: ' ' }, '15px', '700'), homeLabel({ attribute: 'wind_speed_unit' }, '8px')]
});

const HOME_CONFIG = Object.freeze({
    sun_enabled: false,
    moon_enabled: false,
    cloud_effects: false,
    mist_effects: true,
    mist_density: 0.8,
    night_sky_effects: false,
    bird_effects: true,
    balloon_effects: false,
    plane_effects: false,
    background_mode: 'color',
    background_thresholds: thresholds(HOME_SKY),
    card_height: '256px',
    card_padding: '20px',
    content_align: 'between',
    button_containers: [
        {
            name: 'House',
            layer: 'middle',
            position: 'custom',
            position_anchor: 'top-right',
            position_x: '34px',
            position_y: '18px',
            image: 'home',
            custom_width: 'min(178px, 75% - 49px)'
        },
        {
            name: 'Sun and wind',
            justify_content: 'between',
            align_items: 'start',
            buttons: [sunTime('above_horizon', 'Sunset', 'next_setting'), sunTime('below_horizon', 'Sunrise', 'next_rising'), windCompass()]
        },
        {
            name: 'Temperature and rooms',
            align: 'spread',
            align_items: 'end',
            gap: 'clamp(14px, 6cqw, 22px)',
            button_gap: '4px',
            buttons: [
                {
                    name: 'Outside',
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    style: 'split',
                    elements: [homeTemp('clamp(40px, 17cqw, 52px)', '800'), homeLabel({ entity: PRESET_ENTITY_TOKEN, overflow: 'wrap' })]
                },
                room('Living'),
                room('Office'),
                room('Bath')
            ]
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

export const LAYOUT_PRESETS = Object.freeze([
    {
        id: 'diorama',
        name: 'Diorama',
        description: 'Illustrated landscape',
        icon: 'mdi:image-filter-hdr',
        config: DIORAMA_CONFIG
    },
    {
        id: 'classic',
        name: 'Classic',
        description: 'Weather colors, daily forecast',
        icon: 'mdi:view-dashboard-variant-outline',
        config: CLASSIC_CONFIG
    },
    {
        id: 'window',
        name: 'Window',
        description: 'The sky through a round window',
        icon: 'mdi:circle-outline',
        config: WINDOW_CONFIG
    },
    {
        id: 'home',
        name: 'Home',
        description: 'Inside & outside, wind',
        icon: 'mdi:home-outline',
        config: HOME_CONFIG
    }
]);

const deepClone = (value) => {
    if (Array.isArray(value)) return value.map(deepClone);
    if (value && typeof value === 'object') {
        const out = {};
        for (const k of Object.keys(value)) out[k] = deepClone(value[k]);
        return out;
    }
    return value;
};

export const rebindPresetEntities = (value, entity) => {
    if (Array.isArray(value)) return value.map((v) => rebindPresetEntities(v, entity));
    if (value && typeof value === 'object') {
        const out = {};
        for (const k of Object.keys(value)) out[k] = rebindPresetEntities(value[k], entity);
        return out;
    }
    if (value === PRESET_ENTITY_TOKEN) return entity;
    return value;
};

export const instantiatePreset = (preset, entity) => rebindPresetEntities(deepClone(preset.config), entity);

export const buildStubConfig = (hass) => {
    const entity = hass ? Object.keys(hass.states).find((e) => e.startsWith('weather.')) || 'weather.home' : 'weather.home';
    const preset = LAYOUT_PRESETS.find((p) => p.id === 'window') || LAYOUT_PRESETS[0];
    return { weather_entity: entity, ...instantiatePreset(preset, entity) };
};
