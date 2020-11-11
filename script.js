$(".hide-button").click(function() {
  $(".ghost-image").hide();
});

$(".show-button").click(function() {
  $(".ghost-image").show();
});

$(".update-img-button").click(function() {
  $(".ghost-image").attr("src", "https://data.whicdn.com/images/124172397/original.jpg");
});

$(".message-button").click(function() {
  let message = $("input").val();
  $(".message").append(message + "\n");
});