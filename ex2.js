$(function(){
    function secondes(jour, heures, minutes){
        return jour*3600*24 + heures*3600 + minutes*60;
    }
    
    
$('#calculer').click(function(){
    let jour=parseInt($('#jour').val());
    let heures=parseInt($('#heures').val());
    let minutes=parseInt($('#minutes').val());
    $('p').text("Secondes : " + secondes(jour, heures, minutes));
    })
})