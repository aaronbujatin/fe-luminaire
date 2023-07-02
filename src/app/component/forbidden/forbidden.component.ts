import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent {

  constructor(private toast : ToastrService, private ngtoast: NgToastService) {
    
  }

  showSuccess() {
    this.toast.success("Item added to cart","",{
      positionClass: 'toast-bottom-left' 
   });
  }

  
}
