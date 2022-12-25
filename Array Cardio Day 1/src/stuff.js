export class TestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TestError'
    }
}
export function compareObjects(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
export function compareArrays(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i]) return false;
        return true;
    }
}

