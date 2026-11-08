// This code implements the `-sMODULARIZE` settings by taking the generated
// JS program code (INNER_JS_CODE) and wrapping it in a factory function.

// Single threaded MINIMAL_RUNTIME programs do not need access to
// document.currentScript, so a simple export declaration is enough.
var createVascoletAOTWorker = (() => {
  // When MODULARIZE this JS may be executed later,
  // after document.currentScript is gone, so we save it.
  // In EXPORT_ES6 mode we can just use 'import.meta.url'.
  var _scriptName = globalThis.document?.currentScript?.src;
  return async function(moduleArg = {}) {
    var moduleRtn;

// include: shell.js
// include: minimum_runtime_check.js
// end include: minimum_runtime_check.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = moduleArg;

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = !!globalThis.window;
var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != 'renderer';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// include: W:\Vascolet-Web\_ejecuciones\worker-4-link-20261108-152350-de5527\tmp\tmpmhripbpx.js

  if (!Module['expectedDataFileDownloads']) Module['expectedDataFileDownloads'] = 0;
  Module['expectedDataFileDownloads']++;
  (() => {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    var isPthread = typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD;
    var isWasmWorker = typeof ENVIRONMENT_IS_WASM_WORKER != 'undefined' && ENVIRONMENT_IS_WASM_WORKER;
    if (isPthread || isWasmWorker) return;
    var isNode = globalThis.process && globalThis.process.versions && globalThis.process.versions.node && globalThis.process.type != 'renderer';
    async function loadPackage(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'W:/Vascolet-Web/0_vascolets_web/recompiler-lab/game-4/runtime-stdlib/worker-runtime.data';
      var REMOTE_PACKAGE_BASE = 'worker-runtime.data';
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      async function fetchRemotePackage(packageName, packageSize) {
        if (isNode) {
          var contents = require('fs').readFileSync(packageName);
          return new Uint8Array(contents).buffer;
        }
        if (!Module['dataFileDownloads']) Module['dataFileDownloads'] = {};
        try {
          var response = await fetch(packageName);
        } catch (e) {
          throw new Error(`Network Error: ${packageName}`, {e});
        }
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.url}`);
        }

        const chunks = [];
        const headers = response.headers;
        const total = Number(headers.get('Content-Length') || packageSize);
        let loaded = 0;

        Module['setStatus'] && Module['setStatus']('Downloading data...');
        const reader = response.body.getReader();

        while (1) {
          var {done, value} = await reader.read();
          if (done) break;
          chunks.push(value);
          loaded += value.length;
          Module['dataFileDownloads'][packageName] = {loaded, total};

          let totalLoaded = 0;
          let totalSize = 0;

          for (const download of Object.values(Module['dataFileDownloads'])) {
            totalLoaded += download.loaded;
            totalSize += download.total;
          }

          Module['setStatus'] && Module['setStatus'](`Downloading data... (${totalLoaded}/${totalSize})`);
        }

        const packageData = new Uint8Array(chunks.map((c) => c.length).reduce((a, b) => a + b, 0));
        let offset = 0;
        for (const chunk of chunks) {
          packageData.set(chunk, offset);
          offset += chunk.length;
        }
        return packageData.buffer;
      }

      var fetchPromise;
      var fetched = Module['getPreloadedPackage'] && Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE);

      if (!fetched) {
        // Note that we don't use await here because we want to execute the
        // the rest of this function immediately.
        fetchPromise = fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE);
      }

    async function runWithFS(Module) {

      function assert(check, msg) {
        if (!check) throw new Error(msg);
      }
Module['FS_createPath']("/", "game", true, true);
Module['FS_createPath']("/game", "assets", true, true);
Module['FS_createPath']("/game/assets", "audio", true, true);
Module['FS_createPath']("/game/assets/audio", "fx", true, true);
Module['FS_createPath']("/game/assets/audio/fx", "win", true, true);
Module['FS_createPath']("/game/assets/audio", "music", true, true);
Module['FS_createPath']("/game/assets/audio/music", "xo", true, true);
Module['FS_createPath']("/game/assets", "characters", true, true);
Module['FS_createPath']("/game/assets/characters", "anguila-child", true, true);
Module['FS_createPath']("/game/assets/characters/anguila-child", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/anguila-child", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "anguila", true, true);
Module['FS_createPath']("/game/assets/characters/anguila", "animData", true, true);
Module['FS_createPath']("/game/assets/characters", "anguila2", true, true);
Module['FS_createPath']("/game/assets/characters/anguila2", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/anguila2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "axe", true, true);
Module['FS_createPath']("/game/assets/characters/axe", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/axe", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "bee", true, true);
Module['FS_createPath']("/game/assets/characters/bee", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/bee", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "beetle", true, true);
Module['FS_createPath']("/game/assets/characters/beetle", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/beetle", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-bat-child", true, true);
Module['FS_createPath']("/game/assets/characters/big-bat-child", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-bat-child", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-bat", true, true);
Module['FS_createPath']("/game/assets/characters/big-bat", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-bat", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-bird", true, true);
Module['FS_createPath']("/game/assets/characters/big-bird", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-bird", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-pirana", true, true);
Module['FS_createPath']("/game/assets/characters/big-pirana", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-pirana", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-scorpion-v02", true, true);
Module['FS_createPath']("/game/assets/characters/big-scorpion-v02", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-scorpion-v02", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-scorpion", true, true);
Module['FS_createPath']("/game/assets/characters/big-scorpion", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-scorpion", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-snake", true, true);
Module['FS_createPath']("/game/assets/characters/big-snake", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-snake", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-spider-child", true, true);
Module['FS_createPath']("/game/assets/characters/big-spider-child", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-spider-child", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "big-spider", true, true);
Module['FS_createPath']("/game/assets/characters/big-spider", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/big-spider", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "blowfish", true, true);
Module['FS_createPath']("/game/assets/characters/blowfish", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/blowfish", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "blowfish2", true, true);
Module['FS_createPath']("/game/assets/characters/blowfish2", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/blowfish2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "bola-de-pinchos", true, true);
Module['FS_createPath']("/game/assets/characters/bola-de-pinchos", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/bola-de-pinchos", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "boomerang", true, true);
Module['FS_createPath']("/game/assets/characters/boomerang", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/boomerang", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "carteles-ayuda-guardar", true, true);
Module['FS_createPath']("/game/assets/characters/carteles-ayuda-guardar", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/carteles-ayuda-guardar", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "center-column", true, true);
Module['FS_createPath']("/game/assets/characters/center-column", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/center-column", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "dragon-fly", true, true);
Module['FS_createPath']("/game/assets/characters/dragon-fly", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/dragon-fly", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "effects", true, true);
Module['FS_createPath']("/game/assets/characters/effects", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/effects", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "energia", true, true);
Module['FS_createPath']("/game/assets/characters/energia", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/energia", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "escorpion", true, true);
Module['FS_createPath']("/game/assets/characters/escorpion", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/escorpion", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "fireball", true, true);
Module['FS_createPath']("/game/assets/characters/fireball", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/fireball", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "fireball2", true, true);
Module['FS_createPath']("/game/assets/characters/fireball2", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/fireball2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "fish", true, true);
Module['FS_createPath']("/game/assets/characters/fish", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/fish", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "flower", true, true);
Module['FS_createPath']("/game/assets/characters/flower", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/flower", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "fly", true, true);
Module['FS_createPath']("/game/assets/characters/fly", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/fly", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "fly2", true, true);
Module['FS_createPath']("/game/assets/characters/fly2", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/fly2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "fork", true, true);
Module['FS_createPath']("/game/assets/characters/fork", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/fork", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "frog", true, true);
Module['FS_createPath']("/game/assets/characters/frog", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/frog", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "furry-critter-child", true, true);
Module['FS_createPath']("/game/assets/characters/furry-critter-child", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/furry-critter-child", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "furry-critter", true, true);
Module['FS_createPath']("/game/assets/characters/furry-critter", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/furry-critter", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "ghost-child", true, true);
Module['FS_createPath']("/game/assets/characters/ghost-child", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/ghost-child", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "ghost2", true, true);
Module['FS_createPath']("/game/assets/characters/ghost2", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/ghost2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "giant-dragonfly", true, true);
Module['FS_createPath']("/game/assets/characters/giant-dragonfly", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/giant-dragonfly", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "itemCereals", true, true);
Module['FS_createPath']("/game/assets/characters/itemCereals", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/itemCereals", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "items", true, true);
Module['FS_createPath']("/game/assets/characters/items", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/items", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "knife", true, true);
Module['FS_createPath']("/game/assets/characters/knife", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/knife", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "light-bug", true, true);
Module['FS_createPath']("/game/assets/characters/light-bug", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/light-bug", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "little-spider", true, true);
Module['FS_createPath']("/game/assets/characters/little-spider", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/little-spider", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "llave-azul", true, true);
Module['FS_createPath']("/game/assets/characters/llave-azul", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/llave-azul", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "llave-roja", true, true);
Module['FS_createPath']("/game/assets/characters/llave-roja", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/llave-roja", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "llave-verde", true, true);
Module['FS_createPath']("/game/assets/characters/llave-verde", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/llave-verde", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "malmark2", true, true);
Module['FS_createPath']("/game/assets/characters/malmark2", "animdata", true, true);
Module['FS_createPath']("/game/assets/characters/malmark2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "mina", true, true);
Module['FS_createPath']("/game/assets/characters/mina", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/mina", "minaImages", true, true);
Module['FS_createPath']("/game/assets/characters", "moneda", true, true);
Module['FS_createPath']("/game/assets/characters/moneda", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/moneda", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "mosquito", true, true);
Module['FS_createPath']("/game/assets/characters/mosquito", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/mosquito", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "mouse", true, true);
Module['FS_createPath']("/game/assets/characters/mouse", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/mouse", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "particles", true, true);
Module['FS_createPath']("/game/assets/characters/particles", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/particles", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "pirana-lava", true, true);
Module['FS_createPath']("/game/assets/characters/pirana-lava", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/pirana-lava", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "pirana", true, true);
Module['FS_createPath']("/game/assets/characters/pirana", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/pirana", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "pirana2", true, true);
Module['FS_createPath']("/game/assets/characters/pirana2", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/pirana2", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "plataforma", true, true);
Module['FS_createPath']("/game/assets/characters/plataforma", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/plataforma", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "puerta-azul", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-azul", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-azul", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "puerta-calavera", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-calavera", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-calavera", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "puerta-roja", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-roja", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-roja", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "puerta-verde", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-verde", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/puerta-verde", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "raton", true, true);
Module['FS_createPath']("/game/assets/characters/raton", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/raton", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "shell", true, true);
Module['FS_createPath']("/game/assets/characters/shell", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/shell", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "side-column", true, true);
Module['FS_createPath']("/game/assets/characters/side-column", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/side-column", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "skull-pirana-v02", true, true);
Module['FS_createPath']("/game/assets/characters/skull-pirana-v02", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/skull-pirana-v02", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "skull-pirana", true, true);
Module['FS_createPath']("/game/assets/characters/skull-pirana", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/skull-pirana", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "skullkey", true, true);
Module['FS_createPath']("/game/assets/characters/skullkey", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/skullkey", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "snail", true, true);
Module['FS_createPath']("/game/assets/characters/snail", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/snail", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "sneaker", true, true);
Module['FS_createPath']("/game/assets/characters/sneaker", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/sneaker", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "spore", true, true);
Module['FS_createPath']("/game/assets/characters/spore", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/spore", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "spring", true, true);
Module['FS_createPath']("/game/assets/characters/spring", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/spring", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "topo-ninja", true, true);
Module['FS_createPath']("/game/assets/characters/topo-ninja", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/topo-ninja", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "ugly-dragon", true, true);
Module['FS_createPath']("/game/assets/characters/ugly-dragon", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/ugly-dragon", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "uglyDragon", true, true);
Module['FS_createPath']("/game/assets/characters/uglyDragon", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/uglyDragon", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "vascolet", true, true);
Module['FS_createPath']("/game/assets/characters/vascolet", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/vascolet", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "vaso", true, true);
Module['FS_createPath']("/game/assets/characters/vaso", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/vaso", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "vida-extra", true, true);
Module['FS_createPath']("/game/assets/characters/vida-extra", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/vida-extra", "images", true, true);
Module['FS_createPath']("/game/assets/characters", "volcano-flower", true, true);
Module['FS_createPath']("/game/assets/characters/volcano-flower", "animData", true, true);
Module['FS_createPath']("/game/assets/characters/volcano-flower", "images", true, true);
Module['FS_createPath']("/game/assets", "data", true, true);
Module['FS_createPath']("/game/assets/data", "maps", true, true);
Module['FS_createPath']("/game/assets/data/maps", "backgrounds", true, true);
Module['FS_createPath']("/game/assets/data/maps", "tilesets", true, true);
Module['FS_createPath']("/game/assets", "gui", true, true);
Module['FS_createPath']("/game/assets/gui", "credits", true, true);
Module['FS_createPath']("/game/assets/gui", "gameover", true, true);
Module['FS_createPath']("/game/assets/gui", "help", true, true);
Module['FS_createPath']("/game/assets/gui", "hud", true, true);
Module['FS_createPath']("/game/assets/gui", "level", true, true);
Module['FS_createPath']("/game/assets/gui", "menu", true, true);
Module['FS_createPath']("/game/assets/gui", "options", true, true);
Module['FS_createPath']("/game/assets/gui", "win", true, true);
Module['FS_createPath']("/game/assets", "images", true, true);
Module['FS_createPath']("/game/assets/images", "achievements", true, true);
Module['FS_createPath']("/game/assets/images", "hud", true, true);
Module['FS_createPath']("/game/assets/images", "infoscreens", true, true);
Module['FS_createPath']("/game/assets/images", "load", true, true);
Module['FS_createPath']("/game/assets", "lang", true, true);
Module['FS_createPath']("/game/assets/lang", "fonts", true, true);
Module['FS_createPath']("/game/assets/lang", "images", true, true);
Module['FS_createPath']("/game/assets", "videos", true, true);

    for (var file of metadata['files']) {
      var name = file['filename']
      Module['addRunDependency'](`fp ${name}`);
    }

      async function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData ' + arrayBuffer.constructor.name);
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        // Reuse the bytearray from the XHR as the source for file reads.
          for (var file of metadata['files']) {
            var name = file['filename'];
            var data = byteArray.subarray(file['start'], file['end']);
            // canOwn this data in the filesystem, it is a slice into the heap that will never change
        Module['FS_createDataFile'](name, null, data, true, true, true);
        Module['removeRunDependency'](`fp ${name}`);
          }
          Module['removeRunDependency']('datafile_W:/Vascolet-Web/0_vascolets_web/recompiler-lab/game-4/runtime-stdlib/worker-runtime.data');
      }
      Module['addRunDependency']('datafile_W:/Vascolet-Web/0_vascolets_web/recompiler-lab/game-4/runtime-stdlib/worker-runtime.data');

      if (!Module['preloadResults']) Module['preloadResults'] = {};

      Module['preloadResults'][PACKAGE_NAME] = {fromCache: false};
      if (!fetched) {
        fetched = await fetchPromise;
      }
      processPackageData(fetched);

    }
    if (Module['calledRun']) {
      runWithFS(Module);
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module['preRun'].push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/game/assets/audio/fx/win/boomerang.ogg", "start": 0, "end": 16553}, {"filename": "/game/assets/audio/fx/win/boomerang2.ogg", "start": 16553, "end": 21249}, {"filename": "/game/assets/audio/fx/win/boomerang3.ogg", "start": 21249, "end": 26269}, {"filename": "/game/assets/audio/fx/win/boomerang_wall_hit.ogg", "start": 26269, "end": 35079}, {"filename": "/game/assets/audio/fx/win/boss_death.ogg", "start": 35079, "end": 52022}, {"filename": "/game/assets/audio/fx/win/coin.ogg", "start": 52022, "end": 59710}, {"filename": "/game/assets/audio/fx/win/coin2.ogg", "start": 59710, "end": 66799}, {"filename": "/game/assets/audio/fx/win/coin3.ogg", "start": 66799, "end": 74533}, {"filename": "/game/assets/audio/fx/win/coin4.ogg", "start": 74533, "end": 81956}, {"filename": "/game/assets/audio/fx/win/cs_3B.ogg", "start": 81956, "end": 176053}, {"filename": "/game/assets/audio/fx/win/door.ogg", "start": 176053, "end": 194991}, {"filename": "/game/assets/audio/fx/win/double_jump.ogg", "start": 194991, "end": 204615}, {"filename": "/game/assets/audio/fx/win/enemy_boomerang_hit.ogg", "start": 204615, "end": 212041}, {"filename": "/game/assets/audio/fx/win/enemy_hit.ogg", "start": 212041, "end": 222724}, {"filename": "/game/assets/audio/fx/win/energy.ogg", "start": 222724, "end": 234118}, {"filename": "/game/assets/audio/fx/win/extraLife.ogg", "start": 234118, "end": 254802}, {"filename": "/game/assets/audio/fx/win/fall1.ogg", "start": 254802, "end": 261191}, {"filename": "/game/assets/audio/fx/win/fall2.ogg", "start": 261191, "end": 268425}, {"filename": "/game/assets/audio/fx/win/fall3.ogg", "start": 268425, "end": 275156}, {"filename": "/game/assets/audio/fx/win/footStep1.ogg", "start": 275156, "end": 281615}, {"filename": "/game/assets/audio/fx/win/footStep2.ogg", "start": 281615, "end": 287709}, {"filename": "/game/assets/audio/fx/win/help.ogg", "start": 287709, "end": 295989}, {"filename": "/game/assets/audio/fx/win/jumpAir.ogg", "start": 295989, "end": 301906}, {"filename": "/game/assets/audio/fx/win/jumpWater.ogg", "start": 301906, "end": 307801}, {"filename": "/game/assets/audio/fx/win/key.ogg", "start": 307801, "end": 324821}, {"filename": "/game/assets/audio/fx/win/save.ogg", "start": 324821, "end": 333076}, {"filename": "/game/assets/audio/fx/win/swim.ogg", "start": 333076, "end": 345617}, {"filename": "/game/assets/audio/fx/win/thunder_cutscene6.ogg", "start": 345617, "end": 380189}, {"filename": "/game/assets/audio/fx/win/v_death1.ogg", "start": 380189, "end": 397162}, {"filename": "/game/assets/audio/fx/win/v_explosion.ogg", "start": 397162, "end": 407101}, {"filename": "/game/assets/audio/fx/win/vasco_death.ogg", "start": 407101, "end": 425213}, {"filename": "/game/assets/audio/fx/win/vascolet.ogg", "start": 425213, "end": 442221}, {"filename": "/game/assets/audio/fx/win/willyFire.ogg", "start": 442221, "end": 450414}, {"filename": "/game/assets/audio/fx/win/wings.ogg", "start": 450414, "end": 459575}, {"filename": "/game/assets/audio/music/xo/autoscroll.ogg", "start": 459575, "end": 767076}, {"filename": "/game/assets/audio/music/xo/boss.ogg", "start": 767076, "end": 1082120}, {"filename": "/game/assets/audio/music/xo/boss2.ogg", "start": 1082120, "end": 1393490}, {"filename": "/game/assets/audio/music/xo/gameover.ogg", "start": 1393490, "end": 1419967}, {"filename": "/game/assets/audio/music/xo/level1.ogg", "start": 1419967, "end": 1719881}, {"filename": "/game/assets/audio/music/xo/level2.ogg", "start": 1719881, "end": 2001672}, {"filename": "/game/assets/audio/music/xo/level3.ogg", "start": 2001672, "end": 2301366}, {"filename": "/game/assets/audio/music/xo/level4.ogg", "start": 2301366, "end": 2608348}, {"filename": "/game/assets/audio/music/xo/level5.ogg", "start": 2608348, "end": 2916064}, {"filename": "/game/assets/audio/music/xo/level6.ogg", "start": 2916064, "end": 3302564}, {"filename": "/game/assets/audio/music/xo/menu.ogg", "start": 3302564, "end": 3471669}, {"filename": "/game/assets/audio/music/xo/win_game.ogg", "start": 3471669, "end": 3580337}, {"filename": "/game/assets/audio/music/xo/win_level.ogg", "start": 3580337, "end": 3611979}, {"filename": "/game/assets/characters/anguila-child/animData/Anguila-child.xml", "start": 3611979, "end": 3613429}, {"filename": "/game/assets/characters/anguila-child/images/anguila-child.png", "start": 3613429, "end": 3635772}, {"filename": "/game/assets/characters/anguila-child/images/anguila-child.xml", "start": 3635772, "end": 3636348}, {"filename": "/game/assets/characters/anguila/animData/Anguila.xml", "start": 3636348, "end": 3638290}, {"filename": "/game/assets/characters/anguila2/animData/Anguila2.xml", "start": 3638290, "end": 3639740}, {"filename": "/game/assets/characters/anguila2/images/anguila.png", "start": 3639740, "end": 3746729}, {"filename": "/game/assets/characters/anguila2/images/anguila2.xml", "start": 3746729, "end": 3747287}, {"filename": "/game/assets/characters/axe/animData/Axe.xml", "start": 3747287, "end": 3752721}, {"filename": "/game/assets/characters/axe/images/axe.png", "start": 3752721, "end": 3798228}, {"filename": "/game/assets/characters/axe/images/axe.xml", "start": 3798228, "end": 3799747}, {"filename": "/game/assets/characters/bee/animData/Bee.xml", "start": 3799747, "end": 3801517}, {"filename": "/game/assets/characters/bee/images/bee.png", "start": 3801517, "end": 3885893}, {"filename": "/game/assets/characters/bee/images/bee.xml", "start": 3885893, "end": 3886412}, {"filename": "/game/assets/characters/beetle/animData/Beetle.xml", "start": 3886412, "end": 3887729}, {"filename": "/game/assets/characters/beetle/images/beetle.png", "start": 3887729, "end": 3947512}, {"filename": "/game/assets/characters/beetle/images/beetle.xml", "start": 3947512, "end": 3947949}, {"filename": "/game/assets/characters/big-bat-child/animData/Big-bat-child.xml", "start": 3947949, "end": 3949638}, {"filename": "/game/assets/characters/big-bat-child/images/big-bat-child.png", "start": 3949638, "end": 3992532}, {"filename": "/game/assets/characters/big-bat-child/images/big-bat-child.xml", "start": 3992532, "end": 3993092}, {"filename": "/game/assets/characters/big-bat/animData/Big-bat.xml", "start": 3993092, "end": 3994781}, {"filename": "/game/assets/characters/big-bat/images/big-bat.png", "start": 3994781, "end": 4134451}, {"filename": "/game/assets/characters/big-bat/images/big-bat.xml", "start": 4134451, "end": 4134997}, {"filename": "/game/assets/characters/big-bird/animData/Big-bird.xml", "start": 4134997, "end": 4136929}, {"filename": "/game/assets/characters/big-bird/images/big-bird.png", "start": 4136929, "end": 4314802}, {"filename": "/game/assets/characters/big-bird/images/big-bird.xml", "start": 4314802, "end": 4315465}, {"filename": "/game/assets/characters/big-pirana/animData/Big-pirana.xml", "start": 4315465, "end": 4320091}, {"filename": "/game/assets/characters/big-pirana/images/big-pirana.png", "start": 4320091, "end": 4781120}, {"filename": "/game/assets/characters/big-pirana/images/big-pirana.xml", "start": 4781120, "end": 4782136}, {"filename": "/game/assets/characters/big-scorpion-v02/animData/Big-scorpion-v02.xml", "start": 4782136, "end": 4784664}, {"filename": "/game/assets/characters/big-scorpion-v02/images/big-scorpion-v02.png", "start": 4784664, "end": 5063209}, {"filename": "/game/assets/characters/big-scorpion-v02/images/big-scorpion-v02.xml", "start": 5063209, "end": 5064023}, {"filename": "/game/assets/characters/big-scorpion/animData/BigScorpion.xml", "start": 5064023, "end": 5067053}, {"filename": "/game/assets/characters/big-scorpion/images/big-scorpion.png", "start": 5067053, "end": 5516316}, {"filename": "/game/assets/characters/big-scorpion/images/big-scorpion.xml", "start": 5516316, "end": 5517316}, {"filename": "/game/assets/characters/big-snake/animData/Big-snake.xml", "start": 5517316, "end": 5524070}, {"filename": "/game/assets/characters/big-snake/images/big-snake.png", "start": 5524070, "end": 5605215}, {"filename": "/game/assets/characters/big-snake/images/big-snake.xml", "start": 5605215, "end": 5605578}, {"filename": "/game/assets/characters/big-spider-child/animData/Big-spider-child.xml", "start": 5605578, "end": 5607178}, {"filename": "/game/assets/characters/big-spider-child/images/big-spider-child.png", "start": 5607178, "end": 5650442}, {"filename": "/game/assets/characters/big-spider-child/images/big-spider-child.xml", "start": 5650442, "end": 5651255}, {"filename": "/game/assets/characters/big-spider/animData/Big-spider.xml", "start": 5651255, "end": 5653266}, {"filename": "/game/assets/characters/big-spider/images/big-spider.png", "start": 5653266, "end": 5928145}, {"filename": "/game/assets/characters/big-spider/images/big-spider.xml", "start": 5928145, "end": 5928726}, {"filename": "/game/assets/characters/blowfish/animData/Blowfish.xml", "start": 5928726, "end": 5929839}, {"filename": "/game/assets/characters/blowfish/images/blowfish.png", "start": 5929839, "end": 5949614}, {"filename": "/game/assets/characters/blowfish/images/blowfish.xml", "start": 5949614, "end": 5950067}, {"filename": "/game/assets/characters/blowfish2/animData/Blowfish2.xml", "start": 5950067, "end": 5951060}, {"filename": "/game/assets/characters/blowfish2/images/blowfish.png", "start": 5951060, "end": 5956186}, {"filename": "/game/assets/characters/blowfish2/images/blowfish2.xml", "start": 5956186, "end": 5956432}, {"filename": "/game/assets/characters/bola-de-pinchos/animData/Spykes.xml", "start": 5956432, "end": 5958276}, {"filename": "/game/assets/characters/bola-de-pinchos/images/bola-de-pinchos.png", "start": 5958276, "end": 5968087}, {"filename": "/game/assets/characters/bola-de-pinchos/images/bola-de-pinchos.xml", "start": 5968087, "end": 5968592}, {"filename": "/game/assets/characters/boomerang/animData/Boomerang.xml", "start": 5968592, "end": 5972247}, {"filename": "/game/assets/characters/boomerang/images/boomerang.png", "start": 5972247, "end": 5984452}, {"filename": "/game/assets/characters/boomerang/images/boomerang.xml", "start": 5984452, "end": 5986170}, {"filename": "/game/assets/characters/carteles-ayuda-guardar/animData/Signs.xml", "start": 5986170, "end": 5987281}, {"filename": "/game/assets/characters/carteles-ayuda-guardar/images/carteles-ayuda-guardar.png", "start": 5987281, "end": 6000478}, {"filename": "/game/assets/characters/carteles-ayuda-guardar/images/carteles-ayuda-guardar.xml", "start": 6000478, "end": 6000868}, {"filename": "/game/assets/characters/center-column/animData/CenterColumn.xml", "start": 6000868, "end": 6002512}, {"filename": "/game/assets/characters/center-column/images/center-column.png", "start": 6002512, "end": 6049408}, {"filename": "/game/assets/characters/center-column/images/center-column.xml", "start": 6049408, "end": 6049883}, {"filename": "/game/assets/characters/dragon-fly/animData/Dragonfly.xml", "start": 6049883, "end": 6051614}, {"filename": "/game/assets/characters/dragon-fly/images/dragon-fly.png", "start": 6051614, "end": 6130951}, {"filename": "/game/assets/characters/dragon-fly/images/dragon-fly.xml", "start": 6130951, "end": 6131538}, {"filename": "/game/assets/characters/effects/animData/Effects.xml", "start": 6131538, "end": 6148481}, {"filename": "/game/assets/characters/effects/images/effects.png", "start": 6148481, "end": 6244222}, {"filename": "/game/assets/characters/effects/images/effects.xml", "start": 6244222, "end": 6250218}, {"filename": "/game/assets/characters/energia/animData/Energy.xml", "start": 6250218, "end": 6252000}, {"filename": "/game/assets/characters/energia/images/energia.png", "start": 6252000, "end": 6255004}, {"filename": "/game/assets/characters/energia/images/energia.xml", "start": 6255004, "end": 6255153}, {"filename": "/game/assets/characters/escorpion/animData/Scorpion.xml", "start": 6255153, "end": 6257539}, {"filename": "/game/assets/characters/escorpion/images/escorpion.png", "start": 6257539, "end": 6368066}, {"filename": "/game/assets/characters/escorpion/images/escorpion.xml", "start": 6368066, "end": 6369009}, {"filename": "/game/assets/characters/fireball/animData/Fireball.xml", "start": 6369009, "end": 6370885}, {"filename": "/game/assets/characters/fireball/images/fireball.png", "start": 6370885, "end": 6387561}, {"filename": "/game/assets/characters/fireball/images/fireball.xml", "start": 6387561, "end": 6388426}, {"filename": "/game/assets/characters/fireball2/animData/Fireball2.xml", "start": 6388426, "end": 6395383}, {"filename": "/game/assets/characters/fireball2/images/fireball2.png", "start": 6395383, "end": 6452417}, {"filename": "/game/assets/characters/fireball2/images/fireball2.xml", "start": 6452417, "end": 6454297}, {"filename": "/game/assets/characters/fish/animData/Fish.xml", "start": 6454297, "end": 6455322}, {"filename": "/game/assets/characters/fish/images/fish.png", "start": 6455322, "end": 6471537}, {"filename": "/game/assets/characters/fish/images/fish.xml", "start": 6471537, "end": 6471961}, {"filename": "/game/assets/characters/flower/animData/Flower.xml", "start": 6471961, "end": 6476815}, {"filename": "/game/assets/characters/flower/images/flower.png", "start": 6476815, "end": 6643507}, {"filename": "/game/assets/characters/flower/images/flower.xml", "start": 6643507, "end": 6644936}, {"filename": "/game/assets/characters/fly/animData/Fly.xml", "start": 6644936, "end": 6646459}, {"filename": "/game/assets/characters/fly/images/fly.png", "start": 6646459, "end": 6671488}, {"filename": "/game/assets/characters/fly/images/fly.xml", "start": 6671488, "end": 6672002}, {"filename": "/game/assets/characters/fly2/animData/Fly2.xml", "start": 6672002, "end": 6673523}, {"filename": "/game/assets/characters/fly2/images/fly.png", "start": 6673523, "end": 6698552}, {"filename": "/game/assets/characters/fly2/images/fly2.xml", "start": 6698552, "end": 6699066}, {"filename": "/game/assets/characters/fork/animData/Fork.xml", "start": 6699066, "end": 6710854}, {"filename": "/game/assets/characters/fork/images/fork.png", "start": 6710854, "end": 6755727}, {"filename": "/game/assets/characters/fork/images/fork.xml", "start": 6755727, "end": 6758685}, {"filename": "/game/assets/characters/frog/animData/Frog.xml", "start": 6758685, "end": 6760481}, {"filename": "/game/assets/characters/frog/images/frog.png", "start": 6760481, "end": 6807099}, {"filename": "/game/assets/characters/frog/images/frog.xml", "start": 6807099, "end": 6807524}, {"filename": "/game/assets/characters/furry-critter-child/animData/Furry-critter-child.xml", "start": 6807524, "end": 6811183}, {"filename": "/game/assets/characters/furry-critter-child/images/furry-critter-child.png", "start": 6811183, "end": 6838270}, {"filename": "/game/assets/characters/furry-critter-child/images/furry-critter-child.xml", "start": 6838270, "end": 6838874}, {"filename": "/game/assets/characters/furry-critter/animData/Furry-critter.xml", "start": 6838874, "end": 6852047}, {"filename": "/game/assets/characters/furry-critter/images/furry-critter.png", "start": 6852047, "end": 7338207}, {"filename": "/game/assets/characters/furry-critter/images/furry-critter.xml", "start": 7338207, "end": 7339444}, {"filename": "/game/assets/characters/ghost-child/animData/Ghost-child.xml", "start": 7339444, "end": 7340761}, {"filename": "/game/assets/characters/ghost-child/images/ghost-child.png", "start": 7340761, "end": 7348077}, {"filename": "/game/assets/characters/ghost-child/images/ghost-child.xml", "start": 7348077, "end": 7348534}, {"filename": "/game/assets/characters/ghost2/animData/Ghost2.xml", "start": 7348534, "end": 7350231}, {"filename": "/game/assets/characters/ghost2/images/ghost.png", "start": 7350231, "end": 7418892}, {"filename": "/game/assets/characters/ghost2/images/ghost2.xml", "start": 7418892, "end": 7419335}, {"filename": "/game/assets/characters/giant-dragonfly/animData/Giant-dragonfly.xml", "start": 7419335, "end": 7420797}, {"filename": "/game/assets/characters/giant-dragonfly/images/giant-dragonfly.png", "start": 7420797, "end": 7589963}, {"filename": "/game/assets/characters/giant-dragonfly/images/giant-dragonfly.xml", "start": 7589963, "end": 7590450}, {"filename": "/game/assets/characters/itemCereals/animData/ItemCereals.xml", "start": 7590450, "end": 7596769}, {"filename": "/game/assets/characters/itemCereals/images/bowl.png", "start": 7596769, "end": 7695385}, {"filename": "/game/assets/characters/itemCereals/images/bowl.xml", "start": 7695385, "end": 7698333}, {"filename": "/game/assets/characters/items/animData/Items.xml", "start": 7698333, "end": 7812048}, {"filename": "/game/assets/characters/items/images/items.png", "start": 7812048, "end": 7953157}, {"filename": "/game/assets/characters/items/images/items.xml", "start": 7953157, "end": 7956606}, {"filename": "/game/assets/characters/knife/animData/Knife.xml", "start": 7956606, "end": 7968443}, {"filename": "/game/assets/characters/knife/images/knife.png", "start": 7968443, "end": 8015784}, {"filename": "/game/assets/characters/knife/images/knife.xml", "start": 8015784, "end": 8018803}, {"filename": "/game/assets/characters/light-bug/animData/Light-bug.xml", "start": 8018803, "end": 8019785}, {"filename": "/game/assets/characters/light-bug/images/light-bug.png", "start": 8019785, "end": 8044417}, {"filename": "/game/assets/characters/light-bug/images/light-bug.xml", "start": 8044417, "end": 8044879}, {"filename": "/game/assets/characters/little-spider/animData/Little-spider.xml", "start": 8044879, "end": 8046426}, {"filename": "/game/assets/characters/little-spider/animData/LittleSpider.xml", "start": 8046426, "end": 8047973}, {"filename": "/game/assets/characters/little-spider/images/little-spider.png", "start": 8047973, "end": 8063020}, {"filename": "/game/assets/characters/little-spider/images/little-spider.xml", "start": 8063020, "end": 8063614}, {"filename": "/game/assets/characters/llave-azul/animData/BlueKey.xml", "start": 8063614, "end": 8063962}, {"filename": "/game/assets/characters/llave-azul/images/llave-azul.png", "start": 8063962, "end": 8066970}, {"filename": "/game/assets/characters/llave-azul/images/llave-azul.xml", "start": 8066970, "end": 8067125}, {"filename": "/game/assets/characters/llave-roja/animData/RedKey.xml", "start": 8067125, "end": 8067473}, {"filename": "/game/assets/characters/llave-roja/images/llave-roja.png", "start": 8067473, "end": 8070293}, {"filename": "/game/assets/characters/llave-roja/images/llave-roja.xml", "start": 8070293, "end": 8070448}, {"filename": "/game/assets/characters/llave-verde/animData/GreenKey.xml", "start": 8070448, "end": 8070797}, {"filename": "/game/assets/characters/llave-verde/images/llave-verde.png", "start": 8070797, "end": 8075548}, {"filename": "/game/assets/characters/llave-verde/images/llave-verde.xml", "start": 8075548, "end": 8075705}, {"filename": "/game/assets/characters/malmark2/animdata/Malmark2.xml", "start": 8075705, "end": 8078973}, {"filename": "/game/assets/characters/malmark2/images/malmark.png", "start": 8078973, "end": 8377360}, {"filename": "/game/assets/characters/malmark2/images/malmark2.xml", "start": 8377360, "end": 8378555}, {"filename": "/game/assets/characters/mina/animData/Mina.xml", "start": 8378555, "end": 8381825}, {"filename": "/game/assets/characters/mina/minaImages/Mina.png", "start": 8381825, "end": 8387524}, {"filename": "/game/assets/characters/mina/minaImages/Mina.xml", "start": 8387524, "end": 8404434}, {"filename": "/game/assets/characters/moneda/animData/Coin.xml", "start": 8404434, "end": 8410842}, {"filename": "/game/assets/characters/moneda/images/bowl.png", "start": 8410842, "end": 8509458}, {"filename": "/game/assets/characters/moneda/images/bowl.xml", "start": 8509458, "end": 8512406}, {"filename": "/game/assets/characters/moneda/images/moneda.png", "start": 8512406, "end": 8539338}, {"filename": "/game/assets/characters/moneda/images/moneda.xml", "start": 8539338, "end": 8542390}, {"filename": "/game/assets/characters/moneda/images/vaso.png", "start": 8542390, "end": 8611664}, {"filename": "/game/assets/characters/moneda/images/vaso.xml", "start": 8611664, "end": 8614602}, {"filename": "/game/assets/characters/mosquito/animData/Mosquito.xml", "start": 8614602, "end": 8615919}, {"filename": "/game/assets/characters/mosquito/images/mosquito.png", "start": 8615919, "end": 8670253}, {"filename": "/game/assets/characters/mosquito/images/mosquito.xml", "start": 8670253, "end": 8670710}, {"filename": "/game/assets/characters/mouse/animData/Mouse.xml", "start": 8670710, "end": 8672708}, {"filename": "/game/assets/characters/mouse/images/mouse.png", "start": 8672708, "end": 8726677}, {"filename": "/game/assets/characters/mouse/images/mouse.xml", "start": 8726677, "end": 8727115}, {"filename": "/game/assets/characters/particles/animData/Particles.xml", "start": 8727115, "end": 8742137}, {"filename": "/game/assets/characters/particles/images/particles.png", "start": 8742137, "end": 9222459}, {"filename": "/game/assets/characters/particles/images/particles.xml", "start": 9222459, "end": 9230105}, {"filename": "/game/assets/characters/pirana-lava/animData/Pirana-lava.xml", "start": 9230105, "end": 9232177}, {"filename": "/game/assets/characters/pirana-lava/images/pirana-lava.png", "start": 9232177, "end": 9289973}, {"filename": "/game/assets/characters/pirana-lava/images/pirana-lava.xml", "start": 9289973, "end": 9290630}, {"filename": "/game/assets/characters/pirana/animData/Piranha.xml", "start": 9290630, "end": 9292635}, {"filename": "/game/assets/characters/pirana/images/pirana.png", "start": 9292635, "end": 9317045}, {"filename": "/game/assets/characters/pirana/images/pirana.xml", "start": 9317045, "end": 9317586}, {"filename": "/game/assets/characters/pirana2/animData/Pirana2.xml", "start": 9317586, "end": 9320369}, {"filename": "/game/assets/characters/pirana2/images/pirana.png", "start": 9320369, "end": 9375858}, {"filename": "/game/assets/characters/pirana2/images/pirana2.xml", "start": 9375858, "end": 9376498}, {"filename": "/game/assets/characters/plataforma/animData/Platform.xml", "start": 9376498, "end": 9377885}, {"filename": "/game/assets/characters/plataforma/images/plataforma.png", "start": 9377885, "end": 9402251}, {"filename": "/game/assets/characters/plataforma/images/plataforma.xml", "start": 9402251, "end": 9402715}, {"filename": "/game/assets/characters/puerta-azul/animData/BlueDoor.xml", "start": 9402715, "end": 9403968}, {"filename": "/game/assets/characters/puerta-azul/images/puerta-azul.png", "start": 9403968, "end": 9414511}, {"filename": "/game/assets/characters/puerta-azul/images/puerta-azul.xml", "start": 9414511, "end": 9414781}, {"filename": "/game/assets/characters/puerta-calavera/animData/SkullDoor.xml", "start": 9414781, "end": 9416038}, {"filename": "/game/assets/characters/puerta-calavera/images/puerta-calavera.png", "start": 9416038, "end": 9426864}, {"filename": "/game/assets/characters/puerta-calavera/images/puerta-calavera.xml", "start": 9426864, "end": 9427144}, {"filename": "/game/assets/characters/puerta-roja/animData/RedDoor.xml", "start": 9427144, "end": 9428397}, {"filename": "/game/assets/characters/puerta-roja/images/puerta-roja.png", "start": 9428397, "end": 9438921}, {"filename": "/game/assets/characters/puerta-roja/images/puerta-roja.xml", "start": 9438921, "end": 9439191}, {"filename": "/game/assets/characters/puerta-verde/animData/GreenDoor.xml", "start": 9439191, "end": 9440448}, {"filename": "/game/assets/characters/puerta-verde/images/puerta-verde.png", "start": 9440448, "end": 9451032}, {"filename": "/game/assets/characters/puerta-verde/images/puerta-verde.xml", "start": 9451032, "end": 9451306}, {"filename": "/game/assets/characters/raton/animData/Mouse.xml", "start": 9451306, "end": 9453304}, {"filename": "/game/assets/characters/raton/images/raton.png", "start": 9453304, "end": 9465816}, {"filename": "/game/assets/characters/raton/images/raton.xml", "start": 9465816, "end": 9466340}, {"filename": "/game/assets/characters/shell/animData/Shell.xml", "start": 9466340, "end": 9469158}, {"filename": "/game/assets/characters/shell/images/shell.png", "start": 9469158, "end": 9508714}, {"filename": "/game/assets/characters/shell/images/shell.xml", "start": 9508714, "end": 9509532}, {"filename": "/game/assets/characters/side-column/animData/Side-column.xml", "start": 9509532, "end": 9513044}, {"filename": "/game/assets/characters/side-column/images/side-column.png", "start": 9513044, "end": 9530924}, {"filename": "/game/assets/characters/side-column/images/side-column.xml", "start": 9530924, "end": 9531297}, {"filename": "/game/assets/characters/skull-pirana-v02/animData/Skull-pirana-v02.xml", "start": 9531297, "end": 9531681}, {"filename": "/game/assets/characters/skull-pirana-v02/images/skull-pirana-v02.png", "start": 9531681, "end": 9592506}, {"filename": "/game/assets/characters/skull-pirana-v02/images/skull-pirana-v02.xml", "start": 9592506, "end": 9592987}, {"filename": "/game/assets/characters/skull-pirana/animData/Skull-pirana.xml", "start": 9592987, "end": 9593970}, {"filename": "/game/assets/characters/skull-pirana/images/skull-pirana.png", "start": 9593970, "end": 9655255}, {"filename": "/game/assets/characters/skull-pirana/images/skull-pirana.xml", "start": 9655255, "end": 9655735}, {"filename": "/game/assets/characters/skullkey/animData/SkullKey.xml", "start": 9655735, "end": 9658393}, {"filename": "/game/assets/characters/skullkey/images/skullkey.png", "start": 9658393, "end": 9663456}, {"filename": "/game/assets/characters/skullkey/images/skullkey.xml", "start": 9663456, "end": 9663607}, {"filename": "/game/assets/characters/snail/animData/Snail.xml", "start": 9663607, "end": 9665380}, {"filename": "/game/assets/characters/snail/images/snail.png", "start": 9665380, "end": 9860381}, {"filename": "/game/assets/characters/snail/images/snail.xml", "start": 9860381, "end": 9861067}, {"filename": "/game/assets/characters/sneaker/animData/Sneaker.xml", "start": 9861067, "end": 9862029}, {"filename": "/game/assets/characters/sneaker/images/sneaker.png", "start": 9862029, "end": 9864954}, {"filename": "/game/assets/characters/sneaker/images/sneaker.xml", "start": 9864954, "end": 9865103}, {"filename": "/game/assets/characters/spore/animData/Spore.xml", "start": 9865103, "end": 9865458}, {"filename": "/game/assets/characters/spore/images/spore.png", "start": 9865458, "end": 9872939}, {"filename": "/game/assets/characters/spore/images/spore.xml", "start": 9872939, "end": 9873084}, {"filename": "/game/assets/characters/spring/animData/Spring.xml", "start": 9873084, "end": 9874042}, {"filename": "/game/assets/characters/spring/images/spring.png", "start": 9874042, "end": 9878153}, {"filename": "/game/assets/characters/spring/images/spring.xml", "start": 9878153, "end": 9878300}, {"filename": "/game/assets/characters/topo-ninja/animData/TopoNinja.xml", "start": 9878300, "end": 9888864}, {"filename": "/game/assets/characters/topo-ninja/images/topo-ninja.png", "start": 9888864, "end": 10694447}, {"filename": "/game/assets/characters/topo-ninja/images/topo-ninja.xml", "start": 10694447, "end": 10697311}, {"filename": "/game/assets/characters/ugly-dragon/animData/Ugly-dragon.xml", "start": 10697311, "end": 10699730}, {"filename": "/game/assets/characters/ugly-dragon/images/ugly-dragon.png", "start": 10699730, "end": 10911264}, {"filename": "/game/assets/characters/ugly-dragon/images/ugly-dragon.xml", "start": 10911264, "end": 10912264}, {"filename": "/game/assets/characters/uglyDragon/animData/UglyDragon.xml", "start": 10912264, "end": 10913767}, {"filename": "/game/assets/characters/uglyDragon/images/uglyDragon.png", "start": 10913767, "end": 10952942}, {"filename": "/game/assets/characters/uglyDragon/images/uglyDragon.xml", "start": 10952942, "end": 10953489}, {"filename": "/game/assets/characters/vascolet/animData/Vascolet.xml", "start": 10953489, "end": 10999327}, {"filename": "/game/assets/characters/vascolet/images/av.png", "start": 10999327, "end": 11797877}, {"filename": "/game/assets/characters/vascolet/images/av.xml", "start": 11797877, "end": 11806803}, {"filename": "/game/assets/characters/vaso/animData/ItemVascolet.xml", "start": 11806803, "end": 11813158}, {"filename": "/game/assets/characters/vaso/images/vaso.png", "start": 11813158, "end": 11882432}, {"filename": "/game/assets/characters/vaso/images/vaso.xml", "start": 11882432, "end": 11885370}, {"filename": "/game/assets/characters/vida-extra/animData/ExtraLive.xml", "start": 11885370, "end": 11886345}, {"filename": "/game/assets/characters/vida-extra/images/vida-extra.png", "start": 11886345, "end": 11907519}, {"filename": "/game/assets/characters/vida-extra/images/vida-extra.xml", "start": 11907519, "end": 11907988}, {"filename": "/game/assets/characters/volcano-flower/animData/Volcano-flower.xml", "start": 11907988, "end": 11911416}, {"filename": "/game/assets/characters/volcano-flower/images/volcano-flower.png", "start": 11911416, "end": 12028394}, {"filename": "/game/assets/characters/volcano-flower/images/volcano-flower.xml", "start": 12028394, "end": 12029738}, {"filename": "/game/assets/data/achievementsAssets.xml", "start": 12029738, "end": 12029976}, {"filename": "/game/assets/data/generalAssets.xml", "start": 12029976, "end": 12030424}, {"filename": "/game/assets/data/infostateAssets.xml", "start": 12030424, "end": 12030657}, {"filename": "/game/assets/data/maps/backgrounds/back_area1.tmx", "start": 12030657, "end": 12034282}, {"filename": "/game/assets/data/maps/backgrounds/back_area2.tmx", "start": 12034282, "end": 12037907}, {"filename": "/game/assets/data/maps/backgrounds/back_area3.tmx", "start": 12037907, "end": 12041530}, {"filename": "/game/assets/data/maps/backgrounds/back_area4.tmx", "start": 12041530, "end": 12044367}, {"filename": "/game/assets/data/maps/backgrounds/back_area5.tmx", "start": 12044367, "end": 12046898}, {"filename": "/game/assets/data/maps/backgrounds/back_area6.tmx", "start": 12046898, "end": 12049757}, {"filename": "/game/assets/data/maps/backgrounds/back_cave.tmx", "start": 12049757, "end": 12053569}, {"filename": "/game/assets/data/maps/backgrounds/back_cave2.tmx", "start": 12053569, "end": 12057382}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_area1.tmx", "start": 12057382, "end": 12058591}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_area2.tmx", "start": 12058591, "end": 12059800}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_area3.tmx", "start": 12059800, "end": 12061007}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_area4.tmx", "start": 12061007, "end": 12062836}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_area5.tmx", "start": 12062836, "end": 12065367}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_area6.tmx", "start": 12065367, "end": 12068226}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_cave.tmx", "start": 12068226, "end": 12072038}, {"filename": "/game/assets/data/maps/backgrounds/back_xo_cave2.tmx", "start": 12072038, "end": 12075851}, {"filename": "/game/assets/data/maps/level1.tmx", "start": 12075851, "end": 12180855}, {"filename": "/game/assets/data/maps/level10.tmx", "start": 12180855, "end": 12256844}, {"filename": "/game/assets/data/maps/level11.tmx", "start": 12256844, "end": 12297702}, {"filename": "/game/assets/data/maps/level12.tmx", "start": 12297702, "end": 12322473}, {"filename": "/game/assets/data/maps/level13.tmx", "start": 12322473, "end": 12456274}, {"filename": "/game/assets/data/maps/level14.tmx", "start": 12456274, "end": 12495365}, {"filename": "/game/assets/data/maps/level15.tmx", "start": 12495365, "end": 12517711}, {"filename": "/game/assets/data/maps/level16.tmx", "start": 12517711, "end": 12603511}, {"filename": "/game/assets/data/maps/level17.tmx", "start": 12603511, "end": 12645638}, {"filename": "/game/assets/data/maps/level18.tmx", "start": 12645638, "end": 12676601}, {"filename": "/game/assets/data/maps/level2.tmx", "start": 12676601, "end": 12730350}, {"filename": "/game/assets/data/maps/level3.tmx", "start": 12730350, "end": 12751840}, {"filename": "/game/assets/data/maps/level4.tmx", "start": 12751840, "end": 12793417}, {"filename": "/game/assets/data/maps/level5.tmx", "start": 12793417, "end": 12848173}, {"filename": "/game/assets/data/maps/level6.tmx", "start": 12848173, "end": 12873172}, {"filename": "/game/assets/data/maps/level7.tmx", "start": 12873172, "end": 12955365}, {"filename": "/game/assets/data/maps/level8.tmx", "start": 12955365, "end": 12987650}, {"filename": "/game/assets/data/maps/level9.tmx", "start": 12987650, "end": 13011950}, {"filename": "/game/assets/data/maps/tilesets/tileset_area1.png", "start": 13011950, "end": 13755701}, {"filename": "/game/assets/data/maps/tilesets/tileset_area1.tsx", "start": 13755701, "end": 13771450}, {"filename": "/game/assets/data/maps/tilesets/tileset_area2.png", "start": 13771450, "end": 14543475}, {"filename": "/game/assets/data/maps/tilesets/tileset_area2.tsx", "start": 14543475, "end": 14562999}, {"filename": "/game/assets/data/maps/tilesets/tileset_area3.png", "start": 14562999, "end": 15308561}, {"filename": "/game/assets/data/maps/tilesets/tileset_area3.tsx", "start": 15308561, "end": 15325257}, {"filename": "/game/assets/data/maps/tilesets/tileset_area4.png", "start": 15325257, "end": 16003477}, {"filename": "/game/assets/data/maps/tilesets/tileset_area4.tsx", "start": 16003477, "end": 16010284}, {"filename": "/game/assets/data/maps/tilesets/tileset_area5.png", "start": 16010284, "end": 16453518}, {"filename": "/game/assets/data/maps/tilesets/tileset_area5.tsx", "start": 16453518, "end": 16466091}, {"filename": "/game/assets/data/maps/tilesets/tileset_area6.png", "start": 16466091, "end": 16748522}, {"filename": "/game/assets/data/maps/tilesets/tileset_area6.tsx", "start": 16748522, "end": 16751520}, {"filename": "/game/assets/data/maps/tilesets/tileset_cave.png", "start": 16751520, "end": 16966444}, {"filename": "/game/assets/data/maps/tilesets/tileset_cave.tsx", "start": 16966444, "end": 16974917}, {"filename": "/game/assets/data/maps/tilesets/tileset_cave2.png", "start": 16974917, "end": 17180480}, {"filename": "/game/assets/data/maps/tilesets/tileset_cave2.tsx", "start": 17180480, "end": 17188954}, {"filename": "/game/assets/data/texts.xml", "start": 17188954, "end": 17208579}, {"filename": "/game/assets/gui/credits/credits.jpg", "start": 17208579, "end": 17442744}, {"filename": "/game/assets/gui/gameover/gameover.png", "start": 17442744, "end": 17737575}, {"filename": "/game/assets/gui/gameover/gameover.xml", "start": 17737575, "end": 17737726}, {"filename": "/game/assets/gui/help/help.jpg", "start": 17737726, "end": 17958014}, {"filename": "/game/assets/gui/hud/quit-confirmation.png", "start": 17958014, "end": 18331283}, {"filename": "/game/assets/gui/hud/quit-confirmation.xml", "start": 18331283, "end": 18331821}, {"filename": "/game/assets/gui/level/area01.jpg", "start": 18331821, "end": 18408311}, {"filename": "/game/assets/gui/level/area02.jpg", "start": 18408311, "end": 18501995}, {"filename": "/game/assets/gui/level/area03.jpg", "start": 18501995, "end": 18609540}, {"filename": "/game/assets/gui/level/area04.jpg", "start": 18609540, "end": 18726413}, {"filename": "/game/assets/gui/level/area05.jpg", "start": 18726413, "end": 18851301}, {"filename": "/game/assets/gui/level/area06.jpg", "start": 18851301, "end": 18983437}, {"filename": "/game/assets/gui/level/level.png", "start": 18983437, "end": 19029310}, {"filename": "/game/assets/gui/level/level.xml", "start": 19029310, "end": 19029848}, {"filename": "/game/assets/gui/menu/background.jpg", "start": 19029848, "end": 19245155}, {"filename": "/game/assets/gui/menu/exit-game.png", "start": 19245155, "end": 19389369}, {"filename": "/game/assets/gui/menu/exit-game.xml", "start": 19389369, "end": 19389525}, {"filename": "/game/assets/gui/menu/menu.png", "start": 19389525, "end": 19450868}, {"filename": "/game/assets/gui/menu/menu.xml", "start": 19450868, "end": 19453084}, {"filename": "/game/assets/gui/menu/reciclebin-over.png", "start": 19453084, "end": 19455061}, {"filename": "/game/assets/gui/menu/reciclebin.png", "start": 19455061, "end": 19457126}, {"filename": "/game/assets/gui/menu/skip.png", "start": 19457126, "end": 19462283}, {"filename": "/game/assets/gui/menu/skip.xml", "start": 19462283, "end": 19462428}, {"filename": "/game/assets/gui/menu/user-help-buttons.png", "start": 19462428, "end": 19478767}, {"filename": "/game/assets/gui/menu/user-help-buttons.xml", "start": 19478767, "end": 19480367}, {"filename": "/game/assets/gui/options/options.png", "start": 19480367, "end": 19813113}, {"filename": "/game/assets/gui/options/options.xml", "start": 19813113, "end": 19814399}, {"filename": "/game/assets/gui/win/win.png", "start": 19814399, "end": 20123514}, {"filename": "/game/assets/gui/win/win.xml", "start": 20123514, "end": 20123655}, {"filename": "/game/assets/images/achievements/background.jpg", "start": 20123655, "end": 20332405}, {"filename": "/game/assets/images/achievements/trofeos.png", "start": 20332405, "end": 20553856}, {"filename": "/game/assets/images/achievements/trofeos.xml", "start": 20553856, "end": 20558166}, {"filename": "/game/assets/images/background.jpg", "start": 20558166, "end": 20567413}, {"filename": "/game/assets/images/hud/hud.png", "start": 20567413, "end": 20837689}, {"filename": "/game/assets/images/hud/hud.xml", "start": 20837689, "end": 20841044}, {"filename": "/game/assets/images/infoscreens/nokeys.jpg", "start": 20841044, "end": 21065853}, {"filename": "/game/assets/images/load/cargando.png", "start": 21065853, "end": 21071471}, {"filename": "/game/assets/images/load/loading.png", "start": 21071471, "end": 21504920}, {"filename": "/game/assets/images/load/loading.xml", "start": 21504920, "end": 21505161}, {"filename": "/game/assets/images/transition.jpg", "start": 21505161, "end": 21542878}, {"filename": "/game/assets/lang/fonts/clanOT20.png", "start": 21542878, "end": 21594232}, {"filename": "/game/assets/lang/fonts/clanOT20.xml", "start": 21594232, "end": 21607785}, {"filename": "/game/assets/lang/fonts/winnie14-ob.png", "start": 21607785, "end": 21641870}, {"filename": "/game/assets/lang/fonts/winnie14-ob.xml", "start": 21641870, "end": 21655355}, {"filename": "/game/assets/lang/fonts/winnie14-or.png", "start": 21655355, "end": 21689530}, {"filename": "/game/assets/lang/fonts/winnie14-or.xml", "start": 21689530, "end": 21703015}, {"filename": "/game/assets/lang/images/benchmarkNumbers.png", "start": 21703015, "end": 21703794}, {"filename": "/game/assets/videos/video1.mov", "start": 21703794, "end": 23319672}, {"filename": "/game/assets/videos/video10.mov", "start": 23319672, "end": 23658538}, {"filename": "/game/assets/videos/video11.mov", "start": 23658538, "end": 24006569}, {"filename": "/game/assets/videos/video12.mov", "start": 24006569, "end": 24301016}, {"filename": "/game/assets/videos/video13.mov", "start": 24301016, "end": 24758054}, {"filename": "/game/assets/videos/video14.mov", "start": 24758054, "end": 25237126}, {"filename": "/game/assets/videos/video15.mov", "start": 25237126, "end": 26612462}, {"filename": "/game/assets/videos/video16.mov", "start": 26612462, "end": 26976079}, {"filename": "/game/assets/videos/video17.mov", "start": 26976079, "end": 27321265}, {"filename": "/game/assets/videos/video18.mov", "start": 27321265, "end": 27651026}, {"filename": "/game/assets/videos/video19.mov", "start": 27651026, "end": 28399167}, {"filename": "/game/assets/videos/video2.mov", "start": 28399167, "end": 28637004}, {"filename": "/game/assets/videos/video3.mov", "start": 28637004, "end": 28897453}, {"filename": "/game/assets/videos/video4.mov", "start": 28897453, "end": 29244319}, {"filename": "/game/assets/videos/video5.mov", "start": 29244319, "end": 29440897}, {"filename": "/game/assets/videos/video6.mov", "start": 29440897, "end": 29689656}, {"filename": "/game/assets/videos/video7.mov", "start": 29689656, "end": 30134883}, {"filename": "/game/assets/videos/video8.mov", "start": 30134883, "end": 30779688}, {"filename": "/game/assets/videos/video9.mov", "start": 30779688, "end": 31391840}, {"filename": "/image.bin", "start": 31391840, "end": 37536608}, {"filename": "/stdlib.bin", "start": 37536608, "end": 39414040}], "remote_package_size": 39414040});

  })();

// end include: W:\Vascolet-Web\_ejecuciones\worker-4-link-20261108-152350-de5527\tmp\tmpmhripbpx.js


var programArgs = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

if (typeof __filename != 'undefined') { // Node
  _scriptName = __filename;
} else
if (ENVIRONMENT_IS_WORKER) {
  _scriptName = self.location.href;
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {

  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('node:fs');

  scriptDirectory = __dirname + '/';

// include: node_shell_read.js
readBinary = (filename) => {
  // We need to re-wrap `file://` strings to URLs.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename);
  return ret;
};

readAsync = async (filename, binary = true) => {
  // See the comment in the `readBinary` function.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
  return ret;
};
// end include: node_shell_read.js
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  programArgs = process.argv.slice(2);

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  try {
    scriptDirectory = new URL('.', _scriptName).href; // includes trailing slash
  } catch {
    // Must be a `blob:` or `data:` URL (e.g. `blob:http://site.com/etc/etc`), we cannot
    // infer anything from them.
  }

  {
// include: web_or_worker_shell_read.js
if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = async (url) => {
    var response = await fetch(url, { credentials: 'same-origin' });
    if (response.ok) {
      return response.arrayBuffer();
    }
    throw new Error(response.status + ' : ' + response.url);
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
}

var out = console.log.bind(console);
var err = console.error.bind(console);

// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;

// Wasm globals

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    // This build was created without ASSERTIONS defined.  `assert()` should not
    // ever be called in this configuration but in case there are callers in
    // the wild leave this simple abort() implementation here for now.
    abort(text);
  }
}

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');

// include: runtime_common.js
// include: runtime_stack_check.js
// end include: runtime_stack_check.js
// include: runtime_exceptions.js
// Base Emscripten EH error class
class EmscriptenEH {}

class EmscriptenSjLj extends EmscriptenEH {}

// end include: runtime_exceptions.js
// include: runtime_debug.js
// end include: runtime_debug.js
var readyPromiseResolve, readyPromiseReject;

// Memory management

var runtimeInitialized = false;



function updateMemoryViews() {
  var b = wasmMemory.buffer;
  HEAP8 = new Int8Array(b);
  HEAP16 = new Int16Array(b);
  HEAPU8 = new Uint8Array(b);
  HEAPU16 = new Uint16Array(b);
  HEAP32 = new Int32Array(b);
  HEAPU32 = new Uint32Array(b);
  HEAPF32 = new Float32Array(b);
  HEAPF64 = new Float64Array(b);
  HEAP64 = new BigInt64Array(b);
  HEAPU64 = new BigUint64Array(b);
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// end include: runtime_common.js
function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  // Begin ATPRERUNS hooks
  callRuntimeCallbacks(onPreRuns);
  // End ATPRERUNS hooks
}

function initRuntime() {
  runtimeInitialized = true;

  // Begin ATINITS hooks
  if (!Module['noFSInit'] && !FS.initialized) FS.init();
TTY.init();
  // End ATINITS hooks

  wasmExports['__wasm_call_ctors']();

  // Begin ATPOSTCTORS hooks
  FS.ignorePermissions = false;
  // End ATPOSTCTORS hooks
}

function postRun() {
   // PThreads reuse the runtime from the main thread.

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  // Begin ATPOSTRUNS hooks
  callRuntimeCallbacks(onPostRuns);
  // End ATPOSTRUNS hooks
}

/**
 * @param {string|number=} what
 */
function abort(what) {
  Module['onAbort']?.(what);

  what = `Aborted(${what})`;
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  what += '. Build with -sASSERTIONS for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject?.(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

var wasmBinaryFile;

function findWasmBinary() {
  return locateFile('worker-runtime.wasm');
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  // Throwing a plain string here, even though it not normally advisable since
  // this gets turning into an `abort` in instantiateArrayBuffer.
  throw 'both async and sync fetching of the wasm failed';
}

async function getWasmBinary(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {
      // Fall back to getBinarySync below;
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return getBinarySync(binaryFile);
}

async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    abort(reason);
  }
}

async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      && !ENVIRONMENT_IS_NODE
     ) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
      return instantiationResult;
    } catch (reason) {
      // We expect the most common failure cause to be a bad MIME type for the binary,
      // in which case falling back to ArrayBuffer instantiation should work.
      err(`wasm streaming compile failed: ${reason}`);
      err('falling back to ArrayBuffer instantiation');
      // fall back of instantiateArrayBuffer below
    };
  }
  return instantiateArrayBuffer(binaryFile, imports);
}

