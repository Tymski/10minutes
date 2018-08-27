(function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.rel = 'icon';
    let path = './media/icons/';
    let imageNames = [
        'icon-192x192.png',
        'icon1-192x192.png',
        'icon2-192x192.png',
        'icon3-192x192.png',
        'icon4-192x192.png',
        'icon5-192x192.png',
        'icon6-192x192.png',
        'icon7-192x192.png',
        'icon8-192x192.png'
    ];
    let index = Math.floor(Math.random() * imageNames.length); // 0,1,2,3,4...
    path += imageNames[index];
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
})();