//pure css believe me, remove javascript and you'll see

//javascript used to switching next animation 

//take a list from MagicArray and change variables(dotAnimation and trackAnimation) in scss 

var MagicArray = new Array([0.2,8],[0.2,1],[0.5,1],[3.8,1],[3.8,10],[1,0.2],[10,0.2],[10,0.5],[10,0.1],[9,1],[9.7,1],[9.5,1],[9,4],[1,4],[0.2,1.75],[0.3,0.3],[0.3,1],[9.1,0.01],[0.5,0.5],[1,1],[1.8,1.8]);

var addRule = (function(style){
    var sheet = document.head.appendChild(style).sheet;
    return function(selector, css){
        var propText = Object.keys(css).map(function(p){
            return p+":"+css[p]
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    }
})(document.createElement("style"));

window.onload = function(e){
	var elements = document.getElementsByClassName('dots');
	var index = 0;
	setInterval(function(){
		if(document.styleSheets[1].cssRules.length>0){
			for(var i = 0;i<document.styleSheets[1].cssRules.length;i++){
				document.styleSheets[1].deleteRule(i);
			}
		}		
		for (var i = 0; i < elements.length; i++) {
			addRule(".dots:nth-child("+(i+1)+")", {
			    "animation-delay": (-1*MagicArray[index][0]*i)+"s !important"
			});	
			addRule(".dots:nth-child("+(i+1)+"):after", {
			    "animation-delay": (-1*MagicArray[index][1]*i)+"s !important"
			});			
		};
		index = ((index+1)==MagicArray.length ? 0 : index+1);
	},2500);
}