function getWasmImports() {
  // prepare imports
  var imports = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  return imports;
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
async function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    assignWasmExports(wasmExports);

    updateMemoryViews();

    return wasmExports;
  }

  // Prefer streaming instantiation if available.
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    return receiveInstance(result['instance']);
  }

  var info = getWasmImports();

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
        Module['instantiateWasm'](info, (inst, mod) => {
          resolve(receiveInstance(inst, mod));
        });
    });
  }

  wasmBinaryFile ??= findWasmBinary();
  var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
  var exports = receiveInstantiationResult(result);
  return exports;
}

// end include: preamble.js

// Begin JS library code


  class ExitStatus {
      name = 'ExitStatus';
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }

  /** @type {!Int16Array} */
  var HEAP16;

  /** @type {!Int32Array} */
  var HEAP32;

  /** not-@type {!BigInt64Array} */
  var HEAP64;

  /** @type {!Int8Array} */
  var HEAP8;

  /** @type {!Float32Array} */
  var HEAPF32;

  /** @type {!Float64Array} */
  var HEAPF64;

  /** @type {!Uint16Array} */
  var HEAPU16;

  /** @type {!Uint32Array} */
  var HEAPU32;

  /** not-@type {!BigUint64Array} */
  var HEAPU64;

  /** @type {!Uint8Array} */
  var HEAPU8;

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };
  var onPostRuns = [];
  var addOnPostRun = (cb) => onPostRuns.push(cb);

  var onPreRuns = [];
  var addOnPreRun = (cb) => onPreRuns.push(cb);


  
    /**
   * @param {number} ptr
   * @param {string} type
   */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[ptr];
      case 'i8': return HEAP8[ptr];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP64[((ptr)>>3)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = true;

  
    /**
   * @param {number} ptr
   * @param {number} value
   * @param {string} type
   */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': HEAP64[((ptr)>>3)] = BigInt(value); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  

  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.slice(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.slice(0, -1);
        }
        return root + dir;
      },
  basename:(path) => path && path.match(/([^\/]+|\/)\/*$/)[1],
join:(...paths) => PATH.normalize(paths.join('/')),
join2:(l, r) => PATH.normalize(l + '/' + r),
};

var initRandomFill = () => {
    // This block is not needed on v19+ since crypto.getRandomValues is builtin
    if (ENVIRONMENT_IS_NODE) {
      var nodeCrypto = require('node:crypto');
      return (view) => nodeCrypto.randomFillSync(view);
    }

    return (view) => (crypto.getRandomValues(view), 0);
  };
var randomFill = (view) => (randomFill = initRandomFill())(view);



var PATH_FS = {
resolve:(...args) => {
      var resolvedPath = '',
        resolvedAbsolute = false;
      for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? args[i] : FS.cwd();
        // Skip empty and invalid entries
        if (typeof path != 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          return ''; // an invalid portion invalidates the whole thing
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = PATH.isAbs(path);
      }
      // At this point the path should be resolved to a full absolute path, but
      // handle relative paths to be safe (might happen when process.cwd() fails)
      resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    },
relative:(from, to) => {
      from = PATH_FS.resolve(from).slice(1);
      to = PATH_FS.resolve(to).slice(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '') break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '') break;
        }
        if (start > end) return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    },
};


var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();

var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
    var maxIdx = idx + maxBytesToRead;
    if (ignoreNul) return maxIdx;
    // TextDecoder needs to know the byte length in advance, it doesn't stop on
    // null terminator by itself.
    // As a tiny code save trick, compare idx against maxIdx using a negation,
    // so that maxBytesToRead=undefined/NaN means Infinity.
    while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
    return idx;
  };

  /**
   * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
   * array that contains uint8 values, returns a copy of that string as a
   * Javascript String object.
   * heapOrArray is either a regular array, or a JavaScript typed array view.
   * @param {number=} idx
   * @param {number=} maxBytesToRead
   * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
   * @return {string}
   */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
  
      var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
  
      // When using conditional TextDecoder, skip it for short strings as the overhead of the native call is not worth it.
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
  var FS_stdin_getChar_buffer = [];
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.codePointAt(i);
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
          // Gotcha: if codePoint is over 0xFFFF, it is represented as a surrogate pair in UTF-16.
          // We need to manually skip over the second code unit for correct iteration.
          i++;
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  /** @type {function(string, boolean=, number=)} */
  var intArrayFromString = (stringy, dontAddNull, length) => {
      var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    };
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          // we will read data by chunks of BUFSIZE
          var BUFSIZE = 256;
          var buf = Buffer.alloc(BUFSIZE);
          var bytesRead = 0;
  
          // For some reason we must suppress a closure warning here, even though
          // fd definitely exists on process.stdin, and is even the proper way to
          // get the fd of stdin,
          // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
          // This started to happen after moving this logic out of library_tty.js,
          // so it is related to the surrounding code in some unclear manner.
          /** @suppress {missingProperties} */
          var fd = process.stdin.fd;
  
          try {
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
          } catch(e) {
            // Cross-platform differences: on Windows, reading EOF throws an
            // exception, but on other OSes, reading EOF returns 0. Uniformize
            // behavior by treating the EOF exception to return 0.
            if (e.toString().includes('EOF')) bytesRead = 0;
            else throw e;
          }
  
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString('utf-8');
          }
        } else
        if (globalThis.window?.prompt) {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else
        {}
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.atime = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.mtime = stream.node.ctime = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  },
  };
  
  
  var mmapAlloc = (size) => {
      abort();
    };
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16895, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // not supported
          throw new FS.ErrnoError(63);
        }
        MEMFS.ops_table ||= {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: FS.chrdev_stream_ops
          }
        };
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          // The actual number of bytes used in the typed array, as opposed to
          // contents.length which gives the whole capacity.
          node.usedBytes = 0;
          // The byte data of the file is stored in a typed array.
          // Note: typed arrays are not resizable like normal JS arrays are, so
          // there is a small penalty involved for appending file writes that
          // continuously grow a file similar to std::vector capacity vs used.
          node.contents = MEMFS.emptyFileContents ??= new Uint8Array(0);
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.atime = node.mtime = node.ctime = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.atime = parent.mtime = parent.ctime = node.atime;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents.length;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very
        // small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for
        // large sizes, do a much more conservative size*1.125 increase to avoid
        // overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = MEMFS.getFileDataAsTypedArray(node);
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        node.contents.set(oldContents);
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        var oldContents = node.contents;
        node.contents = new Uint8Array(newSize); // Allocate new storage.
        node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
        node.usedBytes = newSize;
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.atime);
          attr.mtime = new Date(node.mtime);
          attr.ctime = new Date(node.ctime);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          for (const key of ["mode", "atime", "mtime", "ctime"]) {
            if (attr[key] != null) {
              node[key] = attr[key];
            }
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          // This error may happen quite a bit. To avoid overhead we reuse it (and
          // suffer a lack of stack info).
          if (!MEMFS.doesNotExistError) {
            MEMFS.doesNotExistError = new FS.ErrnoError(44);
            /** @suppress {checkTypes} */
            MEMFS.doesNotExistError.stack = '<generic error, no stack>';
          }
          throw MEMFS.doesNotExistError;
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {}
          if (new_node) {
            if (FS.isDir(old_node.mode)) {
              // if we're overwriting a directory at new_name, make sure it's empty.
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
            FS.hashRemoveNode(new_node);
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          new_dir.contents[new_name] = old_node;
          old_node.name = new_name;
          new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  readdir(node) {
          return ['.', '..', ...Object.keys(node.contents)];
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0o777 | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          buffer.set(contents.subarray(position, position + size), offset);
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.mtime = node.ctime = Date.now();
  
          if (canOwn) {
            node.contents = buffer.subarray(offset, offset + length);
            node.usedBytes = length;
          } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
            node.contents = buffer.slice(offset, offset + length);
            node.usedBytes = length;
          } else {
            MEMFS.expandFileStorage(node, position+length);
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
            node.usedBytes = Math.max(node.usedBytes, position + length);
          }
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            if (contents) {
              // Try to avoid unnecessary slices.
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }
              HEAP8.set(contents, ptr);
            }
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  var FS_modeStringToFlags = (str) => {
      if (typeof str != 'string') return str;
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_fileDataToTypedArray = (data) => {
      if (typeof data == 'string') {
        data = intArrayFromString(data, true);
      }
      if (!data.subarray) {
        data = new Uint8Array(data);
      }
      return data;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  var asyncLoad = async (url) => {
      var arrayBuffer = await readAsync(url);
      return new Uint8Array(arrayBuffer);
    };
  
  
  var FS_createDataFile = (...args) => FS.createDataFile(...args);
  
  var getUniqueRunDependency = (id) => {
      return id;
    };
  
  var runDependencies = 0;
  
  
  var dependenciesFulfilled = null;
  var removeRunDependency = (id) => {
      runDependencies--;
  
      Module['monitorRunDependencies']?.(runDependencies);
  
      if (runDependencies == 0) {
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback(); // can add another dependenciesFulfilled
        }
      }
    };
  var addRunDependency = (id) => {
      runDependencies++;
  
      Module['monitorRunDependencies']?.(runDependencies);
  
    };
  
  
  var preloadPlugins = [];
  var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      for (var plugin of preloadPlugins) {
        if (plugin['canHandle'](fullname)) {
          return plugin['handle'](byteArray, fullname);
        }
      }
      // If no plugin handled this file then return the original/unmodified
      // byteArray.
      return byteArray;
    };
  var FS_preloadFile = async (parent, name, url, canRead, canWrite, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      addRunDependency(dep);
  
      try {
        var byteArray = url;
        if (typeof url == 'string') {
          byteArray = await asyncLoad(url);
        }
  
        byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
        preFinish?.();
        if (!dontCreateFile) {
          FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
        }
      } finally {
        removeRunDependency(dep);
      }
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      FS_preloadFile(parent, name, url, canRead, canWrite, dontCreateFile, canOwn, preFinish).then(onload).catch(onerror);
    };
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  filesystems:null,
  syncFSRequests:0,
  ErrnoError:class {
        name = 'ErrnoError';
        // We set the `name` property to be able to identify `FS.ErrnoError`
        // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
        // - when using PROXYFS, an error can come from an underlying FS
        // as different FS objects have their own FS.ErrnoError each,
        // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
        // we'll use the reliable test `err.name == "ErrnoError"` instead
        constructor(errno) {
          this.errno = errno;
        }
      },
  FSStream:class {
        shared = {};
        get object() {
          return this.node;
        }
        set object(val) {
          this.node = val;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return (this.flags & 1024);
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(val) {
          this.shared.flags = val;
        }
        get position() {
          return this.shared.position;
        }
        set position(val) {
          this.shared.position = val;
        }
      },
  FSNode:class {
        node_ops = {};
        stream_ops = {};
        readMode = 292 | 73;
        writeMode = 146;
        mounted = null;
        constructor(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;  // root node sets parent to itself
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.rdev = rdev;
          this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(val) {
          val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(val) {
          val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return FS.isDir(this.mode);
        }
        get isDevice() {
          return FS.isChrdev(this.mode);
        }
      },
  lookupPath(path, opts = {}) {
        if (!path) {
          throw new FS.ErrnoError(44);
        }
        opts.follow_mount ??= true
  
        if (!PATH.isAbs(path)) {
          path = FS.cwd() + '/' + path;
        }
  
        // limit max consecutive symlinks to SYMLOOP_MAX.
        linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
          // split the absolute path
          var parts = path.split('/').filter((p) => !!p);
  
          // start at the root
          var current = FS.root;
          var current_path = '/';
  
          for (var i = 0; i < parts.length; i++) {
            var islast = (i === parts.length-1);
            if (islast && opts.parent) {
              // stop resolving
              break;
            }
  
            if (parts[i] === '.') {
              continue;
            }
  
            if (parts[i] === '..') {
              current_path = PATH.dirname(current_path);
              if (FS.isRoot(current)) {
                path = current_path + '/' + parts.slice(i + 1).join('/');
                // We're making progress here, don't let many consecutive ..'s
                // lead to ELOOP
                nlinks--;
                continue linkloop;
              } else {
                current = current.parent;
              }
              continue;
            }
  
            current_path = PATH.join2(current_path, parts[i]);
            try {
              current = FS.lookupNode(current, parts[i]);
            } catch (e) {
              // if noent_okay is true, suppress a ENOENT in the last component
              // and return an object with an undefined node. This is needed for
              // resolving symlinks in the path when creating a file.
              if ((e?.errno === 44) && islast && opts.noent_okay) {
                return { path: current_path };
              }
              throw e;
            }
  
            // jump to the mount's root node if this is a mountpoint
            if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
              current = current.mounted.root;
            }
  
            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (FS.isLink(current.mode) && (!islast || opts.follow)) {
              if (!current.node_ops.readlink) {
                throw new FS.ErrnoError(52);
              }
              var link = current.node_ops.readlink(current);
              if (!PATH.isAbs(link)) {
                link = PATH.dirname(current_path) + '/' + link;
              }
              path = link + '/' + parts.slice(i + 1).join('/');
              continue linkloop;
            }
          }
          return { path: current_path, node: current };
        }
        throw new FS.ErrnoError(32);
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        }
        if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        }
        if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        if (!FS.isDir(dir.mode)) return 54;
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        if (!FS.isDir(dir.mode)) {
          return 54;
        }
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else if (FS.isDir(node.mode)) {
          return 31;
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        }
        var mode = FS.flagsToPermissionString(flags);
        if (FS.isDir(node.mode)) {
          // opening for write
          // TODO: check for O_SEARCH? (== search for dir only)
          if (mode !== 'r' || (flags & (512 | 64))) {
            return 31;
          }
        }
        return FS.nodePermissions(node, mode);
      },
  checkOpExists(op, err) {
        if (!op) {
          throw new FS.ErrnoError(err);
        }
        return op;
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
  
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  dupStream(origStream, fd = -1) {
        var stream = FS.createStream(origStream, fd);
        stream.stream_ops?.dup?.(stream);
        return stream;
      },
  doSetAttr(stream, node, attr) {
        var setattr = stream?.stream_ops.setattr;
        var arg = setattr ? stream : node;
        setattr ??= node.node_ops.setattr;
        FS.checkOpExists(setattr, 63)
        try {
          setattr(arg, attr);
        } catch (e) {
          if (e instanceof RangeError) {
            throw new FS.ErrnoError(22);
          }
          throw e;
        }
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          stream.stream_ops.open?.(stream);
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push(...m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        for (var mount of mounts) {
          if (mount.type.syncfs) {
            mount.type.syncfs(mount, populate, done);
          } else {
            done(null);
          }
        }
      },
  mount(type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        for (var [hash, current] of Object.entries(FS.nameTable)) {
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        }
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name) {
          throw new FS.ErrnoError(28);
        }
        if (name === '.' || name === '..') {
          throw new FS.ErrnoError(20);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  statfs(path) {
        return FS.statfsNode(FS.lookupPath(path, {follow: true}).node);
      },
  statfsStream(stream) {
        // We keep a separate statfsStream function because noderawfs overrides
        // it. In noderawfs, stream.node is sometimes null. Instead, we need to
        // look at stream.path.
        return FS.statfsNode(stream.node);
      },
  statfsNode(node) {
        // NOTE: None of the defaults here are true. We're just returning safe and
        //       sane values. Currently nodefs and rawfs replace these defaults,
        //       other file systems leave them alone.
        var rtn = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: FS.nextInode,
          ffree: FS.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255,
        };
  
        if (node.node_ops.statfs) {
          Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
        }
        return rtn;
      },
  create(path, mode = 0o666) {
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode = 0o777) {
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var dir of dirs) {
          if (!dir) continue;
          if (d || PATH.isAbs(path)) d += '/';
          d += dir;
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 0o666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existent directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
          // update old node (we do this here to avoid each backend
          // needing to)
          old_node.parent = new_dir;
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
        return readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return link.node_ops.readlink(link);
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
        return getattr(node);
      },
  fstat(fd) {
        var stream = FS.getStreamChecked(fd);
        var node = stream.node;
        var getattr = stream.stream_ops.getattr;
        var arg = getattr ? stream : node;
        getattr ??= node.node_ops.getattr;
        FS.checkOpExists(getattr, 63)
        return getattr(arg);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  doChmod(stream, node, mode, dontFollow) {
        FS.doSetAttr(stream, node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          ctime: Date.now(),
          dontFollow
        });
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChmod(null, node, mode, dontFollow);
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.doChmod(stream, stream.node, mode, false);
      },
  doChown(stream, node, dontFollow) {
        FS.doSetAttr(stream, node, {
          timestamp: Date.now(),
          dontFollow
          // we ignore the uid / gid for now
        });
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChown(null, node, dontFollow);
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.doChown(stream, stream.node, false);
      },
  doTruncate(stream, node, len) {
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.doSetAttr(stream, node, {
          size: len,
          timestamp: Date.now()
        });
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doTruncate(null, node, len);
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if (len < 0 || (stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.doTruncate(stream, stream.node, len);
      },
  utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
        setattr(node, {
          atime: atime,
          mtime: mtime
        });
      },
  open(path, flags, mode = 0o666) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = FS_modeStringToFlags(flags);
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        var isDirPath;
        if (typeof path == 'object') {
          node = path;
        } else {
          isDirPath = path.endsWith("/");
          // noent_okay makes it so that if the final component of the path
          // doesn't exist, lookupPath returns `node: undefined`. `path` will be
          // updated to point to the target of all symlinks.
          var lookup = FS.lookupPath(path, {
            follow: !(flags & 131072),
            noent_okay: true
          });
          node = lookup.node;
          path = lookup.path;
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else if (isDirPath) {
            throw new FS.ErrnoError(31);
          } else {
            // node doesn't exist, try to create it
            // Ignore the permission bits here to ensure we can `open` this new
            // file below. We use chmod below to apply the permissions once the
            // file is open.
            node = FS.mknod(path, mode | 0o777, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (created) {
          FS.chmod(node, mode & 0o777);
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        if (!length) {
          throw new FS.ErrnoError(28);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags ?? 0;
        opts.encoding = opts.encoding ?? 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          abort(`Invalid encoding type "${opts.encoding}"`);
        }
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          buf = UTF8ArrayToString(buf);
        }
        FS.close(stream);
        return buf;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags ?? 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        data = FS_fileDataToTypedArray(data);
        FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
          llseek: () => 0,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomFill(randomBuffer);
            randomLeft = randomBuffer.byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16895, 73);
            node.stream_ops = {
              llseek: MEMFS.stream_ops.llseek,
            };
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                  id: fd + 1,
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              },
              readdir() {
                return Array.from(FS.streams.entries())
                  .filter(([k, v]) => v)
                  .map(([k, v]) => k.toString());
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams(input, output, error) {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (input) {
          FS.createDevice('/dev', 'stdin', input);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (output) {
          FS.createDevice('/dev', 'stdout', null, output);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (error) {
          FS.createDevice('/dev', 'stderr', null, error);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
      },
  staticInit() {
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },
  init(input, output, error) {
        FS.initialized = true;
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        input ??= Module['stdin'];
        output ??= Module['stdout'];
        error ??= Module['stderr'];
  
        FS.createStandardStreams(input, output, error);
      },
  quit() {
        FS.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        // close all of our streams
        for (var stream of FS.streams) {
          if (stream) {
            FS.close(stream);
          }
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            if (e.errno != 20) throw e;
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          data = FS_fileDataToTypedArray(data);
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        FS.createDevice.major ??= 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output?.buffer?.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.atime = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.mtime = stream.node.ctime = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (globalThis.XMLHttpRequest) {
          abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else { // Command-line.
          try {
            obj.contents = readBinary(obj.url);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array).
        // Actual getting is abstracted away for eventual reuse.
        class LazyUint8Array {
          lengthKnown = false;
          chunks = []; // Loaded chunks. Index is the chunk number
          get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = (idx / this.chunkSize)|0;
            return this.getter(chunkNum)[chunkOffset];
          }
          setDataGetter(getter) {
            this.getter = getter;
          }
          cacheLength() {
            // Find length
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) abort("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
            var chunkSize = 1024*1024; // Chunk size in bytes
  
            if (!hasByteServing) chunkSize = datalength;
  
            // Function to get a range from the remote URL.
            var doXHR = (from, to) => {
              if (from > to) abort(`invalid range (${from}, ${to}) or no bytes requested!`);
              if (to > datalength-1) abort(`only ${datalength} bytes available! programmer error!`);
  
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
              // Some hints to the browser that we want binary data.
              xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
  
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) abort("Couldn't load " + url + ". Status: " + xhr.status);
              if (xhr.response !== undefined) {
                return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
              }
              return intArrayFromString(xhr.responseText ?? '', true);
            };
            var lazyArray = this;
            lazyArray.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum+1) * chunkSize - 1; // including this byte
              end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') abort('doXHR failed!');
              return lazyArray.chunks[chunkNum];
            });
  
            if (usesGzip || !datalength) {
              // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
              chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
  
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }
          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
  
        if (globalThis.XMLHttpRequest) {
          if (!ENVIRONMENT_IS_WORKER) abort('Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc');
          var lazyArray = new LazyUint8Array();
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        for (const [key, fn] of Object.entries(node.stream_ops)) {
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        }
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  };
  
  
    /**
   * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
   * emscripten HEAP, returns a copy of that string as a Javascript String object.
   *
   * @param {number} ptr
   * @param {number=} maxBytesToRead - An optional length that specifies the
   *   maximum number of bytes to read. You can omit this parameter to scan the
   *   string until the first 0 byte. If maxBytesToRead is passed, and the string
   *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
   *   string will cut short at that byte index.
   * @param {boolean=} ignoreNul - If true, the function will not stop on a NUL character.
   * @return {string}
   */
  var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => {
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : '';
    };
  var SYSCALLS = {
  currentUmask:18,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return dir + '/' + path;
      },
  writeStat(buf, stat) {
        HEAPU32[((buf)>>2)] = stat.dev;
        HEAPU32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAPU32[(((buf)+(12))>>2)] = stat.uid;
        HEAPU32[(((buf)+(16))>>2)] = stat.gid;
        HEAPU32[(((buf)+(20))>>2)] = stat.rdev;
        HEAP64[(((buf)+(24))>>3)] = BigInt(stat.size);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        HEAP64[(((buf)+(40))>>3)] = BigInt(Math.floor(atime / 1000));
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(56))>>3)] = BigInt(Math.floor(mtime / 1000));
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(72))>>3)] = BigInt(Math.floor(ctime / 1000));
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(88))>>3)] = BigInt(stat.ino);
        return 0;
      },
  writeStatFs(buf, stats) {
        HEAPU32[(((buf)+(4))>>2)] = stats.bsize;
        HEAPU32[(((buf)+(60))>>2)] = stats.bsize;
        HEAP64[(((buf)+(8))>>3)] = BigInt(stats.blocks);
        HEAP64[(((buf)+(16))>>3)] = BigInt(stats.bfree);
        HEAP64[(((buf)+(24))>>3)] = BigInt(stats.bavail);
        HEAP64[(((buf)+(32))>>3)] = BigInt(stats.files);
        HEAP64[(((buf)+(40))>>3)] = BigInt(stats.ffree);
        HEAPU32[(((buf)+(48))>>2)] = stats.fsid;
        HEAPU32[(((buf)+(64))>>2)] = stats.flags;  // ST_NOSUID
        HEAPU32[(((buf)+(56))>>2)] = stats.namelen;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  function ___syscall_faccessat(dirfd, path, amode, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (amode & ~7) {
        // need a valid mode
        return -28;
      }
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      if (!node) {
        return -44;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        return -2;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  var syscallGetVarargI = () => {
      // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
      var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
      SYSCALLS.varargs += 4;
      return ret;
    };
  var syscallGetVarargP = syscallGetVarargI;
  
  
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = syscallGetVarargI();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.dupStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = syscallGetVarargI();
          var mask = 289792;
          stream.flags = (stream.flags & ~mask) | (arg & mask);
          return 0;
        }
        case 12: {
          var arg = syscallGetVarargP();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
          // Pretend that the locking is successful. These are process-level locks,
          // and Emscripten programs are a single process. If we supported linking a
          // filesystem between programs, we'd need to do more here.
          // See https://github.com/emscripten-core/emscripten/issues/23697
          return 0;
      }
      return -28;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_fstat64(fd, buf) {
  try {
  
      return SYSCALLS.writeStat(buf, FS.fstat(fd));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  
  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21505: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = syscallGetVarargP();
            HEAP32[((argp)>>2)] = termios.c_iflag || 0;
            HEAP32[(((argp)+(4))>>2)] = termios.c_oflag || 0;
            HEAP32[(((argp)+(8))>>2)] = termios.c_cflag || 0;
            HEAP32[(((argp)+(12))>>2)] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[(argp + i)+(17)] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = syscallGetVarargP();
            var c_iflag = HEAP32[((argp)>>2)];
            var c_oflag = HEAP32[(((argp)+(4))>>2)];
            var c_cflag = HEAP32[(((argp)+(8))>>2)];
            var c_lflag = HEAP32[(((argp)+(12))>>2)];
            var c_cc = []
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[(argp + i)+(17)]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
          }
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = syscallGetVarargP();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21537:
        case 21531: {
          var argp = syscallGetVarargP();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = syscallGetVarargP();
            HEAP16[((argp)>>1)] = winsize[0];
            HEAP16[(((argp)+(2))>>1)] = winsize[1];
          }
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        case 21515: {
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_lstat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.writeStat(buf, FS.lstat(path));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_mkdirat(dirfd, path, mode) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      mode &= ~SYSCALLS.currentUmask;
      FS.mkdir(path, mode, 0);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_newfstatat(dirfd, path, buf, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      var nofollow = flags & 256;
      var allowEmpty = flags & 4096;
      flags = flags & (~6400);
      path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
      return SYSCALLS.writeStat(buf, nofollow ? FS.lstat(path) : FS.stat(path));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  
  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? syscallGetVarargI() : 0;
      if (flags & 64) {
        mode &= ~SYSCALLS.currentUmask;
      }
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
  try {
  
      oldpath = SYSCALLS.getStr(oldpath);
      newpath = SYSCALLS.getStr(newpath);
      oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
      newpath = SYSCALLS.calculateAt(newdirfd, newpath);
      FS.rename(oldpath, newpath);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_stat64(path, buf) {
  try {
  
      path = SYSCALLS.getStr(path);
      return SYSCALLS.writeStat(buf, FS.stat(path));
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (!flags) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        return -28;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }
  

  var __abort_js = () =>
      abort('');

  var __emscripten_throw_longjmp = () => {
      throw new EmscriptenSjLj;
    };

  var INT53_MAX = 9007199254740992;
  
  var INT53_MIN = -9007199254740992;
  var bigintToI53Checked = (num) => (num < INT53_MIN || num > INT53_MAX) ? NaN : Number(num);
  function __gmtime_js(time, tmPtr) {
    time = bigintToI53Checked(time);
  
  
      var date = new Date(time * 1000);
      HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
    ;
  }

  var isLeapYear = (year) => year%4 === 0 && (year%100 !== 0 || year%400 === 0);
  
  var MONTH_DAYS_LEAP_CUMULATIVE = [0,31,60,91,121,152,182,213,244,274,305,335];
  
  var MONTH_DAYS_REGULAR_CUMULATIVE = [0,31,59,90,120,151,181,212,243,273,304,334];
  var ydayFromDate = (date) => {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; // -1 since it's days since Jan 1
  
      return yday;
    };
  
  function __localtime_js(time, tmPtr) {
    time = bigintToI53Checked(time);
  
  
      var date = new Date(time*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    ;
  }

  
  var __mktime_js = function(tmPtr) {
  
  var ret = (() => { 
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
      if (isNaN(date.getTime())) {
        return -1;
      }
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      // To match expected behavior, update fields from date
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getYear();
  
      // Return time in seconds
      return date.getTime() / 1000;
     })();
  return BigInt(ret);
  };

  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for
      // daylight savings.  This code uses the fact that getTimezoneOffset returns
      // a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it
      // compares whether the output of the given date the same (Standard) or less
      // (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      var extractZone = (timezoneOffset) => {
        // Why inverse sign?
        // Read here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
        var sign = timezoneOffset >= 0 ? "-" : "+";
  
        var absOffset = Math.abs(timezoneOffset)
        var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
        var minutes = String(absOffset % 60).padStart(2, "0");
  
        return `UTC${sign}${hours}${minutes}`;
      }
  
      var winterName = extractZone(winterOffset);
      var summerName = extractZone(summerOffset);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };

  var _emscripten_date_now = () => Date.now();

  var _emscripten_get_now = () => performance.now();

  var getHeapMax = () =>
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      536870912;
  
  var alignMemory = (size, alignment) => {
      return Math.ceil(size / alignment) * alignment;
    };
  
  var growMemory = (size) => {
      var oldHeapSize = wasmMemory.buffer.byteLength;
      var pages = ((size - oldHeapSize + 65535) / 65536) | 0;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow(pages); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = growMemory(newSize);
        if (replacement) {
  
          return true;
        }
      }
      return false;
    };

  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }
  

  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }
  

  
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
  
  
  try {
  
      if (isNaN(offset)) return 22;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      HEAP64[((newOffset)>>3)] = BigInt(stream.position);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  ;
  }

  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) {
          // No more space to write.
          break;
        }
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }
  

  var wasmTableMirror = [];
  
  
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        /** @suppress {checkTypes} */
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    };



  var FS_createPath = (...args) => FS.createPath(...args);



  var FS_unlink = (...args) => FS.unlink(...args);

  var FS_createLazyFile = (...args) => FS.createLazyFile(...args);

  var FS_createDevice = (...args) => FS.createDevice(...args);



  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.preloadFile = FS_preloadFile;
  FS.staticInit();;
// End JS library code

// include: postlibrary.js
// This file is included after the automatically-generated JS library code
// but before the wasm module is created.

{

  // Begin ATMODULES hooks
  if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];
if (Module['preloadPlugins']) preloadPlugins = Module['preloadPlugins'];
if (Module['print']) out = Module['print'];
if (Module['printErr']) err = Module['printErr'];
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
  // End ATMODULES hooks

  if (Module['arguments']) programArgs = Module['arguments'];
  if (Module['thisProgram']) thisProgram = Module['thisProgram'];

  if (Module['preInit']) {
    if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
    while (Module['preInit'].length > 0) {
      Module['preInit'].shift()();
    }
  }
}

