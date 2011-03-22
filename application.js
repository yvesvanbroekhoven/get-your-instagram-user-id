/*
 * Get instagram user ID
 */
 
(function(){
  
  var _init
  ,   _getUserData
  ,   _displayUserData
  ,   _login
  ;
  
  var access_token
  ;
  
  $.extend({
    instagramr: function(){
      _init();
    }
  });
  
  _init = function(){
    
    // Remove no-js class
    $('html').removeClass('no-js');
    
    // Check if user is logged in
    _login();
    
    // Event handlers
    $('#get-user-data').click(_getUserData);
    
  };
  
  _getUserData = function(event){
    event.preventDefault();
    
    var request = $.ajax({
      dataType: "jsonp",
      url: "https://api.instagram.com/v1/users/self",
      data: {
        access_token: access_token
      }
    });
    request.success(_displayUserData);
    
  };
  
  _login = function(){
    access_token = location.hash.split('=')[1];
    if (access_token === undefined) {
      $('body').addClass('not-logged-in');
    } else {
      $('body').addClass('logged-in');
    }
  };
  
  _displayUserData = function(json){
    $("#result").html("")
                .fadeIn(300)
                .append("Your user ID is: " + json.data.id);
  };
  
})(jQuery);


/*
 * Initialize on DOM Ready
 */ 
$(function(){
  $.instagramr();
});