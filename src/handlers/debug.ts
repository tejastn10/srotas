/**
 * Logs useful event details in a readable format.
 */
export const logBasicEventDetails = (e: Event | React.SyntheticEvent) => {
	console.groupCollapsed(`[Basic Event Details] ${e.type}`);
	console.table({
		Type: e.type,
		"Default Prevented": e.defaultPrevented,
		Target: e.target,
		"Current Target": e.currentTarget,
	});
	console.groupEnd();
};

/**
 * Logs verbose event details in a structured table.
 */
export const logVerboseEventDetails = (e: Event | React.SyntheticEvent) => {
	console.groupCollapsed(`[Verbose Event Details] ${e.type}`);
	console.table({
		Type: e.type,
		"Default Prevented": e.defaultPrevented,
		Target: e.target,
		"Current Target": e.currentTarget,
		Bubbles: e.bubbles,
		Cancelable: e.cancelable,
		"Time Stamp": e.timeStamp,
		"Event Phase": e.eventPhase,
		"Is Trusted": e.isTrusted,
	});
	console.groupEnd();
};
