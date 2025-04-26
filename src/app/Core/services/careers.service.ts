import { Injectable } from "@angular/core";
import { Career } from '../../Features/dashboard/careers/interfaces/careers';
import { BehaviorSubject, Observable, Subscriber } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class CareersService {
    private dataSubject2 = new BehaviorSubject<Career[]>([]);
    career$ = this.dataSubject2.asObservable();

    private careersTitlesSubject = new BehaviorSubject<string[]>([]);
    careersTitles$ = this.careersTitlesSubject.asObservable();

    private _careers: Career[] = [
        {
            title: 'FrontEnd',
            description: 'HTML, CSS, JS y Angular',
        },

        {
            title: 'BackEnd',
            description: 'NodeJS, Express y MongoDB',
        },

        {
            title: 'FullStack',
            description: 'HTML, CSS, JS, Angular, NodeJS, Express y MongoDB',
        },

        {
            title: 'Ciberseguridad',
            description: 'Seguridad en redes, sistemas y aplicaciones',
        }
    ];

    getCareers(): void {
        this.dataSubject2.next(this._careers);
    }

    getCareersTitles(): void {
        const titles = this._careers.map((career) => career.title);
        this.careersTitlesSubject.next(titles);
    }

    addCareer(Career: Career): void {
        this._careers = [...this._careers, Career];
        this.dataSubject2.next(this._careers);
        this.careersTitlesSubject.next(this._careers.map((career) => career.title));
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


constructor() { }
}