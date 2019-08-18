require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');

function concertThis(artist)
    {
        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function(response) 
        {
            for(var i = 0; i < response.data.length; i++)
            {
                if(response.data[i].region)
                {
                console.log(artist + " Has a event at " + response.data[i].venue.name + " in " + response.data[i].venue.city + " on " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                }
                else
                {
                    console.log(artist + " Has a event at " + response.data[i].venue.name + " in " + response.data[i].venue.city + ", " + response.data[i].venue.region + " on " + moment(response.data[i].datetime).format("MM/DD/YYYY"));        
                }
            }
        },

        function(error) {
            if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
            } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            }
            console.log(error.config);
        });

    };
function spotifyThis(songName)
    {
        spotify.search({ type: 'track', query: songName }, function(err, data) 
        {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
            var song = data.tracks.items[1];
            console.log(song.name);
            for(var i = 0; i<song.artists.length; i++)
            {
                console.log(song.artists[i].name);
            }
            console.log("Album name: " + song.album.name);
            console.log("Click here! " + song.external_urls.spotify);
        });
    };
function movieThis(movieName)
    {
        var movieName = "Aladdin";
        if(process.argv[3])
        {
            movieName="";
            for(var i = 3; i < process.argv.length; i++)
            {
                movieName += process.argv[i] + " ";
            }
        }
        var movieName;
        axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
            function(response) 
            {
                //console.log(response.data);
                var movie = response.data;
                console.log("Title: " + movie.Title);
                console.log("Year: " + movie.Year);
                console.log("IDMB Rating: " + movie.Ratings[0].Value);
                console.log("Rotten Tomatos rating: " + movie.Ratings[1].Value);
                console.log("Country: " + movie.Country);
                console.log("Language: " + movie.Language);
                console.log("Plot: " + movie.Plot);
                console.log("Actors: " + movie.Actors);
            })
            .catch(function(error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
              }
              console.log(error.config);
            });
             
    };
    
function doThis()
    {
        var fs = require("fs");
        fs.readFile("random.txt", "utf8", function(error, data) 
        {
        
          // If the code experiences any errors it will log the error to the console.

            var dataArr = data.split(",");

            if(dataArr[0] == 'concert-this')
            {
                var artist = dataArr[1].trim();
                concertThis(artist)
            };
            if(dataArr[0] == 'movie-this')
            {
                var movieName = dataArr[1].trim();
                movieThis(movieName)
            };
            if(dataArr[0] == 'spotify-this')
            {
                var songName = dataArr[1].trim();
                spotifyThis(songName);
            };
          if (error) 
          {
            return console.log(error);
          }
        
        }); 
    };


    if(process.argv[2] == "concert-this")
    {
        var artist = "Billie Eilish";
        if(process.argv[3])
        {
            artist="";
            for(var i = 3; i < process.argv.length; i++)
            {
                artist += process.argv[i] + " ";
            }
            artist=artist.trim();
        }
        concertThis(artist);
    };
    if(process.argv[2] == "spotify-this")
    {
        var songName = "All the Small Things";
        if(process.argv[3])
        {
            songName="";
            for(var i = 3; i < process.argv.length; i++)
            {
                songName += process.argv[i] + " ";
            }
        }
        spotifyThis(songName);
    };
    if(process.argv[2] == "movie-this")
    {
        var movieName = "Aladdin";
        if(process.argv[3])
        {
            movieName="";
            for(var i = 3; i < process.argv.length; i++)
            {
                movieName += process.argv[i] + " ";
            }
        }
        movieThis(movieName);
    };
    if(process.argv[2] == "do-this")
    {
        doThis();
    };