/**
 * @name Apiv1
 * @description v1 api for this App.
 */
export class Apiv1 {
    async post (name, payload = {}) {
        return await fetch(route(name), {
            method: 'POST',
            body: JSON.stringify(payload),

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    }
}
