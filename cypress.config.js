const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5k5kyp",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

