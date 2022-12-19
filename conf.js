exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  capabilities: {
    browserName: "chrome",
    shardTestFiles: true,
    maxInstances: 4,
  },
  specs: [
    "test/addition.spec.js",
    "test/subtraction.spec.js",
    "test/multiplication.spec.js",
    "division.spec.js",
  ],
};
