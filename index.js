'use strict';

const kodepos = require('./kodepos');
const _       = require('underscore');

exports.all = () => {
  return kodepos;
};

exports.get = (id) => {
  var res = _.pick(kodepos, id);

  return res ? res[id] : res;
};

exports.search = (city) => {
  var res = _.pick(kodepos, function(value, key, object) {
    return value.match(RegExp(city, 'i'));
  });

  return res;
};
