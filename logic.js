var channelId = "";
var videoIdArray = [];
var videoIdItem;
var videoIdItemArray = [];

var tag = document.createElement("script");
console.log(tag);
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
console.log(firstScriptTag);
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
console.log(player);

$("button").on("click", function() {
  var search = $(this).attr("data-name");
  console.log($(this));
  var queryURL =
    "https://www.googleapis.com/youtube/v3/search?q=carrots&part=snippet&key=AIzaSyAcwzTei_3ijB48GQzlph93ht_rExhGKM4";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .done(function(result) {
      //console.log(result);
      //console.log(result.items);

      result.items.forEach(function(element, i) {
        console.log(element);

        console.log(element.id.videoId);

        videoIdArray.push(element.id.videoId);

        console.log(videoIdArray);
      });

      console.log(videoIdItemArray);

      function onYouTubeIframeAPIReady() {
        player = new YT.Player("player", {
          height: "290",
          width: "540",
          videoId: videoIdArray[0],
          events: {
            onReady: onPlayerReady
            
          }
        });
      }

      function onYouTubeIframeAPIReady1() {
        player = new YT.Player("player1", {
          height: "390",
          width: "640",
          videoId: videoIdArray[1],
          events: {
            onReady: onPlayerReady
            
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      var done = false;
      console.log(!done);
      function onPlayerReady(event) {
        if (!done) {
          //player.stopVideo();
          console.log("stop video!")
        } else {
          event.target.playVideo();
          done = true;
        }
      }

      onYouTubeIframeAPIReady();
      onYouTubeIframeAPIReady1();
    })
    .fail(function(err) {
      throw err;
    });
});

