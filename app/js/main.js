$(document).ready(function(){
    // init slider
    $('.slider').slick();
    // init aos
    AOS.init();

    function displayPhotos(data) {
      var photoHTML = "";
      $counter = 0;
      for (let photo of data) {
        photoHTML += '<img src="https://picsum.photos/215/218?image=' + photo.id + '" data-aos="fade-up">';
        $counter++;
        if($counter > 9) {
          break;
        }
      }

      $('#photos').html(photoHTML);
    };

    $.getJSON("https://picsum.photos/list", displayPhotos);
});

// slider js
$('.slider').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  fadeSpeed: 1000
});

// autocomplete
var autocomplete = new autoComplete({
    selector: '.job-search',
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Air traffic controller', 'Accounting', 'Auditor', 'Bailiff', 'Baker', 'Basketweaver', 'Bodyguard', 'Cheesemaker', 'Circus Clown', 'Code Monkey', 'Counsellor', 'Engineer', 'Developer', 'Financial Manager', 'Nun', 'Photographer', 'Pokemon Master', 'Printer', 'Psychiatrist', 'Vuvuzuela Blower'];
        var suggestions = [];
        for (i=0;i<choices.length;i++)
            if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
        suggest(suggestions);
    }
});