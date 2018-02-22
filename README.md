# resume-app
Singe page application for my online resume.

## Used technologies
The app uses VueJS as SPA-framework, together with node and npm for development purposes.
Using VueJS for this kind and size of project is definitely overkill, but it is mainly a showcase for my humble Vue-skills.

## Running the app
``` bash
npm install
npm run dev

```
This will serve the app at `localhost:8080` with hot reloading.

To be able to deploy this to Heroku, there is a seperate server script that serves the build to `localhost:5000`
``` bash
npm install
npm run build
npm run start
```
