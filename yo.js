var link='http://api.giphy.com/v1/gifs/search?';

var key='&api_key=dc6zaTOxFJmzC';

var search="&q=rainbow";

function setupData(){
    noCanvas();
    var gif= link+ key+ search;

    loadJSON(gif, gotData);
}

function gotData(giphy) {
    console.log(giphy.data[0].images.orignal.url);
}
//
// let url = "https://api.icndb.com/jokes/random";
//
// fetch(url)
//     .then(res => res.json())
//     .then((out) => {
//         console.log(out.value.joke);
//     })
//     .catch(err => { throw err });