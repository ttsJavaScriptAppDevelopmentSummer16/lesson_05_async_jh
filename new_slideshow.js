
var slideShow = {
  photoList: ["cat", "dog", "fish"],
  currentPhotoIndex: 0,
  nextPhoto:function (){
    if (this.currentPhotoIndex < this.photoList.length) {
      this.currentPhotoIndex +=1;
    }else {
      console.log("End of slideshow");
    }
  },
  prevPhoto:function (){
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex -=1;
    }else {
      console.log("Start of slideshow");
    }
  },
  getCurrentPhoto: function(){
    return this.photoList[this.currentPhotoIndex];
  }

  playInterval: null,

  play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }
}

for (i=0; i<5; i++){
  rand = parseInt((Math.random()*2)%2)
  console.log(rand);
  if (rand===0){
    slideShow.nextPhoto();
  }else {
    slideShow.prevPhoto();
  }
  console.log(slideShow.nextPhoto());
  console.log(slideShow.currentPhotoIndex);
  console.log(slideShow.getCurrentPhoto());
}
