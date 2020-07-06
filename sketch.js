let song;
let button;
let buttonJump;


function setup() {
  createCanvas(400, 400);
  song = loadSound("./sounds/song2.mp3", loaded);
  button = createButton('play');
  button.mousePressed( () => {
    if(!song.isPlaying()){
      song.play()
      song.setVolume(0.3)
      button.html('pause')
    }else{
      song.pause();
      button.html('play')
    }});
  buttonJump = createButton('Random jump in the song')  
  buttonJump.mousePressed( () => {
    let durationTime = song.duration();
    let positionTime = random(durationTime);
    console.log(positionTime);
    song.jump(positionTime);
  })

}
//LOAD SONG
loaded = () => console.log('load');
//LOAD SONG
function draw() {
  background(0);
  textSize(32);
  text('Listen to the song', height/2 -150, width/2);
  fill(255);
}


