var two_color = document.getElementById('two-color');
var three_color = document.getElementById('three-color');
var custom_config = document.getElementById('custom-config');


function twoColorToggle(){
    if(two_color.classList.contains('hidden')){
        two_color.classList.remove('hidden');
    }

    //three_color.classList.add('hidden');
    //custom_config.classList.add('hidden');

}

function threeColorToggle(){
    if(three_color.classList.contains('hidden')){
        three_color.classList.remove('hidden');
    }

    //two_color.classList.add('hidden');
    //custom_config.classList.add('hidden');

}

function customConfigToggle(){
    if(custom_config.classList.contains('hidden')){
        custom_config.classList.remove('hidden');
    }
    
    //two_color.classList.add('hidden');
    //three_color.classList.add('hidden');

}
