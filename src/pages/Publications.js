import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Publications/Cell';
import data from '../data/publications';

const Publications = () => (
  <Main
    title="Publications and Patents"
    description="Learn about Qian Cheng's publications and patents."
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/publications">Publications and Patents</Link></h2>
          <p>A selection of publications and patents</p>
        </div>
      </header>
      {data.map((section) => section.items.length > 0 && (
        <section key={section.section}>
          <h3>{section.section}</h3>
          {section.items.map((item) => (
            <Cell
              data={item}
              key={item.title}
            />
          ))}
        </section>
      ))}
    </article>
  </Main>
);

export default Publications;
