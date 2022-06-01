const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const Gmail = require("../../pom/Gmail");

Then(/^I login with valid credentials$/, async () => {
  await Gmail.enterUsername("demosherzod");
  await browser.pause(5000);
  await Gmail.enterPassword("123456@demo");
});

//mail.google.com/mail/u/0/#inbox

When(/^I am on all settings page$/, async () => {
  await Gmail.settingClick();
  await Gmail.allSettingClick();
});

Then(/^I try to choose another language$/, async () => {
  await Gmail.chooseLanguage();
});

Then(/^I save the changes$/, async () => {
  await Gmail.saveLanguageSettings();
  await browser.pause(5000);
});

Given(/^I am on inbox page$/, async () => {
  await Gmail.open("https://mail.google.com/mail/u/0/#inbox");
});

When(/^I click the last message$/, async () => {
  await Gmail.viewFirstEmail();
});

Then(/^It should open email content$/, async () => {
  await Gmail.backwords();
});

When(/^I click the Compose button$/, async () => {
  await Gmail.composeClick();
});

Then(
  /^It should open compose modal and should have Compose title$/,
  async () => {
    const compose = await $('div[jscontroller="eIu7Db"]').getText();
    await expect(compose).toHaveText("Compose");
  }
);

Then(
  /^It should enter email address into "To", "Cc" and "Bcc" fields$/,
  async () => {
    await Gmail.toFieldValue("sherzodhouse@gmail.com");
    await Gmail.bcFieldValue("sherzodhouse@gmail.com");
    await Gmail.bccFieldValue("sherzodhouse@gmail.com");
  }
);

Then(
  /^It should allow to enter data into "Subject" and email body areas$/,
  async () => {
    await Gmail.subjectAreaVal("New email epam");
    await Gmail.emailBodyAreaVal("This is just a test that should be send");
  }
);

Then(/^It should click the send button$/, async () => {
  await Gmail.sendEmail();
});

// ---------------------------------------------------------------------------------- //
// general steps for the scenarios

Given(/^I am on create account page$/, async () => {
  await Gmail.createAccountButton.click();
  await Gmail.randomElement(
    "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.daaWTb > div > div > div:nth-child(2) > div > ul > li:nth-child(2)"
  ).waitForExist();
  await Gmail.randomElement(
    "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.daaWTb > div > div > div:nth-child(2) > div > ul > li:nth-child(2)"
  ).click();
});

When(/^I enter my valid details in create account fields$/, async () => {
  await Gmail.create();
});

When(/^I click on the show password checkbox$/, async () => {
  await Gmail.randomElement("#i2").click();
});

When(
  /^I try to submit a form with valid Email and empty password$/,
  async () => {
    await Gmail.login("Password");
  }
);

When(/^I enter valid credentials to log in$/, async () => {
  await Gmail.login();
  await browser.pause(8000);
});

Then(/^It should display error on the password field$/, async () => {
  const element = await Gmail.randomElement(
    "#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div.SdBahf.Fjk18.Jj6Lae > div.OyEIQ.uSvLId > div:nth-child(2)"
  ).isExisting();
  assert.strictEqual(element, true);
});

Then(
  /^it should display the create account page with the sign in instead button$/,
  async () => {
    const text = await Gmail.randomElement(
      "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.daaWTb > div > div > button"
    ).isExisting();
    assert.strictEqual(text, true);
  }
);

Then(/^It should should navigate to my account page and inboxes$/, async () => {
  const url = await browser.getUrl();
  assert.strictEqual(url, "https://myaccount.google.com/?pli=1");
});

Then(
  /^It should be ticked and the password and confirm password fields should be visible$/,
  async () => {
    const password = await Gmail.randomElement(
      "#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input[type='text']"
    ).isExisting();
    const confirmPassword = await Gmail.randomElement(
      "#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input[type='text']"
    ).isExisting();
    assert.strictEqual(password, true);
    assert.strictEqual(confirmPassword, true);
  }
);
