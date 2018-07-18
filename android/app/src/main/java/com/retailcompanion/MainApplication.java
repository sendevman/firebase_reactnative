package com.retailcompanion;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.ninty.system.setting.SystemSettingPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.opensettings.OpenSettingsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
//import com.transistorsoft.rnbackgroundgeolocation.RNBackgroundGeolocation;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactlibrary.RNWalkbaseEngagePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private int PERMISSIONS_REQUEST_CODE = 1111;
  //private val apiKey = "your api key goes here"
  private String apiKey = "VZHkscRFhAjkScc";//"fiskpinnar"
  private String TAG = "MainActivity";
  private RNWalkbaseEngagePackage walkbase;
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SystemSettingPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
            new RNSpinkitPackage(),
            new LinearGradientPackage(),
            new RNFirebasePackage(),
//            new RNBackgroundGeolocation(),
            new RNFirebaseFirestorePackage(),
            new OpenSettingsPackage(),
            new RNWalkbaseEngagePackage()
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
