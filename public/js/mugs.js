$('#heart1').click(function(){
    alert("heart clicked")
})



var Data;
var cart = 0;    
var cartArray = []
$.get("../api/merch/mugs", function(data) {
        Data = data
        console.log(data[0])
             for(var i = 0; i < 2; i++){
            $('#dynamic-div').append(
                '<div class = "col-lg-3 col-md-4">'+
                '<h3 class = "text-center" id = "sub-heading">'+ data[i].nameOfProduct +'</h3>'+
                '<img class = "img-fluid img-thumbnail" src = "..'+data[i].img +'">'+
                '<div class = "mainP">'+
                    '<p>'+ data[i].price +'<span class = "float-right">'+data[i].nameOfSeller +'</span></p>'+
                    '<p>'+ data[i].description +'</p>'+  
                    '<div class = "text-center">' +
                        '<i id = '+ data[i]._id +' class="fa fa-heart heart1" aria-hidden="true"></i>' +
                    '</div>' +
                '</div>' +
            '</div>'           
            )  
            }
        });
 
function addToCart(int){
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== Data[int]._id){
            // console.log(Data[int]._id)
            cart++
            localStorage.setItem('username', 'Jessica')
            console.log(localStorage)
            // $('#cart-total').html(cart)
            // cartArray.push(Data[int]._id)
            // console.log("cartArray : " + cartArray)
        }
    }); 
}
addToCart(0)
addToCart(1)
addToCart(2)
addToCart(3)

 



