import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AttendeeStatus: { input: any; output: any; }
  AvailabilityStatus: { input: any; output: any; }
  Base64: { input: any; output: any; }
  BigDecimal: { input: any; output: any; }
  CustomerConfirmationStatus: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EQLOrderByClauseAccountResourceScores: { input: any; output: any; }
  EQLOrderByClauseAccountTags: { input: any; output: any; }
  EQLOrderByClauseAccounts: { input: any; output: any; }
  EQLOrderByClauseActivities: { input: any; output: any; }
  EQLOrderByClauseActivityResources: { input: any; output: any; }
  EQLOrderByClauseAttendees: { input: any; output: any; }
  EQLOrderByClauseAvailabilities: { input: any; output: any; }
  EQLOrderByClauseAvailabilityPatternResources: { input: any; output: any; }
  EQLOrderByClauseAvailabilityPatterns: { input: any; output: any; }
  EQLOrderByClauseAvailabilityTemplateEntries: { input: any; output: any; }
  EQLOrderByClauseAvailabilityTemplateResources: { input: any; output: any; }
  EQLOrderByClauseAvailabilityTemplates: { input: any; output: any; }
  EQLOrderByClauseBreak: { input: any; output: any; }
  EQLOrderByClauseClientAvailabilities: { input: any; output: any; }
  EQLOrderByClauseContactTags: { input: any; output: any; }
  EQLOrderByClauseContacts: { input: any; output: any; }
  EQLOrderByClauseHolidayRegions: { input: any; output: any; }
  EQLOrderByClauseHolidays: { input: any; output: any; }
  EQLOrderByClauseJobAllocations: { input: any; output: any; }
  EQLOrderByClauseJobDependencies: { input: any; output: any; }
  EQLOrderByClauseJobOffers: { input: any; output: any; }
  EQLOrderByClauseJobProducts: { input: any; output: any; }
  EQLOrderByClauseJobReportToYard: { input: any; output: any; }
  EQLOrderByClauseJobSafetyAnalysisForm: { input: any; output: any; }
  EQLOrderByClauseJobStatSheet: { input: any; output: any; }
  EQLOrderByClauseJobTags: { input: any; output: any; }
  EQLOrderByClauseJobTasks: { input: any; output: any; }
  EQLOrderByClauseJobTimeConstraints: { input: any; output: any; }
  EQLOrderByClauseJobTypeSetting: { input: any; output: any; }
  EQLOrderByClauseJobTypeTag: { input: any; output: any; }
  EQLOrderByClauseJobs: { input: any; output: any; }
  EQLOrderByClauseLocationResourceScores: { input: any; output: any; }
  EQLOrderByClauseLocations: { input: any; output: any; }
  EQLOrderByClauseProducts: { input: any; output: any; }
  EQLOrderByClauseProject: { input: any; output: any; }
  EQLOrderByClauseRecurringSchedules: { input: any; output: any; }
  EQLOrderByClauseRegions: { input: any; output: any; }
  EQLOrderByClauseResourceCategorySetting: { input: any; output: any; }
  EQLOrderByClauseResourceCategoryTag: { input: any; output: any; }
  EQLOrderByClauseResourceJobOffers: { input: any; output: any; }
  EQLOrderByClauseResourceOverrideRegions: { input: any; output: any; }
  EQLOrderByClauseResourceOverrides: { input: any; output: any; }
  EQLOrderByClauseResourceRegions: { input: any; output: any; }
  EQLOrderByClauseResourceRequirementTags: { input: any; output: any; }
  EQLOrderByClauseResourceRequirements: { input: any; output: any; }
  EQLOrderByClauseResourceShiftBreaks: { input: any; output: any; }
  EQLOrderByClauseResourceShiftOffers: { input: any; output: any; }
  EQLOrderByClauseResourceShifts: { input: any; output: any; }
  EQLOrderByClauseResourceTags: { input: any; output: any; }
  EQLOrderByClauseResourceUtilization: { input: any; output: any; }
  EQLOrderByClauseResources: { input: any; output: any; }
  EQLOrderByClauseScheduleTemplates: { input: any; output: any; }
  EQLOrderByClauseShiftOfferShifts: { input: any; output: any; }
  EQLOrderByClauseShiftOffers: { input: any; output: any; }
  EQLOrderByClauseShiftTags: { input: any; output: any; }
  EQLOrderByClauseShifts: { input: any; output: any; }
  EQLOrderByClauseSignature: { input: any; output: any; }
  EQLOrderByClauseSkeduloAdminSetting: { input: any; output: any; }
  EQLOrderByClauseSkeduloJobSafetyAnalysisSetting: { input: any; output: any; }
  EQLOrderByClauseSkeduloRegionCityMapping: { input: any; output: any; }
  EQLOrderByClauseTags: { input: any; output: any; }
  EQLOrderByClauseTemplatedActivities: { input: any; output: any; }
  EQLOrderByClauseTemplatedActivityResources: { input: any; output: any; }
  EQLOrderByClauseTemplatedAttendees: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobAllocations: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobDependencies: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobProducts: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobTags: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobTasks: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobTimeConstraints: { input: any; output: any; }
  EQLOrderByClauseTemplatedJobs: { input: any; output: any; }
  EQLOrderByClauseTemplatedResourceRequirementTags: { input: any; output: any; }
  EQLOrderByClauseTemplatedResourceRequirements: { input: any; output: any; }
  EQLOrderByClauseTemplatedResourceShifts: { input: any; output: any; }
  EQLOrderByClauseTemplatedShiftTags: { input: any; output: any; }
  EQLOrderByClauseTemplatedShifts: { input: any; output: any; }
  EQLOrderByClauseTimesheet: { input: any; output: any; }
  EQLOrderByClauseTimesheetMaterial: { input: any; output: any; }
  EQLOrderByClauseTimesheetResource: { input: any; output: any; }
  EQLOrderByClauseUsers: { input: any; output: any; }
  EQLQueryFilterAccountResourceScores: { input: any; output: any; }
  EQLQueryFilterAccountTags: { input: any; output: any; }
  EQLQueryFilterAccounts: { input: any; output: any; }
  EQLQueryFilterActivities: { input: any; output: any; }
  EQLQueryFilterActivityResources: { input: any; output: any; }
  EQLQueryFilterAttendees: { input: any; output: any; }
  EQLQueryFilterAvailabilities: { input: any; output: any; }
  EQLQueryFilterAvailabilityPatternResources: { input: any; output: any; }
  EQLQueryFilterAvailabilityPatterns: { input: any; output: any; }
  EQLQueryFilterAvailabilityTemplateEntries: { input: any; output: any; }
  EQLQueryFilterAvailabilityTemplateResources: { input: any; output: any; }
  EQLQueryFilterAvailabilityTemplates: { input: any; output: any; }
  EQLQueryFilterBreak: { input: any; output: any; }
  EQLQueryFilterClientAvailabilities: { input: any; output: any; }
  EQLQueryFilterContactTags: { input: any; output: any; }
  EQLQueryFilterContacts: { input: any; output: any; }
  EQLQueryFilterHolidayRegions: { input: any; output: any; }
  EQLQueryFilterHolidays: { input: any; output: any; }
  EQLQueryFilterJobAllocations: { input: any; output: any; }
  EQLQueryFilterJobDependencies: { input: any; output: any; }
  EQLQueryFilterJobOffers: { input: any; output: any; }
  EQLQueryFilterJobProducts: { input: any; output: any; }
  EQLQueryFilterJobReportToYard: { input: any; output: any; }
  EQLQueryFilterJobSafetyAnalysisForm: { input: any; output: any; }
  EQLQueryFilterJobStatSheet: { input: any; output: any; }
  EQLQueryFilterJobTags: { input: any; output: any; }
  EQLQueryFilterJobTasks: { input: any; output: any; }
  EQLQueryFilterJobTimeConstraints: { input: any; output: any; }
  EQLQueryFilterJobTypeSetting: { input: any; output: any; }
  EQLQueryFilterJobTypeTag: { input: any; output: any; }
  EQLQueryFilterJobs: { input: any; output: any; }
  EQLQueryFilterLocationResourceScores: { input: any; output: any; }
  EQLQueryFilterLocations: { input: any; output: any; }
  EQLQueryFilterProducts: { input: any; output: any; }
  EQLQueryFilterProject: { input: any; output: any; }
  EQLQueryFilterRecurringSchedules: { input: any; output: any; }
  EQLQueryFilterRegions: { input: any; output: any; }
  EQLQueryFilterResourceCategorySetting: { input: any; output: any; }
  EQLQueryFilterResourceCategoryTag: { input: any; output: any; }
  EQLQueryFilterResourceJobOffers: { input: any; output: any; }
  EQLQueryFilterResourceOverrideRegions: { input: any; output: any; }
  EQLQueryFilterResourceOverrides: { input: any; output: any; }
  EQLQueryFilterResourceRegions: { input: any; output: any; }
  EQLQueryFilterResourceRequirementTags: { input: any; output: any; }
  EQLQueryFilterResourceRequirements: { input: any; output: any; }
  EQLQueryFilterResourceShiftBreaks: { input: any; output: any; }
  EQLQueryFilterResourceShiftOffers: { input: any; output: any; }
  EQLQueryFilterResourceShifts: { input: any; output: any; }
  EQLQueryFilterResourceTags: { input: any; output: any; }
  EQLQueryFilterResourceUtilization: { input: any; output: any; }
  EQLQueryFilterResources: { input: any; output: any; }
  EQLQueryFilterScheduleTemplates: { input: any; output: any; }
  EQLQueryFilterShiftOfferShifts: { input: any; output: any; }
  EQLQueryFilterShiftOffers: { input: any; output: any; }
  EQLQueryFilterShiftTags: { input: any; output: any; }
  EQLQueryFilterShifts: { input: any; output: any; }
  EQLQueryFilterSignature: { input: any; output: any; }
  EQLQueryFilterSkeduloAdminSetting: { input: any; output: any; }
  EQLQueryFilterSkeduloJobSafetyAnalysisSetting: { input: any; output: any; }
  EQLQueryFilterSkeduloRegionCityMapping: { input: any; output: any; }
  EQLQueryFilterTags: { input: any; output: any; }
  EQLQueryFilterTemplatedActivities: { input: any; output: any; }
  EQLQueryFilterTemplatedActivityResources: { input: any; output: any; }
  EQLQueryFilterTemplatedAttendees: { input: any; output: any; }
  EQLQueryFilterTemplatedJobAllocations: { input: any; output: any; }
  EQLQueryFilterTemplatedJobDependencies: { input: any; output: any; }
  EQLQueryFilterTemplatedJobProducts: { input: any; output: any; }
  EQLQueryFilterTemplatedJobTags: { input: any; output: any; }
  EQLQueryFilterTemplatedJobTasks: { input: any; output: any; }
  EQLQueryFilterTemplatedJobTimeConstraints: { input: any; output: any; }
  EQLQueryFilterTemplatedJobs: { input: any; output: any; }
  EQLQueryFilterTemplatedResourceRequirementTags: { input: any; output: any; }
  EQLQueryFilterTemplatedResourceRequirements: { input: any; output: any; }
  EQLQueryFilterTemplatedResourceShifts: { input: any; output: any; }
  EQLQueryFilterTemplatedShiftTags: { input: any; output: any; }
  EQLQueryFilterTemplatedShifts: { input: any; output: any; }
  EQLQueryFilterTimesheet: { input: any; output: any; }
  EQLQueryFilterTimesheetMaterial: { input: any; output: any; }
  EQLQueryFilterTimesheetResource: { input: any; output: any; }
  EQLQueryFilterUsers: { input: any; output: any; }
  EQLRecordChangeFilterActivities: { input: any; output: any; }
  EQLRecordChangeFilterAvailabilities: { input: any; output: any; }
  EQLRecordChangeFilterJobAllocations: { input: any; output: any; }
  EQLRecordChangeFilterJobs: { input: any; output: any; }
  EQLRecordChangeFilterShifts: { input: any; output: any; }
  EQLRecordFilterActivities: { input: any; output: any; }
  EQLRecordFilterAvailabilities: { input: any; output: any; }
  EQLRecordFilterJobAllocations: { input: any; output: any; }
  EQLRecordFilterJobs: { input: any; output: any; }
  EQLRecordFilterShifts: { input: any; output: any; }
  Instant: { input: any; output: any; }
  JobAllocationStatus: { input: any; output: any; }
  JobDependencyAnchor: { input: any; output: any; }
  JobStatus: { input: any; output: any; }
  JobTimeConstraintType: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  OfferResponse: { input: any; output: any; }
  OfferStatus: { input: any; output: any; }
  PositiveIntMax200: { input: any; output: any; }
  ResourceOfferStatus: { input: any; output: any; }
  TagClassification: { input: any; output: any; }
  Weekday: { input: any; output: any; }
  WorkingHourType: { input: any; output: any; }
};

export type AccountResourceScores = {
  __typename?: 'AccountResourceScores';
  Account: Accounts;
  AccountId: Scalars['ID']['output'];
  Blacklisted: Scalars['Boolean']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Whitelisted: Scalars['Boolean']['output'];
};

export type AccountResourceScoresConnection = {
  __typename?: 'AccountResourceScoresConnection';
  edges: Array<AccountResourceScoresEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AccountResourceScoresEdge = {
  __typename?: 'AccountResourceScoresEdge';
  cursor: Scalars['Base64']['output'];
  node: AccountResourceScores;
  offset: Scalars['Int']['output'];
};

export type AccountTags = {
  __typename?: 'AccountTags';
  Account: Accounts;
  AccountId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type AccountTagsConnection = {
  __typename?: 'AccountTagsConnection';
  edges: Array<AccountTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AccountTagsEdge = {
  __typename?: 'AccountTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: AccountTags;
  offset: Scalars['Int']['output'];
};

export type Accounts = {
  __typename?: 'Accounts';
  Availabilities: Array<ClientAvailabilities>;
  BATSAccountManager?: Maybe<Users>;
  BATSAccountManagerEmail?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerId?: Maybe<Scalars['ID']['output']>;
  BATSAccountManagerPhone?: Maybe<Scalars['String']['output']>;
  BillingCity?: Maybe<Scalars['String']['output']>;
  BillingPostalCode?: Maybe<Scalars['String']['output']>;
  BillingState?: Maybe<Scalars['String']['output']>;
  BillingStreet?: Maybe<Scalars['String']['output']>;
  Contacts: Array<Contacts>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Customer: Array<Timesheet>;
  Fax?: Maybe<Scalars['String']['output']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Locations: Array<Locations>;
  Name: Scalars['String']['output'];
  PGE: Scalars['Boolean']['output'];
  Phone?: Maybe<Scalars['String']['output']>;
  Rank?: Maybe<Scalars['Int']['output']>;
  RequiresWhitelist: Scalars['Boolean']['output'];
  ResourceScores: Array<AccountResourceScores>;
  ShippingCity?: Maybe<Scalars['String']['output']>;
  ShippingPostalCode?: Maybe<Scalars['String']['output']>;
  ShippingState?: Maybe<Scalars['String']['output']>;
  ShippingStreet?: Maybe<Scalars['String']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  Tags: Array<AccountTags>;
  TierLevel?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type AccountsAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']['input']>;
};


export type AccountsContactsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterContacts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContacts']['input']>;
};


export type AccountsCustomerArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheet']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheet']['input']>;
};


export type AccountsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type AccountsLocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocations']['input']>;
};


export type AccountsResourceScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']['input']>;
};


export type AccountsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountTags']['input']>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AccountsEdge = {
  __typename?: 'AccountsEdge';
  cursor: Scalars['Base64']['output'];
  node: Accounts;
  offset: Scalars['Int']['output'];
};

export type Activities = {
  __typename?: 'Activities';
  ActivityResources: Array<ActivityResources>;
  Address?: Maybe<Scalars['String']['output']>;
  CopiedFrom?: Maybe<Activities>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  JobAllocation?: Maybe<JobAllocations>;
  JobAllocationId?: Maybe<Scalars['ID']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']['output']>;
  Name: Scalars['String']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  TemplatedActivity?: Maybe<TemplatedActivities>;
  TemplatedActivityId?: Maybe<Scalars['ID']['output']>;
  Timezone?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type ActivitiesActivityResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']['input']>;
};

