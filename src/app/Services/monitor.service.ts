import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  constructor() { }

  getActivities(): Monitor[] {
    let monitors = [{ id: 1, name: "Javier Peralta", image: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png", email: "javier_monitor@gmail.com", telephone: 618966376 },
    { id: 2, name: "John Greyson", image: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png", email: "john_monitor@4vgym.com", telephone: 689572134 },
    { id: 3, name: "María Trujillo", image: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png", email: "maria_monitor@4vgym.com", telephone: 635219874 },
    { id: 4, name: "Xabier Muro", image: "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png", email: "xabier_monitor@4vgym.com", telephone: 685326741 }];
    return monitors;
  }
}

export interface Monitor {
  id : Number;
  name: String;
  image: String;
  email: String;
  telephone: Number;
}