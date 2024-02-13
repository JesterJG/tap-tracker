import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Tracker from './tracker.jsx'


describe('Tracker component tests', () => {

  it('Renders correctly without crashing', () => {
    const tracker = {
      id: 4,
      name: "Jester",
      value: 3
    };
    const trackerComp = <Tracker
      onIncr={() => {}}
      onDecr={() => {}}
      onReset={() => {}}
      onDelete={() => {}}
      onRename={() => {}}
      tracker={tracker}  />;
    const { getByText, getByDisplayValue} = render(trackerComp);

    expect(getByDisplayValue("Jester")).not.toBeNull();
    expect(getByText("Current value: 3")).not.toBeNull();

  });

  it('OnIncr Callback works', () => {
      const tracker = {
        id: 4,
        name: "Jester",
        value: 3
      };
      const onIncrFn = jest.fn();
      const onDecrFn = jest.fn();
      const onResetFn = jest.fn();
      const onDeleteFn = jest.fn();
      const onRenameFn = jest.fn();
      const trackerComp = <Tracker
        onIncr={onIncrFn}
        onDecr={onDecrFn}
        onReset={onResetFn}
        onDelete={onDeleteFn}
        onRename={onRenameFn}
        tracker={tracker}  />;
      const { getByText, getByLabelText, getByDisplayValue} = render(trackerComp);

      fireEvent.click(getByText("+"));
      expect(onIncrFn).toBeCalled();
      expect(onDecrFn).not.toBeCalled();
      expect(onResetFn).not.toBeCalled();
      expect(onDeleteFn).not.toBeCalled();
      expect(onRenameFn).not.toBeCalled();
    });

    it('OnDecr Callback works', () => {
      const tracker = {
        id: 4,
        name: "Jester",
        value: 3
      };
      const onIncrFn = jest.fn();
      const onDecrFn = jest.fn();
      const onResetFn = jest.fn();
      const onDeleteFn = jest.fn();
      const onRenameFn = jest.fn();
      const trackerComp = <Tracker
        onIncr={onIncrFn}
        onDecr={onDecrFn}
        onReset={onResetFn}
        onDelete={onDeleteFn}
        onRename={onRenameFn}
        tracker={tracker}  />;
      const { getByText, getByLabelText, getByDisplayValue} = render(trackerComp);

      fireEvent.click(getByText("-"));
      expect(onIncrFn).not.toBeCalled();
      expect(onDecrFn).toBeCalled();
      expect(onResetFn).not.toBeCalled();
      expect(onDeleteFn).not.toBeCalled();
      expect(onRenameFn).not.toBeCalled();
    });

    it('OnReset Callback works', () => {
        const tracker = {
          id: 4,
          name: "Jester",
          value: 3
        };
        const onIncrFn = jest.fn();
        const onDecrFn = jest.fn();
        const onResetFn = jest.fn();
        const onDeleteFn = jest.fn();
        const onRenameFn = jest.fn();
        const trackerComp = <Tracker
          onIncr={onIncrFn}
          onDecr={onDecrFn}
          onReset={onResetFn}
          onDelete={onDeleteFn}
          onRename={onRenameFn}
          tracker={tracker}  />;
        const { getByText, getByLabelText, getByDisplayValue} = render(trackerComp);

      fireEvent.click(getByText("Reset"));
      expect(onIncrFn).not.toBeCalled();
      expect(onDecrFn).not.toBeCalled();
      expect(onResetFn).toBeCalled();
      expect(onDeleteFn).not.toBeCalled();
      expect(onRenameFn).not.toBeCalled();
    });
  it('OnDelete Callback works', () => {
      const tracker = {
        id: 4,
        name: "Jester",
        value: 3
      };
      const onIncrFn = jest.fn();
      const onDecrFn = jest.fn();
      const onResetFn = jest.fn();
      const onDeleteFn = jest.fn();
      const onRenameFn = jest.fn();
      const trackerComp = <Tracker
        onIncr={onIncrFn}
        onDecr={onDecrFn}
        onReset={onResetFn}
        onDelete={onDeleteFn}
        onRename={onRenameFn}
        tracker={tracker}  />;
      const { getByText, getByLabelText, getByDisplayValue} = render(trackerComp);

      fireEvent.click(getByText("Delete"));
      expect(onIncrFn).not.toBeCalled();
      expect(onDecrFn).not.toBeCalled();
      expect(onResetFn).not.toBeCalled();
      expect(onDeleteFn).toBeCalled();
      expect(onRenameFn).not.toBeCalled();
    });
    it('OnRename Callback works', () => {
        const tracker = {
          id: 4,
          name: "Jester",
          value: 3
        };
        const onIncrFn = jest.fn();
        const onDecrFn = jest.fn();
        const onResetFn = jest.fn();
        const onDeleteFn = jest.fn();
        const onRenameFn = jest.fn();
        const trackerComp = <Tracker
          onIncr={onIncrFn}
          onDecr={onDecrFn}
          onReset={onResetFn}
          onDelete={onDeleteFn}
          onRename={onRenameFn}
          tracker={tracker}  />;
        const { getByText, getByLabelText, getByDisplayValue} = render(trackerComp);

      const input = getByDisplayValue("Jester");
      fireEvent.change(input, { target: { value: "ChangedIt"}});
      expect(onIncrFn).not.toBeCalled();
      expect(onDecrFn).not.toBeCalled();
      expect(onResetFn).not.toBeCalled();
      expect(onDeleteFn).not.toBeCalled();
      expect(onRenameFn).toBeCalled();
  });

});
