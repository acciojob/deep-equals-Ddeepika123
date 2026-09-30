function deepEquals(a, b) {
    // 1. If types are different, they are not equal
    if (typeof a !== typeof b) {
        return false;
    }

    // 2. NaN === NaN is false, so handle NaN separately
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }

    // 3. null, undefined, strings, numbers, booleans
    if (a === b) {
        return true;
    }

    // 4. If one is null and the other is not
    if (a === null || b === null) {
        return false;
    }

    // 5. Arrays
    if (Array.isArray(a) || Array.isArray(b)) {

        // One is array and other is not
        if (!Array.isArray(a) || !Array.isArray(b)) {
            return false;
        }

        // Different lengths
        if (a.length !== b.length) {
            return false;
        }

        // Compare every element recursively
        for (let i = 0; i < a.length; i++) {
            if (!deepEquals(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    // 6. Objects
    if (typeof a === "object" && typeof b === "object") {

        let keysA = Object.keys(a);
        let keysB = Object.keys(b);

        // Different number of keys
        if (keysA.length !== keysB.length) {
            return false;
        }

        // Compare keys and values
        for (let key of keysA) {

            // Key doesn't exist in b
            if (!Object.hasOwn(b, key)) {
                return false;
            }

            // Compare values recursively
            if (!deepEquals(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
}

module.exports=deepEquals;
