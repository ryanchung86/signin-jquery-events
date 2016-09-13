$(function() {
  $('.signin').on('click', function() {
    $('.modal').fadeIn('slow', function() {
      $('.modal').css('display', 'block');
    })
  })
})

$(function() {
  $('.close').on('click', function() {
    $('.modal').fadeOut('slow', function() {
      $('.modal').css('display', 'none');
    })
  })
})
