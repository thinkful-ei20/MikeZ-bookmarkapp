'use strict';

// render function () {
//     // looks at store and puts into DOM
//     }

//     store function (){
//     // performs functions 
//     }

//     eventhandler function () {
//     // cannot change anything outside of store 
//     }

// create listener for form submit button = Eventhandler controller side 

document.getElementById('myForm').addEventListener('submit', saveBookmark);

// saves bookmark 
function saveBookmark() {

    // get values

    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;
    let description = document.getElementById('description').value;
    let dropdown = document.getElementById('dropdownbox').value;

    /// create bookmark object

    let bookmark = {
        name: siteName,
        url: siteUrl,
        description,
        dropdown: dropdownbox
    }

    console.log(bookmark);

    // prevent form from submitting 
    Event.preventDefault();
}

// /// Local storage test

// console.log(localStorage.setItem('test', 'hello world'));

// test if BM is null
if (localStorage.getItem('bookmarks') === null) {
    let bookmarks = [];
    // add 2 array bookmarks
    bookmarks.push(bookmark);
    // local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

} else {
    // get bookmarks from local storage for page
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // add to array
    booksmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

}


// fetching bookmarks for DIV with results in realtime

function fetchBookmark() {

    // fetch from local storage 

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // get id of div to send to that div (results)

    let bookmarksResults = document.getElementById('bookmarksResults');

    // output
bookmarksResults.innerHTML = '';
for (let i =0; i < bookmarks.length; i++) {
    let title = bookmarks[i].title;
    let url = bookmarks[i].url; 
    
    bookmarksResults.innerHTML +=  '<div class="results">' + 
                                    '<h4>' + title +
                                    '<a class="btn btn-default" target="_blank' href="'+url+"> Visit </a>' + ' 
                                    <a onclick="deleteBookmark(\'' +url+'\')" class="danger" target="_blank" href="#"> Delete </a>' +
                                    '
                                    '</h4>' +
                                    '</div>'; 
}

}