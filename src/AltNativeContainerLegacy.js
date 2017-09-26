/*eslint-disable*/
/**
 * AltNativeContainer.
 *
 * @see AltContainer
 */
import React from 'react-native'
import createReactClass from 'create-react-class';
import mixinContainer from './mixinContainer'
import assign from 'object.assign'

const AltNativeContainer = createReactClass(assign({
  displayName: 'AltNativeContainer',

  render() {
    return this.altRender(React.View)
  }
}, mixinContainer(React)))

export default AltNativeContainer
