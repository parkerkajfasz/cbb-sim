export function RandomProperty(obj) {
    let result = undefined;
    let total = 0;

    for (const property in obj) {
        total += obj[property];
    }

    let index = Math.random() * total;

    for (const property in obj) {
        const value = obj[property];
        if (index < value) {
            result = property;
            break;
        } else {
            index -= value;
        }
    }

    return isNaN(Number(result)) ? result : Number(result);
}