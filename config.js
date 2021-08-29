{
  "name": "yukitoki",
  "version": "1.0.3",
  "private": true,
  "scripts": {
    "build": "routify -b && rollup -c",
    "dev": "run-p dev:*",
    "dev:rollup": "rollup -c -w",
    "dev:routify": "routify",
    "start": "sirv public --single --no-clear",
    "format": "prettier --write config.js src/*.{js,json,ts,html,svelte} src/**/*.{js,json,ts,html,svelte}"
  },
  "devDependencies": {
    "@rollup/plugin-alias": "^3.1.5",
    "@rollup/plugin-commonjs": "^20.0.0",
    "@rollup/plugin-node-resolve": "^13.0.4",
    "@roxi/routify": "^2.18.3",
    "autoprefixer": "^10.3.3",
    "npm-run-all": "^4.1.5",
    "postcss": "^8.3.6",
    "postcss-load-config": "^3.1.0",
    "prettier": "^2.3.2",
    "prettier-plugin-svelte": "^2.4.0",
    "rollup": "^2.56.3",
    "rollup-plugin-css-only": "^3.1.0",
    "rollup-plugin-livereload": "^2.0.5",
    "rollup-plugin-svelte": "^7.1.0",
    "rollup-plugin-terser": "^7.0.2",
    "svelte": "^3.42.4",
    "svelte-check": "^2.2.5",
    "svelte-preprocess": "^4.8.0",
    "tailwindcss": "^2.2.8"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.36",
    "@fortawesome/free-solid-svg-icons": "^5.15.4",
    "@tailwindcss/forms": "^0.3.3",
    "@tailwindcss/typography": "^0.4.1",
    "common-tags": "^1.8.0",
    "fontawesome-svelte": "^2.0.1",
    "fuse.js": "^6.4.6",
    "highlight.js": "^11.2.0",
    "lodash": "^4.17.21",
    "marked": "^3.0.2",
    "semver": "^7.3.5",
    "sirv-cli": "^1.0.14",
    "svelte-switch": "0.0.4"
  }
}
const config = {
    TITLE: "Memer API", // this will dynamically update the title
    SITE_NAME: "Memer API",
    THEME: "dark", // "light" | "dark"
    NAV: {
        ICON: {
            TYPE: "TEXT", // "TEXT" | "IMAGE"
            VALUE: "Memer API", // IMAGE path or TEXT
            HREF: "/" // href
        },
        BUTTONS: [
            {
                label: "Home",
                path: "/",
                newPage: false
            },
            {
                label: "Documentation",
                path: "/docs",
                newPage: false
            },
            {
                label: "Discord",
                path: "https://memer-api.live/discord",
                newPage: true
            },
            {
                label: "Hosting",
                path: "https://bittmax.de",
                newPage: true
            },
            {
                label: "GitHub",
                path: "https://github.com/Yash094/memer-api",
                newPage: true
            }
        ]
    },
    INSTALL_COMMAND: "npm install memer-api",
    HOME_LOGO: {
        TYPE: "TEXT", // "IMAGE" | "TEXT"
        VALUE: "https://github.com/Yash094/memer-api"
    },
    DESCRIPTION: {
        TITLE: "About",
        VALUE: "Memer API is a powerful module that allows you to manipulate images very easily."
    },
    DESCRIPTION_LIST: {
        TITLE: "Why?",
        VALUE: ["Fast", "Easy to install", "Updated","Easy Support" ]
    },
    FOOTER: {
        HEADER: "Memer API",
        DESCRIPTION: "A powerful module that allows you to manipulate images very easily"
    },
    LINKS: {
        string: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        String: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        number: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
        Number: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
        boolean: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
        Boolean: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
        symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
        Symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
        void: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
        Object: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        object: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        Function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
        function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
        Array: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        Set: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
        Map: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
        Date: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        RegExp: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
        Promise: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        Error: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",
        EventEmitter: "https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",
        Timeout: "https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",
        Buffer: "https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",
        ReadableStream: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
        Readable: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
        ChildProcess: "https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",
        Worker: "https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",
        MessagePort: "https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",
        IncomingMessage: "https://nodejs.org/dist/latest/docs/api/http.html#http_class_http_incomingmessage",
        m3u8Stream: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
        RequestInfo: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch",
        RequestInit: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch",
        RequestOptions: "https://nodejs.org/dist/latest/docs/api/http.html#http_http_request_options_callback",
        m3u8Options: "https://github.com/fent/node-m3u8stream#m3u8streamurl-options",
        CheerioRoot: "https://cheerio.js.org",
        Response: "https://developer.mozilla.org/en-US/docs/Web/API/Response",
        any: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any",
        CanvasRenderingContext2D: "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D",
        Client: "https://discord.js.org/#/docs/main/stable/class/Client",
        Collection: "https://discord.js.org/#/docs/collection/master/class/Collection",
        Message: "https://discord.js.org/#/docs/main/stable/class/Message",
        VoiceChannel: "https://discord.js.org/#/docs/main/stable/class/VoiceChannel",
        StageChannel: "https://discord.js.org/#/docs/main/master/class/StageChannel",
        VoiceConnection: "https://discord.js.org/#/docs/main/stable/class/VoiceConnection",
        Snowflake: "https://discord.js.org/#/docs/main/stable/typedef/Snowflake",
        YTDLDownloadOptions: "https://github.com/fent/node-ytdl-core#ytdlurl-options",
        User: "https://discord.js.org/#/docs/main/stable/class/User",
        GuildResolvable: "https://discord.js.org/#/docs/main/stable/typedef/GuildResolvable",
        UserResolvable: "https://discord.js.org/#/docs/main/stable/typedef/UserResolvable",
        unknown: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type",
        Duplex: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_duplex",
        Guild: "https://discord.js.org/#/docs/main/stable/class/Guild"
    }
};

export default config;
