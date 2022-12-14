let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {

  center: [55.704925, 37.641910],
  controls: [],
  zoom: 15
  });

  const coords = [
    [55.7055, 37.651910]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: './img/map-icon.svg',
    iconImageSize: [113, 106],
    iconImageOffset: [-35, -52],
  });

  for (let i = 0; i < coords.length; i++) {
    myCollection.add( new ymaps.Placemark(coords[i]));
  }

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};


ymaps.ready(init);