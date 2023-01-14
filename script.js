let name=document.getElementById("tname");
let pro=document.getElementById("pro-name");
let age=document.getElementById("age");
let btn=document.getElementById("btn-add");
var i=1;
let arr=[];
btn.addEventListener("click",()=>{fun(name,pro,age)});

function fun(name,pro,age)
{
    if((name.value==='' || name.value== null )&& (pro.value==='' || pro.value== null )&&(age.value==='' || age.value== null ))
    {
        document.getElementById("alert-mess").innerText="Error:please make sure all the fields are filled before adding an employee!";
        document.getElementById("alert-mess").style.color='red';

    }
    else
    {
        document.getElementById("alert-mess").innerText="Sucess:Employee Added";
        document.getElementById("alert-mess").style.color='green';

    

        let obj={}

        obj.id=i;
        obj.name=name.value;
        obj.profession=pro.value;
        obj.age=age.value;

        /*append into array */
        arr.push(obj);


        /*increment for id */
        i++;
        // console.log(obj);
        // console.log(arr);


    }






    /*code for table*/

 /* this button for adding user to list*/
    btn.addEventListener("click",()=>{addHtmlTableRow()})

    var rIndex,table = document.getElementById("table");

    function addHtmlTableRow()
    {
        // get the table by id
        // create a new row and cells
        // get value from input text
        // set the values into row cell's
        // if(!checkEmptyInput()){
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            tname = document.getElementById("tname").value,
            proname = document.getElementById("pro-name").value,
            age = document.getElementById("age").value,
            btn= document.createElement("button");    
            btn.innerHTML = "Delete User";

            // 2. Append somewhere
            var body = document.getElementsByTagName("td")[3];
            body.appendChild(btn);
    
        cell1.innerHTML = tname;
        cell2.innerHTML = proname;
        cell3.innerHTML = age;
        cell4.innerHTML = btn;
        // call the function to set the event to the new row
        selectedRowToInput();
    // }
    }

}