'use strict';

var errc = require('errc');

function callWithError(cb) {
  cb('ERROR');
}

function callWithData(cb) {
  cb(null, 'DATA');
}

var isError = function(obj) {
  try { return obj instanceof Error; } catch(e) {}
  return false;
};

var callback = errc(function(data) {
  if (isError(data)) {
    console.log('Error:', data.message);
  } else {
    console.log('Success:', data);
  }
});

callWithError(callback);
callWithData(callback);
