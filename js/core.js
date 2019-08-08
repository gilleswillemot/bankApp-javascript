(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'core'.");
    }
    root.core = factory(typeof core === 'undefined' ? {} : core, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function IBankProvider() {
  }
  IBankProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IBankProvider',
    interfaces: []
  };
  function Bank(name) {
    this.name = name;
  }
  Bank.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bank',
    interfaces: []
  };
  var package$be = _.be || (_.be = {});
  var package$abstraction = package$be.abstraction || (package$be.abstraction = {});
  var package$core = package$abstraction.core || (package$abstraction.core = {});
  var package$interfaces = package$core.interfaces || (package$core.interfaces = {});
  package$interfaces.IBankProvider = IBankProvider;
  var package$models = package$core.models || (package$core.models = {});
  package$models.Bank = Bank;
  Kotlin.defineModule('core', _);
  return _;
}));

//# sourceMappingURL=core.js.map
