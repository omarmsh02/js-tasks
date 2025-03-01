function makeBold() {
    document.execCommand('bold', false, null);
}

function makeItalic() {
    document.execCommand('italic', false, null);
}

function makeUpperCase() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.innerHTML = editableDiv.innerHTML.toUpperCase();
}

function makeLowerCase() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.innerHTML = editableDiv.innerHTML.toLowerCase();
}

function capitalizeText() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.innerHTML = editableDiv.innerHTML.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

function alignLeft() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.textAlign = 'left';
}

function alignCenter() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.textAlign = 'center';
}

function alignRight() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.textAlign = 'right';
}

function changeTextColor() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.color = prompt("Enter text color (e.g., red, #ff0000):");
}

function changeBackgroundColor() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.backgroundColor = prompt("Enter background color (e.g., yellow, #ffff00):");
}

function clearText() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.innerHTML = '';
}

function changeFontSize() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.fontSize = prompt("Enter font size (e.g., 16px, 1.5em):");
}

function changeFontFamily() {
    let editableDiv = document.getElementById('mytext');
    editableDiv.style.fontFamily = prompt("Enter font family (e.g., Arial, 'Times New Roman'):");
}

function printText() {
    let printableContent = document.getElementById('mytext').innerHTML;
    let printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Print Text</title></head><body >');
    printWindow.document.write(printableContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
