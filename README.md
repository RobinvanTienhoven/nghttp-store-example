# Http-store example with RxJS and Angular

This project is a simplified implementation of the state container pattern. Stores take a while to understand and can be complex to implement in your application.
This is ok if you are building a big application and you need to maintain/use and edit a lot of states in a lot of different places. But in most small to medium sized application this will just introduce complexity that will slow development down.

Due to this reason I build a smaller version of a store that focuses on managing the state of the main data source of the application, the communication point from and to the backend.

## Build with
This project is build with the following technologies

- [Angular](https://angular.io/) - The web framework used
- [Webpack](https://webpack.js.org/) - The project's module bundler
- [RxJS](https://rxjs-dev.firebaseapp.com/) - The reactive programming library used for managing the state 
- [TypeScript](https://www.typescriptlang.org/) - The programming language used
- [Scss](https://sass-lang.com/) - The styling language used

## Getting started
In order to get the application up and running you need do the following steps: 

### 1) Installation
The first step in getting the application setup is installing all the project's dependencies. To do this run: 
```bash
npm install
```

### 2) Running the application
After you have installed the dependencies you can run the application via the command below. 
```bash
ng serve
```
After the application has build you can preview it on `http://localhost:4200/`.
The app will automatically reload if you change any of the source files. 

### 3) Building the application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### 4) Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Versioning
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RobinvanTienhoven/nghttp-store/tags)
 
## Licence 
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)
