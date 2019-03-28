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
    "url": "/hkoscon-2019/1f199aeb12aa1a977c47.js",
    "revision": "2681402177087bd8542aa21d1df64ef7"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "217e8677bb53ed9e10cd2dccfca33f87"
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
    "url": "/hkoscon-2019/35b419b0aa636a0a1bb1.js",
    "revision": "932759d7d9b6ba0a12345e488291d425"
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
    "revision": "4d9874ea832f2c367656d106f77533f1"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "c6e899b1cdd4ffbda8b146dc54dd4075"
  },
  {
    "url": "/hkoscon-2019/bd9046ef3fdd6de07885.js",
    "revision": "b1fc83adf3a7f4707b4a807000b9a64b"
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
    "revision": "0e04f19fdda225cf4282dde1805697b1"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "06998e82e01c626444f02e0cf69f3271"
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
    "url": "/hkoscon-2019/dc82b49eeae5e2103023.css",
    "revision": "b677ea7b448f399c8b775a01fa7d2626"
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
    "url": "/hkoscon-2019/f0c8915a03fb5173592b.css",
    "revision": "9fdc55af5d148081693de80e238a9c5e"
  },
  {
    "url": "/hkoscon-2019/f132aaf65c8191769d1b.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/hkoscon-2019/f5f3625abb8c504df1e4.js",
    "revision": "788eb58711fe521cff92b21ae30420c8"
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
    "revision": "85858eed59a3d7327b5b538328ae2585"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "d4cd53f5f77b6488c9887bdff16cacfb"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "42bbac9b760a54e0eb7f5ed77c8fe82f"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "04bf47f308ab299890fdab796ee76260"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "a9b8bd4370795ee47e0c9f85a4e7517d"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "d028fd9db0565b309a788469361c6c78"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "548531014f813d22be8c6af901314637"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "25f651465421c5ec2d7d2c2207696e93"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "ab3f502e07f1d05301f8ddcd5fa0fce8"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "5c6d9360edbcc3e74fdb83f0531827b3"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "2fe92d8b4cb2cd40da352bad59327097"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "68333f3ccdf44b52de220a2e3d60c0fd"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "25c66900a1e3de8dc4f9830beb5df8b2"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "8f271713fd63592a071daa5a8355d5c9"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "99a478b432a66bb75e6fd56916a323f7"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "899b2a86673d2ec917d2a81d5fdce6dd"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "d76aee8704881cb6e7ead1de5aae3be0"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "2db1338ed2045346bb9de69c58c77afc"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/index.html",
    "revision": "c45a7160da10f5ee7dcb00680344dea1"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "b47e66ce4bcf72c45bbe98fe4b8004c9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "9ed831bb19e8ff6b4b8257b2b2d33c45"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "193003c4f97bc44df6ad46843b03c51b"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "daf2ed13b932ea9b57667d75ed14f163"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "d1f20545ba850d8d6e9b103036dffcfc"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "2d0fe46b28366126b2464e006f8a3f50"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "24cb21c22d7548728bf22dba14064acf"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "3e6b1c5d1996dd5a6bb44a7ae6b4e24d"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "6cceb227fb19f75a9f82f6693bc13226"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "c641a3f2c3b84314a79469f9797c13bd"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "bb2489905a7d5924c34a7532a5804142"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "1ef65818c70bfde521d2bccb34baf86b"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "fc7df94c1abdb5d9436be41e413a1cc0"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "9bca5d36cd48fdb4793a4abfafb558fc"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "0ca36daf11de5188059769a416777116"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "ee6e0be9f83294549a868b19bd67198f"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "d64098bfd1ca7bd6dcf3c988b55f480a"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "dd6e8b8b671672bac92c2262955069d1"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "5ecd0e86c38382505d6e71e939b9788b"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "e044626d39208856e6d7b8badceb283c"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "86c0065bf426b38e77e2c38e31ba4ad0"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "4d9874ea832f2c367656d106f77533f1"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "c6e899b1cdd4ffbda8b146dc54dd4075"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "0e04f19fdda225cf4282dde1805697b1"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "06998e82e01c626444f02e0cf69f3271"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "85858eed59a3d7327b5b538328ae2585"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "d4cd53f5f77b6488c9887bdff16cacfb"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "42bbac9b760a54e0eb7f5ed77c8fe82f"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "04bf47f308ab299890fdab796ee76260"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "a9b8bd4370795ee47e0c9f85a4e7517d"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "d028fd9db0565b309a788469361c6c78"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "548531014f813d22be8c6af901314637"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "25f651465421c5ec2d7d2c2207696e93"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "ab3f502e07f1d05301f8ddcd5fa0fce8"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "5c6d9360edbcc3e74fdb83f0531827b3"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "2fe92d8b4cb2cd40da352bad59327097"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "68333f3ccdf44b52de220a2e3d60c0fd"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "25c66900a1e3de8dc4f9830beb5df8b2"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "8f271713fd63592a071daa5a8355d5c9"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "99a478b432a66bb75e6fd56916a323f7"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "899b2a86673d2ec917d2a81d5fdce6dd"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "d76aee8704881cb6e7ead1de5aae3be0"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "2db1338ed2045346bb9de69c58c77afc"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/",
    "revision": "c45a7160da10f5ee7dcb00680344dea1"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "b47e66ce4bcf72c45bbe98fe4b8004c9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "9ed831bb19e8ff6b4b8257b2b2d33c45"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "193003c4f97bc44df6ad46843b03c51b"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "daf2ed13b932ea9b57667d75ed14f163"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "d1f20545ba850d8d6e9b103036dffcfc"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "2d0fe46b28366126b2464e006f8a3f50"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "24cb21c22d7548728bf22dba14064acf"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "3e6b1c5d1996dd5a6bb44a7ae6b4e24d"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "6cceb227fb19f75a9f82f6693bc13226"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "c641a3f2c3b84314a79469f9797c13bd"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "bb2489905a7d5924c34a7532a5804142"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "1ef65818c70bfde521d2bccb34baf86b"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "fc7df94c1abdb5d9436be41e413a1cc0"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "9bca5d36cd48fdb4793a4abfafb558fc"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "0ca36daf11de5188059769a416777116"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "ee6e0be9f83294549a868b19bd67198f"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "d64098bfd1ca7bd6dcf3c988b55f480a"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "dd6e8b8b671672bac92c2262955069d1"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "5ecd0e86c38382505d6e71e939b9788b"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "e044626d39208856e6d7b8badceb283c"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "86c0065bf426b38e77e2c38e31ba4ad0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
