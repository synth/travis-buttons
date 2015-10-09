var observer = new MutationObserver(function () {
  if(document.getElementById('tail')) {
    loadButtons();
  } else {
    removeButtons()
  }
});
observer.observe(document, {
  childList: true,
  subtree: true,
  attributes: false,
  characterData: false,
});


function loadButtons() {
  console.log("Called loadButton()");
  if($(".log-tail").length > 0 && !window.travisButtons) {
    console.log("Loading Travis Buttons");
    window.travisButtons = true;
    var btnHtml = "<div id='tb-wrapper'><div class='button button-info' id='tb-top'>Top</div> <div id='tb-bottom' class='button button-primary'>Bottom</div></div>";
    var $btns = $(btnHtml);
    $btns.css({position: "fixed",top:0,left:"45%","z-index":1000})
    $("body").append($btns);

    $(document).on('click', '#tb-top', function(){
      console.log('clicked to top');
      $(".to-top").trigger('click');
    });

    $(document).on('click', '#tb-bottom', function(){
      console.log('clicked to bottom');
      //window.Travis.tailing.start();
      $(".log-tail").trigger('click');
    });

  } else if(!$(".log-tail")) {
    $("#tb-wrapper").remove();
    window.travisButtons = false;
  }
}

function removeButtons() {
  if(window.travisButtons) {
    $("#tb-wrapper").remove();
    window.travisButtons = false;    
  }
}
