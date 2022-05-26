import Swal from "sweetalert2";

const returns = (entry) => {
  if (entry.status == 0) {
    Swal.fire({
      icon: "error",
      title: "...خطا",
      text: entry.error.message,
    });
  }
  if (entry.status == 1) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: entry.data.message,
    });
  }
  if (entry.status == 2) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: entry.data.message,
    });
  }
  if (entry.status == 3) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: entry.data.message,
    });
  }
  if (entry.status == 4) {
    Swal.fire({
      icon: "error",
      title: "...خطا",
      text: entry.error.message,
    });
  }
  if (entry.status == 5) {
    Swal.fire({
      icon: "error",
      title: "...خطا",
      text: entry.error[0],
    });
  }
  if (entry.status == undefined) {
    Swal.fire({
      icon: "error",
      title: "...خطا",
      text: "اتصال به سرور با اختلال مواجه است",
    });
  }
};

export default returns;
