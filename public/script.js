console.log(45);

// document.getElementById('cl').addEventListener('click', postData);

function postData() {
    event.preventDefault();

    let noteId = document.getElementById('noteId').value;
    console.log(noteId);

    // let form = new FormData(document.getElementById('myform'));
    let firstname = document.getElementById('nameNote').value;
    let secondname = document.getElementById('descriptionNote').value;
    console.log(firstname);

    const formData = new FormData(document.getElementById('myform'));
    console.log(noteId);

    fetch('http://localhost:8000/notes/' + noteId, {
        method: 'put',
        body: {
            title: firstname,
            description: secondname
        }
    }).then(response => {
        response.text().then(function (firstname, secondname) {
            // if (!response.ok){
            //     console.log('1');
            // }else {
            //     console.log('2');
            // }
            // document.getElementById('nameNote').value = firstname;
            // document.getElementById('descriptionNote').value = secondname;

        })
    })
}

$.ajax({
  url: '/lists-items',
  success: function(data){
	let ul = document.getElementById("list");
    let tempData = JSON.parse(data);
	for(let i = 0, tempDatalen = tempData.length; i < tempDatalen; i++) {
		let div = document.createElement("DIV");
		div.innerHTML = `<li class="list-group-item list-group-item-primary mt-3">
				<h3 class="mb-1 font-weight-bold text-truncate">${tempData[i].title}</h3>
				<p class="mb-1 text-truncate">${tempData[i].description}</p>
			</li>`;
		ul.appendChild(div);
	}
  }
});

