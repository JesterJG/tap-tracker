import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './components/App';
import LoadingView from './components/LoadingView';
import { persistor, store } from './store';
import { render, fireEvent} from "@testing-library/react";

const app = <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>;

describe('App level tests', () => {

  it('Renders correctly without crashing', () => {
    const { debug, getByText, getByLabelText, getByDisplayValue} = render(app);

    expect(getByText("Welcome to TapTracker")).not.toBeNull();
    expect(getByText("Trackers:")).not.toBeNull();
    expect(getByText("New Tracker")).not.toBeNull();
    expect(getByText("Log List")).not.toBeNull();
    expect(getByDisplayValue("Tracker1")).not.toBeNull();
    expect(getByDisplayValue("Tracker2")).not.toBeNull();
  });

  it('Renaming a tracker succeeds', () => {
    const { getByText, getByLabelText, getByDisplayValue} = render(app);
    const input = getByDisplayValue("Tracker1");

    fireEvent.change(input, { target: { value: "Jester"}});
    expect(getByDisplayValue("Jester")).not.toBeNull();
  });

  it('Adding a tracker succeeds', () => {
    const { getByText, getByLabelText, getByDisplayValue} = render(app);

    fireEvent.click(getByText("New Tracker"));
    expect(getByDisplayValue("NewTracker")).not.toBeNull();

  });

  it('Deleting a tracker succeeds', () => {
    const { getAllByText, getByText, getByLabelText, getByDisplayValue, queryByDisplayValue} = render(app);

    expect(queryByDisplayValue("Jester")).not.toBeNull();
    fireEvent.click(getAllByText("Delete")[0]);
    expect(queryByDisplayValue("Jester")).toBeNull();

  });
});
