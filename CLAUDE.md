# Rivr Website - Development Setup

## Running the App Locally

### Prerequisites
- Node.js v20.9.0
- npm v10.1.0

### Steps to Start Development Server (PERSISTENT - NEVER STOPS)

1. **Dependencies are already installed** - The project has `node_modules/` directory with all required packages

2. **Start the PERSISTENT development server (RECOMMENDED):**
   ```bash
   nohup ./start-dev.sh > dev-server.log 2>&1 &
   ```
   
   This will:
   - Run on port 4000
   - Auto-restart if it crashes
   - Keep running even if terminal is closed
   - Log output to `dev-server.log`

3. **Verify it's running:**
   ```bash
   sleep 8 && curl -s -o /dev/null -w "%{http_code}" http://localhost:4000
   ```
   Should return `200`

4. **Check server status anytime:**
   ```bash
   ps aux | grep "start-dev.sh\|next dev" | grep -v grep
   ```

5. **View server logs:**
   ```bash
   tail -f dev-server.log
   ```

6. **Stop the server (if needed):**
   ```bash
   pkill -f "start-dev.sh"
   pkill -f "next dev"
   ```
   
### Important Notes

- The server starts on `http://localhost:3000`
- It takes about 1-2 seconds to be ready
- When running `npm run dev`, the command appears to "timeout" in bash tools, but this is normal - the server is actually running successfully in the background
- To verify the server is running:
  ```bash
  curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
  ```
  Should return `200`
- To check if the process is running:
  ```bash
  ps aux | grep "next dev" | grep -v grep
  ```

### Project Structure
- Next.js 14.0.1 application
- TypeScript
- Material-UI components
- Three.js for 3D graphics
- Pages in `/pages/` directory
- Components in `/components/` directory

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Production Deployment to Vercel

### Deploy to rivr.social (PRODUCTION)

**ALWAYS use this process to deploy to the live site:**

1. **Build the project first:**
   ```bash
   npm run build
   ```

2. **Deploy to production:**
   ```bash
   vercel --prod
   ```

3. **Set domain aliases (if needed):**
   ```bash
   vercel alias set [DEPLOYMENT_URL] rivr.social
   vercel alias set [DEPLOYMENT_URL] www.rivr.social
   ```

4. **Verify deployment:**
   ```bash
   curl -s -o /dev/null -w "%{http_code}" https://rivr.social
   curl -s -o /dev/null -w "%{http_code}" https://www.rivr.social
   ```
   Both should return `200`

### Important Production Notes

- **Project Name**: `rivr-website` (in Vercel dashboard)
- **Live Domain**: `rivr.social` and `www.rivr.social`
- **Team**: `camerons-projects-12b341d8`
- **Auto-deployment**: Enabled for this project

### Domain Configuration

The following domains are configured in Vercel:
- `rivr.social` → `rivr-website` project
- `www.rivr.social` → `rivr-website` project  
- `demo.rivr.social` → `rivr-app-demo` project

### Troubleshooting Production Deployment

If you see authentication errors or 401 responses:
1. Wait 2-3 minutes for SSL certificates to provision
2. Check domain aliases are properly set
3. Verify the deployment is linked to the correct project
4. Use `vercel domains ls` to check domain status

### Vercel CLI Commands Reference

- `vercel list` - Show recent deployments
- `vercel domains ls` - List configured domains  
- `vercel project ls` - List all projects
- `vercel alias ls` - List all domain aliases
- `vercel logs [deployment-url]` - View deployment logs