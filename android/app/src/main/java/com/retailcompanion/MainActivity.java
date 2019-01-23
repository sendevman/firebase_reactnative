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

//import com.crashlytics.android.Crashlytics;
import com.facebook.react.ReactActivity;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.walkbase.sdk.WalkbaseManager;

//import io.fabric.sdk.android.Fabric;

public class MainActivity extends ReactActivity {
    private WalkbaseManager walkbaseManager;
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

//    private int havePermissions() {
//        return ContextCompat.checkSelfPermission(this, android.Manifest.permission.ACCESS_FINE_LOCATION);
//    }

//    private void requestPermissions() {
//        ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION},PERMISION_REQUEST_CODE);
//    }

//    private void showRequestPermissionsSnackbar() {
//    }

//    private void showLinkToSettingsSnackbar() {
//        AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
//        builder.setTitle("Permission Request!");
//        builder.setMessage("We need permissions to access your location.");
//        builder.setPositiveButton("Grant", new DialogInterface.OnClickListener() {
//            @Override
//            public void onClick(DialogInterface dialog, int which) {
//                dialog.cancel();
//                ActivityCompat.requestPermissions(MainActivity.this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, PERMISION_REQUEST_CODE);
//            }
//        });
//        builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
//            @Override
//            public void onClick(DialogInterface dialog, int which) {
//                dialog.cancel();
//            }
//        });
//        builder.show();
//    }

//    @Override
//    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
//        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
//        if(requestCode != PERMISION_REQUEST_CODE) {
//            return;
//        }
//
//        if(requestCode == PERMISION_REQUEST_CODE) {
//            if (grantResults.length > 0
//                    && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
//                walkbaseManager.startWithApiKey(apiKey);
//                walkbaseManager.setUserID(android_id);
//            }else{
//                String permission = permissions[0];
//                if (shouldShowRequestPermissionRationale(permission)) {
//                    showRequestPermissionsSnackbar();
//                } else {
//                    showLinkToSettingsSnackbar();
//                }
//            }
//        }
//    }

    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
        // walkbaseManager.onResume();
    }

    @Override
    protected void onStop() {
        super.onStop();
        // walkbaseManager.onStop();
    }
}
