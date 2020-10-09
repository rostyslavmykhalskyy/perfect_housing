import _ from 'lodash';
import './assets/styles/style.scss';

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      })
    myFunction(document.querySelector('.mainHeader__icon'));
    enableBodyScroll(document.querySelector('body'));

  });
});

let toggle=false;
function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.mainHeader__nav').classList.toggle("showItems");
  toggle = !toggle;
  toggle ? disableBodyScroll(document.querySelector('body')) : enableBodyScroll(document.querySelector('body'))
}
document.querySelector('.mainHeader__icon').addEventListener('click', function(e) {
  myFunction(this)
})