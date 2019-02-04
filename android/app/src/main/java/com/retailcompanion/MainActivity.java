package com.retailcompanion;

import android.Manifest;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.provider.Settings.Secure;
import android.util.Log;

//import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactActivity;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.walkbase.sdk.WalkbaseManager;

//import io.fabric.sdk.android.Fabric;

public class MainActivity extends ReactActivity {
    public WalkbaseManager walkbaseManager;
    private FirebaseAnalytics mFirebaseAnalytics;
    private int PERMISION_REQUEST_CODE = 1111;
    private String apiKey = "VZHkscRFhAjkScc";
    private String android_id;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RetailCompanion";
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        Fabric.with(this, new Crashlytics());
        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);
    }

}
