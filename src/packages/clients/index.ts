type Options = {
  /**
   * suffix for name
   */
  suffix?: string;
};

/**
 * Test Client class
 */
export class TestClient {
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
  constructor(name: string, options?: Options) {
    this.options(options);
    this.name = name;
  }

  /**
   * Set options.
   *
   * @param options - Configuration options.
   */
  options(options?: Options): void {
    this._options = options;
  }

  /**
   * Get name
   */
  getName(): string {
    const name = this.name;
    const suffix = this._options?.suffix;
    return `${name}${suffix ?? ""}`;
  }
}
