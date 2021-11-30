



$(document).ready(function(){
    // Mobile nav touch
    // $('.left-sb-wrapper').on("swipeleft", closeNav);


  $(document).on('click','input', function(){

    $(this).attr('value', function() {
        return $(this).val();
      });

  });


  $('.box').on('click', function(){
    $('.box-goods-wrapper').addClass('show');
    $('.box-goods-container').addClass('pos');
  });

  $('.box-goods-container .close').on('click', function(){
    $('.box-goods-wrapper').removeClass('show');
    $('.box-goods-container').removeClass('pos');
  });
   
  // ======================

  $('.main-box').on('click', function(){
    $('.boxes-wrapper').addClass('show');
    $('.boxes-container').addClass('pos');
  });

  $('.boxes-container .close').on('click', function(){
    $('.boxes-wrapper').removeClass('show');
    $('.boxes-container').removeClass('pos');
  });


  // Drag and Drop
  // $( ".item" ).draggable({
  //   addClasses: true,
  //   appendTo: ".dropped-box"
  // });

  // $( ".dropped-box" ).droppable(
  // // {
  //   // drop: function( event, ui ) {
  //   //   $( this )
  //   //     .addClass( "ui-state-highlight" );
  //   //     // .find( "p" )
  //   //     //   .html( "Dropped!" );
  //   // }
  // // }
  // );

  // $('.item').draggable();
  // // // $('.dropped-box').draggable();
  // $('.dropped-box').droppable({
  //   drop: function( event, ui ) {
  //       alert('fddf');
  //     }
  // });




  // function allowDrop(ev) {
  //   ev.preventDefault();
  // }

  // function drag(ev) {
  //   ev.dataTransfer.setData("text", ev.target.id);
  // }

  // function drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   ev.target.appendChild(document.getElementById(data));
  // }

  // $('#drag1').on('touchmove', function(){
  //   drag(event);
  // })



  // To dropbox

   let droppedItemCounter = 1;

  $('.items  .item').on('click', function(e){
    // e.preventDefault();
    $('input').attr('value', function() {
      return $(this).val();
    });

    if ($(this).find( $('.total')).val() == 0) {
      return;
    }

    // alert($(this).data('item'));
    console.log(e);
    var itemCounter = $(this).find( $('.total')).val() ;

    itemCounter--;
    $(this).find( $('.total')).val(itemCounter);


 
    var itemHTML = $(this).html();
    if ($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).length == 0) {
      $('.dropped-box').eq(0).append('<div class="item" data-item="' + $(this).data('item') + '">'+ itemHTML + '</div>');

      // $('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val('0');
      $('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val('0').prop("defaultValue");
    }
    
    if ($(this).find( $('.total')).val() >= 0 ) {
      // $(this).attr('value', function() {
      //   return $(this).val();
      // });

      // droppedItemCounter+=1;
      // alert($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val(droppedItemCounter ++));
      $('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val(parseInt($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val() )+ 1 );
    }

    if ($(this).find( $('.total')).val() < 0) {
      $(this).find( $('.total')).val(0);
      return;
    }

  });



// Put inside of box

  $('.btn-wrap').on('click', function(){

   if($('.dropped-box').children('.item').length > 0) {
    $('input').attr('value', function() {
      return $(this).val();
    });

      // $('.dropped-box').html('');  
      // var droppedBoxHTML = $('.dropped-box').html();
      // $('.closed-boxes').append('<div class="box show">' + 
      //       '<a href="javascript:void(0)">' +
      //         '<span>1</span>' + 
      //         '<img src="https://thumbs.dreamstime.com/b/carton-box-icon-package-symbols-over-white-background-vector-illustration-79950274.jpg" width="35" height="35">' + 
      //       '</a>' +
      //     '</div>'
      //     ).append('<div class="sub-items">' + droppedBoxHTML + '</div>');


      var droppedBoxHTML = $('.box-wrapper #dropped-box').html();

      console.log(droppedBoxHTML);
      $('.closed-boxes').append('<div class="box show">' + 
            '<a href="javascript:void(0)">' +
              '<span>1</span>' + 
              '<img src="https://thumbs.dreamstime.com/b/carton-box-icon-package-symbols-over-white-background-vector-illustration-79950274.jpg" width="35" height="35">' + 
            '</a>' +
          
        '<div class="sub-items">' + droppedBoxHTML + '</div> </div>');

      $('.dropped-box').html('');  
    }

  });




$(document).on('click','.closed-boxes .box a',function(e) {
  //handler code here
    $(this).siblings('.sub-items').slideToggle();

});


// Put All inside of box
  // $('.btn-wrap-all').on('click', function(){

  //   var checkTotal = 0;
 
  //   $('.items .item').each(function(){
  //     if (parseInt($(this).find('.total').val()) == 0) {
  //       checkTotal++;
  //       // if (checkTotal == $('.items .item').length) {
  //         // if($('.dropped-box').children('.item').length > 0 ) {
  //           $('.dropped-box').html('');  
  //           $('.closed-boxes').append('<div class="box show">' + 
  //                 '<a href="javascript:void(0)">' +
  //                   '<span>1</span>' + 
  //                   '<img src="https://thumbs.dreamstime.com/b/carton-box-icon-package-symbols-over-white-background-vector-illustration-79950274.jpg" width="35" height="35">' + 
  //                 '</a>' +
  //               '</div>'
  //               );
  //         // }

  //       // }

         
  //     }
  //     else{
  //       alert('dffdf');
  //     }
      
  //   });

  

  // });






});




  



$(document).delegate(".dropped-box  .item", 'click', function (e) {
  var droppedItemCounter = $(this).find( $('.total')).val() ;
    droppedItemCounter--;
    $(this).find( $('.total')).val(droppedItemCounter);


    // if ($(this).find( $('.total')).val() < 0) {
    //   $(this).remove();
    // }
    
    if ($(this).find( $('.total')).val() >= 0 ) {

      // droppedItemCounter+=1;
      // alert($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val(droppedItemCounter ++));

      // var currentItemDataAttr =  $(this).data('item');

      var minusValue = $('.item[data-item="'+ $(this).data('item') +'"]').find('.total').val();

      $('.items .item[data-item="'+ $(this).data('item') +'"]').find('.total').val(  parseInt(minusValue) + 1  );
      if ($(this).find( $('.total')).val() == 0 ) {

        $(this).remove();
      }
    }

    // if ($(this).find( $('.total')).val() < 0) {
    //   $(this).find( $('.total')).val(0);
    //   return;
    // }

});



// Remove item from sub-items

$(document).on('click','.sub-items .item', function(){


  // minus item quantity
  $(this).find('.total').val( $(this).find('.total').val() - 1);

  // plus quantity to items


  var restItem = $('#main .items .item[data-item="' + $(this).data('item') + '"]');
  $('#main .items .item[data-item="' + $(this).data('item') + '"]').find('.total').val(  parseInt(restItem.find('.total').val() ) + 1);

  //


  if ($(this).find( $('.total')).val() <= 0) {
    // $(this).parents('.box')[0].remove();
      // return $(this).remove();

      if ($(this).siblings('.item').length < 1) {
        $(this).parents('.box').remove();
      }
      else{
        $(this).remove();
      }
  }





});

  // From dropbox

    // var itemCounter = $(this).find( $('.total')).val() ;

    // itemCounter--;
    // $(this).find( $('.total')).val(itemCounter);


    // if ($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).length == 0) {
    //   $('.dropped-box')[0].appendChild($(this).clone()[0]);
    //   // alert($('.item[data-item="'+ $(this).data('item') +'"]').find('.total').val());
    //   $('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val('0');
    // }
    
    // if ($(this).find( $('.total')).val() >= 0 ) {

    //   // droppedItemCounter+=1;
    //   // alert($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val(droppedItemCounter ++));
    //   $('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val(parseInt($('.dropped-box').find($('.item[data-item="'+ $(this).data('item') +'"]')).find('.total').val() )+ 1 );
    // }

    // if ($(this).find( $('.total')).val() < 0) {
    //   $(this).find( $('.total')).val(0);
    //   return;
    // }
