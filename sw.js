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
    "url": "/hkoscon-2019/0eec7b71ebcc01ff0e0e.js",
    "revision": "9dc1f1bd6091f40af2fc0e5efab2a6c4"
  },
  {
    "url": "/hkoscon-2019/18df3f6038ad97a86c99.js",
    "revision": "a7a052977b74251ad03cda9d05f1fd15"
  },
  {
    "url": "/hkoscon-2019/19f2c0618ad95a5f1118.js",
    "revision": "9244d6187d6d1f1d00bc7f506dc182ae"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "dd274816d2a768e3c8c56a842ed86cfd"
  },
  {
    "url": "/hkoscon-2019/2476422ddbbb7b9894f1.js",
    "revision": "94227ba7f4d38d2d07fcb3d3664fb0e6"
  },
  {
    "url": "/hkoscon-2019/2da2cbb14bab6686cda8.css",
    "revision": "bc56c6e3e4905013c270d9984a1e87a6"
  },
  {
    "url": "/hkoscon-2019/33547d70a4543dbc89cd.css",
    "revision": "6ea8529f736cde14cbe475c8fa9c2dfb"
  },
  {
    "url": "/hkoscon-2019/3692cb42206cb8ca3f04.js",
    "revision": "dec2577de7b21ff3d3c8f89cb065a891"
  },
  {
    "url": "/hkoscon-2019/47553c43e53a1f7f5f49.js",
    "revision": "2c34b07073d6f15c7e3a435ff767eb11"
  },
  {
    "url": "/hkoscon-2019/4c168ce281e5f545cd35.js",
    "revision": "9986f5fd339d3d571001ce51f0ba03c2"
  },
  {
    "url": "/hkoscon-2019/535d1383494604798a27.css",
    "revision": "f09c0ce272141b533113e7cd29c3cf3d"
  },
  {
    "url": "/hkoscon-2019/536b258134d920eda4d8.css",
    "revision": "1fd3ecd33122d1cefb61b7f6142302c7"
  },
  {
    "url": "/hkoscon-2019/570502009db101a7fce4.js",
    "revision": "2acce194b5cdf118cfd35865b4ce3f04"
  },
  {
    "url": "/hkoscon-2019/595d84068d7a163ee60f.js",
    "revision": "157dbeb8f11a4bf65b41f372500febb0"
  },
  {
    "url": "/hkoscon-2019/9432844035271ec3d6d1.css",
    "revision": "33c5ac4647794a2b2151cedbc8697921"
  },
  {
    "url": "/hkoscon-2019/a58651156b965abcdf3b.js",
    "revision": "10f6dc6ffd2ca66917fadd19f32b9a1f"
  },
  {
    "url": "/hkoscon-2019/a95ae73cf4380662d4e9.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "112c33a887d877e4977be6a83af64028"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/index.html",
    "revision": "950be91408d3804b00a26048fb8dbf70"
  },
  {
    "url": "/hkoscon-2019/ac0e5b09066f0d916dcb.js",
    "revision": "c76351c78ba9e6b82442c6446eb044d0"
  },
  {
    "url": "/hkoscon-2019/af4f76f70869bec8e89b.js",
    "revision": "02107e289a11a277ab94d6301541f182"
  },
  {
    "url": "/hkoscon-2019/afff8b6fffe3e80618fa.js",
    "revision": "3514728adf7dbc3e249401de3e1d2cc7"
  },
  {
    "url": "/hkoscon-2019/b782a2dfad93442de7b4.js",
    "revision": "0f78b06519cace78820efe2a980914d0"
  },
  {
    "url": "/hkoscon-2019/b7cd6d7dec17b3e2dd12.css",
    "revision": "8e1759ef0d6297c07fcd066250d1f88e"
  },
  {
    "url": "/hkoscon-2019/c08eec3748036dc29f58.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/hkoscon-2019/c3419b642776a8989e61.css",
    "revision": "d6e1e95e5121a36050e591e3ce1d819a"
  },
  {
    "url": "/hkoscon-2019/c9c0a26dd6877287da74.js",
    "revision": "0ea78f321f7d02f28059269d6c8e7dbe"
  },
  {
    "url": "/hkoscon-2019/ca4abe37402a7bd09389.js",
    "revision": "9ca03603b69af663d9ede801f3f01647"
  },
  {
    "url": "/hkoscon-2019/cb6334ead159038654dd.css",
    "revision": "f52be865dfa469658249d4550bab557b"
  },
  {
    "url": "/hkoscon-2019/cb74e5a78a6a6bf2a100.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/hkoscon-2019/cdbd6499969d76415eeb.js",
    "revision": "ee3f79be9aed37b92d2c679d8c0a795c"
  },
  {
    "url": "/hkoscon-2019/ce7aa4881b4f66c4097d.css",
    "revision": "97f1983b2334a1aee2771aa901500417"
  },
  {
    "url": "/hkoscon-2019/cfc/index.html",
    "revision": "40c5b57d17d055a3f93e926c5c4a2a18"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "4331078ab484e97a8a0a350e079b7418"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/daea3430d8c29f24fff1.js",
    "revision": "073df4bf23606a30d6ba94a1c783558a"
  },
  {
    "url": "/hkoscon-2019/df8c2c7f29df4a13bc4f.js",
    "revision": "ab6abf63b9d985c4f5a9350e65bc4327"
  },
  {
    "url": "/hkoscon-2019/e03e48b338ed191228c2.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/hkoscon-2019/eed0a0ece104f01cd455.js",
    "revision": "6c9338e772e318b81014055cec5a6486"
  },
  {
    "url": "/hkoscon-2019/f1cb5189a2450243f650.css",
    "revision": "92ac8a848037992b93004565ee7c018b"
  },
  {
    "url": "/hkoscon-2019/f988c6faa2ef3c7bcaf4.js",
    "revision": "0069a2d1c4a683932a711bf38a3155d3"
  },
  {
    "url": "/hkoscon-2019/fc004a35e78101cba1e3.js",
    "revision": "739780c4601636c3bd6aa28f4f166351"
  },
  {
    "url": "/hkoscon-2019/fdfa6e3c8f04e0b4e00b.js",
    "revision": "794dd9d4b5186d939a74e5c3b94ac766"
  },
  {
    "url": "/hkoscon-2019/images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/hkoscon-2019/images/bg.png",
    "revision": "37695f34b0d871edac87887e7e6dda81"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg",
    "revision": "f2b53740fd1d3af56ae27da3a98f1f8b"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg",
    "revision": "718f2353e9a4a2fc0f69966ff9c3f00e"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg",
    "revision": "559c8ad17d71fcc1a17855be0ede9e22"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg",
    "revision": "ddf79060560d8a397533f628e4ea9031"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg",
    "revision": "81670649ca0068b39c53d2e42b90545c"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg",
    "revision": "3c8dcde9b5dead1c6b9f242d762ea194"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg",
    "revision": "52910f14529df88f419b1ff33be78533"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg",
    "revision": "0d09e273188248b025e5863d54621aa0"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg",
    "revision": "8ed0d10320039ed20e70de248003c340"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg",
    "revision": "59b8d98dc974c797f7ddefba6943b2b6"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg",
    "revision": "be8f9bae79059fff2c7d6989509de383"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg",
    "revision": "d663ee0d529cbd942b4e1a7e674cf68f"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg",
    "revision": "7c31719da41196175814289839bd8a57"
  },
  {
    "url": "/hkoscon-2019/img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/hkoscon-2019/index.html",
    "revision": "76f91ee1db0f5d59ea70f33e0ea40d51"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "dc5036e3844f99d46a073fb42dbce75f"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "4383f801b37b72898c3baeac87d0c2ec"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "ad9dd7a54a73942a6c1a97c3758242d4"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "096cedc1972a105ebf70e0cd023fe138"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "e5a426a50b6f79903d6503fe7402990c"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "c4bffbfd18003caff55ab4778537398e"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "f50a991a1b3ccef66551f45984eb133f"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "c8589b755e4785dfdb0ee27d32320a50"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "77bedc7f08cfa0c8b695bd7036f9456d"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "4a66954863f3dbf8edf7d9a2d61e4b52"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "fab697f497998bed988fb80c8c9f3266"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "bf0a3104981039e3beb539b091c8a55d"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "ba5c11fc3a89c5ebf58b43ddae7cae54"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "5416cbe8b0762f297a5ce350f4001028"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "059cfba0220cb459d9d23f7ce05617bd"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "c9c206c3310b458dae54734c7c8c5cff"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "341fb13958355bf68e3478515272f249"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/index.html",
    "revision": "54e6d4f9205912a53c01448a036f5169"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "e1049d9001ec066989711010e685c98a"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "61c0e008b95fba09cf53a72aa764ad44"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "fafcad121e2cecedd4d1ee6da4fe7f8c"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "2f62ebf1b47e387d0eec8c9576b6bbf8"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "bb5c4261fd1c8ec4d41dec54cd995f11"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "1cedac9fa8dc82c861a974a111be953f"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "de9205331300a11d0d3174a647ccdc8c"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "40ae1f892e246c24625b295237c03c9d"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "c8bdc6f4f7775a4b5f4109d1bedb3742"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "f8387bb1750e1e25c6ff6e99fa1c6574"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "f644a83f38ea5e61b1a704e14b466a64"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "2ef35f7e3f4a5a1065f3b7cbab27874d"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "1e93ab44bb602f181c918feb8c131aa6"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "bbc06507bb57f3cdb68fe54caf978a7f"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "3decaaa16b7e2b04f4021cd2527ec35d"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "1d90e476e6a8ba62ea97605bd7e59ff3"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "cb7743785e9584447252f8d4505858e9"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "aad450090fbf26ba0c452ba861053653"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "54a68bf45c2536ef06a494d1e0e71499"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "3ed18920378f9ad85b7eead37cbf74ac"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "7e7b02b7dd9b8a2b6fa3df68aaedc281"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "112c33a887d877e4977be6a83af64028"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/",
    "revision": "950be91408d3804b00a26048fb8dbf70"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "40c5b57d17d055a3f93e926c5c4a2a18"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "4331078ab484e97a8a0a350e079b7418"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "76f91ee1db0f5d59ea70f33e0ea40d51"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "dc5036e3844f99d46a073fb42dbce75f"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "4383f801b37b72898c3baeac87d0c2ec"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "ad9dd7a54a73942a6c1a97c3758242d4"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "096cedc1972a105ebf70e0cd023fe138"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "e5a426a50b6f79903d6503fe7402990c"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "c4bffbfd18003caff55ab4778537398e"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "f50a991a1b3ccef66551f45984eb133f"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "c8589b755e4785dfdb0ee27d32320a50"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "77bedc7f08cfa0c8b695bd7036f9456d"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "4a66954863f3dbf8edf7d9a2d61e4b52"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "fab697f497998bed988fb80c8c9f3266"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "bf0a3104981039e3beb539b091c8a55d"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "ba5c11fc3a89c5ebf58b43ddae7cae54"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "5416cbe8b0762f297a5ce350f4001028"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "059cfba0220cb459d9d23f7ce05617bd"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "c9c206c3310b458dae54734c7c8c5cff"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "341fb13958355bf68e3478515272f249"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/",
    "revision": "54e6d4f9205912a53c01448a036f5169"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "e1049d9001ec066989711010e685c98a"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "61c0e008b95fba09cf53a72aa764ad44"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "fafcad121e2cecedd4d1ee6da4fe7f8c"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "2f62ebf1b47e387d0eec8c9576b6bbf8"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "bb5c4261fd1c8ec4d41dec54cd995f11"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "1cedac9fa8dc82c861a974a111be953f"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "de9205331300a11d0d3174a647ccdc8c"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "40ae1f892e246c24625b295237c03c9d"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "c8bdc6f4f7775a4b5f4109d1bedb3742"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "f8387bb1750e1e25c6ff6e99fa1c6574"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "f644a83f38ea5e61b1a704e14b466a64"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "2ef35f7e3f4a5a1065f3b7cbab27874d"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "1e93ab44bb602f181c918feb8c131aa6"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "bbc06507bb57f3cdb68fe54caf978a7f"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "3decaaa16b7e2b04f4021cd2527ec35d"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "1d90e476e6a8ba62ea97605bd7e59ff3"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "cb7743785e9584447252f8d4505858e9"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "aad450090fbf26ba0c452ba861053653"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "54a68bf45c2536ef06a494d1e0e71499"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "3ed18920378f9ad85b7eead37cbf74ac"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "7e7b02b7dd9b8a2b6fa3df68aaedc281"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
