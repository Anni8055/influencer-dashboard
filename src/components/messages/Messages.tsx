import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Badge,
  Button,
} from '@mui/material';
import {
  Send as SendIcon,
  Search as SearchIcon,
  AttachFile as AttachFileIcon,
  MoreVert as MoreVertIcon,
  Image as ImageIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Conversation, Message } from '../../types';

// Styled components for chat bubbles
const ChatBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isUser'
})<{ isUser: boolean }>(({ theme, isUser }) => ({
  maxWidth: '70%',
  padding: '12px 16px',
  borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
  backgroundColor: isUser ? '#151c2c' : '#f0f2f5',
  color: isUser ? 'white' : 'inherit',
  marginBottom: 8,
  wordBreak: 'break-word',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
}));

const MessageTime = styled(Typography)({
  fontSize: '0.75rem',
  color: 'rgba(0, 0, 0, 0.5)',
  marginTop: 4,
});

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample conversations data
  const conversations: Conversation[] = [
    {
      id: '1',
      brandId: '1',
      brandName: 'Fashion Brand X',
      brandLogo: 'https://via.placeholder.com/150',
      unreadCount: 2,
      lastMessage: 'Thanks for your interest in our campaign!',
      lastMessageTime: '10:30 AM'
    },
    {
      id: '2',
      brandId: '2',
      brandName: 'FitLife',
      brandLogo: 'https://via.placeholder.com/150',
      unreadCount: 0,
      lastMessage: 'The product will be shipped next week.',
      lastMessageTime: 'Yesterday'
    },
    {
      id: '3',
      brandId: '3',
      brandName: 'Natural Glow',
      brandLogo: 'https://via.placeholder.com/150',
      unreadCount: 0,
      lastMessage: "We'd love to see your content draft before posting.",
      lastMessageTime: 'Monday'
    },
    {
      id: '4',
      brandId: '4',
      brandName: 'Travel Adventures',
      brandLogo: 'https://via.placeholder.com/150',
      unreadCount: 1,
      lastMessage: "Here are the details for the resort booking.",
      lastMessageTime: 'Jun 30'
    },
  ];
  
  // Sample messages for a conversation
  const messages: Record<string, Message[]> = {
    '1': [
      {
        id: '1_1',
        sender: 'brand',
        receiver: 'influencer',
        content: 'Hi there! Thanks for your interest in our Summer Fashion Campaign.',
        timestamp: '10:15 AM',
        read: true,
      },
      {
        id: '1_2',
        sender: 'influencer',
        receiver: 'brand',
        content: "Hello! Yes, I'm very excited about the opportunity to work with your brand.",
        timestamp: '10:20 AM',
        read: true,
      },
      {
        id: '1_3',
        sender: 'brand',
        receiver: 'influencer',
        content: "Great! We've reviewed your profile and think you'd be a perfect fit for our summer collection.",
        timestamp: '10:25 AM',
        read: true,
      },
      {
        id: '1_4',
        sender: 'brand',
        receiver: 'influencer',
        content: "Thanks for your interest in our campaign! We would like to send you some items from our summer collection for you to feature in your content. Could you please provide us with your shipping details?",
        timestamp: '10:30 AM',
        read: false,
      },
    ],
  };
  
  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    // In a real app, you would mark messages as read here
  };
  
  const handleSendMessage = () => {
    if (messageInput.trim() !== '' && selectedConversation) {
      // In a real app, this would send the message to the API
      // and update the conversation with the new message
      
      // Clear input field
      setMessageInput('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Filter conversations based on search query
  const filteredConversations = conversations.filter(conversation =>
    conversation.brandName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Messages
      </Typography>
      
      <Grid container spacing={3} sx={{ height: 'calc(100vh - 200px)' }}>
        {/* Conversations List */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={{ 
              height: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                placeholder="Search conversations..."
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
                size="small"
                sx={{ mb: 2 }}
              />
            </Box>
            
            <Divider />
            
            <List sx={{ 
              overflow: 'auto', 
              flexGrow: 1,
              '& .MuiListItem-root:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              }
            }}>
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <React.Fragment key={conversation.id}>
                    <ListItem 
                      component="div"
                      onClick={() => handleSelectConversation(conversation)}
                      sx={{ 
                        px: 2,
                        backgroundColor: selectedConversation?.id === conversation.id 
                          ? 'rgba(33, 150, 243, 0.08)' 
                          : 'transparent',
                        cursor: 'pointer'
                      }}
                    >
                      <ListItemAvatar>
                        <Badge
                          overlap="circular"
                          badgeContent={conversation.unreadCount}
                          color="error"
                          invisible={conversation.unreadCount === 0}
                        >
                          <Avatar 
                            src={conversation.brandLogo} 
                            alt={conversation.brandName} 
                          />
                        </Badge>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight="bold" noWrap>
                            {conversation.brandName}
                          </Typography>
                        }
                        secondary={
                          <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography 
                              variant="body2" 
                              color="text.secondary" 
                              noWrap 
                              sx={{ 
                                maxWidth: 150,
                                fontWeight: conversation.unreadCount > 0 ? 'bold' : 'normal',
                              }}
                            >
                              {conversation.lastMessage}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              color="text.secondary"
                              sx={{ 
                                fontWeight: conversation.unreadCount > 0 ? 'bold' : 'normal',
                              }}
                            >
                              {conversation.lastMessageTime}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))
              ) : (
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    No conversations found
                  </Typography>
                </Box>
              )}
            </List>
          </Paper>
        </Grid>
        
        {/* Chat Area */}
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0} 
            sx={{ 
              height: '100%',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              bgcolor: selectedConversation ? 'white' : '#f5f5f7'
            }}
          >
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <Box 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)' 
                  }}
                >
                  <Avatar 
                    src={selectedConversation.brandLogo} 
                    alt={selectedConversation.brandName} 
                    sx={{ mr: 2 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {selectedConversation.brandName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Online
                    </Typography>
                  </Box>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                
                {/* Messages */}
                <Box 
                  sx={{ 
                    p: 2, 
                    flexGrow: 1, 
                    overflowY: 'auto',
                    backgroundColor: '#f9f9f9',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {messages[selectedConversation.id]?.map((message) => (
                    <Box key={message.id} sx={{ mb: 2, display: 'flex', flexDirection: 'column' }}>
                      <ChatBubble isUser={message.sender === 'influencer'}>
                        {message.content}
                      </ChatBubble>
                      <MessageTime sx={{ alignSelf: message.sender === 'influencer' ? 'flex-end' : 'flex-start' }}>
                        {message.timestamp}
                      </MessageTime>
                    </Box>
                  ))}
                </Box>
                
                {/* Message Input */}
                <Box 
                  sx={{ 
                    p: 2, 
                    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: 'white', 
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <IconButton color="primary">
                        <AttachFileIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton color="primary">
                        <ImageIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs>
                      <TextField
                        fullWidth
                        placeholder="Type a message..."
                        variant="outlined"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        multiline
                        maxRows={4}
                        size="small"
                      />
                    </Grid>
                    <Grid item>
                      <IconButton 
                        color="primary" 
                        onClick={handleSendMessage}
                        disabled={messageInput.trim() === ''}
                        sx={{
                          backgroundColor: messageInput.trim() !== '' ? '#151c2c' : 'transparent',
                          color: messageInput.trim() !== '' ? 'white' : 'rgba(0, 0, 0, 0.26)',
                          '&:hover': {
                            backgroundColor: messageInput.trim() !== '' ? '#2a3549' : 'transparent',
                          }
                        }}
                      >
                        <SendIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </>
            ) : (
              // Empty state when no conversation is selected
              <Box 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center', 
                  alignItems: 'center',
                  p: 3
                }}
              >
                <Box
                  component="img"
                  src="https://via.placeholder.com/200"
                  alt="Empty chat"
                  sx={{ mb: 3, opacity: 0.5, width: 200, height: 200 }}
                />
                <Typography variant="h6" gutterBottom>
                  Select a conversation
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
                  Choose a brand from the list to view your conversation history
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Messages; 