//console.log('hello');

var Twit=require('twit');
var config=require('./config');
var T = new Twit(config);


var stream=T.stream('user');


//if someone follows you then use follow
//stream.on('follow', followed);

// function followed(eventMsg){
//
//     console.log('Somenone Followed You ');
//
//     var name=eventMsg.source.name;
//     var screenName=eventMsg.source.screen_name;
//
//     tweetIt('.@' + screenName + "Hey..What's Up!!" + out.value.joke);
// }


// if someone tweets with your name then use tweet

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {

    console.log('It started');
    // to check get the details of the user who has tweeted and store it in a file
    // var fs=require('fs');
    //
    // var json=JSON.stringify(eventMsg, null, 2);
    //
    // fs.writeFile('tweet.json', json);


    var replyto=eventMsg.in_reply_to_screename;
    var text=eventMsg.text;

    var from=eventMsg.user.screen_name;

  //  var id=eventMsg.value.joke;

    console.log(replyto + ' ' + from);

   // console.log(id);


    if(replyto == 'rajpalpulit31'){

        var newtweet= '@' + from + 'thank you for tweeting me';

        tweetIt(newtweet)
    }


}





function tweetIt(txt) {


   // x=out.value.joke;
    var tweet={
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, res){

        if(err){
            console.log(err);
        }
        else{
            console.log('It worked');
        }

    }


}

// var params={
//     q:'anime',
//     count:4
// };
// T.get('search/tweets', params,getData);
//
// function getData(err , data,response) {
//
//     var tweets=data.statuses;
//
//     for(var i=0; i<tweets.length;i++){
//         console.log(tweets[i].text);
//     }
// }


