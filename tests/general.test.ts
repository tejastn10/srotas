import { describe, it, expect, vi } from "vitest";

import {
	preventDefaultOnly,
	stopPropagationOnly,
	preventAndStopEvent,
} from "../src/handlers/general";

function createMockEvent() {
	return {
		preventDefault: vi.fn(),
		stopPropagation: vi.fn(),
	};
}

describe("General Handlers", () => {
	it("calls preventDefaultOnly", () => {
		const e = createMockEvent();
		preventDefaultOnly(e as unknown as Event);
		expect(e.preventDefault).toHaveBeenCalled();
	});

	it("calls stopPropagationOnly", () => {
		const e = createMockEvent();
		stopPropagationOnly(e as unknown as Event);
		expect(e.stopPropagation).toHaveBeenCalled();
	});

	it("calls preventAndStopEvent", () => {
		const e = createMockEvent();
		preventAndStopEvent(e as unknown as Event);
		expect(e.preventDefault).toHaveBeenCalled();
		expect(e.stopPropagation).toHaveBeenCalled();
	});
});
