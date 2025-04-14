import { describe, it, expect, vi } from "vitest";
import { preventRightClick, preventDrag, blockKeyPress } from "../src/handlers/context";

function createMockEvent(key: string = "") {
	return {
		preventDefault: vi.fn(),
		key,
	};
}

describe("Context Handlers", () => {
	it("calls preventRightClick", () => {
		const e = createMockEvent();
		preventRightClick(e as unknown as MouseEvent);
		expect(e.preventDefault).toHaveBeenCalled();
	});

	it("calls preventDrag", () => {
		const e = createMockEvent();
		preventDrag(e as unknown as DragEvent);
		expect(e.preventDefault).toHaveBeenCalled();
	});

	it("blocks matching key press", () => {
		const e = createMockEvent("Escape");
		blockKeyPress(e as unknown as KeyboardEvent, ["Enter", "Escape"]);
		expect(e.preventDefault).toHaveBeenCalled();
	});

	it("doesn't block non-matching key press", () => {
		const e = createMockEvent("A");
		blockKeyPress(e as unknown as KeyboardEvent, ["Enter", "Escape"]);
		expect(e.preventDefault).not.toHaveBeenCalled();
	});
});
