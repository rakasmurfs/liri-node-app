# liri-node-app

**Creator**: `Miguel Wolmers`

**Created on**: `August 16 2019`

- - -

## ABOUT THE APP
LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The  `Commands` are:

   * `concert-this`

   * `spotify-this`

   * `movie-this`

   * `do-this`

- - -
## HOW TO USE LIRI

### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

    **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    Output: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/assets/screenshots/concertThis-results.png)

    **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this <name of song>
    
    Output: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/assets/screenshots/spotifyThis-results.png)

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. The system will also log all the results in the log.txt file. See screen-shot below:

    ![Results](/assets/screenshots/movieThis-results.png)


    **Example 4**: Run the `do-this` command
        
        node liri.js do-this
        
    Output: The system will read the text in the random.txt file, and perform the command listed in the random.txt file. 
    
    See screen-shot below:

    ![Results](/assets/screenshots/doThis-results)

- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify-API
    * Moment
    * DotEnv
* APIs used:
    * Bands in Town
    * OMDB
* Git
* GitHub