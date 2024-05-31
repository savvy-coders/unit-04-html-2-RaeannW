

function handleFormSubmit(event) {
 event.preventDefault();

 var username = document.forms["myForm"]["username"].value;
 var fruit = [];
 var gender = document.forms["myForm"]["gender"].value;
 var country = document.forms["myForm"]["country"].value;

 var checkboxes = document.getElementsByName('fruit');
 for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked == true){
        fruit.push(checkboxes[i].value);
    }
 }
 
 var fruits = fruit.join(', ');

 var message = `You Entered the Following: 
 Username: ${username} 
 Favorite Fruits: ${fruits} 
 Gender: ${gender} 
 Country: ${country}`;

alert(message);
}
