var vows      = require('vows'),
    assert    = require('assert'),
    request   = require('../server-request'),
    response  = require('../server-response');

vows.describe('Server Request').addBatch({
    'when a server request is instantiated': {
        topic: function () {
            return new request.request();
        },
        'and a url is set': {
            topic: function (topic) {
                topic.url = 'http://foo/bar';
                return topic;
            },
            'that the url is correct': function (topic) {
                assert.equal(topic.url, 'http://foo/bar');
            }
        }
    }
}).export(module);