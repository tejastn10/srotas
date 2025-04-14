/**
 * Returns a debounced version of a function.
 */
export const debounceEvent = <T extends (...args: unknown[]) => void>(
	fn: T,
	delay: number
): ((...args: Parameters<T>) => void) => {
	let timer: NodeJS.Timeout;

	return (...args: Parameters<T>) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), delay);
	};
};

/**
 * Returns a throttled version of a function.
 */
export const throttleEvent = <T extends (...args: unknown[]) => void>(
	fn: T,
	limit: number
): ((...args: Parameters<T>) => void) => {
	let lastRun = 0;

	return (...args: Parameters<T>) => {
		const now = Date.now();
		if (now - lastRun >= limit) {
			lastRun = now;
			fn(...args);
		}
	};
};
