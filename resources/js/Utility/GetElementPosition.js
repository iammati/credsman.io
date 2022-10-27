export default class GetElementPosition {
    /** @param {HTMLElement} element */
    constructor (element) {
        let x = 0,
            y = 0;

        if (element === undefined) {
            return {
                top: y,
                left: x
            };
        }

        while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
            x += element.offsetLeft - element.scrollLeft;
            y += element.offsetTop - element.scrollTop;
            element = element.offsetParent;
        }

        return {
            top: y,
            left: x
        };
    }
}
