import service from "@/Utils/request";

export function test() {
    return service({
        url: "v1/test",
        method: "get"
    })
}

export function claimVoucher(params) {
    return service({
        url: '/v1/bengkel/ads/claim-voucher',
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Content-Type": "application/json",
        }
    });
}

