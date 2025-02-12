let ins = null;

const mapping = {
  // dev环境
  'dev-development': {
    localPrefix: 'http://localhost:9099/',
  },
  'dev-production': {
    localPrefix: 'http://localhost:9099/',
  },

  // pe环境
  'pe-development': {
    localPrefix: 'http://localhost:9099/',
  },
  'pe-production': {
    localPrefix: 'http://localhost:9099/',
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
