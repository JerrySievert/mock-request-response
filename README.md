= Mock Request/Response

Simple mock request and response objects to help with testing.  Currently only server-side request and response mocks are supported.

== server-request

Useful for testing `http` server code.

    var mockrequest = require('server-request');
    
    var request = new mockrequest.request();
    request.url = 'http//foo.com/bar.html?baz=boo&me=you';


== server-response

Also useful for testing `http` server code.

    var mockresponse = require('server-response');
    
    var response = new mockresponse.response();
    response.write('this is a test');
    response.end();
    