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
    sun_entity: 'sun.sun',
    sun_moon_x: 80,
    card_height: 'content',
    card_padding: '16px',
    background_mode: 'default',
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
            position: 'bottom-left',
            gap: '8px',
            button_gap: '6px',
            button_icon_size: '14px',
            button_padding: '8px 12px 8px 10px',
            align: 'center',
            button_text_size: '12px',
            background_color: 'rgba(255,255,255,0.1)',
            width: '100%',
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
    sun_entity: 'sun.sun',
    card_height: 'content',
    card_padding: '16px',
    background_mode: 'default',
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
                    background: false,
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
                sunButton(false)
            ]
        },
        {
            layout: 'horizontal-scroll',
            scroll_count: 5,
            gap: '2px',
            button_icon_background_color: 'rgba(255,255,255,0.05)',
            button_style: 'vertical',
            button_gap: '6px',
            button_icon_size: '24px',
            button_padding: '16px 0',
            align: 'center',
            button_text_size: '13px',
            background_color: 'rgba(0,0,0,0.05)',
            blurred_background: true,
            button_background_color: 'rgba(255,255,255,0.1)',
            button_icon_padding: '0 0 6px 0',
            grouped: true,
            background: true,
            separator: true,
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
    sun_entity: 'sun.sun',
    sun_moon_x: 86,
    card_height: 'content',
    card_padding: '24px 20px',
    background_mode: 'default',
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

const TEMP_RGB = Object.freeze([
    ['-10', '66,110,196'],
    ['-6', '79,143,214'],
    ['-2', '89,168,209'],
    ['2', '95,191,203'],
    ['6', '95,191,174'],
    ['10', '110,201,138'],
    ['14', '140,205,112'],
    ['18', '178,205,100'],
    ['22', '214,180,96'],
    ['26', '224,138,114'],
    ['30', '224,102,86'],
    ['34', '207,64,64']
]);

const BACKGROUND_ALPHA = Object.freeze(['0.14', '0.13', '0.12', '0.11', '0.10', '0.09', '0.09', '0.10', '0.11', '0.13', '0.15', '0.18']);

const BAR_ALPHA = Object.freeze(['0.45', '0.45', '0.45', '0.46', '0.48', '0.50', '0.50', '0.52', '0.55', '0.58', '0.62', '0.68']);

const tempThresholds = (alpha) => TEMP_RGB.map(([value, rgb], i) => ({ value, color: alpha ? `rgba(${rgb},${alpha[i]})` : `rgb(${rgb})` }));

const scrollItem = (icon, attribute, format, forecast) => ({
    entity: PRESET_ENTITY_TOKEN,
    ...(forecast ? { forecast: 'daily' } : {}),
    background: false,
    elements: [
        { type: 'icon', icon, icon_background: false },
        { type: 'text', attribute, precision: 0, format, weight: '700' }
    ]
});

const COMPARISON_CONFIG = Object.freeze({
    sun_entity: 'sun.sun',
    sun_moon_enabled: false,
    color_mode: 'theme',
    card_height: 'content',
    card_padding: '20px',
    card_offset: '20px 0px 0px 0px',
    background_mode: 'color',
    background_threshold_entity: PRESET_ENTITY_TOKEN,
    background_threshold_attribute: 'temperature',
    background_thresholds: tempThresholds(BACKGROUND_ALPHA),
    background_haze: false,
    precipitation_effects: false,
    cloud_effects: false,
    night_sky_effects: false,
    button_containers: [
        {
            position: 'custom',
            position_anchor: 'top-left',
            position_x: '4px',
            position_y: '4px',
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
                        { type: 'text', entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', precision: 0, format: '\u00b0', size: '48px', weight: '800' }
                    ]
                }
            ]
        },
        {
            justify_content: 'end',
            padding: '0',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: true,
                    button_round: true,
                    shadow: false,
                    padding: '15px 22px',
                    text_size: '14px',
                    background_color: 'rgba(255,255,255,0.10)',
                    color_threshold_attribute: 'temperature',
                    color_thresholds: tempThresholds(),
                    elements: [
                        { type: 'icon', icon: 'weather' },
                        { type: 'text', weight: '700' }
                    ]
                }
            ]
        },
        {
            justify_content: 'end',
            padding: '0 4px',
            margin: '16px 0 0 0',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    padding: '0',
                    text_size: '14px',
                    elements: [
                        { type: 'text', attribute: 'humidity', precision: 0, format: ' % humidity', weight: '500' }
                    ]
                }
            ]
        },
        {
            padding: '0',
            margin: '28px 0 0 0',
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
                            bar_max: '38',
                            bar_height: 18,
                            bar_color: 'rgba(255,255,255,0.14)',
                            bar_threshold_mode: 'gradient',
                            bar_thresholds: tempThresholds(BAR_ALPHA),
                            bar_values: [
                                { entity: PRESET_ENTITY_TOKEN, attribute: 'temperature', marker_icon: 'mdi:thermometer', marker_color: '#ffffff', marker_icon_color: '#14263f' },
                                { attribute: 'templow', marker_icon: 'mdi:arrow-down', marker_color: '#5c5c5c', marker_icon_color: '#ffffff' },
                                { attribute: 'temperature', marker_icon: 'mdi:arrow-up', marker_color: '#5c5c5c', marker_icon_color: '#ffffff' }
                            ],
                            bar_marker_size: '26px'
                        }
                    ]
                }
            ]
        },
        {
            padding: '0 4px',
            margin: '16px 0 0 0',
            button_text_size: '16px',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    forecast: 'daily',
                    background: false,
                    padding: '0',
                    align: 'spread',
                    elements: [
                        { type: 'text', text: 'Today', weight: '400' },
                        { type: 'icon', icon: 'weather' },
                        { type: 'text', attribute: 'condition', weight: '700', margin: '0 auto 0 0' },
                        { type: 'text', attribute: 'precipitation', precision: 1, format: ' mm', weight: '400', margin: '0 0 0 auto' }
                    ]
                }
            ]
        },
        {
            padding: '0',
            margin: '24px 0 8px 0',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    padding: '0',
                    width: '100%',
                    elements: [
                        { type: 'bar', bar_height: '2', bar_color: 'rgba(0,0,0,0)' }
                    ]
                }
            ]
        },
        {
            layout: 'horizontal-scroll',
            scroll_fade: true,
            scroll_fade_size: '28px',
            padding: '0',
            gap: '18px',
            button_gap: '7px',
            button_icon_size: '16px',
            button_text_size: '14px',
            button_padding: '8px 0 0 0',
            align: 'center',
            buttons: [
                sunButton(true),
                sunButton(false),
                scrollItem('mdi:weather-windy', 'wind_speed', ' km/h', false),
                scrollItem('mdi:weather-rainy', 'precipitation_probability', ' %', true),
                scrollItem('mdi:cloud-outline', 'cloud_coverage', ' %', true),
                scrollItem('mdi:eye-outline', 'visibility', ' km', false),
                scrollItem('mdi:gauge', 'pressure', ' hPa', false),
                scrollItem('mdi:compass-outline', 'wind_bearing', '\u00b0', false)
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
        for (const k of Object.keys(value)) {
            const v = value[k];
            if ((k === 'entity' || k === 'gauge_entity') && v === PRESET_ENTITY_TOKEN) out[k] = entity;
            else out[k] = rebindPresetEntities(v, entity);
        }
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
