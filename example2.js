'use strict';

var errc = require('errc');
var fs = require('fs');

var isError = function(obj) {
  try { return obj instanceof Error; } catch(e) {}
  return false;
};

var callback = function(data) {
  if (isError(data)) {
    console.log('Error:', data.message);
  } else {
    console.log('Success:', data.toString());
  }
};

fs.readFile('example.txt', errc(callback));
fs.readFile('example.txx', errc(callback));
