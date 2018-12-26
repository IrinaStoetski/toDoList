//window.onload = function() {
//	let ul = document.getElementById("list");
//	axios
//	.get('/getlist')
//	.then(response => {
//		let arr = [];
//		for (let key in response.data) {
//			arr.push(response.data[key])
//		}
//		for(let i = 0; i < arr.length; i++) {
//			let li = document.createElement("LI");
//			li.className = "list-group-item list-group-item-primary mt-3";
//			li.innerHTML = `<h3 class="mb-1 font-weight-bold text-truncate">${arr[i].title}</h3>
//							<p class="mb-1 text-truncate">${arr[i].description}</p>
//							<a href="/list-add">+</a></br>
//							<a href="/del/${arr[i]._id}" onclick="deleteList(this)">x</a></br>
//							<a href="/updget/${arr[i]._id}"><i class="fas fa-pencil-alt"></i></a></br>
//							<form class="form" name="form" id="${arr[i]._id}">
//								<input name="item" type="text" class="form-control" placeholder="Enter task">
//								<input id="btn" onclick="itemSend(this)" type="button" class="btn btn-secondary mt-2 mb-2" value="Save">
//							</form>`
//			ul.appendChild(li);
//			axios
//			.get(`/api/lists/${arr[i]._id}`)
//			.then(response => {
//				let form = document.getElementById(arr[i]._id);
//				for(let y = 0; y < arr[i].listObj.length; y++){
//					let div = document.createElement("DIV");
//					let itemText = document.createElement("P");
//					let itemClose = document.createElement("P");
//					itemText.innerHTML = arr[i].listObj[y].itemObj;
//					itemText.setAttribute("class", "updItem");
//					itemText.setAttribute("onclick", "updItem(this)");
//					itemClose.setAttribute("id", `${arr[i].listObj[y]._id}`);
//					itemClose.setAttribute("onclick", "itemDel(this)");
//					itemClose.setAttribute("name", "itemid");
//					itemClose.innerHTML = "&#10006;";
//					div.className = "d-flex mb-2";
//					div.appendChild(itemText);
//					div.appendChild(itemClose);
//					form.appendChild(div);
//				}
//			}).catch(error => {
//			  console.log(error);
//			});
//		}
//	})
//	.catch(error => {
//		console.log(error);
//	});
//};


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


let itemSend = (data) => {
	let id = (data.parentNode).id;
	let child = (data.previousElementSibling);
	axios
	.post(`/lists/${id}`, {
		item: child.value
	})
	.then(response => {
		let form = document.getElementById(id);
		let div = document.createElement("DIV");
		let itemText = document.createElement("P");
		let itemClose = document.createElement("P");
		itemText.innerHTML = child.value;
		itemClose.setAttribute("onclick", "itemDel(this)");
		itemClose.setAttribute("name", "itemid");
		itemClose.innerHTML = "&#10006;";
		div.className = "d-flex mb-2";
		div.appendChild(itemText);
		div.appendChild(itemClose);
		form.appendChild(div);
	})
	.catch(error => {
	  console.log(error);
	});
}

let itemDel = (data) => {
	let parent = ((data.parentNode).parentNode).id;
	let itemid = (data).id;
	console.log(itemid);
	axios
	.put(`/delete/${parent}`, {
		_id: parent,
		itemid: itemid
	})
	.catch(error => {
	  console.log(error);
	})
	.then(response => {
		console.log(response.status);
	});
}

//let updItem = (data) => {
//	let elem = document.querySelector(".updItem");
//	let parent = data.parentNode;
//	let text = elem.innerHTML;
//	let input = document.createElement("INPUT");
//	let button = document.createElement("INPUT");
//	button.setAttribute("onclick", "updSend(this)");
//	button.setAttribute("type", "button");
//	button.innerHTML = "Update Info";
//	button.setAttribute("class", "btnSave");
//	input.setAttribute("value", text);
//	parent.replaceChild(input, elem);
//	parent.append(button);
//}
//
//let updSend = (data) => {
//	let input = (data.previousSibling).previousSibling;
//	let parent = data.parentNode;
//	let btnSave = document.querySelector(".btnSave");
//	let elem = document.createElement("P");
//	elem.setAttribute("class", "updItem");
//	elem.setAttribute("onclick", "updItem(this)");
//	elem.innerHTML = input.getAttribute("value");
//	parent.replaceChild(elem, input);
//}


// Modal window

var modal = document.getElementById('modalAdd');
var btnAdd = document.getElementById('btnAdd');
var btn = document.getElementById('btn');
var span = document.getElementsByClassName("modal-close")[0];

btnAdd.onclick = function() {
	let pos = -100;
	let clear = setInterval(modalAni, 10);
	function modalAni(){
		modal.style.display = "block";
		if (pos < 0) {
			pos+=4;
			modal.style.top = pos + '%';
		} else {
			clearInterval(clear);
		}
	}
}

span.onclick = function() {
	let pos = 0;
	let clear = setInterval(modalClose, 10);
	function modalClose(){
		if (pos > -100) {
			pos-=5;
			modal.style.top = pos + '%';
		} else {
			clearInterval(clear);
		}
	}
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Create tile

btn.onclick = function(e) {
	e.preventDefault();
	let pos = 0;
	let clear = setInterval(modalClose, 10);
	function modalClose(){
		if (pos > -100) {
			pos-=5;
			modal.style.top = pos + '%';
		} else {
			clearInterval(clear);
		}
	}
	let list = document.getElementById("list");
	let title = document.getElementById("title").value;
	let desc = document.getElementById("description").value;
	axios
	.post('/api/list', {
		title: title,
        description: desc
	}).then(response => {
		let needData = response.data[(response.data).length - 1];
		let div = document.createElement("DIV");
		div.className = "tiles-items";
	    div.innerHTML = `<h3 class="mb-1 font-weight-bold text-truncate">${needData.title}</h3>
						<p class="mb-1 text-truncate">${needData.description}</p>
						<div class="btn-block-tiles">
							<a class="btn-update" href='/updget/'+${needData._id}
								<i class="fas fa-pencil-alt"></i>
							</a>
							<a class="btn-delete" href='/del/'+${needData._id} onclick="deleteList(this)">x</a>
						</div>
						<form id="${needData._id}" class="form" name="form">
							<input type="text" class="form-control" name="item" placeholder="Enter task">
							<input type="text" class="btn btn-secondary mt-2 mb-2" id="btn" onclick="itemSend(this)" type="button" value="Save">
						</form>`
		list.appendChild(div);
	})
	.catch(error => {
	  console.log(error);
	});
}

//Delete tile

let deleteList = (data) => {
	event.preventDefault();
	let id = (data.href).match(/\w{24}$/).join("");

	axios
	.delete(`/del/lists/${id}`, {
		_id: id
	})
	.then(response => {
		console.log(response);
	})
	.catch(error => {
	  console.log(error);
	});
}
