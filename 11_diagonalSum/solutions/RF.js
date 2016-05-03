module.exports= function SpongeBobArray(rawr){
  var holder = 0
  for (i=0;i<rawr.length;i++){
    holder += rawr[i][i]
  }
  return holder
}
