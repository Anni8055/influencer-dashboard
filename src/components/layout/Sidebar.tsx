import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Box, 
  Typography, 
  Avatar
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  Campaign as CampaignIcon, 
  Message as MessageIcon, 
  BarChart as AnalyticsIcon, 
  AccountCircle as ProfileIcon, 
  Logout as LogoutIcon 
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Campaigns', icon: <CampaignIcon />, path: '/campaigns' },
    { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
    { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
    { text: 'Profile', icon: <ProfileIcon />, path: '/profile' },
  ];
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#151c2c',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Influencer Hub
        </Typography>
      </Box>
      
      <Divider sx={{ backgroundColor: '#2a3549' }} />
      
      {user && (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar 
            src={user.profile.avatar} 
            alt={user.name} 
            sx={{ width: 40, height: 40, mr: 2 }} 
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              @{user.profile.username}
            </Typography>
          </Box>
        </Box>
      )}
      
      <Divider sx={{ backgroundColor: '#2a3549' }} />
      
      <List>
        {menuItems.map((item) => (
          <ListItem 
            component="div"
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            sx={{
              backgroundColor: location.pathname === item.path ? '#2a3549' : 'transparent',
              '&:hover': {
                backgroundColor: '#2a3549',
              },
              borderRadius: '8px',
              my: 0.5,
              mx: 1,
              cursor: 'pointer'
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ flexGrow: 1 }} />
      
      <List>
        <ListItem 
          component="div"
          onClick={handleLogout}
          sx={{
            '&:hover': {
              backgroundColor: '#2a3549',
            },
            borderRadius: '8px',
            my: 0.5,
            mx: 1,
            cursor: 'pointer'
          }}
        >
          <ListItemIcon sx={{ color: 'white', minWidth: '40px' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar; 