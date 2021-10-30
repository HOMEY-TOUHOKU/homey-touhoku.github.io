import boto3
import base64
import json
import urllib.parse

print('Loading function')

SRC_MAIL = ""
DST_MAIL = ""
REGION = "ap-northeast-1"

def send_email(source, to, subject, body):
    client = boto3.client('ses', region_name=REGION)

    response = client.send_email(
        Source=source,
        Destination={
            'ToAddresses': [
                to,
            ]
        },
        Message={
            'Subject': {
                'Data': subject,
            },
            'Body': {
                'Text': {
                    'Data': body,
                },
            }
        }
    )
    
    return response

def respond():
    return {
        'statusCode': 200,
        'body': json.dumps({"status": True})
    }

def lambda_handler(event, context):
    query_string = base64.b64decode(event['body']).decode()
    
    body = urllib.parse.parse_qs(query_string)
    
    name = urllib.parse.unquote(body['name'][0])
    email = urllib.parse.unquote(body['email'][0])
    message = urllib.parse.unquote(body['message'][0])
    
    subject = "HOMEY お問い合わせフォームより"
    message = f"{message}\n\n---\n\n送信者: {name}\n送信者のメールアドレス: {email}"
    r = send_email(SRC_MAIL, DST_MAIL, subject, message)

    return respond()
