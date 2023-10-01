$(document).ready(function () {
  //json(); 
  ajax();

});

//first fuction for the $.getJSON request
function json() {

  $.getJSON("team.json", function (data) {//method to get the team.json file 

    $.each(data.members, function (index, obj) {
      $("#team").append("<h2>" + obj.name + "</h2>");
      $("#team").append("<h5>" + obj.position + "</h5>");
      $("#team").append("<p>" + obj.bio + "</p>");

    });
  });
}

//second function for the  $.ajax() request
function ajax() {
  $.ajax({
    type: "GET",
    url: "team.json",
    dataType: "json",
    beforeSend: function () {
      $("#team").text("Loading....");
    },
    error: function () {
      $("#team").text("Error: Content could not be retrieved");
    },
    success: function (response) {
      $("#team").empty();
      setTimeout(function () {
        $.each(response.members, function (index, obj) {
          $("#team").append("<h2>" + obj.name + "</h2>");
          $("#team").append("<h5>" + obj.position + "</h5>");
          $("#team").append("<p>" + obj.bio + "</p>");
        });
      }, 3000);
    }
  });
}