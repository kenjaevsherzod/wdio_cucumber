// this is the general steps for common scenarios

const { Given, When } = require("@cucumber/cucumber");
const Gmail = require("../../pom/Gmail");

Given(/^I am on the homepage$/, async () => {
  await Gmail.open();
});
