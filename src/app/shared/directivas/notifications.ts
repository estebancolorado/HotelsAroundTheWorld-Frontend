import Swal from 'sweetalert2';

export class Notifications
{
  public getNotification(message: string, typeNotification: string)
  {
    if(typeNotification === 'success')
    {
      Swal.fire({
        icon: typeNotification,
        title: message,
        timer: 2000
      });
    }

    if(typeNotification === 'error')
    {
      Swal.fire({
        icon: typeNotification,
        title: message,
        timer: 2000
      });
    }

  }
}
