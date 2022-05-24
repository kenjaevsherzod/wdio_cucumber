const BasePage = require("./BasePage");

class CreateGmailAccount extends BasePage {
  // create account method group without submit
  async createAccount() {
    await $("#firstName").setValue("taofeek");
    await $("#lastName").setValue("ologoroo");
    await $("#username").setValue("ologoro.dorime");
    await $("#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input").setValue(
      "Police1991@"
    );
    await $(
      "#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
    ).setValue("Police1991@");
  }

  // login method to log user in that accept a parameter for validation
  async login(arg = "") {
    const email = await $("#identifierId");
    arg === "Email"
      ? email.setValue("")
      : await email.setValue("ologoro.ashewo");
    await $("#identifierNext > div > button").click();
    const password = await $(
      "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input"
    );
    await password.waitForExist({ timeout: 3000 });
    arg === "Password"
      ? await password.setValue("")
      : await password.setValue("Police1991@");
    await $("#passwordNext > div > button").click();
  }
}

module.exports = new CreateGmailAccount();
