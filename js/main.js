
const buttonNavMoscow = document.getElementById('Moscow');
const buttonNavKaliningrad = document.getElementById('Kaliningrad');
const buttonNavVladivstok = document.getElementById('Vladivostok');

let geo = '{"Moscow":[55.752575, 37.620911], "Kaliningrad":[54.711614, 20.507318], "Vladivostok":[43.112263, 131.881709]}';
let geoParsed = JSON.parse(geo);
/*buttonNavMoscow.addEventListener('click', () => {
    console.log('click');
    map.setView([55.752575, 37.620911],10);
});
*/
/* 
сделать кнопки с одинаковым классом и забрать их через querySelectorAll*/
const buttons = document.querySelectorAll('.nav-button');

let marker={};
buttons.forEach(el=>{
    el.addEventListener('click',event=>{
        target = event.currentTarget;
        id = target.id;
        console.log(id);
        console.log(geoParsed[id]);
        if (marker != undefined) {
            map.removeLayer(marker);
        };
        marker = L.marker(geoParsed[id]).addTo(map);
        map.setView(geoParsed[id],10);
        /* 
        Предварительно надо выдрать geoJson c координатами городов
        город:координаты
        брать значение по ключу и делать setView на нужный город
        */
    })
});

