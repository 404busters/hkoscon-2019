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
    "url": "/hkoscon-2019/0406eedaad02d1b54f98.js",
    "revision": "c357981535f36cada382d172dd583d06"
  },
  {
    "url": "/hkoscon-2019/096016304cbe014886d7.css",
    "revision": "0c02e47203b1290ad5f5abb4f970155e"
  },
  {
    "url": "/hkoscon-2019/10fe4965d21ce12f1bd1.js",
    "revision": "0cea33d4e5fb7d079da2ae30720d206b"
  },
  {
    "url": "/hkoscon-2019/132217186f6b274b7c49.js",
    "revision": "e7c43c4e39d3353ec749ba2fae587bcb"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "c4076416445853c8696c26410e282de7"
  },
  {
    "url": "/hkoscon-2019/22001ec8760bb4d16b2a.js",
    "revision": "b41aa8e389a9022a19a9c2b922649d57"
  },
  {
    "url": "/hkoscon-2019/291da2d85e079fb18b58.js",
    "revision": "34da56e2d01439ec0e280852c6388153"
  },
  {
    "url": "/hkoscon-2019/310bdc477ad1e82df22a.css",
    "revision": "f0ff665a8c84f76dbfeb5edc8ac6f809"
  },
  {
    "url": "/hkoscon-2019/3ff0bd3d4599a162f94f.js",
    "revision": "71bc2de6e992cc5a3051596afaf0f9e3"
  },
  {
    "url": "/hkoscon-2019/450d9fc3a66ffa490800.js",
    "revision": "2f0c7321345107d65ae6c50ed0ca1600"
  },
  {
    "url": "/hkoscon-2019/47bbb830d58ffdaf3aa7.js",
    "revision": "f683c74e96c4860a0979398e4fa85f7f"
  },
  {
    "url": "/hkoscon-2019/490b47947137458ece3e.js",
    "revision": "22a1bd695e86544ab549ecae7b74cfdb"
  },
  {
    "url": "/hkoscon-2019/500b2bf34a0fe9a2c0ce.css",
    "revision": "10d5d691aa0b3533093b57c41687a438"
  },
  {
    "url": "/hkoscon-2019/58678bed6d18609a0100.js",
    "revision": "6765dfeeadcd9cdd08aac461b3cd0019"
  },
  {
    "url": "/hkoscon-2019/65de7f450b881b2add20.js",
    "revision": "61398c1a89c55e390685a316516beef0"
  },
  {
    "url": "/hkoscon-2019/696a6caaee06157da430.css",
    "revision": "7fbf42c8240a9221b921fcfa5be1c28a"
  },
  {
    "url": "/hkoscon-2019/70177d3f88db79133eeb.js",
    "revision": "df564cfdbfa67b541f186cfa6ed7ddfb"
  },
  {
    "url": "/hkoscon-2019/79c2a49a7733cf30ae97.js",
    "revision": "0fd530ed67ce77834dd8126d7b278023"
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
    "url": "/hkoscon-2019/9aefe536fa038c415894.js",
    "revision": "ee16d18bc9b1ca9f1ad9105643c5748a"
  },
  {
    "url": "/hkoscon-2019/9ed6f1e56f40e70876da.js",
    "revision": "8b76ec62c39acc57fe21d4de03ba4536"
  },
  {
    "url": "/hkoscon-2019/a0cba23b4663f16035ad.js",
    "revision": "121afaa5d49c6cc30cb9d391e4b807d3"
  },
  {
    "url": "/hkoscon-2019/a2f261be74f915a585ad.js",
    "revision": "d3d31a5cd2994b4f2091fd6fc320ee13"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "c6cf46dc55c4d64a0d052301576df5bd"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "e4f4521729984277cc878adca732898b"
  },
  {
    "url": "/hkoscon-2019/b52216cea47a148c3f1a.js",
    "revision": "418843387ea900b3301cad3fe6404249"
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
    "url": "/hkoscon-2019/cfc/index.html",
    "revision": "a6a4714acf8fd683f66d4ed06b2ce743"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "6bff8ae7fbc6c00d9d1a6a928f958462"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/d9712d58c9bcd26b18d5.js",
    "revision": "91afd98fd056c1b942a4a0e644acf5d3"
  },
  {
    "url": "/hkoscon-2019/da2074b38c75d8d1a176.css",
    "revision": "d0250849b7de8a9d4788a412693f849b"
  },
  {
    "url": "/hkoscon-2019/ddd4df0a29e5a4a18c66.js",
    "revision": "358dbe312ed0a9bcdf957efdf71d87e2"
  },
  {
    "url": "/hkoscon-2019/e03e48b338ed191228c2.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/hkoscon-2019/e7a7bc4f5725da45b4cc.js",
    "revision": "e32dd65bd0a5820304d1229dab6bfac5"
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
    "url": "/hkoscon-2019/f895737bed50425e8be1.js",
    "revision": "e29f587a666d95016a5248133068a245"
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
    "revision": "a87c9cab07b302afc30ae3d4005b6d31"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "4f5093857f8996637f0068cd36c43e29"
  },
  {
    "url": "/hkoscon-2019/topic/8-essential-steps-secure-your-mysql/index.html",
    "revision": "c49937dd3f7ca75db1f81e4950eefc5c"
  },
  {
    "url": "/hkoscon-2019/topic/build-minimal-dbms-scratch-rust/index.html",
    "revision": "08a6410d1cb2812f67d53b59984ee66d"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "f45f653ee91307b33de095c97a4cb89d"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "0d77dfb1e3e193b7c4ad7fe19edf7239"
  },
  {
    "url": "/hkoscon-2019/topic/devops-ansible-native-kubernetes/index.html",
    "revision": "f8304ff251e1f4eb989ca7d302e8bd82"
  },
  {
    "url": "/hkoscon-2019/topic/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "88a548d5f5c403b8ea383e2feb18f0f6"
  },
  {
    "url": "/hkoscon-2019/topic/diy-wealth-management-app/index.html",
    "revision": "d35215b4124d23a175de39fc1b14ade2"
  },
  {
    "url": "/hkoscon-2019/topic/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "c5c7d708b5ae130368d711b98281e400"
  },
  {
    "url": "/hkoscon-2019/topic/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "8adedf40de2591e2e6613cf39aa47ef5"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-open-technology-hong-kong-education/index.html",
    "revision": "0f2697d04673dd70742d6eb6ccda86d5"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "51ac2cc7d4278ae2e0d0097a809177b7"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/index.html",
    "revision": "2ad232b902b3aaa58bfddaabd74f3236"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "f4326d5b4d6053d4ea4d4878d898b5cc"
  },
  {
    "url": "/hkoscon-2019/topic/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "f1d0dde9e867a28c595822e2fced924b"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "9c448a66849dc24be503e49c41c54e0e"
  },
  {
    "url": "/hkoscon-2019/topic/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "7b848becf675eef687b3ed974b0a777c"
  },
  {
    "url": "/hkoscon-2019/topic/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "cd9003467fb4acf08250073322df5d55"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/index.html",
    "revision": "7a2085460fa33f3b531e5137d6b9b9dd"
  },
  {
    "url": "/hkoscon-2019/topic/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "994c05053ae84ac6957e9dd493984d12"
  },
  {
    "url": "/hkoscon-2019/topic/r-exploratory-data-analysis/index.html",
    "revision": "feb332e3df5b93b868e7b02edf1d9a75"
  },
  {
    "url": "/hkoscon-2019/topic/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "9bf698ab4a5581a71274513f82458387"
  },
  {
    "url": "/hkoscon-2019/topic/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "a8ac126be852787ab1db7890ed5a7a53"
  },
  {
    "url": "/hkoscon-2019/topic/whats-new-haxe-4/index.html",
    "revision": "7d5f3f94a7485ccc3a24ef55775139e6"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/index.html",
    "revision": "bb990d948b3b24aa14a7b09372cef574"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "ee9b4bbaee266a6f22022fdd6edff285"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "c6cf46dc55c4d64a0d052301576df5bd"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "e4f4521729984277cc878adca732898b"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "a6a4714acf8fd683f66d4ed06b2ce743"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "6bff8ae7fbc6c00d9d1a6a928f958462"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "a87c9cab07b302afc30ae3d4005b6d31"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "4f5093857f8996637f0068cd36c43e29"
  },
  {
    "url": "/hkoscon-2019/topic/8-essential-steps-secure-your-mysql/",
    "revision": "c49937dd3f7ca75db1f81e4950eefc5c"
  },
  {
    "url": "/hkoscon-2019/topic/build-minimal-dbms-scratch-rust/",
    "revision": "08a6410d1cb2812f67d53b59984ee66d"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/",
    "revision": "f45f653ee91307b33de095c97a4cb89d"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "0d77dfb1e3e193b7c4ad7fe19edf7239"
  },
  {
    "url": "/hkoscon-2019/topic/devops-ansible-native-kubernetes/",
    "revision": "f8304ff251e1f4eb989ca7d302e8bd82"
  },
  {
    "url": "/hkoscon-2019/topic/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "88a548d5f5c403b8ea383e2feb18f0f6"
  },
  {
    "url": "/hkoscon-2019/topic/diy-wealth-management-app/",
    "revision": "d35215b4124d23a175de39fc1b14ade2"
  },
  {
    "url": "/hkoscon-2019/topic/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "c5c7d708b5ae130368d711b98281e400"
  },
  {
    "url": "/hkoscon-2019/topic/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "8adedf40de2591e2e6613cf39aa47ef5"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-open-technology-hong-kong-education/",
    "revision": "0f2697d04673dd70742d6eb6ccda86d5"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "51ac2cc7d4278ae2e0d0097a809177b7"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/",
    "revision": "2ad232b902b3aaa58bfddaabd74f3236"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "f4326d5b4d6053d4ea4d4878d898b5cc"
  },
  {
    "url": "/hkoscon-2019/topic/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "f1d0dde9e867a28c595822e2fced924b"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/",
    "revision": "9c448a66849dc24be503e49c41c54e0e"
  },
  {
    "url": "/hkoscon-2019/topic/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "7b848becf675eef687b3ed974b0a777c"
  },
  {
    "url": "/hkoscon-2019/topic/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "cd9003467fb4acf08250073322df5d55"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/",
    "revision": "7a2085460fa33f3b531e5137d6b9b9dd"
  },
  {
    "url": "/hkoscon-2019/topic/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "994c05053ae84ac6957e9dd493984d12"
  },
  {
    "url": "/hkoscon-2019/topic/r-exploratory-data-analysis/",
    "revision": "feb332e3df5b93b868e7b02edf1d9a75"
  },
  {
    "url": "/hkoscon-2019/topic/troubleshooting-performance-tuning-best-practices/",
    "revision": "9bf698ab4a5581a71274513f82458387"
  },
  {
    "url": "/hkoscon-2019/topic/what-hyperledger-fabric-20-bring-us/",
    "revision": "a8ac126be852787ab1db7890ed5a7a53"
  },
  {
    "url": "/hkoscon-2019/topic/whats-new-haxe-4/",
    "revision": "7d5f3f94a7485ccc3a24ef55775139e6"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/",
    "revision": "bb990d948b3b24aa14a7b09372cef574"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "ee9b4bbaee266a6f22022fdd6edff285"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
