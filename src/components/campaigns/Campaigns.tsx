import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn,
  AttachMoney,
  CalendarToday,
  Check,
  Public,
  Campaign as CampaignIcon,
  FilterList
} from '@mui/icons-material';
import { Campaign } from '../../types';

const Campaigns: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  
  const handleOpenDialog = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setOpenDialog(true);
  };
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  const handleApply = () => {
    // In a real app, this would send an API request to apply for the campaign
    if (selectedCampaign) {
      const updatedCampaigns = campaigns.map(campaign => 
        campaign.id === selectedCampaign.id 
          ? { ...campaign, applied: true } 
          : campaign
      );
      // Would update state in a real application
      handleCloseDialog();
    }
  };
  
  // Sample campaigns data
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Summer Fashion Collection Promotion',
      description: 'We are looking for fashion influencers to promote our new summer collection. Create engaging content showcasing our products in your unique style.',
      brand: {
        id: '1',
        name: 'Fashion Brand X',
        logo: 'https://via.placeholder.com/150',
        industry: 'Fashion'
      },
      compensation: '$1,500 + Products',
      requirements: 'At least 20,000 followers on Instagram. Minimum 3% engagement rate. Must be in the US.',
      deadline: '2023-07-15',
      status: 'open',
      applied: false
    },
    {
      id: '2',
      title: 'Fitness Product Launch',
      description: 'Join us for the launch of our revolutionary fitness equipment. We need fitness enthusiasts to demonstrate the product and share their experience.',
      brand: {
        id: '2',
        name: 'FitLife',
        logo: 'https://via.placeholder.com/150',
        industry: 'Fitness'
      },
      compensation: '$2,000 + Product',
      requirements: 'Fitness niche influencers with at least 15,000 followers. Must be able to create both photo and video content.',
      deadline: '2023-07-22',
      status: 'open',
      applied: false
    },
    {
      id: '3',
      title: 'Organic Skincare Review',
      description: 'Looking for beauty influencers to try and review our new organic skincare line. Authentic reviews highlighting your experience with the products.',
      brand: {
        id: '3',
        name: 'Natural Glow',
        logo: 'https://via.placeholder.com/150',
        industry: 'Beauty'
      },
      compensation: '$1,200 + Full Product Line',
      requirements: 'Beauty niche influencers. Minimum 10,000 followers on Instagram or YouTube. Must show before/after results.',
      deadline: '2023-08-05',
      status: 'open',
      applied: true
    },
    {
      id: '4',
      title: 'Travel Destination Promotion',
      description: 'We are seeking travel influencers to visit and create content showcasing a luxury resort destination. All expenses paid plus compensation.',
      brand: {
        id: '4',
        name: 'Travel Adventures',
        logo: 'https://via.placeholder.com/150',
        industry: 'Travel'
      },
      compensation: '$3,000 + All-expenses paid trip',
      requirements: 'Travel niche influencers with at least 30,000 followers. Must be available for a 5-day trip in August. Passport required.',
      deadline: '2023-07-30',
      status: 'open',
      applied: false
    },
  ];
  
  // Filter campaigns based on tab, search query, and category
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesTab = 
      (tabValue === 0) || // All
      (tabValue === 1 && campaign.status === 'open' && !campaign.applied) || // Available
      (tabValue === 2 && campaign.applied); // Applied
      
    const matchesSearch = 
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = 
      category === 'all' || 
      campaign.brand.industry.toLowerCase() === category.toLowerCase();
      
    return matchesTab && matchesSearch && matchesCategory;
  });
  
  const categories = [
    'all',
    'fashion',
    'beauty',
    'fitness',
    'travel',
    'food',
    'technology',
    'lifestyle'
  ];
  
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Campaigns
      </Typography>
      
      {/* Search and Filter */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Search campaigns, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              borderRadius: 1,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" sx={{ backgroundColor: 'white', borderRadius: 1 }}>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              onChange={handleCategoryChange}
              label="Category"
              startAdornment={
                <InputAdornment position="start">
                  <FilterList />
                </InputAdornment>
              }
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <Tab label="All Campaigns" />
          <Tab label="Available" />
          <Tab label="Applied" />
        </Tabs>
      </Box>
      
      {/* Campaign Cards */}
      <Grid container spacing={3}>
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <Grid item xs={12} md={6} key={campaign.id}>
              <Card 
                elevation={0}
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {campaign.applied && (
                  <Chip 
                    label="Applied" 
                    color="success" 
                    icon={<Check />}
                    sx={{ 
                      position: 'absolute', 
                      top: 16, 
                      right: 16, 
                      zIndex: 1,
                      fontWeight: 'bold'
                    }} 
                  />
                )}
                
                <Box sx={{ display: 'flex', p: 3, alignItems: 'center' }}>
                  <Avatar
                    src={campaign.brand.logo}
                    alt={campaign.brand.name}
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" color="text.secondary">
                      {campaign.brand.name}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {campaign.title}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider />
                
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    {campaign.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    <Chip 
                      icon={<AttachMoney />} 
                      label={campaign.compensation} 
                      size="small"
                      sx={{ backgroundColor: '#e3f2fd' }}
                    />
                    <Chip 
                      icon={<Public />} 
                      label={campaign.brand.industry} 
                      size="small"
                      sx={{ backgroundColor: '#f3e5f5' }}
                    />
                    <Chip 
                      icon={<CalendarToday />} 
                      label={`Deadline: ${campaign.deadline}`} 
                      size="small"
                      sx={{ backgroundColor: '#fff3e0' }}
                    />
                  </Box>
                </CardContent>
                
                <Box sx={{ p: 2, backgroundColor: '#f5f5f7' }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleOpenDialog(campaign)}
                    disabled={campaign.applied}
                    sx={{
                      backgroundColor: campaign.applied ? '#4caf50' : '#151c2c',
                      '&:hover': {
                        backgroundColor: campaign.applied ? '#388e3c' : '#2a3549',
                      },
                      '&.Mui-disabled': {
                        backgroundColor: '#4caf50',
                        color: 'white',
                      }
                    }}
                  >
                    {campaign.applied ? 'Applied' : 'View Details & Apply'}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <CampaignIcon sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                No campaigns found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Try adjusting your search filters or check back later for new opportunities.
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
      
      {/* Campaign Details Dialog */}
      {selectedCampaign && (
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle sx={{ py: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar 
                src={selectedCampaign.brand.logo} 
                alt={selectedCampaign.brand.name}
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {selectedCampaign.brand.name}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {selectedCampaign.title}
                </Typography>
              </Box>
            </Box>
          </DialogTitle>
          
          <DialogContent dividers>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Campaign Details
            </Typography>
            
            <Typography variant="body1" paragraph>
              {selectedCampaign.description}
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f7', borderRadius: 2 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Compensation
                  </Typography>
                  <Typography variant="body2">
                    {selectedCampaign.compensation}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f5f5f7', borderRadius: 2 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Application Deadline
                  </Typography>
                  <Typography variant="body2">
                    {selectedCampaign.deadline}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Requirements
            </Typography>
            
            <Typography variant="body1" paragraph>
              {selectedCampaign.requirements}
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About the Brand
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar 
                src={selectedCampaign.brand.logo} 
                alt={selectedCampaign.brand.name}
                sx={{ width: 80, height: 80, mr: 2 }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {selectedCampaign.brand.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedCampaign.brand.industry}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Rating value={4.5} readOnly precision={0.5} size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    4.5 (24 collaborations)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </DialogContent>
          
          <DialogActions sx={{ py: 2, px: 3 }}>
            <Button onClick={handleCloseDialog}>
              Cancel
            </Button>
            <Button 
              variant="contained" 
              onClick={handleApply}
              disabled={selectedCampaign.applied}
              sx={{
                backgroundColor: '#151c2c',
                '&:hover': {
                  backgroundColor: '#2a3549',
                },
              }}
            >
              {selectedCampaign.applied ? 'Already Applied' : 'Apply Now'}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Campaigns; 