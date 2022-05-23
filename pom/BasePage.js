// common methods logic file

module.exports = class BasePage {
  async open() {
    await browser.url("/");
  }
};
