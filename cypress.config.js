const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      projectId: "5k5kyp"
      // implement node event listeners here
    },
  },
});
