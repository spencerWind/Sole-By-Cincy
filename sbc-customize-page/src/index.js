var two_color = document.getElementById('two-color');
var three_color = document.getElementById('three-color');
var custom_config = document.getElementById('custom-config');

//configure options
var color_1 = document.getElementById('color-1');
var color_2 = document.getElementById('color-2');
var color_3 = document.getElementById('color-3');
var border_color = document.getElementById('border-color');
var lace_color = document.getElementById('lace-color');
var other_options = document.getElementById('other-options');




//configuration toggle
function twoColorToggle(){
    if(two_color.classList.contains('hidden')){
        two_color.classList.remove('hidden');
    }

    three_color.classList.add('hidden');
    custom_config.classList.add('hidden');

}

function threeColorToggle(){
    if(three_color.classList.contains('hidden')){
        three_color.classList.remove('hidden');
    }

    two_color.classList.add('hidden');
    custom_config.classList.add('hidden');

}

function customConfigToggle(){
    if(custom_config.classList.contains('hidden')){
        custom_config.classList.remove('hidden');
    }
    
    two_color.classList.add('hidden');
    three_color.classList.add('hidden');

}

//configure options
//function colorOneToggle(){
//    if(color_1.classList.contains('hidden')){
//        color_1.classList.remove('hidden');
//    }
//
//    color_2.classList.add('hidden')
//}

function activeClassStrip(){
    var active_class = document.getElementsByClassName('active');
}

function colorOneToggle(){
    activeClassStrip();
    
    color_1.classList.remove('hidden');
    color_1.classList.add('active');
}

function colorTwoToggle(){
    activeClassStrip();
    
    color_2.classList.remove('hidden');
    color_2.classList.add('active');
}

function colorThreeToggle(){
    activeClassStrip();
    
    color_3.classList.remove('hidden');
    color_3.classList.add('active');
}

function borderColorToggle(){
    activeClassStrip();
    
    border_color.classList.remove('hidden');
    border_color.classList.add('active');
}

function laceColorToggle(){
    activeClassStrip();
    
    lace_color.classList.remove('hidden');
    lace_color.classList.add('active');
}



function otherOptionsToggle(){
    activeClassStrip();
    
    other_options.classList.remove('hidden');
    other_options.classList.add('active');
}


