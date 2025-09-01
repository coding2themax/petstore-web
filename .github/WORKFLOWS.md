# GitHub Workflows Documentation

This repository includes several GitHub Actions workflows for continuous integration, deployment, and maintenance.

## Workflows Overview

### 1. CI/CD Pipeline (`ci-cd.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**
- **lint-and-type-check**: Runs TypeScript type checking and ESLint
- **build**: Builds the project for production
- **deploy**: Deploys to GitHub Pages (only on `main` branch pushes)

**Features:**
- Uses pnpm for package management
- Caches dependencies for faster builds
- Uploads build artifacts for 30 days
- Automatic deployment to GitHub Pages

### 2. Pull Request Checks (`pr-checks.yml`)

**Triggers:**
- Pull request opened, synchronized, or reopened

**Features:**
- Comprehensive quality checks for PRs
- Build size reporting
- Shows build summary in GitHub Actions summary
- Auto-merge preparation for Dependabot PRs

### 3. Security and Dependencies (`security.yml`)

**Triggers:**
- Weekly schedule (Sundays at 2 AM UTC)
- Manual dispatch
- Pull requests (for dependency review)

**Features:**
- Security audit using `pnpm audit`
- Outdated dependency reporting
- Dependency review for PRs
- Fails on high-severity security issues

### 4. Dependabot Configuration (`dependabot.yml`)

**Features:**
- Weekly dependency updates on Mondays
- Groups minor and patch updates
- Separate handling for production and development dependencies
- Auto-updates for GitHub Actions (monthly)
- Ignores major React updates (requires manual review)

## Setup Requirements

### GitHub Pages Deployment

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Ensure the repository has the necessary permissions:
   - `contents: read`
   - `pages: write`
   - `id-token: write`

### Environment Variables

The workflows use the following environment variables:
- `NODE_VERSION`: Node.js version (currently set to '18')
- `PNPM_VERSION`: pnpm version (currently set to '8.15.0')

### Required Permissions

Make sure your repository has the following permissions enabled:
- Actions: Read and write permissions
- Pages: Write permissions
- Pull requests: Write permissions (for status checks)

## Branch Protection Rules

Consider setting up branch protection rules for the `main` branch:

1. Require pull request reviews
2. Require status checks to pass before merging:
   - `lint-and-type-check`
   - `build`
   - `pr-checks`
3. Require branches to be up to date before merging
4. Restrict pushes to the `main` branch

## Workflow Status Badges

Add these badges to your main README.md to show workflow status:

```markdown
![CI/CD](https://github.com/coding2themax/petstore-web/workflows/CI%2FCD%20Pipeline/badge.svg)
![PR Checks](https://github.com/coding2themax/petstore-web/workflows/Pull%20Request%20Checks/badge.svg)
![Security](https://github.com/coding2themax/petstore-web/workflows/Security%20and%20Dependencies/badge.svg)
```

## Customization

### Modifying Build Output Directory

If your build outputs to a different directory than `dist/`, update the following in the workflows:
- `path: dist/` in upload-artifact and upload-pages-artifact steps
- Build size check in pr-checks.yml

### Adding Tests

To add test jobs:
1. Add test script to package.json
2. Add test job to ci-cd.yml workflow
3. Make the deploy job depend on tests passing

### Environment-Specific Deployments

To add staging/production environments:
1. Create separate workflow files for each environment
2. Use different branch triggers
3. Configure environment-specific secrets and variables

## Troubleshooting

### Common Issues

1. **pnpm cache issues**: Clear the cache by updating the cache key in workflows
2. **Build failures**: Check if all dependencies are properly listed in package.json
3. **Pages deployment fails**: Ensure GitHub Pages is configured correctly in repository settings
4. **Security audit failures**: Review and fix reported vulnerabilities

### Debug Mode

To enable debug logging in workflows, add this environment variable to any workflow:

```yaml
env:
  ACTIONS_STEP_DEBUG: true
```
