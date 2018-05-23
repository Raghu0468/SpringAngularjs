(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('resources/components/moment')) :
   typeof define === 'function' && define.amd ? define(['resources/components/moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';
});