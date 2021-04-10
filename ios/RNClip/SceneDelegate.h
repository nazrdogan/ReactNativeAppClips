//
//  SceneDelegate.h
//  RNClip
//
//  Created by Nazir Dogan on 30.06.2020.
//

#import <UIKit/UIKit.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface SceneDelegate : UIResponder <UIWindowSceneDelegate>

@property (strong, nonatomic) UIWindow * window;
@property (strong, readwrite) NSString * initialLinkUrl;

@end

