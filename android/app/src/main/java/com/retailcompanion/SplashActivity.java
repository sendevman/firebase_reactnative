package com.retailcompanion;

import android.app.Activity;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;

public class SplashActivity extends Activity {
    AsyncTask<Void, Integer, Void> timerTask;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        timerTask = new AsyncTask<Void, Integer, Void>() {
            @Override
            protected Void doInBackground(Void... voids) {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e){
                    e.printStackTrace();
                }
                return null;
            }
            @Override
            protected void onPostExecute(Void result) {
                startActivity(new Intent(SplashActivity.this, MainActivity.class));
                finish();
                super.onPostExecute(result);
            }
        };
        timerTask.execute();
    }

    @Override
    protected void onPause() {
        timerTask.cancel(true);
        super.onPause();
    }
}
