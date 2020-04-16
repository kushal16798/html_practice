var students = [];
var counter=1;
var selectedRow=null;
function addStudents() {
    var student = {};
    if(validate()){
      return;
    }
    student.counter=counter;
    student.id = document.getElementById("id").value;
    student.firstName = document.getElementById("firstName").value;
    student.lastName = document.getElementById("lastName").value;
    student.email = document.getElementById("email").value;


    var table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);


    var idCell = row.insertCell(0);
    var idFirstName = row.insertCell(1);
    var idLastName = row.insertCell(2);
    var idEmail = row.insertCell(3);
    var idBtn1 = row.insertCell(4)
    var idBtn2 = row.insertCell(5)

    idCell.innerText = student.id;
    idFirstName.innerText = student.firstName;
    idLastName.innerText = student.lastName;
    idEmail.innerText = student.email;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="updateStudents(this)">edit</button>'
    idBtn2.innerHTML = idBtn2.innerHTML + '<button type="button" class="btn btn-danger" onclick="deleteStudents(this)">delete</button>'



   reset();
    students.push(student);
    counter++;
   // console.log(counter);
  // reset();
}

function updateStudents(td) {
    selectedRow=td.parentElement.parentElement;
    document.getElementById("custom").disabled=false;
    document.getElementById("custom1").disabled=true;
    document.getElementById("id").value=selectedRow.cells[0].innerHTML;
    document.getElementById("firstName").value=selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value=selectedRow.cells[2].innerHTML;
    document.getElementById("email").value=selectedRow.cells[3].innerHTML;
    
 }

 function updateRecord(){
    selectedRow.cells[0].innerHTML=document.getElementById("id").value;
    selectedRow.cells[1].innerHTML=document.getElementById("firstName").value;
    selectedRow.cells[2].innerHTML=document.getElementById("lastName").value;
    selectedRow.cells[3].innerHTML=document.getElementById("email").value;
    document.getElementById("custom").disabled=true;
    document.getElementById("custom1").disabled=false;
    reset();
 }
 function deleteStudents(td){
     if(confirm('sure about delete the data?')){
    row=td.parentElement.parentElement;
    document.getElementById("studentsTable").deleteRow(row.rowIndex);
     }
 }

 function reset(){
    // document.getElementById("id").innerText.value='';
    // document.getElementById("firstName").innerText="";
    // document.getElementById("lastName").innerText="";
    // document.getElementById("email").innerText="";
    document.form1.id.value="";
    document.form1.firstName.value="";
    document.form1.lastName.value="";
    document.form1.email.value="";
 }

 function search(){
   var  input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("studentsTable");
    var tr = table.getElementsByTagName("tr");


    for (var i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        tdd = tr[i].getElementsByTagName("td")[1];
        if (td) {
          var txtValue = td.textContent || td.innerText;
           var txtValue2 = tdd.textContent || tdd.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1|| txtValue2.toUpperCase().indexOf(filter) >-1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
 }


 function validate(){
   if(document.form1.id.value==""){
    setWarning('Id cannot be empty.');
     return true;
   }
   if(document.form1.firstName.value==""){
    setWarning('First Name cannot be empty.');
    return true;
  }
  if(document.form1.lastName.value==""){
    setWarning('Last Name cannot be empty.');
    return true;
    
  }
  if(document.form1.email.value==""||!((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value)))){
    setWarning('give valid email address.');
    return true;
  }
  return false;
 }

 function setWarning(text) {

  var alertWarningHTML = ''
  alertWarningHTML += '<div class="alert alert-dismissible alert-danger">'
  alertWarningHTML += '<button type="button" class="close" data-dismiss="alert">&times;</button>'
  alertWarningHTML += '<h4 class="alert-heading">Warning!</h4>'
  alertWarningHTML += '<p class="mb-0">' + text + '</p>'
  alertWarningHTML += '</div>'

  document.getElementById('message').style.display = 'block'
  document.getElementById('message').innerHTML = alertWarningHTML;


}