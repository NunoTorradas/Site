$(document).ready(function () {
  $("#search-btn").click(function () {
    var username = $("#username").val();
    // Call the GitHub API to retrieve user profile information
    $.getJSON("https://api.github.com/users/" + username, function (data) {
      // Display the information in the element with id "profile"
      $("#profile").html("<p>Nome: " + data.name + "</p>" +
        "<p>E-mail: " + data.email + "</p>" +
        "<p>Repositórios públicos: " + data.public_repos + "</p>" +
        "<p>Seguidores: " + data.followers + "</p>" +
        "<p>Link: " + data.html_url + "</p>");
    });
  });
});
