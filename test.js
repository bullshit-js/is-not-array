var isNotArray = require('./');
var test = require('tape');

var nativeIsArray = Array.isArray;

test('is array (only polyfill)', function(t){
  delete Array.isArray;
  t.notOk(isNotArray([]));
  t.ok(isNotArray({}));
  t.ok(isNotArray(null));
  t.ok(isNotArray(false));
  t.ok(isNotArray(''));
  t.ok(isNotArray('42'));
  t.ok(isNotArray(42));
  t.ok(isNotArray(34.00));
  t.ok(isNotArray(123e-5));
  t.ok(isNotArray('[]'));
  t.ok(isNotArray(undefined));
  t.ok(isNotArray(function(){}));

  var obj = {};
  obj[0] = true;
  t.ok(isNotArray(obj));

  var arr = [];
  arr.foo = 'bar';
  t.notOk(isNotArray(arr));

  t.end();
});

test('is array (native)', function(t){
  Array.isArray = nativeIsArray;
  t.notOk(isNotArray([]));
  t.ok(isNotArray({}));
  t.ok(isNotArray(null));
  t.ok(isNotArray(false));
  t.ok(isNotArray(''));
  t.ok(isNotArray('42'));
  t.ok(isNotArray(42));
  t.ok(isNotArray(34.00));
  t.ok(isNotArray(123e-5));
  t.ok(isNotArray('[]'));
  t.ok(isNotArray(undefined));
  t.ok(isNotArray(function(){}));

  var obj = {};
  obj[0] = true;
  t.ok(isNotArray(obj));

  var arr = [];
  arr.foo = 'bar';
  t.notOk(isNotArray(arr));

  t.end();
});