// Begin runtime exports
  Module['addRunDependency'] = addRunDependency;
  Module['removeRunDependency'] = removeRunDependency;
  Module['FS_preloadFile'] = FS_preloadFile;
  Module['FS_unlink'] = FS_unlink;
  Module['FS_createPath'] = FS_createPath;
  Module['FS_createDevice'] = FS_createDevice;
  Module['FS'] = FS;
  Module['FS_createDataFile'] = FS_createDataFile;
  Module['FS_createLazyFile'] = FS_createLazyFile;
  // End runtime exports
  // Begin JS library exports
  // End JS library exports

// end include: postlibrary.js

function browser_audio_open(frequency,format,channels,chunk) {return Module.aotHost.openAudio(frequency,format,channels,chunk)?1:0;}
function browser_audio_allocate(count) {return Module.aotHost.allocateChannels(count);}
function browser_audio_duration(path) {let name=UTF8ToString(path);if(name.startsWith('/game/'))name=name.slice(6);return Module.aotHost.soundDuration(name);}
function browser_audio_play(channel,path,loops,ticks,volume,chunk) {let name=UTF8ToString(path);if(name.startsWith('/game/'))name=name.slice(6);return Module.aotHost.play(channel,name,loops,ticks,volume,chunk);}
function browser_audio_halt(channel) {return Module.aotHost.halt(channel);}
function browser_audio_free(chunk) {Module.aotHost.freeSound(chunk);}
function browser_audio_pause(channel,paused) {Module.aotHost.pause(channel,!!paused);}
function browser_audio_volume(channel,volume) {return Module.aotHost.volume(channel,volume);}
function browser_audio_playing(channel,paused) {return Module.aotHost.playing(channel,!!paused);}
function browser_audio_finished() {return Module.aotHost.finished.length?Module.aotHost.finished.shift():-1;}
function browser_audio_reset() {if(Module.aotHost){Module.aotHost.halt(-1);Module.aotHost.finished.length=0;if(Module.aotHost.haltMusic)Module.aotHost.haltMusic();}}
function browser_audio_music_play(path,loops,volume) {let name=UTF8ToString(path);if(name.startsWith('/game/'))name=name.slice(6);return Module.aotHost&&Module.aotHost.playMusic?Module.aotHost.playMusic(name,loops,volume):-1;}
function browser_audio_music_halt() {if(Module.aotHost&&Module.aotHost.haltMusic)Module.aotHost.haltMusic();}
function browser_audio_music_pause(paused) {if(Module.aotHost&&Module.aotHost.pauseMusic)Module.aotHost.pauseMusic(!!paused);}
function browser_audio_music_volume(volume) {return Module.aotHost&&Module.aotHost.musicVolume?Module.aotHost.musicVolume(volume):128;}
function browser_audio_music_playing() {return Module.aotHost&&Module.aotHost.musicPlaying?Module.aotHost.musicPlaying():0;}
function browser_audio_music_finished() {return Module.aotHost&&Module.aotHost.musicFinished?Module.aotHost.musicFinished():0;}
function browser_sdl_init(flags) { return Module.aotHost?.init(flags)?1:0; }
function browser_sdl_size(w,h) {Module.aotHost.resize(w,h);}
function browser_sdl_caption(text) {Module.aotHost.caption(UTF8ToString(text));}
function browser_sdl_poll(pointer) {const event=Module.aotHost.events[0];if(!event)return 0;if(pointer){Module.aotHost.events.shift();HEAPU8.set(event,pointer);}return 1;}
function browser_sdl_mouse(which) {const m=Module.aotHost.mouse;return which===0?m.x:which===1?m.y:m.buttons;}
function browser_sdl_cursor(mode) {return Module.aotHost.cursor(mode);}
function browser_sdl_image(path,which,target) { let name=UTF8ToString(path);if(name.startsWith('/game/'))name=name.slice(6); const image=Module.aotHost.image(name); if(!image)return 0;if(which===0)return image.w;if(which===1)return image.h;HEAPU8.set(image.pixels,target);return 1; }
function browser_sdl_present(pixels,w,h,pitch,kind,dw,dh) { Module.aotHost.present(HEAPU8,pixels,w,h,pitch,kind,dw,dh); return Module.aotHost.shouldStop()?1:0; }

