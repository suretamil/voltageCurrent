var jsonfile = require('jsonfile')
 
var file = 'test.json'
var obj = {"light": 'on'}
 
jsonfile.writeFile(file, obj, {spaces: 2, EOL: '\r\n'}, function(err) {
  console.error(err)
})