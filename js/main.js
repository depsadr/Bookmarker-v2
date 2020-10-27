    // Listen for form submit

    document.querySelector('#myForm').addEventListener('submit', saveMyBookmark);

    //Save Bookmark
    function saveMyBookmark(e) {

        // Get form values
        siteName = document.querySelector('#siteName').value,
        siteUrl = document.querySelector('#siteUrl').value;
              
        // Check if there is a valid input in the form
        
      /*  switch
        if (siteName === "" && siteUrl === "") {
            window.alert("Please enter a valid URL and a web page name");
            false;
        }

        if (siteName === "") {
            window.alert("Please enter a web page name");
            false;
        }

        if (siteUrl === "") {
            alert("Please enter a valid URL with https://");
            false;
        }
*/

if (siteName === "" && siteUrl === "") {
    if (siteName === "") {
      if (siteUrl === "") {
              alert("Please enter a valid URL with https://");
              false;
          }
              window.alert("Please enter a web page name");
              false;
          }
              window.alert("Please enter a valid URL and a web page name");
              false;
          } 
        

        expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
        regex = new RegExp(expression),
        
       

            bookmark = {
                name: siteName,
                url: siteUrl
            }

       
       

        // Test if bookmarks name or url is null
 // else { // Close Check if there is a valid input in the form

            // Test if bookmarks is null

            if (localStorage.getItem('bookmarks') === null) {
                //let 
                bookmarks = [];

                // Add to array

                bookmarks.push(bookmark);

                // Set bookmarks to local store

                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            } else {

                // Get bookmark from LocalStorage

             //   let 
                bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

                // Add bookmark to array

                bookmarks.push(bookmark);

                // Re-set back to LocalStorage

                localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
                
       //     }  // else { // Close Check if there is a valid input in the form
                
        } 

            // Re-fetch bookmarks

            fetchBookmark();

            console.log(bookmark);

            // Prevent form from submitting
            e.preventDefault();

        }

        // New function Delete bookmark

        function deleteBookmark(url) {

            // Get bookmark from LocalStorage

            //let 
            bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

            // Loop through bookmarks

            for (i = 0; i < bookmarks.length; i++) {

                if (bookmarks[i].url === url) {

                    // Remove from bookmarks

                    bookmarks.splice(i, 1);

                }
            }

            // Re-set back to LocalStorage

            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

            // Re-fetch bookmarks

            fetchBookmark();

            console.log(url);

        }

        // New function to fetch bookmarks

        function fetchBookmark() {

            // Get bookmark from LocalStorage

            //let 
            bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

            // Get output id

            //const 
            bookmarksResults = document.querySelector('#bookmarksResults');

            // Set output

            bookmarksResults.textContent = "";

            // Loop through bookmarks

            for (i = 0; i < bookmarks.length; i++) {

                //const 
                name = bookmarks[i].name;
                //const 
                url = bookmarks[i].url;

                bookmarksResults.innerHTML += `<div class="well">
                                            <h3>${name}
                                            <a href="${url}" class="btn btn-default" target="_blank">
                                            Visit</a>
                                            <a href="#" class="btn btn-danger" onclick="deleteBookmark(\'${url}'\)">
                                            Delete</a>
                                            </h3>
                                            </div>`;
            }


            console.log(bookmarks);

        } // Close fetchBookmark function