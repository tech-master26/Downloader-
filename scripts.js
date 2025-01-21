document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUrl = document.getElementById('video-url').value;
    alert(`Downloading video from: ${videoUrl}`);
    // Implement the logic to download the video using your backend server
});
