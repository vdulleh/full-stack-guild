import * as cdk from "aws-cdk-lib";
import { aws_s3 as s3, CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";

export class FrontendHostingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "FrontendBucket", {
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }),
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      enforceSSL: true,
      removalPolicy: RemovalPolicy.RETAIN,
      autoDeleteObjects: false
    });

    new CfnOutput(this, "FrontendBucketName", {
      value: bucket.bucketName,
      description: "Bucket name used by the frontend deployment pipeline."
    });

    new CfnOutput(this, "FrontendBucketWebsiteUrl", {
      value: bucket.bucketWebsiteUrl,
      description: "S3 static website URL for the frontend."
    });
  }
}
