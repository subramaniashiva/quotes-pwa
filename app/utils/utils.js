/*
  Utils file
  Helper functions used in the application
*/

// Strips Html tags from the input text
export function stripHtmlTags(input = '') {
  return input.replace(/<(?:.|\n)*?>/gm, '');
}

// Converts the HTML entities into actual text
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
