export default class SlideDown {
    /**
     * @param {HTMLElement} element
     * @param {Number} duration
     * @returns {Promise<boolean>}
     */
    constructor (element, duration = 500) {
        return new Promise((resolve, reject) => {
            element.style.removeProperty('display');

            let display = window.getComputedStyle(element).display;
            if (display === 'none') {
                display = 'block';
            }

            element.style.display = display;

            let height = element.offsetHeight;

            element.style.overflow = 'hidden';
            [
                'height',
                'paddingTop',
                'paddingBottom',
                'marginTop',
                'marginBottom'
            ].forEach(property => element.style[property] = 0);

            element.offsetHeight;
            element.style.transitionProperty = 'height, margin, padding';
            element.style.transitionDuration = duration + 'ms';
            element.style.height = height + 'px';

            [
                'padding-top',
                'padding-bottom',
                'margin-top',
                'margin-bottom'
            ].forEach(property => element.style.removeProperty(property));

            window.setTimeout(
                () => [
                    'height',
                    'overflow',
                    'transition-duration',
                    'transition-property'
                ].forEach(property => element.style.removeProperty(property))
            , duration);

            resolve(false);
        });
    }
}
