module.exports = function parseMetaOpt(opt) {
  let [ k, v ] = opt.split('=');
  v = v ?? true;

  return {[k]: v};
};
