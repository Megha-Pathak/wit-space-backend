/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOpportunites = /* GraphQL */ `
  mutation CreateOpportunites(
    $input: CreateOpportunitesInput!
    $condition: ModelOpportunitesConditionInput
  ) {
    createOpportunites(input: $input, condition: $condition) {
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
export const updateOpportunites = /* GraphQL */ `
  mutation UpdateOpportunites(
    $input: UpdateOpportunitesInput!
    $condition: ModelOpportunitesConditionInput
  ) {
    updateOpportunites(input: $input, condition: $condition) {
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
export const deleteOpportunites = /* GraphQL */ `
  mutation DeleteOpportunites(
    $input: DeleteOpportunitesInput!
    $condition: ModelOpportunitesConditionInput
  ) {
    deleteOpportunites(input: $input, condition: $condition) {
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
export const createDevCare = /* GraphQL */ `
  mutation CreateDevCare(
    $input: CreateDevCareInput!
    $condition: ModelDevCareConditionInput
  ) {
    createDevCare(input: $input, condition: $condition) {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateDevCare = /* GraphQL */ `
  mutation UpdateDevCare(
    $input: UpdateDevCareInput!
    $condition: ModelDevCareConditionInput
  ) {
    updateDevCare(input: $input, condition: $condition) {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevCare = /* GraphQL */ `
  mutation DeleteDevCare(
    $input: DeleteDevCareInput!
    $condition: ModelDevCareConditionInput
  ) {
    deleteDevCare(input: $input, condition: $condition) {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const createIdeas = /* GraphQL */ `
  mutation CreateIdeas(
    $input: CreateIdeasInput!
    $condition: ModelIdeasConditionInput
  ) {
    createIdeas(input: $input, condition: $condition) {
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
export const updateIdeas = /* GraphQL */ `
  mutation UpdateIdeas(
    $input: UpdateIdeasInput!
    $condition: ModelIdeasConditionInput
  ) {
    updateIdeas(input: $input, condition: $condition) {
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
export const deleteIdeas = /* GraphQL */ `
  mutation DeleteIdeas(
    $input: DeleteIdeasInput!
    $condition: ModelIdeasConditionInput
  ) {
    deleteIdeas(input: $input, condition: $condition) {
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
export const createProjects = /* GraphQL */ `
  mutation CreateProjects(
    $input: CreateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    createProjects(input: $input, condition: $condition) {
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
export const updateProjects = /* GraphQL */ `
  mutation UpdateProjects(
    $input: UpdateProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    updateProjects(input: $input, condition: $condition) {
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
export const deleteProjects = /* GraphQL */ `
  mutation DeleteProjects(
    $input: DeleteProjectsInput!
    $condition: ModelProjectsConditionInput
  ) {
    deleteProjects(input: $input, condition: $condition) {
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
export const createProjectFeedbacks = /* GraphQL */ `
  mutation CreateProjectFeedbacks(
    $input: CreateProjectFeedbacksInput!
    $condition: ModelProjectFeedbacksConditionInput
  ) {
    createProjectFeedbacks(input: $input, condition: $condition) {
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
export const updateProjectFeedbacks = /* GraphQL */ `
  mutation UpdateProjectFeedbacks(
    $input: UpdateProjectFeedbacksInput!
    $condition: ModelProjectFeedbacksConditionInput
  ) {
    updateProjectFeedbacks(input: $input, condition: $condition) {
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
export const deleteProjectFeedbacks = /* GraphQL */ `
  mutation DeleteProjectFeedbacks(
    $input: DeleteProjectFeedbacksInput!
    $condition: ModelProjectFeedbacksConditionInput
  ) {
    deleteProjectFeedbacks(input: $input, condition: $condition) {
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
export const createIdeaComments = /* GraphQL */ `
  mutation CreateIdeaComments(
    $input: CreateIdeaCommentsInput!
    $condition: ModelIdeaCommentsConditionInput
  ) {
    createIdeaComments(input: $input, condition: $condition) {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const updateIdeaComments = /* GraphQL */ `
  mutation UpdateIdeaComments(
    $input: UpdateIdeaCommentsInput!
    $condition: ModelIdeaCommentsConditionInput
  ) {
    updateIdeaComments(input: $input, condition: $condition) {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const deleteIdeaComments = /* GraphQL */ `
  mutation DeleteIdeaComments(
    $input: DeleteIdeaCommentsInput!
    $condition: ModelIdeaCommentsConditionInput
  ) {
    deleteIdeaComments(input: $input, condition: $condition) {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const createResources = /* GraphQL */ `
  mutation CreateResources(
    $input: CreateResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    createResources(input: $input, condition: $condition) {
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
export const updateResources = /* GraphQL */ `
  mutation UpdateResources(
    $input: UpdateResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    updateResources(input: $input, condition: $condition) {
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
export const deleteResources = /* GraphQL */ `
  mutation DeleteResources(
    $input: DeleteResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    deleteResources(input: $input, condition: $condition) {
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
