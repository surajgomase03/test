import os
import boto3

bucket = os.environ["INPUT_BUCKET"]
file = os.environ["INPUT_FILE"]
key = os.environ["INPUT_KEY"]

s3 = boto3.client("s3")

print(f"Uploading {file} to {bucket}/{key}")

s3.upload_file(file, bucket, key)

print("Upload completed successfully")