// Imports from the Wasm binary.
var _set_entry_budget,
  _renew_entry_budget,
  _run_startup,
  _test_sdl_software,
  _test_printf,
  _test_allocator,
  _test_host,
  _test_sdl_abi,
  _xml_input,
  _test_original_xml,
  _test_original_asset,
  _setThrew,
  __emscripten_stack_restore,
  __emscripten_stack_alloc,
  _emscripten_stack_get_current,
  memory,
  __indirect_function_table,
  wasmMemory,
  wasmTable;


function assignWasmExports(wasmExports) {
  _set_entry_budget = Module['_set_entry_budget'] = wasmExports['set_entry_budget'];
  _renew_entry_budget = Module['_renew_entry_budget'] = wasmExports['renew_entry_budget'];
  _run_startup = Module['_run_startup'] = wasmExports['run_startup'];
  _test_sdl_software = Module['_test_sdl_software'] = wasmExports['test_sdl_software'];
  _test_printf = Module['_test_printf'] = wasmExports['test_printf'];
  _test_allocator = Module['_test_allocator'] = wasmExports['test_allocator'];
  _test_host = Module['_test_host'] = wasmExports['test_host'];
  _test_sdl_abi = Module['_test_sdl_abi'] = wasmExports['test_sdl_abi'];
  _xml_input = Module['_xml_input'] = wasmExports['xml_input'];
  _test_original_xml = Module['_test_original_xml'] = wasmExports['test_original_xml'];
  _test_original_asset = Module['_test_original_asset'] = wasmExports['test_original_asset'];
  _setThrew = wasmExports['setThrew'];
  __emscripten_stack_restore = wasmExports['_emscripten_stack_restore'];
  __emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'];
  _emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'];
  memory = wasmMemory = wasmExports['memory'];
  __indirect_function_table = wasmTable = wasmExports['__indirect_function_table'];
}

