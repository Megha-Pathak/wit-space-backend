/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOpportunites = /* GraphQL */ `
  query GetOpportunites($userId: ID!, $createdAt: AWSDateTime!) {
    getOpportunites(userId: $userId, createdAt: $createdAt) {
      userId
      opportunityUrl
      opportunityName
      userName
      createdAt
      opportunityType
      updatedAt
    }
  }
`;
export const listOpportunitess = /* GraphQL */ `
  query ListOpportunitess(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelOpportunitesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOpportunitess(
      userId: $userId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        opportunityUrl
        opportunityName
        userName
        createdAt
        opportunityType
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevCare = /* GraphQL */ `
  query GetDevCare($userId: ID!, $createdAt: AWSDateTime!) {
    getDevCare(userId: $userId, createdAt: $createdAt) {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const listDevCares = /* GraphQL */ `
  query ListDevCares(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelDevCareFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDevCares(
      userId: $userId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        imageUrl
        userName
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdeas = /* GraphQL */ `
  query GetIdeas($userId: ID!, $createdAt: AWSDateTime!) {
    getIdeas(userId: $userId, createdAt: $createdAt) {
      userId
      ideaTitle
      userName
      ideaDescription
      createdAt
      ideaId
      isAnoymous
      comments {
        items {
          userId
          ideaComment
          userName
          createdAt
          ideaId
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listIdeass = /* GraphQL */ `
  query ListIdeass(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelIdeasFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listIdeass(
      userId: $userId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        ideaTitle
        userName
        ideaDescription
        createdAt
        ideaId
        isAnoymous
        comments {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjects = /* GraphQL */ `
  query GetProjects($userId: ID!, $createdAt: AWSDateTime!) {
    getProjects(userId: $userId, createdAt: $createdAt) {
      userId
      projectsTitle
      projectsUrl
      userName
      description
      createdAt
      projectId
      feedbacks {
        items {
          userId
          projectFeedback
          userName
          createdAt
          projectId
          feedbackType
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listProjectss = /* GraphQL */ `
  query ListProjectss(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelProjectsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjectss(
      userId: $userId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        projectsTitle
        projectsUrl
        userName
        description
        createdAt
        projectId
        feedbacks {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectFeedbacks = /* GraphQL */ `
  query GetProjectFeedbacks($projectId: ID!, $createdAt: AWSDateTime!) {
    getProjectFeedbacks(projectId: $projectId, createdAt: $createdAt) {
      userId
      projectFeedback
      userName
      createdAt
      projectId
      feedbackType
      updatedAt
    }
  }
`;
export const listProjectFeedbackss = /* GraphQL */ `
  query ListProjectFeedbackss(
    $projectId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelProjectFeedbacksFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProjectFeedbackss(
      projectId: $projectId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        projectFeedback
        userName
        createdAt
        projectId
        feedbackType
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdeaComments = /* GraphQL */ `
  query GetIdeaComments($ideaId: ID!, $createdAt: AWSDateTime!) {
    getIdeaComments(ideaId: $ideaId, createdAt: $createdAt) {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const listIdeaCommentss = /* GraphQL */ `
  query ListIdeaCommentss(
    $ideaId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelIdeaCommentsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listIdeaCommentss(
      ideaId: $ideaId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        ideaComment
        userName
        createdAt
        ideaId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResources = /* GraphQL */ `
  query GetResources($resourceId: ID!, $createdAt: AWSDateTime!) {
    getResources(resourceId: $resourceId, createdAt: $createdAt) {
      userId
      resourceUrl
      userName
      resourceDescription
      createdAt
      resourceType
      resourceId
      updatedAt
    }
  }
`;
export const listResourcess = /* GraphQL */ `
  query ListResourcess(
    $resourceId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelResourcesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listResourcess(
      resourceId: $resourceId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        resourceUrl
        userName
        resourceDescription
        createdAt
        resourceType
        resourceId
        updatedAt
      }
      nextToken
    }
  }
`;
