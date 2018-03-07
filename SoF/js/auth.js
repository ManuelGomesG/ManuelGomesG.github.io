$(document).ready(function(){

    isFaceAuth = true;
    var faceAuth = $('.faceAuth');
    var userAuth = $('.userAuth');
    $('#normalLogin').on('click',()=>{
        if (isFaceAuth == true){
            faceAuth.css({
                'display': 'none',
            });
            userAuth.css({
                'display': 'block',
            });
            $('#normalLogin').html("Face ID");
            isFaceAuth = false;
        }

        else{
            faceAuth.css({
                'display': 'flex',
                'flex-direction': 'column',
            });

            userAuth.css({
                'display' : 'none',
            });
            $('#normalLogin').html("Usuario/Contrasena");
            isFaceAuth = true;
        }
    });
});