import { LitElement, html, css } from "https://esm.sh/lit@3.2.1";
const LABELS = Object.freeze({
    weather_entity: "", sun_entity: "Sun Entity",
    moon_phase_entity: "Moon Phase Entity", sun_moon_size: "Diameter", sun_moon_x: "Horizontal Position", sun_moon_y: "Vertical Position",
    color_mode: "Light / dark mode", card_height: "Card Height",
    background_mode: "Card Background",
    card_padding: "Card Padding", card_offset: "Card Offset", card_tap_action: "Tap Action",
    weather_image_path: "Light mode folder", weather_image_path_dark: "Dark mode folder",
    button_text_size: "Text size",
    button_style: "Button style", button_container_columns: "Columns", button_container_scroll_count: "Show at once",
    button_padding: "Button padding",
    button_container_padding: "Container padding", button_container_margin: "Container offset", button_container_gap: "Gap between Buttons", button_gap: "Icon/text gap", button_text_gap: "Text gap", button_icon_size: "Icon size",
    button_container_grouped: "One shared background", button_container_separator: "Divider between buttons",
    button_icon_background: "Icon background", button_icon_padding: "Padding around icon",
    content_align: "Content Alignment", content_direction: "Content Direction", button_container_width: "Container width",
    icon_path: "Custom SVG Icon Folder",
    bg_brightness: "Background Brightness", bg_saturation: "Color Intensity", bg_blur: "Background Blur",
});
const HELPERS = Object.freeze({
    weather_entity: "", sun_entity: "Defaults to sun.sun",
    moon_phase_entity: "Optional",
    card_height: "", card_padding: "", card_offset: "",
    card_tap_action: "",
    weather_image_path: "sunny.jpg, rainy.png, …",
    weather_image_path_dark: "Optional",
    button_container_columns: "",
    bg_brightness: "", bg_saturation: "", bg_blur: "",
    icon_path: "e.g. /local/weather-icons/"});
const BUTTON_LABELS = Object.freeze({
    entity: "", attribute: "Attribute",
    gauge_entity: "Value Entity", gauge_attribute: "Value Attribute",
    icon: "Icon", icon_path: "Icon folder",
    tap_action: "Tap Action"});
const BUTTON_HELPERS = Object.freeze({
    icon: "MDI icon, or type 'weather' for a dynamic icon.", icon_path: "e.g. /local/weather-icons/"});
const KEY_ORDER = Object.freeze([
    "type", "name", "entity", "weather_entity",
    "sun_entity", "sun_moon_enabled", "moon_phase_entity", "sun_moon_size", "sun_moon_x", "sun_moon_y",
    "color_mode", "card_height", "card_padding",
    "background_mode",
    "weather_image_path", "weather_image_path_dark",
    "card_tap_action", "card_offset",
    "card_frame", "shadow", "shadow_color",
    "icon_path",
    "bg_brightness", "bg_saturation", "bg_blur",
    "background_blobs",
    "button_containers"]);
const DISPLAY_DEFAULTS = Object.freeze({
    color_mode: "sun",
    sun_moon_size: 80, sun_moon_x: 50,
    bg_brightness: 1.0, bg_saturation: 1.0, bg_blur: 0});
const OPT = Object.freeze({
    visual_mode: [
        { value: "images", label: "Custom weather images" },
        { value: "default", label: "Default weather background" }, { value: "none", label: "No background" }],
    color_mode: [
        { value: "sun",   label: "Follow the sun" }, { value: "theme", label: "Follow my theme" }], button_overflow: [
        { value: "ellipsis", label: "Ellipsis (…)" }, { value: "marquee", label: "Scrolling text" }, { value: "clip", label: "Clip" }, { value: "wrap", label: "Wrap" }], button_container_layout: [
        { value: "wrap",              label: "Flex" }, { value: "grid",              label: "Grid" },
        { value: "horizontal-scroll", label: "Scroll X" }, { value: "vertical-scroll",   label: "Scroll Y" }], button_container_align: [
        { value: "start",  label: "Left" }, { value: "center", label: "Center" }, { value: "end",    label: "Right" }, { value: "spread", label: "Spread" }],
    justify_content: [
        { value: "", label: "Left (default)" }, { value: "center", label: "Center" }, { value: "end", label: "Right" },
        { value: "between", label: "Space between" }, { value: "around", label: "Space around" }, { value: "evenly", label: "Space evenly" }],
    align_items: [
        { value: "", label: "Center (default)" }, { value: "start", label: "Top" }, { value: "end", label: "Bottom" },
        { value: "stretch", label: "Stretch" }, { value: "baseline", label: "Baseline" }],
    content_align: [
        { value: "", label: "Top (default)" }, { value: "end", label: "Bottom" },
        { value: "center", label: "Center" }, { value: "between", label: "Space between" },
        { value: "around", label: "Space around" }, { value: "evenly", label: "Space evenly" }],
    content_direction: [
        { value: "column", label: "Column (stacked)" }, { value: "row", label: "Row (side by side)" }]});
const FC_ATTRIBUTES = Object.freeze([
    { value: "condition",                  label: "Condition" }, { value: "temperature",                label: "Temperature (high)" },
    { value: "templow",                    label: "Temperature (low)" }, { value: "precipitation_probability",  label: "Rain probability" },
    { value: "precipitation",              label: "Precipitation" }, { value: "humidity",                   label: "Humidity" },
    { value: "wind_speed",                 label: "Wind speed" }, { value: "wind_bearing",               label: "Wind bearing" },
    { value: "pressure",                   label: "Pressure" }, { value: "cloud_coverage",             label: "Cloud coverage" }, { value: "uv_index",                   label: "UV index" }]);
