let Table = document.getElementById("myTable"); 
var editId = null;
class Person{
    constructor(name,age,profession,id){
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

for (let i = 0; i < company.length; i++) {
    addRow(company[i], company[i].id);
}





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
    console.log(editId)


    if(editId == null){ 
        var uniqueId = company[company.length -1].id+1;
        let employee = new Person(fullName.value, age.value, job.value, uniqueId+1);
        company.push(employee);
        addRow(employee, employee.id)
    }else{         
        row = document.getElementById(editId)
        let newName = fullName.value 
        let newAge = age.value
        let newJob = job.value

        
        row.childNodes[0].textContent = newName
        row.childNodes[1].textContent = newAge
        row.childNodes[2].textContent = newJob
        
        
    }
   
    editId = null;

});



function newDeleteButton(){
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", rowDelete);
    return deleteButton;    
}

    

function rowDelete(e){ 
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
}


