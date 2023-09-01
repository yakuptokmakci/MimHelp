import React from 'react';
import { Button, Result } from 'antd';
const Error404 = () => (
  <Result
    title="Aradığınız Sayfa Mevcut Değil !!!"
    subTitle="The Page You Are Looking for is not exist"
    extra={
      <Button type="primary" key="console">
        Ana Sayfa
      </Button>
    }
  />
);
export default Error404;