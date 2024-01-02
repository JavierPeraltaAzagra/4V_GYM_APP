import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  constructor() { }

  getMonitors(): Monitor[] {
    let monitors = [{ id: 0, name: "Javier Peralta", email: "javier_monitor@gmail.com", telephone: 618966376 },
    { id: 1, name: "John Greyson",  email: "john_monitor@4vgym.com", telephone: 689572134 },
    { id: 2, name: "María Trujillo", email: "maria_monitor@4vgym.com", telephone: 635219874 },
    { id: 3, name: "Xabier Muro", email: "xabier_monitor@4vgym.com", telephone: 685326741 }];
    return monitors;
  }
}

export interface Monitor {
  id : number;
  name: String;
  email: String;
  telephone: number;
}