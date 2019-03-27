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
    "revision": "5356025eb9c7886ff0edc6b4749bf589"
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
    "url": "/hkoscon-2019/79c7c525f298294d16f7.js",
    "revision": "c8cae6e54a5a042fc325c7906305bab3"
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
    "revision": "b9c9ae03a65a28de7af0ddcd9bddb767"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "1d0f3390c79eafe6ae4e23082574abe1"
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
    "revision": "72289b518471e2642035e488cb05255a"
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
    "url": "/hkoscon-2019/f9f18d8d74857f5bbb52.js",
    "revision": "4a34871a2583f7afcd0d4cc0589ebbf2"
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
    "revision": "a0752601d0c119f7f241f94d22244efa"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "56997423d8ad52110168ea01694de619"
  },
  {
    "url": "/hkoscon-2019/topic/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "dc357b4c5663e8990ed70c26caa68ea9"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "b10af036ff59b6aedae8a0c1018c29e8"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "e0fbf6ee8ed9a318ea02e52efcb3a45b"
  },
  {
    "url": "/hkoscon-2019/topic/devops-ansible-native-kubernetes/index.html",
    "revision": "86a07ae9c4283e72f8635afd5e001cc4"
  },
  {
    "url": "/hkoscon-2019/topic/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "705a729ac4a2479867a943184dd7ef60"
  },
  {
    "url": "/hkoscon-2019/topic/diy-wealth-management-app/index.html",
    "revision": "dae45eafe2df8afce7444b6699d6956b"
  },
  {
    "url": "/hkoscon-2019/topic/formal-verification-smart-contract/index.html",
    "revision": "90f79f27e574af091cd97f1bb03ed845"
  },
  {
    "url": "/hkoscon-2019/topic/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "0ebe336663fc0051b72bf62738fb014a"
  },
  {
    "url": "/hkoscon-2019/topic/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "75773921423a7ef9f2b78a7068222caf"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-open-technology-hong-kong-education/index.html",
    "revision": "c8bf6b9c8c61fc27e5ef0508636b2306"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "08d2a293295f5661558986cf8da16884"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/index.html",
    "revision": "2c034c023deca4465c0b2ea3b9602a8f"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "d7a812917f015bc5824f4031a778b93c"
  },
  {
    "url": "/hkoscon-2019/topic/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "0aa3feb33b2b7633d30e8d75a6a1d175"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "10851a3586c72f32319e6b68e6992168"
  },
  {
    "url": "/hkoscon-2019/topic/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "13839985cf87de164d9d3bb08faf833d"
  },
  {
    "url": "/hkoscon-2019/topic/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "65c2afc5c5e8c282183c6e7cec3f7cf6"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/index.html",
    "revision": "c70330ae1200a33339255732aee869d9"
  },
  {
    "url": "/hkoscon-2019/topic/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "4ebbcc319655732d1dd5f4c1c7d89048"
  },
  {
    "url": "/hkoscon-2019/topic/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "a4e8602eb7fc8284f67848ab78300f87"
  },
  {
    "url": "/hkoscon-2019/topic/status-quo-tensorflow-lite/index.html",
    "revision": "92109a26b1057d624f8fc954cdda64ef"
  },
  {
    "url": "/hkoscon-2019/topic/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "c8641ef3c31ada7743ef4aac22fb879b"
  },
  {
    "url": "/hkoscon-2019/topic/vlc-and-open-source-multimedia-news/index.html",
    "revision": "6bd7895cf415db64d773d2a118b79ff2"
  },
  {
    "url": "/hkoscon-2019/topic/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "63fe60517e91726edc340ec3418b968c"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/index.html",
    "revision": "76f0db7f77238d9add7d8e532a89d6a9"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "1dc6357d0ee7f0d8c89642c622ca5102"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "b9c9ae03a65a28de7af0ddcd9bddb767"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "1d0f3390c79eafe6ae4e23082574abe1"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "72289b518471e2642035e488cb05255a"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "a0752601d0c119f7f241f94d22244efa"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "56997423d8ad52110168ea01694de619"
  },
  {
    "url": "/hkoscon-2019/topic/build-jamstack-blog-system-gatsbyjs/",
    "revision": "dc357b4c5663e8990ed70c26caa68ea9"
  },
  {
    "url": "/hkoscon-2019/topic/continuous-delivery-cloud-native-infrastructure/",
    "revision": "b10af036ff59b6aedae8a0c1018c29e8"
  },
  {
    "url": "/hkoscon-2019/topic/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "e0fbf6ee8ed9a318ea02e52efcb3a45b"
  },
  {
    "url": "/hkoscon-2019/topic/devops-ansible-native-kubernetes/",
    "revision": "86a07ae9c4283e72f8635afd5e001cc4"
  },
  {
    "url": "/hkoscon-2019/topic/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "705a729ac4a2479867a943184dd7ef60"
  },
  {
    "url": "/hkoscon-2019/topic/diy-wealth-management-app/",
    "revision": "dae45eafe2df8afce7444b6699d6956b"
  },
  {
    "url": "/hkoscon-2019/topic/formal-verification-smart-contract/",
    "revision": "90f79f27e574af091cd97f1bb03ed845"
  },
  {
    "url": "/hkoscon-2019/topic/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "0ebe336663fc0051b72bf62738fb014a"
  },
  {
    "url": "/hkoscon-2019/topic/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "75773921423a7ef9f2b78a7068222caf"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-open-technology-hong-kong-education/",
    "revision": "c8bf6b9c8c61fc27e5ef0508636b2306"
  },
  {
    "url": "/hkoscon-2019/topic/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "08d2a293295f5661558986cf8da16884"
  },
  {
    "url": "/hkoscon-2019/topic/introduct-students-open-source-conference/",
    "revision": "2c034c023deca4465c0b2ea3b9602a8f"
  },
  {
    "url": "/hkoscon-2019/topic/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "d7a812917f015bc5824f4031a778b93c"
  },
  {
    "url": "/hkoscon-2019/topic/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "0aa3feb33b2b7633d30e8d75a6a1d175"
  },
  {
    "url": "/hkoscon-2019/topic/lets-build-bitcoin-client-rust-scratch/",
    "revision": "10851a3586c72f32319e6b68e6992168"
  },
  {
    "url": "/hkoscon-2019/topic/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "13839985cf87de164d9d3bb08faf833d"
  },
  {
    "url": "/hkoscon-2019/topic/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "65c2afc5c5e8c282183c6e7cec3f7cf6"
  },
  {
    "url": "/hkoscon-2019/topic/plant-identification-system-ai-ar/",
    "revision": "c70330ae1200a33339255732aee869d9"
  },
  {
    "url": "/hkoscon-2019/topic/plug-it-my-sql-authentication-windows-pam/",
    "revision": "4ebbcc319655732d1dd5f4c1c7d89048"
  },
  {
    "url": "/hkoscon-2019/topic/raspberry-pi-history-tips-and-use-case/",
    "revision": "a4e8602eb7fc8284f67848ab78300f87"
  },
  {
    "url": "/hkoscon-2019/topic/status-quo-tensorflow-lite/",
    "revision": "92109a26b1057d624f8fc954cdda64ef"
  },
  {
    "url": "/hkoscon-2019/topic/troubleshooting-performance-tuning-best-practices/",
    "revision": "c8641ef3c31ada7743ef4aac22fb879b"
  },
  {
    "url": "/hkoscon-2019/topic/vlc-and-open-source-multimedia-news/",
    "revision": "6bd7895cf415db64d773d2a118b79ff2"
  },
  {
    "url": "/hkoscon-2019/topic/what-hyperledger-fabric-20-bring-us/",
    "revision": "63fe60517e91726edc340ec3418b968c"
  },
  {
    "url": "/hkoscon-2019/topic/wordpress-seo/",
    "revision": "76f0db7f77238d9add7d8e532a89d6a9"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "1dc6357d0ee7f0d8c89642c622ca5102"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
