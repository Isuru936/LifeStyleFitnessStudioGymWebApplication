/**
* (c) Iconify for Tailwind CSS
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 0.1.4
*/
'use strict';

var plugin = require('tailwindcss/plugin');
var fs = require('fs');

const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}

function getCommonCSSRules(options) {
  const result = {
    display: "inline-block",
    width: "1em",
    height: "1em"
  };
  const varName = options.varName;
  if (options.pseudoSelector) {
    result["content"] = "''";
  }
  switch (options.mode) {
    case "background":
      if (varName) {
        result["background-image"] = "var(--" + varName + ")";
      }
      result["background-repeat"] = "no-repeat";
      result["background-size"] = "100% 100%";
      break;
    case "mask":
      result["background-color"] = "currentColor";
      if (varName) {
        result["mask-image"] = result["-webkit-mask-image"] = "var(--" + varName + ")";
      }
      result["mask-repeat"] = result["-webkit-mask-repeat"] = "no-repeat";
      result["mask-size"] = result["-webkit-mask-size"] = "100% 100%";
      break;
  }
  return result;
}
function generateItemCSSRules(icon, options) {
  const result = {};
  const varName = options.varName;
  if (!options.forceSquare && icon.width !== icon.height) {
    result["width"] = calculateSize("1em", icon.width / icon.height);
  }
  const svg = iconToHTML(
    icon.body.replace(/currentColor/g, options.color || "black"),
    {
      viewBox: `${icon.left} ${icon.top} ${icon.width} ${icon.height}`,
      width: icon.width.toString(),
      height: icon.height.toString()
    }
  );
  const url = svgToURL(svg);
  if (varName) {
    result["--" + varName] = url;
  } else {
    switch (options.mode) {
      case "background":
        result["background-image"] = url;
        break;
      case "mask":
        result["mask-image"] = result["-webkit-mask-image"] = url;
        break;
    }
  }
  return result;
}

const commonSelector = ".icon--{prefix}";
const iconSelector = ".icon--{prefix}--{name}";
const defaultSelectors = {
  commonSelector,
  iconSelector,
  overrideSelector: commonSelector + iconSelector
};
function getIconsCSSData(iconSet, names, options = {}) {
  const css = [];
  const errors = [];
  const palette = options.color ? true : iconSet.info?.palette;
  let mode = options.mode || typeof palette === "boolean" && (palette ? "background" : "mask");
  if (!mode) {
    for (let i = 0; i < names.length; i++) {
      const icon = getIconData(iconSet, names[i]);
      if (icon) {
        mode = icon.body.includes("currentColor") ? "mask" : "background";
        break;
      }
    }
    if (!mode) {
      mode = "mask";
      errors.push(
        "/* cannot detect icon mode: not set in options and icon set is missing info, rendering as " + mode + " */"
      );
    }
  }
  let varName = options.varName;
  if (varName === void 0 && mode === "mask") {
    varName = "svg";
  }
  const newOptions = {
    ...options,
    // Override mode and varName
    mode,
    varName
  };
  const { commonSelector: commonSelector2, iconSelector: iconSelector2, overrideSelector } = newOptions.iconSelector ? newOptions : defaultSelectors;
  const iconSelectorWithPrefix = iconSelector2.replace(
    /{prefix}/g,
    iconSet.prefix
  );
  const commonRules = {
    ...options.rules,
    ...getCommonCSSRules(newOptions)
  };
  const hasCommonRules = commonSelector2 && commonSelector2 !== iconSelector2;
  const commonSelectors = /* @__PURE__ */ new Set();
  if (hasCommonRules) {
    css.push({
      selector: commonSelector2.replace(/{prefix}/g, iconSet.prefix),
      rules: commonRules
    });
  }
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const iconData = getIconData(iconSet, name);
    if (!iconData) {
      errors.push("/* Could not find icon: " + name + " */");
      continue;
    }
    const rules = generateItemCSSRules(
      {
        ...defaultIconProps,
        ...iconData
      },
      newOptions
    );
    let requiresOverride = false;
    if (hasCommonRules && overrideSelector) {
      for (const key in rules) {
        if (key in commonRules) {
          requiresOverride = true;
        }
      }
    }
    const selector = (requiresOverride && overrideSelector ? overrideSelector.replace(/{prefix}/g, iconSet.prefix) : iconSelectorWithPrefix).replace(/{name}/g, name);
    css.push({
      selector,
      rules
    });
    if (!hasCommonRules) {
      commonSelectors.add(selector);
    }
  }
  const result = {
    css,
    errors
  };
  if (!hasCommonRules && commonSelectors.size) {
    const selector = Array.from(commonSelectors).join(
      newOptions.format === "compressed" ? "," : ", "
    );
    result.common = {
      selector,
      rules: commonRules
    };
  }
  return result;
}

function locateIconSet(prefix) {
    try {
        const main = require.resolve(`@iconify-json/${prefix}/icons.json`);
        const info = require.resolve(`@iconify-json/${prefix}/info.json`);
        return {
            main,
            info,
        };
    }
    catch { }
    try {
        const main = require.resolve(`@iconify/json/json/${prefix}.json`);
        return {
            main,
        };
    }
    catch { }
}
/**
 * Cache for loaded icon sets
 *
 * Tailwind CSS can send multiple separate requests to plugin, this will
 * prevent same data from being loaded multiple times.
 *
 * Key is filename, not prefix!
 */
const cache = Object.create(null);
/**
 * Load icon set
 */
