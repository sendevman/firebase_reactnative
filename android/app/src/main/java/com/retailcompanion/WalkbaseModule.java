package com.retailcompanion;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class WalkbaseModule extends ReactContextBaseJavaModule {

    public WalkbaseModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "WalkbaseModule";
    }

    @ReactMethod
    public void initWalkbase() {
        Toast.makeText(getReactApplicationContext(), "Initialising walkbase", Toast.LENGTH_LONG).show();
    }
}
