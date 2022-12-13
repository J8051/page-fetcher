const args = process.argv.slice(2);  
const request = require('request');
const fs = require('fs/promises'); 
const url = args[0];
const fileName = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log(error); 
    return
  }

  fs.writeFile(fileName, body, err => {
    if (err) {
      console.error(err);
      return;
    }

    
  });
  
  console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);

});

/*command line arguement to use 
node fetcher.js http://www.example.edu/ '/Users/Jess/pageDownloader/text.txt'
*/



/*
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  */