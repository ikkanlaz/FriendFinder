$("#submit").on("click", function (event) {
  event.preventDefault();

  var newFriend = {
    name: $("#survey-name").val().trim(),
    photo: $("#survey-photo").val().trim(),
    scores: [
      $("#q1").val().trim(),
      $("#q2").val().trim(),
      $("#q3").val().trim(),
      $("#q4").val().trim(),
      $("#q5").val().trim(),
      $("#q6").val().trim(),
      $("#q7").val().trim(),
      $("#q8").val().trim(),
      $("#q9").val().trim(),
      $("#q10").val().trim(),
    ]
  };

  console.log(newFriend);


  $.post("/api/friends", newFriend, function (data) {

    if (data) {
      $('#matchText').text("Your match is " + data.name);
      $('#matchImage').attr("src", data.photo);
      $('#matchModal').modal('show');
    }

  });

});