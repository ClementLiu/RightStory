
    // add font size chang begin
    var sizeForFont1, sizeForFont2, testName;
    jQuery(document).ready(function() {
        // add to result 

        $('.slider').each(function(index, el) {
            $(".centerDiv").append('<span ' + 'alt="' + $(this).next().text() + '">' + $(this).next().text() + '</span>');
            $(".centerDiv").append('<span ' + 'alt="' + $(this).prev().text() + '">' + $(this).prev().text() + '</span>');
        });
        // check
        $('.holder').each(function(index, el) {
            $(".centerDiv").append('<span ' + 'alt="' + $(this).prev().text() + '">' + $(this).prev().text() + '</span>');
            $("[alt='" + $(this).prev().text() + "']").css('display', 'none');
        });
        // font size change begin
        $('.slider').on("change mousemove", function() {
            console.log($(this).val());
            sizeForFont1 = 1 + ($(this).val() - 50) / 100;
            sizeForFont2 = 1 - ($(this).val() - 50) / 100;
            $(this).next().css('fontSize', sizeForFont1 + 'em');
            $("[alt='" + $(this).next().text() + "']").css('fontSize', sizeForFont1  + 'em');
            $(this).prev().css('fontSize', sizeForFont2 + 'em');
            $("[alt='" + $(this).prev().text() + "']").css('fontSize', sizeForFont2  + 'em');
        });
        $("input[type='checkbox']").click(function() {
            /* body... */
            if ($(this).is(":checked")) {
                $("[alt='" + $(this).parent().prev().text() + "']").css('display', 'initial');
                // console.log($(this).parent().prev().text());
                // it is checked
            } else {
                $("[alt='" + $(this).parent().prev().text() + "']").css('display', 'none');
            }

        });
        // animation 
        $(".buttonCancle").click(function(event) {
            $(this).animate({ opacity: 0 }, 4000);
            $(".centerDiv").animate({ opacity: 0, width: 0 }, 1500);
            $(".enjoy").delay(3000).animate({ opacity: 1 }, 2000);
        });
    });
    // font size change end
    