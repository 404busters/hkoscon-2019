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
    "url": "/hkoscon-2019/1c4e2f34a6db721c4568.js",
    "revision": "8b4a922ae09c9fe74d22b24180fd3276"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "f95f7b7b956fc51a9cfc84a92915bde1"
  },
  {
    "url": "/hkoscon-2019/2d6459e48845553febd6.js",
    "revision": "8f98f8de5384c0c6b6113bd353e8e78c"
  },
  {
    "url": "/hkoscon-2019/305af34eb4848a0501f1.js",
    "revision": "95ccb34063fab81b80129439ee7e479f"
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
    "url": "/hkoscon-2019/66996ca5b55586162527.js",
    "revision": "425056e879d45d1ea91fed9dc88ac137"
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
    "revision": "74d234f6627880d52646f60304618366"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "8d7590fb64471b3bb7ac9bf89a6755fb"
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
    "revision": "3239d10b135f2929c04dcbf2d953d060"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "92c1ea40b96a13a28b6262613f334aab"
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
    "revision": "90fe7153c17de1d6179ef3f052f99ab5"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "cf0bc834be8d0ad8980d24bbb262cf78"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "2a710ad90292261dfa153f2335ba5f0a"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "2e58c6cdd5c97f479b99138139f9bb29"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "5b3c06671601b6c593222b47d81544d3"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "cb3e470556c7073124f937d7150e4018"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "9e3617d33cbc2cc86d9563db43f77600"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "885e0c8d8d6ab674219622edd4e4a5e9"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "2baf56bca85bd342b24e1fb372dc5333"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "e4508f819350ceac2d97ed3eb56fab64"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "ace1882c20437140683abca6e0ed2ce9"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "19bf173afa54194628d2f281e1261b61"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "44dcd6f50487f240533ff4de0e27cdf5"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "1a7c7bcbe73e6f42dd9182c7327c0836"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "2ca8d8fe021243c95e4a86ebbd225257"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "c9ecd600a64768455312e1b886ad49b3"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "f6ac0115373862a966da360fb94eac5c"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "a530e8b9ac57becad663f32251666e44"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "4af6d88e29bcbe0dfe2c05149a9473a9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "b583be359b2716bf66d49f161580e5c3"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/index.html",
    "revision": "2642659e0b2e84ff74b63e7e710ea66d"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "dc15d017c77a0e125563e82ee4d8de96"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "d771ce405f69f7531727a6264ea5c971"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "351688ff2ad8e168bb344491170bdce0"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "c0a3756fbe30598262f3f6804adb5456"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "d3a8fefd84fb23bc1ad67408c9cd1d9d"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "0eced0499673ced9125843fcfab4d54b"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "843168bbaebf1b525d2b3ad102df07cf"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "4d0a88c0f83cc57e92a25767a04f24ca"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "bd5506e49a03f627de54ea770aad877c"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "129993cbb13df816e5cf8d53e4687054"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "18849211ac408b75e9a0a9e949f9f8ae"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "59de034ef47cc0933f1ccb80775ab73f"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "d684bfb27272b46b52686f43f3cd0eeb"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "c78cf40ea1852a59202e0ee4cc9ca045"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "b4ad53e223b2ef59565949bfa2abedd7"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "ee33e7c639f7a239d87ae0494a69aed7"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "f606d3dcd317344b511cd1f02473c27e"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "f9ad6f21c7c350a330b7952924c5e679"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/index.html",
    "revision": "312292839dacbd93f9196907b2a9b295"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "74d234f6627880d52646f60304618366"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "8d7590fb64471b3bb7ac9bf89a6755fb"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "3239d10b135f2929c04dcbf2d953d060"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "92c1ea40b96a13a28b6262613f334aab"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "90fe7153c17de1d6179ef3f052f99ab5"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "cf0bc834be8d0ad8980d24bbb262cf78"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "2a710ad90292261dfa153f2335ba5f0a"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "2e58c6cdd5c97f479b99138139f9bb29"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "5b3c06671601b6c593222b47d81544d3"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "cb3e470556c7073124f937d7150e4018"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "9e3617d33cbc2cc86d9563db43f77600"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "885e0c8d8d6ab674219622edd4e4a5e9"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "2baf56bca85bd342b24e1fb372dc5333"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "e4508f819350ceac2d97ed3eb56fab64"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "ace1882c20437140683abca6e0ed2ce9"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "19bf173afa54194628d2f281e1261b61"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "44dcd6f50487f240533ff4de0e27cdf5"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "1a7c7bcbe73e6f42dd9182c7327c0836"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "2ca8d8fe021243c95e4a86ebbd225257"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "c9ecd600a64768455312e1b886ad49b3"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "f6ac0115373862a966da360fb94eac5c"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "a530e8b9ac57becad663f32251666e44"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "4af6d88e29bcbe0dfe2c05149a9473a9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "b583be359b2716bf66d49f161580e5c3"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/",
    "revision": "2642659e0b2e84ff74b63e7e710ea66d"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "dc15d017c77a0e125563e82ee4d8de96"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "d771ce405f69f7531727a6264ea5c971"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "351688ff2ad8e168bb344491170bdce0"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "c0a3756fbe30598262f3f6804adb5456"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "d3a8fefd84fb23bc1ad67408c9cd1d9d"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "0eced0499673ced9125843fcfab4d54b"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "843168bbaebf1b525d2b3ad102df07cf"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "4d0a88c0f83cc57e92a25767a04f24ca"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "bd5506e49a03f627de54ea770aad877c"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/",
    "revision": "129993cbb13df816e5cf8d53e4687054"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "18849211ac408b75e9a0a9e949f9f8ae"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "59de034ef47cc0933f1ccb80775ab73f"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "d684bfb27272b46b52686f43f3cd0eeb"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "c78cf40ea1852a59202e0ee4cc9ca045"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "b4ad53e223b2ef59565949bfa2abedd7"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "ee33e7c639f7a239d87ae0494a69aed7"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "f606d3dcd317344b511cd1f02473c27e"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "f9ad6f21c7c350a330b7952924c5e679"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/",
    "revision": "312292839dacbd93f9196907b2a9b295"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
