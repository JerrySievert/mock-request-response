var vows      = require('vows'),
    assert    = require('assert'),
    request   = require('../server-request'),
    response  = require('../server-response');

vows.describe('Server Response').addBatch({
    'when a server response is instantiated': {
        topic: function () {
            return new response.response();
        },
        'and a write occurs': {
            topic: function (topic) {
                topic.write('foo');
                return topic;
            },
            'that the data is correct': function (topic) {
                assert.equal(topic.get('buffer'), 'foo');
            }
        }
    }
}).export(module);