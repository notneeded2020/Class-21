function isTouching (pig,bird){

    if (pig.x-bird.x < bird.width/2 + pig.width/2 &&
      bird.x-pig.x < bird.width/2 + pig.width/2 &&
      pig.y - bird.y < bird.height/2 + pig.height/2 &&
      bird.y-pig.y < bird.height/2 + pig.height/2){
  
    return true;
  
     }else {
  
    return false;  
  
    }
  
  }