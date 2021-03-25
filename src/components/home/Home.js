import React from "react";
import { useTrail, animated } from "react-spring";
import PROJECTS from "./projects";
import "./Home.style.scss";
import { Button, Icon } from 'semantic-ui-react'

const GridItem = ({ title, price }) => (
  <div className="grid-item">
    <h3>{title}</h3>
    <p>RS. {price}</p>
  </div>
);

const GridList = () => {
  return (
    <div className="container">
      {PROJECTS.map(p => (
        <GridItem title={p.title} price={p.price} />
      ))}
    </div>
  );
};
const config = { tension: 450, friction: 60 };

function Home({history}) {
  const trail = useTrail(PROJECTS.length, {
    config,
    opacity: 1,
    width: 220,
    height: 240,
    background: "#1b2a56",
    from: { opacity: 0, width: 175 }
  });
  return (
      <div className="homeBody">
        <h1>My Practice</h1>
      <div className="container">    
      {trail.map((props, index) => (
        <animated.div
          className="grid-item"
          style={props}
          key={PROJECTS[index].id}
        >
          <Icon className="cusIcon" name='code' />
          <div className="cusTitle">{PROJECTS[index].title}</div>
          <p className="cusDay">{PROJECTS[index].day}</p>         
          <Button animated='fade' className="cusButton" 
            onClick = {()=>history.push(PROJECTS[index].route)}
          >
                <Button.Content visible>Visit</Button.Content>
                <Button.Content hidden>Let's Go</Button.Content>
            </Button>
          {console.log(props)}
        </animated.div>
      ))}
    </div></div>
  );
}

export default Home;
