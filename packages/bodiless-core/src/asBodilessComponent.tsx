import React, { ComponentType as CT } from 'react';
import {
  pick, omit, identity, flowRight,
} from 'lodash';
import withNode, { withNodeKey } from './withNode';
import {
  withNodeDataHandlers, withoutProps, withContextActivator, withLocalContextMenu,
} from './hoc';
import { ifReadOnly, ifEditable } from './withEditToggle';
import withEditButton, { EditButtonOptions } from './withEditButton';
import withData from './withData';

/**
 * Options for making a component "bodiless".
 */
type Options<P, D> = EditButtonOptions<P, D> & {
  /**
   * The event used to activate the edit button.  Default is 'onClick'
   */
  activateEvent?: string,
  /**
   * An optional component to use as a wrapper in edit mode. Useful if the underlying component
   * cannot produce an activation event (eg if it does not accept an 'onClick' prop).
   */
  Wrapper?: CT<any>|string,
  /**
   * An object providing default/initial values for the editable props. Should be keyed by the
   * prop name.
   */
  defaultData?: D,
};

type HOC<P, Q> = (Component: CT<P>) => CT<Q>;
type BodilessProps = {
  nodeKey?: string,
  nodeCollection?: string,
};
type AsBodiless<P, D> = (nodeKey?: string, defaultData?: D) => HOC<P, P & BodilessProps>;

/**
 * Given an event name and a wrapper component, provides an HOC which will wrap the base component
 * the wrapper, passing the event prop to the wrapper, and all other props to the base compoent.
 * @param event The event name.
 * @param Wrapper The component to wrap with
 * @private
 */
const withActivatorWrapper = <P extends object>(event: string, Wrapper: CT<any>|string) => (
  (Component: CT<P>) => (props: P) => {
    const eventProp = pick(props, event);
    const rest = omit(props, event) as P;
    return (
      <Wrapper {...eventProp}>
        <Component {...rest} />
      </Wrapper>
    );
  }
);

/**
 * Makes a component "Bodiless" by connecting it to the Bodiless-jS data flow and giving it
 * a form which can be used to edit its props. Returns a standard `asBodiless...` function,
 * which takes `nodeKey` and `defaultData` parameters, and returns an HOC which yields an editable
 * version of the base component.
 *
 * @param options An object describing how this component should be made editable.
 */
// eslint-disable-next-line max-len
const asBodilessComponent = <P extends object, D extends object>(options: Options<P, D>): AsBodiless<P, D> => {
  const {
    activateEvent = 'onClick', Wrapper, defaultData: defaultDataOption = {}, ...rest
  } = options;
  /**
   * A function which produces an HOC that will make a component "Bodilesss".
   * @param nodeKey The nodeKey identifying where the components data will be stored.
   * @param defaultData An object representing the initial/default data. Supercedes any default
   * data provided as an option.
   */
  return (nodeKey?: string, defaultData: D = {} as D) => {
    const finalData = { ...defaultDataOption, ...defaultData };
    return flowRight(
      withNodeKey(nodeKey),
      withNode,
      withNodeDataHandlers(finalData),
      ifReadOnly(
        withoutProps(['setComponentData']),
      ),
      ifEditable(
        withEditButton(rest),
        withContextActivator(activateEvent),
        Wrapper ? withActivatorWrapper(activateEvent, Wrapper) : identity,
        withLocalContextMenu,
      ),
      withData,
    );
  };
};

export default asBodilessComponent;
