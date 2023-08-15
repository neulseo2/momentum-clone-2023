function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You are in', lat, lng);
}
function onGeoError(position) {
  alert('Cannot locate your position.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);