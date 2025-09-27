import { h, render } from "./preact.mjs" //"https://esm.sh/preact";
import htm from "./htm.mjs" //"https://esm.sh/htm";
import { useState, useEffect } from "./hooks.mjs" //"https://esm.sh/preact/hooks";

export const html = htm.bind(h);
export const renderComponent = render;
export { useState, useEffect };
