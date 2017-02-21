import $ from 'jquery';
//import TOKEN from './token.js';
import {searchData,processData} from './github.js';

function displayResults (processData) {
  console.log(processData);
  var field = processData;

  var basicHTML = `
    <div class="header">
    <div id="my-name">${field.name.toLowerCase()}</div>
      <div class="image">
        <img src=${field.avatar_url}/>
      </div>
    </div>

    <div class="mid-content">
    <div class="name-2">
      <span class ="basic">Name:</span>
        ${field.name}
    </div>
     <div class="git-hub">
      <span class ="basic">Github URL:</span>
        <a href="${field.html_url}">mariefilbs</a>
     </div>
    <div class="email">
      <span class="basic">E-mail:</span>
        ${field.email}
    </div>
    <div class="company">
      <span class="basic">School:</span>
        ${field.company} - Atlanta
    </div>
    <div class="blog">
      <span class="basic">Blog:</span>
        <a href="${field.blog}">Check it out!</a>
    </div>
    </div>

    <div class="bio">
      <div class ="sprites">
        <a href="https://twitter.com/mariefilbs">
        <i class="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/marie-filbey/">
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href="https://www.pinterest.com/marieeedarling/">
        <i class="fa fa-pinterest-square" aria-hidden="true"></i>
        </a>

        </div>
    ${field.bio}</div>

    `;

  $(".basic-results").append(basicHTML);
};





export { displayResults };
