import adapterScreen from '../src/index';

// 基础用法示例
export function basicUsage() {
  // 使用默认配置初始化
  adapterScreen.init();
  
  console.log('基础适配已初始化');
}

// 自定义配置示例
export function customConfigUsage() {
  // 使用自定义配置
  adapterScreen.init({
    el: '#app',
    dw: 1920,
    dh: 1080,
    resize: true,
    transition: 0.3,
    delay: 100,
    ignore: [
      {
        el: '.fixed-element',
        scale: 1,
        fontSize: 14,
        width: 200,
        height: 100
      }
    ]
  });
  
  console.log('自定义配置适配已初始化');
}

// 弹性布局适配示例
export function flexibleLayoutUsage() {
  // 使用弹性布局适配
  adapterScreen.flexible({
    minWidth: 320,
    minHeight: 568
  }, true);
  
  console.log('弹性布局适配已初始化');
}

// 设备类型检测示例
export function deviceDetectionUsage() {
  // 检测设备类型
  if (adapterScreen.isPhoneSize()) {
    console.log('当前为手机设备');
  } else if (adapterScreen.isPadSize()) {
    console.log('当前为平板设备');
  } else if (adapterScreen.isPCSize()) {
    console.log('当前为PC设备');
  }
}

// 元素修正示例
export function elementRectificationUsage() {
  // 对特定元素进行缩放修正
  adapterScreen.elRectification('.special-element', 1.5);
  
  console.log('元素修正已应用');
}

// 设置页面最小尺寸示例
export function setPageMinSizeUsage() {
  // 设置页面最小尺寸到CSS
  adapterScreen.setPageMinSizeToCSS(document.body);
  
  console.log('页面最小尺寸已设置');
}

// 检测浏览器缩放示例
export function detectZoomUsage() {
  // 检测并调整浏览器缩放
  adapterScreen.detectZoom();
  
  console.log('浏览器缩放检测完成');
}

// 完整使用示例
export function completeUsageExample() {
  // 1. 初始化适配
  adapterScreen.init({
    el: '#app',
    dw: 1920,
    dh: 1080,
    resize: true,
    transition: 0.3,
    delay: 100
  });
  
  // 2. 检测设备类型
  deviceDetectionUsage();
  
  // 3. 设置页面最小尺寸
  setPageMinSizeUsage();
  
  // 4. 检测浏览器缩放
  detectZoomUsage();
  
  // 5. 应用元素修正
  setTimeout(() => {
    elementRectificationUsage();
  }, 1000);
  
  console.log('完整适配流程已执行');
}

// 清理示例
export function cleanupExample() {
  // 关闭适配效果
  adapterScreen.off('#app');
  
  console.log('适配效果已关闭');
} 