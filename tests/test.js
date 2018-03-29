const assert = require('chai').assert;
const expect = require('chai').expect;


const helper = require('../functions.js');
bgFnc = new helper();


const testUrl = 'https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa';
const testUrl2 = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'
const testUrl3 = 'https://shibboleth.nyu.edu/idp/profile/SAML2/Unsolicited/SSO;jsessionid=rjg1ax7u3cbhhezid4o9g7hz?execution=e1s1'



describe('getHostName', function() {

    it('should return stackoverflow', function() {
        assert.equal(bgFnc.getHostName(testUrl), 'stackoverflow');
    });

    it('should return mozilla', function() {
        assert.equal(bgFnc.getHostName(testUrl2), 'mozilla');
    })

    it('should return nyu', function() {
        assert.equal(bgFnc.getHostName(testUrl3), 'nyu');
    })

});


const testUrl4 = 'http://www.facebook.com';
const testUrl5 = 'notAUrl';

describe('parseurl', function() {
    it('should return facebook.com', function() {
        assert.equal(bgFnc.parseurl(testUrl4),'facebook.com');
    });
    // negative testing - testing for failure 
    it('should return null', function() {
        assert.equal(bgFnc.parseurl(testUrl5), null);
    })

});

