/* eslint-disable linebreak-style */
import { useRef, useEffect } from 'react';

const GoogleMap = () => {
  const mapRef = useRef( null );
  useEffect( () => {
    let google = window.google;
    let map = mapRef.current;
    let lat = '38.463322';
    let lng = '23.592461';
    const icon = 'https://api.cocus.gr/wp-content/uploads/2021/09/home_tea_pin-1.png';
    const myLatlng = new google.maps.LatLng( lat, lng );
    const mapOptions = {
      zoom: 16,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [ { color: '#444444' } ]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [ { color: '#f2f2f2' } ]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [ { visibility: 'off' } ]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [ { saturation: -100 }, { lightness: 45 } ]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [ { visibility: 'simplified' } ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [ { visibility: 'off' } ]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [ { visibility: 'off' } ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [ { color: '#cbd5e0' }, { visibility: 'on' } ]
        }
      ]
    };

    map = new google.maps.Map( map, mapOptions );

    const marker = new google.maps.Marker( {
      position: myLatlng,
      map: map,
      icon: icon,
      animation: google.maps.Animation.DROP,
      title: 'Next Headless'
    } );

    const contentString =
      '<div class="info-window-content"><h2>Cocus Espresso Roasters</h2>' +
      '<p>Α. Δούνα 12, 34132 Χαλκίδα</p></div>';

    const infowindow = new google.maps.InfoWindow( {
      content: contentString
    } );

    google.maps.event.addListener( marker, 'click', function () {
      infowindow.open( map, marker );
    } );
  } );
  return (
    <>
      <div className="relative w-full rounded-lg h-600-px">
        <div className="rounded-lg h-full" ref={mapRef} />
      </div>
    </>
  );
};

export default GoogleMap;