export type ActivitiesConnection = {
  __typename?: 'ActivitiesConnection';
  edges: Array<ActivitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActivitiesEdge = {
  __typename?: 'ActivitiesEdge';
  cursor: Scalars['Base64']['output'];
  node: Activities;
  offset: Scalars['Int']['output'];
};

export type ActivityResources = {
  __typename?: 'ActivityResources';
  Activity: Activities;
  ActivityId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type ActivityResourcesConnection = {
  __typename?: 'ActivityResourcesConnection';
  edges: Array<ActivityResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActivityResourcesEdge = {
  __typename?: 'ActivityResourcesEdge';
  cursor: Scalars['Base64']['output'];
  node: ActivityResources;
  offset: Scalars['Int']['output'];
};

export type Attendees = {
  __typename?: 'Attendees';
  CancelReason?: Maybe<Scalars['String']['output']>;
  Contact: Contacts;
  ContactId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Status: Scalars['AttendeeStatus']['output'];
  TimeCancelled?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type AttendeesConnection = {
  __typename?: 'AttendeesConnection';
  edges: Array<AttendeesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AttendeesEdge = {
  __typename?: 'AttendeesEdge';
  cursor: Scalars['Base64']['output'];
  node: Attendees;
  offset: Scalars['Int']['output'];
};

export type Availabilities = {
  __typename?: 'Availabilities';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Finish: Scalars['Instant']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  PaidTimeOffID?: Maybe<Scalars['String']['output']>;
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  Status?: Maybe<Scalars['AvailabilityStatus']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type AvailabilitiesConnection = {
  __typename?: 'AvailabilitiesConnection';
  edges: Array<AvailabilitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AvailabilitiesEdge = {
  __typename?: 'AvailabilitiesEdge';
  cursor: Scalars['Base64']['output'];
  node: Availabilities;
  offset: Scalars['Int']['output'];
};

export type AvailabilityPatternResources = {
  __typename?: 'AvailabilityPatternResources';
  AvailabilityPattern: AvailabilityPatterns;
  AvailabilityPatternId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  Status?: Maybe<Scalars['AvailabilityStatus']['output']>;
  UID: Scalars['ID']['output'];
};

export type AvailabilityPatternResourcesConnection = {
  __typename?: 'AvailabilityPatternResourcesConnection';
  edges: Array<AvailabilityPatternResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AvailabilityPatternResourcesEdge = {
  __typename?: 'AvailabilityPatternResourcesEdge';
  cursor: Scalars['Base64']['output'];
  node: AvailabilityPatternResources;
  offset: Scalars['Int']['output'];
};

export type AvailabilityPatterns = {
  __typename?: 'AvailabilityPatterns';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Hash: Scalars['String']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Pattern: Scalars['String']['output'];
  Resources: Array<AvailabilityPatternResources>;
  UID: Scalars['ID']['output'];
};


export type AvailabilityPatternsResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']['input']>;
};

export type AvailabilityPatternsConnection = {
  __typename?: 'AvailabilityPatternsConnection';
  edges: Array<AvailabilityPatternsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AvailabilityPatternsEdge = {
  __typename?: 'AvailabilityPatternsEdge';
  cursor: Scalars['Base64']['output'];
  node: AvailabilityPatterns;
  offset: Scalars['Int']['output'];
};

export type AvailabilityTemplateEntries = {
  __typename?: 'AvailabilityTemplateEntries';
  AvailabilityTemplate: AvailabilityTemplates;
  AvailabilityTemplateId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  FinishTime: Scalars['Int']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  StartTime: Scalars['Int']['output'];
  UID: Scalars['ID']['output'];
  Weekday: Scalars['Weekday']['output'];
};

export type AvailabilityTemplateEntriesConnection = {
  __typename?: 'AvailabilityTemplateEntriesConnection';
  edges: Array<AvailabilityTemplateEntriesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AvailabilityTemplateEntriesEdge = {
  __typename?: 'AvailabilityTemplateEntriesEdge';
  cursor: Scalars['Base64']['output'];
  node: AvailabilityTemplateEntries;
  offset: Scalars['Int']['output'];
};

export type AvailabilityTemplateResources = {
  __typename?: 'AvailabilityTemplateResources';
  AvailabilityTemplate: AvailabilityTemplates;
  AvailabilityTemplateId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Migrated: Scalars['Boolean']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type AvailabilityTemplateResourcesConnection = {
  __typename?: 'AvailabilityTemplateResourcesConnection';
  edges: Array<AvailabilityTemplateResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AvailabilityTemplateResourcesEdge = {
  __typename?: 'AvailabilityTemplateResourcesEdge';
  cursor: Scalars['Base64']['output'];
  node: AvailabilityTemplateResources;
  offset: Scalars['Int']['output'];
};

export type AvailabilityTemplates = {
  __typename?: 'AvailabilityTemplates';
  AvailabilityPattern?: Maybe<AvailabilityPatterns>;
  AvailabilityPatternId?: Maybe<Scalars['ID']['output']>;
  AvailabilityTemplateEntries: Array<AvailabilityTemplateEntries>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Finish?: Maybe<Scalars['LocalDate']['output']>;
  Global: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Resources: Array<AvailabilityTemplateResources>;
  Start?: Maybe<Scalars['LocalDate']['output']>;
  UID: Scalars['ID']['output'];
};


export type AvailabilityTemplatesAvailabilityTemplateEntriesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateEntries']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateEntries']['input']>;
};


export type AvailabilityTemplatesResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']['input']>;
};

export type AvailabilityTemplatesConnection = {
  __typename?: 'AvailabilityTemplatesConnection';
  edges: Array<AvailabilityTemplatesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type AvailabilityTemplatesEdge = {
  __typename?: 'AvailabilityTemplatesEdge';
  cursor: Scalars['Base64']['output'];
  node: AvailabilityTemplates;
  offset: Scalars['Int']['output'];
};

export type Break = {
  __typename?: 'Break';
  End?: Maybe<Scalars['Instant']['output']>;
  JobAllocation?: Maybe<JobAllocations>;
  JobAllocationId?: Maybe<Scalars['ID']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Start?: Maybe<Scalars['Instant']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type BreakConnection = {
  __typename?: 'BreakConnection';
  edges: Array<BreakEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BreakEdge = {
  __typename?: 'BreakEdge';
  cursor: Scalars['Base64']['output'];
  node: Break;
  offset: Scalars['Int']['output'];
};

export type ClientAvailabilities = {
  __typename?: 'ClientAvailabilities';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End: Scalars['Instant']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  PreferredEnd?: Maybe<Scalars['Instant']['output']>;
  PreferredStart?: Maybe<Scalars['Instant']['output']>;
  RecurringSchedule?: Maybe<RecurringSchedules>;
  RecurringScheduleId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  UID: Scalars['ID']['output'];
};

export type ClientAvailabilitiesConnection = {
  __typename?: 'ClientAvailabilitiesConnection';
  edges: Array<ClientAvailabilitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ClientAvailabilitiesEdge = {
  __typename?: 'ClientAvailabilitiesEdge';
  cursor: Scalars['Base64']['output'];
  node: ClientAvailabilities;
  offset: Scalars['Int']['output'];
};

export type ContactTags = {
  __typename?: 'ContactTags';
  Contact: Contacts;
  ContactId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type ContactTagsConnection = {
  __typename?: 'ContactTagsConnection';
  edges: Array<ContactTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContactTagsEdge = {
  __typename?: 'ContactTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: ContactTags;
  offset: Scalars['Int']['output'];
};

export type Contacts = {
  __typename?: 'Contacts';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  Availabilities: Array<ClientAvailabilities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Email?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  FullName: Scalars['String']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LastName: Scalars['String']['output'];
  MailingCity?: Maybe<Scalars['String']['output']>;
  MailingPostalCode?: Maybe<Scalars['String']['output']>;
  MailingState?: Maybe<Scalars['String']['output']>;
  MailingStreet?: Maybe<Scalars['String']['output']>;
  MobilePhone?: Maybe<Scalars['String']['output']>;
  OtherCity?: Maybe<Scalars['String']['output']>;
  OtherPostalCode?: Maybe<Scalars['String']['output']>;
  OtherState?: Maybe<Scalars['String']['output']>;
  OtherStreet?: Maybe<Scalars['String']['output']>;
  Phone?: Maybe<Scalars['String']['output']>;
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']['output']>;
  Tags: Array<ContactTags>;
  Title?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type ContactsAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']['input']>;
};


export type ContactsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterContactTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContactTags']['input']>;
};

export type ContactsConnection = {
  __typename?: 'ContactsConnection';
  edges: Array<ContactsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ContactsEdge = {
  __typename?: 'ContactsEdge';
  cursor: Scalars['Base64']['output'];
  node: Contacts;
  offset: Scalars['Int']['output'];
};

export type HolidayRegions = {
  __typename?: 'HolidayRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Holiday: Holidays;
  HolidayId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Region: Regions;
  RegionId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type HolidayRegionsConnection = {
  __typename?: 'HolidayRegionsConnection';
  edges: Array<HolidayRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HolidayRegionsEdge = {
  __typename?: 'HolidayRegionsEdge';
  cursor: Scalars['Base64']['output'];
  node: HolidayRegions;
  offset: Scalars['Int']['output'];
};

export type Holidays = {
  __typename?: 'Holidays';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  EndDate: Scalars['LocalDate']['output'];
  Global: Scalars['Boolean']['output'];
  HolidayRegions: Array<HolidayRegions>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  StartDate: Scalars['LocalDate']['output'];
  UID: Scalars['ID']['output'];
};


export type HolidaysHolidayRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidayRegions']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidayRegions']['input']>;
};

export type HolidaysConnection = {
  __typename?: 'HolidaysConnection';
  edges: Array<HolidaysEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HolidaysEdge = {
  __typename?: 'HolidaysEdge';
  cursor: Scalars['Base64']['output'];
  node: Holidays;
  offset: Scalars['Int']['output'];
};

export type JobAllocations = {
  __typename?: 'JobAllocations';
  APILog?: Maybe<Scalars['String']['output']>;
  ArriveAtYard?: Maybe<Scalars['Instant']['output']>;
  AssetID?: Maybe<Scalars['String']['output']>;
  AssignedTo?: Maybe<Resources>;
  AssignedToId?: Maybe<Scalars['ID']['output']>;
  CheckInToYard?: Maybe<Scalars['Instant']['output']>;
  CheckInYardWithBuffer?: Maybe<Scalars['Instant']['output']>;
  ConfirmedTimes: Scalars['Boolean']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DeclineDescription?: Maybe<Scalars['String']['output']>;
  DeclineReason?: Maybe<Scalars['String']['output']>;
  DeleteByScheduler: Scalars['Boolean']['output'];
  DeletedByJobCancel: Scalars['Boolean']['output'];
  DepartFromYard?: Maybe<Scalars['Instant']['output']>;
  Driver: Scalars['Boolean']['output'];
  DrivingTruck?: Maybe<Resources>;
  DrivingTruckId?: Maybe<Scalars['ID']['output']>;
  Duration?: Maybe<Scalars['Duration']['output']>;
  End?: Maybe<Scalars['Instant']['output']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']['output']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']['output']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HasBreak: Scalars['Boolean']['output'];
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  NotificationType?: Maybe<Scalars['String']['output']>;
  PhoneResponse?: Maybe<Scalars['String']['output']>;
  ReportToYard?: Maybe<Scalars['Instant']['output']>;
  Resource: Resources;
  ResourceApprovedCheckIn?: Maybe<Scalars['Instant']['output']>;
  ResourceApprovedCompleteTime?: Maybe<Scalars['Instant']['output']>;
  ResourceId: Scalars['ID']['output'];
  ResourceRequirement?: Maybe<ResourceRequirements>;
  ResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  SplitDriveTime?: Maybe<Scalars['String']['output']>;
  Start?: Maybe<Scalars['Instant']['output']>;
  StartGeoLocationLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  StartGeoLocationLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  StartLocationAddress?: Maybe<Scalars['String']['output']>;
  StartLocationType?: Maybe<Scalars['String']['output']>;
  StatSheetCheckIn?: Maybe<Scalars['Instant']['output']>;
  StatSheetCompleteTime?: Maybe<Scalars['Instant']['output']>;
  Status: Scalars['JobAllocationStatus']['output'];
  TakenAllMeals?: Maybe<Scalars['String']['output']>;
  TakenAllRestBreaks?: Maybe<Scalars['String']['output']>;
  TeamLeader: Scalars['Boolean']['output'];
  TimeCheckedIn?: Maybe<Scalars['Instant']['output']>;
  TimeCompleted?: Maybe<Scalars['Instant']['output']>;
  TimeInProgress?: Maybe<Scalars['Instant']['output']>;
  TimePublished?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  TimeStartTravel?: Maybe<Scalars['Instant']['output']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']['output']>;
  TravelTime?: Maybe<Scalars['Duration']['output']>;
  UID: Scalars['ID']['output'];
  WaiveSecondMeal: Scalars['Boolean']['output'];
};

export type JobAllocationsConnection = {
  __typename?: 'JobAllocationsConnection';
  edges: Array<JobAllocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobAllocationsEdge = {
  __typename?: 'JobAllocationsEdge';
  cursor: Scalars['Base64']['output'];
  node: JobAllocations;
  offset: Scalars['Int']['output'];
};

export type JobDependencies = {
  __typename?: 'JobDependencies';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  FromAnchor: Scalars['JobDependencyAnchor']['output'];
  FromJob: Jobs;
  FromJobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ToAnchor: Scalars['JobDependencyAnchor']['output'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToJob: Jobs;
  ToJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type JobDependenciesConnection = {
  __typename?: 'JobDependenciesConnection';
  edges: Array<JobDependenciesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobDependenciesEdge = {
  __typename?: 'JobDependenciesEdge';
  cursor: Scalars['Base64']['output'];
  node: JobDependencies;
  offset: Scalars['Int']['output'];
};

export type JobOffers = {
  __typename?: 'JobOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedByResource: Scalars['Boolean']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceJobOffers: Array<ResourceJobOffers>;
  ResourceRequirement?: Maybe<ResourceRequirements>;
  ResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  Status: Scalars['OfferStatus']['output'];
  UID: Scalars['ID']['output'];
};


export type JobOffersResourceJobOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceJobOffers']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceJobOffers']['input']>;
};

export type JobOffersConnection = {
  __typename?: 'JobOffersConnection';
  edges: Array<JobOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobOffersEdge = {
  __typename?: 'JobOffersEdge';
  cursor: Scalars['Base64']['output'];
  node: JobOffers;
  offset: Scalars['Int']['output'];
};

export type JobProducts = {
  __typename?: 'JobProducts';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Product?: Maybe<Products>;
  ProductId?: Maybe<Scalars['ID']['output']>;
  ProductName?: Maybe<Scalars['String']['output']>;
  Qty: Scalars['BigDecimal']['output'];
  UID: Scalars['ID']['output'];
};

export type JobProductsConnection = {
  __typename?: 'JobProductsConnection';
  edges: Array<JobProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobProductsEdge = {
  __typename?: 'JobProductsEdge';
  cursor: Scalars['Base64']['output'];
  node: JobProducts;
  offset: Scalars['Int']['output'];
};

export type JobReportToYard = {
  __typename?: 'JobReportToYard';
  IsPreviousDay: Scalars['Boolean']['output'];
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']['output']>;
  ReportToYardTime?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type JobReportToYardConnection = {
  __typename?: 'JobReportToYardConnection';
  edges: Array<JobReportToYardEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobReportToYardEdge = {
  __typename?: 'JobReportToYardEdge';
  cursor: Scalars['Base64']['output'];
  node: JobReportToYard;
  offset: Scalars['Int']['output'];
};

export type JobSafetyAnalysisForm = {
  __typename?: 'JobSafetyAnalysisForm';
  ContractorName?: Maybe<Scalars['String']['output']>;
  CrewMemberName1?: Maybe<Scalars['String']['output']>;
  CrewMemberName2?: Maybe<Scalars['String']['output']>;
  CrewMemberName3?: Maybe<Scalars['String']['output']>;
  CrewMemberName4?: Maybe<Scalars['String']['output']>;
  CrewMemberName5?: Maybe<Scalars['String']['output']>;
  CrewMemberSignatures?: Maybe<Scalars['String']['output']>;
  CustomerJobNo?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['LocalDate']['output']>;
  Deleted: Scalars['Boolean']['output'];
  DidBATsCrewAttendContractorSafety: Scalars['Boolean']['output'];
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']['output']>;
  JobSafetyAnalysisForm: Array<Signature>;
  LeadName?: Maybe<Scalars['String']['output']>;
  Location?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Question1?: Maybe<Scalars['String']['output']>;
  Question1Details?: Maybe<Scalars['String']['output']>;
  Question2?: Maybe<Scalars['String']['output']>;
  Question2Details?: Maybe<Scalars['String']['output']>;
  Question3?: Maybe<Scalars['String']['output']>;
  Question3Details?: Maybe<Scalars['String']['output']>;
  Question4?: Maybe<Scalars['String']['output']>;
  Question4Details?: Maybe<Scalars['String']['output']>;
  Question5?: Maybe<Scalars['String']['output']>;
  Question5Details?: Maybe<Scalars['String']['output']>;
  Question6?: Maybe<Scalars['String']['output']>;
  Question6Details?: Maybe<Scalars['String']['output']>;
  Question7?: Maybe<Scalars['String']['output']>;
  Question7Details?: Maybe<Scalars['String']['output']>;
  Question8?: Maybe<Scalars['String']['output']>;
  Question8Details?: Maybe<Scalars['String']['output']>;
  Question9?: Maybe<Scalars['String']['output']>;
  Question9Details?: Maybe<Scalars['String']['output']>;
  Question10?: Maybe<Scalars['String']['output']>;
  Question10Details?: Maybe<Scalars['String']['output']>;
  Question11?: Maybe<Scalars['String']['output']>;
  Question11Details?: Maybe<Scalars['String']['output']>;
  Question12?: Maybe<Scalars['String']['output']>;
  Question12Details?: Maybe<Scalars['String']['output']>;
  Question13?: Maybe<Scalars['String']['output']>;
  Question13Details?: Maybe<Scalars['String']['output']>;
  Question14?: Maybe<Scalars['String']['output']>;
  Question14Details?: Maybe<Scalars['String']['output']>;
  Question15?: Maybe<Scalars['String']['output']>;
  Question15Details?: Maybe<Scalars['String']['output']>;
  Question16?: Maybe<Scalars['String']['output']>;
  Question16Details?: Maybe<Scalars['String']['output']>;
  Question17?: Maybe<Scalars['String']['output']>;
  Question17Details?: Maybe<Scalars['String']['output']>;
  Question18?: Maybe<Scalars['String']['output']>;
  Question18Details?: Maybe<Scalars['String']['output']>;
  Question19?: Maybe<Scalars['String']['output']>;
  Question19Details?: Maybe<Scalars['String']['output']>;
  Question20?: Maybe<Scalars['String']['output']>;
  Question20Details?: Maybe<Scalars['String']['output']>;
  Reach80DegreesOrHigher?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  WeatherConditions?: Maybe<Scalars['String']['output']>;
};


export type JobSafetyAnalysisFormJobSafetyAnalysisFormArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterSignature']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseSignature']['input']>;
};

export type JobSafetyAnalysisFormConnection = {
  __typename?: 'JobSafetyAnalysisFormConnection';
  edges: Array<JobSafetyAnalysisFormEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobSafetyAnalysisFormEdge = {
  __typename?: 'JobSafetyAnalysisFormEdge';
  cursor: Scalars['Base64']['output'];
  node: JobSafetyAnalysisForm;
  offset: Scalars['Int']['output'];
};

export type JobStatSheet = {
  __typename?: 'JobStatSheet';
  BATSComments?: Maybe<Scalars['String']['output']>;
  ClientEmail?: Maybe<Scalars['String']['output']>;
  ContractorName?: Maybe<Scalars['String']['output']>;
  CrewSignatures?: Maybe<Scalars['String']['output']>;
  CustomerComments?: Maybe<Scalars['String']['output']>;
  CustomerName?: Maybe<Scalars['String']['output']>;
  Deleted: Scalars['Boolean']['output'];
  DidTheBATsCrewAttendContractorSafe: Scalars['Boolean']['output'];
  Direction?: Maybe<Scalars['String']['output']>;
  HaveUpdated: Scalars['Boolean']['output'];
  IsCompleted: Scalars['Boolean']['output'];
  IsSubmitted: Scalars['Boolean']['output'];
  Job?: Maybe<Jobs>;
  JobId?: Maybe<Scalars['ID']['output']>;
  Lanes?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PGENaturalDisasterLocation?: Maybe<Scalars['String']['output']>;
  PGENaturalDisasterType?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type JobStatSheetConnection = {
  __typename?: 'JobStatSheetConnection';
  edges: Array<JobStatSheetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobStatSheetEdge = {
  __typename?: 'JobStatSheetEdge';
  cursor: Scalars['Base64']['output'];
  node: JobStatSheet;
  offset: Scalars['Int']['output'];
};

export type JobTags = {
  __typename?: 'JobTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type JobTagsConnection = {
  __typename?: 'JobTagsConnection';
  edges: Array<JobTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobTagsEdge = {
  __typename?: 'JobTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: JobTags;
  offset: Scalars['Int']['output'];
};

export type JobTasks = {
  __typename?: 'JobTasks';
  Completed: Scalars['Boolean']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Seq: Scalars['Int']['output'];
  UID: Scalars['ID']['output'];
};

export type JobTasksConnection = {
  __typename?: 'JobTasksConnection';
  edges: Array<JobTasksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobTasksEdge = {
  __typename?: 'JobTasksEdge';
  cursor: Scalars['Base64']['output'];
  node: JobTasks;
  offset: Scalars['Int']['output'];
};

export type JobTimeConstraints = {
  __typename?: 'JobTimeConstraints';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  EndBefore?: Maybe<Scalars['Instant']['output']>;
  Job: Jobs;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  StartAfter?: Maybe<Scalars['Instant']['output']>;
  StartBefore?: Maybe<Scalars['Instant']['output']>;
  Type: Scalars['JobTimeConstraintType']['output'];
  UID: Scalars['ID']['output'];
};

export type JobTimeConstraintsConnection = {
  __typename?: 'JobTimeConstraintsConnection';
  edges: Array<JobTimeConstraintsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobTimeConstraintsEdge = {
  __typename?: 'JobTimeConstraintsEdge';
  cursor: Scalars['Base64']['output'];
  node: JobTimeConstraints;
  offset: Scalars['Int']['output'];
};

export type JobTypeSetting = {
  __typename?: 'JobTypeSetting';
  JobType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ResourceCategory?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type JobTypeSettingConnection = {
  __typename?: 'JobTypeSettingConnection';
  edges: Array<JobTypeSettingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobTypeSettingEdge = {
  __typename?: 'JobTypeSettingEdge';
  cursor: Scalars['Base64']['output'];
  node: JobTypeSetting;
  offset: Scalars['Int']['output'];
};

export type JobTypeTag = {
  __typename?: 'JobTypeTag';
  JobTypeSetting?: Maybe<JobTypeSetting>;
  JobTypeSettingId?: Maybe<Scalars['ID']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Tag?: Maybe<Tags>;
  TagId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type JobTypeTagConnection = {
  __typename?: 'JobTypeTagConnection';
  edges: Array<JobTypeTagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobTypeTagEdge = {
  __typename?: 'JobTypeTagEdge';
  cursor: Scalars['Base64']['output'];
  node: JobTypeTag;
  offset: Scalars['Int']['output'];
};

export type Jobs = {
  __typename?: 'Jobs';
  AbortReason?: Maybe<Scalars['String']['output']>;
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  ActualEnd?: Maybe<Scalars['Instant']['output']>;
  ActualStart?: Maybe<Scalars['Instant']['output']>;
  AdditionalContactName?: Maybe<Scalars['String']['output']>;
  Address?: Maybe<Scalars['String']['output']>;
  AdminCancellationTime?: Maybe<Scalars['Instant']['output']>;
  AdminCancelledBy?: Maybe<Users>;
  AdminCancelledById?: Maybe<Scalars['ID']['output']>;
  Alert?: Maybe<Scalars['String']['output']>;
  Attachments?: Maybe<Scalars['String']['output']>;
  Attendees: Array<Attendees>;
  AutoSchedule: Scalars['Boolean']['output'];
  BATSAccountManager?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerEmail?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerPhone?: Maybe<Scalars['String']['output']>;
  BATSStatusAtTimeOfCancellation?: Maybe<Scalars['String']['output']>;
  Branches?: Maybe<Scalars['String']['output']>;
  CanBeDeclined: Scalars['Boolean']['output'];
  CancellationExplanation?: Maybe<Scalars['String']['output']>;
  CancellationTimeStr?: Maybe<Scalars['String']['output']>;
  CertifiedPayroll: Scalars['Boolean']['output'];
  ChargeForCancellation: Scalars['Boolean']['output'];
  City?: Maybe<Scalars['String']['output']>;
  CompletionNotes?: Maybe<Scalars['String']['output']>;
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']['output']>;
  CopiedFrom?: Maybe<Jobs>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedBySales: Scalars['Boolean']['output'];
  CreatedDate: Scalars['Instant']['output'];
  CrewSize?: Maybe<Scalars['BigDecimal']['output']>;
  CustomerCancellationTimeStr?: Maybe<Scalars['String']['output']>;
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']['output']>;
  CustomerEmail?: Maybe<Scalars['String']['output']>;
  CustomerInitiatedCancellationBy?: Maybe<Users>;
  CustomerInitiatedCancellationById?: Maybe<Scalars['ID']['output']>;
  CustomerInitiatedCancellationTime?: Maybe<Scalars['Instant']['output']>;
  CustomerJobNo?: Maybe<Scalars['String']['output']>;
  CustomerPhone?: Maybe<Scalars['String']['output']>;
  CustomerRole?: Maybe<Scalars['String']['output']>;
  CustomerTierLevel?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  DispatcherCancellationReason?: Maybe<Scalars['String']['output']>;
  DispatcherFollowUp?: Maybe<Scalars['String']['output']>;
  DispatcherNotes?: Maybe<Scalars['String']['output']>;
  DispatcherReliefCrew?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  EmergencyJob: Scalars['Boolean']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  EquipmentSetUp: Scalars['Boolean']['output'];
  EstimatedEnd?: Maybe<Scalars['Instant']['output']>;
  EstimatedStart?: Maybe<Scalars['Instant']['output']>;
  FirstJobInRecurring: Scalars['Boolean']['output'];
  FollowUp?: Maybe<Scalars['String']['output']>;
  FollowupReason?: Maybe<Scalars['String']['output']>;
  Followups: Array<Jobs>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  ImmediateResponse: Scalars['Boolean']['output'];
  InventoryRequestCancelledBy?: Maybe<Users>;
  InventoryRequestCancelledById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestFilled: Scalars['Boolean']['output'];
  InventoryRequestFilledBy?: Maybe<Users>;
  InventoryRequestFilledById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestFilledTime?: Maybe<Scalars['Instant']['output']>;
  InventoryRequested: Scalars['Boolean']['output'];
  InventoryRequestedBy?: Maybe<Users>;
  InventoryRequestedById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestedCancelled: Scalars['Boolean']['output'];
  InventoryRequestedCancelledDateTime?: Maybe<Scalars['Instant']['output']>;
  InventoryRequestedTime?: Maybe<Scalars['Instant']['output']>;
  IsAssetUpdated: Scalars['Boolean']['output'];
  IsGroupEvent: Scalars['Boolean']['output'];
  IsJSAFormChanged: Scalars['Boolean']['output'];
  IsJSAFormCreated: Scalars['Boolean']['output'];
  IsSoftCancellation: Scalars['Boolean']['output'];
  Job: Array<Timesheet>;
  JobAllocationCount: Scalars['Int']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  JobAllocations: Array<JobAllocations>;
  JobDependenciesFrom: Array<JobDependencies>;
  JobDependenciesTo: Array<JobDependencies>;
  JobOffers: Array<JobOffers>;
  JobProducts: Array<JobProducts>;
  JobStatus: Scalars['JobStatus']['output'];
  JobTags: Array<JobTags>;
  JobTasks: Array<JobTasks>;
  JobTimeConstraints: Array<JobTimeConstraints>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']['output']>;
  Locked: Scalars['Boolean']['output'];
  MaxAttendees?: Maybe<Scalars['Int']['output']>;
  MinAttendees?: Maybe<Scalars['Int']['output']>;
  MuteNotifications: Scalars['Boolean']['output'];
  Name: Scalars['String']['output'];
  NearestYard?: Maybe<Regions>;
  NearestYardId?: Maybe<Scalars['ID']['output']>;
  NoCustomerOnsite: Scalars['Boolean']['output'];
  NotesComments?: Maybe<Scalars['String']['output']>;
  NotifyBy?: Maybe<Scalars['Instant']['output']>;
  NotifyPeriod?: Maybe<Scalars['Int']['output']>;
  NotifyTeamLeaderTime?: Maybe<Scalars['Instant']['output']>;
  OnsiteContact?: Maybe<Contacts>;
  OnsiteContactEmail?: Maybe<Scalars['String']['output']>;
  OnsiteContactId?: Maybe<Scalars['ID']['output']>;
  OnsiteContactPhone?: Maybe<Scalars['String']['output']>;
  OnsiteContactRole?: Maybe<Scalars['String']['output']>;
  OtherDocs: Scalars['Boolean']['output'];
  OvernightStay: Scalars['Boolean']['output'];
  PGEJob: Scalars['Boolean']['output'];
  PGEJobType?: Maybe<Scalars['String']['output']>;
  PGEOfficeClerkName?: Maybe<Scalars['String']['output']>;
  PGEOfficeToBill?: Maybe<Accounts>;
  PGEOfficeToBillId?: Maybe<Scalars['ID']['output']>;
  PM?: Maybe<Scalars['String']['output']>;
  PO?: Maybe<Scalars['String']['output']>;
  Parent?: Maybe<Jobs>;
  ParentId?: Maybe<Scalars['ID']['output']>;
  PrivatelyFunded: Scalars['Boolean']['output'];
  Project?: Maybe<Project>;
  ProjectId?: Maybe<Scalars['ID']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  RecurringSchedule?: Maybe<RecurringSchedules>;
  RecurringScheduleId?: Maybe<Scalars['ID']['output']>;
  Region: Regions;
  RegionId: Scalars['ID']['output'];
  ReliefCrew?: Maybe<Scalars['String']['output']>;
  RequestApprovalStatus?: Maybe<Scalars['String']['output']>;
  RequiredTrucks?: Maybe<Scalars['BigDecimal']['output']>;
  ResourceCancelApprovedRejectedBy?: Maybe<Users>;
  ResourceCancelApprovedRejectedById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationApprovedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationBy?: Maybe<Users>;
  ResourceCancellationById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationRejectedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationRequestStatus?: Maybe<Scalars['String']['output']>;
  ResourceCancellationRequestedBy?: Maybe<Users>;
  ResourceCancellationRequestedById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationRequestedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationTime?: Maybe<Scalars['Instant']['output']>;
  ResourceRequirements: Array<ResourceRequirements>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  SecondaryJobType?: Maybe<Scalars['String']['output']>;
  Sections?: Maybe<Scalars['String']['output']>;
  SendEmailNotificationToDispatched: Scalars['Boolean']['output'];
  SitePicturesRequired: Scalars['Boolean']['output'];
  Start?: Maybe<Scalars['Instant']['output']>;
  StatSheetSigningTime?: Maybe<Scalars['Instant']['output']>;
  StatSheetSubmittedTime?: Maybe<Scalars['Instant']['output']>;
  TemplatedJob?: Maybe<TemplatedJobs>;
  TemplatedJobId?: Maybe<Scalars['ID']['output']>;
  Timezone: Scalars['String']['output'];
  TrafficPermitIncluded: Scalars['Boolean']['output'];
  TrafficPlanIncluded: Scalars['Boolean']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Urgency?: Maybe<Scalars['String']['output']>;
  VirtualMeetingId?: Maybe<Scalars['String']['output']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']['output']>;
  VirtualMeetingURL?: Maybe<Scalars['String']['output']>;
  X2WayRadiosRequired: Scalars['Boolean']['output'];
};


export type JobsAttendeesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendees']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendees']['input']>;
};


export type JobsFollowupsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type JobsJobArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheet']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheet']['input']>;
};


export type JobsJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']['input']>;
};


export type JobsJobDependenciesFromArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']['input']>;
};


export type JobsJobDependenciesToArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']['input']>;
};


export type JobsJobOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobOffers']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobOffers']['input']>;
};


export type JobsJobProductsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobProducts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobProducts']['input']>;
};


export type JobsJobTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTags']['input']>;
};


export type JobsJobTasksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTasks']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTasks']['input']>;
};


export type JobsJobTimeConstraintsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTimeConstraints']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTimeConstraints']['input']>;
};


export type JobsResourceRequirementsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirements']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirements']['input']>;
};

export type JobsConnection = {
  __typename?: 'JobsConnection';
  edges: Array<JobsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type JobsEdge = {
  __typename?: 'JobsEdge';
  cursor: Scalars['Base64']['output'];
  node: Jobs;
  offset: Scalars['Int']['output'];
};

export type LocationResourceScores = {
  __typename?: 'LocationResourceScores';
  Blacklisted: Scalars['Boolean']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location: Locations;
  LocationId: Scalars['ID']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Whitelisted: Scalars['Boolean']['output'];
};

export type LocationResourceScoresConnection = {
  __typename?: 'LocationResourceScoresConnection';
  edges: Array<LocationResourceScoresEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LocationResourceScoresEdge = {
  __typename?: 'LocationResourceScoresEdge';
  cursor: Scalars['Base64']['output'];
  node: LocationResourceScores;
  offset: Scalars['Int']['output'];
};

export type Locations = {
  __typename?: 'Locations';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  Activities: Array<Activities>;
  Address?: Maybe<Scalars['String']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']['output']>;
  RequiresWhitelist: Scalars['Boolean']['output'];
  ResourceScores: Array<LocationResourceScores>;
  Shifts: Array<Shifts>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type LocationsActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']['input']>;
};


export type LocationsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type LocationsResourceScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']['input']>;
};


export type LocationsShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']['input']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LocationsEdge = {
  __typename?: 'LocationsEdge';
  cursor: Scalars['Base64']['output'];
  node: Locations;
  offset: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  schema: SchemaMutation;
};

export type NewAccountResourceScores = {
  AccountId: Scalars['ID']['input'];
  Blacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceId: Scalars['ID']['input'];
  Whitelisted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewAccountTags = {
  AccountId: Scalars['ID']['input'];
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewAccounts = {
  BATSAccountManagerId?: InputMaybe<Scalars['ID']['input']>;
  BillingCity?: InputMaybe<Scalars['String']['input']>;
  BillingPostalCode?: InputMaybe<Scalars['String']['input']>;
  BillingState?: InputMaybe<Scalars['String']['input']>;
  BillingStreet?: InputMaybe<Scalars['String']['input']>;
  Fax?: InputMaybe<Scalars['String']['input']>;
  Name: Scalars['String']['input'];
  PGE?: InputMaybe<Scalars['Boolean']['input']>;
  Phone?: InputMaybe<Scalars['String']['input']>;
  Rank?: InputMaybe<Scalars['Int']['input']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']['input']>;
  ShippingCity?: InputMaybe<Scalars['String']['input']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']['input']>;
  ShippingState?: InputMaybe<Scalars['String']['input']>;
  ShippingStreet?: InputMaybe<Scalars['String']['input']>;
  Status?: InputMaybe<Scalars['String']['input']>;
  TierLevel?: InputMaybe<Scalars['String']['input']>;
};

export type NewActivities = {
  Address?: InputMaybe<Scalars['String']['input']>;
  CopiedFromId?: InputMaybe<Scalars['ID']['input']>;
  End: Scalars['Instant']['input'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  JobAllocationId?: InputMaybe<Scalars['ID']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  Start: Scalars['Instant']['input'];
  TemplatedActivityId?: InputMaybe<Scalars['ID']['input']>;
  Timezone?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type NewActivityResources = {
  ActivityId: Scalars['ID']['input'];
  ResourceId: Scalars['ID']['input'];
};

export type NewAttendees = {
  CancelReason?: InputMaybe<Scalars['String']['input']>;
  ContactId: Scalars['ID']['input'];
  JobId: Scalars['ID']['input'];
  Status?: InputMaybe<Scalars['AttendeeStatus']['input']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']['input']>;
};

export type NewAvailabilities = {
  Finish: Scalars['Instant']['input'];
  IsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  PaidTimeOffID?: InputMaybe<Scalars['String']['input']>;
  ResourceId: Scalars['ID']['input'];
  Start: Scalars['Instant']['input'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type NewAvailabilityPatternResources = {
  AvailabilityPatternId: Scalars['ID']['input'];
  End?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId: Scalars['ID']['input'];
  Start: Scalars['Instant']['input'];
  Status?: InputMaybe<Scalars['AvailabilityStatus']['input']>;
};

export type NewAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Hash: Scalars['String']['input'];
  Name: Scalars['String']['input'];
  Pattern: Scalars['String']['input'];
};

export type NewAvailabilityTemplateEntries = {
  AvailabilityTemplateId: Scalars['ID']['input'];
  FinishTime: Scalars['Int']['input'];
  IsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  StartTime: Scalars['Int']['input'];
  Weekday: Scalars['Weekday']['input'];
};

export type NewAvailabilityTemplateResources = {
  AvailabilityTemplateId: Scalars['ID']['input'];
  Migrated?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceId: Scalars['ID']['input'];
};

export type NewAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']['input']>;
  Finish?: InputMaybe<Scalars['LocalDate']['input']>;
  Global?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Start?: InputMaybe<Scalars['LocalDate']['input']>;
};

export type NewBreak = {
  End?: InputMaybe<Scalars['Instant']['input']>;
  JobAllocationId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type NewClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  End: Scalars['Instant']['input'];
  IsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']['input']>;
  PreferredStart?: InputMaybe<Scalars['Instant']['input']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']['input']>;
  Start: Scalars['Instant']['input'];
};

export type NewContactTags = {
  ContactId: Scalars['ID']['input'];
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewContacts = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  LastName: Scalars['String']['input'];
  MailingCity?: InputMaybe<Scalars['String']['input']>;
  MailingPostalCode?: InputMaybe<Scalars['String']['input']>;
  MailingState?: InputMaybe<Scalars['String']['input']>;
  MailingStreet?: InputMaybe<Scalars['String']['input']>;
  MobilePhone?: InputMaybe<Scalars['String']['input']>;
  OtherCity?: InputMaybe<Scalars['String']['input']>;
  OtherPostalCode?: InputMaybe<Scalars['String']['input']>;
  OtherState?: InputMaybe<Scalars['String']['input']>;
  OtherStreet?: InputMaybe<Scalars['String']['input']>;
  Phone?: InputMaybe<Scalars['String']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
};

export type NewHolidayRegions = {
  HolidayId: Scalars['ID']['input'];
  RegionId: Scalars['ID']['input'];
};

export type NewHolidays = {
  EndDate: Scalars['LocalDate']['input'];
  Global?: InputMaybe<Scalars['Boolean']['input']>;
  Name: Scalars['String']['input'];
  StartDate: Scalars['LocalDate']['input'];
};

export type NewJobAllocations = {
  APILog?: InputMaybe<Scalars['String']['input']>;
  ArriveAtYard?: InputMaybe<Scalars['Instant']['input']>;
  AssetID?: InputMaybe<Scalars['String']['input']>;
  AssignedToId?: InputMaybe<Scalars['ID']['input']>;
  CheckInToYard?: InputMaybe<Scalars['Instant']['input']>;
  CheckInYardWithBuffer?: InputMaybe<Scalars['Instant']['input']>;
  ConfirmedTimes?: InputMaybe<Scalars['Boolean']['input']>;
  DeclineDescription?: InputMaybe<Scalars['String']['input']>;
  DeclineReason?: InputMaybe<Scalars['String']['input']>;
  DeleteByScheduler?: InputMaybe<Scalars['Boolean']['input']>;
  DeletedByJobCancel?: InputMaybe<Scalars['Boolean']['input']>;
  DepartFromYard?: InputMaybe<Scalars['Instant']['input']>;
  Driver?: InputMaybe<Scalars['Boolean']['input']>;
  DrivingTruckId?: InputMaybe<Scalars['ID']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']['input']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']['input']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  HasBreak?: InputMaybe<Scalars['Boolean']['input']>;
  JobId: Scalars['ID']['input'];
  NotificationType?: InputMaybe<Scalars['String']['input']>;
  PhoneResponse?: InputMaybe<Scalars['String']['input']>;
  ReportToYard?: InputMaybe<Scalars['Instant']['input']>;
  ResourceApprovedCheckIn?: InputMaybe<Scalars['Instant']['input']>;
  ResourceApprovedCompleteTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId: Scalars['ID']['input'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  SplitDriveTime?: InputMaybe<Scalars['String']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  StartGeoLocationLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  StartGeoLocationLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  StartLocationAddress?: InputMaybe<Scalars['String']['input']>;
  StartLocationType?: InputMaybe<Scalars['String']['input']>;
  StatSheetCheckIn?: InputMaybe<Scalars['Instant']['input']>;
  StatSheetCompleteTime?: InputMaybe<Scalars['Instant']['input']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']['input']>;
  TakenAllMeals?: InputMaybe<Scalars['String']['input']>;
  TakenAllRestBreaks?: InputMaybe<Scalars['String']['input']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']['input']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']['input']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']['input']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']['input']>;
  TimePublished?: InputMaybe<Scalars['Instant']['input']>;
  TimeResponded?: InputMaybe<Scalars['Instant']['input']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']['input']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']['input']>;
  TravelTime?: InputMaybe<Scalars['Duration']['input']>;
  WaiveSecondMeal?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  FromJobId: Scalars['ID']['input'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToJobId: Scalars['ID']['input'];
};

export type NewJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']['input']>;
  JobId: Scalars['ID']['input'];
  ResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  Status?: InputMaybe<Scalars['OfferStatus']['input']>;
};

export type NewJobProducts = {
  JobId: Scalars['ID']['input'];
  ProductId?: InputMaybe<Scalars['ID']['input']>;
  Qty: Scalars['BigDecimal']['input'];
};

export type NewJobReportToYard = {
  IsPreviousDay?: InputMaybe<Scalars['Boolean']['input']>;
  JobId: Scalars['ID']['input'];
  Name?: InputMaybe<Scalars['String']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ReportToYardTime?: InputMaybe<Scalars['Instant']['input']>;
};

export type NewJobSafetyAnalysisForm = {
  ContractorName?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName1?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName2?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName3?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName4?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName5?: InputMaybe<Scalars['String']['input']>;
  CrewMemberSignatures?: InputMaybe<Scalars['String']['input']>;
  CustomerJobNo?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['LocalDate']['input']>;
  DidBATsCrewAttendContractorSafety?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  LeadName?: InputMaybe<Scalars['String']['input']>;
  Location?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Question1?: InputMaybe<Scalars['String']['input']>;
  Question1Details?: InputMaybe<Scalars['String']['input']>;
  Question2?: InputMaybe<Scalars['String']['input']>;
  Question2Details?: InputMaybe<Scalars['String']['input']>;
  Question3?: InputMaybe<Scalars['String']['input']>;
  Question3Details?: InputMaybe<Scalars['String']['input']>;
  Question4?: InputMaybe<Scalars['String']['input']>;
  Question4Details?: InputMaybe<Scalars['String']['input']>;
  Question5?: InputMaybe<Scalars['String']['input']>;
  Question5Details?: InputMaybe<Scalars['String']['input']>;
  Question6?: InputMaybe<Scalars['String']['input']>;
  Question6Details?: InputMaybe<Scalars['String']['input']>;
  Question7?: InputMaybe<Scalars['String']['input']>;
  Question7Details?: InputMaybe<Scalars['String']['input']>;
  Question8?: InputMaybe<Scalars['String']['input']>;
  Question8Details?: InputMaybe<Scalars['String']['input']>;
  Question9?: InputMaybe<Scalars['String']['input']>;
  Question9Details?: InputMaybe<Scalars['String']['input']>;
  Question10?: InputMaybe<Scalars['String']['input']>;
  Question10Details?: InputMaybe<Scalars['String']['input']>;
  Question11?: InputMaybe<Scalars['String']['input']>;
  Question11Details?: InputMaybe<Scalars['String']['input']>;
  Question12?: InputMaybe<Scalars['String']['input']>;
  Question12Details?: InputMaybe<Scalars['String']['input']>;
  Question13?: InputMaybe<Scalars['String']['input']>;
  Question13Details?: InputMaybe<Scalars['String']['input']>;
  Question14?: InputMaybe<Scalars['String']['input']>;
  Question14Details?: InputMaybe<Scalars['String']['input']>;
  Question15?: InputMaybe<Scalars['String']['input']>;
  Question15Details?: InputMaybe<Scalars['String']['input']>;
  Question16?: InputMaybe<Scalars['String']['input']>;
  Question16Details?: InputMaybe<Scalars['String']['input']>;
  Question17?: InputMaybe<Scalars['String']['input']>;
  Question17Details?: InputMaybe<Scalars['String']['input']>;
  Question18?: InputMaybe<Scalars['String']['input']>;
  Question18Details?: InputMaybe<Scalars['String']['input']>;
  Question19?: InputMaybe<Scalars['String']['input']>;
  Question19Details?: InputMaybe<Scalars['String']['input']>;
  Question20?: InputMaybe<Scalars['String']['input']>;
  Question20Details?: InputMaybe<Scalars['String']['input']>;
  Reach80DegreesOrHigher?: InputMaybe<Scalars['String']['input']>;
  WeatherConditions?: InputMaybe<Scalars['String']['input']>;
};

export type NewJobStatSheet = {
  BATSComments?: InputMaybe<Scalars['String']['input']>;
  ClientEmail?: InputMaybe<Scalars['String']['input']>;
  ContractorName?: InputMaybe<Scalars['String']['input']>;
  CrewSignatures?: InputMaybe<Scalars['String']['input']>;
  CustomerComments?: InputMaybe<Scalars['String']['input']>;
  CustomerName?: InputMaybe<Scalars['String']['input']>;
  DidTheBATsCrewAttendContractorSafe?: InputMaybe<Scalars['Boolean']['input']>;
  Direction?: InputMaybe<Scalars['String']['input']>;
  HaveUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  IsCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  IsSubmitted?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Lanes?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PGENaturalDisasterLocation?: InputMaybe<Scalars['String']['input']>;
  PGENaturalDisasterType?: InputMaybe<Scalars['String']['input']>;
};

export type NewJobTags = {
  JobId: Scalars['ID']['input'];
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  JobId: Scalars['ID']['input'];
  Name: Scalars['String']['input'];
  Seq: Scalars['Int']['input'];
};

export type NewJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']['input']>;
  JobId: Scalars['ID']['input'];
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  StartAfter?: InputMaybe<Scalars['Instant']['input']>;
  StartBefore?: InputMaybe<Scalars['Instant']['input']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']['input']>;
};

export type NewJobTypeSetting = {
  JobType?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  ResourceCategory?: InputMaybe<Scalars['String']['input']>;
};

export type NewJobTypeTag = {
  JobTypeSettingId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewJobs = {
  AbortReason?: InputMaybe<Scalars['String']['input']>;
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  ActualEnd?: InputMaybe<Scalars['Instant']['input']>;
  ActualStart?: InputMaybe<Scalars['Instant']['input']>;
  Address?: InputMaybe<Scalars['String']['input']>;
  AdminCancellationTime?: InputMaybe<Scalars['Instant']['input']>;
  AdminCancelledById?: InputMaybe<Scalars['ID']['input']>;
  Alert?: InputMaybe<Scalars['String']['input']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  BATSStatusAtTimeOfCancellation?: InputMaybe<Scalars['String']['input']>;
  Branches?: InputMaybe<Scalars['String']['input']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']['input']>;
  CancellationExplanation?: InputMaybe<Scalars['String']['input']>;
  CancellationTimeStr?: InputMaybe<Scalars['String']['input']>;
  CertifiedPayroll?: InputMaybe<Scalars['Boolean']['input']>;
  ChargeForCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  City?: InputMaybe<Scalars['String']['input']>;
  CompletionNotes?: InputMaybe<Scalars['String']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  CopiedFromId?: InputMaybe<Scalars['ID']['input']>;
  CreatedBySales?: InputMaybe<Scalars['Boolean']['input']>;
  CrewSize?: InputMaybe<Scalars['BigDecimal']['input']>;
  CustomerCancellationTimeStr?: InputMaybe<Scalars['String']['input']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']['input']>;
  CustomerEmail?: InputMaybe<Scalars['String']['input']>;
  CustomerInitiatedCancellationById?: InputMaybe<Scalars['ID']['input']>;
  CustomerInitiatedCancellationTime?: InputMaybe<Scalars['Instant']['input']>;
  CustomerJobNo?: InputMaybe<Scalars['String']['input']>;
  CustomerPhone?: InputMaybe<Scalars['String']['input']>;
  CustomerRole?: InputMaybe<Scalars['String']['input']>;
  CustomerTierLevel?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  DispatcherCancellationReason?: InputMaybe<Scalars['String']['input']>;
  DispatcherFollowUp?: InputMaybe<Scalars['String']['input']>;
  DispatcherNotes?: InputMaybe<Scalars['String']['input']>;
  DispatcherReliefCrew?: InputMaybe<Scalars['String']['input']>;
  Duration: Scalars['Duration']['input'];
  EmergencyJob?: InputMaybe<Scalars['Boolean']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  EquipmentSetUp?: InputMaybe<Scalars['Boolean']['input']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']['input']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']['input']>;
  FirstJobInRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  FollowUp?: InputMaybe<Scalars['String']['input']>;
  FollowupReason?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  ImmediateResponse?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestCancelledById?: InputMaybe<Scalars['ID']['input']>;
  InventoryRequestFilled?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestFilledById?: InputMaybe<Scalars['ID']['input']>;
  InventoryRequestFilledTime?: InputMaybe<Scalars['Instant']['input']>;
  InventoryRequested?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestedById?: InputMaybe<Scalars['ID']['input']>;
  InventoryRequestedCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestedCancelledDateTime?: InputMaybe<Scalars['Instant']['input']>;
  InventoryRequestedTime?: InputMaybe<Scalars['Instant']['input']>;
  IsAssetUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']['input']>;
  IsJSAFormChanged?: InputMaybe<Scalars['Boolean']['input']>;
  IsJSAFormCreated?: InputMaybe<Scalars['Boolean']['input']>;
  IsSoftCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Locked?: InputMaybe<Scalars['Boolean']['input']>;
  MaxAttendees?: InputMaybe<Scalars['Int']['input']>;
  MinAttendees?: InputMaybe<Scalars['Int']['input']>;
  MuteNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  NearestYardId?: InputMaybe<Scalars['ID']['input']>;
  NoCustomerOnsite?: InputMaybe<Scalars['Boolean']['input']>;
  NotesComments?: InputMaybe<Scalars['String']['input']>;
  NotifyBy?: InputMaybe<Scalars['Instant']['input']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']['input']>;
  NotifyTeamLeaderTime?: InputMaybe<Scalars['Instant']['input']>;
  OnsiteContactEmail?: InputMaybe<Scalars['String']['input']>;
  OnsiteContactId?: InputMaybe<Scalars['ID']['input']>;
  OnsiteContactPhone?: InputMaybe<Scalars['String']['input']>;
  OnsiteContactRole?: InputMaybe<Scalars['String']['input']>;
  OtherDocs?: InputMaybe<Scalars['Boolean']['input']>;
  OvernightStay?: InputMaybe<Scalars['Boolean']['input']>;
  PGEJob?: InputMaybe<Scalars['Boolean']['input']>;
  PGEJobType?: InputMaybe<Scalars['String']['input']>;
  PGEOfficeClerkName?: InputMaybe<Scalars['String']['input']>;
  PGEOfficeToBillId?: InputMaybe<Scalars['ID']['input']>;
  PM?: InputMaybe<Scalars['String']['input']>;
  PO?: InputMaybe<Scalars['String']['input']>;
  ParentId?: InputMaybe<Scalars['ID']['input']>;
  PrivatelyFunded?: InputMaybe<Scalars['Boolean']['input']>;
  ProjectId?: InputMaybe<Scalars['ID']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']['input']>;
  RegionId: Scalars['ID']['input'];
  ReliefCrew?: InputMaybe<Scalars['String']['input']>;
  RequestApprovalStatus?: InputMaybe<Scalars['String']['input']>;
  RequiredTrucks?: InputMaybe<Scalars['BigDecimal']['input']>;
  ResourceCancelApprovedRejectedById?: InputMaybe<Scalars['ID']['input']>;
  ResourceCancellationApprovedTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceCancellationById?: InputMaybe<Scalars['ID']['input']>;
  ResourceCancellationRejectedTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceCancellationRequestStatus?: InputMaybe<Scalars['String']['input']>;
  ResourceCancellationRequestedById?: InputMaybe<Scalars['ID']['input']>;
  ResourceCancellationRequestedTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceCancellationTime?: InputMaybe<Scalars['Instant']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  SecondaryJobType?: InputMaybe<Scalars['String']['input']>;
  Sections?: InputMaybe<Scalars['String']['input']>;
  SendEmailNotificationToDispatched?: InputMaybe<Scalars['Boolean']['input']>;
  SitePicturesRequired?: InputMaybe<Scalars['Boolean']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  StatSheetSigningTime?: InputMaybe<Scalars['Instant']['input']>;
  StatSheetSubmittedTime?: InputMaybe<Scalars['Instant']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  TrafficPermitIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  TrafficPlanIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  Urgency?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']['input']>;
  X2WayRadiosRequired?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId: Scalars['ID']['input'];
  ResourceId: Scalars['ID']['input'];
  Whitelisted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewLocations = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Address?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name: Scalars['String']['input'];
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type NewProducts = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Family?: InputMaybe<Scalars['String']['input']>;
  IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  Name: Scalars['String']['input'];
  ProductCode?: InputMaybe<Scalars['String']['input']>;
};

export type NewProject = {
  Name?: InputMaybe<Scalars['String']['input']>;
  ProjectCode?: InputMaybe<Scalars['String']['input']>;
};

export type NewRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Summary?: InputMaybe<Scalars['String']['input']>;
};

export type NewRegions = {
  CountryCode?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  IsInactiveRegion?: InputMaybe<Scalars['Boolean']['input']>;
  Name: Scalars['String']['input'];
  Radius?: InputMaybe<Scalars['Int']['input']>;
  Timezone: Scalars['String']['input'];
};

export type NewResourceCategorySetting = {
  DashboardGroup?: InputMaybe<Scalars['String']['input']>;
  DashboardOrder?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  RequireDriver?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceCategory?: InputMaybe<Scalars['String']['input']>;
  ShowOnDashboard?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewResourceCategoryTag = {
  Name?: InputMaybe<Scalars['String']['input']>;
  ResourceCategorySettingId?: InputMaybe<Scalars['ID']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewResourceJobOffers = {
  JobOfferId: Scalars['ID']['input'];
  ResourceId: Scalars['ID']['input'];
  Response?: InputMaybe<Scalars['OfferResponse']['input']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']['input']>;
  TimeNotified?: InputMaybe<Scalars['Instant']['input']>;
  TimeResponded?: InputMaybe<Scalars['Instant']['input']>;
};

export type NewResourceOverrideRegions = {
  RegionId: Scalars['ID']['input'];
  ResourceOverrideId: Scalars['ID']['input'];
};

export type NewResourceOverrides = {
  Description?: InputMaybe<Scalars['String']['input']>;
  End: Scalars['Instant']['input'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  HomeAddress?: InputMaybe<Scalars['String']['input']>;
  ResourceId: Scalars['ID']['input'];
  Start: Scalars['Instant']['input'];
};

export type NewResourceRegions = {
  End?: InputMaybe<Scalars['Instant']['input']>;
  RegionId: Scalars['ID']['input'];
  ResourceId: Scalars['ID']['input'];
  Start?: InputMaybe<Scalars['Instant']['input']>;
};

export type NewResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceRequirementId: Scalars['ID']['input'];
  TagId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewResourceRequirements = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  JobId: Scalars['ID']['input'];
  Quantity: Scalars['Int']['input'];
  RelativeStart?: InputMaybe<Scalars['Duration']['input']>;
  ResourceCategory?: InputMaybe<Scalars['String']['input']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']['input']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']['input']>;
  Status?: InputMaybe<Scalars['JobStatus']['input']>;
};

export type NewResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']['input']>;
  ResourceShiftId: Scalars['ID']['input'];
  Start: Scalars['Instant']['input'];
};

export type NewResourceShiftOffers = {
  ResourceId: Scalars['ID']['input'];
  Response?: InputMaybe<Scalars['OfferResponse']['input']>;
  ShiftOfferId: Scalars['ID']['input'];
  Status?: InputMaybe<Scalars['ResourceOfferStatus']['input']>;
  TimeNotified?: InputMaybe<Scalars['Instant']['input']>;
  TimeResponded?: InputMaybe<Scalars['Instant']['input']>;
};

export type NewResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']['input']>;
  ActualStart?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId: Scalars['ID']['input'];
  ShiftId: Scalars['ID']['input'];
};

export type NewResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId: Scalars['ID']['input'];
  TagId: Scalars['ID']['input'];
};

export type NewResourceUtilization = {
  ActualWorkedHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PossibleHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  ResourceId: Scalars['ID']['input'];
  StartOfMonth?: InputMaybe<Scalars['LocalDate']['input']>;
};

export type NewResources = {
  ADPEmployeeID?: InputMaybe<Scalars['String']['input']>;
  Alias?: InputMaybe<Scalars['String']['input']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  Category?: InputMaybe<Scalars['String']['input']>;
  CountryCode?: InputMaybe<Scalars['String']['input']>;
  DateOfHire?: InputMaybe<Scalars['LocalDate']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  EmploymentType?: InputMaybe<Scalars['String']['input']>;
  EquipmentType?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  HomeAddress?: InputMaybe<Scalars['String']['input']>;
  IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  MobilePhone?: InputMaybe<Scalars['String']['input']>;
  Model?: InputMaybe<Scalars['String']['input']>;
  Name: Scalars['String']['input'];
  Notes?: InputMaybe<Scalars['String']['input']>;
  NotificationType?: InputMaybe<Scalars['String']['input']>;
  PersonalPhone?: InputMaybe<Scalars['String']['input']>;
  PrimaryPhone?: InputMaybe<Scalars['String']['input']>;
  PrimaryRegionId: Scalars['ID']['input'];
  Rating?: InputMaybe<Scalars['Int']['input']>;
  ResourceType?: InputMaybe<Scalars['String']['input']>;
  TruckId?: InputMaybe<Scalars['ID']['input']>;
  UserId?: InputMaybe<Scalars['ID']['input']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']['input']>;
};

export type NewScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']['input']>;
  DeletedDate?: InputMaybe<Scalars['Instant']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  Name: Scalars['String']['input'];
  PeriodDays?: InputMaybe<Scalars['Int']['input']>;
};

export type NewShiftOfferShifts = {
  ShiftId: Scalars['ID']['input'];
  ShiftOfferId: Scalars['ID']['input'];
};

export type NewShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']['input']>;
};

export type NewShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  ShiftId: Scalars['ID']['input'];
  TagId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']['input']>;
  DisplayName?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  IsDraft?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewSignature = {
  CompanyName?: InputMaybe<Scalars['String']['input']>;
  JobSafetyAnalysisFormId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PrintName?: InputMaybe<Scalars['String']['input']>;
};

export type NewSkeduloAdminSetting = {
  CheckInYardBeforeTime?: InputMaybe<Scalars['BigDecimal']['input']>;
  DefaultJobDurationMinutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  JobBufferMinutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  SalesforceDashboardUrl?: InputMaybe<Scalars['String']['input']>;
  TravelVelocityInKPH?: InputMaybe<Scalars['BigDecimal']['input']>;
};

export type NewSkeduloRegionCityMapping = {
  City?: InputMaybe<Scalars['String']['input']>;
  CoverageBy?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Region?: InputMaybe<Scalars['String']['input']>;
};

export type NewTags = {
  Classification?: InputMaybe<Scalars['TagClassification']['input']>;
  Name: Scalars['String']['input'];
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type NewTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Duration: Scalars['Duration']['input'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId: Scalars['ID']['input'];
  StartOffsetDays: Scalars['Int']['input'];
  StartTimeOfDay: Scalars['LocalTime']['input'];
  Timezone: Scalars['String']['input'];
  Type?: InputMaybe<Scalars['String']['input']>;
};

export type NewTemplatedActivityResources = {
  ResourceId: Scalars['ID']['input'];
  TemplatedActivityId: Scalars['ID']['input'];
};

export type NewTemplatedAttendees = {
  ContactId: Scalars['ID']['input'];
  TemplatedJobId: Scalars['ID']['input'];
};

export type NewTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  NotificationType?: InputMaybe<Scalars['String']['input']>;
  ResourceId: Scalars['ID']['input'];
  StartOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']['input']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']['input']>;
  TemplatedJobId: Scalars['ID']['input'];
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  FromTemplatedJobId: Scalars['ID']['input'];
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToTemplatedJobId: Scalars['ID']['input'];
};

export type NewTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']['input']>;
  Qty: Scalars['BigDecimal']['input'];
  TemplatedJobId: Scalars['ID']['input'];
};

export type NewTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId: Scalars['ID']['input'];
  TemplatedJobId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Name: Scalars['String']['input'];
  Seq: Scalars['Int']['input'];
  TemplatedJobId: Scalars['ID']['input'];
};

export type NewTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  TemplatedJobId: Scalars['ID']['input'];
  Type: Scalars['JobTimeConstraintType']['input'];
};

export type NewTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Address?: InputMaybe<Scalars['String']['input']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Duration: Scalars['Duration']['input'];
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Locked?: InputMaybe<Scalars['Boolean']['input']>;
  MaxAttendees?: InputMaybe<Scalars['Int']['input']>;
  MinAttendees?: InputMaybe<Scalars['Int']['input']>;
  NotesComments?: InputMaybe<Scalars['String']['input']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  RegionId: Scalars['ID']['input'];
  ScheduleTemplateId: Scalars['ID']['input'];
  StartOffsetDays: Scalars['Int']['input'];
  StartTimeOfDay: Scalars['LocalTime']['input'];
  Type?: InputMaybe<Scalars['String']['input']>;
  Urgency?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']['input']>;
};

export type NewTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId: Scalars['ID']['input'];
  TemplatedResourceRequirementId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  Quantity: Scalars['Int']['input'];
  RelativeStart?: InputMaybe<Scalars['Duration']['input']>;
  TemplatedJobId: Scalars['ID']['input'];
};

