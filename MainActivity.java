package com.sugo.project.sugoapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    DatabaseHelper db;
    EditText e1, p1, cp1, e2;
    Button b1, b2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        db = new DatabaseHelper(this);
        e2 = findViewById(R.id.idnum);
        e1 = findViewById(R.id.email);
        p1 = findViewById(R.id.pass);
        cp1 = findViewById(R.id.cpass);
        b1 = findViewById(R.id.btnreg);
        b2 = findViewById(R.id.login2);
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this,Login.class);
                startActivity(i);
            }
        });
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String s1 = e2.getText().toString();
                String s2 = p1.getText().toString();
                String s3 = cp1.getText().toString();
                String s4 = e1.getText().toString();
                if (s1.equals("")||s2.equals("")||s3.equals("")||s4.equals("")){
                    Toast.makeText(getApplicationContext(),"Fields are empty",Toast.LENGTH_SHORT).show();
                }
                else {
                    if (s2.equals(s3)){
                        Boolean chkidnum = db.chkid(s1);
                        if (chkidnum==true){
                            Boolean insert = db.insert(s1,s2,s3);
                            if (insert==true){
                                Toast.makeText(getApplicationContext(),"Registered Successfully",Toast.LENGTH_SHORT).show();
                            }
                        }
                        else {
                            Toast.makeText(getApplicationContext(),"ID Number Already exist",Toast.LENGTH_SHORT).show();
                        }
                    }else {
                        Toast.makeText(getApplicationContext(),"Password do not match",Toast.LENGTH_SHORT).show();
                    }

                }
            }
        });
    }
}