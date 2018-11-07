## Building and Deploying a React App
Everything done so far has been in a development environment meaning that everything has been compiled and updated on the fly. When deployed, static files should not be loading in the source code. To accomplish this there are  a few requirements that will be walked through below.

One possible deployment method is if the user just wants to compile all of the React code and place it in the root of a directory somewhere. To do this, move to the react project folder. Then -

 run: `npm run build `


This will create a build folder which will contain the app. Place the contents of that folder anywhere, and the build is done!

Another option is to have npm deploy the project itself. Github has free hosting so npm will build to GitHub pages. Before doing this, make sure that the local React environment has been exited, so the code isn’t currently running. First, add a homepage field to package.json that has the URL for the app to live on. This code segment looks like:

 `"homepage": "https://{username}.github.io/{repo_name}", `

Where username is the user's github username and repo_name is the repository where the react application is located.

We’ll also add these two lines to the scripts property.
 `"predeploy": "npm run build", `
 `"deploy": "gh-pages -d build" `

In the react project, add gh-pages to the devDependencies. To do this,

run: `npm install --save-dev gh-pages`

Next, create the build, which will have all the compiled, static files.

run: `npm run build `

Finally, deploy to gh-pages.

run: `npm run deploy `

And the deployment is done! The app is now available live at: https://{username}.github.io/{repo_name}
