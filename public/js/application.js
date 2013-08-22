$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('h2').empty();
    var newHeading = $(this).data('heading');
    $('h2').append(newHeading);
  });

  $('.skill_teller').on('click', function(){
    $('h2').empty();
    var url = document.URL;

    $('h2').append(urlParser(url));

    function urlParser(url) {
      var urlArray = url.split('/');
      var arrayLength = urlArray.length;
      skill = urlArray[arrayLength - 1];

      return skill;
    }
  });
    
    $('.meal_teller').on('click', function(){
      $('h2').empty();
      var meal = meals[Math.floor(Math.random()*meals.length)];
      $('h2').append(meal);

    });

  // What other events do you need to bind to make the other pages work?
});
