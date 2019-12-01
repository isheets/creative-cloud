console.log('js linked');


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const form = document.getElementsByClassName('submitTip')[0]
    form.addEventListener('submit', validate);

    let title = document.getElementById('txt_Tip');
    title.addEventListener("blur", validateField);

    let desc = document.getElementById('txtarea_TipDescription');
    desc.addEventListener("blur", validateField);
});

validateField = (e) => {
    console.log(e);
    if(e.srcElement.value == ''){
        e.srcElement.style.backgroundColor = '#ff5757';
        e.srcElement.placeholder = 'This field is required; please enter some text.';
    }
    else {
        e.srcElement.style.backgroundColor = 'white';
    }
}

var validate = (e) => {
    e.preventDefault();
    console.log('submitted');

    let title = document.getElementById('txt_Tip');
    let desc = document.getElementById('txtarea_TipDescription');

    let valid = true;
    if(title.value == '') {
        valid = false;
        title.style.backgroundColor = '#ff5757';
        title.placeholder = 'Invalid submission; title field is required';
    }
    if(desc.value == '') {
        valid = false;
        desc.style.backgroundColor = '#ff5757';
        desc.placeholder = 'Invalid submission; description field is required';
    }

    if(valid) {
        alert('Thanks for the submission!');
        title.value = '';
        desc.value = '';
        title.placeholder = '';
        desc.placeholder = '';
    }
    else {
        title.focus();
    }

}