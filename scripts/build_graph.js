function friendlist(id, name, members) {
	this.ID = id;
    this.name = name;
	if (members === undefined) {
      this.members = []
	}
	else {
      this.members = members;
    }
}

function fetchFriendLists() {
  FB.api('/me/friendlists', function(response) {
  	if (response && !response.error)  {
	  console.log('Successful friendlist grab');
	  console.log(response);
	  var friendlists = [];
	  for (index = 0; index < response.data.length; index++) {
	  	var newFriendlist = new friendlist(response.data[index].id, getFriendListName(response.data[index].id));
	  	friendLists.push(newFriendlist);
	  }
	  console.log(friendlists)
  	}
  });
}

function getFriendListName(id) {
  var name;
  FB.api('/id', function(response) {
  	console.log('Successfully fetched friendlist');
  	console.log(response);
  	name = response.name;
  });
  return name;
}