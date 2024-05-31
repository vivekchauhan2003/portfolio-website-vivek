function downloadDocument() {

    // var documentUrl = 'Internshala_Resume_Guide.pdf';
    var documentUrl = 'vive_chauhan_resume_cv.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = documentUrl;
    // downloadLink.download = 'Internshala_Resume_Guide.pdf';
    downloadLink.download = 'vive_chauhan_resume_cv.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
}

function copyEmail() {
    var textToCopy = document.getElementById('textToCopy');
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
function copyPhoneNumber() {
    var textToCopy = document.getElementById('textToCopy1');
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
