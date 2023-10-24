ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [65.0111209506732,25.47943390955013],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14,
        });

        var myPlacemark = new ymaps.Placemark(
            [65.0111209506732, 25.47943390955013],
            {
                balloonContent: `
                    <div class="balloon">
                        <div class="balloon__address">Северная Остроботния, Оулу, Коулукату, 26</div>
                        <div class="balloon__contacts">
                            <a href="tel:+78121234567">+8 (812) 123-45-67</a>
                        </div>
                    </div>
                `,
            },
            {preset: 'islands#yellowIcon'},
            {
                iconLayout: 'default#image',
                // iconImageHref: './images/location-pin.svg',
                icon_imagesize: [40, 40],
                iconImageOffset: [-20, -40],
            }
        );
        myMap.geoObjects.add(myPlacemark);
    }