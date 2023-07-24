export function ucwords(str) {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}

export function loadFont(name, url) {
    var newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode('@font-face{font-family: ' + name + '; src: url(' + url + ');}'));
    document.body.appendChild(newStyle)
}
