import { OnInit, OnDestroy, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService implements OnInit, OnDestroy {
    public notification$: Subject<String> = new Subject();

    constructor(){ }

    ngOnInit(){ 
        this.notification$ = new Subject();
    }

    ngOnDestroy() {
        this.notification$.unsubscribe();
    }
}