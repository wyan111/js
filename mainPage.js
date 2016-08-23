// Code for the main app page (Routes List).

// THe following is sample code to demonstrate navigation.
// You need not use it for final app.

function viewRoute(locationName)
{
    // Save the desired location to local storage...
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName); 
    // ... and load the view route page.
    location.href = 'viewRoute.html';
}