function loadIconSet(prefix, options) {
    let filename;
    // Check for custom icon set
    const customIconSet = options.iconSets?.[prefix];
    if (customIconSet) {
        switch (typeof customIconSet) {
            case 'function': {
                // Callback. Store result in options to avoid loading it again
                const result = customIconSet();
                options.iconSets[prefix] = result;
                return result;
            }
            case 'string': {
                // Filename to load it from
                filename = {
                    main: customIconSet,
                };
                break;
            }
            default:
                return customIconSet;
        }
    }
    else {
        // Find icon set
        filename = locateIconSet(prefix);
    }
    if (!filename) {
        return;
    }
    const main = typeof filename === 'string' ? filename : filename.main;
    // Check for cache
    if (cache[main]) {
        return cache[main];
    }
    // Attempt to load it
    try {
        const result = JSON.parse(fs.readFileSync(main, 'utf8'));
        if (!result.info && typeof filename === 'object' && filename.info) {
            // Load info from a separate file
            result.info = JSON.parse(fs.readFileSync(filename.info, 'utf8'));
        }
        cache[main] = result;
        return result;
    }
    catch { }
}

const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;

/**
 * Get icon names from list
 */
function getIconNames(icons) {
    const prefixes = Object.create(null);
    // Add entry
    const add = (prefix, name) => {
        if (typeof prefix === 'string' &&
            prefix.match(matchIconName) &&
            typeof name === 'string' &&
            name.match(matchIconName)) {
            (prefixes[prefix] || (prefixes[prefix] = new Set())).add(name);
        }
    };
    // Comma or space separated string
    let iconNames;
    if (typeof icons === 'string') {
        iconNames = icons.split(/[\s,.]/);
    }
    else if (icons instanceof Array) {
        iconNames = [];
        // Split each array entry
        icons.forEach((item) => {
            item.split(/[\s,.]/).forEach((name) => iconNames.push(name));
        });
    }
    else {
        return;
    }
    // Parse array
    if (iconNames?.length) {
        iconNames.forEach((icon) => {
            if (!icon.trim()) {
                return;
            }
            // Attempt prefix:name split
            const nameParts = icon.split(':');
            if (nameParts.length === 2) {
                add(nameParts[0], nameParts[1]);
                return;
            }
            // Attempt icon class: .icon--{prefix}--{name}
            // with or without dot
            const classParts = icon.split('--');
            if (classParts[0].match(/^\.?icon$/)) {
                if (classParts.length === 3) {
                    add(classParts[1], classParts[2]);
                    return;
                }
                if (classParts.length === 2) {
                    // Partial match
                    return;
                }
            }
            // Throw error
            throw new Error(`Cannot resolve icon: "${icon}"`);
        });
    }
    else {
        return;
    }
    return prefixes;
}

/**
 * Get CSS rules for icons list
 */
function getCSSRulesForIcons(icons, options = {}) {
    const rules = Object.create(null);
    // Get all icons
    const prefixes = getIconNames(icons);
    // Parse all icon sets
    for (const prefix in prefixes) {
        const iconSet = loadIconSet(prefix, options);
        if (!iconSet) {
            throw new Error(`Cannot load icon set for "${prefix}". Install "@iconify-json/${prefix}" as dev dependency?`);
        }
        const generated = getIconsCSSData(iconSet, Array.from(prefixes[prefix]), options);
        const result = generated.common
            ? [generated.common, ...generated.css]
            : generated.css;
        result.forEach((item) => {
            const selector = item.selector instanceof Array
                ? item.selector.join(', ')
                : item.selector;
            rules[selector] = item.rules;
        });
    }
    return rules;
}

/**
 * Get dynamic CSS rules
 */
function getDynamicCSSRules(icon, { scale = 1, ...options } = {}) {
    const nameParts = icon.split(/--|\:/);
    if (nameParts.length !== 2) {
        throw new Error(`Invalid icon name: "${icon}"`);
    }
    const [prefix, name] = nameParts;
    if (!(prefix.match(matchIconName) && name.match(matchIconName))) {
        throw new Error(`Invalid icon name: "${icon}"`);
    }
    const iconSet = loadIconSet(prefix, options);
    if (!iconSet) {
        throw new Error(`Cannot load icon set for "${prefix}". Install "@iconify-json/${prefix}" as dev dependency?`);
    }
    const generated = getIconsCSSData(iconSet, [name], {
        iconSelector: '.icon',
    });
    if (generated.css.length !== 1) {
        throw new Error(`Cannot find "${icon}". Bad icon name?`);
    }
    if (scale) {
        generated.common.rules.height = scale + 'em';
        generated.common.rules.width = scale + 'em';
    }
    else {
        delete generated.common.rules.height;
        delete generated.common.rules.width;
    }
    return {
        // Common rules
        ...(options.overrideOnly || !generated.common?.rules
            ? {}
            : generated.common.rules),
        // Icon rules
        ...generated.css[0].rules,
    };
}

/**
 * Generate styles for dynamic selector: class="icon-[mdi-light--home]"
 */
function addDynamicIconSelectors(options) {
    const prefix = options?.prefix || 'icon';
    return plugin(({ matchComponents }) => {
        matchComponents({
            [prefix]: (icon) => getDynamicCSSRules(icon, options),
        });
    });
}
/**
 * Generate styles for preset list of icons
 */
function addCleanIconSelectors(icons, options) {
    const rules = getCSSRulesForIcons(icons, options);
    return plugin(({ addUtilities }) => {
        addUtilities(rules);
    });
}

exports.addCleanIconSelectors = addCleanIconSelectors;
exports.addDynamicIconSelectors = addDynamicIconSelectors;
