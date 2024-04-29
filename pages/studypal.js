import { useState } from 'react';
import styled from 'styled-components';
import Header from "@/components/Nav";

// This Study Pal component was made by Suin Lee

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0; 
`;

const StudyPalContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0; 
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Button = styled.button`
    padding: 15px;
    margin: 5px;
    background-color: #b0c4de;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    flex-grow: 1;

    &:hover {
        background-color: #e0e0e0;
        color: black;
        cursor: pointer;
    }
`;

const QuoteDisplay = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: #f0f0f0; 
    border-radius: 5px;
    font-size: 20px;
`;

const RecommendationDisplay = styled.div`
  margin-top: 10px;
  font-style: italic;
`;

export default function StudyPal() {
    // useState hook to manage the quote and song recommendation state
    const [content, setContent] = useState({quote: '', song: ''});

    // recommendations object maps feelings to the quotes and song recommendations
    const recommendations = {
        "Feeling Stressed": {
            quote: "“Stress acts as an accelerator: it will push you either forward or backward, but you choose which direction.” —Chelsea Erieau",
            song: "Let It Be by The Beatles"
        },
        "Feeling Like Procrastinating": {
            quote: "“You cannot escape the responsibility of tomorrow by evading it today.” –Abraham Lincoln",
            song: "Coconut Mall - Mario Kart Theme by Player One"
        },
        "Feeling Bored": {
            quote: "“There are no uninteresting things, only uninterested people.” —G.K. Chesterton",
            song: "Billionaire (feat. Bruno Mars) by Travie McCoy"
        },
        "Feeling Sad": {
            quote: "“Every situation in life is temporary. So, when life is good, make sure you enjoy and receive it fully. And when life is not so good, remember that it will not last forever and better days are on the way.” —Jenni Young",
            song: "Fix You by Coldplay"
        },
        "Feeling Motivated": {
            quote: "“The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.” —Martin Luther King, Jr.",
            song: "Touch The Sky by Kanye West and Lupe Fiasco"
        }
    };

    // showContent function updates the state with the quote and song based on the feeling
    const showContent = (feeling) => {
        setContent({
            quote: recommendations[feeling].quote,
            song: recommendations[feeling].song
        });
    };

    return (
        <>
            <Header />
            <AppContainer>
                <StudyPalContainer>
                    <h1>Study Pal</h1>
                    <ButtonContainer>
                        {Object.keys(recommendations).map(feeling => (
                            <Button key={feeling} onClick={() => showContent(feeling)}>
                                {feeling}
                            </Button>
                        ))}
                    </ButtonContainer>
                    {content.quote && (
                        <>
                            <QuoteDisplay>{content.quote}</QuoteDisplay>
                            <RecommendationDisplay>Song recommendation: {content.song}</RecommendationDisplay>
                        </>
                    )}
                </StudyPalContainer>
            </AppContainer>
        </>
    );
}
