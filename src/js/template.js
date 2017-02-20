import $ from 'jquery';
//import TOKEN from './token.js';
import {searchData,processData} from './github.js';

function displayResults (processData) {
  console.log(processData);
  var field = processData;

  var basicHTML = `
    <div class="header">${field.name}</div>
    <div class="github">${field.html_url}</div>
    <div class="email">${field.email}</div>
    <div class="company">${field.company}</div>
    <div class="blog">${field.blog}</div>
    <div class="bio">${field.bio}</div>
    <div class="image">
    <img src=${field.avatar_url}/>
    </div>
    `;

  $(".basic-results").append(basicHTML);
};





export { displayResults };
