// Use jQuery to toggle the dropdown content
$(document).ready(function(){
  $('.dropbtn').click(function(){
      $('.dropdown-content').toggle();
  });

  // Close the dropdown when clicking outside of it
  $(document).click(function(event){
      if (!$(event.target).closest('.dropdown').length) {
          $('.dropdown-content').hide();
      }
  });
});