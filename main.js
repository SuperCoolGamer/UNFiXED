Webcam.set({
width:150,
height:100,
image_format:'jpeg',
jpeg_quality:90
});

camera= document.getElementById("Camera");

Webcam.attach('#camera');

function takeimage(){

    Webcam.snap(function(data_uri)
    {
        document.getElementById("Result").innerHTML ='<img id="captured_image"  src="'+data_uri+'"/> ';
    });

}



console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CYX-9zPja/https://teachablemachine.withgoogle.com/models/CYX-9zPja/model.json',modelLoaded);