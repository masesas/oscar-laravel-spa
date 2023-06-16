import service from '@/Utils/request';

class Resource {
    constructor(uri) {
        this.version = 'v1'
        this.uri = version + '/' + uri;
    }
    get(path = '') {
        const finalPath = path ? '/' + path : ''
        return request({
            url: '/' + this.uri + finalPath,
            method: 'get',
        });
    }
    store(resource, path = '') {
        const finalPath = path ? '/' + path : ''
        return request({
            url: '/' + this.uri + finalPath,
            method: 'post',
            data: resource,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Content-Type": "application/json",
            }
        });
    }
    update(id, resource) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'put',
            data: resource,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Content-Type": "application/json",
            }
        });
    }
    destroy(id) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'delete',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Content-Type": "application/json",
            }
        });
    }
}

export { Resource as default };
