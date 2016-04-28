function idk (a,b){
	var combine = []
  if (a.length===b.length){
	for (i=0; i<a.length; i++) {
		combine.push(a[i], b[i])
	}
	return combine}
  else if (a.length<b.length){
  	for (i=0; i<b.length; i++) {
		combine.push(a[i], b[i])
	}
	return combine
  }
  else if (a.length>b.length){
  	for (i=0; i<a.length; i++) {
		combine.push(a[i], b[i])
	}
	return combine
  }

  else {
    console.log("Potato")
  }
}

idk([1,2,3], [4,5,6])
