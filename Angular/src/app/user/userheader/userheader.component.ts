import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  constructor(private service: RegisterService,private router:Router){
    
   }

  ngOnInit(): void {
  }


  logoutSubmit(){
    Swal.fire({
      title: 'Are you sure?',
     
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Logout sucessfull', 'Are you sure to exit .', 'success');
        this.service.setLogoutStatus();
        this.router.navigate(['']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled');
      }
    });
   
  }
}
