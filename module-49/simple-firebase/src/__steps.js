/**
 * 
 *           -------------------INITIAL------------------------
 *                  ----------------------------------
 * 
 * 
 * 1. visit: console.firebase.google.com
 * 2. create a project (skip google analytics)
 * 3. Register app ( create config)
 * 4. install firebase : npm install firebase
 * 5. add config file on my project 
 * 6. DANGER: do not publish or make firebase config or publish those on github 
 * 
 * 
 *            -----------------------INTEGRATION---------------------
 *                 -------------------------------------------
 * 
 * 
 * 7. Visit: go to docs > build> authentication > web > get start
 * 8. export app form the firebase.init.js file: export default app
 * 9. login.jsx: import getAuth form firebase/auth  
 * 10. crate const auth = getAuth(app)
 * 
 * 
 *               --------------------------PROVIDER SETUP----------------------
 *                    ------------------------------------------------------
 * 
 * 
 * 11. import GoogleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. active sign in method (google, facebook , etc)
 * 14. [vite]: change 124.0.0.1 to localhost
 * 
 * 
 *                 ----------------------MORE AUTH PROVIDER ---------------
 *                            ---------------------------------------
 * 
 * 
 * 1. Activate the auth provider (crete app, provide redirects url, client id, client secret)
 */