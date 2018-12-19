const baseURL = 'https://www.songsterr.com/a/ra/songs.json?pattern=';

const searchTerm = document.querySelector('.artistSearch');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nav = document.querySelector('nav');
const artistSearch = document.querySelector('.songSearch');
const section = document.querySelector('.section')

let pageNumber = 0;

searchForm.addEventListener('submit', fetchSongs);

function fetchArtist(e) {
    e.preventDefault();
    url = `${baseURL}${artistSearch.value} `;
    console.log('URL:', url);
}

function fetchSongs(e) {
  e.preventDefault();
  url = `${baseURL}${searchTerm.value} `;
  console.log('URL:', url);

  fetch(url)
    .then(function(result) {
      return result.json();
    })
    .then(function(arrResults) {
    displayResults(arrResults);//calling function displayResults and passing our results as a parameter
    })
}

function displayResults(list) {

  // while (section.firstChild) {
  //   section.removeChild(section.firstChild);
  // }
  console.log(list[18]) //pulled all results of json objects and now we only want to see item 18 of 1000. only 18 should show.
  //for loop added when want to look thru big list....json=all items
  for (let i = 0; i < list.length; i++) {//forLoop=set a variable(name it i), say what you want that variable to do(i less than
                                        //full lengt of list with index set at 0(1st item), then how do you want that list
                                        //to be presented(individually) count by 1 or count by 2 etc.)
var song =list[i].title; //calling whole list of arrays (i), and we just want the title/name of each song...not
                           // just of 1 item
let newTag = document.createElement('p')  //create variable to pull from html(document) and create within p tag/section
newTag.innerText = song;  //make new tag to tell what you want new tag to do(what info to pull)

section.appendChild(newTag) //call the element from html and add new tag inside (visible)

  }
    // for (let i = 0; i < articles.length; i++) {
    //   // console.log(i);
    //   let article = document.createElement('article');
    //   let heading = document.createElement('h2');
    //   let link = document.createElement('a');
    //   let img = document.createElement('img');
    //   let para = document.createElement('p');
    //   let clearfix = document.createElement('div');

    //   let current = articles[i];
    //   console.log('Current:', current);

      
    //   clearfix.setAttribute('class', 'clearfix');

    //   article.appendChild(heading);
    //   heading.appendChild(link);
    //   article.appendChild(img);
    //   article.appendChild(para);
    //   article.appendChild(clearfix);
    //   section.appendChild(article);
    }
  
