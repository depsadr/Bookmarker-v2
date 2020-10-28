    // Listen for form submit

    document.querySelector('#myForm').addEventListener('submit', saveMyBookmark);

    //Save Bookmark
    function saveMyBookmark(e) {

        // Get form values
        siteName = document.querySelector('#siteName').value;
        siteUrl = document.querySelector('#siteUrl').value;

        /**** Check if Site Name or Site URL is filled out ****/
        if (!siteName || !siteUrl) {
            window.alert("Please fill in the form");
            return false;
        }

        /**** Check if the URL is in a corect format ****/
        let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        let regex = new RegExp(expression)

        /**** If the URL is not in a correct format, give an alert with explanation ****/
        if (!siteUrl.match(regex)) {
            alert("Please use a valid URL format with https://…");
            return false;
        }
        bookmark = {
            name: siteName,
            url: siteUrl
        }

        /**** Local Storage Test ****/
        /*
        localStorage.setItem('test', 'Hello World');
        window.console.log(localStorage.getItem('test'));
        localStorage.removeItem('test');
        window.console.log(localStorage.getItem('test'));
        */

        /**** Check if is already a bookmark in the local storage ****/

        if (localStorage.getItem('bookmarks') === null) {

            /**** Create bookmarks array ****/
            let bookmarks = [];

            /**** Add to array ****/
            bookmarks.push(bookmark);

            /**** Set to Local Storage ****/
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            window.console.log('There is nothing in here!');

        } else {

            /**** Get bookmark from Local Storage ****/
            bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

            /**** Add bookmark to array ****/
            bookmarks.push(bookmark);

            /**** Re-set back to Lockal Storage ****/
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            window.console.log('There is something in here!');
            window.console.log(bookmarks);
        }

        /**** Re-fetch bookmarks ****/
        fetchBookmarks();

        // Prevent form from submitting
        e.preventDefault();

    }

    /*** New function deleteBookmark ****/
    function deleteBookmark(url) {

        /**** Get bookmark from Local Storage ****/
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        /**** Loop through the bookmarks ****/
        for (let i = 0; i < bookmarks.length; i++) {

            /**** Look if url is the same url like in the link ****/
            if (bookmarks[i].url === url) {

                /**** Remove from array ****/
                bookmarks.splice(i, 1);
            
            } // Close if statement
        } // Close for loop

        /**** Re-set back to Lockal Storage ****/
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        /**** Re-fetch bookmarks ****/
        fetchBookmarks();

    } // Close function

    /*** New function Fetch bookmarks ****/
    function fetchBookmarks() {

        /**** Get bookmark from Local Storage ****/
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        /**** Get outpute ID ****/
        let bookmarksResults = document.querySelector('#bookmarksResults');

        /**** bookmarksResults with empty string ****/
        bookmarksResults.innerHTML = "";

        /**** Loop through the bookmarks ****/
        for(let i = 0; i < bookmarks.length; i++) {

            /**** bookmarksResults variables to fill in ****/
            let name = bookmarks[i].name,
            url      = bookmarks[i].url;

            /**** fill up bookmarksResults with information ****/
            bookmarksResults.innerHTML +=   `<div class="well">
                                            <h3>${name}
                                            <a href="${url}" class="btn btn-default" target="_blank">
                                            Visit</a>
                                            <a href="#" class="btn btn-danger" onclick="deleteBookmark('${url}')">
                                            Delete</a>
                                            </h3>
                                            </div>`;

            window.console.log(bookmarksResults);
        }

        

    }