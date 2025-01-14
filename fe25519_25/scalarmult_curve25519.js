
module.exports = loadWebAssembly

loadWebAssembly.supported = typeof WebAssembly !== 'undefined'

function loadWebAssembly (opts) {
  if (!loadWebAssembly.supported) return null

  var imp = opts && opts.imports
  var wasm = toUint8Array('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')
  var ready = null

  var mod = {
    buffer: wasm,
    memory: null,
    exports: null,
    realloc: realloc,
    onload: onload
  }

  onload(function () {})

  return mod

  function realloc (size) {
    mod.exports.memory.grow(Math.max(0, Math.ceil(Math.abs(size - mod.memory.length) / 65536)))
    mod.memory = new Uint8Array(mod.exports.memory.buffer)
  }

  function onload (cb) {
    if (mod.exports) return cb()

    if (ready) {
      ready.then(cb.bind(null, null)).catch(cb)
      return
    }

    try {
      if (opts && opts.async) throw new Error('async')
      setup({instance: new WebAssembly.Instance(new WebAssembly.Module(wasm), imp)})
    } catch (err) {
      ready = WebAssembly.instantiate(wasm, imp).then(setup)
    }

    onload(cb)
  }

  function setup (w) {
    mod.exports = w.instance.exports
    mod.memory = mod.exports.memory && mod.exports.memory.buffer && new Uint8Array(mod.exports.memory.buffer)
  }
}

function toUint8Array (s) {
  if (typeof atob === 'function') return new Uint8Array(atob(s).split('').map(charCodeAt))
  return (require('buf' + 'fer').Buffer).from(s, 'base64')
}

function charCodeAt (c) {
  return c.charCodeAt(0)
}
