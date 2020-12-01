# sample-react-project

**npm start**  
Runs the app in the development mode.  
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

**npm test**  
Launches the test runner in the interactive watch mode.  
See the section about running tests for more information.

**npm run build**  
Builds the app for production to the build folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about deployment for more information.

**npm run eject**  
Note: this is a one-way operation. Once you eject, you can’t go back!  
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it

## Sample Folder Structure

### base folder: /src:

-   **/assets**:
    /icons: SVGs icons
    other assets (i.e. images)

-   **/components**:
    generic components, or components that will be used by multiple routes
    i.e.: form components, tables, cards

-   **/hooks**:
    every hook should be in this folder, and its name should start with the prefix "use":
    i.e.: useSidebar, useQuery, etc.

-   **/resources**:
    -   slugs.js: a list of the routes that will be used in the app
    -   theme.js: an object with the theme structure, colors, typographies.
    -   utilities.js: any utility function, for example "convertSlugToUrl", which is used in conjunction with "history.push" (react router) for redirects and links.

-   **/routes**:
    We have 2 types of routes, public and private.
    public: are all those that do not require the user to be logged into the app, such as Login, Signup, etc.
    private: to access these routes the user must be logged in.
    Each main section of the application has its own route:
    -   auth (for login, signup, etc)
    -   dashboard
    -   users
    -   products
    -   product-detail
    -   suppliers
    -   supplier-detail
    -   orders
    -   settings
    -   notifications

## Current dependencies:

[react-hook-form](https://www.npmjs.com/package/react-hook-form): form handling.

[react-jss](https://www.npmjs.com/package/react-jss): styles.

[react-router-dom](https://www.npmjs.com/package/react-router-dom): routing.

[simple-flexbox](https://www.npmjs.com/package/simple-flexbox): flexbox utility.
