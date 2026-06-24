# Frontend Infrastructure

This CDK app creates the S3 bucket and CloudFront distribution used by the GitHub Actions frontend deployment workflow.

## Deploy

1. Install dependencies:

```powershell
cd infra
npm install
```

2. Bootstrap CDK in your AWS account if needed:

```powershell
npx cdk bootstrap
```

3. Deploy the stack:

```powershell
npx cdk deploy
```

4. Copy the stack outputs into GitHub:

- `AWS_S3_BUCKET`
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`

Recommended mapping:

- `FrontendBucketName` -> GitHub secret `AWS_S3_BUCKET`
- `FrontendDistributionId` -> GitHub variable `AWS_CLOUDFRONT_DISTRIBUTION_ID`

You should also set these repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