export type NewTemplatedResourceShifts = {
  ResourceId: Scalars['ID']['input'];
  TemplatedShiftId: Scalars['ID']['input'];
};

export type NewTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId: Scalars['ID']['input'];
  TemplatedShiftId: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type NewTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']['input']>;
  Duration: Scalars['Duration']['input'];
  IsDraft?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  RegionId: Scalars['ID']['input'];
  ScheduleTemplateId: Scalars['ID']['input'];
  StartOffsetDays: Scalars['Int']['input'];
  StartTimeOfDay: Scalars['LocalTime']['input'];
};

export type NewTimesheet = {
  CustomerComments?: InputMaybe<Scalars['String']['input']>;
  CustomerId?: InputMaybe<Scalars['ID']['input']>;
  CustomerJobNumberPMNumber?: InputMaybe<Scalars['String']['input']>;
  CustomerNotAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  CustomerSignature?: InputMaybe<Scalars['Boolean']['input']>;
  DayOfTheWeek?: InputMaybe<Scalars['String']['input']>;
  JobAddress?: InputMaybe<Scalars['String']['input']>;
  JobDate?: InputMaybe<Scalars['LocalDate']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  JobType?: InputMaybe<Scalars['String']['input']>;
  LeadComments?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress2?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress3?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress4?: InputMaybe<Scalars['String']['input']>;
  ReasonForTimesheet?: InputMaybe<Scalars['String']['input']>;
  RelatedResources?: InputMaybe<Scalars['String']['input']>;
  SignDate?: InputMaybe<Scalars['LocalDate']['input']>;
  SignatureName?: InputMaybe<Scalars['String']['input']>;
  TimesheetCompletedDateTime?: InputMaybe<Scalars['Instant']['input']>;
  TimesheetStatus?: InputMaybe<Scalars['String']['input']>;
  TimesheetType?: InputMaybe<Scalars['String']['input']>;
};

export type NewTimesheetMaterial = {
  AssetPartNumber?: InputMaybe<Scalars['String']['input']>;
  AssetType?: InputMaybe<Scalars['String']['input']>;
  Equipment?: InputMaybe<Scalars['String']['input']>;
  EquipmentQuantity?: InputMaybe<Scalars['BigDecimal']['input']>;
  MaterialType?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  SkedTimesheetId?: InputMaybe<Scalars['ID']['input']>;
};

export type NewTimesheetResource = {
  CheckInAtJobLocationTime?: InputMaybe<Scalars['LocalTime']['input']>;
  CheckInAtJobSiteTime?: InputMaybe<Scalars['LocalTime']['input']>;
  DriveCompanyVehicleFromSite?: InputMaybe<Scalars['Boolean']['input']>;
  DriveCompanyVehicleToSite?: InputMaybe<Scalars['Boolean']['input']>;
  DriveTimeEnd?: InputMaybe<Scalars['LocalTime']['input']>;
  DriveTimeStart?: InputMaybe<Scalars['LocalTime']['input']>;
  EmployeeID?: InputMaybe<Scalars['String']['input']>;
  EmployeeId?: InputMaybe<Scalars['ID']['input']>;
  EmployeeSignature?: InputMaybe<Scalars['Boolean']['input']>;
  JobCompleteTime?: InputMaybe<Scalars['LocalTime']['input']>;
  JobStartTime?: InputMaybe<Scalars['LocalTime']['input']>;
  LeaveFromCompanyYard?: InputMaybe<Scalars['Boolean']['input']>;
  MealPeriod1InTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod1OutTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod1Taken?: InputMaybe<Scalars['String']['input']>;
  MealPeriod1WhileDriving?: InputMaybe<Scalars['Boolean']['input']>;
  MealPeriod2InTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod2OutTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod2Taken?: InputMaybe<Scalars['String']['input']>;
  MealPeriod2WhileDriving?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  NoBreaksTakenReason?: InputMaybe<Scalars['String']['input']>;
  NoMealPeriod1Reason?: InputMaybe<Scalars['String']['input']>;
  NoMealPeriod2Reason?: InputMaybe<Scalars['String']['input']>;
  RestBreaksTaken?: InputMaybe<Scalars['Boolean']['input']>;
  ReturnToCompanyYard?: InputMaybe<Scalars['Boolean']['input']>;
  Status?: InputMaybe<Scalars['String']['input']>;
  TimesheetId?: InputMaybe<Scalars['ID']['input']>;
  Truck?: InputMaybe<Scalars['String']['input']>;
  TruckEnd?: InputMaybe<Scalars['String']['input']>;
  WereYouTheDriverOfTheTruck?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Notification that links to the actual object the notification refers to. See the `notifications` query for
 * an example on how to use this type in a query.
 */
export type Notifications = {
  __typename?: 'Notifications';
  /** Name of the action that triggered the notification */
  Action: Scalars['String']['output'];
  /** Object the notification refers to as a union type */
  Object: NotificationsObject;
  /** Creation time as a UTC timestamp */
  Timestamp: Scalars['Instant']['output'];
};

/** Possible object types a `Notifications` object can refer to */
export type NotificationsObject = Jobs | ResourceJobOffers | ResourceShiftOffers | Shifts;

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Base64']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Base64']['output']>;
};

export type Products = {
  __typename?: 'Products';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Family?: Maybe<Scalars['String']['output']>;
  IsActive: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  ProductCode?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  cursor: Scalars['Base64']['output'];
  node: Products;
  offset: Scalars['Int']['output'];
};

export type Project = {
  __typename?: 'Project';
  Name?: Maybe<Scalars['String']['output']>;
  Project: Array<Jobs>;
  ProjectCode?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type ProjectProjectArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['Base64']['output'];
  node: Project;
  offset: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  accountResourceScores: AccountResourceScoresConnection;
  accountResourceScoresById?: Maybe<AccountResourceScores>;
  accountTags: AccountTagsConnection;
  accountTagsById?: Maybe<AccountTags>;
  accounts: AccountsConnection;
  accountsById?: Maybe<Accounts>;
  activities: ActivitiesConnection;
  activitiesById?: Maybe<Activities>;
  activityResources: ActivityResourcesConnection;
  activityResourcesById?: Maybe<ActivityResources>;
  attendees: AttendeesConnection;
  attendeesById?: Maybe<Attendees>;
  availabilities: AvailabilitiesConnection;
  availabilitiesById?: Maybe<Availabilities>;
  availabilityPatternResources: AvailabilityPatternResourcesConnection;
  availabilityPatternResourcesById?: Maybe<AvailabilityPatternResources>;
  availabilityPatterns: AvailabilityPatternsConnection;
  availabilityPatternsById?: Maybe<AvailabilityPatterns>;
  availabilityTemplateEntries: AvailabilityTemplateEntriesConnection;
  availabilityTemplateEntriesById?: Maybe<AvailabilityTemplateEntries>;
  availabilityTemplateResources: AvailabilityTemplateResourcesConnection;
  availabilityTemplateResourcesById?: Maybe<AvailabilityTemplateResources>;
  availabilityTemplates: AvailabilityTemplatesConnection;
  availabilityTemplatesById?: Maybe<AvailabilityTemplates>;
  break: BreakConnection;
  breakById?: Maybe<Break>;
  clientAvailabilities: ClientAvailabilitiesConnection;
  clientAvailabilitiesById?: Maybe<ClientAvailabilities>;
  contactTags: ContactTagsConnection;
  contactTagsById?: Maybe<ContactTags>;
  contacts: ContactsConnection;
  contactsById?: Maybe<Contacts>;
  holidayRegions: HolidayRegionsConnection;
  holidayRegionsById?: Maybe<HolidayRegions>;
  holidays: HolidaysConnection;
  holidaysById?: Maybe<Holidays>;
  jobAllocations: JobAllocationsConnection;
  jobAllocationsById?: Maybe<JobAllocations>;
  jobDependencies: JobDependenciesConnection;
  jobDependenciesById?: Maybe<JobDependencies>;
  jobOffers: JobOffersConnection;
  jobOffersById?: Maybe<JobOffers>;
  jobProducts: JobProductsConnection;
  jobProductsById?: Maybe<JobProducts>;
  jobReportToYard: JobReportToYardConnection;
  jobReportToYardById?: Maybe<JobReportToYard>;
  jobSafetyAnalysisForm: JobSafetyAnalysisFormConnection;
  jobSafetyAnalysisFormById?: Maybe<JobSafetyAnalysisForm>;
  jobStatSheet: JobStatSheetConnection;
  jobStatSheetById?: Maybe<JobStatSheet>;
  jobTags: JobTagsConnection;
  jobTagsById?: Maybe<JobTags>;
  jobTasks: JobTasksConnection;
  jobTasksById?: Maybe<JobTasks>;
  jobTimeConstraints: JobTimeConstraintsConnection;
  jobTimeConstraintsById?: Maybe<JobTimeConstraints>;
  jobTypeSetting: JobTypeSettingConnection;
  jobTypeSettingById?: Maybe<JobTypeSetting>;
  jobTypeTag: JobTypeTagConnection;
  jobTypeTagById?: Maybe<JobTypeTag>;
  jobs: JobsConnection;
  jobsById?: Maybe<Jobs>;
  locationResourceScores: LocationResourceScoresConnection;
  locationResourceScoresById?: Maybe<LocationResourceScores>;
  locations: LocationsConnection;
  locationsById?: Maybe<Locations>;
  /**
   * Retrieve all `Notifications` starting from a given timestamp.
   *
   * The entries are sorted by the `Timestamp` field in descending order. The result set is limited to the
   * first 10,000 entries.
   *
   * Because notifications can refer to different object types (currently `Jobs`, `Shifts`, `ResourceJobOffers`
   * and `ResourceShiftOffers`), the `Object` field is a union type that can be queried using type-dependent
   * query fragments. The type of `Object` can be queried by introspection with the `__typename` meta-field.
   *
   * Example:
   *
   * ```
   * {
   *   notifications(start: "2019-08-11T00:42:13.666Z") {
   *     Timestamp
   *     Action
   *
   *     Object {
   *       __typename
   *       ... on Jobs {
   *         UID
   *         Name
   *         Description
   *         JobStart: Start
   *         JobEnd: End
   *         JobStatus
   *       }
   *       ... on Shifts {
   *         UID
   *         DisplayName
   *         Start
   *         End
   *       }
   *       ... on ResourceJobOffers {
   *         UID
   *         JobOffer {
   *           UID
   *           Status
   *           Job {
   *             UID
   *             Name
   *             Description
   *             ActualStart
   *             ActualEnd
   *             JobStatus
   *           }
   *         }
   *       }
   *       ... on ResourceShiftOffers {
   *         UID
   *         ShiftOffer {
   *           UID
   *           Status
   *           Shifts {
   *             Shift {
   *               UID
   *               DisplayName
   *               Start
   *               End
   *             }
   *           }
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   */
  notifications: Array<Maybe<Notifications>>;
  products: ProductsConnection;
  productsById?: Maybe<Products>;
  project: ProjectConnection;
  projectById?: Maybe<Project>;
  recurringSchedules: RecurringSchedulesConnection;
  recurringSchedulesById?: Maybe<RecurringSchedules>;
  regions: RegionsConnection;
  regionsById?: Maybe<Regions>;
  resourceCategorySetting: ResourceCategorySettingConnection;
  resourceCategorySettingById?: Maybe<ResourceCategorySetting>;
  resourceCategoryTag: ResourceCategoryTagConnection;
  resourceCategoryTagById?: Maybe<ResourceCategoryTag>;
  resourceJobOffers: ResourceJobOffersConnection;
  resourceJobOffersById?: Maybe<ResourceJobOffers>;
  resourceOverrideRegions: ResourceOverrideRegionsConnection;
  resourceOverrideRegionsById?: Maybe<ResourceOverrideRegions>;
  resourceOverrides: ResourceOverridesConnection;
  resourceOverridesById?: Maybe<ResourceOverrides>;
  resourceRegions: ResourceRegionsConnection;
  resourceRegionsById?: Maybe<ResourceRegions>;
  resourceRequirementTags: ResourceRequirementTagsConnection;
  resourceRequirementTagsById?: Maybe<ResourceRequirementTags>;
  resourceRequirements: ResourceRequirementsConnection;
  resourceRequirementsById?: Maybe<ResourceRequirements>;
  resourceShiftBreaks: ResourceShiftBreaksConnection;
  resourceShiftBreaksById?: Maybe<ResourceShiftBreaks>;
  resourceShiftOffers: ResourceShiftOffersConnection;
  resourceShiftOffersById?: Maybe<ResourceShiftOffers>;
  resourceShifts: ResourceShiftsConnection;
  resourceShiftsById?: Maybe<ResourceShifts>;
  resourceTags: ResourceTagsConnection;
  resourceTagsById?: Maybe<ResourceTags>;
  resourceUtilization: ResourceUtilizationConnection;
  resourceUtilizationById?: Maybe<ResourceUtilization>;
  resources: ResourcesConnection;
  resourcesById?: Maybe<Resources>;
  resourcesInRegions: ResourcesConnection;
  scheduleTemplates: ScheduleTemplatesConnection;
  scheduleTemplatesById?: Maybe<ScheduleTemplates>;
  shiftOfferShifts: ShiftOfferShiftsConnection;
  shiftOfferShiftsById?: Maybe<ShiftOfferShifts>;
  shiftOffers: ShiftOffersConnection;
  shiftOffersById?: Maybe<ShiftOffers>;
  shiftTags: ShiftTagsConnection;
  shiftTagsById?: Maybe<ShiftTags>;
  shifts: ShiftsConnection;
  shiftsById?: Maybe<Shifts>;
  signature: SignatureConnection;
  signatureById?: Maybe<Signature>;
  skeduloAdminSetting: SkeduloAdminSettingConnection;
  skeduloAdminSettingById?: Maybe<SkeduloAdminSetting>;
  skeduloJobSafetyAnalysisSetting: SkeduloJobSafetyAnalysisSettingConnection;
  skeduloJobSafetyAnalysisSettingById?: Maybe<SkeduloJobSafetyAnalysisSetting>;
  skeduloRegionCityMapping: SkeduloRegionCityMappingConnection;
  skeduloRegionCityMappingById?: Maybe<SkeduloRegionCityMapping>;
  tags: TagsConnection;
  tagsById?: Maybe<Tags>;
  templatedActivities: TemplatedActivitiesConnection;
  templatedActivitiesById?: Maybe<TemplatedActivities>;
  templatedActivityResources: TemplatedActivityResourcesConnection;
  templatedActivityResourcesById?: Maybe<TemplatedActivityResources>;
  templatedAttendees: TemplatedAttendeesConnection;
  templatedAttendeesById?: Maybe<TemplatedAttendees>;
  templatedJobAllocations: TemplatedJobAllocationsConnection;
  templatedJobAllocationsById?: Maybe<TemplatedJobAllocations>;
  templatedJobDependencies: TemplatedJobDependenciesConnection;
  templatedJobDependenciesById?: Maybe<TemplatedJobDependencies>;
  templatedJobProducts: TemplatedJobProductsConnection;
  templatedJobProductsById?: Maybe<TemplatedJobProducts>;
  templatedJobTags: TemplatedJobTagsConnection;
  templatedJobTagsById?: Maybe<TemplatedJobTags>;
  templatedJobTasks: TemplatedJobTasksConnection;
  templatedJobTasksById?: Maybe<TemplatedJobTasks>;
  templatedJobTimeConstraints: TemplatedJobTimeConstraintsConnection;
  templatedJobTimeConstraintsById?: Maybe<TemplatedJobTimeConstraints>;
  templatedJobs: TemplatedJobsConnection;
  templatedJobsById?: Maybe<TemplatedJobs>;
  templatedResourceRequirementTags: TemplatedResourceRequirementTagsConnection;
  templatedResourceRequirementTagsById?: Maybe<TemplatedResourceRequirementTags>;
  templatedResourceRequirements: TemplatedResourceRequirementsConnection;
  templatedResourceRequirementsById?: Maybe<TemplatedResourceRequirements>;
  templatedResourceShifts: TemplatedResourceShiftsConnection;
  templatedResourceShiftsById?: Maybe<TemplatedResourceShifts>;
  templatedShiftTags: TemplatedShiftTagsConnection;
  templatedShiftTagsById?: Maybe<TemplatedShiftTags>;
  templatedShifts: TemplatedShiftsConnection;
  templatedShiftsById?: Maybe<TemplatedShifts>;
  timesheet: TimesheetConnection;
  timesheetById?: Maybe<Timesheet>;
  timesheetMaterial: TimesheetMaterialConnection;
  timesheetMaterialById?: Maybe<TimesheetMaterial>;
  timesheetResource: TimesheetResourceConnection;
  timesheetResourceById?: Maybe<TimesheetResource>;
  users: UsersConnection;
  usersById?: Maybe<Users>;
};


export type QueryAccountResourceScoresArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']['input']>;
};


export type QueryAccountResourceScoresByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAccountTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountTags']['input']>;
};


export type QueryAccountTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAccounts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccounts']['input']>;
};


export type QueryAccountsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']['input']>;
};


export type QueryActivitiesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryActivityResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']['input']>;
};


export type QueryActivityResourcesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAttendeesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAttendees']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAttendees']['input']>;
};


export type QueryAttendeesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilities']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilities']['input']>;
};


export type QueryAvailabilitiesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAvailabilityPatternResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']['input']>;
};


export type QueryAvailabilityPatternResourcesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAvailabilityPatternsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatterns']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatterns']['input']>;
};


export type QueryAvailabilityPatternsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAvailabilityTemplateEntriesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateEntries']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateEntries']['input']>;
};


export type QueryAvailabilityTemplateEntriesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAvailabilityTemplateResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplateResources']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplateResources']['input']>;
};


export type QueryAvailabilityTemplateResourcesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryAvailabilityTemplatesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityTemplates']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityTemplates']['input']>;
};


export type QueryAvailabilityTemplatesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryBreakArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterBreak']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseBreak']['input']>;
};


export type QueryBreakByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryClientAvailabilitiesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']['input']>;
};


export type QueryClientAvailabilitiesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryContactTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterContactTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContactTags']['input']>;
};


export type QueryContactTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterContacts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseContacts']['input']>;
};


export type QueryContactsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryHolidayRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidayRegions']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidayRegions']['input']>;
};


export type QueryHolidayRegionsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryHolidaysArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterHolidays']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseHolidays']['input']>;
};


export type QueryHolidaysByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobAllocationsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']['input']>;
};


export type QueryJobAllocationsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobDependenciesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobDependencies']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobDependencies']['input']>;
};


export type QueryJobDependenciesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobOffersArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobOffers']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobOffers']['input']>;
};


export type QueryJobOffersByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobProductsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobProducts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobProducts']['input']>;
};


export type QueryJobProductsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobReportToYardArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobReportToYard']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobReportToYard']['input']>;
};


export type QueryJobReportToYardByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobSafetyAnalysisFormArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobSafetyAnalysisForm']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobSafetyAnalysisForm']['input']>;
};


export type QueryJobSafetyAnalysisFormByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobStatSheetArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobStatSheet']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobStatSheet']['input']>;
};


export type QueryJobStatSheetByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTags']['input']>;
};


export type QueryJobTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobTasksArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTasks']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTasks']['input']>;
};


export type QueryJobTasksByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobTimeConstraintsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTimeConstraints']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTimeConstraints']['input']>;
};


export type QueryJobTimeConstraintsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobTypeSettingArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTypeSetting']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTypeSetting']['input']>;
};


export type QueryJobTypeSettingByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobTypeTagArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobTypeTag']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobTypeTag']['input']>;
};


export type QueryJobTypeTagByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type QueryJobsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryLocationResourceScoresArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']['input']>;
};


export type QueryLocationResourceScoresByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterLocations']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocations']['input']>;
};


export type QueryLocationsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryNotificationsArgs = {
  start: Scalars['Instant']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterProducts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseProducts']['input']>;
};


export type QueryProductsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryProjectArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterProject']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseProject']['input']>;
};


export type QueryProjectByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryRecurringSchedulesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterRecurringSchedules']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseRecurringSchedules']['input']>;
};


export type QueryRecurringSchedulesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterRegions']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseRegions']['input']>;
};


export type QueryRegionsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceCategorySettingArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceCategorySetting']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceCategorySetting']['input']>;
};


export type QueryResourceCategorySettingByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceCategoryTagArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceCategoryTag']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceCategoryTag']['input']>;
};


export type QueryResourceCategoryTagByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceJobOffersArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceJobOffers']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceJobOffers']['input']>;
};


export type QueryResourceJobOffersByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceOverrideRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrideRegions']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrideRegions']['input']>;
};


export type QueryResourceOverrideRegionsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceOverridesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrides']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrides']['input']>;
};


export type QueryResourceOverridesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceRegionsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRegions']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRegions']['input']>;
};


export type QueryResourceRegionsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceRequirementTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirementTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirementTags']['input']>;
};


export type QueryResourceRequirementTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceRequirementsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirements']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirements']['input']>;
};


export type QueryResourceRequirementsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceShiftBreaksArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftBreaks']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftBreaks']['input']>;
};


export type QueryResourceShiftBreaksByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceShiftOffersArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftOffers']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftOffers']['input']>;
};


export type QueryResourceShiftOffersByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']['input']>;
};


export type QueryResourceShiftsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']['input']>;
};


export type QueryResourceTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourceUtilizationArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceUtilization']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceUtilization']['input']>;
};


export type QueryResourceUtilizationByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']['input']>;
};


export type QueryResourcesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryResourcesInRegionsArgs = {
  end: Scalars['Instant']['input'];
  regionIds: Array<Scalars['ID']['input']>;
  start: Scalars['Instant']['input'];
};


export type QueryScheduleTemplatesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterScheduleTemplates']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseScheduleTemplates']['input']>;
};


export type QueryScheduleTemplatesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryShiftOfferShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']['input']>;
};


export type QueryShiftOfferShiftsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryShiftOffersArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOffers']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOffers']['input']>;
};


export type QueryShiftOffersByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryShiftTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftTags']['input']>;
};


export type QueryShiftTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']['input']>;
};


export type QueryShiftsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QuerySignatureArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterSignature']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseSignature']['input']>;
};


export type QuerySignatureByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QuerySkeduloAdminSettingArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterSkeduloAdminSetting']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseSkeduloAdminSetting']['input']>;
};


export type QuerySkeduloAdminSettingByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QuerySkeduloJobSafetyAnalysisSettingArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterSkeduloJobSafetyAnalysisSetting']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseSkeduloJobSafetyAnalysisSetting']['input']>;
};


export type QuerySkeduloJobSafetyAnalysisSettingByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QuerySkeduloRegionCityMappingArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterSkeduloRegionCityMapping']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseSkeduloRegionCityMapping']['input']>;
};


export type QuerySkeduloRegionCityMappingByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTags']['input']>;
};


export type QueryTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedActivitiesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']['input']>;
};


export type QueryTemplatedActivitiesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedActivityResourcesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']['input']>;
};


export type QueryTemplatedActivityResourcesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedAttendeesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedAttendees']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedAttendees']['input']>;
};


export type QueryTemplatedAttendeesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobAllocationsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']['input']>;
};


export type QueryTemplatedJobAllocationsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobDependenciesArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']['input']>;
};


export type QueryTemplatedJobDependenciesByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobProductsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobProducts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobProducts']['input']>;
};


export type QueryTemplatedJobProductsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTags']['input']>;
};


export type QueryTemplatedJobTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobTasksArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTasks']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTasks']['input']>;
};


export type QueryTemplatedJobTasksByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobTimeConstraintsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTimeConstraints']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTimeConstraints']['input']>;
};


export type QueryTemplatedJobTimeConstraintsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedJobsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobs']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobs']['input']>;
};


export type QueryTemplatedJobsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedResourceRequirementTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirementTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirementTags']['input']>;
};


export type QueryTemplatedResourceRequirementTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedResourceRequirementsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirements']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirements']['input']>;
};


export type QueryTemplatedResourceRequirementsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedResourceShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']['input']>;
};


export type QueryTemplatedResourceShiftsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedShiftTagsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShiftTags']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShiftTags']['input']>;
};


export type QueryTemplatedShiftTagsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTemplatedShiftsArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShifts']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShifts']['input']>;
};


export type QueryTemplatedShiftsByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTimesheetArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheet']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheet']['input']>;
};


export type QueryTimesheetByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTimesheetMaterialArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheetMaterial']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheetMaterial']['input']>;
};


export type QueryTimesheetMaterialByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryTimesheetResourceArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheetResource']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheetResource']['input']>;
};


