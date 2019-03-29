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
    "revision": "f5c484bb2390459f62b30ba614df6f8e"
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
    "url": "/hkoscon-2019/65a965a5b4764dc2dd16.js",
    "revision": "5c8a1a3e544b30a10b51b6d663ff63b0"
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
    "revision": "e5b0d8dba02464d60f83a377ffb2c775"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/index.html",
    "revision": "4f18a83c196521290821a0000d3fd854"
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
    "revision": "e6962703503619d1537249109327222e"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "c9d545db2092805917648b0e1145747c"
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
    "url": "/hkoscon-2019/e03e48b338ed191228c2.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
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
    "url": "/hkoscon-2019/f0f63c5441ba110ea225.js",
    "revision": "a3fa5ce91fbfe2d8ab9940351c3f865c"
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
    "url": "/hkoscon-2019/fcaae64c8ab33a65caba.js",
    "revision": "e8f23908cc35442ef33b56436aaf9b1c"
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
    "revision": "92d613b4a4bb2ac8108a045f84743ec3"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "1b7135ae6ae554e08cfd3f2795c7a1a3"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "17ebe2c37a110cd02c209b631205cb14"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "5e215272ab94cb501582ecdebd83ecf6"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "85f7c287e98503b4698d45f19c23e1ca"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "84226875e501c32511d8190fda717954"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "e45a1a0c5a5fb4c0d2461ef14448fcdc"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "5aacd92f67db00ba2df51a3f36d27755"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "b17637011591e7c6c059e15d61f51332"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "90d49c77a5033f816efacc880969489b"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "dfc9914de9316bda5319de11e8d1a1ad"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "1d4d139a760898b0a29eb879a9fb5154"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "6147d87a9c8306146d7713289ff91185"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "661dba5979a200feb4cc56607910f1ce"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "63fcc9533b3e4b1deeb4e1761eed2d05"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "2f8d46a23af9c316f4883630139f4637"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "0cc1ec5a71c2ae67c9e008db231d27c4"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "25edaef4bdfa0ea6e867a0b91e119492"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/index.html",
    "revision": "476707de3d8f81ee92a69c45332b1671"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "e9ae2431122ef378491b5acc1e99208d"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "e6c3550f8c559191948c6f25ce02f98e"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "2f9fdb941a00d201eb86aaa28f340769"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "5071465a83d6b0374dd2d13b74f9f3ce"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "9cd04add41c4b5371ae79628ff4d9906"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "a2e056adce876c251d933fd17f5709d4"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "4cdabd15e0b2f655c6bfedb123437525"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "9a0a1bf72f80053d6a46f72331b8f6b0"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "8b3a4911035d8368113beebb9456b1d2"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "c6d811431e584caa59918492f24dd06a"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "da81a344e9922de0135cdfa974578218"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "edfaf14dc1cb3ad3ff27e5df5ff0481d"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "ab75128b2c0fd7bbec2e5b177b218d9c"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "576f8d9fb067badfdaaa9a65e24ff115"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "13dda20e1189094e22c9ec8a1f9d62eb"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "46b19f132dea0e3ccf019de7c7910b28"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "bee37ad35b75e4a00f7d30a8292dd2f5"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "4b0995a073b6e54dfa0cac2d1974e235"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "89aad082da65d929ae7142584de754bf"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "21f644f3cb7c891f16aca40748db21da"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "33781390507f0b17c862ff181d4e217c"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "e5b0d8dba02464d60f83a377ffb2c775"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/",
    "revision": "4f18a83c196521290821a0000d3fd854"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "e6962703503619d1537249109327222e"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "c9d545db2092805917648b0e1145747c"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "92d613b4a4bb2ac8108a045f84743ec3"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "1b7135ae6ae554e08cfd3f2795c7a1a3"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "17ebe2c37a110cd02c209b631205cb14"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "5e215272ab94cb501582ecdebd83ecf6"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "85f7c287e98503b4698d45f19c23e1ca"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "84226875e501c32511d8190fda717954"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "e45a1a0c5a5fb4c0d2461ef14448fcdc"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "5aacd92f67db00ba2df51a3f36d27755"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "b17637011591e7c6c059e15d61f51332"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "90d49c77a5033f816efacc880969489b"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "dfc9914de9316bda5319de11e8d1a1ad"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "1d4d139a760898b0a29eb879a9fb5154"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "6147d87a9c8306146d7713289ff91185"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "661dba5979a200feb4cc56607910f1ce"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "63fcc9533b3e4b1deeb4e1761eed2d05"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "2f8d46a23af9c316f4883630139f4637"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "0cc1ec5a71c2ae67c9e008db231d27c4"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "25edaef4bdfa0ea6e867a0b91e119492"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/",
    "revision": "476707de3d8f81ee92a69c45332b1671"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "e9ae2431122ef378491b5acc1e99208d"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "e6c3550f8c559191948c6f25ce02f98e"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "2f9fdb941a00d201eb86aaa28f340769"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "5071465a83d6b0374dd2d13b74f9f3ce"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "9cd04add41c4b5371ae79628ff4d9906"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "a2e056adce876c251d933fd17f5709d4"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "4cdabd15e0b2f655c6bfedb123437525"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "9a0a1bf72f80053d6a46f72331b8f6b0"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "8b3a4911035d8368113beebb9456b1d2"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "c6d811431e584caa59918492f24dd06a"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "da81a344e9922de0135cdfa974578218"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "edfaf14dc1cb3ad3ff27e5df5ff0481d"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "ab75128b2c0fd7bbec2e5b177b218d9c"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "576f8d9fb067badfdaaa9a65e24ff115"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "13dda20e1189094e22c9ec8a1f9d62eb"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "46b19f132dea0e3ccf019de7c7910b28"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "bee37ad35b75e4a00f7d30a8292dd2f5"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "4b0995a073b6e54dfa0cac2d1974e235"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "89aad082da65d929ae7142584de754bf"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "21f644f3cb7c891f16aca40748db21da"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "33781390507f0b17c862ff181d4e217c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
