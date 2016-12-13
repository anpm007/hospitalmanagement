/**
 * @author Anupam Sinha
 */


$(document).ready(function(){
	
	$('#register_patient').click(function(){
		//document.location.href = '../index.html';
		$('#login_page').css('display','block');
		$('.user-profile').css('display','block');
		$('.container').css('opacity','.5');
	});
	
	$('#close_login').click(function(){
		$('#login_page').css('display','none');
		$('.user-profile').css('display','none');
		$('.container').css('opacity','1');
	});
	
    var authenticationDetails;
    $("#submit").click(function(){
    	 $.ajax({url:"json/authenticate.json",success:function(result){
    	 	authenticationDetails=result;
   		//alert(result.auth[0].firstName);
  }});
        if((($("#user").val()) == authenticationDetails.auth[0].firstName) && (($("#pass").val()) == authenticationDetails.auth[0].lastName))
        {
        	alert("success");
          window.location='index.html';
       
        //window.open('http://www.google.com');
        
        }
        else
        {
            alert("Wrong User ID or Password !");
            $("#user,#pass").val('');
            	
           }
    });
  
       $("#reset").click(function() {       	
      	$("#user,#pass").val('');
      	
});

});