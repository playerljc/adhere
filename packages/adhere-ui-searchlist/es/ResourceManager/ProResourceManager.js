import SearchTable from"@baifendian/adhere-ui-searchtable";import ProListFactory from"../ProListFactory";import ProResourceManagerFactory from"./ProResourceManagerFactory";import ResourceManager from"./ResourceManager";var MemoManager=SearchTable.SearchAndPaginParams.MemoManager,SearchAndPaginParamsMemo=MemoManager.create(),ProResourceManager=ProResourceManagerFactory(ProListFactory(ResourceManager,SearchAndPaginParamsMemo));ProResourceManager.displayName="ProResourceManager";export default ProResourceManager;export{SearchAndPaginParamsMemo};
//# sourceMappingURL=ProResourceManager.js.map
