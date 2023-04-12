# website
- This website was built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.



### How to install and launch the project on your own computer?
- Step 1: **Install Node.js**, download the official counterpart of Node.js according to your computer system, it is recommended to download the long-term stable version [node.js](https://nodejs.org/en/download). After the installation is complete, type node -v in the command line to check the version information and make sure the installation is successful.

- Step 2: Go to the project, open the command line, and  **resurrect the third-party package**

    ```
    npm install
    yarn install
    pnpm install
    ```


### Local development

- Use the following command to start the local development server and open a browser window. Most changes are reflected in real time and do not require restarting the server.

    ```
    npm run start
    yarn run start
    pnpm run start
    ```


### build

- The following command generates static content into the ``build`` directory, which can be used with any static content hosting service.

    ```
    npm run build
    yarn run build
    pnpm run build
    ```


### Deployment

- One-click deployment on github without packaging, the program will be packaged after the build by default after executing the following command, you need to make sure there are no problems with post-build packaging ！！！！
- If you use GitHub page hosting, this command allows you to easily build a website and push it to the `gh-pages` branch.


* Using SSH:
    ```
    $ USE_SSH=true yarn deploy
    ```

* Without SSH:
    ```
    $ GIT_USER=<your GitHub username> yarn deploy
    ```

### Write at the end
- For details on how to start the Docusaurus project, please refer to the official documentation [Installation](https://docusaurus.io/docs/installation)
- Windows users and Linux users follow the above steps to start the project, the general operation is the same, the difference between the two is the Node.js system version download, and the use of their own package management commands, **remember not to confuse!**

