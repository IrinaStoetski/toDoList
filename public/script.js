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