export type QueryTimesheetResourceByIdArgs = {
  UID: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Base64']['input']>;
  filter?: InputMaybe<Scalars['EQLQueryFilterUsers']['input']>;
  first?: InputMaybe<Scalars['PositiveIntMax200']['input']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseUsers']['input']>;
};


export type QueryUsersByIdArgs = {
  UID: Scalars['ID']['input'];
};

export type RecurringSchedules = {
  __typename?: 'RecurringSchedules';
  AckAllJobs: Scalars['Boolean']['output'];
  ClientAvailabilities: Array<ClientAvailabilities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Summary?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type RecurringSchedulesClientAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterClientAvailabilities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseClientAvailabilities']['input']>;
};


export type RecurringSchedulesJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};

export type RecurringSchedulesConnection = {
  __typename?: 'RecurringSchedulesConnection';
  edges: Array<RecurringSchedulesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RecurringSchedulesEdge = {
  __typename?: 'RecurringSchedulesEdge';
  cursor: Scalars['Base64']['output'];
  node: RecurringSchedules;
  offset: Scalars['Int']['output'];
};

export type Regions = {
  __typename?: 'Regions';
  CountryCode?: Maybe<Scalars['String']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  IsInactiveRegion: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Radius?: Maybe<Scalars['Int']['output']>;
  Resources: Array<Resources>;
  Timezone: Scalars['String']['output'];
  UID: Scalars['ID']['output'];
};


export type RegionsResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']['input']>;
};

export type RegionsConnection = {
  __typename?: 'RegionsConnection';
  edges: Array<RegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RegionsEdge = {
  __typename?: 'RegionsEdge';
  cursor: Scalars['Base64']['output'];
  node: Regions;
  offset: Scalars['Int']['output'];
};

export type ResourceCategorySetting = {
  __typename?: 'ResourceCategorySetting';
  DashboardGroup?: Maybe<Scalars['String']['output']>;
  DashboardOrder?: Maybe<Scalars['BigDecimal']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  RequireDriver: Scalars['Boolean']['output'];
  ResourceCategory?: Maybe<Scalars['String']['output']>;
  ShowOnDashboard: Scalars['Boolean']['output'];
  UID: Scalars['ID']['output'];
};

export type ResourceCategorySettingConnection = {
  __typename?: 'ResourceCategorySettingConnection';
  edges: Array<ResourceCategorySettingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceCategorySettingEdge = {
  __typename?: 'ResourceCategorySettingEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceCategorySetting;
  offset: Scalars['Int']['output'];
};

export type ResourceCategoryTag = {
  __typename?: 'ResourceCategoryTag';
  Name?: Maybe<Scalars['String']['output']>;
  ResourceCategorySetting?: Maybe<ResourceCategorySetting>;
  ResourceCategorySettingId?: Maybe<Scalars['ID']['output']>;
  Tag?: Maybe<Tags>;
  TagId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type ResourceCategoryTagConnection = {
  __typename?: 'ResourceCategoryTagConnection';
  edges: Array<ResourceCategoryTagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceCategoryTagEdge = {
  __typename?: 'ResourceCategoryTagEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceCategoryTag;
  offset: Scalars['Int']['output'];
};

export type ResourceJobOffers = {
  __typename?: 'ResourceJobOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  JobOffer: JobOffers;
  JobOfferId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Response?: Maybe<Scalars['OfferResponse']['output']>;
  Status: Scalars['ResourceOfferStatus']['output'];
  TimeNotified?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type ResourceJobOffersConnection = {
  __typename?: 'ResourceJobOffersConnection';
  edges: Array<ResourceJobOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceJobOffersEdge = {
  __typename?: 'ResourceJobOffersEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceJobOffers;
  offset: Scalars['Int']['output'];
};

export type ResourceOverrideRegions = {
  __typename?: 'ResourceOverrideRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Region: Regions;
  RegionId: Scalars['ID']['output'];
  ResourceOverride: ResourceOverrides;
  ResourceOverrideId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type ResourceOverrideRegionsConnection = {
  __typename?: 'ResourceOverrideRegionsConnection';
  edges: Array<ResourceOverrideRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceOverrideRegionsEdge = {
  __typename?: 'ResourceOverrideRegionsEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceOverrideRegions;
  offset: Scalars['Int']['output'];
};

export type ResourceOverrides = {
  __typename?: 'ResourceOverrides';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  End: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HomeAddress?: Maybe<Scalars['String']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  ResourceOverrideRegions: Array<ResourceOverrideRegions>;
  Start: Scalars['Instant']['output'];
  UID: Scalars['ID']['output'];
};


export type ResourceOverridesResourceOverrideRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrideRegions']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrideRegions']['input']>;
};

export type ResourceOverridesConnection = {
  __typename?: 'ResourceOverridesConnection';
  edges: Array<ResourceOverridesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceOverridesEdge = {
  __typename?: 'ResourceOverridesEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceOverrides;
  offset: Scalars['Int']['output'];
};

export type ResourceRegions = {
  __typename?: 'ResourceRegions';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Region: Regions;
  RegionId: Scalars['ID']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Start?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type ResourceRegionsConnection = {
  __typename?: 'ResourceRegionsConnection';
  edges: Array<ResourceRegionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceRegionsEdge = {
  __typename?: 'ResourceRegionsEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceRegions;
  offset: Scalars['Int']['output'];
};

export type ResourceRequirementTags = {
  __typename?: 'ResourceRequirementTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  ResourceRequirement: ResourceRequirements;
  ResourceRequirementId: Scalars['ID']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type ResourceRequirementTagsConnection = {
  __typename?: 'ResourceRequirementTagsConnection';
  edges: Array<ResourceRequirementTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceRequirementTagsEdge = {
  __typename?: 'ResourceRequirementTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceRequirementTags;
  offset: Scalars['Int']['output'];
};

export type ResourceRequirements = {
  __typename?: 'ResourceRequirements';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Duration?: Maybe<Scalars['Duration']['output']>;
  Job: Jobs;
  JobAllocationCount: Scalars['Int']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  JobAllocations: Array<JobAllocations>;
  JobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Quantity: Scalars['Int']['output'];
  RelativeStart?: Maybe<Scalars['Duration']['output']>;
  ResourceCategory?: Maybe<Scalars['String']['output']>;
  ScheduledEnd?: Maybe<Scalars['Instant']['output']>;
  ScheduledStart?: Maybe<Scalars['Instant']['output']>;
  Status: Scalars['JobStatus']['output'];
  Tags: Array<ResourceRequirementTags>;
  UID: Scalars['ID']['output'];
};


export type ResourceRequirementsJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']['input']>;
};


export type ResourceRequirementsTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRequirementTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRequirementTags']['input']>;
};

export type ResourceRequirementsConnection = {
  __typename?: 'ResourceRequirementsConnection';
  edges: Array<ResourceRequirementsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceRequirementsEdge = {
  __typename?: 'ResourceRequirementsEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceRequirements;
  offset: Scalars['Int']['output'];
};

export type ResourceShiftBreaks = {
  __typename?: 'ResourceShiftBreaks';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceShift: ResourceShifts;
  ResourceShiftId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  UID: Scalars['ID']['output'];
};

export type ResourceShiftBreaksConnection = {
  __typename?: 'ResourceShiftBreaksConnection';
  edges: Array<ResourceShiftBreaksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceShiftBreaksEdge = {
  __typename?: 'ResourceShiftBreaksEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceShiftBreaks;
  offset: Scalars['Int']['output'];
};

export type ResourceShiftOffers = {
  __typename?: 'ResourceShiftOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Response?: Maybe<Scalars['OfferResponse']['output']>;
  ShiftOffer: ShiftOffers;
  ShiftOfferId: Scalars['ID']['output'];
  Status: Scalars['ResourceOfferStatus']['output'];
  TimeNotified?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type ResourceShiftOffersConnection = {
  __typename?: 'ResourceShiftOffersConnection';
  edges: Array<ResourceShiftOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceShiftOffersEdge = {
  __typename?: 'ResourceShiftOffersEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceShiftOffers;
  offset: Scalars['Int']['output'];
};

export type ResourceShifts = {
  __typename?: 'ResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']['output']>;
  ActualStart?: Maybe<Scalars['Instant']['output']>;
  Breaks: Array<ResourceShiftBreaks>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Shift: Shifts;
  ShiftId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};


export type ResourceShiftsBreaksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftBreaks']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftBreaks']['input']>;
};

export type ResourceShiftsConnection = {
  __typename?: 'ResourceShiftsConnection';
  edges: Array<ResourceShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceShiftsEdge = {
  __typename?: 'ResourceShiftsEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceShifts;
  offset: Scalars['Int']['output'];
};

export type ResourceTags = {
  __typename?: 'ResourceTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  ExpiryDate?: Maybe<Scalars['Instant']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type ResourceTagsConnection = {
  __typename?: 'ResourceTagsConnection';
  edges: Array<ResourceTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceTagsEdge = {
  __typename?: 'ResourceTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceTags;
  offset: Scalars['Int']['output'];
};

export type ResourceUtilization = {
  __typename?: 'ResourceUtilization';
  ActualWorkedHours?: Maybe<Scalars['BigDecimal']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PossibleHours?: Maybe<Scalars['BigDecimal']['output']>;
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  StartOfMonth?: Maybe<Scalars['LocalDate']['output']>;
  UID: Scalars['ID']['output'];
  Utilization?: Maybe<Scalars['BigDecimal']['output']>;
};

export type ResourceUtilizationConnection = {
  __typename?: 'ResourceUtilizationConnection';
  edges: Array<ResourceUtilizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourceUtilizationEdge = {
  __typename?: 'ResourceUtilizationEdge';
  cursor: Scalars['Base64']['output'];
  node: ResourceUtilization;
  offset: Scalars['Int']['output'];
};

export type Resources = {
  __typename?: 'Resources';
  ADPEmployeeID?: Maybe<Scalars['String']['output']>;
  AccountScores: Array<AccountResourceScores>;
  Activities: Array<Activities>;
  Alias?: Maybe<Scalars['String']['output']>;
  AutoSchedule: Scalars['Boolean']['output'];
  Availabilities: Array<Availabilities>;
  AvailabilityPatterns: Array<AvailabilityPatternResources>;
  Category?: Maybe<Scalars['String']['output']>;
  CountryCode?: Maybe<Scalars['String']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DateOfHire?: Maybe<Scalars['LocalDate']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  Employee: Array<TimesheetResource>;
  EmploymentType?: Maybe<Scalars['String']['output']>;
  EquipmentType?: Maybe<Scalars['String']['output']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HomeAddress?: Maybe<Scalars['String']['output']>;
  IsActive: Scalars['Boolean']['output'];
  JobAllocations: Array<JobAllocations>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationScores: Array<LocationResourceScores>;
  MobilePhone?: Maybe<Scalars['String']['output']>;
  Model?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  NotificationType?: Maybe<Scalars['String']['output']>;
  PersonalPhone?: Maybe<Scalars['String']['output']>;
  PrimaryPhone?: Maybe<Scalars['String']['output']>;
  PrimaryRegion: Regions;
  PrimaryRegionId: Scalars['ID']['output'];
  Rating?: Maybe<Scalars['Int']['output']>;
  ResourceActivities: Array<ActivityResources>;
  ResourceOverrides: Array<ResourceOverrides>;
  ResourceRegions: Array<ResourceRegions>;
  ResourceShifts: Array<ResourceShifts>;
  ResourceTags: Array<ResourceTags>;
  ResourceType?: Maybe<Scalars['String']['output']>;
  TemplatedActivities: Array<TemplatedActivities>;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedResourceActivities: Array<TemplatedActivityResources>;
  TemplatedResourceShifts: Array<TemplatedResourceShifts>;
  Truck?: Maybe<Resources>;
  TruckId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
  User?: Maybe<Users>;
  UserId?: Maybe<Scalars['ID']['output']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']['output']>;
  WorkingHourType?: Maybe<Scalars['WorkingHourType']['output']>;
};


export type ResourcesAccountScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccountResourceScores']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccountResourceScores']['input']>;
};


export type ResourcesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']['input']>;
};


export type ResourcesAvailabilitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilities']['input']>;
};


export type ResourcesAvailabilityPatternsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAvailabilityPatternResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAvailabilityPatternResources']['input']>;
};


export type ResourcesEmployeeArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheetResource']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTimesheetResource']['input']>;
};


export type ResourcesJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobAllocations']['input']>;
};


export type ResourcesLocationScoresArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterLocationResourceScores']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseLocationResourceScores']['input']>;
};


export type ResourcesResourceActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivityResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivityResources']['input']>;
};


export type ResourcesResourceOverridesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceOverrides']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceOverrides']['input']>;
};


export type ResourcesResourceRegionsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceRegions']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceRegions']['input']>;
};


export type ResourcesResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']['input']>;
};


export type ResourcesResourceTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceTags']['input']>;
};


export type ResourcesTemplatedActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']['input']>;
};


export type ResourcesTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']['input']>;
};


export type ResourcesTemplatedResourceActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']['input']>;
};


export type ResourcesTemplatedResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']['input']>;
};

export type ResourcesConnection = {
  __typename?: 'ResourcesConnection';
  edges: Array<ResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ResourcesEdge = {
  __typename?: 'ResourcesEdge';
  cursor: Scalars['Base64']['output'];
  node: Resources;
  offset: Scalars['Int']['output'];
};

export type ScheduleTemplates = {
  __typename?: 'ScheduleTemplates';
  Activities: Array<Activities>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DeletedBy?: Maybe<Users>;
  DeletedById?: Maybe<Scalars['ID']['output']>;
  DeletedDate?: Maybe<Scalars['Instant']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  IsDeleted: Scalars['Boolean']['output'];
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  PeriodDays?: Maybe<Scalars['Int']['output']>;
  Shifts: Array<Shifts>;
  TemplatedActivities: Array<TemplatedActivities>;
  TemplatedJobs: Array<TemplatedJobs>;
  TemplatedShifts: Array<TemplatedShifts>;
  UID: Scalars['ID']['output'];
};


export type ScheduleTemplatesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']['input']>;
};


export type ScheduleTemplatesJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type ScheduleTemplatesShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']['input']>;
};


export type ScheduleTemplatesTemplatedActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivities']['input']>;
};


export type ScheduleTemplatesTemplatedJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobs']['input']>;
};


export type ScheduleTemplatesTemplatedShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShifts']['input']>;
};

export type ScheduleTemplatesConnection = {
  __typename?: 'ScheduleTemplatesConnection';
  edges: Array<ScheduleTemplatesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ScheduleTemplatesEdge = {
  __typename?: 'ScheduleTemplatesEdge';
  cursor: Scalars['Base64']['output'];
  node: ScheduleTemplates;
  offset: Scalars['Int']['output'];
};

export type SchemaMutation = {
  __typename?: 'SchemaMutation';
  deleteAccountResourceScores?: Maybe<Scalars['ID']['output']>;
  deleteAccountTags?: Maybe<Scalars['ID']['output']>;
  deleteAccounts?: Maybe<Scalars['ID']['output']>;
  deleteActivities?: Maybe<Scalars['ID']['output']>;
  deleteActivityResources?: Maybe<Scalars['ID']['output']>;
  deleteAttendees?: Maybe<Scalars['ID']['output']>;
  deleteAvailabilities?: Maybe<Scalars['ID']['output']>;
  deleteAvailabilityPatternResources?: Maybe<Scalars['ID']['output']>;
  deleteAvailabilityPatterns?: Maybe<Scalars['ID']['output']>;
  deleteAvailabilityTemplateEntries?: Maybe<Scalars['ID']['output']>;
  deleteAvailabilityTemplateResources?: Maybe<Scalars['ID']['output']>;
  deleteAvailabilityTemplates?: Maybe<Scalars['ID']['output']>;
  deleteBreak?: Maybe<Scalars['ID']['output']>;
  deleteClientAvailabilities?: Maybe<Scalars['ID']['output']>;
  deleteContactTags?: Maybe<Scalars['ID']['output']>;
  deleteContacts?: Maybe<Scalars['ID']['output']>;
  deleteHolidayRegions?: Maybe<Scalars['ID']['output']>;
  deleteHolidays?: Maybe<Scalars['ID']['output']>;
  deleteJobAllocations?: Maybe<Scalars['ID']['output']>;
  deleteJobDependencies?: Maybe<Scalars['ID']['output']>;
  deleteJobOffers?: Maybe<Scalars['ID']['output']>;
  deleteJobProducts?: Maybe<Scalars['ID']['output']>;
  deleteJobReportToYard?: Maybe<Scalars['ID']['output']>;
  deleteJobSafetyAnalysisForm?: Maybe<Scalars['ID']['output']>;
  deleteJobStatSheet?: Maybe<Scalars['ID']['output']>;
  deleteJobTags?: Maybe<Scalars['ID']['output']>;
  deleteJobTasks?: Maybe<Scalars['ID']['output']>;
  deleteJobTimeConstraints?: Maybe<Scalars['ID']['output']>;
  deleteJobTypeSetting?: Maybe<Scalars['ID']['output']>;
  deleteJobTypeTag?: Maybe<Scalars['ID']['output']>;
  deleteJobs?: Maybe<Scalars['ID']['output']>;
  deleteLocationResourceScores?: Maybe<Scalars['ID']['output']>;
  deleteLocations?: Maybe<Scalars['ID']['output']>;
  deleteProducts?: Maybe<Scalars['ID']['output']>;
  deleteProject?: Maybe<Scalars['ID']['output']>;
  deleteRecurringSchedules?: Maybe<Scalars['ID']['output']>;
  deleteRegions?: Maybe<Scalars['ID']['output']>;
  deleteResourceCategorySetting?: Maybe<Scalars['ID']['output']>;
  deleteResourceCategoryTag?: Maybe<Scalars['ID']['output']>;
  deleteResourceJobOffers?: Maybe<Scalars['ID']['output']>;
  deleteResourceOverrideRegions?: Maybe<Scalars['ID']['output']>;
  deleteResourceOverrides?: Maybe<Scalars['ID']['output']>;
  deleteResourceRegions?: Maybe<Scalars['ID']['output']>;
  deleteResourceRequirementTags?: Maybe<Scalars['ID']['output']>;
  deleteResourceRequirements?: Maybe<Scalars['ID']['output']>;
  deleteResourceShiftBreaks?: Maybe<Scalars['ID']['output']>;
  deleteResourceShiftOffers?: Maybe<Scalars['ID']['output']>;
  deleteResourceShifts?: Maybe<Scalars['ID']['output']>;
  deleteResourceTags?: Maybe<Scalars['ID']['output']>;
  deleteResourceUtilization?: Maybe<Scalars['ID']['output']>;
  deleteResources?: Maybe<Scalars['ID']['output']>;
  deleteScheduleTemplates?: Maybe<Scalars['ID']['output']>;
  deleteShiftOfferShifts?: Maybe<Scalars['ID']['output']>;
  deleteShiftOffers?: Maybe<Scalars['ID']['output']>;
  deleteShiftTags?: Maybe<Scalars['ID']['output']>;
  deleteShifts?: Maybe<Scalars['ID']['output']>;
  deleteSignature?: Maybe<Scalars['ID']['output']>;
  deleteSkeduloAdminSetting?: Maybe<Scalars['ID']['output']>;
  deleteSkeduloJobSafetyAnalysisSetting?: Maybe<Scalars['ID']['output']>;
  deleteSkeduloRegionCityMapping?: Maybe<Scalars['ID']['output']>;
  deleteTags?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedActivities?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedActivityResources?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedAttendees?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobAllocations?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobDependencies?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobProducts?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobTags?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobTasks?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobTimeConstraints?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedJobs?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedResourceRequirementTags?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedResourceRequirements?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedResourceShifts?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedShiftTags?: Maybe<Scalars['ID']['output']>;
  deleteTemplatedShifts?: Maybe<Scalars['ID']['output']>;
  deleteTimesheet?: Maybe<Scalars['ID']['output']>;
  deleteTimesheetMaterial?: Maybe<Scalars['ID']['output']>;
  deleteTimesheetResource?: Maybe<Scalars['ID']['output']>;
  getAccountResourceScores: SimpleAccountResourceScores;
  getAccountTags: SimpleAccountTags;
  getAccounts: SimpleAccounts;
  getActivities: SimpleActivities;
  getActivityResources: SimpleActivityResources;
  getAttendees: SimpleAttendees;
  getAvailabilities: SimpleAvailabilities;
  getAvailabilityPatternResources: SimpleAvailabilityPatternResources;
  getAvailabilityPatterns: SimpleAvailabilityPatterns;
  getAvailabilityTemplateEntries: SimpleAvailabilityTemplateEntries;
  getAvailabilityTemplateResources: SimpleAvailabilityTemplateResources;
  getAvailabilityTemplates: SimpleAvailabilityTemplates;
  getBreak: SimpleBreak;
  getClientAvailabilities: SimpleClientAvailabilities;
  getContactTags: SimpleContactTags;
  getContacts: SimpleContacts;
  getHolidayRegions: SimpleHolidayRegions;
  getHolidays: SimpleHolidays;
  getJobAllocations: SimpleJobAllocations;
  getJobDependencies: SimpleJobDependencies;
  getJobOffers: SimpleJobOffers;
  getJobProducts: SimpleJobProducts;
  getJobReportToYard: SimpleJobReportToYard;
  getJobSafetyAnalysisForm: SimpleJobSafetyAnalysisForm;
  getJobStatSheet: SimpleJobStatSheet;
  getJobTags: SimpleJobTags;
  getJobTasks: SimpleJobTasks;
  getJobTimeConstraints: SimpleJobTimeConstraints;
  getJobTypeSetting: SimpleJobTypeSetting;
  getJobTypeTag: SimpleJobTypeTag;
  getJobs: SimpleJobs;
  getLocationResourceScores: SimpleLocationResourceScores;
  getLocations: SimpleLocations;
  getProducts: SimpleProducts;
  getProject: SimpleProject;
  getRecurringSchedules: SimpleRecurringSchedules;
  getRegions: SimpleRegions;
  getResourceCategorySetting: SimpleResourceCategorySetting;
  getResourceCategoryTag: SimpleResourceCategoryTag;
  getResourceJobOffers: SimpleResourceJobOffers;
  getResourceOverrideRegions: SimpleResourceOverrideRegions;
  getResourceOverrides: SimpleResourceOverrides;
  getResourceRegions: SimpleResourceRegions;
  getResourceRequirementTags: SimpleResourceRequirementTags;
  getResourceRequirements: SimpleResourceRequirements;
  getResourceShiftBreaks: SimpleResourceShiftBreaks;
  getResourceShiftOffers: SimpleResourceShiftOffers;
  getResourceShifts: SimpleResourceShifts;
  getResourceTags: SimpleResourceTags;
  getResourceUtilization: SimpleResourceUtilization;
  getResources: SimpleResources;
  getScheduleTemplates: SimpleScheduleTemplates;
  getShiftOfferShifts: SimpleShiftOfferShifts;
  getShiftOffers: SimpleShiftOffers;
  getShiftTags: SimpleShiftTags;
  getShifts: SimpleShifts;
  getSignature: SimpleSignature;
  getSkeduloAdminSetting: SimpleSkeduloAdminSetting;
  getSkeduloJobSafetyAnalysisSetting: SimpleSkeduloJobSafetyAnalysisSetting;
  getSkeduloRegionCityMapping: SimpleSkeduloRegionCityMapping;
  getTags: SimpleTags;
  getTemplatedActivities: SimpleTemplatedActivities;
  getTemplatedActivityResources: SimpleTemplatedActivityResources;
  getTemplatedAttendees: SimpleTemplatedAttendees;
  getTemplatedJobAllocations: SimpleTemplatedJobAllocations;
  getTemplatedJobDependencies: SimpleTemplatedJobDependencies;
  getTemplatedJobProducts: SimpleTemplatedJobProducts;
  getTemplatedJobTags: SimpleTemplatedJobTags;
  getTemplatedJobTasks: SimpleTemplatedJobTasks;
  getTemplatedJobTimeConstraints: SimpleTemplatedJobTimeConstraints;
  getTemplatedJobs: SimpleTemplatedJobs;
  getTemplatedResourceRequirementTags: SimpleTemplatedResourceRequirementTags;
  getTemplatedResourceRequirements: SimpleTemplatedResourceRequirements;
  getTemplatedResourceShifts: SimpleTemplatedResourceShifts;
  getTemplatedShiftTags: SimpleTemplatedShiftTags;
  getTemplatedShifts: SimpleTemplatedShifts;
  getTimesheet: SimpleTimesheet;
  getTimesheetMaterial: SimpleTimesheetMaterial;
  getTimesheetResource: SimpleTimesheetResource;
  insertAccountResourceScores: Scalars['ID']['output'];
  insertAccountTags: Scalars['ID']['output'];
  insertAccounts: Scalars['ID']['output'];
  insertActivities: Scalars['ID']['output'];
  insertActivityResources: Scalars['ID']['output'];
  insertAttendees: Scalars['ID']['output'];
  insertAvailabilities: Scalars['ID']['output'];
  insertAvailabilityPatternResources: Scalars['ID']['output'];
  insertAvailabilityPatterns: Scalars['ID']['output'];
  insertAvailabilityTemplateEntries: Scalars['ID']['output'];
  insertAvailabilityTemplateResources: Scalars['ID']['output'];
  insertAvailabilityTemplates: Scalars['ID']['output'];
  insertBreak: Scalars['ID']['output'];
  insertClientAvailabilities: Scalars['ID']['output'];
  insertContactTags: Scalars['ID']['output'];
  insertContacts: Scalars['ID']['output'];
  insertHolidayRegions: Scalars['ID']['output'];
  insertHolidays: Scalars['ID']['output'];
  insertJobAllocations: Scalars['ID']['output'];
  insertJobDependencies: Scalars['ID']['output'];
  insertJobOffers: Scalars['ID']['output'];
  insertJobProducts: Scalars['ID']['output'];
  insertJobReportToYard: Scalars['ID']['output'];
  insertJobSafetyAnalysisForm: Scalars['ID']['output'];
  insertJobStatSheet: Scalars['ID']['output'];
  insertJobTags: Scalars['ID']['output'];
  insertJobTasks: Scalars['ID']['output'];
  insertJobTimeConstraints: Scalars['ID']['output'];
  insertJobTypeSetting: Scalars['ID']['output'];
  insertJobTypeTag: Scalars['ID']['output'];
  insertJobs: Scalars['ID']['output'];
  insertLocationResourceScores: Scalars['ID']['output'];
  insertLocations: Scalars['ID']['output'];
  insertProducts: Scalars['ID']['output'];
  insertProject: Scalars['ID']['output'];
  insertRecurringSchedules: Scalars['ID']['output'];
  insertRegions: Scalars['ID']['output'];
  insertResourceCategorySetting: Scalars['ID']['output'];
  insertResourceCategoryTag: Scalars['ID']['output'];
  insertResourceJobOffers: Scalars['ID']['output'];
  insertResourceOverrideRegions: Scalars['ID']['output'];
  insertResourceOverrides: Scalars['ID']['output'];
  insertResourceRegions: Scalars['ID']['output'];
  insertResourceRequirementTags: Scalars['ID']['output'];
  insertResourceRequirements: Scalars['ID']['output'];
  insertResourceShiftBreaks: Scalars['ID']['output'];
  insertResourceShiftOffers: Scalars['ID']['output'];
  insertResourceShifts: Scalars['ID']['output'];
  insertResourceTags: Scalars['ID']['output'];
  insertResourceUtilization: Scalars['ID']['output'];
  insertResources: Scalars['ID']['output'];
  insertScheduleTemplates: Scalars['ID']['output'];
  insertShiftOfferShifts: Scalars['ID']['output'];
  insertShiftOffers: Scalars['ID']['output'];
  insertShiftTags: Scalars['ID']['output'];
  insertShifts: Scalars['ID']['output'];
  insertSignature: Scalars['ID']['output'];
  insertSkeduloAdminSetting: Scalars['ID']['output'];
  insertSkeduloRegionCityMapping: Scalars['ID']['output'];
  insertTags: Scalars['ID']['output'];
  insertTemplatedActivities: Scalars['ID']['output'];
  insertTemplatedActivityResources: Scalars['ID']['output'];
  insertTemplatedAttendees: Scalars['ID']['output'];
  insertTemplatedJobAllocations: Scalars['ID']['output'];
  insertTemplatedJobDependencies: Scalars['ID']['output'];
  insertTemplatedJobProducts: Scalars['ID']['output'];
  insertTemplatedJobTags: Scalars['ID']['output'];
  insertTemplatedJobTasks: Scalars['ID']['output'];
  insertTemplatedJobTimeConstraints: Scalars['ID']['output'];
  insertTemplatedJobs: Scalars['ID']['output'];
  insertTemplatedResourceRequirementTags: Scalars['ID']['output'];
  insertTemplatedResourceRequirements: Scalars['ID']['output'];
  insertTemplatedResourceShifts: Scalars['ID']['output'];
  insertTemplatedShiftTags: Scalars['ID']['output'];
  insertTemplatedShifts: Scalars['ID']['output'];
  insertTimesheet: Scalars['ID']['output'];
  insertTimesheetMaterial: Scalars['ID']['output'];
  insertTimesheetResource: Scalars['ID']['output'];
  updateAccountResourceScores: Scalars['ID']['output'];
  updateAccountTags: Scalars['ID']['output'];
  updateAccounts: Scalars['ID']['output'];
  updateActivities: Scalars['ID']['output'];
  updateActivityResources: Scalars['ID']['output'];
  updateAttendees: Scalars['ID']['output'];
  updateAvailabilities: Scalars['ID']['output'];
  updateAvailabilityPatternResources: Scalars['ID']['output'];
  updateAvailabilityPatterns: Scalars['ID']['output'];
  updateAvailabilityTemplateEntries: Scalars['ID']['output'];
  updateAvailabilityTemplateResources: Scalars['ID']['output'];
  updateAvailabilityTemplates: Scalars['ID']['output'];
  updateBreak: Scalars['ID']['output'];
  updateClientAvailabilities: Scalars['ID']['output'];
  updateContactTags: Scalars['ID']['output'];
  updateContacts: Scalars['ID']['output'];
  updateHolidayRegions: Scalars['ID']['output'];
  updateHolidays: Scalars['ID']['output'];
  updateJobAllocations: Scalars['ID']['output'];
  updateJobDependencies: Scalars['ID']['output'];
  updateJobOffers: Scalars['ID']['output'];
  updateJobProducts: Scalars['ID']['output'];
  updateJobReportToYard: Scalars['ID']['output'];
  updateJobSafetyAnalysisForm: Scalars['ID']['output'];
  updateJobStatSheet: Scalars['ID']['output'];
  updateJobTags: Scalars['ID']['output'];
  updateJobTasks: Scalars['ID']['output'];
  updateJobTimeConstraints: Scalars['ID']['output'];
  updateJobTypeSetting: Scalars['ID']['output'];
  updateJobTypeTag: Scalars['ID']['output'];
  updateJobs: Scalars['ID']['output'];
  updateLocationResourceScores: Scalars['ID']['output'];
  updateLocations: Scalars['ID']['output'];
  updateProducts: Scalars['ID']['output'];
  updateProject: Scalars['ID']['output'];
  updateRecurringSchedules: Scalars['ID']['output'];
  updateRegions: Scalars['ID']['output'];
  updateResourceCategorySetting: Scalars['ID']['output'];
  updateResourceCategoryTag: Scalars['ID']['output'];
  updateResourceJobOffers: Scalars['ID']['output'];
  updateResourceOverrideRegions: Scalars['ID']['output'];
  updateResourceOverrides: Scalars['ID']['output'];
  updateResourceRegions: Scalars['ID']['output'];
  updateResourceRequirementTags: Scalars['ID']['output'];
  updateResourceRequirements: Scalars['ID']['output'];
  updateResourceShiftBreaks: Scalars['ID']['output'];
  updateResourceShiftOffers: Scalars['ID']['output'];
  updateResourceShifts: Scalars['ID']['output'];
  updateResourceTags: Scalars['ID']['output'];
  updateResourceUtilization: Scalars['ID']['output'];
  updateResources: Scalars['ID']['output'];
  updateScheduleTemplates: Scalars['ID']['output'];
  updateShiftOfferShifts: Scalars['ID']['output'];
  updateShiftOffers: Scalars['ID']['output'];
  updateShiftTags: Scalars['ID']['output'];
  updateShifts: Scalars['ID']['output'];
  updateSignature: Scalars['ID']['output'];
  updateSkeduloAdminSetting: Scalars['ID']['output'];
  updateSkeduloJobSafetyAnalysisSetting: Scalars['ID']['output'];
  updateSkeduloRegionCityMapping: Scalars['ID']['output'];
  updateTags: Scalars['ID']['output'];
  updateTemplatedActivities: Scalars['ID']['output'];
  updateTemplatedActivityResources: Scalars['ID']['output'];
  updateTemplatedAttendees: Scalars['ID']['output'];
  updateTemplatedJobAllocations: Scalars['ID']['output'];
  updateTemplatedJobDependencies: Scalars['ID']['output'];
  updateTemplatedJobProducts: Scalars['ID']['output'];
  updateTemplatedJobTags: Scalars['ID']['output'];
  updateTemplatedJobTasks: Scalars['ID']['output'];
  updateTemplatedJobTimeConstraints: Scalars['ID']['output'];
  updateTemplatedJobs: Scalars['ID']['output'];
  updateTemplatedResourceRequirementTags: Scalars['ID']['output'];
  updateTemplatedResourceRequirements: Scalars['ID']['output'];
  updateTemplatedResourceShifts: Scalars['ID']['output'];
  updateTemplatedShiftTags: Scalars['ID']['output'];
  updateTemplatedShifts: Scalars['ID']['output'];
  updateTimesheet: Scalars['ID']['output'];
  updateTimesheetMaterial: Scalars['ID']['output'];
  updateTimesheetResource: Scalars['ID']['output'];
};


export type SchemaMutationDeleteAccountResourceScoresArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAccountTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAccountsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteActivitiesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteActivityResourcesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAttendeesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAvailabilitiesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAvailabilityPatternResourcesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAvailabilityPatternsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAvailabilityTemplateEntriesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAvailabilityTemplateResourcesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteAvailabilityTemplatesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteBreakArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteClientAvailabilitiesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteContactTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteContactsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteHolidayRegionsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteHolidaysArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobAllocationsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobDependenciesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobOffersArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobProductsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobReportToYardArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobSafetyAnalysisFormArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobStatSheetArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobTasksArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobTimeConstraintsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobTypeSettingArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobTypeTagArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteJobsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteLocationResourceScoresArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteLocationsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteProductsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteProjectArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteRecurringSchedulesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteRegionsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceCategorySettingArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceCategoryTagArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceJobOffersArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceOverrideRegionsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceOverridesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceRegionsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceRequirementTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceRequirementsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceShiftBreaksArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceShiftOffersArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceShiftsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourceUtilizationArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteResourcesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteScheduleTemplatesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteShiftOfferShiftsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteShiftOffersArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteShiftTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteShiftsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteSignatureArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteSkeduloAdminSettingArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteSkeduloJobSafetyAnalysisSettingArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteSkeduloRegionCityMappingArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedActivitiesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedActivityResourcesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedAttendeesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobAllocationsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobDependenciesArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobProductsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobTasksArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobTimeConstraintsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedJobsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedResourceRequirementTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedResourceRequirementsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedResourceShiftsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedShiftTagsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTemplatedShiftsArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTimesheetArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTimesheetMaterialArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationDeleteTimesheetResourceArgs = {
  UID: Scalars['ID']['input'];
};


export type SchemaMutationGetAccountResourceScoresArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAccountTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAccountsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetActivitiesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetActivityResourcesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAttendeesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAvailabilitiesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAvailabilityPatternResourcesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAvailabilityPatternsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAvailabilityTemplateEntriesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAvailabilityTemplateResourcesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetAvailabilityTemplatesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetBreakArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetClientAvailabilitiesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetContactTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetContactsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetHolidayRegionsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetHolidaysArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobAllocationsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobDependenciesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobOffersArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobProductsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobReportToYardArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobSafetyAnalysisFormArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobStatSheetArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobTasksArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobTimeConstraintsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobTypeSettingArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobTypeTagArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetJobsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetLocationResourceScoresArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetLocationsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetProductsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetProjectArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetRecurringSchedulesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetRegionsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceCategorySettingArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceCategoryTagArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceJobOffersArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceOverrideRegionsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceOverridesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceRegionsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceRequirementTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceRequirementsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceShiftBreaksArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceShiftOffersArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceShiftsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourceUtilizationArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetResourcesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetScheduleTemplatesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetShiftOfferShiftsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetShiftOffersArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetShiftTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetShiftsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetSignatureArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetSkeduloAdminSettingArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetSkeduloJobSafetyAnalysisSettingArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetSkeduloRegionCityMappingArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedActivitiesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedActivityResourcesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedAttendeesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobAllocationsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobDependenciesArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobProductsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobTasksArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobTimeConstraintsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedJobsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedResourceRequirementTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedResourceRequirementsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedResourceShiftsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedShiftTagsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTemplatedShiftsArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTimesheetArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTimesheetMaterialArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationGetTimesheetResourceArgs = {
  id: Scalars['ID']['input'];
};


export type SchemaMutationInsertAccountResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAccountResourceScores;
};


export type SchemaMutationInsertAccountTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAccountTags;
};


export type SchemaMutationInsertAccountsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAccounts;
};


export type SchemaMutationInsertActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewActivities;
};


export type SchemaMutationInsertActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewActivityResources;
};


export type SchemaMutationInsertAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAttendees;
};


export type SchemaMutationInsertAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAvailabilities;
};


export type SchemaMutationInsertAvailabilityPatternResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAvailabilityPatternResources;
};


export type SchemaMutationInsertAvailabilityPatternsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAvailabilityPatterns;
};


export type SchemaMutationInsertAvailabilityTemplateEntriesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAvailabilityTemplateEntries;
};


export type SchemaMutationInsertAvailabilityTemplateResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAvailabilityTemplateResources;
};


export type SchemaMutationInsertAvailabilityTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewAvailabilityTemplates;
};


export type SchemaMutationInsertBreakArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewBreak;
};


export type SchemaMutationInsertClientAvailabilitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewClientAvailabilities;
};


export type SchemaMutationInsertContactTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewContactTags;
};


export type SchemaMutationInsertContactsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewContacts;
};


export type SchemaMutationInsertHolidayRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewHolidayRegions;
};


export type SchemaMutationInsertHolidaysArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewHolidays;
};


export type SchemaMutationInsertJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobAllocations;
};


export type SchemaMutationInsertJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobDependencies;
};


export type SchemaMutationInsertJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobOffers;
};


export type SchemaMutationInsertJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobProducts;
};


export type SchemaMutationInsertJobReportToYardArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobReportToYard;
};


export type SchemaMutationInsertJobSafetyAnalysisFormArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobSafetyAnalysisForm;
};


export type SchemaMutationInsertJobStatSheetArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobStatSheet;
};


export type SchemaMutationInsertJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobTags;
};


export type SchemaMutationInsertJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobTasks;
};


export type SchemaMutationInsertJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobTimeConstraints;
};


export type SchemaMutationInsertJobTypeSettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobTypeSetting;
};


export type SchemaMutationInsertJobTypeTagArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobTypeTag;
};


export type SchemaMutationInsertJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewJobs;
};


export type SchemaMutationInsertLocationResourceScoresArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewLocationResourceScores;
};


export type SchemaMutationInsertLocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewLocations;
};


export type SchemaMutationInsertProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewProducts;
};


export type SchemaMutationInsertProjectArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewProject;
};


export type SchemaMutationInsertRecurringSchedulesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewRecurringSchedules;
};


export type SchemaMutationInsertRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewRegions;
};


export type SchemaMutationInsertResourceCategorySettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceCategorySetting;
};


export type SchemaMutationInsertResourceCategoryTagArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceCategoryTag;
};


export type SchemaMutationInsertResourceJobOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceJobOffers;
};


export type SchemaMutationInsertResourceOverrideRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceOverrideRegions;
};


export type SchemaMutationInsertResourceOverridesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceOverrides;
};


export type SchemaMutationInsertResourceRegionsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceRegions;
};


export type SchemaMutationInsertResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceRequirementTags;
};


export type SchemaMutationInsertResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceRequirements;
};


export type SchemaMutationInsertResourceShiftBreaksArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceShiftBreaks;
};


export type SchemaMutationInsertResourceShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceShiftOffers;
};


export type SchemaMutationInsertResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceShifts;
};


export type SchemaMutationInsertResourceTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceTags;
};


export type SchemaMutationInsertResourceUtilizationArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResourceUtilization;
};


export type SchemaMutationInsertResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewResources;
};


export type SchemaMutationInsertScheduleTemplatesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewScheduleTemplates;
};


export type SchemaMutationInsertShiftOfferShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewShiftOfferShifts;
};


export type SchemaMutationInsertShiftOffersArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewShiftOffers;
};


export type SchemaMutationInsertShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewShiftTags;
};


export type SchemaMutationInsertShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewShifts;
};


export type SchemaMutationInsertSignatureArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewSignature;
};


export type SchemaMutationInsertSkeduloAdminSettingArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewSkeduloAdminSetting;
};


export type SchemaMutationInsertSkeduloRegionCityMappingArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewSkeduloRegionCityMapping;
};


export type SchemaMutationInsertTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTags;
};


export type SchemaMutationInsertTemplatedActivitiesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedActivities;
};


export type SchemaMutationInsertTemplatedActivityResourcesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedActivityResources;
};


export type SchemaMutationInsertTemplatedAttendeesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedAttendees;
};


export type SchemaMutationInsertTemplatedJobAllocationsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobAllocations;
};


export type SchemaMutationInsertTemplatedJobDependenciesArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobDependencies;
};


export type SchemaMutationInsertTemplatedJobProductsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobProducts;
};


export type SchemaMutationInsertTemplatedJobTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobTags;
};


export type SchemaMutationInsertTemplatedJobTasksArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobTasks;
};


export type SchemaMutationInsertTemplatedJobTimeConstraintsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobTimeConstraints;
};


export type SchemaMutationInsertTemplatedJobsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedJobs;
};


export type SchemaMutationInsertTemplatedResourceRequirementTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedResourceRequirementTags;
};


export type SchemaMutationInsertTemplatedResourceRequirementsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedResourceRequirements;
};


export type SchemaMutationInsertTemplatedResourceShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedResourceShifts;
};


export type SchemaMutationInsertTemplatedShiftTagsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedShiftTags;
};


export type SchemaMutationInsertTemplatedShiftsArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTemplatedShifts;
};


export type SchemaMutationInsertTimesheetArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTimesheet;
};


export type SchemaMutationInsertTimesheetMaterialArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTimesheetMaterial;
};


export type SchemaMutationInsertTimesheetResourceArgs = {
  idAlias?: InputMaybe<Scalars['ID']['input']>;
  input: NewTimesheetResource;
};


export type SchemaMutationUpdateAccountResourceScoresArgs = {
  input: UpdateAccountResourceScores;
};


export type SchemaMutationUpdateAccountTagsArgs = {
  input: UpdateAccountTags;
};


export type SchemaMutationUpdateAccountsArgs = {
  input: UpdateAccounts;
};


export type SchemaMutationUpdateActivitiesArgs = {
  input: UpdateActivities;
};


export type SchemaMutationUpdateActivityResourcesArgs = {
  input: UpdateActivityResources;
};


export type SchemaMutationUpdateAttendeesArgs = {
  input: UpdateAttendees;
};


export type SchemaMutationUpdateAvailabilitiesArgs = {
  input: UpdateAvailabilities;
};


export type SchemaMutationUpdateAvailabilityPatternResourcesArgs = {
  input: UpdateAvailabilityPatternResources;
};


export type SchemaMutationUpdateAvailabilityPatternsArgs = {
  input: UpdateAvailabilityPatterns;
};


export type SchemaMutationUpdateAvailabilityTemplateEntriesArgs = {
  input: UpdateAvailabilityTemplateEntries;
};


export type SchemaMutationUpdateAvailabilityTemplateResourcesArgs = {
  input: UpdateAvailabilityTemplateResources;
};


export type SchemaMutationUpdateAvailabilityTemplatesArgs = {
  input: UpdateAvailabilityTemplates;
};


export type SchemaMutationUpdateBreakArgs = {
  input: UpdateBreak;
};


export type SchemaMutationUpdateClientAvailabilitiesArgs = {
  input: UpdateClientAvailabilities;
};


export type SchemaMutationUpdateContactTagsArgs = {
  input: UpdateContactTags;
};


export type SchemaMutationUpdateContactsArgs = {
  input: UpdateContacts;
};


export type SchemaMutationUpdateHolidayRegionsArgs = {
  input: UpdateHolidayRegions;
};


export type SchemaMutationUpdateHolidaysArgs = {
  input: UpdateHolidays;
};


export type SchemaMutationUpdateJobAllocationsArgs = {
  input: UpdateJobAllocations;
};


export type SchemaMutationUpdateJobDependenciesArgs = {
  input: UpdateJobDependencies;
};


export type SchemaMutationUpdateJobOffersArgs = {
  input: UpdateJobOffers;
};


export type SchemaMutationUpdateJobProductsArgs = {
  input: UpdateJobProducts;
};


export type SchemaMutationUpdateJobReportToYardArgs = {
  input: UpdateJobReportToYard;
};


export type SchemaMutationUpdateJobSafetyAnalysisFormArgs = {
  input: UpdateJobSafetyAnalysisForm;
};


export type SchemaMutationUpdateJobStatSheetArgs = {
  input: UpdateJobStatSheet;
};


export type SchemaMutationUpdateJobTagsArgs = {
  input: UpdateJobTags;
};


export type SchemaMutationUpdateJobTasksArgs = {
  input: UpdateJobTasks;
};


export type SchemaMutationUpdateJobTimeConstraintsArgs = {
  input: UpdateJobTimeConstraints;
};


export type SchemaMutationUpdateJobTypeSettingArgs = {
  input: UpdateJobTypeSetting;
};


export type SchemaMutationUpdateJobTypeTagArgs = {
  input: UpdateJobTypeTag;
};


export type SchemaMutationUpdateJobsArgs = {
  input: UpdateJobs;
};


export type SchemaMutationUpdateLocationResourceScoresArgs = {
  input: UpdateLocationResourceScores;
};


export type SchemaMutationUpdateLocationsArgs = {
  input: UpdateLocations;
};


export type SchemaMutationUpdateProductsArgs = {
  input: UpdateProducts;
};


export type SchemaMutationUpdateProjectArgs = {
  input: UpdateProject;
};


export type SchemaMutationUpdateRecurringSchedulesArgs = {
  input: UpdateRecurringSchedules;
};


export type SchemaMutationUpdateRegionsArgs = {
  input: UpdateRegions;
};


export type SchemaMutationUpdateResourceCategorySettingArgs = {
  input: UpdateResourceCategorySetting;
};


export type SchemaMutationUpdateResourceCategoryTagArgs = {
  input: UpdateResourceCategoryTag;
};


export type SchemaMutationUpdateResourceJobOffersArgs = {
  input: UpdateResourceJobOffers;
};


export type SchemaMutationUpdateResourceOverrideRegionsArgs = {
  input: UpdateResourceOverrideRegions;
};


export type SchemaMutationUpdateResourceOverridesArgs = {
  input: UpdateResourceOverrides;
};


export type SchemaMutationUpdateResourceRegionsArgs = {
  input: UpdateResourceRegions;
};


export type SchemaMutationUpdateResourceRequirementTagsArgs = {
  input: UpdateResourceRequirementTags;
};


export type SchemaMutationUpdateResourceRequirementsArgs = {
  input: UpdateResourceRequirements;
};


export type SchemaMutationUpdateResourceShiftBreaksArgs = {
  input: UpdateResourceShiftBreaks;
};


export type SchemaMutationUpdateResourceShiftOffersArgs = {
  input: UpdateResourceShiftOffers;
};


export type SchemaMutationUpdateResourceShiftsArgs = {
  input: UpdateResourceShifts;
};


export type SchemaMutationUpdateResourceTagsArgs = {
  input: UpdateResourceTags;
};


export type SchemaMutationUpdateResourceUtilizationArgs = {
  input: UpdateResourceUtilization;
};


export type SchemaMutationUpdateResourcesArgs = {
  input: UpdateResources;
};


export type SchemaMutationUpdateScheduleTemplatesArgs = {
  input: UpdateScheduleTemplates;
};


export type SchemaMutationUpdateShiftOfferShiftsArgs = {
  input: UpdateShiftOfferShifts;
};


export type SchemaMutationUpdateShiftOffersArgs = {
  input: UpdateShiftOffers;
};


export type SchemaMutationUpdateShiftTagsArgs = {
  input: UpdateShiftTags;
};


export type SchemaMutationUpdateShiftsArgs = {
  input: UpdateShifts;
};


export type SchemaMutationUpdateSignatureArgs = {
  input: UpdateSignature;
};


export type SchemaMutationUpdateSkeduloAdminSettingArgs = {
  input: UpdateSkeduloAdminSetting;
};


export type SchemaMutationUpdateSkeduloJobSafetyAnalysisSettingArgs = {
  input: UpdateSkeduloJobSafetyAnalysisSetting;
};


export type SchemaMutationUpdateSkeduloRegionCityMappingArgs = {
  input: UpdateSkeduloRegionCityMapping;
};


export type SchemaMutationUpdateTagsArgs = {
  input: UpdateTags;
};


export type SchemaMutationUpdateTemplatedActivitiesArgs = {
  input: UpdateTemplatedActivities;
};


export type SchemaMutationUpdateTemplatedActivityResourcesArgs = {
  input: UpdateTemplatedActivityResources;
};


export type SchemaMutationUpdateTemplatedAttendeesArgs = {
  input: UpdateTemplatedAttendees;
};


export type SchemaMutationUpdateTemplatedJobAllocationsArgs = {
  input: UpdateTemplatedJobAllocations;
};


export type SchemaMutationUpdateTemplatedJobDependenciesArgs = {
  input: UpdateTemplatedJobDependencies;
};


export type SchemaMutationUpdateTemplatedJobProductsArgs = {
  input: UpdateTemplatedJobProducts;
};


export type SchemaMutationUpdateTemplatedJobTagsArgs = {
  input: UpdateTemplatedJobTags;
};


export type SchemaMutationUpdateTemplatedJobTasksArgs = {
  input: UpdateTemplatedJobTasks;
};


export type SchemaMutationUpdateTemplatedJobTimeConstraintsArgs = {
  input: UpdateTemplatedJobTimeConstraints;
};


export type SchemaMutationUpdateTemplatedJobsArgs = {
  input: UpdateTemplatedJobs;
};


export type SchemaMutationUpdateTemplatedResourceRequirementTagsArgs = {
  input: UpdateTemplatedResourceRequirementTags;
};


export type SchemaMutationUpdateTemplatedResourceRequirementsArgs = {
  input: UpdateTemplatedResourceRequirements;
};


export type SchemaMutationUpdateTemplatedResourceShiftsArgs = {
  input: UpdateTemplatedResourceShifts;
};


export type SchemaMutationUpdateTemplatedShiftTagsArgs = {
  input: UpdateTemplatedShiftTags;
};


export type SchemaMutationUpdateTemplatedShiftsArgs = {
  input: UpdateTemplatedShifts;
};


export type SchemaMutationUpdateTimesheetArgs = {
  input: UpdateTimesheet;
};


export type SchemaMutationUpdateTimesheetMaterialArgs = {
  input: UpdateTimesheetMaterial;
};


export type SchemaMutationUpdateTimesheetResourceArgs = {
  input: UpdateTimesheetResource;
};

export type SchemaSubscriptionActivities = {
  __typename?: 'SchemaSubscriptionActivities';
  Address?: Maybe<Scalars['String']['output']>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  JobAllocationId?: Maybe<Scalars['ID']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Name: Scalars['String']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  ResourceId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  TemplatedActivityId?: Maybe<Scalars['ID']['output']>;
  Timezone?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SchemaSubscriptionAvailabilities = {
  __typename?: 'SchemaSubscriptionAvailabilities';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Finish: Scalars['Instant']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  PaidTimeOffID?: Maybe<Scalars['String']['output']>;
  ResourceId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  Status?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SchemaSubscriptionJobAllocations = {
  __typename?: 'SchemaSubscriptionJobAllocations';
  APILog?: Maybe<Scalars['String']['output']>;
  ArriveAtYard?: Maybe<Scalars['Instant']['output']>;
  AssetID?: Maybe<Scalars['String']['output']>;
  AssignedToId?: Maybe<Scalars['ID']['output']>;
  CheckInToYard?: Maybe<Scalars['Instant']['output']>;
  CheckInYardWithBuffer?: Maybe<Scalars['Instant']['output']>;
  ConfirmedTimes: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DeclineDescription?: Maybe<Scalars['String']['output']>;
  DeclineReason?: Maybe<Scalars['String']['output']>;
  DeleteByScheduler: Scalars['Boolean']['output'];
  DeletedByJobCancel: Scalars['Boolean']['output'];
  DepartFromYard?: Maybe<Scalars['Instant']['output']>;
  Driver: Scalars['Boolean']['output'];
  DrivingTruckId?: Maybe<Scalars['ID']['output']>;
  Duration?: Maybe<Scalars['Duration']['output']>;
  End?: Maybe<Scalars['Instant']['output']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']['output']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']['output']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HasBreak: Scalars['Boolean']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  NotificationType?: Maybe<Scalars['String']['output']>;
  PhoneResponse?: Maybe<Scalars['String']['output']>;
  ReportToYard?: Maybe<Scalars['Instant']['output']>;
  ResourceApprovedCheckIn?: Maybe<Scalars['Instant']['output']>;
  ResourceApprovedCompleteTime?: Maybe<Scalars['Instant']['output']>;
  ResourceId: Scalars['ID']['output'];
  ResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  SplitDriveTime?: Maybe<Scalars['String']['output']>;
  Start?: Maybe<Scalars['Instant']['output']>;
  StartGeoLocationLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  StartGeoLocationLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  StartLocationAddress?: Maybe<Scalars['String']['output']>;
  StartLocationType?: Maybe<Scalars['String']['output']>;
  StatSheetCheckIn?: Maybe<Scalars['Instant']['output']>;
  StatSheetCompleteTime?: Maybe<Scalars['Instant']['output']>;
  Status: Scalars['String']['output'];
  TakenAllMeals?: Maybe<Scalars['String']['output']>;
  TakenAllRestBreaks?: Maybe<Scalars['String']['output']>;
  TeamLeader: Scalars['Boolean']['output'];
  TimeCheckedIn?: Maybe<Scalars['Instant']['output']>;
  TimeCompleted?: Maybe<Scalars['Instant']['output']>;
  TimeInProgress?: Maybe<Scalars['Instant']['output']>;
  TimePublished?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  TimeStartTravel?: Maybe<Scalars['Instant']['output']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']['output']>;
  TravelTime?: Maybe<Scalars['Duration']['output']>;
  UID: Scalars['ID']['output'];
  WaiveSecondMeal: Scalars['Boolean']['output'];
};

export type SchemaSubscriptionJobs = {
  __typename?: 'SchemaSubscriptionJobs';
  AbortReason?: Maybe<Scalars['String']['output']>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  ActualEnd?: Maybe<Scalars['Instant']['output']>;
  ActualStart?: Maybe<Scalars['Instant']['output']>;
  AdditionalContactName?: Maybe<Scalars['String']['output']>;
  Address?: Maybe<Scalars['String']['output']>;
  AdminCancellationTime?: Maybe<Scalars['Instant']['output']>;
  AdminCancelledById?: Maybe<Scalars['ID']['output']>;
  Alert?: Maybe<Scalars['String']['output']>;
  Attachments?: Maybe<Scalars['String']['output']>;
  AutoSchedule: Scalars['Boolean']['output'];
  BATSAccountManager?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerEmail?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerPhone?: Maybe<Scalars['String']['output']>;
  BATSStatusAtTimeOfCancellation?: Maybe<Scalars['String']['output']>;
  Branches?: Maybe<Scalars['String']['output']>;
  CanBeDeclined: Scalars['Boolean']['output'];
  CancellationExplanation?: Maybe<Scalars['String']['output']>;
  CancellationTimeStr?: Maybe<Scalars['String']['output']>;
  CertifiedPayroll: Scalars['Boolean']['output'];
  ChargeForCancellation: Scalars['Boolean']['output'];
  City?: Maybe<Scalars['String']['output']>;
  CompletionNotes?: Maybe<Scalars['String']['output']>;
  ContactId?: Maybe<Scalars['ID']['output']>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedBySales: Scalars['Boolean']['output'];
  CreatedDate: Scalars['Instant']['output'];
  CrewSize?: Maybe<Scalars['BigDecimal']['output']>;
  CustomerCancellationTimeStr?: Maybe<Scalars['String']['output']>;
  CustomerConfirmationStatus?: Maybe<Scalars['String']['output']>;
  CustomerEmail?: Maybe<Scalars['String']['output']>;
  CustomerInitiatedCancellationById?: Maybe<Scalars['ID']['output']>;
  CustomerInitiatedCancellationTime?: Maybe<Scalars['Instant']['output']>;
  CustomerJobNo?: Maybe<Scalars['String']['output']>;
  CustomerPhone?: Maybe<Scalars['String']['output']>;
  CustomerRole?: Maybe<Scalars['String']['output']>;
  CustomerTierLevel?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  DispatcherCancellationReason?: Maybe<Scalars['String']['output']>;
  DispatcherFollowUp?: Maybe<Scalars['String']['output']>;
  DispatcherNotes?: Maybe<Scalars['String']['output']>;
  DispatcherReliefCrew?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  EmergencyJob: Scalars['Boolean']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  EquipmentSetUp: Scalars['Boolean']['output'];
  EstimatedEnd?: Maybe<Scalars['Instant']['output']>;
  EstimatedStart?: Maybe<Scalars['Instant']['output']>;
  FirstJobInRecurring: Scalars['Boolean']['output'];
  FollowUp?: Maybe<Scalars['String']['output']>;
  FollowupReason?: Maybe<Scalars['String']['output']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  ImmediateResponse: Scalars['Boolean']['output'];
  InventoryRequestCancelledById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestFilled: Scalars['Boolean']['output'];
  InventoryRequestFilledById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestFilledTime?: Maybe<Scalars['Instant']['output']>;
  InventoryRequested: Scalars['Boolean']['output'];
  InventoryRequestedById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestedCancelled: Scalars['Boolean']['output'];
  InventoryRequestedCancelledDateTime?: Maybe<Scalars['Instant']['output']>;
  InventoryRequestedTime?: Maybe<Scalars['Instant']['output']>;
  IsAssetUpdated: Scalars['Boolean']['output'];
  IsGroupEvent: Scalars['Boolean']['output'];
  IsJSAFormChanged: Scalars['Boolean']['output'];
  IsJSAFormCreated: Scalars['Boolean']['output'];
  IsSoftCancellation: Scalars['Boolean']['output'];
  JobAllocationCount: Scalars['Int']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  JobStatus: Scalars['String']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Locked: Scalars['Boolean']['output'];
  MaxAttendees?: Maybe<Scalars['Int']['output']>;
  MinAttendees?: Maybe<Scalars['Int']['output']>;
  MuteNotifications: Scalars['Boolean']['output'];
  Name: Scalars['String']['output'];
  NearestYardId?: Maybe<Scalars['ID']['output']>;
  NoCustomerOnsite: Scalars['Boolean']['output'];
  NotesComments?: Maybe<Scalars['String']['output']>;
  NotifyBy?: Maybe<Scalars['Instant']['output']>;
  NotifyPeriod?: Maybe<Scalars['Int']['output']>;
  NotifyTeamLeaderTime?: Maybe<Scalars['Instant']['output']>;
  OnsiteContactEmail?: Maybe<Scalars['String']['output']>;
  OnsiteContactId?: Maybe<Scalars['ID']['output']>;
  OnsiteContactPhone?: Maybe<Scalars['String']['output']>;
  OnsiteContactRole?: Maybe<Scalars['String']['output']>;
  OtherDocs: Scalars['Boolean']['output'];
  OvernightStay: Scalars['Boolean']['output'];
  PGEJob: Scalars['Boolean']['output'];
  PGEJobType?: Maybe<Scalars['String']['output']>;
  PGEOfficeClerkName?: Maybe<Scalars['String']['output']>;
  PGEOfficeToBillId?: Maybe<Scalars['ID']['output']>;
  PM?: Maybe<Scalars['String']['output']>;
  PO?: Maybe<Scalars['String']['output']>;
  ParentId?: Maybe<Scalars['ID']['output']>;
  PrivatelyFunded: Scalars['Boolean']['output'];
  ProjectId?: Maybe<Scalars['ID']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  RecurringScheduleId?: Maybe<Scalars['ID']['output']>;
  RegionId: Scalars['ID']['output'];
  ReliefCrew?: Maybe<Scalars['String']['output']>;
  RequestApprovalStatus?: Maybe<Scalars['String']['output']>;
  RequiredTrucks?: Maybe<Scalars['BigDecimal']['output']>;
  ResourceCancelApprovedRejectedById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationApprovedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationRejectedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationRequestStatus?: Maybe<Scalars['String']['output']>;
  ResourceCancellationRequestedById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationRequestedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationTime?: Maybe<Scalars['Instant']['output']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  SecondaryJobType?: Maybe<Scalars['String']['output']>;
  Sections?: Maybe<Scalars['String']['output']>;
  SendEmailNotificationToDispatched: Scalars['Boolean']['output'];
  SitePicturesRequired: Scalars['Boolean']['output'];
  Start?: Maybe<Scalars['Instant']['output']>;
  StatSheetSigningTime?: Maybe<Scalars['Instant']['output']>;
  StatSheetSubmittedTime?: Maybe<Scalars['Instant']['output']>;
  TemplatedJobId?: Maybe<Scalars['ID']['output']>;
  Timezone: Scalars['String']['output'];
  TrafficPermitIncluded: Scalars['Boolean']['output'];
  TrafficPlanIncluded: Scalars['Boolean']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Urgency?: Maybe<Scalars['String']['output']>;
  VirtualMeetingId?: Maybe<Scalars['String']['output']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']['output']>;
  VirtualMeetingURL?: Maybe<Scalars['String']['output']>;
  X2WayRadiosRequired: Scalars['Boolean']['output'];
};

export type SchemaSubscriptionNotification = {
  operation: SchemaSubscriptionOp;
  timestamp: Scalars['Instant']['output'];
};

export type SchemaSubscriptionNotificationActivities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationActivities';
  data: SchemaSubscriptionActivities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionActivities;
  timestamp: Scalars['Instant']['output'];
};

export type SchemaSubscriptionNotificationAvailabilities = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationAvailabilities';
  data: SchemaSubscriptionAvailabilities;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionAvailabilities;
  timestamp: Scalars['Instant']['output'];
};

export type SchemaSubscriptionNotificationJobAllocations = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobAllocations';
  data: SchemaSubscriptionJobAllocations;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobAllocations;
  timestamp: Scalars['Instant']['output'];
};

export type SchemaSubscriptionNotificationJobs = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationJobs';
  data: SchemaSubscriptionJobs;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionJobs;
  timestamp: Scalars['Instant']['output'];
};

export type SchemaSubscriptionNotificationShifts = SchemaSubscriptionNotification & {
  __typename?: 'SchemaSubscriptionNotificationShifts';
  data: SchemaSubscriptionShifts;
  operation: SchemaSubscriptionOp;
  previous: SchemaSubscriptionShifts;
  timestamp: Scalars['Instant']['output'];
};

export enum SchemaSubscriptionOp {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Update = 'UPDATE'
}

export type SchemaSubscriptionShifts = {
  __typename?: 'SchemaSubscriptionShifts';
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DisplayName?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  End: Scalars['Instant']['output'];
  IsDraft: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Name: Scalars['String']['output'];
  RegionId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  TemplatedShiftId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type ShiftOfferShifts = {
  __typename?: 'ShiftOfferShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Shift: Shifts;
  ShiftId: Scalars['ID']['output'];
  ShiftOffer: ShiftOffers;
  ShiftOfferId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type ShiftOfferShiftsConnection = {
  __typename?: 'ShiftOfferShiftsConnection';
  edges: Array<ShiftOfferShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ShiftOfferShiftsEdge = {
  __typename?: 'ShiftOfferShiftsEdge';
  cursor: Scalars['Base64']['output'];
  node: ShiftOfferShifts;
  offset: Scalars['Int']['output'];
};

export type ShiftOffers = {
  __typename?: 'ShiftOffers';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceShiftOffers: Array<ResourceShiftOffers>;
  Shifts: Array<ShiftOfferShifts>;
  Status: Scalars['OfferStatus']['output'];
  UID: Scalars['ID']['output'];
};


export type ShiftOffersResourceShiftOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShiftOffers']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShiftOffers']['input']>;
};


export type ShiftOffersShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']['input']>;
};

export type ShiftOffersConnection = {
  __typename?: 'ShiftOffersConnection';
  edges: Array<ShiftOffersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ShiftOffersEdge = {
  __typename?: 'ShiftOffersEdge';
  cursor: Scalars['Base64']['output'];
  node: ShiftOffers;
  offset: Scalars['Int']['output'];
};

export type ShiftTags = {
  __typename?: 'ShiftTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Shift: Shifts;
  ShiftId: Scalars['ID']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type ShiftTagsConnection = {
  __typename?: 'ShiftTagsConnection';
  edges: Array<ShiftTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ShiftTagsEdge = {
  __typename?: 'ShiftTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: ShiftTags;
  offset: Scalars['Int']['output'];
};

export type Shifts = {
  __typename?: 'Shifts';
  CopiedFrom?: Maybe<Shifts>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DisplayName?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  End: Scalars['Instant']['output'];
  IsDraft: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']['output']>;
  Name: Scalars['String']['output'];
  Region?: Maybe<Regions>;
  RegionId?: Maybe<Scalars['ID']['output']>;
  ResourceShifts: Array<ResourceShifts>;
  ScheduleTemplate?: Maybe<ScheduleTemplates>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  ShiftOffers: Array<ShiftOfferShifts>;
  ShiftTags: Array<ShiftTags>;
  Start: Scalars['Instant']['output'];
  TemplatedShift?: Maybe<TemplatedShifts>;
  TemplatedShiftId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};


export type ShiftsResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResourceShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResourceShifts']['input']>;
};


export type ShiftsShiftOffersArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftOfferShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftOfferShifts']['input']>;
};


export type ShiftsShiftTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShiftTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShiftTags']['input']>;
};

