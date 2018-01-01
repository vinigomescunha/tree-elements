var expect = require('chai').expect;
var assert = require('assert');

describe(' Tree-Elements index', function () {
    beforeEach(function (done, timeout) {
        browser.url(browser.options.baseUrl);
    })
    it('Title', function() {
        expect(browser.getTitle()).to.eq('Tree Elements');
    });
    it('Menu Bar', function () {
        var menuTitle = browser.elements('.navbar-header a.navbar-brand');
        expect(menuTitle.getText()[0]).to.eq('Main Title');
        expect(menuTitle.getAttribute('href')[0]).to.eq(`${browser.options.baseUrl}/#`);
        var menuLink =  browser.elements('.nav.navbar-nav.navbar-right a');
        expect(menuLink.getText()[0]).to.equal('Services');
        expect(menuLink.getText()[1]).to.equal('Products');
        expect(menuLink.getText()[2]).to.equal('About Us');
        expect(menuLink.getText()[3]).to.equal('Contact');
        expect(menuLink.getAttribute('href')[0]).to.equal(`${browser.options.baseUrl}/#services`);
        expect(menuLink.getAttribute('href')[1]).to.equal(`${browser.options.baseUrl}/#products`);
        expect(menuLink.getAttribute('href')[2]).to.equal(`${browser.options.baseUrl}/#aboutUs`);
        expect(menuLink.getAttribute('href')[3]).to.equal(`${browser.options.baseUrl}/#contactUs`);
    });
    it('Banner', function () {
        var banner = browser.elements('.jumbotron.banner.cover-bg');
        var title = banner.elements('h1');
        assert.equal(title.getText()[0], 'Lorem Ipsum\nLorem Ipsum Dolor Sit Amet@banner-subtitle\nLearn more');
        var subtitle = banner.elements('h1 p');
        assert.equal(subtitle.getText()[0], 'Lorem Ipsum Dolor Sit Amet@banner-subtitle');
        assert.equal(subtitle.getText()[1], 'Learn more');
        var subtitleLinks = banner.elements('h1 p a');
        expect(subtitleLinks.getAttribute('href')).to.equal(`${browser.options.baseUrl}/#services`);
    })
});
