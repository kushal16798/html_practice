var items = [];
var itemsCart=[]
var counter = 1;

//formname = orderForm


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

function validate() {
    if (isNaN(document.orderForm.itemQty.value) || (document.orderForm.itemQty.value == '')||(document.orderForm.itemQty.value <=0)) {
        setWarning('Quantity has to be a positive number and cannot be empty either.');
        return true;
    } else if (parseInt(document.orderForm.itemQty.value) < 0) {
        setWarning('Quantity has to be a positive number.');
        return true;

    } else if (isNaN(document.orderForm.itemPrice.value) || document.orderForm.itemPrice.value == ''||document.orderForm.itemPrice.value <=0) {
        setWarning('Price has to be a positive number and cannot be empty either.');
        return true;

    } else if (parseInt(document.orderForm.itemPrice.value) < 0) {
        setWarning('Price has to be a positive number.');
        return true;
    }
    return false;
}

function addItem() {
    var item = {};
    if (validate()) {
        return;
    }
    item.id = counter;
    item.itemName = document.orderForm.itemName.value
    item.itemCode = document.orderForm.itemCode.value
    item.itemQty = document.orderForm.itemQty.value
    item.itemUnitPrice = document.orderForm.itemPrice.value
    item.itemNetPrice = parseInt(item.itemUnitPrice) * parseInt(item.itemQty)

    ++counter

    console.log('Item')
    console.log(item)

    var table = document.getElementById("ordersTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);

    var idCell = row.insertCell(0);
    var itemNameCell = row.insertCell(1);
    var itemCodeCell = row.insertCell(2);
    var itemQtyCell = row.insertCell(3);
    var itemUnitPriceCell = row.insertCell(4);
    var itemNetPriceCell = row.insertCell(5);

    idCell.innerText = item.id;
    itemNameCell.innerText = item.itemName;
    itemCodeCell.innerText = item.itemCode;
    itemQtyCell.innerText = item.itemQty;
    itemUnitPriceCell.innerText = item.itemUnitPrice
    itemNetPriceCell.innerText = item.itemNetPrice

    items.push(item)

    totalBill()
}

function totalBill() {
    var itemCount = items.length;
    let itemAmount = 0;
    // items.forEach(i => {
    //     itemAmount += parseInt(i.itemNetPrice)
    // });
    for(let i=0;i<items.length;i++){
        itemAmount += parseInt(items[i].itemNetPrice);
        //console.log(itemAmount);
        //console.log(items)
    }
    var gst=1.18*itemAmount;
    document.getElementById('count').innerText = ''
    document.getElementById('cost').innerText = ''
    document.getElementById('gst').innerText = ''


    document.getElementById('count').innerText = itemCount
    document.getElementById('cost').innerText = itemAmount
    document.getElementById('gst').innerText = gst

}
 
function addModal(){

    $('#ordersTable1').empty();
    $( "#ordersTable" ).clone().appendTo( "#ordersTable1" );
    }
    
    function totalBill() {
        var itemCount = items.length;
        let itemAmount = 0;
        // items.forEach(i => {
        //     itemAmount += parseInt(i.itemNetPrice)
        // });
        for(let i=0;i<items.length;i++){
            itemAmount += parseInt(items[i].itemNetPrice);
            //console.log(itemAmount);
            //console.log(items)
        }
        var gst=1.18*itemAmount;
        document.getElementById('count').innerText = ''
        document.getElementById('cost').innerText = ''
        document.getElementById('gst').innerText = ''
    
    
        document.getElementById('count').innerText = itemCount
        document.getElementById('cost').innerText = itemAmount
        document.getElementById('gst').innerText = gst
    
    
}

function checkCard(){
    var c = $('#cardDetails').val();
    var cl = parseInt(c.substr(c.length - 1));
    var c = c.slice(0,-1)
    var c = c.split("").reverse().join("");
    var c = c.split("");
    var a = 2;
    var cm = [];
    for (var i = 0; i < c.length; i++){
        if (a%2 == 0){var t = c[i]*2;
        if (t > 9){var t = (t -9);}
        cm.push(t);
        }else{cm.push(parseInt(c[i]));}
        a++;
    }
    var f = 0;
    for (var i = 0; i < cm.length; i++) {f += cm[i];}
    f = f + cl;
    if (f%10 == 0){return true;}else{return false;}
}

function clearAll(){
    if(!(checkCard()&&checkAddress())){
        alert("enter correct details");
    }
    else{
        if(confirm("sure about payment??")){
        $('#exampleModal1').hide();
        location.reload();}
    }
}

function checkAddress(){
    if($('#address').val()==""){
        alert("enter address!!")
        return false;
    }
    else{
        return true;
    }
}
