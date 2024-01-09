import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    constructor() {
        debugger
     }
    private _name: string = "";
    private nameobs = new BehaviorSubject("");

    setName(name: string) {
        this.nameobs.next(name);
    }

    getName() {
        return this.nameobs.asObservable();
    }
}