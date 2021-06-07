const startBtn = document.getElementById("startBtn");
const preview = document.getElementById("preview");

const handleStart = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
    });
    video.srcObject = stream;
    video.play();
};

startBtn.addEventListener("click", handleStart);