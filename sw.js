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
    "url": "/hkoscon-2019/1e38518a301815fc0703.js",
    "revision": "23edb296a5855a650404b525c60f6f1e"
  },
  {
    "url": "/hkoscon-2019/1ead45184ac67dad6ff1.js",
    "revision": "d0ee503949dc44fea268c0c00db75325"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "d42f62cdb16333d67736da22c38444b5"
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
    "url": "/hkoscon-2019/9cc60be5b7a72a0d2049.js",
    "revision": "3074e8aef14edd0f9267fb2805022914"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "f423fb6ae1bc9fe97366f8017fdedf29"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "aff6068083488dca27d366e2a90ad50e"
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
    "revision": "698ba0b25ab1d4ed71fb7e91ba8e4885"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "1023273cd835bbfc1680d6b2eeb2dc48"
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
    "revision": "39068930df935835f23457252f45d274"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "9933752c19e84025672350db77eab185"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "df94ec85844267b770fa262a59ff1756"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "3037dbcbf0ba8182b6d95163c6803713"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "fa537090d9429e097276780019e1d654"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "2a7accdbd2d49c2d4039b1837bc103d2"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "426776b80707b221003c8ca7e69bfc42"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "546abaa5c8ebd898cad65add1cdbcac5"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "22410ee5857bbe6ff2df7954fc6186a3"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "9f90379b7ab306226baccc098f133bc1"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "4ca84fe9fe88faafaa15efec3530a456"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "2a003d421b7b40cf582a87ba98250963"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "ed8b4bd2f6fc51d1bd886ddb020c945b"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "d630b2a310c2479408082364e13cf6f4"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "f6e35cf343a8b753d1e597d9df09ad50"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "5ce7516bef25a9e709149fdd500aacaf"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "cf4749d4fd5f67323d19a07e36144df9"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "1ad9abc40386056d33d8149f3883522e"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "3acd820d58743338cdffcaccd44522ca"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "163e63bb07c83af5fafa9493bc30c011"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/index.html",
    "revision": "eb66b9365fe2687788a3fbc86c8f1ec4"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "b81d73490e8c2070044f5cd6fba10e22"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "98c5192325a33a87ba100a1816b34b37"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "fcbbd57e7285ccb9e00914fb7bd06983"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "b4ded52755452ff7fbc3f9d3e2469b30"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "e7fa0146cd546a940f971a62f5b9042d"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "d9ba24e5c192328cd08388a685ae4859"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "f94217905e372f8488e8517ac7c0bab3"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "b90555f831f6892f604107b9170d07ec"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "f2b65cc1b82383462e286d3db8c8cf3a"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "8cd13957729da2d1101a525559f56064"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "2bf14e9bb1f8e7aada29882256bde518"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "e7cc4e46247148ba3da513a206856470"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "7b9ea13e5b2e88047e00ffb9e83708b3"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "aafd1895d554e2eff28136a19a7cb008"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "df48ae45ae82917be4285955f2f081e7"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "8ba477b15b9f65fd62ad8532d788fd46"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "c4c397df65c2b20555dc6d38c70aafb4"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "4fe3c3baad2103633aa4f33f490973cd"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/index.html",
    "revision": "a2a6253d93fac1632c47a08956285c1a"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "f423fb6ae1bc9fe97366f8017fdedf29"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "aff6068083488dca27d366e2a90ad50e"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "698ba0b25ab1d4ed71fb7e91ba8e4885"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "1023273cd835bbfc1680d6b2eeb2dc48"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "39068930df935835f23457252f45d274"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "9933752c19e84025672350db77eab185"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "df94ec85844267b770fa262a59ff1756"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "3037dbcbf0ba8182b6d95163c6803713"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "fa537090d9429e097276780019e1d654"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "2a7accdbd2d49c2d4039b1837bc103d2"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "426776b80707b221003c8ca7e69bfc42"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "546abaa5c8ebd898cad65add1cdbcac5"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "22410ee5857bbe6ff2df7954fc6186a3"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "9f90379b7ab306226baccc098f133bc1"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "4ca84fe9fe88faafaa15efec3530a456"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "2a003d421b7b40cf582a87ba98250963"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "ed8b4bd2f6fc51d1bd886ddb020c945b"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "d630b2a310c2479408082364e13cf6f4"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "f6e35cf343a8b753d1e597d9df09ad50"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "5ce7516bef25a9e709149fdd500aacaf"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "cf4749d4fd5f67323d19a07e36144df9"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "1ad9abc40386056d33d8149f3883522e"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "3acd820d58743338cdffcaccd44522ca"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "163e63bb07c83af5fafa9493bc30c011"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/",
    "revision": "eb66b9365fe2687788a3fbc86c8f1ec4"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "b81d73490e8c2070044f5cd6fba10e22"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "98c5192325a33a87ba100a1816b34b37"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "fcbbd57e7285ccb9e00914fb7bd06983"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "b4ded52755452ff7fbc3f9d3e2469b30"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "e7fa0146cd546a940f971a62f5b9042d"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "d9ba24e5c192328cd08388a685ae4859"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "f94217905e372f8488e8517ac7c0bab3"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "b90555f831f6892f604107b9170d07ec"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "f2b65cc1b82383462e286d3db8c8cf3a"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/",
    "revision": "8cd13957729da2d1101a525559f56064"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "2bf14e9bb1f8e7aada29882256bde518"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "e7cc4e46247148ba3da513a206856470"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "7b9ea13e5b2e88047e00ffb9e83708b3"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "aafd1895d554e2eff28136a19a7cb008"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "df48ae45ae82917be4285955f2f081e7"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "8ba477b15b9f65fd62ad8532d788fd46"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "c4c397df65c2b20555dc6d38c70aafb4"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "4fe3c3baad2103633aa4f33f490973cd"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/",
    "revision": "a2a6253d93fac1632c47a08956285c1a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
