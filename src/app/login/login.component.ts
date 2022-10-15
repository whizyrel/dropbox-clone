import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import * as auth from 'firebase/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../landing/landing.component.scss', './login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  public async ngAfterInit() {
    this.signInWithGoogle();
  }

  public signInWithEmailAndPassword() {
    if (this.form.invalid) {
      this.snackBar.open('Kindly provide all information.', 'close', {
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['bg-danger', 'text-white', 'mat-h1'],
      });

      return;
    }

    const { email, password } = this.form.getRawValue();

    this.auth.signInWithEmailAndPassword(email, password).then(result => {
      this.snackBar.open(
        `Welcome ${(result.additionalUserInfo?.profile as any).name}!`,
        'close',
        {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['bg-primary', 'text-white', 'mat-h1'],
        }
      );
    }).catch(error => console.error(`[auth error]`, error));
  }

  public initForm() {
    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public signInWithApple() {}

  public async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');

    await this.startSignInPopup(provider)
      .then((result) => {
        this.snackBar.open(`Welcome ${(result.additionalUserInfo?.profile as any).name}!`, 'close', {
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['bg-primary', 'text-white', 'mat-h1'],
        });
      })
      .catch((error) => console.error(`[auth error]`, error));
  }

  private async startSignInPopup(provider: firebase.auth.GoogleAuthProvider) {
    return await this.auth.signInWithPopup(provider);
  }
}
