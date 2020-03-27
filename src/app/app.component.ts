import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { MyValidators } from './my.validators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  appState = 'on'

  form:  FormGroup

  skills: FormArray
   constructor(private formBuilder: FormBuilder) {}
  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], MyValidators.uniqEmail),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Киев', Validators.required)
      }),
      skills: this.formBuilder.array([])
    })
  }

   submit() {
    if(this.form.valid){
      console.log('Form submitted:', this.form )
      const formData = {...this.form.value}
      console.log('FormData: ', formData)
      this.form.reset()
    }

  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }
    const cityKey = this.form.get('address').get('country').value
    const city = cityMap[cityKey]
    console.log(city)
    this.form.patchValue({ address:{city: city} })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push()
    (this.form.get('skills') as FormArray).push( control)
    // console.log('this.form.get(\'skills\')', (this.form.get('skills') as FormArray).controls)

  }

  handleChange() {
    console.log(this.appState)
  }
}
