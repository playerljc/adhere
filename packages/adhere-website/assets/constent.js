let ins = null;

const mapping = {
  // dev环境
  'dev-development': {
    mobileOrigin: 'http://localhost:9099/adheremobile',
  },
  'dev-production': {
    mobileOrigin: 'http://localhost:9099/adheremobile',
  },

  // pe环境
  'pe-development': {
    mobileOrigin: 'http://localhost:9099/adheremobile',
  },
  'pe-production': {
    mobileOrigin: 'https://playerljc.github.io/adheremobile',
  },
};

function Create({ mode, environment }) {
  return mapping[`${environment}-${mode}`]
}

window.Constent = function (CustomEvnVars) {
  if (!ins) {
    ins = Create(CustomEvnVars);
  }

  return ins;
};
