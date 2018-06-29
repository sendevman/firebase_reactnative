# rc-react_native
Retail Companion - React Native

## Add Walkbase Engage SDK

#### iOS  
 * npm install
 * copy the `react-native-ble-manager` and paste into `node_modules`
 * Open the node_modules/react-native-ble-manager/ios folder and drag BleManager.xcodeproj into your Libraries group.
 * Check the "Build Phases"of your project and add "libBleManager.a" in the "Link Binary With Libraries" section.
 * Check the "Capabilities" of your project and Enable the "Background Modes", check the "Location updates", "Uses Bluetooth LE accessories", "Background fetch"
 
