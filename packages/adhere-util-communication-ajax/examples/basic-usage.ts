import Ajax from '../src/index';

// 创建Ajax实例
const ajax = new Ajax(
  'https://api.example.com',
  'https://system.example.com',
  {
    timeout: 30000,
    withCredentials: true,
    loading: {
      show: true,
      text: '加载中...',
      terminal: 'pc',
    },
    dataKey: 'data',
    messageKey: 'message',
    codeKey: 'code',
    codeSuccess: 200,
    showWarn: true,
    interceptor: ({ status }) => {
      console.log('拦截器处理状态码:', status);
    },
  }
);

// 示例1: 基本GET请求
async function basicGetRequest() {
  try {
    const result = ajax.get({
      path: 'users',
      headers: {
        'Authorization': 'Bearer your-token-here'
      }
    });

    const data = await result.promise;
    console.log('用户列表:', data);
  } catch (error) {
    console.error('获取用户列表失败:', error);
  }
}

// 示例2: 基本POST请求
async function basicPostRequest() {
  try {
    const result = ajax.post({
      path: 'users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
      }
    });

    const data = await result.promise;
    console.log('创建用户成功:', data);
  } catch (error) {
    console.error('创建用户失败:', error);
  }
}

// 示例3: 文件上传
async function fileUpload() {
  const form = document.getElementById('uploadForm') as HTMLFormElement;
  
  if (!form) {
    console.error('上传表单不存在');
    return;
  }

  try {
    const result = ajax.post({
      path: 'upload',
      data: {
        form: form,
        data: {
          description: '重要文档',
          category: 'documents',
          tags: ['important', 'document']
        }
      }
    });

    const data = await result.promise;
    console.log('文件上传成功:', data);
  } catch (error) {
    console.error('文件上传失败:', error);
  }
}

// 示例4: 自定义配置的请求
async function customConfigRequest() {
  const customAjax = new Ajax(
    'https://api.example.com',
    'https://system.example.com',
    {
      timeout: 60000,
      loading: {
        show: true,
        text: '处理中...',
        terminal: 'pc',
        zIndex: 20000,
        size: 'large'
      },
      // 自定义JSON序列化
      customSendJSONStringify: (key, value) => {
        if (value instanceof Date) {
          return value.toISOString();
        }
        if (value === null || value === undefined) {
          return '';
        }
        return value;
      },
      // 自定义事件处理
      onTimeout: () => {
        console.log('请求超时，请稍后重试');
      },
      onError: () => {
        console.log('网络错误，请检查网络连接');
      },
      interceptor: ({ status }) => {
        console.log('自定义拦截器处理状态码:', status);
      }
    }
  );

  try {
    const result = customAjax.post({
      path: 'complex-operation',
      data: {
        timestamp: new Date(),
        items: [
          { id: 1, name: 'Item 1', value: null },
          { id: 2, name: 'Item 2', value: undefined },
          { id: 3, name: 'Item 3', value: 'valid' }
        ]
      }
    });

    const data = await result.promise;
    console.log('复杂操作完成:', data);
  } catch (error) {
    console.error('复杂操作失败:', error);
  }
}

// 示例5: 使用拦截器
function setupInterceptors() {
  // 请求拦截器 - 添加认证头
  Ajax.interceptors.addRequest((params) => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      params.headers = {
        ...params.headers,
        'Authorization': `Bearer ${token}`
      };
    }
    return params;
  });

  // 请求拦截器 - 添加时间戳
  Ajax.interceptors.addRequest((params) => {
    if (params.data && typeof params.data === 'object') {
      params.data = {
        ...params.data,
        _timestamp: Date.now()
      };
    }
    return params;
  });

  // 响应拦截器 - 统一处理响应数据
  Ajax.interceptors.addResponse((params) => {
    if (params.data && params.data.code === 200) {
      // 提取实际数据
      params.data = params.data.data;
    }
    return params;
  });

  // 响应拦截器 - 记录请求日志
  Ajax.interceptors.addResponse((params) => {
    console.log(`请求完成: ${params.xhr.status} - ${params.xhr.statusText}`);
    return params;
  });
}

// 示例6: 批量请求处理
async function batchRequests() {
  const requests = [
    ajax.get({ path: 'users' }),
    ajax.get({ path: 'posts' }),
    ajax.get({ path: 'comments' })
  ];

  try {
    const results = await Promise.all(requests.map(req => req.promise));
    const [users, posts, comments] = results;
    
    console.log('批量请求完成:', {
      users: users.length,
      posts: posts.length,
      comments: comments.length
    });
  } catch (error) {
    console.error('批量请求失败:', error);
  }
}

// 示例7: 错误处理
async function errorHandlingExample() {
  try {
    // 模拟404错误
    const result = ajax.get({
      path: 'non-existent-endpoint'
    });

    const data = await result.promise;
    console.log('请求成功:', data);
  } catch (error) {
    if (error.status === 404) {
      console.error('资源不存在');
    } else if (error.status === 401) {
      console.error('未授权，请重新登录');
      // 重定向到登录页面
    } else if (error.status === 402) {
      console.error('需要支付');
      // 处理支付逻辑
    } else {
      console.error('未知错误:', error);
    }
  }
}

// 示例8: 取消请求
function cancelRequestExample() {
  const result = ajax.get({
    path: 'slow-endpoint'
  });

  // 5秒后取消请求
  setTimeout(() => {
    if (result.xhr) {
      result.xhr.abort();
      console.log('请求已取消');
    }
  }, 5000);

  result.promise
    .then(data => {
      console.log('请求完成:', data);
    })
    .catch(error => {
      if (error.type === 'abort') {
        console.log('请求被取消');
      } else {
        console.error('请求失败:', error);
      }
    });
}

// 示例9: 移动端适配
function mobileExample() {
  const mobileAjax = new Ajax(
    'https://api.example.com',
    'https://system.example.com',
    {
      loading: {
        show: true,
        text: '加载中...',
        terminal: 'mobile',
        size: 'small'
      },
      interceptor: ({ status }) => {
        console.log('移动端拦截器处理状态码:', status);
      }
    }
  );

  mobileAjax.get({
    path: 'mobile-data'
  }).promise
    .then(data => {
      console.log('移动端数据:', data);
    })
    .catch(error => {
      console.error('移动端请求失败:', error);
    });
}

// 示例10: Mock数据
function mockDataExample() {
  const mockAjax = new Ajax(
    'https://api.example.com',
    'https://system.example.com',
    {
      mock: true,
      loading: {
        show: true,
        text: '模拟加载中...'
      },
      interceptor: ({ status }) => {
        console.log('Mock拦截器处理状态码:', status);
      }
    }
  );

  mockAjax.get({
    path: 'mock-users'
  }).promise
    .then(data => {
      console.log('Mock数据:', data);
    })
    .catch(error => {
      console.error('Mock请求失败:', error);
    });
}

// 导出示例函数
export {
  basicGetRequest,
  basicPostRequest,
  fileUpload,
  customConfigRequest,
  setupInterceptors,
  batchRequests,
  errorHandlingExample,
  cancelRequestExample,
  mobileExample,
  mockDataExample
};

// 使用示例
if (typeof window !== 'undefined') {
  // 在浏览器环境中设置拦截器
  setupInterceptors();
  
  // 绑定事件监听器
  document.addEventListener('DOMContentLoaded', () => {
    // 基本请求示例
    basicGetRequest();
    basicPostRequest();
    
    // 文件上传示例
    const uploadButton = document.getElementById('uploadButton');
    if (uploadButton) {
      uploadButton.addEventListener('click', fileUpload);
    }
  });
} 