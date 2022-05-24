// this is the steps for creating gmail account
const assert = require("assert");
const { Then, When } = require("@cucumber/cucumber");
const Gmail = require("../../pom/Gmail");

// function to format the expected result to boolean
function getError(expectedResult) {
  return expectedResult === "Yes";
}

// steps to verify  scenarios
When(
  "I enter good or bad {string} and {string} requirements",
  async (password, confirmPassword) => {
    await $("#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input").setValue(
      password
    );
    await $(
      "#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
    ).setValue(confirmPassword);
    await $("#accountDetailsNext > div > button").click();
    await browser.pause(2000);
  }
);

Then("{string}. Error Should be displayed", async (expectedResult) => {
  const element = await Gmail.randomElement(
    "#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div.SdBahf.Fjk18.OcVpRe.DbQnIe.ia6RDd.Jj6Lae > div.OyEIQ.uSvLId > div:nth-child(2)"
  ).isExisting();
  // assertion of the expected result with DOM element
  assert.strictEqual(element, getError(expectedResult));
});
