var url_Bookmark = [];
checkLocalStorage();

function Addbookmark() {
    sameName()
  
   
        if (validaUrl() == true &&sameName() ==false ) {
            var bookmark = {
                name: document.getElementById("nameofwebsite").value,
                url: document.getElementById("UrlLink").value,
            }
            url_Bookmark.push(bookmark)
            UpdateData()
            clearForm()
            // Get a reference to the div element
                var myDiv = document.getElementById("myDiv");

                // Add the "hidden" class to the div element
                myDiv.classList.add("d-none");

                // Set the display property of the div element to "none"
                myDiv.style.display = "none";

            
        }
        else {       // Get a reference to the div element
            var myDiv = document.getElementById("myDiv");
            
            // Remove the "hidden" class from the div element
            myDiv.classList.remove("d-none");
        
            // Set the display property of the div element to "block"
            myDiv.style.display = "d-block";    }
    }

function clearForm() {
    document.getElementById("nameofwebsite").value = ""
    document.getElementById("UrlLink").value = ""
}
function Display() {

    cartoona = "";
    for (var i = 0; i < url_Bookmark.length; i++) {
        cartoona += `               
         <tr>
            <td>${i + 1}</td>
            <td>${url_Bookmark[i].name}</td>
            <td><button  onclick= "visit(${i})"  class="btn btn-info" id="go">Visit</button></td>
            <td><button onclick="deletabookmark(${i})" class="btn btn-danger">Delete</button></td>
        
        </tr>`
    }
    document.getElementById("tbody").innerHTML = cartoona;
}

function UpdateData() {
    localStorage.setItem("ayhaga", JSON.stringify(url_Bookmark))
    Display()
}

function checkLocalStorage() {
    if (localStorage.getItem("ayhaga") != null) {
        url_Bookmark = JSON.parse(localStorage.getItem("ayhaga"));
        Display();
    }
}

function deletabookmark(index) {
    url_Bookmark.splice(index, 1)
    UpdateData()
}
function visit(index) {
    var location = url_Bookmark[index].url
    window.open(location, "_blank");
}

function validaUrl() {
    var urlvald = document.getElementById("UrlLink").value
    var regxurl = /^(http|https):\/\/[a-zA-Z0-9\-_\.]+\.[a-zA-Z]{2,63}(\/.*)?$/ig;

    return regxurl.test(urlvald)
}

function sameName() {
   var bookmark=document.getElementById("nameofwebsite").value;
    for (var i = 0; i < url_Bookmark.length; i++) {
        if (url_Bookmark[i].name.toLowerCase().includes(bookmark.toLowerCase())) {
            
            return true;
            
        }     
    }

    return false;

    
}

// function wrongName(){
// // Get a reference to the div element
// var divname = document.getElementById("divname");
    
// // Remove the "hidden" class from the div element
// divname.classList.remove("d-none");

// // Set the display property of the div element to "block"
// divname.style.display = "d-block";
// }

function wrongUrl(){

    
}

// function resetwrong(){
//         // Get a reference to the div element
//         var myDiv = document.getElementById("myDiv");
    
//         // Remove the "hidden" class from the div element
//         myDiv.classList.remove("d-block");
    
//         // Set the display property of the div element to "block"
//         myDiv.style.display = "d-none";

//         // Get a reference to the div element
//         var divname = document.getElementById("divname");
            
//         // Remove the "hidden" class from the div element
//         divname.classList.remove("d-block");

//         // Set the display property of the div element to "block"
//         divname.style.display = "d-none";
// }

