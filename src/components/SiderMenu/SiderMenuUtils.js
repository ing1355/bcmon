import pathToRegexp from 'path-to-regexp';

/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menus
 */
export const getFlatMenuKeys = menuData => {
  let keys = [];
  menuData.forEach(item => {
    keys.push(item.path);
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });
  return keys;
};

export const getMenuMatches = (flatMenuKeys, path) =>
  flatMenuKeys.filter(item => {
    if (item) {
      return pathToRegexp(item).test(path);
    }
    return false;
  });
/**
 * 获得菜单子节点
 * @memberof SiderMenu
 */