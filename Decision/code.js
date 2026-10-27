function checkEmail()
{
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if( email == "")
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("email-error").innerHTML = "";
    }

    if( confirm == "")
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("confirm-error").innerHTML = "";
    }

    if( confirm != email)
    {
        document.getElementById("confirm-error").innerHTML = "Email does not match";
        document.getElementById("email-error").innerHTML = "Email does not match";
    }
    else if( confirm == email && confirm != "" && email != "")
    {
        document.getElementById("confirm-error").innerHTML = "";
        document.getElementById("email-error").innerHTML = "";
    }
}

function pizzaOrder()
{
   
    var output = "<h3>Pizza Order: ";


    if( document.getElementById("small").checked == true )
    {
        output += " Small ";
    }

    else if( document.getElementById("medium").checked == true )
    {
        output += " medium ";
    }

    else
    {
        output += " Large ";
    }

    if( document.getElementById("pepperoni").checked == true )
    {
        output += " Pepperoni ";
        document.getElementById("pepperoni-topping").style = "display: block;"
    }

    if( document.getElementById("sausage").checked == true )
    {
        output += " Sausage ";
    }

    if( document.getElementById("mushrooms").checked == true )
    {
        output += " Mushrooms ";
    }

    document.getElementById("output").innerHTML = output + "</h3>";
}