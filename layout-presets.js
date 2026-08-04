export const PRESET_ENTITY_TOKEN = '__WEATHER__';

const sunButton = (rising) => ({
    entity: 'sun.sun',
    elements: [
        { type: 'icon', icon: rising ? 'mdi:weather-sunset-up' : 'mdi:weather-sunset-down' },
        { type: 'text', attribute: rising ? 'next_rising' : 'next_setting', weight: '700' }
    ],
    visibility: [{ condition: 'state', entity: 'sun.sun', state: rising ? 'below_horizon' : 'above_horizon' }]
});

const DEFAULT_CONFIG = Object.freeze({
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
            button_text_size: '24px',
            margin: '0 0 32px 0',
            button_gap: '6px',
            button_style: 'vertical',
            button_icon_size: '24px'
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
                        { type: 'icon', icon: 'mdi:weather-windy' },
                        { type: 'text', attribute: 'wind_speed', format: ' km/h', weight: '700' }
                    ],
                    style: 'inline'
                },
                {
                    entity: PRESET_ENTITY_TOKEN,
                    elements: [
                        { type: 'icon', icon: 'mdi:water-percent' },
                        { type: 'text', weight: '700', attribute: 'humidity', format: ' %' }
                    ],
                    style: 'inline'
                },
                sunButton(true),
                sunButton(false)
            ],
            button_background_color: 'rgba(255,255,255,0.05)',
            button_blurred_background: true
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

const DETAILED_CONFIG = Object.freeze({
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

const MINIMAL_CONFIG = Object.freeze({
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

const splitRow = (offset) => ({
    entity: PRESET_ENTITY_TOKEN,
    forecast: 'hourly',
    ...(offset ? { forecast_offset: offset } : {}),
    background: false,
    align: 'spread',
    style: 'inline',
    padding: '7px 2px',
    elements: [
        { type: 'icon', icon: 'weather' },
        { type: 'text', weight: '700', attribute: 'temperature', format: '\u00b0', margin: '0 auto 0 0' },
        { type: 'text', weight: '500', attribute: 'datetime' }
    ]
});

const SPLIT_CONFIG = Object.freeze({
    sun_entity: 'sun.sun',
    sun_moon_x: 30,
    card_height: 'content',
    card_padding: '16px',
    background_mode: 'default',
    content_direction: 'row',
    content_align: 'between',
    content_align_items: 'end',
    button_containers: [
        {
            padding: '4px 14px 4px 4px',
            button_gap: '0px',
            buttons: [
                {
                    entity: PRESET_ENTITY_TOKEN,
                    background: false,
                    style: 'vertical',
                    align: 'start',
                    text_size: '38px',
                    padding: '0',
                    width: '90px',
                    elements: [
                        { type: 'text', weight: '700', attribute: 'temperature', precision: 0, fancy_unit: true },
                        { type: 'text', size: '14px', weight: '500', entity: PRESET_ENTITY_TOKEN, overflow: 'marquee' }
                    ]
                }
            ]
        },
        {
            layout: 'vertical-scroll',
            scroll_count: 3,
            grouped: true,
            background: true,
            separator: true,
            blurred_background: true,
            background_color: 'rgba(0,0,0,0.05)',
            gap: '8px',
            padding: '8px 12px',
            width: '54%',
            align: 'spread',
            button_text_size: '14px',
            button_icon_size: '16px',
            buttons: [0, 1, 2, 3, 4, 5, 6].map(splitRow)
        }
    ],
    grid_options: {
        rows: 'auto',
        columns: 12
    }
});

export const LAYOUT_PRESETS = Object.freeze([
    {
        id: 'compact',
        name: 'Compact',
        description: 'Small and tidy',
        icon: 'mdi:view-compact-outline',
        config: DEFAULT_CONFIG
    },
    {
        id: 'detailed',
        name: 'Big',
        description: 'Lots of info',
        icon: 'mdi:view-dashboard-variant-outline',
        config: DETAILED_CONFIG
    },
    {
        id: 'minimal',
        name: 'Minimal',
        description: 'Slim and simple',
        icon: 'mdi:format-align-left',
        config: MINIMAL_CONFIG
    },
    {
        id: 'split',
        name: 'Side by side',
        description: 'Now and later',
        icon: 'mdi:view-split-vertical',
        config: SPLIT_CONFIG
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
