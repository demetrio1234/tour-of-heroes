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
