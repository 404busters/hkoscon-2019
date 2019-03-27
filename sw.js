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
    "url": "/hkoscon-2019/075a296fdc73d96112ad.js",
    "revision": "0229df560c8798e1d052a972115087be"
  },
  {
    "url": "/hkoscon-2019/096016304cbe014886d7.css",
    "revision": "0c02e47203b1290ad5f5abb4f970155e"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "11219d7ef2aaf75d8e680454da0f6093"
  },
  {
    "url": "/hkoscon-2019/2e001101abf10247c3cf.js",
    "revision": "eef9333aa861f79b3ecc7d57ca57ce3f"
  },
  {
    "url": "/hkoscon-2019/310bdc477ad1e82df22a.css",
    "revision": "f0ff665a8c84f76dbfeb5edc8ac6f809"
  },
  {
    "url": "/hkoscon-2019/344cde149db521524f87.js",
    "revision": "71ad58d8d862da20c66887c33c17bc70"
  },
  {
    "url": "/hkoscon-2019/44b8d0ab18e32013e5fb.css",
    "revision": "1c284c5762aaf870b72d55f0c9c89822"
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
    "url": "/hkoscon-2019/538779b615a2e0de3c2b.js",
    "revision": "736520de7976929c2b669dd364fdb83e"
  },
  {
    "url": "/hkoscon-2019/56f4e1db7a034eee8ddf.js",
    "revision": "6e9a7062d44b72cb4077771a394a226f"
  },
  {
    "url": "/hkoscon-2019/65b8395a33d893001551.js",
    "revision": "771aaedfc113a0ad7fa5052ef2216be7"
  },
  {
    "url": "/hkoscon-2019/65de7f450b881b2add20.js",
    "revision": "61398c1a89c55e390685a316516beef0"
  },
  {
    "url": "/hkoscon-2019/6a022d1cc93558ee3105.js",
    "revision": "ddf3982ac90f43be71f073f00ac48c01"
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
    "url": "/hkoscon-2019/87c5f2451cc2305c3e7e.js",
    "revision": "a8f6ac63fbfbe66850b5aeacf91be6e6"
  },
  {
    "url": "/hkoscon-2019/8cd055b3a75b2f1e8ecb.js",
    "revision": "ba059ff18ea6d8b4419311e320ddfa18"
  },
  {
    "url": "/hkoscon-2019/9005dc1574c175357845.js",
    "revision": "47dab0dd5477efaf19e98a7d07791dec"
  },
  {
    "url": "/hkoscon-2019/a0cba23b4663f16035ad.js",
    "revision": "121afaa5d49c6cc30cb9d391e4b807d3"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "b28216ce51dce77a5c397d249dc44f43"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "eecafac991994229f95b8abde600c55e"
  },
  {
    "url": "/hkoscon-2019/b77741939f7bb4e64db4.js",
    "revision": "c4f8ac95096bacd96c60547b7e667fb3"
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
    "revision": "2d071ab402fa6e50228fee2d923ddd89"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "b4d002620975018ce81e4407847976e4"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
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
    "url": "/hkoscon-2019/e55bc11dac7ed5639faa.js",
    "revision": "1b5bb4fa624396694cdcb63029516e83"
  },
  {
    "url": "/hkoscon-2019/e7a7bc4f5725da45b4cc.js",
    "revision": "e32dd65bd0a5820304d1229dab6bfac5"
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
    "revision": "c14424755f610e147d8aa7168f766e97"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "f52288d23b7e26893468a48dd60a0dc6"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "b2889c70365a7221ec724e0d7bd451b8"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "70d4de84867d415075f0e545929a329c"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "c2e84e46381ea3b1612dc5bd95847b2c"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "c1d651fa2f7103ab256fa7a7ae2f74e4"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "f0590603233ea291a105a4564ecb783d"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "e8f1e25f400f4c083a3df079f05d1ee7"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "98ea69298be612a20ac80739adf87a79"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "97608e2bc972216a90c650ae4bc38bd4"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "c58882a72d1be17dddf8b42fac20c616"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "aea2e5f1d39b230a837d7cfab45f4e25"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "238ea14a395e085ae6bde470c95fb776"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "d22712a24a469eacc539651b5041caad"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "e5ef6b8b751fc14ead5dea1d3e0bc0ba"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "1518452832557dab71ae441b7c425948"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "bb79ef0564b399fe3b9d5e107aadb40a"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "9b256c1b08576268cd1c9d68e84c95c9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "0f3d523bee089cd4a6878b6c8929b0a9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "336b4a25f3391ad1070b76ffda0083eb"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/index.html",
    "revision": "6508dd5652eb675e9085a3eb2e45fe9f"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "6f0e3b95c20390dd26d75f83abc1a42b"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "482bd8cd2d7be5634e4ffb30ab9f2518"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "26966b5bf66054f4cd62305d99354005"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "14b6a83d47017c50630aedba77687432"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "9398488a4f98f0ff199528fb85c6355a"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "06dedba57342e029d2aeee46823d4fe4"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "d242022e3327d6dc90661611d2078081"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "7e594ccbb854561417c89e488786dfa8"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "d6a6a88f74d9666cab512f7f0d9929de"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "d3f1560fba808fba38e16908a604c254"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "c1d64b7819a65490334308a3f2868088"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "fdcf4eb19e6019b29b6628326cef7631"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "3048281e7f6a8bba0e30033e422f5d4e"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "453f80cba6ac5def37b22f3f1dad7dad"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "81851c8db7db5235323fcfd92bedacbc"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "e936881684a2dbe012eaffc21d07f4b4"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "5a08ca3a91e0670e00420e1edf262bbc"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "3b6cc3f6b87800c7677f5dd2015564e1"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/index.html",
    "revision": "3a7efd340987efa75ce59c296846af03"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "b28216ce51dce77a5c397d249dc44f43"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "eecafac991994229f95b8abde600c55e"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "2d071ab402fa6e50228fee2d923ddd89"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "b4d002620975018ce81e4407847976e4"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "c14424755f610e147d8aa7168f766e97"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "f52288d23b7e26893468a48dd60a0dc6"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "b2889c70365a7221ec724e0d7bd451b8"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "70d4de84867d415075f0e545929a329c"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "c2e84e46381ea3b1612dc5bd95847b2c"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "c1d651fa2f7103ab256fa7a7ae2f74e4"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "f0590603233ea291a105a4564ecb783d"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "e8f1e25f400f4c083a3df079f05d1ee7"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "98ea69298be612a20ac80739adf87a79"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "97608e2bc972216a90c650ae4bc38bd4"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "c58882a72d1be17dddf8b42fac20c616"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "aea2e5f1d39b230a837d7cfab45f4e25"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "238ea14a395e085ae6bde470c95fb776"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "d22712a24a469eacc539651b5041caad"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "e5ef6b8b751fc14ead5dea1d3e0bc0ba"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "1518452832557dab71ae441b7c425948"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "bb79ef0564b399fe3b9d5e107aadb40a"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "9b256c1b08576268cd1c9d68e84c95c9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "0f3d523bee089cd4a6878b6c8929b0a9"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "336b4a25f3391ad1070b76ffda0083eb"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/",
    "revision": "6508dd5652eb675e9085a3eb2e45fe9f"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "6f0e3b95c20390dd26d75f83abc1a42b"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "482bd8cd2d7be5634e4ffb30ab9f2518"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "26966b5bf66054f4cd62305d99354005"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "14b6a83d47017c50630aedba77687432"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "9398488a4f98f0ff199528fb85c6355a"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "06dedba57342e029d2aeee46823d4fe4"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "d242022e3327d6dc90661611d2078081"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "7e594ccbb854561417c89e488786dfa8"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "d6a6a88f74d9666cab512f7f0d9929de"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/",
    "revision": "d3f1560fba808fba38e16908a604c254"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "c1d64b7819a65490334308a3f2868088"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "fdcf4eb19e6019b29b6628326cef7631"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "3048281e7f6a8bba0e30033e422f5d4e"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "453f80cba6ac5def37b22f3f1dad7dad"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "81851c8db7db5235323fcfd92bedacbc"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "e936881684a2dbe012eaffc21d07f4b4"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "5a08ca3a91e0670e00420e1edf262bbc"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "3b6cc3f6b87800c7677f5dd2015564e1"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/",
    "revision": "3a7efd340987efa75ce59c296846af03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
