(function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.rel = 'icon';
    let path = 'icons/';
    let imageNames = [
        'icon_192.png',
        'icon1_192.png',
        'icon2_192.png',
        'icon3_192.png',
        'icon4_192.png',
        'icon5_192.png',
        'icon6_192.png',
        'icon7_192.png',
        'icon8_192.png'
    ];
    let index = Math.floor(Math.random() * imageNames.length); //0,1,2,3,4
    path += imageNames[index];
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
    // console.log(link);
})();