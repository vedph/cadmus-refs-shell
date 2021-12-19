# Cadmus Documental References Shell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

The web app here is just a shell to host a demo of the Cadmus documental references parts. Most of these parts are still contained in the general parts library. We will progressively move the general-purpose parts found there into separate libraries, ideally 1 or a few parts per library.

This will be a gradual migration process, typically implemented on demand as soon as parts are going to be reused in other projects. This way we will be able to progressively isolate all the parts in their libraries, rather than using the monolithic libraries of the prototype.

Currently this library just includes the `ExternalIdsPart`, which does not exist in the original generic parts library. When time will allow it, other parts found in that library will migrate into this one, or into separate libraries.

## Publish

1. update the library version numbers
2. `npm run build-ui`
3. `npm run build-pg`
4. `./publish`

## History

- 2021-12-19: upgraded to the [new shell](https://github.com/vedph/cadmus-shell).
