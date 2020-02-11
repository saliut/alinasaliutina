jQuery(document).ready(function (){

    jQuery('#form1').validate({
        rules:{
            name:{
                required:true
            },
            tel:{
                required:true
            },
            company:{
                required:true
            }
        },
        messages:{
            name:{
                required:"Enter your name"
            },
            tel:{
                required:"Enter your phone number"
            },
            company:{
                required:"Enter your company"
            }
        },
        submitHandler: function(form){
            var name = jQuery('#form1').find('input[name="name"]').val();
            var tel = jQuery('#form1').find('input[name="tel"]').val();
            var company = jQuery('#form1').find('input[name="company"]').val();

            jQuery.post(
                "/contact.php",
                {
                    name:name,
                    tel:tel,
                    company:company
                }
            ),
            jQuery('#modal_window').animate({opacity:'show'},400);
            setTimeout(function(){
                jQuery('#modal_window').animate({opacity:'hide'},400);
            },3000);
            jQuery('#form1 input[type="text"]').val('');
            jQuery('#form1 input[type="tel"]').val('');
            jQuery('#form1 input[type="text"]').val('');
        }
    });
});