# Influencer Dashboard

A modern, responsive dashboard for influencers to manage their campaigns, track earnings, chat with brands, and analyze their performance metrics.

## Features

- **Complete Influencer Dashboard**
  - View available campaigns and apply
  - Track earnings and payments
  - Real-time chat with brands
  - Performance analytics and insights

## Technology Stack

- **Frontend**: React, TypeScript, Material UI
- **Routing**: React Router
- **Charts**: Chart.js with react-chartjs-2
- **State Management**: React Context API
- **HTTP Client**: Axios (for future API integration)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/influencer-dashboard.git
   ```

2. Navigate to the project directory
   ```
   cd influencer-dashboard
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Demo Credentials

Use the following credentials to log in:

- **Email**: demo@example.com
- **Password**: password

## Project Structure

```
src/
├── components/       # UI components
│   ├── analytics/    # Analytics-related components
│   ├── auth/         # Authentication components
│   ├── campaigns/    # Campaign management components
│   ├── dashboard/    # Dashboard components
│   ├── layout/       # Layout components (sidebar, header)
│   └── messages/     # Messaging components
├── contexts/         # React contexts (auth, etc.)
├── types/            # TypeScript type definitions
├── App.tsx           # Main App component with routing
└── index.tsx         # Application entry point
```

## Future Enhancements

- Integration with a backend API
- Real-time notifications
- Advanced analytics with AI-powered insights
- Mobile application
- Integration with popular social media platforms

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Material UI](https://mui.com/) for the UI components
- [Chart.js](https://www.chartjs.org/) for data visualization
- [React Router](https://reactrouter.com/) for routing
