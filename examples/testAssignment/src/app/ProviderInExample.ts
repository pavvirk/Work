import {Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class ProviderInExample{
getDate():Date{
    return new Date();
}
}