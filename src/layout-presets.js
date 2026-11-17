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

const DIORAMA_SWITCH = { action: 'toggle', entity: 'origami.forecast' };
const dioramaShown = (state) => [{ condition: 'state', entity: 'origami.forecast', state }];
const dioramaDay = (offset) => ({
    name: offset === 0 ? 'Today' : offset === 1 ? 'Tomorrow' : `In ${offset} days`,
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'daily',
    forecast_offset: offset,
    tap_action: DIORAMA_SWITCH,
    background: true,
    background_color: 'color-mix(in srgb, var(--origami-card-bg-color, var(--ha-card-background, var(--card-background-color, #fff))) 72%, transparent)',
    blurred_background: true,
    style: 'vertical',
    align: 'center',
    padding: '24px 0',
    inner_gap: '4px',
    elements: [
        text({ attribute: 'datetime', format: '%a', size: '12px', weight: '500' }),
        icon('weather', { icon_size: '28px', icon_background: false, margin: '2px 0' }),
        text({ attribute: 'temperature', precision: 0, format: '\u00b0', size: '15px', weight: '700' }),
        text({ attribute: 'templow', precision: 0, format: '\u00b0', size: '13px', weight: '500' })
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
    card_tap_action: DIORAMA_SWITCH,
    css: '#weather-bg > img { object-position: right bottom; }',
    button_containers: [
        {
            name: 'Forecast',
            position: 'custom',
            position_anchor: 'top-left',
            position_x: '0',
            position_y: '0',
            custom_width: '100%',
            layout: 'horizontal-scroll',
            scroll_count: 4,
            row_height: '128px',
            gap: '8px',
            padding: '0',
            visibility: dioramaShown('on'),
            buttons: [0, 1, 2, 3, 4, 5, 6].map(dioramaDay)
        },
        {
            name: 'Now',
            visibility: dioramaShown('off'),
            buttons: [
                {
                    name: 'Temperature and condition',
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    tap_action: DIORAMA_SWITCH,
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
        { type: 'bar', bar_height: '4px', bar_width: '26px', bar_color: '#9fd2ff', margin: '3px 0 0', bar_values: [{ attribute: 'precipitation_probability' }] },
        { type: 'bar', bar_shape: 'curve', bar_height: '2px', bar_color: 'rgba(255, 255, 255, 0.16)', bar_marker: false, margin: '-84px 0 0', bar_values: [{ attribute: 'temperature' }] }
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
                    inner_gap: '5px',
                    background: false,
                    elements: [
                        text({ attribute: 'datetime', format: '%A', size: '20px', weight: '600', color: WHITE }),
                        text({ attribute: 'datetime', format: '%-d. %B', size: '14px', weight: '500', color: WHITE_72 })
                    ]
                },
                {
                    name: 'High and low',
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    inner_gap: '2px',
                    elements: [...dailyStat('mdi:arrow-up', { attribute: 'temperature', format: '\u00b0', margin: '0 10px 0 0' }), ...dailyStat('mdi:arrow-down', { attribute: 'templow', format: '\u00b0' })]
                },
                { name: 'Humidity', entity: PRESET_ENTITY_TOKEN, attribute: 'humidity', background: false, inner_gap: '2px', elements: dailyStat('mdi:water-outline') }
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
                    background: false,
                    elements: [
                        text({ size: '48px', weight: '600', precision: 0, format: '\u00b0', color: WHITE, margin: '-0.165em -0.06em -0.1em 0' }),
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

const PANEL_INK = 'var(--primary-text-color)';
const PANEL_MUTED = 'var(--secondary-text-color)';
const panelSoft = (share) => `color-mix(in srgb, ${PANEL_INK} ${share}%, transparent)`;

const PANEL_CARD = 'var(--ha-card-background, var(--card-background-color, #fff))';
const panelTint = (rgb, light, dark) => [`color-mix(in srgb, rgb(${rgb}) ${light}%, ${PANEL_CARD})`, `color-mix(in srgb, rgb(${rgb}) ${dark}%, ${PANEL_CARD})`];

const PANEL_TINT = [
    ['sunny', ...panelTint('255 184 77', 20, 10)],
    ['clear-night', ...panelTint('108 128 204', 16, 12)],
    ['exceptional', ...panelTint('255 140 90', 20, 10)],
    ['partlycloudy', ...panelTint('120 172 224', 20, 10)],
    ['cloudy', ...panelTint('146 158 174', 20, 10)],
    ['fog', ...panelTint('170 176 182', 24, 10)],
    ['windy', ...panelTint('108 180 176', 20, 10)],
    ['windy-variant', ...panelTint('116 168 190', 20, 10)],
    ['rainy', ...panelTint('96 140 196', 22, 12)],
    ['pouring', ...panelTint('76 112 170', 26, 14)],
    ['lightning', ...panelTint('132 108 180', 22, 12)],
    ['lightning-rainy', ...panelTint('116 98 168', 26, 14)],
    ['hail', ...panelTint('110 160 180', 22, 12)],
    ['snowy', ...panelTint('176 200 228', 26, 10)],
    ['snowy-rainy', ...panelTint('150 176 204', 24, 10)]
];

const panelTile = (name, iconName, value, margin, extra) => ({
    name,
    custom_width: 'calc(50% - 4px)',
    margin,
    padding: '12px',
    gap: '8px',
    grouped: true,
    background: true,
    blurred_background: true,
    background_color: panelSoft(5),
    shadow: false,
    buttons: [
        {
            name: 'Label',
            entity: PRESET_ENTITY_TOKEN,
            background: false,
            width: '100%',
            inner_gap: '6px',
            elements: [icon(iconName, { icon_size: '18px', color: PANEL_MUTED }), text({ text: name, size: '12px', weight: '500', color: PANEL_MUTED })]
        },
        { name: 'Value', entity: PRESET_ENTITY_TOKEN, ...extra, background: false, elements: [text({ size: '17px', weight: '600', color: PANEL_INK, ...value })] }
    ]
});

const panelHour = (offset) => ({
    name: offset ? `In ${offset + 1} hours` : 'Next hour',
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'hourly',
    forecast_offset: offset,
    background: false,
    padding: '0',
    elements: [
        text({ attribute: 'datetime', size: '12px', weight: '500', color: PANEL_MUTED }),
        icon('weather', { icon_size: '24px', color: PANEL_INK, margin: '6px 0' }),
        text({ attribute: 'temperature', format: '\u00b0', precision: 0, size: '15px', weight: '600', color: PANEL_INK })
    ]
});

const PANEL_CONFIG = Object.freeze({
    color_mode: 'theme',
    card_height: 'content',
    card_padding: '20px',
    content_direction: 'row',
    content_align: 'between',
    sun_enabled: false,
    moon_enabled: false,
    cloud_effects: false,
    mist_effects: true,
    mist_density: 0.5,
    night_sky_effects: false,
    bird_effects: false,
    balloon_effects: false,
    plane_effects: false,
    background_mode: 'color',
    background_color: PANEL_CARD,
    background_thresholds: thresholds(PANEL_TINT),
    background_haze: false,
    card_tap_action: { action: 'more-info' },
    button_containers: [
        {
            name: 'Now',
            custom_width: '60%',
            gap: '6px',
            buttons: [
                { name: 'Condition', entity: PRESET_ENTITY_TOKEN, background: false, padding: '0', width: '100%', elements: [text({ size: '24px', weight: '600', color: PANEL_INK, overflow: 'wrap' })] },
                {
                    name: 'High and low',
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    padding: '0',
                    inner_gap: '2px',
                    elements: [
                        icon('mdi:arrow-up', { icon_size: '16px', color: PANEL_MUTED }),
                        text({ attribute: 'temperature', format: '\u00b0', size: '16px', weight: '500', color: PANEL_INK, margin: '0 12px 0 0' }),
                        icon('mdi:arrow-down', { icon_size: '16px', color: PANEL_MUTED }),
                        text({ attribute: 'templow', format: '\u00b0', size: '16px', weight: '500', color: PANEL_INK })
                    ]
                }
            ]
        },
        {
            name: 'Temperature',
            custom_width: '40%',
            justify_content: 'end',
            buttons: [{ name: 'Temperature', entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', background: false, padding: '0', elements: [text({ size: '60px', weight: '600', precision: 0, format: '\u00b0', color: PANEL_INK, margin: '-0.2em -0.06em -0.18em 0' })] }]
        },
        panelTile('Wind', 'mdi:weather-windy', { attribute: 'wind_speed', precision: 0 }, '18px 0 0'),
        panelTile('Humidity', 'mdi:water-percent', { attribute: 'humidity' }, '18px 0 0'),
        panelTile('UV index', 'mdi:sun-wireless-outline', { attribute: 'uv_index' }, '8px 0 0'),
        panelTile('Rain', 'mdi:umbrella-outline', { attribute: 'precipitation_probability', format: '%' }, '8px 0 0', { forecast: 'daily' }),
        {
            name: 'Forecast',
            custom_width: '100%',
            layout: 'horizontal-scroll',
            scroll_count: 5,
            margin: '18px 0 0',
            padding: '4px 0',
            button_style: 'vertical',
            align: 'center',
            buttons: Array.from({ length: 24 }, (_, i) => panelHour(i))
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

const skyHour = (offset) => ({
    name: offset ? `In ${offset + 1} hours` : 'Next hour',
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'hourly',
    forecast_offset: offset,
    background: false,
    padding: '0',
    style: 'vertical',
    align: 'center',
    inner_gap: '2px',
    elements: [
        text({ attribute: 'datetime', size: '12px', weight: '500' }),
        text({ attribute: 'temperature', precision: 0, format: '\u00b0', size: '14px', weight: '700', color: 'currentColor' }),
        { type: 'bar', bar_shape: 'curve', bar_height: '2px', bar_color: 'currentColor', margin: '2px 0 0', bar_values: [{ attribute: 'temperature', marker_size: '24px', marker_gap: true, marker_icon: 'weather', marker_icon_size: '20px' }] }
    ]
});

const SKY_CONFIG = Object.freeze({
    card_height: '220px',
    card_padding: '18px',
    content_align: 'between',
    sun_moon_x: 'dynamic',
    sun_size: 44,
    moon_size: 44,
    card_tap_action: { action: 'more-info' },
    button_containers: [
        {
            name: 'Now',
            padding: '0',
            buttons: [
                {
                    name: 'Temperature and condition',
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    padding: '0',
                    style: 'vertical',
                    align: 'start',
                    inner_gap: '2px',
                    elements: [
                        text({ attribute: 'temperature', precision: 0, format: '\u00b0', size: '52px', weight: '700', color: 'currentColor', margin: '-0.2em -0.06em -0.1em -0.05em' }),
                        text({ size: '14px', weight: '500' })
                    ]
                }
            ]
        },
        {
            name: 'Hours',
            custom_width: '100%',
            layout: 'horizontal-scroll',
            scroll_count: 5,
            row_height: '104px',
            align_items: 'stretch',
            padding: '0',
            gap: '0',
            buttons: Array.from({ length: 12 }, (_, i) => skyHour(i * 2))
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
        id: 'panel',
        name: 'Panel',
        description: 'Calm colors, details, forecast',
        icon: 'mdi:view-grid-outline',
        config: PANEL_CONFIG
    },
    {
        id: 'sky',
        name: 'Sky',
        description: 'Live sky, tap for details',
        icon: 'mdi:weather-partly-cloudy',
        config: SKY_CONFIG
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
    const preset = LAYOUT_PRESETS.find((p) => p.id === 'panel') || LAYOUT_PRESETS[0];
    return { weather_entity: entity, ...instantiatePreset(preset, entity) };
};
