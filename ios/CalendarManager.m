//
//  CalendarManager.m
//  RetailCompanion
//
//  Created by Anik Hasan on 1/18/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <CoreBluetooth/CoreBluetooth.h>
#import <React/RCTLog.h>
@import WalkbaseEngageSDK;

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  UIDevice *currentDevice = [UIDevice currentDevice];
  [[CBCentralManager alloc] initWithDelegate:self queue:nil];

  NSString *deviceId = [[currentDevice identifierForVendor] UUIDString];
  [WBEngageManager sharedInstance].debugMode = YES;
  [WBEngageManager startWithAPIKey:@"VZHkscRFhAjkScc"];
  [WBEngageManager setUserIdentifier:deviceId];
   [WBEngageManager sharedInstance].delegate = self;
  RCTLogInfo(@"call from javascript %@ at %@", name, location);
}

@end
