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
    "url": "/hkoscon-2019/0c3ccb6209be13768d70.js",
    "revision": "515feb10c5869028ba72f493d9a41400"
  },
  {
    "url": "/hkoscon-2019/16e7a7ef34b99ac83197.js",
    "revision": "912ef95f6fa683d2a90e42581a4d1444"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "0933d3a9272d08e5cb7b753df4847775"
  },
  {
    "url": "/hkoscon-2019/2d6459e48845553febd6.js",
    "revision": "8f98f8de5384c0c6b6113bd353e8e78c"
  },
  {
    "url": "/hkoscon-2019/310bdc477ad1e82df22a.css",
    "revision": "f0ff665a8c84f76dbfeb5edc8ac6f809"
  },
  {
    "url": "/hkoscon-2019/44b8d0ab18e32013e5fb.css",
    "revision": "1c284c5762aaf870b72d55f0c9c89822"
  },
  {
    "url": "/hkoscon-2019/4ae0cc4fac952dd276ba.js",
    "revision": "3ca7f718f4033ebafd2e00f93922344a"
  },
  {
    "url": "/hkoscon-2019/4c7908e9dba85abfe76e.js",
    "revision": "398afac523b202d1ac3ca6da9667fab6"
  },
  {
    "url": "/hkoscon-2019/500b2bf34a0fe9a2c0ce.css",
    "revision": "10d5d691aa0b3533093b57c41687a438"
  },
  {
    "url": "/hkoscon-2019/55b978cc0fd7dae95d78.js",
    "revision": "850601ac3d026a5368872ec9326f8179"
  },
  {
    "url": "/hkoscon-2019/5a1786e269a54a81553a.js",
    "revision": "9545079abe06ca8e9c6fef4d620246a2"
  },
  {
    "url": "/hkoscon-2019/6a38ca369b0815db9586.js",
    "revision": "fdd040a1e949f4bb24efefdc40c58cd7"
  },
  {
    "url": "/hkoscon-2019/74749e4ceadd0b0a6310.js",
    "revision": "03f88e6165b5c7aea2455874e9ac5449"
  },
  {
    "url": "/hkoscon-2019/7af1a37853ca7c35ad10.css",
    "revision": "d32ffbbec375bf9eaf56aceb9fd1a38c"
  },
  {
    "url": "/hkoscon-2019/87c5f2451cc2305c3e7e.js",
    "revision": "a8f6ac63fbfbe66850b5aeacf91be6e6"
  },
  {
    "url": "/hkoscon-2019/9005dc1574c175357845.js",
    "revision": "47dab0dd5477efaf19e98a7d07791dec"
  },
  {
    "url": "/hkoscon-2019/95b3b3ec0585138e3936.js",
    "revision": "91a8b1a76d536605f4bf49da76c5dc4e"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "4879788ab14aaf33dec8124e775c4c02"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "93a24dde8e003e0c59126662eec61028"
  },
  {
    "url": "/hkoscon-2019/bd9046ef3fdd6de07885.js",
    "revision": "b1fc83adf3a7f4707b4a807000b9a64b"
  },
  {
    "url": "/hkoscon-2019/bfcaad169af3fe35965d.js",
    "revision": "4e407680b4135abc517531e1f1066260"
  },
  {
    "url": "/hkoscon-2019/c08eec3748036dc29f58.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
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
    "url": "/hkoscon-2019/cfc/index.html",
    "revision": "5b3ca9dee065ee855e2d2d618057717e"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "aae6c7cfb86c6176884dec2e71f070b8"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/d82dc537b8e1577c9cf2.js",
    "revision": "bec99f49ec26d5af214bec55176d27e6"
  },
  {
    "url": "/hkoscon-2019/da2074b38c75d8d1a176.css",
    "revision": "d0250849b7de8a9d4788a412693f849b"
  },
  {
    "url": "/hkoscon-2019/e03e48b338ed191228c2.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/hkoscon-2019/e06414988e7a8377d4b0.js",
    "revision": "678448923fe8e3d97bd66351aa5ad096"
  },
  {
    "url": "/hkoscon-2019/e627defb8b5063ead4f8.js",
    "revision": "9492c93a4e2dccfbf2fb5d7df364054b"
  },
  {
    "url": "/hkoscon-2019/e7939b4c8b565aceb360.js",
    "revision": "9450dfbd9ca0f1fd06e9bf83dd00b45a"
  },
  {
    "url": "/hkoscon-2019/ebd1ada532a122171362.js",
    "revision": "fb1ec5a88f5af103323c3bce97ff4841"
  },
  {
    "url": "/hkoscon-2019/ee58e271e17993c6c743.css",
    "revision": "f57c2bd8adc9249a033a8c3889a4f7ea"
  },
  {
    "url": "/hkoscon-2019/f0c8915a03fb5173592b.css",
    "revision": "9fdc55af5d148081693de80e238a9c5e"
  },
  {
    "url": "/hkoscon-2019/f351700e606762238ee0.js",
    "revision": "fe548f800dcb5f08cae505ae55180e5a"
  },
  {
    "url": "/hkoscon-2019/f5487cd185239f5769b9.js",
    "revision": "2e6b5910cc4dddf180dbd128a2559b7e"
  },
  {
    "url": "/hkoscon-2019/f738d9744ebeff326421.css",
    "revision": "a4dcdb2f6778b7814cf929c64f268456"
  },
  {
    "url": "/hkoscon-2019/fa5a7be90bbf6d591ca3.js",
    "revision": "d5dae6e8e3554786ce36b7bfa3f89604"
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
    "revision": "69bf69e009e3f45ec05b5c4171c304f9"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "f09445c6fdf6501d0265fb2376b54865"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "8d9403dd3a14023a5c38d2268b097c52"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "109450f433d45601dd5399f4f443807c"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "c6587322e88a3c940e75dd316f3ba6e1"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "154ec9458a0a3b5dfa8bdaa16544ff41"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "3aaf7291f68178257d2db185fccbb438"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "e5187dcf00fc350633b1192dcf1ea427"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "4ec7a047416329f2c6188e15c14a869d"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "8bffde1d3e9a4fc048ea47da5969e6da"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "d69a6c00aa816d665ed4879378f07a3a"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "7b10a9bedba36f8f8b81616241fb0004"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "81fd102191e0d8acf866ebdadd7b02f5"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "cdf1cd3d17e954c37ccaac9634376936"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "1a02cfeb7d8781ee04314072b132396c"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "38eec9955d1cfaba246d19de4b781d1b"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "4f1dd5e1299c861a7faaa9e99ed16e4d"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "2e82e431d740d42a4bab81a60b55cfb9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "44be174095bf35fc5c4a8b10186dd35b"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "874d68086c94a9b0ce4885bf60ae1a15"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/index.html",
    "revision": "c8a0b9badab7d6ee29b4edecf358e0ff"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "87e7a40ad3787336c319117f0ef160e3"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "052f1f7bc3e877b7b45cdb3851e64f57"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "4e09975db13074d5581714d910a1144d"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "adbeb1f2681c089197ae1f2c85b7acba"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "03ad4684c3a6f60077c6a33fa715a222"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "b7afbd8c5eaf1059b82d64347b79b866"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "3b3d5eba1527f6be36cee7f5a5c1ffc2"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "d29927ab0de994a8a6b3a521ff590db3"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "a39f15f9c6854218d761c0754ea33daf"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "ae576f17da9e31e1562a1fbd8f27a072"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "d34d93e96272440e31718627342e6830"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "43cf93d76ed845b84f2860b4d8161cbf"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "74a03c04b8d7ff2b7ea20741d66a1b62"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "d33d9fd6f80d3ba0bb32f693b31b4ad3"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "87073704156d9912850a4fc72de2002d"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "52170c02cd8fd2b2feba56c5c3100591"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "ff80308ebefbee6fac781a348a6b4484"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "e09143116bb0abfaa9f8adca92586848"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/index.html",
    "revision": "80ea5ea7e6f4c6f19e7ab67cd5a2a1b0"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "4879788ab14aaf33dec8124e775c4c02"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "93a24dde8e003e0c59126662eec61028"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "5b3ca9dee065ee855e2d2d618057717e"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "aae6c7cfb86c6176884dec2e71f070b8"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "69bf69e009e3f45ec05b5c4171c304f9"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "f09445c6fdf6501d0265fb2376b54865"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "8d9403dd3a14023a5c38d2268b097c52"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "109450f433d45601dd5399f4f443807c"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "c6587322e88a3c940e75dd316f3ba6e1"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "154ec9458a0a3b5dfa8bdaa16544ff41"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "3aaf7291f68178257d2db185fccbb438"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "e5187dcf00fc350633b1192dcf1ea427"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "4ec7a047416329f2c6188e15c14a869d"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "8bffde1d3e9a4fc048ea47da5969e6da"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "d69a6c00aa816d665ed4879378f07a3a"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "7b10a9bedba36f8f8b81616241fb0004"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "81fd102191e0d8acf866ebdadd7b02f5"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "cdf1cd3d17e954c37ccaac9634376936"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "1a02cfeb7d8781ee04314072b132396c"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "38eec9955d1cfaba246d19de4b781d1b"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "4f1dd5e1299c861a7faaa9e99ed16e4d"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "2e82e431d740d42a4bab81a60b55cfb9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "44be174095bf35fc5c4a8b10186dd35b"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "874d68086c94a9b0ce4885bf60ae1a15"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/",
    "revision": "c8a0b9badab7d6ee29b4edecf358e0ff"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "87e7a40ad3787336c319117f0ef160e3"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "052f1f7bc3e877b7b45cdb3851e64f57"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "4e09975db13074d5581714d910a1144d"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "adbeb1f2681c089197ae1f2c85b7acba"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "03ad4684c3a6f60077c6a33fa715a222"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "b7afbd8c5eaf1059b82d64347b79b866"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "3b3d5eba1527f6be36cee7f5a5c1ffc2"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "d29927ab0de994a8a6b3a521ff590db3"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "a39f15f9c6854218d761c0754ea33daf"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/",
    "revision": "ae576f17da9e31e1562a1fbd8f27a072"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "d34d93e96272440e31718627342e6830"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "43cf93d76ed845b84f2860b4d8161cbf"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "74a03c04b8d7ff2b7ea20741d66a1b62"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "d33d9fd6f80d3ba0bb32f693b31b4ad3"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "87073704156d9912850a4fc72de2002d"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "52170c02cd8fd2b2feba56c5c3100591"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "ff80308ebefbee6fac781a348a6b4484"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "e09143116bb0abfaa9f8adca92586848"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/",
    "revision": "80ea5ea7e6f4c6f19e7ab67cd5a2a1b0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
