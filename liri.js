//Adding our twitter keys to the module 
var keys = require("./keys.js");
var keysTwo = require("./keys.js");
var fs = require('fs');

if (process.argv[2] === "my-tweets") {
    var params = {screen_name: 'ShKeishaDaGreat'};

    keys.client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
         for (var i=0; i < tweets.length; i++) {
            console.log("@ShKeishaDaGreat: " + tweets[i].text);
         } 
     }
     else {
         console.log(error);
     }
    });    
}
else if (process.argv[2] === "spotify-this-song") {
    
        if (!process.argv[3]) {
            keysTwo.spotify.search({ type: 'track', query: "For Free", limit: 2 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
               else {
                    console.log("Song Name: " + data.tracks.items[0].name); 
                    console.log("Artists: " + data.tracks.items[0].album.artists[0].name); 
                    console.log("Album: " + data.tracks.items[0].album.name); 
                    console.log("Preview Link: " + data.tracks.items[0].preview_url); 
               }
            });
        }
        else {
            keysTwo.spotify.search({ type: 'track', query: process.argv[3], limit: 2 }, function(err, data) {
                if (err) {
                  return console.log('Error occurred: ' + err);
                }
               else {
                    console.log(data.tracks.items[0]);
                    console.log("Song Name: " + data.tracks.items[0].name); 
                    console.log("Artists: " + data.tracks.items[0].album.artists[0].name); 
                    console.log("Album: " + data.tracks.items[0].album.name); 
                    console.log("Preview Link: " + data.tracks.items[0].preview_url); 
               }
            });
        }
}
else if (process.argv[2] === "movie-this") {
    if (!process.argv[3]) {
        var request = require('request');
        request('http://www.omdbapi.com/?apikey=40e9cece&t=Mr.+Nobody', function (error, response, body) {
            if (error) {
                console.log('error:', error); // Print the error if one occurred 
            }  
            else {
                // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received  
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
                console.log("Country Produced: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);

            }
        });
    }
    else {
        var movie = process.argv[3]


        var request = require('request');
        request('http://www.omdbapi.com/?apikey=40e9cece&t=' + movie, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred 
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country Produced: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        });
    }
}
else {
    //run the do-what-it-says command 
    fs.readFile('random.txt', 'utf8', function (error, data) {
        if (error) {
            return console.log(error);
        }
        else {
            console.log(data);
            //data.split puts our text in an array
            var output = data.split(","); 
            // console.log(output);
             var command = output[0];
             var song = output[1]

            if (command === "spotify-this-song") {
                keysTwo.spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                    else {
                        console.log("Song Name: " + data.tracks.items[0].name); 
                        console.log("Artists: " + data.tracks.items[0].album.artists[0].name); 
                        console.log("Album: " + data.tracks.items[0].album.name); 
                        console.log("Preview Link: " + data.tracks.items[0].preview_url); 
                     }
                });
    
            } 
        }
    });
}

