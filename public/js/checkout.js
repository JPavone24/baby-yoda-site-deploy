

$.get("../api/cart/", function(data) {
 for(var i = 0; i < data.length; i++){
     console.log(data[0])  
        var nameOfProduct = JSON.stringify(data[i].nameOfProduct).replace(/"/g,"")
        var nameOfSeller = JSON.stringify(data[i].nameOfSeller).replace(/"/g,"")
        var price = JSON.stringify(data[i].price).replace(/"/g,"")
        var department = JSON.stringify(data[i].department).replace(/"/g,"")
        var img = JSON.stringify(data[i].img).replace(/"/g,"")
        var description = JSON.stringify(data[i].description).replace(/"/g,"")
 
    $('#dynamic-div').append(
                    '<div class = "col-lg-12 col-md-12">'+
                    
                        '<div class = "mainP">'+
                            '<div class = "row">'+
                                '<div class = "col-lg-4 offset-1 col-md-4">'+
                                    '<img class = "img-fluid img-thumbnail" src = '+ img +'>'+
                                '</div>' +  
                                '<div class = "col-lg-6 col-md-6" id = "inner-text">'+  
                                        '<div class = "text-center">'+
                                            '<h3 id = "sub-heading">'+ nameOfProduct +'</h3>'+
                                            '<p> made with love by </p>'+ 
                                            '<p>' + nameOfSeller + '</p>' +
                                            '<p>' + description + '</p>' +
                                        '</div>' +
                                        '<p class> Price: ' + price + '</p>' +
                                        '<p>Proceed to checkout<input type = "checkbox"></p>'+
                                        '<p>Quantity: 1</p>'+
                                        '<p>save for later: 1</p>'+
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' 
    
    )}
})
  

             
    // for(var i = 0; i < 8; i++){
        // $('#dynamic-div').append(
        //     '<div class = "col-lg-3 col-md-4">'+
        //     '<h3 class = "text-center" id = "sub-heading">'+ data[i].nameOfProduct +'</h3>'+
        //     '<img class = "img-fluid img-thumbnail" src = "..'+data[i].img +'">'+
        //     '<div class = "mainP">'+
        //         '<p>'+ data[i].price +'<span class = "float-right">'+data[i].nameOfSeller +'</span></p>'+  
        //         '<p>add to cart<span><i id = '+ data[i]._id +' class=" float-right fa fa-heart heart1" aria-hidden="true"></i><span></p>' +
        //     '</div>' +
        // '</div>'           
        // )  
//         }
//    }
// checkOutDisplay()


   