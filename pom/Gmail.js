// gmail test method logic file
const BasePage = require("./BasePage");
const CreateGmailAccount = require("./CreateGmailAccount");

class Gmail extends BasePage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $('input[type="email"]');
  }

  get inputPassword() {
    return $('input[type="password"]');
  }

  get btnSubmit() {
    return $(
      'button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]'
    );
  }

  get settingsIcon() {
    return $(".FI");
  }

  get allSettings() {
    return $(".Tj");
  }

  get language() {
    return $('option[value="en"]');
  }

  get saveLanChanges() {
    return $('button[guidedhelpid="save_changes_button"]');
  }

  get firstEmail() {
    return $('tr[aria-labelledby=":28"]');
  }

  get goBack() {
    return $('div[jslog="55361; u014N:cOuCgd,Kr2w4b"]');
  }

  get composeButton() {
    return $('div[jscontroller="eIu7Db"]');
  }

  get toField() {
    return $('textarea[name="to"]');
  }

  get bcField() {
    return $('textarea[name="cc"]');
  }

  get bcClick() {
    return $('span[class="aB gQ pE"]');
  }

  get bccField() {
    return $('textarea[name="bcc"]');
  }

  get bccClick() {
    return $('span[class="aB  gQ pB"]');
  }

  get subjectArea() {
    return $('input[name="subjectbox"]');
  }

  get emailBodyArea() {
    return $('div[class="Am Al editable LW-avf tS-tW"]');
  }

  get sendEmailButton() {
    return $('div[class="T-I J-J5-Ji aoO v7 T-I-atl L3"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  //Methods to enter username and password to login email account
  async enterUsername(username) {
    await this.inputUsername.setValue(username);
    await this.btnSubmit.click();
  }

  async enterPassword(password) {
    await this.inputPassword.waitForExist();
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  //Methods to go to settings page and change language
  async settingClick() {
    await this.settingsIcon.waitForExist();
    await this.settingsIcon.click();
  }

  async allSettingClick() {
    await this.allSettings.waitForExist();
    await this.allSettings.click();
  }

  async chooseLanguage() {
    await this.language.waitForExist();
    await this.language.click();
  }

  async saveLanguageSettings() {
    await this.saveLanChanges.click();
  }

  //Methods to view the latest received email
  async viewFirstEmail() {
    await this.firstEmail.waitForExist();
    await this.firstEmail.click();
  }

  async backwords() {
    await this.goBack.waitForExist();
    await this.goBack.click();
  }

  //Methods to check compose fields availability and sending email by filling required fields.
  async composeClick() {
    await this.composeButton.waitForExist();
    await this.composeButton.click();
  }

  async toFieldValue(val) {
    await this.toField.waitForExist();
    await this.toField.setValue(val);
  }

  async bcFieldValue(val) {
    await this.bcClick.click();
    await this.bcField.waitForExist();
    await this.bcField.setValue(val);
  }

  async bccFieldValue(val) {
    await this.bccClick.click();
    await this.bccField.waitForExist();
    await this.bccField.setValue(val);
  }

  async subjectAreaVal(val) {
    await this.subjectArea.setValue(val);
  }

  async emailBodyAreaVal(val) {
    await this.emailBodyArea.setValue(val);
  }

  async sendEmail() {
    await this.sendEmailButton.click();
  }

  //method to open the base url of gmail
  async open() {
    await super.open();
  }
  //------------------------------------------------------------------------------//
  // get create account button on the website
  get createAccountButton() {
    return $(
      "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.daaWTb > div > div > div:nth-child(1)"
    );
  }
  // method to create account on gmail without submitting
  async create() {
    await CreateGmailAccount.createAccount();
  }

  // method to log user in on gmail
  async login(data) {
    await CreateGmailAccount.login(data);
  }

  // get a random element on the page
  randomElement(css) {
    return $(css);
  }
}

module.exports = new Gmail();