var wasmImports = {
  /** @export */
  __syscall_faccessat: ___syscall_faccessat,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_fstat64: ___syscall_fstat64,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_lstat64: ___syscall_lstat64,
  /** @export */
  __syscall_mkdirat: ___syscall_mkdirat,
  /** @export */
  __syscall_newfstatat: ___syscall_newfstatat,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  __syscall_renameat: ___syscall_renameat,
  /** @export */
  __syscall_rmdir: ___syscall_rmdir,
  /** @export */
  __syscall_stat64: ___syscall_stat64,
  /** @export */
  __syscall_unlinkat: ___syscall_unlinkat,
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  _emscripten_throw_longjmp: __emscripten_throw_longjmp,
  /** @export */
  _gmtime_js: __gmtime_js,
  /** @export */
  _localtime_js: __localtime_js,
  /** @export */
  _mktime_js: __mktime_js,
  /** @export */
  _tzset_js: __tzset_js,
  /** @export */
  browser_audio_allocate,
  /** @export */
  browser_audio_duration,
  /** @export */
  browser_audio_finished,
  /** @export */
  browser_audio_free,
  /** @export */
  browser_audio_halt,
  /** @export */
  browser_audio_music_finished,
  /** @export */
  browser_audio_music_halt,
  /** @export */
  browser_audio_music_pause,
  /** @export */
  browser_audio_music_play,
  /** @export */
  browser_audio_music_playing,
  /** @export */
  browser_audio_music_volume,
  /** @export */
  browser_audio_open,
  /** @export */
  browser_audio_pause,
  /** @export */
  browser_audio_play,
  /** @export */
  browser_audio_playing,
  /** @export */
  browser_audio_reset,
  /** @export */
  browser_audio_volume,
  /** @export */
  browser_sdl_caption,
  /** @export */
  browser_sdl_cursor,
  /** @export */
  browser_sdl_image,
  /** @export */
  browser_sdl_init,
  /** @export */
  browser_sdl_mouse,
  /** @export */
  browser_sdl_poll,
  /** @export */
  browser_sdl_present,
  /** @export */
  browser_sdl_size,
  /** @export */
  emscripten_date_now: _emscripten_date_now,
  /** @export */
  emscripten_get_now: _emscripten_get_now,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  invoke_d,
  /** @export */
  invoke_i,
  /** @export */
  invoke_ii,
  /** @export */
  invoke_iid,
  /** @export */
  invoke_iii,
  /** @export */
  invoke_iiii,
  /** @export */
  invoke_iiiii,
  /** @export */
  invoke_iiiiii,
  /** @export */
  invoke_v,
  /** @export */
  invoke_vi,
  /** @export */
  invoke_vii,
  /** @export */
  invoke_viii,
  /** @export */
  invoke_viiii,
  /** @export */
  invoke_viiiii
};

