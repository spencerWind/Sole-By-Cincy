
var main_config = document.getElementById('main-config');
var three_color = document.getElementById('three-color');
var custom_config = document.getElementById('custom-config');

//configure options
var color_1 = document.getElementById('color-1');
var color_2 = document.getElementById('color-2');
var color_3 = document.getElementById('color-3');
var border_color = document.getElementById('border-color');
var lace_color = document.getElementById('lace-color');
var other_options = document.getElementById('other-options');
var color_3_selection = document.getElementById('color-3-selection');




//configuration toggle
function mainConfigToggle(){
    if(main_config.classList.contains('hidden')){
        main_config.classList.remove('hidden');
    }

    color_3_selection.classList.remove('selection-type');
    color_3_selection.classList.add('hidden');
    custom_config.classList.add('hidden');

}

function threeColorToggle(){
    if(main_config.classList.contains('hidden')){
        main_config.classList.remove('hidden');
    }
    
    color_3_selection.classList.remove('hidden');
    color_3_selection.classList.add('selection-type');


}

function customConfigToggle(){
    if(custom_config.classList.contains('hidden')){
        custom_config.classList.remove('hidden');
    }
    
    main_config.classList.add('hidden');

}

function colorOneToggle(){
    if(color_1.classList.contains('hidden')){
        color_1.classList.remove('hidden');
    }

    color_2.classList.add('hidden');
    color_3.classList.add('hidden');
    border_color.classList.add('hidden');
    lace_color.classList.add('hidden');
    other_options.classList.add('hidden');

    document.getElementById('s1').classList.add('active');
    document.getElementById('s2').classList.add('active');

    document.getElementById('s3').classList.remove('active');
    document.getElementById('s4').classList.remove('active');
    document.getElementById('s5').classList.remove('active');
    document.getElementById('s6').classList.remove('active');
    document.getElementById('s7').classList.remove('active');
    document.getElementById('s8').classList.remove('active');
    document.getElementById('s9').classList.remove('active');
    document.getElementById('s10').classList.remove('active');
    document.getElementById('s11').classList.remove('active');
    document.getElementById('s12').classList.remove('active');

}


function colorTwoToggle(){
    if(color_2.classList.contains('hidden')){
        color_2.classList.remove('hidden');
    }

    color_1.classList.add('hidden');
    color_3.classList.add('hidden');
    border_color.classList.add('hidden');
    lace_color.classList.add('hidden');
    other_options.classList.add('hidden');

    document.getElementById('s3').classList.add('active');
    document.getElementById('s4').classList.add('active');

    document.getElementById('s1').classList.remove('active');
    document.getElementById('s2').classList.remove('active');
    document.getElementById('s5').classList.remove('active');
    document.getElementById('s6').classList.remove('active');
    document.getElementById('s7').classList.remove('active');
    document.getElementById('s8').classList.remove('active');
    document.getElementById('s9').classList.remove('active');
    document.getElementById('s10').classList.remove('active');
    document.getElementById('s11').classList.remove('active');
    document.getElementById('s12').classList.remove('active');

}


function colorThreeToggle(){
    if(color_3.classList.contains('hidden')){
        color_3.classList.remove('hidden');
    }

    color_1.classList.add('hidden');
    color_2.classList.add('hidden');
    border_color.classList.add('hidden');
    lace_color.classList.add('hidden');
    other_options.classList.add('hidden');

    document.getElementById('s5').classList.add('active');
    document.getElementById('s6').classList.add('active');

    document.getElementById('s1').classList.remove('active');
    document.getElementById('s2').classList.remove('active');
    document.getElementById('s3').classList.remove('active');
    document.getElementById('s4').classList.remove('active');
    document.getElementById('s7').classList.remove('active');
    document.getElementById('s8').classList.remove('active');
    document.getElementById('s9').classList.remove('active');
    document.getElementById('s10').classList.remove('active');
    document.getElementById('s11').classList.remove('active');
    document.getElementById('s12').classList.remove('active');

}

function borderColorToggle(){
    if(border_color.classList.contains('hidden')){
        border_color.classList.remove('hidden');
    }

    color_1.classList.add('hidden');
    color_2.classList.add('hidden');
    color_3.classList.add('hidden');
    lace_color.classList.add('hidden');
    other_options.classList.add('hidden');

    document.getElementById('s7').classList.add('active');
    document.getElementById('s8').classList.add('active');

    document.getElementById('s1').classList.remove('active');
    document.getElementById('s2').classList.remove('active');
    document.getElementById('s5').classList.remove('active');
    document.getElementById('s6').classList.remove('active');
    document.getElementById('s3').classList.remove('active');
    document.getElementById('s4').classList.remove('active');
    document.getElementById('s9').classList.remove('active');
    document.getElementById('s10').classList.remove('active');
    document.getElementById('s11').classList.remove('active');
    document.getElementById('s12').classList.remove('active');

}

function laceColorToggle(){
    if(lace_color.classList.contains('hidden')){
        lace_color.classList.remove('hidden');
    }

    color_1.classList.add('hidden');
    color_2.classList.add('hidden');
    color_3.classList.add('hidden');
    border_color.classList.add('hidden');
    other_options.classList.add('hidden');

    document.getElementById('s9').classList.add('active');
    document.getElementById('s10').classList.add('active');

    document.getElementById('s1').classList.remove('active');
    document.getElementById('s2').classList.remove('active');
    document.getElementById('s5').classList.remove('active');
    document.getElementById('s6').classList.remove('active');
    document.getElementById('s7').classList.remove('active');
    document.getElementById('s8').classList.remove('active');
    document.getElementById('s3').classList.remove('active');
    document.getElementById('s4').classList.remove('active');
    document.getElementById('s11').classList.remove('active');
    document.getElementById('s12').classList.remove('active');

}



function otherOptionsToggle(){
    if(other_options.classList.contains('hidden')){
        other_options.classList.remove('hidden');
    }

    color_1.classList.add('hidden');
    color_2.classList.add('hidden');
    color_3.classList.add('hidden');
    border_color.classList.add('hidden');
    lace_color.classList.add('hidden');

    document.getElementById('s11').classList.add('active');
    document.getElementById('s12').classList.add('active');

    document.getElementById('s1').classList.remove('active');
    document.getElementById('s2').classList.remove('active');
    document.getElementById('s5').classList.remove('active');
    document.getElementById('s6').classList.remove('active');
    document.getElementById('s7').classList.remove('active');
    document.getElementById('s8').classList.remove('active');
    document.getElementById('s9').classList.remove('active');
    document.getElementById('s10').classList.remove('active');
    document.getElementById('s3').classList.remove('active');
    document.getElementById('s4').classList.remove('active');
    

}



