let Table = document.getElementById("myTable"); 
var editId = null;
class Person{
    constructor(name,age,profession,id){
        // add employee ID
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.id = id;
    }
}


var omar = new Person("Omar Ibrahim", 27 ,"Web Developer",0);
var erik = new Person("Erik Tomica", 26, "Web Developer",1);
var Molly = new Person("Molly Davis", 48, "HR",2);
var company = [omar,erik,Molly];
/// create array compnay that would have three objects; people 

for (let i = 0; i < company.length; i++) {
    addRow(company[i], company[i].id);
}
// for (let i = 0; i < company.length; i++) {
//     let employee = company[i];
//     if(employee.id == button.closest("tr").id){
//         employee.name = '';
//         employee.age = '';
//         employee.job = '';
//     }
    
// }





// ---------- FUNCTION DEFINITIONS ----------------
function addRow (employee,id) {
    let myNewButton = newDeleteButton();
    let populateFields= newEditButton();
    let row = Table.insertRow()
    row.id=id;
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    c1.classList.add('name')
    c1.innerText = employee.name
    c2.innerText = employee.age
    c3.innerText = employee.profession
    c4.appendChild(myNewButton)
    c4.appendChild(populateFields)

}

var fullName = document.getElementById("fname");
var age = document.getElementById("Age");
var job = document.getElementById("Profession");
document.getElementById("btn").addEventListener("click", function() {
    // Here you will have to split this function into two - This function ADDS a new one and EDITS new one - these will be different functions
    console.log(editId)


    if(editId == null){ // Yo we wanna submit!
        var uniqueId = company[company.length -1].id+1;
        let employee = new Person(fullName.value, age.value, job.value, uniqueId+1);
        company.push(employee);
        addRow(employee, employee.id)
    }else{                      // Yo we wanna edit!
        // Read the values from the inputs.
        row = document.getElementById(editId)
        let newName = fullName.value 
        let newAge = age.value
        let newJob = job.value

        
        row.childNodes[0].textContent = newName
        row.childNodes[1].textContent = newAge
        row.childNodes[2].textContent = newJob
        
        // Use the editId to determine specific row.
        // Put those values from inputs into corresponding fields.
        
    }
   
    editId = null; // Read about undefined, null and NaN - what are the differences and which triggers what value (meaning some are true, some give false)

});


// Removing ppl
//*I've created an extra coulmn in my hmtl called actions and now i need to try and create a delet button card that corresponds to my row 




// Add another column called "Actions" 
// On click on the icon, row will be deleted - you should be 
//able to remove the given person from your company array and then rewrite the table from scratch with new data



function newDeleteButton(){  //Creation of the button
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", rowDelete);
    return deleteButton;    
}

    

function rowDelete(e){ // Functionality of the button
    // Logic of deletion
    if(e.target && e.target.classList.contains("delete-button")) {  
        var button = e.target;
        var row = button.closest("tr");
        if (row) {
            row.remove();
        }
    }
}


function newEditButton () {
    var editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.textContent = "Edit";
    
    editButton.addEventListener("click", myEditbutton)
        return editButton;
};

function myEditbutton() {
    // for (let i = 0; i < company.length; i++) {
        var row = this.closest("tr");
        var id = row.id;
        editId=id;
        let employee = company[id];
        editEmployee(employee);
  console.log(editId);
}
function editEmployee (employee){
    let fNameinput = document.getElementById("fname");
    fNameinput.value = employee.name;
    let ageInput = document.getElementById("Age");
    ageInput.value = employee.age;
    let professionInput = document.getElementById("Profession")
    professionInput.value = employee.profession
    console.log(employee);
    // Read the row id this.closest("tr").id - then store it in a global variable 
}


// on clicking the ediet button find out how to store the information 