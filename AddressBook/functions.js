var contactArray = Array(); // contacts informations
var validation; // validation boolean for name,lastname and phonenumber
var i = -1; //array index

    
function validate() //managing our validation here
  {
    validation = true;
    name_Validate();
    lastname_Validate();
    phone_Number_Validate(document.getElementById("phonenumber").value);

    if(validation) //if validation has no problem then contact will be added to the list
      {
        add_Contact();
      }
  }

function add_Contact() // adding contact to the list
  {
    $(document.getElementById("contactList")).empty();
    i++; 
    contactArray[i] = document.getElementById("name").value + " " + document.getElementById("lastname").value + " " + document.getElementById("phonenumber").value;
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    refresh_The_List();
      
  }

function refresh_The_List() // after contact added or deleted this function will be executed. It refreshing the list elements
  {
    $(document.getElementById("contactList")).empty();
    contactArray.sort();
    for(let j=0;j<=i;j++)
    {
       var node = document.createElement("li");
       var textnode = document.createTextNode(j+" "+contactArray[j]);
       node.appendChild(textnode);
       document.getElementById("contactList").appendChild(node);
    }
  }

function name_Validate()// name validation with regular expression, if validation is false then it will give an alert
  {
    if(!document.getElementById("name").value.match(/^([A-Z-İĞÜŞÖÇ][a-z-_ığüşöç]{1,15})$/gm))
    {
      alert("Please write name correctly, at least 2 characters and starts with upper case letter!");
      document.getElementById("name").value = "";
      validation = false;
    }
  }

function lastname_Validate() // lastname validation with regular expression
  {
    if(!document.getElementById("lastname").value.match(/^([A-Z-İĞÜŞÖÇ][a-z-_ığüşöç]{2,15})+[ ]?([A-Z-İĞÜŞÖÇ][a-z-_ığüşöç]{2,15})?$/gm))
    {
      alert("Please write last name correctly, at least 3 characters and starts with upper case letter!");
      document.getElementById("lastname").value = "";
      validation = false;
    }
  }

function phone_Number_Validate(checknumber) // phonenumber validation with regular expression
  {
    if(!checknumber.match(/^[5]+[0-9]{2}?[-]?[0-9]{3}[-]?[0-9]{4}$/im))
    {
      alert("Please write phone number correctly with that form! 5xx-xxx-xxxx or 5xxxxxxxxx");
      document.getElementById("phonenumber").value = "";
      validation = false;
    }
  }

function delete_Contact() // delete contact funtion
  {
    var deleteIndex =document.getElementById("idnumber").value;
    if(deleteIndex>i||deleteIndex<0||deleteIndex=="")
    {
      alert("Please enter a valid id!")
    }
    else
    {
      $(document.getElementById("contactList")).empty();
      contactArray.splice(deleteIndex,1);
      i--;
      refresh_The_List();
    }
  }

 

window.addEventListener("load", function() // search bar function
  {
    document.getElementById("searchBar").addEventListener("keyup", function(){
    var search = this.value.toLowerCase();
      
    var all = document.querySelectorAll("#contactList li");
      
    for (let k of all) {
    let item = k.innerHTML.toLowerCase();
    if (item.indexOf(search) == -1) { k.classList.add("hide"); }
    else { k.classList.remove("hide"); }
          }
        });
      });

     
