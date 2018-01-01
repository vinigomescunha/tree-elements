var expect = require('chai').expect;
var assert = require('assert');

describe(' Tree-Elements services', function () {
    beforeEach(function (done, timeout) {
        browser.url(`${browser.options.baseUrl}/#services`);
    })
    it('Click Menu Bar Services option from index', function () {
        browser.url(browser.options.baseUrl);
        var menuLink = browser.elements('.nav.navbar-nav.navbar-right a');
        menuLink.click('*=Services');
        expect(browser.getUrl()).to.eq(`${browser.options.baseUrl}/#services`);
    });
    it('Services text', function () {
        var title = browser.elements('h1');
        assert.equal(title.getText(), 'Services - Lorem Ipsum');
    })
});
