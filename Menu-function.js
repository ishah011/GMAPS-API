$(document).ready(function()
{

$("#menuBtn").click(function()
{
var X=$(this).attr('menuBtn');
if(X==1)
{
$("#menu").hide("medium");
$(this).attr('menuBtn', '0'); 
}
else
{
$("#menu").show("slow");
$(this).attr('menuBtn', '1');
}

});

//Mouse click on sub menu
$("#menu").mouseup(function()
{
return false
});

//Mouse click on my account link
$("#menuBtn").mouseup(function()
{
return false
});


//Document Click
$(document).mouseup(function()
{
$("#menu").hide();
$("#menuBtn").attr('menuBtn', '');
});
});
