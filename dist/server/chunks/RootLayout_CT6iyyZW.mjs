import { c as createComponent } from './astro-component_DaLjB1J3.mjs';
import { r as renderTemplate, C as renderSlot, D as renderHead } from './server_BoHFZHtL.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RootLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html data-theme="retro"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><script src="/htmx.min.js"><\/script>', '</head> <body class="min-h-screen grid justify-center"> <div class="w-full max-w-2xl p-4"> ', " </div> </body></html>"])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/hwy/Documents/GitHub/htet-wai-yan.github.io/src/pages/RootLayout.astro", void 0);

const $$file = "/home/hwy/Documents/GitHub/htet-wai-yan.github.io/src/pages/RootLayout.astro";
const $$url = "/RootLayout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RootLayout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$RootLayout as $, _page as _ };
