var expect = require('chai').expect;
var assert = require('assert');

describe(' Tree-Elements contact', function () {
    beforeEach(function (done, timeout) {
        browser.url(`${browser.options.baseUrl}/#contactUs`);
    })
    it('Click Menu Bar Contact option from index', function () {
        browser.url(browser.options.baseUrl);
        var menuLink = browser.elements('.nav.navbar-nav.navbar-right a');
        menuLink.click('*=Contact');
        expect(browser.getUrl()).to.eq(`${browser.options.baseUrl}/#contactUs`);
    });
    it('Contact text', function () {
        var title = browser.elements('h1');
        assert.equal(title.getText(), 'Contact us');
    });
    it('Contact form', function () {
        var email = browser.elements('form input[type=email]');
        email.setValue('email@email.com');
        var email = browser.elements('form input[type=email]');
        assert.equal(email.getValue(), 'email@email.com');
        // select checkbox
        browser.click('#mychk');
        var input = browser.elements('form input[type=checkbox]');
        assert.equal(input.isSelected(), true);
    });
});
