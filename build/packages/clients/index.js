"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClient = void 0;
/**
 * Test Client class
 */
var TestClient = /** @class */ (function () {
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
    function TestClient(name, options) {
        this.options(options);
        this.name = name;
    }
    /**
     * Set options.
     *
     * @param options - Configuration options.
     */
    TestClient.prototype.options = function (options) {
        this._options = options;
    };
    /**
     * Get name
     */
    TestClient.prototype.getName = function () {
        var _a;
        var name = this.name;
        var suffix = (_a = this._options) === null || _a === void 0 ? void 0 : _a.suffix;
        return "".concat(name).concat(suffix !== null && suffix !== void 0 ? suffix : "");
    };
    return TestClient;
}());
exports.TestClient = TestClient;
