import { CardContent, Typography, Box } from '@mui/material';

export const Flashcard = ({ question, answer, isFlipped, handleFlip }) => {
  return (
    <Box
      onClick={handleFlip}
      sx={{
        width: '100%',
        height: '150px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
        transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: 'white',
          border: '2px solid #ccc',
        }}
      >
        <CardContent>
          <Typography variant="h6">{question}</Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '80%',
          backfaceVisibility: 'hidden',
          transform: 'rotateX(180deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'white',
          border: '2px solid #ccc',
        }}
      >
        <CardContent>
          <Typography variant="h6">{answer}</Typography>
        </CardContent>
      </Box>
    </Box>
  )
}