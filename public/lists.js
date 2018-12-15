window.onload = function() {
	let ul = document.getElementById("list");
	axios
	.get('/getlist')
	.then(response => {
		let arr = [];
		for (key in response.data) {
			arr.push(response.data[key])
		}

		for(let i = 0; i < arr.length; i++) {
			let li = document.createElement("LI");
			li.className = "list-group-item list-group-item-primary mt-3";
			li.innerHTML = `<h3 class="mb-1 font-weight-bold text-truncate">${arr[i].title}</h3>
							<p class="mb-1 text-truncate">${arr[i].description}</p>
							<a href="/list-add">+</a></br>
							<a href="/del/${arr[i]._id}" onclick="deleteList(this)">x</a></br>
							<a href="/updget/${arr[i]._id}"><i class="fas fa-pencil-alt"></i></a>`;
			ul.appendChild(li);
		}
	})
	.catch(error => {
		console.log(error);
	});
};


let sendList = () => {
	let formSend = document.getElementById("upd");
	let elem = formSend.getAttribute("data-rel");
	let nameList = document.getElementById("nameList").value;
	let descriptionList = document.getElementById("descriptionList").value;
	axios
	.put(`/updPut/${elem}`, {
	  title: nameList,
	  description: descriptionList
	})
	.then(response => {
	  window.location.replace('/');
	  console.log(response.status);
	})
	.catch(error => {
	  console.log(error);
	});
}

let deleteList = (data) => {
	event.preventDefault();
	let id = (data.href).match(/\w{24}$/).join("");

  axios
    .delete(`/del/${id}`, {
      _id: id
    })
    .then(response => {
      window.location.replace('/list');
      console.log(response.status);
    })
    .catch(error => {
      console.log(error);
    });
}
