import boto3
import json

print('Loading function')
dynamo = boto3.client('dynamodb')

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
        'status': True
    }

def lambda_handler(event, context):
    print(event)
    
    body = json.loads(event['body'])
    
    if event['httpMethod'] != 'POST':
        return {
            'statusCode': 405
        }
        
    # name, email, message in body
    subject = "HOMEY お問い合わせフォームより"
    message = f"{body['message']}\n\n---\n\n送信者: {body['name']}\n送信者のメールアドレス: {body['email']}"
    r = send_email(SRC_MAIL, DST_MAIL, subject, message)

    return respond()

