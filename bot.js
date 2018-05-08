//console.log('hello');
var Twit=require('twit');
var config=require('./config');
var T = new Twit(config);


var stream=T.stream('user');



stream.on('follow', followed);

function followed(eventMsg){

    console.log('Somenone Followed You ');

    var name=eventMsg.source.name;
    var screenName=eventMsg.source.screen_name;

    tweetIt('.@' + screenName + "Hey..What's Up!!");
}




function tweetIt(txt) {

   // var rand=Math.floor(Math.random()*100);

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
