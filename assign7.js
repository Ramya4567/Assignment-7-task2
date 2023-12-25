
function getBitDepth(numColors) {
    if (numColors <= 2) {
        return 1;
    } else if (numColors <= 16) {
        return 4;
    } else if (numColors <= 256) {
        return 8;
    } else {
        return 24;
    }
}

function indexedFileSize(width, height, numColors) {

    const totalPixels = width * height;

    
    const bitDepth = getBitDepth(numColors);

    
    const fileSize = totalPixels * (bitDepth / 8);

    return fileSize;
}

function calculateFileSize() {
  
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    const numColors = parseInt(document.getElementById("colors").value);

   
    const fileSizeBytes = indexedFileSize(width, height, numColors);

    
    const fileSizeKB = fileSizeBytes / 1000;

    
    const resultMessageDiv = document.getElementById("resultMessage");

    
    if (fileSizeKB < 50) {
        resultMessageDiv.innerHTML = `The  file size is ${fileSizeKB.toFixed(1)} KB,which is OK!`;
        resultMessageDiv.style.color = "green";
    } else {
        resultMessageDiv.innerHTML = `The  file size is ${fileSizeKB.toFixed(1)} KB, which is too large.`;
        resultMessageDiv.style.color = "red";
    }
}
