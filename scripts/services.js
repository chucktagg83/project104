console.log("Services.js .....");


let select = document.getElementById("serviceName")
let price = document.getElementById("servicePrice")

function disableInput() {
    price.setAttribute("disabled", "")
}

select.addEventListener("change", () => {
    let service  = document.getElementById("serviceName").value

    if (service == "Wash-Dry") {
        disableInput()
        price.value = 55

    } else if (service == "Nail Trimming") {
        disableInput()
        price.value = 40

    } else if (service == "Vaccinations") {
        disableInput()
        price.value = 85
    
    } else if (service == "Socialization") {
        disableInput()
        price.value = 25

    } else if (service == "Boarding") {
        disableInput()
        price.value = 50

    } else if (service == "Pet Spa") {
        disableInput()
        price.value = 85

    } else if (service == "Other") {
        price.value=null
        price.removeAttribute("disabled")
        price.setAttribute("placeholder", "Insert price")
        //alert("All fields are required")
        const pricevalue = $("#servicePrice").val();
        if (pricevalue <= 0){
            $("#servicePrice").css("border", "solid, 2px, red")
        }
    }
    $("#servicesForm").submit(function(event){
        event.preventDefault(event);
        //console.log(event);

        // to clear the form
        this.reset();
    })
});
    
//--------------------------------------------------------------------------------------------------//
/*call the form, then .submit is the action, then function 
$("#servicesForm").submit(function(event){
    event.preventDefault(event);
    //console.log(event);

    //------Validation------//
    //1. Ge the values of the input field (trim takes away any blank spaces)
    const name = $("#serviceName").val().trim();
    const description = $("#serviceDescription").val().trim();
    const price = $("#servicePrice").val();

    //2. Validate the values
    // && = and, || = or
    if (name == "" || description == "" || price <= 0) {
        //alert("All fields are required"); 
        $("#serviceName").css("border", "solid, 2px, red")

    }

    // Two ways to remove border 
    //if no name, put border, esle no border
    if(!name){
        $("serviceName").css("border", "solid, 2px, red");
    } else {
        $("serviceName").css("border", "");
    }

    if(!description){
        $("#serviceDescription").css("border", "solid, 2px, red")
    } else {
        $("#serviceDescription").removeAttr("style");
    }

    // to clear the form
    this.reset();

});*/

//--------------------------------------------------------------
// Dark Mode
//--------------------------------------------------------------

$("#darkOrLight").click(function(){
    $("body").toggleClass("dark-mode");

    $("changeModeButton").text("🌑");
});