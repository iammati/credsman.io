import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

/**
 * @description Wrapper around sweetalert2.
 * @param {SweetAlertIcon} type
 * @param {String} title
 * @param {String} description
 * @param {SweetAlertOptions} options
 */
export const notify = (type, title, description = '', options = {}) => {
    let Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        title: title,
        text: description,
        icon: type,
        ...options,

        didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    if (description) {
        description = `<p>${description}</p>`;
    }

    Toast.fire(title, description, type);
};
