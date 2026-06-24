# Frontend Infrastructure

This CDK app creates the S3 bucket used by the GitHub Actions frontend deployment workflow.

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

4. Copy the `FrontendBucketName` stack output into your GitHub repository secret:

- `AWS_S3_BUCKET`

You should also set:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_CLOUDFRONT_DISTRIBUTION_ID` optional
