import * as Services from "./Architecture-Service-Icons_07312022";
import * as Categories from "./Category-Icons_07312022";
import * as Resources from "./Resource-Icons_07312022";

export { Services, Categories, Resources };

export const service16Icons = {
  ...Services.archAnalytics.arch16,
  ...Services.archAppIntegration.arch16,
  ...Services.archBlockchain._16,
  ...Services.archBusinessApplications._16,
  ...Services.archCloudFinancialManagement._16,
  ...Services.archCompute._16,
  ...Services.archContainers._16,
  ...Services.archCustomerEnablement._16,
  ...Services.archDatabase._16,
  ...Services.archDeveloperTools._16,
  ...Services.archEndUserComputing._16,
  ...Services.archFrontEndWebMobile._16,
  ...Services.archGameTech._16,
  // This is not service
  // ...Services.archGeneralIcons._16,
  ...Services.archInternetOfThings._16,
  ...Services.archMachineLearning._16,
  ...Services.archManagementGovernance._16,
  ...Services.archMediaServices._16,
  ...Services.archMigrationTransfer._16,
  ...Services.archNetworkingContentDelivery._16,
  ...Services.archQuantumTechnologies._16,
  ...Services.archRobotics._16,
  ...Services.archSatellite._16,
  ...Services.archSecurityIdentityCompliance._16,
  ...Services.archStorage._16,
  ...Services.archVrAr.arch16,
};
export const service32Icons = {
  ...Services.archAnalytics.arch32,
  ...Services.archAppIntegration.arch32,
  ...Services.archBlockchain._32,
  ...Services.archBusinessApplications._32,
  ...Services.archCloudFinancialManagement._32,
  ...Services.archCompute._32,
  ...Services.archContainers._32,
  ...Services.archCustomerEnablement._32,
  ...Services.archDatabase._32,
  ...Services.archDeveloperTools._32,
  ...Services.archEndUserComputing._32,
  ...Services.archFrontEndWebMobile._32,
  ...Services.archGameTech._32,
  // This is not service
  // ...Services.archGeneralIcons._32,
  ...Services.archInternetOfThings._32,
  ...Services.archMachineLearning._32,
  ...Services.archManagementGovernance._32,
  ...Services.archMediaServices._32,
  ...Services.archMigrationTransfer._32,
  ...Services.archNetworkingContentDelivery._32,
  ...Services.archQuantumTechnologies._32,
  ...Services.archRobotics._32,
  ...Services.archSatellite._32,
  ...Services.archSecurityIdentityCompliance._32,
  ...Services.archStorage._32,
  ...Services.archVrAr.arch32,
};
export const service48Icons = {
  ...Services.archAnalytics.arch48,
  ...Services.archAppIntegration.arch48,
  ...Services.archBlockchain._48,
  ...Services.archBusinessApplications._48,
  ...Services.archCloudFinancialManagement._48,
  ...Services.archCompute._48,
  ...Services.archContainers._48,
  ...Services.archCustomerEnablement._48,
  ...Services.archDatabase._48,
  ...Services.archDeveloperTools._48,
  ...Services.archEndUserComputing._48,
  ...Services.archFrontEndWebMobile._48,
  ...Services.archGameTech._48,
  // This is not service
  // ...Services.archGeneralIcons._48,
  ...Services.archInternetOfThings._48,
  ...Services.archMachineLearning._48,
  ...Services.archManagementGovernance._48,
  ...Services.archMediaServices._48,
  ...Services.archMigrationTransfer._48,
  ...Services.archNetworkingContentDelivery._48,
  ...Services.archQuantumTechnologies._48,
  ...Services.archRobotics._48,
  ...Services.archSatellite._48,
  ...Services.archSecurityIdentityCompliance._48,
  ...Services.archStorage._48,
  ...Services.archVrAr.arch48,
};
export const service64Icons = {
  ...Services.archAnalytics.arch64,
  ...Services.archAppIntegration.arch64,
  ...Services.archBlockchain._64,
  ...Services.archBusinessApplications._64,
  ...Services.archCloudFinancialManagement._64,
  ...Services.archCompute._64,
  ...Services.archContainers._64,
  ...Services.archCustomerEnablement._64,
  ...Services.archDatabase._64,
  ...Services.archDeveloperTools._64,
  ...Services.archEndUserComputing._64,
  ...Services.archFrontEndWebMobile._64,
  ...Services.archGameTech._64,
  // This is not service
  // ...Services.archGeneralIcons._64,
  ...Services.archInternetOfThings._64,
  ...Services.archMachineLearning._64,
  ...Services.archManagementGovernance._64,
  ...Services.archMediaServices._64,
  ...Services.archMigrationTransfer._64,
  ...Services.archNetworkingContentDelivery._64,
  ...Services.archQuantumTechnologies._64,
  ...Services.archRobotics._64,
  ...Services.archSatellite._64,
  ...Services.archSecurityIdentityCompliance._64,
  ...Services.archStorage._64,
  ...Services.archVrAr.arch64,
};

export const category16Icons = Categories.archCategory16;
export const category32Icons = Categories.archCategory32;
export const category48Icons = Categories.archCategory48;
export const category64Icons = Categories.archCategory64;

export const resourceIcons = {
  ...Resources.resAnalytics.res48Dark,
  ...Resources.resApplicationIntegration.res48Dark,
  ...Resources.resBlockchain.res48Dark,
  ...Resources.resBusinessApplications.res48Dark,
  ...Resources.resCompute.res48Dark,
  ...Resources.resContainers.res48Dark,
  ...Resources.resDatabase.res48Dark,
  ...Resources.resDeveloperTools.res48Dark,
  ...Resources.resFrontEndWebMobile.res48Dark,
  ...Resources.resGeneralIcons.res48Dark,
  ...Resources.resMachineLearning.res48Dark,
  ...Resources.resManagementGovernance.res48Dark,
  ...Resources.resMediaServices.res48Dark,
  ...Resources.resMigrationAndTransfer.res48Dark,
  ...Resources.resNetworkingAndContentDelivery.res48Dark,
  ...Resources.resQuantumTechnologies.res48Dark,
  ...Resources.resRobotics.res48Dark,
  ...Resources.resSecurityIdentityAndCompliance.res48Dark,
  ...Resources.resStorage.res48Dark,
  ...Resources.resLoT.res48Dark,
};

export const testIcons = {
  [service64Icons.archAlexaForBusiness64Svg.id]:
    service64Icons.archAlexaForBusiness64Svg,
  [service64Icons.archAmazonApiGateway64Svg.id]:
    service64Icons.archAmazonApiGateway64Svg,
};

console.log(Object.values(service16Icons).map((i) => i.name));
console.log(Object.values(service32Icons).map((i) => i.name));
console.log(Object.values(service48Icons).map((i) => i.name));
console.log(Object.values(service64Icons).map((i) => i.name));
