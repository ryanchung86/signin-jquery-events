$(function() {
  $('.signin').on('click', function() {
    $('.modal').fadeIn('slow', function() {
      $('.modal').css('display', 'block');
    })
  })
  $('.close').on('click', function() {
    $('.modal').fadeOut('slow', function() {
      $('.modal').css('display', 'none');
    })
  })
})

// $(function() {
// })
