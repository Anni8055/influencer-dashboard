import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardHeader, 
  Avatar, 
  Divider, 
  Button, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  IconButton,
  LinearProgress,
  Chip
} from '@mui/material';
import { 
  MonetizationOn, 
  Visibility, 
  ThumbUp, 
  Campaign as CampaignIcon, 
  ChatBubble, 
  ArrowForward, 
  OpenInNew
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Performance chart data
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Engagement Rate',
        data: [4.2, 3.8, 5.1, 4.9, 6.2, 5.7],
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return value + '%';
          }
        }
      }
    }
  };
  
  // Sample upcoming campaigns
  const upcomingCampaigns = [
    {
      id: '1',
      title: 'Summer Fashion Collection',
      brand: 'Fashion Brand X',
      logo: 'https://via.placeholder.com/40',
      deadline: '2023-07-15',
      compensation: '$1,500',
    },
    {
      id: '2',
      title: 'New Fitness Product Launch',
      brand: 'FitLife',
      logo: 'https://via.placeholder.com/40',
      deadline: '2023-07-22',
      compensation: '$2,000',
    },
  ];
  
  // Sample recent messages
  const recentMessages = [
    {
      id: '1',
      sender: 'Beauty Co.',
      avatar: 'https://via.placeholder.com/40',
      message: 'Hey! We loved your last promotion. Would you be interested in...',
      time: '2 hours ago',
    },
    {
      id: '2',
      sender: 'Travel Adventures',
      avatar: 'https://via.placeholder.com/40',
      message: "Thank you for your application. We'd like to discuss details...",
      time: '1 day ago',
    },
  ];
  
  // Sample earnings data
  const earningsData = {
    total: 12500,
    pending: 3000,
    thisMonth: 2500,
    campaigns: 8,
  };
  
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Dashboard
      </Typography>
      
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#e3f2fd', color: '#2196f3', mr: 2 }}>
                <MonetizationOn />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Total Earnings
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              ${earningsData.total.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${earningsData.thisMonth.toLocaleString()} this month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#e8f5e9', color: '#4caf50', mr: 2 }}>
                <CampaignIcon />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Campaigns
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {earningsData.campaigns}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              2 currently active
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#f3e5f5', color: '#9c27b0', mr: 2 }}>
                <Visibility />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Total Impressions
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              284.5K
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +12.3% from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#fff3e0', color: '#ff9800', mr: 2 }}>
                <ThumbUp />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Avg. Engagement
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              5.7%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +0.8% from last month
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Main content */}
      <Grid container spacing={3}>
        {/* Performance Chart */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Performance Overview
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ height: 300 }}>
              <Line data={performanceData} options={chartOptions} />
            </Box>
          </Paper>
        </Grid>
        
        {/* Pending earnings */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Pending Earnings
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                ${earningsData.pending.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                pending approval
              </Typography>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Completion Status
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={75} 
              sx={{ 
                mb: 2, 
                height: 8, 
                borderRadius: 4,
                backgroundColor: '#f5f5f5',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#ff9800',
                }
              }} 
            />
            
            <Typography variant="body2" sx={{ mb: 3 }}>
              3 of 4 deliverables completed
            </Typography>
            
            <Button 
              variant="contained" 
              endIcon={<ArrowForward />}
              sx={{ 
                backgroundColor: '#ff9800',
                '&:hover': {
                  backgroundColor: '#f57c00',
                }
              }}
            >
              View Details
            </Button>
          </Paper>
        </Grid>
        
        {/* Upcoming Campaigns */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Upcoming Campaigns
                </Typography>
                <Button
                  size="small"
                  endIcon={<ArrowForward />}
                  sx={{ color: '#2196f3' }}
                >
                  View All
                </Button>
              </Box>
              
              <Divider />
            </Box>
            
            <List sx={{ p: 0 }}>
              {upcomingCampaigns.map((campaign) => (
                <React.Fragment key={campaign.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end">
                        <OpenInNew fontSize="small" />
                      </IconButton>
                    }
                    sx={{ px: 3, py: 2 }}
                  >
                    <ListItemAvatar>
                      <Avatar src={campaign.logo} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {campaign.title}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {campaign.brand}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Chip 
                              label={`Deadline: ${campaign.deadline}`} 
                              size="small" 
                              sx={{ mr: 1, backgroundColor: '#f5f5f5' }} 
                            />
                            <Chip 
                              label={campaign.compensation} 
                              size="small" 
                              sx={{ backgroundColor: '#e3f2fd', color: '#2196f3' }} 
                            />
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
            
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f7' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#151c2c',
                  '&:hover': {
                    backgroundColor: '#2a3549',
                  }
                }}
              >
                Browse All Campaigns
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Recent Messages */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Recent Messages
                </Typography>
                <Button
                  size="small"
                  endIcon={<ArrowForward />}
                  sx={{ color: '#2196f3' }}
                >
                  View All
                </Button>
              </Box>
              
              <Divider />
            </Box>
            
            <List sx={{ p: 0 }}>
              {recentMessages.map((message) => (
                <React.Fragment key={message.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end">
                        <ChatBubble fontSize="small" />
                      </IconButton>
                    }
                    sx={{ px: 3, py: 2 }}
                  >
                    <ListItemAvatar>
                      <Avatar src={message.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {message.sender}
                        </Typography>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {message.message}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {message.time}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
            
            <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f5f5f7' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#151c2c',
                  '&:hover': {
                    backgroundColor: '#2a3549',
                  }
                }}
              >
                Open Messages
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard; 