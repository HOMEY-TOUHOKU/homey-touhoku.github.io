import * as functions from 'firebase-functions';
import axios from 'axios';
const parser = require('fast-xml-parser');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const index = functions.https.onRequest(async (request, response) => {
 const xml = await axios.get('https://ameblo.jp/tokotokoami/rss20.xml', {responseType: 'document'});
 const json = parser.parse(xml.data);
 response.send(json);
});
