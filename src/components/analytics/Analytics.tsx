import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  LinearProgress,
  Tooltip,
  CircularProgress
} from '@mui/material';
import {
  TrendingUp,
  MonetizationOn,
  Visibility,
  ThumbUp,
  Info
} from '@mui/icons-material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  Filler
);

const Analytics: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [timeRange, setTimeRange] = useState('30d');
  const [platform, setPlatform] = useState('all');
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleTimeRangeChange = (event: SelectChangeEvent) => {
    setTimeRange(event.target.value);
  };
  
  const handlePlatformChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };
  
  // Sample analytics data
  const overviewData = {
    followers: 25000,
    followersGrowth: 5.2,
    impressions: 284500,
    impressionsGrowth: 12.3,
    engagement: 5.7,
    engagementGrowth: 0.8,
    earnings: 12500,
    earningsGrowth: 15.2,
  };
  
  // Line chart data for growth
  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Followers',
        data: [21000, 22100, 22800, 23500, 24200, 25000],
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  
  const growthOptions = {
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
        beginAtZero: false,
      }
    }
  };
  
  // Bar chart data for engagement
  const engagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: [4.2, 3.8, 5.1, 4.9, 6.2, 5.7],
        backgroundColor: [
          'rgba(33, 150, 243, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(33, 150, 243, 0.7)',
        ],
        borderColor: [
          'rgba(33, 150, 243, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(33, 150, 243, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const engagementOptions = {
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
  
  // Doughnut chart data for campaign performance
  const campaignPerformanceData = {
    labels: ['Fashion', 'Beauty', 'Fitness', 'Travel', 'Lifestyle'],
    datasets: [
      {
        label: 'Campaign Revenue',
        data: [4200, 3000, 2500, 1800, 1000],
        backgroundColor: [
          'rgba(33, 150, 243, 0.7)',
          'rgba(156, 39, 176, 0.7)',
          'rgba(76, 175, 80, 0.7)',
          'rgba(255, 152, 0, 0.7)',
          'rgba(244, 67, 54, 0.7)',
        ],
        borderColor: [
          'rgba(33, 150, 243, 1)',
          'rgba(156, 39, 176, 1)',
          'rgba(76, 175, 80, 1)',
          'rgba(255, 152, 0, 1)',
          'rgba(244, 67, 54, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  // Sample campaign performance data
  const campaignData = [
    {
      id: '1',
      campaign: 'Summer Fashion Collection',
      brand: 'Fashion Brand X',
      brandLogo: 'https://via.placeholder.com/40',
      impressions: 85000,
      engagement: 6.2,
      clicks: 4200,
      conversion: 2.8,
      earnings: 1500,
    },
    {
      id: '2',
      campaign: 'Fitness Product Launch',
      brand: 'FitLife',
      brandLogo: 'https://via.placeholder.com/40',
      impressions: 62000,
      engagement: 5.8,
      clicks: 3100,
      conversion: 3.2,
      earnings: 2000,
    },
    {
      id: '3',
      campaign: 'Organic Skincare Review',
      brand: 'Natural Glow',
      brandLogo: 'https://via.placeholder.com/40',
      impressions: 43000,
      engagement: 7.1,
      clicks: 2800,
      conversion: 4.1,
      earnings: 1200,
    },
    {
      id: '4',
      campaign: 'Travel Destination Promotion',
      brand: 'Travel Adventures',
      brandLogo: 'https://via.placeholder.com/40',
      impressions: 94000,
      engagement: 4.5,
      clicks: 3600,
      conversion: 1.9,
      earnings: 3000,
    },
  ];
  
  // Calculate platform distribution for demonstration
  const platformDistributionData = {
    labels: ['Instagram', 'TikTok', 'YouTube', 'Twitter'],
    datasets: [
      {
        label: 'Followers',
        data: [16000, 12000, 5000, 3000],
        backgroundColor: [
          'rgba(156, 39, 176, 0.7)',
          'rgba(33, 150, 243, 0.7)',
          'rgba(244, 67, 54, 0.7)',
          'rgba(76, 175, 80, 0.7)',
        ],
        borderColor: [
          'rgba(156, 39, 176, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(76, 175, 80, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Analytics
      </Typography>
      
      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="time-range-select-label">Time Range</InputLabel>
            <Select
              labelId="time-range-select-label"
              id="time-range-select"
              value={timeRange}
              onChange={handleTimeRangeChange}
              label="Time Range"
            >
              <MenuItem value="7d">Last 7 days</MenuItem>
              <MenuItem value="30d">Last 30 days</MenuItem>
              <MenuItem value="90d">Last 90 days</MenuItem>
              <MenuItem value="6m">Last 6 months</MenuItem>
              <MenuItem value="1y">Last year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="platform-select-label">Platform</InputLabel>
            <Select
              labelId="platform-select-label"
              id="platform-select"
              value={platform}
              onChange={handlePlatformChange}
              label="Platform"
            >
              <MenuItem value="all">All Platforms</MenuItem>
              <MenuItem value="instagram">Instagram</MenuItem>
              <MenuItem value="tiktok">TikTok</MenuItem>
              <MenuItem value="youtube">YouTube</MenuItem>
              <MenuItem value="twitter">Twitter</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      {/* Stats Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#e3f2fd', color: '#2196f3', mr: 2 }}>
                <TrendingUp />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Followers
              </Typography>
              <Tooltip title="Total number of followers across all platforms">
                <Info fontSize="small" sx={{ ml: 1, color: 'text.secondary', opacity: 0.7 }} />
              </Tooltip>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {overviewData.followers.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                component="span" 
                sx={{ 
                  color: overviewData.followersGrowth > 0 ? 'success.main' : 'error.main',
                  display: 'inline-flex',
                  alignItems: 'center',
                  mr: 1,
                }}
              >
                <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                {overviewData.followersGrowth}%
              </Box>
              from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#e8f5e9', color: '#4caf50', mr: 2 }}>
                <Visibility />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Impressions
              </Typography>
              <Tooltip title="Total number of times your content was viewed">
                <Info fontSize="small" sx={{ ml: 1, color: 'text.secondary', opacity: 0.7 }} />
              </Tooltip>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {overviewData.impressions.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                component="span" 
                sx={{ 
                  color: overviewData.impressionsGrowth > 0 ? 'success.main' : 'error.main',
                  display: 'inline-flex',
                  alignItems: 'center',
                  mr: 1,
                }}
              >
                <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                {overviewData.impressionsGrowth}%
              </Box>
              from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#f3e5f5', color: '#9c27b0', mr: 2 }}>
                <ThumbUp />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Engagement
              </Typography>
              <Tooltip title="Average engagement rate across all content">
                <Info fontSize="small" sx={{ ml: 1, color: 'text.secondary', opacity: 0.7 }} />
              </Tooltip>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              {overviewData.engagement}%
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                component="span" 
                sx={{ 
                  color: overviewData.engagementGrowth > 0 ? 'success.main' : 'error.main',
                  display: 'inline-flex',
                  alignItems: 'center',
                  mr: 1,
                }}
              >
                <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                {overviewData.engagementGrowth}%
              </Box>
              from last month
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: '#fff3e0', color: '#ff9800', mr: 2 }}>
                <MonetizationOn />
              </Avatar>
              <Typography variant="h6" color="text.secondary">
                Total Earnings
              </Typography>
              <Tooltip title="Total earnings from all campaigns">
                <Info fontSize="small" sx={{ ml: 1, color: 'text.secondary', opacity: 0.7 }} />
              </Tooltip>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              ${overviewData.earnings.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              <Box 
                component="span" 
                sx={{ 
                  color: overviewData.earningsGrowth > 0 ? 'success.main' : 'error.main',
                  display: 'inline-flex',
                  alignItems: 'center',
                  mr: 1,
                }}
              >
                <TrendingUp fontSize="small" sx={{ mr: 0.5 }} />
                {overviewData.earningsGrowth}%
              </Box>
              from last month
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1rem',
            },
          }}
        >
          <Tab label="Growth" />
          <Tab label="Engagement" />
          <Tab label="Campaigns" />
        </Tabs>
      </Box>
      
      {/* Tab Content */}
      <Box sx={{ mt: 2 }}>
        {/* Growth Tab */}
        {tabValue === 0 && (
          <Grid container spacing={3}>
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
                  Followers Growth
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ height: 300 }}>
                  <Line data={growthData} options={growthOptions} />
                </Box>
              </Paper>
            </Grid>
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
                  Platform Distribution
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Doughnut data={platformDistributionData} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}
        
        {/* Engagement Tab */}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Engagement Rate Over Time
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ height: 400 }}>
                  <Bar data={engagementData} options={engagementOptions} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Post Performance
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ overflowX: 'auto' }}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Post</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Platform</TableCell>
                        <TableCell align="right">Likes</TableCell>
                        <TableCell align="right">Comments</TableCell>
                        <TableCell align="right">Shares</TableCell>
                        <TableCell align="right">Engagement</TableCell>
                        <TableCell align="right">Impressions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Summer Fashion Lookbook</TableCell>
                        <TableCell>Jun 15, 2023</TableCell>
                        <TableCell>Instagram</TableCell>
                        <TableCell align="right">3,245</TableCell>
                        <TableCell align="right">156</TableCell>
                        <TableCell align="right">289</TableCell>
                        <TableCell align="right">7.2%</TableCell>
                        <TableCell align="right">52,340</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Morning Routine Video</TableCell>
                        <TableCell>Jun 10, 2023</TableCell>
                        <TableCell>TikTok</TableCell>
                        <TableCell align="right">12,563</TableCell>
                        <TableCell align="right">342</TableCell>
                        <TableCell align="right">1,453</TableCell>
                        <TableCell align="right">9.1%</TableCell>
                        <TableCell align="right">164,230</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Product Review</TableCell>
                        <TableCell>Jun 5, 2023</TableCell>
                        <TableCell>YouTube</TableCell>
                        <TableCell align="right">1,243</TableCell>
                        <TableCell align="right">85</TableCell>
                        <TableCell align="right">42</TableCell>
                        <TableCell align="right">4.5%</TableCell>
                        <TableCell align="right">31,240</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Travel Tips</TableCell>
                        <TableCell>May 28, 2023</TableCell>
                        <TableCell>Instagram</TableCell>
                        <TableCell align="right">2,567</TableCell>
                        <TableCell align="right">132</TableCell>
                        <TableCell align="right">178</TableCell>
                        <TableCell align="right">5.8%</TableCell>
                        <TableCell align="right">48,760</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        )}
        
        {/* Campaigns Tab */}
        {tabValue === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Campaign Revenue by Category
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Doughnut data={campaignPerformanceData} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Campaign Performance
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Campaign</TableCell>
                        <TableCell align="right">Impressions</TableCell>
                        <TableCell align="right">Eng. Rate</TableCell>
                        <TableCell align="right">Conversion</TableCell>
                        <TableCell align="right">Earnings</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {campaignData.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar 
                                src={row.brandLogo} 
                                sx={{ width: 30, height: 30, mr: 1 }} 
                              />
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                  {row.campaign}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {row.brand}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell align="right">{row.impressions.toLocaleString()}</TableCell>
                          <TableCell align="right">{row.engagement}%</TableCell>
                          <TableCell align="right">{row.conversion}%</TableCell>
                          <TableCell align="right">${row.earnings.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  Campaign Performance Metrics
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={3}>
                  {campaignData.map((campaign) => (
                    <Grid item xs={12} md={6} key={campaign.id}>
                      <Card elevation={0} sx={{ backgroundColor: '#f5f5f7', borderRadius: 2 }}>
                        <CardHeader
                          avatar={
                            <Avatar src={campaign.brandLogo} />
                          }
                          title={campaign.campaign}
                          subheader={campaign.brand}
                        />
                        <CardContent>
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2">Impressions</Typography>
                              <Typography variant="body2" fontWeight="bold">
                                {campaign.impressions.toLocaleString()}
                              </Typography>
                            </Box>
                            <LinearProgress 
                              variant="determinate" 
                              value={(campaign.impressions / 100000) * 100} 
                              sx={{ height: 6, borderRadius: 3 }} 
                            />
                          </Box>
                          
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2">Engagement</Typography>
                              <Typography variant="body2" fontWeight="bold">
                                {campaign.engagement}%
                              </Typography>
                            </Box>
                            <LinearProgress 
                              variant="determinate" 
                              value={(campaign.engagement / 10) * 100} 
                              sx={{ 
                                height: 6, 
                                borderRadius: 3,
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: '#9c27b0',
                                }
                              }} 
                            />
                          </Box>
                          
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2">Conversion</Typography>
                              <Typography variant="body2" fontWeight="bold">
                                {campaign.conversion}%
                              </Typography>
                            </Box>
                            <LinearProgress 
                              variant="determinate" 
                              value={(campaign.conversion / 5) * 100} 
                              sx={{ 
                                height: 6, 
                                borderRadius: 3,
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: '#4caf50',
                                }
                              }} 
                            />
                          </Box>
                          
                          <Typography variant="h6" color="primary" align="right" sx={{ mt: 2 }}>
                            ${campaign.earnings.toLocaleString()}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Analytics; 