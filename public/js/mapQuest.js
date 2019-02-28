function initMap() {
	// add your code here
	L.mapquest.key = 'jGyqCflmXGOJc9FhSt0F1A13PgY1zfq3';

	var map = L.mapquest.map('map', {
		center: [32.879101, -117.235934],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	L.marker([32.879101, -117.235934]).addTo(map);
}