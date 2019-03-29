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
    "url": "/hkoscon-2019/0316a8e9daac67cd8e1a.js",
    "revision": "464a2041d0bf386f8cac002212bbe721"
  },
  {
    "url": "/hkoscon-2019/073c2cca1dfacd6a0b58.css",
    "revision": "62a1268e43bd720d34d317ada4cf02a6"
  },
  {
    "url": "/hkoscon-2019/0eec7b71ebcc01ff0e0e.js",
    "revision": "9dc1f1bd6091f40af2fc0e5efab2a6c4"
  },
  {
    "url": "/hkoscon-2019/12c58eed89d6014e6c44.css",
    "revision": "13762f276c66593250d5484e1f4aa5d1"
  },
  {
    "url": "/hkoscon-2019/18df3f6038ad97a86c99.js",
    "revision": "a7a052977b74251ad03cda9d05f1fd15"
  },
  {
    "url": "/hkoscon-2019/19f2c0618ad95a5f1118.js",
    "revision": "9244d6187d6d1f1d00bc7f506dc182ae"
  },
  {
    "url": "/hkoscon-2019/1b4db0b6577893954061.js",
    "revision": "26e0a918e99ea3b93a5c1222d4b8917a"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "e72c5e4ac5fab2758fb7a792de951280"
  },
  {
    "url": "/hkoscon-2019/20232e4d7893d85269f5.css",
    "revision": "249f869db1112ed3c8a3e69c4c4d92dc"
  },
  {
    "url": "/hkoscon-2019/2476422ddbbb7b9894f1.js",
    "revision": "94227ba7f4d38d2d07fcb3d3664fb0e6"
  },
  {
    "url": "/hkoscon-2019/296d6a8d2808851f7bc9.js",
    "revision": "60a02c99ac79577450891c5349a948a1"
  },
  {
    "url": "/hkoscon-2019/2da2cbb14bab6686cda8.css",
    "revision": "bc56c6e3e4905013c270d9984a1e87a6"
  },
  {
    "url": "/hkoscon-2019/47553c43e53a1f7f5f49.js",
    "revision": "2c34b07073d6f15c7e3a435ff767eb11"
  },
  {
    "url": "/hkoscon-2019/535d1383494604798a27.css",
    "revision": "f09c0ce272141b533113e7cd29c3cf3d"
  },
  {
    "url": "/hkoscon-2019/570502009db101a7fce4.js",
    "revision": "2acce194b5cdf118cfd35865b4ce3f04"
  },
  {
    "url": "/hkoscon-2019/5fdc83b881f0c63b7c87.js",
    "revision": "bcd89f26f8def0c98467afadb9074e19"
  },
  {
    "url": "/hkoscon-2019/8abb3284d2686a9b9770.js",
    "revision": "e9b1f10ac8d069f13811882bec185d29"
  },
  {
    "url": "/hkoscon-2019/9597b497dc9c4f091828.js",
    "revision": "2fdd35d274f586da9c61dc2f403590ec"
  },
  {
    "url": "/hkoscon-2019/a95ae73cf4380662d4e9.css",
    "revision": "668bec8ed029aa41e4edfd130c04467e"
  },
  {
    "url": "/hkoscon-2019/about/coc/index.html",
    "revision": "32c4f33d6ba0d06d051403881eb17aed"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/index.html",
    "revision": "0e700f5dcf0ca1ed62a086d257c8dfcf"
  },
  {
    "url": "/hkoscon-2019/af4f76f70869bec8e89b.js",
    "revision": "02107e289a11a277ab94d6301541f182"
  },
  {
    "url": "/hkoscon-2019/afff8b6fffe3e80618fa.js",
    "revision": "3514728adf7dbc3e249401de3e1d2cc7"
  },
  {
    "url": "/hkoscon-2019/b28c01d4332324e2d2c2.js",
    "revision": "3f70d5ef4184fbcf9d90fec9e4aa884c"
  },
  {
    "url": "/hkoscon-2019/b782a2dfad93442de7b4.js",
    "revision": "0f78b06519cace78820efe2a980914d0"
  },
  {
    "url": "/hkoscon-2019/c08eec3748036dc29f58.css",
    "revision": "43d5405ab0f4bc41a7452dbc00d25e15"
  },
  {
    "url": "/hkoscon-2019/c3266e7e9f97f3e549fc.js",
    "revision": "5914c42c430b65ee5f4342a67271318a"
  },
  {
    "url": "/hkoscon-2019/ca4abe37402a7bd09389.js",
    "revision": "9ca03603b69af663d9ede801f3f01647"
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
    "revision": "e81dbd7b8075f6b7adba5df200d111a1"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "96e25b15d525fb993acd1e6f4d5849bd"
  },
  {
    "url": "/hkoscon-2019/d1d212570e26027c294f.css",
    "revision": "df4b7c436dea4b56cfff94a89031318a"
  },
  {
    "url": "/hkoscon-2019/df8c2c7f29df4a13bc4f.js",
    "revision": "ab6abf63b9d985c4f5a9350e65bc4327"
  },
  {
    "url": "/hkoscon-2019/e03e48b338ed191228c2.css",
    "revision": "6daa27100b2731025d9c6eb32e1ae6ed"
  },
  {
    "url": "/hkoscon-2019/eed0a0ece104f01cd455.js",
    "revision": "6c9338e772e318b81014055cec5a6486"
  },
  {
    "url": "/hkoscon-2019/f132aaf65c8191769d1b.css",
    "revision": "a7a7bcc5069a2d30051021536ca5ee96"
  },
  {
    "url": "/hkoscon-2019/f1cb5189a2450243f650.css",
    "revision": "92ac8a848037992b93004565ee7c018b"
  },
  {
    "url": "/hkoscon-2019/f988c6faa2ef3c7bcaf4.js",
    "revision": "0069a2d1c4a683932a711bf38a3155d3"
  },
  {
    "url": "/hkoscon-2019/fc004a35e78101cba1e3.js",
    "revision": "739780c4601636c3bd6aa28f4f166351"
  },
  {
    "url": "/hkoscon-2019/fd198db4bc5abeb04839.css",
    "revision": "bbeafe734fe483a531602de7ec484b18"
  },
  {
    "url": "/hkoscon-2019/fde7c5e89c6676792faf.css",
    "revision": "56a413c7db34468fee0e33c47e4717a2"
  },
  {
    "url": "/hkoscon-2019/ff45d94fa32438234535.js",
    "revision": "b0251676e224e090eab12dd59b8605b0"
  },
  {
    "url": "/hkoscon-2019/images/banner.jpg",
    "revision": "376ac4802d3c925b223330562ff4654e"
  },
  {
    "url": "/hkoscon-2019/images/bg.png",
    "revision": "37695f34b0d871edac87887e7e6dda81"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/0355e6c99e405f2d650a048f93849e0a.jpg",
    "revision": "f2b53740fd1d3af56ae27da3a98f1f8b"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/318824b7d24aa53a1550c3fdcc3cdaad.jpg",
    "revision": "718f2353e9a4a2fc0f69966ff9c3f00e"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/441a4f7b4e3fc43c174c9018a8fe88f3.jpg",
    "revision": "559c8ad17d71fcc1a17855be0ede9e22"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/5af7cdeb38835c964eeadcb6c8f2c32c.jpg",
    "revision": "ddf79060560d8a397533f628e4ea9031"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/7871c0482c9d274d68fe1d056a7cce8b.jpg",
    "revision": "81670649ca0068b39c53d2e42b90545c"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/824010d0d7fcf80d2f629309de68becb.jpg",
    "revision": "3c8dcde9b5dead1c6b9f242d762ea194"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/ac09c01ecec26e63726faa64ca59fa30.jpg",
    "revision": "52910f14529df88f419b1ff33be78533"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/b402043e9d8202b0b252eca0a9e5639e.jpg",
    "revision": "0d09e273188248b025e5863d54621aa0"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/c63e3dcf23114e4769ac00c16617d1e9.jpg",
    "revision": "8ed0d10320039ed20e70de248003c340"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/cc93adf96a1b6d795983ede8cb3d111b.jpg",
    "revision": "59b8d98dc974c797f7ddefba6943b2b6"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/d22e8f6bf9c2ce9b185c270a442e288a.jpg",
    "revision": "be8f9bae79059fff2c7d6989509de383"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/e11966ad5e195fef25bf0bd163fb7a98.jpg",
    "revision": "d663ee0d529cbd942b4e1a7e674cf68f"
  },
  {
    "url": "/hkoscon-2019/images/volunteer/fa29d4359d8c420eec9b84532765dfec.jpg",
    "revision": "7c31719da41196175814289839bd8a57"
  },
  {
    "url": "/hkoscon-2019/img/eb90f7f.png",
    "revision": "eb90f7fbc71ca73d9d3ab9d57657bbc2"
  },
  {
    "url": "/hkoscon-2019/index.html",
    "revision": "ee5f542b8d86935f83f34321d577a499"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "abf8551ee9894a1fda16d549c7382d67"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "3c12876144536e1672183adb7dab27b6"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "0d54705f0f8c0c54c7246a511deaf4b3"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "2a7feafc07c99b1e9ebe52a1e6c94ecf"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "eee228fa2e24e2738ad21a6fbe98c841"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "9927141f582524cb7b0079d1094b3f0a"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "9b1481547b52d3b44500e1dd567fa49f"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "1bc9fdb1776f187a9e783fc3f0b71712"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "b987f47e61f9801cd0c055c162118a4f"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "4cceca79cef4b8f3d1592560657c43a4"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "706a83f50bea74fb80c0d48319777cdd"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "f8d626d3f9d4d9cc23c82ddb591eaab4"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "7bb6d293e9b2c39284d1b5b9c00089b5"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "3bf4baf8e85f4d6bd52d08e152885003"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "56f27948e2d474a00768c50bb75039b7"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "8f62c2d23f0612a624f14cfaf4ee1cc9"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "04cb8a49e42b74637cf4d5ba68adbb70"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/index.html",
    "revision": "4b660bf4587c6e8746b23e147c4a81ea"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "c149617e04c5f75200ff97c6aeeb7dad"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "3168d35542e7e0d116c88b06b89cccf4"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "941d3ce831d681ac9741060c38cfc044"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "cc89377e12347768a5e25be0f2354a19"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "39e76b01f09df3536d3f30cb9011f921"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "0932fa8550c3ba06ccde9b4caabea880"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "4139d46fec6c1acf1f737b6d3fbda751"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "bac811e17ef93453098d0ab0dc1bc707"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "78e882a2b31e5b2a84b058e052fb9e72"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "9b8c73921da795832685e14bf0061bf0"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "18aa30bfbfa2ec74f6da8445790eec8d"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/index.html",
    "revision": "505fd16e57a7f9055d8d873ae33092a5"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "4e6f8a3cc65d07f71affa869b4efd8f9"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "91bd93476a1f7a0c6e5cae15b60229dd"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "dccdd78849cdd6b500bc9f3fb7b442bd"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "c79dcce9a2b1c8c2b4a28e35542f299d"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "dca29ee35cf0284e7dea24b61d8ad2bc"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "ffc9c5a3df30ea65dd8860b9b050a9d1"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "425ea450749ab9e7ac2aefe5d5bcec7b"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "5c44006a1dd90b72e834d5b60306a859"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/index.html",
    "revision": "656077a85dcf0b0038bb5517ae8f5d3c"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "32c4f33d6ba0d06d051403881eb17aed"
  },
  {
    "url": "/hkoscon-2019/about/volunteers/",
    "revision": "0e700f5dcf0ca1ed62a086d257c8dfcf"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "e81dbd7b8075f6b7adba5df200d111a1"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "96e25b15d525fb993acd1e6f4d5849bd"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "ee5f542b8d86935f83f34321d577a499"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "abf8551ee9894a1fda16d549c7382d67"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "3c12876144536e1672183adb7dab27b6"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "0d54705f0f8c0c54c7246a511deaf4b3"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "2a7feafc07c99b1e9ebe52a1e6c94ecf"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "eee228fa2e24e2738ad21a6fbe98c841"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "9927141f582524cb7b0079d1094b3f0a"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "9b1481547b52d3b44500e1dd567fa49f"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "1bc9fdb1776f187a9e783fc3f0b71712"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "b987f47e61f9801cd0c055c162118a4f"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "4cceca79cef4b8f3d1592560657c43a4"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "706a83f50bea74fb80c0d48319777cdd"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "f8d626d3f9d4d9cc23c82ddb591eaab4"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "7bb6d293e9b2c39284d1b5b9c00089b5"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "3bf4baf8e85f4d6bd52d08e152885003"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "56f27948e2d474a00768c50bb75039b7"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "8f62c2d23f0612a624f14cfaf4ee1cc9"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "04cb8a49e42b74637cf4d5ba68adbb70"
  },
  {
    "url": "/hkoscon-2019/topics/introduce-students-open-source-conference/",
    "revision": "4b660bf4587c6e8746b23e147c4a81ea"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "c149617e04c5f75200ff97c6aeeb7dad"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "3168d35542e7e0d116c88b06b89cccf4"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "941d3ce831d681ac9741060c38cfc044"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "cc89377e12347768a5e25be0f2354a19"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "39e76b01f09df3536d3f30cb9011f921"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "0932fa8550c3ba06ccde9b4caabea880"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "4139d46fec6c1acf1f737b6d3fbda751"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "bac811e17ef93453098d0ab0dc1bc707"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "78e882a2b31e5b2a84b058e052fb9e72"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "9b8c73921da795832685e14bf0061bf0"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "18aa30bfbfa2ec74f6da8445790eec8d"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-mysql-authentication-windows-pam/",
    "revision": "505fd16e57a7f9055d8d873ae33092a5"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "4e6f8a3cc65d07f71affa869b4efd8f9"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "91bd93476a1f7a0c6e5cae15b60229dd"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "dccdd78849cdd6b500bc9f3fb7b442bd"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "c79dcce9a2b1c8c2b4a28e35542f299d"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "dca29ee35cf0284e7dea24b61d8ad2bc"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "ffc9c5a3df30ea65dd8860b9b050a9d1"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "425ea450749ab9e7ac2aefe5d5bcec7b"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "5c44006a1dd90b72e834d5b60306a859"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-search-engine-optimization-wordpress-seo/",
    "revision": "656077a85dcf0b0038bb5517ae8f5d3c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
