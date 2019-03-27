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
    "revision": "7b3c3842b035da62126bca059383665d"
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
    "url": "/hkoscon-2019/511873b4d11ad5a53d35.js",
    "revision": "e1e77716d82c4eae5abf4eafe01ed950"
  },
  {
    "url": "/hkoscon-2019/54ce63fb83d68711b50b.js",
    "revision": "9196d46aa4f06ce78a0a1ede2e2a49f1"
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
    "url": "/hkoscon-2019/7a1cbbeedf354ed2aaaa.js",
    "revision": "3bb5deab23e63edbfc0fbfadf984e958"
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
    "revision": "0c4174031e94da1525987d0d1a6569ee"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "39a6381546c6182fb86341756b0b2c89"
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
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "687524526c7105b0a4e1afd062911869"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/d82f1300a953e5883704.js",
    "revision": "50d92ed727d924c882f62879e9d1c0e3"
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
    "revision": "fa119f0a8c87231ca6ff9b69206736e6"
  },
  {
    "url": "/hkoscon-2019/topic/8-essential-steps-secure-your-mysql/index.html",
    "revision": "58086221066705feb5c1b56766a1e6bd"
  },
  {
    "url": "/hkoscon-2019/topic/build-minimal-dbms-scratch-rust/index.html",
    "revision": "6439d797d5e6deed86cec59ac378304f"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "d9c20da9380145ffb18c2519c5d420ae"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "8d8247ffca9aee5d9867dfa6772ca532"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "54ccb9282081553006ece6fb89314b59"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "167cc676c3c7b51e5144fac5f8e8b842"
  },
  {
    "url": "/hkoscon-2019/topic/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "2652832dffe7e3b9ec039d01c31b9bc8"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-open-technology-hong-kong-education/index.html",
    "revision": "3a019c2aee7c774f8bfeeaa4ff05d7be"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "25ec684cc076a024d5e16ae4907b281e"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/index.html",
    "revision": "4836e3064d298b979007dd0639ecb71a"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "c0b7390ca2a870dba2dcc76f5fa239cc"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "5c4c3242f661f775bcebfe6e39c98332"
  },
  {
    "url": "/hkoscon-2019/topic/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "36a6e6bddca520211a4022f8e36d3f90"
  },
  {
    "url": "/hkoscon-2019/topic/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "e5c2a5d53a1116f8dc800d744fbd0dd0"
  },
  {
    "url": "/hkoscon-2019/topic/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "c9289933af0daa276f4d1343a18517dc"
  },
  {
    "url": "/hkoscon-2019/topic/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "ece8409ab751ac8f101b012bd791d668"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/index.html",
    "revision": "5a6f4272c6867b8a6d9ce30ae7a46ea5"
  },
  {
    "url": "/hkoscon-2019/topic/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "1fbe7d925cae5603a3c4f82d4ff2bd2a"
  },
  {
    "url": "/hkoscon-2019/topic/r-exploratory-data-analysis/index.html",
    "revision": "f3f4d7114a1a8ad915646a392c06b8f3"
  },
  {
    "url": "/hkoscon-2019/topic/vlc-and-open-source-multimedia-news/index.html",
    "revision": "994ca5956d54e8b34356d7734a7f8d66"
  },
  {
    "url": "/hkoscon-2019/topic/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "4e6624ece499b3029e6abf1eca5c2910"
  },
  {
    "url": "/hkoscon-2019/topic/whats-new-haxe-4/index.html",
    "revision": "fa9e800fa4bf145683ffe9dac77a9273"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/index.html",
    "revision": "72f9a6fc985c06ba1a9fb1b17eef3f85"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "e6c7f011a66e9d846b86ec88be9b1e4b"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "0c4174031e94da1525987d0d1a6569ee"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "39a6381546c6182fb86341756b0b2c89"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "687524526c7105b0a4e1afd062911869"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "fa119f0a8c87231ca6ff9b69206736e6"
  },
  {
    "url": "/hkoscon-2019/topic/8-essential-steps-secure-your-mysql/",
    "revision": "58086221066705feb5c1b56766a1e6bd"
  },
  {
    "url": "/hkoscon-2019/topic/build-minimal-dbms-scratch-rust/",
    "revision": "6439d797d5e6deed86cec59ac378304f"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/",
    "revision": "d9c20da9380145ffb18c2519c5d420ae"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "8d8247ffca9aee5d9867dfa6772ca532"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "54ccb9282081553006ece6fb89314b59"
  },
  {
    "url": "/hkoscon-2019/topic/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "167cc676c3c7b51e5144fac5f8e8b842"
  },
  {
    "url": "/hkoscon-2019/topic/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "2652832dffe7e3b9ec039d01c31b9bc8"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-open-technology-hong-kong-education/",
    "revision": "3a019c2aee7c774f8bfeeaa4ff05d7be"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "25ec684cc076a024d5e16ae4907b281e"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/",
    "revision": "4836e3064d298b979007dd0639ecb71a"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "c0b7390ca2a870dba2dcc76f5fa239cc"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/",
    "revision": "5c4c3242f661f775bcebfe6e39c98332"
  },
  {
    "url": "/hkoscon-2019/topic/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "36a6e6bddca520211a4022f8e36d3f90"
  },
  {
    "url": "/hkoscon-2019/topic/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "e5c2a5d53a1116f8dc800d744fbd0dd0"
  },
  {
    "url": "/hkoscon-2019/topic/open-standard-and-database-languages-hong-kong-context/",
    "revision": "c9289933af0daa276f4d1343a18517dc"
  },
  {
    "url": "/hkoscon-2019/topic/pim25-crowdsourced-weather-data-project/",
    "revision": "ece8409ab751ac8f101b012bd791d668"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/",
    "revision": "5a6f4272c6867b8a6d9ce30ae7a46ea5"
  },
  {
    "url": "/hkoscon-2019/topic/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "1fbe7d925cae5603a3c4f82d4ff2bd2a"
  },
  {
    "url": "/hkoscon-2019/topic/r-exploratory-data-analysis/",
    "revision": "f3f4d7114a1a8ad915646a392c06b8f3"
  },
  {
    "url": "/hkoscon-2019/topic/vlc-and-open-source-multimedia-news/",
    "revision": "994ca5956d54e8b34356d7734a7f8d66"
  },
  {
    "url": "/hkoscon-2019/topic/what-hyperledger-fabric-20-bring-us/",
    "revision": "4e6624ece499b3029e6abf1eca5c2910"
  },
  {
    "url": "/hkoscon-2019/topic/whats-new-haxe-4/",
    "revision": "fa9e800fa4bf145683ffe9dac77a9273"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/",
    "revision": "72f9a6fc985c06ba1a9fb1b17eef3f85"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "e6c7f011a66e9d846b86ec88be9b1e4b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
