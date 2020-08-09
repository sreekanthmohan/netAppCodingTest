import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UserService } from '../services/user.service';
import { ApiGetMockData, ApiGetMockDataWithError, ApiError, ApiSuccess } from './users.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RootEffects {

    getMockDataEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(ApiGetMockData),
            mergeMap((action) => {
                return this.userService.getDataFromId().pipe(
                    map(res => ApiSuccess({ users: res })),
                    catchError(error => of(ApiError({ error }))),
                );
            }
            )
        )
    );

    // effect for simulating an API error
    getMockDataWithErrorEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(ApiGetMockDataWithError),
            mergeMap((action) => {
                return this.userService.getApiError().pipe(
                    map(res => ApiSuccess({ users: res })),
                    catchError(error => of(ApiError({ error }))),
                );
            }
            )
        )
    );


    constructor(private actions$: Actions, private userService: UserService) { }
}
