import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/UseWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://www.instagram.com/c4rdos0_/">UI Clone</a>
          </li>
          <li>
            <a href="https://www.instagram.com/c4rdos0_/">made with 🖤</a>
          </li>
          <li>
            <a href="https://www.instagram.com/c4rdos0_/">by Vinicius Cardoso</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