export type ShiftsConnection = {
  __typename?: 'ShiftsConnection';
  edges: Array<ShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ShiftsEdge = {
  __typename?: 'ShiftsEdge';
  cursor: Scalars['Base64']['output'];
  node: Shifts;
  offset: Scalars['Int']['output'];
};

export type Signature = {
  __typename?: 'Signature';
  CompanyName?: Maybe<Scalars['String']['output']>;
  JobSafetyAnalysisForm?: Maybe<JobSafetyAnalysisForm>;
  JobSafetyAnalysisFormId?: Maybe<Scalars['ID']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PrintName?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SignatureConnection = {
  __typename?: 'SignatureConnection';
  edges: Array<SignatureEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SignatureEdge = {
  __typename?: 'SignatureEdge';
  cursor: Scalars['Base64']['output'];
  node: Signature;
  offset: Scalars['Int']['output'];
};

export type SimpleAccountResourceScores = {
  __typename?: 'SimpleAccountResourceScores';
  AccountId: Scalars['ID']['output'];
  Blacklisted: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Whitelisted: Scalars['Boolean']['output'];
};

export type SimpleAccountTags = {
  __typename?: 'SimpleAccountTags';
  AccountId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleAccounts = {
  __typename?: 'SimpleAccounts';
  BATSAccountManagerEmail?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerId?: Maybe<Scalars['ID']['output']>;
  BATSAccountManagerPhone?: Maybe<Scalars['String']['output']>;
  BillingCity?: Maybe<Scalars['String']['output']>;
  BillingPostalCode?: Maybe<Scalars['String']['output']>;
  BillingState?: Maybe<Scalars['String']['output']>;
  BillingStreet?: Maybe<Scalars['String']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Fax?: Maybe<Scalars['String']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  PGE: Scalars['Boolean']['output'];
  Phone?: Maybe<Scalars['String']['output']>;
  Rank?: Maybe<Scalars['Int']['output']>;
  RequiresWhitelist: Scalars['Boolean']['output'];
  ShippingCity?: Maybe<Scalars['String']['output']>;
  ShippingPostalCode?: Maybe<Scalars['String']['output']>;
  ShippingState?: Maybe<Scalars['String']['output']>;
  ShippingStreet?: Maybe<Scalars['String']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  TierLevel?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleActivities = {
  __typename?: 'SimpleActivities';
  Address?: Maybe<Scalars['String']['output']>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  JobAllocationId?: Maybe<Scalars['ID']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Name: Scalars['String']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  ResourceId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  TemplatedActivityId?: Maybe<Scalars['ID']['output']>;
  Timezone?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleActivityResources = {
  __typename?: 'SimpleActivityResources';
  ActivityId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleAttendees = {
  __typename?: 'SimpleAttendees';
  CancelReason?: Maybe<Scalars['String']['output']>;
  ContactId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Status: Scalars['AttendeeStatus']['output'];
  TimeCancelled?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleAvailabilities = {
  __typename?: 'SimpleAvailabilities';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Finish: Scalars['Instant']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  PaidTimeOffID?: Maybe<Scalars['String']['output']>;
  ResourceId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  Status?: Maybe<Scalars['AvailabilityStatus']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleAvailabilityPatternResources = {
  __typename?: 'SimpleAvailabilityPatternResources';
  AvailabilityPatternId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  Status?: Maybe<Scalars['AvailabilityStatus']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleAvailabilityPatterns = {
  __typename?: 'SimpleAvailabilityPatterns';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Hash: Scalars['String']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Pattern: Scalars['String']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleAvailabilityTemplateEntries = {
  __typename?: 'SimpleAvailabilityTemplateEntries';
  AvailabilityTemplateId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  FinishTime: Scalars['Int']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  StartTime: Scalars['Int']['output'];
  UID: Scalars['ID']['output'];
  Weekday: Scalars['Weekday']['output'];
};

export type SimpleAvailabilityTemplateResources = {
  __typename?: 'SimpleAvailabilityTemplateResources';
  AvailabilityTemplateId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Migrated: Scalars['Boolean']['output'];
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleAvailabilityTemplates = {
  __typename?: 'SimpleAvailabilityTemplates';
  AvailabilityPatternId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Finish?: Maybe<Scalars['LocalDate']['output']>;
  Global: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Start?: Maybe<Scalars['LocalDate']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleBreak = {
  __typename?: 'SimpleBreak';
  End?: Maybe<Scalars['Instant']['output']>;
  JobAllocationId?: Maybe<Scalars['ID']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Start?: Maybe<Scalars['Instant']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleClientAvailabilities = {
  __typename?: 'SimpleClientAvailabilities';
  AccountId?: Maybe<Scalars['ID']['output']>;
  ContactId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End: Scalars['Instant']['output'];
  IsAvailable: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  PreferredEnd?: Maybe<Scalars['Instant']['output']>;
  PreferredStart?: Maybe<Scalars['Instant']['output']>;
  RecurringScheduleId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleContactTags = {
  __typename?: 'SimpleContactTags';
  ContactId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleContacts = {
  __typename?: 'SimpleContacts';
  AccountId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Email?: Maybe<Scalars['String']['output']>;
  FirstName?: Maybe<Scalars['String']['output']>;
  FullName: Scalars['String']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LastName: Scalars['String']['output'];
  MailingCity?: Maybe<Scalars['String']['output']>;
  MailingPostalCode?: Maybe<Scalars['String']['output']>;
  MailingState?: Maybe<Scalars['String']['output']>;
  MailingStreet?: Maybe<Scalars['String']['output']>;
  MobilePhone?: Maybe<Scalars['String']['output']>;
  OtherCity?: Maybe<Scalars['String']['output']>;
  OtherPostalCode?: Maybe<Scalars['String']['output']>;
  OtherState?: Maybe<Scalars['String']['output']>;
  OtherStreet?: Maybe<Scalars['String']['output']>;
  Phone?: Maybe<Scalars['String']['output']>;
  RegionId?: Maybe<Scalars['ID']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleHolidayRegions = {
  __typename?: 'SimpleHolidayRegions';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  HolidayId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  RegionId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleHolidays = {
  __typename?: 'SimpleHolidays';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  EndDate: Scalars['LocalDate']['output'];
  Global: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  StartDate: Scalars['LocalDate']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleJobAllocations = {
  __typename?: 'SimpleJobAllocations';
  APILog?: Maybe<Scalars['String']['output']>;
  ArriveAtYard?: Maybe<Scalars['Instant']['output']>;
  AssetID?: Maybe<Scalars['String']['output']>;
  AssignedToId?: Maybe<Scalars['ID']['output']>;
  CheckInToYard?: Maybe<Scalars['Instant']['output']>;
  CheckInYardWithBuffer?: Maybe<Scalars['Instant']['output']>;
  ConfirmedTimes: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DeclineDescription?: Maybe<Scalars['String']['output']>;
  DeclineReason?: Maybe<Scalars['String']['output']>;
  DeleteByScheduler: Scalars['Boolean']['output'];
  DeletedByJobCancel: Scalars['Boolean']['output'];
  DepartFromYard?: Maybe<Scalars['Instant']['output']>;
  Driver: Scalars['Boolean']['output'];
  DrivingTruckId?: Maybe<Scalars['ID']['output']>;
  Duration?: Maybe<Scalars['Duration']['output']>;
  End?: Maybe<Scalars['Instant']['output']>;
  EstimatedTravelDistance?: Maybe<Scalars['BigDecimal']['output']>;
  EstimatedTravelTime?: Maybe<Scalars['Duration']['output']>;
  GeoCheckedInLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCheckedInLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCompletedLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoCompletedLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoInProgressLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoInProgressLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoStartTravelLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoStartTravelLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HasBreak: Scalars['Boolean']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  NotificationType?: Maybe<Scalars['String']['output']>;
  PhoneResponse?: Maybe<Scalars['String']['output']>;
  ReportToYard?: Maybe<Scalars['Instant']['output']>;
  ResourceApprovedCheckIn?: Maybe<Scalars['Instant']['output']>;
  ResourceApprovedCompleteTime?: Maybe<Scalars['Instant']['output']>;
  ResourceId: Scalars['ID']['output'];
  ResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  SplitDriveTime?: Maybe<Scalars['String']['output']>;
  Start?: Maybe<Scalars['Instant']['output']>;
  StartGeoLocationLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  StartGeoLocationLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  StartLocationAddress?: Maybe<Scalars['String']['output']>;
  StartLocationType?: Maybe<Scalars['String']['output']>;
  StatSheetCheckIn?: Maybe<Scalars['Instant']['output']>;
  StatSheetCompleteTime?: Maybe<Scalars['Instant']['output']>;
  Status: Scalars['JobAllocationStatus']['output'];
  TakenAllMeals?: Maybe<Scalars['String']['output']>;
  TakenAllRestBreaks?: Maybe<Scalars['String']['output']>;
  TeamLeader: Scalars['Boolean']['output'];
  TimeCheckedIn?: Maybe<Scalars['Instant']['output']>;
  TimeCompleted?: Maybe<Scalars['Instant']['output']>;
  TimeInProgress?: Maybe<Scalars['Instant']['output']>;
  TimePublished?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  TimeStartTravel?: Maybe<Scalars['Instant']['output']>;
  TravelDistance?: Maybe<Scalars['BigDecimal']['output']>;
  TravelTime?: Maybe<Scalars['Duration']['output']>;
  UID: Scalars['ID']['output'];
  WaiveSecondMeal: Scalars['Boolean']['output'];
};

export type SimpleJobDependencies = {
  __typename?: 'SimpleJobDependencies';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  FromAnchor: Scalars['JobDependencyAnchor']['output'];
  FromJobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ToAnchor: Scalars['JobDependencyAnchor']['output'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleJobOffers = {
  __typename?: 'SimpleJobOffers';
  CreatedById: Scalars['ID']['output'];
  CreatedByResource: Scalars['Boolean']['output'];
  CreatedDate: Scalars['Instant']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  Status: Scalars['OfferStatus']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleJobProducts = {
  __typename?: 'SimpleJobProducts';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  ProductId?: Maybe<Scalars['ID']['output']>;
  ProductName?: Maybe<Scalars['String']['output']>;
  Qty: Scalars['BigDecimal']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleJobReportToYard = {
  __typename?: 'SimpleJobReportToYard';
  IsPreviousDay: Scalars['Boolean']['output'];
  JobId: Scalars['ID']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  RegionId?: Maybe<Scalars['ID']['output']>;
  ReportToYardTime?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleJobSafetyAnalysisForm = {
  __typename?: 'SimpleJobSafetyAnalysisForm';
  ContractorName?: Maybe<Scalars['String']['output']>;
  CrewMemberName1?: Maybe<Scalars['String']['output']>;
  CrewMemberName2?: Maybe<Scalars['String']['output']>;
  CrewMemberName3?: Maybe<Scalars['String']['output']>;
  CrewMemberName4?: Maybe<Scalars['String']['output']>;
  CrewMemberName5?: Maybe<Scalars['String']['output']>;
  CrewMemberSignatures?: Maybe<Scalars['String']['output']>;
  CustomerJobNo?: Maybe<Scalars['String']['output']>;
  Date?: Maybe<Scalars['LocalDate']['output']>;
  Deleted: Scalars['Boolean']['output'];
  DidBATsCrewAttendContractorSafety: Scalars['Boolean']['output'];
  JobId?: Maybe<Scalars['ID']['output']>;
  LeadName?: Maybe<Scalars['String']['output']>;
  Location?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Question1?: Maybe<Scalars['String']['output']>;
  Question1Details?: Maybe<Scalars['String']['output']>;
  Question2?: Maybe<Scalars['String']['output']>;
  Question2Details?: Maybe<Scalars['String']['output']>;
  Question3?: Maybe<Scalars['String']['output']>;
  Question3Details?: Maybe<Scalars['String']['output']>;
  Question4?: Maybe<Scalars['String']['output']>;
  Question4Details?: Maybe<Scalars['String']['output']>;
  Question5?: Maybe<Scalars['String']['output']>;
  Question5Details?: Maybe<Scalars['String']['output']>;
  Question6?: Maybe<Scalars['String']['output']>;
  Question6Details?: Maybe<Scalars['String']['output']>;
  Question7?: Maybe<Scalars['String']['output']>;
  Question7Details?: Maybe<Scalars['String']['output']>;
  Question8?: Maybe<Scalars['String']['output']>;
  Question8Details?: Maybe<Scalars['String']['output']>;
  Question9?: Maybe<Scalars['String']['output']>;
  Question9Details?: Maybe<Scalars['String']['output']>;
  Question10?: Maybe<Scalars['String']['output']>;
  Question10Details?: Maybe<Scalars['String']['output']>;
  Question11?: Maybe<Scalars['String']['output']>;
  Question11Details?: Maybe<Scalars['String']['output']>;
  Question12?: Maybe<Scalars['String']['output']>;
  Question12Details?: Maybe<Scalars['String']['output']>;
  Question13?: Maybe<Scalars['String']['output']>;
  Question13Details?: Maybe<Scalars['String']['output']>;
  Question14?: Maybe<Scalars['String']['output']>;
  Question14Details?: Maybe<Scalars['String']['output']>;
  Question15?: Maybe<Scalars['String']['output']>;
  Question15Details?: Maybe<Scalars['String']['output']>;
  Question16?: Maybe<Scalars['String']['output']>;
  Question16Details?: Maybe<Scalars['String']['output']>;
  Question17?: Maybe<Scalars['String']['output']>;
  Question17Details?: Maybe<Scalars['String']['output']>;
  Question18?: Maybe<Scalars['String']['output']>;
  Question18Details?: Maybe<Scalars['String']['output']>;
  Question19?: Maybe<Scalars['String']['output']>;
  Question19Details?: Maybe<Scalars['String']['output']>;
  Question20?: Maybe<Scalars['String']['output']>;
  Question20Details?: Maybe<Scalars['String']['output']>;
  Reach80DegreesOrHigher?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  WeatherConditions?: Maybe<Scalars['String']['output']>;
};

export type SimpleJobStatSheet = {
  __typename?: 'SimpleJobStatSheet';
  BATSComments?: Maybe<Scalars['String']['output']>;
  ClientEmail?: Maybe<Scalars['String']['output']>;
  ContractorName?: Maybe<Scalars['String']['output']>;
  CrewSignatures?: Maybe<Scalars['String']['output']>;
  CustomerComments?: Maybe<Scalars['String']['output']>;
  CustomerName?: Maybe<Scalars['String']['output']>;
  Deleted: Scalars['Boolean']['output'];
  DidTheBATsCrewAttendContractorSafe: Scalars['Boolean']['output'];
  Direction?: Maybe<Scalars['String']['output']>;
  HaveUpdated: Scalars['Boolean']['output'];
  IsCompleted: Scalars['Boolean']['output'];
  IsSubmitted: Scalars['Boolean']['output'];
  JobId?: Maybe<Scalars['ID']['output']>;
  Lanes?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PGENaturalDisasterLocation?: Maybe<Scalars['String']['output']>;
  PGENaturalDisasterType?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleJobTags = {
  __typename?: 'SimpleJobTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleJobTasks = {
  __typename?: 'SimpleJobTasks';
  Completed: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Seq: Scalars['Int']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleJobTimeConstraints = {
  __typename?: 'SimpleJobTimeConstraints';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  EndBefore?: Maybe<Scalars['Instant']['output']>;
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  StartAfter?: Maybe<Scalars['Instant']['output']>;
  StartBefore?: Maybe<Scalars['Instant']['output']>;
  Type: Scalars['JobTimeConstraintType']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleJobTypeSetting = {
  __typename?: 'SimpleJobTypeSetting';
  JobType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ResourceCategory?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleJobTypeTag = {
  __typename?: 'SimpleJobTypeTag';
  JobTypeSettingId?: Maybe<Scalars['ID']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  TagId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleJobs = {
  __typename?: 'SimpleJobs';
  AbortReason?: Maybe<Scalars['String']['output']>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  ActualEnd?: Maybe<Scalars['Instant']['output']>;
  ActualStart?: Maybe<Scalars['Instant']['output']>;
  AdditionalContactName?: Maybe<Scalars['String']['output']>;
  Address?: Maybe<Scalars['String']['output']>;
  AdminCancellationTime?: Maybe<Scalars['Instant']['output']>;
  AdminCancelledById?: Maybe<Scalars['ID']['output']>;
  Alert?: Maybe<Scalars['String']['output']>;
  Attachments?: Maybe<Scalars['String']['output']>;
  AutoSchedule: Scalars['Boolean']['output'];
  BATSAccountManager?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerEmail?: Maybe<Scalars['String']['output']>;
  BATSAccountManagerPhone?: Maybe<Scalars['String']['output']>;
  BATSStatusAtTimeOfCancellation?: Maybe<Scalars['String']['output']>;
  Branches?: Maybe<Scalars['String']['output']>;
  CanBeDeclined: Scalars['Boolean']['output'];
  CancellationExplanation?: Maybe<Scalars['String']['output']>;
  CancellationTimeStr?: Maybe<Scalars['String']['output']>;
  CertifiedPayroll: Scalars['Boolean']['output'];
  ChargeForCancellation: Scalars['Boolean']['output'];
  City?: Maybe<Scalars['String']['output']>;
  CompletionNotes?: Maybe<Scalars['String']['output']>;
  ContactId?: Maybe<Scalars['ID']['output']>;
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedBySales: Scalars['Boolean']['output'];
  CreatedDate: Scalars['Instant']['output'];
  CrewSize?: Maybe<Scalars['BigDecimal']['output']>;
  CustomerCancellationTimeStr?: Maybe<Scalars['String']['output']>;
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']['output']>;
  CustomerEmail?: Maybe<Scalars['String']['output']>;
  CustomerInitiatedCancellationById?: Maybe<Scalars['ID']['output']>;
  CustomerInitiatedCancellationTime?: Maybe<Scalars['Instant']['output']>;
  CustomerJobNo?: Maybe<Scalars['String']['output']>;
  CustomerPhone?: Maybe<Scalars['String']['output']>;
  CustomerRole?: Maybe<Scalars['String']['output']>;
  CustomerTierLevel?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  DispatcherCancellationReason?: Maybe<Scalars['String']['output']>;
  DispatcherFollowUp?: Maybe<Scalars['String']['output']>;
  DispatcherNotes?: Maybe<Scalars['String']['output']>;
  DispatcherReliefCrew?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  EmergencyJob: Scalars['Boolean']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  EquipmentSetUp: Scalars['Boolean']['output'];
  EstimatedEnd?: Maybe<Scalars['Instant']['output']>;
  EstimatedStart?: Maybe<Scalars['Instant']['output']>;
  FirstJobInRecurring: Scalars['Boolean']['output'];
  FollowUp?: Maybe<Scalars['String']['output']>;
  FollowupReason?: Maybe<Scalars['String']['output']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  ImmediateResponse: Scalars['Boolean']['output'];
  InventoryRequestCancelledById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestFilled: Scalars['Boolean']['output'];
  InventoryRequestFilledById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestFilledTime?: Maybe<Scalars['Instant']['output']>;
  InventoryRequested: Scalars['Boolean']['output'];
  InventoryRequestedById?: Maybe<Scalars['ID']['output']>;
  InventoryRequestedCancelled: Scalars['Boolean']['output'];
  InventoryRequestedCancelledDateTime?: Maybe<Scalars['Instant']['output']>;
  InventoryRequestedTime?: Maybe<Scalars['Instant']['output']>;
  IsAssetUpdated: Scalars['Boolean']['output'];
  IsGroupEvent: Scalars['Boolean']['output'];
  IsJSAFormChanged: Scalars['Boolean']['output'];
  IsJSAFormCreated: Scalars['Boolean']['output'];
  IsSoftCancellation: Scalars['Boolean']['output'];
  JobAllocationCount: Scalars['Int']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  JobStatus: Scalars['JobStatus']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Locked: Scalars['Boolean']['output'];
  MaxAttendees?: Maybe<Scalars['Int']['output']>;
  MinAttendees?: Maybe<Scalars['Int']['output']>;
  MuteNotifications: Scalars['Boolean']['output'];
  Name: Scalars['String']['output'];
  NearestYardId?: Maybe<Scalars['ID']['output']>;
  NoCustomerOnsite: Scalars['Boolean']['output'];
  NotesComments?: Maybe<Scalars['String']['output']>;
  NotifyBy?: Maybe<Scalars['Instant']['output']>;
  NotifyPeriod?: Maybe<Scalars['Int']['output']>;
  NotifyTeamLeaderTime?: Maybe<Scalars['Instant']['output']>;
  OnsiteContactEmail?: Maybe<Scalars['String']['output']>;
  OnsiteContactId?: Maybe<Scalars['ID']['output']>;
  OnsiteContactPhone?: Maybe<Scalars['String']['output']>;
  OnsiteContactRole?: Maybe<Scalars['String']['output']>;
  OtherDocs: Scalars['Boolean']['output'];
  OvernightStay: Scalars['Boolean']['output'];
  PGEJob: Scalars['Boolean']['output'];
  PGEJobType?: Maybe<Scalars['String']['output']>;
  PGEOfficeClerkName?: Maybe<Scalars['String']['output']>;
  PGEOfficeToBillId?: Maybe<Scalars['ID']['output']>;
  PM?: Maybe<Scalars['String']['output']>;
  PO?: Maybe<Scalars['String']['output']>;
  ParentId?: Maybe<Scalars['ID']['output']>;
  PrivatelyFunded: Scalars['Boolean']['output'];
  ProjectId?: Maybe<Scalars['ID']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  RecurringScheduleId?: Maybe<Scalars['ID']['output']>;
  RegionId: Scalars['ID']['output'];
  ReliefCrew?: Maybe<Scalars['String']['output']>;
  RequestApprovalStatus?: Maybe<Scalars['String']['output']>;
  RequiredTrucks?: Maybe<Scalars['BigDecimal']['output']>;
  ResourceCancelApprovedRejectedById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationApprovedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationRejectedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationRequestStatus?: Maybe<Scalars['String']['output']>;
  ResourceCancellationRequestedById?: Maybe<Scalars['ID']['output']>;
  ResourceCancellationRequestedTime?: Maybe<Scalars['Instant']['output']>;
  ResourceCancellationTime?: Maybe<Scalars['Instant']['output']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  SecondaryJobType?: Maybe<Scalars['String']['output']>;
  Sections?: Maybe<Scalars['String']['output']>;
  SendEmailNotificationToDispatched: Scalars['Boolean']['output'];
  SitePicturesRequired: Scalars['Boolean']['output'];
  Start?: Maybe<Scalars['Instant']['output']>;
  StatSheetSigningTime?: Maybe<Scalars['Instant']['output']>;
  StatSheetSubmittedTime?: Maybe<Scalars['Instant']['output']>;
  TemplatedJobId?: Maybe<Scalars['ID']['output']>;
  Timezone: Scalars['String']['output'];
  TrafficPermitIncluded: Scalars['Boolean']['output'];
  TrafficPlanIncluded: Scalars['Boolean']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Urgency?: Maybe<Scalars['String']['output']>;
  VirtualMeetingId?: Maybe<Scalars['String']['output']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']['output']>;
  VirtualMeetingURL?: Maybe<Scalars['String']['output']>;
  X2WayRadiosRequired: Scalars['Boolean']['output'];
};

export type SimpleLocationResourceScores = {
  __typename?: 'SimpleLocationResourceScores';
  Blacklisted: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId: Scalars['ID']['output'];
  ResourceId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Whitelisted: Scalars['Boolean']['output'];
};

export type SimpleLocations = {
  __typename?: 'SimpleLocations';
  AccountId?: Maybe<Scalars['ID']['output']>;
  Address?: Maybe<Scalars['String']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  RegionId?: Maybe<Scalars['ID']['output']>;
  RequiresWhitelist: Scalars['Boolean']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleProducts = {
  __typename?: 'SimpleProducts';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Family?: Maybe<Scalars['String']['output']>;
  IsActive: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  ProductCode?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleProject = {
  __typename?: 'SimpleProject';
  Name?: Maybe<Scalars['String']['output']>;
  ProjectCode?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleRecurringSchedules = {
  __typename?: 'SimpleRecurringSchedules';
  AckAllJobs: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Summary?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleRegions = {
  __typename?: 'SimpleRegions';
  CountryCode?: Maybe<Scalars['String']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  IsInactiveRegion: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Radius?: Maybe<Scalars['Int']['output']>;
  Timezone: Scalars['String']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceCategorySetting = {
  __typename?: 'SimpleResourceCategorySetting';
  DashboardGroup?: Maybe<Scalars['String']['output']>;
  DashboardOrder?: Maybe<Scalars['BigDecimal']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  RequireDriver: Scalars['Boolean']['output'];
  ResourceCategory?: Maybe<Scalars['String']['output']>;
  ShowOnDashboard: Scalars['Boolean']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceCategoryTag = {
  __typename?: 'SimpleResourceCategoryTag';
  Name?: Maybe<Scalars['String']['output']>;
  ResourceCategorySettingId?: Maybe<Scalars['ID']['output']>;
  TagId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleResourceJobOffers = {
  __typename?: 'SimpleResourceJobOffers';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  JobOfferId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  Response?: Maybe<Scalars['OfferResponse']['output']>;
  Status: Scalars['ResourceOfferStatus']['output'];
  TimeNotified?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleResourceOverrideRegions = {
  __typename?: 'SimpleResourceOverrideRegions';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  RegionId: Scalars['ID']['output'];
  ResourceOverrideId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceOverrides = {
  __typename?: 'SimpleResourceOverrides';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  End: Scalars['Instant']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HomeAddress?: Maybe<Scalars['String']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceRegions = {
  __typename?: 'SimpleResourceRegions';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  RegionId: Scalars['ID']['output'];
  ResourceId: Scalars['ID']['output'];
  Start?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleResourceRequirementTags = {
  __typename?: 'SimpleResourceRequirementTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  ResourceRequirementId: Scalars['ID']['output'];
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleResourceRequirements = {
  __typename?: 'SimpleResourceRequirements';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Duration?: Maybe<Scalars['Duration']['output']>;
  JobAllocationCount: Scalars['Int']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  JobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Quantity: Scalars['Int']['output'];
  RelativeStart?: Maybe<Scalars['Duration']['output']>;
  ResourceCategory?: Maybe<Scalars['String']['output']>;
  ScheduledEnd?: Maybe<Scalars['Instant']['output']>;
  ScheduledStart?: Maybe<Scalars['Instant']['output']>;
  Status: Scalars['JobStatus']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceShiftBreaks = {
  __typename?: 'SimpleResourceShiftBreaks';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  End?: Maybe<Scalars['Instant']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceShiftId: Scalars['ID']['output'];
  Start: Scalars['Instant']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceShiftOffers = {
  __typename?: 'SimpleResourceShiftOffers';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  Response?: Maybe<Scalars['OfferResponse']['output']>;
  ShiftOfferId: Scalars['ID']['output'];
  Status: Scalars['ResourceOfferStatus']['output'];
  TimeNotified?: Maybe<Scalars['Instant']['output']>;
  TimeResponded?: Maybe<Scalars['Instant']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleResourceShifts = {
  __typename?: 'SimpleResourceShifts';
  ActualEnd?: Maybe<Scalars['Instant']['output']>;
  ActualStart?: Maybe<Scalars['Instant']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  ShiftId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceTags = {
  __typename?: 'SimpleResourceTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  ExpiryDate?: Maybe<Scalars['Instant']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleResourceUtilization = {
  __typename?: 'SimpleResourceUtilization';
  ActualWorkedHours?: Maybe<Scalars['BigDecimal']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PossibleHours?: Maybe<Scalars['BigDecimal']['output']>;
  ResourceId: Scalars['ID']['output'];
  StartOfMonth?: Maybe<Scalars['LocalDate']['output']>;
  UID: Scalars['ID']['output'];
  Utilization?: Maybe<Scalars['BigDecimal']['output']>;
};

export type SimpleResources = {
  __typename?: 'SimpleResources';
  ADPEmployeeID?: Maybe<Scalars['String']['output']>;
  Alias?: Maybe<Scalars['String']['output']>;
  AutoSchedule: Scalars['Boolean']['output'];
  Category?: Maybe<Scalars['String']['output']>;
  CountryCode?: Maybe<Scalars['String']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DateOfHire?: Maybe<Scalars['LocalDate']['output']>;
  Email?: Maybe<Scalars['String']['output']>;
  EmploymentType?: Maybe<Scalars['String']['output']>;
  EquipmentType?: Maybe<Scalars['String']['output']>;
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  HomeAddress?: Maybe<Scalars['String']['output']>;
  IsActive: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  MobilePhone?: Maybe<Scalars['String']['output']>;
  Model?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  Notes?: Maybe<Scalars['String']['output']>;
  NotificationType?: Maybe<Scalars['String']['output']>;
  PersonalPhone?: Maybe<Scalars['String']['output']>;
  PrimaryPhone?: Maybe<Scalars['String']['output']>;
  PrimaryRegionId: Scalars['ID']['output'];
  Rating?: Maybe<Scalars['Int']['output']>;
  ResourceType?: Maybe<Scalars['String']['output']>;
  TruckId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
  UserId?: Maybe<Scalars['ID']['output']>;
  WeeklyHours?: Maybe<Scalars['BigDecimal']['output']>;
  WorkingHourType?: Maybe<Scalars['WorkingHourType']['output']>;
};

export type SimpleScheduleTemplates = {
  __typename?: 'SimpleScheduleTemplates';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DeletedById?: Maybe<Scalars['ID']['output']>;
  DeletedDate?: Maybe<Scalars['Instant']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  IsDeleted: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  PeriodDays?: Maybe<Scalars['Int']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleShiftOfferShifts = {
  __typename?: 'SimpleShiftOfferShifts';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ShiftId: Scalars['ID']['output'];
  ShiftOfferId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleShiftOffers = {
  __typename?: 'SimpleShiftOffers';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Status: Scalars['OfferStatus']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleShiftTags = {
  __typename?: 'SimpleShiftTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  ShiftId: Scalars['ID']['output'];
  TagId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleShifts = {
  __typename?: 'SimpleShifts';
  CopiedFromId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DisplayName?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  End: Scalars['Instant']['output'];
  IsDraft: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Name: Scalars['String']['output'];
  RegionId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplateId?: Maybe<Scalars['ID']['output']>;
  Start: Scalars['Instant']['output'];
  TemplatedShiftId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleSignature = {
  __typename?: 'SimpleSignature';
  CompanyName?: Maybe<Scalars['String']['output']>;
  JobSafetyAnalysisFormId?: Maybe<Scalars['ID']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PrintName?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleSkeduloAdminSetting = {
  __typename?: 'SimpleSkeduloAdminSetting';
  CheckInYardBeforeTime?: Maybe<Scalars['BigDecimal']['output']>;
  DefaultJobDurationMinutes?: Maybe<Scalars['BigDecimal']['output']>;
  JobBufferMinutes?: Maybe<Scalars['BigDecimal']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  SalesforceDashboardUrl?: Maybe<Scalars['String']['output']>;
  TravelVelocityInKPH?: Maybe<Scalars['BigDecimal']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleSkeduloJobSafetyAnalysisSetting = {
  __typename?: 'SimpleSkeduloJobSafetyAnalysisSetting';
  CustomMetadataRecordName: Scalars['String']['output'];
  Label: Scalars['String']['output'];
  ShowDetails?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Value?: Maybe<Scalars['String']['output']>;
};

export type SimpleSkeduloRegionCityMapping = {
  __typename?: 'SimpleSkeduloRegionCityMapping';
  City?: Maybe<Scalars['String']['output']>;
  CoverageBy?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Region?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleTags = {
  __typename?: 'SimpleTags';
  Classification?: Maybe<Scalars['TagClassification']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedActivities = {
  __typename?: 'SimpleTemplatedActivities';
  Address?: Maybe<Scalars['String']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Duration: Scalars['Duration']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Notes?: Maybe<Scalars['String']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  ResourceId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplateId: Scalars['ID']['output'];
  StartOffsetDays: Scalars['Int']['output'];
  StartTimeOfDay: Scalars['LocalTime']['output'];
  Timezone: Scalars['String']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedActivityResources = {
  __typename?: 'SimpleTemplatedActivityResources';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  TemplatedActivityId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedAttendees = {
  __typename?: 'SimpleTemplatedAttendees';
  ContactId: Scalars['ID']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedJobAllocations = {
  __typename?: 'SimpleTemplatedJobAllocations';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Duration?: Maybe<Scalars['Duration']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  NotificationType?: Maybe<Scalars['String']['output']>;
  ResourceId: Scalars['ID']['output'];
  StartOffsetDays?: Maybe<Scalars['Int']['output']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  Status: Scalars['JobAllocationStatus']['output'];
  TeamLeader: Scalars['Boolean']['output'];
  TemplatedJobId: Scalars['ID']['output'];
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedJobDependencies = {
  __typename?: 'SimpleTemplatedJobDependencies';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  FromAnchor: Scalars['JobDependencyAnchor']['output'];
  FromTemplatedJobId: Scalars['ID']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ToAnchor: Scalars['JobDependencyAnchor']['output'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToTemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedJobProducts = {
  __typename?: 'SimpleTemplatedJobProducts';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ProductId?: Maybe<Scalars['ID']['output']>;
  Qty: Scalars['BigDecimal']['output'];
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedJobTags = {
  __typename?: 'SimpleTemplatedJobTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  TagId: Scalars['ID']['output'];
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleTemplatedJobTasks = {
  __typename?: 'SimpleTemplatedJobTasks';
  Completed: Scalars['Boolean']['output'];
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Seq: Scalars['Int']['output'];
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedJobTimeConstraints = {
  __typename?: 'SimpleTemplatedJobTimeConstraints';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']['output']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']['output']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']['output']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  TemplatedJobId: Scalars['ID']['output'];
  Type: Scalars['JobTimeConstraintType']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedJobs = {
  __typename?: 'SimpleTemplatedJobs';
  AccountId?: Maybe<Scalars['ID']['output']>;
  Address?: Maybe<Scalars['String']['output']>;
  AutoSchedule: Scalars['Boolean']['output'];
  CanBeDeclined: Scalars['Boolean']['output'];
  ContactId?: Maybe<Scalars['ID']['output']>;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  IsGroupEvent: Scalars['Boolean']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  Locked: Scalars['Boolean']['output'];
  MaxAttendees?: Maybe<Scalars['Int']['output']>;
  MinAttendees?: Maybe<Scalars['Int']['output']>;
  NotesComments?: Maybe<Scalars['String']['output']>;
  NotifyPeriod?: Maybe<Scalars['Int']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  RegionId: Scalars['ID']['output'];
  ScheduleTemplateId: Scalars['ID']['output'];
  StartOffsetDays: Scalars['Int']['output'];
  StartTimeOfDay: Scalars['LocalTime']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Urgency?: Maybe<Scalars['String']['output']>;
  VirtualMeetingId?: Maybe<Scalars['String']['output']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']['output']>;
  VirtualMeetingURL?: Maybe<Scalars['String']['output']>;
};

export type SimpleTemplatedResourceRequirementTags = {
  __typename?: 'SimpleTemplatedResourceRequirementTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  TagId: Scalars['ID']['output'];
  TemplatedResourceRequirementId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleTemplatedResourceRequirements = {
  __typename?: 'SimpleTemplatedResourceRequirements';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Quantity: Scalars['Int']['output'];
  RelativeStart?: Maybe<Scalars['Duration']['output']>;
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedResourceShifts = {
  __typename?: 'SimpleTemplatedResourceShifts';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ResourceId: Scalars['ID']['output'];
  TemplatedShiftId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTemplatedShiftTags = {
  __typename?: 'SimpleTemplatedShiftTags';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  TagId: Scalars['ID']['output'];
  TemplatedShiftId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type SimpleTemplatedShifts = {
  __typename?: 'SimpleTemplatedShifts';
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DisplayName?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  IsDraft: Scalars['Boolean']['output'];
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LocationId?: Maybe<Scalars['ID']['output']>;
  RegionId: Scalars['ID']['output'];
  ScheduleTemplateId: Scalars['ID']['output'];
  StartOffsetDays: Scalars['Int']['output'];
  StartTimeOfDay: Scalars['LocalTime']['output'];
  UID: Scalars['ID']['output'];
};

export type SimpleTimesheet = {
  __typename?: 'SimpleTimesheet';
  CreatedBy?: Maybe<Scalars['String']['output']>;
  CreatedById?: Maybe<Scalars['String']['output']>;
  CreatedDate?: Maybe<Scalars['Instant']['output']>;
  CustomerComments?: Maybe<Scalars['String']['output']>;
  CustomerId?: Maybe<Scalars['ID']['output']>;
  CustomerJobNumberPMNumber?: Maybe<Scalars['String']['output']>;
  CustomerNotAvailable: Scalars['Boolean']['output'];
  CustomerSignature: Scalars['Boolean']['output'];
  DayOfTheWeek?: Maybe<Scalars['String']['output']>;
  JobAddress?: Maybe<Scalars['String']['output']>;
  JobDate?: Maybe<Scalars['LocalDate']['output']>;
  JobId?: Maybe<Scalars['ID']['output']>;
  JobType?: Maybe<Scalars['String']['output']>;
  LastModifiedDate: Scalars['Instant']['output'];
  LeadComments?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress2?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress3?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress4?: Maybe<Scalars['String']['output']>;
  PDFEmails?: Maybe<Scalars['String']['output']>;
  ReasonForTimesheet?: Maybe<Scalars['String']['output']>;
  RelatedResources?: Maybe<Scalars['String']['output']>;
  SignDate?: Maybe<Scalars['LocalDate']['output']>;
  SignatureName?: Maybe<Scalars['String']['output']>;
  TimesheetCompletedDateTime?: Maybe<Scalars['Instant']['output']>;
  TimesheetStatus?: Maybe<Scalars['String']['output']>;
  TimesheetType?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleTimesheetMaterial = {
  __typename?: 'SimpleTimesheetMaterial';
  AssetPartNumber?: Maybe<Scalars['String']['output']>;
  AssetType?: Maybe<Scalars['String']['output']>;
  CreatedDate: Scalars['Instant']['output'];
  Equipment?: Maybe<Scalars['String']['output']>;
  EquipmentQuantity?: Maybe<Scalars['BigDecimal']['output']>;
  MaterialType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  SkedTimesheetId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type SimpleTimesheetResource = {
  __typename?: 'SimpleTimesheetResource';
  CheckInAtJobLocationTime?: Maybe<Scalars['LocalTime']['output']>;
  CheckInAtJobSiteTime?: Maybe<Scalars['LocalTime']['output']>;
  CreatedDate: Scalars['Instant']['output'];
  DriveCompanyVehicleFromSite: Scalars['Boolean']['output'];
  DriveCompanyVehicleToSite: Scalars['Boolean']['output'];
  DriveTimeEnd?: Maybe<Scalars['LocalTime']['output']>;
  DriveTimeStart?: Maybe<Scalars['LocalTime']['output']>;
  EmployeeID?: Maybe<Scalars['String']['output']>;
  EmployeeId?: Maybe<Scalars['ID']['output']>;
  EmployeeSignature: Scalars['Boolean']['output'];
  JobCompleteTime?: Maybe<Scalars['LocalTime']['output']>;
  JobStartTime?: Maybe<Scalars['LocalTime']['output']>;
  LeaveFromCompanyYard: Scalars['Boolean']['output'];
  MealPeriod1InTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod1OutTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod1Taken?: Maybe<Scalars['String']['output']>;
  MealPeriod1WhileDriving: Scalars['Boolean']['output'];
  MealPeriod2InTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod2OutTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod2Taken?: Maybe<Scalars['String']['output']>;
  MealPeriod2WhileDriving: Scalars['Boolean']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  NoBreaksTakenReason?: Maybe<Scalars['String']['output']>;
  NoMealPeriod1Reason?: Maybe<Scalars['String']['output']>;
  NoMealPeriod2Reason?: Maybe<Scalars['String']['output']>;
  RestBreaksTaken: Scalars['Boolean']['output'];
  ReturnToCompanyYard: Scalars['Boolean']['output'];
  Status?: Maybe<Scalars['String']['output']>;
  TimesheetId?: Maybe<Scalars['ID']['output']>;
  Truck?: Maybe<Scalars['String']['output']>;
  TruckEnd?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  WereYouTheDriverOfTheTruck: Scalars['Boolean']['output'];
};

export type SkeduloAdminSetting = {
  __typename?: 'SkeduloAdminSetting';
  CheckInYardBeforeTime?: Maybe<Scalars['BigDecimal']['output']>;
  DefaultJobDurationMinutes?: Maybe<Scalars['BigDecimal']['output']>;
  JobBufferMinutes?: Maybe<Scalars['BigDecimal']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  SalesforceDashboardUrl?: Maybe<Scalars['String']['output']>;
  TravelVelocityInKPH?: Maybe<Scalars['BigDecimal']['output']>;
  UID: Scalars['ID']['output'];
};

export type SkeduloAdminSettingConnection = {
  __typename?: 'SkeduloAdminSettingConnection';
  edges: Array<SkeduloAdminSettingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SkeduloAdminSettingEdge = {
  __typename?: 'SkeduloAdminSettingEdge';
  cursor: Scalars['Base64']['output'];
  node: SkeduloAdminSetting;
  offset: Scalars['Int']['output'];
};

export type SkeduloJobSafetyAnalysisSetting = {
  __typename?: 'SkeduloJobSafetyAnalysisSetting';
  CustomMetadataRecordName: Scalars['String']['output'];
  Label: Scalars['String']['output'];
  ShowDetails?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Value?: Maybe<Scalars['String']['output']>;
};

export type SkeduloJobSafetyAnalysisSettingConnection = {
  __typename?: 'SkeduloJobSafetyAnalysisSettingConnection';
  edges: Array<SkeduloJobSafetyAnalysisSettingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SkeduloJobSafetyAnalysisSettingEdge = {
  __typename?: 'SkeduloJobSafetyAnalysisSettingEdge';
  cursor: Scalars['Base64']['output'];
  node: SkeduloJobSafetyAnalysisSetting;
  offset: Scalars['Int']['output'];
};

export type SkeduloRegionCityMapping = {
  __typename?: 'SkeduloRegionCityMapping';
  City?: Maybe<Scalars['String']['output']>;
  CoverageBy?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Region?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type SkeduloRegionCityMappingConnection = {
  __typename?: 'SkeduloRegionCityMappingConnection';
  edges: Array<SkeduloRegionCityMappingEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SkeduloRegionCityMappingEdge = {
  __typename?: 'SkeduloRegionCityMappingEdge';
  cursor: Scalars['Base64']['output'];
  node: SkeduloRegionCityMapping;
  offset: Scalars['Int']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  schemaActivities: SchemaSubscriptionNotificationActivities;
  schemaAvailabilities: SchemaSubscriptionNotificationAvailabilities;
  schemaJobAllocations: SchemaSubscriptionNotificationJobAllocations;
  schemaJobs: SchemaSubscriptionNotificationJobs;
  schemaShifts: SchemaSubscriptionNotificationShifts;
};


export type SubscriptionSchemaActivitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterActivities']['input']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterActivities']['input']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaAvailabilitiesArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterAvailabilities']['input']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterAvailabilities']['input']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobAllocationsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobAllocations']['input']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobAllocations']['input']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaJobsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterJobs']['input']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterJobs']['input']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};


export type SubscriptionSchemaShiftsArgs = {
  extendedFilter?: InputMaybe<Scalars['EQLRecordChangeFilterShifts']['input']>;
  filter?: InputMaybe<Scalars['EQLRecordFilterShifts']['input']>;
  operation?: InputMaybe<Array<SchemaSubscriptionOp>>;
};

export type Tags = {
  __typename?: 'Tags';
  Classification?: Maybe<Scalars['TagClassification']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type TagsConnection = {
  __typename?: 'TagsConnection';
  edges: Array<TagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TagsEdge = {
  __typename?: 'TagsEdge';
  cursor: Scalars['Base64']['output'];
  node: Tags;
  offset: Scalars['Int']['output'];
};

export type TemplatedActivities = {
  __typename?: 'TemplatedActivities';
  Activities: Array<Activities>;
  Address?: Maybe<Scalars['String']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Duration: Scalars['Duration']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']['output']>;
  Notes?: Maybe<Scalars['String']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  Resource?: Maybe<Resources>;
  ResourceId?: Maybe<Scalars['ID']['output']>;
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID']['output'];
  StartOffsetDays: Scalars['Int']['output'];
  StartTimeOfDay: Scalars['LocalTime']['output'];
  TemplatedActivityResources: Array<TemplatedActivityResources>;
  Timezone: Scalars['String']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};


export type TemplatedActivitiesActivitiesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterActivities']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseActivities']['input']>;
};


export type TemplatedActivitiesTemplatedActivityResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedActivityResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedActivityResources']['input']>;
};

export type TemplatedActivitiesConnection = {
  __typename?: 'TemplatedActivitiesConnection';
  edges: Array<TemplatedActivitiesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedActivitiesEdge = {
  __typename?: 'TemplatedActivitiesEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedActivities;
  offset: Scalars['Int']['output'];
};

export type TemplatedActivityResources = {
  __typename?: 'TemplatedActivityResources';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  TemplatedActivity: TemplatedActivities;
  TemplatedActivityId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedActivityResourcesConnection = {
  __typename?: 'TemplatedActivityResourcesConnection';
  edges: Array<TemplatedActivityResourcesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedActivityResourcesEdge = {
  __typename?: 'TemplatedActivityResourcesEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedActivityResources;
  offset: Scalars['Int']['output'];
};

export type TemplatedAttendees = {
  __typename?: 'TemplatedAttendees';
  Contact: Contacts;
  ContactId: Scalars['ID']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedAttendeesConnection = {
  __typename?: 'TemplatedAttendeesConnection';
  edges: Array<TemplatedAttendeesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedAttendeesEdge = {
  __typename?: 'TemplatedAttendeesEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedAttendees;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobAllocations = {
  __typename?: 'TemplatedJobAllocations';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Duration?: Maybe<Scalars['Duration']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  NotificationType?: Maybe<Scalars['String']['output']>;
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  StartOffsetDays?: Maybe<Scalars['Int']['output']>;
  StartTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  Status: Scalars['JobAllocationStatus']['output'];
  TeamLeader: Scalars['Boolean']['output'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID']['output'];
  TemplatedResourceRequirement?: Maybe<TemplatedResourceRequirements>;
  TemplatedResourceRequirementId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type TemplatedJobAllocationsConnection = {
  __typename?: 'TemplatedJobAllocationsConnection';
  edges: Array<TemplatedJobAllocationsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobAllocationsEdge = {
  __typename?: 'TemplatedJobAllocationsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobAllocations;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobDependencies = {
  __typename?: 'TemplatedJobDependencies';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  FromAnchor: Scalars['JobDependencyAnchor']['output'];
  FromTemplatedJob: TemplatedJobs;
  FromTemplatedJobId: Scalars['ID']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  ToAnchor: Scalars['JobDependencyAnchor']['output'];
  ToAnchorMaxOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToAnchorMinOffsetMinutes?: Maybe<Scalars['Int']['output']>;
  ToTemplatedJob: TemplatedJobs;
  ToTemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedJobDependenciesConnection = {
  __typename?: 'TemplatedJobDependenciesConnection';
  edges: Array<TemplatedJobDependenciesEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobDependenciesEdge = {
  __typename?: 'TemplatedJobDependenciesEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobDependencies;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobProducts = {
  __typename?: 'TemplatedJobProducts';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Product?: Maybe<Products>;
  ProductId?: Maybe<Scalars['ID']['output']>;
  Qty: Scalars['BigDecimal']['output'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedJobProductsConnection = {
  __typename?: 'TemplatedJobProductsConnection';
  edges: Array<TemplatedJobProductsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobProductsEdge = {
  __typename?: 'TemplatedJobProductsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobProducts;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobTags = {
  __typename?: 'TemplatedJobTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type TemplatedJobTagsConnection = {
  __typename?: 'TemplatedJobTagsConnection';
  edges: Array<TemplatedJobTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobTagsEdge = {
  __typename?: 'TemplatedJobTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobTags;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobTasks = {
  __typename?: 'TemplatedJobTasks';
  Completed: Scalars['Boolean']['output'];
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Name: Scalars['String']['output'];
  Seq: Scalars['Int']['output'];
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedJobTasksConnection = {
  __typename?: 'TemplatedJobTasksConnection';
  edges: Array<TemplatedJobTasksEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobTasksEdge = {
  __typename?: 'TemplatedJobTasksEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobTasks;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobTimeConstraints = {
  __typename?: 'TemplatedJobTimeConstraints';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  EndBeforeOffsetDays?: Maybe<Scalars['Int']['output']>;
  EndBeforeTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  StartAfterOffsetDays?: Maybe<Scalars['Int']['output']>;
  StartAfterTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  StartBeforeOffsetDays?: Maybe<Scalars['Int']['output']>;
  StartBeforeTimeOfDay?: Maybe<Scalars['LocalTime']['output']>;
  TemplatedJob: TemplatedJobs;
  TemplatedJobId: Scalars['ID']['output'];
  Type: Scalars['JobTimeConstraintType']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedJobTimeConstraintsConnection = {
  __typename?: 'TemplatedJobTimeConstraintsConnection';
  edges: Array<TemplatedJobTimeConstraintsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobTimeConstraintsEdge = {
  __typename?: 'TemplatedJobTimeConstraintsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobTimeConstraints;
  offset: Scalars['Int']['output'];
};

export type TemplatedJobs = {
  __typename?: 'TemplatedJobs';
  Account?: Maybe<Accounts>;
  AccountId?: Maybe<Scalars['ID']['output']>;
  Address?: Maybe<Scalars['String']['output']>;
  AutoSchedule: Scalars['Boolean']['output'];
  CanBeDeclined: Scalars['Boolean']['output'];
  Contact?: Maybe<Contacts>;
  ContactId?: Maybe<Scalars['ID']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  CustomerConfirmationStatus?: Maybe<Scalars['CustomerConfirmationStatus']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  GeoLatitude?: Maybe<Scalars['BigDecimal']['output']>;
  GeoLongitude?: Maybe<Scalars['BigDecimal']['output']>;
  IsGroupEvent: Scalars['Boolean']['output'];
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  Jobs: Array<Jobs>;
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']['output']>;
  Locked: Scalars['Boolean']['output'];
  MaxAttendees?: Maybe<Scalars['Int']['output']>;
  MinAttendees?: Maybe<Scalars['Int']['output']>;
  NotesComments?: Maybe<Scalars['String']['output']>;
  NotifyPeriod?: Maybe<Scalars['Int']['output']>;
  Quantity?: Maybe<Scalars['Int']['output']>;
  Region: Regions;
  RegionId: Scalars['ID']['output'];
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID']['output'];
  StartOffsetDays: Scalars['Int']['output'];
  StartTimeOfDay: Scalars['LocalTime']['output'];
  TemplatedAttendees: Array<TemplatedAttendees>;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedJobDependenciesFrom: Array<TemplatedJobDependencies>;
  TemplatedJobDependenciesTo: Array<TemplatedJobDependencies>;
  TemplatedJobProducts: Array<TemplatedJobProducts>;
  TemplatedJobTags: Array<TemplatedJobTags>;
  TemplatedJobTasks: Array<TemplatedJobTasks>;
  TemplatedJobTimeConstraints: Array<TemplatedJobTimeConstraints>;
  TemplatedResourceRequirements: Array<TemplatedResourceRequirements>;
  Type?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  Urgency?: Maybe<Scalars['String']['output']>;
  VirtualMeetingId?: Maybe<Scalars['String']['output']>;
  VirtualMeetingInfo?: Maybe<Scalars['String']['output']>;
  VirtualMeetingURL?: Maybe<Scalars['String']['output']>;
};


export type TemplatedJobsJobsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type TemplatedJobsTemplatedAttendeesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedAttendees']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedAttendees']['input']>;
};


export type TemplatedJobsTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']['input']>;
};


export type TemplatedJobsTemplatedJobDependenciesFromArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']['input']>;
};


export type TemplatedJobsTemplatedJobDependenciesToArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobDependencies']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobDependencies']['input']>;
};


export type TemplatedJobsTemplatedJobProductsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobProducts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobProducts']['input']>;
};


export type TemplatedJobsTemplatedJobTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTags']['input']>;
};


export type TemplatedJobsTemplatedJobTasksArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTasks']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTasks']['input']>;
};


export type TemplatedJobsTemplatedJobTimeConstraintsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobTimeConstraints']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobTimeConstraints']['input']>;
};


export type TemplatedJobsTemplatedResourceRequirementsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirements']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirements']['input']>;
};

export type TemplatedJobsConnection = {
  __typename?: 'TemplatedJobsConnection';
  edges: Array<TemplatedJobsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedJobsEdge = {
  __typename?: 'TemplatedJobsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedJobs;
  offset: Scalars['Int']['output'];
};

export type TemplatedResourceRequirementTags = {
  __typename?: 'TemplatedResourceRequirementTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  TemplatedResourceRequirement: TemplatedResourceRequirements;
  TemplatedResourceRequirementId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type TemplatedResourceRequirementTagsConnection = {
  __typename?: 'TemplatedResourceRequirementTagsConnection';
  edges: Array<TemplatedResourceRequirementTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedResourceRequirementTagsEdge = {
  __typename?: 'TemplatedResourceRequirementTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedResourceRequirementTags;
  offset: Scalars['Int']['output'];
};

export type TemplatedResourceRequirements = {
  __typename?: 'TemplatedResourceRequirements';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  JobAllocationTimeSource: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Quantity: Scalars['Int']['output'];
  RelativeStart?: Maybe<Scalars['Duration']['output']>;
  TemplatedJob: TemplatedJobs;
  TemplatedJobAllocations: Array<TemplatedJobAllocations>;
  TemplatedJobId: Scalars['ID']['output'];
  TemplatedTags: Array<TemplatedResourceRequirementTags>;
  UID: Scalars['ID']['output'];
};


export type TemplatedResourceRequirementsTemplatedJobAllocationsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedJobAllocations']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedJobAllocations']['input']>;
};


export type TemplatedResourceRequirementsTemplatedTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceRequirementTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceRequirementTags']['input']>;
};

export type TemplatedResourceRequirementsConnection = {
  __typename?: 'TemplatedResourceRequirementsConnection';
  edges: Array<TemplatedResourceRequirementsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedResourceRequirementsEdge = {
  __typename?: 'TemplatedResourceRequirementsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedResourceRequirements;
  offset: Scalars['Int']['output'];
};

export type TemplatedResourceShifts = {
  __typename?: 'TemplatedResourceShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Resource: Resources;
  ResourceId: Scalars['ID']['output'];
  TemplatedShift: TemplatedShifts;
  TemplatedShiftId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
};

export type TemplatedResourceShiftsConnection = {
  __typename?: 'TemplatedResourceShiftsConnection';
  edges: Array<TemplatedResourceShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedResourceShiftsEdge = {
  __typename?: 'TemplatedResourceShiftsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedResourceShifts;
  offset: Scalars['Int']['output'];
};

export type TemplatedShiftTags = {
  __typename?: 'TemplatedShiftTags';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Required: Scalars['Boolean']['output'];
  Tag: Tags;
  TagId: Scalars['ID']['output'];
  TemplatedShift: TemplatedShifts;
  TemplatedShiftId: Scalars['ID']['output'];
  UID: Scalars['ID']['output'];
  Weighting?: Maybe<Scalars['Int']['output']>;
};

export type TemplatedShiftTagsConnection = {
  __typename?: 'TemplatedShiftTagsConnection';
  edges: Array<TemplatedShiftTagsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedShiftTagsEdge = {
  __typename?: 'TemplatedShiftTagsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedShiftTags;
  offset: Scalars['Int']['output'];
};

export type TemplatedShifts = {
  __typename?: 'TemplatedShifts';
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  DisplayName?: Maybe<Scalars['String']['output']>;
  Duration: Scalars['Duration']['output'];
  IsDraft: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  Location?: Maybe<Locations>;
  LocationId?: Maybe<Scalars['ID']['output']>;
  Region: Regions;
  RegionId: Scalars['ID']['output'];
  ScheduleTemplate: ScheduleTemplates;
  ScheduleTemplateId: Scalars['ID']['output'];
  Shifts: Array<Shifts>;
  StartOffsetDays: Scalars['Int']['output'];
  StartTimeOfDay: Scalars['LocalTime']['output'];
  TemplatedResourceShifts: Array<TemplatedResourceShifts>;
  TemplatedShiftTags: Array<TemplatedShiftTags>;
  UID: Scalars['ID']['output'];
};


export type TemplatedShiftsShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseShifts']['input']>;
};


export type TemplatedShiftsTemplatedResourceShiftsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedResourceShifts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedResourceShifts']['input']>;
};


export type TemplatedShiftsTemplatedShiftTagsArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterTemplatedShiftTags']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseTemplatedShiftTags']['input']>;
};

export type TemplatedShiftsConnection = {
  __typename?: 'TemplatedShiftsConnection';
  edges: Array<TemplatedShiftsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TemplatedShiftsEdge = {
  __typename?: 'TemplatedShiftsEdge';
  cursor: Scalars['Base64']['output'];
  node: TemplatedShifts;
  offset: Scalars['Int']['output'];
};

export type Timesheet = {
  __typename?: 'Timesheet';
  CreatedBy?: Maybe<Scalars['String']['output']>;
  CreatedById?: Maybe<Scalars['String']['output']>;
  CreatedDate?: Maybe<Scalars['Instant']['output']>;
  Customer?: Maybe<Accounts>;
  CustomerComments?: Maybe<Scalars['String']['output']>;
  CustomerId?: Maybe<Scalars['ID']['output']>;
  CustomerJobNumberPMNumber?: Maybe<Scalars['String']['output']>;
  CustomerNotAvailable: Scalars['Boolean']['output'];
  CustomerSignature: Scalars['Boolean']['output'];
  DayOfTheWeek?: Maybe<Scalars['String']['output']>;
  Job?: Maybe<Jobs>;
  JobAddress?: Maybe<Scalars['String']['output']>;
  JobDate?: Maybe<Scalars['LocalDate']['output']>;
  JobId?: Maybe<Scalars['ID']['output']>;
  JobType?: Maybe<Scalars['String']['output']>;
  LastModifiedDate: Scalars['Instant']['output'];
  LeadComments?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress2?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress3?: Maybe<Scalars['String']['output']>;
  PDFEmailAddress4?: Maybe<Scalars['String']['output']>;
  PDFEmails?: Maybe<Scalars['String']['output']>;
  ReasonForTimesheet?: Maybe<Scalars['String']['output']>;
  RelatedResources?: Maybe<Scalars['String']['output']>;
  SignDate?: Maybe<Scalars['LocalDate']['output']>;
  SignatureName?: Maybe<Scalars['String']['output']>;
  TimesheetCompletedDateTime?: Maybe<Scalars['Instant']['output']>;
  TimesheetStatus?: Maybe<Scalars['String']['output']>;
  TimesheetType?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
};

export type TimesheetConnection = {
  __typename?: 'TimesheetConnection';
  edges: Array<TimesheetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TimesheetEdge = {
  __typename?: 'TimesheetEdge';
  cursor: Scalars['Base64']['output'];
  node: Timesheet;
  offset: Scalars['Int']['output'];
};

export type TimesheetMaterial = {
  __typename?: 'TimesheetMaterial';
  AssetPartNumber?: Maybe<Scalars['String']['output']>;
  AssetType?: Maybe<Scalars['String']['output']>;
  CreatedDate: Scalars['Instant']['output'];
  Equipment?: Maybe<Scalars['String']['output']>;
  EquipmentQuantity?: Maybe<Scalars['BigDecimal']['output']>;
  MaterialType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  SkedTimesheet?: Maybe<Timesheet>;
  SkedTimesheetId?: Maybe<Scalars['ID']['output']>;
  UID: Scalars['ID']['output'];
};

export type TimesheetMaterialConnection = {
  __typename?: 'TimesheetMaterialConnection';
  edges: Array<TimesheetMaterialEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TimesheetMaterialEdge = {
  __typename?: 'TimesheetMaterialEdge';
  cursor: Scalars['Base64']['output'];
  node: TimesheetMaterial;
  offset: Scalars['Int']['output'];
};

export type TimesheetResource = {
  __typename?: 'TimesheetResource';
  CheckInAtJobLocationTime?: Maybe<Scalars['LocalTime']['output']>;
  CheckInAtJobSiteTime?: Maybe<Scalars['LocalTime']['output']>;
  CreatedDate: Scalars['Instant']['output'];
  DriveCompanyVehicleFromSite: Scalars['Boolean']['output'];
  DriveCompanyVehicleToSite: Scalars['Boolean']['output'];
  DriveTimeEnd?: Maybe<Scalars['LocalTime']['output']>;
  DriveTimeStart?: Maybe<Scalars['LocalTime']['output']>;
  Employee?: Maybe<Resources>;
  EmployeeID?: Maybe<Scalars['String']['output']>;
  EmployeeId?: Maybe<Scalars['ID']['output']>;
  EmployeeSignature: Scalars['Boolean']['output'];
  JobCompleteTime?: Maybe<Scalars['LocalTime']['output']>;
  JobStartTime?: Maybe<Scalars['LocalTime']['output']>;
  LeaveFromCompanyYard: Scalars['Boolean']['output'];
  MealPeriod1InTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod1OutTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod1Taken?: Maybe<Scalars['String']['output']>;
  MealPeriod1WhileDriving: Scalars['Boolean']['output'];
  MealPeriod2InTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod2OutTime?: Maybe<Scalars['LocalTime']['output']>;
  MealPeriod2Taken?: Maybe<Scalars['String']['output']>;
  MealPeriod2WhileDriving: Scalars['Boolean']['output'];
  Name?: Maybe<Scalars['String']['output']>;
  NoBreaksTakenReason?: Maybe<Scalars['String']['output']>;
  NoMealPeriod1Reason?: Maybe<Scalars['String']['output']>;
  NoMealPeriod2Reason?: Maybe<Scalars['String']['output']>;
  RestBreaksTaken: Scalars['Boolean']['output'];
  ReturnToCompanyYard: Scalars['Boolean']['output'];
  Status?: Maybe<Scalars['String']['output']>;
  Timesheet?: Maybe<Timesheet>;
  TimesheetId?: Maybe<Scalars['ID']['output']>;
  Truck?: Maybe<Scalars['String']['output']>;
  TruckEnd?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  WereYouTheDriverOfTheTruck: Scalars['Boolean']['output'];
};

export type TimesheetResourceConnection = {
  __typename?: 'TimesheetResourceConnection';
  edges: Array<TimesheetResourceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TimesheetResourceEdge = {
  __typename?: 'TimesheetResourceEdge';
  cursor: Scalars['Base64']['output'];
  node: TimesheetResource;
  offset: Scalars['Int']['output'];
};

export type UpdateAccountResourceScores = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Blacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Whitelisted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAccountTags = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateAccounts = {
  BATSAccountManagerId?: InputMaybe<Scalars['ID']['input']>;
  BillingCity?: InputMaybe<Scalars['String']['input']>;
  BillingPostalCode?: InputMaybe<Scalars['String']['input']>;
  BillingState?: InputMaybe<Scalars['String']['input']>;
  BillingStreet?: InputMaybe<Scalars['String']['input']>;
  Fax?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PGE?: InputMaybe<Scalars['Boolean']['input']>;
  Phone?: InputMaybe<Scalars['String']['input']>;
  Rank?: InputMaybe<Scalars['Int']['input']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']['input']>;
  ShippingCity?: InputMaybe<Scalars['String']['input']>;
  ShippingPostalCode?: InputMaybe<Scalars['String']['input']>;
  ShippingState?: InputMaybe<Scalars['String']['input']>;
  ShippingStreet?: InputMaybe<Scalars['String']['input']>;
  Status?: InputMaybe<Scalars['String']['input']>;
  TierLevel?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateActivities = {
  Address?: InputMaybe<Scalars['String']['input']>;
  CopiedFromId?: InputMaybe<Scalars['ID']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  JobAllocationId?: InputMaybe<Scalars['ID']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  TemplatedActivityId?: InputMaybe<Scalars['ID']['input']>;
  Timezone?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateActivityResources = {
  ActivityId?: InputMaybe<Scalars['ID']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateAttendees = {
  CancelReason?: InputMaybe<Scalars['String']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Status?: InputMaybe<Scalars['AttendeeStatus']['input']>;
  TimeCancelled?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateAvailabilities = {
  Finish?: InputMaybe<Scalars['Instant']['input']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  PaidTimeOffID?: InputMaybe<Scalars['String']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  Status?: InputMaybe<Scalars['AvailabilityStatus']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateAvailabilityPatternResources = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  Status?: InputMaybe<Scalars['AvailabilityStatus']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateAvailabilityPatterns = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Hash?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Pattern?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateAvailabilityTemplateEntries = {
  AvailabilityTemplateId?: InputMaybe<Scalars['ID']['input']>;
  FinishTime?: InputMaybe<Scalars['Int']['input']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  StartTime?: InputMaybe<Scalars['Int']['input']>;
  UID: Scalars['ID']['input'];
  Weekday?: InputMaybe<Scalars['Weekday']['input']>;
};

export type UpdateAvailabilityTemplateResources = {
  AvailabilityTemplateId?: InputMaybe<Scalars['ID']['input']>;
  Migrated?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateAvailabilityTemplates = {
  AvailabilityPatternId?: InputMaybe<Scalars['ID']['input']>;
  Finish?: InputMaybe<Scalars['LocalDate']['input']>;
  Global?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Start?: InputMaybe<Scalars['LocalDate']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateBreak = {
  End?: InputMaybe<Scalars['Instant']['input']>;
  JobAllocationId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateClientAvailabilities = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  IsAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  PreferredEnd?: InputMaybe<Scalars['Instant']['input']>;
  PreferredStart?: InputMaybe<Scalars['Instant']['input']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateContactTags = {
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateContacts = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  MailingCity?: InputMaybe<Scalars['String']['input']>;
  MailingPostalCode?: InputMaybe<Scalars['String']['input']>;
  MailingState?: InputMaybe<Scalars['String']['input']>;
  MailingStreet?: InputMaybe<Scalars['String']['input']>;
  MobilePhone?: InputMaybe<Scalars['String']['input']>;
  OtherCity?: InputMaybe<Scalars['String']['input']>;
  OtherPostalCode?: InputMaybe<Scalars['String']['input']>;
  OtherState?: InputMaybe<Scalars['String']['input']>;
  OtherStreet?: InputMaybe<Scalars['String']['input']>;
  Phone?: InputMaybe<Scalars['String']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateHolidayRegions = {
  HolidayId?: InputMaybe<Scalars['ID']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateHolidays = {
  EndDate?: InputMaybe<Scalars['LocalDate']['input']>;
  Global?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  StartDate?: InputMaybe<Scalars['LocalDate']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobAllocations = {
  APILog?: InputMaybe<Scalars['String']['input']>;
  ArriveAtYard?: InputMaybe<Scalars['Instant']['input']>;
  AssetID?: InputMaybe<Scalars['String']['input']>;
  AssignedToId?: InputMaybe<Scalars['ID']['input']>;
  CheckInToYard?: InputMaybe<Scalars['Instant']['input']>;
  CheckInYardWithBuffer?: InputMaybe<Scalars['Instant']['input']>;
  ConfirmedTimes?: InputMaybe<Scalars['Boolean']['input']>;
  DeclineDescription?: InputMaybe<Scalars['String']['input']>;
  DeclineReason?: InputMaybe<Scalars['String']['input']>;
  DeleteByScheduler?: InputMaybe<Scalars['Boolean']['input']>;
  DeletedByJobCancel?: InputMaybe<Scalars['Boolean']['input']>;
  DepartFromYard?: InputMaybe<Scalars['Instant']['input']>;
  Driver?: InputMaybe<Scalars['Boolean']['input']>;
  DrivingTruckId?: InputMaybe<Scalars['ID']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  EstimatedTravelDistance?: InputMaybe<Scalars['BigDecimal']['input']>;
  EstimatedTravelTime?: InputMaybe<Scalars['Duration']['input']>;
  GeoCheckedInLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoCheckedInLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoCompletedLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoCompletedLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoInProgressLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoInProgressLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoStartTravelLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoStartTravelLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  HasBreak?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  NotificationType?: InputMaybe<Scalars['String']['input']>;
  PhoneResponse?: InputMaybe<Scalars['String']['input']>;
  ReportToYard?: InputMaybe<Scalars['Instant']['input']>;
  ResourceApprovedCheckIn?: InputMaybe<Scalars['Instant']['input']>;
  ResourceApprovedCompleteTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  SplitDriveTime?: InputMaybe<Scalars['String']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  StartGeoLocationLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  StartGeoLocationLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  StartLocationAddress?: InputMaybe<Scalars['String']['input']>;
  StartLocationType?: InputMaybe<Scalars['String']['input']>;
  StatSheetCheckIn?: InputMaybe<Scalars['Instant']['input']>;
  StatSheetCompleteTime?: InputMaybe<Scalars['Instant']['input']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']['input']>;
  TakenAllMeals?: InputMaybe<Scalars['String']['input']>;
  TakenAllRestBreaks?: InputMaybe<Scalars['String']['input']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']['input']>;
  TimeCheckedIn?: InputMaybe<Scalars['Instant']['input']>;
  TimeCompleted?: InputMaybe<Scalars['Instant']['input']>;
  TimeInProgress?: InputMaybe<Scalars['Instant']['input']>;
  TimePublished?: InputMaybe<Scalars['Instant']['input']>;
  TimeResponded?: InputMaybe<Scalars['Instant']['input']>;
  TimeStartTravel?: InputMaybe<Scalars['Instant']['input']>;
  TravelDistance?: InputMaybe<Scalars['BigDecimal']['input']>;
  TravelTime?: InputMaybe<Scalars['Duration']['input']>;
  UID: Scalars['ID']['input'];
  WaiveSecondMeal?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  FromJobId?: InputMaybe<Scalars['ID']['input']>;
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobOffers = {
  CreatedByResource?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  Status?: InputMaybe<Scalars['OfferStatus']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobProducts = {
  JobId?: InputMaybe<Scalars['ID']['input']>;
  ProductId?: InputMaybe<Scalars['ID']['input']>;
  Qty?: InputMaybe<Scalars['BigDecimal']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobReportToYard = {
  IsPreviousDay?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ReportToYardTime?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobSafetyAnalysisForm = {
  ContractorName?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName1?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName2?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName3?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName4?: InputMaybe<Scalars['String']['input']>;
  CrewMemberName5?: InputMaybe<Scalars['String']['input']>;
  CrewMemberSignatures?: InputMaybe<Scalars['String']['input']>;
  CustomerJobNo?: InputMaybe<Scalars['String']['input']>;
  Date?: InputMaybe<Scalars['LocalDate']['input']>;
  DidBATsCrewAttendContractorSafety?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  LeadName?: InputMaybe<Scalars['String']['input']>;
  Location?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Question1?: InputMaybe<Scalars['String']['input']>;
  Question1Details?: InputMaybe<Scalars['String']['input']>;
  Question2?: InputMaybe<Scalars['String']['input']>;
  Question2Details?: InputMaybe<Scalars['String']['input']>;
  Question3?: InputMaybe<Scalars['String']['input']>;
  Question3Details?: InputMaybe<Scalars['String']['input']>;
  Question4?: InputMaybe<Scalars['String']['input']>;
  Question4Details?: InputMaybe<Scalars['String']['input']>;
  Question5?: InputMaybe<Scalars['String']['input']>;
  Question5Details?: InputMaybe<Scalars['String']['input']>;
  Question6?: InputMaybe<Scalars['String']['input']>;
  Question6Details?: InputMaybe<Scalars['String']['input']>;
  Question7?: InputMaybe<Scalars['String']['input']>;
  Question7Details?: InputMaybe<Scalars['String']['input']>;
  Question8?: InputMaybe<Scalars['String']['input']>;
  Question8Details?: InputMaybe<Scalars['String']['input']>;
  Question9?: InputMaybe<Scalars['String']['input']>;
  Question9Details?: InputMaybe<Scalars['String']['input']>;
  Question10?: InputMaybe<Scalars['String']['input']>;
  Question10Details?: InputMaybe<Scalars['String']['input']>;
  Question11?: InputMaybe<Scalars['String']['input']>;
  Question11Details?: InputMaybe<Scalars['String']['input']>;
  Question12?: InputMaybe<Scalars['String']['input']>;
  Question12Details?: InputMaybe<Scalars['String']['input']>;
  Question13?: InputMaybe<Scalars['String']['input']>;
  Question13Details?: InputMaybe<Scalars['String']['input']>;
  Question14?: InputMaybe<Scalars['String']['input']>;
  Question14Details?: InputMaybe<Scalars['String']['input']>;
  Question15?: InputMaybe<Scalars['String']['input']>;
  Question15Details?: InputMaybe<Scalars['String']['input']>;
  Question16?: InputMaybe<Scalars['String']['input']>;
  Question16Details?: InputMaybe<Scalars['String']['input']>;
  Question17?: InputMaybe<Scalars['String']['input']>;
  Question17Details?: InputMaybe<Scalars['String']['input']>;
  Question18?: InputMaybe<Scalars['String']['input']>;
  Question18Details?: InputMaybe<Scalars['String']['input']>;
  Question19?: InputMaybe<Scalars['String']['input']>;
  Question19Details?: InputMaybe<Scalars['String']['input']>;
  Question20?: InputMaybe<Scalars['String']['input']>;
  Question20Details?: InputMaybe<Scalars['String']['input']>;
  Reach80DegreesOrHigher?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
  WeatherConditions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateJobStatSheet = {
  BATSComments?: InputMaybe<Scalars['String']['input']>;
  ClientEmail?: InputMaybe<Scalars['String']['input']>;
  ContractorName?: InputMaybe<Scalars['String']['input']>;
  CrewSignatures?: InputMaybe<Scalars['String']['input']>;
  CustomerComments?: InputMaybe<Scalars['String']['input']>;
  CustomerName?: InputMaybe<Scalars['String']['input']>;
  DidTheBATsCrewAttendContractorSafe?: InputMaybe<Scalars['Boolean']['input']>;
  Direction?: InputMaybe<Scalars['String']['input']>;
  HaveUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  IsCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  IsSubmitted?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Lanes?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PGENaturalDisasterLocation?: InputMaybe<Scalars['String']['input']>;
  PGENaturalDisasterType?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobTags = {
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Seq?: InputMaybe<Scalars['Int']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobTimeConstraints = {
  EndBefore?: InputMaybe<Scalars['Instant']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  StartAfter?: InputMaybe<Scalars['Instant']['input']>;
  StartBefore?: InputMaybe<Scalars['Instant']['input']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobTypeSetting = {
  JobType?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  ResourceCategory?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobTypeTag = {
  JobTypeSettingId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateJobs = {
  AbortReason?: InputMaybe<Scalars['String']['input']>;
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  ActualEnd?: InputMaybe<Scalars['Instant']['input']>;
  ActualStart?: InputMaybe<Scalars['Instant']['input']>;
  Address?: InputMaybe<Scalars['String']['input']>;
  AdminCancellationTime?: InputMaybe<Scalars['Instant']['input']>;
  AdminCancelledById?: InputMaybe<Scalars['ID']['input']>;
  Alert?: InputMaybe<Scalars['String']['input']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  BATSStatusAtTimeOfCancellation?: InputMaybe<Scalars['String']['input']>;
  Branches?: InputMaybe<Scalars['String']['input']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']['input']>;
  CancellationExplanation?: InputMaybe<Scalars['String']['input']>;
  CancellationTimeStr?: InputMaybe<Scalars['String']['input']>;
  CertifiedPayroll?: InputMaybe<Scalars['Boolean']['input']>;
  ChargeForCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  City?: InputMaybe<Scalars['String']['input']>;
  CompletionNotes?: InputMaybe<Scalars['String']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  CopiedFromId?: InputMaybe<Scalars['ID']['input']>;
  CreatedBySales?: InputMaybe<Scalars['Boolean']['input']>;
  CrewSize?: InputMaybe<Scalars['BigDecimal']['input']>;
  CustomerCancellationTimeStr?: InputMaybe<Scalars['String']['input']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']['input']>;
  CustomerEmail?: InputMaybe<Scalars['String']['input']>;
  CustomerInitiatedCancellationById?: InputMaybe<Scalars['ID']['input']>;
  CustomerInitiatedCancellationTime?: InputMaybe<Scalars['Instant']['input']>;
  CustomerJobNo?: InputMaybe<Scalars['String']['input']>;
  CustomerPhone?: InputMaybe<Scalars['String']['input']>;
  CustomerRole?: InputMaybe<Scalars['String']['input']>;
  CustomerTierLevel?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  DispatcherCancellationReason?: InputMaybe<Scalars['String']['input']>;
  DispatcherFollowUp?: InputMaybe<Scalars['String']['input']>;
  DispatcherNotes?: InputMaybe<Scalars['String']['input']>;
  DispatcherReliefCrew?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  EmergencyJob?: InputMaybe<Scalars['Boolean']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  EquipmentSetUp?: InputMaybe<Scalars['Boolean']['input']>;
  EstimatedEnd?: InputMaybe<Scalars['Instant']['input']>;
  EstimatedStart?: InputMaybe<Scalars['Instant']['input']>;
  FirstJobInRecurring?: InputMaybe<Scalars['Boolean']['input']>;
  FollowUp?: InputMaybe<Scalars['String']['input']>;
  FollowupReason?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  ImmediateResponse?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestCancelledById?: InputMaybe<Scalars['ID']['input']>;
  InventoryRequestFilled?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestFilledById?: InputMaybe<Scalars['ID']['input']>;
  InventoryRequestFilledTime?: InputMaybe<Scalars['Instant']['input']>;
  InventoryRequested?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestedById?: InputMaybe<Scalars['ID']['input']>;
  InventoryRequestedCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  InventoryRequestedCancelledDateTime?: InputMaybe<Scalars['Instant']['input']>;
  InventoryRequestedTime?: InputMaybe<Scalars['Instant']['input']>;
  IsAssetUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']['input']>;
  IsJSAFormChanged?: InputMaybe<Scalars['Boolean']['input']>;
  IsJSAFormCreated?: InputMaybe<Scalars['Boolean']['input']>;
  IsSoftCancellation?: InputMaybe<Scalars['Boolean']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  JobStatus?: InputMaybe<Scalars['JobStatus']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Locked?: InputMaybe<Scalars['Boolean']['input']>;
  MaxAttendees?: InputMaybe<Scalars['Int']['input']>;
  MinAttendees?: InputMaybe<Scalars['Int']['input']>;
  MuteNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  NearestYardId?: InputMaybe<Scalars['ID']['input']>;
  NoCustomerOnsite?: InputMaybe<Scalars['Boolean']['input']>;
  NotesComments?: InputMaybe<Scalars['String']['input']>;
  NotifyBy?: InputMaybe<Scalars['Instant']['input']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']['input']>;
  NotifyTeamLeaderTime?: InputMaybe<Scalars['Instant']['input']>;
  OnsiteContactEmail?: InputMaybe<Scalars['String']['input']>;
  OnsiteContactId?: InputMaybe<Scalars['ID']['input']>;
  OnsiteContactPhone?: InputMaybe<Scalars['String']['input']>;
  OnsiteContactRole?: InputMaybe<Scalars['String']['input']>;
  OtherDocs?: InputMaybe<Scalars['Boolean']['input']>;
  OvernightStay?: InputMaybe<Scalars['Boolean']['input']>;
  PGEJob?: InputMaybe<Scalars['Boolean']['input']>;
  PGEJobType?: InputMaybe<Scalars['String']['input']>;
  PGEOfficeClerkName?: InputMaybe<Scalars['String']['input']>;
  PGEOfficeToBillId?: InputMaybe<Scalars['ID']['input']>;
  PM?: InputMaybe<Scalars['String']['input']>;
  PO?: InputMaybe<Scalars['String']['input']>;
  ParentId?: InputMaybe<Scalars['ID']['input']>;
  PrivatelyFunded?: InputMaybe<Scalars['Boolean']['input']>;
  ProjectId?: InputMaybe<Scalars['ID']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  RecurringScheduleId?: InputMaybe<Scalars['ID']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ReliefCrew?: InputMaybe<Scalars['String']['input']>;
  RequestApprovalStatus?: InputMaybe<Scalars['String']['input']>;
  RequiredTrucks?: InputMaybe<Scalars['BigDecimal']['input']>;
  ResourceCancelApprovedRejectedById?: InputMaybe<Scalars['ID']['input']>;
  ResourceCancellationApprovedTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceCancellationById?: InputMaybe<Scalars['ID']['input']>;
  ResourceCancellationRejectedTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceCancellationRequestStatus?: InputMaybe<Scalars['String']['input']>;
  ResourceCancellationRequestedById?: InputMaybe<Scalars['ID']['input']>;
  ResourceCancellationRequestedTime?: InputMaybe<Scalars['Instant']['input']>;
  ResourceCancellationTime?: InputMaybe<Scalars['Instant']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  SecondaryJobType?: InputMaybe<Scalars['String']['input']>;
  Sections?: InputMaybe<Scalars['String']['input']>;
  SendEmailNotificationToDispatched?: InputMaybe<Scalars['Boolean']['input']>;
  SitePicturesRequired?: InputMaybe<Scalars['Boolean']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  StatSheetSigningTime?: InputMaybe<Scalars['Instant']['input']>;
  StatSheetSubmittedTime?: InputMaybe<Scalars['Instant']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  TrafficPermitIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  TrafficPlanIncluded?: InputMaybe<Scalars['Boolean']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
  Urgency?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']['input']>;
  X2WayRadiosRequired?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateLocationResourceScores = {
  Blacklisted?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Whitelisted?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateLocations = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Address?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  RequiresWhitelist?: InputMaybe<Scalars['Boolean']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateProducts = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Family?: InputMaybe<Scalars['String']['input']>;
  IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  ProductCode?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateProject = {
  Name?: InputMaybe<Scalars['String']['input']>;
  ProjectCode?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateRecurringSchedules = {
  AckAllJobs?: InputMaybe<Scalars['Boolean']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Summary?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateRegions = {
  CountryCode?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  IsInactiveRegion?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Radius?: InputMaybe<Scalars['Int']['input']>;
  Timezone?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceCategorySetting = {
  DashboardGroup?: InputMaybe<Scalars['String']['input']>;
  DashboardOrder?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  RequireDriver?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceCategory?: InputMaybe<Scalars['String']['input']>;
  ShowOnDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceCategoryTag = {
  Name?: InputMaybe<Scalars['String']['input']>;
  ResourceCategorySettingId?: InputMaybe<Scalars['ID']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceJobOffers = {
  JobOfferId?: InputMaybe<Scalars['ID']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  Response?: InputMaybe<Scalars['OfferResponse']['input']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']['input']>;
  TimeNotified?: InputMaybe<Scalars['Instant']['input']>;
  TimeResponded?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceOverrideRegions = {
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ResourceOverrideId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceOverrides = {
  Description?: InputMaybe<Scalars['String']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  HomeAddress?: InputMaybe<Scalars['String']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceRegions = {
  End?: InputMaybe<Scalars['Instant']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  ResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateResourceRequirements = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  RelativeStart?: InputMaybe<Scalars['Duration']['input']>;
  ResourceCategory?: InputMaybe<Scalars['String']['input']>;
  ScheduledEnd?: InputMaybe<Scalars['Instant']['input']>;
  ScheduledStart?: InputMaybe<Scalars['Instant']['input']>;
  Status?: InputMaybe<Scalars['JobStatus']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceShiftBreaks = {
  End?: InputMaybe<Scalars['Instant']['input']>;
  ResourceShiftId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceShiftOffers = {
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  Response?: InputMaybe<Scalars['OfferResponse']['input']>;
  ShiftOfferId?: InputMaybe<Scalars['ID']['input']>;
  Status?: InputMaybe<Scalars['ResourceOfferStatus']['input']>;
  TimeNotified?: InputMaybe<Scalars['Instant']['input']>;
  TimeResponded?: InputMaybe<Scalars['Instant']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceShifts = {
  ActualEnd?: InputMaybe<Scalars['Instant']['input']>;
  ActualStart?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  ShiftId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceTags = {
  ExpiryDate?: InputMaybe<Scalars['Instant']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResourceUtilization = {
  ActualWorkedHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PossibleHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  StartOfMonth?: InputMaybe<Scalars['LocalDate']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateResources = {
  ADPEmployeeID?: InputMaybe<Scalars['String']['input']>;
  Alias?: InputMaybe<Scalars['String']['input']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  Category?: InputMaybe<Scalars['String']['input']>;
  CountryCode?: InputMaybe<Scalars['String']['input']>;
  DateOfHire?: InputMaybe<Scalars['LocalDate']['input']>;
  Email?: InputMaybe<Scalars['String']['input']>;
  EmploymentType?: InputMaybe<Scalars['String']['input']>;
  EquipmentType?: InputMaybe<Scalars['String']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  HomeAddress?: InputMaybe<Scalars['String']['input']>;
  IsActive?: InputMaybe<Scalars['Boolean']['input']>;
  MobilePhone?: InputMaybe<Scalars['String']['input']>;
  Model?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  NotificationType?: InputMaybe<Scalars['String']['input']>;
  PersonalPhone?: InputMaybe<Scalars['String']['input']>;
  PrimaryPhone?: InputMaybe<Scalars['String']['input']>;
  PrimaryRegionId?: InputMaybe<Scalars['ID']['input']>;
  Rating?: InputMaybe<Scalars['Int']['input']>;
  ResourceType?: InputMaybe<Scalars['String']['input']>;
  TruckId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  UserId?: InputMaybe<Scalars['ID']['input']>;
  WeeklyHours?: InputMaybe<Scalars['BigDecimal']['input']>;
  WorkingHourType?: InputMaybe<Scalars['WorkingHourType']['input']>;
};

export type UpdateScheduleTemplates = {
  DeletedById?: InputMaybe<Scalars['ID']['input']>;
  DeletedDate?: InputMaybe<Scalars['Instant']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  IsDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PeriodDays?: InputMaybe<Scalars['Int']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateShiftOfferShifts = {
  ShiftId?: InputMaybe<Scalars['ID']['input']>;
  ShiftOfferId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateShiftOffers = {
  Status?: InputMaybe<Scalars['OfferStatus']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  ShiftId?: InputMaybe<Scalars['ID']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateShifts = {
  CopiedFromId?: InputMaybe<Scalars['ID']['input']>;
  DisplayName?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  End?: InputMaybe<Scalars['Instant']['input']>;
  IsDraft?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  Start?: InputMaybe<Scalars['Instant']['input']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateSignature = {
  CompanyName?: InputMaybe<Scalars['String']['input']>;
  JobSafetyAnalysisFormId?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PrintName?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateSkeduloAdminSetting = {
  CheckInYardBeforeTime?: InputMaybe<Scalars['BigDecimal']['input']>;
  DefaultJobDurationMinutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  JobBufferMinutes?: InputMaybe<Scalars['BigDecimal']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  SalesforceDashboardUrl?: InputMaybe<Scalars['String']['input']>;
  TravelVelocityInKPH?: InputMaybe<Scalars['BigDecimal']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateSkeduloJobSafetyAnalysisSetting = {
  UID: Scalars['ID']['input'];
};

export type UpdateSkeduloRegionCityMapping = {
  City?: InputMaybe<Scalars['String']['input']>;
  CoverageBy?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Region?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTags = {
  Classification?: InputMaybe<Scalars['TagClassification']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedActivities = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  Timezone?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedActivityResources = {
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedActivityId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedAttendees = {
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedJobAllocations = {
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  NotificationType?: InputMaybe<Scalars['String']['input']>;
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  Status?: InputMaybe<Scalars['JobAllocationStatus']['input']>;
  TeamLeader?: InputMaybe<Scalars['Boolean']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedJobDependencies = {
  FromAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  FromTemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  ToAnchor?: InputMaybe<Scalars['JobDependencyAnchor']['input']>;
  ToAnchorMaxOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToAnchorMinOffsetMinutes?: InputMaybe<Scalars['Int']['input']>;
  ToTemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedJobProducts = {
  ProductId?: InputMaybe<Scalars['ID']['input']>;
  Qty?: InputMaybe<Scalars['BigDecimal']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedJobTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTemplatedJobTasks = {
  Completed?: InputMaybe<Scalars['Boolean']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Seq?: InputMaybe<Scalars['Int']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedJobTimeConstraints = {
  EndBeforeOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  EndBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  StartAfterOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartAfterTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  StartBeforeOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartBeforeTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  Type?: InputMaybe<Scalars['JobTimeConstraintType']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedJobs = {
  AccountId?: InputMaybe<Scalars['ID']['input']>;
  Address?: InputMaybe<Scalars['String']['input']>;
  AutoSchedule?: InputMaybe<Scalars['Boolean']['input']>;
  CanBeDeclined?: InputMaybe<Scalars['Boolean']['input']>;
  ContactId?: InputMaybe<Scalars['ID']['input']>;
  CustomerConfirmationStatus?: InputMaybe<Scalars['CustomerConfirmationStatus']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  GeoLatitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  GeoLongitude?: InputMaybe<Scalars['BigDecimal']['input']>;
  IsGroupEvent?: InputMaybe<Scalars['Boolean']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  Locked?: InputMaybe<Scalars['Boolean']['input']>;
  MaxAttendees?: InputMaybe<Scalars['Int']['input']>;
  MinAttendees?: InputMaybe<Scalars['Int']['input']>;
  NotesComments?: InputMaybe<Scalars['String']['input']>;
  NotifyPeriod?: InputMaybe<Scalars['Int']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
  Urgency?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingId?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingInfo?: InputMaybe<Scalars['String']['input']>;
  VirtualMeetingURL?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTemplatedResourceRequirementTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedResourceRequirementId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTemplatedResourceRequirements = {
  Description?: InputMaybe<Scalars['String']['input']>;
  JobAllocationTimeSource?: InputMaybe<Scalars['Boolean']['input']>;
  Quantity?: InputMaybe<Scalars['Int']['input']>;
  RelativeStart?: InputMaybe<Scalars['Duration']['input']>;
  TemplatedJobId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedResourceShifts = {
  ResourceId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTemplatedShiftTags = {
  Required?: InputMaybe<Scalars['Boolean']['input']>;
  TagId?: InputMaybe<Scalars['ID']['input']>;
  TemplatedShiftId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
  Weighting?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTemplatedShifts = {
  DisplayName?: InputMaybe<Scalars['String']['input']>;
  Duration?: InputMaybe<Scalars['Duration']['input']>;
  IsDraft?: InputMaybe<Scalars['Boolean']['input']>;
  LocationId?: InputMaybe<Scalars['ID']['input']>;
  RegionId?: InputMaybe<Scalars['ID']['input']>;
  ScheduleTemplateId?: InputMaybe<Scalars['ID']['input']>;
  StartOffsetDays?: InputMaybe<Scalars['Int']['input']>;
  StartTimeOfDay?: InputMaybe<Scalars['LocalTime']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTimesheet = {
  CustomerComments?: InputMaybe<Scalars['String']['input']>;
  CustomerId?: InputMaybe<Scalars['ID']['input']>;
  CustomerJobNumberPMNumber?: InputMaybe<Scalars['String']['input']>;
  CustomerNotAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  CustomerSignature?: InputMaybe<Scalars['Boolean']['input']>;
  DayOfTheWeek?: InputMaybe<Scalars['String']['input']>;
  JobAddress?: InputMaybe<Scalars['String']['input']>;
  JobDate?: InputMaybe<Scalars['LocalDate']['input']>;
  JobId?: InputMaybe<Scalars['ID']['input']>;
  JobType?: InputMaybe<Scalars['String']['input']>;
  LeadComments?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress2?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress3?: InputMaybe<Scalars['String']['input']>;
  PDFEmailAddress4?: InputMaybe<Scalars['String']['input']>;
  ReasonForTimesheet?: InputMaybe<Scalars['String']['input']>;
  RelatedResources?: InputMaybe<Scalars['String']['input']>;
  SignDate?: InputMaybe<Scalars['LocalDate']['input']>;
  SignatureName?: InputMaybe<Scalars['String']['input']>;
  TimesheetCompletedDateTime?: InputMaybe<Scalars['Instant']['input']>;
  TimesheetStatus?: InputMaybe<Scalars['String']['input']>;
  TimesheetType?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTimesheetMaterial = {
  AssetPartNumber?: InputMaybe<Scalars['String']['input']>;
  AssetType?: InputMaybe<Scalars['String']['input']>;
  Equipment?: InputMaybe<Scalars['String']['input']>;
  EquipmentQuantity?: InputMaybe<Scalars['BigDecimal']['input']>;
  MaterialType?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  SkedTimesheetId?: InputMaybe<Scalars['ID']['input']>;
  UID: Scalars['ID']['input'];
};

export type UpdateTimesheetResource = {
  CheckInAtJobLocationTime?: InputMaybe<Scalars['LocalTime']['input']>;
  CheckInAtJobSiteTime?: InputMaybe<Scalars['LocalTime']['input']>;
  DriveCompanyVehicleFromSite?: InputMaybe<Scalars['Boolean']['input']>;
  DriveCompanyVehicleToSite?: InputMaybe<Scalars['Boolean']['input']>;
  DriveTimeEnd?: InputMaybe<Scalars['LocalTime']['input']>;
  DriveTimeStart?: InputMaybe<Scalars['LocalTime']['input']>;
  EmployeeID?: InputMaybe<Scalars['String']['input']>;
  EmployeeId?: InputMaybe<Scalars['ID']['input']>;
  EmployeeSignature?: InputMaybe<Scalars['Boolean']['input']>;
  JobCompleteTime?: InputMaybe<Scalars['LocalTime']['input']>;
  JobStartTime?: InputMaybe<Scalars['LocalTime']['input']>;
  LeaveFromCompanyYard?: InputMaybe<Scalars['Boolean']['input']>;
  MealPeriod1InTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod1OutTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod1Taken?: InputMaybe<Scalars['String']['input']>;
  MealPeriod1WhileDriving?: InputMaybe<Scalars['Boolean']['input']>;
  MealPeriod2InTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod2OutTime?: InputMaybe<Scalars['LocalTime']['input']>;
  MealPeriod2Taken?: InputMaybe<Scalars['String']['input']>;
  MealPeriod2WhileDriving?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  NoBreaksTakenReason?: InputMaybe<Scalars['String']['input']>;
  NoMealPeriod1Reason?: InputMaybe<Scalars['String']['input']>;
  NoMealPeriod2Reason?: InputMaybe<Scalars['String']['input']>;
  RestBreaksTaken?: InputMaybe<Scalars['Boolean']['input']>;
  ReturnToCompanyYard?: InputMaybe<Scalars['Boolean']['input']>;
  Status?: InputMaybe<Scalars['String']['input']>;
  TimesheetId?: InputMaybe<Scalars['ID']['input']>;
  Truck?: InputMaybe<Scalars['String']['input']>;
  TruckEnd?: InputMaybe<Scalars['String']['input']>;
  UID: Scalars['ID']['input'];
  WereYouTheDriverOfTheTruck?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Users = {
  __typename?: 'Users';
  AdminCancelledBy: Array<Jobs>;
  BATSAccountManager: Array<Accounts>;
  City?: Maybe<Scalars['String']['output']>;
  Country?: Maybe<Scalars['String']['output']>;
  CreatedBy: Users;
  CreatedById: Scalars['ID']['output'];
  CreatedDate: Scalars['Instant']['output'];
  Email: Scalars['String']['output'];
  FirstName?: Maybe<Scalars['String']['output']>;
  FullPhotoUrl: Scalars['String']['output'];
  InventoryRequestCancelledBy: Array<Jobs>;
  InventoryRequestFilledBy: Array<Jobs>;
  InventoryRequestedBy: Array<Jobs>;
  IsActive: Scalars['Boolean']['output'];
  LastModifiedBy: Users;
  LastModifiedById: Scalars['ID']['output'];
  LastModifiedDate: Scalars['Instant']['output'];
  LastName: Scalars['String']['output'];
  MobilePhone?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  PostalCode?: Maybe<Scalars['String']['output']>;
  Resources: Array<Resources>;
  SkeduloSalesUser: Scalars['Boolean']['output'];
  SmallPhotoUrl: Scalars['String']['output'];
  State?: Maybe<Scalars['String']['output']>;
  Street?: Maybe<Scalars['String']['output']>;
  UID: Scalars['ID']['output'];
  UserTypes?: Maybe<Array<Scalars['String']['output']>>;
};


export type UsersAdminCancelledByArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type UsersBatsAccountManagerArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterAccounts']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseAccounts']['input']>;
};


export type UsersInventoryRequestCancelledByArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type UsersInventoryRequestFilledByArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type UsersInventoryRequestedByArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseJobs']['input']>;
};


export type UsersResourcesArgs = {
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']['input']>;
  orderBy?: InputMaybe<Scalars['EQLOrderByClauseResources']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor: Scalars['Base64']['output'];
  node: Users;
  offset: Scalars['Int']['output'];
};

export type JaQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterJobAllocations']['input']>;
}>;


export type JaQuery = { __typename?: 'Query', jobAllocations: { __typename?: 'JobAllocationsConnection', edges: Array<{ __typename?: 'JobAllocationsEdge', node: { __typename?: 'JobAllocations', UID: string, Name: string, JobId: string, ResourceId: string, TeamLeader: boolean, Status: any } }> } };

export type JobsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterJobs']['input']>;
}>;


export type JobsQuery = { __typename?: 'Query', jobs: { __typename?: 'JobsConnection', edges: Array<{ __typename?: 'JobsEdge', node: { __typename?: 'Jobs', UID: string, Name: string, Address?: string | null, Timezone: string, Type?: string | null, CustomerJobNo?: string | null, AccountId?: string | null, Start?: any | null, End?: any | null, PM?: string | null } }> } };

export type TimesheetRsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheetResource']['input']>;
}>;


export type TimesheetRsQuery = { __typename?: 'Query', timesheetResource: { __typename?: 'TimesheetResourceConnection', edges: Array<{ __typename?: 'TimesheetResourceEdge', node: { __typename?: 'TimesheetResource', UID: string, Name?: string | null, TimesheetId?: string | null, EmployeeId?: string | null } }> } };

export type TimesheetsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterTimesheet']['input']>;
  after?: InputMaybe<Scalars['Base64']['input']>;
}>;


export type TimesheetsQuery = { __typename?: 'Query', timesheet: { __typename?: 'TimesheetConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: any | null }, edges: Array<{ __typename?: 'TimesheetEdge', node: { __typename?: 'Timesheet', UID: string, Name?: string | null, TimesheetType?: string | null, TimesheetStatus?: string | null, ReasonForTimesheet?: string | null, JobId?: string | null, CustomerId?: string | null, DayOfTheWeek?: string | null, JobDate?: any | null, JobType?: string | null, JobAddress?: string | null, CreatedDate?: any | null, LastModifiedDate: any, CustomerJobNumberPMNumber?: string | null, LeadComments?: string | null, CustomerComments?: string | null, CustomerNotAvailable: boolean, CustomerSignature: boolean, SignatureName?: string | null, SignDate?: any | null, PDFEmailAddress?: string | null, PDFEmailAddress2?: string | null, PDFEmailAddress3?: string | null, PDFEmailAddress4?: string | null, CreatedBy?: string | null, CreatedById?: string | null, TimesheetCompletedDateTime?: any | null, RelatedResources?: string | null, Job?: { __typename?: 'Jobs', Name: string } | null } }> } };

export type ResourcesQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterResources']['input']>;
}>;


export type ResourcesQuery = { __typename?: 'Query', resources: { __typename?: 'ResourcesConnection', edges: Array<{ __typename?: 'ResourcesEdge', node: { __typename?: 'Resources', UID: string, Name: string, Category?: string | null, ADPEmployeeID?: string | null, PrimaryRegion: { __typename?: 'Regions', UID: string } } }> } };

export type TimesheetMaterialQueryVariables = Exact<{ [key: string]: never; }>;


export type TimesheetMaterialQuery = { __typename?: 'Query', timesheetMaterial: { __typename?: 'TimesheetMaterialConnection', edges: Array<{ __typename?: 'TimesheetMaterialEdge', node: { __typename?: 'TimesheetMaterial', UID: string, AssetPartNumber?: string | null, AssetType?: string | null, Equipment?: string | null, EquipmentQuantity?: any | null, MaterialType?: string | null, Name?: string | null, SkedTimesheetId?: string | null } }> } };

export type AccountsQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['EQLQueryFilterAccounts']['input']>;
}>;


export type AccountsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountsConnection', edges: Array<{ __typename?: 'AccountsEdge', node: { __typename?: 'Accounts', UID: string, Name: string } }> } };

export type UpdateTimesheetMutationVariables = Exact<{
  input: UpdateTimesheet;
}>;


export type UpdateTimesheetMutation = { __typename?: 'Mutation', schema: { __typename?: 'SchemaMutation', updateTimesheet: string } };


export const JaDocument = gql`
    query ja($filter: EQLQueryFilterJobAllocations) {
  jobAllocations(filter: $filter) {
    edges {
      node {
        UID
        Name
        JobId
        ResourceId
        TeamLeader
        Status
      }
    }
  }
}
    `;
export const JobsDocument = gql`
    query jobs($filter: EQLQueryFilterJobs) {
  jobs(filter: $filter) {
    edges {
      node {
        UID
        Name
        Address
        Timezone
        Type
        CustomerJobNo
        AccountId
        Start
        End
        PM
      }
    }
  }
}
    `;
export const TimesheetRsDocument = gql`
    query timesheetRS($filter: EQLQueryFilterTimesheetResource) {
  timesheetResource(filter: $filter) {
    edges {
      node {
        UID
        Name
        TimesheetId
        EmployeeId
      }
    }
  }
}
    `;
export const TimesheetsDocument = gql`
    query timesheets($filter: EQLQueryFilterTimesheet, $after: Base64) {
  timesheet(filter: $filter, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    totalCount
    edges {
      node {
        UID
        Name
        TimesheetType
        TimesheetStatus
        ReasonForTimesheet
        JobId
        CustomerId
        DayOfTheWeek
        JobDate
        JobType
        JobAddress
        CreatedDate
        LastModifiedDate
        CustomerJobNumberPMNumber
        LeadComments
        CustomerComments
        CustomerNotAvailable
        CustomerSignature
        SignatureName
        SignDate
        PDFEmailAddress
        PDFEmailAddress2
        PDFEmailAddress3
        PDFEmailAddress4
        CreatedBy
        CreatedById
        TimesheetType
        TimesheetCompletedDateTime
        Job {
          Name
        }
        RelatedResources
      }
    }
  }
}
    `;
export const ResourcesDocument = gql`
    query resources($filter: EQLQueryFilterResources) {
  resources(filter: $filter) {
    edges {
      node {
        UID
        Name
        Category
        ADPEmployeeID
        PrimaryRegion {
          UID
        }
      }
    }
  }
}
    `;
export const TimesheetMaterialDocument = gql`
    query TimesheetMaterial {
  timesheetMaterial(orderBy: "CreatedDate DESC") {
    edges {
      node {
        UID
        AssetPartNumber
        AssetType
        Equipment
        EquipmentQuantity
        MaterialType
        Name
        SkedTimesheetId
      }
    }
  }
}
    `;
export const AccountsDocument = gql`
    query accounts($filter: EQLQueryFilterAccounts) {
  accounts(filter: $filter) {
    edges {
      node {
        UID
        Name
      }
    }
  }
}
    `;
export const UpdateTimesheetDocument = gql`
    mutation updateTimesheet($input: UpdateTimesheet!) {
  schema {
    updateTimesheet(input: $input)
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const JaDocumentString = print(JaDocument);
const JobsDocumentString = print(JobsDocument);
const TimesheetRsDocumentString = print(TimesheetRsDocument);
const TimesheetsDocumentString = print(TimesheetsDocument);
const ResourcesDocumentString = print(ResourcesDocument);
const TimesheetMaterialDocumentString = print(TimesheetMaterialDocument);
const AccountsDocumentString = print(AccountsDocument);
const UpdateTimesheetDocumentString = print(UpdateTimesheetDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ja(variables?: JaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: JaQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<JaQuery>(JaDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ja', 'query');
    },
    jobs(variables?: JobsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: JobsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<JobsQuery>(JobsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'jobs', 'query');
    },
    timesheetRS(variables?: TimesheetRsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TimesheetRsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TimesheetRsQuery>(TimesheetRsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'timesheetRS', 'query');
    },
    timesheets(variables?: TimesheetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TimesheetsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TimesheetsQuery>(TimesheetsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'timesheets', 'query');
    },
    resources(variables?: ResourcesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: ResourcesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<ResourcesQuery>(ResourcesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'resources', 'query');
    },
    TimesheetMaterial(variables?: TimesheetMaterialQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: TimesheetMaterialQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<TimesheetMaterialQuery>(TimesheetMaterialDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TimesheetMaterial', 'query');
    },
    accounts(variables?: AccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AccountsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AccountsQuery>(AccountsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'accounts', 'query');
    },
    updateTimesheet(variables: UpdateTimesheetMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: UpdateTimesheetMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateTimesheetMutation>(UpdateTimesheetDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTimesheet', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;