$(document).ready(function(){
    // Toggle Night Mode 
    var night_mode_enabled = false;
    $('.night-mode-btn').on('click',function(){

        $(":root").css("--body-bg-color", "black");
        $(":root").css("--black", "white");

        

        if(night_mode_enabled ==false){
            $(":root").css("--body-bg-color", "black");
            $(":root").css("--black", "white");
            night_mode_enabled = true;
        }else{
            $(":root").css("--body-bg-color", "#F2F5F9");
            $(":root").css("--black", "#000000");
            night_mode_enabled = false;
        }
    })
});