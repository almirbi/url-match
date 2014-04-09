var Pattern = require('../src/url-match')

module.exports = {
  'pattern.match': {

    'returns {} when matching simple route': function(test) {
      var pattern = Pattern.generate("/foo")
      test.deepEqual(pattern.match("/foo"), [{}, {}]);
      return test.done();
    },

    'returns null when non-matching route': function(test) {
      var pattern = Pattern.generate("/foo")
      test.deepEqual(pattern.match("/bar"), null);
      return test.done();
    },

    'returns the matched named params when matching route': function(test) {
      var pattern = Pattern.generate("/foo/:id")
      test.deepEqual(pattern.match("/foo/123"), [{id: "123"}, {}]);
      return test.done();
    },

    'returns the matched query params when matching route': function(test) {
      var pattern = Pattern.generate("/foo")
      test.deepEqual(pattern.match("/foo?a=b"), [{}, { a: "b"}]);
      return test.done();
    },

    'returns the matched name and query params when matching route': function(test) {
      var pattern = Pattern.generate("/foo/:id")
      test.deepEqual(pattern.match("/foo/123?a=b"), [{id: 123}, {a: "b"}]);
      return test.done();
    }

  }
};
