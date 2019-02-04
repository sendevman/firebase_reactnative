package com.retailcompanion;

import android.app.Activity;
import android.content.pm.PackageManager;
import android.provider.Settings;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.walkbase.sdk.WalkbaseManager;

public class WalkbaseModule extends ReactContextBaseJavaModule {

    private String apiKey = "VZHkscRFhAjkScc";

    public WalkbaseModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WalkbaseModule";
    }

    @ReactMethod
    public void initWalkbase() {
        // Toast.makeText(getReactApplicationContext(), "Initialising walkbase", Toast.LENGTH_LONG).show();
        MainActivity activity = (MainActivity) getCurrentActivity();
        String android_id = Settings.Secure.getString(getCurrentActivity().getContentResolver(),
                Settings.Secure.ANDROID_ID);

        WalkbaseManager walkbaseManager = new WalkbaseManager(getCurrentActivity());
        walkbaseManager.startWithApiKey(apiKey);
        walkbaseManager.setUserID(android_id);
        activity.walkbaseManager = walkbaseManager;
    }
}
