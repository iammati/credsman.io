export default class SlideUp {
    /**
     * @param {HTMLElement} element
     * @param {Number} duration
     * @returns {Promise<boolean>}
     */
    constructor (element, duration = 500, state) {
        return new Promise((resolve, reject) => {
            element.style.height = element.offsetHeight + 'px';
            element.style.transitionProperty = 'height, margin, padding';
            element.style.transitionDuration = duration + 'ms';
            element.offsetHeight;
            element.style.overflow = 'hidden';

            [
                'height',
                'paddingTop',
                'paddingBottom',
                'marginTop',
                'marginBottom'
            ].forEach(property => element.style[property] = 0);

            window.setTimeout(() => {
                element.style.display = 'none';
                [
                    'height',
                    'padding-top',
                    'padding-bottom',
                    'margin-bottom',
                    'overflow',
                    'transition-duration',
                    'transition-property'
                ].forEach(property => element.style.removeProperty(property));

                resolve(false);
            }, duration);
        });
    }
}
