const colorSelect = document.getElementById("colorSelect");

function removeColor(){
    const optionValue = colorSelect.value;
    const options = document.getElementsByTagName("option");
   
    for(const deleteoption of options){
        if(deleteoption.value === optionValue){
            deleteoption.remove();
        }
    }

}
