"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

require("./assets/styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bodyScrollLock = require('body-scroll-lock');

var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    myFunction(document.querySelector('.mainHeader__icon'));
    enableBodyScroll(document.querySelector('body'));
  });
});
var toggle = false;

function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.mainHeader__nav').classList.toggle("showItems");
  toggle = !toggle;
  toggle ? disableBodyScroll(document.querySelector('body')) : enableBodyScroll(document.querySelector('body'));
}

document.querySelector('.mainHeader__icon').addEventListener('click', function (e) {
  myFunction(this);
});