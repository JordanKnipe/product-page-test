# Product Page Task

Find the requirements for your task:  
- [Backend Requirements](./requirements/backend/README.md)
- [Frontend Requirements](./requirements/frontend/README.md)

> Note: If you are applying for a full stack role. Please see both of the above requirements.

Getting Started, to start with the new branch npm install will be required as jest was introduced:

- Adding jest & babel library: 
    npm install --save-dev @babel/core @babel/preset-env
    npm install --save-dev jest @vue/test-utils@next vue-jest@next babel-jest


Run tests in tests folder using:
- npm run test

- For tests I have created a mapping to a mock svg folder found in resources/js/__mock__ which essentially ignores svg files when running tests.
this was created as there is a dependency on [vue-compiler](https://www.npmjs.com/package/vue-template-compiler), reading into further it, I found this version is using vue3 which this dependency
was causing version mismatch errors, because the newer version uses https://www.npmjs.com/package/@vue/compiler-sfc instead. This was causing errors with how the compiler reads svgs. specifically '<' '>' symbols.

Quality of Life extensions on existing layout:

- Image Gallery / Carousel was extended to factor in a dynamic amount of images, without sacrificing visuals. Whether there are 4 images or 20. Horizontal scrolling will be enabled for this.

- base _reset.scss edited to prevent layout shift, defaulted application height to be device view height.

- Added Loading Wheel on product loading.

- Most/All Devices catered for.

- Emits addToCart Event.

- If there is no discounted price returned in the API, just the default price will be displayed.

- Added 404 Page

