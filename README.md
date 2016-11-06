### POC: Kotlin + Spring Boot + Webpack + Babel + ReactJS

```bash
mvn clean package spring-boot:run
```

The project provides backend services using Spring Boot, and generates a nice clean JavaScript frontend
using the Maven Frontend plugin to first fetch a relevant Node.JS binary package, NPM, then run
`npm install` to fetch a shitload of JS modules, and execute WebPack through `npm run prod-build`.

WebPack goes on to load its Babel.JS module, and configure it with ES2015 and React Babel profiles.

Babel then transpiles the JavaScript input files from shiny new ES2015 to ES5, 
which shitty browsers can actually run.

WebPack slams all this JavaScript together: the entrypoint JS file set in the configuration file,
everything that file imports, and everything THAT imports, ad nauseam, into the (possibly giant)
`target/classes/static/bundle.js` file.

Take a look at the `src/main/frontend` directory, and the configuration files and ES6 entry point there.

Basically this should work on Linux x86 and x64, Windows 32 and 64 bit, and OSX. **Should.**

You can also install NVM, have NVM install Node.JS LTS, upgrade your NPM to newest, then run `npm install`
and `npm run-script dev-build` to manually compile the stuff. It should be pretty easy to set up a watchdog
to automatically build things, and trigger LiveReload.

But that's a story to be explored on some other night.

### IntelliJ IDEA users

File -> Settings -> Languages & Frameworks -> JavaScript:

JavaScript language version: JSX Harmony

Libraries -> ECMAScript 6: Enabled

-----

File -> Settings -> Build, Execution, Deployment -> Compiler:

Make project automatically: Enabled

-----

CTRL-SHIFT A -> Registry... :

compiler.automake.allow.when.app.running: Enabled
