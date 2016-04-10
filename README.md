# HOMEY WEBSITE
This is the homey website.

## Database

table name : news
table columns :
id
post_title
post_content
post_author
post_date
post_status

table name :images
table columns :
image_id
news_id
src
alt

## respose

{
    "id": , // 記事のid
    "post_author": , // 記事の投稿者
    "post_date": , // 記事の投稿日
    "post_content": , // 記事の内容
    "post_title": , //記事のタイトル
    "post_status": , // 記事のステータス (公開 or 非公開)
    "image_number": , // 画像の数
    "images": [
        "http://","http://"
    ]
}