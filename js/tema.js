$(document).ready(function(){

$('.btn-light').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-SamuelAlmeida')
  $('.jumbotron').removeClass('bg-dark')
  
  $('.jumbotron').addClass('bg-light')
})

$('.btn-dark').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-SamuelAlmeida')
  $('.jumbotron').removeClass('bg-light')
  
  $('.jumbotron').addClass('bg-dark')
})

$('.btn-info').click(function(t){
  t.preventDefault()
  
  $('.jumbotron').removeClass('bg-light')
  $('.jumbotron').removeClass('bg-dark')
  
  $('.jumbotron').addClass('bg-SamuelAlmeida')
})

})