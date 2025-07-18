import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [emailCount, setEmailCount] = useState('');
  const [tone, setTone] = useState('');
  const [generateReply, setGenerateReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError(''); 

    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent: emailCount,
        tone: tone,
      });

      setGenerateReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
      setLoading(false);
    } catch (error) {
      setError('Failed to generate reply. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
     
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Email Reply Generator
      </Typography>


      <Box sx={{ mx: 3, mt: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          label="Original Email Content"
          value={emailCount || ''}
          onChange={(e) => setEmailCount(e.target.value)}
          sx={{ mb: 3 }}
          placeholder="Paste the email content here..."
        />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Tone (optional)</InputLabel>
          <Select
            value={tone || ''}
            onChange={(e) => setTone(e.target.value)}
            label="Tone (optional)"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
          sx={{ py: 1.5 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
        </Button>
      </Box>

      {error && (
        <Typography variant="body1" color="error" sx={{ mt: 3, textAlign: 'center' }}>
          {error}
        </Typography>
      )}

      {generateReply && (
        <Box sx={{ mt: 4, p: 3, border: '1px solid #ccc', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
          <Typography variant="h6" gutterBottom>
            Generated Reply
          </Typography>
          <TextField
            fullWidth
            multiline
            aria-readonly
            rows={6}
            value={generateReply}
            sx={{ mt: 2 }}
          />
        </Box>
      )}
    </Container>
  );
}

export default App;
