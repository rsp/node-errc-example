'use strict';

var errc = require('errc');
var fs = require('fs');

var isError = function(obj) {
  try { return obj instanceof Error; } catch(e) {}
  return false;
};

// style #1
// define a bare callback and use errc() later:

var callback1 = function(data) {
  if (isError(data)) {
    console.log('callback1 error:', data.message);
  } else {
    console.log('callback1 success:', data.toString().trim());
  }
};

fs.readFile('example.txt', errc(callback1));
fs.readFile('example.txx', errc(callback1));

// style #2
// define a callback already wrapped with errc():

var callback2 = errc(function(data) {
  if (isError(data)) {
    console.log('callback2 error:', data.message);
  } else {
    console.log('callback2 success:', data.toString().trim());
  }
});

fs.readFile('example.txt', callback2);
fs.readFile('example.txx', callback2);
