import type { FormTemplate } from '../types';
import { buildContactForm } from './contactForm';
import { buildFeedbackForm } from './feedbackForm';
import { buildLoginForm } from './loginForm';
import { buildRegisterForm } from './registerForm';

export const FORM_TEMPLATES: FormTemplate[] = [
  {
    id: 'contact',
    nameKey: 'template_contact_name',
    descKey: 'template_contact_desc',
    build: buildContactForm,
  },
  {
    id: 'login',
    nameKey: 'template_login_name',
    descKey: 'template_login_desc',
    build: buildLoginForm,
  },
  {
    id: 'register',
    nameKey: 'template_register_name',
    descKey: 'template_register_desc',
    build: buildRegisterForm,
  },
  {
    id: 'feedback',
    nameKey: 'template_feedback_name',
    descKey: 'template_feedback_desc',
    build: buildFeedbackForm,
  },
];
