import $ from 'jquery';
import  TOKEN  from './token.js';

console.log(TOKEN);

var BASE_URL = "https://api.github.com";

function searchData (data, callback) {
  return $.ajax({
    url: `${BASE_URL}/users/mariefilbs`,
    dataType: "json",
    headers: {
      "Authorization": `token ${TOKEN}`
    },
    success: processData,
    data: {
      q: data,
    }
  });
}

 function processData (data) {
   console.log(data);
   return {
     name: data.name,
     github_url: data.html_url,
     email: data.email,
     company: data.company,
     website: data.blog,
     story: data.bio,
     picture: data.avatar_url
   }
  }

searchData();

export { searchData,processData };
