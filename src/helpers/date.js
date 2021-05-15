/**
 * Format datetime string
 * @param {Number} val: epochtime
 */
function formatDateTime(val) {
    if (val && val !== "") {
        return Intl.DateTimeFormat("ja").format(new Date(val));
    }
    return val || "";
}

export { formatDateTime };
