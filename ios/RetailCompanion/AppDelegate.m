/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

@import WalkbaseEngageSDK;
#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CoreBluetooth/CoreBluetooth.h>
#import <Firebase.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
  NSURL *jsCodeLocation;

//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #ifdef DEBUG
    jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.116:8081/index.bundle?platform=ios&dev=true"];
  #else
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #endif

//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  [FIRApp configure];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RetailCompanion"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  CBCentralManager *centralManager = [[CBCentralManager alloc]
                    initWithDelegate:self
                    queue:dispatch_get_main_queue()
                    options:@{CBCentralManagerOptionShowPowerAlertKey: @(YES)}];
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  [[CBCentralManager alloc] initWithDelegate:self queue:nil];
  UIDevice *currentDevice = [UIDevice currentDevice];
  NSString *deviceId = [[currentDevice identifierForVendor] UUIDString];
  /* Set to display extra debugging information from the Engage SDK. */
  [WBEngageManager sharedInstance].debugMode = YES;
  
  /* Your custom Engage Engine API key. */
  [WBEngageManager startWithAPIKey:@"VZHkscRFhAjkScc"];
  
  /* A custom user id. Setting this is optional. */
  [WBEngageManager setUserIdentifier:deviceId];
  
//  [WBEngageManager sharedInstance].delegate = self;
  return YES;
}
- (void)centralManagerDidUpdateState:(CBCentralManager *)central {
  if (central.state == CBCentralManagerStatePoweredOn) {
    //Do what you intend to do
  } else if(central.state == CBCentralManagerStatePoweredOff) {
    //Bluetooth is disabled. ios pops-up an alert automatically
  }
}
- (void) applicationDidFinishLaunching:(UIApplication *)application
{
  [NSThread sleepForTimeInterval:3.0];
}
@end
