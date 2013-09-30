//
//  YmagynView.h
//  WebView IOS
//
//  Created by Mathieu MORICEAU on 23/08/13.
//  Copyright (c) 2013 Mathieu MORICEAU. All rights reserved.
//

#import "AppDelegate.h"
#import <Cordova/CDVViewController.h>
#import <Cordova/CDV.h>

@interface YmagynView : CDVPlugin

- (void)closeView:(CDVInvokedUrlCommand*)command;
- (void)hideStatusBar:(CDVInvokedUrlCommand*)command;

@end
