package com.sugo.project.sugoapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class Login extends AppCompatActivity {
    EditText e1, e2;
    Button b1;
    DatabaseHelper db;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        db = new DatabaseHelper(this);
        e1 = findViewById(R.id.idnum1);
        e2 = findViewById(R.id.pw2);
        b1 = findViewById(R.id.login1);
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String idnum = e1.getText().toString();
                String password = e2.getText().toString();
                Boolean chklogin = db.login(idnum,password);
                if (chklogin==true)
                    Toast.makeText(getApplicationContext(),"Login Success",Toast.LENGTH_LONG).show();
                else
                    Toast.makeText(getApplicationContext(),"Login Failed",Toast.LENGTH_SHORT).show();
            }
        });
    }
}