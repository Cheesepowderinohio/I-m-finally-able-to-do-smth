song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist= 0;
scoreRightWrist= 0;
songStatus = "";
song2Status = "";

function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

     video = createCapture(VIDEO);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist" + scoreLeftWrist);

        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY");
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "righttWristY");
    }

}

function draw(){
    image(video, 0, 0, 600, 500);
    songStatus = song.isPlaying();
    song2Status = song2.isPlaying();
    fill("#d5c0ff");
        stroke("#d5c0ff");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20)
        
         song2.stop()
    
    if (songStatus == false)
    {
        song.play();
        document.getElementById("goAway").innerHTML="Harry Potter Theme";
    }    
    
    }
    
    if(scoreLeftWrist > 0.2)
        {
            circle(leftWristX, leftWristY, 20)
            
             song2.stop()
        
        if (songStatus == false)
        {
            song.play();
            document.getElementById("goAway").innerHTML="Harry Potter Theme";
        }    
        
        }

        if(scoreRightWrist > 0.2)
            {
                circle(rightWristX, rightWristY, 20)
                
                 song.stop()
            
            if (song2Status == false)
            {
                song2.play();
                document.getElementById("goAway").innerHTML="Peter Pan Song";
            }    
            
            }

        }
