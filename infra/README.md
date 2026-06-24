# Frontend Infrastructure

This CDK app creates the S3 bucket and CloudFront distribution used by the GitHub Actions frontend deployment workflow.

The GitHub Actions deployment workflow can now run this CDK app automatically before syncing the frontend assets.

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

4. Optional overrides in GitHub:

- `AWS_S3_BUCKET`
- `AWS_CLOUDFRONT_DISTRIBUTION_ID`
- `AWS_CDK_STACK_NAME`

Recommended mapping:

- `FrontendBucketName` -> GitHub secret `AWS_S3_BUCKET`
- `FrontendDistributionId` -> GitHub variable `AWS_CLOUDFRONT_DISTRIBUTION_ID`
- `FullStackGuildFrontendStack` is the default stack name if `AWS_CDK_STACK_NAME` is not set

You should also set these repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

Recommended auth:

- GitHub repository variable `AWS_ROLE_TO_ASSUME` for OIDC

If you do not use OIDC, keep using:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
