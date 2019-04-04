import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 5000,
    showCloseButton: true,
    target: document.getElementById('index')
});
