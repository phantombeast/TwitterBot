var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');
// Making a Twit object for connection to the API
var T = new Twit(config);

var randomWordURL = 'https://api.icndb.com/jokes/random'


var request = require('request');



// Setting up a user stream
var stream = T.stream('user');


// stream.on('follow', followed);
//
//
// function followed(event) {
//     var name = event.source.name;
//     var screenName = event.source.screen_name;
//     console.log('I was followed by: ' + name + ' ' + screenName);
// }

//setInterval(tweetEvent,1000);

stream.on('tweet', tweetEvent);

// Here a tweet event is triggered!
function tweetEvent(tweet) {

       // var fs = require('fs');
    // var json = JSON.stringify(tweet,null,2);
    // fs.writeFile("tweet.json", json, output);


    var reply_to = tweet.in_reply_to_screen_name;

    var name = tweet.user.screen_name;

    var txt = tweet.text;

    var id = tweet.id_str;
    var tweety;

    request(randomWordURL, gotData);

    function gotData(error,res,body) {
        var data=JSON.parse(body)

         tweety=data.value.joke;

        if (reply_to === 'rajpalpulit31') {


            txt = txt.replace(/@rajpalpulit31/g,'');



            var replyText = '@'+name +'\n'+ 'Since you Tweeted Here is Chuck Norris Joke for You:';

            console.log('You received' + txt +'\n');

            // Post that tweet
            T.post('statuses/update', { status: replyText +'\n'+ tweety, in_reply_to_status_id: id}, tweeted);

            // Make sure it worked!
            function tweeted(err, reply) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log('Tweeted: ' + reply.text);
                }
            }
        }

    }


}