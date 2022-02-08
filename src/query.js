var mainProduct = [];
$(document).ready(function(){

   console.log("Loaded");
});
  

  $('#add_product').click(function(){
    console.log("Button Clicked");
    var sku = $('#product_sku').val();
    var pname = $('#product_name').val();
    var pprice = $('#product_price').val();
    var quantity = $('#product_quantity').val();
    
    validate(sku,pname,pprice,quantity);

  });

  function validate(sku,name,price,quantity) {
      console.log('checked');
    if(sku=="" || name=="" || price=="" || quantity==""){
       $('#mistake').html('<u>All Required Feilds!</u>');
      
    }
    else{
        add(sku,name,price,quantity);
    }

}

function add(sku, name, price,quantity) {
    
    var products = {
        pid: sku,
        pName: name,
        pPrice: price,
        quantity:quantity
    }

    if(mainProduct.length==0){
        mainProduct.push(products);
        display(mainProduct);//display main array
       $('.success').html('<u>Values Added</u>');
        $('.success').css('display','block');
       
       console.log('Value Added');


    }
    else {
        if (checkid(sku)==false) {
            mainProduct.push(products);
            display(mainProduct);//display main array  
            $('.success').html('<u>Values Added</u>');
           $('.success').css('display','block');


          


        }
        else if(checkid(sku)==true){
         $('.mistake').html('<u>Id Already Exist!!<u>');
        $('.mistake').css('display','block');

            
        }
    }

}

//display function
function display(mainProduct) {
    var hTML;
    for (var i = 0; i < mainProduct.length; i++) {
        
        hTML += "<tr><td>" + mainProduct[i].pid + "</td>\
         <td>" + mainProduct[i].pName + "</td> \
         <td>" + mainProduct[i].pPrice + "</td>\
         <td>" + mainProduct[i].quantity + "</td>\
          <td><a onclick=update('"+mainProduct[i].pid+"')> Edit || </a>\
          <a onclick=DeleteEle('"+mainProduct[i].pid+"')> Delete</a></td>\
          </tr>";
    }
    $('#table').html(hTML);
}

//check id
function checkid(id) {

    for (var i = 0; i < mainProduct.length; i++) {
        if(mainProduct[i].pid==id){
             return true;
        }
        

    }
    return false;

}

function update(pid){
    $('#add_product').css('display','none');
    $('#btupdate').css('display','block');

    for(var i=0;i<mainProduct.length;i++){
        

        if(mainProduct[i].pid==pid){
            var pid=mainProduct[i].pid;
            var pname=mainProduct[i].pName;    
            var pprice=mainProduct[i].pPrice;
            var qq=mainProduct[i].quantity;

            console.log(pid,pname,pprice);
            $('#product_sku').val(pid);
            $('#product_name').val(pname);
            $('#product_price').val(pprice);  
            $('product_quantity').val(qq);                 

            break;
        }
        

    }
}

$('#btupdate').click(function(){
    
    var idd=$('#product_sku').val();
    var namee=$('#product_name').val();
    var pricee=$('#product_price').val();
    var qq=$('#product_quantity').val();

    for(var j=0;j<mainProduct.length;j++){
        if(mainProduct[j].pid==idd){
            mainProduct[j].pName=namee;
            mainProduct[j].pPrice=pricee;
            mainProduct[j].quantity=qq;
            $('#product_name').val(pricee);
            $('#product_price').val(namee);
            $('#product_quantity').val(qq);
            
           
            display(mainProduct);
            break;

        }
    }
});


function DeleteEle(pid){
    for(var i=0;i<mainProduct.length;i++){
        if(mainProduct[i].pid==pid){
            mainProduct.splice(i,1);
            display(mainProduct);
            break;
        }
    }
}

$('.close').click(function(){
    $('.success').css('display','none');
    $('.error').css('display','none');

})