var itemNames=[];
var itemPrices=[];
var price;
var name;
var total = 0;
var cartTotal = 0;

$(".newItem").click(function(){
    price=$(".itemPrice").val();
    name=$(".itemName").val();
    itemNames.push(name);
    total = total+parseInt(price);
    
$(".purchase").click(function(){
    alert("Congratulations , You Bought All Items");
});

    $(".cart").append("<div class='item'><p>"+name+"</p><p>$"+price+"</p></div>");
    $(".total").text("Total:" + "$" + total);
    $(".number").text("Items in Cart:" + itemNames.length);

});
