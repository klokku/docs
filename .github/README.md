# GitHub Actions Deployment Setup

This repository uses GitHub Actions to automatically deploy the documentation website to the production server when changes are pushed to the `main` branch.

## Required Secrets

The following secrets need to be added to the GitHub repository settings (Settings > Secrets and variables > Actions > New repository secret):

1. `SSH_HOSTNAME`: The hostname to copy files over
2. `SSH_USERNAME`: The username for SSH access to the server
3. `SSH_PRIVATE_KEY`: The SSH private key for authentication

## How it works

The deployment workflow:
1. Triggers on push to main branch
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the documentation site
5. Deploys the built files to {SSH_HOSTNAME}:/www/klokku-website/docs using SCP

## Setting up SSH access

1. Generate an SSH key pair if you don't have one:
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-deploy"
   ```
2. Add the public key to the authorized_keys file on the server
3. Add the private key to GitHub repository secrets as `SSH_PRIVATE_KEY`
4. Add the username for SSH access to GitHub repository secrets as `SSH_USERNAME`
