var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'DAEAQLJla7WvSsJjvMlmXZEhT',
  consumer_secret: 'b2IPr4YO9fbYX5Eus1bSl2KhXYB5uqZx3pzoll6C7PrKe6XCHT',
  access_token_key: '68288572-vYKhjICl1dYtUNzaolHJhKoFdHDWwSg97qwIE3Jq5',
  access_token_secret: 'uwAvHkXfaiAjOWPKMjblZks9Z4ENOFmPqaXqn58qvJJmW'
});

var params = {screen_name: 'javascript'};
 client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    React.render(
      <TweetList tweets_list={tweets} />,
      document.getElementById('tweets_list'));
    console.log();
  }else{
    console.log(error);
  }
});

client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(tweet) {
    React.render(
      React.createElement('TweetStream',
        {},tweet.text)
      , document.getElementById('tweets')
    );
  });
  stream.on('error', function(error) {
    throw error;
  });
});


var TweetStream = React.createClass({
    render: function(){
        return (
          <div>
          <h2>{this.props.user}</h2>
          <a onClick={this.algo} href="#">Click</a>
          </div>
        );
    }
});


var TweetList = React.createClass({
  render: function() {
    var results = this.props.tweets_list;
    return (
      <ol>
        {results.map(function(result) {
          return <li key={result.id}>{result.text}</li>;
        })}
      </ol>
    );
  }
});
