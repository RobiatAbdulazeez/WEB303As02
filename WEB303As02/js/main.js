// WEB303 Assignment 2
$(document).ready(function () {

  var content = $("#content"); //to get the content div by Id

  function LoadContent(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", page, true);

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Once the request is successful
        content.fadeOut(400, function () {
          //fade out the content div
          content.html(xhttp.responseText); //Set the new content
          content.fadeIn(400); //fade in the new content
        });
      } else {
        // Display an error message if the request is not successful
        content.html('<p>Error: Request failed with status ' + this.status + '</p>');
      }
    };
    xhttp.send();
  }

  //Click event handlers for the links
  $("#prospect").click(function () {
    content.empty(); //clear the content div
    LoadContent("prospect"); //load new content
  });

  $("#convert").click(function () {
    content.empty(); //clear the content div
    LoadContent("convert"); //load new content
  });

  $("#retain").click(function () {
    content.empty(); //clear the content div
    LoadContent("retain"); //load new content
  });

});
