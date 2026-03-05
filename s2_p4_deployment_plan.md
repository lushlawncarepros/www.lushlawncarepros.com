# S2-P4 Deployment Plan: Vercel, Firebase & Custom Domain

## Objective
The goal is to execute Stage 2, Phase 4 (S2-P4), which involves deploying the Lush Lawn Care Pros 2026 Next.js application to Vercel, securing the environment by migrating local Firebase and Botpress credentials to the Vercel dashboard, and finalizing the production environment by connecting the custom domain with SSL provisioned automatically by Vercel.

## Proposed File Tree
*No structural changes to the codebase are required for this phase beyond ensuring code is pushed to the repository.*

## Implementation Logic
**Step 1: Ensure Code is Pushed to GitHub (Terminal commands)**
Execute these commands sequentially in the root directory:
```bash
git add .
git commit -m "chore: Prepare repository for Vercel S2-P4 deployment"
git push origin HEAD
```

**Step 2: Initialize Deployment via Vercel Dashboard (UI instructions)**
1. Log in to [vercel.com](https://vercel.com/) and navigate to your dashboard.
2. Click **"Add New..."** dropdown and select **"Project"**.
3. Locate the `Lush-Website-2026` Git repository under "Import Git Repository" and click **"Import"**.
4. Under "Configure Project", verify the Framework Preset is set to **Next.js**.
5. *Do NOT click "Deploy" yet. Proceed to Step 3.*

**Step 3: Migrate Environment Variables**
1. Staying in the "Configure Project" screen, expand the **"Environment Variables"** dropdown.
2. Manually add your Firebase and Botpress keys. For example:
   * **Firebase:** `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, etc.
   * **Botpress:** `NEXT_PUBLIC_BOTPRESS_CLIENT_ID`, `NEXT_PUBLIC_BOTPRESS_WEBCHAT_ID`, etc.
3. Once all environment variables are securely added, click the **"Deploy"** button. The Next.js 15 site will begin building.

**Step 4: Wire Custom Domain & SSL**
1. Once deployment succeeds, click **"Continue to Dashboard"**.
2. Click the **"Settings"** tab, then select **"Domains"** from the left sidebar.
3. Enter your custom domain (e.g., `lushlawncarepros.com`) in the input field and click **"Add"**.
4. Follow Vercel's instructions to update your DNS provider (e.g., GoDaddy, Namecheap) with the provided `A` or `CNAME` records.
5. Vercel will automatically provision the SSL certificate once DNS propagates (usually within a few minutes).

## Dependencies
* None (Relies on existing Next.js, Firebase, and Botpress configurations).

## Architect Blockers
* Do you require specific Vercel Pro features for this release, or is the Hobby tier sufficient?
* Can you confirm the exact names of the environment variables used in your local/firebase/botpress setups so the final runbook is 100% accurate?
