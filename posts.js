window.onload = function() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if( this.readyState == 4 && this.status == 200 ) {
        console.log(this.responseText);
      }
  }

  xhttp.open( "GET", "https://medium.com/@pcrumm/latest", true );
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
