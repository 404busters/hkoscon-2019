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
    "url": "/hkoscon-2019/08d5ada300c196f691f0.js",
    "revision": "88fd679031087308a55d22f0859f234a"
  },
  {
    "url": "/hkoscon-2019/096016304cbe014886d7.css",
    "revision": "0c02e47203b1290ad5f5abb4f970155e"
  },
  {
    "url": "/hkoscon-2019/200.html",
    "revision": "efedb2c50d9dccd4643e50d76bebe218"
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
    "url": "/hkoscon-2019/52085eae48cee94e17a5.js",
    "revision": "6185b32d4bbfdcfd361d1fc9b3d72f80"
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
    "revision": "441eab4247416a3e69eea2c3c540b409"
  },
  {
    "url": "/hkoscon-2019/about/committee/index.html",
    "revision": "01d564911d0a132caccecb95e1010b49"
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
    "revision": "7d32f67c2b842ab0babbb51ad941d17c"
  },
  {
    "url": "/hkoscon-2019/cfp/index.html",
    "revision": "32cd4b5f4f3ad54e47a6789823c94cc9"
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
    "revision": "d8ae19ee11fa4d1eb43e89d0192bc4d1"
  },
  {
    "url": "/hkoscon-2019/timetable/index.html",
    "revision": "882938b374f1436989867a67cdd11657"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/index.html",
    "revision": "2a5e08f0db0ec945a85c91b48d51e3e0"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/index.html",
    "revision": "62aa40045d8639945ee274880a217835"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/index.html",
    "revision": "64354f9cb87f86572da1147c9da9dba4"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/index.html",
    "revision": "6de5c3a1568d08708ebe13e279bda737"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/index.html",
    "revision": "7e6a34f50e51d0322da687d667e171d2"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/index.html",
    "revision": "462041684a52e9e7d6bf94db16233898"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/index.html",
    "revision": "380619dc9f9eaf71354ff15c9ab91169"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/index.html",
    "revision": "9742dd131eae9c7d3f77db8c9f1b1d7c"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/index.html",
    "revision": "9e37220924466a4881507f07ccab22c2"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/index.html",
    "revision": "c9e47515ef30a8d2d817699d0ff823b8"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/index.html",
    "revision": "cf9f666706cc832ea82432806bd630c7"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/index.html",
    "revision": "d4ec497fcaa902f93a54281c8f12899c"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/index.html",
    "revision": "51149801c21a50fea2ff10658c1ad5b7"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/index.html",
    "revision": "ed0ed292db5c093e47334970bb68f50e"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/index.html",
    "revision": "3a45754d53695995e367d85f85c04d64"
  },
  {
    "url": "/hkoscon-2019/topics/index.html",
    "revision": "3b40740c87fff4187dac84b4bb0d2f16"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/index.html",
    "revision": "21ef730c4a125623944a9a4a53e516ba"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/index.html",
    "revision": "c5c5bcd620685b45b01f3b677af8b728"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/index.html",
    "revision": "ab522805574645c1e971baeff6fb9a14"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/index.html",
    "revision": "0c11b81e6f404808f069535babcda536"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/index.html",
    "revision": "de6bcedc23a4e49628c5a5dfd31f8cd6"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/index.html",
    "revision": "425013d1448006076e5ba271264da34a"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/index.html",
    "revision": "6ba8766f3bee92fe6769519816865618"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/index.html",
    "revision": "85d1baf1a0e7d3f44e66cea0bf4baa45"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/index.html",
    "revision": "32fbe44ec8f0a8cd725294832164e493"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/index.html",
    "revision": "1ceed69f4bb80eda397a94bf848bec8f"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/index.html",
    "revision": "d81906c6afe64b24aef7204ffed7ebc4"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/index.html",
    "revision": "b166a5712f2a5e27da61b4cd1dcb998a"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/index.html",
    "revision": "9ef51575d9a5b279b53fca3b785a81d0"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/index.html",
    "revision": "d8cd20ddcf42745c7ab75b97c752a0e2"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/index.html",
    "revision": "50902062751d4b502d0dd97695fad11d"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/index.html",
    "revision": "d9d94f3a7df0a9a7323d7e676f055c51"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/index.html",
    "revision": "bb17391c1106cb2040b01cca9512f72f"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/index.html",
    "revision": "2855358ad957f45f8bbfe1b2d37d5182"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/index.html",
    "revision": "42d6b9b5760ec6b4dfd42f61e5ac6d12"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/index.html",
    "revision": "b5f7b4567cc7dc39d7f5ea5a934ee537"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/index.html",
    "revision": "c3c52e0e8f72bdffb5e5610de8bf09dc"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/index.html",
    "revision": "68cd7c140f6dadabc002c25d572037bc"
  },
  {
    "url": "/hkoscon-2019/about/coc/",
    "revision": "441eab4247416a3e69eea2c3c540b409"
  },
  {
    "url": "/hkoscon-2019/about/committee/",
    "revision": "01d564911d0a132caccecb95e1010b49"
  },
  {
    "url": "/hkoscon-2019/cfc/",
    "revision": "7d32f67c2b842ab0babbb51ad941d17c"
  },
  {
    "url": "/hkoscon-2019/cfp/",
    "revision": "32cd4b5f4f3ad54e47a6789823c94cc9"
  },
  {
    "url": "/hkoscon-2019/",
    "revision": "d8ae19ee11fa4d1eb43e89d0192bc4d1"
  },
  {
    "url": "/hkoscon-2019/timetable/",
    "revision": "882938b374f1436989867a67cdd11657"
  },
  {
    "url": "/hkoscon-2019/topics/8-essential-steps-secure-your-mysql/",
    "revision": "2a5e08f0db0ec945a85c91b48d51e3e0"
  },
  {
    "url": "/hkoscon-2019/topics/build-jamstack-blog-system-gatsbyjs/",
    "revision": "62aa40045d8639945ee274880a217835"
  },
  {
    "url": "/hkoscon-2019/topics/build-minimal-dbms-scratch-rust/",
    "revision": "64354f9cb87f86572da1147c9da9dba4"
  },
  {
    "url": "/hkoscon-2019/topics/continuous-delivery-cloud-native-infrastructure/",
    "revision": "6de5c3a1568d08708ebe13e279bda737"
  },
  {
    "url": "/hkoscon-2019/topics/dapp-game-blockchain-random-number-generation-method-and-implementation/",
    "revision": "7e6a34f50e51d0322da687d667e171d2"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-bare-metal-operating-system-provisioning/",
    "revision": "462041684a52e9e7d6bf94db16233898"
  },
  {
    "url": "/hkoscon-2019/topics/decentralized-data-marketplace-based-distributed-ledgers/",
    "revision": "380619dc9f9eaf71354ff15c9ab91169"
  },
  {
    "url": "/hkoscon-2019/topics/devops-ansible-native-kubernetes/",
    "revision": "9742dd131eae9c7d3f77db8c9f1b1d7c"
  },
  {
    "url": "/hkoscon-2019/topics/diagnosis-internets-health-mozilla-internet-health-report/",
    "revision": "9e37220924466a4881507f07ccab22c2"
  },
  {
    "url": "/hkoscon-2019/topics/diy-wealth-management-app/",
    "revision": "c9e47515ef30a8d2d817699d0ff823b8"
  },
  {
    "url": "/hkoscon-2019/topics/formal-verification-smart-contract/",
    "revision": "cf9f666706cc832ea82432806bd630c7"
  },
  {
    "url": "/hkoscon-2019/topics/haxe-transpilation-php-static-typing-arrow-functions-metaprogramming-and-more/",
    "revision": "d4ec497fcaa902f93a54281c8f12899c"
  },
  {
    "url": "/hkoscon-2019/topics/homemade-scientific-clusters/",
    "revision": "51149801c21a50fea2ff10658c1ad5b7"
  },
  {
    "url": "/hkoscon-2019/topics/how-we-started-open-source-apm-project-and-troubleshooting-it/",
    "revision": "ed0ed292db5c093e47334970bb68f50e"
  },
  {
    "url": "/hkoscon-2019/topics/ice-cream-robot-creating-qr-code-ice-cream-coupons-gravityforms-and-minimum-coding/",
    "revision": "3a45754d53695995e367d85f85c04d64"
  },
  {
    "url": "/hkoscon-2019/topics/",
    "revision": "3b40740c87fff4187dac84b4bb0d2f16"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-open-technology-hong-kong-education/",
    "revision": "21ef730c4a125623944a9a4a53e516ba"
  },
  {
    "url": "/hkoscon-2019/topics/introducing-tus-resumable-file-uploads-protocol/",
    "revision": "c5c5bcd620685b45b01f3b677af8b728"
  },
  {
    "url": "/hkoscon-2019/topics/introduct-students-open-source-conference/",
    "revision": "ab522805574645c1e971baeff6fb9a14"
  },
  {
    "url": "/hkoscon-2019/topics/jiegouxianggangrenyongbiaokaitidekunhuo/",
    "revision": "0c11b81e6f404808f069535babcda536"
  },
  {
    "url": "/hkoscon-2019/topics/lesson-learned-large-scale-mysql-cluster-implementing-project/",
    "revision": "de6bcedc23a4e49628c5a5dfd31f8cd6"
  },
  {
    "url": "/hkoscon-2019/topics/lets-build-bitcoin-client-rust-scratch/",
    "revision": "425013d1448006076e5ba271264da34a"
  },
  {
    "url": "/hkoscon-2019/topics/make-hyperledger-fabric-reactive-and-cqrs-es/",
    "revision": "6ba8766f3bee92fe6769519816865618"
  },
  {
    "url": "/hkoscon-2019/topics/moving-python-3-while-keeping-mozilla-fuzzing-lights/",
    "revision": "85d1baf1a0e7d3f44e66cea0bf4baa45"
  },
  {
    "url": "/hkoscon-2019/topics/muggle-promote-open-source-pathways-take-coscup-sponsorship-team-example/",
    "revision": "32fbe44ec8f0a8cd725294832164e493"
  },
  {
    "url": "/hkoscon-2019/topics/open-standard-and-database-languages-hong-kong-context/",
    "revision": "1ceed69f4bb80eda397a94bf848bec8f"
  },
  {
    "url": "/hkoscon-2019/topics/pim25-crowdsourced-weather-data-project/",
    "revision": "d81906c6afe64b24aef7204ffed7ebc4"
  },
  {
    "url": "/hkoscon-2019/topics/plant-identification-system-ai-ar/",
    "revision": "b166a5712f2a5e27da61b4cd1dcb998a"
  },
  {
    "url": "/hkoscon-2019/topics/plug-it-my-sql-authentication-windows-pam/",
    "revision": "9ef51575d9a5b279b53fca3b785a81d0"
  },
  {
    "url": "/hkoscon-2019/topics/practical-mysql-performance-tuning-and-optimization-mysqlxingnengyouhuashizhan/",
    "revision": "d8cd20ddcf42745c7ab75b97c752a0e2"
  },
  {
    "url": "/hkoscon-2019/topics/r-exploratory-data-analysis/",
    "revision": "50902062751d4b502d0dd97695fad11d"
  },
  {
    "url": "/hkoscon-2019/topics/raspberry-pi-history-tips-and-use-case/",
    "revision": "d9d94f3a7df0a9a7323d7e676f055c51"
  },
  {
    "url": "/hkoscon-2019/topics/status-quo-tensorflow-lite/",
    "revision": "bb17391c1106cb2040b01cca9512f72f"
  },
  {
    "url": "/hkoscon-2019/topics/troubleshooting-performance-tuning-best-practices/",
    "revision": "2855358ad957f45f8bbfe1b2d37d5182"
  },
  {
    "url": "/hkoscon-2019/topics/vlc-and-open-source-multimedia-news/",
    "revision": "42d6b9b5760ec6b4dfd42f61e5ac6d12"
  },
  {
    "url": "/hkoscon-2019/topics/what-hyperledger-fabric-20-bring-us/",
    "revision": "b5f7b4567cc7dc39d7f5ea5a934ee537"
  },
  {
    "url": "/hkoscon-2019/topics/whats-new-haxe-4/",
    "revision": "c3c52e0e8f72bdffb5e5610de8bf09dc"
  },
  {
    "url": "/hkoscon-2019/topics/wordpress-seo/",
    "revision": "68cd7c140f6dadabc002c25d572037bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute("/hkoscon-2019/", new workbox.strategies.NetworkFirst(), 'GET');
