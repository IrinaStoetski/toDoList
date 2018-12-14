console.log("script is working");

let postData = () => {
  event.preventDefault();
  let noteId = document.getElementById("noteId").value;
  let noteTitle = document.getElementById("nameNote").value;
  let noteDescription = document.getElementById("descriptionNote").value;

  axios
    .put(`/notes/${noteId}`, {
      title: noteTitle,
      description: noteDescription
    })
    .then(response => {
      window.location.replace('/');
      console.log(response.status);
    })
    .catch(error => {
      console.log(error);
    });
};

let deleteData = () => {
  event.preventDefault();
  let noteId = document.getElementById("noteId").value;

  axios
    .delete(`/notes/${noteId}`, {
      _id: noteId
    })
    .then(response => {
      window.location.replace('/');
      console.log(response.status);   
    })
    .catch(error => {
      console.log(error);
    });
};

/*  $.ajax({
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
});  */
