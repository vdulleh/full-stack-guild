import * as cdk from "aws-cdk-lib";
import {
  aws_cloudfront as cloudfront,
  aws_cloudfront_origins as origins,
  aws_s3 as s3,
  CfnOutput,
  Duration,
  RemovalPolicy
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class FrontendHostingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "FrontendBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.RETAIN,
      autoDeleteObjects: false
    });

    const distribution = new cloudfront.Distribution(this, "FrontendDistribution", {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: new origins.S3Origin(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        compress: true
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: Duration.minutes(5)
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
          ttl: Duration.minutes(5)
        }
      ]
    });

    new CfnOutput(this, "FrontendBucketName", {
      value: bucket.bucketName,
      description: "Bucket name used by the frontend deployment pipeline."
    });

    new CfnOutput(this, "FrontendDistributionId", {
      value: distribution.distributionId,
      description: "CloudFront distribution ID used by the deployment pipeline."
    });

    new CfnOutput(this, "FrontendDistributionDomainName", {
      value: distribution.distributionDomainName,
      description: "CloudFront domain name for the frontend."
    });
  }
}
