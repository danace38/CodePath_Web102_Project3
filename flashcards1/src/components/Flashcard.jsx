import { CardContent, Typography, Box } from '@mui/material';

export const Flashcard = ({ question, answer, isFlipped, handleFlip, isCorrect }) => {
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
          height: '70%',
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
          height: '100%',
          backfaceVisibility: 'hidden',
          transform: 'rotateX(180deg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: isCorrect === null ? 'white' : (isCorrect ? '#e6ffe6' : '#ffe6e6'),
          border: '2px solid #ccc',
        }}
      >
        <CardContent>
          <Typography variant="h6">{answer}</Typography>
          {isCorrect !== null && (
            <Typography variant="body1" sx={{ marginTop: '10px', color: isCorrect ? 'green' : 'red' }}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </Typography>
          )}
        </CardContent>
      </Box>
    </Box>
  )
}