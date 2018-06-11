
$(window).on("load", startSide);



function startSide() {
    console.log("startSide");

$("#random_knap").on("click", randomValg);

}





function randomValg() {
    console.log("random valg begynd");



    //    Random Valg

    //$("#box").off("click", clickBox);

    var randomTal = Math.random();
    console.log(randomTal);

    if (randomTal >= 0.5) {
        console.log("opgavebeskrivelse link");
            $("#random_knap").addClass("random_knap_display_none");
          $("#opgavebskrivelse_knap").removeClass("opgavebskrivelse_knap_display_none");
        setTimeout(reloadSide, 5000);


        //gå til skyd bjorn
    } else {
        console.log(" dokusite link");
 $("#random_knap").addClass("random_knap_display_none");

          $("#link_til_dokusite_kea_app_knap").removeClass("link_til_dokusite_kea_app_knap_display_none");

        setTimeout(reloadSide, 5000);
    }
}


function reloadSide(){
    console.log("reload side");


    location.reload();


}

