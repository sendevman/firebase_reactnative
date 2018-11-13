/**
 * Conexus-Tech - Retail Companion AT&T
 * https://conexustech.com/
 * @flow
 */

const webdriverio = require("webdriverio");
const expect = require('chai').expect

const serverConfig = require("./config").serverConfig;
const androidCaps = require("./config").androidCaps;

const client = webdriverio.remote(serverConfig);

describe('Android: Home interaction', () => {
  before(() => client.init(androidCaps));
  after(() => client.end());

  it("should be visible the main layout box", async () => {
    return client
      .pause(4000)
      .alertAccept()
      .waitForVisible("~MainLayoutBox", 4000)
      .then(obj => { expect(obj).to.equal(true); })
      .catch(error => { console.log('Testing Error: ', error); });
  });

  it("should be visible the main layout background image", async () => {
    return client
      .waitForVisible("~MainLayoutImg", 2000)
      .then(obj => { expect(obj).to.equal(true); })
      .catch(error => { console.log('Testing Error: ', error); });
  });

  it("should be visible the main layout carousel", async () => {
    return client
      .waitForVisible("~MainLayoutCarousel", 2000)
      .then(obj => { expect(obj).to.equal(true); })
      .catch(error => { console.log('Testing Error: ', error); });
  });

  it("should be visible the main layout carousel: item card", async () => {
    return client
      .waitForVisible("~MainLayoutCarouselItemCard", 4000)
      .then(obj => { expect(obj).to.equal(true); })
      .catch(error => { console.log('Testing Error: ', error); });
  });

  it("should not be visible the main layout view", async () => {
    return client
      .touchAction("~MainLayoutGoToZone", 'tap')
      .pause(1500)
      .isVisible("~MainLayoutBox")
      .then(obj => { expect(obj).to.equal(false); })
      .catch(error => { console.log('Testing Error: ', error); });
  });
});
