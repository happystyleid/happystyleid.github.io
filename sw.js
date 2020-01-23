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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/01/20/tips-memilih-grosir-busana-muslim-anak-anak-terpercaya/index.html",
    "revision": "6662a1d135578acf8150eab63f1f025e"
  },
  {
    "url": "404.html",
    "revision": "1f4bc27edc824509075c4808350fd9b6"
  },
  {
    "url": "assets/5bb286bd/fonts/icomoon.ttf",
    "revision": "854e64012fe6ad84bc091f4b9fb8d4c0"
  },
  {
    "url": "assets/5bb286bd/fonts/icomoon.woff",
    "revision": "7895fbbef59820b20db789750f2b7d4e"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-bold-webfont.woff",
    "revision": "095f49133d37b7bebdbf4f3df2ef8fcb"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-bold-webfont.woff2",
    "revision": "7ea6e62a828fd1bd37de06875f00a9ae"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-medium-webfont.woff",
    "revision": "0e541db3fbd9e8ddb148fc516a9cc399"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-medium-webfont.woff2",
    "revision": "ba7de93eee038366b8fdde4d43ae5ae8"
  },
  {
    "url": "assets/5bb286bd/images/star-filled.svg",
    "revision": "9306b6774bc45e34b05f08c906598ac0"
  },
  {
    "url": "assets/5bb286bd/images/star-half.svg",
    "revision": "ddb584d9ccfed159abcf6716bde26bf4"
  },
  {
    "url": "assets/e4a4eab5/fonts/icomoon.ttf",
    "revision": "9a25a6ec1f2cd714e9b923a4b9bcdcf5"
  },
  {
    "url": "assets/e4a4eab5/fonts/roboto-bold-webfont.woff2",
    "revision": "7ea6e62a828fd1bd37de06875f00a9ae"
  },
  {
    "url": "assets/e4a4eab5/fonts/roboto-medium-webfont.woff2",
    "revision": "ba7de93eee038366b8fdde4d43ae5ae8"
  },
  {
    "url": "assets/e4a4eab5/fonts/roboto-regular-webfont.woff2",
    "revision": "96807a5350e71045195b71a0370df7ca"
  },
  {
    "url": "assets/fe980a3b/fonts/icomoon.ttf",
    "revision": "854e64012fe6ad84bc091f4b9fb8d4c0"
  },
  {
    "url": "assets/fe980a3b/fonts/roboto-bold-webfont.woff2",
    "revision": "7ea6e62a828fd1bd37de06875f00a9ae"
  },
  {
    "url": "assets/fe980a3b/fonts/roboto-medium-webfont.woff2",
    "revision": "ba7de93eee038366b8fdde4d43ae5ae8"
  },
  {
    "url": "assets/fe980a3b/fonts/roboto-regular-webfont.woff2",
    "revision": "96807a5350e71045195b71a0370df7ca"
  },
  {
    "url": "assets/fonts/icomoon.eot",
    "revision": "e2870d9010568e359dccfc0b404fed31"
  },
  {
    "url": "assets/fonts/icomoon.svg",
    "revision": "c02aceaf0412a1840446a4e1d70f824d"
  },
  {
    "url": "assets/fonts/icomoon.ttf",
    "revision": "c6f3337e5007fcbe59541a02a1185ccd"
  },
  {
    "url": "assets/fonts/icomoon.woff",
    "revision": "462d64f6697978b85efd83988d4702c5"
  },
  {
    "url": "blog/index.html",
    "revision": "babe52114f6810c71dedf9ba09e64fc8"
  },
  {
    "url": "data-preorder/pre-order-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider-desktop/banner-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider-desktop/banner-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider-desktop/banner-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider-mobile/banner-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider-mobile/banner-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "07ffb716ce57b8705dc416dac1cda7c8"
  },
  {
    "url": "feed.xml",
    "revision": "d7e8da3d485291292b99b5489a186c52"
  },
  {
    "url": "fonts/roboto-regular_1-webfont.woff",
    "revision": "e30dd9ef439605993389ce4dd1ada542"
  },
  {
    "url": "fonts/roboto-regular-webfont.woff2",
    "revision": "96807a5350e71045195b71a0370df7ca"
  },
  {
    "url": "gambar-produk/000.webp",
    "revision": "43fe0821196449e65cb4a9af1d4a006a"
  },
  {
    "url": "gambar-produk/1004.jpg",
    "revision": "cf78d601e645cf88a9ce6d6ad7304152"
  },
  {
    "url": "gambar-produk/1005.jpg",
    "revision": "10c42c9566466e397e931de7b22814b9"
  },
  {
    "url": "gambar-produk/1007.jpg",
    "revision": "8b7cb3501f1c01213a9b5fc7d072b6ef"
  },
  {
    "url": "gambar-produk/1012.jpg",
    "revision": "af32394bd790d9ca6ca04da8b5d7d12f"
  },
  {
    "url": "gambar-produk/1013.jpg",
    "revision": "8b7c8f3c1021b3a529157283b300b9c1"
  },
  {
    "url": "gambar-produk/1015.jpg",
    "revision": "0bdc41096d3fb99c1fc1fb4c057598a0"
  },
  {
    "url": "gambar-produk/1408.jpg",
    "revision": "5025032e5293534ec0e188e00e608482"
  },
  {
    "url": "gambar-produk/1409.jpg",
    "revision": "da2fd8d28e9aaa407ff52ec4c2f89413"
  },
  {
    "url": "gambar-produk/1418.jpg",
    "revision": "fb547db705f27d7b453b02539207efa9"
  },
  {
    "url": "gambar-produk/1420.jpg",
    "revision": "9df6e90edf9c3ba5a5bb3183f1b95c7a"
  },
  {
    "url": "gambar-produk/1424.jpg",
    "revision": "2c72b7cf7cd6b101f155e83fe93e5c65"
  },
  {
    "url": "gambar-produk/1427.jpg",
    "revision": "d53a035c27a6c0463d1128002617d9c0"
  },
  {
    "url": "gambar-produk/1429.jpg",
    "revision": "136149f2751af44f4c891f531639efe2"
  },
  {
    "url": "gambar-produk/1438.jpg",
    "revision": "14879280a9e39364266f4acb81efd2f7"
  },
  {
    "url": "gambar-produk/1442.jpg",
    "revision": "8bdb24b03c99445365ac9ab740e65a6f"
  },
  {
    "url": "gambar-produk/1443.jpg",
    "revision": "329a9e061e214cc48433cbfa0f51770b"
  },
  {
    "url": "gambar-produk/1446.jpg",
    "revision": "5b43be4b728f6703b889c4d85c890e44"
  },
  {
    "url": "gambar-produk/1453.jpg",
    "revision": "f8a378b8c238ecb084521c67dafda287"
  },
  {
    "url": "gambar-produk/1454.jpg",
    "revision": "4cafde800d19be5dd2fe8baf719f092a"
  },
  {
    "url": "gambar-produk/1456.jpg",
    "revision": "d394fe2bb8b4f33f2c847e74c0f29e7d"
  },
  {
    "url": "gambar-produk/1458.jpg",
    "revision": "1beda3c7a3318d372fb67234f5d49d81"
  },
  {
    "url": "gambar-produk/1509.jpg",
    "revision": "37cea7e4b4747cc26dae473f5184530f"
  },
  {
    "url": "gambar-produk/622.jpg",
    "revision": "c9e854d17ce315b586c7452c6332c4ca"
  },
  {
    "url": "gambar-produk/624.jpg",
    "revision": "728d1f69bbcdc4fbd25873fc6baf79f6"
  },
  {
    "url": "gambar-produk/629.jpg",
    "revision": "75916063d1a446f2b4f5e2127108b936"
  },
  {
    "url": "gambar-produk/634.jpg",
    "revision": "4cb9f14d277529362e0d441457c6d190"
  },
  {
    "url": "gambar-produk/636.jpg",
    "revision": "212f0d177732f9ac93c54069f3aaa548"
  },
  {
    "url": "gambar-produk/801.jpg",
    "revision": "f9808a68d0602f099f4be8ddd663d894"
  },
  {
    "url": "gambar-produk/806.jpg",
    "revision": "761257742d97266c89d965d43204288c"
  },
  {
    "url": "gambar-produk/fattaya.jpg",
    "revision": "f1381df5ab53d5ed818ac8710890fe42"
  },
  {
    "url": "hubungi-kami/index.html",
    "revision": "c308e6c78ffe39e23f170c1f8070d88b"
  },
  {
    "url": "images/banner-1.jpg",
    "revision": "182eb7f19fc5b6898ad3cda58323e73e"
  },
  {
    "url": "images/banner-2.jpg",
    "revision": "c6ef5d30237609e92adcd9fd73d12e64"
  },
  {
    "url": "images/banner-3.jpg",
    "revision": "efe77b4675852b4a4262f0afee1c9b3a"
  },
  {
    "url": "images/banner-mobile-1.webp",
    "revision": "c66c40eb8a5f488598ff329e69e2d5dc"
  },
  {
    "url": "images/banner-mobile-2.webp",
    "revision": "91e2a6755f8d8de552ec7f8bd7faf3e2"
  },
  {
    "url": "images/belanja-baju.jpg",
    "revision": "4312b70fc0a489675e6519e42943821b"
  },
  {
    "url": "images/grosir-busana-muslim-anak.jpg",
    "revision": "4ffb7abfe92faaaa8beb3856414c6c63"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "3050682b9896b0fbac82e33608fa41e2"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "232ff58a604e464d643b9797ad17a1e5"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "4603b0bd512da63482577dad34a08fad"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "17cd9216995052416b83b7d743389882"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "bf02aa58ab56016921be6313f7fb05d9"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6384e92d192900b33e649df8066cfd65"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "57c6706bac106b8cc5b96aea5107c071"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "5feb13caab0917a00c8e4f807e544ef6"
  },
  {
    "url": "images/klikada-panjang.svg",
    "revision": "fa27eef4158316cefa33e89dbfc29f4b"
  },
  {
    "url": "images/logo-happystyle.webp",
    "revision": "c54152f9e8775839ded74cc978614571"
  },
  {
    "url": "images/whatsapp.svg",
    "revision": "47c77bf133116ff76838809ae5d2c83a"
  },
  {
    "url": "index.html",
    "revision": "64f394f67c89ad2dac81363adbb01951"
  },
  {
    "url": "kebijakan-privasi/index.html",
    "revision": "fe5de6545412d0d8e4a155efc5a71c36"
  },
  {
    "url": "manifest.json",
    "revision": "ee0858293a3456396e3dab7feb6f7b5e"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0000/index.html",
    "revision": "b8136c6c1bb9e760b451e991c091dd5f"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0622/index.html",
    "revision": "8eb435129766245318bacebe76e65cfb"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0624/index.html",
    "revision": "8eb80d000183d3ae0f640475192035ba"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0629/index.html",
    "revision": "31b3ee43011bf5b7ae6d9185862f9e2e"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0634/index.html",
    "revision": "ad622cee6e70d6f95d7738c2fa407e2b"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0636/index.html",
    "revision": "65a1f32b8ede87d4b45f7990c8bada0e"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0801/index.html",
    "revision": "69face13cafab10090b19a7eb9ad5248"
  },
  {
    "url": "produk/busana-muslim-anak-jc-0806/index.html",
    "revision": "4d64f5b0b7c77d747ed1b785c0f605be"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1004/index.html",
    "revision": "4f2355cb798b0094443fcae471ef51d4"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1005/index.html",
    "revision": "4e366caff6c39f30813733b31d70338d"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1007/index.html",
    "revision": "07f73c7aa1a810c0abe632846ee1997c"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1012/index.html",
    "revision": "61dda31a1bbfbd60a3b8a889e0a2b79a"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1013/index.html",
    "revision": "32aabd999d8a6cad6b274330ca46f96d"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1015/index.html",
    "revision": "7468714e39b768934ff01fd3bb97a2cc"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1408/index.html",
    "revision": "6c037fee6e88a2f2cf29954026f4a286"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1409/index.html",
    "revision": "a040ac5366c57c5504cdd22392f56f0d"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1418/index.html",
    "revision": "ad7f69bf402536eed7da58ff0cc57bbb"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1420/index.html",
    "revision": "a16bc951d937b70e4c3763e81f6fe5ba"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1424/index.html",
    "revision": "0e02ebc25696c7386b08329d16c98e4a"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1427/index.html",
    "revision": "4d6ee530e08395f8ec2c84a6efab265e"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1429/index.html",
    "revision": "4ca402bdc7208430a659fb903e852477"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1438/index.html",
    "revision": "5474a65fa429d21ce27fd8d56698b678"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1442/index.html",
    "revision": "8949904abe8c080d64c4f571b3034d99"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1443/index.html",
    "revision": "e5fdc37845b44da49ed46582335bbd59"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1446/index.html",
    "revision": "c5fc99601fe28e4b03c13f665416b14b"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1453/index.html",
    "revision": "04b280faac5b44995bc8c9f13de05964"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1454/index.html",
    "revision": "1d0af547bf98f490826dc4e8ce4522fc"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1456/index.html",
    "revision": "2a264bbfd0f5693146b839790b4e36df"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1458/index.html",
    "revision": "4a3f22d7a35f1ed199d3d810fbbb14c4"
  },
  {
    "url": "produk/busana-muslim-anak-jc-1509/index.html",
    "revision": "d7ea189b6b9fd615f1db3a44886472b3"
  },
  {
    "url": "produk/fattaya/index.html",
    "revision": "2d0daf33a3a8581af6069c4f1b9db74f"
  },
  {
    "url": "produk/index.html",
    "revision": "88874edda13395ceab827f4386bec37e"
  },
  {
    "url": "robots.txt",
    "revision": "ce5871ca287a22456c71f79c3aea5d4d"
  },
  {
    "url": "sitemap.xml",
    "revision": "fe229022df30203be5a638c087e4aa12"
  },
  {
    "url": "sw.html",
    "revision": "9ddb3c30045037e3f8d7c4c5810a4386"
  },
  {
    "url": "syarat-dan-ketentuan/index.html",
    "revision": "c173b1f276455f9241d341c1e0f4c74f"
  },
  {
    "url": "tentang-kami/index.html",
    "revision": "3684ae06eeccebd4829e95f384340e5d"
  },
  {
    "url": "testimoni/index.html",
    "revision": "043a5bed2a5c6815b0f7e1e9058dae65"
  },
  {
    "url": "testimoni/suka-pelayanan-yang-ramah/index.html",
    "revision": "803ee02197d59ad887aa959796f07851"
  },
  {
    "url": "workbox-config.js",
    "revision": "31a27dffbe8b006da7b7354a24f0a152"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
