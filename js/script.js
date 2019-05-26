jQuery('select#character').on('change', function() {
    jQuery('input[name="list"]').val(this.value);
  });

jQuery(function($){
    $(".main__form_phone").mask("+ 38(099)-999-99-99");
  });

new WOW().init();