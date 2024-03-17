// index.js
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  let str = ['안녕?','webpack'].join() + `<br>`;
  element.innerHTML = _.join([str, 'hello ? ','webpack'], ' ');

  return element;
}

document.body.appendChild(component());