/**
 * 生成联系 / 登录 / 反馈业务场景模板（AllFields.json 同结构）
 *
 * 用法：node packages/adhere-ui-form-design/json/scripts/generateSceneTemplates.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import {
  budgetOptions,
  companySizeOptions,
  departmentSelectOptions,
  environmentRadioOptions,
  i18n,
  industrySelectOptions,
  inquiryTypeOptions,
  productInterestOptions,
  severityRadioOptions,
} from '../i18n/allFieldsStaticData.mjs';
import {
  createAlert,
  createCard,
  createField,
  createFlex,
  createRoot,
  createSubmit,
  createTableGrid,
  createTreeField,
  emailRules,
  requiredRule,
} from './templateKit.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonDir = path.join(__dirname, '..');

function writeJson(fileName, designValue) {
  const outputPath = path.join(jsonDir, fileName);
  fs.writeFileSync(outputPath, `${JSON.stringify(designValue, null, 2)}\n`, 'utf8');
  return outputPath;
}

function t(zh, en, pt, ar) {
  return i18n(zh, en, pt, ar);
}

function requiredItem(message) {
  return {
    require: true,
    rules: requiredRule(message),
  };
}

function inputField(name, label, placeholder, extraFormItem = {}, extraField = {}) {
  return createField('ant-input', {
    name,
    label,
    placeholder,
    formItemProps: extraFormItem,
    fieldProps: { placeholder, ...extraField },
  });
}

function numberField(name, label, extra = {}) {
  return createField('ant-input-number', {
    name,
    label,
    formItemProps: extra.formItemProps,
    fieldProps: extra.fieldProps,
  });
}

function selectField(name, label, placeholder, selectOptions, extraFormItem = {}) {
  return createField('ant-select', {
    name,
    label,
    placeholder,
    formItemProps: extraFormItem,
    fieldProps: { placeholder, selectOptions },
  });
}

function textareaField(name, label, placeholder, extraFormItem = {}) {
  return createField('ant-textarea', {
    name,
    label,
    placeholder,
    colSpan: 2,
    formItemProps: extraFormItem,
    fieldProps: { placeholder, autoSize: true, showCount: true },
  });
}

function sceneCard(title, grids) {
  return createCard(title.zh_CN, title.en_US, [
    createFlex(grids, { fieldProps: { gap: 12 } }),
  ], { title });
}

function buildContactForm() {
  return createRoot([
    sceneCard(
      t('企业信息', 'Company profile', 'Perfil da empresa', 'بيانات الشركة'),
      [
        createTableGrid([
          createAlert(
            t('商务咨询', 'Business inquiry', 'Pedido comercial', 'استفسار تجاري'),
            t(
              '提交后客户经理将在 1 个工作日内联系您，请尽量填写完整以便评估方案。',
              'A sales manager will contact you within 1 business day. Please fill in as much as possible.',
              'Um gestor irá contactá-lo em 1 dia útil. Preencha o máximo possível.',
              'سيتواصل معك مدير المبيعات خلال يوم عمل واحد. يرجى تعبئة أكبر قدر ممكن.',
            ),
          ),
          inputField(
            'company',
            t('公司名称', 'Company name', 'Nome da empresa', 'اسم الشركة'),
            t('请输入公司全称', 'Enter full company name', 'Introduza o nome completo da empresa', 'أدخل الاسم الكامل للشركة'),
            requiredItem(t('请输入公司名称', 'Please enter company name', 'Introduza o nome da empresa', 'يرجى إدخال اسم الشركة')),
          ),
          selectField(
            'industry',
            t('所属行业', 'Industry', 'Setor', 'القطاع'),
            t('请选择行业', 'Select industry', 'Selecione o setor', 'اختر القطاع'),
            industrySelectOptions,
            requiredItem(t('请选择行业', 'Please select industry', 'Selecione o setor', 'يرجى اختيار القطاع')),
          ),
          selectField(
            'companySize',
            t('企业规模', 'Company size', 'Dimensão da empresa', 'حجم الشركة'),
            t('请选择规模', 'Select size', 'Selecione a dimensão', 'اختر الحجم'),
            companySizeOptions,
          ),
          createTreeField('ant-cascader', {
            name: 'region',
            labelZh: '所在地区',
            labelEn: 'Region',
          }),
          inputField(
            'website',
            t('公司网站', 'Company website', 'Site da empresa', 'موقع الشركة'),
            t('请输入公司官网地址', 'Enter company website URL', 'Introduza o URL do site', 'أدخل رابط موقع الشركة'),
          ),
        ]),
      ],
    ),
    sceneCard(
      t('联系人', 'Contact person', 'Pessoa de contacto', 'جهة الاتصال'),
      [
        createTableGrid([
          inputField(
            'contactName',
            t('姓名', 'Name', 'Nome', 'الاسم'),
            t('请输入姓名', 'Enter your name', 'Introduza o nome', 'أدخل الاسم'),
            requiredItem(t('请输入姓名', 'Please enter your name', 'Introduza o nome', 'يرجى إدخال الاسم')),
          ),
          inputField(
            'jobTitle',
            t('职位', 'Job title', 'Cargo', 'المسمى الوظيفي'),
            t('请输入您的职位', 'Enter your job title', 'Introduza o seu cargo', 'أدخل مسماك الوظيفي'),
          ),
          selectField(
            'department',
            t('所属部门', 'Department', 'Departamento', 'القسم'),
            t('请选择部门', 'Select department', 'Selecione o departamento', 'اختر القسم'),
            departmentSelectOptions,
          ),
          createField('phone-with-area-code', {
            name: 'phone',
            label: t('手机号', 'Mobile', 'Telemóvel', 'الجوال'),
            formItemProps: requiredItem(t('请输入手机号', 'Please enter mobile number', 'Introduza o telemóvel', 'يرجى إدخال رقم الجوال')),
          }),
          inputField(
            'email',
            t('工作邮箱', 'Work email', 'E-mail profissional', 'البريد المهني'),
            t('请输入邮箱地址', 'Enter email address', 'Introduza o endereço de e-mail', 'أدخل عنوان البريد الإلكتروني'),
            {
              require: true,
              rules: emailRules(
                t('请输入邮箱', 'Please enter email', 'Introduza o e-mail', 'يرجى إدخال البريد الإلكتروني'),
                t('请输入有效的邮箱地址', 'Please enter a valid email address', 'Introduza um e-mail válido', 'يرجى إدخال بريد إلكتروني صالح'),
              ),
            },
            { type: 'email' },
          ),
          inputField(
            'wechat',
            t('微信号', 'WeChat ID', 'WeChat', 'WeChat'),
            t('选填，便于即时沟通', 'Optional, for instant messaging', 'Opcional, para contacto imediato', 'اختياري للتواصل الفوري'),
          ),
        ]),
      ],
    ),
    sceneCard(
      t('咨询内容', 'Inquiry details', 'Detalhes do pedido', 'تفاصيل الاستفسار'),
      [
        createTableGrid([
          createField('ant-radio-group', {
            name: 'inquiryType',
            label: t('咨询类型', 'Inquiry type', 'Tipo de pedido', 'نوع الاستفسار'),
            formItemProps: requiredItem(t('请选择咨询类型', 'Please select inquiry type', 'Selecione o tipo', 'يرجى اختيار النوع')),
            fieldProps: { selectOptions: inquiryTypeOptions, optionType: 'button' },
          }),
          selectField(
            'budget',
            t('预算范围', 'Budget range', 'Orçamento', 'نطاق الميزانية'),
            t('请选择预算', 'Select budget', 'Selecione o orçamento', 'اختر الميزانية'),
            budgetOptions,
          ),
          createField('ant-date-picker', {
            name: 'expectedDate',
            label: t('期望上线日期', 'Expected go-live date', 'Data prevista de lançamento', 'تاريخ الإطلاق المتوقع'),
          }),
          createField('ant-checkbox-group', {
            name: 'products',
            label: t('关注产品', 'Products of interest', 'Produtos de interesse', 'المنتجات محل الاهتمام'),
            colSpan: 2,
            fieldProps: { selectOptions: productInterestOptions },
          }),
          textareaField(
            'message',
            t('需求说明', 'Requirement details', 'Descrição da necessidade', 'تفاصيل الاحتياج'),
            t('请描述业务场景、现有系统和期望效果', 'Describe the scenario, current systems, and expected outcome', 'Descreva o cenário, sistemas atuais e resultado esperado', 'صف السيناريو والأنظمة الحالية والنتيجة المتوقعة'),
            requiredItem(t('请填写需求说明', 'Please enter requirement details', 'Introduza a descrição', 'يرجى إدخال التفاصيل')),
          ),
          createField('ant-file-upload', {
            name: 'attachments',
            label: t('相关材料', 'Attachments', 'Anexos', 'مرفقات'),
            colSpan: 2,
            fieldProps: { uploadDataSource: { type: 'dynamic' } },
          }),
        ]),
      ],
    ),
    sceneCard(
      t('联系偏好', 'Contact preferences', 'Preferências de contacto', 'تفضيلات التواصل'),
      [
        createTableGrid([
          createField('ant-radio-group', {
            name: 'contactMethod',
            label: t('偏好联系方式', 'Preferred contact method', 'Método de contacto preferido', 'طريقة التواصل المفضلة'),
            fieldProps: {
              selectOptions: {
                type: 'static',
                dataSource: [
                  { label: t('电话', 'Phone', 'Telefone', 'هاتف'), value: 'phone' },
                  { label: t('邮件', 'Email', 'E-mail', 'بريد'), value: 'email' },
                  { label: t('微信', 'WeChat', 'WeChat', 'WeChat'), value: 'wechat' },
                ],
              },
            },
          }),
          createField('ant-time-range-picker', {
            name: 'preferredTime',
            label: t('方便联系时段', 'Preferred time window', 'Horário preferido', 'الفترة المناسبة'),
          }),
          createField('ant-switch', {
            name: 'acceptVisit',
            label: t('接受上门演示', 'Accept on-site demo', 'Aceitar demonstração presencial', 'قبول عرض ميداني'),
          }),
          createField('ant-checkbox', {
            name: 'agreePrivacy',
            label: t('已阅读并同意隐私政策', 'I agree to the privacy policy', 'Aceito a política de privacidade', 'أوافق على سياسة الخصوصية'),
            formItemProps: {
              valuePropName: 'checked',
              ...requiredItem(t('请同意隐私政策', 'Please agree to the privacy policy', 'Aceite a política de privacidade', 'يرجى الموافقة على سياسة الخصوصية')),
            },
          }),
          createSubmit(t('提交咨询', 'Submit inquiry', 'Enviar pedido', 'إرسال الاستفسار'), { block: true }),
        ]),
      ],
    ),
  ]);
}

function buildLoginForm() {
  return createRoot([
    sceneCard(
      t('账号密码登录', 'Password login', 'Início de sessão com palavra-passe', 'تسجيل الدخول بكلمة المرور'),
      [
        createTableGrid([
          createAlert(
            t('企业员工登录', 'Employee sign-in', 'Início de sessão de colaborador', 'تسجيل دخول الموظفين'),
            t(
              '请使用公司分配的账号。连续失败 5 次将锁定 15 分钟。',
              'Use your company account. 5 failed attempts will lock the account for 15 minutes.',
              'Use a conta da empresa. 5 falhas bloqueiam a conta por 15 minutos.',
              'استخدم حساب الشركة. 5 محاولات فاشلة تقفل الحساب لمدة 15 دقيقة.',
            ),
            'warning',
          ),
          inputField(
            'account',
            t('工号 / 邮箱', 'Employee ID / Email', 'ID / E-mail', 'الرقم الوظيفي / البريد'),
            t('请输入工号或企业邮箱', 'Enter employee ID or work email', 'Introduza o ID ou e-mail', 'أدخل الرقم الوظيفي أو البريد'),
            requiredItem(t('请输入账号', 'Please enter account', 'Introduza a conta', 'يرجى إدخال الحساب')),
          ),
          createField('ant-input-password', {
            name: 'password',
            label: t('登录密码', 'Password', 'Palavra-passe', 'كلمة المرور'),
            placeholder: t('请输入登录密码', 'Enter password', 'Introduza a palavra-passe', 'أدخل كلمة المرور'),
            formItemProps: requiredItem(t('请输入密码', 'Please enter password', 'Introduza a palavra-passe', 'يرجى إدخال كلمة المرور')),
            fieldProps: {
              placeholder: t('请输入登录密码', 'Enter password', 'Introduza a palavra-passe', 'أدخل كلمة المرور'),
            },
          }),
          createField('image-captcha', {
            name: 'imageCaptcha',
            label: t('图形验证码', 'Captcha', 'Captcha', 'رمز التحقق'),
            colSpan: 2,
            formItemProps: requiredItem(t('请输入验证码', 'Please enter captcha', 'Introduza o captcha', 'يرجى إدخال رمز التحقق')),
          }),
          createField('ant-switch', {
            name: 'rememberMe',
            label: t('7 天内免登录', 'Keep me signed in for 7 days', 'Manter sessão 7 dias', 'البقاء مسجلاً لمدة 7 أيام'),
          }),
          createField('ant-link', {
            fieldProps: {
              children: t('忘记密码？', 'Forgot password?', 'Esqueceu a palavra-passe?', 'نسيت كلمة المرور؟'),
              href: '#',
            },
          }),
          createSubmit(t('登录', 'Sign in', 'Iniciar sessão', 'تسجيل الدخول'), { block: true }),
        ]),
      ],
    ),
    sceneCard(
      t('手机验证码登录', 'SMS login', 'Início de sessão por SMS', 'تسجيل الدخول برسالة'),
      [
        createTableGrid([
          createField('phone-with-area-code', {
            name: 'mobile',
            label: t('手机号', 'Mobile', 'Telemóvel', 'الجوال'),
            formItemProps: requiredItem(t('请输入手机号', 'Please enter mobile number', 'Introduza o telemóvel', 'يرجى إدخال رقم الجوال')),
          }),
          createField('send-sms', {
            name: 'smsCode',
            label: t('短信验证码', 'SMS code', 'Código SMS', 'رمز الرسالة'),
            formItemProps: requiredItem(t('请输入短信验证码', 'Please enter SMS code', 'Introduza o código SMS', 'يرجى إدخال رمز الرسالة')),
          }),
          createField('ant-input-otp', {
            name: 'otp',
            label: t('动态口令（可选）', 'OTP (optional)', 'OTP (opcional)', 'كلمة مرور لمرة واحدة (اختياري)'),
            colSpan: 2,
          }),
          createSubmit(t('验证并登录', 'Verify and sign in', 'Verificar e iniciar sessão', 'تحقق وسجّل الدخول'), {
            block: true,
          }),
        ]),
      ],
    ),
  ]);
}

function buildFeedbackForm() {
  return createRoot([
    sceneCard(
      t('问题定位', 'Issue context', 'Contexto do problema', 'سياق المشكلة'),
      [
        createTableGrid([
          createAlert(
            t('缺陷与建议提单', 'Bug / suggestion ticket', 'Ticket de erro / sugestão', 'بلاغ خطأ / اقتراح'),
            t(
              '请尽量附上截图、发生时间和环境信息，便于研发快速复现。',
              'Please attach screenshots, time, and environment so engineering can reproduce quickly.',
              'Anexe capturas, hora e ambiente para reprodução rápida.',
              'يرجى إرفاق لقطات ووقت وبيئة التشغيل لإعادة الإنتاج بسرعة.',
            ),
          ),
          createField('ant-radio-group', {
            name: 'category',
            label: t('反馈类型', 'Feedback type', 'Tipo de feedback', 'نوع الملاحظات'),
            formItemProps: requiredItem(t('请选择反馈类型', 'Please select feedback type', 'Selecione o tipo', 'يرجى اختيار النوع')),
            fieldProps: {
              optionType: 'button',
              selectOptions: {
                type: 'static',
                dataSource: [
                  { label: t('缺陷', 'Bug', 'Erro', 'خطأ'), value: 'bug' },
                  { label: t('体验问题', 'UX issue', 'Problema de UX', 'مشكلة تجربة'), value: 'ux' },
                  { label: t('功能建议', 'Feature request', 'Sugestão', 'اقتراح ميزة'), value: 'feature' },
                ],
              },
            },
          }),
          createField('ant-radio-group', {
            name: 'severity',
            label: t('严重程度', 'Severity', 'Gravidade', 'الخطورة'),
            formItemProps: requiredItem(t('请选择严重程度', 'Please select severity', 'Selecione a gravidade', 'يرجى اختيار الخطورة')),
            fieldProps: { selectOptions: severityRadioOptions },
          }),
          selectField(
            'productModule',
            t('所属模块', 'Module', 'Módulo', 'الوحدة'),
            t('请选择模块', 'Select module', 'Selecione o módulo', 'اختر الوحدة'),
            productInterestOptions,
            requiredItem(t('请选择模块', 'Please select module', 'Selecione o módulo', 'يرجى اختيار الوحدة')),
          ),
          inputField(
            'version',
            t('版本号', 'Version', 'Versão', 'الإصدار'),
            t('如 2.11.0', 'e.g. 2.11.0', 'ex. 2.11.0', 'مثال 2.11.0'),
          ),
          createField('ant-radio-group', {
            name: 'environment',
            label: t('发生环境', 'Environment', 'Ambiente', 'البيئة'),
            fieldProps: { selectOptions: environmentRadioOptions, optionType: 'button' },
          }),
          createField('ant-date-picker', {
            name: 'occurredAt',
            label: t('发生时间', 'Occurred at', 'Ocorrido em', 'وقت الحدوث'),
            fieldProps: { showTime: true, format: 'YYYY-MM-DD HH:mm' },
          }),
          createField('ant-rate', {
            name: 'impact',
            label: t('业务影响程度', 'Business impact', 'Impacto no negócio', 'أثر العمل'),
          }),
        ]),
      ],
    ),
    sceneCard(
      t('问题描述', 'Description', 'Descrição', 'الوصف'),
      [
        createTableGrid([
          inputField(
            'subject',
            t('标题', 'Title', 'Título', 'العنوان'),
            t('请用一句话概括问题', 'Summarize the issue in one sentence', 'Resuma o problema numa frase', 'لخص المشكلة في جملة واحدة'),
            requiredItem(t('请输入标题', 'Please enter title', 'Introduza o título', 'يرجى إدخال العنوان')),
          ),
          textareaField(
            'reproSteps',
            t('复现步骤', 'Steps to reproduce', 'Passos para reproduzir', 'خطوات إعادة الإنتاج'),
            t('1. 打开页面… 2. 点击… 3. 出现…', '1. Open the page… 2. Click… 3. Observe…', '1. Abrir a página… 2. Clicar… 3. Observar…', '1. افتح الصفحة… 2. انقر… 3. لاحظ…'),
            requiredItem(t('请填写复现步骤', 'Please enter reproduction steps', 'Introduza os passos', 'يرجى إدخال الخطوات')),
          ),
          textareaField(
            'expected',
            t('期望结果', 'Expected result', 'Resultado esperado', 'النتيجة المتوقعة'),
            t('请描述正确行为', 'Describe the expected behavior', 'Descreva o comportamento esperado', 'صف السلوك المتوقع'),
          ),
          createField('ant-image-upload', {
            name: 'screenshots',
            label: t('截图 / 录屏封面', 'Screenshots', 'Capturas', 'لقطات الشاشة'),
            colSpan: 2,
            fieldProps: { uploadDataSource: { type: 'dynamic' } },
          }),
          createField('ant-file-upload', {
            name: 'logs',
            label: t('日志 / HAR 附件', 'Logs / HAR files', 'Logs / ficheiros HAR', 'سجلات / ملفات HAR'),
            colSpan: 2,
            fieldProps: { uploadDataSource: { type: 'dynamic' } },
          }),
        ]),
      ],
    ),
    sceneCard(
      t('联系与跟进', 'Contact and follow-up', 'Contacto e acompanhamento', 'التواصل والمتابعة'),
      [
        createTableGrid([
          inputField(
            'contactName',
            t('反馈人', 'Reporter', 'Autor', 'المُبلِّغ'),
            t('请输入姓名', 'Enter your name', 'Introduza o nome', 'أدخل الاسم'),
          ),
          createField('phone-with-area-code', {
            name: 'phone',
            label: t('联系电话', 'Phone', 'Telefone', 'الهاتف'),
          }),
          inputField(
            'email',
            t('邮箱', 'Email', 'E-mail', 'البريد الإلكتروني'),
            t('请输入邮箱地址', 'Enter email address', 'Introduza o e-mail', 'أدخل البريد'),
            {
              require: true,
              rules: emailRules(
                t('请输入邮箱', 'Please enter email', 'Introduza o e-mail', 'يرجى إدخال البريد'),
                t('请输入有效的邮箱地址', 'Please enter a valid email address', 'Introduza um e-mail válido', 'يرجى إدخال بريد صالح'),
              ),
            },
            { type: 'email' },
          ),
          createField('ant-switch', {
            name: 'notifyProgress',
            label: t('状态变更时通知我', 'Notify me on status change', 'Notificar-me sobre o estado', 'أبلغني عند تغير الحالة'),
            formItemProps: { initialValue: true, valuePropName: 'checked' },
          }),
          createSubmit(t('提交工单', 'Submit ticket', 'Enviar ticket', 'إرسال التذكرة'), { block: true }),
        ]),
      ],
    ),
  ]);
}

function main() {
  const templates = [
    ['Contact.json', buildContactForm()],
    ['Login.json', buildLoginForm()],
    ['Feedback.json', buildFeedbackForm()],
  ];

  for (const [fileName, designValue] of templates) {
    console.log(`Generated ${writeJson(fileName, designValue)}`);
  }
}

main();
