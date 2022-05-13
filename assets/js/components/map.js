if (window.innerWidth > 768) {
    var zoomVal = 17;
    var iconSize = [52, 75]
    }else {
    var zoomVal = 17;
    var iconSize = [52, 75]
}

ymaps.ready(function () {  

    var map = new ymaps.Map("map", {
      center: [45.0632098894406,39.00872171026778], 
      zoom: zoomVal
    });
    
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    let placemark = new ymaps.Placemark([45.0632098894406,39.00872171026778], {
        hintContent: [
            '<div class="map-hintContent">',
                '<img src="assets/img/other/locat.svg">',
                '<div class="map-hintContent__text">г. Краснодар, ул Зиповская 31</div>',
            '</div>',
        ]
    },
     {
        iconLayout: 'default#image',
		iconImageHref: 'assets/img/other/locat.svg',
		iconImageSize:  iconSize,
		iconImageOffset: [0, 0]
    })
    map.geoObjects.add(placemark)

  });
