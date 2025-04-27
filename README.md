
# AI Safety Incident Dashboard

A responsive dashboard for tracking and managing AI safety incidents.

###Github & Deploy Link:
   https://github.com/saiteja1245/AI-Safety-Incidents
   https://aisafetyincidents.netlify.app/

## Features

- View a list of AI safety incidents with severity indicators
- Filter incidents by severity
- Sort incidents by reported date
- Expand/collapse incident details
- Report new incidents through a modal form
- Responsive design for all screen sizes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. npm run build
This will create a dist directory with the compiled application.

Deployment
Deploying to Vercel
This application is configured for easy deployment on Vercel:

Connect your GitHub repository to Vercel
Vercel will automatically detect the configuration
The build command is set to npm run build
The output directory is set to dist
You can also deploy manually using the Vercel CLI:

npm install -g vercel
vercel
Project Structure
AuthConnectHub/
├── client/               # Frontend React application
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── contexts/     # React contexts
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── App.tsx       # Main application component
│   └── index.html        # HTML template
├── shared/               # Shared code and types
│   └── schema.ts         # Type definitions
├── dist/                 # Built application (generated)
├── package.json          # Project dependencies and scripts
├── vercel.json           # Vercel deployment configuration
└── README.md             # Project documentation
License
This project is licensed under the MIT License - see the LICENSE file for details.

## Usage

- Use the severity filter dropdown to filter incidents by severity level
- Click the sort button to toggle between newest and oldest incidents
- Click "View Details" on any incident card to see the full description
- Use the "Report New Incident" button to submit a new incident
