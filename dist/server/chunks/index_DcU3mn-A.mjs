import { c as createComponent } from './astro-component_DaLjB1J3.mjs';
import { B as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_BoHFZHtL.mjs';
import { $ as $$RootLayout } from './RootLayout_CT6iyyZW.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<label class="input w-full"> <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> </g> </svg> <input hx-get="/api/notes" hx-trigger="input delay:500ms, load" hx-target="#filteredNotes" type="search" name="q" class="grow" placeholder="Search by topics"> <kbd class="kbd kbd-md">Enter</kbd> </label> <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8" id="filteredNotes"></div> ` })}`;
}, "/home/hwy/Documents/GitHub/htet-wai-yan.github.io/src/pages/index.astro", void 0);

const $$file = "/home/hwy/Documents/GitHub/htet-wai-yan.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
