export function getLastPathUrl() {
    const { pathname } = window.location
    const parseLast = (path) => path.substring(path.lastIndexOf('/') + 1)

    return parseLast(pathname)
}
