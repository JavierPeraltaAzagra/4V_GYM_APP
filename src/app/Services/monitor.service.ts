import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

const apiURL = 'https://65946a0b1493b011606a7b46.mockapi.io/4VGym';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  constructor(private http: HttpClient) { }
  updateSubject: ReplaySubject<any> = new ReplaySubject();
  changesOnActivities: Observable<any> = this.updateSubject.asObservable();

  // monitors: Monitor[] = [];

  // getMonitors(): Monitor[] {
  //   this.monitors = [{ id: 0, name: "Javier Peralta", email: "javier_monitor@gmail.com", telephone: 618966376 },
  //   { id: 1, name: "John Greyson",  email: "john_monitor@4vgym.com", telephone: 689572134 },
  //   { id: 2, name: "María Trujillo", email: "maria_monitor@4vgym.com", telephone: 635219874 },
  //   { id: 3, name: "Xabier Muro", email: "xabier_monitor@4vgym.com", telephone: 685326741 }];
  //   return this.monitors;
  // }
  getMonitorsAPI(): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(apiURL+"/monitors");
  }
  // createMonitor(newMonitor: Monitor){
  //   this.monitors.push(newMonitor);
  // }
  createMonitorAPI(newMonitor: Monitor): Observable<Monitor>{
    return this.http.post<Monitor>(apiURL + "/monitors", newMonitor);
  }
  deleteMonitorAPI(id: number){
    this.http.delete(apiURL + "/monitors/" + id)
        .subscribe(response => {
          this.notifyUpdateActivity(null)});
  }
  // getMonitorAPIbyId(id: number): Observable<Monitor>{
  //   return this.http.get<Monitor>(apiURL + "/monitors/" + id)
  // }
  // editMonitorAPI(id: number){
    
  //   this.http.put(apiURL + "/monitors/" + id, )
  // }
  // editMonitorPopup(monitor: Monitor){

  // }
  // getIdByEmail(email: String){

  // }

  notifyUpdateActivity = (data: any) => {
    this.updateSubject.next(data)
  }
}

export interface Monitor {
  id : number;
  name: String;
  email: String;
  telephone: number;
}