
# react-native-walkbase-engage

## Getting started

`$ npm install react-native-walkbase-engage --save`

### Mostly automatic installation

`$ react-native link react-native-walkbase-engage`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-walkbase-engage` and add `RNWalkbaseEngage.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNWalkbaseEngage.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNWalkbaseEngagePackage;` to the imports at the top of the file
  - Add `new RNWalkbaseEngagePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-walkbase-engage'
  	project(':react-native-walkbase-engage').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-walkbase-engage/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-walkbase-engage')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNWalkbaseEngage.sln` in `node_modules/react-native-walkbase-engage/windows/RNWalkbaseEngage.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Walkbase.Engage.RNWalkbaseEngage;` to the usings at the top of the file
  - Add `new RNWalkbaseEngagePackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNWalkbaseEngage from 'react-native-walkbase-engage';

// TODO: What to do with the module?
RNWalkbaseEngage;
```
  