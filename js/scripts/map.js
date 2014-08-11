/**
 * @author Sergei Krachkovsky
 * @email  sergei.krachkovsky@hotmail.com
 */

(function ($) {
    $(function () {
        OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        var malls = $('.mall');
        var points = [];
        var bbox = {
            min_lat: 180,
            min_lng: 180,
            max_lat: -180,
            max_lng: -180
        };

        $.each(malls, function(i, mall) {
            var lat = parseFloat(mall.getAttribute('data-lat'));
            var lng = parseFloat(mall.getAttribute('data-lng'));
            bbox.min_lat = Math.min(bbox.min_lat, lat);
            bbox.min_lng = Math.min(bbox.min_lng, lng);
            bbox.max_lat = Math.max(bbox.max_lat, lat);
            bbox.max_lng = Math.max(bbox.max_lng, lng);
            points.push([lat, lng]);
        });

        var map = L.map('map', {
            scrollWheelZoom: false
        });
        L.tileLayer(OSM_URL, {attribution: OSM_ATTRIB}).addTo(map);

        $.each(points, function(i, point) {
            var marker = L.marker(point).addTo(map);
        });

        map.fitBounds([[bbox.min_lat, bbox.min_lng], [bbox.max_lat, bbox.max_lng]]);
    });
})(jQuery);