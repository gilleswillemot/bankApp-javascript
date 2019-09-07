(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'bankprovidermodule'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'bankprovidermodule'.");
    }
    if (typeof core === 'undefined') {
      throw new Error("Error loading module 'bankprovidermodule'. Its dependency 'core' was not found. Please, check whether 'core' is loaded prior to 'bankprovidermodule'.");
    }
    root.bankprovidermodule = factory(typeof bankprovidermodule === 'undefined' ? {} : bankprovidermodule, kotlin, core);
  }
}(this, function (_, Kotlin, $module$core) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var throwUPAE = Kotlin.throwUPAE;
  var Bank = $module$core.be.abstraction.core.models.Bank;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var IBankProvider = $module$core.be.abstraction.core.interfaces.IBankProvider;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function platformSpecificBankNames() {
    var bankNames = listOf(['js_BNP Paribas', 'js_ING', 'js_KBC', 'js_Europabank', 'js_Beobank', 'js_Belfius', 'js_AXA', 'js_Argenta']);
    return bankNames;
  }
  function BankProvider() {
    this.banks_6uc7lx$_0 = this.banks_6uc7lx$_0;
    this.initBanks_0();
  }
  Object.defineProperty(BankProvider.prototype, 'banks_0', {
    get: function () {
      if (this.banks_6uc7lx$_0 == null)
        return throwUPAE('banks');
      return this.banks_6uc7lx$_0;
    },
    set: function (banks) {
      this.banks_6uc7lx$_0 = banks;
    }
  });
  BankProvider.prototype.getBanks = function () {
    return this.banks_0;
  };
  BankProvider.prototype.initBanks_0 = function () {
    var $receiver = platformSpecificBankNames();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Bank(item));
    }
    this.banks_0 = destination;
  };
  BankProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BankProvider',
    interfaces: [IBankProvider]
  };
  var package$be = _.be || (_.be = {});
  var package$abstraction = package$be.abstraction || (package$be.abstraction = {});
  var package$providers = package$abstraction.providers || (package$abstraction.providers = {});
  package$providers.platformSpecificBankNames = platformSpecificBankNames;
  package$providers.BankProvider = BankProvider;
  Kotlin.defineModule('bankprovidermodule', _);
  return _;
}));

//# sourceMappingURL=bankprovidermodule.js.map
