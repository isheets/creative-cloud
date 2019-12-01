console.log("js linked"); 

 $(document).ready(function() {

 $('#search').click(getThumbnail);
    
});

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var title = $("#title").val();
  var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + title + '&prop=pageimages&format=json&pithumbsize=300';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    console.log('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    console.log('Woops, there was an error making the request.');
  };

  xhr.send();
}




function getThumbnail() {
  var title = $("#title").val();
  var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=' + title + '&prop=pageimages&format=json&pithumbsize=300';
// jQuery preflight request
$.ajax({
    type: "GET",
    headers: {"Access-Control-Allow-Origin": "*"},
    //dataType: 'json',
    url: url
}).done(function (data) {
  console.log('success');
    console.log(data);
}).fail(function(request, reason) {
  console.log("failed");
  console.log(reason);
});

// // XMLHttpRequest preflight request
// var xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// xhr.onload = function () {
//     console.log(xhr.responseText);
// };
// xhr.send();

// // Fetch preflight request
// var myHeaders = new Headers();
// myHeaders.append("Access-Control-Allow-Origin", "*");
// fetch(url, {
//     headers: myHeaders
// }).then(function (response) {
//     return response.json();
// }).then(function (json) {
//     console.log(json);
// });

  //get JSON results
//  $.getJSON(url, params, showThumbnail);
}

function showThumbnail(response) {
    console.log(response);

}