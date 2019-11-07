function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

function skills2(ele)	{
	var x = document.getElementById(ele);
	if (x != null)	{
		if (x.style.display == "block")	{
			x.style.display = 'none';
		}
		else
		{
			x.style.display = 'block';
		}
		return false;
	}
}
