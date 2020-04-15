import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Deliveries from '~/pages/Deliveries';
import AddDelivery from '~/pages/Deliveries/AddDelivery';
import EditDelivery from '~/pages/Deliveries/EditDelivery';

import DeliveryMen from '~/pages/DeliveryMen';
import AddDeliveryMan from '~/pages/DeliveryMen/AddDeliveryMan';
import EditDeliveryMan from '~/pages/DeliveryMen/EditDeliveryMan';

import Recipient from '~/pages/Recipient';
import AddRecipient from '~/pages/Recipient/AddRecipient';
import EditRecipient from '~/pages/Recipient/EditRecipient';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route
        path="/deliveries/add-delivery"
        exact
        component={AddDelivery}
        isPrivate
      />
      <Route
        path="/deliveries/edit-delivery"
        exact
        component={EditDelivery}
        isPrivate
      />

      <Route path="/deliverymen" exact component={DeliveryMen} isPrivate />
      <Route
        path="/deliverymen/add-deliveryman"
        exact
        component={AddDeliveryMan}
        isPrivate
      />
      <Route
        path="/deliverymen/edit-deliveryman"
        exact
        component={EditDeliveryMan}
        isPrivate
      />

      <Route path="/recipient" exact component={Recipient} isPrivate />
      <Route
        path="/recipient/add-recipient"
        exact
        component={AddRecipient}
        isPrivate
      />
      <Route
        path="/recipient/edit-recipient"
        exact
        component={EditRecipient}
        isPrivate
      />

      <Route path="/problems" exact component={Problems} isPrivate />
      <Route path="" exact component={Deliveries} isPrivate />
    </Switch>
  );
}
