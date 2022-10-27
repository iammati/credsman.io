import SlideDown from './SlideDown';
import SlideUp from './SlideUp';

export default class SlideToggle {
    /**
     * @param {HTMLElement} element
     * @param {Number} duration
     * @returns {Promise<boolean>}
     */
    constructor (element, duration = 500) {
        if (window.getComputedStyle(element).display === 'none') {
            return new SlideDown(element, duration);
        }

        return new SlideUp(element, duration);
    }
}
