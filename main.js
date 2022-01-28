send.addEventListener("click",calc);
function calc(){
    let val_sebestoimost = sebestoimost.value;
    let val_tovarooborot = tovarooborot.value;
    let val_nadbavka = nadbavka.value;
    let val_result;
    val_result = val_tovarooborot*(val_nadbavka/100)-val_sebestoimost;
    result.innerHTML = val_result.toFixed(2);

}
