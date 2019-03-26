/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "hkoscon-2019"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/hkoscon-2019/096016304cbe014886d7.css",
    "revision": "0c02e47203b1290ad5f5abb4f970155e"
  },
  {
    "url": "/hkoscon-2019/10fe4965d21ce12f1bd1.js",
    "revision": "0cea33d4e5fb7d079da2ae30720d206b"
  },
  {
    "url": "/hkoscon-2019/1f5b6d418cc7ff0de642.js",
    "revision": "b366f9ec5a2509d1e51fb6649a4c29b5"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "2cbd59dbeb6121081994f13122120ce6"
  },
  {
    "url": "/hkoscon-2019/208ecfb171b96094df03.js",
    "revision": "0dfe3c6de5805dedc145870b6cb4f2ed"
  },
  {
    "url": "/hkoscon-2019/310bdc477ad1e82df22a.css",
    "revision": "f0ff665a8c84f76dbfeb5edc8ac6f809"
  },
  {
    "url": "/hkoscon-2019/35e9a4875ae6289ff455.js",
    "revision": "9534861695acfda75c96c60e02056201"
  },
  {
    "url": "/hkoscon-2019/38444be206bbd6b03000.js",
    "revision": "365c7a96837aadab707b7bfd28a465ab"
  },
  {
    "url": "/hkoscon-2019/500b2bf34a0fe9a2c0ce.css",
    "revision": "10d5d691aa0b3533093b57c41687a438"
  },
  {
    "url": "/hkoscon-2019/54ce63fb83d68711b50b.js",
    "revision": "9196d46aa4f06ce78a0a1ede2e2a49f1"
  },
  {
    "url": "/hkoscon-2019/5c9f1075164870de9652.js",
    "revision": "5d18d6e9190fe4288c915031d806ad15"
  },
  {
    "url": "/hkoscon-2019/630d5ad68b4402631e35.js",
    "revision": "57a41f9b305db5950724008fb391256f"
  },
  {
    "url": "/hkoscon-2019/696a6caaee06157da430.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/hkoscon-2019/6e754c594c821daf4a46.js",
    "revision": "f902b542acedab05292ed36b0bc48223"
  },
  {
    "url": "/hkoscon-2019/79c7c525f298294d16f7.js",
    "revision": "c8cae6e54a5a042fc325c7906305bab3"
  },
  {
    "url": "/hkoscon-2019/7af1a37853ca7c35ad10.css",
    "revision": "d32ffbbec375bf9eaf56aceb9fd1a38c"
  },
  {
    "url": "/hkoscon-2019/7f58d10c6743a8a2bb6c.css",
    "revision": "1c284c5762aaf870b72d55f0c9c89822"
  },
  {
    "url": "/hkoscon-2019/8b7a589ac747a0b8e6aa.js",
    "revision": "af0b1007e7191c018cc3bfd49b6ca574"
  },
  {
    "url": "/hkoscon-2019/903f24c8bab6605e1404.js",
    "revision": "425c9666812a087d829337031c333d28"
  },
  {
    "url": "/hkoscon-2019/9bc9f6c839db1f94682a.js",
    "revision": "57086e6b94f5ed04fb88a4cf65198cfe"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "6e17f84143bef1eba4d214df9485d72b"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "fc67ce4ed29be8ef691ef3122a50fc52"
  },
  {
    "url": "/hkoscon-2019/b0267cf1bbc8617cf08f.js",
    "revision": "f1c53b0ddcf01b486aeb6e8c2b871760"
  },
  {
    "url": "/hkoscon-2019/b386ed4c85a837915739.js",
    "revision": "ff8822899bc9e57c0a115ecd9129789c"
  },
  {
    "url": "/hkoscon-2019/b49c7d7a68e81cdc0755.js",
    "revision": "99ca6db3c5ac583cb123247fb7039577"
  },
  {
    "url": "/hkoscon-2019/bc37929e7fb59eb04678.js",
    "revision": "d2b9a6c546175e5ac7cf4571a99261a2"
  },
  {
    "url": "/hkoscon-2019/c08eec3748036dc29f58.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/hkoscon-2019/c3fde434ab0eef022b51.js",
    "revision": "9184245118f7a5d92ff27a3233730918"
  },
  {
    "url": "/hkoscon-2019/cb6334ead159038654dd.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/hkoscon-2019/ccfc3ab723587777b04a.css",
    "revision": "8c2ce15200a6b500719375696c468d52"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "3b829ff6bc2432ff37a7a1f070565ac1"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/da2074b38c75d8d1a176.css",
    "revision": "d0250849b7de8a9d4788a412693f849b"
  },
  {
    "url": "/hkoscon-2019/dde12c654ae51424a4af.js",
    "revision": "4048758ef08d552e5a011a1bb263b78e"
  },
  {
    "url": "/hkoscon-2019/e3fbdf594d3855cc42b0.js",
    "revision": "e6df86617b2481c60ee54b3056ba0c4a"
  },
  {
    "url": "/hkoscon-2019/f0c8915a03fb5173592b.css",
    "revision": "9fdc55af5d148081693de80e238a9c5e"
  },
  {
    "url": "/hkoscon-2019/f738d9744ebeff326421.css",
    "revision": "a4dcdb2f6778b7814cf929c64f268456"
  },
  {
    "url": "/hkoscon-2019/f9f18d8d74857f5bbb52.js",
    "revision": "4a34871a2583f7afcd0d4cc0589ebbf2"
  },
  {
    "url": "/hkoscon-2019/images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/hkoscon-2019/images/bg.jpg",
    "revision": "fbc85c77524af2f3694fcd7ce2abc048"
  },
  {
    "url": "/hkoscon-2019/img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/hkoscon-2019/index.html",
    "revision": "376609df5691a83e83e68ecd482a0886"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "eed00b050e7dab3ed627bf70c9fc37fb"
  },
  {
    "url": "/hkoscon-2019/topic/8-essential-steps-secure-your-mysql/index.html",
    "revision": "352b066d7cf9b313ff230acba264a4bd"
  },
  {
    "url": "/hkoscon-2019/topic/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "1bc5c57a1c3a5ca73b32c31351e535bc"
  },
  {
    "url": "/hkoscon-2019/topic/build-minimal-dbms-scratch-rust/index.html",
    "revision": "da5dae9458f7627ad777a281dfab01e8"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "3b1bfc82e195d6766069cfb9a5fb0cd9"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "5d0d89271770417424e71b140598e6a0"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "0f0230c2677b1fdfc30c5c57856d5502"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "4dc1fb0594e28828af9687036ab40659"
  },
  {
    "url": "/hkoscon-2019/topic/formal-verification-smart-contract/index.html",
    "revision": "be96859c17b087bf3dbd01d847998d68"
  },
  {
    "url": "/hkoscon-2019/topic/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "90b5c87a9b88ce866765fc346dc23c0b"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/index.html",
    "revision": "c3245500a8b4dd95496ad6d4fe0ad413"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "3e7107c515c37e97b65b09241e1d034d"
  },
  {
    "url": "/hkoscon-2019/topic/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "188d7df9e2d661b628320072e1b42968"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "4da80fe7b09712b3538e763c4f90411c"
  },
  {
    "url": "/hkoscon-2019/topic/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "3d0d30e47849e9cba207e63c5afe670f"
  },
  {
    "url": "/hkoscon-2019/topic/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "18e059040f10a2391f34d12e115d2319"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/index.html",
    "revision": "d607f2c3f994201a2eb55bee79f1c54c"
  },
  {
    "url": "/hkoscon-2019/topic/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "04522038e8fbabc58b0a66c3236cc8d5"
  },
  {
    "url": "/hkoscon-2019/topic/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "5fc8aa53576fd93c5bffc1a692dfb27e"
  },
  {
    "url": "/hkoscon-2019/topic/r-exploratory-data-analysis/index.html",
    "revision": "e845ea5b3e6aa3f4d19bcdbbe370b3ea"
  },
  {
    "url": "/hkoscon-2019/topic/status-quo-tensorflow-lite/index.html",
    "revision": "0e9994d36de86f9176fc7f52f5f28668"
  },
  {
    "url": "/hkoscon-2019/topic/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "d7c1f354d450d4ced1d840d94a73cd76"
  },
  {
    "url": "/hkoscon-2019/topic/whats-new-haxe-4/index.html",
    "revision": "64f90a0f432adb1ef00cd3fbf015e168"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/index.html",
    "revision": "bb05ff8b5b18069fd94f0c9dac62dc20"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "5f564b2bdb94adc88205393d3185b4e5"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "6e17f84143bef1eba4d214df9485d72b"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "fc67ce4ed29be8ef691ef3122a50fc52"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "3b829ff6bc2432ff37a7a1f070565ac1"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "376609df5691a83e83e68ecd482a0886"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "eed00b050e7dab3ed627bf70c9fc37fb"
  },
  {
    "url": "/hkoscon-2019/topic/8-essential-steps-secure-your-mysql/",
    "revision": "352b066d7cf9b313ff230acba264a4bd"
  },
  {
    "url": "/hkoscon-2019/topic/build-jamstack-blog-system-gatsbyjs/",
    "revision": "1bc5c57a1c3a5ca73b32c31351e535bc"
  },
  {
    "url": "/hkoscon-2019/topic/build-minimal-dbms-scratch-rust/",
    "revision": "da5dae9458f7627ad777a281dfab01e8"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/",
    "revision": "3b1bfc82e195d6766069cfb9a5fb0cd9"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "5d0d89271770417424e71b140598e6a0"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "0f0230c2677b1fdfc30c5c57856d5502"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "4dc1fb0594e28828af9687036ab40659"
  },
  {
    "url": "/hkoscon-2019/topic/formal-verification-smart-contract/",
    "revision": "be96859c17b087bf3dbd01d847998d68"
  },
  {
    "url": "/hkoscon-2019/topic/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "90b5c87a9b88ce866765fc346dc23c0b"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/",
    "revision": "c3245500a8b4dd95496ad6d4fe0ad413"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "3e7107c515c37e97b65b09241e1d034d"
  },
  {
    "url": "/hkoscon-2019/topic/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "188d7df9e2d661b628320072e1b42968"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/",
    "revision": "4da80fe7b09712b3538e763c4f90411c"
  },
  {
    "url": "/hkoscon-2019/topic/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "3d0d30e47849e9cba207e63c5afe670f"
  },
  {
    "url": "/hkoscon-2019/topic/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "18e059040f10a2391f34d12e115d2319"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/",
    "revision": "d607f2c3f994201a2eb55bee79f1c54c"
  },
  {
    "url": "/hkoscon-2019/topic/plug-it-my-sql-authentication-windows-pam/",
    "revision": "04522038e8fbabc58b0a66c3236cc8d5"
  },
  {
    "url": "/hkoscon-2019/topic/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "5fc8aa53576fd93c5bffc1a692dfb27e"
  },
  {
    "url": "/hkoscon-2019/topic/r-exploratory-data-analysis/",
    "revision": "e845ea5b3e6aa3f4d19bcdbbe370b3ea"
  },
  {
    "url": "/hkoscon-2019/topic/status-quo-tensorflow-lite/",
    "revision": "0e9994d36de86f9176fc7f52f5f28668"
  },
  {
    "url": "/hkoscon-2019/topic/troubleshooting-performance-tuning-best-practices/",
    "revision": "d7c1f354d450d4ced1d840d94a73cd76"
  },
  {
    "url": "/hkoscon-2019/topic/whats-new-haxe-4/",
    "revision": "64f90a0f432adb1ef00cd3fbf015e168"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/",
    "revision": "bb05ff8b5b18069fd94f0c9dac62dc20"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "5f564b2bdb94adc88205393d3185b4e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
