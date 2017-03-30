export function stripHtmlTags(input = '') {
  return input.replace(/<(?:.|\n)*?>/gm, '');
}
export function decodeEntities(input = '') {
  let entitiesMap = {
    '&#8217;': '\'',
    '&#8230;': '...',
    '&#8220;': '"',
    '&#8221': '"',
    '&#8211;': '-'
  };
  for(let key in entitiesMap) {
    input = input.split(key).join(entitiesMap[key]);
  }
  return input;
}
