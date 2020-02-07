
$.get("../api/merch/toys", function(data) {
    Data = data
    console.log(data[0])
        //  for(var i = 0; i < 8; i++){
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
        // }
    });