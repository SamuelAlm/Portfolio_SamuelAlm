$(document).ready(function(){

$('.btn-light').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-SamuelAlmeida')
  $('.jumbotron').removeClass('bg-dark')
  
  $('.jumbotron').addClass('bg-light')
  
  $('a').removeCla'text-white')
  $('a').addClass('text-dark')
})

$('.btn-dark').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-SamuelAlmeida')
  $('.jumbotron').removeClass('bg-light')
  
  $('.jumbotron').addClass('bg-dark')
  
  $('a').removeClass('text-dark')
  $('a').addClass('text-white')
})

$('.btn-info').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-light')
  $('.jumbotron').removeClass('bg-dark')
  
  $('.jumbotron').addClass('bg-SamuelAlmeida')
  
  $('a').removeClass('text-dark')
  $('a').addClass('text-white')
})

})