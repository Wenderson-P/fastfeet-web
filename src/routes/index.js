import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Deliveries from '~/pages/Deliveries';
import SignIn from '~/pages/SignIn';
import DeliveryMen from '~/pages/DeliveryMen';
import Recipient from '~/pages/Recipient';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliverymen" exact component={DeliveryMen} isPrivate />
      <Route path="/recipient" exact component={Recipient} isPrivate />
      <Route path="/problems" exact component={Problems} isPrivate />
      <Route path="" exact component={Deliveries} isPrivate />
    </Switch>
  );
}
