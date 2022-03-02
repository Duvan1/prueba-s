import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('modal') private modalComponent!: ModalComponent;
  modalConfig = {
    modalTitle: 'Notificación',
    dismissButtonLabel: 'OK',
    closeButtonLabel: 'Cerrar',
  };
  
  async openModal() {
    return await this.modalComponent.open();
  }

  constructor(public loginService: LoginService, public router: Router) {}

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {}
}
