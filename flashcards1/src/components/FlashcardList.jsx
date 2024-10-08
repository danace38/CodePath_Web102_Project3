
import React, { useState } from 'react';
import { Flashcard } from './Flashcard';
import { Button, Container, Typography, Box, GlobalStyles } from '@mui/material';

export const FlashcardList = () => {
  const flashcards = [
    { question: 'What year was the United States established?', answer: '1776' },
    { question: 'Who was the first president of the United States?', answer: 'George Washington' },
    { question: 'What was the date of the Boston Tea Party?', answer: 'Dec. 16, 1773' },
    { question: 'Who do historians believe created the first American flag?', answer: 'Betsy Ross' },
    { question: 'What was the first American state? ', answer: 'Delaware' },
    { question: 'How many original British colonies existed in America?', answer: '13' },
    { question: 'Who was the first Black woman to win an Olympic gold medal?', answer: 'Alice Coachman' },
    { question: 'Which Founding Father invented bifocal glasses?', answer: 'Benjamin Franklin' },
    { question: 'In the U.S. presidential election of 1968, which Democratic candidate did Richard Nixon defeat?', answer: 'Hubert Humphrey' },
    { question: 'Which U.S. state was once part of Mexico?', answer: 'Texas' }
  ]

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
    setIsFlipped(false);
    setUserGuess('');
    setIsCorrect(null);
  }

  const handlePreviousCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? flashcards.length - 1 : prevCard - 1
    )
    setIsFlipped(false);
    setUserGuess('');
    setIsCorrect(null);
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleGuessSubmit = () => {
    const correct = userGuess.toLowerCase() === flashcards[currentCard].answer.toLowerCase();
    setIsCorrect(correct);
    setIsFlipped(true);
  }

  return (
    <>
      <GlobalStyles
        styles={{
          html: { height: '100%' },
          body: { height: '100%', 
            margin: 0, 
            padding: 0, 
            overflow: 'hidden',
            backgroundImage: 'url("https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        }}
      />
      <Container
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: '5px solid red',
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: '10px', fontWeight: 'bold', fontStyle: 'italic' }}>
          USA History Quiz
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
          How much do you know about USA history? Let's test your knowledge.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '25px', }}>
          You have {flashcards.length} cards to review.
        </Typography>

        <Box
          sx={{
            width: { xs: '70%', sm: '70%', md: '60%', lg: '50%' },
            perspective: '1000px',
            paddingBottom: '40px',
          }}
        >
          <Flashcard
            question={flashcards[currentCard].question}
            answer={flashcards[currentCard].answer}
            isFlipped={isFlipped}
            handleFlip={handleFlip}
            isCorrect={isCorrect}
          />
        </Box>

        <Box sx={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess"
            style={{ padding: '10px', fontSize: '18px' }}
          />
          <Button
            onClick={handleGuessSubmit}
            variant="contained"
            sx={{
              padding: '10px 15px',
              backgroundColor: '#4CAF50',
              '&:hover': {
                backgroundColor: '#45a049',
              },
            }}
          >
            Submit
          </Button>
        </Box>

        <Box sx={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
          <Button
            onClick={handlePreviousCard}
            variant="contained"
            sx={{
              padding: '10px 20px',
              backgroundColor: '#6f42c1',
              '&:hover': {
                backgroundColor: '#5a32a3',
              },
            }}
          >
            Previous
          </Button>
          <Button
            onClick={handleNextCard}
            variant="contained"
            sx={{
              padding: '10px 20px',
              backgroundColor: '#ff4136',
              '&:hover': {
                backgroundColor: '#c0392b',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </>
  )
}
