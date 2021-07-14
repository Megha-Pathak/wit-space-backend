/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOpportunites = /* GraphQL */ `
  subscription OnCreateOpportunites {
    onCreateOpportunites {
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
export const onUpdateOpportunites = /* GraphQL */ `
  subscription OnUpdateOpportunites {
    onUpdateOpportunites {
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
export const onDeleteOpportunites = /* GraphQL */ `
  subscription OnDeleteOpportunites {
    onDeleteOpportunites {
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
export const onCreateDevCare = /* GraphQL */ `
  subscription OnCreateDevCare {
    onCreateDevCare {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDevCare = /* GraphQL */ `
  subscription OnUpdateDevCare {
    onUpdateDevCare {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDevCare = /* GraphQL */ `
  subscription OnDeleteDevCare {
    onDeleteDevCare {
      userId
      imageUrl
      userName
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIdeas = /* GraphQL */ `
  subscription OnCreateIdeas {
    onCreateIdeas {
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
export const onUpdateIdeas = /* GraphQL */ `
  subscription OnUpdateIdeas {
    onUpdateIdeas {
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
export const onDeleteIdeas = /* GraphQL */ `
  subscription OnDeleteIdeas {
    onDeleteIdeas {
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
export const onCreateProjects = /* GraphQL */ `
  subscription OnCreateProjects {
    onCreateProjects {
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
export const onUpdateProjects = /* GraphQL */ `
  subscription OnUpdateProjects {
    onUpdateProjects {
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
export const onDeleteProjects = /* GraphQL */ `
  subscription OnDeleteProjects {
    onDeleteProjects {
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
export const onCreateProjectFeedbacks = /* GraphQL */ `
  subscription OnCreateProjectFeedbacks {
    onCreateProjectFeedbacks {
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
export const onUpdateProjectFeedbacks = /* GraphQL */ `
  subscription OnUpdateProjectFeedbacks {
    onUpdateProjectFeedbacks {
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
export const onDeleteProjectFeedbacks = /* GraphQL */ `
  subscription OnDeleteProjectFeedbacks {
    onDeleteProjectFeedbacks {
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
export const onCreateIdeaComments = /* GraphQL */ `
  subscription OnCreateIdeaComments {
    onCreateIdeaComments {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const onUpdateIdeaComments = /* GraphQL */ `
  subscription OnUpdateIdeaComments {
    onUpdateIdeaComments {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const onDeleteIdeaComments = /* GraphQL */ `
  subscription OnDeleteIdeaComments {
    onDeleteIdeaComments {
      userId
      ideaComment
      userName
      createdAt
      ideaId
      updatedAt
    }
  }
`;
export const onCreateResources = /* GraphQL */ `
  subscription OnCreateResources {
    onCreateResources {
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
export const onUpdateResources = /* GraphQL */ `
  subscription OnUpdateResources {
    onUpdateResources {
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
export const onDeleteResources = /* GraphQL */ `
  subscription OnDeleteResources {
    onDeleteResources {
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
