import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          return Object.keys(store.notifications).map(key => (
            <Notification
              id={store.notifications[key].id}
              text={store.notifications[key].text}
              seen={store.notifications[key].seen}
              key={store.notifications[key].id}
            />
          ));
        }}
      </Store.Consumer>
    </Flex>
  </Fragment>
);

export default AppPresenter;
