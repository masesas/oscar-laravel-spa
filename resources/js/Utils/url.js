export function getLastPathUrl() {
    const { pathname } = window.location
    const parseLast = (path) => path.substring(path.lastIndexOf('/') + 1)

    return parseLast(pathname)
}

export function moveWaApi(noPonsel, message = '') {
    if (!noPonsel)
    {
        alert("Nomor Whatsapp Tujuan Kosong");
        return;
    }
    let url = `https://api.whatsapp.com/send/?phone=${noPonsel}`;
    if (message != '')
    {
        url += `&text=${encodeURIComponent(message)}`;
    }

    let wa = window.open(url, '_blank');
    wa.focus();
}
