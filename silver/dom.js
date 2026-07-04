//document.getElementById("heading1").innerHTML="DOM IS AWESOME";
//document.getElementById("para1");
//P.innerHTML="DOM is easy to learn in java script subject in uor college the intenship was condwwebjwbfjkbh Para."


function addRow(){
    let table=document.getElementById("table1");
    let newrow=table.insertRow();

    let cell1=newrow.insertCell(0)
    let cell2=newrow.insertCell(1)
    let cell3=newrow.insertCell(2)

    cell1.innerHTML="4"
    cell2.innerHTML="chinu"
    cell3.innerHTML="24"
}
addRow()
console.log(document)
