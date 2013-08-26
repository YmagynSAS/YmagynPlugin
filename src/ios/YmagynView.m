//
//  YmagynView.m
//  WebView IOS
//
//  Created by Mathieu MORICEAU on 23/08/13.
//  Copyright (c) 2013 Mathieu MORICEAU. All rights reserved.
//

#import "YmagynView.h"

@implementation YmagynView

- (void)closeView:(CDVInvokedUrlCommand*)command
{
    [self.viewController dismissViewControllerAnimated:YES completion:nil];
}

@end
