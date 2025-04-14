import { describe, it, vi, expect } from "vitest";
import { debounceEvent, throttleEvent } from "../src/handlers/utils";

describe("debounceEvent", () => {
	it("debounces calls", async () => {
		const fn = vi.fn();
		const debounced = debounceEvent(fn, 100);

		debounced();
		debounced();
		debounced();

		expect(fn).not.toHaveBeenCalled();

		await new Promise((r) => setTimeout(r, 150));
		expect(fn).toHaveBeenCalledTimes(1);
	});
});

describe("throttleEvent", () => {
	it("throttles calls", async () => {
		const fn = vi.fn();
		const throttled = throttleEvent(fn, 100);

		throttled();
		throttled();
		throttled();

		expect(fn).toHaveBeenCalledTimes(1);

		await new Promise((r) => setTimeout(r, 150));
		throttled();
		expect(fn).toHaveBeenCalledTimes(2);
	});
});
