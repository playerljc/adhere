import AllFields from '../../../../../../json/AllFields.json';
import Contact from '../../../../../../json/Contact.json';
import Feedback from '../../../../../../json/Feedback.json';
import LayoutKitchenSink from '../../../../../../json/LayoutKitchenSink.json';
import Login from '../../../../../../json/Login.json';
import ManyFields from '../../../../../../json/ManyFields.json';
import SurveyForm from '../../../../../../json/SurveyForm.json';
import ValidationShowcase from '../../../../../../json/ValidationShowcase.json';
import WidgetGallery from '../../../../../../json/WidgetGallery.json';
import type { DesignValue } from '../../../../../types';
import type { FormTemplate } from '../types';
import { loadTemplateFromJson } from '../utils/loadTemplateFromJson';

function fromJson(json: unknown) {
  return () => loadTemplateFromJson(json as DesignValue);
}

export const FORM_TEMPLATES: FormTemplate[] = [
  {
    id: 'contact',
    nameKey: 'template_contact_name',
    descKey: 'template_contact_desc',
    build: fromJson(Contact),
  },
  {
    id: 'login',
    nameKey: 'template_login_name',
    descKey: 'template_login_desc',
    build: fromJson(Login),
  },
  {
    id: 'register',
    nameKey: 'template_register_name',
    descKey: 'template_register_desc',
    build: fromJson(AllFields),
  },
  {
    id: 'feedback',
    nameKey: 'template_feedback_name',
    descKey: 'template_feedback_desc',
    build: fromJson(Feedback),
  },
  {
    id: 'layout-kitchen-sink',
    nameKey: 'template_layout_name',
    descKey: 'template_layout_desc',
    build: fromJson(LayoutKitchenSink),
  },
  {
    id: 'validation-showcase',
    nameKey: 'template_validation_name',
    descKey: 'template_validation_desc',
    build: fromJson(ValidationShowcase),
  },
  {
    id: 'many-fields',
    nameKey: 'template_many_fields_name',
    descKey: 'template_many_fields_desc',
    build: fromJson(ManyFields),
  },
  {
    id: 'widget-gallery',
    nameKey: 'template_widget_gallery_name',
    descKey: 'template_widget_gallery_desc',
    build: fromJson(WidgetGallery),
  },
  {
    id: 'survey',
    nameKey: 'template_survey_name',
    descKey: 'template_survey_desc',
    build: fromJson(SurveyForm),
  },
];
