$(function(){
    function conversion (jours, heures, minutes){

return (jours*24*3600) + (heures*3600) + (minutes*60);
}
let secondes1;
$('#conversion1').click(function(){
    let jours1 = parseInt($('#jours1').val());
    let heures1 = parseInt($('#heures1').val());
    let minutes1 = parseInt($('#minutes1').val());
    secondes1 = conversion(jours1, heures1, minutes1)
    $('#p1').text("Temps en secondes : " + secondes1);
})
$('#conversion2').click(function(){
    /*
    let jours1 = parseInt($('#jours1').val());
    let heures1 = parseInt($('#heures1').val());
    let minutes1 = parseInt($('#minutes1').val());
    let secondes1 = conversion(jours1, heures1, minutes1)
    */
    let jours2 = parseInt($('#jours2').val());
    let heures2 = parseInt($('#heures2').val());
    let minutes2 = parseInt($('#minutes2').val());
    let secondes2 = conversion(jours2, heures2, minutes2)
    $('#p2').text("Temps en secondes : " + secondes2);

    let difference = secondes2 - secondes1;
    $('#p3').text("Différence : " + difference);    

})


})
/*$(function(){

    
    //fonction de convertion en secondes
    function enSecondes(j,h,m){
        return j*24*60*60+h*60*60+m*60;
    }

    //au clique sur le bouton
    $('#calculer').click(function(){    
        //récupération de toutes les valeurs
        let NbJours=$('#NbJours').val();
        let NbHeures=$('#NbHeures').val();
        let NbMinutes=$('#NbMinutes').val();
        let NbJours2=$('#NbJours2').val();
        let NbHeures2=$('#NbHeures2').val();
        let NbMinutes2=$('#NbMinutes2').val();
        //valeur absolue du résultat pour afficher un nombre positif à chaque fois
        let resultat = Math.abs(enSecondes(NbJours,NbHeures,NbMinutes)-enSecondes(NbJours2,NbHeures2,NbMinutes2));
        //affichage
        $('p').text("Différence des deux horaires en secondes : " + resultat +"s");
    })
})
*/
