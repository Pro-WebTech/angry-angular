import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: grey
    }
  `]
})
export class AppComponent { 
  loadedFeature = true;

  onNavigate(feature: string) {

  }
}