const FC_TEXT_ATTRIBUTES = Object.freeze([{ value: "datetime", label: "Time label" }, ...FC_ATTRIBUTES]);
class WeatherCardEditor extends LitElement {
    static get properties() {
        return {
            _config: { type: Object, state: true },
            _expandedCard: { type: Number, state: true }, _expandedButton: { type: Number, state: true },
            _expandedContainer: { type: Number, state: true }, _openPanel: { type: String, state: true },};}
    set hass(val) {
        const old = this._hass; this._hass = val;
        if (!old && val) {
            this.requestUpdate();
        } else if (old && val) {
            if (!this._hassThrottle) {
                this._hassThrottle = true;
                setTimeout(() => { this._hassThrottle = false; this._requestUpdateIfIdle(); }, 2000);}}}
    _isEditing() {
                        const el = this.shadowRoot && this.shadowRoot.activeElement;
        if (!el) return false;
        const tag = el.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") {
            const t = (el.getAttribute("type") || "text").toLowerCase();
            return t === "text" || t === "number" || t === "range";
        }
        return false;
    }
    _requestUpdateIfIdle() {
                                if (!this._isEditing()) this.requestUpdate();
    }
    get hass() { return this._hass; }
    static get styles() {
        return css`
            :host {
                --origami-e-s1: 4px; --origami-e-s2: 8px; --origami-e-s3: 12px; --origami-e-s4: 16px; --origami-e-r-box: 10px; --origami-e-r-ctrl: 8px; --origami-e-r-inline: 6px;
                --origami-e-f-meta: 12px; --origami-e-f-label: 13px; --origami-e-f-body: 14px; --origami-e-f-header: 15px;
                --origami-e-t: 150ms ease;
                --mdc-text-field-fill-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                --mdc-select-fill-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                --mdc-typography-subtitle1-font-size: var(--origami-e-f-label); --mdc-typography-subtitle1-font-weight: 400;
                --mdc-typography-body2-font-size: var(--origami-e-f-meta);
                display: block;}
            /* Spacing */
            ha-form { display: block; }
            ha-expansion-panel {
                display: block; margin-top: var(--origami-e-s3); --ha-card-border-radius: var(--origami-e-r-box);
                & ha-form { margin-top: var(--origami-e-s2); }}
            ha-form + ha-form { margin-top: var(--origami-e-s1); }
            .button-accordion-body > * + *,
            .settings-group > * + *,
            .disclosure-body > * + * { margin-top: var(--origami-e-s2); }
            .button-accordion-body > :first-child,
            .settings-group > :first-child,
            .disclosure-body > :first-child { margin-top: 0; }
            .settings-group > .settings-group-label + *,
            .settings-group > .section-title + * { margin-top: 0; }
            /* Panel headers */
            .panel-header {
                display: flex; align-items: center; gap: var(--origami-e-s2);
                font-size: var(--origami-e-f-header); font-weight: 500; color: var(--primary-text-color);
                & ha-icon { --mdc-icon-size: 20px; color: var(--secondary-text-color); }}
            /* Shared backgrounds */
            .info, .card-row, details.disclosure {
                background: var(--secondary-background-color); border-radius: var(--origami-e-r-box);}
            details.disclosure details.disclosure,
            details.disclosure .card-row {
                background: linear-gradient(rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05), rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05)), var(--secondary-background-color);}
            .composite{
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); border-radius: var(--origami-e-r-box);}
            .composite:last-child{ margin-bottom: 0; }
            .disclosure-body > :last-child { margin-bottom: 0; }
            /* Info blocks */
            .info {
                padding: var(--origami-e-s3) var(--origami-e-s4); margin: 0 0 var(--origami-e-s3) 0;
                font-size: var(--origami-e-f-label); line-height: 1.5; color: var(--secondary-text-color);
                & b { color: var(--primary-text-color); font-weight: 500; }
                & code { background: var(--primary-background-color); padding: 1px 6px; border-radius: 4px; font-size: var(--origami-e-f-meta); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
                &.inline-action { display: flex; align-items: center; gap: var(--origami-e-s3); justify-content: space-between; & > span { flex: 1; } }}
            /* Labels & helpers */
             .composite-helper {
                margin-top: var(--origami-e-s2); font-size: var(--origami-e-f-meta);
                color: var(--secondary-text-color); line-height: 1.5;}
            /* Grid layouts */
            .card-size-row {
                display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--origami-e-s2);
                & ha-textfield { display: block; width: 100%; min-width: 0; }}
            .field-group .grid-picker { margin: 0; background: transparent; padding: 0; }
            /* Composite field groups */
            .composite { margin: var(--origami-e-s3) 0 var(--origami-e-s4) 0; padding: var(--origami-e-s3) var(--origami-e-s4); }
             .composite-grid-4 input {
                flex: 1; min-width: 120px; padding: var(--origami-e-s2) var(--origami-e-s3);
                border: 1px solid transparent; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07);
                color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl);
                font-size: var(--origami-e-f-body); box-sizing: border-box; transition: border-color var(--origami-e-t);
                &:focus { outline: none; border-color: var(--primary-color); }}
            .composite-grid-4 {
                display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--origami-e-s2);
                & label { display: flex; flex-direction: column; gap: var(--origami-e-s1); font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); }
                & input { flex: none; min-width: 0; width: 100%; }}
            /* Segmented controls */
            .segmented {
                display: flex; flex-wrap: wrap; width: 100%; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07);
                border-radius: var(--origami-e-r-ctrl); padding: 0; gap: 1px; box-sizing: border-box;
                & button {
                    flex: 1 1 auto; min-width: 52px; padding: var(--origami-e-s2) var(--origami-e-s3); border: 0;
                    background: transparent; color: var(--primary-text-color); font-size: var(--origami-e-f-body);
                    cursor: pointer; transition: background var(--origami-e-t), color var(--origami-e-t);
                    text-align: center; border-radius: var(--origami-e-r-ctrl);
                    &:hover:not(.active) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); }
                    &.active { background: var(--primary-color); color: var(--text-primary-color, white); }}
                &.segmented-2col { display: grid; grid-template-columns: 1fr 1fr; }}
            .composite-row .segmented { flex: 1; min-width: 0; }
            .segmented.segmented-compact { & button { min-width: 0; padding: var(--origami-e-s2) var(--origami-e-s1); font-size: var(--origami-e-f-meta); } }
            /* Disclosure / details */
            details.disclosure {
                margin-top: var(--origami-e-s3); overflow: hidden;
                & > summary {
                    list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s3) var(--origami-e-s4);
                    font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color);
                    user-select: none; transition: background var(--origami-e-t);
                    &::-webkit-details-marker { display: none; }
                    &:hover { background: var(--divider-color); }
                    & ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); }
                    & .chevron { transition: transform var(--origami-e-t); }}
                &[open] > summary .chevron { transform: rotate(90deg); }
                & > .disclosure-body { padding: var(--origami-e-s4) var(--origami-e-s4) var(--origami-e-s3) var(--origami-e-s4); }}
            details.sub-disclosure {
                border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                & > summary {
                    list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--origami-e-s2); padding: 8px 0 2px;
                    font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color);
                    user-select: none; transition: background var(--origami-e-t);
                    &::-webkit-details-marker { display: none; }
                    & ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
                    & .chevron { transition: transform var(--origami-e-t); }}
                &[open] > summary .chevron { transform: rotate(90deg); }
                & > .disclosure-body { padding: var(--origami-e-s2) 0 var(--origami-e-s3); }}
            /* Card rows (cards editor) */
            .card-row {
                margin-bottom: var(--origami-e-s2); overflow: hidden;
                & .card-row-head {
                    display: flex; align-items: center; gap: var(--origami-e-s2);
                    padding: var(--origami-e-s3) var(--origami-e-s4); cursor: pointer; user-select: none;
                    transition: background var(--origami-e-t);
                    &:hover { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05); }
                    & > .chevron { --mdc-icon-size: 20px; color: var(--secondary-text-color); transition: transform var(--origami-e-t); }}
                &.expanded .card-row-head > .chevron { transform: rotate(90deg); }
                & .card-row-title {
                    flex: 1; min-width: 0; font-size: var(--origami-e-f-body); font-weight: 500; color: var(--primary-text-color);
                    display: flex; flex-direction: column; gap: 1px; overflow: hidden;
                    & > span { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                    & .row-title-meta {
                        font-size: var(--origami-e-f-meta); font-weight: 400; color: var(--secondary-text-color); line-height: 1.25; }
                    & .row-title-main { line-height: 1.3; }}
                & .card-row-actions {
                    display: flex; gap: 2px;
                    & button {
                        width: 32px; height: 32px; border: 0; background: transparent;
                        color: var(--secondary-text-color); border-radius: var(--origami-e-r-inline);
                        cursor: pointer; display: flex; align-items: center; justify-content: center;
                        transition: background var(--origami-e-t), color var(--origami-e-t);
                        &:hover:not(:disabled) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); color: var(--primary-text-color); }
                        &:disabled { opacity: 0.3; cursor: not-allowed; }}
                    & ha-icon { --mdc-icon-size: 18px; }}
                & .card-row-body { padding: var(--origami-e-s3) var(--origami-e-s4) var(--origami-e-s4); background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.03); }}
            /* Add buttons */
            .add-card-btn, .add-button-btn {
                display: flex; align-items: center; justify-content: center; gap: var(--origami-e-s2);
                width: 100%; padding: var(--origami-e-s3); border: 1.5px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.4);
                background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.06); color: var(--primary-color); border-radius: var(--origami-e-r-box);
                font-size: var(--origami-e-f-body); font-weight: 500; cursor: pointer; transition: background var(--origami-e-t), border-color var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.12); border-color: var(--primary-color); }
                & ha-icon { --mdc-icon-size: 20px; }}
            .sensor-list { margin-top: 0; &:empty { display: none; } }
            /* Compact fields */
            .compact-fields {
                display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); margin: var(--origami-e-s3) 0;}
            .compact-field {
                display: flex; flex-direction: column; gap: 2px;
                & .compact-field-label { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); padding-left: 2px; }
                & input, & ha-textfield { width: 100%; min-width: 0; box-sizing: border-box; }
                & input {
                    padding: var(--origami-e-s2) var(--origami-e-s3); border: 1px solid transparent;
                    background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); color: var(--primary-text-color);
                    border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); transition: border-color var(--origami-e-t);
                    &:focus { outline: none; border-color: var(--primary-color); }}}
            .compact-field .card-height-value { margin-top: 3px; }
            /* Toggle groups */
            .toggle-group {
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
                border-radius: var(--origami-e-r-box); overflow: hidden; margin: var(--origami-e-s2) 0;}
            .toggle-row {
                display: flex; align-items: center; justify-content: space-between; gap: var(--origami-e-s3); padding: 10px var(--origami-e-s2) 10px var(--origami-e-s3);
                cursor: pointer; box-sizing: border-box;
                & + .toggle-row { border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); }
                & > span { font-size: var(--origami-e-f-body); color: var(--primary-text-color); }
                & ha-switch { flex-shrink: 0; margin: 0; padding: 0;
                    --ha-switch-background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);
                    --ha-switch-thumb-background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.35);
                    --ha-switch-border-color: transparent;
                    --ha-switch-thumb-border-color: transparent;
                    --ha-switch-checked-border-color: transparent;
                    --ha-switch-checked-thumb-border-color: transparent;
                    --ha-switch-checked-background-color: var(--primary-color);
                    --ha-switch-checked-thumb-background-color: var(--text-primary-color, #fff);
                    --switch-unchecked-track-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);
                    --switch-unchecked-button-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.35);
                    --switch-checked-track-color: var(--primary-color);
                    --switch-checked-button-color: var(--text-primary-color, #fff); }}
            /* Section boxes */
            .section-box.no-pad > .sensor-list { margin-top: 0; }
            .section-box .compact-fields { margin: 0; }
            .fc-box {
                margin: var(--origami-e-s3) 0; padding: var(--origami-e-s3) var(--origami-e-s4); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08);
                border: 1px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.18);
                border-radius: var(--origami-e-r-box);}
            .fc-box ha-form { margin-top: var(--origami-e-s2); }
            /* Icon combo & weather icon */
            .icon-combo {
                display: flex; align-items: center; gap: var(--origami-e-s1);
                & ha-icon-picker { flex: 1; min-width: 0; }
                & .icon-weather-btn {
                    flex-shrink: 0; padding: var(--origami-e-s2) var(--origami-e-s3); border: 0;
                    border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-meta); cursor: pointer;
                    transition: background var(--origami-e-t), color var(--origami-e-t);
                    &.active { background: var(--primary-color); color: var(--text-primary-color, white); }
                    &:not(.active) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); color: var(--primary-text-color); }
                    &:hover:not(.active) { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.16); }}}
            .weather-icon-active {
                display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3);
                background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.07); border: 1px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.18);
                border-radius: var(--origami-e-r-ctrl);}
            .weather-icon-active-text {
                flex: 1; display: flex; flex-direction: column; gap: 1px;
                & span:first-child { font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color); }}
            .weather-icon-active-sub { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); }
            .weather-icon-active .icon-weather-btn {
                flex-shrink: 0; padding: var(--origami-e-s1) var(--origami-e-s2); border: 0;
                border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-meta); cursor: pointer;
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); color: var(--primary-text-color);
                transition: background var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.16); }}
            /* Button type picker */
            .button-type-picker { display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); margin: 0 0 var(--origami-e-s3) 0; }
            .button-type-btn { display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3); border: 1.5px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12); border-radius: var(--origami-e-r-box); background: transparent; color: var(--primary-text-color); text-align: left; cursor: pointer; transition: border-color var(--origami-e-t), background var(--origami-e-t); &:hover { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.05); } &.active { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08); } & .button-type-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); flex-shrink: 0; } & .button-type-icon.active-icon { color: var(--primary-color); } & .button-type-text { display: flex; flex-direction: column; gap: 1px; } & .button-type-name { font-size: var(--origami-e-f-label); font-weight: 500; line-height: 1.2; } & .button-type-desc { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); line-height: 1.2; } }
            /* Button header badges */
            .button-badge-row { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 4px; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); color: var(--secondary-text-color); flex-shrink: 0; & ha-icon { --mdc-icon-size: 13px; } }
            .button-badge-free { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 4px; background: var(--primary-color, rgba(76, 140, 110, 0.85)); color: #fff; flex-shrink: 0; & ha-icon { --mdc-icon-size: 13px; } }
            /* CSS value fields */
            .css-field-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: var(--origami-e-s2); margin-top: var(--origami-e-s2); }
            .css-field-row.cols-2 { grid-template-columns: 1fr 1fr; }
            .css-field { display: flex; flex-direction: column; gap: 3px; & .css-field-label { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); font-weight: 500; padding-left: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: flex; align-items: center; gap: 5px; } & input { width: 100%; box-sizing: border-box; height: 36px; padding: 0 10px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); background: var(--mdc-text-field-fill-color, rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06)); color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit; transition: border-color var(--origami-e-t); &:focus { outline: none; border-color: var(--primary-color); } &::placeholder { color: var(--secondary-text-color); opacity: 0.7; } } }
            /* Overridden fields: a value set here replaces an inherited one.
               The dot reverts to inheriting; no label needed. */
            .css-field.overridden > input { border-color: rgba(var(--rgb-primary-color, 0, 120, 212), 0.55); }
            .revert-dot { width: 7px; height: 7px; padding: 0; border: 0; border-radius: 50%; background: var(--primary-color); cursor: pointer; flex-shrink: 0; opacity: 0.75; transition: opacity var(--origami-e-t), transform var(--origami-e-t); }
            .revert-dot:hover { opacity: 1; transform: scale(1.35); }
            /* Section headings */
            .settings-group { margin-top: 16px; }
            .settings-group:first-child { margin-top: 0; }
            .settings-group-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); margin-bottom: var(--origami-e-s2); display: flex; align-items: center; gap: var(--origami-e-s1); }
            .section-title { font-size: var(--origami-e-f-label); font-weight: 600; color: var(--primary-text-color); margin-bottom: var(--origami-e-s2); display: flex; align-items: center; gap: var(--origami-e-s1); }
            .field-group {
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
                border-radius: var(--origami-e-r-box); padding: var(--origami-e-s3);
                margin-top: var(--origami-e-s2);}
            .field-group > .toggle-group:first-child { margin-top: 0; }
            .field-group > .toggle-group:last-child { margin-bottom: 0; }
            .field-group-label {
                font-size: var(--origami-e-f-meta); font-weight: 500; color: var(--secondary-text-color);
                margin-bottom: var(--origami-e-s2);}
            /* Button accordions */
            .button-accordion-body > .settings-group:first-child { margin-top: 0; }
            .button-accordion-body .settings-group + .settings-group { margin-top: var(--origami-e-s3); }
            /* Button nudge strips */
            .button-nudge { display: flex; align-items: flex-start; gap: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3); margin: var(--origami-e-s1) 0; border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); line-height: 1.5; & code { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08); padding: 0 4px; border-radius: 3px; } }
            .button-nudge.warning { background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.10); border: 1px solid rgba(var(--rgb-warning-color, 255, 152, 0), 0.25); }
            .button-nudge.info { background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.04); border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.09); }
            /* Button color picker */
            .button-color-box { margin-top: var(--origami-e-s2); padding: var(--origami-e-s2) var(--origami-e-s3); border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); border-radius: var(--origami-e-r-ctrl); background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.03); }
            .button-color-row { display: flex; align-items: center; gap: var(--origami-e-s2); }
            .button-color-label { flex: 1; font-size: var(--origami-e-f-label); color: var(--primary-text-color); }
            .button-color-swatch { width: 36px; height: 28px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); border-radius: var(--origami-e-r-inline); padding: 1px 2px; background: none; cursor: pointer; flex-shrink: 0; }
            .button-color-clear { width: 24px; height: 24px; border: 0; border-radius: 50%; padding: 0; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08); color: var(--secondary-text-color); cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background var(--origami-e-t); &:hover { background: rgba(var(--rgb-error-color, 211, 47, 47), 0.15); color: var(--error-color); } }
            .button-color-opacity-row { display: flex; align-items: center; gap: var(--origami-e-s2); margin-top: var(--origami-e-s2); }
            .button-color-opacity-label { font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; }
            .button-color-opacity { flex: 1; height: 4px; accent-color: var(--primary-color); cursor: pointer; }
            .button-color-opacity-val { font-size: 11px; color: var(--secondary-text-color); width: 32px; text-align: right; flex-shrink: 0; }
            /* Sliders */
            .wbk-slider {
                display: flex; flex-direction: column; gap: var(--origami-e-s1); padding: var(--origami-e-s3);
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
                border-radius: var(--origami-e-r-box);}
            .wbk-slider-head { display: flex; align-items: center; justify-content: space-between; gap: var(--origami-e-s2); margin-bottom: var(--origami-e-s1); }
            .wbk-slider-label { font-size: var(--origami-e-f-label); color: var(--primary-text-color); font-weight: 400; flex: 1; }
            .wbk-slider-num {
                width: 48px; flex-shrink: 0; text-align: right; border: none; background: none;
                color: var(--primary-color); font-size: var(--origami-e-f-label); font-weight: 600;
                font-family: inherit; padding: 0; outline: none; -moz-appearance: textfield;
                &::-webkit-inner-spin-button, &::-webkit-outer-spin-button { -webkit-appearance: none; }}
            .wbk-slider-range {
                width: 100%; height: 4px; accent-color: var(--primary-color); cursor: pointer;
                appearance: none; -webkit-appearance: none; display: block;
                background: linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) var(--origami-slider-pct, 50%), rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18) var(--origami-slider-pct, 50%));
                border-radius: 2px; border: none; outline: none;
                &::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--primary-color); cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }
                &::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: var(--primary-color); cursor: pointer; border: none; box-shadow: 0 1px 4px rgba(0,0,0,0.25); }}
            .wbk-slider-helper { font-size: var(--origami-e-f-meta); color: var(--secondary-text-color); margin-top: var(--origami-e-s1); line-height: 1.4; }
            .wbk-slider-status { font-size: var(--origami-e-f-meta); color: var(--primary-color); margin-top: 2px; line-height: 1.4; font-weight: 500; }
            /* Free button positioning */
            .free-pos-layout { display: grid; grid-template-columns: auto 1fr; gap: var(--origami-e-s3); align-items: start; }
            .offset-fields { display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); }
            .offset-field { display: flex; flex-direction: column; gap: 3px; & .offset-field-label { font-size: 11px; color: var(--secondary-text-color); font-weight: 500; padding-left: 2px; } & input { width: 100%; box-sizing: border-box; height: 36px; padding: 0 10px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.18); background: var(--mdc-text-field-fill-color, rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06)); color: var(--primary-text-color); border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit; &:focus { outline: none; border-color: var(--primary-color); } &::placeholder { color: var(--secondary-text-color); opacity: 0.7; } } }
            .anchor-grid { display: grid; grid-template-columns: repeat(3, 30px); grid-template-rows: repeat(3, 30px); gap: 4px; }
            .anchor-cell { width: 30px; height: 30px; border: 1.5px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.15); border-radius: var(--origami-e-r-ctrl); background: transparent; cursor: pointer; transition: border-color var(--origami-e-t), background var(--origami-e-t); &:hover:not(.active) { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.07); } &.active { border-color: var(--primary-color); background: var(--primary-color); } }
            .clearable-field { position: relative; & ha-form { padding-right: 0; } & .clear-btn { position: absolute; top: 8px; right: 4px; width: 24px; height: 24px; padding: 0; margin: 0; border: none; background: transparent; color: var(--secondary-text-color); cursor: pointer; display: flex; align-items: center; justify-content: center; border-radius: 50%; opacity: 0.6; transition: opacity var(--origami-e-t), color var(--origami-e-t); z-index: 1; &:hover { opacity: 1; color: var(--error-color); } & ha-icon { --mdc-icon-size: 16px; } } }
            /* Forecast special box */
            /* Ring threshold rows */
            .ring-threshold-row {
                display: flex; align-items: center; gap: var(--origami-e-s2); padding: var(--origami-e-s2) 0;
                & + .ring-threshold-row { border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); padding-top: var(--origami-e-s2); } }
            .ring-threshold-row .button-color-swatch { width: 28px; height: 22px; flex-shrink: 0; }
            .ring-threshold-row input[type="text"] {
                flex: 1; min-width: 0; height: 30px; padding: 0 8px; border: 1px solid transparent;
                background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.07); color: var(--primary-text-color);
                border-radius: var(--origami-e-r-ctrl); font-size: var(--origami-e-f-body); font-family: inherit;
                &:focus { outline: none; border-color: var(--primary-color); } }
            .ring-threshold-row .threshold-label { font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; }
            .ring-threshold-del {
                width: 22px; height: 22px; border: 0; border-radius: 50%; padding: 0;
                background: transparent; color: var(--secondary-text-color); cursor: pointer;
                display: flex; align-items: center; justify-content: center; flex-shrink: 0;
                transition: background var(--origami-e-t), color var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-error-color, 211, 47, 47), 0.12); color: var(--error-color); } }
            .ring-threshold-add {
                display: flex; align-items: center; justify-content: center; gap: var(--origami-e-s2);
                width: 100%; padding: var(--origami-e-s2); margin-top: var(--origami-e-s2); border: 1.5px solid rgba(var(--rgb-primary-color, 0, 120, 212), 0.4);
                border-radius: var(--origami-e-r-ctrl); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.06); color: var(--primary-color);
                font-size: var(--origami-e-f-label); font-weight: 500; cursor: pointer; transition: background var(--origami-e-t), border-color var(--origami-e-t);
                &:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.12); border-color: var(--primary-color); }
                & ha-icon { --mdc-icon-size: 16px; }}
            /* Visual Button Builder */
            .vcb { display: flex; flex-direction: column; gap: var(--origami-e-s2); }
            /* Format picker: refined mini diagrams */
            .vcb-format-card.active { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08); }
            .vcb-fmt.vertical { flex-direction: column; gap: 3px; align-items: center; height: auto; }
            .vcb-format-card.active .vcb-fmt-sq { opacity: 0.55; }
            .vcb-fmt-bar.sm { width: 14px; background: var(--secondary-text-color); opacity: 0.25; }
            .vcb-fmt-bar.lg { width: 18px; background: var(--primary-text-color); opacity: 0.4; }
            .vcb-format-card.active .vcb-fmt-bar.sm { opacity: 0.35; }
            .vcb-format-card.active .vcb-fmt-bar.lg { opacity: 0.55; }
            .vcb-format-card.active .vcb-format-name { color: var(--primary-color); font-weight: 600; }
            /* Layout picker: icon placement x text stacking, as pictures */
            .layout-picker { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--origami-e-s2); }
            .layout-card { border: 1.5px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); border-radius: var(--origami-e-r-box); padding: 9px 4px; cursor: pointer; background: transparent; transition: border-color 0.12s, background 0.12s; display: flex; align-items: center; justify-content: center; min-height: 42px; }
            .layout-card:hover { border-color: rgba(var(--rgb-primary-color, 0, 120, 212), 0.4); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.03); }
            .layout-card.active { border-color: var(--primary-color); background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.08); }
            .lp-fig { display: flex; align-items: center; gap: 4px; }
            .lp-fig.vertical { flex-direction: column; gap: 3px; }
            .lp-sq { width: 10px; height: 10px; border-radius: 3px; background: var(--primary-color); opacity: 0.35; flex-shrink: 0; }
            .layout-card.active .lp-sq { opacity: 0.6; }
            .lp-txt { display: flex; gap: 3px; align-items: center; }
            .lp-bar { height: 3px; border-radius: 1.5px; background: var(--primary-text-color); }
            .lp-bar.lg { width: 14px; opacity: 0.4; }
            .lp-bar.sm { width: 9px; opacity: 0.25; }
            .layout-card.active .lp-bar.lg { opacity: 0.6; }
            .layout-card.active .lp-bar.sm { opacity: 0.4; }
            .vcb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--origami-e-s2); }
            .vcb-section { border-top: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); }
            .vcb-section-head { display: flex; align-items: center; gap: var(--origami-e-s2); padding: 8px 0 2px; cursor: pointer; user-select: none; }
            .vcb-section-head ha-icon { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
            .vcb-section-head ha-icon.chevron { transition: transform 0.12s; }
            .vcb-section-head.open ha-icon.chevron { transform: rotate(90deg); }
            .vcb-section-title { font-size: var(--origami-e-f-label); font-weight: 500; color: var(--primary-text-color); flex: 1; }
            .vcb-section-body { padding: var(--origami-e-s2) 0 var(--origami-e-s3); }
            .vcb-section-body > * + * { margin-top: 6px; }
            .vcb-section-head .vcb-reorder { display: flex; gap: 2px; margin-left: auto; }
            .vcb-section-head .vcb-reorder button { width: 22px; height: 20px; border: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.10); border-radius: 4px; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--secondary-text-color); padding: 0; transition: background 0.12s, color 0.12s; }
            .vcb-section-head .vcb-reorder button:hover { background: rgba(var(--rgb-primary-color, 0, 120, 212), 0.12); color: var(--primary-color); }
            .vcb-section-head .vcb-reorder button:disabled { opacity: 0.15; cursor: default; pointer-events: none; }
            .vcb-section-head .vcb-reorder button ha-icon { --mdc-icon-size: 13px; }
            .vcb-section.dimmed > .vcb-section-head { opacity: 0.45; }
            .vcb-section.dimmed > .vcb-section-head:hover { opacity: 0.7; }
            .vcb-nested-group { margin-left: 12px; padding-left: 10px; border-left: 2px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); }
            .vcb-add-el { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--origami-e-s2); margin-top: var(--origami-e-s2); }
            .vcb-add-el .add-card-btn { margin-top: 0; }
        `;}
    setConfig(config) {
        const c = { ...(config || {}) };
        let autofilled = false;
        if (!c.weather_entity && this.hass && this.hass.states) {
            const firstWeather = Object.keys(this.hass.states).find((id) => id.startsWith("weather."));
            if (firstWeather) { c.weather_entity = firstWeather; autofilled = true; }}
        if (!c.sun_entity && this.hass && this.hass.states && this.hass.states["sun.sun"]) {
            c.sun_entity = "sun.sun";
            autofilled = true;}
        if (typeof c.background_mode !== "string") {
            c.background_mode = "default";
            autofilled = true;}
        this._config = this._cleanConfig(c);
        if (autofilled) Promise.resolve().then(() => this._emit());}
    get _formData() {
        if (this._cachedFormData && this._cachedFormConfig === this._config) {
            return this._cachedFormData;}
        const c = { ...DISPLAY_DEFAULTS, ...(this._config || {}) };
        c.background_mode = typeof c.background_mode === "string" ? c.background_mode : "default";
        this._cachedFormData = c; this._cachedFormConfig = this._config;
        return c;}
    _colorModeSchema() {
        return [{ name: "color_mode", selector: { select: { mode: "dropdown", options: OPT.color_mode } }}];}
    _setVisualMode(mode) {
        const clear = ["weather_image_path", "weather_image_path_dark"];
        if (mode === "none") {
            this._patch({ background_mode: "none" }, { strip: clear });
        } else if (mode === "images") {
            this._patch({ background_mode: "images", weather_image_path: "/local/weather-images/light" }, { strip: clear.filter(k => k !== "weather_image_path") });
        } else {
            this._patch({ background_mode: "default" }, { strip: clear });
        }}
    _getContainers() {
        const areas = (this._config || {}).button_containers;
        return Array.isArray(areas) && areas.length > 0
            ? areas.map(a => (a && typeof a === "object") ? a : {})
            : [];
    }
    _getButtonsForContainer(containerIdx) {
        const container = this._getContainers()[containerIdx];
        const buttons = container && container.buttons;
        return Array.isArray(buttons) && buttons.length > 0
            ? buttons.map(s => (s && typeof s === "object") ? s : {})
            : [];
    }
    _commitContainers(list) {
        if (!Array.isArray(list) || list.length === 0) {
            this._patch({}, { strip: ["button_containers"] });
            return;
        }
        this._patch({ button_containers: list });
    }
    _updateContainerAt(idx, newContainer) {
        const list = this._getContainers().map((a, i) => i === idx ? newContainer : a);
        this._commitContainers(list);
    }
    _commitButtonsInContainer(containerIdx, buttons) {
        const areas = [...this._getContainers()];
        const container = { ...areas[containerIdx] };
        if (!buttons || buttons.length === 0) delete container.buttons;
        else container.buttons = buttons;
        areas[containerIdx] = container;
        this._commitContainers(areas);
    }
    _updateContainerField(containerIdx, key, value) {
        const container = { ...(this._getContainers()[containerIdx] || {}) };
        const isEmpty = value === null || value === undefined || value === "";
        if (isEmpty) delete container[key];
        else container[key] = value;
        this._updateContainerAt(containerIdx, container);
    }
    _containerTitle(container, idx) {
        const hasVis = Array.isArray(container.visibility) && container.visibility.length > 0;
        if (container.custom_cards) {
            const cards = Array.isArray(container.custom_cards) ? container.custom_cards : [];
            return `${cards.length} card${cards.length !== 1 ? 's' : ''}${hasVis ? " · conditional" : ""}`;
        }
        const count = Array.isArray(container.buttons) ? container.buttons.length : 0;
        return `${count} button${count !== 1 ? 's' : ''}${hasVis ? " · conditional" : ""}`;
    }
    _computeLabel = (schema) => {
        if (!schema || !schema.name) return "";
        if (schema.name in LABELS) return LABELS[schema.name];
        return schema.name;};
    _computeHelper = (schema) => {
        if (!schema || !schema.name) return undefined;
        return HELPERS[schema.name] || undefined;};
    _valueChanged(ev) {
        ev.stopPropagation(); if (!this._config) return;
        const incoming = { ...((ev.detail && ev.detail.value) || {}) };
        const strip = [];
        this._patch(incoming, { replace: true, strip });}
    _patch(changes, opts) {
        const options = opts || {};
        const base = options.replace ? {} : { ...(this._config || {}) };
        const next = { ...base, ...changes };
        if (Array.isArray(options.strip)) {
            for (const k of options.strip) delete next[k];}
        this._config = this._cleanConfig(next);
        this._emit();}
    _cleanConfig(config) {
        const out = { ...config };
        for (const key of Object.keys(out)) {
            if (key === "button_containers") continue;
            const v = out[key];
            if (v === "" || v === null || v === undefined) {
                delete out[key];
                continue;}
            if (Array.isArray(v) && v.length === 0) {
                delete out[key];
                continue;}
            if (typeof v === "object" && !Array.isArray(v) && Object.keys(v).length === 0) delete out[key];}
        for (const [k, defVal] of Object.entries(DISPLAY_DEFAULTS)) {
            if (out[k] === defVal) delete out[k];}
        const ordered = {};
        for (const k of KEY_ORDER) {
            if (k === "button_containers") continue;
            if (k in out) ordered[k] = out[k];}
        for (const k of Object.keys(out)) {
            if (k === "button_containers") continue;
            if (!(k in ordered)) ordered[k] = out[k];}
        if ("button_containers" in out) ordered.button_containers = out.button_containers;
        if (Array.isArray(ordered.button_containers)) {
            const cleaned = ordered.button_containers.map(c => this._cleanContainer(c || {}));
            if (cleaned.length === 0) delete ordered.button_containers;
            else ordered.button_containers = cleaned;
        }
        return ordered;}
    _emit() {
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: { ...(this._config || {}) } }, bubbles: true, composed: true}));}
    _renderForm(schema) {
        if (!schema || schema.length === 0) return "";
        return html`<ha-form
                .hass=${this.hass}
                .data=${this._formData}
                .schema=${schema}
                .computeLabel=${this._computeLabel}
                .computeHelper=${this._computeHelper}
                @value-changed=${this._valueChanged}
            ></ha-form>`;}
    _renderClearableText(name) {
        const val = (this._formData || {})[name];
        return html`<div class="clearable-field">
            ${this._renderForm([{ name, selector: { text: {} } }])}
            ${val ? html`<button type="button" class="clear-btn" title="Clear" @click=${() => this._updateField(name, "")}><ha-icon icon="mdi:close"></ha-icon></button>` : ""}
        </div>`;}
    _renderDisclosure(label, content) {
        const isAdvanced = label === "Advanced options";
        return html`<details class="disclosure" @toggle=${this._onDisclosureToggle}>
                <summary>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    ${isAdvanced ? html`<ha-icon icon="mdi:cog-outline"></ha-icon>` : ""}
                    <span>${label}</span></summary>
                <div class="disclosure-body">${content}</div></details>`;}
    _renderSubDisclosure(label, content) {
        return html`<details class="sub-disclosure" @toggle=${this._onSubDisclosureToggle}>
                <summary>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    <span>${label}</span></summary>
                <div class="disclosure-body">${content}</div></details>`;}
    _onSubDisclosureToggle(e) {
        const el = e.currentTarget; if (!el.open) return; const parent = el.parentElement;
        if (!parent) return;
        parent.querySelectorAll(":scope > details.sub-disclosure[open]").forEach((d) => {
            if (d !== el) d.open = false;});}
    _onDisclosureToggle(e) {
        const el = e.currentTarget; if (!el.open) return; const parent = el.parentElement;
        if (!parent) return;
        parent.querySelectorAll(":scope > details.disclosure[open]").forEach((d) => {
            if (d !== el) d.open = false;});}
    _updateField(field, value) {
        const isEmpty = value === null || value === undefined || value === "";
        if (isEmpty) { this._patch({}, { strip: [field] }); return; }
        this._patch({ [field]: value });}
    _onPanelToggle(id, expanded) {
        if (expanded) this._openPanel = id;
        else if (this._openPanel === id) this._openPanel = null;}
    _renderSunMoonPanel() {
        const c = this._formData || {};
        const enabled = c.sun_moon_enabled !== false;
        const yRaw = c.sun_moon_y;
        const yFixed = yRaw != null && yRaw !== "";
        return html`<div class="settings-group">
            <div class="toggle-group"><label class="toggle-row"><span>Show Sun & Moon</span>
                <ha-switch .checked=${enabled}
                    @change=${(e) => this._updateField("sun_moon_enabled", e.target.checked ? "" : false)}></ha-switch></label></div>
            ${enabled ? html`
                ${this._renderForm([
                    { name: "sun_entity", selector: { entity: { domain: "sun" } } },
                    { name: "moon_phase_entity", selector: { entity: { domain: "sensor" } } }])}
                ${this._renderSlider("sun_moon_size", LABELS.sun_moon_size, 20, 200, 2)}
                ${this._renderSlider("sun_moon_x", LABELS.sun_moon_x, 0, 100, 1)}
                <div class="compact-field">
                    <span class="compact-field-label">${LABELS.sun_moon_y}</span>
                    <div class="segmented segmented-compact" role="radiogroup" aria-label=${LABELS.sun_moon_y}>
                        <button type="button" role="radio" class=${!yFixed ? "active" : ""} @click=${() => this._updateField("sun_moon_y", "")}>Dynamic</button>
                        <button type="button" role="radio" class=${yFixed ? "active" : ""} @click=${() => this._updateField("sun_moon_y", 50)}>Fixed</button>
                    </div></div>
                ${yFixed ? this._renderSlider("sun_moon_y", "", 0, 100, 1) : ""}` : ""}</div>`;}
    _renderCardStyleSegmented() {
        return html`<div class="compact-fields">
                    ${this._renderCardHeightControl()}
                    ${this._renderCompactField("card_padding", "e.g. 16px")}</div>`;}
    _renderCardHeightControl() {
        const raw = this._formData.card_height;
        const rawStr = String(raw == null ? "" : raw).toLowerCase().trim();
        const mode = rawStr === "content" ? "content" : rawStr === "auto" ? "auto" : "fixed";
        const fixedVal = mode === "fixed" ? String(raw == null ? "" : raw) : "";
        const setMode = (m) => {
            if (m === "content") this._updateField("card_height", "content");
            else if (m === "auto") this._updateField("card_height", "auto");
            else this._updateField("card_height", fixedVal || "220");
        };
        const modes = [{ v: "content", l: "Content" }, { v: "auto", l: "Fill" }, { v: "fixed", l: "Fixed" }];
        return html`<div class="compact-field">
                <span class="compact-field-label">${LABELS.card_height}</span>
                <div class="segmented segmented-compact" role="radiogroup" aria-label=${LABELS.card_height}>
                    ${modes.map(o => html`<button type="button" role="radio" class=${mode === o.v ? "active" : ""}
                        @click=${() => setMode(o.v)}>${o.l}</button>`)}</div>
                ${mode === "fixed" ? html`<input class="card-height-value" type="text" placeholder="e.g. 220"
                        .value=${fixedVal}
                        @change=${(e) => this._updateField("card_height", e.target.value || "220")}
                    >` : ""}</div>`;}
    _parseOffset(raw) {
        if (!raw || typeof raw !== "string") return [0, 0, 0, 0];
        const parts = raw.trim().split(/\s+/).map((p) => parseInt(p, 10) || 0);
        switch (parts.length) {
            case 0:  return [0, 0, 0, 0]; case 1:  return [parts[0], parts[0], parts[0], parts[0]]; case 2:  return [parts[0], parts[1], parts[0], parts[1]];
            case 3:  return [parts[0], parts[1], parts[2], parts[1]];
            default: return [parts[0], parts[1], parts[2], parts[3]];}}
    _serializeOffset(arr) {
        if (arr.every((v) => v === 0)) return "";
        return arr.map((v) => `${v}px`).join(" ");}
    _setOffsetPart(index, rawValue) {
        const parts = this._parseOffset(this._formData.card_offset); parts[index] = parseInt(rawValue, 10) || 0;
        this._updateField("card_offset", this._serializeOffset(parts));}
    _renderOffsetPicker() {
        const parts = this._parseOffset(this._formData.card_offset), edges = ["Top", "Right", "Bottom", "Left"];
        return html`<div class="settings-group-label">${LABELS.card_offset}</div>
                <div class="composite-grid-4">
                    ${edges.map( (label, i) => html`<label> <span>${label}</span> <input
                                    type="number"
                                    step="1"
                                    .value=${String(parts[i])}
                                    @change=${(e) =>
                                        this._setOffsetPart(i, e.target.value)}
                                ></label>`)}</div>
                ${HELPERS.card_offset
                    ? html`<div class="composite-helper">${HELPERS.card_offset}</div>`: ""}`;}
    _renderContainerCustomCardsEditor(containerIdx) {
        const container = this._getContainers()[containerIdx] || {};
        const cards = Array.isArray(container.custom_cards) ? container.custom_cards : [];
        return html`${cards.map((card, idx) => this._renderContainerCardRow(card, idx, cards.length, containerIdx))}
            <button type="button" class="add-card-btn" @click=${() => this._addContainerCard(containerIdx)}>
                <ha-icon icon="mdi:plus"></ha-icon>
                <span>Add card</span></button>`;}
    _renderListRow({ idx, total, expanded, title, badge, onToggle, onMoveUp, onMoveDown, onRemove, onDuplicate, body }) {
        return html`<div class="card-row ${expanded ? "expanded" : ""}">
                <div class="card-row-head" @click=${onToggle}>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    ${badge ? badge : ""}
                    <span class="card-row-title">${title}</span>
                    <div class="card-row-actions" @click=${(e) => e.stopPropagation()}>
                        <button type="button" title="Move up" ?disabled=${idx === 0} @click=${onMoveUp}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
                        <button type="button" title="Move down" ?disabled=${idx === total - 1} @click=${onMoveDown}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
                        ${onDuplicate ? html`<button type="button" title="Duplicate" @click=${onDuplicate}><ha-icon icon="mdi:content-copy"></ha-icon></button>` : ""}
                        <button type="button" title="Delete" @click=${onRemove}><ha-icon icon="mdi:delete-outline"></ha-icon></button></div></div>
                ${expanded ? html`<div class="card-row-body">${body}</div>` : ""}</div>`;}
    _renderContainerCardRow(card, idx, total, containerIdx) {
        const expanded = this._expandedCard === idx;
        const title = html`<span class="row-title-main">${(card && card.type) ? String(card.type).replace(/^custom:/, "") : "card"}</span>`;
        const body = html`<div class="card-size-row">
                <div class="offset-field">
                    <span class="offset-field-label">Custom Width</span>
                    <input type="text"
                        placeholder="e.g. 140px or 60%"
                        .value=${card.custom_width || ""}
                        @change=${(e)=>{const v=e.target.value.trim(); const nc={...card}; if(v) nc.custom_width=v; else delete nc.custom_width; this._updateContainerCardAt(containerIdx,idx,nc);}}
                    ></div>
                <div class="offset-field">
                    <span class="offset-field-label">Custom Height</span>
                    <input type="text"
                        placeholder="e.g. 110px"
                        .value=${card.custom_height || ""}
                        @change=${(e)=>{const v=e.target.value.trim(); const nc={...card}; if(v) nc.custom_height=v; else delete nc.custom_height; this._updateContainerCardAt(containerIdx,idx,nc);}}
                    ></div></div>
            <ha-form
                .hass=${this.hass}
                .data=${{ _card: card }}
                .schema=${[{ name: "_card", selector: { object: {} } }]}
                .computeLabel=${() => ""}
                @value-changed=${(e) => {
                    e.stopPropagation();
                    this._updateContainerCardAt(containerIdx, idx, (e.detail && e.detail.value && e.detail.value._card) || {});}}
            ></ha-form>`;
        return this._renderListRow({
            idx, total, expanded, title, body, onToggle: () => this._toggleCardExpanded(idx),
            onMoveUp: () => this._moveContainerCard(containerIdx, idx, -1), onMoveDown: () => this._moveContainerCard(containerIdx, idx, 1), onRemove: () => this._removeContainerCard(containerIdx, idx),});}
    _toggleCardExpanded(idx) {
        this._expandedCard = this._expandedCard === idx ? null : idx;}
    _moveContainerCard(containerIdx, idx, delta) {
        const container = { ...(this._getContainers()[containerIdx] || {}) };
        const cards = [...(container.custom_cards || [])];
        const target = idx + delta; if (target < 0 || target >= cards.length) return;
        [cards[idx], cards[target]] = [cards[target], cards[idx]];
        if (this._expandedCard === idx) this._expandedCard = target;
        else if (this._expandedCard === target) this._expandedCard = idx;
        container.custom_cards = cards; this._updateContainerAt(containerIdx, container);}
    _removeContainerCard(containerIdx, idx) {
        const container = { ...(this._getContainers()[containerIdx] || {}) };
        const cards = [...(container.custom_cards || [])];
        cards.splice(idx, 1);
        if (this._expandedCard === idx) this._expandedCard = null;
        else if (typeof this._expandedCard === "number" && this._expandedCard > idx) this._expandedCard--;
        if (cards.length) container.custom_cards = cards; else delete container.custom_cards;
        this._updateContainerAt(containerIdx, container);}
    _updateContainerCardAt(containerIdx, idx, newCard) {
        const container = { ...(this._getContainers()[containerIdx] || {}) };
        const cards = [...(container.custom_cards || [])];
        cards[idx] = newCard;
        container.custom_cards = cards; this._updateContainerAt(containerIdx, container);}
    _addContainerCard(containerIdx) {
        const container = { ...(this._getContainers()[containerIdx] || {}) };
        const cards = [...(container.custom_cards || []), { type: "entity", entity: "", custom_width: "100%" }];
        this._expandedCard = cards.length - 1;
        container.custom_cards = cards; this._updateContainerAt(containerIdx, container);}
    _buttonTitle(button) {
                        const els = button && Array.isArray(button.elements) ? button.elements : [];
        const firstStatic = els.find(e => e && e.kind === "text" && typeof e.text === "string" && e.text.trim());
        const name = (firstStatic ? firstStatic.text : "").toString().trim(), entity = (button && button.entity || "").toString().trim();
        const attribute = (button && button.attribute || "").toString().trim();
        const two = (main, meta) => html`<span class="row-title-main">${main}</span>${meta ? html`<span class="row-title-meta">${meta}</span>` : ""}`;
        if (!entity) return two(name || "Choose an entity", name ? "no entity" : "");
        const st = this.hass && this.hass.states && this.hass.states[entity], friendly = st && st.attributes && st.attributes.friendly_name;
        const label = friendly || entity;
        if (button.forecast) {
            const type = button.forecast === "hourly" ? "Hourly" : "Daily", offset = parseInt(button.forecast_offset, 10) || 0;
            const offsetLabel = button.forecast === "hourly"
                ? (offset === 0 ? "now" : `+${offset}h`)
                : (offset === 0 ? "today" : offset === 1 ? "tomorrow" : `+${offset}d`);
            const firstFcAttr = (els.find(e => e && e.kind === "text" && !e.entity && e.attribute) || {}).attribute;
            return two(name || label, `${type} · ${offsetLabel} · ${firstFcAttr || "condition"}`);}
        return two(name || label, name ? (attribute ? `${label} · ${attribute}` : label) : attribute);}
    _textTitle(button, txt) {
        const t = txt && typeof txt === "object" ? txt : {};
        if (t.entity) {
            const st = this.hass && this.hass.states && this.hass.states[t.entity];
            const label = (st && st.attributes && st.attributes.friendly_name) || t.entity;
            return t.attribute ? `${label} [${t.attribute}]` : label;}
        if (typeof t.text === "string" && t.text.trim()) return `“${t.text.trim()}”`;
        if (t.attribute) return button.forecast && t.attribute === "datetime" ? "Time label" : `[${t.attribute}]`;
        if (button.forecast) return "Forecast [condition]";
        return button.attribute ? `[${button.attribute}]` : "Entity value";}
    _cleanButton(button) {
        const out = { ...button };
        if (!out.entity) { delete out.attribute; delete out.forecast; delete out.forecast_offset; }
        if (!out.forecast) delete out.forecast_offset;
        else delete out.attribute;
        if (out.forecast_offset === 0) delete out.forecast_offset;
        if (Array.isArray(out.elements)) {
            const elements = out.elements
                .map(e => this._cleanElement(e || {}))
                .filter(e => e && (e.kind === "text" || e.kind === "icon" || e.kind === "bar"));
            if (elements.length === 0) delete out.elements;
            else if (elements.length === 1 && elements[0].kind === "text" && Object.keys(elements[0]).length === 1) delete out.elements;
            else out.elements = elements;
        }
        if (out.type !== 'ring') { delete out.gauge_entity; delete out.gauge_attribute; delete out.ring_min; delete out.ring_max; delete out.ring_color; delete out.ring_width; delete out.ring_gap; delete out.ring_thresholds; delete out.ring_threshold_mode; }
        if (!Array.isArray(out.color_thresholds) || out.color_thresholds.length === 0) { delete out.color_thresholds; delete out.color_threshold_entity; delete out.color_threshold_attribute; }
        for (const k of Object.keys(out)) {
            const v = out[k];
            if (k === 'ring_min') { if (v === null || v === undefined) delete out[k]; continue; }
            if (k === 'background' && v === false) continue; if (k === 'icon_background' && v === false) continue; if (k === 'shadow' && v === false) continue;
            if (v === "" || v === null || v === undefined || v === false) delete out[k];}
        return out;}
    _cleanElement(el) {
        const out = { ...(el || {}) };
        const kind = out.kind === "icon" || out.kind === "bar" ? out.kind : "text";
        out.kind = kind;
                        if (out.source === "entity" && out.entity) delete out.source;
        for (const k of Object.keys(out)) {
            if (k === "kind") continue;
            const v = out[k];
            if (kind === "text" && k === 'format') { if (v === null || v === undefined) delete out[k]; continue; }
            if (kind === "text" && k === 'precision') { if (v === '' || v === null || v === undefined) delete out[k]; continue; }
            if ((k === 'bar_min' || k === 'bar_max') && (v === 0 || v === "0")) continue;
            if (k === 'icon_background' && v === false) continue;
            if (v === "" || v === null || v === undefined || v === false) delete out[k];
        }
        return out;}
    _cleanContainer(container) {
        const out = { ...(container || {}) };
                const layout = (out.layout || "wrap").toString().toLowerCase();
        if (layout !== "grid") delete out.columns;
        if (layout !== "horizontal-scroll" && layout !== "vertical-scroll") delete out.scroll_count;
        if (layout === "wrap") delete out.layout;
                if (Array.isArray(out.buttons)) {
            const buttons = out.buttons.map(b => this._cleanButton(b || {}));
            if (buttons.length === 0) delete out.buttons;
            else out.buttons = buttons;
        }
                        for (const k of Object.keys(out)) {
            const v = out[k];
            if ((k === "shadow" || k === "button_icon_background") && v === false) continue;
            if (Array.isArray(v)) { if (v.length === 0) delete out[k]; continue; }
            if (v === "" || v === null || v === undefined || v === false) delete out[k];
        }
        return out;}
    _updateButtonAt(containerIdx, idx, newButton) {
        const list = this._getButtonsForContainer(containerIdx).map((c, i) => i === idx ? this._cleanButton(newButton) : c);
        this._commitButtonsInContainer(containerIdx, list);}
    _addButton = (containerIdx) => {
        const list = this._getButtonsForContainer(containerIdx);
        const weatherEntity = (this._config && this._config.weather_entity) || "";
        const newButton = weatherEntity ? { entity: weatherEntity } : {};
        const next = [...list, newButton];
        this._expandedButton = next.length - 1;
        this._commitButtonsInContainer(containerIdx, next);};
    _moveButton(containerIdx, idx, delta) {
        const list = [...this._getButtonsForContainer(containerIdx)], target = idx + delta;
        if (target < 0 || target >= list.length) return; [list[idx], list[target]] = [list[target], list[idx]];
        if (this._expandedButton === idx) this._expandedButton = target;
        else if (this._expandedButton === target) this._expandedButton = idx;
        this._commitButtonsInContainer(containerIdx, list);}
    _removeButton(containerIdx, idx) {
        const list = [...this._getButtonsForContainer(containerIdx)]; list.splice(idx, 1);
        this._shiftAccordionOnRemove(containerIdx, idx, list.length);
        if (this._expandedButton === idx) this._expandedButton = null;
        else if (typeof this._expandedButton === "number" && this._expandedButton > idx) {
            this._expandedButton = this._expandedButton - 1;}
        this._commitButtonsInContainer(containerIdx, list);}
    _duplicateButton(containerIdx, idx) {
        const list = [...this._getButtonsForContainer(containerIdx)];
        list.splice(idx + 1, 0, { ...list[idx] });
        this._expandedButton = idx + 1;
        this._commitButtonsInContainer(containerIdx, list);}
    _toggleButtonExpanded(idx) {
        this._expandedButton = this._expandedButton === idx ? null : idx; this.requestUpdate();}
    _buttonLabel = (schema) => {
        if (!schema || !schema.name) return "";
        if (schema.name in BUTTON_LABELS) return BUTTON_LABELS[schema.name];
        return schema.name;};
    _buttonHelper = (schema) => {
        if (!schema || !schema.name) return undefined;
        return BUTTON_HELPERS[schema.name] || undefined;};
    _cssTextField(opts) {
                                                                                const { value, label, placeholder, onCommit } = opts;
        const trim = opts.trim !== false;
        const has = value !== undefined && value !== null && String(value) !== "";
        const inherited = opts.inherit !== undefined && opts.inherit !== null && String(opts.inherit) !== ""
            ? String(opts.inherit) : "";
        const ph = inherited || placeholder;
        return html`<div class="css-field ${has && inherited ? "overridden" : ""}">
                <span class="css-field-label">${label}${has && inherited ? html`<button type="button" class="revert-dot"
                    title="Back to ${inherited}" @click=${() => onCommit("")}></button>` : ""}</span>
                <input type="text" placeholder=${ph}
                    .value=${has ? String(value) : ""}
                    @change=${(e) => onCommit(trim ? e.target.value.trim() : e.target.value)}></div>`;}
        _accKey(containerIdx, idx) { return `${containerIdx}:${idx}`; }
    _getSecOpen(containerIdx, idx) { return (this._secOpen && this._secOpen.get(this._accKey(containerIdx, idx))) || null; }
    _setSecOpen(containerIdx, idx, val) {
        if (!this._secOpen) this._secOpen = new Map();
        if (val) this._secOpen.set(this._accKey(containerIdx, idx), val);
        else this._secOpen.delete(this._accKey(containerIdx, idx));
    }
    _getNestedOpen(containerIdx, idx) { return (this._nestedOpen && this._nestedOpen.get(this._accKey(containerIdx, idx))) || null; }
    _setNestedOpen(containerIdx, idx, val) {
        if (!this._nestedOpen) this._nestedOpen = new Map();
        if (val) this._nestedOpen.set(this._accKey(containerIdx, idx), val);
        else this._nestedOpen.delete(this._accKey(containerIdx, idx));
    }
    _shiftAccordionOnRemove(containerIdx, removedIdx, newLen) {
                for (const map of [this._secOpen, this._nestedOpen]) {
            if (!map) continue;
            const next = new Map();
            for (const [k, v] of map) {
                const [c, i] = k.split(":");
                if (Number(c) !== containerIdx) { next.set(k, v); continue; }
                const bi = Number(i);
                if (bi === removedIdx) continue;
                if (bi > removedIdx) next.set(`${c}:${bi - 1}`, v);
                else next.set(k, v);
            }
            map.clear();
            for (const [k, v] of next) map.set(k, v);
        }
    }
    _renderThresholdList(opts) {
                                const { list, swatchDefault, addLabel, addColor } = opts;
        const commit = opts.commit;
        const setAt = (ti, patch) => { const arr = [...list]; arr[ti] = { ...arr[ti], ...patch }; commit(arr); };
        const removeAt = (ti) => { const arr = [...list]; arr.splice(ti, 1); commit(arr.length ? arr : undefined); };
        const add = () => commit([...list, { value: "", color: addColor }]);
        return html`
            ${list.map((t, ti) => html`<div class="ring-threshold-row"><span class="threshold-label">≥</span>
                <input type="text" placeholder="value" .value=${String(t.value != null ? t.value : "")}
                    @change=${(e) => setAt(ti, { value: e.target.value.trim() })}>
                <input type="color" class="button-color-swatch" .value=${t.color || swatchDefault}
                    @mousedown=${(e) => this._nudgeColorInput(e)}
                    @input=${(e) => setAt(ti, { color: e.target.value })}
                    @change=${(e) => setAt(ti, { color: e.target.value })}>
                <button type="button" class="ring-threshold-del" title="Remove" @click=${() => removeAt(ti)}><ha-icon icon="mdi:close" style="--mdc-icon-size:14px"></ha-icon></button></div>`)}
            <button type="button" class="ring-threshold-add" @click=${add}><ha-icon icon="mdi:plus" style="--mdc-icon-size:14px"></ha-icon> ${addLabel}</button>`;
    }
    _renderButtonRow(button, idx, total, containerIdx) {
        const expanded = this._expandedButton === idx;
        const isFree = (button.position || "").toString().toLowerCase() === "custom";
        const isFc = !!button.forecast;
        const buttonType = button.type || "";
        const posBadge = isFree
            ? html`<span class="button-badge-free"><ha-icon icon="mdi:cursor-move"></ha-icon></span>`
            : html`<span class="button-badge-row"><ha-icon icon="mdi:view-grid-outline"></ha-icon></span>`;
        if (!expanded) {
            return this._renderListRow({
                idx, total, expanded, body: "", badge: posBadge, title: this._buttonTitle(button),
                onToggle: () => this._toggleButtonExpanded(idx), onMoveUp: () => this._moveButton(containerIdx, idx, -1),
                onMoveDown: () => this._moveButton(containerIdx, idx, 1), onDuplicate: () => this._duplicateButton(containerIdx, idx), onRemove: () => this._removeButton(containerIdx, idx)});}
                const entityId = (button.entity || "").toString().trim();
        const hasEntity = !!entityId;
        const fcEntityMissing = isFc && entityId && !entityId.startsWith("weather.");
        const cardWeatherEntity = (this._config && this._config.weather_entity) || "";
        const update = (next) => this._updateButtonAt(containerIdx, idx, next);
        const buttonForm = (schema) => html`<ha-form .hass=${this.hass} .data=${button}
                .schema=${schema} .computeLabel=${this._buttonLabel} .computeHelper=${this._buttonHelper}
                @value-changed=${(e) => { e.stopPropagation(); update((e.detail && e.detail.value) || {}); }}></ha-form>`;
                const container = this._getContainers()[containerIdx] || {};
                const BTN_INHERIT = { text_size: "button_text_size", icon_size: "button_icon_size",
            padding: "button_padding", icon_padding: "button_icon_padding",
            inner_gap: "button_gap", text_gap: "button_text_gap" };
        const cssField = (key, label, placeholder) => this._cssTextField({
            value: button[key], label, placeholder, trim: true,
            inherit: BTN_INHERIT[key] ? container[BTN_INHERIT[key]] : undefined,
            onCommit: (v) => { const next = { ...button }; if (v) next[key] = v; else delete next[key]; update(next); },
        });
        const _r = (buttonKey, containerKey) => button[buttonKey] !== undefined ? button[buttonKey] : (container[containerKey] !== undefined ? container[containerKey] : undefined);
        const fmt = (_r("style", "button_style") || "inline").toString().toLowerCase() === "vertical" ? "vertical" : "inline";
        const fcOff = parseInt(button.forecast_offset, 10) || 0;
                const st = this.hass && this.hass.states && this.hass.states[entityId];
        const stAttr = st && st.attributes;
                const elements = Array.isArray(button.elements) && button.elements.length
            ? button.elements.map(e => (e && typeof e === "object") ? e : {})
            : [{ kind: "text" }];
        const commitElements = (arr) => {
            const n = { ...button };
            if (!arr.length) delete n.elements;
            else n.elements = arr;
            update(n);
        };
        const updateEl = (ei, nextEl) => commitElements(elements.map((e, i) => i === ei ? nextEl : e));
                const containerFmtNow = (container.button_style || "inline").toString().toLowerCase() === "vertical" ? "vertical" : "inline";
        const formatPicker = this._renderLayoutPicker(fmt, (f) => {
            const n = { ...button };
            if (f === containerFmtNow) delete n.style; else n.style = f;
            update(n);
        });
                const nestedOpen = this._getNestedOpen(containerIdx, idx);
        const setNested = (v) => { this._setNestedOpen(containerIdx, idx, v); this.requestUpdate(); };
        const moveEl = (ei, dir) => {
            const arr = [...elements]; const ni = ei + dir;
            if (ni < 0 || ni >= arr.length) return;
            [arr[ei], arr[ni]] = [arr[ni], arr[ei]];
            if (nestedOpen === `el-${ei}`) setNested(`el-${ni}`); else if (nestedOpen === `el-${ni}`) setNested(`el-${ei}`);
            commitElements(arr);
        };
        const removeEl = (ei) => {
            const arr = [...elements]; arr.splice(ei, 1);
            if (nestedOpen === `el-${ei}`) setNested(null);
            commitElements(arr);
        };
        const addEl = (kind) => {
            const seed = kind === "bar" ? { kind: "bar" } : kind === "icon" ? { kind: "icon" } : { kind: "text" };
            setNested(`el-${elements.length}`);
            commitElements([...elements, seed]);
        };
        const elReorder = (ei) => html`<span class="vcb-reorder" @click=${(e) => e.stopPropagation()}>
            <button type="button" ?disabled=${ei === 0} @click=${() => moveEl(ei, -1)} title="Move up"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
            <button type="button" ?disabled=${ei === elements.length - 1} @click=${() => moveEl(ei, 1)} title="Move down"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
            <button type="button" @click=${() => removeEl(ei)} title="Remove"><ha-icon icon="mdi:close"></ha-icon></button></span>`;
                const iconElContent = (el, ei) => {
            const isWeatherIcon = (el.icon || "").toString().trim().toLowerCase() === "weather";
            const patchEl = (patch, strip) => { const n = { ...el, ...patch }; if (strip) for (const k of strip) delete n[k]; updateEl(ei, n); };
            const EL_INHERIT = { icon_size: ["icon_size", "button_icon_size"], icon_padding: ["icon_padding", "button_icon_padding"] };
            const elCss = (key, label, placeholder) => {
                const ch = EL_INHERIT[key];
                const inherit = ch ? (button[ch[0]] !== undefined && button[ch[0]] !== "" ? button[ch[0]] : container[ch[1]]) : undefined;
                return this._cssTextField({
                    value: el[key], label, placeholder, trim: true, inherit,
                    onCommit: (v) => { const n = { ...el }; if (v) n[key] = v; else delete n[key]; updateEl(ei, n); } });
            };
            return html`${isWeatherIcon ? html`<div class="weather-icon-active">
                    <ha-icon icon="mdi:weather-partly-cloudy" style="--mdc-icon-size:20px;color:var(--primary-color)"></ha-icon>
                    <div class="weather-icon-active-text"><span>Weather icon</span><span class="weather-icon-active-sub">${isFc ? "Matches forecast" : "Matches weather"}</span></div>
                    <button type="button" class="icon-weather-btn" @click=${() => patchEl({}, ["icon"])}>Remove</button></div>`
                : html`<div class="icon-combo">
                    <ha-form style="flex:1;min-width:0" .hass=${this.hass} .data=${{ icon: el.icon || "" }}
                        .schema=${[{ name: "icon", selector: { icon: {} } }]} .computeLabel=${() => ""}
                        @value-changed=${(e) => { e.stopPropagation(); const v = (e.detail && e.detail.value && e.detail.value.icon) || ""; const n = { ...el }; if (v) n.icon = v; else delete n.icon; updateEl(ei, n); }}></ha-form>
                    <button type="button" class="icon-weather-btn" title="Weather icon" @click=${() => patchEl({ icon: "weather" })}><ha-icon icon="mdi:weather-partly-cloudy" style="--mdc-icon-size:18px"></ha-icon></button></div>`}
                <div class="clearable-field">
                    <ha-form .hass=${this.hass} .data=${{ icon_path: el.icon_path || "" }} .schema=${[{ name: "icon_path", selector: { text: {} } }]} .computeLabel=${() => LABELS.icon_path || "Icon folder"}
                        @value-changed=${(e) => { e.stopPropagation(); const v = (e.detail && e.detail.value && e.detail.value.icon_path) || ""; const n = { ...el }; if (v) n.icon_path = v; else delete n.icon_path; updateEl(ei, n); }}></ha-form>
                    ${el.icon_path ? html`<button type="button" class="clear-btn" title="Clear" @click=${() => patchEl({}, ["icon_path"])}><ha-icon icon="mdi:close"></ha-icon></button>` : ""}</div>
                <div class="vcb-grid">${elCss("icon_size", "Size", "auto")}${elCss("icon_padding", "Padding", "auto")}</div>
                <div class="toggle-group"><label class="toggle-row"><span>Background</span>
                    <ha-switch .checked=${el.icon_background === true}
                        @change=${(e) => { const n = { ...el }; if (e.target.checked) n.icon_background = true; else { if (el.icon_background !== undefined) n.icon_background = false; else delete n.icon_background; } updateEl(ei, n); }}></ha-switch></label></div>
                ${el.icon_background === true ? this._renderColorPicker("Color", el.icon_background_color || "", (h, o) => { const n = { ...el }; if (!h) delete n.icon_background_color; else n.icon_background_color = this._serializeColor(h, o); updateEl(ei, n); }) : ""}`;
        };
        const entitySection = isFc ? "" : buttonForm([{ name: "entity", selector: { entity: {} } }]);
        const emptyNudge = !hasEntity && !isFc ? html`<div class="button-nudge info"><ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon> Pick an entity.</div>` : "";
                const secOpen = this._getSecOpen(containerIdx, idx);
        const setSec = (v) => { this._setSecOpen(containerIdx, idx, v); this.requestUpdate(); };
                const txtField = (txt, ei, key, label, placeholder, keepEmpty) => this._cssTextField({
            value: txt[key], label, placeholder, trim: !keepEmpty,
            inherit: key === "size"
                ? (button.text_size !== undefined && button.text_size !== "" ? button.text_size : container.button_text_size)
                : undefined,
            onCommit: (v) => { const n = { ...txt };
                if (keepEmpty) n[key] = v; else if (v) n[key] = v; else delete n[key];
                updateEl(ei, n); },
        });
        const txtForm = (txt, ei, key, schema, label) => html`<ha-form .hass=${this.hass} .data=${{ [key]: txt[key] || "" }}
            .schema=${schema} .computeLabel=${() => label}
            @value-changed=${(e) => { e.stopPropagation(); const v = e.detail && e.detail.value && e.detail.value[key]; const n = { ...txt }; if (v) n[key] = v; else delete n[key]; updateEl(ei, n); }}></ha-form>`;
        const _isNumericEntity = (eid) => {
            const s = this.hass && this.hass.states && this.hass.states[eid];
            if (!s) return false;
            if (s.attributes && s.attributes.state_class) return true;
            if (s.attributes && s.attributes.device_class === "temperature") return true;
            const v = parseFloat(s.state);
            return isFinite(v);
        };
        const _isNumericAttr = (eid, attr) => {
            const s = this.hass && this.hass.states && this.hass.states[eid];
            if (!s || !attr) return false;
            const v = s.attributes && s.attributes[attr];
            return v != null && isFinite(parseFloat(v));
        };
        const textElContent = (txt, ei) => {
            const txtEntityId = (txt.entity || "").toString().trim();
            const fcNumeric = isFc && !txtEntityId && txt.attribute && txt.attribute !== "condition" && txt.attribute !== "datetime";
            let showPrecision = fcNumeric;
            if (!showPrecision && txtEntityId) {
                showPrecision = txt.attribute ? _isNumericAttr(txtEntityId, txt.attribute) : _isNumericEntity(txtEntityId);
            } else if (!showPrecision && !txtEntityId && !isFc && hasEntity) {
                showPrecision = txt.attribute ? _isNumericAttr(entityId, txt.attribute) : _isNumericEntity(entityId);
            }
            const wantsEntity = txtEntityId || txt.source === "entity";
            return html`${txtField(txt, ei, "text", "Text", "Static text")}
                ${isFc ? html`<div class="segmented segmented-compact" role="radiogroup" aria-label="Source">
                    <button type="button" role="radio" class=${!wantsEntity ? "active" : ""}
                        @click=${() => { const n = { ...txt }; delete n.entity; delete n.attribute; delete n.source; updateEl(ei, n); }}>Forecast</button>
                    <button type="button" role="radio" class=${wantsEntity ? "active" : ""}
                        @click=${() => { const n = { ...txt }; n.source = "entity"; delete n.attribute; updateEl(ei, n); }}>Entity</button></div>` : ""}
                ${!isFc || wantsEntity ? txtForm(txt, ei, "entity", [{ name: "entity", selector: { entity: {} } }], "Entity") : ""}
                ${txtEntityId ? txtForm(txt, ei, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: txtEntityId } } }], "Attribute")
                    : isFc && !wantsEntity ? txtForm(txt, ei, "attribute", [{ name: "attribute", selector: { select: { mode: "dropdown", options: FC_TEXT_ATTRIBUTES } } }], "Show")
                    : !isFc && hasEntity ? txtForm(txt, ei, "attribute", [{ name: "attribute", selector: { attribute: { entity_id: entityId } } }], "Attribute") : ""}
                ${showPrecision ? (() => { const prec = txt.precision !== undefined ? txt.precision : 0;
                    const setPrec = (v) => { const n = { ...txt }; if (v >= 0) n.precision = v; else delete n.precision; updateEl(ei, n); };
                    return this._slider({ value: prec, fallback: 0, min: 0, max: 2, step: 1, int: true, label: "Decimals", onCommit: setPrec });
                })() : ""}
                <div class="vcb-grid">${txtField(txt, ei, "format", "Custom unit", "", true)}${txtField(txt, ei, "size", "Size", "auto")}</div>
                <div class="segmented segmented-compact" role="radiogroup">
                    ${[{v:"",l:"Normal"},{v:"500",l:"Medium"},{v:"600",l:"Semibold"},{v:"700",l:"Bold"}].map(o => html`<button type="button" role="radio" class=${(txt.weight||"")===o.v?"active":""}
                        @click=${()=>{const n={...txt};if(o.v)n.weight=o.v;else delete n.weight;updateEl(ei,n);}}>${o.l}</button>`)}</div>
                ${txtForm(txt, ei, "overflow", [{ name: "overflow", selector: { select: { mode: "dropdown", options: OPT.button_overflow } } }], "Overflow")}
                <div class="toggle-group"><label class="toggle-row"><span>Fancy unit</span>
                    <ha-switch .checked=${txt.fancy_unit === true} @change=${(e) => { const n = { ...txt }; if (e.target.checked) n.fancy_unit = true; else delete n.fancy_unit; updateEl(ei, n); }}></ha-switch></label></div>`;
        };
        const section = (key, icon, title, content, hidden) => {
            const isOpen = secOpen === key;
            return html`<div class="vcb-section ${hidden ? 'dimmed' : ''}">
                <div class="vcb-section-head ${isOpen ? 'open' : ''}" @click=${() => setSec(isOpen ? null : key)}>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    <ha-icon icon=${icon}></ha-icon>
                    <span class="vcb-section-title">${title}</span></div>
                ${isOpen ? html`<div class="vcb-section-body">${content}</div>` : ""}</div>`;};
                const elKindIcon = (k) => k === "icon" ? "mdi:image-outline" : k === "bar" ? "mdi:chart-bar" : "mdi:text-short";
        const elTitle = (el) => {
            if (el.kind === "icon") return (el.icon || "").toString().trim().toLowerCase() === "weather" ? "Weather icon" : (el.icon ? el.icon : "Icon");
            if (el.kind === "bar") return "Bar";
            return this._textTitle(button, el);
        };
                const typePicker = html`<div class="button-type-picker">
            <button type="button" class="button-type-btn ${!isFc ? "active" : ""}"
                @click=${() => { const n = { ...button }; delete n.forecast; delete n.forecast_offset; update(n); }}
            ><ha-icon class="button-type-icon ${!isFc ? "active-icon" : ""}" icon="mdi:gauge"></ha-icon>
                <div class="button-type-text"><span class="button-type-name">Sensor</span><span class="button-type-desc">Live entity</span></div></button>
            <button type="button" class="button-type-btn ${isFc ? "active" : ""}"
                @click=${() => { const cur = entityId; const ent = (cur && cur.startsWith("weather.")) ? cur : (cardWeatherEntity || cur);
                    const n = { ...button, forecast: "daily", forecast_offset: 0 }; delete n.attribute;
                    if (!Array.isArray(n.elements) || !n.elements.some(e => e && e.kind === "text" && Object.keys(e).length > 1)) {
                        n.elements = [{ kind: "icon", icon: "weather" }, { kind: "text", attribute: "temperature" }];
                    }
                    if (ent) n.entity = ent; update(n); }}
            ><ha-icon class="button-type-icon ${isFc ? "active-icon" : ""}" icon="mdi:calendar-clock"></ha-icon>
                <div class="button-type-text"><span class="button-type-name">Forecast</span><span class="button-type-desc">Weather</span></div></button></div>`;
        const fcSettings = isFc && !fcEntityMissing ? html`<div class="segmented" role="radiogroup">
                    ${[{v:"daily",l:"Daily"},{v:"hourly",l:"Hourly"}].map(o=>html`<button type="button" role="radio" class=${button.forecast===o.v?"active":""}
                        @click=${()=>update({...button,forecast:o.v,forecast_offset:0})}>${o.l}</button>`)}</div>
                ${(()=>{const mx=button.forecast==="hourly"?23:6,lb=button.forecast==="hourly"?"Hours ahead":"Days ahead",
                    hp=button.forecast==="hourly"?(fcOff===0?"Now":`+${fcOff}h`):(fcOff===0?"Today":fcOff===1?"Tomorrow":`+${fcOff} days`);
                    return this._slider({ value: fcOff, fallback: 0, min: 0, max: mx, step: 1, int: true, label: lb, helper: hp,
                        onCommit: (v) => update({ ...button, forecast_offset: v }) });})()}` : null;
        const fcMissingHint = isFc && fcEntityMissing ? html`<div class="button-nudge warning" style="margin-top:var(--origami-e-s2)"><ha-icon icon="mdi:alert-circle-outline" style="--mdc-icon-size:14px;flex-shrink:0"></ha-icon> Forecast needs a weather entity.</div>` : null;
        let forecastContent = null;
        if (isFc) {
            const fcEntity = buttonForm([{ name: "entity", selector: { entity: { domain: "weather" } } }]);
            forecastContent = html`${fcEntity}${fcMissingHint}${fcSettings}`;
        }
                const hasMarqueeText = elements.some(t => t && t.kind === "text" && ((t.overflow) || "").toString().toLowerCase() === "marquee");
        const marqueeContent = hasMarqueeText ? html`<div class="toggle-group"><label class="toggle-row"><span>Right-to-left</span>
                <ha-switch .checked=${button.marquee_rtl === true} @change=${(e) => { const n = { ...button }; if (e.target.checked) n.marquee_rtl = true; else delete n.marquee_rtl; update(n); }}></ha-switch></label></div>
            ${(() => { const spd = parseFloat(button.marquee_speed) || 30;
                return this._slider({ value: spd, fallback: 30, min: 5, max: 100, step: 5, int: true, label: "Speed",
                    onCommit: (v) => update({ ...button, marquee_speed: v }) });})()}` : null;
                const containerAlign = (container.align || "start").toString().toLowerCase();
        const appearContent = html`${formatPicker}
            <div class="segmented" role="radiogroup" aria-label="Inside button">
                ${[{v:"start",l:"Left"},{v:"center",l:"Center"},{v:"end",l:"Right"},{v:"spread",l:"Spread"}].map(o => html`<button type="button" role="radio" class=${(button.align || containerAlign)===o.v?"active":""}
                    @click=${()=>{const n={...button};if(o.v===containerAlign)delete n.align;else n.align=o.v;update(n);}}>${o.l}</button>`)}</div>
            <div class="toggle-group">
                <label class="toggle-row"><span>Background</span><ha-switch .checked=${button.background !== false}
                    @change=${(e) => { const n = { ...button }; if (!e.target.checked) n.background = false; else delete n.background; update(n); }}></ha-switch></label>
                ${button.background !== false ? html`<label class="toggle-row"><span>Blurred</span><ha-switch .checked=${button.blurred_background === true}
                    @change=${(e) => { const n = { ...button }; if (e.target.checked) n.blurred_background = true; else delete n.blurred_background; update(n); }}></ha-switch></label>` : ""}
                <label class="toggle-row"><span>Round shape</span><ha-switch .checked=${button.button_round === true}
                    @change=${(e) => { const n = { ...button }; if (e.target.checked) n.button_round = true; else delete n.button_round; update(n); }}></ha-switch></label>
                <label class="toggle-row"><span>Shadow</span><ha-switch .checked=${button.shadow !== false}
                    @change=${(e) => { const n = { ...button }; if (!e.target.checked) n.shadow = false; else delete n.shadow; update(n); }}></ha-switch></label>
                <label class="toggle-row"><span>Text shadow</span><ha-switch .checked=${button.text_shadow === true}
                    @change=${(e) => { const n = { ...button }; if (e.target.checked) n.text_shadow = true; else delete n.text_shadow; update(n); }}></ha-switch></label></div>
            ${button.background !== false ? this._renderColorPicker("Button color", button.background_color || "", (h, o) => { const next = { ...button }; if (!h) delete next.background_color; else next.background_color = this._serializeColor(h, o); update(next); }) : ""}
            <div class="vcb-grid">
                ${cssField("width", "Width", "auto")}${cssField("height", "Height", "auto")}
                ${cssField("text_size", "Text size", "auto")}${cssField("padding", "Padding", "auto")}
                ${cssField("inner_gap", "Button gap", "auto")}${cssField("text_gap", "Text gap", "auto")}</div>
            <div class="toggle-group"><label class="toggle-row"><span>Color thresholds</span>
                <ha-switch .checked=${Array.isArray(button.color_thresholds) && button.color_thresholds.length > 0}
                    @change=${(e) => { const n = { ...button }; if (e.target.checked) n.color_thresholds = [{ value: "", color: "#ff9800" }]; else { delete n.color_thresholds; delete n.color_threshold_entity; delete n.color_threshold_attribute; } update(n); }}></ha-switch></label></div>
            ${Array.isArray(button.color_thresholds) && button.color_thresholds.length > 0 ? html`<div class="field-group">
                <details class="disclosure" @toggle=${this._onDisclosureToggle}><summary><ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon><ha-icon icon="mdi:cog-outline"></ha-icon><span>Threshold entity</span></summary>
                    <div class="disclosure-body">
                        <ha-form .hass=${this.hass} .data=${{color_threshold_entity:button.color_threshold_entity||""}} .schema=${[{name:"color_threshold_entity",selector:{entity:{}}}]} .computeLabel=${()=>"Entity"}
                            @value-changed=${(e)=>{e.stopPropagation();const v=e.detail&&e.detail.value&&e.detail.value.color_threshold_entity;const n={...button};if(v)n.color_threshold_entity=v;else delete n.color_threshold_entity;update(n);}}></ha-form>
                        ${(button.color_threshold_entity||"").trim()?html`<ha-form .hass=${this.hass} .data=${{color_threshold_attribute:button.color_threshold_attribute||""}} .schema=${[{name:"color_threshold_attribute",selector:{attribute:{entity_id:button.color_threshold_entity}}}]} .computeLabel=${()=>"Attribute"}
                            @value-changed=${(e)=>{e.stopPropagation();const v=e.detail&&e.detail.value&&e.detail.value.color_threshold_attribute;const n={...button};if(v)n.color_threshold_attribute=v;else delete n.color_threshold_attribute;update(n);}}></ha-form>`:""}</div></details>
                ${this._renderThresholdList({ list: button.color_thresholds, swatchDefault: "#ff9800", addColor: "#ff9800", addLabel: "Add threshold",
                    commit: (arr) => update({ ...button, color_thresholds: arr }) })}</div>` : ""}`;
                const gaugeFields = (prefix, obj, read, write, cssFor) => {
            const p = prefix + "_", label = prefix === "ring" ? "Ring" : "Bar";
            const thresholds = Array.isArray(obj[p+"thresholds"]) ? obj[p+"thresholds"] : [];
            const gaugeEntityId = (obj.gauge_entity || "").toString().trim();
            const gaugeForm = (name, schema, computeLabel, get) => html`<ha-form .hass=${this.hass} .data=${{ [name]: get() }}
                .schema=${schema} .computeLabel=${computeLabel}
                @value-changed=${(e)=>{e.stopPropagation();const v=e.detail&&e.detail.value&&e.detail.value[name];write(name, v);}}></ha-form>`;
            return html`<div class="vcb-grid">${cssFor(p+"min","Min","0")}${cssFor(p+"max","Max","100")}</div>
                <div class="vcb-grid">${prefix==="ring"?html`${cssFor("ring_width","Thickness","4")}${cssFor("ring_gap","Gap","3")}`:html`${cssFor("bar_height","Thickness","4")}`}</div>
                ${this._renderColorPicker(`${label} color`,obj[p+"color"]||"",(h,o)=>{ write(p+"color", h ? this._serializeColor(h,o) : ""); })}
                <details class="disclosure" @toggle=${this._onDisclosureToggle}><summary><ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon><ha-icon icon="mdi:cog-outline"></ha-icon><span>${label} entity</span></summary>
                    <div class="disclosure-body">${gaugeForm("gauge_entity",[{name:"gauge_entity",selector:{entity:{}}}],()=>"Value Entity",()=>obj.gauge_entity||"")}
                        ${gaugeEntityId?gaugeForm("gauge_attribute",[{name:"gauge_attribute",selector:{attribute:{entity_id:gaugeEntityId}}}],()=>"Value Attribute",()=>obj.gauge_attribute||"")
                            :isFc?gaugeForm("gauge_attribute",[{name:"gauge_attribute",selector:{select:{mode:"dropdown",options:FC_ATTRIBUTES}}}],()=>"Forecast attribute",()=>obj.gauge_attribute||""):""}</div></details>
                <details class="disclosure" @toggle=${this._onDisclosureToggle}><summary><ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon><ha-icon icon="mdi:cog-outline"></ha-icon><span>Thresholds</span></summary>
                    <div class="disclosure-body">
                        <div class="segmented" role="radiogroup">${[{v:"solid",l:"Solid"},{v:"segments",l:"Segments"},{v:"gradient",l:"Gradient"}].map(o=>html`<button type="button" role="radio" class=${(obj[p+"threshold_mode"]||"solid")===o.v?"active":""}
                            @click=${()=>{ write(p+"threshold_mode", o.v==="solid" ? "" : o.v); }}>${o.l}</button>`)}</div>
                        ${this._renderThresholdList({ list: thresholds, swatchDefault: "#ff0000", addColor: "#ff9800", addLabel: "Add",
                            commit: (arr) => write(p + "thresholds", arr) })}</div></details>`;};
                const barElContent = (el, ei) => {
            const elCss = (key, label, placeholder) => this._cssTextField({
                value: el[key], label, placeholder, trim: true,
                onCommit: (v) => { const n = { ...el }; if (v) n[key] = v; else delete n[key]; updateEl(ei, n); } });
            const write = (key, value) => { const n = { ...el };
                const empty = value === null || value === undefined || value === "" || (Array.isArray(value) && !value.length);
                if (empty) delete n[key]; else n[key] = value; updateEl(ei, n); };
            return gaugeFields("bar", el, null, write, elCss);
        };
                const isRingType = buttonType === 'ring';
        const ringWrite = (key, value) => { const n = { ...button };
            const empty = value === null || value === undefined || value === "" || (Array.isArray(value) && !value.length);
            if (empty) delete n[key]; else n[key] = value; update(n); };
        const ringContent = html`<div class="toggle-group"><label class="toggle-row"><span>Enable</span>
            <ha-switch .checked=${isRingType} @change=${(e) => { const n = { ...button };
                if (e.target.checked) { n.type = 'ring'; } else { delete n.type; } update(n); }}></ha-switch></label></div>
            ${isRingType ? gaugeFields("ring", button, null, ringWrite, cssField) : ""}`;
                const ANCHORS = ["top-left","top-center","top-right","left","center","right","bottom-left","bottom-center","bottom-right"];
        const currentAnchor = button.position_anchor || "top-left";
        const posContent = html`<div class="toggle-group"><label class="toggle-row"><span>Free positioning</span>
            <ha-switch .checked=${isFree} @change=${(e)=>{const n={...button};if(e.target.checked){n.position="custom";if(!n.position_anchor)n.position_anchor="top-left";}else{["position","position_anchor","position_x","position_y"].forEach(k=>delete n[k]);}update(n);}}></ha-switch></label></div>
            ${isFree ? html`<div class="free-pos-layout"><div><div class="settings-group-label">Anchor</div>
                <div class="anchor-grid" role="radiogroup">${ANCHORS.map(v=>html`<button type="button" role="radio" class="anchor-cell ${currentAnchor===v?"active":""}" title=${v}
                    @click=${()=>update({...button,position_anchor:v})}></button>`)}</div></div>
                <div><div class="settings-group-label">Offset</div><div class="offset-fields">
                    <div class="offset-field"><span class="offset-field-label">X</span><input type="text" placeholder="0" .value=${String(button.position_x||"")}
                        @change=${(e)=>{const n={...button},v=e.target.value.trim();if(v)n.position_x=v;else delete n.position_x;update(n);}}></div>
                    <div class="offset-field"><span class="offset-field-label">Y</span><input type="text" placeholder="0" .value=${String(button.position_y||"")}
                        @change=${(e)=>{const n={...button},v=e.target.value.trim();if(v)n.position_y=v;else delete n.position_y;update(n);}}></div></div></div></div>` : ""}`;
        const tapContent = buttonForm([{ name: "tap_action", selector: { ui_action: {} } }]);
                const BUTTON_STYLE_KEYS = ["style","align","background","blurred_background","icon_background","background_color","icon_background_color","padding","text_size","inner_gap","text_gap","icon_size","icon_padding","width","height","button_round","color_thresholds","color_threshold_entity","color_threshold_attribute","text_shadow","shadow"];
        const hasStyleOverrides = BUTTON_STYLE_KEYS.some(k => button[k] !== undefined && button[k] !== "");
                const isWeatherEntity = entityId.startsWith("weather.");
                const elementSection = (el, ei) => {
            const key = `el-${ei}`;
            const isOpen = nestedOpen === key;
            const body = el.kind === "icon" ? iconElContent(el, ei)
                : el.kind === "bar" ? barElContent(el, ei)
                : textElContent(el, ei);
            return html`<div class="vcb-section">
                <div class="vcb-section-head ${isOpen ? 'open' : ''}" @click=${() => setNested(isOpen ? null : key)}>
                    <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
                    <ha-icon icon=${elKindIcon(el.kind)}></ha-icon>
                    <span class="vcb-section-title">${elTitle(el)}</span>
                    ${elReorder(ei)}</div>
                ${isOpen ? html`<div class="vcb-section-body">${body}</div>` : ""}</div>`;
        };
        const addElBar = html`<div class="vcb-add-el">
            <button type="button" class="add-card-btn" @click=${() => addEl("text")}><ha-icon icon="mdi:text-short"></ha-icon><span>Text</span></button>
            <button type="button" class="add-card-btn" @click=${() => addEl("icon")}><ha-icon icon="mdi:image-outline"></ha-icon><span>Icon</span></button>
            <button type="button" class="add-card-btn" @click=${() => addEl("bar")}><ha-icon icon="mdi:chart-bar"></ha-icon><span>Bar</span></button></div>`;
        const elementsContent = html`
            <div class="vcb-nested-group">${elements.map((el, ei) => elementSection(el, ei))}</div>
            ${addElBar}`;
        const body = html`<div class="vcb">
            ${typePicker}
            ${entitySection}
            ${emptyNudge}
            ${isFc && forecastContent ? section("forecast", "mdi:calendar-clock", "Forecast", forecastContent) : ""}
            ${section("elements", "mdi:view-agenda-outline", "Elements", elementsContent)}
            ${section("ring", "mdi:circle-outline", "Ring", ringContent, !isRingType)}
            ${this._renderDisclosure("Settings", html`<div class="vcb">
                ${section("appear", "mdi:palette-outline", "Appearance", appearContent)}
                ${marqueeContent ? section("marquee", "mdi:motion-play-outline", "Scrolling", marqueeContent) : ""}
                ${section("pos", "mdi:arrow-all", "Position", posContent)}
                ${section("tap", "mdi:gesture-tap", "Tap Action", tapContent)}
                ${section("vis", "mdi:eye-outline", "Visibility", this._renderButtonVisibility(button, containerIdx, idx, update))}
                ${hasStyleOverrides ? html`<button type="button" class="add-card-btn" style="border-style:solid;border-color:rgba(var(--rgb-error-color,211,47,47),0.35);color:var(--error-color);margin-top:var(--origami-e-s3)"
                    @click=${() => { const n = { ...button }; for (const k of BUTTON_STYLE_KEYS) delete n[k]; update(n); }}><ha-icon icon="mdi:restore"></ha-icon><span>Reset all styles</span></button>` : ""}
            </div>`)}
        </div>`;
        return this._renderListRow({ idx, total, expanded, body, badge: posBadge, title: this._buttonTitle(button),
            onToggle: () => this._toggleButtonExpanded(idx), onMoveUp: () => this._moveButton(containerIdx, idx, -1),
            onMoveDown: () => this._moveButton(containerIdx, idx, 1), onDuplicate: () => this._duplicateButton(containerIdx, idx), onRemove: () => this._removeButton(containerIdx, idx)});}
    _parseColor(raw) {
        const s = (raw || "").toString().trim();
        const m = s.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i);
        if (m) {
            const hex = `#${parseInt(m[1]).toString(16).padStart(2,"0")}${parseInt(m[2]).toString(16).padStart(2,"0")}${parseInt(m[3]).toString(16).padStart(2,"0")}`;
            return { hex, opacity: m[4] !== undefined ? parseFloat(m[4]) : 1, hasColor: true };}
        if (/^#[0-9a-f]{3,8}$/i.test(s)) return { hex: s.slice(0,7), opacity: 1, hasColor: true };
        return { hex: "#ffffff", opacity: 0, hasColor: false };}
    _serializeColor(hex, opacity) {
        if (opacity >= 1) return hex;
        const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
        return `rgba(${r},${g},${b},${parseFloat(opacity.toFixed(2))})`;}
    _nudgeColorInput(e) {
        const el = e.currentTarget || e.target;
        const v = (el.value || "#ffffff").toLowerCase();
        const b = parseInt(v.slice(5,7),16);
        el.value = v.slice(0,5) + ((b ^ 1) >>> 0).toString(16).padStart(2,"0");}
    _renderColorPicker(label, raw, onWrite) {
        const { hex, opacity, hasColor } = this._parseColor(raw);
        return html`<div class="button-color-box">
                <div class="button-color-row">
                    <ha-icon icon="mdi:palette-outline" style="--mdc-icon-size:15px;color:var(--secondary-text-color);flex-shrink:0"></ha-icon>
                    <span class="button-color-label">${label}</span>
                    <input type="color" class="button-color-swatch" .value=${hex}
                        @mousedown=${(e) => this._nudgeColorInput(e)}
                        @input=${(e) => onWrite(e.target.value, opacity || 1)}
                        @change=${(e) => onWrite(e.target.value, opacity || 1)}
                    >
                    ${hasColor ? html`<button type="button" class="button-color-clear" title="Clear color" @click=${() => onWrite("", 1)}
                    ><ha-icon icon="mdi:close" style="--mdc-icon-size:14px"></ha-icon></button>` : ""}</div>
                ${hasColor ? html`<div class="button-color-opacity-row"> <span class="button-color-opacity-label">Opacity</span> <input type="range" min="0" max="1" step="0.05" class="button-color-opacity"
                            .value=${String(opacity)}
                            @input=${(e) => onWrite(hex, parseFloat(e.target.value))}
                        >
                        <span class="button-color-opacity-val">${Math.round(opacity*100)}%</span></div>
                ` : ""}</div>`;}
    _slider(opts) {
                                        const { min, max, step = 1, label, helper, statusFn, onCommit } = opts;
        const int = opts.int === true;
        const parse = int ? (v) => parseInt(v, 10) : (v) => parseFloat(v);
        const fallbackNum = parse(opts.fallback != null ? opts.fallback : min);
        const fb = isFinite(fallbackNum) ? fallbackNum : min;
        const clamp = (v) => Math.min(max, Math.max(min, isFinite(v) ? v : fb));
        const raw = opts.value != null && opts.value !== "" ? parse(opts.value) : fb;
        const val = clamp(isFinite(raw) ? raw : fb);
        const toPct = (v) => Math.round(((v - min) / (max - min)) * 100);
        const wrapOf = (e) => e.target.closest(".wbk-slider");
        const mirror = (wrap, sel, v) => { const el = wrap && wrap.querySelector(sel); if (el) el.value = v; };
        const onDrag = (e) => {
            const v = parse(e.target.value), wrap = wrapOf(e);
            e.target.style.setProperty("--origami-slider-pct", toPct(v) + "%");
            mirror(wrap, ".wbk-slider-num", v);
            if (statusFn) { const s = wrap && wrap.querySelector(".wbk-slider-status"); if (s) s.textContent = statusFn(v); }
        };
        const onRangeCommit = (e) => onCommit(clamp(parse(e.target.value)));
        const onRangeClick = (e) => onCommit(clamp(parse(e.target.value)));
        const onNumCommit = (e) => {
            const v = clamp(parse(e.target.value));
            const wrap = wrapOf(e), range = wrap && wrap.querySelector(".wbk-slider-range");
            if (range) { range.value = v; range.style.setProperty("--origami-slider-pct", toPct(v) + "%"); }
            onCommit(v);
        };
        const statusText = statusFn ? statusFn(val) : null;
        return html`<div class="wbk-slider">
                <div class="wbk-slider-head">
                    <span class="wbk-slider-label">${label}</span>
                    <input type="number" class="wbk-slider-num" min=${min} max=${max} step=${step}
                        .value=${String(val)} @change=${onNumCommit}></div>
                <input type="range" class="wbk-slider-range" min=${min} max=${max} step=${step}
                    .value=${String(val)} style="--origami-slider-pct:${toPct(val)}%"
                    @input=${onDrag} @change=${onRangeCommit} @click=${onRangeClick}>
                ${statusText != null ? html`<div class="wbk-slider-status">${statusText}</div>` : ""}
                ${helper ? html`<div class="wbk-slider-helper">${helper}</div>` : ""}</div>`;}
    _renderSlider(field, label, min, max, step, helper, statusFn) {
        return this._slider({
            value: this._formData[field], fallback: DISPLAY_DEFAULTS[field] != null ? DISPLAY_DEFAULTS[field] : min,
            min, max, step, label, helper, statusFn,
            onCommit: (v) => this._updateField(field, v),
        });}
    _alignGlyph(value, axis) {
                        const h = { "": "mdi:format-align-left", center: "mdi:format-align-center", end: "mdi:format-align-right",
            between: "mdi:arrow-expand-horizontal", around: "mdi:dots-horizontal", evenly: "mdi:distribute-horizontal-center",
            start: "mdi:format-align-left", stretch: "mdi:arrow-expand-horizontal", baseline: "mdi:format-text" };
        const v = { "": "mdi:align-vertical-center", start: "mdi:align-vertical-top", center: "mdi:align-vertical-center",
            end: "mdi:align-vertical-bottom", stretch: "mdi:arrow-expand-vertical", baseline: "mdi:format-text",
            between: "mdi:arrow-expand-vertical", around: "mdi:dots-vertical", evenly: "mdi:distribute-vertical-center" };
        const icon = (axis === "v" ? v : h)[value] || "mdi:circle-small";
        return html`<ha-icon icon=${icon} style="--mdc-icon-size:16px"></ha-icon>`;}
    _renderLayoutPicker(fmt, onPick) {
                        return html`<div class="layout-picker">
            ${["inline", "vertical"].map(f => html`<button type="button"
                    class="layout-card ${fmt === f ? "active" : ""}" @click=${() => onPick(f)}>
                    <div class="lp-fig ${f}">
                        <div class="lp-sq"></div>
                        <div class="lp-txt"><div class="lp-bar lg"></div><div class="lp-bar sm"></div></div>
                    </div></button>`)}</div>`;}
    _renderCompactField(field, placeholder) {
        const current = String(this._formData[field] || ""), label = LABELS[field] || field;
        return html`<div class="compact-field">
                <span class="compact-field-label">${label}</span>
                <input
                    type="text"
                    placeholder=${placeholder}
                    .value=${current}
                    @change=${(e) => this._updateField(field, e.target.value || "")}
                ></div>`;}
    _renderContainerButtonSettings(container, containerIdx) {
        const uf = (key, value) => this._updateContainerField(containerIdx, key, value);
        const sf = (key, label, placeholder) => this._cssTextField({
            value: container[key], label, placeholder, trim: false,
            onCommit: (v) => uf(key, v || ""),
        });
        const bgActive = !!container.background;
        return html`<div class="vcb">
            ${this._renderSubDisclosure("Background", html`<div class="vcb">
                <div class="toggle-group">
                    <label class="toggle-row"><span>Background</span>
                        <ha-switch .checked=${bgActive}
                            @change=${(e) => uf("background", e.target.checked || "")}
                        ></ha-switch></label>
                    ${bgActive ? html`<label class="toggle-row"><span>Blurred</span>
                        <ha-switch .checked=${container.blurred_background === true}
                            @change=${(e) => uf("blurred_background", e.target.checked || "")}
                        ></ha-switch></label>` : ""}
                    <label class="toggle-row"><span>Shadow</span>
                        <ha-switch .checked=${container.shadow !== false}
                            @change=${(e) => uf("shadow", e.target.checked ? "" : false)}
                        ></ha-switch></label>
                    <label class="toggle-row"><span>Icon background</span>
                        <ha-switch .checked=${container.button_icon_background === true}
                            @change=${(e) => uf("button_icon_background", e.target.checked ? true : "")}
                        ></ha-switch></label>
                    </div>
                ${bgActive ? this._renderContainerColorPicker(containerIdx, "button_background_color", "Button color") : ""}
                ${container.button_icon_background === true ? this._renderContainerColorPicker(containerIdx, "button_icon_background_color", "Icon color") : ""}</div>`)}
            ${this._renderSubDisclosure("Size & spacing", html`<div class="vcb">
                <div class="vcb-grid">
                    ${sf("button_text_size", "Text size", "auto")}
                    ${sf("button_icon_size", "Icon size", "auto")}
                    ${sf("button_padding", "Button padding", "auto")}
                    ${sf("button_icon_padding", "Icon padding", "auto")}
                    ${sf("button_gap", "Button gap", "auto")}
                    ${sf("button_text_gap", "Text gap", "auto")}</div></div>`)}</div>`; }
    _renderContentLayoutDisclosure() {
        const isRow = ((this._formData || {}).content_direction || "column") === "row";
        const alignOpts = isRow ? [
            { value: "", label: "Left (default)" }, { value: "end", label: "Right" },
            { value: "center", label: "Center" }, { value: "between", label: "Space between" },
            { value: "around", label: "Space around" }, { value: "evenly", label: "Space evenly" }
        ] : OPT.content_align;
        const crossOpts = isRow ? [
            { value: "", label: "Top (default)" }, { value: "center", label: "Center" }, { value: "end", label: "Bottom" },
            { value: "stretch", label: "Stretch" }, { value: "baseline", label: "Baseline" }
        ] : [
            { value: "", label: "Stretch (default)" }, { value: "start", label: "Left" },
            { value: "center", label: "Center" }, { value: "end", label: "Right" }
        ];
        return this._renderDisclosure("Content layout", html`<div class="settings-group">
            <ha-form .hass=${this.hass}
                .data=${{ content_direction: (this._formData || {}).content_direction || "column" }}
                .schema=${[{ name: "content_direction", selector: { select: { mode: "dropdown", options: OPT.content_direction } } }]}
                .computeLabel=${this._computeLabel}
                @value-changed=${(e) => { e.stopPropagation(); const v = e.detail && e.detail.value && e.detail.value.content_direction; this._updateField("content_direction", v === "row" ? "row" : ""); }}
            ></ha-form>
            <ha-form .hass=${this.hass}
                .data=${{ content_align: (this._formData || {}).content_align || "" }}
                .schema=${[{ name: "content_align", selector: { select: { mode: "dropdown", options: alignOpts } } }]}
                .computeLabel=${() => isRow ? "Horizontal alignment" : "Vertical alignment"}
                @value-changed=${(e) => { e.stopPropagation(); const v = e.detail && e.detail.value && e.detail.value.content_align; this._updateField("content_align", v || ""); }}
            ></ha-form>
            <ha-form .hass=${this.hass}
                .data=${{ content_align_items: (this._formData || {}).content_align_items || "" }}
                .schema=${[{ name: "content_align_items", selector: { select: { mode: "dropdown", options: crossOpts } } }]}
                .computeLabel=${() => isRow ? "Vertical alignment" : "Horizontal alignment"}
                @value-changed=${(e) => { e.stopPropagation(); const v = e.detail && e.detail.value && e.detail.value.content_align_items; this._updateField("content_align_items", v || ""); }}
            ></ha-form></div>`);
    }
    _renderButtonContainersEditor() {
        const areas = this._getContainers();
        return html`
            <div class="sensor-list">
                ${areas.map((container, ai) => {
                    const expanded = this._expandedContainer === ai;
                    const isCard = !!container.custom_cards;
                    const title = this._containerTitle(container, ai);
                    const label = isCard ? "Card" : "Buttons";
                    const body = expanded ? (isCard ? this._renderCardContainerBody(container, ai) : this._renderButtonContainerBody(container, ai)) : "";
                    return this._renderListRow({
                        idx: ai, total: areas.length, expanded, body,
                        title: html`<span class="row-title-main">${label}</span><span class="row-title-meta">${title}</span>`,
                        onToggle:    () => { this._expandedContainer = this._expandedContainer === ai ? null : ai; this._expandedButton = null; this._expandedCard = null; },
                        onMoveUp:    () => this._moveContainer(ai, -1),
                        onMoveDown:  () => this._moveContainer(ai, 1),
                        onDuplicate: () => this._duplicateContainer(ai),
                        onRemove:    () => this._removeContainer(ai),
                    });
                })}
            </div>
            <div style="display:flex;gap:var(--origami-e-s2)">
                <button type="button" class="add-button-btn" style="flex:1" @click=${() => this._addContainer()}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span>Add Buttons</span></button>
                <button type="button" class="add-card-btn" style="flex:1" @click=${() => this._addCardContainer()}>
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span>Add Card</span></button></div>
            ${this._renderContentLayoutDisclosure()}`;
    }
    _addContainer() {
        const areas = [...this._getContainers(), {}];
        this._expandedContainer = areas.length - 1;
        this._expandedButton = null;
        this._commitContainers(areas);
    }
    _addCardContainer() {
        const areas = [...this._getContainers(), { custom_cards: [{ type: "entity", entity: "", custom_width: "100%" }] }];
        this._expandedContainer = areas.length - 1;
        this._expandedButton = null;
        this._expandedCard = 0;
        this._commitContainers(areas);
    }
    _renderCardContainerBody(container, containerIdx) {
        return html`
            ${this._renderContainerCustomCardsEditor(containerIdx)}
            ${this._renderDisclosure("Visibility", this._renderContainerVisibility(container, containerIdx))}`;
    }
    _moveContainer(idx, delta) {
        const areas = [...this._getContainers()], target = idx + delta;
        if (target < 0 || target >= areas.length) return;
        [areas[idx], areas[target]] = [areas[target], areas[idx]];
        if (this._expandedContainer === idx) this._expandedContainer = target;
        else if (this._expandedContainer === target) this._expandedContainer = idx;
        this._commitContainers(areas);
    }
    _removeContainer(idx) {
        const areas = [...this._getContainers()]; areas.splice(idx, 1);
        if (this._expandedContainer === idx) this._expandedContainer = null;
        else if (typeof this._expandedContainer === "number" && this._expandedContainer > idx) this._expandedContainer--;
        this._expandedButton = null;
        this._commitContainers(areas);
    }
    _duplicateContainer(idx) {
        const areas = [...this._getContainers()];
        const clone = JSON.parse(JSON.stringify(areas[idx]));
        areas.splice(idx + 1, 0, clone);
        this._expandedContainer = idx + 1;
        this._expandedButton = null;
        this._commitContainers(areas);
    }
    _renderContainerColorPicker(containerIdx, key, label) {
        const container = this._getContainers()[containerIdx] || {};
        const raw = (container[key] || "").toString().trim();
        return this._renderColorPicker(label, raw, (h, o) => {
            this._updateContainerField(containerIdx, key, h ? this._serializeColor(h, o) : "");
        });
    }
    _renderButtonContainerBody(container, containerIdx) {
        const list = this._getButtonsForContainer(containerIdx);
        const uf = (key, value) => this._updateContainerField(containerIdx, key, value);
        let layout = (container.layout || "wrap").toString().toLowerCase();
        const isGrid   = layout === "grid";
        const isScroll = layout === "horizontal-scroll" || layout === "vertical-scroll";
        const bgActive = !!container.background;
        const sf = (key, label, placeholder) => this._cssTextField({
            value: container[key], label, placeholder, trim: false,
            onCommit: (v) => uf(key, v || ""),
        });
        const containerSlider = (key, label, min, max, step, helper) => this._slider({
            value: container[key], fallback: min, min, max, step, label, helper,
            onCommit: (v) => uf(key, v),
        });
        const containerToggle = (toggles) => html`<div class="toggle-group">
                ${toggles.map(t => html`<label class="toggle-row"> <span>${t.label}</span> <ha-switch .checked=${container[t.key] === true}
                            @change=${(e) => uf(t.key, e.target.checked || "")}
                        ></ha-switch></label>`)}</div>`;
        const isVScroll = layout === "vertical-scroll";
        const cFmt = (container.button_style || "inline").toString().toLowerCase() === "vertical" ? "vertical" : "inline";
        const align = (container.align || "start").toString().toLowerCase();
        const containerContent = html`<div class="vcb">
                <div class="segmented" role="radiogroup" aria-label="Layout">
                    ${OPT.button_container_layout.map(o => html`<button type="button" role="radio" class=${layout === o.value ? "active" : ""}
                            @click=${() => uf("layout", o.value)}
                        >${o.label}</button>`)}</div>
                ${isGrid ? containerSlider("columns", LABELS.button_container_columns, 1, 12, 1) : ""}
                ${isScroll ? containerSlider("scroll_count", isVScroll ? "Rows visible" : "Columns visible", 1, 10, 1) : ""}
                <div class="settings-group-label">Arrange buttons</div>
                <div class="vcb-grid">
                    <div class="css-field"><span class="css-field-label">Horizontal</span>
                        <div class="segmented segmented-compact" role="radiogroup" aria-label="Horizontal">
                            ${OPT.justify_content.map(o => html`<button type="button" role="radio" title=${o.label}
                                class=${(container.justify_content || "") === o.value ? "active" : ""}
                                @click=${() => uf("justify_content", o.value)}>${this._alignGlyph(o.value, "h")}</button>`)}</div></div>
                    <div class="css-field"><span class="css-field-label">Vertical</span>
                        <div class="segmented segmented-compact" role="radiogroup" aria-label="Vertical">
                            ${OPT.align_items.map(o => html`<button type="button" role="radio" title=${o.label}
                                class=${(container.align_items || "") === o.value ? "active" : ""}
                                @click=${() => uf("align_items", o.value)}>${this._alignGlyph(o.value, "v")}</button>`)}</div></div></div>
                <div class="settings-group-label">Button style</div>
                ${this._renderLayoutPicker(cFmt, (f) => uf("button_style", f === "inline" ? "" : f))}
                <div class="segmented" role="radiogroup" aria-label="Inside button" style="flex-wrap:nowrap">
                    ${OPT.button_container_align.map(o => html`<button type="button" role="radio" class=${align === o.value ? "active" : ""}
                            @click=${() => uf("align", o.value)}
                        >${o.label}</button>`)}</div>
                <div class="toggle-group">
                    <label class="toggle-row"> <span>${LABELS.button_container_grouped}</span> <ha-switch .checked=${container.grouped === true}
                            @change=${(e) => { const on = e.target.checked; uf("grouped", on || ""); if (on && !bgActive) { uf("background", true); } }}
                        ></ha-switch></label>
                    ${container.grouped === true ? html`<label class="toggle-row"><span>Blurred</span>
                        <ha-switch .checked=${container.blurred_background === true}
                            @change=${(e) => uf("blurred_background", e.target.checked || "")}></ha-switch></label>` : ""}
                    <label class="toggle-row"> <span>${LABELS.button_container_separator}</span> <ha-switch .checked=${container.separator === true}
                            @change=${(e) => uf("separator", e.target.checked || "")}></ha-switch></label></div>
                ${container.grouped === true ? this._renderContainerColorPicker(containerIdx, "background_color", "Group color") : ""}
                <div class="vcb-grid">
                    ${sf("gap", LABELS.button_container_gap, "auto")}
                    ${sf("padding", LABELS.button_container_padding, "auto")}
                    ${sf("margin", LABELS.button_container_margin, "auto")}
                    ${sf("custom_width", LABELS.button_container_width, "auto")}</div></div>`;
        return html`
            <div class="sensor-list">
                ${list.map((button, idx) => this._renderButtonRow(button, idx, list.length, containerIdx))}</div>
            <button type="button" class="add-button-btn" @click=${() => this._addButton(containerIdx)}>
                <ha-icon icon="mdi:plus"></ha-icon>
                <span>Add button</span></button>
            ${this._renderDisclosure("Layout", containerContent)}
            ${this._renderDisclosure("Styles", this._renderContainerButtonSettings(container, containerIdx))}
            ${this._renderDisclosure("Visibility", this._renderContainerVisibility(container, containerIdx))}`;
    }
    _renderVisibilityConditions(conditions, emptyLabel, commitList) {
        const CONDITION_TYPES = [
            { value: "state", label: "State" },
            { value: "numeric_state", label: "Numeric state" },
            { value: "screen", label: "Screen size" },
            { value: "user", label: "User" },
        ];
        const removeCondition = (ci) => {
            const arr = [...conditions]; arr.splice(ci, 1); commitList(arr);
        };
        const updateCondition = (ci, patch) => {
            const arr = [...conditions]; arr[ci] = { ...arr[ci], ...patch }; commitList(arr);
        };
        const addCondition = () => {
            commitList([...conditions, { condition: "state", entity: "", state: "" }]);
        };
        return html`${conditions.map((c, ci) => {
                const cType = c.condition || "state";
                const onTypeChange = (newType) => {
                    const base = { condition: newType };
                    if (newType === "state") { base.entity = c.entity || ""; base.state = ""; }
                    else if (newType === "numeric_state") { base.entity = c.entity || ""; }
                    else if (newType === "screen") { base.media_query = c.media_query || "(min-width: 768px)"; }
                    else if (newType === "user") { base.users = c.users || []; }
                    const arr = [...conditions]; arr[ci] = base; commitList(arr);
                };
                return html`<div class="field-group" style="position:relative">
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--origami-e-s2)">
                        <span class="field-group-label" style="margin:0">Condition ${ci + 1}</span>
                        <button type="button" class="ring-threshold-del" title="Remove" @click=${() => removeCondition(ci)}>
                            <ha-icon icon="mdi:close" style="--mdc-icon-size:14px"></ha-icon></button></div>
                    <div class="segmented segmented-compact" role="radiogroup" aria-label="Condition type">
                        ${CONDITION_TYPES.map(o => html`<button type="button" role="radio"
                            class=${cType === o.value ? "active" : ""}
                            @click=${() => onTypeChange(o.value)}
                        >${o.label}</button>`)}</div>
                    ${cType === "state" ? html`<ha-form .hass=${this.hass}
                            .data=${{ entity: c.entity || "" }}
                            .schema=${[{ name: "entity", selector: { entity: {} } }]}
                            .computeLabel=${() => "Entity"}
                            @value-changed=${(e) => { e.stopPropagation(); updateCondition(ci, { entity: (e.detail && e.detail.value && e.detail.value.entity) || "" }); }}
                        ></ha-form>
                        <div class="css-field-row cols-2">
                            <div class="css-field">
                                <span class="css-field-label">State</span>
                                <input type="text" placeholder="on"
                                    .value=${c.state != null ? String(c.state) : ""}
                                    @change=${(e) => { const v = e.target.value; const arr = [...conditions]; const entry = { ...arr[ci] }; if (v !== "") { entry.state = v; delete entry.state_not; } else { delete entry.state; } arr[ci] = entry; commitList(arr); }}
                                ></div>
                            <div class="css-field">
                                <span class="css-field-label">State not</span>
                                <input type="text" placeholder=""
                                    .value=${c.state_not != null ? String(c.state_not) : ""}
                                    @change=${(e) => { const v = e.target.value; const arr = [...conditions]; const entry = { ...arr[ci] }; if (v !== "") { entry.state_not = v; delete entry.state; } else { delete entry.state_not; } arr[ci] = entry; commitList(arr); }}
                                ></div></div>` : ""}
                    ${cType === "numeric_state" ? html`<ha-form .hass=${this.hass}
                            .data=${{ entity: c.entity || "" }}
                            .schema=${[{ name: "entity", selector: { entity: {} } }]}
                            .computeLabel=${() => "Entity"}
                            @value-changed=${(e) => { e.stopPropagation(); updateCondition(ci, { entity: (e.detail && e.detail.value && e.detail.value.entity) || "" }); }}
                        ></ha-form>
                        <div class="css-field-row cols-2">
                            <div class="css-field">
                                <span class="css-field-label">Above</span>
                                <input type="text" placeholder=""
                                    .value=${c.above != null ? String(c.above) : ""}
                                    @change=${(e) => { const v = e.target.value.trim(); const arr = [...conditions]; if (v !== "") arr[ci] = { ...arr[ci], above: parseFloat(v) }; else { arr[ci] = { ...arr[ci] }; delete arr[ci].above; } commitList(arr); }}
                                ></div>
                            <div class="css-field">
                                <span class="css-field-label">Below</span>
                                <input type="text" placeholder=""
                                    .value=${c.below != null ? String(c.below) : ""}
                                    @change=${(e) => { const v = e.target.value.trim(); const arr = [...conditions]; if (v !== "") arr[ci] = { ...arr[ci], below: parseFloat(v) }; else { arr[ci] = { ...arr[ci] }; delete arr[ci].below; } commitList(arr); }}
                                ></div></div>` : ""}
                    ${cType === "screen" ? html`<div class="css-field">
                            <span class="css-field-label">Media query</span>
                            <input type="text" placeholder="(min-width: 768px)"
                                .value=${c.media_query || ""}
                                @change=${(e) => updateCondition(ci, { media_query: e.target.value.trim() })}
                            ></div>` : ""}
                    ${cType === "user" ? html`<div class="css-field">
                            <span class="css-field-label">User IDs (comma-separated)</span>
                            <input type="text" placeholder="abc123, def456"
                                .value=${Array.isArray(c.users) ? c.users.join(", ") : ""}
                                @change=${(e) => updateCondition(ci, { users: e.target.value.split(",").map(s => s.trim()).filter(Boolean) })}
                            ></div>` : ""}
                </div>`;
            })}
            <button type="button" class="ring-threshold-add" @click=${addCondition}>
                <ha-icon icon="mdi:plus" style="--mdc-icon-size:14px"></ha-icon> Add condition</button>
            ${conditions.length > 0 ? html`<div style="font-size:var(--origami-e-f-meta);color:var(--secondary-text-color);line-height:1.4;margin-top:var(--origami-e-s2)">
                All conditions must be met to be visible.</div>` : ""}`;}
    _renderContainerVisibility(container, containerIdx) {
        const conditions = Array.isArray(container.visibility) ? container.visibility : [];
        return this._renderVisibilityConditions(conditions, "This button container is always visible.", (arr) => {
            const n = { ...container };
            if (arr.length) n.visibility = arr; else delete n.visibility;
            this._updateContainerAt(containerIdx, n);
        });}
    _renderButtonVisibility(button, containerIdx, idx, update) {
        const conditions = Array.isArray(button.visibility) ? button.visibility : [];
        return this._renderVisibilityConditions(conditions, "This button is always visible.", (arr) => {
            const n = { ...button };
            if (arr.length) n.visibility = arr; else delete n.visibility;
            update(n);
        });}
    _renderImagesPanel() {
        const c = this._formData;
        const mode = c.background_mode;
        const showBgFilters = mode === "images" || mode === "default";
        const brightnessStatus = (v) => {
            const pct = Math.round(v * 100);
            if (v < 0.5) return `${pct}% — Very dark`;
            if (v < 0.8) return `${pct}% — Dimmed`;
            if (v < 0.95) return `${pct}% — Slightly dimmed`;
            if (v >= 0.95 && v <= 1.05) return "Default brightness";
            if (v < 1.2) return `${pct}% — Slightly brighter`;
            if (v < 1.5) return `${pct}% — Bright`;
            return `${pct}% — Very bright`;
        };
        const saturationStatus = (v) => {
            const pct = Math.round(v * 100);
            if (v === 0) return "Grayscale";
            if (v < 0.4) return `${pct}% — Desaturated`;
            if (v < 0.8) return `${pct}% — Muted colors`;
            if (v >= 0.95 && v <= 1.05) return "Default intensity";
            if (v < 1.4) return `${pct}% — Vivid colors`;
            if (v < 1.8) return `${pct}% — Very vivid`;
            return `${pct}% — Maximum saturation`;
        };
        const blurStatus = (v) => {
            if (v === 0) return "No blur";
            if (v <= 2) return `${v}px — Subtle`;
            if (v <= 6) return `${v}px — Soft`;
            if (v <= 12) return `${v}px — Strong`;
            return `${v}px — Heavy`;
        };
        return html`
            <div class="fc-box" style="margin-top:0">
                <ha-form
                    .hass=${this.hass}
                    .data=${{ background_mode: mode }}
                    .schema=${[{ name: "background_mode", selector: { select: { mode: "dropdown", options: OPT.visual_mode } } }]}
                    .computeLabel=${this._computeLabel}
                    @value-changed=${(e) => { e.stopPropagation(); const v = e.detail && e.detail.value && e.detail.value.background_mode; if (v && v !== mode) this._setVisualMode(v); }}
                ></ha-form>
            </div>
            ${mode === "images" ? this._renderDisclosure("Weather Images", html`
                <div class="settings-group">
                    ${this._renderClearableText("weather_image_path")}
                    ${this._renderClearableText("weather_image_path_dark")}
                </div>
                <div style="display:flex;flex-direction:column;gap:var(--origami-e-s2);margin-top:var(--origami-e-s3)">
                    ${this._renderSlider("bg_blur", LABELS.bg_blur, 0, 20, 1, null, blurStatus)}
                </div>`) : ""}
            ${this._renderDisclosure("Color Settings", html`
                <div class="fc-box" style="margin-top:0">
                    <div class="section-title"><ha-icon icon="mdi:theme-light-dark" style="--mdc-icon-size:18px"></ha-icon><span>Light / dark mode</span></div>
                    ${this._renderForm(this._colorModeSchema())}
                </div>
                ${showBgFilters ? html`<div style="display:flex;flex-direction:column;gap:var(--origami-e-s2)">
                ${this._renderSlider("bg_brightness", LABELS.bg_brightness, 0.3, 1.7, 0.05, null, brightnessStatus)}
                ${this._renderSlider("bg_saturation", LABELS.bg_saturation, 0, 2, 0.05, null, saturationStatus)}</div>` : ""}`)}
            ${this._renderDisclosure("Animation Effects", html`<div class="settings-group">
                <div class="toggle-group">
                <label class="toggle-row"><span>Background Blobs</span>
                    <ha-switch .checked=${(this._formData || {}).background_blobs !== false}
                        @change=${(e) => this._updateField("background_blobs", e.target.checked ? "" : false)}></ha-switch></label>
                <label class="toggle-row"><span>Weather Animations</span>
                    <ha-switch .checked=${(this._formData || {}).weather_animations !== false}
                        @change=${(e) => this._updateField("weather_animations", e.target.checked ? "" : false)}></ha-switch></label></div></div>`)}
            `;}
    _renderCardFrameToggle() {
        const c = this._formData || {};
        const frame = c.card_frame !== false;
        return html`<div class="field-group">
            <div class="toggle-group"><label class="toggle-row"><span>Use theme card styling</span>
                <ha-switch .checked=${frame}
                    @change=${(e) => this._updateField("card_frame", e.target.checked ? "" : false)}></ha-switch></label></div>
            </div>`;}
    render() {
        if (!this.hass || !this._config) return html``; const c = this._formData;
        return html`${this._renderForm([{ name: "weather_entity", selector: { entity: { domain: "weather" } } }])}
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "card_settings"}
                @expanded-changed=${(e) => this._onPanelToggle("card_settings", e.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:cog-outline"></ha-icon>
                    <span>General</span></div>
                ${this._renderDisclosure("Layout", html`<div class="settings-group">
                    ${this._renderCardStyleSegmented()}
                    ${this._renderOffsetPicker()}
                    ${this._renderCardFrameToggle()}</div>`)}
                ${this._renderDisclosure("Sun & Moon", this._renderSunMoonPanel())}
                ${this._renderDisclosure("Custom Weather Icons", html`<div class="settings-group">
                    <div class="clearable-field">
                        ${this._renderForm([{ name: "icon_path", selector: { text: {} } }])}
                        ${(this._formData || {}).icon_path ? html`<button type="button" class="clear-btn" title="Clear" @click=${() => this._updateField("icon_path", "")}><ha-icon icon="mdi:close"></ha-icon></button>` : ""}
                    </div></div>`)}
                ${this._renderDisclosure("Tap Action", html`<div class="settings-group">
                    ${this._renderForm([{ name: "card_tap_action", selector: { ui_action: {} } }])}</div>`)}</ha-expansion-panel>
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "images"}
                @expanded-changed=${(e) => this._onPanelToggle("images", e.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:image-outline"></ha-icon>
                    <span>Background</span></div>
                ${this._renderImagesPanel()}</ha-expansion-panel>
            <ha-expansion-panel
                outlined
                .expanded=${this._openPanel === "buttons"}
                @expanded-changed=${(e) => this._onPanelToggle("buttons", e.detail.expanded)}
            >
                <div slot="header" class="panel-header">
                    <ha-icon icon="mdi:checkbox-multiple-blank-outline"></ha-icon>
                    <span>Content</span></div>
                ${this._renderButtonContainersEditor()}</ha-expansion-panel>`;}}
if (!customElements.get("origami-weather-editor")) {
    customElements.define( "origami-weather-editor", WeatherCardEditor);}
