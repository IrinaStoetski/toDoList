console.log(45);

// document.getElementById('cl').addEventListener('click', postData);

function postData(event) {
    event.preventDefault();

    // let form = new FormData(document.getElementById('myform'));
    // let firstname = document.getElementById('nameNote').value;
    // let secondname = document.getElementById('descriptionNote').value;

    const formData = new FormData(document.getElementById('myform'));
    fetch('/notes/'+id, {method: 'put', body: formData}).then(response => {
            response.text().then(function (titleNote, description) {
                document.getElementById('nameNote').value = titleNote;
                document.getElementById('descriptionNote').value = description;
            })
        })
}