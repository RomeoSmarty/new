var selectedrow=null

function onformsubmit(e){

    event.preventDefault();
    var formdata= readformdata();
    if(selectedrow==null){
        insertnewrecord(formdata)
    }

    else{
        ubdatedrecord(formdata);
    }
resetform();
    
}

function realformdata(){
    var data = {};
    DATA ["productcode"]=document.
    getElementById("productcode").
    value;
    DATA ["product"]=document.
    getElementById("product").
    value;
    DATA ["qty"]=document.
    getElementById("qty").
    value;
    DATA ["price"]=document.
    getElementById("price").
    value;
    return DATA;
}

//insert the data
function insertnewrecord(data) {
    var mlti = data.qty * data.price;
    var table = document.getElementById
    ("store").getElementsByTagName
    ("tbody")[0];
    //if (table.rows.length >= 10) {
    // alert("table can only have 10 rows");
    // return;
   // }

   var newrow = table.insertRow(table.length);
   cell1 = newrow.insertCell(0);
   cell1.inerhtml = data.productcode;

   cell2 = newrow.insertCell(1);
   cell2.inerhtml = data.product;

   cell3 = newrow.insertCell(2);
   cell3.inerhtml = data.qty;

   cell4 = newrow.insertCell(3);
   newrow.setAttribute
   ('data-original-price', data.price);
   cell4.innerhtml = multi;

   cell5 = newrow.insertCell(4);
   cell5.inerhtml = 
   '<button onclick="onedit(this)" class=btn btn-outline-danger text-light fw-bold">EDIT</button>' 
   '<button onclick="ondelete(this" class="btn btn-outline-secondary text-light fw-bold">DELETE</button>';

   calculatetotalPrice();
}
function calculatetotalPrice(){
    var table = document.getElementById ("store").getElementsByTagName("tbody")[0];
var rows =table.getElementsByTagName ("tr");
var total=0;
for(var i = 0; i < rows.length; i++)
{
    var row=rows [i];
    var pariceCell= row.cells[3];
    var price=parseFloat(pariceCell.innerHTML);
    total +=price;
    }
// Display the total price
}