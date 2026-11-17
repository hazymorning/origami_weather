export const PRESET_ENTITY_TOKEN = '__WEATHER__';

const text = (extra) => ({ type: 'text', ...extra });
const icon = (name, extra) => ({ type: 'icon', icon: name, ...extra });
const CARD_TINT = (percent) => `color-mix(in srgb, var(--origami-card-bg-color, var(--ha-card-background, var(--card-background-color, #fff))) ${percent}%, transparent)`;
const dayName = (offset) => offset === 0 ? 'Today' : offset === 1 ? 'Tomorrow' : `In ${offset} days`;
const cardSwitch = (name) => ({ tap: { action: 'toggle', entity: `origami.${name}` }, shown: (state) => [{ condition: 'state', entity: `origami.${name}`, state }] });
const nextSun = (rising) => ({ entity: 'sun.sun', attribute: rising ? 'next_rising' : 'next_setting', visibility: [{ condition: 'state', entity: 'sun.sun', state: rising ? 'below_horizon' : 'above_horizon' }] });
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

const DIORAMA_SWITCH = cardSwitch('forecast');
const dioramaDay = (offset) => ({
    name: dayName(offset),
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'daily',
    forecast_offset: offset,
    tap_action: DIORAMA_SWITCH.tap,
    background: true,
    background_color: CARD_TINT(86),
    style: 'vertical',
    align: 'center',
    padding: '20px 0',
    inner_gap: '4px',
    elements: [
        text({ attribute: 'datetime', format: '%a', size: '12px', weight: '500' }),
        icon('weather', { icon_size: '28px', icon_background: false, margin: '2px 0' }),
        text({ attribute: 'temperature', format: '\u00b0', size: '15px', weight: '700' }),
        text({ attribute: 'templow', format: '\u00b0', size: '13px', weight: '500', margin: '2px 0 0' }),
        { type: 'bar', bar_shape: 'curve', bar_height: '2px', bar_color: 'color-mix(in srgb, currentColor 25%, transparent)', margin: '-74px 0 0', bar_values: [{ attribute: 'temperature', marker_size: '36px', marker_gap: true }] }
    ]
});

