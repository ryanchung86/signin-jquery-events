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

  $('.submit').on('click', function() {
    $('input').addClass('error');
  })

  $('input[name*="user"]').on('click', function() {
    $('input[name*="user"]').removeClass('error');
  })

  $('input[name*="pass"]').on('click', function() {
    $('input[name*="pass"]').removeClass('error');
  })

})
