# Angular Heroes Tutorial Summary

## Part 1

    1. used ng generate to create a standalone HeroesComponent.
    2. displayed the HeroesComponent by adding it to the AppComponent shell.
    3. applied the UppercasePipe to format the name.
    4. used two-way data binding with the ngModel directive.
    5. imported the FormsModule so that Angular would recognize and apply the ngModel directive by the HeroesComponent
    6. learned the importance of declaring components in the AppModule

## Part 2

    1. display a selection list
    2. the user can select a hero and see that hero's details
    3. use *ngFor to display a list
    4. use *ngIf to conditionally include or exclude a block of HTML.
    5. toggle a CSS style class with a class binding.

## Part 3

    1. created a separate, reusable HeroDetailComponent.
    2. used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
    3. used the @Input decorator to make the hero property available for binding by the external HeroesComponent.

## Part 4

    1. refactored data access to the HeroService class.
    2. registered the HeroService and used Angular Dependency Injection to inject it into a component.
    3. gave the HeroService get data method an asynchronous signature (thanks the Observable return type?)
    4. discovered Observable and the RxJS Observable library.
    5. used RxJS of() to return Observable<Hero[]>, an observable of mock heroes.
    6. The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
    7. created a MessageService for loosely coupled communication between classes.
    8. The HeroService injected into a component is created with another injected service, MessageService

## Part 5

    Requirements: 

        1. Add a Dashboard view
        2. Add the ability to navigate between the Heroes and Dashboard views
        3. When users click a hero name in either view, navigate to a detail view of the selected hero
        4. When users click a deep link in an email, open the detail view for a particular hero

    Implementations for standalone version of the app:

        1. ng generate module app-routing --flat
        2. remove the generated file
        3. in the app.routes.ts:

            ``` app.routes.ts

                import { Routes } from '@angular/routes' 
                import { YourComponent } from 
                
                export const routes: Routes = [ { path: 'heroes', component: HeroesComponent } ];
            ```
        4. in the app.config.ts:

            ```app.config.ts

                import { provideRouter }
                import { routes }

                export const appConfig: ApplicationConfig = { providers : { provideRouted(routes) }
                }
            ```
        5. in main.ts

            ```main.ts

                import { appConfig }
                import { AppComponent }

                bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));

            ```

        Implementation through the angular toh tutorial part 5:

            added the Angular router to navigate among different components
            turned the AppComponent into a navigation shell with <a> links and a <router-outlet>
            defined routes, a redirect route, and a parameterized route
            used the routerLink directive in anchor elements
            refactored a tightly coupled main/detail view into a routed detail view
            used router link parameters to navigate to the detail view of a user-selected hero
            shared the HeroService with other components
