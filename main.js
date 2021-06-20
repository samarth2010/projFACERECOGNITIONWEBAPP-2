Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'/>";
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yt_YmUP5A/model.json', modelloaded);

function modelloaded() {
    console.log("modelloaded");
};

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("result_obg_name").innerHTML = results[0].label;
        document.getElementById("result_obg_acu").innerHTML = results[0].confidence.toFixed(3) * 100;
    }
}