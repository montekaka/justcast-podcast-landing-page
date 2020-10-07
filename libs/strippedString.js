const { de } = require("date-fns/locale");

const strippedString = (originalString) => {
  return originalString.replace(/(<([^>]+)>)/gi, "");
} 

export default strippedString;