export const PRESET_ENTITY_TOKEN = '__WEATHER__';

const sunButton = (rising) => ({
    entity: 'sun.sun',
    elements: [
        { type: 'icon', icon: rising ? 'mdi:weather-sunset-up' : 'mdi:weather-sunset-down' },
        { type: 'text', attribute: rising ? 'next_rising' : 'next_setting', weight: '700' }
    ],
    visibility: [{ condition: 'state', entity: 'sun.sun', state: rising ? 'below_horizon' : 'above_horizon' }]
});

const SLIM_CONFIG = Object.freeze({
    sun_moon_x: 'dynamic',
    card_height: 'content',
    card_padding: '16px',
    content_align: 'between',
    content_align_items: 'start',
    button_containers: [
        {
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    elements: [
                        { type: 'icon', icon: 'weather', icon_background: false, margin: '0 2px 0 0' },
                        { type: 'text', precision: 0, entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', weight: '700', fancy_unit: true }
                    ],
                    style: 'inline'
                }
            ],
            padding: '4px',
            button_text_size: '26px',
            margin: '0 0 32px 0',
            button_gap: '6px',
            button_style: 'vertical'
        },
        {
            background: true,
            gap: '8px',
            button_gap: '6px',
            button_icon_size: '14px',
            button_padding: '8px 12px 8px 10px',
            align: 'center',
            button_text_size: '12px',
            background_color: 'rgba(255,255,255,0.1)',
            blurred_background: true,
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    elements: [
                        { type: 'text', text: 'Today', weight: '500' },
                        { type: 'icon', icon: 'weather' },
                        { type: 'text', format: '\u00b0', weight: '700', attribute: 'temperature' }
                    ],
                    style: 'inline',
                    forecast: 'daily'
                },
                {
                    entity: PRESET_ENTITY_TOKEN,
                    elements: [
                        { type: 'icon', icon: 'mdi:weather-windy' },
                        { type: 'text', attribute: 'wind_speed', format: ' km/h', weight: '700' }
                    ],
                    style: 'inline'
                },
                sunButton(true),
                sunButton(false),
                {
                    entity: PRESET_ENTITY_TOKEN,
                    elements: [
                        { type: 'icon', icon: 'mdi:water-percent' },
                        { type: 'text', weight: '700', attribute: 'humidity', format: ' %' }
                    ],
                    style: 'inline'
                },
                {
                    entity: PRESET_ENTITY_TOKEN,
                    elements: [
                        { type: 'icon', icon: 'mdi:sun-wireless-outline' },
                        { type: 'text', text: 'UV-Index', weight: '500' },
                        { type: 'text', attribute: 'uv_index', weight: '700' }
                    ],
                    forecast: 'daily'
                }
            ],
            button_background_color: 'rgba(189,189,189,0.2)',
            layout: 'horizontal-scroll',
            scroll_fade: true
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

const RING_THRESHOLDS = Object.freeze([
    { value: '-20', color: 'rgba(124, 142, 184, 0.8)' },
    { value: '-16', color: 'rgba(132, 156, 196, 0.8)' },
    { value: '-12', color: 'rgba(140, 172, 206, 0.8)' },
    { value: '-8', color: 'rgba(150, 188, 214, 0.8)' },
    { value: '-4', color: 'rgba(165, 202, 218, 0.8)' },
    { value: '0', color: 'rgba(183, 213, 216, 0.8)' },
    { value: '4', color: 'rgba(198, 218, 205, 0.8)' },
    { value: '8', color: 'rgba(206, 218, 188, 0.8)' },
    { value: '12', color: 'rgba(214, 214, 168, 0.8)' },
    { value: '16', color: 'rgba(224, 207, 152, 0.8)' },
    { value: '20', color: 'rgba(232, 195, 140, 0.8)' },
    { value: '24', color: 'rgba(232, 178, 130, 0.8)' },
    { value: '28', color: 'rgba(228, 158, 124, 0.8)' },
    { value: '32', color: 'rgba(220, 138, 120, 0.8)' },
    { value: '36', color: 'rgba(208, 120, 118, 0.8)' },
    { value: '40', color: 'rgba(194, 104, 114, 0.8)' }
]);

const forecastButton = (offset) => ({
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'daily',
    ...(offset ? { forecast_offset: offset } : {}),
    elements: [
        { type: 'icon', icon: 'weather' },
        { type: 'text', size: '12px', weight: '500', attribute: 'datetime' },
        { type: 'text', weight: '700', attribute: 'temperature' },
        { type: 'text', weight: '500', attribute: 'templow' }
    ]
});

const CLASSIC_CONFIG = Object.freeze({
    sun_moon_x: 'dynamic',
    card_height: 'content',
    card_padding: '16px',
    button_containers: [
        {
            position: 'custom',
            position_anchor: 'top-left',
            padding: '4px 8px',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    text_size: '42px',
                    align: 'start',
                    padding: '4px 0 0 0',
                    background: false,
                    elements: [
                        { type: 'text', weight: '700', fancy_unit: true, attribute: 'temperature', precision: 0 }
                    ]
                }
            ]
        },
        {
            background: true,
            button_icon_size: '34px',
            button_padding: '16px',
            align: 'center',
            button_background_color: 'rgba(255,255,255,0.1)',
            button_blurred_background: true,
            justify_content: 'end',
            align_items: 'start',
            padding: '8px',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    attribute: 'temperature',
                    type: 'ring',
                    ring_gap: '6px',
                    ring_width: '4px',
                    ring_min: '-20',
                    ring_max: '40',
                    ring_threshold_mode: 'gradient',
                    ring_thresholds: RING_THRESHOLDS.map((t) => ({ ...t })),
                    blurred_background: true,
                    padding: '16px',
                    elements: [
                        { type: 'icon', icon: 'weather', icon_background: false, icon_background_color: 'rgba(0,0,0,0)', icon_size: '36px' }
                    ]
                }
            ]
        },
        {
            gap: '16px',
            button_gap: '6px',
            button_padding: '0',
            align: 'start',
            button_text_size: '14px',
            padding: '0 0 16px 8px',
            margin: '-14px 0 0 0',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    align: 'start',
                    elements: [
                        { type: 'icon', icon: 'mdi:weather-windy' },
                        { type: 'text', attribute: 'wind_speed', weight: '700' }
                    ]
                },
                sunButton(true),
                sunButton(false),
                {
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    elements: [
                        { type: 'icon', icon: 'mdi:umbrella-outline' },
                        { type: 'text', attribute: 'precipitation_probability', weight: '700' }
                    ]
                }
            ]
        },
        {
            layout: 'horizontal-scroll',
            scroll_count: 5,
            gap: '2px',
            button_icon_background_color: 'rgba(255,255,255,0.05)',
            button_style: 'vertical',
            button_gap: '6px',
            button_icon_size: '28px',
            button_padding: '16px 0',
            align: 'center',
            button_text_size: '14px',
            background_color: 'rgba(255,255,255,0.05)',
            blurred_background: true,
            button_background_color: 'rgba(255,255,255,0.1)',
            button_icon_padding: '0 0 6px 0',
            grouped: true,
            background: true,
            separator: true,
            shadow: false,
            buttons: [0, 1, 2, 3, 4, 5, 6].map(forecastButton)
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

const metaItem = (icon, attribute, weight, forecast) => ({
    entity: PRESET_ENTITY_TOKEN,
    ...(forecast ? { forecast: 'daily' } : {}),
    background: false,
    style: 'inline',
    align: 'center',
    padding: '0',
    elements: [
        { type: 'icon', icon, icon_background: false },
        { type: 'text', weight, attribute, ...(forecast ? { format: '\u00b0' } : {}) }
    ]
});

const CENTERED_CONFIG = Object.freeze({
    sun_moon_x: 'dynamic',
    card_height: 'content',
    card_padding: '24px 20px',
    content_align: 'between',
    content_align_items: 'center',
    button_containers: [
        {
            padding: '0',
            margin: '0 0 24px 0',
            align: 'center',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    style: 'vertical',
                    align: 'center',
                    text_size: '58px',
                    padding: '0',
                    elements: [
                        { type: 'text', weight: '700', attribute: 'temperature', precision: 0, fancy_unit: true },
                        { type: 'text', size: '15px', weight: '500', entity: PRESET_ENTITY_TOKEN }
                    ]
                }
            ]
        },
        {
            gap: '18px',
            padding: '0',
            button_padding: '0',
            button_gap: '5px',
            button_icon_size: '15px',
            button_text_size: '13px',
            align: 'center',
            justify_content: 'center',
            buttons: [
                metaItem('mdi:arrow-up', 'temperature', '700', true),
                metaItem('mdi:arrow-down', 'templow', '500', true),
                metaItem('mdi:weather-windy', 'wind_speed', '700', false),
                { ...metaItem('mdi:water-percent', 'humidity', '700', false), elements: [
                    { type: 'icon', icon: 'mdi:water-percent', icon_background: false },
                    { type: 'text', weight: '700', attribute: 'humidity', format: ' %' }
                ] }
            ]
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

const WEATHER_RGB = Object.freeze([
    ['sunny', 80, '245,185,70'],
    ['clear-night', 80, '80,90,180'],
    ['partlycloudy', 82, '120,175,225'],
    ['cloudy', 84, '145,155,175'],
    ['fog', 84, '185,185,200'],
    ['windy', 84, '90,190,175'],
    ['windy-variant', 84, '110,170,200'],
    ['rainy', 80, '70,130,200'],
    ['pouring', 76, '45,95,190'],
    ['lightning', 80, '150,105,220'],
    ['lightning-rainy', 76, '115,85,205'],
    ['hail', 80, '100,185,210'],
    ['snowy', 80, '180,215,245'],
    ['snowy-rainy', 80, '135,175,215'],
    ['exceptional', 76, '230,95,65']
]);

const weatherThresholds = () => WEATHER_RGB.map(([value, base, rgb]) => ({ value, color: `color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) ${base}%, rgb(${rgb}))` }));

const forecastTile = (offset) => ({
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'daily',
    ...(offset ? { forecast_offset: offset } : {}),
    align: 'center',
    background_color: `rgba(150,150,150,${(14 - 2 * offset) / 100})`,
    elements: [
        { type: 'icon', icon: 'weather' },
        { type: 'text', size: '12px', weight: '500', attribute: 'datetime' },
        { type: 'text', weight: '700', attribute: 'temperature', format: '\u00b0' }
    ]
});

const COMPARISON_CONFIG = Object.freeze({
    sun_enabled: false,
    moon_enabled: false,
    sun_moon_x: 'dynamic',
    color_mode: 'theme',
    card_height: 'content',
    card_padding: '20px',
    card_offset: '8px 0px 0px 0px',
    background_mode: 'color',
    background_threshold_entity: PRESET_ENTITY_TOKEN,
    background_thresholds: weatherThresholds(),
    background_haze: false,
    precipitation_effects: false,
    cloud_effects: false,
    night_sky_effects: false,
    button_containers: [
        {
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    padding: '0',
                    style: 'vertical',
                    align: 'start',
                    inner_gap: '6px',
                    elements: [
                        { type: 'text', text: 'Outside', size: '14px', weight: '500' },
                        { type: 'text', attribute: 'temperature', precision: 0, format: '\u00b0', size: '42px', weight: '800' }
                    ]
                }
            ]
        },
        {
            position: 'custom',
            position_anchor: 'top-right',
            layout: 'horizontal-scroll',
            custom_width: '60%',
            scroll_count: 3,
            gap: '8px',
            background: true,
            button_style: 'vertical',
            button_padding: '16px',
            button_icon_size: '26px',
            button_icon_padding: '0 0 8px 0',
            button_shadow: false,
            button_blurred_background: true,
            buttons: [0, 1, 2, 3].map(forecastTile)
        },
        {
            padding: '0',
            margin: '66px 0 8px 0',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    padding: '0',
                    width: '100%',
                    elements: [
                        {
                            type: 'bar',
                            bar_min: '-10',
                            bar_max: '35',
                            bar_height: '2px',
                            bar_color: 'rgba(150,150,150,0.6)',
                            bar_marker_size: '10px',
                            bar_values: [
                                { entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', marker_color: '#ffffff' },
                                { attribute: 'temperature' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            padding: '0 4px',
            margin: '12px 0 0 0',
            align: 'start',
            button_text_size: '16px',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    padding: '0',
                    align: 'spread',
                    elements: [
                        { type: 'icon', icon: 'weather', padding: '0 4px 0 0' },
                        { type: 'text', weight: '700', margin: '0 auto 0 0' }
                    ]
                },
                {
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    padding: '0',
                    align: 'spread',
                    elements: [
                        { type: 'icon', icon: 'mdi:umbrella-outline', margin: '0 0 0 auto' },
                        { type: 'text', attribute: 'precipitation_probability', format: ' %', weight: '400' }
                    ]
                }
            ]
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

const arcText = (value, extra) => ({ type: 'text', ...extra, size: value ? 'clamp(24px, 8cqmin, 36px)' : 'clamp(13px, 3.5cqmin, 16px)', weight: value ? '700' : '500' });

const arcSunButton = (rising) => ({
    ...sunButton(rising),
    background: false,
    elements: [
        arcText(true, { attribute: rising ? 'next_rising' : 'next_setting' }),
        arcText(false, { text: rising ? 'Sunrise' : 'Sunset' })
    ]
});

const arcEnd = (rising) => ({ entity: rising ? 'sensor.sun_next_rising' : 'sensor.sun_next_setting', marker_size: '26', marker_color: 'rgba(0,0,0,0.8)', marker_icon: rising ? 'mdi:weather-sunset-up' : 'mdi:weather-sunset-down', marker_icon_color: '#ffffff' });

const arcRing = (rising) => {
    const from = arcEnd(!rising), to = arcEnd(rising);
    return {
        ...sunButton(rising),
        type: 'ring',
        width: '68cqmin',
        background: false,
        ring_min: from.entity,
        ring_max: to.entity,
        ring_start: 240,
        ring_arc: 240,
        ring_width: '4',
        ring_color: 'color-mix(in srgb, currentColor 40%, transparent)',
        ring_values: [
            { entity: 'sensor.time', marker_size: 0 },
            from,
            to,
            { entity: 'sensor.time', marker_size: '40', marker_color: '#ffffff', marker_icon: rising ? 'mdi:weather-night' : 'mdi:white-balance-sunny', marker_icon_color: '#2c2c2e' }
        ],
        elements: [
            { type: 'text', text: ' ' }
        ]
    };
};

const ARC_CONFIG = Object.freeze({
    sun_moon_size: 100,
    sun_moon_y: 44,
    card_height: 'auto',
    card_padding: '0',
    bird_effects: false,
    balloon_effects: false,
    plane_effects: false,
    button_containers: [
        {
            position: 'custom',
            position_anchor: 'top',
            position_y: '10cqh',
            buttons: [arcRing(false), arcRing(true)]
        },
        {
            position: 'custom',
            position_anchor: 'bottom-left',
            position_x: '7cqw',
            position_y: '7cqh',
            padding: '0',
            button_style: 'vertical',
            button_padding: '0',
            button_gap: '8px',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    elements: [
                        arcText(true, { attribute: 'temperature', precision: 0, format: '\u00b0' }),
                        arcText(false)
                    ]
                }
            ]
        },
        {
            position: 'custom',
            position_anchor: 'bottom-right',
            position_x: '7cqw',
            position_y: '7cqh',
            align: 'end',
            padding: '0',
            button_style: 'vertical',
            button_padding: '0',
            button_gap: '8px',
            buttons: [arcSunButton(false), arcSunButton(true)]
        }
    ],
    grid_options: {
        columns: 12,
        rows: 6
    }
});

export const LAYOUT_PRESETS = Object.freeze([
    {
        id: 'slim',
        name: 'Slim',
        description: 'Small buttons',
        icon: 'mdi:view-compact-outline',
        config: SLIM_CONFIG
    },
    {
        id: 'classic',
        name: 'Classic',
        description: 'Daily forecast',
        icon: 'mdi:view-dashboard-variant-outline',
        config: CLASSIC_CONFIG
    },
    {
        id: 'centered',
        name: 'Centered',
        description: 'Simple and clean',
        icon: 'mdi:format-align-center',
        config: CENTERED_CONFIG
    },
    {
        id: 'comparison',
        name: 'Comparison',
        description: 'Lots of info',
        icon: 'mdi:compare-horizontal',
        config: COMPARISON_CONFIG
    },
    {
        id: 'arc',
        name: 'Arc',
        description: 'Sunrise to sunset',
        icon: 'mdi:weather-sunset',
        config: ARC_CONFIG
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
