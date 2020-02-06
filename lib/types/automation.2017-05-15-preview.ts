// Generated using 'npm run schema /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-05-15-preview/Microsoft.Automation.json'
import { Expressionable, ResourceDefinition } from '../common';

export interface AdvancedSchedule {
  weekDays?: Expressionable<string[]>;
  monthDays?: Expressionable<number[]>;
  monthlyOccurrences?: Expressionable<AdvancedScheduleMonthlyOccurrence[]>;
}

export interface AdvancedScheduleMonthlyOccurrence {
  occurrence?: Expressionable<number>;
  day?: Expressionable<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')>;
}

export interface automationAccounts_sourceControls_sourceControlSyncJobs_childResource {
  name: Expressionable<string>;
  type: Expressionable<('sourceControlSyncJobs')>;
  apiVersion: Expressionable<('2017-05-15-preview')>;
  properties: Expressionable<SourceControlSyncJobCreateProperties>;
}

export interface ErrorResponse {
  code?: Expressionable<string>;
  message?: Expressionable<string>;
}

export interface JobCreateProperties {
  runbook?: Expressionable<RunbookAssociationProperty>;
  runOn?: Expressionable<string>;
}

export interface LinuxProperties {
  includedPackageClassifications?: Expressionable<('Unclassified' | 'Critical' | 'Security' | 'Other')>;
  excludedPackageNameMasks?: Expressionable<string[]>;
  includedPackageNameMasks?: Expressionable<string[]>;
  rebootSetting?: Expressionable<string>;
}

export interface RunbookAssociationProperty {
  name?: Expressionable<string>;
}

export interface ScheduleProperties {
  startTime?: Expressionable<string>;
  expiryTime?: Expressionable<string>;
  expiryTimeOffsetMinutes?: Expressionable<number>;
  isEnabled?: Expressionable<boolean>;
  nextRun?: Expressionable<string>;
  nextRunOffsetMinutes?: Expressionable<number>;
  interval?: Expressionable<number>;
  frequency?: Expressionable<('OneTime' | 'Day' | 'Hour' | 'Week' | 'Month')>;
  timeZone?: Expressionable<string>;
  advancedSchedule?: Expressionable<AdvancedSchedule>;
  creationTime?: Expressionable<string>;
  lastModifiedTime?: Expressionable<string>;
  description?: Expressionable<string>;
}

export interface SoftwareUpdateConfigurationProperties {
  updateConfiguration: Expressionable<UpdateConfiguration>;
  scheduleInfo: Expressionable<ScheduleProperties>;
  error?: Expressionable<ErrorResponse>;
}

export interface SourceControlCreateOrUpdateProperties {
  repoUrl?: Expressionable<string>;
  branch?: Expressionable<string>;
  folderPath?: Expressionable<string>;
  autoSync?: Expressionable<boolean>;
  publishRunbook?: Expressionable<boolean>;
  sourceType?: Expressionable<('VsoGit' | 'VsoTfvc' | 'GitHub')>;
  securityToken?: Expressionable<string>;
  description?: Expressionable<string>;
}

export interface SourceControlSyncJobCreateProperties {
  commitId?: Expressionable<string>;
}

export interface UpdateConfiguration {
  operatingSystem: Expressionable<('Windows' | 'Linux')>;
  windows?: Expressionable<WindowsProperties>;
  linux?: Expressionable<LinuxProperties>;
  duration?: Expressionable<string>;
  azureVirtualMachines?: Expressionable<string[]>;
  nonAzureComputerNames?: Expressionable<string[]>;
}

export interface WindowsProperties {
  includedUpdateClassifications?: Expressionable<('Unclassified' | 'Critical' | 'Security' | 'UpdateRollup' | 'FeaturePack' | 'ServicePack' | 'Definition' | 'Tools' | 'Updates')>;
  excludedKbNumbers?: Expressionable<string[]>;
  includedKbNumbers?: Expressionable<string[]>;
  rebootSetting?: Expressionable<string>;
}

export class AutomationBuilder {
  public static automationAccounts_jobs(name: Expressionable<string>, properties: JobCreateProperties, location: Expressionable<string>): ResourceDefinition<JobCreateProperties> {
    return {
      type: 'Microsoft.Automation/automationAccounts/jobs',
      apiVersion: '2017-05-15-preview',
      name,
      location,
      properties,
    };
  }
  public static automationAccounts_softwareUpdateConfigurations(name: Expressionable<string>, properties: SoftwareUpdateConfigurationProperties, location: Expressionable<string>): ResourceDefinition<SoftwareUpdateConfigurationProperties> {
    return {
      type: 'Microsoft.Automation/automationAccounts/softwareUpdateConfigurations',
      apiVersion: '2017-05-15-preview',
      name,
      location,
      properties,
    };
  }
  public static automationAccounts_sourceControls(name: Expressionable<string>, properties: SourceControlCreateOrUpdateProperties, location: Expressionable<string>): ResourceDefinition<SourceControlCreateOrUpdateProperties> {
    return {
      type: 'Microsoft.Automation/automationAccounts/sourceControls',
      apiVersion: '2017-05-15-preview',
      name,
      location,
      properties,
    };
  }
  public static automationAccounts_sourceControls_sourceControlSyncJobs(name: Expressionable<string>, properties: SourceControlSyncJobCreateProperties, location: Expressionable<string>): ResourceDefinition<SourceControlSyncJobCreateProperties> {
    return {
      type: 'Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs',
      apiVersion: '2017-05-15-preview',
      name,
      location,
      properties,
    };
  }
}
