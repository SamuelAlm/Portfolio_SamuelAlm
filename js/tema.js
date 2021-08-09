$(document).ready(function(){

$('.btn-light').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-SamuelAlmeida')
  $('.jumbotron').removeClass('bg-dark')
  
  $('.jumbotron').addClass('bg-light')
  
  $('.a').removeClass('text-white')
  $('.a').addClass('text-dark')
})

$('.btn-dark').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-SamuelAlmeida')
  $('.jumbotron').removeClass('bg-light')
  
  $('.jumbotron').addClass('bg-dark')
  
  $('.a').addClass('text-white')
  $('.a').removeClass('text-dark')
})

$('.btn-info').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-light')
  $('.jumbotron').removeClass('bg-dark')
  
  $('.jumbotron').addClass('bg-SamuelAlmeida')
  
  $('.a').removeClass('text-dark')
  $('.a').addClass('text-white')
})

})