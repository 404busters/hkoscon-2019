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
    "revision": "3c13f6bb70dfeb025c3d7640a2d9d6d1"
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
    "revision": "a5a536e4acea6ef4aa01512b8fdd84ec"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "f5d818a18b81ed60580a33875b972b34"
  },
  {
    "url": "/hkoscon-2019/bacde83c5c1e4faf55e4.js",
    "revision": "053ff9f689769119a8b1b4b10a1da4f6"
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
    "revision": "4d1984b9323b0b448b84b758d733ae80"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "8dfff069b559ff8e57e5510ea8e0a90e"
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
    "revision": "7cf9040306c977ab61ddd9d718dc4df0"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "730cd61546bab8abfb07cd42a51ae514"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "23d32ad88346d425d7886e114614ab0e"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "3dc6440c703e5dedd02f2ff3785284c2"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "e6c98bd6d8ea6067317250986318f2c4"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "c7d4f10ae62681f8617ba9cbeaa65b64"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "1bb28cc098468c318270ddf0837b1cae"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "9b597d82f1a261709588a827cf405f0b"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "cb6ffc9887ed5af71b3254a4c5dec67d"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "7e24d6c2f308490ddd6c5765499befa4"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "8f9135622c06d1e9abd2e8d2cbbbc119"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "0e899e27a40516d3ed5ce1db3d6e363b"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "45cdceb8f0b86d4f2bc2795b96aca87b"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "70d04fc55a411e95458ddac278320fa7"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "035cc50ea6feac51e941a76b2c62240e"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "ff8296bc73718e1e30e9eea2c3c9802e"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "21d694d48dab0586380440c8b11ec3c3"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "c607d37dbf5ba8459363031f03900e89"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/index.html",
    "revision": "d9dc62a52a8938b47b98e39436848032"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "788b99c8242ba588690b6f77f2821a01"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "518379b0697a1d6d73da2173c6b129cb"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "689ecdd412b70baa100cbb81b5a40c7e"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "0db7199ea0653c33fd0cc28c9fc136c6"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "1abd1c7b1f02b6693badb03726497ced"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "b47a54d5205346bd8f275d1d472d3d42"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "925c0bb1bf13116c53a3c111b861685a"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "449084373e7de413416142c362fc9c1c"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "83931693541dc66900fd1e490b73e131"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "0b0fecd08bb14d985a801a6ac6f87ef2"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "a793554bd19b56dd9d9aeb0739f7491c"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "c6bb145855cd7885d41c1700ec97b20b"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "1a4fccf2e16c11b1bcfddaba82586b91"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "b871ee992309b4d3d563b9b1da365ebb"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "aecf1b78f689d179d4504f7326da1888"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "1738bf36c850781a7a8dc3eb9c87c492"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "9d3aeb44717ab52298f85b66a6852b03"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "38350216a5bc7f901081feb582a6213a"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "927fdc0d12956e31d8e9311cfd8f9471"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "02db558b7d563fb8f897ba96c14f6355"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "653935b9ce6bcb3f9820b7457414f55f"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "a5a536e4acea6ef4aa01512b8fdd84ec"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "f5d818a18b81ed60580a33875b972b34"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "4d1984b9323b0b448b84b758d733ae80"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "8dfff069b559ff8e57e5510ea8e0a90e"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "7cf9040306c977ab61ddd9d718dc4df0"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "730cd61546bab8abfb07cd42a51ae514"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "23d32ad88346d425d7886e114614ab0e"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "3dc6440c703e5dedd02f2ff3785284c2"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "e6c98bd6d8ea6067317250986318f2c4"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "c7d4f10ae62681f8617ba9cbeaa65b64"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "1bb28cc098468c318270ddf0837b1cae"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "9b597d82f1a261709588a827cf405f0b"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "cb6ffc9887ed5af71b3254a4c5dec67d"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "7e24d6c2f308490ddd6c5765499befa4"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "8f9135622c06d1e9abd2e8d2cbbbc119"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "0e899e27a40516d3ed5ce1db3d6e363b"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "45cdceb8f0b86d4f2bc2795b96aca87b"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "70d04fc55a411e95458ddac278320fa7"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "035cc50ea6feac51e941a76b2c62240e"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "ff8296bc73718e1e30e9eea2c3c9802e"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "21d694d48dab0586380440c8b11ec3c3"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "c607d37dbf5ba8459363031f03900e89"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/",
    "revision": "d9dc62a52a8938b47b98e39436848032"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "788b99c8242ba588690b6f77f2821a01"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "518379b0697a1d6d73da2173c6b129cb"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "689ecdd412b70baa100cbb81b5a40c7e"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "0db7199ea0653c33fd0cc28c9fc136c6"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "1abd1c7b1f02b6693badb03726497ced"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "b47a54d5205346bd8f275d1d472d3d42"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "925c0bb1bf13116c53a3c111b861685a"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "449084373e7de413416142c362fc9c1c"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "83931693541dc66900fd1e490b73e131"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "0b0fecd08bb14d985a801a6ac6f87ef2"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "a793554bd19b56dd9d9aeb0739f7491c"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "c6bb145855cd7885d41c1700ec97b20b"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "1a4fccf2e16c11b1bcfddaba82586b91"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "b871ee992309b4d3d563b9b1da365ebb"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "aecf1b78f689d179d4504f7326da1888"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "1738bf36c850781a7a8dc3eb9c87c492"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "9d3aeb44717ab52298f85b66a6852b03"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "38350216a5bc7f901081feb582a6213a"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "927fdc0d12956e31d8e9311cfd8f9471"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "02db558b7d563fb8f897ba96c14f6355"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "653935b9ce6bcb3f9820b7457414f55f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
