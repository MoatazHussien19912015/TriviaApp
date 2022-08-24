import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
/* import { getFeaturedArticles, getRecentArticles } from '../../store/actions/articlesActions'; */

const HomePage = () => {
/*  const articles = useSelector(state => state.articlesReducer.articles); */
 const dispatch = useDispatch();
 useEffect(()=>{
     /* dispatch(getFeaturedArticles(1)); */
    /*  dispatch(getRecentArticles(1)); */
     
 }, []);
    return (
        <Card style={{ height: '30vw',  textAlign: 'center'}}>
      
      <Card.Body>
        <Card.Title><h2>
        Welcome to the Trivia Challenge
            </h2></Card.Title>
        <Card.Text>
            <h4 style={{marginTop: '5vw'}}>
            you will be presented with 10 True or False questions
            </h4>
            <h4 style={{marginTop: '5vw'}}>
          Can you score 100%?
            </h4>
        </Card.Text>
       
        
      </Card.Body>
      <div style={{textAlign: 'center'}}>
        <Button variant="primary" style={{position: 'relative', bottom: '50px'}}>BEGIN</Button>
        </div>
    </Card>
    )
}

export default HomePage;
