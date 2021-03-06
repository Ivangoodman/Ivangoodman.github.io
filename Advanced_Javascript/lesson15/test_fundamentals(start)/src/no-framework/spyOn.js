const assert = require("assert");
const gen = require("../utils/gen");
const getStr = require("../utils/getStr");

function fn(cb) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return cb(...args);
  };
  mockFn.mock = { calls: [] };
  return mockFn;
}

const original = gen.getEl;

gen.getEl = fn((a, b) => a);

const string = getStr("first", "second");
assert.strictEqual(string, "first");

assert.deepStrictEqual(gen.getEl.mock.calls, [
  ["first", "second"],
  ["first", "second"]
]);

gen.getEl = original;
