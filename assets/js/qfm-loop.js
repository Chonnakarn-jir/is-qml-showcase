/*
 * The approved SVG and one deterministic timeline drive both HTML and MP4.
 * Motion indicates explanatory order; it does not simulate amplitudes,
 * measurements, physical data travel, or different observations.
 * All timing values use a 24-second reference. CONFIG.duration scales the loop.
 */
(function (root) {
  'use strict';
  const CONFIG = { duration: 12, width: 2560, height: 950, baseOpacity: 0.12 };
  const THEME = {
    background: 'transparent', ink: '#F5F5F7', muted: '#BFC0C7',
    wire: '#6F7076', data: '#8E8573', span: '#57534A',
    brace: '#8B8578', gate: '#15130F', gateEmphasis: '#2A2419', dataEmphasis: '#E5C37A'
  };
  const TIMING = {
    input: [0.45, 1.1], vectorFrame: [0.85, 1.45],
    componentStart: 1.1, componentStep: 0.12, componentFade: 0.45,
    map: [2.7, 3.4], mapSpan: [2.9, 3.5], initTitle: [3.2, 3.75],
    initStart: 3.55, initStep: 0.08, initFade: 0.38, wireDelay: 0.17, wireFade: 0.63,
    encodingTitle: [5.15, 5.7], angleNote: [5.25, 5.8],
    encodingStart: 5.85, encodingStep: 0.56, dataDraw: 0.58,
    gateDelay: 0.48, gateFade: 0.40, gatePulseEnd: 1.22,
    cnotTitle: [11.3, 11.8], cnotStart: 11.95, cnotStep: 0.56,
    cnotControlFade: 0.25, cnotLinkDelay: 0.13, cnotLinkDraw: 0.38,
    cnotTargetDelay: 0.38, cnotTargetFade: 0.30,
    outputBrace: [16.35, 17.1], outputArrow: [17.05, 17.55],
    outputTitle: [17.45, 17.9], outputState: [17.6, 18.35],
    nextArrow: [18.65, 19.05], nextTitle: [18.9, 19.35], nextNote: [19.15, 19.6],
    finalReveal: [19.75, 20.25], finalHold: 21,
    reset: [22.35, 23.65], referenceDuration: 24
  };
  const STAGE_END = { input: 3.05, init: 5.15, encoding: 11.25, entangling: 16.35 };
  const clamp = v => Math.max(0, Math.min(1, v));
  const ease = v => { v = clamp(v); return v * v * (3 - 2 * v); };
  const progress = (t, a, b) => ease((t - a) / (b - a));
  const pulse = (t, a, b) => Math.sin(Math.PI * progress(t, a, b));
  const lerp = (a, b, p) => a + (b - a) * p;
  const tidy = n => String(Math.round(n * 100000) / 100000);
  const palette = () => ({
    white: THEME.background, '#ffffff': THEME.background, '#202020': THEME.ink,
    '#6c6c6c': THEME.muted, '#818181': THEME.wire, '#a2a2a2': THEME.data,
    '#b6b6b6': THEME.span, '#878787': THEME.brace, '#f7f7f7': THEME.gate
  });
  const color = c => palette()[String(c).toLowerCase()] || c;
  function mixColor(a, b, p) {
    const rgb = h => h.replace('#', '').match(/../g).map(v => parseInt(v, 16));
    const x = rgb(a), y = rgb(b);
    return '#' + x.map((v, i) => Math.round(lerp(v, y[i], p)).toString(16).padStart(2, '0')).join('');
  }
  function span(stage, range, hidden = false, draw = false) {
    return { stage, a: range[0], b: range[1], hidden, draw };
  }
  const encodingStart = k => TIMING.encodingStart + (k - 1) * TIMING.encodingStep;
  function specFor(id) {
    if (id === 'background' || id === 'illustration-title') return null;
    if (/^(classical-input-label|observation-label|pca-label)$/.test(id)) return span('input', TIMING.input);
    if (/^pca-vector-bracket-/.test(id)) return span('input', TIMING.vectorFrame);
    let m = id.match(/^pca-component-(\d)$/);
    if (m) {
      const a = TIMING.componentStart + (Number(m[1]) - 1) * TIMING.componentStep;
      return span('input', [a, a + TIMING.componentFade]);
    }
    if (id === 'feature-map-label' || id === 'feature-map-reuse-note') return span('map', TIMING.map);
    if (id === 'feature-map-span') return span('map', TIMING.mapSpan);
    if (id === 'qubit-count-label' || id === 'qubit-initialization-label') return span('init', TIMING.initTitle);
    m = id.match(/^qubit-(initial-state|wire)-(\d)$/);
    if (m) {
      const a = TIMING.initStart + (Number(m[2]) - 1) * TIMING.initStep;
      return m[1] === 'wire'
        ? span('init', [a + TIMING.wireDelay, a + TIMING.wireDelay + TIMING.wireFade])
        : span('init', [a, a + TIMING.initFade]);
    }
    if (/^encoding-label-/.test(id)) return span('encoding', TIMING.encodingTitle);
    if (id === 'angle-control-note') return span('encoding', TIMING.angleNote);
    m = id.match(/^component-(\d)-to-rotation-\d$/);
    if (m) {
      const a = encodingStart(Number(m[1]));
      return span('encoding', [a, a + TIMING.dataDraw], true, true);
    }
    m = id.match(/^ry-(box|label)-(\d)$/);
    if (m) {
      const a = encodingStart(Number(m[2])) + TIMING.gateDelay;
      return span('encoding', [a, a + TIMING.gateFade]);
    }
    if (id === 'cnot-chain-label' || id === 'cnot-shared-note') return span('entangling', TIMING.cnotTitle);
    m = id.match(/^cnot-(link|control|target|plus-h|plus-v)-(\d)$/);
    if (m) {
      const a = TIMING.cnotStart + Number(m[2]) * TIMING.cnotStep;
      if (m[1] === 'control') return span('entangling', [a, a + TIMING.cnotControlFade]);
      if (m[1] === 'link') return span('entangling', [a + TIMING.cnotLinkDelay, a + TIMING.cnotLinkDelay + TIMING.cnotLinkDraw], true, true);
      return span('entangling', [a + TIMING.cnotTargetDelay, a + TIMING.cnotTargetDelay + TIMING.cnotTargetFade]);
    }
    if (id === 'joint-state-brace') return span('output', TIMING.outputBrace, true, true);
    if (id === 'map-to-state') return span('output', TIMING.outputArrow, true, true);
    if (id === 'quantum-state-label') return span('output', TIMING.outputTitle, true);
    if (id === 'quantum-state-ket') return span('output', TIMING.outputState, true);
    if (id === 'comparison-cue-arrow') return span('next', TIMING.nextArrow, true, true);
    if (id === 'comparison-next-label') return span('next', TIMING.nextTitle, true);
    if (id === 'comparison-purpose-label') return span('next', TIMING.nextNote, true);
    throw new Error('An approved element has no timeline: ' + id);
  }
  function pathLength(d) {
    const tok = String(d).match(/[MLHVCQZmlhvcqz]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) || [];
    let x = 0, y = 0, sx = 0, sy = 0, i = 0, total = 0, cmd = '';
    const to = (nx, ny) => { total += Math.hypot(nx - x, ny - y); x = nx; y = ny; };
    while (i < tok.length) {
      if (/^[a-z]$/i.test(tok[i])) cmd = tok[i++];
      if (cmd === 'M') { x = Number(tok[i++]); y = Number(tok[i++]); sx = x; sy = y; cmd = 'L'; }
      else if (cmd === 'L') to(Number(tok[i++]), Number(tok[i++]));
      else if (cmd === 'H') to(Number(tok[i++]), y);
      else if (cmd === 'V') to(x, Number(tok[i++]));
      else if (cmd === 'C') {
        const ox = x, oy = y, x1 = Number(tok[i++]), y1 = Number(tok[i++]),
          x2 = Number(tok[i++]), y2 = Number(tok[i++]), x3 = Number(tok[i++]), y3 = Number(tok[i++]);
        for (let k = 1; k <= 64; k++) {
          const t = k / 64, u = 1 - t;
          to(u*u*u*ox + 3*u*u*t*x1 + 3*u*t*t*x2 + t*t*t*x3,
            u*u*u*oy + 3*u*u*t*y1 + 3*u*t*t*y2 + t*t*t*y3);
        }
      } else if (cmd === 'Q') {
        const ox = x, oy = y, x1 = Number(tok[i++]), y1 = Number(tok[i++]),
          x2 = Number(tok[i++]), y2 = Number(tok[i++]);
        for (let k = 1; k <= 64; k++) {
          const t = k / 64, u = 1 - t;
          to(u*u*ox + 2*u*t*x1 + t*t*x2, u*u*oy + 2*u*t*y1 + t*t*y2);
        }
      } else if (cmd === 'Z') { to(sx, sy); cmd = ''; }
      else throw new Error('Unsupported path command: ' + cmd);
    }
    return total;
  }
  function parseElements(source) {
    const result = {};
    for (const m of source.matchAll(/<(path|rect|circle|text)\b[^>]*>/g)) {
      const attrs = Object.fromEntries([...m[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(x => [x[1], x[2]]));
      if (!attrs.id) continue;
      const spec = specFor(attrs.id);
      result[attrs.id] = { tag: m[1], attrs, spec, length: spec && spec.draw ? pathLength(attrs.d) : 0 };
    }
    return result;
  }
  function create(source) {
    const elements = parseElements(source);
    function raw(t) {
      const state = {};
      const final = progress(t, ...TIMING.finalReveal);
      for (const [id, item] of Object.entries(elements)) {
        const a = item.attrs, s = item.spec;
        const out = { opacity: 1, transform: a.transform || '' };
        for (const name of ['fill', 'stroke']) if (a[name]) out[name] = color(a[name]);
        if (!s) { state[id] = out; continue; }
        const p = progress(t, s.a, s.b), base = s.hidden ? 0 : CONFIG.baseOpacity;
        const end = STAGE_END[s.stage];
        let focus = end === undefined ? 1 : lerp(1, 0.72, progress(t, end, end + 0.5));
        const pc = id.match(/^pca-component-(\d)$/);
        if (pc) {
          const start = encodingStart(Number(pc[1]));
          focus = lerp(focus, 1, pulse(t, start - 0.15, start + TIMING.gatePulseEnd));
        }
        out.opacity = lerp(lerp(base, focus, p), 1, final);
        if (s.draw) {
          const drawing = t >= s.a && p < 0.99999;
          out['stroke-dasharray'] = drawing ? `${tidy(item.length)} ${tidy(item.length)}` : 'none';
          out['stroke-dashoffset'] = drawing ? item.length * (1 - p) : 0;
          if (a['marker-end']) out['marker-end'] = drawing || p === 0 ? 'none' : a['marker-end'];
        }
        let m = id.match(/^ry-box-(\d)$/);
        if (m) {
          const start = encodingStart(Number(m[1]));
          const emphasis = pulse(t, start + TIMING.gateDelay, start + TIMING.gatePulseEnd) * (1 - final);
          out.fill = mixColor(THEME.gate, THEME.gateEmphasis, emphasis);
          out['stroke-width'] = Number(a['stroke-width']) + 0.4 * emphasis;
        }
        m = id.match(/^component-(\d)-to-rotation-\d$/);
        if (m) {
          const start = encodingStart(Number(m[1]));
          out.stroke = mixColor(THEME.data, THEME.dataEmphasis, pulse(t, start, start + TIMING.gatePulseEnd) * (1 - final));
        }
        state[id] = out;
      }
      return state;
    }
    function snapshot(seconds) {
      const phase = ((seconds % CONFIG.duration) + CONFIG.duration) % CONFIG.duration;
      const t = phase / CONFIG.duration * TIMING.referenceDuration;
      if (t >= TIMING.reset[1]) return raw(0);
      if (t < TIMING.reset[0]) return raw(t);
      const a = raw(TIMING.finalHold), b = raw(0), p = progress(t, ...TIMING.reset), mixed = {};
      for (const id of Object.keys(a)) {
        mixed[id] = {};
        for (const key of new Set([...Object.keys(a[id]), ...Object.keys(b[id])])) {
          const x = a[id][key], y = b[id][key];
          mixed[id][key] = typeof x === 'number' && typeof y === 'number' ? lerp(x, y, p)
            : (key === 'fill' || key === 'stroke') && /^#[0-9a-f]{6}$/i.test(x) && /^#[0-9a-f]{6}$/i.test(y)
              ? mixColor(x, y, p) : y;
        }
      }
      return mixed;
    }
    function frameSVG(seconds) {
      const state = snapshot(seconds);
      let svg = source.replace(/\b(fill|stroke)="([^\"]+)"/g, (_, name, value) => `${name}="${color(value)}"`);
      return svg.replace(/<(path|rect|circle|text)\b[^>]*>/g, tag => {
        const id = tag.match(/\bid="([^"]+)"/)?.[1];
        if (!state[id]) return tag;
        for (const [key, rawValue] of Object.entries(state[id])) {
          const value = typeof rawValue === 'number' ? tidy(rawValue) : String(rawValue);
          const attr = new RegExp('\\s' + key + '="[^"]*"');
          if (attr.test(tag)) tag = tag.replace(attr, ` ${key}="${value}"`);
          else tag = tag.replace(/\/?\>$/, end => ` ${key}="${value}"` + end);
        }
        return tag;
      });
    }
    return { elements, snapshot, frameSVG };
  }
  const API = { CONFIG, THEME, TIMING, create };
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  if (!root || !root.document) return;
  root.QuantumFeatureMap = API;
  async function boot() {
    const stage = root.document.getElementById('qfm-loop-stage');
    const svg = stage && stage.querySelector('svg');
    if (!svg) return;
    const model = create(svg.outerHTML);
    const nodes = Object.fromEntries(Object.keys(model.elements).map(id => [id, root.document.getElementById(id)]));
    for (const element of svg.querySelectorAll('[fill], [stroke]')) {
      for (const key of ['fill', 'stroke']) if (element.hasAttribute(key))
        element.setAttribute(key, color(element.getAttribute(key)));
    }
    if (root.document.fonts?.ready) await root.document.fonts.ready;
    let running = false, frame = null, start = 0, offset = 0, hiddenPause = false;
    function render(seconds) {
      for (const [id, attrs] of Object.entries(model.snapshot(seconds)))
        for (const [key, value] of Object.entries(attrs)) nodes[id].setAttribute(key, typeof value === 'number' ? tidy(value) : value);
    }
    function tick(now) {
      if (!running) return;
      render(offset + (now - start) / 1000);
      frame = root.requestAnimationFrame(tick);
    }
    function play() {
      if (running) return;
      running = true; start = root.performance.now();
      frame = root.requestAnimationFrame(tick);
    }
    function pause() {
      if (!running) return;
      offset += (root.performance.now() - start) / 1000;
      running = false; root.cancelAnimationFrame(frame); frame = null;
    }
    function seek(seconds) { offset = seconds; start = root.performance.now(); render(seconds); }
    root.QuantumFeatureMapLoop = { play, pause, seek, snapshot: model.snapshot, frameSVG: model.frameSVG, CONFIG, TIMING, THEME };
    root.document.addEventListener('visibilitychange', () => {
      if (root.document.hidden) { hiddenPause = running; pause(); }
      else if (hiddenPause) { hiddenPause = false; play(); }
    });
    let pageWasRunning = false;
    root.addEventListener('pagehide', () => { pageWasRunning = running; pause(); });
    root.addEventListener('pageshow', event => {
      if (event.persisted && pageWasRunning && !root.document.hidden) play();
    });
    render(0);
    const reduced = root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { render(10.2); return; }
    if ('IntersectionObserver' in root && stage) {
      const observer = new IntersectionObserver(entries => {
        const visible = entries.some(entry => entry.isIntersecting && entry.intersectionRatio > 0.08);
        if (visible && !root.document.hidden) play(); else pause();
      }, { threshold: [0, 0.08, 0.25] });
      observer.observe(stage);
    } else if (!root.document.hidden) play();
    else hiddenPause = true;
  }
  if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})(typeof window !== 'undefined' ? window : null);
