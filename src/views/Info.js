import Button from 'antd/lib/button';
import {Row} from 'antd/lib/grid';
import React from 'react';
import {Link} from 'react-router-dom';

import {
  GITHUB_ANT_DESIGN,
  GITHUB_CREATE_REACT_APP,
  GITHUB_PROJECT,
  GITHUB_REDUX,
  GITHUB_RESELECT,
  ORIGINAL_GENERATOR,
} from 'constants/links';
import ExternalLink from 'components/shared/ExternalLink';
import {HOME} from 'routes/paths';
import {GUTTER} from 'styles/margins';

const links = [
  {content: 'create-react-app', href: GITHUB_CREATE_REACT_APP},
  {content: 'redux', href: GITHUB_REDUX},
  {content: 'reselect', href: GITHUB_RESELECT},
  {content: 'ant-design', href: GITHUB_ANT_DESIGN},
  {content: 'react-wordcloud', href: GITHUB_PROJECT},
];

const InfoSection = ({title, children}) => (
  <section style={styles.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

const Info = () => (
  <div>
    <Row type="flex" justify="end">
      <Link to={HOME}>
        <Button size="small">Back</Button>
      </Link>
    </Row>
    <InfoSection title="Overview">
      <p>
        This is a modernized React + Redux word cloud generator inspired by the
        original generator created by{' '}
        <ExternalLink content="Jason Davies" href={ORIGINAL_GENERATOR} />.
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
        <li>Save or share the wordcloud with your friends!</li>
      </ul>
    </InfoSection>
    <InfoSection title="Libraries">
      <ul>
        {links.map(({content, href}) => (
          <li key={href}>
            <ExternalLink content={<code>{content}</code>} href={href} />
          </li>
        ))}
      </ul>
    </InfoSection>
  </div>
);

const styles = {
  section: {
    paddingBottom: GUTTER,
  },
};

export default Info;
