import { Component } from 'react';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../images/planet.svg';
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 70px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    bottom: 350px;
    left: 225px;
  }
  ${Image}:nth-child(4) {
    bottom: 190px;
    right: 75px;
  }
`;

class AnimationPage extends Component {
    render() {
        const leftPhase = {
            'hidden': {opacity : 0, x: -100},
            'visible': {opacity : 1, x: 0}
        }

        return (
            <div className="animationPage" id="space">
                <div className="text">
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}
                    >
                        Space
                    </motion.h1>
                    <motion.p
                        variants={leftPhase}
                        initial='hidden'
                        animate='visible'
                        transition={{duration:1}}
                    >
                        Try moving the planets around
                    </motion.p>
                </div>
                <motion.button
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9, color: 'black',  backgroundColor: '#67F6E7', border: 'none'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                >
                    Touch Me
                </motion.button>
                <ColumnRight className="planets">
                    <Image src={PlanetOne} 
                        drag={true}
                        initial={{opacity : 0, y: -100}}
                        animate={{opacity: 1, y: 0, transition: 1}}
                    />
                    <Image src={PlanetTwo} 
                        drag={true}
                        dragConstraints={{left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{opacity : 0, x: 100}}
                        animate={{opacity: 1, transition: 1}}
                    />
                    <Image src={PlanetThree} 
                        drag={true}
                        ragConstraints={{left: 100, right: 0, top: 0, bottom: 50 }}
                        initial={{opacity : 0, x: -100}}
                        animate={{opacity: 1, x: 0, transition: 1}}
                    />
                    <Image src={PlanetFour} 
                        drag={true}
                        initial={{opacity : 0, y: 100}}
                        animate={{opacity: 1, transition: 1}}
                    />
                </ColumnRight>
            </div>
        )
    }
}

export default AnimationPage;