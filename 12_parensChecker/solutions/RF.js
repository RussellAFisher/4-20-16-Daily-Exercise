module.exports=parensChecker

var breakItUp;
var matching = 0;

function parensChecker(string) {
    breakItUp = string.split('');
    if (breakItUp[0] === '(' && breakItUp[breakItUp.length-1]=== ')') {
        for (i = 0; i < string.length; i++) {
            if (matching>=0){
            	if(breakItUp[i]==="(")
            	{
            		matching+=1
            	}
            	else if(breakItUp[i]===")"){
            		matching-=1
            	}
            }
        }}
        else{
        	return false
        }
        if (matching ===0){
        	return true
        }
        else {
        	return false
        }
}
