type Options = {
    /**
     * suffix for name
     */
    suffix?: string;
};
/**
 * Test Client class
 */
export declare class TestClient {
    _options?: Options;
    name: string;
    /**
     * TestClient constructor.
     *
     * @example
     * ```js
     * import TestClient from 'bun-sample'
     * const testClient = new TestClient();
     * ```
     *
     * @param options - Configuration options.
     */
    constructor(name: string, options?: Options);
    /**
     * Set options.
     *
     * @param options - Configuration options.
     */
    options(options?: Options): void;
    /**
     * Get name
     */
    getName(): string;
}
export {};
