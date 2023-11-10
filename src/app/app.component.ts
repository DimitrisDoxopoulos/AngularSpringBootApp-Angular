import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApplicationLayoutComponent } from "./components/application-layout/application-layout.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, ApplicationLayoutComponent]
})
export class AppComponent {
  title = 'AngularSpringBootApp-Angular';
}
