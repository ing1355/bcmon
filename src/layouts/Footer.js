import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'BCMON ',
          title: 'BCMON ',
          href: '',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: '',
          blankTarget: true,
        },
        {
          key: 'NM Lab Portal',
          title: 'NM Lab Portal',
          href: 'https://nmlab.korea.ac.kr/',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 NM Lab
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
