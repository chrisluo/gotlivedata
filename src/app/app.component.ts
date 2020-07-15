import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });

  token;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  onSubmit() {
    if (this.form.valid) {
      this.apiService.login(this.form.value.email, this.form.value.password)
      .subscribe((res: any) => {
        this.token = res.token;
      })
    }
  }
}
