const videoElement = document.getElementById('video')
const button = document.getElementById('button')

async function selectMediaStream() {
    try {
            const mediaStream = await navigator.mediaDevices.getDisplayMedia();
            videoElement.srcObject = mediaStream;
            videoElement.onloadedmetadata = () => {
                videoElement.play();
            }
    } catch (error) {
            console.error("Error: " + error);
        }
 }

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start pic-in-pic
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// on load
selectMediaStream();
