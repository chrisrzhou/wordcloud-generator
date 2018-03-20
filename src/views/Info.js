import Button from 'antd/lib/button';
import {Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import ExternalLink from 'components/shared/ExternalLink';
import * as links from 'constants/links';
import {HOME} from 'routes/paths';
import {GUTTER} from 'styles/dimensions';

const libraryLinks = [
  {content: 'create-react-app', href: links.GITHUB_CREATE_REACT_APP},
  {content: 'redux', href: links.GITHUB_REDUX},
  {content: 'redux-arc', href: links.GITHUB_REDUX_ARC},
  {content: 'reselect', href: links.GITHUB_RESELECT},
  {content: 'ant-design', href: links.GITHUB_ANT_DESIGN},
  {content: 'react-wordcloud', href: links.GITHUB_PROJECT},
];

const styles = {
  section: {
    paddingBottom: GUTTER,
  },
};

const InfoSection = ({title, children}) => (
  <section style={styles.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default () => (
  <div style={styles.main}>
    <Row type="flex" justify="end">
      <Link to={HOME}>
        <Button icon="arrow-left" shape="circle" size="small" />
      </Link>
    </Row>
    <InfoSection title="Overview">
      <p>
        This is a modernized React + Redux word cloud generator inspired by the
        original generator created by{' '}
        <ExternalLink content="Jason Davies" href={links.ORIGINAL_GENERATOR} />.
      </p>
    </InfoSection>
    <InfoSection title="How to Use">
      <ul>
        <li>
          Copy/paste/edit text or upload a text file in the{' '}
          <strong>Text Panel</strong>.
        </li>
        <li>
          Tweak the wordcloud using the <strong>Properties Panel</strong>
        </li>
        <li>
          Click on the wordcloud words to highlight words in the text input.
        </li>
        <li>Save and share the wordcloud with your friends!</li>
      </ul>
    </InfoSection>
    <InfoSection title="Libraries">
      <ul>
        {libraryLinks.map(({content, href}) => (
          <li key={href}>
            <ExternalLink content={<code>{content}</code>} href={href} />
          </li>
        ))}
      </ul>
    </InfoSection>
  </div>
);
