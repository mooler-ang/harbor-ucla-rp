
// START section
// Duplicate this section for a new CATEGORY FILTER and modify noted items below to keep it unique:
// cats, cat, portfolio-filter-1
// Community Resources
jQuery(document).ready(function($){
    var $catItems = $('#cats .cat');
    if( window.location.hash != '' ) {
        var getCatFilterHash = window.location.hash;
        var hashCatFilter = getCatFilterHash.split('#');
        if( $catItems.hasClass( hashCatFilter[1] ) ) {
            $('#portfolio-filter-1 li').removeClass('activeFilter');
            $( '[data-filter=".'+ hashCatFilter[1] +'"]' ).parent('li').addClass('activeFilter');
            var hashCatSelector = '.' + hashCatFilter[1];
            $catItems.css('display', 'none');
            if( hashCatSelector != 'all' ) {
                $( hashCatSelector ).fadeIn(500);
            } else {
                $catItems.fadeIn(500);
            }
        }
    }

    $('#portfolio-filter-1 a').click(function(){
        $('#portfolio-filter-1 li').removeClass('activeFilter');
        $(this).parent('li').addClass('activeFilter');
        var catSelector = $(this).attr('data-filter');
        $catItems.css('display', 'none');
        if( catSelector != 'all' ) {
            $( catSelector ).fadeIn(500);
        } else {
            $catItems.fadeIn(500);
        }
        return false;
    });

});
// END section


// START section
// Duplicate this section for a new CATEGORY FILTER and modify noted items below to keep it unique:
// flts, flt, portfolio-filter-3
// Biological Resources
jQuery(document).ready(function($){
    var $catItems = $('#flts .flt');
    if( window.location.hash != '' ) {
        var getCatFilterHash = window.location.hash;
        var hashCatFilter = getCatFilterHash.split('#');
        if( $catItems.hasClass( hashCatFilter[1] ) ) {
            $('#portfolio-filter-3 li').removeClass('activeFilter');
            $( '[data-filter=".'+ hashCatFilter[1] +'"]' ).parent('li').addClass('activeFilter');
            var hashCatSelector = '.' + hashCatFilter[1];
            $catItems.css('display', 'none');
            if( hashCatSelector != 'all' ) {
                $( hashCatSelector ).fadeIn(500);
            } else {
                $catItems.fadeIn(500);
            }
        }
    }

    $('#portfolio-filter-3 a').click(function(){
        $('#portfolio-filter-3 li').removeClass('activeFilter');
        $(this).parent('li').addClass('activeFilter');
        var catSelector = $(this).attr('data-filter');
        $catItems.css('display', 'none');
        if( catSelector != 'all' ) {
            $( catSelector ).fadeIn(500);
        } else {
            $catItems.fadeIn(500);
        }
        return false;
    });
	
});
// END section


// ORIGINAL CODES still used for EIR category
jQuery(document).ready(function($){
    var $faqItems = $('#faqs .faq');
    if( window.location.hash != '' ) {
        var getFaqFilterHash = window.location.hash;
        var hashFaqFilter = getFaqFilterHash.split('#');
        if( $faqItems.hasClass( hashFaqFilter[1] ) ) {
            $('#portfolio-filter-8 li').removeClass('activeFilter');
            $( '[data-filter=".'+ hashFaqFilter[1] +'"]' ).parent('li').addClass('activeFilter');
            var hashFaqSelector = '.' + hashFaqFilter[1];
            $faqItems.css('display', 'none');
            if( hashFaqSelector != 'all' ) {
                $( hashFaqSelector ).fadeIn(500);
            } else {
                $faqItems.fadeIn(500);
            }
        }
    }

    $('#portfolio-filter-8 a').click(function(){
        $('#portfolio-filter-8 li').removeClass('activeFilter');
        $(this).parent('li').addClass('activeFilter');
        var faqSelector = $(this).attr('data-filter');
        $faqItems.css('display', 'none');
        if( faqSelector != 'all' ) {
            $( faqSelector ).fadeIn(500);
        } else {
            $faqItems.fadeIn(500);
        }
        return false;
    });

});
