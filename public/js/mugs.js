
var Data;  
var cartArray = []

console.log(localStorage)

function UpdateCart(){
 var cartContents = localStorage.getItem('cartTotal')
 var split = cartContents.split(',')
 console.log(split)

 var numOfCartItems = split.length
 console.log(numOfCartItems)
 $('#cart-total').html(numOfCartItems)
}

UpdateCart()


 


$.get("../api/merch/mugs", function(data) {
        Data = data
        // console.log(data[0])
             for(var i = 0; i < 8; i++){
            $('#dynamic-div').append(
                '<div class = "col-lg-3 col-md-4">'+
                '<h3 class = "text-center" id = "sub-heading">'+ data[i].nameOfProduct +'</h3>'+
                '<img class = "img-fluid img-thumbnail" src = "..'+data[i].img +'">'+
                '<div class = "mainP">'+
                    '<p>'+ data[i].price +'<span class = "float-right">'+data[i].nameOfSeller +'</span></p>'+  
                    '<p>add to cart<span><i id = '+ data[i]._id +' class=" float-right fa fa-heart heart1" aria-hidden="true"></i><span></p>' +
                '</div>' +
            '</div>'           
            )  
            }
        });


      
function addToCart(int){
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== Data[int]._id){  
            cartArray.push(Data[int]._id)
            $('#' + Data[int]._id).css("color", "red");
            $('#' + Data[int]._id).css("font-size", "x-large");
            localStorage.setItem('cartTotal', cartArray)
            console.log(localStorage)
            UpdateCart()
        }
    });   
}
addToCart(0)
addToCart(1)
addToCart(2)
addToCart(3)

 




