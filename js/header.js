// main.js

var
    liHdrs = document.getElementsByClassName("liHdr")
    , defaultHdrLiBackgroundColor = ""
    , defaultHdrLiFontWeight = ""
;

window.onload = init;

function LiOnMouseEnter(elem) {
  elem.style.backgroundColor="#404040";
  elem.style.fontWeight="bold";
}
function LiOnMouseLeave(elem) {
  elem.style.backgroundColor=defaultHdrLiBackgroundColor;
  elem.style.fontWeight=defaultHdrLiFontWeight;
}

/*
 *   function ParLiOnMouseEnter(i) {
 *     return function() { LiOnMouseEnter(liHdrs[i]);  } ;
 *   }
 *   function ParLiOnMouseLeave(i) {
 *     return function() { LiOnMouseLeave(liHdrs[i]);  } ;
 *   }
 */


function init(){

  defaultHdrLiBackgroundColor = liHdrs[0].style.backgroundColor;
  defaultHdrLiFontWeight = liHdrs[0].style.fontWeight;

  var le = liHdrs.length;

  for(i=0; i<le; i++)
  {
    //liHdrs[i].addEventListener("mouseenter",  ParLiOnMouseEnter(i) ) ;
    //liHdrs[i].addEventListener("mouseleave", ParLiOnMouseLeave(i) ) ;
    liHdrs[i].addEventListener("mouseenter",  function(evt) { LiOnMouseEnter(evt.target); } ) ;
    liHdrs[i].addEventListener("mouseleave", function(evt) { LiOnMouseLeave(evt.target); } ) ;
  }
}