function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_d(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iid(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

function run() {

  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve?.(Module);
    Module['onRuntimeInitialized']?.();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}

var wasmExports;

// In modularize mode the generated code is within a factory function so we
// can use await here (since it's not top-level-await).
wasmExports = await (createWasm());

run();

// end include: postamble.js

// include: postamble_modularize.js
// In MODULARIZE mode we wrap the generated code in a factory function
// and return either the Module itself, or a promise of the module.
//
// We assign to the `moduleRtn` global here and configure closure to see
// this as an extern so it won't get minified.

if (runtimeInitialized)  {
  moduleRtn = Module;
} else {
  // Set up the promise that indicates the Module is initialized
  moduleRtn = new Promise((resolve, reject) => {
    readyPromiseResolve = resolve;
    readyPromiseReject = reject;
  });
}

// end include: postamble_modularize.js



    return moduleRtn;
  };
})();

// Export using a UMD style export, or ES6 exports if selected
if (typeof exports === 'object' && typeof module === 'object') {
  module.exports = createVascoletAOTWorker;
  // This default export looks redundant, but it allows TS to import this
  // commonjs style module.
  module.exports.default = createVascoletAOTWorker;
} else if (typeof define === 'function' && define['amd'])
  define([], () => createVascoletAOTWorker);

