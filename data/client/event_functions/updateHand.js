function updateHand(data){
  $(".container-fluid").hide();
  $(".dealing-cards").hide();
  $('.draw-card-buttons').show();
  $(".waiting-room").remove();
  $(".active-game").show();
  $(".table-container").css( "height", "280px")
  hand.updateCards(data)
}
