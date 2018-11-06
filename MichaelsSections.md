## Building and Deploying a React App
Everything done so far has been in a development environment meaning everything has been compiled and updated on the fly. When deployed, static files should be loaded in not the source code. To do this there are just a few requirements that we will walk through below.

One possible deployment method is if you just want to compile all the React code and place it in the root of a directory somewhere, you can run the following line:
 
 `~ npm run build `

   
This will create a build folder which will contain your app. Put the contents of that folder anywhere, and you’re done!

Another option is to have npm deploy for us. Github has free hosting so we will build to GitHub pages. Before doing this, make sure you’ve exited out of your local React environment, so the code isn’t currently running. First, we’re going to add a homepage field to package.json, that has the URL we want our app to live on. This code segment looks like:
 
 `~ "homepage": "https://An-Error-Occured.github.io/An-Error-Occured-Tech-Tasks-I-II/tutorial", `
 
We’ll also add these two lines to the scripts property.
 `~ "predeploy": "npm run build", `
 `~ "deploy": "gh-pages -d build" `

In your project, you’ll add gh-pages to the devDependencies.

`~npm install --save-dev gh-pages`
 
We’ll create the build, which will have all the compiled, static files.

`~ npm run build `

Finally, we’ll deploy to gh-pages.

`~ npm run deploy `

And we’re done! The app is now available live at.
 
