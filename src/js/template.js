import $ from 'jquery';
import TOKEN from './token.js';
import {searchData,processData} from './github.js';

function displayResults () {
  //console.log();
  return `
    <div class="name"></div>
    `;

  $(".basic-results").append(displayResults);
};

displayResults();

export { displayResults };
