import { fetchCount } from "@core/core";

describe("fetchCount", () => {
  it("resolves with the correct data", async () => {
    const amount = 42;
    const result = await fetchCount(amount);

    expect(result).toEqual({ data: amount });
  });

  it("handles default amount (1)", async () => {
    const result = await fetchCount();

    expect(result).toEqual({ data: 1 });
  });

  it("resolves after a delay", async () => {
    const startTime = Date.now();
    await fetchCount();
    const endTime = Date.now();

    expect(endTime - startTime).toBeGreaterThanOrEqual(500);
  });
});
