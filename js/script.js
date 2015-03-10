(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {
    $(document).ready(function(){
      /*$('.mycolorbox_link').each(function(){
        $(this).click(function(){
          $(".mycolorbox_shadow").show();
        });   
      });
      $(".mycolorbox_link").colorbox({
        onOpen:function(){ 
        },
        onLoad:function(){ 
        },
        onComplete:function(){
        },
        onCleanup:function(){
        },
        onClosed:function(){
          $(".mycolorbox_shadow").hide();
        }
      });*/
    });    
  }
};


})(jQuery, Drupal, this, this.document);
