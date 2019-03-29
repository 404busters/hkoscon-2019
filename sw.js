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
    "url": "/hkoscon-2019/200.html",
    "revision": "7fd39547c9029f72aa16f95be54c828a"
  },
  {
    "url": "/hkoscon-2019/2675d5e1e091c564e710.js",
    "revision": "8d4613eeb21d2848b03a968700670105"
  },
  {
    "url": "/hkoscon-2019/27e8be44f9033d53234b.js",
    "revision": "22fe1d180626722dd934ea43b45b3c5b"
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
    "url": "/hkoscon-2019/55b978cc0fd7dae95d78.js",
    "revision": "850601ac3d026a5368872ec9326f8179"
  },
  {
    "url": "/hkoscon-2019/5a1786e269a54a81553a.js",
    "revision": "9545079abe06ca8e9c6fef4d620246a2"
  },
  {
    "url": "/hkoscon-2019/6398c9f2ad9e233144a4.js",
    "revision": "26b98a4b9269b639a75a244af5ce1d7c"
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
    "url": "/hkoscon-2019/75ca4f30fff94ba9bba3.js",
    "revision": "02c9041415078cc5dc5e593b27052271"
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
    "revision": "d2b127f5a184d3f1cca2d64a51e12741"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/index.html",
    "revision": "49f176961ec71cdee1e6ca0ba1853e60"
  },
  {
    "url": "/hkoscon-2019/b53433d572b1327435ec.js",
    "revision": "2317fb402d1a65a2d0966076b8540744"
  },
  {
    "url": "/hkoscon-2019/bd162fda202a950434b0.css",
    "revision": "e4fc466319f8d881c6dd757d27bd45da"
  },
  {
    "url": "/hkoscon-2019/bd9046ef3fdd6de07885.js",
    "revision": "b1fc83adf3a7f4707b4a807000b9a64b"
  },
  {
    "url": "/hkoscon-2019/be04cf03234d6f5456f6.js",
    "revision": "d0ec9821b8e489b2c297077b54e1d6fb"
  },
  {
    "url": "/hkoscon-2019/c055892089e22d2606d2.js",
    "revision": "006b2ec05b25be0dd15661c3b3b2e9b9"
  },
  {
    "url": "/hkoscon-2019/c08eec3748036dc29f58.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/hkoscon-2019/c8ea7af54f8e2f42e884.css",
    "revision": "f05c02fd8cdb6bfd18c06e812fb73f9b"
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
    "revision": "491a104622f728c22798566022c936b1"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "88c6685947c1c7692889f4bb2b0be153"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/d3d795b45e2c80364359.css",
    "revision": "c22b82a8a27a895545fa16cd8808ee1f"
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
    "url": "/hkoscon-2019/e000d549e32e4b7a6557.js",
    "revision": "65cbe3225912af5f79420fe99aa26ce6"
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
    "url": "/hkoscon-2019/e7939b4c8b565aceb360.js",
    "revision": "9450dfbd9ca0f1fd06e9bf83dd00b45a"
  },
  {
    "url": "/hkoscon-2019/ebd1ada532a122171362.js",
    "revision": "fb1ec5a88f5af103323c3bce97ff4841"
  },
  {
    "url": "/hkoscon-2019/f132aaf65c8191769d1b.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/hkoscon-2019/f738d9744ebeff326421.css",
    "revision": "a4dcdb2f6778b7814cf929c64f268456"
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
    "revision": "c494bc3a308cc44d5b02c7a92d39687d"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "c74f74a5dee8d8750675fdfdc8016799"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "7bb0836b3e3e75641a9258a31627109e"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "b2c377958826c0a5441a67e331037fd1"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "a2db4d7ea521db7839e7067857ba9325"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "3b4f2861b36f804a5c7b701c2e0357ce"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "d69889152e1345ad2c0dfebad538abc6"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "7737920443c365b65db664f8090c0014"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "c919b6ac75d5717816d8e497170c10f9"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "ffb8b4254723bb413c4407640584bbfb"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "2e5687017b45ac9c1cb8cc9652fe4d8b"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "be66c2fc2a19bd025890bcf52230fe38"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "f0e9b29b8c95443c6532017972cd1b4a"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "1a3a28c3575cacb2cb7d58d0e7f8d330"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "7b228de2724fde1c9eb0340fc31b40ff"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "1d178cdf8a0e288fb32ef83be2d23680"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "ec283cc6308bbb2d4ba641b4f3c5c5b7"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "ff06948e96da0a80b0d564c6712330f5"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/index.html",
    "revision": "cae89909e1c33c9392edbd342605c0e4"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "c0e81375970ce880883298c0efd30403"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "119e1baa77a482882ab17869b562cc33"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "cf33ae265928082bdc012ffec621e64c"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "3a460f392cb73454bf97d89e1748314d"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "926c93d5d16777949e38364010aeb69a"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "a1bc51d37cfa342149a570364b5e7e89"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "f547342eacf53f1bdc7622791c347d07"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "0c3d902cb62e7f1cb494650398889593"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "b0c3fffdcb91dd0e8656c76aa996381b"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "5eca07cf2a653a888fa93c25b8884fcf"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "5861eada7f39b187d811b5ffe656c497"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "1c3a30cd68e867fe6474101230b6853a"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "2ac45d8679782a72caf0e19dd0243ebc"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "41c31c9f195c6ce0e0062b2585fe77b2"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "476fd5ba67c854ee93baa9b5810655e2"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "9c32bbceab341c0e77932af4b4accb58"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "79cd26b4c387752fba717ae9ef45b6a0"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "28115830b8afd300c05d21562ebe813c"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "7ab928f10b9e40ec10fd21b0522034ca"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "292777151a62cefd186d1fd0cec05616"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "1d1e9185993cf17cc1417640b6de1ec0"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "d2b127f5a184d3f1cca2d64a51e12741"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/",
    "revision": "49f176961ec71cdee1e6ca0ba1853e60"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "491a104622f728c22798566022c936b1"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "88c6685947c1c7692889f4bb2b0be153"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "c494bc3a308cc44d5b02c7a92d39687d"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "c74f74a5dee8d8750675fdfdc8016799"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "7bb0836b3e3e75641a9258a31627109e"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "b2c377958826c0a5441a67e331037fd1"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "a2db4d7ea521db7839e7067857ba9325"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "3b4f2861b36f804a5c7b701c2e0357ce"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "d69889152e1345ad2c0dfebad538abc6"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "7737920443c365b65db664f8090c0014"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "c919b6ac75d5717816d8e497170c10f9"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "ffb8b4254723bb413c4407640584bbfb"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "2e5687017b45ac9c1cb8cc9652fe4d8b"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "be66c2fc2a19bd025890bcf52230fe38"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "f0e9b29b8c95443c6532017972cd1b4a"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "1a3a28c3575cacb2cb7d58d0e7f8d330"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "7b228de2724fde1c9eb0340fc31b40ff"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "1d178cdf8a0e288fb32ef83be2d23680"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "ec283cc6308bbb2d4ba641b4f3c5c5b7"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "ff06948e96da0a80b0d564c6712330f5"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/",
    "revision": "cae89909e1c33c9392edbd342605c0e4"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "c0e81375970ce880883298c0efd30403"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "119e1baa77a482882ab17869b562cc33"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "cf33ae265928082bdc012ffec621e64c"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "3a460f392cb73454bf97d89e1748314d"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "926c93d5d16777949e38364010aeb69a"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "a1bc51d37cfa342149a570364b5e7e89"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "f547342eacf53f1bdc7622791c347d07"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "0c3d902cb62e7f1cb494650398889593"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "b0c3fffdcb91dd0e8656c76aa996381b"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "5eca07cf2a653a888fa93c25b8884fcf"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "5861eada7f39b187d811b5ffe656c497"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "1c3a30cd68e867fe6474101230b6853a"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "2ac45d8679782a72caf0e19dd0243ebc"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "41c31c9f195c6ce0e0062b2585fe77b2"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "476fd5ba67c854ee93baa9b5810655e2"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "9c32bbceab341c0e77932af4b4accb58"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "79cd26b4c387752fba717ae9ef45b6a0"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "28115830b8afd300c05d21562ebe813c"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "7ab928f10b9e40ec10fd21b0522034ca"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "292777151a62cefd186d1fd0cec05616"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "1d1e9185993cf17cc1417640b6de1ec0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
