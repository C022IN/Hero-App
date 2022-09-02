const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qtdccs",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

   
      // The rest of the Cypress config options go here...
    },
    
  },
});
