// Code for the View Route page.

// THe following is sample code to demonstrate navigation.
// You need not use it for final app.

var routeIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (routeIndex !== null)
{
    // If a route index was specified, show name in header bar title. This
    // is just to demnstrate navigation.  You should set the page header bar
    // title to an appropriate description of the route being displayed.
    var routeNames = [ "Route A", "Route B" ];
    document.getElementById("headerBarTitle").textContent = routeNames[routeIndex];
}
  rujtgdjgd