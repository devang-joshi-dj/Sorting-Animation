$('.emoji').draggable();
$("#reload").attr("disabled", true);
$(".reload, .reload a").addClass("emonocursor");
var count = 0;
var a = b = c = d = e = 0;
var f = g = h = i = j = 0;
var k = l = m = n = o = 0;
var p = q = r = s = t = 0;
var u = v = w = x = y = 0;
var z = 0;
$(document).ready(function(){
    setInterval(function(){
        document.getElementById("count").innerHTML = count;
        if($('.container1 .emo5').length == 1){ // Correct one for Emoji 5
            $(".emo5").replaceWith("<div class='emoji emo5'>&#128512;</div>");
            if (a === 0){
                a = 1;
                count ++;
                b = c = d = e = 0;
            }
        }
        if($('.container2 .emo5').length == 1){
            if (b === 0){
                b = 1;
                count ++;
                a = c = d = e = 0;
            }
        }
        if($('.container3 .emo5').length == 1){
            if (c === 0){
                c = 1;
                count ++;
                a = b = d = e = 0;
            }
        }
        if($('.container4 .emo5').length == 1){
            if (d === 0){
                d = 1;
                count ++;
                a = b = c = e = 0;
            }
        }
        if($('.container5 .emo5').length == 1){
            if (e === 0){
                e = 1;
                count ++;
                a = b = c = d = 0;
            }
        }
        /////////////////////////////////////////////////////////////////////
        if($('.container2 .emo4').length == 1){ // Correct one for Emoji 4
            $(".emo4").replaceWith("<div class='emoji emo4'>&#128512;</div>");
            if (f == 0){
                f = 1;
                count ++;
                g = h = i = j = 0;
            }
        }
        if($('.container1 .emo4').length == 1){
            if (g == 0){
                g = 1;
                count ++;
                f = h = i = j = 0;
            }
        }
        if($('.container3 .emo4').length == 1){
            if (h == 0){
                h = 1;
                count ++;
                g = f = i = j = 0;
            }
        }
        if($('.container4 .emo4').length == 1){
            if (i == 0){
                i = 1;
                count ++;
                g = h = f = j = 0;
            }
        }
        if($('.container5 .emo4').length == 1){
            if (j == 0){
                j = 1;
                count ++;
                g = h = i = f = 0;
            }
        }
        ///////////////////////////////////////////////////////////////////
        if($('.container3 .emo3').length == 1){ // Correct one for Emoji 3
            $(".emo3").replaceWith("<div class='emoji emo3'>&#128512;</div>");
            if (k == 0){
                k = 1;
                count ++;
                l = m = n = o = 0;
            }
        }
        if($('.container1 .emo3').length == 1){
            if (l == 0){
                l = 1;
                count ++;
                k = m = n = o = 0;
            }
        }
        if($('.container2 .emo3').length == 1){
            if (m == 0){
                m = 1;
                count ++;
                l = k = n = o = 0;
            }
        }
        if($('.container4 .emo3').length == 1){
            if (n == 0){
                n = 1;
                count ++;
                l = m = k = o = 0;
            }
        }
        if($('.container5 .emo3').length == 1){
            if (o == 0){
                o = 1;
                count ++;
                l = m = n = k = 0;
            }
        }
        ///////////////////////////////////////////////////////////////////
        if($('.container4 .emo2').length == 1){ // Correct one for Emoji 2
            $(".emo2").replaceWith("<div class='emoji emo2'>&#128512;</div>");
            if (p == 0){
                p = 1;
                count ++;
                q = r = s = t = 0;
            }
        }
        if($('.container3 .emo2').length == 1){
            if (q == 0){
                q = 1;
                count ++;
                p = r = s = t = 0;
            }
        }
        if($('.container2 .emo2').length == 1){
            if (r == 0){
                r = 1;
                count ++;
                p = q = s = t = 0;
            }
        }
        if($('.container1 .emo2').length == 1){
            if (s == 0){
                s = 1;
                count ++;
                p = r = q = t = 0;
            }
        }
        if($('.container5 .emo2').length == 1){
            if (t == 0){
                t = 1;
                count ++;
                p = r = s = q = 0;
            }
        }
        ///////////////////////////////////////////////////////////////////
        if($('.container5 .emo1').length == 1){ // Correct one for Emoji 1
            $(".emo1").replaceWith("<div class='emoji emo1'>&#128512;</div>");
            if (u == 0){
                u = 1;
                count ++;
                v = w = x = y = 0;
            }
        }
        if($('.container4 .emo1').length == 1){
            if (v == 0){
                v = 1;
                count ++;
                u = w = x = y = 0;
            }
        }
        if($('.container3 .emo1').length == 1){
            if (w == 0){
                w = 1;
                count ++;
                u = v = x = y = 0;
            }
        }
        if($('.container2 .emo1').length == 1){
            if (x == 0){
                x = 1;
                count ++;
                u = w = v = y = 0;
            }
        }
        if($('.container1 .emo1').length == 1){
            if (y == 0){
                y = 1;
                count ++;
                u = w = x = v = 0;
            }
        }
        ///////////////////////////////////////////////////////////////////
        if(($('.container1 .emo5').length == 1) && ($('.container2 .emo4').length == 1) && ($('.container3 .emo3').length == 1) && ($('.container4 .emo2').length == 1) && ($('.container5 .emo1').length == 1)){
            document.getElementById("step").innerHTML = "You sorted all elements in " + count + " steps";
        }else
        if((($('.container1 .emo5').length == 1) || ($('.container2 .emo5').length == 1) || ($('.container3 .emo5').length == 1) || ($('.container4 .emo5').length == 1) || ($('.container5 .emo5').length == 1)) && (($('.container2 .emo4').length == 1) || ($('.container1 .emo4').length == 1) || ($('.container3 .emo4').length == 1) || ($('.container4 .emo4').length == 1) || ($('.container5 .emo4').length == 1)) && (($('.container3 .emo3').length == 1) || ($('.container1 .emo3').length == 1) || ($('.container2 .emo3').length == 1) || ($('.container4 .emo3').length == 1) || ($('.container5 .emo3').length == 1)) && (($('.container4 .emo2').length == 1) || ($('.container3 .emo2').length == 1) || ($('.container2 .emo2').length == 1) || ($('.container1 .emo2').length == 1) || ($('.container5 .emo2').length == 1)) && (($('.container5 .emo1').length == 1) || ($('.container4 .emo1').length == 1) || ($('.container3 .emo1').length == 1) || ($('.container2 .emo1').length == 1) || ($('.container1 .emo1').length == 1))){
            if(z === 0){
                $("#reload").css("background-color", "rgb(54, 54, 138)");
                $('#reload').attr("disabled", false);
                $(".reload, .reload a").removeClass("emonocursor");
                alert("UhOh! You haven't sorted Properly. I think you might need to reload the page. Don't make this mistake next time");
                z = 1;
            }
        }
    }, 1);
});