const DIORAMA_CONFIG = Object.freeze({
    card_height: '160px',
    card_padding: 'var(--ha-space-4, 16px)',
    sun_size: 30,
    moon_size: 30,
    sun_moon_x: 'dynamic',
    cloud_effects: false,
    background_mode: 'images',
    weather_image_path: 'diorama/light/',
    weather_image_path_dark: 'diorama/dark/',
    weather_image_type: 'webp',
    weather_image_front: true,
    background_thresholds: thresholds(DIORAMA_PAPER),
    visibility_fade: true,
    card_tap_action: DIORAMA_SWITCH.tap,
    css: '#weather-bg > img { object-position: right bottom; }',
    button_containers: [
        {
            name: 'Now',
            visibility: DIORAMA_SWITCH.shown('off'),
            buttons: [
                {
                    name: 'Temperature and condition',
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    tap_action: DIORAMA_SWITCH.tap,
                    style: 'vertical',
                    align: 'start',
                    inner_gap: '6px',
                    elements: [
                        text({ size: '40px', weight: '700', precision: 0, format: '\u00b0' }),
                        text({ entity: PRESET_ENTITY_TOKEN, size: '12px', weight: '500', overflow: 'wrap' })
                    ]
                }
            ]
        },
        {
            name: 'Forecast',
            position: 'custom',
            position_anchor: 'top-left',
            position_x: '0',
            position_y: '0',
            custom_width: '100%',
            layout: 'horizontal-scroll',
            scroll_count: 5,
            row_height: '100%',
            gap: '8px',
            scroll_fade: true,
            visibility: DIORAMA_SWITCH.shown('on'),
            buttons: [0, 1, 2, 3, 4, 5, 6].map(dioramaDay)
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 'full'
    }
});

const DAILY_COLORS = [
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

const dailyColumn = (offset) => ({
    name: dayName(offset),
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'daily',
    forecast_offset: offset,
    elements: [
        text({ attribute: 'datetime', size: '12px', weight: '500', color: WHITE_72 }),
        icon('weather', { icon_size: '26px', color: WHITE, margin: '2px 0' }),
        text({ attribute: 'temperature', format: '\u00b0', size: '15px', weight: '700', color: WHITE }),
        text({ attribute: 'templow', format: '\u00b0', size: '14px', weight: '500', color: WHITE_60 }),
        { type: 'bar', bar_height: '4px', bar_width: '26px', bar_color: '#9fd2ff', margin: '3px 0 0', bar_values: [{ attribute: 'precipitation_probability' }] },
        { type: 'bar', bar_shape: 'curve', bar_height: '2px', bar_color: 'rgba(255, 255, 255, 0.22)', margin: '-84px 0 0', bar_values: [{ attribute: 'temperature', marker_size: '28px', marker_gap: true }] }
    ]
});

const dailyStat = (iconName, extra) => [icon(iconName, { icon_size: '14px', color: WHITE_72 }), text({ size: '14px', weight: '500', color: WHITE, ...extra })];

const DAILY_CONFIG = Object.freeze({
    color_mode: 'dark',
    sun_size: 56,
    moon_size: 56,
    sun_moon_y: '111px 34px',
    cloud_effects: false,
    mist_effects: true,
    bird_effects: false,
    balloon_effects: false,
    plane_effects: false,
    background_mode: 'color',
    background_color: '#5687b8',
    background_color_dark: '#273449',
    background_thresholds: thresholds(DAILY_COLORS),
    background_haze: false,
    shadow_color: 'inset 0 1px 3px rgba(0, 0, 0, 0.14)',
    card_tap_action: { action: 'more-info' },
    gradient: true,
    gradient_type: 'linear',
    gradient_color_1: 'rgba(255, 255, 255, 0.08)',
    gradient_color_2: 'rgba(255, 255, 255, 0)',
    gradient_stop_2: 70,
    card_height: 'content',
    card_padding: 'var(--ha-space-4, 16px)',
    content_direction: 'row',
    content_align_items: 'end',
    button_containers: [
        {
            name: 'Today',
            gap: '12px',
            padding: '4px 8px 0',
            buttons: [
                {
                    name: 'Day',
                    entity: PRESET_ENTITY_TOKEN,
                    style: 'vertical',
                    align: 'start',
                    width: '100%',
                    inner_gap: '7px',
                    elements: [
                        text({ attribute: 'datetime', format: '%A', size: '20px', weight: '600', color: WHITE }),
                        text({ attribute: 'datetime', format: '%-d. %B', size: '14px', weight: '500', color: WHITE_72 })
                    ]
                },
                {
                    name: 'High and low',
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    inner_gap: '2px',
                    elements: [...dailyStat('mdi:arrow-up', { attribute: 'temperature', format: '\u00b0', margin: '0 10px 0 0' }), ...dailyStat('mdi:arrow-down', { attribute: 'templow', format: '\u00b0' })]
                },
                { name: 'Humidity', entity: PRESET_ENTITY_TOKEN, attribute: 'humidity', inner_gap: '2px', elements: dailyStat('mdi:water-outline') }
            ]
        },
        {
            name: 'Now',
            custom_width: 'auto',
            padding: '4px 8px 2.5px',
            buttons: [
                {
                    name: 'Temperature and condition',
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    style: 'vertical',
                    align: 'end',
                    inner_gap: '10px',
                    elements: [
                        text({ size: '50px', weight: '600', precision: 0, format: '\u00b0', color: WHITE, margin: '-0.165em -0.06em -0.1em 0' }),
                        text({ entity: PRESET_ENTITY_TOKEN, size: '14px', weight: '500', color: WHITE })
                    ]
                }
            ]
        },
        {
            name: 'Forecast',
            custom_width: '100%',
            layout: 'horizontal-scroll',
            scroll_count: 6,
            row_height: '134px',
            justify_content: 'center',
            margin: '20px 0 0',
            padding: '4px',
            gap: '0',
            background: true,
            grouped: true,
            blurred_background: true,
            background_blur: 20,
            background_color: 'rgba(0, 0, 0, 0.14)',
            button_style: 'vertical',
            button_gap: '5px',
            button_padding: '14px 0',
            align: 'center',
            buttons: [1, 2, 3, 4, 5, 6].map(dailyColumn)
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

const sunTime = (rising) => ({
    name: rising ? 'Sunrise (at night)' : 'Sunset (by day)',
    ...nextSun(rising),
    inner_gap: '6px',
    elements: [homeLabel({ text: rising ? 'Sunrise' : 'Sunset' }), homeText({}, '12px', '700')]
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
    ring_marker_icon_size: 17,
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
    mist_density: 0.7,
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
            name: 'Sun and wind',
            justify_content: 'between',
            align_items: 'start',
            buttons: [sunTime(false), sunTime(true), windCompass()]
        },
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
                    elements: [homeTemp('clamp(40px, 17cqw, 52px)', '700'), homeLabel({ entity: PRESET_ENTITY_TOKEN, overflow: 'wrap' })]
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

const SLIM_SWITCH = cardSwitch('hours');
const slimChip = (name, elements, extra) => ({ name, entity: PRESET_ENTITY_TOKEN, tap_action: SLIM_SWITCH.tap, ...extra, elements });
const slimSun = (rising) => slimChip(rising ? 'Sunrise' : 'Sunset', [icon(rising ? 'mdi:weather-sunset-up' : 'mdi:weather-sunset-down'), text({ weight: '600' })], nextSun(rising));
const slimHour = (offset) => ({
    name: offset ? `In ${offset + 1} hours` : 'Next hour',
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'hourly',
    forecast_offset: offset,
    tap_action: SLIM_SWITCH.tap,
    style: 'vertical',
    align: 'center',
    inner_gap: '2px',
    elements: [
        { type: 'bar', bar_shape: 'curve', bar_height: '2px', bar_color: 'currentColor', bar_marker_icon_size: '30px', margin: '0 0 8px', bar_values: [{ attribute: 'temperature', marker_size: '36px', marker_gap: true, marker_icon: 'weather' }] },
        text({ attribute: 'temperature', format: '\u00b0', size: '15px', weight: '700', color: 'currentColor' }),
        text({ attribute: 'datetime', size: '12px', weight: '500' })
    ]
});

const SLIM_CONFIG = Object.freeze({
    card_height: '160px',
    card_padding: '0',
    content_align: 'between',
    sun_moon_x: 'dynamic',
    sun_size: 40,
    moon_size: 40,
    visibility_fade: true,
    card_tap_action: SLIM_SWITCH.tap,
    button_containers: [
        {
            name: 'Now',
            padding: '18px 18px 0',
            visibility: SLIM_SWITCH.shown('off'),
            buttons: [
                {
                    name: 'Condition and temperature',
                    entity: PRESET_ENTITY_TOKEN,
                    tap_action: SLIM_SWITCH.tap,
                    style: 'vertical',
                    align: 'start',
                    inner_gap: '8px',
                    elements: [
                        text({ size: '14px', weight: '500' }),
                        text({ attribute: 'temperature', precision: 0, format: '\u00b0', size: '52px', weight: '700', color: 'currentColor', margin: '-0.2em -0.06em -0.1em -0.05em' })
                    ]
                }
            ]
        },
        {
            name: 'Details',
            custom_width: '100%',
            padding: '0 18px 18px',
            background: true,
            layout: 'horizontal-scroll',
            scroll_fade: true,
            gap: '6px',
            button_gap: '5px',
            button_icon_size: '15px',
            button_text_size: '13px',
            button_padding: '7px 11px 7px 9px',
            button_background_color: CARD_TINT(55),
            visibility: SLIM_SWITCH.shown('off'),
            buttons: [
                slimChip('High', [icon('mdi:arrow-up'), text({ attribute: 'temperature', format: '\u00b0', weight: '600' })], { forecast: 'daily' }),
                slimChip('Low', [icon('mdi:arrow-down'), text({ attribute: 'templow', format: '\u00b0', weight: '600' })], { forecast: 'daily' }),
                slimChip('Rain', [icon('mdi:umbrella-outline'), text({ attribute: 'precipitation_probability', format: '%', weight: '600' })], { forecast: 'daily' }),
                slimChip('Wind', [icon('mdi:weather-windy'), text({ attribute: 'wind_speed', precision: 0, weight: '600' })]),
                slimSun(false),
                slimSun(true),
                slimChip('Humidity', [icon('mdi:water-percent'), text({ attribute: 'humidity', weight: '600' })]),
                slimChip('UV index', [icon('mdi:sun-wireless-outline'), text({ text: 'UV', weight: '500' }), text({ attribute: 'uv_index', weight: '600' })], { forecast: 'daily' })
            ]
        },
        {
            name: 'Hours',
            position: 'custom',
            position_anchor: 'top-left',
            position_x: '0',
            position_y: '0',
            custom_width: '100%',
            padding: '14px 8px 16px',
            layout: 'horizontal-scroll',
            scroll_count: 5,
            row_height: '100%',
            align_items: 'stretch',
            gap: '0',
            scroll_fade: true,
            scroll_fade_size: '48px',
            background: true,
            grouped: true,
            border: 'none',
            blurred_background: true,
            background_blur: 16,
            background_color: CARD_TINT(30),
            visibility: SLIM_SWITCH.shown('on'),
            buttons: Array.from({ length: 12 }, (_, i) => slimHour(i * 2))
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
        id: 'daily-forecast',
        name: 'Daily Forecast',
        description: 'Weather colors, next six days',
        icon: 'mdi:view-dashboard-variant-outline',
        config: DAILY_CONFIG
    },
    {
        id: 'slim',
        name: 'Slim',
        description: 'The sky with a sliding row, tap for the hours',
        icon: 'mdi:view-compact-outline',
        config: SLIM_CONFIG
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
    return { weather_entity: entity, ...instantiatePreset(LAYOUT_PRESETS[0], entity) };
};
