import type { SyntheticEvent } from "react";

/**
 * Prevents right-click context menu.
 */
export const preventRightClick = (e: SyntheticEvent | MouseEvent) => {
	e.preventDefault();
};

/**
 * Prevents drag actions on an element.
 */
export const preventDrag = (e: SyntheticEvent | DragEvent) => {
	e.preventDefault();
};

/**
 * Focuses the element matching the provided selector.
 */
export const focusElement = (selector: string) => {
	const el = document.querySelector<HTMLElement>(selector);
	el?.focus();
};

/**
 * Blocks certain key presses.
 */
export const blockKeyPress = (e: KeyboardEvent | React.KeyboardEvent, keys: string[]) => {
	if (keys.includes(e.key)) {
		e.preventDefault();
	}
};
