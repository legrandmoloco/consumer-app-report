import { h, render } from "preact";
import htm from "htm";
import { useState, useEffect } from "preact/hooks";

export const html = htm.bind(h);
export const renderComponent = render;
export { useState, useEffect };
