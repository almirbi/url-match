# url-match

url-match is a pattern matching for urls paths and query parameters based on
the [backbone router](backbonejs.org) and the plugin [backbone-query-parameters](https://github.com/jhudson8/backbone-query-parameters)

### install

```
npm install url-match
```

**or**

put this line in the dependencies section of your `package.json`:

```
"url-match": "0.1.0"
```

then run:

```
npm install
```

### require

```javascript
var urlMatch = require('url-match');
```

### match urls

##### make pattern from string

```javascript
var pattern = urlPattern.generate('/users/:id');
```

##### match pattern against url

match returns the extracted parameters or `null` if there was no match:

```javascript
pattern.match('/projects/5'); // => null
pattern.match('/users/5'); // => [{id: '5'}, {}]
pattern.match('/users/5?a=b&c=d'); // => [{id: '5'}, {a: "b", c: "d"}]
```

