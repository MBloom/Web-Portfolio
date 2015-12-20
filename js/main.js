/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 var pathObj = {
    "signature": {
        "strokepath": [
        {
            "path": "M0.524,32.832    C20.559,20.503,45.109,7.206,69.521,8.833c-7.18,10.885-13.18,22.385-17.999,34.498c15.729,4.719,31.952-4.751,44.998-12    c-34.236,53.409,75.298-1.029,91.496-4.5C135.096,108.478,59.551,178.18,29.022,272.82",
            "duration": 600
        },
        {
            "path": "M158.016,98.829    c-5.6,4.48-16.571,10.047-23.999,14.999c11.695-1.689,22.194-6.189,31.499-13.5c-36.279,27.211,2.332,13.21,10.5,3    c-13.851,27.702,29.854-15.432,35.998,3c-13.226-16.166-35.907-22.534-55.497-15c48.461,6.923,94.621-24.717,140.993-32.998",
            "duration": 600
        },
        {
            "path": "M280.105,18.515    c17.437-5.887,37.189-11.282,55.691-11.282c-12.625,12.788-30.557,23.329-37.87,40.615c62.412,14.05,36.407,40.189-3.383,76.05    c-52.772,47.561-108.761,92.952-154.78,147.335",
            "duration": 400
        },
        {
            "path": "M273.502,0.489    c29.562,52.695-39.415,163.104-65.035,200.744",
            "duration": 200
        },
        {
            "path": "M293.471,153.899    c30.328-25.994,77.789-50.189,82.423-94.769c-28.051,12.915-51.236,58.059-51.236,88c29.606-7.497,20.049-30.92,20.049,4.513    c5.198-5.265,10.396-10.53,15.594-15.795c-4.793,0,3.51,6.119,15.594,0c-20.947-2.357-40.405-11.386-60.146-18.051    c69.299,0,138.277-6.785,207.171-13.538",
            "duration": 600
        }
        ],
        "dimensions": {
            "width": 524,
            "height": 274
        }
    }
}; 
function showMe(obj, del){
    var a = [];
    $(obj).children().each(function () {
        a.push($(this).find('span').first());
    });
    $.each(a, function(i, el) {
        $(el).delay(del + (i * 70)).animate({ down: 45 }, {
            step: function(now,fx) {
                $(this).css({
                    "transform": "translate3d(0px, " + parseFloat(45-now) + "px, 0px)",
                    "opacity": fx.pos
                });
            },
            duration: 800,
            easing: 'easeOutExpo',
            done: function() {
                next(a);
            }
        });
    });
    var next = function(arr) {
        var counter = 1;
        var numberOfLetters = $(arr).size();
        $.each(arr, function(index, elem) {
            $(elem).delay(800 + (index * 70)).animate({ up: 45 }, {
                step: function(now,fx) {
                    $(this).css({
                        "transform": "translate3d(0px, -" + now + "px, 0px)",
                    });
                },
                duration: 800,
                easing: 'easeInExpo',
                complete: function() {
                    counter++;
                    if (counter == numberOfLetters) {
                                //callback();
                            }
                        }
                    });
        });

    }
}
$(function() {
    showMe(".dev", 1000);
    showMe(".dev2", 4000);
    showMe(".dev3", 6500);
    $('#signature').lazylinepainter( 
    {
        "svgData": pathObj,
        "strokeWidth": 4,
        "strokeColor": "#000",
        "delay": 10500,
        "onComplete": function(){
            $('#enter').delay(800).fadeIn(500);
        }
    }).lazylinepainter('paint');
});