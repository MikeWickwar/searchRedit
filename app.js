var age =10;

$("#buttoni").click(function(){
    $("#tabl").append("<tr><th>chris</th><th>" +age+"</th><th>Denver</th></tr>");
    age++;
});

$("#buttoni2").click(function(){
    $("#buttoni").hide();
});

$("#tabl").click(function(){
    $("#buttoni").show();
});
``
