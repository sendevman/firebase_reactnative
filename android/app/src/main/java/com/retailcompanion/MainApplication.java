package com.retailcompanion;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.brentvatne.react.ReactVideoPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.ninty.system.setting.SystemSettingPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.opensettings.OpenSettingsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.pusherman.networkinfo.RNNetworkInfoPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import io.invertase.firebase.database.RNFirebaseDatabasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReactVideoPackage(),
          new RNDeviceInfo(),
          new SystemSettingPackage(),
          new VectorIconsPackage(),
          new SvgPackage(),
          new RNSpinkitPackage(),
          new LinearGradientPackage(),
          new RNFirebasePackage(),
          new RNFirebaseAuthPackage(),
          new RNFirebaseAnalyticsPackage(),
//            new RNBackgroundGeolocation(),
          new RNFirebaseFirestorePackage(),
          new RNFirebaseDatabasePackage(),
          new OpenSettingsPackage(),
          new RNNetworkInfoPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
