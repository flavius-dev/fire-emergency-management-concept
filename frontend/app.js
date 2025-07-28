const map = L.map('map').setView([45.9432, 24.9668], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.circle([45.75, 24.98], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map).bindPopup("Incendiu activ – fază incipientă");
