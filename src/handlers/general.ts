import { SyntheticEvent } from "react";

/**
 * Prevents the default action of the event.
 */
export const preventDefaultOnly = (e: SyntheticEvent | Event) => {
	e.preventDefault();
};

/**
 * Stops propagation of the event.
 */
export const stopPropagationOnly = (e: SyntheticEvent | Event) => {
	e.stopPropagation();
};

/**
 * Prevents the default action and stops propagation.
 */
export const preventAndStopEvent = (e: SyntheticEvent | Event) => {
	e.preventDefault();
	e.stopPropagation();
};
