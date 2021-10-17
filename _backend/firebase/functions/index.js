const functions = require('firebase-functions');
const Feed = require('rss-to-json');
const cors = require('cors')({origin: true});
const nodemailer = require("nodemailer");


// アメブロのRSSを取得してお知らせ画面に表示
exports.blog = functions.https.onRequest((request, response) => {
 cors(request, response, () => {
  Feed.load('http://rssblog.ameba.jp/tokotokoami/rss20.xml', (err, rss) => {
   if (err) {
    response.sendStatus(500);
    return;
   }

   response.send(rss);
  });
 });
});

// メールアドレス隠蔽のため, お問合せフォームの内容をgmailにforwarding
exports.send_mail = functions.https.onRequest(async (request, response) => {
 cors(request, response, async () => {
  if (request.method !== 'POST') {
   response.status(405).send('Method Not Allowed');
   return;
  }

  let transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
    user: functions.config().api.mail_user, // generated ethereal user
    pass: functions.config().api.mail_pass // generated ethereal password
   }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
   from: functions.config().api.mail_user, // sender address
   to: functions.config().api.mail_user, // list of receivers
   subject: "HOMEY お問い合わせフォームより", // Subject line
   text: `${request.body.message}\n\n---\n\n送信者: ${request.body.name}\n送信者のメールアドレス: ${request.body.email}` // plain text body
  });

  response.send({status: true});
 });
});