import { Injectable } from "@angular/core";
import { Career } from '../../Features/dashboard/careers/interfaces/careers';
import { BehaviorSubject, Observable, Subscriber } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class CareersService {
    private dataSubject2 = new BehaviorSubject<Career[]>([]);
    career$ = this.dataSubject2.asObservable();

    private careersTitlesSubject = new BehaviorSubject<string[]>([]);
    careersTitles$ = this.careersTitlesSubject.asObservable();

    careerEdit = new BehaviorSubject<Career | null>(null);
    careerEdit$ = this.careerEdit.asObservable();

    constructor(private http: HttpClient) { }

    private _careers: Career[] = [];

    setUpdateCareer(id: string) {
        const career = this._careers.find((career) => career.id === id);

        if (!career) {
            alert('No se encontró la carrera a editar');
            return
        }
        this.careerEdit.next(career);
    }

    updateCareer(Career: Career) {
        this.http.put<Career>(`${environment.apiUrl}/careers/${Career.id}`, Career).subscribe({
            next: (Career) => {
                this._careers = this._careers.map((c) =>
                    c.id === Career.id ? Career : c);
                this.dataSubject2.next(this._careers);
                this.careersTitlesSubject.next(
                    this._careers.map((Career) => Career.title)
                );
                this.careerEdit.next(null);
            },
            error: (error) => {
                console.error('Error al intentar actualizar el curso: ', error);
            },
        });
    }

    getCareers() {
        this.dataSubject2.next(this._careers);
        return this.http.get<Career[]>(`${environment.apiUrl}/careers`)
    }

    getCareersTitles(): void {
        const titles = this._careers.map((career) => career.title);
        this.careersTitlesSubject.next(titles);
    }

    addCareer(Career: Career): void {
        this.http.post<Career>(`${environment.apiUrl}/careers`, Career).subscribe({
            next: (Career) => {
                this._careers = [...this._careers, Career];
                this.dataSubject2.next(this._careers);
                this.careersTitlesSubject.next(this._careers.map((career) => career.title));
            },
            error: (error) => {
                console.error('Error agregando la carrera deseada', error);
            },
        });
    }

    deleteCareer(id: string) {
        this.http.delete<Career>(`${environment.apiUrl}/careers/${id}`).subscribe({
            next: (career) => {
                this._careers = this._careers.filter((career) => career.id !== id),
                    this.dataSubject2.next(this._careers),
                    this.careersTitlesSubject.next(this._careers.map((career) => career.title)
                    );
            },
            error: (error) => {
                console.error('Error borrando la carrera', error);
            },
        });
    }


    getByTitle(title: string) {
        return new Observable<Career>((subscriber) => {
            const career = this._careers.find((career) => career.title.toLocaleLowerCase() === title.toLocaleLowerCase());
            if (career) {
                subscriber.next(career);
            } else {
                subscriber.error('Career not found');
            }
            subscriber.complete();
        })
    }

}