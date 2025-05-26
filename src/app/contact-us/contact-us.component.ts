// contact-us.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitting = false;
  submitSuccess = false;
  submitError = false;

  async onSubmit() {
    this.submitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // You'll get this from EmailJS

      const response = await emailjs.send(
        "YOUR_SERVICE_ID", // You'll get this from EmailJS
        "YOUR_TEMPLATE_ID", // You'll get this from EmailJS
        {
          to_email: "3DEnviroserv@gmail.com",
          from_name: this.contactData.name,
          from_email: this.contactData.email,
          from_phone: this.contactData.phone,
          message: this.contactData.message,
        }
      );

      if (response.status === 200) {
        this.submitSuccess = true;
        this.contactData = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
      } else {
        this.submitError = true;
      }
    } catch (error) {
      console.error('Error sending email:', error);
      this.submitError = true;
    } finally {
      this.submitting = false;
    }
  }
}
